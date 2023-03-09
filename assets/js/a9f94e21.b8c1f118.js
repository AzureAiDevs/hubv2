"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),g=n,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={slug:"2023-day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/blog/2023-day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/blog/2023-day2",source:"@site/blog/2023-aia/2023-04-03-azure-openai-services/index.md",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/blog/2023-day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:3.635,hasTruncateMarker:!1,authors:[{name:"Meer Alam",title:"Principal Cloud Advocate",url:"https://github.com/msdpalam",tag:"@",imageURL:"https://github.com/msdpalam.png",key:"Meer"}],frontMatter:{slug:"2023-day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/blog/2023-day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"1. \ud83c\udfc1Kick Starting AI April!",permalink:"/hub/blog/2023-day1"},nextItem:{title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",permalink:"/hub/blog/2023-day3"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>2</em> of #30DaysOfAzureAI",id:"day-2-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Azure OpenAI Service Learning Module",id:"azure-openai-service-learning-module",level:2},{value:"What is Azure OpenAI Service?",id:"what-is-azure-openai-service",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day2"}),(0,n.kt)("meta",{property:"og:title",content:"Unleash the power of Azure OpenAI"}),(0,n.kt)("meta",{property:"og:description",content:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/blog/2023-day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day2.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/2-unleash-the-power-of-azure-openai"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-2-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"2")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Unleashing the power of AI with Azure OpenAI: A simple guide to get started")),(0,n.kt)("p",null,"Microsoft and OpenAI have partnered to bring OpenAI's advanced natural language processing tools, including GPT-3, to Microsoft's Azure cloud. The Azure OpenAI Service, now in general availability, offers REST API access, security, compliance, and regional availability. The goal is democratize AI and use it to address global challenges. Start by learning about OpenAI's language models and familiarizing with key API concepts."),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("p",null,"The main points of Azure OpenAI Service are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Access to language models for NLP and deep learning."),(0,n.kt)("li",{parentName:"ol"},"Enterprise security and regional availability for business use."),(0,n.kt)("li",{parentName:"ol"},"Understanding the language models, naming, and API for maximum benefit. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 2",src:a(16794).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/making-generative-ai-training-simple?WT.mc_id=aiml-89446-dglover"},"Case Study: Making generative AI training simple and cost-efficient with PeriFlow and Azure"))),(0,n.kt)("h2",{id:"azure-openai-service-learning-module"},"Azure OpenAI Service Learning Module"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(95277).Z,width:"466",height:"324"})),(0,n.kt)("p",null,"Get to know the connection between artificial intelligence (AI), Responsible AI, and text, code, and image generation. Understand how you can use Azure OpenAI to build solutions against AI models within Azure."),(0,n.kt)("p",null,"You'll learn how to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Describe Azure OpenAI workloads and access the Azure OpenAI Service"),(0,n.kt)("li",{parentName:"ul"},"Understand generative AI models"),(0,n.kt)("li",{parentName:"ul"},"Understand Azure OpenAI's language, code, and image capabilities"),(0,n.kt)("li",{parentName:"ul"},"Understand Azure OpenAI's responsible AI practices and limited access policies")),(0,n.kt)("p",null,"Be sure to check out the ",(0,n.kt)("a",{parentName:"p",href:"ttps://learn.microsoft.com/en-us/training/modules/explore-azure-openai"},"Introduction to Azure OpenAI Service")," Learn Module to get started."),(0,n.kt)("h2",{id:"what-is-azure-openai-service"},"What is Azure OpenAI Service?"),(0,n.kt)("p",null,"Microsoft and OpenAI have released Azure OpenAI Service, which brings OpenAI's advanced natural language processing tools, including Generative Pre-trained Transformer 3 (GPT-3), to Microsoft's Azure cloud. Azure OpenAI Service is now in general availability and offers REST API access to OpenAI's models, with features such as security, compliance and regional availability. The large-scale generative AI models developed by OpenAI can be used in areas such as code generation and reasoning over data, while the DALL-E 2 model can create images from a written description. The service also offers the Codex model, which is capable of generating code from natural language."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(23567).Z,width:"399",height:"145"})),(0,n.kt)("p",null,"The goal is to democratise artificial intelligence, as well as using it to help solve global challenges such as climate change, healthcare and education. Satya Nadella, CEO of Microsoft, said: \"By bringing together OpenAI's breakthrough technology with new Azure AI supercomputing technologies, our ambition is to democratise AI, while always keeping AI safety front and centre, so everyone can benefit.\" To get started with the Azure OpenAI Service, users are advised to learn about OpenAI's language models, which include GPT-3, Code and DALL-E 2, and understand key API concepts such as prompts, completions, tokens and models."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/2-unleash-the-power-of-azure-openai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},23567:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-e75e0be890e03f8cd44aeb5451099f87.png"},95277:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/intro-to-openai-65ee48e55db0ec54ee692e3885d5c224.png"},16794:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day2-27b67ccd3d1b90f198b35395c8a3ec2a.png"}}]);