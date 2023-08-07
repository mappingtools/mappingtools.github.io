"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[203],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6403:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Introduction",author:"OliBomby",id:"introduction",description:"Mapping Tools is an all-in-one application for utilities for mapping in osu!.",keywords:["docs","mapping tools"],slug:"/"},l=void 0,o={unversionedId:"mapping-tools/introduction",id:"mapping-tools/introduction",title:"Introduction",description:"Mapping Tools is an all-in-one application for utilities for mapping in osu!.",source:"@site/docs/01-mapping-tools/01-introduction.md",sourceDirName:"01-mapping-tools",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/01-mapping-tools/01-introduction.md",tags:[],version:"current",lastUpdatedBy:"Fabian",lastUpdatedAt:1691434352,formattedLastUpdatedAt:"Aug 7, 2023",sidebarPosition:1,frontMatter:{title:"Introduction",author:"OliBomby",id:"introduction",description:"Mapping Tools is an all-in-one application for utilities for mapping in osu!.",keywords:["docs","mapping tools"],slug:"/"},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/docs/mapping-tools/installation"}},p={},s=[{value:"Get Started",id:"get-started",level:2},{value:"Features",id:"features",level:2}],m={toc:s};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mapping Tools is a collection of tools for osu! mapping all combined into ",(0,r.kt)("strong",{parentName:"p"},"one application"),".\nIt allows you to quickly make changes to your beatmap which would normally take hours to do by hand.\nIt provides ",(0,r.kt)("strong",{parentName:"p"},"quality-of-life features")," such as backups and memory reading which are shared among all tools, so you always have quick and reliable tools. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mapping Tools Logo",src:a(3854).Z,width:"2000",height:"400"})),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"Get to know Mapping Tools quickly by following any of the ",(0,r.kt)("strong",{parentName:"p"},"Guides")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLuijZnrwVA86pO7zIP9oVu-7YAQ5qEe2Y"},(0,r.kt)("strong",{parentName:"a"},"Video Tutorials")),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/mapping-tools/installation"},(0,r.kt)("strong",{parentName:"a"},"Install"))," and start Mapping Tools.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/mapping-tools/installation#setup"},(0,r.kt)("strong",{parentName:"a"},"Configure"))," Mapping Tools")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your beatmap with ",(0,r.kt)("strong",{parentName:"p"},"File > Open (current) beatmap"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to a tool with the navigation menu: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+K"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure and run the tool with the run button on the bottom right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reload your beatmap without saving: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+L, Enter")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Mapping Tools is built with freedom in mind, always maximizing the utility of simple tools."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Map Cleaner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Remove useless greenlines"),(0,r.kt)("li",{parentName:"ul"},"Resnap greenlines, hitobjects, and bookmarks"),(0,r.kt)("li",{parentName:"ul"},"Remove unused hitsound samples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metadata Manager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edit metadata of a whole mapset at once"),(0,r.kt)("li",{parentName:"ul"},"Remove duplicate tags"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Property Transformer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Offset or scale the timing of all timing points or hit objects"),(0,r.kt)("li",{parentName:"ul"},"Transform the volume, index, or slider velocity of many greenlines at once"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slider Merger"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Merge multiple sliders and circles into one big slider with the combined shape"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slider Completionator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the duration or length of sliders"),(0,r.kt)("li",{parentName:"ul"},"Attain slider velocity above 4x"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timing Copier"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy timing between beatmaps"),(0,r.kt)("li",{parentName:"ul"},"Automatically resnap and scale objects to new timing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timing Helper"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create complex timing more quickly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hitsound Copier"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy hitsounds between beatmaps"),(0,r.kt)("li",{parentName:"ul"},"Copy storyboarded samples as substitutes for missing hitsounds"),(0,r.kt)("li",{parentName:"ul"},"Copy hitsounds to slider ticks and slider slide sounds"),(0,r.kt)("li",{parentName:"ul"},"Automatically mute sliderends"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hitsound Studio"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/convert-mania-to-standard-hs"},"Convert osu! mania hitsounds to osu! standard hitsounds")),(0,r.kt)("li",{parentName:"ul"},"Combine custom hitsounds from multiple mapsets into one mapset"),(0,r.kt)("li",{parentName:"ul"},"Convert MIDI's to keysounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hitsound Preview Helper"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Place hitsounds on objects based on their position"),(0,r.kt)("li",{parentName:"ul"},"Easily create hitsound maps compatible with Hitsound Studio"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rhythm Guide"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Extract rhythm from beatmaps to use as a guide while hitsounding"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Dashboard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Overlay live geometry on your editor which you can use while mapping"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Combo Colour Studio"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create colour hax the easy way"),(0,r.kt)("li",{parentName:"ul"},"Copy colour hax between beatmaps"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sliderator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Change slider velocity mid-slider"),(0,r.kt)("li",{parentName:"ul"},"Create accelerating or decelerating streams"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auto-fail Detector")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Detect auto-fail in 2B style beatmaps"),(0,r.kt)("li",{parentName:"ul"},"Automatically fix auto-fail"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern Gallery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create and share collections of mapping patterns"),(0,r.kt)("li",{parentName:"ul"},"Copy patterns between beatmaps"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mapset Merger"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Merge multiple mapsets into one big mapset"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tumour Generator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add various shapes along the sides of your sliders"),(0,r.kt)("li",{parentName:"ul"},"Design complete sliders in a new way")))))}u.isMDXComponent=!0},3854:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mt_banner-1bab93b8fbcf0714cbf51baab46ed337.png"}}]);