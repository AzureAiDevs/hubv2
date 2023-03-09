"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),h=n,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent Apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day9.png",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/blog/2023-day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/blog/2023-day9",source:"@site/blog/2023-aia/2023-04-10-azure-cog-openai-sdks/index.md",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent Apps w/ Azure AI SDKs",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/blog/2023-day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:3.205,hasTruncateMarker:!1,authors:[{name:"Arun Chandrasekhar",title:"Principal Product Manager",url:"https://github.com/achandmsft",tag:"@rcarunmsft",imageURL:"https://github.com/achandmsft.png",key:"Arun"}],frontMatter:{slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent Apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day9.png",description:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/blog/2023-day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",permalink:"/hub/blog/2023-day8"},nextItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/blog/2023-day10"}},u={authorsImageUrls:[void 0]},l=[{value:"Day <em>9</em> of #30DaysOfAzureAI",id:"day-9-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Introducing the Azure AI Hub",id:"introducing-the-azure-ai-hub",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day9"}),(0,n.kt)("meta",{property:"og:title",content:"Build intelligent Apps w/ Azure AI SDKs"}),(0,n.kt)("meta",{property:"og:description",content:"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/blog/2023-day9 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day9.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://github.com/Azure-Samples/azure-ai"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/9-build-intelligent-apps-w/-azure-ai-sdks"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-9-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"9")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples")),(0,n.kt)("p",null,"Welcome to The Azure AI Hub, your go-to destination for Azure AI developers, where we provide curated samples, discussions channels, and suggestions from the community, with a focus on responsible AI to ensure transparency, fairness, and accountability in AI systems."),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Azure AI Hub is a repository for Azure AI developers with code samples and discussion channels."),(0,n.kt)("li",{parentName:"ul"},"The hub focuses on promoting responsible AI practices, such as transparency, fairness, and accountability."),(0,n.kt)("li",{parentName:"ul"},"The Azure AI Hub provides resources for developers to learn and implement responsible AI practices.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 9",src:r(5984).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai&WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?products=azure-cognitive-services&WT.mc_id=aiml-89446-dglover"},"Learn Module: Learn about Azure Cognitive Services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/trelent-openai-service?WT.mc_id=aiml-89446-dglover"},"Case Study: Trelent powers source code documentation with OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://customers.microsoft.com/story/1376278902865681018-instabase-partner-professional-services-azure?WT.mc_id=aiml-89446-dglover"},"Case Study: Hypergrowth startup harnesses deep learning to redefine enterprise productivity"))),(0,n.kt)("h2",{id:"introducing-the-azure-ai-hub"},"Introducing the Azure AI Hub"),(0,n.kt)("p",null,"The Azure AI Hub is a repository designed to be the central hub of samples for Azure AI developers who are interested in integrating AI into their applications using various Azure AI services. It features a curated list of samples for popular end-to-end customer scenarios that use AI and active discussions channels for the community to ask questions or provide feedback to the Azure AI product teams. The Hub is open to any other suggestions to improve the experience for developers."),(0,n.kt)("p",null,"The repository provides a range of Azure AI code samples such as using OpenAI to make sense of a large dataset using Query based Summarization in a Python notebook, using Translator to translate documents from and into more than 100 different languages, automating paper-based processes using the New patient registration with Form Recognizer workshop, integrating Speech AI into apps using Speech SDK samples, and extracting structured data from forms, receipts, invoices, and cards using Form Recognizer in various programming languages. There are no prerequisites to using the Azure AI Hub, and\ndevelopers are encouraged to join the discussions, introduce themselves, and share their thoughts on the samples."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/9-build-intelligent-apps-w/-azure-ai-sdks"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},5984:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-day9-19eab0c6aaa5b483e0d0d09165beb97d.png"}}]);