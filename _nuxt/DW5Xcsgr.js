import{c as o}from"./CmsFIY_Q.js";import{e as r,f as c,n as i,l as s}from"./DcqQ6i2p.js";const l={class:"relative flex h-24 w-full flex-col items-center justify-center"},p=r({__name:"ConfettiCannonsDemo",setup(f){function a(){const t=Date.now()+3e3,e=["#a786ff","#fd8bbc","#eca184","#f8deb1"];function n(){Date.now()>t||(o({particleCount:2,angle:60,spread:55,startVelocity:60,origin:{x:0,y:.5},colors:e}),o({particleCount:2,angle:120,spread:55,startVelocity:60,origin:{x:1,y:.5},colors:e}),requestAnimationFrame(n))}n()}return(t,e)=>(c(),i("div",l,[s("button",{class:"rounded-lg bg-foreground px-4 py-2 text-background transition duration-500 hover:scale-110",onClick:a}," Trigger Side Cannons ")]))}});export{p as default};