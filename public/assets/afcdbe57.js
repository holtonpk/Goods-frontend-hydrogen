var y=Object.defineProperty,b=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(i,e,r)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,P=(i,e)=>{for(var r in e||(e={}))R.call(e,r)&&_(i,r,e[r]);if(u)for(var r of u(e))A.call(e,r)&&_(i,r,e[r]);return i},V=(i,e)=>b(i,M(e));var E=(i,e)=>{var r={};for(var o in i)R.call(i,o)&&e.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&u)for(var o of u(i))e.indexOf(o)<0&&A.call(i,o)&&(r[o]=i[o]);return r};import{R as h}from"./index.82c951e8.js";import{Money as T}from"./c7f52471.js";import"./079e9649.js";import"./bc08dc6e.js";import"./949d5e9e.js";import{u as I}from"./7f29416b.js";import{UnitPrice as U}from"./c4d93ed0.js";import"./ee4a52e2.js";import"./92966185.js";import"./68abae6d.js";import"./7e2b3593.js";import"./acc1a395.js";function N(i){var e,r,o,c,m,d,p;const t=I(),x=i,{priceType:w="regular",variantId:l,valueType:v="min"}=x,g=E(x,["priceType","variantId","valueType"]);if(t==null)throw new Error("Expected a ProductProvider context, but none was found");let n,s;const a=l?(e=t==null?void 0:t.variants)===null||e===void 0?void 0:e.find(f=>(f==null?void 0:f.id)===l):null;if(w==="compareAt")if(l&&a){if(((r=a.compareAtPriceV2)===null||r===void 0?void 0:r.amount)===((o=a.priceV2)===null||o===void 0?void 0:o.amount))return null;n=a.compareAtPriceV2}else v==="max"?n=(c=t==null?void 0:t.compareAtPriceRange)===null||c===void 0?void 0:c.maxVariantPrice:n=(m=t==null?void 0:t.compareAtPriceRange)===null||m===void 0?void 0:m.minVariantPrice;else l&&a?(n=a.priceV2,v==="unit"&&(n=a.unitPrice,s=a.unitPriceMeasurement)):v==="max"?n=(d=t.priceRange)===null||d===void 0?void 0:d.maxVariantPrice:n=(p=t.priceRange)===null||p===void 0?void 0:p.minVariantPrice;return n?s?h.createElement(U,V(P({},g),{data:n,measurement:s})):h.createElement(T,V(P({},g),{data:n})):null}export{N as ProductPrice};
//# sourceMappingURL=afcdbe57.js.map