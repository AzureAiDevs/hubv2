"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[317],{26113:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=t(87462),r=(t(67294),t(3905)),o=t(30925);const n={slug:"day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day3.png",description:"\ud83c\udfc1Welcome to day 3 of #30DaysOfAzureAI. Ready to dive into the world of conversational AI? Join us today as we explore the Azure OpenAI Service Playground! From custom datasets to model visualization."},l=void 0,s={permalink:"/hub/2023-aia/day3",source:"@site/2023-aia/2023-04-04-openai-playground/index.md",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",description:"\ud83c\udfc1Welcome to day 3 of #30DaysOfAzureAI. Ready to dive into the world of conversational AI? Join us today as we explore the Azure OpenAI Service Playground! From custom datasets to model visualization.",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"Valentina Alto",title:"Data&AI Azure Specialist at Microsoft",url:"https://github.com/Valentina-Alto",source_image_url:"https://github.com/Valentina-Alto.png",tag:"@altovalentina",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Valentina.png",key:"Valentina"}],frontMatter:{slug:"day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day3.png",description:"\ud83c\udfc1Welcome to day 3 of #30DaysOfAzureAI. Ready to dive into the world of conversational AI? Join us today as we explore the Azure OpenAI Service Playground! From custom datasets to model visualization."},prevItem:{title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",permalink:"/hub/2023-aia/day2"},nextItem:{title:"4. \ud83c\udfc1Build a receipts app with GitHub Copilot",permalink:"/hub/2023-aia/day4"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 3 of #30DaysOfAzureAI",id:"\ufe0f-day-3-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Getting started with the Azure OpenAI Playground",id:"-getting-started-with-the-azure-openai-playground",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],m={toc:d};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day3"}),(0,r.kt)("meta",{name:"twitter:title",content:"Explore the Azure OpenAI Playground"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 3 of #30DaysOfAzureAI. Ready to dive into the world of conversational AI? Join us today as we explore the Azure OpenAI Service Playground! From custom datasets to model visualization."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day3.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(o.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day3",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day3.png",title:"Explore the Azure OpenAI Playground",description:"\ud83c\udfc1Welcome to day 3 of #30DaysOfAzureAI. Ready to dive into the world of conversational AI? Join us today as we explore the Azure OpenAI Service Playground! From custom datasets to model visualization.",hashtags:"AzureOpenAI",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-3-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 3 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Explore Conversational AI with the Azure OpenAI Service Playground")),(0,r.kt)("p",null,"Yesterday was an introduction to the Azure OpenAI Service. Today, we'll dig deeper into the Azure OpenAI Service Playground, so come along, it'll be fun."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure OpenAI Playground."),(0,r.kt)("li",{parentName:"ul"},"Custom datasets, experiment management, and model visualization."),(0,r.kt)("li",{parentName:"ul"},"Flexible Azure OpenAI service offerings.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},(0,r.kt)("img",{alt:"Image banner for day 3",src:t(81538).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering?WT.mc_id=aiml-89446-dglover"},"Introduction to prompt engineering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/azure-openai-service-for-startups?WT.mc_id=aiml-89446-dglover"},"Case Study: Azure OpenAI Service powers the next generation of startups"))),(0,r.kt)("h2",{id:"-getting-started-with-the-azure-openai-playground"},"\ud83d\ude8c Getting started with the Azure OpenAI Playground"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"today's article")," to gain an overview of language models and hyperparameters, with a focus on conversational AI models from OpenAI, and how to use the Azure OpenAI Service Playground to experiment with these models."),(0,r.kt)("p",null,"Learn about the three main categories of models offered by OpenAI: GPT-3, Codex, and Embeddings, and the different models available within each category. You'll learn how to tune hyperparameters to tailor the models to specific use cases, and how to consume the models using OpenAI's APIs."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}p.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>c});var i=t(67294),r=t(46616),o=t(87385),n=t(69641),l=t(78854),s=t(16573),u=t(1020),d=t(48137),m=t(66339),p=t(53597),h=t(37332);function c(e){let{page_url:a,image_url:t,title:c,hashtags:A,hashtag:g,description:f}=e;return i.createElement("div",null,i.createElement(r.Z,{url:a,title:f,hashtags:[A]},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,image:t},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:a,quote:c,hashtag:g},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{title:c,url:a},i.createElement(h.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:c,body:f,url:a},i.createElement(m.Z,{size:32,round:!0})))}},81538:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day3-bec59d1e6bee1b6f3d6eaf68bf8c925f.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);