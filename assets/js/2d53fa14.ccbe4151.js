"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9358],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={slug:"2023-day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day3.png",description:"Explore Conversational AI with the Azure OpenAI Service Playground"},o=void 0,l={permalink:"/hub/blog/2023-day3",source:"@site/blog/2023-aia/2023-04-04-openai-playground/index.md",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",description:"Explore Conversational AI with the Azure OpenAI Service Playground",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:2.755,hasTruncateMarker:!1,authors:[{name:"Valentina Alto",title:"Data&AI Azure Specialist at Microsoft @altovalentina",url:"https://github.com/Valentina-Alto",imageURL:"https://github.com/Valentina-Alto.png",key:"Valentina"}],frontMatter:{slug:"2023-day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day3.png",description:"Explore Conversational AI with the Azure OpenAI Service Playground"},prevItem:{title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",permalink:"/hub/blog/2023-day2"},nextItem:{title:"4. \ud83c\udfc1Use CoPilot to build a AI Receipt App",permalink:"/hub/blog/2023-day4"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>3</em> of #30DaysOfAzureAI",id:"day-3-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Getting started with the Azure OpenAI Service Playground",id:"getting-started-with-the-azure-openai-service-playground",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/3-explore-the-azure-openai-playground"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-3-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"3")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explore Conversational AI with the Azure OpenAI Service Playground")),(0,n.kt)("p",null,"In recent years, OpenAI has become a household name in the tech industry with its development of generative models such as GPT-3 and DALL-E. In this article, we will explore conversational AI models and how to consume them via API directly from OpenAI. We will also delve into how to tune hyperparameters to tailor your models to your use case and needs. By creating an Azure OpenAI instance and utilizing the OpenAI Playground, we will experiment with the available models and learn how to select the right one for our needs. So, get ready to dive into the world of language models and hyperparameters with OpenAI!"),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure OpenAI Playground: a user-friendly interface for machine learning models."),(0,n.kt)("li",{parentName:"ul"},"Features: custom data sets, experiment management, and model visualization."),(0,n.kt)("li",{parentName:"ul"},"Scalable, flexible, and available at different price points.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image shows authors and product icons",src:a(68878).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/making-generative-ai-training-simple?WT.mc_id=aiml-89446-dglover"},"Case Study: Making generative AI training simple and cost-efficient with PeriFlow and Azure"))),(0,n.kt)("h2",{id:"getting-started-with-the-azure-openai-service-playground"},"Getting started with the Azure OpenAI Service Playground"),(0,n.kt)("p",null,"This article provides an overview of language models and hyperparameters, with a focus on conversational AI models from OpenAI. The article covers how to consume these models via API directly from OpenAI, as well as how to tune hyperparameters to tailor the models to specific use cases and needs. The author also provides a step-by-step guide to setting up an Azure OpenAI instance to access the OpenAI Playground for experimentation. The article examines the (hyper)parameters to be tuned, such as temperature, max length, stop sequences, top probabilities, frequency penalty, presence penalty, and best of. The article concludes by highlighting the three main categories of models offered by OpenAI: GPT-3, Codex, and Embeddings, and the different models available within each category."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(46727).Z,width:"600",height:"378"})),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/3-explore-the-azure-openai-playground"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},68878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-812b5091437c209a92ed64df784742d9.png"},46727:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/playground-6ad72f7fd8c1d57e587e74d65bb6190b.gif"}}]);