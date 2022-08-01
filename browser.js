// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,u=t.toString,i=t.__defineGetter__,f=t.__defineSetter__,o=t.__lookupGetter__,a=t.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,e){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=e.value,r.__proto__=c):r[n]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,n,e.get),y&&f&&f.call(r,n,e.set),r};function l(r,n,e){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function v(r){return r!=r}var y=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===s}function N(r){return Math.abs(r)}var b,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,d=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,u,i;if(null==r)return w.call(r);e=r[m],i=m,n=null!=(u=r)&&d.call(u,i);try{r[m]=void 0}catch(n){return w.call(r)}return t=w.call(r),n?r[m]=e:delete r[m],t}:function(r){return w.call(r)},A="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,n,e;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(A&&e instanceof Uint32Array||"[object Uint32Array]"===_(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var x,j=b,I="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;x=function(){var r,n,e;if("function"!=typeof k)return!1;try{n=new k([1,3.14,-3.14,NaN]),e=n,r=(I&&e instanceof Float64Array||"[object Float64Array]"===_(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,T=x,F="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,e;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),e=n,r=(F&&e instanceof Uint8Array||"[object Uint8Array]"===_(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var V,G=S,P="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,e;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),e=n,r=(P&&e instanceof Uint16Array||"[object Uint16Array]"===_(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var W,Y={uint16:V,uint8:G};(W=new Y.uint16(1))[0]=4660;var q=52===new Y.uint8(W.buffer)[0],C=!0===q?1:0,R=new T(1),z=new j(R.buffer);function B(r){return R[0]=r,z[C]}var D=!0===q?1:0,J=new T(1),K=new j(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}var X=1023,Z=.6931471803691238,$=1.9082149292705877e-10,rr=1048575;function nr(r){var n,e,t,u,i,f,o,a,c,l,y,p;return 0===r?s:v(r)||r<0?NaN:(i=0,(e=B(r))<1048576&&(i-=54,e=B(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-X|0,i+=(a=614244+(e&=rr)&1048576|0)>>20|0,o=(r=Q(r,e|1072693248^a))-1,(rr&2+e)<3?0===o?0===i?0:i*Z+i*$:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*Z-(f-i*$-o)):(a=e-398458|0,c=440401-e|0,u=(y=(p=(l=o/(2+o))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=t+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-l*(n+f)):i*Z-(n-(l*(n+f)+i*$)-o)):0===i?o-l*(o-f):i*Z-(l*(o-f)-i*$-o))))}var er=Math.floor,tr=Math.ceil;function ur(r){return r<0?tr(r):er(r)}function ir(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))}var fr=-.16666666666666632;function or(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(fr+u*e):r-(u*(.5*n-t*e)-n-t*fr)}var ar,cr,lr=!0===q?0:1,vr=new T(1),yr=new j(vr.buffer);!0===q?(ar=1,cr=0):(ar=0,cr=1);var sr,pr,Nr={HIGH:ar,LOW:cr},br=new T(1),hr=new j(br.buffer),wr=Nr.HIGH,dr=Nr.LOW;function mr(r,n){return hr[wr]=r,hr[dr]=n,br[0]}!0===q?(sr=1,pr=0):(sr=0,pr=1);var _r={HIGH:sr,LOW:pr},Ar=new T(1),gr=new j(Ar.buffer),Ur=_r.HIGH,xr=_r.LOW;function jr(r,n){return Ar[0]=n,r[0]=gr[Ur],r[1]=gr[xr],r}function Ir(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}var kr=[0,0];function Or(r,n){var e,t;return Ir(kr,r),e=kr[0],e&=2147483647,t=B(n),mr(e|=t&=2147483648,kr[1])}function Sr(r,n){return v(n)||p(n)?(r[0]=n,r[1]=0,r):0!==n&&N(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Tr=[0,0],Fr=[0,0];function Er(r,n){var e,t;return 0===n||0===r||v(r)||p(r)?r:(function(r,n){1===arguments.length?Sr([0,0],r):Sr(r,n)}(Tr,r),n+=Tr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-X|0}(r=Tr[0]),n<-1074?Or(0,r):n>1023?r<0?s:y:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Ir(Fr,r),e=Fr[0],e&=2148532223,t*mr(e|=n+X<<20,Fr[1])))}function Hr(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Vr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=16777216,Mr=5.960464477539063e-8,Lr=Hr(20),Wr=Hr(20),Yr=Hr(20),qr=Hr(20);function Cr(r,n,e,t,u,i,f,o,a){var c,l,v,y,s,p,N,b,h;for(y=i,h=t[e],b=e,s=0;b>0;s++)l=Mr*h|0,qr[s]=h-Pr*l|0,h=t[b-1]+l,b-=1;if(h=Er(h,u),h-=8*er(.125*h),h-=N=0|h,v=0,u>0?(N+=s=qr[e-1]>>24-u,qr[e-1]-=s<<24-u,v=qr[e-1]>>23-u):0===u?v=qr[e-1]>>23:h>=.5&&(v=2),v>0){for(N+=1,c=0,s=0;s<e;s++)b=qr[s],0===c?0!==b&&(c=1,qr[s]=16777216-b):qr[s]=16777215-b;if(u>0)switch(u){case 1:qr[e-1]&=8388607;break;case 2:qr[e-1]&=4194303}2===v&&(h=1-h,0!==c&&(h-=Er(1,u)))}if(0===h){for(b=0,s=e-1;s>=i;s--)b|=qr[s];if(0===b){for(p=1;0===qr[i-p];p++);for(s=e+1;s<=e+p;s++){for(a[o+s]=Vr[f+s],l=0,b=0;b<=o;b++)l+=r[b]*a[o+(s-b)];t[s]=l}return Cr(r,n,e+=p,t,u,i,f,o,a)}}if(0===h)for(e-=1,u-=24;0===qr[e];)e-=1,u-=24;else(h=Er(h,-u))>=Pr?(l=Mr*h|0,qr[e]=h-Pr*l|0,u+=24,qr[e+=1]=l):qr[e]=0|h;for(l=Er(1,u),s=e;s>=0;s--)t[s]=l*qr[s],l*=Mr;for(s=e;s>=0;s--){for(l=0,p=0;p<=y&&p<=e-s;p++)l+=Gr[p]*t[s+p];Yr[e-s]=l}for(l=0,s=e;s>=0;s--)l+=Yr[s];for(n[0]=0===v?l:-l,l=Yr[0]-l,s=1;s<=e;s++)l+=Yr[s];return n[1]=0===v?l:-l,7&N}function Rr(r,n,e,t){var u,i,f,o,a,c,l;for((i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),l=f+4,a=0;a<=l;a++)Lr[a]=c<0?0:Vr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Lr[f+(a-c)];Wr[a]=u}return Cr(r,n,4,Wr,o,4,i,f,Lr)}var zr=Math.round;function Br(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=zr(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(B(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(B(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t}var Dr=1.5707963267341256,Jr=6077100506506192e-26,Kr=2*Jr,Qr=3*Jr,Xr=4*Jr,Zr=[0,0,0],$r=[0,0];function rn(r,n){var e,t,u,i,f,o,a;if((u=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Br(r,u,n):u<=1073928572?r>0?(a=r-Dr,n[0]=a-Jr,n[1]=a-n[0]-Jr,1):(a=r+Dr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-1):r>0?(a=r-2*Dr,n[0]=a-Kr,n[1]=a-n[0]-Kr,2):(a=r+2*Dr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Br(r,u,n):r>0?(a=r-3*Dr,n[0]=a-Qr,n[1]=a-n[0]-Qr,3):(a=r+3*Dr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-3):1075388923===u?Br(r,u,n):r>0?(a=r-4*Dr,n[0]=a-Xr,n[1]=a-n[0]-Xr,4):(a=r+4*Dr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-4);if(u<1094263291)return Br(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return vr[0]=r,yr[lr]}(r),a=mr(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)Zr[f]=0|a,a=16777216*(a-Zr[f]);for(Zr[2]=a,i=3;0===Zr[i-1];)i-=1;return o=Rr(Zr,$r,t,i),r<0?(n[0]=-$r[0],n[1]=-$r[1],-o):(n[0]=$r[0],n[1]=$r[1],o)}var nn=[0,0];function en(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ir(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,nn)){case 0:return ir(nn[0],nn[1]);case 1:return-or(nn[0],nn[1]);case 2:return-ir(nn[0],nn[1]);default:return or(nn[0],nn[1])}}var tn=[0,0];function un(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:or(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,tn)){case 0:return or(tn[0],tn[1]);case 1:return ir(tn[0],tn[1]);case 2:return-or(tn[0],tn[1]);default:return-ir(tn[0],tn[1])}}var fn=3.141592653589793,on=1.4616321449683622,an=1.4616321449683622;function cn(r){var n,e,t,u,i,f,o,a,c,l,s,b,h;if(v(r)||p(r))return r;if(0===r)return y;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-nr(r);if(n){if(r>=4503599627370496)return y;if(c=function(r){var n,e;return v(r)||p(r)?NaN:0===(n=N(e=r%2))||1===n?Or(0,e):n<.25?un(fn*e):n<.75?Or(en(fn*(n=.5-n)),e):n<1.25?(e=Or(1,e)-e,un(fn*e)):n<1.75?-Or(en(fn*(n-=1.5)),e):(e-=Or(2,e),un(fn*e))}(r),0===c)return y;e=nr(fn/N(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(h=-nr(r),r>=on-1+.27?(s=1-r,t=0):r>=on-1-.27?(s=r-(an-1),t=1):(s=r,t=2)):(h=0,r>=on+.27?(s=2-r,t=0):r>=on-.27?(s=r-an,t=1):(s=r-1,t=2)),t){case 0:f=.07721566490153287+(b=s*s)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(b),i=b*(.3224670334241136+b*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(b)),h+=(o=s*f+i)-.5*s;break;case 1:f=.48383612272381005+(l=(b=s*s)*s)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),i=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),h+=(o=b*f-(-3638676997039505e-33-l*(i+s*u)))-.12148629053584961;break;case 2:f=s*(s*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(s)-.07721566490153287),i=1+s*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(s),h+=-.5*s+f/i}else if(r<8)switch(o=(s=r-(t=ur(r)))*(s*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(s)-.07721566490153287),a=1+s*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(s),h=.5*s+o/a,b=1,t){case 7:b*=s+6;case 6:b*=s+5;case 5:b*=s+4;case 4:b*=s+3;case 3:h+=nr(b*=s+2)}else r<0x400000000000000?(c=nr(r),l=.4189385332046727+(b=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(s=b*b),h=(r-.5)*(c-1)+l):h=r*(nr(r)-1);return n&&(h=e-h),h}function ln(r){return er(r)===r}function vn(r){return 0===r&&1/r===s}var yn=2.5066282746310007;function sn(r){return ln(r/2)}function pn(r){return sn(r>0?r-1:r+1)}var Nn=Math.sqrt,bn=!0===q?0:1,hn=new T(1),wn=new j(hn.buffer);function dn(r,n){return hn[0]=r,wn[bn]=n>>>0,hn[0]}function mn(r){return 0|r}var _n=1048576,An=[1,1.5],gn=[0,.5849624872207642],Un=[0,1.350039202129749e-8],xn=2147483647,jn=1048575,In=1048576,kn=2147483647,On=1083179008,Sn=1e300,Tn=1e-300,Fn=[0,0],En=[0,0];function Hn(r,n){var e,t,u,i,f,o,a,c,l,b,h,w,d,m;if(v(r)||v(n))return NaN;if(Ir(Fn,n),f=Fn[0],0===Fn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nn(r);if(-.5===n)return 1/Nn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(p(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:N(r)<1==(n===y)?0:y}(r,n)}if(Ir(Fn,r),i=Fn[0],0===Fn[1]){if(0===i)return function(r,n){return n===s?y:n===y?0:n>0?pn(n)?r:0:pn(n)?Or(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&pn(n))return-1;if(p(r))return r===s?Hn(-0,-n):n<0?0:y}if(r<0&&!1===ln(n))return(r-r)/(r-r);if(u=N(r),e=i&kn|0,t=f&kn|0,a=f>>>31|0,o=(o=i>>>31|0)&&pn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&B(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===a?o*Sn*Sn:o*Tn*Tn;if(e>1072693248)return 0===a?o*Sn*Sn:o*Tn*Tn;h=function(r,n){var e,t,u,i,f,o;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=dn(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r}(En,u)}else h=function(r,n,e){var t,u,i,f,o,a,c,l,v,y,s,p,N,b,h,w,d,m,_,A,g;return m=0,e<_n&&(m-=53,e=B(n*=9007199254740992)),m+=(e>>20)-X|0,e=1072693248|(_=1048575&e|0),_<=235662?A=0:_<767610?A=1:(A=0,m+=1,e-=_n),f=dn(u=(w=(n=Q(n,e))-(c=An[A]))*(d=1/(n+c)),0),t=524288+(e>>1|536870912),a=Q(0,t+=A<<18),h=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=dn(a=3+(i=f*f)+(h+=(o=d*(w-f*a-f*(n-(a-c))))*(f+u)),0),N=(s=-7.028461650952758e-9*(v=dn(v=(w=f*a)+(d=o*a+(h-(a-3-i))*u),0))+.9617966939259756*(d-(v-w))+Un[A])-((p=dn(p=(y=.9617967009544373*v)+s+(l=gn[A])+(b=m),0))-b-l-y),r[0]=p,r[1]=N,r}(En,u,e);if(b=(n-(c=dn(n,0)))*h[0]+n*h[1],l=c*h[0],Ir(Fn,w=b+l),d=mn(Fn[0]),m=mn(Fn[1]),d>=On){if(0!=(d-On|m))return o*Sn*Sn;if(b+8008566259537294e-32>w-l)return o*Sn*Sn}else if((d&kn)>=1083231232){if(0!=(d-3230714880|m))return o*Tn*Tn;if(b<=w-l)return o*Tn*Tn}return w=function(r,n,e){var t,u,i,f,o,a,c,l,v,y;return v=((l=r&xn|0)>>20)-X|0,c=0,l>1071644672&&(u=Q(0,((c=r+(In>>v+1)>>>0)&~(jn>>(v=((c&xn)>>20)-X|0)))>>>0),c=(c&jn|In)>>20-v>>>0,r<0&&(c=-c),n-=u),r=mn(r=B(a=1-((a=(i=.6931471824645996*(u=dn(u=e+n,0)))+(f=.6931471805599453*(e-(u-n))+-1.904654299957768e-9*u))*(t=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Er(a,c):Q(a,r)}(d,l,b),o*w}var Vn=1.4426950408889634,Gn=1/(1<<28);function Pn(r){var n;return v(r)||r===y?r:r===s?0:r>709.782712893384?y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Gn?1+r:function(r,n,e){var t,u,i,f;return Er(1-(n-(t=r-n)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(n=ur(r<0?Vn*r-.5:Vn*r+.5)),1.9082149292705877e-10*n,n)}function Mn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Pn(r),e=r>143.01608?(t=Hn(r,.5*r-.25))*(t/e):Hn(r,r-.5)/e,yn*e*n}function Ln(r,n){return n/((1+.5772156649015329*r)*r)}function Wn(r){var n,e,t,u;if(ln(r)&&r<0||r===s||v(r))return NaN;if(0===r)return vn(r)?s:y;if(r>171.61447887182297)return y;if(r<-170.5674972726612)return 0;if((e=N(r))>33)return r>=0?Mn(r):(n=0==(1&(t=er(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*un(fn*u),n*fn/(N(u)*Mn(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ln(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ln(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var Yn=17976931348623157e292,qn=709.782712893384,Cn=.8450629115104675;function Rn(r){var n,e,t,u,i,f,o,a;if(v(r))return NaN;if(r===y)return 0;if(r===s)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(u=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),i=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),f=u/i,r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+Cn+o/a:1-Cn-o/a;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=Pn(-(t=dn(e,0))*t-.5625)*Pn((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0}var zn=-708.3964185322641;function Bn(r,n){var e;return e=r*nr(n),n>=1?e<qn&&-n>zn?Hn(n,r)*Pn(-n):r>=1?Hn(n/Pn(n/r),r):Pn(e-n):e>zn?Hn(n,r)*Pn(-n):n/r<qn?Hn(n/Pn(n/r),r):Pn(e-n)}function Dn(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e}l(Dn,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return Dn(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var Jn=[0,0,0,0,0,0,0,0,0,0],Kn=eval;function Qn(){var r;try{Kn('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}var Xn,Zn=2220446049250313e-31,$n=1e6,re=1e6;Xn=Qn()?function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Zn,u=f.maxTerms||$n,i=f.initialValue||0,1==("function"==typeof r.next)){for(t of r)if(N(e*(i+=t))>=N(t)||0==--u)break}else do{i+=t=r()}while(N(e*i)<N(t)&&--u);return i}:function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Zn,u=f.maxTerms||re,i=f.initialValue||0;do{i+=t=r()}while(N(e*i)<N(t)&&--u);return i};var ne=Xn;function ee(r,n,e){var t;return e=e||0,t=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}}(r,n),ne(t,{initialValue:e})}var te=.6931471803691238,ue=1.9082149292705877e-10;function ie(r){var n,e,t,u,i,f,o,a,c,l;if(r<-1||v(r))return NaN;if(-1===r)return s;if(r===y)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,e=1)}return 0!==l&&(t<9007199254740992?(i=(l=((e=B(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),i/=c):(l=((e=B(c=r))>>20)-X,i=0),(e&=1048575)<434334?c=Q(c,1072693248|e):(l+=1,c=Q(c,1071644672|e),e=1048576-e>>2),u=c-1),n=.5*u*u,0===e?0===u?l*te+(i+=l*ue):l*te-((a=n*(1-.6666666666666666*u))-(l*ue+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-f*(n+a)):l*te-(n-(f*(n+a)+(l*ue+i))-u))}function fe(r){return 0===r&&1/r===y}function oe(r,n){var e,t,u,i;if(2===(e=arguments.length))return v(r)||v(n)?NaN:r===y||n===y?y:r===n&&0===r?fe(r)?r:n:r>n?r:n;for(t=s,i=0;i<e;i++){if(v(u=arguments[i])||u===y)return u;(u>t||u===t&&0===u&&fe(u))&&(t=u)}return t}function ae(r,n){var e,t,u,i;if(2===(e=arguments.length))return v(r)||v(n)?NaN:r===s||n===s?s:r===n&&0===r?vn(r)?r:n:r<n?r:n;for(t=y,i=0;i<e;i++){if(v(u=arguments[i])||u===s)return u;(u<t||u===t&&0===u&&vn(u))&&(t=u)}return t}var ce=10.900511;function le(r,n){var e,t,u,i,f,o,a,c,l,v;return a=(n-r-ce+.5)/(u=r+ce-.5),r<1?n<=zn?Pn(r*nr(n)-n-cn(r)):Hn(n,r)*Pn(-n)/Wn(r):(N(a*a*r)<=100&&r>150?e=Pn(e=r*(ie(a)-a)+-10.400511*n/u):ae(i=r*nr(n/u),f=r-n)<=zn||oe(i,f)>=qn?(t=f/r,ae(i,f)/2>zn&&oe(i,f)/2<qn?e=(o=Hn(n/u,r/2)*Pn(f/2))*o:ae(i,f)/4>zn&&oe(i,f)/4<qn&&n>r?(e=(o=Hn(n/u,r/4)*Pn(f/4))*o,e*=e):e=t>zn&&t<qn?Hn(n*Pn(t)/u,r):Pn(i+f)):e=Hn(n/u,r)*Pn(f),e*=Nn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(l=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),v=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(l=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),v=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),l/v)))}var ve=.6931471803691238,ye=1.9082149292705877e-10,se=1.4426950408889634;function pe(r){var n,e,t,u,i,f,o,a,c,l,p,N;if(r===y||v(r))return r;if(r===s)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return y}if(i=0|B(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+ve,u=-ye,N=-1):(t=r-ve,u=ye,N=1):(N=e?se*r-.5:se*r+.5,t=r-(l=N|=0)*ve,u=l*ye),c=t-(r=t-u)-u;else{if(i<1016070144)return r;N=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((f-(l=3-f*n))/(6-r*l)),0===N?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===N?.5*(r-p)-.5:1===N?r<-.25?-2*(p-(r+.5)):1+2*(r-p):N<=-2||N>56?(o=Q(o=1-(p-r),t=B(o)+(N<<20)|0))-1:(l=1,N<20?o=(l=Q(l,t=1072693248-(2097152>>N)|0))-(p-r):(o=r-(p+(l=Q(l,t=X-N<<20|0))),o+=1),Q(o,t=B(o)+(N<<20)|0)))}function Ne(r,n,e){var t,u,i,f,o,a,c;if(r<Zn)return-nr(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=nr(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*(f=0===(o=e)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-nr(r),e=n,n=r,r+=1),r<=1.5?(i=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),u+=.5281534194946289*(t=n*e)+t*i):(i=e*n,f=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),u+=.45201730728149414*i+i*f)}function be(r,n,e){var t,u,i,f;return t=function(r){return v(r)?NaN:r<0?r<-.5?Wn(1+r)-1:pe(-ie(r)+Ne(r+2,r+1,r)):r<2?pe(Ne(r+1,r,r-1)):Wn(1+r)-1}(r),u=(t+1)/r,i=function(r,n){var e;if(v(r)||v(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((N(n*(r-1))<.5||N(n)<.2)&&(e=nr(r)*n)<.5)return pe(e)}else if(ur(n)!==n)return NaN;return Hn(r,n)-1}(n,r),t-=i,t/=r,f=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}}(r,n),t=-(i+=1)*ne(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]}var he=11754943508222875e-54,we=1e6;function de(r,n,e){var t,u,i,f,o,a,c;if(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1],i=c[0],0===f&&(f=he),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=he),0===(o=c[1]+c[0]/o)&&(o=he),f*=u=o*(a=1/a))}while(N(u-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=he),0===(o=c[1]+c[0]/o)&&(o=he),f*=u=o*(a=1/a))}while(c&&N(u-1)>n&&--e);return i/f}function me(r,n,e){var t,u,i,f,o,a;if(0===(i=(a=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=he),f=i,o=0,!0===t)do{(a=r.next().value)&&(0===(o=a[1]+a[0]*o)&&(o=he),0===(f=a[1]+a[0]/f)&&(f=he),i*=u=f*(o=1/o))}while(a&&N(u-1)>n&&--e);else do{(a=r())&&(0===(o=a[1]+a[0]*o)&&(o=he),0===(f=a[1]+a[0]/f)&&(f=he),i*=u=f*(o=1/o))}while(a&&N(u-1)>n&&--e);return i}var _e,Ae=1e6;function ge(r,n,e){var t,u,i,f,o,a;o=(a=r())[1],u=a[0],0===o&&(o=he),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=he),0===(i=a[1]+a[0]/i)&&(i=he),o*=t=i*(f=1/f))}while(a&&N(t-1)>n&&--e);return u/o}function Ue(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=he),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=he),0===(u=o[1]+o[0]/u)&&(u=he),f*=t=u*(i=1/i))}while(o&&N(t-1)>n&&--e);return f}_e=Qn()?function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||we,u=t.tolerance||Zn,t.keep?me(r,u,e):de(r,u,e)}:function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Zn,e=t.maxIter||Ae,t.keep?Ue(r,u,e):ge(r,u,e)};var xe=_e;function je(r,n){var e=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}}(r,n);return 1/(n-r+1+xe(e))}function Ie(r,n,e,t){var u,i,f,o,a,c,l,v,s,p,b,h,w;if(r<0||n<=0)return NaN;if(i=void 0===e||e,l=t,v=0,n>=170&&!i)return l&&4*n<r?(v=n*nr(r)-r,v+=nr(je(n,r))):!l&&n>4*r?(v=n*nr(r)-r,v+=nr(ee(n,r,o=0)/n)):0===(v=Ie(n,r,!0,l))?l?(v=nr(v=1+1/(12*n)+1/(288*n*n))-n+(n-.5)*nr(n),v+=nr(yn)):(v=n*nr(r)-r,v+=nr(ee(n,r,o=0)/n)):v=nr(v)+cn(n),v>qn?y:Pn(v);switch(n<30&&n<=r+1&&r<qn?a=!(s=(h=er(n))===n)&&.5===N(h-n):s=a=!1,s&&r>.6?(l=!l,f=0):a&&r>.2?(l=!l,f=1):r<1.4901161193847656e-8&&n>1?f=6:r<.5?f=-.4/nr(r)<n?2:3:r<1.1?f=.75*r<n?2:3:(c=!1,i&&n>20&&(p=N((r-n)/n),n>200?20/n>p*p&&(c=!0):p<.4&&(c=!0)),c?f=5:r-1/(3*r)<n?f=2:(f=4,l=!l)),f){case 0:v=function(r,n){var e,t,u;if(0!==(t=Pn(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t}(n,r),!1===i&&(v*=Wn(n));break;case 1:v=function(r,n){var e,t,u,i;if(0!==(u=Rn(Nn(n)))&&r>1){for(e=Pn(-n)/Nn(fn*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u}(n,r),!1===i&&(v*=Wn(n));break;case 2:0!==(v=i?le(n,r):Bn(n,r))&&(o=0,u=!1,l&&(o=i?1:Wn(n),i||v>=1||Yn*v>o?(o/=v,i||n<1||Yn/n>o?(o*=-n,u=!0):o=0):o=0)),v*=ee(n,r,o)/n,u&&(l=!1,v=-v);break;case 3:v=(b=be(n,r,l=!l))[0],w=b[1],l=!1,i&&(v/=w);break;case 4:0!==(v=i?le(n,r):Bn(n,r))&&(v*=je(n,r));break;case 5:v=function(r,n){var e,t,u,i,f;return i=r*(u=-nr(1+(t=(n-r)/r))+t),f=Nn(2*u),n<r&&(f=-f),Jn[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(f),Jn[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(f),Jn[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(f),Jn[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(f),Jn[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(f),Jn[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(f),Jn[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(f),Jn[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(f),Jn[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(f),Jn[9]=-.0005967612901927463,e=Dn(Jn,1/r),e*=Pn(-i)/Nn(6.283185307179586*r),n<r&&(e=-e),e+Rn(Nn(i))/2}(n,r),r>=n&&(l=!l);break;case 6:v=i?Hn(r,n)/Wn(n+1):Hn(r,n)/n,v*=1-n*r/(n+1)}return i&&v>1&&(v=1),l&&(v=(i?1:Wn(n))-v),v}function ke(r,n,e){return v(r)||v(n)||v(e)||n<0||e<=0?NaN:0===n?r<0?0:1:r<=0?0:r===y?1:Ie(r*e,n)}function Oe(r){return function(){return r}}function Se(r){return v(r)?Oe(NaN):function(n){return v(n)?NaN:n<r?0:1}}function Te(r,n){return v(r)||v(n)||r<0||n<=0?Oe(NaN):0===r?Se(0):function(e){return e<=0?0:e===y?1:Ie(e*n,r)}}function Fe(r,n){return v(r)||v(n)||n<0?NaN:0===n?r<0?0:1:r<=0?0:ke(r*r,n/2,.5)}function Ee(r){var n;return 0===r?Se(0):(n=Te(r/2,.5),function(r){return v(r)?NaN:r<0?0:n(r*r)})}l((function(r,n){return v(r)||v(n)?NaN:r<n?0:1}),"factory",Se),l(ke,"factory",Te),l(Fe,"factory",Ee),r.default=Fe,r.factory=Ee,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).cdf={});
//# sourceMappingURL=browser.js.map
