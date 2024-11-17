import{c as $}from"./D24aqAm4.js";import{e as O,r as u,w as S,o as Y,f as b,n as X,l as o,u as s,p as M}from"./Bv-pOpPk.js";const A=["width","height","viewBox"],F=["d","stroke","stroke-width","stroke-opacity"],W=["d","stroke-width","stroke"],E=["stop-color"],N=["stop-color"],U=["stop-color"],D=["stop-color"],T=["values","dur"],z=["values","dur"],P=O({__name:"AnimatedBeam",props:{class:{},containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"gray"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#FFAA40"},gradientStopColor:{default:"#9C40FF"},delay:{default:0},duration:{default:Math.random()*3+4},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0}},setup(h){const e=h,d="beam-"+Math.random().toString(36).substring(2,10),g=e.reverse?"90%; -10%;":"10%; 110%;",m=e.reverse?"100%; 0%;":"0%; 100%;",l=u(""),a=u({width:0,height:0});let n;const{stop:v}=S(w);function w(){n==null&&e.containerRef!=null&&(n=new ResizeObserver(()=>{k()}),n.observe(e.containerRef),v())}function k(){if(e.containerRef&&e.fromRef&&e.toRef){const t=e.containerRef.getBoundingClientRect(),r=e.fromRef.getBoundingClientRect(),i=e.toRef.getBoundingClientRect(),y=t.width,C=t.height;a.value={width:y,height:C};const f=r.left-t.left+r.width/2+(e.startXOffset??0),c=r.top-t.top+r.height/2+(e.startYOffset??0),p=i.left-t.left+i.width/2+(e.endXOffset??0),R=i.top-t.top+i.height/2+(e.endYOffset??0),_=c-(e.curvature??0),B=`M ${f},${c} Q ${(f+p)/2},${_} ${p},${R}`;l.value=B}}return Y(()=>{n==null||n.disconnect()}),(t,r)=>(b(),X("svg",{fill:"none",width:s(a).width,height:s(a).height,xmlns:"http://www.w3.org/2000/svg",class:M(s($)("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",t.$props.class)),viewBox:`0 0 ${s(a).width} ${s(a).height}`},[o("path",{d:s(l),stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,F),o("path",{d:s(l),"stroke-width":t.pathWidth,stroke:`url(#${d})`,"stroke-opacity":"1","stroke-linecap":"round"},null,8,W),o("defs",null,[o("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:"0%",x2:"0%",y1:"0%",y2:"0%"},[o("stop",{"stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,E),o("stop",{"stop-color":t.gradientStartColor},null,8,N),o("stop",{offset:"32.5%","stop-color":t.gradientStopColor},null,8,U),o("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,D),o("animate",{attributeName:"x1",values:s(g),dur:`${t.duration}s`,keyTimes:"0; 1",keySplines:"0.16 1 0.3 1",calcMode:"spline",repeatCount:"indefinite"},null,8,T),o("animate",{attributeName:"x2",values:s(m),dur:`${t.duration}s`,keyTimes:"0; 1",keySplines:"0.16 1 0.3 1",calcMode:"spline",repeatCount:"indefinite"},null,8,z)])])],10,A))}});export{P as _};
