import{r as s,a as e,j as i,F as m}from"./index.82c951e8.js";import"./0e23ae4a.js";import"./079e9649.js";import"./bc08dc6e.js";import"./a0a18359.js";import"./62f37cd1.js";import"./949d5e9e.js";import"./b848002f.js";import{g as u,r,A as c,C as d}from"./0ca257ed.js";import"./eb534036.js";import"./12cd6149.js";import f from"./4332cc9a.js";import"./7e2b3593.js";import"./acc1a395.js";import"./d510479e.js";import"./68abae6d.js";import"./c522ed9a.js";import"./3c0798ac.js";import"./a5164085.js";function L(){const[l,a]=s.exports.useState(!1),[n]=u(),p=s.exports.useCallback(({isoCode:t,name:o})=>{fetch("/countries",{body:JSON.stringify({isoCode:t,name:o}),method:"POST"}).then(()=>{window.location.reload()})},[]);return e("div",{className:"mt-8 rounded border border-gray-200 w-full",children:e(r,{onChange:p,children:({open:t})=>(setTimeout(()=>a(t)),i(m,{children:[i(r.Button,{className:"w-full flex justify-between text-sm items-center py-5 px-7",children:[n.name,e(c,{isOpen:t})]}),i(r.Options,{className:"w-full px-3 pb-2 text-lg overflow-y-auto h-64",children:[e(r.Option,{disabled:!0,className:"font-medium px-4 pb-4 w-full text-left uppercase",children:"Country"}),l&&e(s.exports.Suspense,{fallback:e("div",{className:"flex justify-center",children:e(f,{})}),children:e(d,{selectedCountry:n,getClassName:o=>`py-2 px-4 rounded flex justify-between items-center text-left w-full cursor-pointer ${o?"bg-gray-100":null}`})})]})]}))})})}export{L as default};
//# sourceMappingURL=d7334bd7.js.map