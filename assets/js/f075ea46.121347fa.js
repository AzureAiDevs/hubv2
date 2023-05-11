"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3922],{85877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(87462),r=(a(67294),a(3905)),o=a(30925);const n={slug:"day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day25.png",description:"\ud83c\udfedWelcome to day 25 of #30DaysOfAzureAI. Build a patient registration app using Azure Form Recognizer with our one-hour hands-on lab. Develop a custom model, integrate it with a web app, and define application roles."},s=void 0,l={permalink:"/hub/2023-aia/day25",source:"@site/2023-aia/2023-04-27-patient-rego-workshop/index.md",title:"25. \ud83c\udfedBuild a Patient Registration App",description:"\ud83c\udfedWelcome to day 25 of #30DaysOfAzureAI. Build a patient registration app using Azure Form Recognizer with our one-hour hands-on lab. Develop a custom model, integrate it with a web app, and define application roles.",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Dave.png",key:"Dave"}],frontMatter:{slug:"day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day25.png",description:"\ud83c\udfedWelcome to day 25 of #30DaysOfAzureAI. Build a patient registration app using Azure Form Recognizer with our one-hour hands-on lab. Develop a custom model, integrate it with a web app, and define application roles."},prevItem:{title:"24. \ud83c\udfedMachine Learning for Beginners",permalink:"/hub/2023-aia/day24"},nextItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/2023-aia/day26"}},u={authorsImageUrls:[void 0]},p=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 25 of #30DaysOfAzureAI",id:"\ufe0f-day-25-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c New Patient Registration workshop",id:"-new-patient-registration-workshop",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day25"}),(0,r.kt)("meta",{name:"twitter:title",content:"Build a Patient Registration App"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfedWelcome to day 25 of #30DaysOfAzureAI. Build a patient registration app using Azure Form Recognizer with our one-hour hands-on lab. Develop a custom model, integrate it with a web app, and define application roles."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day25.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://newpatiente2e.github.io/docs/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://newpatiente2e.github.io/docs/"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(o.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day25",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day25.png",title:"Build a Patient Registration App",description:"\ud83c\udfedWelcome to day 25 of #30DaysOfAzureAI. Build a patient registration app using Azure Form Recognizer with our one-hour hands-on lab. Develop a custom model, integrate it with a web app, and define application roles.",hashtags:"AzureFormRecognizer",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-25-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 25 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building a Patient Registration Web App with Azure Form Recognizer")),(0,r.kt)("p",null,"Yesterday we learned about the Machine Learning for Beginners Curriculum. Today is for AI app Developers and introduces the New Patient Registration workshop. It's a one-hour hands-on lab, and you'll learn how to build an Azure Static Web App that uses the Azure Form Recognizer service."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automated form filling with Azure Form Recognizer"),(0,r.kt)("li",{parentName:"ul"},"Integrating Azure Form Recognizer with an Azure Static Web App.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},(0,r.kt)("img",{alt:"Image banner for day 25",src:a(36689).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-form-recognizer&WT.mc_id=aiml-89446-dglover"},"Learn Module: Azure Form Recognizer Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0&WT.mc_id=aiml-89446-dglover"},"What is Azure Form Recognizer?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/powering-speech-to-text-ai?WT.mc_id=aiml-89446-dglover"},"Case Study: Powering Speech-to-Text AI that iterates at the speed of business")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/duolingo-makes-learning-language-fun-with-help-from-ai?WT.mc_id=aiml-89446-dglover"},"Case study: Duolingo makes learning language fun with help from AI"))),(0,r.kt)("h2",{id:"-new-patient-registration-workshop"},"\ud83d\ude8c New Patient Registration workshop"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"Today's article")," introduces the \"New Patient Registration\" hands-on lab. The lab is designed to help you learn how to use Azure Form Recognizer to automate the patient registration process at a doctor's surgery. You'll learn how to create a custom Azure Form Recognizer model, integrate it with a web app, and define application roles that map to workshop personas such as surgery admin, nurse, and doctor. By the end of the workshop, you'll have a working solution that allows new patients to complete the registration form online, the web app to extract the data, and the surgery admin to verify and add the registration to the doctor's surgery system. Say goodbye to manual form filling and hello to the power of AI technologies with Azure Form Recognizer!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(51731).Z,width:"1280",height:"720"})),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-workshops"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}d.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(67294),r=a(46616),o=a(87385),n=a(69641),s=a(78854),l=a(16573),u=a(1020),p=a(48137),h=a(66339),d=a(53597),m=a(37332);function c(e){let{page_url:t,image_url:a,title:c,hashtags:g,hashtag:A,description:b}=e;return i.createElement("div",null,i.createElement(r.Z,{url:t,title:b,hashtags:[g]},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:t,image:a},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:t,quote:c,hashtag:A},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{title:c,url:t},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{subject:c,body:b,url:t},i.createElement(h.Z,{size:32,round:!0})))}},51731:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-43dca5d4795ea05a0b16a2046696e41e.png"},36689:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day25-ed93f74a2fdb7a99b15858ef12c9c5c4.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);