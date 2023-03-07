"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day27",title:"27. \ud83c\udfedEngage with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:".banner.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},o=void 0,s={permalink:"/hub/blog/2023-day27",source:"@site/blog/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedEngage with Azure Personalizer",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"workshop",permalink:"/hub/blog/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"}],readingTime:.9,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin",title:"Engineering Manager & Microsoft MVP (AI) @arafattehsin",url:"https://github.com/arafattehsin",imageURL:"https://github.com/arafattehsin.png",key:"Arafat"}],frontMatter:{slug:"2023-day27",title:"27. \ud83c\udfedEngage with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:".banner.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences"},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/blog/2023-day26"},nextItem:{title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",permalink:"/hub/blog/2023-day28"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>27</em> of #30DaysOfAzureAI",id:"day-27-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day27"}),(0,n.kt)("meta",{name:"twitter:title",content:"Engage with Azure Personalizer"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day27"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-engage-with-azure-personalizer"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-27-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"27")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences")),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Panel shows authors and product icons",src:r(43857).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-engage-with-azure-personalizer"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},43857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-41a32b1638d60fb8c6820a1bf01991c6.png"}}]);