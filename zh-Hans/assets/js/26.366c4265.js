(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(111),o=a(120),s=a(108),c=a(109);var i=function(e){const{nextItem:t,prevItem:a}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(117),d=a(121),p=a(123);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:s}=t,{title:c,description:u,nextItem:g,prevItem:h,editUrl:y}=s,{hide_table_of_contents:b}=n;return r.a.createElement(l.a,{title:c,description:u,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:a})),r.a.createElement("main",{className:"col col--7"},r.a.createElement(o.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,y&&r.a.createElement(p.a,{editUrl:y})),(g||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:g,prevItem:h}))),!b&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(d.a,{toc:t.toc})))))}},112:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(109),o=a(3),s=a(106),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=d({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=d({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=d({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?d({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=d({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?d({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],d=a[o][l];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=g(m,d.type),d.alias&&(m=g(m,d.alias)),i=d.content),"string"==typeof i){var h=i.split(p),y=h.length;s.push({types:m,content:h[0]});for(var b=1;b<y;b++)u(s),c.push(s=[]),s.push({types:m,content:h[b]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return u(s),c}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var v=a(112),f=a.n(v),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=a(115),N=a(107);var j=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(k.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},_=a(108),O=a(56),T=a.n(O);const x=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},C=/(?:title=")(.*)(?:")/;function L({children:e,className:t,metastring:a}){const{prism:l}=Object(N.useThemeConfig)(),[c,m]=Object(n.useState)(!1),[d,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const u=Object(n.useRef)(null);let g=[],h="";const y=j(),v=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];g=f()(e).filter((e=>e>0))}a&&C.test(a)&&(h=a.match(C)[1]);let E=t&&t.replace(/language-/,"");!E&&l.defaultLanguage&&(E=l.defaultLanguage);let k=v.replace(/\n$/,"");if(0===g.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(E),a=v.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,o=a[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}g=f()(e),k=a.join("\n")}const O=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus()}(k),m(!0),setTimeout((()=>m(!1)),2e3)};return r.a.createElement(b,Object(o.a)({},i,{key:String(d),theme:y,code:k,language:E}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>r.a.createElement("div",{className:T.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(s.a)(T.a.codeBlockContent,E)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:T.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return g.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(o.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t}))))))})))),r.a.createElement("button",{ref:u,type:"button","aria-label":Object(_.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(T.a.copyButton),onClick:O},c?r.a.createElement(_.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(_.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(57);var P=a(58),B=a.n(P);var I=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(N.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[B.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(_.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,a)};const $={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(L,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(l.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(L,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")};t.a=$},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(106),o=a(109),s=a(59),c=a.n(s);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(106),o=a(110),s=a(108),c=a(109),i=a(113),m=a(119),d=a(61),p=a.n(d),u=a(107);t.a=function(e){const t=function(){const{selectMessage:e}=Object(u.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:d,truncated:g,isBlogPostPage:h=!1}=e,{date:y,formattedDate:b,permalink:v,tags:f,readingTime:E}=d,{author:k,title:N,image:j,keywords:_}=n,O=n.author_url||n.authorURL,T=n.author_title||n.authorTitle,x=n.author_image_url||n.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:_,image:j}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},h?N:r.a.createElement(c.a,{to:v},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:y,className:p.a.blogPostDate},b,E&&r.a.createElement(r.a.Fragment,null," \xb7 ",t(E)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:O},r.a.createElement("img",{src:x,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:O},k)),r.a.createElement("small",{className:"avatar__subtitle"},T)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(o.a,{components:i.a},a)),(f.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((({label:e,permalink:t})=>r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:d.permalink,"aria-label":`Read more about ${N}`},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(106);var o=function(e,t,a){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,o=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!o;){const e=s[a],{href:c}=e,i=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===i&&(r&&r.classList.remove(t),e.classList.add(t),l(e),o=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(60),c=a.n(s);const i="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return o(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(c.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:e}))}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),l=a(108),o=a(3),s=a(106),c=a(62),i=a.n(c);var m=({className:e,...t})=>r.a.createElement("svg",Object(o.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(s.a)(i.a.iconEdit,e),"aria-label":"Edit page"},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(m,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);