import{M as B,S as U,V as F,C,a as de,b as fe,P as he,W as ve,c as H,d as Te}from"./DLA4LUqG.js";import{e as _e,r as D,E as we,o as be,f as Ce,n as Oe,l as $,A as Me,H as ye}from"./C9QOXPtL.js";const u=250,j=3,Be=898211544,Re=_e({__name:"BubblesBg",props:{blur:{type:Number,default:0}},setup(q){const E=D(null),h=D(null);let p,v,t,A;const L=[],z=l(170,215,217),X=l(57,167,255),Y=l(255,160,75),J=l(239,172,53),K=l(120,235,124),Q=l(0,167,255),Z=l(235,170,0),ee=l(255,120,0),g=j+2,G=g+10,oe=ie(Be),{PI:te,cos:O,sin:s}=Math,M=te*2,re=new Array(u).fill(0).map(()=>i(1)*Math.pow(i(),3)),ae=new Array(u).fill(0).map(()=>B.lerp(g,G,i())),I=new Array(u).fill(0).map(()=>i(M)),R=new Array(u).fill(0).map(()=>i(M)),ne=ae.map((o,e)=>[o*O(I[e])*s(R[e]),o*s(I[e])*s(R[e]),o*O(R[e])]),se=new U(j),T=W(K,Q,Z,ee),m=new U;m.scale(-1,1,1);const y=W(z,X,Y,J);y.uniforms.uTemperatureVariancePeriod.value=new F(0,0,.1);function ie(o){return function(){o|=0,o=o+2654435769|0;var e=o^o>>>16;return e=Math.imul(e,569420461),e=e^e>>>15,e=Math.imul(e,1935289751),((e=e^e>>>15)>>>0)/4294967296}}function i(o=1){return oe()*o}function l(o,e,r){return new C(o/255,e/255,r/255)}function W(o,e,r,n){return new de({uniforms:{colorBottomWarm:{value:new C().copy(o)},colorTopWarm:{value:new C().copy(e)},colorBottomCool:{value:new C().copy(r)},colorTopCool:{value:new C().copy(n)},uTemperature:{value:0},uTemperatureVariancePeriod:{value:new F(.08,.1,.2)},uElapsedTime:{value:0}},vertexShader:`
      uniform vec4 uTemperatureVariancePeriod;
      uniform float uTemperature;
      uniform float uElapsedTime;
      varying float topBottomMix;
      varying float warmCoolMix;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        topBottomMix = normal.y;
        warmCoolMix = 0.6 * uTemperature +
          0.4 * (sin(
          (uElapsedTime + gl_Position.x) * uTemperatureVariancePeriod.x +
          (uElapsedTime + gl_Position.y) * uTemperatureVariancePeriod.y +
          (uElapsedTime + gl_Position.z) * uTemperatureVariancePeriod.z) * 0.5 + 0.5);
      }
    `,fragmentShader:`
      uniform vec3 colorBottomWarm;
      uniform vec3 colorTopWarm;
      uniform vec3 colorBottomCool;
      uniform vec3 colorTopCool;

      varying float topBottomMix;
      varying float warmCoolMix;

      void main() {
        gl_FragColor = vec4(mix(
          mix(colorTopCool, colorTopWarm, warmCoolMix),
          mix(colorBottomCool, colorBottomWarm, warmCoolMix),
          topBottomMix), 1.0);
      }
    `})}function le(){var N,k;const o=((N=h.value)==null?void 0:N.clientWidth)||1,e=((k=h.value)==null?void 0:k.clientHeight)||1;v=new fe,t=new he(50,o/e,1,2e3),t.position.x=0,t.position.y=0,t.position.z=23,p=new ve({antialias:!0}),p.setSize(o,e),p.setClearColor(z),T.depthWrite=!1,T.depthTest=!0,h.value&&h.value.appendChild(p.domElement);const r=new H(m,y);r.position.set(0,0,-1),r.material.depthTest=!1,r.renderOrder=-1;const n=t.position.z,_=t.aspect,d=2*n*Math.tan(B.degToRad(t.fov)/2),w=d*_;r.scale.set(w/m.parameters.radius,d/m.parameters.radius,1),v.add(r);const f=new Array(u).fill(0).map(()=>B.lerp(g,G,i())),b=new Array(u).fill(0).map(()=>i(M)),S=new Array(u).fill(0).map(()=>i(M)),ce=f.map((c,a)=>[c*O(b[a])*s(S[a]),c*s(b[a])*s(S[a]),c*O(S[a])]);for(let c=0;c<u;c++){const a=new H(se,T),[ue,me,pe]=ce[c],x=re[c];a.scale.set(x,x,x),a.position.set(ue,me,pe),L.push(a),v.add(a)}A=new Te}function V(){requestAnimationFrame(V);const o=A.getElapsedTime(),e=s(o*.5)*.5+.5;y.uniforms.uTemperature.value=e,y.uniforms.uElapsedTime.value=o,T.uniforms.uTemperature.value=e,T.uniforms.uElapsedTime.value=o,L.forEach((r,n)=>{const _=ne[n],f=s(o*.3+n)*2;r.position.y=_[1]+f}),p.render(v,t)}function P(){var w,f;const o=((w=E.value)==null?void 0:w.clientWidth)||1,e=((f=E.value)==null?void 0:f.clientHeight)||1;p.setSize(o,e),t.aspect=o/e,t.updateProjectionMatrix();const n=2*t.position.z*Math.tan(B.degToRad(t.fov)/2),_=n*t.aspect,d=v.children.find(b=>b instanceof H&&b.geometry===m);d&&d.scale.set(_/m.parameters.radius,n/m.parameters.radius,1)}return we(()=>{le(),P(),window.addEventListener("resize",P),V()}),be(()=>{window.removeEventListener("resize",P)}),(o,e)=>(Ce(),Oe("div",{ref_key:"bubbleParentContainer",ref:E,class:"relative h-72 w-full overflow-hidden"},[$("div",{ref_key:"bubbleCanvasContainer",ref:h},null,512),$("div",{style:ye({"--bubbles-blur":`${q.blur}px`}),class:"absolute inset-0 z-[2] size-full backdrop-blur-[--bubbles-blur]"},[Me(o.$slots,"default")],4)],512))}});export{Re as _};
