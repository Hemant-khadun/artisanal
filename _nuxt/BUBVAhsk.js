import{e as N,r as a,q as n,B as V,f as v,n as w,m as R,j as W,A as j,p as h,u as o,H as g,l as p,ag as E,_ as H}from"./C9QOXPtL.js";import{c as _}from"./BjnAGth8.js";import{_ as I}from"./DlAUqK2U.js";const q={class:"block rounded-xl border-2 border-transparent bg-white p-1 shadow-lg dark:bg-gray-900"},A=["src","width","height"],F=N({__name:"LinkPreview",props:{isStatic:{type:Boolean,default:!1},imageSrc:{default:""},url:{default:""},class:{},linkClass:{},width:{default:200},height:{default:125}},setup(x){const e=x,r=a(!1),S=a(!0),l=a(null),c=a(!1),k=n(()=>e.isStatic?e.imageSrc:`https://api.microlink.io/?${new URLSearchParams({url:e.url,screenshot:"true",meta:"false",embed:"screenshot.url",colorScheme:"light","viewport.isMobile":"true","viewport.deviceScaleFactor":"1","viewport.width":String(e.width*3),"viewport.height":String(e.height*3)}).toString()}`),d=V({x:0,y:0}),b=n(()=>{var m;if(!l.value)return{};const t=20,s=e.width,i=e.height,P=window.innerWidth;let u=d.x-s/2;u=Math.min(Math.max(0,u),P-s);const f=(m=l.value.parentElement)==null?void 0:m.getBoundingClientRect(),z=f?f.top-i-t:0;return{position:"fixed",left:`${u}px`,top:`${z}px`,width:`${s}px`,height:`${i}px`}}),y=n(()=>({width:`${e.width}px`,height:`${e.height}px`})),$=n(()=>c.value?"animate-pop":"");function C(t){d.x=t.clientX,d.y=t.clientY}function M(){r.value=!0,setTimeout(()=>{c.value=!0},50)}function B(){r.value=!1,c.value=!1}function L(){S.value=!1}return(t,s)=>{const i=H;return v(),w("div",{class:h(o(_)("relative inline-block",e.class))},[R(i,{to:t.url,class:h(o(_)("text-black dark:text-white",e.linkClass)),onMousemove:C,onMouseenter:M,onMouseleave:B},{default:W(()=>[j(t.$slots,"default",{},void 0,!0)]),_:3},8,["to","class"]),o(r)?(v(),w("div",{key:0,ref_key:"preview",ref:l,class:"pointer-events-none absolute z-50",style:g(o(b))},[p("div",{class:h(["overflow-hidden rounded-xl shadow-xl",[o($),{"transform-gpu":!e.isStatic}]])},[p("div",q,[p("img",{src:o(k),width:t.width,height:t.height,class:"size-full rounded-lg object-cover",style:g(o(y)),alt:"preview",onLoad:L},null,44,A)])],2)],4)):E("",!0)],2)}}}),Y=I(F,[["__scopeId","data-v-52e17571"]]);export{Y as default};
