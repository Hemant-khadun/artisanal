import{e as u,v as i,q as f,x as r,aO as c,g as d}from"./DcqQ6i2p.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:n}=i(),a=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:n,tags:a,parent:e}){var l;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?c(o(),a):[o()]:n?n():r("div")}catch{return r("div")}}}),y=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(p,t)}});export{y as default};
