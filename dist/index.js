"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=i(function(l,n){
var v=require('@stdlib/stats-base-dists-gamma-cdf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return u(e)||u(r)||r<0?NaN:r===0?e<0?0:1:e<=0?0:v(e*e,r/2,.5)}n.exports=q
});var o=i(function(C,c){
var m=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,y=require('@stdlib/stats-base-dists-gamma-cdf/dist').factory,d=require('@stdlib/math-base-assert-is-nan/dist');function g(e){var r;if(e===0)return m(0);return r=y(e/2,.5),a;function a(t){return d(t)?NaN:t<0?0:r(t*t)}}c.exports=g
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=f(),p=o();N(s,"factory",p);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
