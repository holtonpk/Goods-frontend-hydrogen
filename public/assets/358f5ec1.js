import{r as l}from"./index.82c951e8.js";import{a as n}from"./b9e7d43b.js";function o(t,r){return r.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(a){if(a!=="default"&&!(a in t)){var c=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,c.get?c:{enumerable:!0,get:function(){return e[a]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},u={};Object.defineProperty(u,"__esModule",{value:!0});u.useNavigate=void 0;const f=n;function s(){const t=(0,f.useRouter)();return(r,e={replace:!1,reloadDocument:!1})=>{e!=null&&e.replace?t.history.replace(r,(e==null?void 0:e.clientState)||{}):t.history.push(r,(e==null?void 0:e.clientState)||{})}}u.useNavigate=s;Object.defineProperty(i,"__esModule",{value:!0});const d=l.exports,v=u;function _({to:t}){const r=(0,v.useNavigate)();return(0,d.useEffect)(()=>{t.startsWith("http")?window.location.href=t:r(t)},[]),null}var g=i.default=_,m=o({__proto__:null,default:g},[i]);export{m as R};
//# sourceMappingURL=358f5ec1.js.map
