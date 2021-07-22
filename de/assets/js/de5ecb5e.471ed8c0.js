(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[172],{6837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return r},default:function(){return h}});var a=n(2122),i=n(9756),s=(n(7294),n(3905)),l={title:"Map Cleaner",author:"OliBomby",id:"map-cleaner"},o={unversionedId:"Tools/map-cleaner",id:"Tools/map-cleaner",isDocsHomePage:!1,title:"Map Cleaner",description:"Map Cleaner cleans the current beatmap of useless greenlines and it also lets you do some",source:"@site/docs/03-Tools/Map Cleaner.md",sourceDirName:"03-Tools",slug:"/Tools/map-cleaner",permalink:"/de/docs/Tools/map-cleaner",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-Tools/Map Cleaner.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1626961603,formattedLastUpdatedAt:"22.7.2021",frontMatter:{title:"Map Cleaner",author:"OliBomby",id:"map-cleaner"},sidebar:"docsSidebar",previous:{title:"QuickRun",permalink:"/de/docs/General/quickrun"}},r=[{value:"Map info settings",id:"map-info-settings",children:[]},{value:"Additional features",id:"additional-features",children:[]},{value:"Resnapping",id:"resnapping",children:[]},{value:"Timeline",id:"timeline",children:[]}],p={toc:r};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Map Cleaner cleans the current beatmap of useless greenlines and it also lets you do some\nother usefull operations on the whole beatmap."),(0,s.kt)("p",null,"Map cleaner works by reconstructing all timing points. It first stores all the influences of the\ntiming points and then rebuilds them in a structured way. This means the greenlines automatically get\nresnapped to the objects that use them and any unnecessary changes get removed.\nIn this process the map and hitsounds essentially stay the same, unless additional features are active.\nThe changes should only be noticable in the editor."),(0,s.kt)("h2",{id:"map-info-settings"},"Map info settings"),(0,s.kt)("p",null,"These settings influence what things Map Cleaner will or will not remove from the timing points.\nIf you want to be on the safe side, you can keep all these settings checked as this will result in the least amount of stuff being removed."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Map uses volume changes in sliders"),": By checking this you tell Map Cleaner that\nany volume changes during the body of a slider are ",(0,s.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Map uses sampleset changes in sliders"),": By checking this you tell Map Cleaner that\nany sample set changes or sample index changes during the body of a slider are ",(0,s.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Map uses volume changes in spinners"),": By checking this you tell Map Cleaner that\nany volume changes during a spinner are ",(0,s.kt)("em",{parentName:"p"},"intentional")," and as such should not be removed."))),(0,s.kt)("h2",{id:"additional-features"},"Additional features"),(0,s.kt)("p",null,"These are additional operations Map Cleaner can do in addition to its normal operation."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Resnap objects"),": This will resnap all the hit objects and resnap sliderends\nduring the map cleaning process. The resnapping will be done to the beat\ndivisor setting.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Resnap bookmarks"),": This will resnap all bookmarks with the default resnapping method.\nYou might want to uncheck this if you have bookmarks snapped to abnormal beat divisors.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Remove unused samples"),": This will remove all audio samples in the mapset which are unused\nby all beatmaps and storyboards in the mapset. Beatmap-skinnable samples will be ignored.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Remove muting"),": This option removes all volume changes and custom index\nchanges on hitsounds with 5% volume. If any timingpoint has 5% volume, then\nthe volume change and custom index change on that will be removed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Mute unclickable hitsounds"),": This will put 5% volume on all hitsound events\noriginating from hitobjects that do not involve active player input. Only\ncircles, sliderheads and hold note heads will be audible. This can be used to\nget better insight on the rhythm of your map or how it plays."))),(0,s.kt)("h2",{id:"resnapping"},"Resnapping"),(0,s.kt)("p",null,"Resnapping works by snapping to the nearest tick on the timeline and\nflooring it to integer. If there is a redline within 10 ms after the time of\nthe hitobject, then it will snap to that redline instead. This is to prevent stuff\nfrom resnapping to a tick 3 ms before the redline."),(0,s.kt)("p",null,"Resnapping sliderends is done in two different ways. First method works by\ntaking the duration of the slider and then changing that to the nearest\nmultiple of a beat divisor. This is similar to using ",(0,s.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+S")," on a slider\nin the vanilla osu! editor. "),(0,s.kt)("p",null,"The second method is only used if there is a redline\nduring the slider or up to 20 ms after the slider. This will\nsnap the end time of the slider to the nearest tick on the new timing.\nNote that this creates sliders with an integer duration and\nthe exact length deviates with the rounding around the timeline ticks."),(0,s.kt)("p",null,"All spinner ends and hold note ends are also resnapped using the second\nmethod."),(0,s.kt)("p",null,"If the current beatmap is in the osu! mania gamemode, then resnapping will also resnap the X\nposition of the notes to the middle of the columns and to Y = 192."),(0,s.kt)("h2",{id:"timeline"},"Timeline"),(0,s.kt)("p",null,"Whenever you run Map Cleaner a little timeline will show all the changes the\nprogram made to the timingpoints."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Red line means a removed timingpoint"),(0,s.kt)("li",{parentName:"ul"},"Orange line means a changed timingpoint"),(0,s.kt)("li",{parentName:"ul"},"Green line means a timingpoint addition")),(0,s.kt)("p",null,"If a timingpoint was just moved you will see a red line on the previous offset\nand a green line on the new offset."),(0,s.kt)("p",null,"You can ",(0,s.kt)("strong",{parentName:"p"},"double-click")," any of the lines in the timeline to go to that time in the editor."))}h.isMDXComponent=!0}}]);