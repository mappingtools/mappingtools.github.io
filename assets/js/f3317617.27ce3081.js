(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[687],{3073:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return d},default:function(){return p}});var n=o(2122),a=o(9756),s=(o(7294),o(3905)),i={title:"Convert mania HS to standard HS",author:"OliBomby",id:"convert-mania-to-standard-hs",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",keywords:["docs","mapping tools","hitsound studio","hitsounds"]},r={unversionedId:"guides/convert-mania-to-standard-hs",id:"guides/convert-mania-to-standard-hs",isDocsHomePage:!1,title:"Convert mania HS to standard HS",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",source:"@site/docs/04-guides/hs-studio-convert-mania-to-standard.md",sourceDirName:"04-guides",slug:"/guides/convert-mania-to-standard-hs",permalink:"/docs/guides/convert-mania-to-standard-hs",editUrl:"https://github.com/mappingtools/mappingtools.github.io/tree/main/docs/04-guides/hs-studio-convert-mania-to-standard.md",version:"current",lastUpdatedBy:"OliBomby",lastUpdatedAt:1630928428,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Convert mania HS to standard HS",author:"OliBomby",id:"convert-mania-to-standard-hs",description:"How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.",keywords:["docs","mapping tools","hitsound studio","hitsounds"]},sidebar:"docsSidebar",previous:{title:"Sliderator",permalink:"/docs/tools/sliderator"}},d=[{value:"Step 1: Set-up Hitsound Studio",id:"1",children:[]},{value:"Step 2: Import hitsound layers",id:"2",children:[]},{value:"Step 3: Configure",id:"3",children:[]},{value:"Step 4: Export",id:"4",children:[]}],u={toc:d};function p(t){var e=t.components,o=(0,a.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"osu!mania is known for being able to have multiple notes on the same tick. This gives a lot more freedom in hitsounding osu!mania, because you can use multiple sample sets or custom samples simultaneously. However this makes copying hitsounds from osu!mania to osu!standard more difficult, because in osu!standard you can have at most one note per tick. Hitsound Studio makes it possible to convert these osu!mania hitsounds to osu!standard hitsounds and open up a lot of hitsounding possibilities."),(0,s.kt)("h2",{id:"1"},"Step 1: Set-up Hitsound Studio"),(0,s.kt)("p",null,"Open Hitosund Studio in Mapping Tools. Click on the ",(0,s.kt)("strong",{parentName:"p"},"Project")," menu and click ",(0,s.kt)("strong",{parentName:"p"},"New project"),". If don't want to lose your current configuration in Hitsound Studio, first save it with ",(0,s.kt)("strong",{parentName:"p"},"Save project"),"."),(0,s.kt)("h2",{id:"2"},"Step 2: Import hitsound layers"),(0,s.kt)("p",null,"Click the plus button on the bottom right of the window, this will open up a new window for importing. Go to the ",(0,s.kt)("strong",{parentName:"p"},"Import hitsounds")," tab to import all hitsounds from a beatmap. In ",(0,s.kt)("strong",{parentName:"p"},"Source beatmap")," select the beatmap with the osu!mania hitsounds you want to convert. Also check the boxes for ",(0,s.kt)("strong",{parentName:"p"},"Detect duplicate samples")," and ",(0,s.kt)("strong",{parentName:"p"},"Remove duplicate hitsounds"),", and ",(0,s.kt)("strong",{parentName:"p"},"Include storyboarded samples")," if your map uses storyboarded samples to fill in some of the gaps in the hitsounds. Then click ",(0,s.kt)("strong",{parentName:"p"},"Accept")," to import the hitsounds and you should see a list of hitsound layers appear in Hitsound Studio."),(0,s.kt)("h2",{id:"3"},"Step 3: Configure"),(0,s.kt)("p",null,"At the bottom there are two more things to configure: the ",(0,s.kt)("strong",{parentName:"p"},"Base beatmap")," and the ",(0,s.kt)("strong",{parentName:"p"},"Default sample"),". For the base beatmap just select the map you want to convert. It will use the metadata, timing, and volume levels of the base beatmap."),(0,s.kt)("p",null,"For the default sample there are multiple options and it depends on preference. The default sample is used whenever there is no hitnormal hitsound defined in the hitsound layers and osu!standard always wants to play a hitnormal sound. You can leave it empty and select Soft sample set and input ",(0,s.kt)("inlineCode",{parentName:"p"},"-1")," volume."),(0,s.kt)("h2",{id:"4"},"Step 4: Export"),(0,s.kt)("p",null,"Click the run button on the bottom right of the window. This will open a dialog with export options. Make sure ",(0,s.kt)("strong",{parentName:"p"},"Export mode")," and ",(0,s.kt)("strong",{parentName:"p"},"Export gamemode")," are both ",(0,s.kt)("strong",{parentName:"p"},"Standard"),". You can also change ",(0,s.kt)("strong",{parentName:"p"},"Sample file format")," and ",(0,s.kt)("strong",{parentName:"p"},"Mixed sample file format")," to ",(0,s.kt)("strong",{parentName:"p"},"Vorbis (.ogg)")," to convert all samples to ",(0,s.kt)("inlineCode",{parentName:"p"},".ogg")," and save on filesize. Then click ",(0,s.kt)("strong",{parentName:"p"},"Accept")," to start exporting the hitsounds."),(0,s.kt)("p",null,"After Hitsound Studio is done exporting you'll see the export folder containing a ",(0,s.kt)("inlineCode",{parentName:"p"},".osu")," file which is the osu!standard hitsounds diff and a bunch of audio files which are required for the hitsounds. You can now copy all these files into your osu!standard mapset and copy the hitsounds from the hitsounds diff with Hitsound Copier."))}p.isMDXComponent=!0}}]);