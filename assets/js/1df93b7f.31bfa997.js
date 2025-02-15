"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[3237],{4450:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(7294),r=n(215),l=n(6010),s=n(4996),i=n(2263),o=n(9960),c=n(8947),m=n(7814),u=n(1436);const d={span:"span_PCSM",heroBanner:"heroBanner_uIH7",buttonsContainer:"buttonsContainer_vhPl",introButton:"introButton_b5g2",downloadButton:"downloadButton_k11y",logo:"logo_eken",title:"title_gZEn",tagLine:"tagLine_GV6V"};c.vc.autoAddCss=!1;const g=()=>{const e=(0,i.Z)(),{siteConfig:t={}}=e;return a.createElement("header",{className:(0,l.Z)("hero hero--primary",d.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:(0,l.Z)("hero__subtitle",d.tagLine)},a.createElement("img",{className:(0,l.Z)(d.logo),src:"/img/logo.svg"}),a.createElement("span",{className:(0,l.Z)(d.span)},"Mapping Tools is an ",a.createElement("b",null,"all-in-one")," application for ",a.createElement("b",null,"efficient")," and ",a.createElement("b",null,"creative")," mapping in osu")),a.createElement("div",{className:(0,l.Z)("row",d.buttonsContainer)},a.createElement("div",{className:d.buttons},a.createElement(o.Z,{className:(0,l.Z)("button button--secondary button--lg",d.introButton),to:(0,s.Z)("docs/")},"Get Started")),a.createElement("div",{className:d.buttons},a.createElement(o.Z,{className:(0,l.Z)("button button--primary button--lg",d.downloadButton),to:(0,s.Z)("download/")},a.createElement(m.G,{icon:u.q7m}),"\xa0Download")))))};var p=n(7462);const f="fadein_e4zk",E="visible_sozy",h=e=>{let{direction:t="up",offset:n="15vh",duration:r="1s",easing:s="ease-out",delay:i="300ms",className:o="",children:c}=e;const m=(0,a.useRef)(null),[u,d]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=m.current;if(!e)return;const[a,l]=(e=>{switch(e){case"up":return["Y",""];case"down":return["Y","-"];case"left":return["X",""];case"right":return["X","-"];default:return[null,null]}})(t);if(null===a)return;e.style.transform=`translate${a}(${l}${n})`,e.style.transition=`opacity ${r} ${s} ${i}, transform ${r} ${s} ${i}`;new IntersectionObserver((t=>{for(const n of t)if(n.isIntersecting)return d(!0),console.log(e.style.transition),void(e.style.transform="none")})).observe(e)}),[]),a.createElement("div",{className:(0,l.Z)(f,u&&E,o),ref:m},c)},v={features:"features_gEDi",featureImage:"featureImage_psMl"},y=[{title:"Easy to Use",imageUrl:"img/undraw_mt_easy.svg",description:a.createElement(a.Fragment,null,"With tooltips,\xa0",a.createElement(o.Z,{to:"/docs"},"documentation"),", and a\xa0",a.createElement("a",{href:"https://discord.gg/YfjKN2yjQV"},"community discord server"),", picking up Mapping Tools is just a click away!")},{title:"Unleash Your Creativity",imageUrl:"img/undraw_mt_creativity.svg",description:a.createElement(a.Fragment,null,"Shape and manipulate sliders with a simple and intuitive user interface.")},{title:"Diversify Your Hitsounding",imageUrl:"img/undraw_mt_hitsounding.svg",description:a.createElement(a.Fragment,null,"Create and modify unique and complex hitsounding with ease.")},{title:"Clean and Polish Your Maps",imageUrl:"img/undraw_mt_cleaning.svg",description:a.createElement(a.Fragment,null,"Resnap all relevant timing points and remove unnecessary ones with the click of a button.")},{title:"Bring Color to Your Maps",imageUrl:"img/undraw_mt_colorhax.svg",description:a.createElement(a.Fragment,null,"Colorhax without hassle, the way it always should've been.")},{title:"Reinforce Geometric Structure",imageUrl:"img/undraw_mt_geometrydashboard.svg",description:a.createElement(a.Fragment,null,"Effortlessly create perfect blankets, off-angle symmetry, hex grids, and more.")}],_=e=>{let{imageUrl:t,title:n,description:r,position:i}=e;const o=(0,s.Z)(t);return a.createElement(h,{className:(0,l.Z)("col col--4",v.feature),delay:300+i%3*300+"ms"},o&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:v.featureImage,src:o,alt:n})),a.createElement("h3",null,n),a.createElement("p",null,r))},b=()=>a.createElement("section",{className:v.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},y.map(((e,t)=>a.createElement(_,(0,p.Z)({key:t},e,{position:t}))))))),w=()=>a.createElement(r.Z,{title:"Home",description:"Mapping Tools for osu!"},a.createElement(g,null),a.createElement("main",null,a.createElement(b,null)))}}]);