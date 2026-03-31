"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=a(function(l,u){
var v=require('@stdlib/stats-base-dists-gamma-cdf/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return i(e)||i(r)||r<0?NaN:r===0?e<0?0:1:e<=0?0:v(e*e,r/2,.5)}u.exports=q
});var c=a(function(C,f){
var m=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,y=require('@stdlib/stats-base-dists-gamma-cdf/dist').factory,d=require('@stdlib/math-base-assert-is-nan/dist');function g(e){var r;if(e===0)return m(0);return r=y(e/2,.5),s;function s(t){return d(t)?NaN:t<0?0:r(t*t)}}f.exports=g
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=n(),p=c();N(o,"factory",p);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
