import{h as N,i as F,r as _,o as i,c as d,b as u,F as D,j as J,k as W,d as a,w as S,t as L,n as z,l as o,m as G,v as H,q as K,U as C,f as Q,D as X,s as Y,y as k,G as Z,z as ee,A as te,J as v,P as h,K as B,H as I,e as se,L as w,N as oe,O as re,Q as ne,V as ae,T as le}from"./DbTgESvQ.js";import{r as ie}from"./CaMo12fb.js";import{_ as ue,a as de,b as ce,c as me}from"./BkF6Vqx3.js";import{_ as pe}from"./CoLc1c7O.js";import{u as ge}from"./C-G9LxTU.js";const fe={class:"mb-4"},be={class:"hidden sm:block"},ye={class:"relative rounded-lg shadow flex divide-x divide-gray-200 dark:divide-gray-700","aria-label":"props.Tabs"},ve=["onMouseup"],he=["data-cy","onClick"],_e={class:"absolute right-[1em] focus:outline-none"},ke=u("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),xe=N({__name:"CandleTabs",props:{tabs:{}},emits:["close"],setup(x,{emit:l}){const c=F(),p=_(c.params.id),g=l,f=x;function b(s){if(s.results.exception.error&&s.results.executing)return"Error";let r="";return s.form.exchange&&(r+=`${s.form.exchange} • `),s.form.symbol&&(r+=`${s.form.symbol.toUpperCase()} • `),s.form.start_date&&(r+=`${s.form.start_date}`),r=r.endsWith(" • ")?r.slice(0,-3):r,s.results.executing?`${r} | ${s.results.progressbar.current}%`:r}return(s,r)=>{const y=Q;return i(),d("div",fe,[u("div",be,[u("nav",ye,[(i(!0),d(D,null,J(f.tabs,(m,M,T)=>(i(),d("div",{key:m.id,class:"relative group min-w-0 flex-1 overflow-hidden text-center flex items-center",onMouseup:W(V=>g("close",m.id),["middle"])},[a(y,{to:`/candles/${m.id}`,class:z([m.id===o(p)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"])},{default:S(()=>[u("span",null,L(b(m)),1),u("span",{"aria-hidden":"true",class:z([m.id===o(p)&&Object.keys(f.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)]),_:2},1032,["to","class"]),G(u("button",{"data-cy":"tab-close-button"+T,class:"absolute right-[1em] focus:outline-none",onClick:V=>g("close",m.id)},[a(o(K),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,he),[[H,Object.keys(f.tabs).length>1]])],40,ve))),128)),u("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center",onClick:r[0]||(r[0]=m=>o(C)().addTab())},[u("button",_e,[a(o(ie),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),ke])])])])}}}),$e={key:0,class:"flex flex-col items-center justify-center select-none mt-[10%]"},we=["textContent"],Se={class:"mt-8"},Ce={key:1,class:"mx-auto container mt-8"},Te={key:0,class:"mb-8"},Ve={key:1,class:"pb-4"},Ee={key:0},Re={key:0},Ne={key:1},Me=N({__name:"CandlesTab",props:{form:{},results:{}},setup(x){const l=x,c=_([]),p=_(""),g=C(),f=X(),b=Y(),s=_([]);async function r(){s.value=await f.getExchangeSupportedSymbols(l.form.exchange),s.value.includes(l.form.symbol)||(l.form.symbol=s.value[0])}const y=_(!1),m=k(()=>f.backtestingExchangeNames);l.form.exchange=l.form.exchange||m.value[0];const M=k(()=>Z.remainingTimeText(l.results.progressbar.estimated_remaining_seconds)),T=e=>{U()&&g.start(e)},V=e=>{U()&&g.startInNewTab(e)};function U(){const e={mustContainDashErrorMessage:'Symbol parameter must contain "-" character!',emptySymbolErrorMessage:"Symbol parameter cannot be empty"};return l.form.exchange?l.form.symbol?l.form.symbol.includes("-")?l.form.start_date?!0:(w("error","Start date parameter cannot be empty"),!1):(w("error",e.mustContainDashErrorMessage),!1):(w("error",e.emptySymbolErrorMessage),!1):(w("error","Exchange parameter cannot be empty"),!1)}return ee(()=>p.value,e=>{if(e.length==0){c.value=[];return}const t=[];for(const $ of s.value){if(t.length>50)break;$.toLowerCase().startsWith(e.toLowerCase())&&t.push($)}c.value=t}),te(()=>{setTimeout(()=>{r()},100)}),(e,t)=>{const $=ue,E=oe,O=de,q=ce,R=re,j=pe,P=ne,A=me;return!e.form.debug_mode&&e.results.executing&&!e.results.showResults?(i(),d("div",$e,[u("div",null,[a($,{progress:e.results.progressbar.current},null,8,["progress"])]),e.results.exception.error?v("",!0):(i(),d("h3",{key:0,class:"mt-8 animate-pulse",textContent:L(o(M))},null,8,we)),u("div",Se,[a(E,{color:"gray",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},class:"w-64 flex justify-center",icon:"i-heroicons-no-symbol",size:"xl",variant:"solid",label:"Cancel",trailing:!1,onClick:t[0]||(t[0]=n=>o(g).cancel((e._.provides[h]||e.$route).params.id))})]),e.results.exception.error&&e.results.executing?(i(),d("div",Ce,[a(O,{modelValue:o(y),"onUpdate:modelValue":t[1]||(t[1]=n=>B(y)?y.value=n:null),title:e.results.exception.error,content:e.results.exception.traceback,mode:"candles"},null,8,["modelValue","title","content"])])):v("",!0)])):(i(),I(A,{key:1},{left:S(()=>[e.results.alert.message?(i(),d("div",Te,[a(q,{color:"teal",icon:"i-heroicons-check-circle",variant:"soft",title:e.results.alert.message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:t[2]||(t[2]=n=>e.results.alert.message="")},null,8,["title"])])):v("",!0),!e.results.executing&&!e.results.showResults?(i(),d("div",Ve,[a(R,{title:"Exchange"}),a(j,{modelValue:e.form.exchange,"onUpdate:modelValue":t[3]||(t[3]=n=>e.form.exchange=n),searchable:"",placeholder:"Select an exchange...",options:o(m),size:"lg",class:"mt-2",onChange:r},null,8,["modelValue","options"]),a(R,{title:"Symbol",class:"mt-16"}),a(j,{modelValue:e.form.symbol,"onUpdate:modelValue":t[4]||(t[4]=n=>e.form.symbol=n),query:o(p),"onUpdate:query":t[5]||(t[5]=n=>B(p)?p.value=n:null),"clear-search-on-close":"",class:"mt-2",searchable:"",size:"lg",options:o(c),placeholder:"Select a symbol...",onChange:t[6]||(t[6]=n=>p.value="")},{empty:S(()=>[se("Start typing...")]),_:1},8,["modelValue","query","options"]),a(R,{title:"Start Date",class:"mt-16"}),a(P,{modelValue:e.form.start_date,"onUpdate:modelValue":t[7]||(t[7]=n=>e.form.start_date=n),type:"date",size:"lg",class:"mt-2"},null,8,["modelValue"])])):v("",!0)]),right:S(()=>[e.results.executing?v("",!0):(i(),d("div",Ee,[e.results.showResults?(i(),d("div",Re,[u("button",{class:"font-medium select-none items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-white bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-300 focus:outline-none dark:text-black text-base tracking-wide text-center block w-full mb-4",onClick:t[8]||(t[8]=n=>o(b).rerun((e._.provides[h]||e.$route).params.id))}," Rerun "),u("button",{class:"btn-secondary text-center block w-full mb-4",onClick:t[9]||(t[9]=n=>o(b).newBacktest((e._.provides[h]||e.$route).params.id))}," New backtest ")])):(i(),d("div",Ne,[a(E,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:t[10]||(t[10]=n=>T((e._.provides[h]||e.$route).params.id))}),a(E,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-plus",size:"xl",variant:"solid",label:"Start in a new tab",trailing:!1,onClick:t[11]||(t[11]=n=>V((e._.provides[h]||e.$route).params.id))})]))]))]),_:1}))}}}),Ue={class:"w-full"},Ie=N({__name:"[id]",setup(x){ge({title:"Candles - Jesse"});const l=C(),c=k(()=>l.tabs),p=ae(),g=k(()=>p.params.id),f=k(()=>{if(!c.value[g.value]){const b=Object.keys(c.value);if(b.length>0){const s=c.value[b[0]];return le().push(`/candles/${s.id}`),s}else C().addTab()}return c.value[g.value]});return(b,s)=>{const r=xe,y=Me;return i(),d(D,null,[u("div",Ue,[a(r,{"page-id":o(g),tabs:o(c),onClose:o(l).closeTab},null,8,["page-id","tabs","onClose"])]),o(f)?(i(),I(y,{key:0,form:o(f).form,results:o(f).results},null,8,["form","results"])):v("",!0)],64)}}});export{Ie as default};