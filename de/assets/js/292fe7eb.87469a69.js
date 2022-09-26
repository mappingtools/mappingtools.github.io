"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),h=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=h(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=h(r),u=i,c=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(c,n(n({ref:t},p),{},{components:r})):o.createElement(c,n({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var h=2;h<a;h++)n[h]=r[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=r(7462),i=(r(7294),r(3905));const a={title:"Sliderator",author:"OliBomby",id:"sliderator"},n=void 0,l={unversionedId:"tools/sliderator",id:"tools/sliderator",title:"Sliderator",description:"Sliderator is a tool that lets you create sliders or streams which change speed midway through.",source:"@site/docs/03-tools/Sliderator.md",sourceDirName:"03-tools",slug:"/tools/sliderator",permalink:"/de/docs/tools/sliderator",draft:!1,editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-tools/Sliderator.md",tags:[],version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1664221319,formattedLastUpdatedAt:"26. Sept. 2022",frontMatter:{title:"Sliderator",author:"OliBomby",id:"sliderator"},sidebar:"docsSidebar",previous:{title:"Mapset Merger",permalink:"/de/docs/tools/mapset-merger"},next:{title:"Convert mania HS to standard HS",permalink:"/de/docs/guides/convert-mania-to-standard-hs"}},s={},h=[{value:"Importing sliders",id:"importing",level:2},{value:"Graph",id:"graph",level:2},{value:"Editing the graph",id:"editing-graph",level:3},{value:"Other graph controls",id:"graph-controls",level:3},{value:"Export options",id:"export-options",level:2}],p={toc:h};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sliderator is a tool that lets you create sliders or streams which change speed midway through."),(0,i.kt)("p",null,"To get started, simply import a slider with the controls in the top left and start editing the graph with your right mouse button."),(0,i.kt)("admonition",{title:"Unrankable",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Sliders made by Sliderator are deemed unrankable. Details can be read in ",(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3"},"this reddit post"),".")),(0,i.kt)("h2",{id:"importing"},"Importing sliders"),(0,i.kt)("p",null,"Before you do anything with Sliderator, you need to import one or more sliders with the ",(0,i.kt)("strong",{parentName:"p"},"Import sliders")," button in the top left.\nThere are 3 ways to import sliders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Selected")," imports the sliders which you have currently selected in the osu! editor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bookmarked")," imports any sliders in the current beatmap which have a bookmark on them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time")," imports sliders in the current beatmap which are referenced by a time code which you input in the box next to it. This time code should be the same format as what you get when you copy some objects in the editor and paste it in a text field, so for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"00:56:823 (1,2,1,2) -"))),(0,i.kt)("p",null,"If you have imported multiple sliders, you can navigate between them with the left and right buttons. Shift-clicking these buttons will make it also quickly sliderate the current slider before moving to the next slider."),(0,i.kt)("p",null,"Selecting a slider automatically sets the ",(0,i.kt)("strong",{parentName:"p"},"Beat length"),", ",(0,i.kt)("strong",{parentName:"p"},"BPM"),", and ",(0,i.kt)("strong",{parentName:"p"},"Global SV")," values."),(0,i.kt)("h2",{id:"graph"},"Graph"),(0,i.kt)("p",null,"The graph is the most important part of Sliderator and it is where you define the movement of the sliderball over time."),(0,i.kt)("p",null,"On the X-axis is ",(0,i.kt)("strong",{parentName:"p"},"time")," and its for the entire duration of the slider. The duration in defined in the ",(0,i.kt)("strong",{parentName:"p"},"Beat length")," field.\nThe beat snap divisor for the lines on the X-axis can be changed with the slider below the graph."),(0,i.kt)("p",null,"For the Y-axis there are two modes and they can be toggled with the green button below the graph:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"X")," is position mode. Here the Y-axis is the position along the the slider, so you can define exactly where the slider ball must be at what time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"V")," is velocity mode. Here the Y-axis is the slider velocity multiplier. It ranges between the positive and negative ",(0,i.kt)("strong",{parentName:"li"},"SV limit"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sliderator graph",src:r(8986).Z,width:"814",height:"337"})),(0,i.kt)("h3",{id:"editing-graph"},"Editing the graph"),(0,i.kt)("p",null,"You edit the graph using control points and interpolations. "),(0,i.kt)("p",null,"To place a new control point, ",(0,i.kt)("strong",{parentName:"p"},"right-click")," anywhere on the graph. Right-clicking on a control point opens a context menu which lets you delete the control point or change its method of interpolation. Use ",(0,i.kt)("strong",{parentName:"p"},"shift+right-click")," on a control point to instantly remove it. Use ",(0,i.kt)("strong",{parentName:"p"},"left-click")," on control points to drag them around. You can pan and zoom the view by dragging the background with the left mouse button or scrolling with the scrollwheel."),(0,i.kt)("p",null,"In the middle of each interpolated section is a smaller control point. Dragging this control point up and down lets you change the shape of the interpolation. ",(0,i.kt)("strong",{parentName:"p"},"Right-click")," on it to reset the control point."),(0,i.kt)("p",null,"There are also some hotkeys to help with dragging around control points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shift")," to restrict movement to a horizontal plane."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ctrl")," to restrict movement to a vertical plane."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alt")," to disable snapping.")),(0,i.kt)("h3",{id:"graph-controls"},"Other graph controls"),(0,i.kt)("p",null,"This section explains some of the other controls which are related to the graph."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Beat length")," is the duration of the slider in beats. This also affects the width of the graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BPM")," is the beats-per-minute at which the slider operates. This value should be equal to the BPM at the place where the slider will be exported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Global SV")," is the slider multiplier of the beatmap. This value should be equal to the slider multiplier of the current beatmap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SV limit")," is the maximum allowed SV in the graph. This also affects the height of the graph in velocity mode. By default this value is 10, because that is the maximum SV allowed in inherited timing points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scale to completion")," lets you scale all control points vertically such that the furthest the sliderball ever travels along the slider is at the wanted completion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset graph")," lets you reset the graph to the default state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Show red anchors")," shows the positions of red anchors in the slider as red horizontal lines in the graph in position mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Show graph anchors")," shows the positions of the graph control points in the slider preview."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Expected segment count")," shows for your current configuration an estimate of how many slider anchors will be necessary. Anything below 10000 will not lag your game too much.")),(0,i.kt)("h2",{id:"export-options"},"Export options"),(0,i.kt)("p",null,"Running Sliderator exports the sliderated slider to the current beatmap at the export time. You can choose to just add to the beatmap or replace whatever is there in the beatmap already with ",(0,i.kt)("strong",{parentName:"p"},"Override"),"."),(0,i.kt)("p",null,"If you check ",(0,i.kt)("strong",{parentName:"p"},"Export as stream instead")," Sliderator will not export a slider but a stream of circles which follows the speed and duration of the slider. This option uses the beat snap divisor of the graph to determine how many circles it will put in each beat."),(0,i.kt)("p",null,"You can choose to manually choose the ",(0,i.kt)("strong",{parentName:"p"},"New SV")," for the sliderated slider. This SV should approach the maximum speed used in the graph. Usually the automatic value is good enough, but sometimes it can be reduced slightly to get a lower anchor count while not effecting the quality of the sliderated slider."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Minimum tumour length")," is another option you can use to significantly reduce the number of anchors in the resulting slider. Sliderator uses invisible tumours to slow down the slider ball, so increasing the minimum tumour length will cause Sliderator to create bigger tumours, thus using less tumours overal. The only downside is that the bigger tumours make the movement of the sliderball less smooth."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Delegate SV to BPM")," causes Sliderator to use BPM to set the new SV of the slider. This removes the 10x SV limitation of inherited timing points. It also allows you to enable the ",(0,i.kt)("strong",{parentName:"p"},"Remove slider ticks")," option which removes slider ticks from the slider by using an inherited timing point with ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," SV."))}d.isMDXComponent=!0},8986:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sliderator_graph-c1544b30d52506865936f69441ccc41a.png"}}]);