(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[969],{2836:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=i(2122),a=i(9756),r=(i(7294),i(3905)),n={title:"Sliderator",author:"OliBomby",id:"sliderator"},l={unversionedId:"tools/sliderator",id:"tools/sliderator",isDocsHomePage:!1,title:"Sliderator",description:"Sliderator is a tool that lets you create sliders or streams which change speed midway through.",source:"@site/docs/03-tools/Sliderator.md",sourceDirName:"03-tools",slug:"/tools/sliderator",permalink:"/de/docs/tools/sliderator",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-tools/Sliderator.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1627581346,formattedLastUpdatedAt:"29.7.2021",frontMatter:{title:"Sliderator",author:"OliBomby",id:"sliderator"},sidebar:"docsSidebar",previous:{title:"Backups",permalink:"/de/docs/general/backups"},next:{title:"Map Cleaner",permalink:"/de/docs/tools/map-cleaner"}},s=[{value:"Importing sliders",id:"importing",children:[]},{value:"Graph",id:"graph",children:[{value:"Editing the graph",id:"editing-graph",children:[]},{value:"Other graph controls",id:"graph-controls",children:[]}]},{value:"Export options",id:"export-options",children:[]}],h={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sliderator is a tool that lets you create sliders or streams which change speed midway through."),(0,r.kt)("p",null,"To get started, simply import a slider with the controls in the top left and start editing the graph with your right mouse button."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Unrankable")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sliders made by Sliderator are deemed unrankable, because the changes in speed are unreadable."))),(0,r.kt)("h2",{id:"importing"},"Importing sliders"),(0,r.kt)("p",null,"Before you do anything with Sliderator, you need to import one or more sliders with the ",(0,r.kt)("strong",{parentName:"p"},"Import sliders")," button in the top left.\nThere are 3 ways to import sliders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Selected")," imports the sliders which you have currently selected in the osu! editor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bookmarked")," imports any sliders in the current beatmap which have a bookmark on them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time")," imports sliders in the current beatmap which are referenced by a time code which you input in the box next to it. This time code should be the same format as what you get when you copy some objects in the editor and paste it in a text field, so for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"00:56:823 (1,2,1,2) -"))),(0,r.kt)("p",null,"If you have imported multiple sliders, you can navigate between them with the left and right buttons. Shift-clicking these buttons will make it also quickly sliderate the current slider before moving to the next slider."),(0,r.kt)("p",null,"Selecting a slider automatically sets the ",(0,r.kt)("strong",{parentName:"p"},"Beat length"),", ",(0,r.kt)("strong",{parentName:"p"},"BPM"),", and ",(0,r.kt)("strong",{parentName:"p"},"Global SV")," values."),(0,r.kt)("h2",{id:"graph"},"Graph"),(0,r.kt)("p",null,"The graph is the most important part of Sliderator and it is where you define the movement of the sliderball over time."),(0,r.kt)("p",null,"On the X-axis is ",(0,r.kt)("strong",{parentName:"p"},"time")," and its for the entire duration of the slider. The duration in defined in the ",(0,r.kt)("strong",{parentName:"p"},"Beat length")," field.\nThe beat snap divisor for the lines on the X-axis can be changed with the slider below the graph."),(0,r.kt)("p",null,"For the Y-axis there are two modes and they can be toggled with the green button below the graph:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X")," is position mode. Here the Y-axis is the position along the the slider, so you can define exactly where the slider ball must be at what time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"V")," is velocity mode. Here the Y-axis is the slider velocity multiplier. It ranges between the positive and negative ",(0,r.kt)("strong",{parentName:"li"},"SV limit"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sliderator graph",src:i(202).Z})),(0,r.kt)("h3",{id:"editing-graph"},"Editing the graph"),(0,r.kt)("p",null,"You edit the graph using control points and interpolations. "),(0,r.kt)("p",null,"To place a new control point, ",(0,r.kt)("strong",{parentName:"p"},"right-click")," anywhere on the graph. Right-clicking on a control point opens a context menu which lets you delete the control point or change its method of interpolation. Use ",(0,r.kt)("strong",{parentName:"p"},"left-click")," to drag around control points."),(0,r.kt)("p",null,"In the middle of each interpolated section is a smaller control point. Dragging this control point up and down lets you change the shape of the interpolation. ",(0,r.kt)("strong",{parentName:"p"},"Right-click")," on it to reset the control point."),(0,r.kt)("p",null,"There are also some hotkeys to help with dragging around control points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift")," to restrict movement to a horizontal plane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl")," to restrict movement to a vertical plane."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alt")," to disable snapping.")),(0,r.kt)("h3",{id:"graph-controls"},"Other graph controls"),(0,r.kt)("p",null,"This section explains some of the other controls which are related to the graph."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Beat length")," is the duration of the slider in beats. This also affects the width of the graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BPM")," is the beats-per-minute at which the slider operates. This value should be equal to the BPM at the place where the slider will be exported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Global SV")," is the slider multiplier of the beatmap. This value should be equal to the slider multiplier of the current beatmap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SV limit")," is the maximum allowed SV in the graph. This also affects the height of the graph in velocity mode. By default this value is 10, because that is the maximum SV allowed in inherited timing points."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scale to completion")," lets you scale all control points vertically such that the furthest the sliderball ever travels along the slider is at the wanted completion."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reset graph")," lets you reset the graph to the default state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show red anchors")," shows the positions of red anchors in the slider as red horizontal lines in the graph in position mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show graph anchors")," shows the positions of the graph control points in the slider preview."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected segment count")," shows for your current configuration an estimate of how many slider anchors will be necessary. Anything below 10000 will not lag your game too much.")),(0,r.kt)("h2",{id:"export-options"},"Export options"),(0,r.kt)("p",null,"Running Sliderator exports the sliderated slider to the current beatmap at the export time. You can choose to just add to the beatmap or replace whatever is there in the beatmap already with ",(0,r.kt)("strong",{parentName:"p"},"Override"),"."),(0,r.kt)("p",null,"If you check ",(0,r.kt)("strong",{parentName:"p"},"Export as stream instead")," Sliderator will not export a slider but a stream of circles which follows the speed and duration of the slider. This option uses the beat snap divisor of the graph to determine how many circles it will put in each beat."),(0,r.kt)("p",null,"You can choose to manually choose the ",(0,r.kt)("strong",{parentName:"p"},"New SV")," for the sliderated slider. This SV should approach the maximum speed used in the graph. Usually the automatic value is good enough, but sometimes it can be reduced slightly to get a lower anchor count while not effecting the quality of the sliderated slider."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum tumour length")," is another option you can use to significantly reduce the number of anchors in the resulting slider. Sliderator uses invisible tumours to slow down the slider ball, so increasing the minimum tumour length will cause Sliderator to create bigger tumours, thus using less tumours overal. The only downside is that the bigger tumours make the movement of the sliderball less smooth."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delegate SV to BPM")," causes Sliderator to use BPM to set the new SV of the slider. This removes the 10x SV limitation of inherited timing points. It also allows you to enable the ",(0,r.kt)("strong",{parentName:"p"},"Remove slider ticks")," option which removes slider ticks from the slider by using an inherited timing point with ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," SV."))}p.isMDXComponent=!0},202:function(e,t,i){"use strict";t.Z=i.p+"assets/images/sliderator_graph-c1544b30d52506865936f69441ccc41a.png"}}]);