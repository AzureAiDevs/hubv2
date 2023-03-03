"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||n;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={slug:"2023-day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Building a Patient Registration Web App with Azure Form Recognizer"},i=void 0,l={permalink:"/hubv2/blog/2023-day25",source:"@site/blog/2023-aia/2023-04-27-patient-rego-workshop/index.md",title:"25. \ud83c\udfedBuild a Patient Registration App",description:"Building a Patient Registration Web App with Azure Form Recognizer",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"azure-cognitive-services",permalink:"/hubv2/blog/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"workshop",permalink:"/hubv2/blog/tags/workshop"}],readingTime:.805,hasTruncateMarker:!1,authors:[{name:"Dave Glover @dglover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Building a Patient Registration Web App with Azure Form Recognizer"},prevItem:{title:"24. \ud83c\udfedML and AI for beginners",permalink:"/hubv2/blog/2023-day24"},nextItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hubv2/blog/2023-day26"}},p={authorsImageUrls:[void 0]},c=[{value:"Welcome to <em>Day 25</em> of 30DaysOfAzureAI!",id:"welcome-to-day-25-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day25"}),(0,o.kt)("meta",{name:"twitter:title",content:"Build a Patient Registration App"}),(0,o.kt)("meta",{name:"twitter:description",content:"Building a Patient Registration Web App with Azure Form Recognizer"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/blog/2023-day25/twitter.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://newpatiente2e.github.io/docs/"})),(0,o.kt)("h2",{id:"welcome-to-day-25-of-30daysofazureai"},"Welcome to ",(0,o.kt)("em",{parentName:"h2"},"Day 25")," of 30DaysOfAzureAI!"),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Building a Patient Registration Web App with Azure Form Recognizer"),(0,o.kt)("p",null,"To learn more, head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"original post"),"."))}u.isMDXComponent=!0}}]);