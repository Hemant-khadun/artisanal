import{c as o}from"./D-gephX2.js";import{e as l,r as u,a9 as i,b as f,f as m,h as p,j as d,A as c,p as g,u as y,k as S}from"./DcqQ6i2p.js";const $=l({__name:"CardItem",props:{as:{type:String,default:"div"},class:String,translateX:{type:[Number,String],default:0},translateY:{type:[Number,String],default:0},translateZ:{type:[Number,String],default:0},rotateX:{type:[Number,String],default:0},rotateY:{type:[Number,String],default:0},rotateZ:{type:[Number,String],default:0}},setup(r){const t=r,e=u(null),s=i("use3DCardMouseState");function n(a){e.value&&(a?e.value.style.transform=`translateX(${t.translateX}px) translateY(${t.translateY}px) translateZ(${t.translateZ}px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) rotateZ(${t.rotateZ}deg)`:e.value.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")}return f(s.isMouseEntered,n,{immediate:!0}),(a,X)=>(m(),p(S(r.as),{ref_key:"refElement",ref:e,class:g(y(o)("w-fit transition duration-500 ease-in-out",a.$props.class))},{default:d(()=>[c(a.$slots,"default")]),_:3},8,["class"]))}});export{$ as _};
