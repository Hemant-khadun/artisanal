import{e as y,r as n,v as _,E as v,w as h,a7 as k,f as t,n as a,F as E,G as g,N as b,h as B,k as O,u as w,p as x}from"./DcqQ6i2p.js";const C=["initial","enter"],F=y({__name:"BlurReveal",props:{duration:{default:1},delay:{default:2},blur:{default:"20px"},yOffset:{default:20},class:{}},setup(l){const e=l,c=n(null),u=n([]),r=_(),s=n([]);v(()=>{h(()=>{s.value=r.default?r.default():[]})});function f(){return{opacity:0,filter:`blur(${e.blur})`,y:e.yOffset,transition:{duration:0,easing:"easeInOut",delay:0}}}function d(i){return{opacity:1,filter:"blur(0px)",y:0,transition:{duration:e.duration*1e3,easing:"easeInOut",delay:e.delay*i*1e3}}}return(i,D)=>{const p=k("motion");return t(),a("div",{ref_key:"container",ref:c,class:x(e.class)},[(t(!0),a(E,null,g(w(s),(m,o)=>b((t(),a("div",{key:o,ref_for:!0,ref_key:"childElements",ref:u,initial:f(),enter:d(o)},[(t(),B(O(m)))],8,C)),[[p]])),128))],2)}}});export{F as _};
