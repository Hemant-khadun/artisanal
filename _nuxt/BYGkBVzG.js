import{c as x}from"./I7JXPB8D.js";import{e as g,r as d,ae as _,q as B,b as L,a7 as N,f as i,n as l,l as b,F as k,G as w,N as C,p as D,u as F,a8 as M,I as S}from"./Cl5bgDjB.js";const T={class:"flex"},A=["delay"],m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",V=g({__name:"HyperText",props:{text:{type:String,required:!0},duration:{type:Number,default:800},class:{type:String,default:""},animateOnLoad:{type:Boolean,default:!0}},setup(s){const e=s,a=d(e.text.split("")),n=d(0);function f(){return m[Math.floor(Math.random()*m.length)]}function o(){n.value=0,y()}const{pause:c,resume:v}=_(()=>{n.value<e.text.length?(a.value=a.value.map((t,r)=>t===" "?t:r<=n.value?e.text[r]:f()),n.value+=.1):c()},B(()=>e.duration/(e.text.length*10)));function y(){c(),v()}return L(()=>e.text,t=>{a.value=t.split(""),o()}),e.animateOnLoad&&o(),(t,r)=>{const h=N("motion");return i(),l("div",{class:"flex scale-100 cursor-default overflow-hidden py-2",onMouseenter:o},[b("div",T,[(i(!0),l(k,null,w(a.value,(u,p)=>C((i(),l("span",{key:p,class:D([F(x)(u===" "?"w-3":"",t.$props.class),"inline-block font-mono"]),initial:{opacity:0,y:-10},enter:{opacity:1,y:0},delay:p*(s.duration/(s.text.length*10))},[M(S(u.toUpperCase()),1)],10,A)),[[h]])),128))])],32)}}});export{V as _};
