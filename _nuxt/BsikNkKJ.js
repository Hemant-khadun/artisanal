import{e as n,r,E as u,q as c,f as i,h as l,j as m,a8 as f,I as d,u as p,av as v}from"./B5_BuWJT.js";const h=n({__name:"Shortcut",props:{value:{},size:{default:"sm"}},setup(e){const a=r("Ctrl");u(()=>{a.value=navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)?"⌘":"Ctrl"});const t=c(()=>e.value==="meta"?a:e.value);return(s,_)=>{const o=v;return i(),l(o,{size:s.size},{default:m(()=>[f(d(p(t)),1)]),_:1},8,["size"])}}});export{h as default};