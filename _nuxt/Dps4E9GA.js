import{e as h,f as n,n as l,h as s,j as m,F as u,m as o,ag as r,l as a,I as i,aC as _,G as y,a8 as k,ah as w,a5 as I,_ as $,a6 as b}from"./Cl5bgDjB.js";import{_ as B}from"./sMILBI_m.js";const N={class:"mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"},v={class:"sm:hidden"},C={class:"hidden sm:inline"},S={class:"text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"},V={class:"max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"},j={class:"flex w-full items-center justify-center space-x-4 py-4 md:pb-10"},D=h({__name:"Hero",props:{announcement:{},actions:{}},setup(z){return(e,F)=>{const c=w,d=B,g=I,p=$,f=b;return n(),l("section",N,[e.announcement?(n(),s(p,{key:0,to:e.announcement.to,target:e.announcement.target,class:"inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"},{default:m(()=>[e.announcement.icon?(n(),l(u,{key:0},[o(c,{name:e.announcement.icon,size:16},null,8,["name"]),o(d,{class:"mx-2 h-4",orientation:"vertical"})],64)):r("",!0),a("span",v,i(e.announcement.title),1),a("span",C,i(e.announcement.title),1),o(g,{name:"lucide:arrow-right",class:"ml-1 size-4"})]),_:1},8,["to","target"])):r("",!0),a("h1",S,[_(e.$slots,"title",{unwrap:"p"})]),a("span",V,[_(e.$slots,"description",{unwrap:"p"})]),a("section",j,[(n(!0),l(u,null,y(e.actions,(t,x)=>(n(),s(p,{key:x,to:t.to,target:t.target},{default:m(()=>[o(f,{variant:t.variant},{default:m(()=>[t.leftIcon?(n(),s(c,{key:0,name:t.leftIcon,class:"mr-1"},null,8,["name"])):r("",!0),k(" "+i(t.name)+" ",1),t.rightIcon?(n(),s(c,{key:1,name:t.rightIcon,class:"ml-1"},null,8,["name"])):r("",!0)]),_:2},1032,["variant"])]),_:2},1032,["to","target"]))),128))])])}}});export{D as default};
