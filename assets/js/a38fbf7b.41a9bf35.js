"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,k=b["".concat(c,".").concat(d)]||b[d]||s[d]||o;return a?r.createElement(k,i(i({ref:t},l),{},{components:a})):r.createElement(k,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"Backups",author:"OliBomby",id:"backups",description:"Everything about backups.",keywords:["docs","mapping tools","backups"]},i=void 0,p={unversionedId:"general/backups",id:"general/backups",title:"Backups",description:"Everything about backups.",source:"@site/docs/02-general/03-Backups.md",sourceDirName:"02-general",slug:"/general/backups",permalink:"/docs/general/backups",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/02-general/03-Backups.md",tags:[],version:"current",lastUpdatedBy:"Olivier Schipper",lastUpdatedAt:1709897211,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:3,frontMatter:{title:"Backups",author:"OliBomby",id:"backups",description:"Everything about backups.",keywords:["docs","mapping tools","backups"]},sidebar:"docsSidebar",previous:{title:"QuickRun",permalink:"/docs/general/quickrun"},next:{title:"Map Cleaner",permalink:"/docs/tools/map-cleaner"}},c={},u=[{value:"Automatic backups",id:"automatic-backups",level:2},{value:"Periodic backups",id:"periodic-backups",level:2},{value:"Manual backups",id:"manual-backups",level:2}],l={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Mapping Tools makes backups of your osu! beatmaps and stores them in the backups folder. To open the backups folder use ",(0,n.kt)("strong",{parentName:"p"},"About > Open backups folder"),". The location of the backups folder and other settings can be changed in the ",(0,n.kt)("strong",{parentName:"p"},"Preferences"),". "),(0,n.kt)("p",null,"The creation of backups makes use of Editor Reader to backup the latest version in the editor instead of the last save."),(0,n.kt)("h2",{id:"automatic-backups"},"Automatic backups"),(0,n.kt)("p",null,"With automatic backups enabled, every time you run a mapping tool a backup will be created of the beatmap that will be changed. This backup is usefull for if you want to undo the work of a tool."),(0,n.kt)("p",null,"To keep the number of backups in check, there is a max number of backups for the backups folder. If the backups folder is full, the oldest backups will be deleted whenever a new backup gets created."),(0,n.kt)("h2",{id:"periodic-backups"},"Periodic backups"),(0,n.kt)("p",null,"With periodic backups enabled, Mapping Tools will periodically make backups of your beatmap while you are using the osu! editor. It uses Editor Reader to backup the latest version, even when you forget to save. It will skip the backup if there has been no change in the beatmap since the last backup, so if you go AFK in the editor your backups folder won't be spammed with identical backups."),(0,n.kt)("p",null,"Periodic backups can be recognized by the ",(0,n.kt)("inlineCode",{parentName:"p"},"PB")," (Periodic Backup) in the filename."),(0,n.kt)("h2",{id:"manual-backups"},"Manual backups"),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"File")," menu you have options for manual backup management:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Generate backup")," creates a backup of the current beatmap."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Load backup")," opens a file explorer to select a backup beatmap to load into the current beatmap.")),(0,n.kt)("p",null,"Manual backups can be recognized by the ",(0,n.kt)("inlineCode",{parentName:"p"},"UB")," (User Backup) in the filename."))}s.isMDXComponent=!0}}]);