"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),i=n(4996),a=n(941);const u={title:"QuickRun",author:"OliBomby",id:"quickrun",description:"Everything about QuickRun.",keywords:["docs","mapping tools","quickrun","smartquickrun","quickundo"]},l=void 0,s={unversionedId:"general/quickrun",id:"general/quickrun",title:"QuickRun",description:"Everything about QuickRun.",source:"@site/docs/02-general/02-QuickRun.md",sourceDirName:"02-general",slug:"/general/quickrun",permalink:"/docs/general/quickrun",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/02-general/02-QuickRun.md",tags:[],version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1738533384,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:2,frontMatter:{title:"QuickRun",author:"OliBomby",id:"quickrun",description:"Everything about QuickRun.",keywords:["docs","mapping tools","quickrun","smartquickrun","quickundo"]},sidebar:"docsSidebar",previous:{title:"Navigation",permalink:"/docs/general/navigation"},next:{title:"Backups",permalink:"/docs/general/backups"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"SmartQuickRun",id:"smartquickrun",level:2},{value:"QuickUndo",id:"quickundo",level:2}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QuickRun is a great way to speed up the usage of Mapping Tools. It allows you to run tools by pressing a hotkey and automatically reload the editor, making the whole process of using a tool just one press of a button."),(0,o.kt)("p",null,"You can enable QuickRun in the ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),"."),(0,o.kt)(a.Z,{alt:"QuickRun example image",sources:{light:(0,i.Z)("./img/quickrun_example_light.png"),dark:(0,i.Z)("./img/quickrun_example_dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"To enable QuickRun, go to ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," and assign a hotkey to the ",(0,o.kt)("strong",{parentName:"p"},"QuickRun hotkey")," field. Now when you press the hotkey, it will run the tool which is currently open in Mapping Tools."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alt+M")," is a good hotkey to use since it doesn't interfere with the standard osu! editor hotkeys."),(0,o.kt)("p",null,"If you have the option ",(0,o.kt)("strong",{parentName:"p"},"Auto reload after QuickRun")," enabled, Mapping Tools will send a key-combination ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+L, Enter")," to the osu! window to reload the editor after the tool has finished its work. This saves you having to reload manually."),(0,o.kt)("p",null,"It's good to remember that when QuickRunning a tool it ",(0,o.kt)("strong",{parentName:"p"},"always uses the beatmap currently open in the editor")," and not the current map selected in Mapping Tools."),(0,o.kt)("h2",{id:"smartquickrun"},"SmartQuickRun"),(0,o.kt)("p",null,"By checking the box to the right of the QuickRun hotkey field, you enable ",(0,o.kt)("strong",{parentName:"p"},"SmartQuickRun"),". This is a feature that allows you to QuickRun different tools depending on how many objects you have selected in the editor."),(0,o.kt)("p",null,"There are three different distinctions SmartQuickRun can make:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"None")," for when no hit objects are selected. ",(0,o.kt)("inlineCode",{parentName:"li"},"N=0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Single")," for when exactly one hit object is selected. ",(0,o.kt)("inlineCode",{parentName:"li"},"N=1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple")," for when more than one hit objects are selected. ",(0,o.kt)("inlineCode",{parentName:"li"},"N>1"))),(0,o.kt)("h2",{id:"quickundo"},"QuickUndo"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"QuickUndo")," is a hotkey that loads the most recent backup into the editor, effectively undoing the previous tool run. It also supports the ",(0,o.kt)("strong",{parentName:"p"},"auto reload")," feature, just like QuickRun. It's recommended to use QuickUndo alongside QuickRun."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+Z")," is a good hotkey to use for QuickUndo."))}k.isMDXComponent=!0}}]);