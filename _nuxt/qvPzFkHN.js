import{e as m,v as b,r,E as k,w as I,o as _,a7 as x,f as s,n as i,l as d,h as n,k as l,u as e,m as z,j as V,N as v,H as y,af as X,p as w}from"./DcqQ6i2p.js";import{c as B}from"./D-gephX2.js";import{s as O}from"./CsPvxasI.js";const C={style:{clipPath:"polygon(0 0, 100% 0, 100% 50%, 0 50%)",zIndex:-1,backfaceVisibility:"hidden"},class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},P={style:{clipPath:"polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",zIndex:-1,backfaceVisibility:"hidden"},class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},D=["enter","leave"],E=["enter","leave"],G=m({__name:"LogoOrigami",props:{duration:{default:1.5},delay:{default:2.5},class:{}},setup(h){const g=h,c=b(),u=r(),t=r(0),a=r([]);return k(()=>{I(()=>{a.value=c.default?c.default():[]}),u.value=O(()=>{t.value=(t.value+1)%a.value.length},g.delay*1e3)}),_(()=>{clearInterval(u.value)}),(o,p)=>{const f=x("motion");return s(),i("div",{style:{transform:"rotateY(-20deg)",transformStyle:"preserve-3d"},class:w(e(B)("relative z-0 h-44 w-60 shrink-0 rounded-xl border border-background/75 bg-background",o.$props.class))},[d("div",C,[(s(),n(l(e(a)[(e(t)+1)%e(a).length])))]),d("div",P,[(s(),n(l(e(a)[e(t)%e(a).length])))]),z(X,null,{default:V(()=>[v((s(),i("div",{key:e(t),style:y({clipPath:"polygon(0 0, 100% 0, 100% 50%, 0 50%)",zIndex:-e(t),backfaceVisibility:"hidden"}),initial:{rotateX:"0deg",y:"-50%",x:"-50%"},enter:{rotateX:"-180deg",transition:{duration:o.duration*1e3,ease:"easeInOut"}},leave:{rotateX:"-180deg",transition:{duration:o.duration*1e3,ease:"easeInOut"}},class:"absolute left-1/2 top-1/2"},[(s(),n(l(e(a)[e(t)%e(a).length])))],12,D)),[[f]]),v((s(),i("div",{key:(e(t)+1)*2,style:y({clipPath:"polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",zIndex:e(t),backfaceVisibility:"hidden"}),initial:{rotateX:"180deg",y:"-50%",x:"-50%"},enter:{rotateX:"0deg",transition:{duration:o.duration*1e3,ease:"easeInOut"}},leave:{rotateX:"0deg",transition:{duration:o.duration*1e3,ease:"easeInOut"}},class:"absolute left-1/2 top-1/2"},[(s(),n(l(e(a)[(e(t)+1)%e(a).length])))],12,E)),[[f]])]),_:1}),p[0]||(p[0]=d("hr",{style:{transform:"translateZ(1px)"},class:"absolute left-4 right-[15px] top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"},null,-1))],2)}}});export{G as _};
