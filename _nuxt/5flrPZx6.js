import{_ as M}from"./CfVknrBB.js";import{e as R,r,q as B,E as T,f as $,n as y,A as u,l as i,H as m,u as s,m as z,p}from"./C9QOXPtL.js";const H={class:"relative flex h-40 items-center overflow-hidden"},k={class:"overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"},X=R({__name:"TextRevealCard",props:{class:{default:""},starsCount:{default:130},starsClass:{}},setup(h){const g=h,t=r(null),a=r(0),c=r(0),d=r(0),o=r(!1),w=B(()=>(a.value-50)*.1);T(()=>{if(t.value){const e=t.value.getBoundingClientRect();c.value=e.left,d.value=e.width}window.addEventListener("resize",_)});function _(){if(t.value){const e=t.value.getBoundingClientRect();c.value=e.left,d.value=e.width}}function C(e){if(e.preventDefault(),t.value){const n=t.value.getBoundingClientRect(),l=e.clientX-n.left;a.value=l/n.width*100}}function f(){o.value=!1,setTimeout(()=>{o.value||(a.value=0)},100)}function v(){o.value=!0}function b(e){if(e.preventDefault(),t.value){const n=t.value.getBoundingClientRect(),l=e.touches[0].clientX-n.left;a.value=l/n.width*100}}return(e,n)=>{const l=M;return $(),y("div",{ref_key:"cardRef",ref:t,class:p(["relative w-full max-w-[40rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-4 md:p-8 sm:p-6",g.class]),onMouseenter:v,onMouseleave:f,onMousemove:C,onTouchstart:v,onTouchend:f,onTouchmove:b},[u(e.$slots,"header"),i("div",H,[i("div",{style:m({width:"100%",opacity:s(a)>0?1:0,clipPath:`inset(0 ${100-s(a)}% 0 0)`,transition:s(o)?"none":"all 0.4s ease-out"}),class:"absolute z-20 bg-[#1d1c20] will-change-transform"},[u(e.$slots,"text")],4),i("div",{style:m({left:`${s(a)}%`,transform:`rotate(${s(w)}deg)`,opacity:s(a)>0?1:0,transition:s(o)?"none":"all 0.4s ease-out"}),class:"absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"},null,4),i("div",k,[u(e.$slots,"revealText"),z(l,{"stars-count":e.starsCount,class:p(e.starsClass)},null,8,["stars-count","class"])])])],34)}}});export{X as _};