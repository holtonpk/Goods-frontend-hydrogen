import{r as s}from"./index.82c951e8.js";import"./62f37cd1.js";import{C as t}from"./0c9bea84.js";import"./c522ed9a.js";const i=10;let r=!1;function u(){return s.exports.useEffect(()=>{r||(r=!0,t.subscribe(t.eventNames.PERFORMANCE,e=>{console.group(`Performance - ${e.page_load_type} load`),n("TTFB:",e.response_start-e.navigation_start),n("FCP:",e.first_contentful_paint),n("LCP:",e.largest_contentful_paint),n("Duration:",e.response_end-e.navigation_start),console.groupEnd()}))}),null}function n(e,o){o&&console.log(`${e.padEnd(i)}${Math.round(o)} ms`)}export{u as PerformanceMetricsDebug};
//# sourceMappingURL=0b2a719d.js.map