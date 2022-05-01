(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[379],{2678:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return n},default:function(){return m}});var o=s(2122),a=s(9756),i=(s(7294),s(3905)),r={title:"Mapset Merger",author:"OliBomby",id:"mapset-merger"},l={unversionedId:"tools/mapset-merger",id:"tools/mapset-merger",isDocsHomePage:!1,title:"Mapset Merger",description:"Mapset Merger is a tool that lets you merge multiple mapsets into one big mapset.",source:"@site/docs/03-tools/Mapset Merger.md",sourceDirName:"03-tools",slug:"/tools/mapset-merger",permalink:"/docs/tools/mapset-merger",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/03-tools/Mapset Merger.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1651437805,formattedLastUpdatedAt:"5/1/2022",frontMatter:{title:"Mapset Merger",author:"OliBomby",id:"mapset-merger"},sidebar:"docsSidebar",previous:{title:"Map Cleaner",permalink:"/docs/tools/map-cleaner"},next:{title:"Sliderator",permalink:"/docs/tools/sliderator"}},n=[{value:"Adding mapsets",id:"adding-mapsets",children:[]},{value:"Exporting",id:"exporting",children:[]}],p={toc:n};function m(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mapset Merger is a tool that lets you merge multiple mapsets into one big mapset."),(0,i.kt)("p",null,"The tool will automatically resolve any file conflicts by moving as many files as possible to separate subfolders and reconstructing sample sets for custom hitsounds. Sadly, beatmap skins and custom spinner hitsounds can not be merged, because these files are not explicitly referenced in the beatmap, so their presence will always affect the entire mapset."),(0,i.kt)("h2",{id:"adding-mapsets"},"Adding mapsets"),(0,i.kt)("p",null,"To add a mapset, press the plus button at the bottom right. This will add a new mapset to the collection pre-filled with the mapset info of the current beatmap. If you ",(0,i.kt)("strong",{parentName:"p"},"shift-click")," the plus button it will use the mapset currently open in the osu! client instead."),(0,i.kt)("p",null,"All mapsets to be merged will show up in the list. Each mapset has a name and a path to the root folder of the mapset. The names of the mapsets will be used to categorize files in the merged mapset, so make sure the names are unique and concise. The path can be edited in the list by ",(0,i.kt)("strong",{parentName:"p"},"double-clicking")," on it. It will also show you a browse button which you can use to select the path using the File Explorer."),(0,i.kt)("h2",{id:"exporting"},"Exporting"),(0,i.kt)("p",null,"Pressing the run button will merge the mapsets and export the files to the folder at the ",(0,i.kt)("strong",{parentName:"p"},"Export path"),". Make sure this folder exists, because otherwise it will give you an error."),(0,i.kt)("p",null,"If you have checked the box ",(0,i.kt)("strong",{parentName:"p"},"Move storyboard to .osu"),", Mapset Merger will move the content of any .osb file in a mapset to the .osu files. This will cause storyboards to be beatmap-specific and not leak over to the other mapsets in the merged mapset. This option is good to use if you merge mapsets with different storyboards, but be carefull because if a mapset has a large storyboard file and multiple difficulties this will multiply the data and produce large .osu files."))}m.isMDXComponent=!0}}]);