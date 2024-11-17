import{e as I,aP as L,r as h,q as i,f as w,n as z,N as M,O as R,u,l as c,am as V,p as B,H as b}from"./Bv-pOpPk.js";import{c as E}from"./D24aqAm4.js";import{_ as N}from"./DlAUqK2U.js";const P=I({__name:"BalanceSlider",props:{initialValue:{default:50},leftColor:{default:"#e68a00"},rightColor:{default:"#ffffff"},minShiftLimit:{default:40},maxShiftLimit:{default:68},leftContent:{default:"LEFT"},rightContent:{default:"RIGHT"},indicatorColor:{default:"#FFFFFF"},borderRadius:{default:8}},setup(g){L(l=>({"8c7e1542":u(H)}));const o=g,a=h(o.initialValue),n=h(0),m=i(()=>a.value>o.minShiftLimit&&a.value<o.maxShiftLimit?1:0),x=i(()=>({"--value":a.value,"--shift":m.value,"--active":n.value,"--leftContent":`"${o.leftContent} "`,"--rightContent":`" ${o.rightContent}"`,"--indicatorColor":T.value})),y=i(()=>({"--shift":m.value})),F=i(()=>({"--value":a.value,"--shift":m.value,"--leftColor":S.value,"--rightColor":k.value})),S=i(()=>{const[l,e,t]=p(o.leftColor),s=.4,r=24+30*(100-a.value)/100;return`hsl(${l} ${e}% ${r}% / ${s})`}),k=i(()=>{const[l,e,t]=p(o.rightColor),s=.1+.4*(100-a.value)/100;return`hsl(${l} ${e}% ${t}% / ${s})`}),T=i(()=>{const[l,e,t]=p(o.indicatorColor),s=n.value*.5+.5;return`hsl(${l} ${e}% ${t}% / ${s})`}),H=i(()=>`${o.borderRadius}px`);function p(l){l=l.replace(/^#/,"");let e=parseInt(l.substring(0,2),16)/255,t=parseInt(l.substring(2,4),16)/255,s=parseInt(l.substring(4,6),16)/255,r=Math.max(e,t,s),d=Math.min(e,t,s),f=0,C=0,$=(r+d)/2;if(r!=d){let v=r-d;switch(C=$>.5?v/(2-r-d):v/(r+d),r){case e:f=(t-s)/v+(t<s?6:0);break;case t:f=(s-e)/v+2;break;case s:f=(e-t)/v+4;break}f/=6}return[f*360,C*100,$*100]}return(l,e)=>(w(),z("div",{class:"slider-container relative mx-auto my-0 grid place-items-center overflow-hidden",style:b(u(x)),onMouseenter:e[1]||(e[1]=t=>n.value=1),onMouseleave:e[2]||(e[2]=t=>n.value=0),onFocusin:e[3]||(e[3]=t=>n.value=1),onFocusout:e[4]||(e[4]=t=>n.value=0),onTouchstart:e[5]||(e[5]=t=>n.value=1),onTouchend:e[6]||(e[6]=t=>n.value=0)},[M(c("input",{id:"track","onUpdate:modelValue":e[0]||(e[0]=t=>V(a)?a.value=t:null),type:"range",min:"0",max:"100",class:"size-full touch-none opacity-0 hover:cursor-grab focus-visible:outline-offset-4 focus-visible:outline-transparent active:cursor-grabbing"},null,512),[[R,u(a)]]),c("div",{"aria-hidden":"true",class:B(u(E)("slider-value-labels pointer-events-none absolute inset-x-0 top-0 z-[2] h-1/2 text-base")),style:b(u(y))},null,6),c("div",{class:"slider-track pointer-events-none absolute bottom-0 w-full",style:b(u(F))},e[7]||(e[7]=[c("div",{class:"slider-indicator absolute top-1/2 z-[2] h-3/4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-sm"},null,-1)]),4)],36))}}),G=N(P,[["__scopeId","data-v-cbd04e46"]]);export{G as default};
