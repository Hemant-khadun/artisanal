import{e as d,aP as m,q as n,f as s,n as r,ag as f,l as c,I as p,p as g,u as _}from"./C9QOXPtL.js";import{c as k}from"./BjnAGth8.js";import{_ as h}from"./DlAUqK2U.js";const v={fill:"none",class:"size-full","stroke-width":"2",viewBox:"0 0 100 100"},y=["stroke-width"],x=["stroke-width"],b=["data-current-value"],C=d({__name:"AnimatedCircularProgressBar",props:{max:{default:100},value:{default:0},min:{default:0},gaugePrimaryColor:{default:"rgb(79 70 229)"},gaugeSecondaryColor:{default:"rgba(0, 0, 0, 0.1)"},class:{},circleStrokeWidth:{default:10}},setup(l){m(t=>({"7556b204":o,"0b459c72":u.value,"2d98b4e2":t.gaugePrimaryColor,a2aef592:a.value,"43660ddd":t.gaugeSecondaryColor}));const e=l,o=2*Math.PI*45,i=o/100,a=n(()=>(e.value-e.min)/(e.max-e.min)*100),u=n(()=>`${i}px`);return(t,P)=>(s(),r("div",{class:g(["progress-circle-base",_(k)("relative size-40 text-2xl font-semibold",e.class)])},[(s(),r("svg",v,[a.value<=90&&a.value>=0?(s(),r("circle",{key:0,cx:"50",cy:"50",r:"45","stroke-width":t.circleStrokeWidth,"stroke-dashoffset":"0","stroke-linecap":"round","stroke-linejoin":"round",class:"gauge-secondary-stroke opacity-100"},null,8,y)):f("",!0),c("circle",{cx:"50",cy:"50",r:"45","stroke-width":t.circleStrokeWidth,"stroke-dashoffset":"0","stroke-linecap":"round","stroke-linejoin":"round",class:"gauge-primary-stroke opacity-100"},null,8,x)])),c("span",{"data-current-value":a.value,class:"absolute inset-0 m-auto size-fit delay-0 duration-1000 ease-linear animate-in fade-in"},p(a.value),9,b)],2))}}),z=h(C,[["__scopeId","data-v-fe65b735"]]);export{z as default};
