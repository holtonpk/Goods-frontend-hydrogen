var c=Object.defineProperty;var m=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,r=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(e,o,t[o]);if(m)for(var o of m(t))p.call(t,o)&&i(e,o,t[o]);return e};import{r as l,R as a}from"./index.82c951e8.js";import"./079e9649.js";import{c as u}from"./bc08dc6e.js";import{DefaultPageSeo as f}from"./01253a0c.js";import{HomePageSeo as s}from"./24cc2abe.js";import{ProductSeo as d}from"./2cc6d44f.js";import{CollectionSeo as S}from"./2ea29098.js";import{PageSeo as g}from"./ce67cb14.js";import"./7e2b3593.js";import"./acc1a395.js";import"./68abae6d.js";import"./92966185.js";import"./0e23ae4a.js";import"./d510479e.js";import"./a0a18359.js";import"./62f37cd1.js";import"./c522ed9a.js";import"./949d5e9e.js";import"./b848002f.js";import"./3c0798ac.js";import"./6542020d.js";import"./eb534036.js";import"./12cd6149.js";import"./06ed5016.js";import"./58616311.js";import"./441d5cdc.js";function h(){const e=u();return l.exports.useMemo(()=>new URL(window.location.href),[e])}function O(e){const t=h().href;switch(e.type){case"defaultSeo":return a.createElement(f,r({},r({url:t},e.data)));case"homepage":return a.createElement(s,r({},r({url:t},e.data)));case"product":return a.createElement(d,r({},r({url:t},e.data)));case"collection":return a.createElement(S,r({},e.data));case"page":return a.createElement(g,r({},e.data));default:return console.warn("The <Seo/> only accepts type prop with values of defaultSeo, homepage, product, collection, or page."),null}}export{O as Seo};
//# sourceMappingURL=47dae61b.js.map
