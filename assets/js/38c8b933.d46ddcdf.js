(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[0],{3501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),u=n(4996),r=n(8465),l={title:"QuickRun",author:"OliBomby",id:"quickrun",description:"Everything about QuickRun.",keywords:["docs","mapping tools","quickrun","smartquickrun","quickundo"]},s={unversionedId:"general/quickrun",id:"general/quickrun",isDocsHomePage:!1,title:"QuickRun",description:"Everything about QuickRun.",source:"@site/docs/02-general/02-QuickRun.md",sourceDirName:"02-general",slug:"/general/quickrun",permalink:"/docs/general/quickrun",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/02-general/02-QuickRun.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1655811324,formattedLastUpdatedAt:"6/21/2022",sidebarPosition:2,frontMatter:{title:"QuickRun",author:"OliBomby",id:"quickrun",description:"Everything about QuickRun.",keywords:["docs","mapping tools","quickrun","smartquickrun","quickundo"]},sidebar:"docsSidebar",previous:{title:"Navigation",permalink:"/docs/general/navigation"},next:{title:"Backups",permalink:"/docs/general/backups"}},c=[{value:"Setup",id:"setup",children:[]},{value:"SmartQuickRun",id:"smartquickrun",children:[]},{value:"QuickUndo",id:"quickundo",children:[]}],k={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"QuickRun is a great way to speed up the usage of Mapping Tools. It allows you to run tools by pressing a hotkey and automatically reload the editor, making the whole process of using a tool just one press of a button."),(0,a.kt)("p",null,"You can enable QuickRun in the ",(0,a.kt)("strong",{parentName:"p"},"Preferences"),"."),(0,a.kt)(r.Z,{alt:"QuickRun example image",sources:{light:(0,u.Z)("./img/quickrun_example_light.png"),dark:(0,u.Z)("./img/quickrun_example_dark.png")},mdxType:"ThemedImage"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To enable QuickRun, go to ",(0,a.kt)("strong",{parentName:"p"},"Preferences")," and assign a hotkey to the ",(0,a.kt)("strong",{parentName:"p"},"QuickRun hotkey")," field. Now when you press the hotkey, it will run the tool which is currently open in Mapping Tools."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alt+M")," is a good hotkey to use since it doesn't interfere with the standard osu! editor hotkeys."),(0,a.kt)("p",null,"If you have the option ",(0,a.kt)("strong",{parentName:"p"},"Auto reload after QuickRun")," enabled, Mapping Tools will send a key-combination ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+L, Enter")," to the osu! window to reload the editor after the tool has finished its work. This saves you having to reload manually."),(0,a.kt)("p",null,"It's good to remember that when QuickRunning a tool it ",(0,a.kt)("strong",{parentName:"p"},"always uses the beatmap currently open in the editor")," and not the current map selected in Mapping Tools."),(0,a.kt)("h2",{id:"smartquickrun"},"SmartQuickRun"),(0,a.kt)("p",null,"By checking the box to the right of the QuickRun hotkey field, you enable ",(0,a.kt)("strong",{parentName:"p"},"SmartQuickRun"),". This is a feature that allows you to QuickRun different tools depending on how many objects you have selected in the editor."),(0,a.kt)("p",null,"There are three different distinctions SmartQuickRun can make:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"None")," for when no hit objects are selected. ",(0,a.kt)("inlineCode",{parentName:"li"},"N=0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Single")," for when exactly one hit object is selected. ",(0,a.kt)("inlineCode",{parentName:"li"},"N=1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multiple")," for when more than one hit objects are selected. ",(0,a.kt)("inlineCode",{parentName:"li"},"N>1"))),(0,a.kt)("h2",{id:"quickundo"},"QuickUndo"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"QuickUndo")," is a hotkey that loads the most recent backup into the editor, effectively undoing the previous tool run. It also supports the ",(0,a.kt)("strong",{parentName:"p"},"auto reload")," feature, just like QuickRun. It's recommended to use QuickUndo alongside QuickRun."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+Z")," is a good hotkey to use for QuickUndo."))}p.isMDXComponent=!0}}]);