import{e as k,v as C,r as c,E as B,q as D,a7 as E,f as s,n as o,m as L,j as T,F as A,G as F,u as i,N as G,p as u,h as I,k as N,af as S}from"./Bv-pOpPk.js";import{c as m}from"./D24aqAm4.js";import{_ as j}from"./DlAUqK2U.js";const q=["initial","enter","leave"],z=k({__name:"AnimatedList",props:{class:{},delay:{default:1e3}},setup(p){const f=p,r=C(),t=c(0),a=c([]);B(d);const v=D(()=>a.value.slice(0,t.value));async function d(){for(a.value=r.default?r.default()[0].children:[];t.value<a.value.length;)t.value++,await _(f.delay)}async function _(e){return new Promise(l=>setTimeout(l,e))}function y(e){return e===t.value-1?{scale:0,opacity:0}:void 0}function g(e){return e===t.value-1?{scale:1,opacity:1,y:0,transition:{type:"spring",stiffness:250,damping:40}}:void 0}function h(){return{scale:0,opacity:0,y:0,transition:{type:"spring",stiffness:350,damping:40}}}return(e,l)=>{const w=E("motion");return s(),o("div",{class:u(i(m)("flex flex-col items-center gap-4",e.$props.class))},[L(S,{name:"list",tag:"div",class:"flex flex-col-reverse items-center gap-3","move-class":"move"},{default:T(()=>[(s(!0),o(A,null,F(i(v),(x,n)=>G((s(),o("div",{key:n,initial:y(n),enter:g(n),leave:h(),class:u(i(m)("mx-auto w-full"))},[(s(),I(N(x)))],10,q)),[[w]])),128))]),_:1})],2)}}}),$=j(z,[["__scopeId","data-v-866292f1"]]);export{$ as default};
