"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbAI-Powered Apps and Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Exploring AI-Powered Apps and Azure AI SDKs"},i=void 0,l={permalink:"/hubv2/blog/2023-day9",source:"@site/blog/2023-aia/2023-04-10-azure-cog-openai-sdks/index.md",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbAI-Powered Apps and Azure AI SDKs",description:"Exploring AI-Powered Apps and Azure AI SDKs",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"}],readingTime:.735,hasTruncateMarker:!1,authors:[{name:"Arun Chandrasekhar @rcarunmsft",title:"Principal Product Manager",url:"https://github.com/achandmsft",imageURL:"https://github.com/achandmsft.png",key:"Arun"}],frontMatter:{slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbAI-Powered Apps and Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Exploring AI-Powered Apps and Azure AI SDKs"},prevItem:{title:"8. \ud83e\uddeeRecap - Fundamentals Week\u2728",permalink:"/hubv2/blog/2023-day8"},nextItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbPower Apps with Azure OpenAI and Cognitive Search",permalink:"/hubv2/blog/2023-day10"}},p={authorsImageUrls:[void 0]},c=[{value:"Welcome to <em>Day 9</em> of 30DaysOfAzureAI!",id:"welcome-to-day-9-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day9"}),(0,n.kt)("meta",{name:"twitter:title",content:"AI-Powered Apps and Azure AI SDKs"}),(0,n.kt)("meta",{name:"twitter:description",content:"Exploring AI-Powered Apps and Azure AI SDKs"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/blog/2023-day9/twitter.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day9"})),(0,n.kt)("h2",{id:"welcome-to-day-9-of-30daysofazureai"},"Welcome to ",(0,n.kt)("em",{parentName:"h2"},"Day 9")," of 30DaysOfAzureAI!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Exploring AI-Powered Apps and Azure AI SDKs"))}u.isMDXComponent=!0}}]);