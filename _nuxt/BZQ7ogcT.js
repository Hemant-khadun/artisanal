import{e as R,r as d,q as s,f as j,n as A,l as n,m as f,j as v,N as h,p as o,Q as m,T as p,A as E}from"./Cl5bgDjB.js";import{c as u}from"./I7JXPB8D.js";import{_ as S}from"./DlAUqK2U.js";const T={class:"relative size-full overflow-hidden"},U=["src"],V=R({__name:"DirectionAwareHover",props:{imageUrl:{},childrenClass:{default:void 0},imageClass:{default:void 0},class:{default:void 0}},setup(g){const r=g,i=d(null),e=d(null);function _(a){if(!i.value)return;switch(w(a,i.value)){case 0:e.value="top";break;case 1:e.value="right";break;case 2:e.value="bottom";break;case 3:e.value="left";break;default:e.value="left";break}}function b(){e.value=null}function w(a,c){const{width:t,height:l,left:z,top:D}=c.getBoundingClientRect(),B=a.clientX-z-t/2*(t>l?l/t:1),N=a.clientY-D-l/2*(l>t?t/l:1);return Math.round(Math.atan2(N,B)/1.57079633+5)%4}const C=s(()=>u("group/card relative h-60 w-60 overflow-hidden rounded-lg bg-transparent md:h-96 md:w-96",r.class)),k=s(()=>u("h-full w-full scale-150 object-cover transition-transform duration-300",r.imageClass)),y=s(()=>u("absolute bottom-4 left-4 z-40 text-white transition-opacity duration-300",r.childrenClass)),x=s(()=>`absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 ${e.value==="top"?"-translate-y-full":e.value==="bottom"?"translate-y-full":e.value==="left"?"-translate-x-full":e.value==="right"?"translate-x-full":""}`),M=s(()=>({"translate-y-5":e.value==="top","-translate-y-5":e.value==="bottom","translate-x-5":e.value==="left","-translate-x-5":e.value==="right"}));return(a,c)=>(j(),A("div",{ref_key:"divRef",ref:i,class:o(C.value),onMouseenter:_,onMouseleave:b},[n("div",T,[f(p,{name:"fade"},{default:v(()=>[h(n("div",{class:o(x.value)},null,2),[[m,e.value!==null]])]),_:1}),n("div",{class:o(["relative size-full bg-gray-50 transition-transform duration-300 dark:bg-black",M.value])},[n("img",{src:a.imageUrl,alt:"image",class:o(k.value),width:"1000",height:"1000"},null,10,U)],2),f(p,{name:"fade"},{default:v(()=>[h(n("div",{class:o(y.value)},[E(a.$slots,"default",{},void 0,!0)],2),[[m,e.value!==null]])]),_:3})])],34))}}),L=S(V,[["__scopeId","data-v-c3fbd6a6"]]);export{L as default};
