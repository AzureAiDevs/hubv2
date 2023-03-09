"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={slug:"2023-day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day10.png",description:"Get ready to build dynamic, interactive and differentiated experiences with Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/blog/2023-day10",source:"@site/blog/2023-aia/2023-04-11-inside-openai/index.md",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",description:"Get ready to build dynamic, interactive and differentiated experiences with Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:5.245,hasTruncateMarker:!1,authors:[{name:"Heidi Steen",title:"Senior Content Developer",url:"https://github.com/HeidiSteen",tag:"@HeidiSteen",imageURL:"https://github.com/HeidiSteen.png",key:"Heidi"}],frontMatter:{slug:"2023-day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day10.png",description:"Get ready to build dynamic, interactive and differentiated experiences with Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent Apps w/ Azure AI SDKs",permalink:"/hub/blog/2023-day9"},nextItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/blog/2023-day11"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>10</em> of #30DaysOfAzureAI",id:"day-10-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Scenario One: Converse with Minecraft",id:"scenario-one-converse-with-minecraft",level:2},{value:"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information",id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information",level:2},{value:"Key Takeaways and Next Steps",id:"key-takeaways-and-next-steps",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day10"}),(0,r.kt)("meta",{property:"og:title",content:"Inside look at Azure OpenAI for Devs"}),(0,r.kt)("meta",{property:"og:description",content:"Get ready to build dynamic, interactive and differentiated experiences with Azure OpenAI https://azureaidevs.github.io/hub/blog/2023-day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"}),(0,r.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day10.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/blog/2023-day10"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/10-inside-look-at-azure-openai-for-devs"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-10-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"10")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Get ready to build dynamic, interactive and differentiated experiences with Azure OpenAI")),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core concepts"),(0,r.kt)("li",{parentName:"ul"},"Using prompts for user interaction (Minecraft example)"),(0,r.kt)("li",{parentName:"ul"},"Cross-pollination between apps (Cognitive Search example)"),(0,r.kt)("li",{parentName:"ul"},"Sign up to get started")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 10",src:n(69880).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-cognitive-search&WT.mc_id=aiml-89446-dglover"},"Learn Module: Azure Cognitive Search")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/bootstrapping-ai-models-pointers?WT.mc_id=aiml-89446-dglover"},"Case Study: Is data necessary for bootstrapping of AI models?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/metaverse-training-stellarx?WT.mc_id=aiml-89446-dglover"},"Case Study: Metaverse training and AI-driven onboarding"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What's Azure OpenAI?")),(0,r.kt)("p",null,'Azure\'s OpenAI Service lets you leverage large scale generative AI\nmodels based in Azure that have a deep understanding of language and\ncode as you build new applications. "Language understanding" means that\nyou can type or "talk" to an app to get it do the things you want.'),(0,r.kt)("p",null,"In Azure OpenAI, you can work with these models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPT-3 generates content based on natural language input.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Codex translates natural language instructions directly into code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DALL-E 2 generates realistic images and art from natural language\ndescriptions."))),(0,r.kt)("p",null,"These models are hosted on Azure, accessible to apps through REST APIs,\nor through Azure OpenAI Studio for interactive exploration."),(0,r.kt)("p",null,"Azure OpenAI models include built-in content filtering. If inputs or\ngenerated outputs include inappropriate content, the Azure OpenAI\nService catches it. Detection and mitigation of harmful use follows the\nresponsible AI principles, which you can find more about at\n",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/AIprinciples"},"aka.ms/AIprinciples"),"."),(0,r.kt)("p",null,"In this session, we'll unpack the core concepts for interacting with\nmodels, using prompts, and demonstrate how you can use Azure's OpenAI\nStudio to experiment with and test your models before bringing them into\nyour code to deliver differentiated app experiences, all with Azure's\nenterprise-grade security for your app's foundation."),(0,r.kt)("h2",{id:"scenario-one-converse-with-minecraft"},"Scenario One: Converse with Minecraft"),(0,r.kt)("p",null,"Transforming the surface area of an app might be easier than you think!\nIn this video segment, Pablo shows us how he used Minecraft's extension\nAPIs to integrate a conversational user interaction model to build in\nMinecraft."),(0,r.kt)("p",null,'The add-in module, named "conjure", collects a text input that\'s passed\nto Codex, transforming user intent into actionable code that Minecraft\nunderstands.'),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=341",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"If your application supports plug-in or add-on modules, you can attach a\nmodule that accepts text prompts as inputs, and then pass that input to\nCodex to interpret the user intent. Codex returns native code that can\nthen be processed by your application."),(0,r.kt)("h2",{id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information"},"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information"),(0,r.kt)("p",null,"The next example combines the content discovery capabilities of Azure\nCognitive Search with the language understanding of the GPT-3 model."),(0,r.kt)("p",null,"The premise is an app for a green energy company that helps users find\nthe latest insights and developments by scanning content over large\nvolumes of unstructured content from various sources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cognitive Search accepts a user query and returns a set of matching\ndocuments in order of relevance. Instead of returning the results to\nthe user, it sends them to GPT-3 for more analysis.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPT-3 takes the documents and composes better answers and insights\nusing content from all of them."))),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=576",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"In this example, the app calls Azure Cognitive Search to discover\ntext-based documents related to the user's question. This step finds the\nmatches, ranks the documents, and returns the most relevant candidates."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graphical user interface Description automatically generated",src:n(22274).Z,width:"800",height:"445"})),(0,r.kt)("p",null,"But sometimes the best answer isn't in one document. By adding language\nunderstanding, the app can use GPT-3 to derive a new answer using the\ncontent from all of the matching documents. This isn't just a verbatim\nanswer from one document, but a new answer from multiple documents."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graphical user interface, text, application Description automatically generated",src:n(8338).Z,width:"808",height:"451"})),(0,r.kt)("h2",{id:"key-takeaways-and-next-steps"},"Key Takeaways and Next Steps"),(0,r.kt)("p",null,"Now that you've seen a few examples, here are some next steps:"),(0,r.kt)("p",null,"See how Microsoft integrates OpenAI into applications. You can ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=164"},"catch\nthese examples in the video"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Co-Pilot in the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/power-platform/developer/"},"Power\nPlatform"),"\nlets you author Power Fx commands and automation flow without having\nto know or type the syntax.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M365's ",(0,r.kt)("a",{parentName:"p",href:"https://designer.microsoft.com/"},"Microsoft Designer")," lets\nyou use AI-generated images when creating visual content."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUOFA5Qk1UWDRBMjg0WFhPMkIzTzhKQ1dWNyQlQCN0PWcu"},"Sign up for Azure\nOpenAI"),"\nto get core building blocks for production-grade applications, including\nhosting at scale, to enterprise-level security."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call OpenAI from your code just like any other REST API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure with strong authentication, role-based access control and the\nability to configure virtual networks, private endpoints as you\nwould for any Azure service."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://oai.azure.com/portal"},"Sign up for Azure OpenAI Studio")," to\nexperiment and test your ideas before bringing them into your code.\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=721"},"Watch this segment of the video"),"\nfor a walkthrough."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/10-inside-look-at-azure-openai-for-devs"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},22274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-6cc014422d14871444503a6d89b65d1c.png"},8338:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image4-40835ddec01e80e721da633f4eb0453e.png"},69880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-day10-2f29c5b6008f86099d09f2a48372e1c1.png"}}]);