var L=Object.defineProperty,V=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))v.call(e,r)&&y(t,r,e[r]);if(h)for(var r of h(e))I.call(e,r)&&y(t,r,e[r]);return t},u=(t,e)=>V(t,D(e));var w=(t,e)=>{var r={};for(var o in t)v.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&h)for(var o of h(t))e.indexOf(o)<0&&I.call(t,o)&&(r[o]=t[o]);return r};import"./0e23ae4a.js";import{r as E,R as p,j as g,a as d}from"./index.82c951e8.js";import{u as M,I as b}from"./71316191.js";import{ModelViewer as O}from"./08cf8558.js";import"./079e9649.js";import"./bc08dc6e.js";import"./a0a18359.js";import"./62f37cd1.js";import"./949d5e9e.js";import{u as S}from"./7f29416b.js";import"./b848002f.js";import"./3c0798ac.js";import"./eb534036.js";import"./12cd6149.js";import{a as j,b as _}from"./378fb5d1.js";import"./7e2b3593.js";import"./acc1a395.js";import"./d510479e.js";import"./68abae6d.js";import"./9d1b6292.js";import"./6106a1d6.js";import"./c522ed9a.js";import"./af829185.js";function k(t,e){if(e==null)return t;const r=Object.keys(e).reduce((o,i)=>{const n=e[i];return n==null?o:o+`&${i}=${n}`},"");return`${t}?${r}`}function P(t,e){return E.exports.useMemo(()=>e?k(t,e):t,[t,e])}function C(t){var e;const a=t,{data:r,options:o,id:i=r.id,playsInline:n=!0,controls:m=!0}=a,f=w(a,["data","options","id","playsInline","controls"]),l=M((e=r.previewImage)===null||e===void 0?void 0:e.url,o);if(!r.sources)throw new Error("<Video/> requires a 'data.sources' array");return p.createElement("video",u(s({},f),{id:i,playsInline:n,controls:m,poster:l}),r.sources.map(c=>{if(!((c==null?void 0:c.url)&&(c==null?void 0:c.mimeType)))throw new Error("<Video/> needs 'source.url' and 'source.mimeType'");return p.createElement("source",{key:c.url,src:c.url,type:c.mimeType})}))}function U(t){const a=t,{data:e,options:r,id:o=e.id,frameBorder:i="0",allow:n="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:m=!0}=a,f=w(a,["data","options","id","frameBorder","allow","allowFullScreen"]);if(!e.embedUrl)throw new Error("<ExternalVideo/> requires the 'embedUrl' property");const l=P(e.embedUrl,r);return p.createElement("iframe",u(s({},f),{id:o!=null?o:e.embedUrl,frameBorder:i,allow:n,allowFullScreen:m,src:l}))}function N(o){var i=o,{data:t,options:e}=i,r=w(i,["data","options"]);switch(t.mediaContentType){case"IMAGE":{const n=t.image;return n?p.createElement(b,u(s({},r),{data:n,options:e})):(console.warn(`No "image" property was found on the "data" prop for <MediaFile/>, for the "type='image'"`),null)}case"VIDEO":return p.createElement(C,u(s({},r),{data:t,options:e}));case"EXTERNAL_VIDEO":return p.createElement(U,u(s({},r),{data:t,options:e}));case"MODEL_3D":return p.createElement(O,u(s({},r),{data:t}));default:return null}}function me(){var f;const{media:t,selectedVariant:e}=S(),[r,o]=E.exports.useState(0);E.exports.useState(0);const i=e.image||((f=t[0])==null?void 0:f.image),n=i==null?void 0:i.url.split("?")[0],m=t.filter(l=>l.mediaContentType===T||l.mediaContentType===A||l.mediaContentType===W?!0:!l.image.url.includes(n));return t.length?(E.exports.useEffect(()=>{let l=document.getElementById("imgScroll");l.scrollLeft=l.clientWidth*r-1,l.addEventListener("scroll",()=>{l.scrollLeft%l.clientWidth==0&&Math.floor(l.scrollLeft/l.clientWidth)!=r&&o(Math.floor(l.scrollLeft/l.clientWidth))})},[r]),g("div",{className:"relative flex-col w-full h-fit ",children:[g("div",{className:"relative w-fit h-fit",children:[(()=>{if(r!=m.length)return d("button",{onClick:()=>{let l=document.getElementById("imgScroll");l.scrollLeft+=l.clientWidth,o(r+1)},className:"absolute z-20 p-1 -ml-2 -translate-x-full bg-white rounded-full md:hidden left-full top-1/2 ",children:d(j,{className:"w-6 h-6 mx-auto fill-c1"})})})(),(()=>{if(r!=0)return d("button",{onClick:()=>{let l=document.getElementById("imgScroll");l.scrollLeft-=l.clientWidth,o(r-1)},className:"absolute left-0 z-20 p-1 ml-2 bg-white rounded-full md:hidden top-1/2",children:d(_,{className:"w-6 h-6 fill-c1"})})})(),g("div",{id:"imgScroll",className:"md:gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar  scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start relative",tabIndex:"-1",children:[d(b,{fetchpriority:"high",data:e.image,className:"w-[100vw] md:w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2  md:rounded-lg"}),m.map(l=>{let a={};return l.mediaContentType===T&&(a=R),d(N,s({tabIndex:"0",className:"w-[100vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start  flex-shrink-0 md:rounded-lg",data:l,fetchpriority:"low",options:{height:"485",crop:"center"}},a),l.id||l.image.id)})]})]}),d("div",{className:"w-full pl-2 overflow-x-scroll no-scrollbar md:hidden",children:g("div",{className:"flex flex-row mt-2 w-fit",children:[d("button",{onClick:()=>o(0),className:"w-20 h-20 mr-3",children:(()=>{let l="";return r==0&&(l="border-4"),d(b,{fetchpriority:"high",data:e.image,className:"w-20 h-20 md:w-auto rounded-3xl  md:h-auto object-cover object-center transition-all snap-start border-c1 flex-shrink-0  "+l})})()}),m.map((l,a)=>{let c={},x="";return r==a+1&&(x="border-4"),d("button",{onClick:()=>o(a+1),className:"w-20 h-20 mr-3 ",children:d(N,s({tabIndex:"0",className:"w-20 h-20 md:w-auto rounded-3xl  md:h-auto object-cover object-center transition-all snap-start border-c1 flex-shrink-0   "+x,data:l,fetchpriority:"low",options:{height:"485",crop:"center"}},c))},l.id||l.image.id)})]})})]})):null}const T="MODEL_3D",R={interactionPromptThreshold:"0"},A="VIDEO",W="EXTERNAL_VIDEO";export{me as default};
//# sourceMappingURL=e9ff33bf.js.map
