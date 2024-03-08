"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[687],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(o),m=a,h=c["".concat(d,".").concat(m)]||c[m]||l[m]||r;return o?n.createElement(h,s(s({ref:e},p),{},{components:o})):n.createElement(h,s({ref:e},p))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,s=new Array(r);s[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6247:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={title:"Convert mania HS to standard HS",author:"OliBomby",id:"convert-mania-to-standard-hs",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",keywords:["docs","mapping tools","hitsound studio","hitsounds","convert hs"]},s=void 0,i={unversionedId:"guides/convert-mania-to-standard-hs",id:"guides/convert-mania-to-standard-hs",title:"Convert mania HS to standard HS",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",source:"@site/docs/04-guides/hs-studio-convert-mania-to-standard.md",sourceDirName:"04-guides",slug:"/guides/convert-mania-to-standard-hs",permalink:"/docs/guides/convert-mania-to-standard-hs",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/04-guides/hs-studio-convert-mania-to-standard.md",tags:[],version:"current",lastUpdatedBy:"Olivier Schipper",lastUpdatedAt:1709897211,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{title:"Convert mania HS to standard HS",author:"OliBomby",id:"convert-mania-to-standard-hs",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",keywords:["docs","mapping tools","hitsound studio","hitsounds","convert hs"]},sidebar:"docsSidebar",previous:{title:"Sliderator",permalink:"/docs/tools/sliderator"}},d={},u=[{value:"Step 1: Set-up Hitsound Studio",id:"1",level:2},{value:"Step 2: Import hitsound layers",id:"2",level:2},{value:"Step 3: Configure",id:"3",level:2},{value:"Step 4: Export",id:"4",level:2}],p={toc:u};function l(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"osu!mania is known for being able to have multiple notes on the same tick. This gives a lot more freedom in hitsounding osu!mania, because you can use multiple sample sets or custom samples simultaneously. However this makes copying hitsounds from osu!mania to osu!standard more difficult, because in osu!standard you can have at most one note per tick. Hitsound Studio makes it possible to convert these osu!mania hitsounds to osu!standard hitsounds and open up a lot of hitsounding possibilities."),(0,a.kt)("h2",{id:"1"},"Step 1: Set-up Hitsound Studio"),(0,a.kt)("p",null,"Open Hitsound Studio in Mapping Tools. Click on the ",(0,a.kt)("strong",{parentName:"p"},"Project")," menu and click ",(0,a.kt)("strong",{parentName:"p"},"New project"),". If don't want to lose your current configuration in Hitsound Studio, first save it with ",(0,a.kt)("strong",{parentName:"p"},"Save project"),"."),(0,a.kt)("h2",{id:"2"},"Step 2: Import hitsound layers"),(0,a.kt)("p",null,"Click the plus button on the bottom right of the window, this will open up a new window for importing. Go to the ",(0,a.kt)("strong",{parentName:"p"},"Import hitsounds")," tab to import all hitsounds from a beatmap. In ",(0,a.kt)("strong",{parentName:"p"},"Source beatmap")," select the beatmap with the osu!mania hitsounds you want to convert. Also check the boxes for ",(0,a.kt)("strong",{parentName:"p"},"Detect duplicate samples")," and ",(0,a.kt)("strong",{parentName:"p"},"Remove duplicate hitsounds"),", and ",(0,a.kt)("strong",{parentName:"p"},"Include storyboarded samples")," if your map uses storyboarded samples to fill in some of the gaps in the hitsounds. Then click ",(0,a.kt)("strong",{parentName:"p"},"Accept")," to import the hitsounds and you should see a list of hitsound layers appear in Hitsound Studio."),(0,a.kt)("h2",{id:"3"},"Step 3: Configure"),(0,a.kt)("p",null,"At the bottom there are two more things to configure: the ",(0,a.kt)("strong",{parentName:"p"},"Base beatmap")," and the ",(0,a.kt)("strong",{parentName:"p"},"Default sample"),". For the base beatmap just select the map you want to convert. It will use the metadata, timing, and volume levels of the base beatmap."),(0,a.kt)("p",null,"For the default sample there are multiple options and it depends on preference. The default sample is used whenever there is no hitnormal hitsound defined in the hitsound layers and osu!standard always wants to play a hitnormal sound. You can leave it empty and select Soft sample set and input ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," volume."),(0,a.kt)("h2",{id:"4"},"Step 4: Export"),(0,a.kt)("p",null,"Click the run button on the bottom right of the window. This will open a dialog with export options. Make sure ",(0,a.kt)("strong",{parentName:"p"},"Export mode")," and ",(0,a.kt)("strong",{parentName:"p"},"Export gamemode")," are both ",(0,a.kt)("strong",{parentName:"p"},"Standard"),". You can also change ",(0,a.kt)("strong",{parentName:"p"},"Sample file format")," and ",(0,a.kt)("strong",{parentName:"p"},"Mixed sample file format")," to ",(0,a.kt)("strong",{parentName:"p"},"Vorbis (.ogg)")," to convert all samples to ",(0,a.kt)("inlineCode",{parentName:"p"},".ogg")," and save on filesize. Then click ",(0,a.kt)("strong",{parentName:"p"},"Accept")," to start exporting the hitsounds."),(0,a.kt)("p",null,"After Hitsound Studio is done exporting you'll see the export folder containing a ",(0,a.kt)("inlineCode",{parentName:"p"},".osu")," file which is the osu!standard hitsounds diff and a bunch of audio files which are required for the hitsounds. You can now copy all these files into your osu!standard mapset and copy the hitsounds from the hitsounds diff with Hitsound Copier."))}l.isMDXComponent=!0}}]);