import{e as b,r as m,B as X,C as A,D as k,q,E as j,o as D,b as I,f as L,n as S,l as V,p as H}from"./DcqQ6i2p.js";const T=b({__name:"ParticlesBg",props:{color:{default:"#FFF"},quantity:{default:100},staticity:{default:50},ease:{default:50},class:{default:""}},setup(Y){const r=Y,i=m(null),h=m(null),u=m(null),d=m([]),p=X({x:0,y:0}),e=X({w:0,h:0}),{x:w,y:M}=A(),{pixelRatio:f}=k(),F=q(()=>{let a=r.color.replace(/^#/,"");a.length===3&&(a=a.split("").map(l=>l+l).join(""));const t=parseInt(a,16),n=t>>16&255,s=t>>8&255,o=t&255;return`${n} ${s} ${o}`});j(()=>{i.value&&(u.value=i.value.getContext("2d")),x(),c(),window.addEventListener("resize",x)}),D(()=>{window.removeEventListener("resize",x)}),I([w,M],()=>{R()});function x(){_(),B()}function R(){if(i.value){const a=i.value.getBoundingClientRect(),{w:t,h:n}=e,s=w.value-a.left-t/2,o=M.value-a.top-n/2;s<t/2&&s>-t/2&&o<n/2&&o>-n/2&&(p.x=s,p.y=o)}}function _(){h.value&&i.value&&u.value&&(d.value.length=0,e.w=h.value.offsetWidth,e.h=h.value.offsetHeight,i.value.width=e.w*f.value,i.value.height=e.h*f.value,i.value.style.width=e.w+"px",i.value.style.height=e.h+"px",u.value.scale(f.value,f.value))}function z(){const a=Math.floor(Math.random()*e.w),t=Math.floor(Math.random()*e.h),n=0,s=0,o=Math.floor(Math.random()*2)+1,l=0,v=parseFloat((Math.random()*.6+.1).toFixed(1)),g=(Math.random()-.5)*.2,P=(Math.random()-.5)*.2,$=.1+Math.random()*4;return{x:a,y:t,translateX:n,translateY:s,size:o,alpha:l,targetAlpha:v,dx:g,dy:P,magnetism:$}}function y(a,t=!1){if(u.value){const{x:n,y:s,translateX:o,translateY:l,size:v,alpha:g}=a;u.value.translate(o,l),u.value.beginPath(),u.value.arc(n,s,v,0,2*Math.PI),u.value.fillStyle=`rgba(${F.value.split(" ").join(", ")}, ${g})`,u.value.fill(),u.value.setTransform(f.value,0,0,f.value,0,0),t||d.value.push(a)}}function C(){u.value&&u.value.clearRect(0,0,e.w,e.h)}function B(){C();const a=r.quantity;for(let t=0;t<a;t++){const n=z();y(n)}}function E(a,t,n,s,o){const l=(a-t)*(o-s)/(n-t)+s;return l>0?l:0}function c(){C(),d.value.forEach((a,t)=>{const s=[a.x+a.translateX-a.size,e.w-a.x-a.translateX-a.size,a.y+a.translateY-a.size,e.h-a.y-a.translateY-a.size].reduce((l,v)=>Math.min(l,v)),o=parseFloat(E(s,0,20,0,1).toFixed(2));if(o>1?(a.alpha+=.02,a.alpha>a.targetAlpha&&(a.alpha=a.targetAlpha)):a.alpha=a.targetAlpha*o,a.x+=a.dx,a.y+=a.dy,a.translateX+=(p.x/(r.staticity/a.magnetism)-a.translateX)/r.ease,a.translateY+=(p.y/(r.staticity/a.magnetism)-a.translateY)/r.ease,a.x<-a.size||a.x>e.w+a.size||a.y<-a.size||a.y>e.h+a.size){d.value.splice(t,1);const l=z();y(l)}else y({...a,x:a.x,y:a.y,translateX:a.translateX,translateY:a.translateY,alpha:a.alpha},!0)}),window.requestAnimationFrame(c)}return(a,t)=>(L(),S("div",{ref_key:"canvasContainerRef",ref:h,class:H(a.$props.class),"aria-hidden":"true"},[V("canvas",{ref_key:"canvasRef",ref:i},null,512)],2))}});export{T as _};
