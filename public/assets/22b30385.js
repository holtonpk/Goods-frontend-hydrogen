import{r as i}from"./index.82c951e8.js";import"./62f37cd1.js";import{C as e}from"./0c9bea84.js";import"./c522ed9a.js";function o({analyticsDataFromServer:u}){return i.exports.useEffect(()=>{const t=new URLSearchParams(window.location.search);return t.has("utm_source")&&e.pushToPageAnalyticsData({id:t.get("utm_id"),source:t.get("utm_source"),campaign:t.get("utm_campaign"),medium:t.get("utm_medium"),content:t.get("utm_content"),term:t.get("utm_term")},"utm"),e.pushToPageAnalyticsData(u),e.publish(e.eventNames.PAGE_VIEW,!0),u.publishEventsOnNavigate&&u.publishEventsOnNavigate.forEach(n=>{e.publish(n,!0)}),function(){e.resetPageAnalyticsData()}},[u]),null}export{o as Analytics};
//# sourceMappingURL=22b30385.js.map