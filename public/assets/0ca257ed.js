var Se=Object.defineProperty,Re=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&oe(e,n,t[n]);if(U)for(var n of U(t))ae.call(t,n)&&oe(e,n,t[n]);return e},E=(e,t)=>Re(e,Ce(t));var A=(e,t)=>{var n={};for(var r in e)ie.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&U)for(var r of U(e))t.indexOf(r)<0&&ae.call(e,r)&&(n[r]=e[r]);return n};import{r as l,R as T,a as g,j as z,F as Le}from"./index.82c951e8.js";import"./0e23ae4a.js";import"./079e9649.js";import"./bc08dc6e.js";import"./a0a18359.js";import"./62f37cd1.js";import"./949d5e9e.js";import"./b848002f.js";import{LocalizationContext as Ee}from"./3c0798ac.js";import"./eb534036.js";import"./12cd6149.js";import{p as $e}from"./a5164085.js";import Ie from"./4332cc9a.js";function Ne(e){return(e instanceof Array?e:[e]).map(n=>JSON.stringify(n)).join("")}const K={};function Pe(e,t,n=!1){const r=Ne(e);if(K[r]){const i=K[r];if(n)return;if(i.error)throw i.error;if(i.response)return i.response;if(!n)throw i.promise}const o={promise:t().then(i=>o.response=i).catch(i=>o.error=i)};if(K[r]=o,!n)throw o.promise}const Ae=(e,t)=>Pe(e,t);function Te(){const e=l.exports.useContext(Ee);if(e==null)throw new Error("No Localization Context available");return e}function De(){return[Te().country]}function Fe(e,t){const[n,r]=Ae([e,t],async()=>{const o=await globalThis.fetch(e,t);return[await o.text(),o]});return{response:r,json:()=>$e(n),text:()=>n}}let S=typeof window!="undefined"?l.exports.useLayoutEffect:l.exports.useEffect;function ee(e){let t=l.exports.useRef(e);return S(()=>{t.current=e},[e]),t}function de(e,t){let[n,r]=l.exports.useState(e),o=ee(e);return S(()=>r(o.current),[o,r,...t]),n}function Q(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,o,i,a){return r.addEventListener(o,i,a),n.add(()=>r.removeEventListener(o,i,a))},requestAnimationFrame(...r){let o=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(o))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let o=setTimeout(...r);return n.add(()=>clearTimeout(o))},add(r){return e.push(r),()=>{let o=e.indexOf(r);if(o>=0){let[i]=e.splice(o,1);i()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()}};return n}function J(){let[e]=l.exports.useState(Q);return l.exports.useEffect(()=>()=>e.dispose(),[e]),e}let R=function(e){let t=ee(e);return T.useCallback((...n)=>t.current(...n),[t])},W={serverHandoffComplete:!1};function ke(){let[e,t]=l.exports.useState(W.serverHandoffComplete);return l.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),l.exports.useEffect(()=>{W.serverHandoffComplete===!1&&(W.serverHandoffComplete=!0)},[]),e}var se;let je=0;function le(){return++je}let B=(se=T.useId)!=null?se:function(){let e=ke(),[t,n]=T.useState(e?le:null);return S(()=>{t===null&&n(le())},[t]),t!=null?""+t:void 0};function Me(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ue(e,t,n){let r=ee(t);l.exports.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var He=(e=>(e[e.None=1]="None",e[e.IgnoreScrollbars=2]="IgnoreScrollbars",e))(He||{});function Ue(e,t,n=1){let r=l.exports.useRef(!1),o=R(i=>{if(r.current)return;r.current=!0,Me(()=>{r.current=!1});let a=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e),s=i.target;if(s.ownerDocument.documentElement.contains(s)){if((n&2)===2){let c=20,u=s.ownerDocument.documentElement;if(i.clientX>u.clientWidth-c||i.clientX<c||i.clientY>u.clientHeight-c||i.clientY<c)return}for(let c of a){if(c===null)continue;let u=c instanceof HTMLElement?c:c.current;if(u!=null&&u.contains(s))return}return t(i,s)}});ue("pointerdown",o),ue("mousedown",o)}function ce(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function qe(e,t){let[n,r]=l.exports.useState(()=>ce(e));return S(()=>{r(ce(e))},[e.type,e.as]),S(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let ze=Symbol();function M(...e){let t=l.exports.useRef(e);l.exports.useEffect(()=>{t.current=e},[e]);let n=R(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ze]))?void 0:n}function pe(e){return typeof window=="undefined"?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Qe(e){throw new Error("Unexpected object: "+e)}var $=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))($||{});function _e(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=r!=null?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(a=>!t.resolveDisabled(a));case 1:{let a=n.slice().reverse().findIndex((s,c,u)=>o!==-1&&u.length-c-1>=o?!1:!t.resolveDisabled(s));return a===-1?a:n.length-1-a}case 2:return n.findIndex((a,s)=>s<=o?!1:!t.resolveDisabled(a));case 3:{let a=n.slice().reverse().findIndex(s=>!t.resolveDisabled(s));return a===-1?a:n.length-1-a}case 4:return n.findIndex(a=>t.resolveId(a)===e.id);case 5:return null;default:Qe(e)}})();return i===-1?r:i}function I(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,I),r}var Y=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Y||{}),Be=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Be||{});function D({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:a}){let s=fe(t,e);if(i)return q(s,n,r,a);let c=o!=null?o:0;if(c&2){let u=s,{static:f=!1}=u,p=A(u,["static"]);if(f)return q(p,n,r,a)}if(c&1){let v=s,{unmount:f=!0}=v,p=A(v,["unmount"]);return I(f?0:1,{[0](){return null},[1](){return q(E(h({},p),{hidden:!0,style:{display:"none"}}),n,r,a)}})}return q(s,n,r,a)}function q(e,t={},n,r){let f=G(e,["unmount","static"]),{as:o=n,children:i,refName:a="ref"}=f,s=A(f,["as","children","refName"]),c=e.ref!==void 0?{[a]:e.ref}:{},u=typeof i=="function"?i(t):i;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let v={};if(o===l.exports.Fragment&&Object.keys(X(s)).length>0){if(!l.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return l.exports.cloneElement(u,Object.assign({},fe(u.props,X(G(s,["ref"]))),v,c))}return l.exports.createElement(o,Object.assign({},G(s,["ref"]),o!==l.exports.Fragment&&c,o!==l.exports.Fragment&&v),u)}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let a=n[r];for(let s of a){if(o.defaultPrevented)return;s(o,...i)}}});return t}function F(e){var t;return Object.assign(l.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function X(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function G(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Ke(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&We(n)?!1:r}function We(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function ve(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))xe(n,me(t,r),o);return n}function me(e,t){return e?e+"["+t+"]":t}function xe(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())xe(e,me(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):ve(n,t,e)}let Z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ge=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ge||{}),Ve=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ve||{}),Je=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Je||{});function Ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Z))}var be=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(be||{});function Xe(e,t=0){var n;return e===((n=pe(e))==null?void 0:n.body)?!1:I(t,{[0](){return e.matches(Z)},[1](){let r=e;for(;r!==null;){if(r.matches(Z))return!0;r=r.parentElement}return!1}})}function jt(e){e==null||e.focus({preventScroll:!0})}let Ze=["textarea","input"].join(",");function et(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ze))!=null?n:!1}function he(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let a=o.compareDocumentPosition(i);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Mt(e,t,n=!0){let r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?he(e):e:Ye(e),i=r.activeElement,a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(i))-1;if(t&4)return Math.max(0,o.indexOf(i))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},u=0,v=o.length,f;do{if(u>=v||u+v<=0)return 0;let p=s+u;if(t&16)p=(p+v)%v;else{if(p<0)return 3;if(p>=v)return 1}f=o[p],f==null||f.focus(c),u+=a}while(f!==r.activeElement);return t&6&&et(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}let tt="div";var ge=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ge||{});let rt=F(function(e,t){let i=e,{features:n=1}=i,r=A(i,["features"]),o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:h({position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},(n&4)===4&&(n&2)!==2&&{display:"none"})};return D({ourProps:o,theirProps:r,slot:{},defaultTag:tt,name:"Hidden"})}),te=l.exports.createContext(null);te.displayName="OpenClosedContext";var _=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_||{});function nt(){return l.exports.useContext(te)}function ot({value:e,children:t}){return T.createElement(te.Provider,{value:e},t)}var x=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(x||{}),it=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(it||{}),at=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(at||{}),st=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(st||{}),lt=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(lt||{});function V(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=he(t(e.options.slice()),i=>i.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return o===-1&&(o=null),{options:r,activeOptionIndex:o}}let ut={[1](e){return e.disabled||e.listboxState===1?e:E(h({},e),{activeOptionIndex:null,listboxState:1})},[0](e){if(e.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{value:n,mode:r,compare:o}=e.propsRef.current,i=e.options.findIndex(a=>{let s=a.dataRef.current.value;return I(r,{[1]:()=>n.some(c=>o(c,s)),[0]:()=>o(n,s)})});return i!==-1&&(t=i),E(h({},e),{listboxState:0,activeOptionIndex:t})},[2](e,t){return e.disabled===t.disabled?e:E(h({},e),{disabled:t.disabled})},[3](e,t){return e.orientation===t.orientation?e:E(h({},e),{orientation:t.orientation})},[4](e,t){var n;if(e.disabled||e.listboxState===1)return e;let r=V(e),o=_e(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return E(h(h({},e),r),{searchQuery:"",activeOptionIndex:o,activationTrigger:(n=t.trigger)!=null?n:1})},[5]:(e,t)=>{if(e.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(a=>{var s;return!a.dataRef.current.disabled&&((s=a.dataRef.current.textValue)==null?void 0:s.startsWith(r))}),i=o?e.options.indexOf(o):-1;return i===-1||i===e.activeOptionIndex?E(h({},e),{searchQuery:r}):E(h({},e),{searchQuery:r,activeOptionIndex:i,activationTrigger:1})},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:E(h({},e),{searchQuery:""})},[7]:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=V(e,o=>[...o,n]);if(e.activeOptionIndex===null){let{value:o,mode:i,compare:a}=e.propsRef.current,s=t.dataRef.current.value;I(i,{[1]:()=>o.some(c=>a(c,s)),[0]:()=>a(o,s)})&&(r.activeOptionIndex=r.options.indexOf(n))}return h(h({},e),r)},[8]:(e,t)=>{let n=V(e,r=>{let o=r.findIndex(i=>i.id===t.id);return o!==-1&&r.splice(o,1),r});return E(h(h({},e),n),{activationTrigger:1})}},re=l.exports.createContext(null);re.displayName="ListboxContext";function H(e){let t=l.exports.useContext(re);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function ct(e,t){return I(t.type,ut,e,t)}let dt=l.exports.Fragment,pt=F(function(e,t){let k=e,{value:n,name:r,onChange:o,disabled:i=!1,horizontal:a=!1,multiple:s=!1}=k,c=A(k,["value","name","onChange","disabled","horizontal","multiple"]);const u=a?"horizontal":"vertical";let v=M(t),f=l.exports.useReducer(ct,{listboxState:1,propsRef:{current:{value:n,onChange:o,mode:s?1:0,compare:R((L,O)=>L===O)}},labelRef:l.exports.createRef(),buttonRef:l.exports.createRef(),optionsRef:l.exports.createRef(),disabled:i,orientation:u,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:p,propsRef:C,optionsRef:w,buttonRef:b},d]=f;C.current.value=n,C.current.mode=s?1:0,S(()=>{C.current.onChange=L=>I(C.current.mode,{[0](){return o(L)},[1](){let O=C.current.value.slice(),y=O.indexOf(L);return y===-1?O.push(L):O.splice(y,1),o(O)}})},[o,C]),S(()=>d({type:2,disabled:i}),[i]),S(()=>d({type:3,orientation:u}),[u]),Ue([b,w],(L,O)=>{var y;p===0&&(d({type:1}),Xe(O,be.Loose)||(L.preventDefault(),(y=b.current)==null||y.focus()))});let m=l.exports.useMemo(()=>({open:p===0,disabled:i}),[p,i]),P={ref:v};return T.createElement(re.Provider,{value:f},T.createElement(ot,{value:I(p,{[0]:_.Open,[1]:_.Closed})},r!=null&&n!=null&&ve({[r]:n}).map(([L,O])=>T.createElement(rt,h({features:ge.Hidden},X({key:L,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:L,value:O})))),D({ourProps:P,theirProps:c,slot:m,defaultTag:dt,name:"Listbox"})))}),ft="button",vt=F(function(e,t){var n;let[r,o]=H("Listbox.Button"),i=M(r.buttonRef,t),a=`headlessui-listbox-button-${B()}`,s=J(),c=R(b=>{switch(b.key){case x.Space:case x.Enter:case x.ArrowDown:b.preventDefault(),o({type:0}),s.nextFrame(()=>{r.propsRef.current.value||o({type:4,focus:$.First})});break;case x.ArrowUp:b.preventDefault(),o({type:0}),s.nextFrame(()=>{r.propsRef.current.value||o({type:4,focus:$.Last})});break}}),u=R(b=>{switch(b.key){case x.Space:b.preventDefault();break}}),v=R(b=>{if(Ke(b.currentTarget))return b.preventDefault();r.listboxState===0?(o({type:1}),s.nextFrame(()=>{var d;return(d=r.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})})):(b.preventDefault(),o({type:0}))}),f=de(()=>{if(r.labelRef.current)return[r.labelRef.current.id,a].join(" ")},[r.labelRef.current,a]),p=l.exports.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled}),[r]),C=e,w={ref:i,id:a,type:qe(e,r.buttonRef),"aria-haspopup":!0,"aria-controls":(n=r.optionsRef.current)==null?void 0:n.id,"aria-expanded":r.disabled?void 0:r.listboxState===0,"aria-labelledby":f,disabled:r.disabled,onKeyDown:c,onKeyUp:u,onClick:v};return D({ourProps:w,theirProps:C,slot:p,defaultTag:ft,name:"Listbox.Button"})}),mt="label",xt=F(function(e,t){let[n]=H("Listbox.Label"),r=`headlessui-listbox-label-${B()}`,o=M(n.labelRef,t),i=R(()=>{var s;return(s=n.buttonRef.current)==null?void 0:s.focus({preventScroll:!0})}),a=l.exports.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled}),[n]);return D({ourProps:{ref:o,id:r,onClick:i},theirProps:e,slot:a,defaultTag:mt,name:"Listbox.Label"})}),bt="ul",ht=Y.RenderStrategy|Y.Static,gt=F(function(e,t){var n;let[r,o]=H("Listbox.Options"),i=M(r.optionsRef,t),a=`headlessui-listbox-options-${B()}`,s=J(),c=J(),u=nt(),v=(()=>u!==null?u===_.Open:r.listboxState===0)();l.exports.useEffect(()=>{var d;let m=r.optionsRef.current;!m||r.listboxState===0&&m!==((d=pe(m))==null?void 0:d.activeElement)&&m.focus({preventScroll:!0})},[r.listboxState,r.optionsRef]);let f=R(d=>{switch(c.dispose(),d.key){case x.Space:if(r.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),o({type:5,value:d.key});case x.Enter:if(d.preventDefault(),d.stopPropagation(),r.activeOptionIndex!==null){let{dataRef:m}=r.options[r.activeOptionIndex];r.propsRef.current.onChange(m.current.value)}r.propsRef.current.mode===0&&(o({type:1}),Q().nextFrame(()=>{var m;return(m=r.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case I(r.orientation,{vertical:x.ArrowDown,horizontal:x.ArrowRight}):return d.preventDefault(),d.stopPropagation(),o({type:4,focus:$.Next});case I(r.orientation,{vertical:x.ArrowUp,horizontal:x.ArrowLeft}):return d.preventDefault(),d.stopPropagation(),o({type:4,focus:$.Previous});case x.Home:case x.PageUp:return d.preventDefault(),d.stopPropagation(),o({type:4,focus:$.First});case x.End:case x.PageDown:return d.preventDefault(),d.stopPropagation(),o({type:4,focus:$.Last});case x.Escape:return d.preventDefault(),d.stopPropagation(),o({type:1}),s.nextFrame(()=>{var m;return(m=r.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case x.Tab:d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(o({type:5,value:d.key}),c.setTimeout(()=>o({type:6}),350));break}}),p=de(()=>{var d,m,P;return(P=(d=r.labelRef.current)==null?void 0:d.id)!=null?P:(m=r.buttonRef.current)==null?void 0:m.id},[r.labelRef.current,r.buttonRef.current]),C=l.exports.useMemo(()=>({open:r.listboxState===0}),[r]),w=e,b={"aria-activedescendant":r.activeOptionIndex===null||(n=r.options[r.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":r.propsRef.current.mode===1?!0:void 0,"aria-labelledby":p,"aria-orientation":r.orientation,id:a,onKeyDown:f,role:"listbox",tabIndex:0,ref:i};return D({ourProps:b,theirProps:w,slot:C,defaultTag:bt,features:ht,visible:v,name:"Listbox.Options"})}),yt="li",wt=F(function(e,t){let O=e,{disabled:n=!1,value:r}=O,o=A(O,["disabled","value"]),[i,a]=H("Listbox.Option"),s=`headlessui-listbox-option-${B()}`,c=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===s:!1,{value:u,compare:v}=i.propsRef.current,f=I(i.propsRef.current.mode,{[1]:()=>u.some(y=>v(y,r)),[0]:()=>v(u,r)}),p=l.exports.useRef(null),C=M(t,p);S(()=>{if(i.listboxState!==0||!c||i.activationTrigger===0)return;let y=Q();return y.requestAnimationFrame(()=>{var N,ne;(ne=(N=p.current)==null?void 0:N.scrollIntoView)==null||ne.call(N,{block:"nearest"})}),y.dispose},[p,c,i.listboxState,i.activationTrigger,i.activeOptionIndex]);let w=l.exports.useRef({disabled:n,value:r,domRef:p});S(()=>{w.current.disabled=n},[w,n]),S(()=>{w.current.value=r},[w,r]),S(()=>{var y,N;w.current.textValue=(N=(y=p.current)==null?void 0:y.textContent)==null?void 0:N.toLowerCase()},[w,p]);let b=R(()=>i.propsRef.current.onChange(r));S(()=>(a({type:7,id:s,dataRef:w}),()=>a({type:8,id:s})),[w,s]);let d=R(y=>{if(n)return y.preventDefault();b(),i.propsRef.current.mode===0&&(a({type:1}),Q().nextFrame(()=>{var N;return(N=i.buttonRef.current)==null?void 0:N.focus({preventScroll:!0})}))}),m=R(()=>{if(n)return a({type:4,focus:$.Nothing});a({type:4,focus:$.Specific,id:s})}),P=R(()=>{n||c||a({type:4,focus:$.Specific,id:s,trigger:0})}),k=R(()=>{n||!c||a({type:4,focus:$.Nothing})}),L=l.exports.useMemo(()=>({active:c,selected:f,disabled:n}),[c,f,n]);return D({ourProps:{id:s,ref:C,role:"option",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,"aria-selected":f===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:m,onPointerMove:P,onMouseMove:P,onPointerLeave:k,onMouseLeave:k},theirProps:o,slot:L,defaultTag:yt,name:"Listbox.Option"})}),j=Object.assign(pt,{Button:vt,Label:xt,Options:gt,Option:wt});function Ot(){const[e,t]=l.exports.useState(!1),[n]=De(),r=l.exports.useCallback(({isoCode:o,name:i})=>{fetch("/countries",{body:JSON.stringify({isoCode:o,name:i}),method:"POST"}).then(()=>{window.location.reload()})},[]);return g("div",{className:"hidden lg:block  lg:relative w-fit    top-0  z-30 ",children:g(j,{onChange:r,children:({open:o})=>(setTimeout(()=>t(o)),z(Le,{children:[z(j.Button,{className:"font-medium text-sm h-8 p-2 flex items-center text-black",children:[g("span",{className:"mr-4",children:n.name}),g(Oe,{isOpen:o})]}),g(j.Options,{className:"absolute z-10 mt-2",children:z("div",{className:"bg-white p-4 rounded-lg drop-shadow-2xl overflow-y-auto h-64",children:[g(j.Option,{disabled:!0,className:"p-2 text-md text-left font-medium uppercase",children:"Country"}),e&&g(l.exports.Suspense,{fallback:g("div",{className:"flex justify-center",children:g(Ie,{})}),children:g(ye,{selectedCountry:n,getClassName:i=>`w-36 py-2 px-3 flex justify-between items-center text-left cursor-pointerrounded ${i?"bg-gray-200":null}`})})]})})]}))})})}function ye({selectedCountry:e,getClassName:t}){return Fe("/countries").json().map(r=>{const o=r.isoCode===e.isoCode;return g(j.Option,{value:r,children:({active:i})=>z("div",{className:t(i),children:[r.name,o?g(we,{}):null]})},r.isoCode)})}function we(){return g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:g("path",{d:"M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",stroke:"#354CF6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Oe({isOpen:e}){return g("svg",{className:`transition-transform duration-300 ${e?"rotate-180":null}`,"aria-hidden":"true",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z",fill:"#374151"})})}var Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Ot,Countries:ye,CheckIcon:we,ArrowIcon:Oe},Symbol.toStringTag,{value:"Module"}));export{Oe as A,ye as C,jt as F,F as H,Ve as L,D as _,pe as a,ee as b,ke as c,Mt as d,ge as e,Me as f,De as g,rt as h,Ht as i,R as o,Ge as p,j as r,ue as s,S as t,I as u,M as y};
//# sourceMappingURL=0ca257ed.js.map
