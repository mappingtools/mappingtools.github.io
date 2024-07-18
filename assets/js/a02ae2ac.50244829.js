"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={title:"Mapset Merger",author:"OliBomby",id:"mapset-merger"},s=void 0,i={unversionedId:"tools/mapset-merger",id:"tools/mapset-merger",title:"Mapset Merger",description:"Mapset Merger is a tool that lets you merge multiple mapsets into one big mapset.",source:"@site/docs/03-tools/Mapset Merger.md",sourceDirName:"03-tools",slug:"/tools/mapset-merger",permalink:"/docs/tools/mapset-merger",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-tools/Mapset Merger.md",tags:[],version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1721315207,formattedLastUpdatedAt:"Jul 18, 2024",frontMatter:{title:"Mapset Merger",author:"OliBomby",id:"mapset-merger"},sidebar:"docsSidebar",previous:{title:"Map Cleaner",permalink:"/docs/tools/map-cleaner"},next:{title:"Sliderator",permalink:"/docs/tools/sliderator"}},l={},p=[{value:"Adding mapsets",id:"adding-mapsets",level:2},{value:"Exporting",id:"exporting",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mapset Merger is a tool that lets you merge multiple mapsets into one big mapset."),(0,a.kt)("p",null,"The tool will automatically resolve any file conflicts by moving as many files as possible to separate subfolders and reconstructing sample sets for custom hitsounds. Sadly, beatmap skins and custom spinner hitsounds can not be merged, because these files are not explicitly referenced in the beatmap, so their presence will always affect the entire mapset."),(0,a.kt)("h2",{id:"adding-mapsets"},"Adding mapsets"),(0,a.kt)("p",null,"To add a mapset, press the plus button at the bottom right. This will add a new mapset to the collection pre-filled with the mapset info of the current beatmap. If you ",(0,a.kt)("strong",{parentName:"p"},"shift-click")," the plus button it will use the mapset currently open in the osu! client instead."),(0,a.kt)("p",null,"All mapsets to be merged will show up in the list. Each mapset has a name and a path to the root folder of the mapset. The names of the mapsets will be used to categorize files in the merged mapset, so make sure the names are unique and concise. The path can be edited in the list by ",(0,a.kt)("strong",{parentName:"p"},"double-clicking")," on it. It will also show you a browse button which you can use to select the path using the File Explorer."),(0,a.kt)("h2",{id:"exporting"},"Exporting"),(0,a.kt)("p",null,"Pressing the run button will merge the mapsets and export the files to the folder at the ",(0,a.kt)("strong",{parentName:"p"},"Export path"),". Make sure this folder exists, because otherwise it will give you an error."),(0,a.kt)("p",null,"If you have checked the box ",(0,a.kt)("strong",{parentName:"p"},"Move storyboard to .osu"),", Mapset Merger will move the content of any .osb file in a mapset to the .osu files. This will cause storyboards to be beatmap-specific and not leak over to the other mapsets in the merged mapset. This option is good to use if you merge mapsets with different storyboards, but be carefull because if a mapset has a large storyboard file and multiple difficulties this will multiply the data and produce large .osu files."))}u.isMDXComponent=!0}}]);