import{i as o,r as c,w as d,a as f,b as v,o as i,c as l,d as h,g as m}from"./Cl5bgDjB.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});d(()=>{n.value=s.value?{}:f(a)});const r=t.push(n.value,e);return v(n,u=>{r.patch(u)}),m()&&(i(()=>{r.dispose()}),l(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{I as u};