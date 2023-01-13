"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[803],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,c=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return o?n.createElement(c,i(i({ref:t},u),{},{components:o})):n.createElement(c,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7033:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const r={title:"FAQ",author:"OliBomby, aehrea"},i="FAQ",s={type:"mdx",permalink:"/faq",source:"@site/src/pages/faq.md",title:"FAQ",description:"Why don't I see any changes in my map?",frontMatter:{title:"FAQ",author:"OliBomby, aehrea"}},l=[{value:"Why don&#39;t I see any changes in my map?",id:"why-dont-i-see-any-changes-in-my-map",level:2},{value:"I get an error when I run the tool &quot;Could not find part of the path&quot; or &quot;Empty path name is not legal&quot;.",id:"i-get-an-error-when-i-run-the-tool-could-not-find-part-of-the-path-or-empty-path-name-is-not-legal",level:2},{value:"I get an error every time I run any tool on a specific map, but other maps don&#39;t give the error.",id:"i-get-an-error-every-time-i-run-any-tool-on-a-specific-map-but-other-maps-dont-give-the-error",level:3},{value:"A tool broke my map. What do I do?",id:"a-tool-broke-my-map-what-do-i-do",level:2},{value:"&#39;Open Current Beatmap&#39; doesn&#39;t work or getting selected hit objects doesn&#39;t work.",id:"open-current-beatmap-doesnt-work-or-getting-selected-hit-objects-doesnt-work",level:2},{value:"How to mute sliderends without copying hitsounds?",id:"how-to-mute-sliderends-without-copying-hitsounds",level:2},{value:"Starting Mapping Tools prompts me to install .NET, but I installed it already.",id:"starting-mapping-tools-prompts-me-to-install-net-but-i-installed-it-already",level:2},{value:"I have a question not on this list or I found a bug.",id:"i-have-a-question-not-on-this-list-or-i-found-a-bug",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"why-dont-i-see-any-changes-in-my-map"},"Why don't I see any changes in my map?"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("strong",{parentName:"p"},"Current Map")," (blue bar at the top of the application) to make sure you have set the correct path to your beatmap."),(0,a.kt)("p",null,"Also, make sure to ",(0,a.kt)("strong",{parentName:"p"},"reload the editor without saving")," after running the tool, as saving the map in the editor reverts the changes caused by the tool, because saving overwrites the .osu with the old version of the beatmap. You can reload the map quickly by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+L")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," in the editor."),(0,a.kt)("h2",{id:"i-get-an-error-when-i-run-the-tool-could-not-find-part-of-the-path-or-empty-path-name-is-not-legal"},'I get an error when I run the tool "Could not find part of the path" or "Empty path name is not legal".'),(0,a.kt)("p",null,"Hover your mouse cursor over the ",(0,a.kt)("strong",{parentName:"p"},"Beatmap name at the top of the window")," and it will show the full path. Does this path exist? Is the Songs folder in the right place? If your Songs folder is not in the default Appdata location, make sure you have set the correct path to your Songs folder in the ",(0,a.kt)("strong",{parentName:"p"},"Preferences"),"."),(0,a.kt)("h3",{id:"i-get-an-error-every-time-i-run-any-tool-on-a-specific-map-but-other-maps-dont-give-the-error"},"I get an error every time I run any tool on a specific map, but other maps don't give the error."),(0,a.kt)("p",null,"The map you are trying to edit is probably using an old unsupported file format or it is corrupted. You can fix this by opening the map in the editor and saving it. This will force osu! to update the map to the latest file format which is compatible with Mapping Tools."),(0,a.kt)("h2",{id:"a-tool-broke-my-map-what-do-i-do"},"A tool broke my map. What do I do?"),(0,a.kt)("p",null,"Mapping Tools saves backups of your beatmaps any time it makes a change. You can find these backups by going to ",(0,a.kt)("strong",{parentName:"p"},"About > Open backup folder"),". You can also load a backup to the Current Map with ",(0,a.kt)("strong",{parentName:"p"},"File > Load backup"),", or by using the QuickUndo hotkey which you can enable in the ",(0,a.kt)("strong",{parentName:"p"},"Preferences"),"."),(0,a.kt)("h2",{id:"open-current-beatmap-doesnt-work-or-getting-selected-hit-objects-doesnt-work"},"'Open Current Beatmap' doesn't work or getting selected hit objects doesn't work."),(0,a.kt)("p",null,"These are features that depend on reading the memory of the osu! client. Memory reading can randomly stop working sometimes in which case restarting osu! or restarting your computer usually fixes the issue. Other causes and solutions for the issue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firewall of anti-virus is blocking Mapping Tools: Disable the anti-virus or exempt Mapping Tools and try again."),(0,a.kt)("li",{parentName:"ul"},"Not using the latest version of Mapping Tools: Sometimes an update to Mapping Tools is required to match changes in osu!"),(0,a.kt)("li",{parentName:"ul"},"Not using the latest version of osu!: Switch off of private servers and update osu! to the latest version."),(0,a.kt)("li",{parentName:"ul"},"osu! updated and changed memory offsets again: Please notify me so the issue can be fixed."),(0,a.kt)("li",{parentName:"ul"},"Using Mapping Tools on Windows 7 or earlier: Make sure you have .NET framework 4.5.1 or later installed."),(0,a.kt)("li",{parentName:"ul"},"Using Mapping Tools on an OS which is not Windows: No solutions for this unfortunately.")),(0,a.kt)("h2",{id:"how-to-mute-sliderends-without-copying-hitsounds"},"How to mute sliderends without copying hitsounds?"),(0,a.kt)("p",null,"To just mute sliderends you can leave the 'Copy hitsounds from' field empty and in the 'Copy hitsounds to' field add the map which should get its sliderends muted. This will cause no hitsounds to be copied, but sliderend muting will still work."),(0,a.kt)("p",null,"If you do copy hitsounds while muting sliderends, then the tool will use the objects from the beatmap you are copying from as a reference, so it will not mute sliderends in places where you have added hitsounds. That's why sliderend muting is a part of Hitsound Copier instead of being its own standalone tool."),(0,a.kt)("h2",{id:"starting-mapping-tools-prompts-me-to-install-net-but-i-installed-it-already"},"Starting Mapping Tools prompts me to install .NET, but I installed it already."),(0,a.kt)("p",null,"It could be that you installed the wrong version of .NET. You need to install ",(0,a.kt)("strong",{parentName:"p"},".NET Desktop Runtime 5")," with the ",(0,a.kt)("strong",{parentName:"p"},"same architecture as Mapping Tools"),". So if you have x64 Mapping Tools you need x64 .NET and if you have x86 Mapping Tools you need x86 .NET."),(0,a.kt)("p",null,"Reinstalling Mapping Tools with a fresh installer from the website should also fix the issue, because the installer automatically installs the correct version of .NET for you."),(0,a.kt)("h2",{id:"i-have-a-question-not-on-this-list-or-i-found-a-bug"},"I have a question not on this list or I found a bug."),(0,a.kt)("p",null,"Ask a question in the mapping-tools-techsupport channel in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/YfjKN2yjQV"},"Discord"),", ask me directly on Discord (OliBomby#3573), or make a new issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OliBomby/Mapping_Tools/issues"},"GitHub"),"."))}u.isMDXComponent=!0}}]);