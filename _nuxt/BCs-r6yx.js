import{r as A,am as S,an as h,b as g,ao as j,q,B as x}from"./DcqQ6i2p.js";/*!
 * vue-use-spring v0.3.3
 * (c) 2020-2024 Eduardo San Martin Morote
 * Released under the MIT License.
 */const C={mass:1,tension:170,friction:26,precision:.01},k=typeof window<"u",O=k?window.requestAnimationFrame.bind(window):()=>{},B=k?window.cancelAnimationFrame.bind(window):()=>{},I=typeof performance<"u"?performance.now.bind(performance):Date.now.bind(Date),T=Array.isArray.bind(Array),p=[0,0];function F(t,r,l,o,e){const u=-e.tension*(r-o),f=-e.friction*l,a=(u+f)/(e.mass||1),n=l+a*t,i=r+n*t,s=e.precision||.01;return Math.abs(n)<s&&Math.abs(i-o)<s?(p[0]=o,p[1]=0,p):(p[0]=i,p[1]=n,p)}const m=1e3/60;function M(t,r){const l=T(t)?[]:{},o=T(t)?[]:{};for(const e in t)l[e]=t[e],o[e]=r?r[e]:0;return[l,o]}const U=()=>{};function G(t,r=C,l={}){const o=l.onRest||U,e=A(S(t)?t:h(t));let u=!1,f=0,a=0,n;g(e,(c,V)=>{u||(f=I(),a=0,d())},{deep:!0});const i=M(e.value,null),s=A(i[0]),w=A(i[1]);let b=i[0],y=i[1];if(k){f=I(),a=0;const c=M(s.value,w.value);b=c[0],y=c[1],d()}j(()=>{n&&B(n)});function d(){n=O(()=>{if(W(s.value,e.value,w.value)){u&&o(),n=null,u=!1;return}u=!0;const c=I(),V=c-f;if(f=c,a+=V,a>m*10&&(a=0),a===0)return n=null,d();const R=(a-Math.floor(a/m)*m)/m,D=Math.floor(a/m);z(D,R,h(r),h(e),s.value,w.value,b,y),n=null,a-=D*m,d()})}const v=T(e.value)?[]:{};for(const c in e.value)v[c]=q({get:()=>s.value[c],set:V=>e.value[c]=V});return v.reset=c=>{Object.assign(s.value,c),Object.assign(e.value,c),u=!1,n=null},x(v)}function W(t,r,l){for(const o in r)if(l[o]!==0||t[o]!==r[o])return!1;return!0}function z(t,r,l,o,e,u,f,a){for(const n in o){let i=f[n],s=a[n];const w=o[n];for(let d=0;d<t;d++)[i,s]=F(m/1e3,i,s,w,l);const[b,y]=F(m/1e3,i,s,w,l);e[n]=i+(b-i)*r,u[n]=s+(y-s)*r,f[n]=i,a[n]=s}}export{G as u};
