import{c as a}from"./CmsFIY_Q.js";import{e as l,f as d,n as u,l as f}from"./DcqQ6i2p.js";const m={class:"relative flex h-24 w-full flex-col items-center justify-center"},x=l({__name:"ConfettiFireworksDemo",setup(p){function i(){const n=Date.now()+5e3,o={startVelocity:30,spread:360,ticks:60,zIndex:0};function r(t,e){return Math.random()*(e-t)+t}const c=window.setInterval(()=>{const t=n-Date.now();if(t<=0){clearInterval(c);return}const e=50*(t/5e3);a({...o,particleCount:e,origin:{x:r(.1,.3),y:Math.random()-.2}}),a({...o,particleCount:e,origin:{x:r(.7,.9),y:Math.random()-.2}})},250)}return(s,n)=>(d(),u("div",m,[f("button",{class:"rounded-lg bg-foreground px-4 py-2 text-background transition duration-500 hover:scale-110",onClick:i}," Trigger Fireworks ")]))}});export{x as default};