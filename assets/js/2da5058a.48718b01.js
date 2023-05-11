"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4239],{88704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),l=a(30925);const r={slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel with ONNX Runtime",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day12.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime."},s=void 0,o={permalink:"/hub/2023-aia/day12",source:"@site/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel with ONNX Runtime",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime.",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:2.265,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Cassie.png",key:"Cassie"}],frontMatter:{slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel with ONNX Runtime",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day12.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime."},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/2023-aia/day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbGitHub Copilot's updated AI model",permalink:"/hub/2023-aia/day13"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 12 of #30DaysOfAzureAI",id:"\ufe0f-day-12-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build an Excel Add-in with ONNX Runtime Web for Inferencing NLP models on Device",id:"-build-an-excel-add-in-with-onnx-runtime-web-for-inferencing-nlp-models-on-device",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day12"}),(0,n.kt)("meta",{name:"twitter:title",content:"NLP Models in Excel with ONNX Runtime"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime."}),(0,n.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day12.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,n.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,n.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(l.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day12",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day12.png",title:"NLP Models in Excel with ONNX Runtime",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime.",hashtags:"ONNXRuntime",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-12-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 12 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build an Excel Add-in with ONNX Runtime Web for NLP Tasks")),(0,n.kt)("p",null,'Yesterday was all about building cross-platform intelligent apps with .NET MAUI and ONNX. Today is for people looking to extend Excel with BERT NLP tasks enabled by ONNX Runtime Web in JavaScript. Wait, was "Excel, BERT, JavaScript and ONNX" used in the same sentence?\ud83d\ude04 Yup, they were, so follow along to learn more.'),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Excel Add-ins with Natural Language Processing using BERT and the ONNX Runtime."),(0,n.kt)("li",{parentName:"ul"},"Step-by-step instructions and code examples.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},(0,n.kt)("img",{alt:"Image banner for day 12",src:a(49290).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard"))),(0,n.kt)("h2",{id:"-build-an-excel-add-in-with-onnx-runtime-web-for-inferencing-nlp-models-on-device"},"\ud83d\ude8c Build an Excel Add-in with ONNX Runtime Web for Inferencing NLP models on Device"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"today's article")," about building an Excel Add-in with ONNX Runtime and JavaScript with on device inferencing. You'll learn how ONNX Runtime enables the inference of ML models cross-platform even locally in an Excel add-in! "),(0,n.kt)("p",null,"The tasks in this example will show you how to perform the natural language processing tasks of sentiment analysis and question and answering all locally within a spreadsheet. \xa0",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"Today's article")," provides step-by-step instructions and code examples to help readers follow along in building the add-in."),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-app-developers"},"You can ask questions about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}c.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(67294),n=a(46616),l=a(87385),r=a(69641),s=a(78854),o=a(16573),u=a(1020),d=a(48137),h=a(66339),c=a(53597),m=a(37332);function p(e){let{page_url:t,image_url:a,title:p,hashtags:b,hashtag:N,description:g}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:g,hashtags:[b]},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(r.Z,{url:t,image:a},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,quote:p,hashtag:N},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{title:p,url:t},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:p,body:g,url:t},i.createElement(h.Z,{size:32,round:!0})))}},49290:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day12-82755f40a9ffbd4ea5d76f2348babb3e.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);