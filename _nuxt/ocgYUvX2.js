import{c as x}from"./CDaaleer.js";import{c as p}from"./BjnAGth8.js";import{e as S,as as W,o as _,r as A,E as C,f as z,n as B,l as v,H as R,u as r,A as F,p as m}from"./C9QOXPtL.js";const N=S({__name:"WavyBackground",props:{class:{},containerClass:{},colors:{default:()=>["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"]},waveWidth:{default:50},backgroundFill:{default:"black"},blur:{default:10},speed:{default:"fast"},waveOpacity:{default:.5}},setup(h){const t=h,g=x();let l,s,c=0,e=null,f;const o=W("canvasRef");function b(){return t.speed==="slow"?.001:.002}function w(){const n=o.value;if(n&&(e=n.getContext("2d"),e)){const a=o.value.parentElement;a&&(l=e.canvas.width=a.clientWidth,s=e.canvas.height=a.clientHeight),e.filter=`blur(${t.blur}px)`,window.onresize=()=>{a&&(l=e.canvas.width=a.clientWidth,s=e.canvas.height=a.clientHeight),e.filter=`blur(${t.blur}px)`},u()}}function y(n){c+=b();for(let a=0;a<n;a++){e.beginPath(),e.lineWidth=t.waveWidth,e.strokeStyle=t.colors[a%t.colors.length];for(let i=0;i<l;i+=5){const k=g(i/800,.3*a,c)*100;e.lineTo(i,k+s*.5)}e.stroke(),e.closePath()}}function u(){e&&(e.fillStyle=t.backgroundFill,e.globalAlpha=t.waveOpacity,e.fillRect(0,0,l,s),y(5),f=requestAnimationFrame(u))}_(()=>{cancelAnimationFrame(f)});const d=A(!1);return C(()=>{d.value=typeof window<"u"&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),w()}),(n,a)=>(z(),B("div",{class:m(r(p)("h-screen flex flex-col items-center justify-center",t.containerClass))},[v("canvas",{id:"canvas",ref_key:"canvasRef",ref:o,class:"absolute z-0",style:R({filter:r(d)?`blur(${t.blur}px)`:void 0})},null,4),v("div",{class:m(r(p)("relative z-10",t.class))},[F(n.$slots,"default")],2)],2))}});export{N as _};