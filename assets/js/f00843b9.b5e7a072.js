"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2092],{29480:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=t(87462),l=(t(67294),t(3905)),r=t(30925);const n={slug:"day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops with Azure MLOps",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day20.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 20 of #30DaysOfAzureAI. Unleash your MachineLearning potential! Join Cassie and Korey in today's LearnLive and discover Azure MLOps. Streamline your ML lifecycle with open source tooling, and take your models to the next level!"},s=void 0,o={permalink:"/hub/2023-aia/day20",source:"@site/2023-aia/2023-04-21-mlops-intro/index.md",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops with Azure MLOps",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 20 of #30DaysOfAzureAI. Unleash your MachineLearning potential! Join Cassie and Korey in today's LearnLive and discover Azure MLOps. Streamline your ML lifecycle with open source tooling, and take your models to the next level!",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"}],readingTime:2.42,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Cassie.png",key:"Cassie"}],frontMatter:{slug:"day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops with Azure MLOps",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day20.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 20 of #30DaysOfAzureAI. Unleash your MachineLearning potential! Join Cassie and Korey in today's LearnLive and discover Azure MLOps. Streamline your ML lifecycle with open source tooling, and take your models to the next level!"},prevItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models with Responsible AI",permalink:"/hub/2023-aia/day19"},nextItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",permalink:"/hub/2023-aia/day21"}},c={authorsImageUrls:[void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 20 of #30DaysOfAzureAI",id:"\ufe0f-day-20-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Learn Live MLOps to streamline the ML Lifecycle",id:"-learn-live-mlops-to-streamline-the-ml-lifecycle",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],m={toc:u};function h(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day20"}),(0,l.kt)("meta",{name:"twitter:title",content:"Streamline Ops with Azure MLOps"}),(0,l.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 20 of #30DaysOfAzureAI. Unleash your MachineLearning potential! Join Cassie and Korey in today's LearnLive and discover Azure MLOps. Streamline your ML lifecycle with open source tooling, and take your models to the next level!"}),(0,l.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day20.png"}),(0,l.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.kt)("link",{rel:"canonical",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops?WT.mc_id=aiml-89446-dglover"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,l.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,l.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,l.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,l.kt)("h3",{id:"please-share"},"Please share"),(0,l.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day20",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day20.png",title:"Streamline Ops with Azure MLOps",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 20 of #30DaysOfAzureAI. Unleash your MachineLearning potential! Join Cassie and Korey in today's LearnLive and discover Azure MLOps. Streamline your ML lifecycle with open source tooling, and take your models to the next level!",hashtags:"AzureMLOps",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,l.kt)("h2",{id:"\ufe0f-day-20-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 20 of #30DaysOfAzureAI"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn about Azure Machine Learning lifecycle and open source tooling to start building MLOps")),(0,l.kt)("p",null,'Yesterday we learned about the Azure ML Responsible AI Dashboard. Today is an introduction to Azure MLOps, where you\'ll learn how to "productionalize" ML models with Azure ML.'),(0,l.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Azure ML MLOps"),(0,l.kt)("li",{parentName:"ul"},"Practices and tools for managing the machine learning lifecycle."),(0,l.kt)("li",{parentName:"ul"},"Improving data scientists and developer collaboration.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops?WT.mc_id=aiml-89446-dglover"},(0,l.kt)("img",{alt:"Image banner for day 20",src:t(97789).Z,width:"1920",height:"1080"}))),(0,l.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps"))),(0,l.kt)("h2",{id:"-learn-live-mlops-to-streamline-the-ml-lifecycle"},"\ud83d\ude8c Learn Live MLOps to streamline the ML Lifecycle"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops?WT.mc_id=aiml-89446-dglover"},"Watch today's video")," about MLOps for the ML Lifecycle. The presenters, Cassie and Korey, start with an overview of MLOps, explaining that it is a set of practices and tools that help data scientists and developers work together to build and deploy machine learning models."),(0,l.kt)("p",null,"Cassie and Korey discuss the benefits of MLOps, including faster time to value, improved collaboration, and increased model quality. They also discuss the challenges of MLOps, including the need for a common language, the need for a common platform, and the need for a common process."),(0,l.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/MYP3Bmsncq4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,l.kt)("p",null,"Today's ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,l.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ml-developers"},"You can ask questions about this post on GitHub Discussions")),(0,l.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,l.kt)("p",null,"What's next? View the ",(0,l.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,l.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,l.kt)("img",{alt:"The image is the blog RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}h.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>p});var i=t(67294),l=t(46616),r=t(87385),n=t(69641),s=t(78854),o=t(16573),c=t(1020),u=t(48137),m=t(66339),h=t(53597),d=t(37332);function p(e){let{page_url:a,image_url:t,title:p,hashtags:g,hashtag:y,description:f}=e;return i.createElement("div",null,i.createElement(l.Z,{url:a,title:f,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,image:t},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:a,quote:p,hashtag:y},i.createElement(c.Z,{size:32,round:!0})),"\xa0",i.createElement(h.Z,{title:p,url:a},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:p,body:f,url:a},i.createElement(m.Z,{size:32,round:!0})))}},97789:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day20-5adc3628483c943804e35ffd3a75936d.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);