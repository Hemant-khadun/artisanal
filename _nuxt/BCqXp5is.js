import{e as R,K as j,r as o,L as q,q as m,ap as E,aq as K,b as g,ae as O,f as y,n as w,m as b,j as x,l as U,p as S,ar as H,T as I,u as $,A as G,ag as T,H as J}from"./Bv-pOpPk.js";import{c as Q}from"./D24aqAm4.js";const W=["src"],Z=R({__name:"ImagesSlider",props:j({images:{type:Array,default:()=>[]},hideOverlay:{type:Boolean,default:!1},overlayClass:{type:String,default:""},imageClass:{type:String,default:"bg-cover bg-center bg-no-repeat"},enterFromClass:{type:String,default:"scale-0 origin-center"},enterActiveClass:{type:String,default:"transition-transform duration-300 ease-in-out"},leaveActiveClass:{type:String,default:"transition-transform duration-300 ease-in-out"},autoplay:{type:[Boolean,Number,String],default:!1},direction:{type:String,default:"vertical",validator:l=>["vertical","horizontal"].includes(l)},perspective:{type:String,default:"1000px"}},{modelValue:{type:Number,default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=l,u=o(null),c=o("up"),r=q(l,"modelValue");function C(e){a.direction==="horizontal"?c.value=e==="next"?"left":"right":c.value=e==="next"?"up":"down"}const s=o(!0),n=o(!1),i=o([]),h=m(()=>i.value[r.value]);function V(){s.value=!0;const e=a.images.map(t=>new Promise((F,M)=>{const p=new Image;p.src=t,p.onload=()=>F(t),p.onerror=()=>M(t)}));Promise.all(e).then(t=>{i.value=t,s.value=!1})}V();function A(){if(s.value||n.value)return!1;C("prev");let e=r.value-1;e<0&&(e=i.value.length-1),r.value=e}function f(){var t;if(s.value||n.value)return!1;C("next");let e=r.value+1;e>=((t=i.value)==null?void 0:t.length)-1&&(e=0),r.value=e}E(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],e=>{if(e.preventDefault(),s.value||n.value)return!1;v(),["ArrowUp","ArrowLeft"].includes(e.key)?A():f()},{target:u});const{direction:_,isSwiping:B}=K(u,{passive:!1});g(_,e=>{switch(e){case"up":case"left":return A();case"down":case"right":return f()}}),g(B,N);function N(e){if(e){v();return}d()}const k=m(()=>a.autoplay===!1?0:a.autoplay===!0?5e3:typeof a.autoplay=="string"?+a.autoplay:a.autoplay),{pause:v,resume:d,isActive:z}=O(()=>{f()},k);g(s,e=>{e?v():d()});function D(){n.value=!0}function L(){n.value=!1,z.value===!1&&k.value&&d()}const P=m(()=>{const e={enterActiveClass:a.enterActiveClass,leaveActiveClass:a.leaveActiveClass,enterFromClass:a.enterFromClass,leaveToClass:"",onBeforeLeave:D,onAfterEnter:L};switch(c.value){case"up":e.leaveToClass="-translate-y-full";break;case"down":e.leaveToClass="translate-y-full";break;case"left":e.leaveToClass="-translate-x-full";break;case"right":e.leaveToClass="translate-x-full";break}return e});return(e,t)=>(y(),w("div",{ref_key:"sliderRef",ref:u,tabindex:"0",class:"relative flex size-full items-center justify-center overflow-hidden transition-colors focus:outline-none focus:ring-1",style:J({perspective:a.perspective})},[b(I,H({mode:"out-in"},P.value),{default:x(()=>[(y(),w("div",{key:h.value,class:""},[U("img",{src:h.value,class:S(a.imageClass)},null,10,W)]))]),_:1},16),l.hideOverlay!==!0?(y(),w("div",{key:0,class:S($(Q)("absolute inset-0",a.overlayClass))},[b(I,{appear:"","enter-active-class":"transition-all duration-300 delay-300 ease-in-out","enter-from-class":"opacity-0 -translate-y-10"},{default:x(()=>[s.value?T("",!0):G(e.$slots,"default",{key:0,currentIndex:r.value})]),_:3})],2)):T("",!0)],4))}});export{Z as _};
