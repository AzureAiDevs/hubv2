"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(g,n(n({ref:t},p),{},{components:a})):r.createElement(g,n({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const o={slug:"day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day25.png",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer"},n=void 0,s={permalink:"/hub/2023-aia/day25",source:"@site/2023-aia/2023-04-27-patient-rego-workshop/index.md",title:"25. \ud83c\udfedBuild a Patient Registration App",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"}],readingTime:2.64,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",tag:"@dglover",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"day25",title:"25. \ud83c\udfedBuild a Patient Registration App",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","azure-cognitive-services","app-developers","workshop"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day25.png",description:"Building a Patient Registration Web App with Azure Form Recognizer https://azureaidevs.github.io/hub/2023-aia/day25 #30DaysOfAzureAI #AzureAiDevs #AI #AzureFormRecognizer"},prevItem:{title:"24. \ud83c\udfedMachine Learning for Beginners",permalink:"/hub/2023-aia/day24"},nextItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/2023-aia/day26"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 25 of #30DaysOfAzureAI",id:"\ufe0f-day-25-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c New Patient Registration workshop",id:"-new-patient-registration-workshop",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://newpatiente2e.github.io/docs/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://newpatiente2e.github.io/docs/"},"View today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/25-build-a-patient-registration-app"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-25-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 25 of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building a Patient Registration Web App with Azure Form Recognizer")),(0,i.kt)("p",null,"Yesterday we learned about the Machine Learning for Beginners Curriculum. Today is for AI app Developers and introduces the New Patient Registration workshop. It's a one-hour hands-on lab, and you'll learn how to build an Azure Static Web App that uses the Azure Form Recognizer service."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automated form filling with Azure Form Recognizer"),(0,i.kt)("li",{parentName:"ul"},"Integrating Azure Form Recognizer with an Azure Static Web App.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 25",src:a(36689).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-form-recognizer&WT.mc_id=aiml-89446-dglover"},"Learn Module: Azure Form Recognizer Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0&WT.mc_id=aiml-89446-dglover"},"What is Azure Form Recognizer?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/powering-speech-to-text-ai?WT.mc_id=aiml-89446-dglover"},"Case Study: Powering Speech-to-Text AI that iterates at the speed of business")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/duolingo-makes-learning-language-fun-with-help-from-ai?WT.mc_id=aiml-89446-dglover"},"Case study: Duolingo makes learning language fun with help from AI"))),(0,i.kt)("h2",{id:"-new-patient-registration-workshop"},"\ud83d\ude8c New Patient Registration workshop"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"Today's article")," introduces the \"New Patient Registration\" hands-on lab. The lab is designed to help you learn how to use Azure Form Recognizer to automate the patient registration process at a doctor's surgery. You'll learn how to create a custom Azure Form Recognizer model, integrate it with a web app, and define application roles that map to workshop personas such as surgery admin, nurse, and doctor. By the end of the workshop, you'll have a working solution that allows new patients to complete the registration form online, the web app to extract the data, and the surgery admin to verify and add the registration to the doctor's surgery system. Say goodbye to manual form filling and hello to the power of AI technologies with Azure Form Recognizer!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(51731).Z,width:"1280",height:"720"})),(0,i.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://newpatiente2e.github.io/docs/"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/25-build-a-patient-registration-app"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,i.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},51731:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-43dca5d4795ea05a0b16a2046696e41e.png"},36689:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day25-78f17de2aaf37c1c5cfbcf935065c2fa.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);