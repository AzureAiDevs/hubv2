"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,d=c["".concat(u,".").concat(m)]||c[m]||g[m]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day28",title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Azure-OpenAI-Services","Cognitive-Services","Machine-Learning","MLOps","rai","CoPilot","Blazor"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Continuing your Azure AI Journey"},o=void 0,l={permalink:"/hub/blog/2023-day28",source:"@site/blog/2023-aia/2023-04-30-recap-final/index.md",title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",description:"Continuing your Azure AI Journey",date:"2023-04-30T00:00:00.000Z",formattedDate:"April 30, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"azure-ai-fundamentals",permalink:"/hub/blog/tags/azure-ai-fundamentals"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day28",title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Azure-OpenAI-Services","Cognitive-Services","Machine-Learning","MLOps","rai","CoPilot","Blazor"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Continuing your Azure AI Journey"},prevItem:{title:"27. \ud83c\udfedEngage with Azure Personalizer",permalink:"/hub/blog/2023-day27"}},u={authorsImageUrls:[void 0]},s=[{value:"Day <em>28</em> of #30DaysOfAzureAI",id:"day-28-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day28"}),(0,n.kt)("meta",{name:"twitter:title",content:"Continuing your Azure AI Journey\u2728"}),(0,n.kt)("meta",{name:"twitter:description",content:"Continuing your Azure AI Journey"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day28"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/28-continuing-your-azure-ai-journey%E2%9C%A8"},"Ask a question about this post on GitHub Discussions"))),(0,n.kt)("h2",{id:"day-28-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"28")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Continuing your Azure AI Journey")),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty Banner Placeholder",src:r(99575).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"learn-more"},"Learn More"))}c.isMDXComponent=!0},99575:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-d182a611b7d050f1c812fd8f52add2c5.png"}}]);