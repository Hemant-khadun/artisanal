import{r as o,aB as m,e as M,J as y,f as g,n as C,l as h,A as E,p as a}from"./DcqQ6i2p.js";function S(){const n=o(!1);function e(t){n.value=t}return{isMouseEntered:m(n),setMouseEntered:e}}const B=M({__name:"CardContainer",props:{class:String,containerClass:String},setup(n){const e=o(null),t=S();y("use3DCardMouseState",t);function l(s){if(!e.value)return;const{left:r,top:c,width:f,height:d}=e.value.getBoundingClientRect(),p=(s.clientX-r-f/2)/25,v=(s.clientY-c-d/2)/25;e.value.style.transform=`rotateY(${p}deg) rotateX(${v}deg)`}function u(){t.setMouseEntered(!0)}function i(){e.value&&(t.setMouseEntered(!1),e.value.style.transform="rotateY(0deg) rotateX(0deg)")}return(s,r)=>(g(),C("div",{class:a(["flex items-center justify-center p-2",n.containerClass]),style:{perspective:"1000px"}},[h("div",{ref_key:"containerRef",ref:e,class:a(["relative flex items-center justify-center transition-all duration-200 ease-linear",s.$props.class]),style:{"transform-style":"preserve-3d"},onMouseenter:u,onMousemove:l,onMouseleave:i},[E(s.$slots,"default")],34)],2))}});export{B as _};