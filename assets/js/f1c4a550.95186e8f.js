"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[495],{98884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905)),n=a(30925);const o={slug:"day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day5.png",description:"\ud83c\udfc1Welcome to day 5 of #30DaysOfAzureAI. Unlock the power of machine learning with Azure ML! Learn about the benefits of cloud computing for ML projects and explore key Azure ML concepts with our primer."},l=void 0,s={permalink:"/hub/2023-aia/day5",source:"@site/2023-aia/2023-04-06-azure-ml-intro/index.md",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",description:"\ud83c\udfc1Welcome to day 5 of #30DaysOfAzureAI. Unlock the power of machine learning with Azure ML! Learn about the benefits of cloud computing for ML projects and explore key Azure ML concepts with our primer.",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AI/ML",url:"https://github.com/bstollnitz",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Bea.png",key:"Bea"}],frontMatter:{slug:"day5",title:"5. \ud83c\udfc1Learn key Azure ML Concepts",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["azure-ai","azure-ml","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day5.png",description:"\ud83c\udfc1Welcome to day 5 of #30DaysOfAzureAI. Unlock the power of machine learning with Azure ML! Learn about the benefits of cloud computing for ML projects and explore key Azure ML concepts with our primer."},prevItem:{title:"4. \ud83c\udfc1Build a receipts app with GitHub Copilot",permalink:"/hub/2023-aia/day4"},nextItem:{title:"6. \ud83c\udfc1The Mission of Responsible AI",permalink:"/hub/2023-aia/day6"}},u={authorsImageUrls:[void 0]},c=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 5 of #30DaysOfAzureAI",id:"\ufe0f-day-5-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Introduction to Azure ML",id:"-introduction-to-azure-ml",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day5"}),(0,r.kt)("meta",{name:"twitter:title",content:"Learn key Azure ML Concepts"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 5 of #30DaysOfAzureAI. Unlock the power of machine learning with Azure ML! Learn about the benefits of cloud computing for ML projects and explore key Azure ML concepts with our primer."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day5.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-introduction/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(n.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day5",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day5.png",title:"Learn key Azure ML Concepts",description:"\ud83c\udfc1Welcome to day 5 of #30DaysOfAzureAI. Unlock the power of machine learning with Azure ML! Learn about the benefits of cloud computing for ML projects and explore key Azure ML concepts with our primer.",hashtags:"AzureML",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-5-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 5 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn key Azure ML Concepts with this primer")),(0,r.kt)("p",null,"Yesterday we talked about using Copilot to build an intelligent Receipt processing app. Today we'll explore Azure Machine Learning."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why use Azure ML"),(0,r.kt)("li",{parentName:"ul"},"The main resources used to train and deploy models in Azure ML "),(0,r.kt)("li",{parentName:"ul"},"The four different ways of creating those resources")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},(0,r.kt)("img",{alt:"Image banner for day 5",src:a(22239).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,r.kt)("h2",{id:"-introduction-to-azure-ml"},"\ud83d\ude8c Introduction to Azure ML"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"today's article")," to understand the benefits of using cloud computing for machine learning projects, and to get an overview of Microsoft's Azure ML platform. Azure ML enables you to train and deploy machine learning models in the cloud, by creating a variety of resources that help tailor the workflow to your needs. Today's article provides an overview of each of those resources, and explains the four different ways of creating them."),(0,r.kt)("p",null,"The goal for today is for you to get a foundational understanding of Azure ML concepts, so that you'll be able to follow code samples later in the AI April month."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-introduction/"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}m.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(67294),r=a(46616),n=a(87385),o=a(69641),l=a(78854),s=a(16573),u=a(1020),c=a(48137),h=a(66339),m=a(53597),d=a(37332);function p(e){let{page_url:t,image_url:a,title:p,hashtags:f,hashtag:g,description:A}=e;return i.createElement("div",null,i.createElement(r.Z,{url:t,title:A,hashtags:[f]},i.createElement(n.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,image:a},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,quote:p,hashtag:g},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(m.Z,{title:p,url:t},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{subject:p,body:A,url:t},i.createElement(h.Z,{size:32,round:!0})))}},22239:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day5-3b9fbdce2fb3b1a744cb9a4e831a0dba.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);