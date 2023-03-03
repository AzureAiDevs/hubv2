"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},i=void 0,l={permalink:"/hubv2/blog/2023-day26",source:"@site/blog/2023-aia/2023-04-28-stable-diffusion/index.md",title:"26. \ud83c\udfedStable Diffusion on Azure ML",description:"How to run Stable Diffusion Web UI on Azure ML compute instances",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"azure-ml",permalink:"/hubv2/blog/tags/azure-ml"},{label:"ml-engineers",permalink:"/hubv2/blog/tags/ml-engineers"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"workshop",permalink:"/hubv2/blog/tags/workshop"}],readingTime:.825,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP @vladiliescu",url:"https://github.com/vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},prevItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/hubv2/blog/2023-day25"},nextItem:{title:"27. \ud83c\udfedOptimize Customer Engagement with Azure Personalizer",permalink:"/hubv2/blog/2023-day27"}},u={authorsImageUrls:[void 0]},s=[{value:"Welcome to <em>Day 26</em> of 30DaysOfAzureAI!",id:"welcome-to-day-26-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day26"}),(0,a.kt)("meta",{name:"twitter:title",content:"Stable Diffusion on Azure ML"}),(0,a.kt)("meta",{name:"twitter:description",content:"How to run Stable Diffusion Web UI on Azure ML compute instances"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/blog/2023-day26/twitter.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"})),(0,a.kt)("h2",{id:"welcome-to-day-26-of-30daysofazureai"},"Welcome to ",(0,a.kt)("em",{parentName:"h2"},"Day 26")," of 30DaysOfAzureAI!"),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"How to run Stable Diffusion Web UI on Azure ML compute instances"),(0,a.kt)("p",null,"To learn more, head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"original post"),"."))}p.isMDXComponent=!0}}]);