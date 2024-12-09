// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import{factory as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-f@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function a(u,v,c){var g,b,x,y,w;if(!o(u))throw new TypeError(j("0pf71",u));if(!o(v))throw new TypeError(j("0pf72",v));if(arguments.length>2){if(!d(c))throw new TypeError(j("0pf2V",c));if(g=i({},c),l(g,"iter")){if(!m(g.iter))throw new TypeError(j("0pf2t","iter",g.iter))}else g.iter=p;x=f(u,v,g),void 0===g.prng&&!1!==g.copy&&(g.state=x.state)}else x=f(u,v),g={iter:p,state:x.state};return w=0,e(b={},"next",(function(){if(w+=1,y||w>g.iter)return{done:!0};return{value:x(),done:!1}})),e(b,"return",(function(e){if(y=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),g&&g.prng?(e(b,"seed",null),e(b,"seedLength",null),s(b,"state",n(null),r),e(b,"stateLength",null),e(b,"byteLength",null)):(t(b,"seed",(function(){return x.PRNG.seed})),t(b,"seedLength",(function(){return x.PRNG.seedLength})),s(b,"state",(function(){return x.PRNG.state}),(function(e){x.PRNG.state=e})),t(b,"stateLength",(function(){return x.PRNG.stateLength})),t(b,"byteLength",(function(){return x.PRNG.byteLength}))),e(b,"PRNG",x.PRNG),h&&e(b,h,(function(){return a(u,v,g)})),b}export{a as default};
//# sourceMappingURL=index.mjs.map
