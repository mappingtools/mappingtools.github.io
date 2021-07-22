(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[856],{2407:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var o=t(2122),n=t(9756),u=(t(7294),t(3905)),i={title:"Backups",author:"OliBomby",id:"backups",description:"Everything about backups.",keywords:["docs","mapping tools","backups"]},s={unversionedId:"General/backups",id:"General/backups",isDocsHomePage:!1,title:"Backups",description:"Everything about backups.",source:"@site/docs/02-General/03-Backups.md",sourceDirName:"02-General",slug:"/General/backups",permalink:"/ru/docs/General/backups",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/02-General/03-Backups.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1626970711,formattedLastUpdatedAt:"22.07.2021",sidebarPosition:3,frontMatter:{title:"Backups",author:"OliBomby",id:"backups",description:"Everything about backups.",keywords:["docs","mapping tools","backups"]},sidebar:"docsSidebar",previous:{title:"QuickRun",permalink:"/ru/docs/General/quickrun"},next:{title:"Map Cleaner",permalink:"/ru/docs/Tools/map-cleaner"}},p=[{value:"Automatic backups",id:"automatic-backups",children:[]},{value:"Periodic backups",id:"periodic-backups",children:[]},{value:"Manual backups",id:"manual-backups",children:[]}],r={toc:p};function c(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,o.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Mapping Tools makes backups of your osu! beatmaps and stores them in the backups folder. To open the backups folder use ",(0,u.kt)("strong",{parentName:"p"},"Options > Open backups folder"),". The location of the backups folder and other settings can be changed in the ",(0,u.kt)("strong",{parentName:"p"},"Options > Preferences"),". "),(0,u.kt)("p",null,"The creation of backups makes use of Editor Reader to backup the latest version in the editor instead of the last save."),(0,u.kt)("h2",{id:"automatic-backups"},"Automatic backups"),(0,u.kt)("p",null,"With automatic backups enabled, every time you run a mapping tool a backup will be created of the beatmap that will be changed. This backup is usefull for if you want to undo the work of a tool."),(0,u.kt)("p",null,"To keep the number of backups in check, there is a max number of backups for the backups folder. If the backups folder is full, the oldest backups will be deleted whenever a new backup gets created."),(0,u.kt)("h2",{id:"periodic-backups"},"Periodic backups"),(0,u.kt)("p",null,"With periodic backups enabled, Mapping Tools will periodically make backups of your beatmap while you are using the osu! editor. It uses Editor Reader to backup the latest version, even when you forget to save. It will skip the backup if there has been no change in the beatmap since the last backup, so if you go AFK in the editor your backups folder won't be spammed with identical backups."),(0,u.kt)("p",null,"Periodic backups can be recognized by the ",(0,u.kt)("inlineCode",{parentName:"p"},"PB")," (Periodic Backup) in the filename."),(0,u.kt)("h2",{id:"manual-backups"},"Manual backups"),(0,u.kt)("p",null,"In the ",(0,u.kt)("strong",{parentName:"p"},"File")," menu you have options for manual backup management:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"Generate backup")," creates a backup of the current beatmap."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"Load backup")," opens a file explorer to select a backup beatmap to load into the current beatmap.")),(0,u.kt)("p",null,"Manual backups can be recognized by the ",(0,u.kt)("inlineCode",{parentName:"p"},"UB")," (User Backup) in the filename."))}c.isMDXComponent=!0}}]);