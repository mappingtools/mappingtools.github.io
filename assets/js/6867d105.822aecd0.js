(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(n,o,e){"use strict";e.r(o);var t=e(0),i=e.n(t),c=e(106),a=e(111),s=e(87),l=e.n(s),r=e(158),d=e(163),u=e(164),p=(e(88),Object.freeze({macos:{Macintosh:!1,MacIntel:!1,MacPPC:!1,Mac68K:!1},windows:{Win32:!0,Win64:!0,Windows:!0,WinCE:!0},ios:{iPhone:!1,iPad:!1,iPod:!1},android:!1,linux:!1})),m=[{label:"Windows",icon:d.f,supported:Object.values(p.windows).some((function(n){return!0===n})),items:[{icon:u.b,onClick:function(){}},{icon:u.c,onClick:function(){}}]},{label:"GitHub Source",icon:d.d,supported:!0,items:[{icon:u.a,onClick:function(){window.open("https://github.com/OliBomby/Mapping_Tools")}},{icon:u.c,onClick:function(){window.location.href="https://github.com/OliBomby/Mapping_Tools/archive/master.zip"}}]},{label:"Mac",icon:d.c,supported:Object.values(p.macos).some((function(n){return!0===n})),items:[{icon:u.b,onClick:function(){}},{icon:u.c,onClick:function(){}}]},{label:"Linux",icon:d.e,supported:!0===p.linux,items:[{icon:u.b,onClick:function(){}},{icon:u.c,onClick:function(){}}]},{label:"Android",icon:d.a,supported:!0===p.android,items:[{icon:u.b,onClick:function(){}},{icon:u.c,onClick:function(){}}]},{label:"iOS",icon:d.b,supported:Object.values(p.ios).some((function(n){return!0===n})),items:[{icon:u.b,onClick:function(){}},{icon:u.c,onClick:function(){}}]}];o.default=function(){var n=Object(t.useState)(null),o=n[0],e=n[1];return Object(t.useEffect)((function(){e(b())}),[]),i.a.createElement(a.a,{title:"Download",description:"download Mapping Tools"},i.a.createElement("div",{className:Object(c.a)("container padding-vert--lg",l.a.content)},i.a.createElement("h1",null,"Download"),i.a.createElement("h4",{className:l.a.autodetect},null===o?"Detecting OS...":void 0===o.os?"Cannot identify OS":"[Auto Detected: "+o.os+"] is "+(o.supported?"":"not yet")+" supported"),i.a.createElement("div",{className:Object(c.a)("container",l.a.downloadsContainer)},i.a.createElement("div",{className:"row"},m.map((function(n,o){var e=n.label,t=n.icon,a=n.supported,s=n.items;return i.a.createElement("div",{key:o,className:Object(c.a)("col col--4",l.a.dlCol)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",{className:l.a.cardTitle},i.a.createElement(r.a,{icon:t}),"\xa0",e)),i.a.createElement("div",{className:"card__body"},s.map((function(n,o){return i.a.createElement("button",{key:o,className:Object(c.a)("button button--block button--secondary button--outline",!a&&"disabled",l.a.downloadOption),onClick:n.onClick},i.a.createElement(r.a,{icon:n.icon}))})))))}))))))};var b=function(){var n=window.navigator.userAgent,o=window.navigator.platform;return p.windows.hasOwnProperty(o)?{os:"Windows",supported:!0===p.windows[o]}:p.macos.hasOwnProperty(o)?{os:"MacOS",supported:!0===p.macos[o]}:p.ios.hasOwnProperty(o)?{os:"iOS",supported:!0===p.ios[o]}:/Android/.test(n)?{os:"Android",supported:!0===p.android}:/Linux/.test(o)?{os:"Linux",supported:!0===p.linux}:{os:void 0,supported:!1}}}}]);