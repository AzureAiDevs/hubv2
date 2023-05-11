"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5454],{76362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),r=a(30925);const o={slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day11.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Learn how to create ML models and embed them into intelligent cross platform apps with the ONNX runtime and .NET MAUI."},l=void 0,s={permalink:"/hub/2023-aia/day11",source:"@site/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Learn how to create ML models and embed them into intelligent cross platform apps with the ONNX runtime and .NET MAUI.",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate",url:"https://github.com/hnky",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Henk.png",key:"Henk"},{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AI/ML",url:"https://github.com/bstollnitz",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Bea.png",key:"Bea"}],frontMatter:{slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day11.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Learn how to create ML models and embed them into intelligent cross platform apps with the ONNX runtime and .NET MAUI."},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",permalink:"/hub/2023-aia/day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel with ONNX Runtime",permalink:"/hub/2023-aia/day12"}},m={authorsImageUrls:[void 0,void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 11 of #30DaysOfAzureAI",id:"\ufe0f-day-11-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET",id:"-build-cross-platform-intelligent-apps-with-onnx-and-net",level:2},{value:"Accompanying source code",id:"accompanying-source-code",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],d={toc:u};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day11"}),(0,n.kt)("meta",{name:"twitter:title",content:"Cross-Platform AI with ONNX and .NET"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Learn how to create ML models and embed them into intelligent cross platform apps with the ONNX runtime and .NET MAUI."}),(0,n.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day11.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,n.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,n.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day11",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day11.png",title:"Cross-Platform AI with ONNX and .NET",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Learn how to create ML models and embed them into intelligent cross platform apps with the ONNX runtime and .NET MAUI.",hashtags:"ONNXRuntime",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-11-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 11 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Building Cross-Platform AI Solutions with ONNX and .NET")),(0,n.kt)("p",null,"Yesterday was all about the power of OpenAI to create intelligent dynamic apps. Today is for people looking to build cross-platform intelligent apps with .NET MAUI and the ONNX Runtime."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build intelligent apps with ONNX and .NET. "),(0,n.kt)("li",{parentName:"ul"},"How AI is related to traditional programming.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 11",src:a(50405).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/maui?WT.mc_id=aiml-89446-dglover"},".NET Multi-platform App UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/getting-started-azure-openai-dotnet?WT.mc_id=aiml-89446-dglover"},"Announcing the Azure OpenAI .NET SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/concept-onnx?WT.mc_id=aiml-89446-dglover"},"ONNX and Azure Machine Learning: Create and accelerate ML models")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/add-machine-learning-to-uwp-app?WT.mc_id=aiml-89446-dglover"},"Create a machine learning model for offline use on a Windows device"))),(0,n.kt)("h2",{id:"-build-cross-platform-intelligent-apps-with-onnx-and-net"},"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET"),(0,n.kt)("p",null,"Learn how to build an intelligent cross platform .NET MAUI app running a local ML model on the ONNX runtime. The presenters, Bea and Henk, overview AI and machine learning, how to create models that learn from data to makes predictions, and how to integrate a model into a cross platform .NET MAUI app."),(0,n.kt)("h2",{id:"accompanying-source-code"},"Accompanying source code"),(0,n.kt)("p",null,"You'll find the accompanying source code on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hnky/dotnet-maui-onnx-runtime"},"GitHub"),". "),(0,n.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/h6HWP5jpA5s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-app-developers"},"You can ask questions about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}h.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(67294),n=a(46616),r=a(87385),o=a(69641),l=a(78854),s=a(16573),m=a(1020),u=a(48137),d=a(66339),h=a(53597),p=a(37332);function c(e){let{page_url:t,image_url:a,title:c,hashtags:g,hashtag:A,description:f}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:f,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,image:a},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,quote:c,hashtag:A},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(h.Z,{title:c,url:t},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:c,body:f,url:t},i.createElement(d.Z,{size:32,round:!0})))}},50405:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day11-4b1edadb582fb073671cdc6104ea3254.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);