"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return r?o.createElement(k,i(i({ref:t},u),{},{components:r})):o.createElement(k,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={title:"Using Mapping Tools in osu! lazer",author:"OliBomby",id:"use-mt-in-lazer",description:"How to convert use Mapping Tools in osu!lazer.",keywords:["docs","mapping tools","lazer","compatibility"]},i=void 0,l={unversionedId:"guides/use-mt-in-lazer",id:"guides/use-mt-in-lazer",title:"Using Mapping Tools in osu! lazer",description:"How to convert use Mapping Tools in osu!lazer.",source:"@site/docs/04-guides/use-mt-in-lazer.md",sourceDirName:"04-guides",slug:"/guides/use-mt-in-lazer",permalink:"/docs/guides/use-mt-in-lazer",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/04-guides/use-mt-in-lazer.md",tags:[],version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1721315207,formattedLastUpdatedAt:"Jul 18, 2024",frontMatter:{title:"Using Mapping Tools in osu! lazer",author:"OliBomby",id:"use-mt-in-lazer",description:"How to convert use Mapping Tools in osu!lazer.",keywords:["docs","mapping tools","lazer","compatibility"]},sidebar:"docsSidebar",previous:{title:"Convert mania HS to standard HS",permalink:"/docs/guides/convert-mania-to-standard-hs"}},s={},p=[{value:"How to use Mapping Tools in osu! lazer",id:"how-to-use-mapping-tools-in-osu-lazer",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"General",id:"general",level:3},{value:"Tools",id:"tools",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ppy/osu"},"osu! lazer")," is the future osu! game client and with that comes a new beatmap editor. While Mapping Tools was made for osu! stable, some of its functionality works in osu! lazer as well."),(0,a.kt)("h2",{id:"how-to-use-mapping-tools-in-osu-lazer"},"How to use Mapping Tools in osu! lazer"),(0,a.kt)("p",null,"In the osu! lazer editor, click ",(0,a.kt)("strong",{parentName:"p"},"File > Edit externally"),". This will create a temporary folder with all the files of the beatmap set you are currently editing. It will automatically open the folder for you in the file explorer. You can then drag the file you want to edit into Mapping Tools to set it as the current beatmap. Once you're done editing with Mapping Tools you can click ",(0,a.kt)("strong",{parentName:"p"},"Finish editing and import changes")," and osu! lazer will import the changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File &gt; Edit externally",src:r(9301).Z,width:"698",height:"515"})),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"Not all features of Mapping Tools work in osu! lazer. This section attempts to list the compatibility of all Mapping Tools features."),(0,a.kt)("p",null,"Any features that use Editor Reader will not work in osu! lazer, so it is recommended to go to the ",(0,a.kt)("strong",{parentName:"p"},"Preferences")," and disable Editor Reader if you plan on only using osu! lazer."),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u274c Anything ",(0,a.kt)("strong",{parentName:"li"},"Open current beatmap")," does not work"),(0,a.kt)("li",{parentName:"ul"},"\u274c Anything ",(0,a.kt)("strong",{parentName:"li"},"Current editor time")," does not work"),(0,a.kt)("li",{parentName:"ul"},"\u274c Anything ",(0,a.kt)("strong",{parentName:"li"},"Selected hit objects")," does not work"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Generate backup")," works"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Load backup")," works")),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u274c ",(0,a.kt)("strong",{parentName:"li"},"Geometry Dashboard")," does not work. Relies on editor reader."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Hitsound Copier")," works"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Hitsound Studio")," works, but references to imported samples and beatmaps break after the temp folder is removed."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Pattern Gallery")," works, but thumbnails render incorrectly for multiple path type sliders."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Property Transformer")," works"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Sliderator")," works, but is extremely laggy in lazer editor. Does not work for multiple path types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Tumour Generator 2")," works, but not for multiple path types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Auto-fail Detector")," works, but auto-fail does not exist in Lazer."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Combo Colour Studio")," works"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Hitsound Preview Helper")," works, but custom samples do not work in Lazer."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Map Cleaner")," works"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Mapset Merger")," works"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Metadata Manager")," works"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Rhythm Guide")," works"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Slider Completionator")," works, but length calculation and ",(0,a.kt)("strong",{parentName:"li"},"Move anchors to new length")," do not work for multiple path types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Slider Merger")," works, but not for multiple path types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd36 ",(0,a.kt)("strong",{parentName:"li"},"Slider Picturator")," works, but the picture slider does not show up in Lazer."),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Timing Copier")," works"),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("strong",{parentName:"li"},"Timing Helper")," works")))}m.isMDXComponent=!0},9301:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/osu_TAqF8oqGPr-ad151e1f58af9a248f71a5b00abd617a.png"}}]);