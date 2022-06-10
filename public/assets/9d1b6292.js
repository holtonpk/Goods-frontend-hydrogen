import{l as c}from"./6106a1d6.js";import{r as e}from"./index.82c951e8.js";function d(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{d as useLoadScript};
//# sourceMappingURL=9d1b6292.js.map
