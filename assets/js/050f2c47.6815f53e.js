"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2886],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||n;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(7462),i=(a(7294),a(4137));const n={slug:"day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/2023-aia/day2",source:"@site/2023-aia/2023-04-03-azure-openai-services/index.md",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.455,hasTruncateMarker:!1,authors:[{name:"Meer Alam",title:"Principal Customer Engineer",url:"https://github.com/msdpalam",tag:"@",imageURL:"https://github.com/msdpalam.png",key:"Meer"}],frontMatter:{slug:"day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"1. \ud83c\udfc1Kick Starting AI April Keynote",permalink:"/hub/2023-aia/day1"},nextItem:{title:"4. \ud83c\udfc1Build a receipts app with Copilot",permalink:"/hub/2023-aia/day4"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 2 of #30DaysOfAzureAI",id:"\ufe0f-day-2-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Intro to Azure OpenAI Service",id:"-intro-to-azure-openai-service",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"},"View today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/2-unleash-the-power-of-azure-openai"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-2-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 2 of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unleashing the power of AI with Azure OpenAI: A simple guide to get started")),(0,i.kt)("p",null,"Welcome to the first day of the Azure AI fundamentals week. This week is for everyone; you might be an ai app Developer, a Data Scientist, or an ML or MLOps Engineer. "),(0,i.kt)("p",null,"The talk of the town is ChatGPT and generative AI, so what better place to start than an introduction to the Azure OpenAI Service."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure OpenAI Service."),(0,i.kt)("li",{parentName:"ul"},"Using large-scale generative AI models."),(0,i.kt)("li",{parentName:"ul"},"Code generation and reasoning over data."),(0,i.kt)("li",{parentName:"ul"},"DALL-E 2 model.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 2",src:a(5796).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/making-generative-ai-training-simple?WT.mc_id=aiml-89446-dglover"},"Case Study: Making generative AI training simple and cost-efficient with PeriFlow and Azure"))),(0,i.kt)("h2",{id:"-intro-to-azure-openai-service"},"\ud83d\ude8c Intro to Azure OpenAI Service"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"},"Today's article")," eases us into the world of the Azure OpenAI Service. The large-scale generative AI models developed by OpenAI can be used in areas such as code generation and reasoning over data, while the DALL-E 2 model can create images from a written description. The service also offers the Codex model, which is capable of generating code from natural language. "),(0,i.kt)("p",null,"The service is available in the Azure Marketplace and can be deployed to Microsoft's Azure cloud with features such as security, compliance and regional availability. "),(0,i.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/2-unleash-the-power-of-azure-openai"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,i.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},5796:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day2-27b67ccd3d1b90f198b35395c8a3ec2a.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);