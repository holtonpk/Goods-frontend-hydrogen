var A={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,P=t?Symbol.for("react.element"):60103,T=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,a=t?Symbol.for("react.provider"):60109,y=t?Symbol.for("react.context"):60110,O=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,l=t?Symbol.for("react.forward_ref"):60112,m=t?Symbol.for("react.suspense"):60113,N=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,d=t?Symbol.for("react.lazy"):60116,D=t?Symbol.for("react.block"):60121,z=t?Symbol.for("react.fundamental"):60117,C=t?Symbol.for("react.responder"):60118,L=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case P:switch(e=e.type,e){case O:case p:case u:case i:case s:case m:return e;default:switch(e=e&&e.$$typeof,e){case y:case l:case d:case S:case a:return e;default:return n}}case T:return n}}}function R(e){return o(e)===p}r.AsyncMode=O;r.ConcurrentMode=p;r.ContextConsumer=y;r.ContextProvider=a;r.Element=P;r.ForwardRef=l;r.Fragment=u;r.Lazy=d;r.Memo=S;r.Portal=T;r.Profiler=i;r.StrictMode=s;r.Suspense=m;r.isAsyncMode=function(e){return R(e)||o(e)===O};r.isConcurrentMode=R;r.isContextConsumer=function(e){return o(e)===y};r.isContextProvider=function(e){return o(e)===a};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===P};r.isForwardRef=function(e){return o(e)===l};r.isFragment=function(e){return o(e)===u};r.isLazy=function(e){return o(e)===d};r.isMemo=function(e){return o(e)===S};r.isPortal=function(e){return o(e)===T};r.isProfiler=function(e){return o(e)===i};r.isStrictMode=function(e){return o(e)===s};r.isSuspense=function(e){return o(e)===m};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===u||e===p||e===i||e===s||e===m||e===N||typeof e=="object"&&e!==null&&(e.$$typeof===d||e.$$typeof===S||e.$$typeof===a||e.$$typeof===y||e.$$typeof===l||e.$$typeof===z||e.$$typeof===C||e.$$typeof===L||e.$$typeof===D)};r.typeOf=o;A.exports=r;var g=A.exports,W={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},E={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w={};w[g.ForwardRef]=K;w[g.Memo]=E;function x(e){return g.isMemo(e)?E:w[e.$$typeof]||W}var V=Object.defineProperty,Y=Object.getOwnPropertyNames,M=Object.getOwnPropertySymbols,B=Object.getOwnPropertyDescriptor,G=Object.getPrototypeOf,j=Object.prototype;function F(e,n,b){if(typeof n!="string"){if(j){var v=G(n);v&&v!==j&&F(e,v,b)}var c=Y(n);M&&(c=c.concat(M(n)));for(var _=x(e),h=x(n),$=0;$<c.length;++$){var f=c[$];if(!q[f]&&!(b&&b[f])&&!(h&&h[f])&&!(_&&_[f])){var I=B(n,f);try{V(e,f,I)}catch{}}}}return e}var J=F;function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}export{Q as _,J as h};
//# sourceMappingURL=bfd11c3b.js.map