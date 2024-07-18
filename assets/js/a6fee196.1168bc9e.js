"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Map Cleaner",author:"OliBomby",id:"map-cleaner"},o=void 0,l={unversionedId:"tools/map-cleaner",id:"tools/map-cleaner",title:"Map Cleaner",description:"Map Cleaner cleans the current beatmap of useless greenlines and it also lets you do some",source:"@site/docs/03-tools/Map Cleaner.md",sourceDirName:"03-tools",slug:"/tools/map-cleaner",permalink:"/docs/tools/map-cleaner",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-tools/Map Cleaner.md",tags:[],version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1721315207,formattedLastUpdatedAt:"Jul 18, 2024",frontMatter:{title:"Map Cleaner",author:"OliBomby",id:"map-cleaner"},sidebar:"docsSidebar",previous:{title:"Backups",permalink:"/docs/general/backups"},next:{title:"Mapset Merger",permalink:"/docs/tools/mapset-merger"}},s={},p=[{value:"Map info settings",id:"map-info-settings",level:2},{value:"Additional features",id:"additional-features",level:2},{value:"Resnapping",id:"resnapping",level:2},{value:"Timeline",id:"timeline",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Map Cleaner cleans the current beatmap of useless greenlines and it also lets you do some\nother usefull operations on the whole beatmap."),(0,i.kt)("p",null,"Map cleaner works by reconstructing all timing points. It first stores all the influences of the\ntiming points and then rebuilds them in a structured way. This means the greenlines automatically get\nresnapped to the objects that use them and any unnecessary changes get removed.\nIn this process the map and hitsounds essentially stay the same, unless additional features are active.\nThe changes should only be noticable in the editor."),(0,i.kt)("h2",{id:"map-info-settings"},"Map info settings"),(0,i.kt)("p",null,"These settings influence what things Map Cleaner will or will not remove from the timing points.\nIf you want to be on the safe side, you can keep all these settings checked as this will result in the least amount of stuff being removed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Map uses volume changes in sliders"),": By checking this you tell Map Cleaner that\nany volume changes during the body of a slider are ",(0,i.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Map uses sampleset changes in sliders"),": By checking this you tell Map Cleaner that\nany sample set changes or sample index changes during the body of a slider are ",(0,i.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Map uses volume changes in spinners"),": By checking this you tell Map Cleaner that\nany volume changes during a spinner are ",(0,i.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed."))),(0,i.kt)("h2",{id:"additional-features"},"Additional features"),(0,i.kt)("p",null,"These are additional operations Map Cleaner can do in addition to its normal operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resnap objects"),": This will resnap all the hit objects and resnap sliderends\nduring the map cleaning process. The resnapping will be done to the beat\ndivisor setting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resnap bookmarks"),": This will resnap all bookmarks with the default resnapping method.\nYou might want to uncheck this if you have bookmarks snapped to abnormal beat divisors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Remove unused samples"),": This will remove all audio samples in the mapset which are unused\nby all beatmaps and storyboards in the mapset. Beatmap-skinnable samples will be ignored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Remove muting"),": This option removes all volume changes and custom index\nchanges on hitsounds with 5% volume. If any timingpoint has 5% volume, then\nthe volume change and custom index change on that will be removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mute unclickable hitsounds"),": This will put 5% volume on all hitsound events\noriginating from hitobjects that do not involve active player input. Only\ncircles, sliderheads and hold note heads will be audible. This can be used to\nget better insight on the rhythm of your map or how it plays."))),(0,i.kt)("h2",{id:"resnapping"},"Resnapping"),(0,i.kt)("p",null,"Resnapping works by snapping to the nearest tick on the timeline and\nflooring it to integer. If there is a redline within 10 ms after the time of\nthe hitobject, then it will snap to that redline instead. This is to prevent stuff\nfrom resnapping to a tick 3 ms before the redline."),(0,i.kt)("p",null,"Resnapping sliderends is done in two different ways. First method works by\ntaking the duration of the slider and then changing that to the nearest\nmultiple of a beat divisor. This is similar to using ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+S")," on a slider\nin the vanilla osu! editor. "),(0,i.kt)("p",null,"The second method is only used if there is a redline\nduring the slider or up to 20 ms after the slider. This will\nsnap the end time of the slider to the nearest tick on the new timing.\nNote that this creates sliders with an integer duration and\nthe exact length deviates with the rounding around the timeline ticks."),(0,i.kt)("p",null,"All spinner ends and hold note ends are also resnapped using the second\nmethod."),(0,i.kt)("p",null,"If the current beatmap is in the osu! mania gamemode, then resnapping will also resnap the X\nposition of the notes to the middle of the columns and to Y = 192."),(0,i.kt)("h2",{id:"timeline"},"Timeline"),(0,i.kt)("p",null,"Whenever you run Map Cleaner a little timeline will show all the changes the\nprogram made to the timingpoints."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red line means a removed timingpoint"),(0,i.kt)("li",{parentName:"ul"},"Orange line means a changed timingpoint"),(0,i.kt)("li",{parentName:"ul"},"Green line means a timingpoint addition")),(0,i.kt)("p",null,"If a timingpoint was just moved you will see a red line on the previous offset\nand a green line on the new offset."),(0,i.kt)("p",null,"You can ",(0,i.kt)("strong",{parentName:"p"},"double-click")," any of the lines in the timeline to go to that time in the editor."))}d.isMDXComponent=!0}}]);