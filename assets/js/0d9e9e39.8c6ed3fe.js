"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,h=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return r?a.createElement(h,n(n({ref:t},p),{},{components:r})):a.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var u=2;u<o;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const o={slug:"2023-day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day25.png",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/blog/2023-day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer"},n=void 0,s={permalink:"/hub/blog/2023-day25",source:"@site/blog/2023-aia/2023-04-27-patient-rego-workshop/index.md",title:"25. \ud83c\udfedBuild a Patient Registration App",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/blog/2023-day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"workshop",permalink:"/hub/blog/tags/workshop"}],readingTime:3.215,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",tag:"@dglover",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day25.png",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/blog/2023-day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer"},prevItem:{title:"24. \ud83c\udfedML and AI for beginners",permalink:"/hub/blog/2023-day24"},nextItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/blog/2023-day26"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>25</em> of #30DaysOfAzureAI",id:"day-25-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day25"}),(0,i.kt)("meta",{property:"og:title",content:"Build a Patient Registration App"}),(0,i.kt)("meta",{property:"og:description",content:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/blog/2023-day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer"}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day25.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://newpatiente2e.github.io/docs/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/25-build-a-patient-registration-app"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-25-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"25")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building a Patient Registration Web App with Azure Form Recognizer")),(0,i.kt)("p",null,"Transform manual form filling into an automated process with Azure Form Recognizer in this workshop! With Azure services and a focus on improving the patient experience, you'll create a custom model and integrate it into a web-based patient registration system. By the end, you'll have a solution that streamlines the registration process, providing more efficient and accurate data extraction. Don't miss out on harnessing the power of AI with Azure Form Recognizer!"),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automate the manual form filling process using Azure Form Recognizer"),(0,i.kt)("li",{parentName:"ul"},"Improve the patient experience by integrating a web-based patient registration system"),(0,i.kt)("li",{parentName:"ul"},"Achieve a more efficient and accurate system for data extraction with a custom Azure Form Recognizer model. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 25",src:r(82155).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Learn Module: Azure Form Recognizer Service]","(",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-form-recognizer&WT.mc_id=aiml-89446-dglover"},"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-form-recognizer&WT.mc_id=aiml-89446-dglover")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0&WT.mc_id=aiml-89446-dglover"},"What is Azure Form Recognizer?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/powering-speech-to-text-ai?WT.mc_id=aiml-89446-dglover"},"Case Study: Powering Speech-to-Text AI that iterates at the speed of business")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/duolingo-makes-learning-language-fun-with-help-from-ai?WT.mc_id=aiml-89446-dglover"},"Case study: Duolingo makes learning language fun with help from AI"))),(0,i.kt)("p",null,"Are you tired of manually filling out paper-based forms? Do you wish there was a way to automate the process? Look no further than Azure Form Recognizer, a new Cognitive Service that uses machine learning to extract text and table data from form documents. In this workshop, you'll learn how to infuse AI technologies into a web-based patient registration system using Azure services such as Azure Static Web Apps, Azure Functions, Azure Cognitive Services, Azure Storage, and Azure Cosmos DB."),(0,i.kt)("p",null,"The goal of the workshop is to improve the patient experience by automating the paper-based patient registration process at a doctor's surgery. You'll learn how to create a custom Azure Form Recognizer model, integrate it with a web app, and define application roles that map to workshop personas such as surgery admin, nurse, and doctor. By the end of the workshop, you'll have a working solution that allows new patients to complete the registration form online, the web app to extract the data, and the surgery admin to verify and add the registration to the doctor's surgery system. Say goodbye to manual form filling and hello to the power of AI technologies with Azure Form Recognizer!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(66639).Z,width:"1280",height:"720"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/25-build-a-patient-registration-app"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},66639:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-43dca5d4795ea05a0b16a2046696e41e.png"},82155:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-day25-78f17de2aaf37c1c5cfbcf935065c2fa.png"}}]);