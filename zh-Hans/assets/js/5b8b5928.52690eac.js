(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[26],{8201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(7294),a=n(6010),i=n(1952),s={content:"content_3PzM",cardCurrentOs:"cardCurrentOs_suKg",customCard:"customCard_1d_L",autodetect:"autodetect_1VvF",itemText:"itemText_WGIw",cardTitle:"cardTitle_1-jH",dlCol:"dlCol_11EW",downloadOption:"downloadOption_21Lm",supported:"supported_3vUy",disabledText:"disabledText_1MSV",disabled:"disabled_1Q3d",comingSoon:"comingSoon_3O-m"},l=n(7814),r=n(1417),c=n(1436),d=Object.freeze({macos:{macintosh:{name:"Macintosh",supported:!1},macIntel:{name:"MacIntel",supported:!1},macPPC:{name:"MacPPC",supported:!1},mac86K:{name:"Mac68K",supported:!1}},windows:{win32:{name:"Win32",supported:!0},winx64:{name:"Win64",supported:!0},win:{name:"Windows",supported:!1},winCe:{name:"WinCE",supported:!1}},ios:{iPhone:{name:"iPhone",supported:!1},iPad:{name:"iPad",supported:!1},iPod:{name:"iPod",supported:!1}},android:{name:"Android",supported:!1},linux:{name:"Linux",supported:!1}}),m=[{label:"Windows x64",os:d.windows.winx64,icon:r.ts2,items:[{icon:c.q7m,text:"Installer",onClick:function(){return window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x64.exe")}},{icon:c.W2U,text:"Portable",onClick:function(){return window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release_x64.zip")}}]},{label:"Windows x86",os:d.windows.win32,icon:r.ts2,items:[{icon:c.q7m,text:"Installer",onClick:function(){return window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x86.exe")}},{icon:c.W2U,text:"Portable",onClick:function(){return window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release.zip")}}]},{label:"Linux",os:d.linux,icon:r.qJE,items:[{icon:c.q7m,onClick:function(){}},{icon:c.W2U,text:"Portable",onClick:function(){}}]}];function u(e){return null===e.os?o.createElement("h4",{className:s.autodetect},"Detecting operating system ..."):"undefined"===e.os.name?o.createElement("h4",{className:s.autodetect},"Cannot identify operating system!"):o.createElement("h4",{className:s.autodetect},"Mapping Tools is ",e.os.supported?"":"not yet"," available for your operating system (",e.os.name,")")}var p=function(){var e=(0,o.useState)(null),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(function(){for(var e=window.navigator.userAgent,t=window.navigator.platform,n=Object.keys(d.windows),o=Object.keys(d.macos),a=Object.keys(d.ios),i=0;i<n.length;i++){var s=d.windows[n[i]];if(s.name===t)return s}for(var l=0;l<o.length;l++){var r=d.macos[o[l]];if(r.name===t)return r}for(var c=0;c<a.length;c++){var m=d.ios[a[c]];if(m.name===t)return m}return/Android/.test(e)?d.android:/Linux/.test(t)?d.linux:{name:"undefined",supported:!1}}())}),[]),o.createElement(i.Z,{title:"Download",description:"download Mapping Tools"},o.createElement("div",{className:(0,a.Z)("container padding-vert--lg pt-3",s.content)},o.createElement("h1",null,"Download"),o.createElement(u,{os:t}),o.createElement("div",{className:(0,a.Z)("container",s.downloadsContainer)},o.createElement("div",{className:"row"},m.map((function(e,n){var i=e.label,r=e.icon,c=e.os,d=e.items;return o.createElement("div",{key:n,className:(0,a.Z)("col col--4",s.dlCol)},o.createElement("div",{className:(0,a.Z)("card",s.customCard,t===c?s.cardCurrentOs:"")},o.createElement("div",{className:"card__header"},o.createElement("h3",{className:(0,a.Z)(!c.supported&&s.disabledText,s.cardTitle)},o.createElement(l.G,{icon:r}),"\xa0 ",i)),o.createElement("div",{className:"card__body"},c.supported?d.map((function(e,t){return o.createElement("button",{key:t,className:(0,a.Z)("button button--block button--secondary button--outline",!c.supported&&(0,a.Z)("disabled",s.disabled),s.downloadOption),onClick:e.onClick},o.createElement(l.G,{icon:e.icon}),o.createElement("span",{className:(0,a.Z)(s.itemText)},e.text))})):o.createElement("p",{className:(0,a.Z)(s.comingSoon)},"Coming soon!"))))}))))))}}}]);