import{e as x,f as n,n as m,h as a,j as c,F as u,m as o,ag as s,l as r,I as _,aC as p,G as y,a8 as k,ah as I,a5 as v,_ as w,a6 as $}from"./Bv-pOpPk.js";import{_ as B}from"./DpWLaHa2.js";const N={class:"mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10"},C={class:"underline-offset-4 hover:underline"},S={class:"text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"},V={class:"max-w-2xl text-lg font-light text-foreground"},b={class:"flex w-full items-center justify-start gap-2 py-2"},U=x({__name:"HeroAlt",props:{announcement:{},actions:{}},setup(z){return(e,j)=>{const l=I,d=B,f=v,i=w,g=$;return n(),m("section",N,[e.announcement?(n(),a(i,{key:0,to:e.announcement.to,target:e.announcement.target,class:"inline-flex items-center px-0.5 text-sm font-medium"},{default:c(()=>[e.announcement.icon?(n(),m(u,{key:0},[o(l,{name:e.announcement.icon,size:16},null,8,["name"]),o(d,{class:"mx-2 h-4",orientation:"vertical"})],64)):s("",!0),r("span",C,_(e.announcement.title),1),o(f,{name:"lucide:arrow-right",class:"ml-1 size-4"})]),_:1},8,["to","target"])):s("",!0),r("h1",S,[p(e.$slots,"title",{unwrap:"p"})]),r("p",V,[p(e.$slots,"description",{unwrap:"p"})]),r("div",b,[(n(!0),m(u,null,y(e.actions,(t,h)=>(n(),a(i,{key:h,to:t.to,target:t.target},{default:c(()=>[o(g,{variant:t.variant,size:"sm"},{default:c(()=>[t.leftIcon?(n(),a(l,{key:0,name:t.leftIcon,class:"mr-1"},null,8,["name"])):s("",!0),k(" "+_(t.name)+" ",1),t.rightIcon?(n(),a(l,{key:1,name:t.rightIcon,class:"ml-1"},null,8,["name"])):s("",!0)]),_:2},1032,["variant"])]),_:2},1032,["to","target"]))),128))])])}}});export{U as default};