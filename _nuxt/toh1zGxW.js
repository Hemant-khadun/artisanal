import{aV as i,e as d,aP as c,q as _,f as g,n as m,l as u,p as o,u as a,A as f}from"./Cl5bgDjB.js";import{c as r}from"./I7JXPB8D.js";import{_ as v}from"./DlAUqK2U.js";const b={Top:"top",Bottom:"bottom",Left:"left",Right:"right",TopLeft:"top-left",TopRight:"top-right",BottomLeft:"bottom-left",BottomRight:"bottom-right"},e={Grid:"grid",Dot:"dot",BigDot:"big-dot"},x={Default:1e4,Slow:25e3,Fast:5e3},k=i("relative text-clip",{variants:{variant:{[e.Grid]:"bg-[linear-gradient(to_right,hsl(var(--foreground)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.3)_1px,transparent_1px)]",[e.Dot]:"bg-[radial-gradient(hsl(var(--foreground)/0.3)_1px,transparent_1px)]",[e.BigDot]:"bg-[radial-gradient(hsl(var(--foreground)/0.3)_3px,transparent_3px)]"},size:{xs:"bg-[size:8px_8px]",sm:"bg-[size:16px_16px]",md:"bg-[size:24px_24px]",lg:"bg-[size:32px_32px]"}},defaultVariants:{variant:"grid",size:"md"}}),n={Ellipse:"ellipse",EllipseTop:"ellipse-top"},B=i("bg-background",{variants:{mask:{[n.Ellipse]:"[mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)]",[n.EllipseTop]:"[mask-image:radial-gradient(ellipse_at_top,transparent,black_80%)]"}},defaultVariants:{mask:"ellipse"}}),T=d({__name:"PatternBackground",props:{class:{},animate:{type:Boolean},direction:{default:()=>b.Top},variant:{default:()=>e.Grid},size:{default:void 0},mask:{default:void 0},speed:{default:()=>x.Default}},setup(l){c(t=>({"31a8695a":a(p)}));const s=l,p=_(()=>`${s.speed}ms`);return(t,h)=>(g(),m("div",{class:o(a(r)(a(k)({variant:t.variant,size:t.size}),` ${t.animate?"move move-"+t.direction:""} `,s.class))},[u("div",{class:o(a(r)("absolute pointer-events-none inset-0 flex items-center justify-center",a(B)({mask:t.mask})))},null,2),f(t.$slots,"default",{},void 0,!0)],2))}}),R=v(T,[["__scopeId","data-v-583c1dcc"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{b as P,R as _,e as a,x as b,n as c,z as d};