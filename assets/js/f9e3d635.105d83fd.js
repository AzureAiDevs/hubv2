"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=i,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(g,n(n({ref:t},u),{},{components:r})):a.createElement(g,n({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const o={slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day15.png",description:"30DaysOfAzureAI Recap for Azure AI App Developers Week https://azureaidevs.github.io/hub/blog/2023-day15 #30DaysOfAzureAI #AzureAiDevs #AI "},n=void 0,l={permalink:"/hub/blog/2023-day15",source:"@site/blog/2023-aia/2023-04-16-recap-week-two/index.md",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",description:"30DaysOfAzureAI Recap for Azure AI App Developers Week https://azureaidevs.github.io/hub/blog/2023-day15 #30DaysOfAzureAI #AzureAiDevs #AI ",date:"2023-04-16T00:00:00.000Z",formattedDate:"April 16, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"}],readingTime:1.84,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",tag:"@dglover",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day15.png",description:"30DaysOfAzureAI Recap for Azure AI App Developers Week https://azureaidevs.github.io/hub/blog/2023-day15 #30DaysOfAzureAI #AzureAiDevs #AI "},prevItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",permalink:"/hub/blog/2023-day14"},nextItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hub/blog/2023-day16"}},p={authorsImageUrls:[void 0]},s=[{value:"Day <em>15</em> of #30DaysOfAzureAI",id:"day-15-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Questions?",id:"questions",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day15"}),(0,i.kt)("meta",{property:"og:title",content:"Recap: Azure AI App Developers\u2728"}),(0,i.kt)("meta",{property:"og:description",content:"30DaysOfAzureAI Recap for Azure AI App Developers Week https://azureaidevs.github.io/hub/blog/2023-day15 #30DaysOfAzureAI #AzureAiDevs #AI "}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day15.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/blog/2023-day15"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/15-recap-azure-ai-app-developers%E2%9C%A8"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-15-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"15")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"30DaysOfAzureAI Recap for Azure AI App Developers Week")),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 15",src:r(35813).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/#api?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/concept-onnx?WT.mc_id=aiml-89446-dglover"},"ONNX and Azure Machine Learning: Create and accelerate ML models")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer?WT.mc_id=aiml-89446-dglover"},"Introducing GitHub Copilot: your AI pair programmer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/maui?WT.mc_id=aiml-89446-dglover"},".NET Multi-platform App UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor"},"Build beautiful, web apps with Blazor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/add-machine-learning-to-uwp-app?WT.mc_id=aiml-89446-dglover"},"Create a machine learning model for offline use on a Windows device"))),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/15-recap-azure-ai-app-developers%E2%9C%A8"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},35813:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-day15-fdda6dc313962ff2823f538d32b81e94.png"}}]);