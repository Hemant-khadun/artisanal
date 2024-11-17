import{e as c,f as s,n as m,A as d,p as o,u as i,W as g,aV as y,h as n,j as f,ag as l,a8 as x,I as w,m as A,l as p,aW as v,ah as $}from"./C9QOXPtL.js";const C=c({__name:"Alert",props:{class:{},variant:{}},setup(t){const r=t;return(a,e)=>(s(),m("div",{class:o(i(g)(i(B)({variant:a.variant}),r.class)),role:"alert"},[d(a.$slots,"default")],2))}}),V=c({__name:"AlertDescription",props:{class:{}},setup(t){const r=t;return(a,e)=>(s(),m("div",{class:o(i(g)("text-sm [&_p]:leading-relaxed",r.class))},[d(a.$slots,"default")],2))}}),_=c({__name:"AlertTitle",props:{class:{}},setup(t){const r=t;return(a,e)=>(s(),m("h5",{class:o(i(g)("mb-1 font-medium leading-none tracking-tight",r.class))},[d(a.$slots,"default")],2))}}),B=y("relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),S={class:"flex flex-row gap-2"},W=c({__name:"Alert",props:{title:{},icon:{},type:{default:"default"},to:{},target:{},external:{type:Boolean,default:()=>{}},inStack:{type:Boolean,default:!1}},setup(t){const r={default:"",info:"border-sky-600 text-sky-600 [&>svg]:text-sky-600",warning:"border-amber-600 text-amber-600 [&>svg]:text-amber-600",success:"border-green-600 text-green-600 [&>svg]:text-green-600",danger:"border-red-600 text-red-600 [&>svg]:text-red-600"};async function a(){t.to&&(t.target?await v(t.to,{external:t.external??t.to.startsWith("http"),open:{target:t.target}}):await v(t.to,{external:t.external??t.to.startsWith("http")}))}return(e,T)=>{const u=$,b=_,h=V,k=C;return s(),n(k,{class:o(["transition-all [&:not(:first-child)]:mt-5",[r[e.type],e.to&&"cursor-pointer hover:bg-muted/50",e.inStack&&"m-0 rounded-none border-none"]]),onClick:a},{default:f(()=>[e.icon&&e.title?(s(),n(u,{key:0,name:e.icon,size:16},null,8,["name"])):l("",!0),e.title?(s(),n(b,{key:1,class:"font-semibold"},{default:f(()=>[x(w(e.title),1)]),_:1})):l("",!0),A(h,null,{default:f(()=>[p("div",S,[e.icon&&!e.title?(s(),n(u,{key:0,name:e.icon,size:16,class:"mb-[2px] min-w-5 self-center"},null,8,["name"])):l("",!0),p("span",{class:o(["w-full",[e.to&&"pr-3"]])},[d(e.$slots,"default")],2)]),e.to?(s(),n(u,{key:0,name:"lucide:arrow-up-right",class:"absolute right-4 top-4"})):l("",!0)]),_:3})]),_:3},8,["class"])}}});export{W as _};
