var p=Object.defineProperty,E=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(l,n,e)=>n in l?p(l,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[n]=e,m=(l,n)=>{for(var e in n||(n={}))V.call(n,e)&&x(l,e,n[e]);if(b)for(var e of b(n))j.call(n,e)&&x(l,e,n[e]);return l},S=(l,n)=>E(l,M(n));import{r as a}from"./index.82c951e8.js";import{f as _}from"./fdb2e11a.js";function P(l,n){var e,i;if(!(!l.length||((i=(e=l==null?void 0:l[0])===null||e===void 0?void 0:e.selectedOptions)===null||i===void 0?void 0:i.length)!==Object.keys(n).length))return l==null?void 0:l.find(v=>Object.entries(n).every(([s,o])=>{var r;return(r=v==null?void 0:v.selectedOptions)===null||r===void 0?void 0:r.some(t=>(t==null?void 0:t.name)===s&&(t==null?void 0:t.value)===o)}))}function F(l){const n=l.reduce((e,i)=>{var v;if(!i.selectedOptions)throw new Error("getOptions requires 'variant.selectedOptions");return(v=i==null?void 0:i.selectedOptions)===null||v===void 0||v.forEach(s=>{var o,r,t,f;e[(o=s==null?void 0:s.name)!==null&&o!==void 0?o:""]=e[(r=s==null?void 0:s.name)!==null&&r!==void 0?r:""]||new Set,e[(t=s==null?void 0:s.name)!==null&&t!==void 0?t:""].add((f=s==null?void 0:s.value)!==null&&f!==void 0?f:"")}),e},{});return Object.keys(n).map(e=>({name:e,values:Array.from(n[e])}))}function z({variants:l,sellingPlanGroups:n,initialVariantId:e}){const i=a.exports.useMemo(()=>l?_(l):[],[l]),v=a.exports.useMemo(()=>F(i),[i]),s=e===null?e:i.find(d=>d.id===e)||i.find(d=>d.availableForSale)||i[0],[o,r]=a.exports.useState(s),[t,f]=a.exports.useState(o!=null&&o.selectedOptions?o.selectedOptions.reduce((d,u)=>{var c,O;return d[(c=u==null?void 0:u.name)!==null&&c!==void 0?c:""]=(O=u==null?void 0:u.value)!==null&&O!==void 0?O:"",d},{}):{});a.exports.useEffect(()=>{const d=P(i,t);r(d)},[t,i]);const A=a.exports.useCallback((d,u)=>{f(c=>S(m({},c),{[d]:u}))},[f]),h=a.exports.useCallback((d,u)=>{var c;const O=P(i,S(m({},t),{[d]:u}));return(c=O==null?void 0:O.availableForSale)!==null&&c!==void 0?c:!0},[t,i]),k=a.exports.useMemo(()=>n?_(n).map(d=>S(m({},d),{sellingPlans:d!=null&&d.sellingPlans?_(d.sellingPlans):[]})):[],[n]),[g,w]=a.exports.useState(void 0),y=a.exports.useMemo(()=>{if(!(!o||!g)){if(!o.sellingPlanAllocations)throw new Error("You must include sellingPlanAllocations in your variants in order to calculate selectedSellingPlanAllocation");return _(o.sellingPlanAllocations).find(d=>d.sellingPlan.id===g.id)}},[o,g]);return{variants:i,variantsConnection:l,options:v,selectedVariant:o,setSelectedVariant:r,selectedOptions:t,setSelectedOption:A,setSelectedOptions:f,isOptionInStock:h,selectedSellingPlan:g,setSelectedSellingPlan:w,selectedSellingPlanAllocation:y,sellingPlanGroups:k,sellingPlanGroupsConnection:n}}export{z as useProductOptions};
//# sourceMappingURL=6838a23b.js.map
