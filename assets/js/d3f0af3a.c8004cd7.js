"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day27",title:"27. \ud83c\udfedOptimize Customer Engagement with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},o=void 0,s={permalink:"/hubv2/blog/2023-day27",source:"@site/blog/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedOptimize Customer Engagement with Azure Personalizer",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"workshop",permalink:"/hubv2/blog/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hubv2/blog/tags/azure-cognitive-services"}],readingTime:.805,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin @arafattehsin",title:"Engineering Manager & Microsoft MVP (AI)",url:"https://github.com/arafattehsin",imageURL:"https://github.com/arafattehsin.png",key:"Arafat"}],frontMatter:{slug:"2023-day27",title:"27. \ud83c\udfedOptimize Customer Engagement with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hubv2/blog/2023-day26"},nextItem:{title:"28. \ud83c\udfedContinuing the Azure AI Journey\u2728",permalink:"/hubv2/blog/2023-day28"}},l={authorsImageUrls:[void 0]},c=[{value:"Welcome to <em>Day 27</em> of 30DaysOfAzureAI!",id:"welcome-to-day-27-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day27"}),(0,n.kt)("meta",{name:"twitter:title",content:"Optimize Customer Engagement with Azure Personalizer"}),(0,n.kt)("meta",{name:"twitter:description",content:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/blog/2023-day27/twitter.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day27"})),(0,n.kt)("h2",{id:"welcome-to-day-27-of-30daysofazureai"},"Welcome to ",(0,n.kt)("em",{parentName:"h2"},"Day 27")," of 30DaysOfAzureAI!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"))}p.isMDXComponent=!0}}]);