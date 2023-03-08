"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day20.png",description:"Learn about Azure Machine Learning lifecycle with MLOps"},o=void 0,s={permalink:"/hub/blog/2023-day20",source:"@site/blog/2023-aia/2023-04-21-mlops-intro/index.md",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",description:"Learn about Azure Machine Learning lifecycle with MLOps",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"}],readingTime:2.41,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager @CassieBreviu",url:"https://github.com/cassiebreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"2023-day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day20.png",description:"Learn about Azure Machine Learning lifecycle with MLOps"},prevItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",permalink:"/hub/blog/2023-day19"},nextItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Machine Learning Week\u2728",permalink:"/hub/blog/2023-day21"}},l={authorsImageUrls:[void 0]},c=[{value:"Day <em>20</em> of #30DaysOfAzureAI",id:"day-20-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Watch the Learn Live MLOps for the ML Lifecycle Session",id:"watch-the-learn-live-mlops-for-the-ml-lifecycle-session",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://learn.microsoft.com/en-us/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/20-learn-mlops-for-the-ml-lifecycle"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-20-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"20")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about Azure Machine Learning lifecycle with MLOps")),(0,n.kt)("p",null,'In this YouTube video titled "(204) Learn Live: Start the machine learning lifecycle with MLOps | CLL99", two Microsoft experts, Cassie and Corey, discuss MLOps and its significance in the machine learning lifecycle. They describe ML Ops as a solution to the problems that arise when working with machine learning, such as the need for standard repeatable processes, cross-team alignments, large amounts of resources, and the ability to audit and explain. They also introduce the Microsoft Learn platform, which provides free resources for learning about various technologies, including ML Ops. The video covers identifying the different steps of the ML lifecycle, creating and managing machine learning models with ML Ops, and monitoring models and responding to incidents. Throughout the session, the experts encourage viewers to ask questions and interact with the moderators in the chat.'),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("p",null,"The three main points covered are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identifying the different steps of the ML lifecycle"),(0,n.kt)("li",{parentName:"ol"},"Describing how to create and manage machine learning models using MLOps processes"),(0,n.kt)("li",{parentName:"ol"},"Articulating processes to monitor models and respond to incidents.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image shows authors and product icons",src:r(19120).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps"))),(0,n.kt)("h2",{id:"watch-the-learn-live-mlops-for-the-ml-lifecycle-session"},"Watch the Learn Live MLOps for the ML Lifecycle Session"),(0,n.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/MYP3Bmsncq4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/20-learn-mlops-for-the-ml-lifecycle"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},19120:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-71153fb8581d2b1776a32db6fd6f1981.png"}}]);