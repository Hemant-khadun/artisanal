import{e as k,aR as ee,f as t,h as r,j as d,A as T,aS as ae,aT as te,u as i,aX as se,q as U,ar as I,W as N,aY as ne,aZ as re,a_ as oe,a$ as le,r as ue,a4 as de,m as C,n as g,F as b,G as $,ag as h,a8 as S,I as M,k as P,l as V,p as j,R as ie,aG as ce,N as fe,Q as pe,ah as me,aH as _e}from"./C9QOXPtL.js";import{_ as ve}from"./C5MrCb1O.js";import{_ as ge}from"./cSUNoZ_y.js";const be=k({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(m,{emit:o}){const a=ee(m,o);return(e,w)=>(t(),r(i(se),ae(te(i(a))),{default:d(()=>[T(e.$slots,"default")]),_:3},16))}}),$e=k({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const o=m,c=U(()=>{const{class:l,...a}=o;return a});return(l,a)=>(t(),r(i(ne),I({class:i(N)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",o.class)},c.value),{default:d(()=>[T(l.$slots,"default")]),_:3},16,["class"]))}}),ye=k({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const o=m,c=U(()=>{const{class:l,...a}=o;return a});return(l,a)=>(t(),r(i(re),I(c.value,{class:i(N)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",o.class)}),{default:d(()=>[T(l.$slots,"default")]),_:3},16,["class"]))}}),he=k({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const o=m,c=U(()=>{const{class:a,...e}=o;return e}),l=oe(c);return(a,e)=>(t(),r(i(le),I(i(l),{class:i(N)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",o.class)}),{default:d(()=>[T(a.$slots,"default")]),_:3},16,["class"]))}}),ke={class:"flex items-center justify-between pb-3"},we={class:"relative flex overflow-x-auto border-b p-0.5 text-sm"},Ce={class:"flex p-1"},Te=["value","onMousedown"],Be=["value"],Ve=k({__name:"Tabs",props:{variant:{default:"separate"},padded:{type:Boolean,default:!0},inStack:{type:Boolean,default:!1}},setup(m){const o=ue(0),c=new Map(Object.entries(de().value.main.codeIcon));function l(e){var w;return(e==null?void 0:e.icon)||c.get((w=e==null?void 0:e.filename)==null?void 0:w.toLowerCase())||c.get(e==null?void 0:e.language)}function a(e){return(e==null?void 0:e.label)||(e==null?void 0:e.filename)}return(e,w)=>{var A,F,G,q,E,H;const B=me,L=he,z=ye,D=$e,R=be,Z=ve,J=_e,K=ge;return e.variant==="separate"?(t(),r(R,{key:0,class:"[&:not(:first-child)]:mt-5","default-value":a((G=(((F=(A=e.$slots).default)==null?void 0:F.call(A))??[])[0])==null?void 0:G.props)},{default:d(()=>{var _,v;return[C(z,null,{default:d(()=>{var n,u;return[(t(!0),g(b,null,$(((u=(n=e.$slots).default)==null?void 0:u.call(n))??[],(s,f)=>(t(),r(L,{key:`${f}${a(s.props)}`,value:a(s.props)},{default:d(()=>[l(s==null?void 0:s.props)?(t(),r(B,{key:0,name:l(s==null?void 0:s.props),class:"mr-1.5 self-center"},null,8,["name"])):h("",!0),S(" "+M(a(s.props)),1)]),_:2},1032,["value"]))),128))]}),_:1}),(t(!0),g(b,null,$(((v=(_=e.$slots).default)==null?void 0:v.call(_))??[],(n,u)=>(t(),r(D,{key:`${u}${a(n.props)}`,value:a(n.props)},{default:d(()=>[(t(),r(P(n)))]),_:2},1032,["value"]))),128))]}),_:1},8,["default-value"])):e.variant==="line"?(t(),r(R,{key:1,class:"relative mr-auto w-full [&:not(:first-child)]:mt-5","default-value":a((H=(((E=(q=e.$slots).default)==null?void 0:E.call(q))??[])[0])==null?void 0:H.props)},{default:d(()=>{var _,v;return[V("div",ke,[C(z,{class:"h-9 w-full justify-start rounded-none border-b bg-transparent p-0"},{default:d(()=>{var n,u;return[(t(!0),g(b,null,$(((u=(n=e.$slots).default)==null?void 0:u.call(n))??[],(s,f)=>(t(),r(L,{key:`${f}${a(s.props)}`,value:a(s.props),class:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"},{default:d(()=>[l(s==null?void 0:s.props)?(t(),r(B,{key:0,name:l(s==null?void 0:s.props),class:"mr-1.5 self-center"},null,8,["name"])):h("",!0),S(" "+M(a(s.props)),1)]),_:2},1032,["value"]))),128))]}),_:1})]),(t(!0),g(b,null,$(((v=(_=e.$slots).default)==null?void 0:v.call(_))??[],(n,u)=>(t(),r(D,{key:`${u}${a(n.props)}`,value:a(n.props),class:"relative space-y-10"},{default:d(()=>[(t(),r(P(n)))]),_:2},1032,["value"]))),128))]}),_:1},8,["default-value"])):e.variant==="card"?(t(),r(K,{key:2,class:j(["[&:not(:first-child)]:mt-5",[e.inStack&&"mb-0 rounded-none border-none shadow-none"]])},{default:d(()=>{var _,v;return[C(J,null,{default:d(()=>{var n,u,s,f,y,O,Q,W,X,Y;return[V("div",we,[V("div",Ce,[(t(!0),g(b,null,$(((u=(n=e.$slots).default)==null?void 0:u.call(n))??[],(p,x)=>(t(),g("div",{key:`${x}${a(p.props)}`,value:a(p.props),class:j(["flex cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-75",[i(o)===x&&"bg-muted text-primary"]]),onMousedown:ie(xe=>o.value=x,["left"])},[l(p==null?void 0:p.props)?(t(),r(B,{key:0,name:l(p==null?void 0:p.props),class:"mr-1.5 self-center"},null,8,["name"])):h("",!0),S(" "+M(a(p.props)),1)],42,Te))),128))]),(O=(y=(f=(s=e.$slots).default)==null?void 0:f.call(s)[i(o)])==null?void 0:y.props)!=null&&O.code?(t(),r(Z,{key:0,class:"ml-auto mr-3 self-center pl-2",code:(Y=(X=(W=(Q=e.$slots).default)==null?void 0:W.call(Q)[i(o)])==null?void 0:X.props)==null?void 0:Y.code},null,8,["code"])):h("",!0)]),C(ce,{orientation:"horizontal"})]}),_:1}),(t(!0),g(b,null,$(((v=(_=e.$slots).default)==null?void 0:v.call(_))??[],(n,u)=>{var s,f,y;return fe((t(),g("div",{key:`${u}${a(n.props)}`,value:a(n.props),class:j(["mt-0",[e.padded&&((y=(f=(s=e.$slots).default)==null?void 0:f.call(s)[i(o)])==null?void 0:y.type).tag!=="pre"&&"p-3"]])},[(t(),r(P(n),{"in-group":!0}))],10,Be)),[[pe,i(o)===u]])}),128))]}),_:1},8,["class"])):h("",!0)}}});export{Ve as _};