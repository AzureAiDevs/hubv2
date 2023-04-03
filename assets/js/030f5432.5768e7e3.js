"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9096],{1369:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(4137)),s=t(925);const n={slug:"day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day9.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 9 of #30DaysOfAzureAI. Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9"},l=void 0,o={permalink:"/hub/2023-aia/day9",source:"@site/2023-aia/2023-04-10-azure-cog-openai-sdks/index.md",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 9 of #30DaysOfAzureAI. Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:3.05,hasTruncateMarker:!1,authors:[{name:"Arun Chandrasekhar",title:"Principal Product Manager",url:"https://github.com/achandmsft",source_image_url:"https://github.com/achandmsft.png",tag:"@rcarunmsft",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Arun.png",key:"Arun"}],frontMatter:{slug:"day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day9.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 9 of #30DaysOfAzureAI. Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples https://azureaidevs.github.io/hub/2023-aia/day9"},prevItem:{title:"4. \ud83c\udfc1Build a receipts app with Copilot",permalink:"/hub/2023-aia/day4"},nextItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",permalink:"/hub/2023-aia/day10"}},u={authorsImageUrls:[void 0]},p=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 9 of #30DaysOfAzureAI",id:"\ufe0f-day-9-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Introducing the Azure AI Hub",id:"-introducing-the-azure-ai-hub",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],d={toc:p};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/2023-aia/day9"}),(0,r.kt)("meta",{property:"og:title",content:"Build intelligent apps w/ Azure AI SDKs"}),(0,r.kt)("meta",{property:"og:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 9 of #30DaysOfAzureAI. Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples"}),(0,r.kt)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day9.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://github.com/Azure-Samples/azure-ai"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/azure-ai"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\u2764\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-mvp-program"},"Learn about the Microsoft MVP Program")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(s.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day9",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day9.png",title:"Build intelligent apps w/ Azure AI SDKs",description:"\ud83e\uddd1\u200d\ud83d\udcbbDay 9 of #30DaysOfAzureAI. AI App developers don't miss out on exploring the Azure AI Hub for OpenAI and Cognitive Services SDK samples. Build intelligent apps with Azure AI Services.",hashtags:"AI,AzureOpenAI,AzureSDK",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-9-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 9 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building intelligent apps? Then explore the Azure AI Hub for OpenAI and Cognitive Services SDK samples")),(0,r.kt)("p",null,"Last week was Azure AI fundamentals week, this week, we switch gears and focus on Azure AI App Developers. This week is for app developers building intelligent apps calling Azure AI Services or incorporating AI models directly into apps. "),(0,r.kt)("p",null,"So what better place to start than an introduction to the Azure AI Hub where you'll find loads of samples for using the Azure AI Services SDKs."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Azure AI Hub GitHub repo"),(0,r.kt)("li",{parentName:"ul"},"Code samples and discussion channels."),(0,r.kt)("li",{parentName:"ul"},"Best practices for using the Azure AI SDKs.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},(0,r.kt)("img",{alt:"Image banner for day 9",src:t(5085).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/explore-azure-openai/?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?products=azure-cognitive-services&WT.mc_id=aiml-89446-dglover"},"Learn Module: Learn about Azure Cognitive Services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://customers.microsoft.com/en-us/story/1501304071775762777-carmax-retailer-azure-openai-service&WT.mc_id=aiml-89446-dglover"},"Case Study: CarMax uses car research tools powered by Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/cognitive-services-speech-sdk/tree/master/scenarios"},"Case Study: Captioning and Call Center Transcription using Speech AI"))),(0,r.kt)("h2",{id:"-introducing-the-azure-ai-hub"},"\ud83d\ude8c Introducing the Azure AI Hub"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},"today's article")," to learn about the Azure AI Hub repository, a curated list of samples for AI app developers looking to use Azure AI services for common end-to-end scenarios. "),(0,r.kt)("p",null,"The repo includes sample code in different programming languages, as well as a forum for developers to communicate directly with Microsoft product teams and other developers using Azure AI. The sample code covers topics like OpenAI, Speech, Language, Applied AI/Decision, and more. The platform welcomes contributions, feedback, and suggestions from the developer community."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-app-developers"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},925:(e,a,t)=>{t.d(a,{Z:()=>m});var i=t(7294),r=t(6616),s=t(7385),n=t(9641),l=t(8854),o=t(6573),u=t(1020),p=t(8137),d=t(6339),c=t(3597),h=t(7332);function m(e){let{page_url:a,image_url:t,title:m,hashtags:A,hashtag:g,description:f}=e;return i.createElement("div",null,i.createElement(r.Z,{url:a,title:f,hashtags:[A]},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,image:t},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:a,quote:m,hashtag:g},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{title:m,url:a},i.createElement(h.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{subject:m,body:f,url:a},i.createElement(d.Z,{size:32,round:!0})))}},5085:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day9-9a98a6fff1113ce228b35613a3b2c0ab.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);