import{e as f,r as p,f as m,n as x,l as r,I as c,u as n,m as s,j as i,a8 as l,F as _,a6 as w}from"./Bv-pOpPk.js";import{O as o,_ as C}from"./CeJeHO-c.js";import"./D24aqAm4.js";import"./DlAUqK2U.js";const k={class:"flex w-full flex-row items-center justify-between py-4"},b={class:"relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"},O=f({__name:"OrbitDemoSynchronized",setup(y){const e=p(o.Clockwise);function d(){if(o.Clockwise===e.value){e.value=o.CounterClockwise;return}e.value=o.Clockwise}return(g,t)=>{const u=w,a=C;return m(),x(_,null,[r("div",k,[r("p",null,c(`Current direction : ${n(o).Clockwise===n(e)?"Clockwise":"CounterClockwise"}`),1),s(u,{onClick:d},{default:i(()=>[l(c(`Switch to : ${n(o).Clockwise===n(e)?"CounterClockwise":"Clockwise"}`),1)]),_:1})]),r("div",b,[t[3]||(t[3]=r("span",{class:"pointer-events-none text-center text-8xl font-semibold leading-none"}," 🌍 ",-1)),s(a,{class:"items-center justify-center border-none bg-transparent text-xl",radius:190,duration:20,delay:200,direction:n(e),path:""},{default:i(()=>t[0]||(t[0]=[l(" 🪨 ")])),_:1},8,["direction"]),s(a,{class:"items-center justify-center border-none bg-transparent text-4xl",radius:100,delay:4,direction:n(e),path:""},{default:i(()=>t[1]||(t[1]=[l(" 🌕 ")])),_:1},8,["direction"]),s(a,{class:"items-center justify-center border-none bg-transparent text-4xl",radius:250,delay:4,direction:n(e),path:""},{default:i(()=>t[2]||(t[2]=[l(" 🪐 ")])),_:1},8,["direction"])])],64)}}});export{O as default};