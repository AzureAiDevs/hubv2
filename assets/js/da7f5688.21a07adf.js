"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[552],{70092:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905)),s=t(30925);const n={slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day27.png",description:"\ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. \ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. Maximize your business results with Azure Personalizer - a machine learning-based service that creates personalized experiences for your customers based on their preferences and behavior."},o=void 0,l={permalink:"/hub/2023-aia/day27",source:"@site/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",description:"\ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. \ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. Maximize your business results with Azure Personalizer - a machine learning-based service that creates personalized experiences for your customers based on their preferences and behavior.",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"}],readingTime:3.16,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin",title:"Engineering Manager & Microsoft MVP (AI)",url:"https://github.com/arafattehsin",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Arafat.png",key:"Arafat"}],frontMatter:{slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day27.png",description:"\ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. \ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. Maximize your business results with Azure Personalizer - a machine learning-based service that creates personalized experiences for your customers based on their preferences and behavior."},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/2023-aia/day26"}},u={authorsImageUrls:[void 0]},c=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 27 of #30DaysOfAzureAI",id:"\ufe0f-day-27-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Personalized user experiences at scale",id:"-personalized-user-experiences-at-scale",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:c};function p(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day27"}),(0,i.kt)("meta",{name:"twitter:title",content:"Enhance CX with Azure Personalizer"}),(0,i.kt)("meta",{name:"twitter:description",content:"\ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. \ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. Maximize your business results with Azure Personalizer - a machine learning-based service that creates personalized experiences for your customers based on their preferences and behavior."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day27.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("link",{rel:"canonical",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"},"View today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,i.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,i.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,i.kt)("h3",{id:"please-share"},"Please share"),(0,i.kt)(s.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day27",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day27.png",title:"Enhance CX with Azure Personalizer",description:"\ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. \ud83c\udfedWelcome to day 27 of #30DaysOfAzureAI. Maximize your business results with Azure Personalizer - a machine learning-based service that creates personalized experiences for your customers based on their preferences and behavior.",hashtags:"AzurePersonalizer",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,i.kt)("h2",{id:"\ufe0f-day-27-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 27 of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences")),(0,i.kt)("p",null,"Yesterday we learned about the power of Stable Diffusion and Azure ML. Today, you're going to learn how to build personalized experiences for your customers with reinforcement learning using Azure Personalizer."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Personalizer Cognitive Service."),(0,i.kt)("li",{parentName:"ul"},"Build a personalized experience for your users."),(0,i.kt)("li",{parentName:"ul"},"How to create the resources for Azure Personalizer.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"},(0,i.kt)("img",{alt:"Image banner for day 27",src:t(27953).Z,width:"1920",height:"1080"}))),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/personalizer?WT.mc_id=aiml-89446-dglover"},"Azure Personalizer Cognitive Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-au/products/cognitive-services/#overview?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/#api?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/launchwithai-videoken?WT.mc_id=aiml-89446-dglover"},"Case Study: VideoKen is improving video discovery and engagement using AI"))),(0,i.kt)("h2",{id:"-personalized-user-experiences-at-scale"},"\ud83d\ude8c Personalized user experiences at scale"),(0,i.kt)("p",null,"Azure Personalizer is a cloud-based service offered by Microsoft Azure that enables developers to create personalized experiences for customers / users based on their preferences and behavior. By leveraging machine learning algorithms, Azure Personalizer can optimize personalized recommendations and actions to achieve the goals of the application, such as maximizing engagement or revenue. With its scalability and easy integration, it can be used to deliver tailored content and actions to a large number of users, providing a more engaging and satisfying user experience."),(0,i.kt)("p",null,"All in all, Azure Personalizer helps developers create personalized experiences for their users at scale, which can lead to increased user satisfaction and retention."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Personalizer gif",src:t(15843).Z,width:"600",height:"338"})),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/tag/azure-personalizer/"},"Azure Personalizer Workshop")," provides a comprehensive guide on how to create a personalized user experience using Azure Personalizer. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1/"},"first")," part of the series introduces the necessary concepts of Azure Personalizer, including how it uses machine learning algorithms to optimize personalized recommendations and actions."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-2/"},"second")," part of the series focuses on creating a simulator to create and improve a Personalizer model before deploying it to production. This allows developers to test and refine their model before launching it to a large number of users."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-3/"},"final")," part of the series demonstrates how to use the Personalizer model in a Power Virtual Agents bot with the Power Automate custom connector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 27",src:t(29861).Z,width:"800",height:"474"})),(0,i.kt)("p",null,"By following the steps outlined in the workshop, developers can create a more engaging and personalized user experience that can lead to increased user satisfaction and retention."),(0,i.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://www.arafattehsin.com/reinforcement-learning-in-apps-bots-websites-with-azure-personalizer-part-1"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-workshops"},"You can ask questions about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,i.kt)("img",{alt:"The image is the blog RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}p.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(67294),i=t(46616),s=t(87385),n=t(69641),o=t(78854),l=t(16573),u=t(1020),c=t(48137),h=t(66339),p=t(53597),d=t(37332);function m(e){let{page_url:a,image_url:t,title:m,hashtags:f,hashtag:g,description:z}=e;return r.createElement("div",null,r.createElement(i.Z,{url:a,title:z,hashtags:[f]},r.createElement(s.Z,{size:32,round:!0})),"\xa0",r.createElement(n.Z,{url:a,image:t},r.createElement(o.Z,{size:32,round:!0})),"\xa0",r.createElement(l.Z,{url:a,quote:m,hashtag:g},r.createElement(u.Z,{size:32,round:!0})),"\xa0",r.createElement(p.Z,{title:m,url:a},r.createElement(d.Z,{size:32,round:!0})),"\xa0",r.createElement(c.Z,{subject:m,body:z,url:a},r.createElement(h.Z,{size:32,round:!0})))}},29861:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/PVA-demo-7a52508312d596ce12eb33da18c27ab5.gif"},15843:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Personalizer-f2b7ab725d58f6477a6446ce5152a01c.gif"},27953:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/banner-day27-6c528f5289ef2064c77fb426a546426f.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);