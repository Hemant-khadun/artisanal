import{c as T}from"./D-gephX2.js";import{c as J}from"./CDaaleer.js";import{e as K,as as z,E as Q,aa as X,a7 as Z,f as O,n as M,N as x,l as A,A as ee,p as I,u as L}from"./DcqQ6i2p.js";const te=50,ne=150,C=9,re=100,oe=3,ae=.00125,se=.00125,ie=5e-4,ce=K({__name:"Vortex",props:{class:{},containerClass:{},particleCount:{default:700},rangeY:{default:100},baseHue:{default:220},baseSpeed:{default:0},rangeSpeed:{default:1.5},baseRadius:{default:1},rangeRadius:{default:2},backgroundColor:{default:"#000000"}},setup(B){const D=2*Math.PI;let m=0;const s=B,p=z("canvasRef"),y=z("containerRef"),h=s.particleCount*C,E=J();let r=new Float32Array(h),w=[0,0];function f(e){return e*Math.random()}function H(e){return e-f(2*e)}function V(e,t){const n=.5*t;return Math.abs((e+n)%t-n)/n}function R(e,t,n){return(1-n)*e+n*t}function F(){const e=p.value,t=y.value;if(e&&t){const n=e.getContext("2d");n&&(_(e),N(),k(e,n))}}function N(){m=0,r=new Float32Array(h);for(let e=0;e<h;e+=C)P(e)}function P(e){const t=p.value;if(!t)return;let n,a,i,c,d,l,o,u,g;n=f(t.width),a=w[1]+H(s.rangeY),i=0,c=0,d=0,l=te+f(ne),o=s.baseSpeed+f(s.rangeSpeed),u=s.baseRadius+f(s.rangeRadius),g=s.baseHue+f(re),r.set([n,a,i,c,d,l,o,u,g],e)}function k(e,t){m++,t.clearRect(0,0,e.width,e.height),t.fillStyle=s.backgroundColor,t.fillRect(0,0,e.width,e.height),$(t),j(e,t),q(e,t),requestAnimationFrame(()=>k(e,t))}function $(e){for(let t=0;t<h;t+=C)U(t,e)}function U(e,t){const n=p.value;if(!n)return;const[a,i,c,d,l,o,u,g,G]=[r[e],r[e+1],r[e+2],r[e+3],r[e+4],r[e+5],r[e+6],r[e+7],r[e+8]],S=E(a*ae,i*se,m*ie)*oe*D,v=R(c,Math.cos(S),.5),b=R(d,Math.sin(S),.5);W(a,i,a+v*u,i+b*u,l,o,g,G,t),r[e]=a+v*u,r[e+1]=i+b*u,r[e+2]=v,r[e+3]=b,r[e+4]=l+1,(Y(a,i,n)||l>o)&&P(e)}function W(e,t,n,a,i,c,d,l,o){o.save(),o.lineCap="round",o.lineWidth=d,o.strokeStyle=`hsla(${l},100%,60%,${V(i,c)})`,o.beginPath(),o.moveTo(e,t),o.lineTo(n,a),o.stroke(),o.closePath(),o.restore()}function Y(e,t,n){return e>n.width||e<0||t>n.height||t<0}function _(e,t){const{innerWidth:n,innerHeight:a}=window;e.width=n,e.height=a,w[0]=.5*e.width,w[1]=.5*e.height}function j(e,t){t.save(),t.filter="blur(8px) brightness(200%)",t.globalCompositeOperation="lighter",t.drawImage(e,0,0),t.restore(),t.save(),t.filter="blur(4px) brightness(200%)",t.globalCompositeOperation="lighter",t.drawImage(e,0,0),t.restore()}function q(e,t){t.save(),t.globalCompositeOperation="lighter",t.drawImage(e,0,0),t.restore()}return Q(()=>{F(),window.addEventListener("resize",()=>{const e=p.value,t=e==null?void 0:e.getContext("2d");e&&t&&_(e)})}),X(()=>{window.removeEventListener("resize",()=>{})}),(e,t)=>{const n=Z("motion");return O(),M("div",{class:I(L(T)("relative h-full w-full",s.containerClass))},[x((O(),M("div",{ref_key:"containerRef",ref:y,initial:{opacity:0},enter:{opacity:1},class:"absolute inset-0 z-0 flex size-full items-center justify-center bg-transparent"},[A("canvas",{ref_key:"canvasRef",ref:p},null,512)])),[[n]]),A("div",{class:I(L(T)("relative z-10",s.class))},[ee(e.$slots,"default")],2)],2)}}});export{ce as _};
