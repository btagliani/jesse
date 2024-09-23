import time

import numpy as np

import jesse.helpers as jh
from jesse.enums import sides
from jesse.models import ClosedTrade, Order, Position
from jesse.models.utils import store_completed_trade_into_db
from jesse.services import logger


class ClosedTrades:
    def __init__(self) -> None:
        self.trades = []
        self.tempt_trades = {}

    def _get_current_trade(self, exchange: str, symbol: str) -> ClosedTrade:
        key = jh.key(exchange, symbol)
        # if already exists, return it
        if key in self.tempt_trades:
            t: ClosedTrade = self.tempt_trades[key]
            # set the trade.id if not generated already
            if not t.id:
                t.id = jh.generate_unique_id()
            return t
        # else, create a new trade, store it, and return it
        t = ClosedTrade()
        t.id = jh.generate_unique_id()
        self.tempt_trades[key] = t
        return t

    def _reset_current_trade(self, exchange: str, symbol: str) -> None:
        key = jh.key(exchange, symbol)
        self.tempt_trades[key] = ClosedTrade()

    def add_executed_order(self, executed_order: Order) -> None:
        t = self._get_current_trade(executed_order.exchange, executed_order.symbol)
        if executed_order.is_partially_filled:
            qty = executed_order.filled_qty
        else:
            qty = executed_order.qty
            executed_order.trade_id = t.id
            t.orders.append(executed_order)

        self.add_order_record_only(
            executed_order.exchange, executed_order.symbol, executed_order.side,
            qty, executed_order.price
        )

    def add_order_record_only(self, exchange: str, symbol: str, side: str, qty: float, price: float) -> None:
        """
        used in add_executed_order() and for when initially adding open positions in live mode.
        used for correct trade-metrics calculations in persistency support for live mode.
        """
        t = self._get_current_trade(exchange, symbol)
        if side == sides.BUY:
            t.buy_orders.append(np.array([abs(qty), price]))
        elif side == sides.SELL:
            t.sell_orders.append(np.array([abs(qty), price]))
        else:
            raise Exception(f"Invalid order side: {side}")

    def open_trade(self, position: Position) -> None:
        t = self._get_current_trade(position.exchange_name, position.symbol)
        t.opened_at = position.opened_at
        t.leverage = position.leverage
        try:
            t.timeframe = position.strategy.timeframe
            t.strategy_name = position.strategy.name
        except AttributeError:
            if not jh.is_unit_testing():
                raise
            t.timeframe = None
            t.strategy_name = None
        t.exchange = position.exchange_name
        t.symbol = position.symbol
        t.type = position.type

    def close_trade(self, position: Position, max_retries=3, retry_delay=1) -> None:
        t = self._get_current_trade(position.exchange_name, position.symbol)

        for attempt in range(max_retries):
            try:
                if not t.is_open:
                    raise ValueError(
                        "Unable to close a trade that is not yet open. Retrying..."
                    )

                t.closed_at = position.closed_at
                try:
                    position.strategy.trades_count += 1
                except AttributeError:
                    if not jh.is_unit_testing():
                        raise

                if jh.is_livetrading():
                    store_completed_trade_into_db(t)
                # store the trade into the list
                self.trades.append(t)
                if not jh.is_unit_testing():
                    logger.info(
                        f"CLOSED a {t.type} trade for {t.exchange}-{t.symbol}: qty: {t.qty}, entry_price: {round(t.entry_price, 2)}, exit_price: {round(t.exit_price, 2)}, PNL: {round(t.pnl, 2)} ({round(t.pnl_percentage, 2)}%)"
                    )
                # at the end, reset the trade variable
                self._reset_current_trade(position.exchange_name, position.symbol)

                return

            except ValueError as e:
                logger.error(f"Attempt {attempt + 1}/{max_retries} failed: {str(e)}")
                if attempt < max_retries - 1:
                    time.sleep(retry_delay)
                else:
                    logger.error("Max retries reached. Unable to close trade.")
                    raise ValueError(
                        "Unable to close a trade that is not yet open. If you're getting this in the live mode, it is likely due"
                        " to an unstable connection to the exchange, either on your side or the exchange's side. Please submit a"
                        " report using the report button so that Jesse's support team can investigate the issue."
                    )

    @property
    def count(self) -> int:
        return len(self.trades)
