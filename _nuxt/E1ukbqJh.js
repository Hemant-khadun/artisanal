import{e as u,r as n,ai as m,aj as d,q as f,ak as p,b,f as k,n as _,I as w,u as s,p as x}from"./Bv-pOpPk.js";import{c as y}from"./D24aqAm4.js";const g=u({__name:"NumberTicker",props:{value:{default:0},direction:{default:"up"},duration:{default:1e3},delay:{default:0},decimalPlaces:{default:2},class:{},transition:{default:"easeOutCubic"}},setup(r){const a=n(),e=r,t=n(e.direction==="down"?e.value:0),o=m(t,{delay:e.delay,duration:e.duration,transition:d[e.transition]}),l=f(()=>new Intl.NumberFormat("en-US",{minimumFractionDigits:e.decimalPlaces,maximumFractionDigits:e.decimalPlaces}).format(Number(o.value.toFixed(e.decimalPlaces)))),c=p(a,{threshold:0});return b(c,i=>{i&&(t.value=e.direction==="down"?0:e.value)},{immediate:!0}),(i,h)=>(k(),_("span",{ref_key:"spanRef",ref:a,class:x(s(y)("inline-block tabular-nums text-black dark:text-white tracking-wider",e.class))},w(s(l)),3))}});export{g as _};