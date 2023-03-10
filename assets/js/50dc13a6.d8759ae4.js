"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(m,n(n({ref:t},c),{},{components:a})):r.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const i={slug:"2023-day22",title:"22. \ud83c\udfedMLOps Accelerator Explained",authors:["Setu"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day22.png",description:"Accelerating MLOps with the v2 Solution Accelerator https://azureaidevs.github.io/hub/blog/2023-day22 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps"},n=void 0,l={permalink:"/hub/blog/2023-day22",source:"@site/blog/2023-aia/2023-04-24-mlops-accelerator/index.md",title:"22. \ud83c\udfedMLOps Accelerator Explained",description:"Accelerating MLOps with the v2 Solution Accelerator https://azureaidevs.github.io/hub/blog/2023-day22 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"azure-mlops",permalink:"/hub/blog/tags/azure-mlops"}],readingTime:2.98,hasTruncateMarker:!1,authors:[{name:"Setu Chokshi",title:"Senior Cloud Solution Architect",url:"https://github.com/setuc",tag:"@setuc",imageURL:"https://github.com/setuc.png",key:"Setu"}],frontMatter:{slug:"2023-day22",title:"22. \ud83c\udfedMLOps Accelerator Explained",authors:["Setu"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-mlops"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day22.png",description:"Accelerating MLOps with the v2 Solution Accelerator https://azureaidevs.github.io/hub/blog/2023-day22 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps"},prevItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",permalink:"/hub/blog/2023-day21"},nextItem:{title:"23. \ud83c\udfedData Science for Beginners",permalink:"/hub/blog/2023-day23"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>22</em> of #30DaysOfAzureAI",id:"\ufe0f-day-22-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:3},{value:"\ud83d\ude8c The Azure MLOps (v2) Solution Accelerator",id:"-the-azure-mlops-v2-solution-accelerator",level:2},{value:"Watch the Azure MLOps (v2) Solution Accelerator Overview Video",id:"watch-the-azure-mlops-v2-solution-accelerator-overview-video",level:2},{value:"\ud83d\udc53 Read today&#39;s reference article",id:"-read-todays-reference-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day22"}),(0,o.kt)("meta",{property:"og:title",content:"MLOps Accelerator Explained"}),(0,o.kt)("meta",{property:"og:description",content:"Accelerating MLOps with the v2 Solution Accelerator https://azureaidevs.github.io/hub/blog/2023-day22 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps"}),(0,o.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day22.png"}),(0,o.kt)("meta",{property:"og:type",content:"article"}),(0,o.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,o.kt)("link",{rel:"canonical",href:"https://github.com/Azure/mlops-v2"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,o.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/22-mlops-accelerator-explained"},"Ask a question about this post on GitHub Discussions")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,o.kt)("h2",{id:"\ufe0f-day-22-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,o.kt)("em",{parentName:"h2"},"22")," of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Accelerating MLOps with the v2 Solution Accelerator")),(0,o.kt)("p",null,'Last week was for Azure ML developers. This week is "Workshop" week; the content is for everyone. You might be a student starting your AI or Data Science journey, wanting to learn more about MLOps, or an AI app Developer wanting to work through practical examples.'),(0,o.kt)("p",null,"Today, we look at the Azure MLOps (v2) Solution Accelerator and learn how it can help you streamline and automate your machine learning workflows."),(0,o.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,o.kt)("p",null,"The three main points of the Azure MLOps (v2) Solution Accelerator are: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simplified, end-to-end, and modular approach to MLOps implementation in Azure "),(0,o.kt)("li",{parentName:"ol"},"Support for both Azure DevOps and GitHub, with an Azure subscription required "),(0,o.kt)("li",{parentName:"ol"},"Customizable design with template-based approach to data science, quickstarts, and a deployment guide to get you up and running quickly. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image banner for day 22",src:a(20221).Z,width:"834",height:"350"})),(0,o.kt)("h3",{id:"-references"},"\ud83d\udcda References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps"))),(0,o.kt)("h2",{id:"-the-azure-mlops-v2-solution-accelerator"},"\ud83d\ude8c The Azure MLOps (v2) Solution Accelerator"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/mlops-v2"},"Today's article")," introduces you to the Azure MLOps (v2) Solution Accelerator. The Azure MLOps (v2) Solution Accelerator is a project designed to simplify the implementation of MLOps in Azure. "),(0,o.kt)("p",null,"MLOps is a set of automated and collaborative workflows that allow teams of machine learning professionals to quickly and easily deploy their models into production. The solution accelerator provides a modular end-to-end approach based on pattern architectures, with the goals of simplicity, modularity, repeatability, security, collaboration, and enterprise readiness. It achieves these goals with a template-based approach for end-to-end data science, driving operational efficiency at each stage. The solution accelerator is designed to be customizable to fit each organization's unique needs and can be up and running in just a few hours."),(0,o.kt)("h2",{id:"watch-the-azure-mlops-v2-solution-accelerator-overview-video"},"Watch the Azure MLOps (v2) Solution Accelerator Overview Video"),(0,o.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/5yPDkWCMmtk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"-read-todays-reference-article"},"\ud83d\udc53 Read today's reference article"),(0,o.kt)("p",null,"Read today's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/mlops-v2"},"article"),"."),(0,o.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/22-mlops-accelerator-explained"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},20221:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day22-9773b143d79b787db6d4ba5ae8ba20aa.png"}}]);