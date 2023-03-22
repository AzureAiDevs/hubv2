"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7203],{8271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=a(7462),o=(a(7294),a(4137)),r=a(925);const l={slug:"day4",title:"4. \ud83c\udfc1Build a receipts app with Copilot",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day4.png",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day4"},n=void 0,s={permalink:"/hub/2023-aia/day4",source:"@site/2023-aia/2023-04-05-copilot-form-recognizer/index.md",title:"4. \ud83c\udfc1Build a receipts app with Copilot",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day4",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.96,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"day4",title:"4. \ud83c\udfc1Build a receipts app with Copilot",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day4.png",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day4"},prevItem:{title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",permalink:"/hub/2023-aia/day2"},nextItem:{title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",permalink:"/hub/2023-aia/day9"}},p={authorsImageUrls:[void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 4 of #30DaysOfAzureAI",id:"\ufe0f-day-4-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c How Copilot helped a developer write a Form Recognizer app",id:"-how-copilot-helped-a-developer-write-a-form-recognizer-app",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],c={toc:u};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day4"}),(0,o.kt)("meta",{name:"twitter:title",content:"Build a receipts app with Copilot"}),(0,o.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day4.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/2023-aia/day4"}),(0,o.kt)("meta",{property:"og:title",content:"Build a receipts app with Copilot"}),(0,o.kt)("meta",{property:"og:description",content:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer"}),(0,o.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day4.png"}),(0,o.kt)("meta",{property:"og:type",content:"article"}),(0,o.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,o.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"Ask a question about this post on GitHub Discussions")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,o.kt)("h3",{id:"please-share"},"Please share"),(0,o.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day4",image_url:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day4.png",title:"Build a receipts app with Copilot",description:"\ud83c\udfc1Day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity.",hashtags:"AzureAiDevs,AI,CognitiveServices,IntelligentApps,GitHubCopilot",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,o.kt)("h2",{id:"\ufe0f-day-4-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 4 of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer")),(0,o.kt)("p",null,"Yesterday we talked about using Azure OpenAI Service playground to explore conversational AI. Today we'll explore how you can use GitHub Copilot as your programming buddy to build an intelligent Receipt processing App."),(0,o.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why use GitHub Copilot."),(0,o.kt)("li",{parentName:"ul"},"Build a receipt app with GitHub Copilot and Azure Form Recognizer"),(0,o.kt)("li",{parentName:"ul"},"Copilot increase efficiency and productivity for developers.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},(0,o.kt)("img",{alt:"Image banner for day 4",src:a(1832).Z,width:"834",height:"350"}))),(0,o.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0&WT.mc_id=aiml-89446-dglover"},"What is Azure Form Recognizer?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-form-recognizer?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Form Recognizer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer?WT.mc_id=aiml-89446-dglover"},"Introducing GitHub Copilot: your AI pair programmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/qard-idea-to-mvp?WT.mc_id=aiml-89446-dglover"},"Case Study: How Qard went from idea to MVP"))),(0,o.kt)("h2",{id:"-how-copilot-helped-a-developer-write-a-form-recognizer-app"},"\ud83d\ude8c How Copilot helped a developer write a Form Recognizer app"),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"today's article")," to learn how you can use Copilot to help build an app that recognizers printed receipts using the Azure Form Recognizer Cognitive Service. It is a great example of how Copilot can help you to generate code for your AI applications."),(0,o.kt)("p",null,"Be sure to check it out here: ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813"},"How Copilot helps developers generate code for a Form Recognizer application")),(0,o.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,o.kt)("p",null,"Today's ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,o.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,o.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,o.kt)("p",null,"What's next? View the ",(0,o.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,o.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}d.isMDXComponent=!0},925:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(7294),o=a(6616),r=a(7385),l=a(9641),n=a(8854),s=a(6573),p=a(1020),u=a(8137),c=a(6339),d=a(3597),m=a(7332);function h(e){let{page_url:t,image_url:a,title:h,hashtags:g,hashtag:b,description:A}=e;return i.createElement("div",null,i.createElement(o.Z,{url:t,title:A,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:t,image:a},i.createElement(n.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,quote:h,hashtag:b},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{title:h,url:t},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:h,body:A,url:t},i.createElement(c.Z,{size:32,round:!0})))}},1832:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day4-16107af4916a84f96441347995eeaf4f.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);