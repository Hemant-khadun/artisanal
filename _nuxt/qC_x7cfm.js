import{e as f,f as e,n as a,F as d,G as _,h as y,p as $,u as h,al as x}from"./Cl5bgDjB.js";import{c as M}from"./I7JXPB8D.js";const k={class:"absolute inset-0"},w=f({__name:"TextRevealStars",props:{starsCount:{default:130},class:{default:""}},setup(o){const r=o;function t(){return Math.random()*4-2}function s(){return Math.random()}function n(){return Math.random()}function i(){return{top:`calc(${n()*100}% + ${t()}px)`,left:`calc(${n()*100}% + ${t()}px)`}}function c(){return{top:`calc(${n()*100}% + ${t()}px)`,left:`calc(${n()*100}% + ${t()}px)`,opacity:s(),scale:[1,1.2,0],transition:{opacity:{duration:1e3,repeat:1/0,type:"tween"},scale:{duration:1e3,repeat:1/0,type:"tween"},repeat:1/0,ease:"linear"}}}const l=n()*1e4+2e4;return(u,C)=>{const p=x;return e(),a("div",k,[(e(!0),a(d,null,_(u.starsCount,m=>(e(),y(p,{is:"span",key:`star-${m}`,initial:i(),enter:c(),duration:l,class:$(h(M)("inline-block absolute w-0.5 h-0.5 bg-white rounded-full z-[1]",r.class))},null,8,["initial","enter","class"]))),128))])}}});export{w as _};