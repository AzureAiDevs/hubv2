"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),g=i,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||n;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},33600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"2023-day1",title:"1. \ud83c\udfc1Kick Starting AI April!",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Azure-OpenAI-Services","Cognitive-Services","Machine-Learning","Cognitive-Search","dotnet","onnx","CoPilot"],tags:["azure-ai","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Welcome to #AiApril! Join us for #30DaysOfAzureAI learning, skilling and discussions at [AI April](https://aka.ms/ai-april)"},o=void 0,l={permalink:"/hub/blog/2023-day1",source:"@site/blog/2023-aia/2023-03-29-kickoff/index.md",title:"1. \ud83c\udfc1Kick Starting AI April!",description:"Welcome to #AiApril! Join us for #30DaysOfAzureAI learning, skilling and discussions at [AI April](https://aka.ms/ai-april)",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"azure-ai-fundamentals",permalink:"/hub/blog/tags/azure-ai-fundamentals"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:.88,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day1",title:"1. \ud83c\udfc1Kick Starting AI April!",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-AI","Azure-OpenAI-Services","Cognitive-Services","Machine-Learning","Cognitive-Search","dotnet","onnx","CoPilot"],tags:["azure-ai","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Welcome to #AiApril! Join us for #30DaysOfAzureAI learning, skilling and discussions at [AI April](https://aka.ms/ai-april)"},nextItem:{title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",permalink:"/hub/blog/2023-day2"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>1</em> of #30DaysOfAzureAI",id:"day-1-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day1"}),(0,i.kt)("meta",{name:"twitter:title",content:"Kick Starting AI April!"}),(0,i.kt)("meta",{name:"twitter:description",content:"Welcome to #AiApril! Join us for #30DaysOfAzureAI learning, skilling and discussions at [AI April](https://aka.ms/ai-april)"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day1"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/1-kick-starting-ai-april!"},"Ask a question about this post on GitHub Discussions"))),(0,i.kt)("h2",{id:"day-1-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"1")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Welcome to #AiApril! Join us for #30DaysOfAzureAI learning, skilling and discussions at ",(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/ai-april"},"AI April"))),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Banner Placeholder",src:a(87349).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"))}p.isMDXComponent=!0},87349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-a805bee092a7b0ed4f5a2bd452a8b8fc.png"}}]);