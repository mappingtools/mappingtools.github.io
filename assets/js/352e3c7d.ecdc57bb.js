(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(104),s=a(109),r=a(83),i=a.n(r);t.default=()=>{const[e,t]=Object(l.useState)(null);Object(l.useEffect)((()=>{(async()=>{const e=await fetch("https://api.github.com/repos/OliBomby/Mapping_Tools/releases?per_page=10",{method:"GET"}),a=await e.json();t(a.map((e=>({tag:e.tag_name,date:new Date(e.published_at).toLocaleDateString(),author:e.author.login,description:e.body.replace(/\r/g,"").split(/\n/).join("<br>")}))))})()}),[]);const[a,r]=Object(l.useState)(null),[o,m]=Object(l.useState)(new Array(10).fill(void 0)),u=Object(l.useRef)(Array.from({length:10},(e=>Object(l.createRef)()))).current,d=e=>()=>{const t=a===e;var l;if((null!==a&&(o[a]=void 0),!t)&&(null!==(l=u[e])&&void 0!==l&&l.current)){const{marginTop:t,marginBottom:a}=window.getComputedStyle(u[e].current);o[e]=`calc(${u[e].current.offsetHeight}px + ${t} + ${a})`}m(o),r(t?null:e)};return n.a.createElement(s.a,{title:"Changelog",description:"Mapping Tools changelog"},n.a.createElement("div",{className:Object(c.a)("container padding-vert--lg",i.a.content)},n.a.createElement("h1",null,"Latest Releases"),e?n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},e&&e.map((({tag:e,date:t,author:l,description:s},r)=>n.a.createElement("li",{key:r,className:Object(c.a)("card menu__list-item",a!==r&&"menu__list-item--collapsed"),onClick:d(r)},n.a.createElement("div",{className:Object(c.a)("menu__link menu__link--sublist",i.a.release)},n.a.createElement("div",null,e),n.a.createElement("div",null,t)),n.a.createElement("ul",{className:"menu__list",style:{height:o[r]}},n.a.createElement("li",{className:"menu__list-item",ref:u[r]},n.a.createElement("div",{className:i.a.releaseBody,dangerouslySetInnerHTML:{__html:s}}),n.a.createElement("hr",{className:i.a.hr}),"by ",l))))))):n.a.createElement("h4",null,"Loading...")))}}}]);