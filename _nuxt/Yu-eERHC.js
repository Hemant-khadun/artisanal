import{c as f}from"./D-gephX2.js";import{e as d,r as y,q as o,E as m,f as r,n,l as _,F as k,G as v,H as g,I as x,p as B,u as E}from"./DcqQ6i2p.js";const w=d({__name:"TextGenerateEffect",props:{words:{},filter:{type:Boolean,default:!0},duration:{default:.7},delay:{default:0},class:{}},setup(i){const e=i,s=y(null),c=o(()=>e.words.split(" ")),u=o(()=>({opacity:0,filter:e.filter?"blur(10px)":"none",transition:`opacity ${e.duration}s, filter ${e.duration}s`}));return m(()=>{if(s.value){const l=s.value.querySelectorAll("span");setTimeout(()=>{l.forEach((a,t)=>{setTimeout(()=>{a.style.opacity="1",a.style.filter=e.filter?"blur(0px)":"none"},t*200)})},e.delay)}}),(l,a)=>(r(),n("div",{class:B(E(f)("leading-snug tracking-wide",e.class))},[_("div",{ref_key:"scope",ref:s},[(r(!0),n(k,null,v(c.value,(t,p)=>(r(),n("span",{key:t+p,class:"inline-block",style:g(u.value)},x(t)+"  ",5))),128))],512)],2))}});export{w as _};
