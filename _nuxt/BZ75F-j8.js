import{e as _,r as i,q as r,w as h,f as d,n as f,A as p,u as a,m as z,j as B,l as b,H as m,ag as w,al as C}from"./DcqQ6i2p.js";const H={key:0},O=_({__name:"Lens",props:{zoomFactor:{default:1.5},lensSize:{default:170},position:{default:()=>({x:200,y:150})},isStatic:{type:Boolean,default:!1},hovering:{type:Boolean}},emits:["hover-update"],setup(v,{emit:g}){const t=v,y=g,$=i(null),l=i(!1),n=i({x:100,y:100}),x=r(()=>t.hovering??l.value);function s(e){l.value=e,y("hover-update",e)}function k(e){const o=e.currentTarget.getBoundingClientRect();n.value={x:e.clientX-o.left,y:e.clientY-o.top}}const c=r(()=>{const e=t.isStatic?t.position:n.value;return`circle ${t.lensSize/2}px at ${e.x}px ${e.y}px`}),u=r(()=>{const e=t.isStatic?t.position:n.value;return`${e.x}px ${e.y}px`});return h(()=>{s(!1)}),(e,o)=>{const M=C;return d(),f("div",{ref_key:"containerRef",ref:$,class:"relative z-20 overflow-hidden rounded-lg",onMouseenter:o[0]||(o[0]=S=>s(!0)),onMouseleave:o[1]||(o[1]=S=>s(!1)),onMousemove:k},[p(e.$slots,"default"),t.isStatic||a(x)?(d(),f("div",H,[z(M,{initial:{opacity:0,scale:.58},enter:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}},leave:{opacity:0,scale:.8},class:"absolute inset-0 overflow-hidden",style:m({maskImage:`radial-gradient(${a(c)}, black 100%, transparent 100%)`,WebkitMaskImage:`radial-gradient(${a(c)}, black 100%, transparent 100%)`,transformOrigin:a(u)})},{default:B(()=>[b("div",{class:"absolute inset-0",style:m({transform:`scale(${t.zoomFactor})`,transformOrigin:a(u)})},[p(e.$slots,"default")],4)]),_:3},8,["style"])])):w("",!0)],544)}}});export{O as _};
