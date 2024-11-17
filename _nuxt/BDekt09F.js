import H from"./luaBq9jj.js";import{_ as D}from"./DdWlr4hc.js";import{e as W,r as m,q as w,ay as l,f as i,n as C,l as o,h as p,j as t,a8 as h,ag as f,F as P,G as j,m as s,I as g,H as E,at as J}from"./Cl5bgDjB.js";import O from"./B9p7ZaC_.js";import Q from"./DUQ-RuBy.js";import{_ as K}from"./DT80NyKF.js";const X={class:"container mx-auto px-4 py-8"},Y={class:"text-center"},Z={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},ee=["src","alt"],te={class:"mb-2 flex items-center justify-between"},ae={class:"montserrat-bold text-lg font-semibold"},oe={class:"montserrat-regular mb-4 text-sm text-muted-foreground"},ne={class:"montserrat-light flex items-center text-sm text-muted-foreground"},se=["href"],ie={class:"mt-8 flex justify-center"},k=8,he=W({__name:"ShopsListings",setup(re){const v=m(!1),c=m(""),_=m([{id:1,name:"My Pop Up Store",category:"Clothing",description:"My Pop-Up Store is an Innovative selling platform for Mauritian Artisans and Designers since 2012.",location:"La Place Cap Tamarin, Tamarin",image:"https://hemant-khadun.github.io/artisanal/images/shops/my-popup-store.png",phone:"5840 0333"},{id:2,name:"Jewels & Crafts By Sha",category:"Crafts",description:"Handcrafted wool products and knitting supplies",location:"Trou aux biches",image:"https://hemant-khadun.github.io/artisanal/images/shops/jewels-and-craft-by-sha.jpg",phone:"5810 3077"},{id:6,name:"Beautiful Local Hands",category:"Crafts",description:"Local handmade bags and collectives",location:"Trou aux biches",image:"https://hemant-khadun.github.io/artisanal/images/shops/beautiful-local-hands.jpg",phone:""},{id:4,name:"Imiloa Boutique",category:"Clothing",description:"Imiloa Collective is a social creative platform that builds and enriches the skillsets of creatives.",location:"Opposite Roots cafe, Royal road, Grand Baie",image:"https://hemant-khadun.github.io/artisanal/images/shops/imiloa-boutique.jpg",phone:"5936 7935"},{id:5,name:"Le Rendez-Vous",category:"Crafts",description:"In life, there are no coincidences, there are only Rendez-Vous...",location:"La Croisette Grand-Baie MU, 30517",image:"https://hemant-khadun.github.io/artisanal/images/shops/le-rendez-vous.jpg",phone:"5456 7455"},{id:3,name:"Craft Market",category:"Crafts",description:"very nice & unique handcrafted things, and really locally produced by the friendly artist",location:"Caudan Waterfront, Port Louis",image:"https://hemant-khadun.github.io/artisanal/images/shops/craft-market.jpg",phone:"211 9500"},{id:7,name:"L'Artisan des Saveurs",category:"Food",description:"This allows us to eat French charcuterie in Mauritius. Fresh, healthy and delicious products",location:"Reservoir Road, Grand Baie",image:"https://hemant-khadun.github.io/artisanal/images/shops/lartisan-de-saveur.jpg",phone:"5984 0236"},{id:8,name:"Monalysa Boutique",category:"Crafts",description:"Warm welcome, beach clothes, Souvenirs and gifts at Low price",location:"La Salette road, Grand baie MU, Grand Bay 30549",image:"https://hemant-khadun.github.io/artisanal/images/shops/monalysa-boutique.jpg",phone:"5937 7750"},{id:9,name:"Les Artisans Réunis - Maurice",category:"Crafts",description:"Custom leather goods and accessories",location:"Pointe aux Sables, Mauritius",image:"https://hemant-khadun.github.io/artisanal/images/shops/les-artisans-reunis.jpg",phone:"5451 4425"},{id:10,name:"L'artigiano",category:"Food",description:"Une sélection encore plus large de produits gastronomiques de qualité supérieure livrable à travers toute l'île Maurice!",location:"La Boutique de L'Artigiano Ltee Mont Choisy Mall Grand Baie",image:"https://hemant-khadun.github.io/artisanal/images/shops/lartiguano.jpg",phone:"260 0008"},{id:11,name:"Artisans Lokal",category:"Artist",description:"promotes local artists and artisans",location:"Local service",image:"https://hemant-khadun.github.io/artisanal/images/shops/artisan-local.jpg",phone:"5708 8466"}]);m("");const B=m(["Search for local shops...","Find artisan products...","Discover nearby stores..."]);function S(){v.value=!0}const M=w(()=>{const u=(n.value-1)*k,a=u+k;if(!c.value)return _.value.slice(u,a).sort((r,y)=>r.id-y.id);const d=c.value.toLowerCase();return _.value.filter(r=>r.name.toLowerCase().includes(d)||r.category.toLowerCase().includes(d)||r.description.toLowerCase().includes(d)||r.location.toLowerCase().includes(d))}),n=m(1),b=w(()=>c.value!==""?0:Math.ceil(_.value.length/k));function V(){n.value<b.value&&n.value++}function I(){n.value>1&&n.value--}function T(u){n.value=u}return(u,a)=>{const d=H,r=D,y=l("CardHeader"),q=J,F=l("CardContent"),R=O,z=Q,G=l("CardFooter"),N=K,L=l("PaginationNext"),x=l("PaginationItem"),$=l("PaginationLink"),A=l("PaginationContent"),U=l("Pagination");return i(),C("section",X,[o("div",Y,[v.value?f("",!0):(i(),p(d,{key:0,onClick:S},{default:t(()=>a[2]||(a[2]=[h(" Search for shops ")])),_:1})),v.value?(i(),p(r,{key:1,modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:"montserrat-regular",placeholders:B.value},null,8,["modelValue","placeholders"])):f("",!0)]),a[5]||(a[5]=o("div",{class:"mb-8 mt-24 text-center"},[o("div",{class:"montserrat-regular mb-3 pt-12 text-5xl font-semibold"},"Local Shops"),o("p",{class:"montserrat-regular text-muted-foreground"}," Discover amazing local businesses in your area ")],-1)),o("div",Z,[(i(!0),C(P,null,j(M.value,e=>(i(),p(N,{key:e.id,class:"mt-5 transition-shadow hover:shadow-lg"},{default:t(()=>[s(y,null,{default:t(()=>[o("img",{src:e.image,alt:e.name,class:"mt-4 h-48 w-full rounded-md rounded-t-lg object-cover"},null,8,ee)]),_:2},1024),s(F,{class:"p-4"},{default:t(()=>[o("div",te,[o("h3",ae,g(e.name),1),s(q,null,{default:t(()=>[h(g(e.category),1)]),_:2},1024)]),o("p",oe,g(e.description),1),o("div",ne,[o("span",null,g(e.location),1)])]),_:2},1024),s(G,{class:"flex justify-between"},{default:t(()=>[s(z,{class:"inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",duration:5},{default:t(()=>[s(R),o("a",{class:"pl-3 text-lg font-bold",href:"tel:+230"+e.phone.replace(/\s/g,"")},g(e.phone),9,se)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),o("div",ie,[s(U,null,{default:t(()=>[s(A,{class:"flex space-x-2",onClick:a[1]||(a[1]=e=>u.$el.scrollIntoView({behavior:"smooth",block:"start",duration:1500}))},{default:t(()=>[c.value===""?(i(),p(x,{key:0},{default:t(()=>[s(L,{disabled:n.value===1,class:"relative inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:cursor-pointer hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",onClick:I},{default:t(()=>a[3]||(a[3]=[h(" Previous ")])),_:1},8,["disabled"])]),_:1})):f("",!0),(i(!0),C(P,null,j(b.value,e=>(i(),p(x,{key:e},{default:t(()=>[s($,{"is-active":n.value===e,class:"relative inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:cursor-pointer hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary",style:E({backgroundColor:n.value===e?"black":"transparent",color:n.value===e?"white":"black",border:n.value===e?"none":"1px solid #e4e4e7;"}),onClick:le=>T(e)},{default:t(()=>[h(g(e),1)]),_:2},1032,["is-active","style","onClick"])]),_:2},1024))),128)),c.value===""?(i(),p(x,{key:1},{default:t(()=>[s(L,{disabled:n.value===b.value,class:"relative inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:cursor-pointer hover:bg-accent hover:text-accent-foreground focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",onClick:V},{default:t(()=>a[4]||(a[4]=[h(" Next ")])),_:1},8,["disabled"])]),_:1})):f("",!0)]),_:1})]),_:1})])])}}});export{he as _};
