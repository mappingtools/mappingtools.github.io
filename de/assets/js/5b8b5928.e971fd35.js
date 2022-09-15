"use strict";(self.webpackChunkmt_website=self.webpackChunkmt_website||[]).push([[26],{7079:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(7294),s=o(6010),a=o(3727),i=o(215);const r={content:"content_PEDR",cardCurrentOs:"cardCurrentOs_eTFl",cardNotCurrentOs:"cardNotCurrentOs_BLii",customCard:"customCard_KZGc",autodetect:"autodetect_YHqk",itemText:"itemText_MQp5",cardTitle:"cardTitle_wb8i",dlCol:"dlCol_d1Zk",downloadOption:"downloadOption_PeZf",supported:"supported_Zwy0",disabledText:"disabledText_s8Je",disabled:"disabled_OBWi",comingNever:"comingNever_g9rg"};var d=o(7814),l=o(1417),p=o(1436);const c=Object.freeze({undefined:{name:"undefined",supported:!1,wine_supported:!1,web_supported:!0},macos:{macintosh:{name:"Macintosh",supported:!1,wine_supported:!0,web_supported:!0},macIntel:{name:"MacIntel",supported:!1,wine_supported:!0,web_supported:!0},macPPC:{name:"MacPPC",wine_supported:!0,web_supported:!0},mac86K:{name:"Mac68K",supported:!1,wine_supported:!0,web_supported:!0}},windows:{win32:{name:"Win32",supported:!0,wine_supported:!1,web_supported:!0},win64:{name:"Win64",supported:!0,wine_supported:!1,web_supported:!0},win:{name:"Windows",supported:!1,wine_supported:!1,web_supported:!0},winCe:{name:"WinCE",supported:!1,wine_supported:!1,web_supported:!0}},ios:{iPhone:{name:"iPhone",supported:!1,wine_supported:!1,web_supported:!0},iPad:{name:"iPad",supported:!1,wine_supported:!1,web_supported:!0},iPod:{name:"iPod",supported:!1,wine_supported:!1,web_supported:!0}},android:{name:"Android",supported:!1,wine_supported:!0,web_supported:!0},linux:{name:"Linux",supported:!1,wine_supported:!0,web_supported:!0}}),u=[{label:"Windows x64",os:c.windows.win64,icon:l.ts2,items:[{icon:p.q7m,text:"Installer",onClick:()=>window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x64.exe")},{icon:p.W2U,text:"Portable",onClick:()=>window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release_x64.zip")}]},{label:"Windows x86",os:c.windows.win32,icon:l.ts2,items:[{icon:p.q7m,text:"Installer",onClick:()=>window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/mapping_tools_installer_x86.exe")},{icon:p.W2U,text:"Portable",onClick:()=>window.open("https://github.com/OliBomby/Mapping_Tools/releases/latest/download/release.zip")}]},{label:"Linux",os:c.linux,icon:l.qJE,items:[{icon:p.q7m,onClick:()=>{}},{icon:p.W2U,text:"Portable",onClick:()=>{}}]}];function m(e){return null===e.os?n.createElement("h4",{className:r.autodetect},"Detecting operating system ..."):"undefined"===e.os.name?n.createElement("h4",{className:r.autodetect},"Cannot identify operating system!"):n.createElement("h4",{className:r.autodetect},"Mapping Tools is ",e.os.supported?"":"not "," available for your operating system (",e.os.name,") ",e.os.supported?"":[", but you can try ",n.createElement(a.rU,{to:"/docs/mapping-tools/installation"},"Wine")])}function w(e){const t=e.os,o=e.items;return t.supported?o.map(((e,o)=>n.createElement("button",{key:o,className:(0,s.Z)("button button--block button--secondary button--outline",!t.supported&&(0,s.Z)("disabled",r.disabled),r.downloadOption),onClick:e.onClick},n.createElement(d.G,{icon:e.icon}),n.createElement("span",{className:(0,s.Z)(r.itemText)},e.text)))):t.wine_supported||t.web_supported?[n.createElement(a.rU,{key:0,to:"/docs/mapping-tools/installation#wine"},n.createElement("button",{className:(0,s.Z)("button button--block button--secondary button--outline",!t.wine_supported&&(0,s.Z)("disabled",r.disabled),r.downloadOption)},n.createElement(d.G,{icon:p.zI7}),n.createElement("span",{className:(0,s.Z)(r.itemText)},"Wine instructions"))),n.createElement("button",{key:2,className:(0,s.Z)("button button--block button--secondary button--outline",!t.web_supported&&(0,s.Z)("disabled",r.disabled),r.downloadOption),onClick:()=>window.open("https://misakura-rin.github.io/mapping-tools-web/")},n.createElement(d.G,{icon:p.Xjp}),n.createElement("span",{className:(0,s.Z)(r.itemText)},"Mapping Tools Web"))]:n.createElement("p",{className:(0,s.Z)(r.comingNever)},"Not supported :(")}const b=()=>{const[e,t]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t((()=>{const e=window.navigator.userAgent;if(/\b(x86_x64|x86-64|Win64|x64;|amd64|WOW64|x64_x64)\b/gi.test(e))return c.windows.win64;const t=window.navigator.platform,o=Object.keys(c.windows);for(let a=0;a<o.length;a++){const e=c.windows[o[a]];if(e.name===t)return e}const n=Object.keys(c.macos);for(let a=0;a<n.length;a++){const e=c.macos[n[a]];if(e.name===t)return e}const s=Object.keys(c.ios);for(let a=0;a<s.length;a++){const e=c.ios[s[a]];if(e.name===t)return e}return/Android/.test(e)?c.android:/Linux/.test(t)?c.linux:c.undefined})())}),[]),n.createElement(i.Z,{title:"Download",description:"download Mapping Tools"},n.createElement("div",{className:(0,s.Z)("container padding-vert--lg pt-3",r.content)},n.createElement("h1",null,"Download"),n.createElement(m,{os:e}),n.createElement("div",{className:(0,s.Z)("container",r.downloadsContainer)},n.createElement("div",{className:"row"},u.map(((t,o)=>{let{label:a,icon:i,os:l,items:p}=t;return n.createElement("div",{key:o,className:(0,s.Z)("col col--4",r.dlCol)},n.createElement("div",{className:(0,s.Z)("card",r.customCard,e===l?r.cardCurrentOs:r.cardNotCurrentOs)},n.createElement("div",{className:"card__header"},n.createElement("h3",{className:(0,s.Z)(r.cardTitle)},n.createElement(d.G,{icon:i}),"\xa0 ",a)),n.createElement("div",{className:"card__body"},n.createElement(w,{os:l,items:p}))))}))))))}}}]);