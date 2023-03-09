"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day11.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/blog/2023-day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},o=void 0,l={permalink:"/hub/blog/2023-day11",source:"@site/blog/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/blog/2023-day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:3.75,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate @hboelman",url:"https://github.com/hnky",imageURL:"https://github.com/hnky.png",key:"Henk"},{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl @beastollnitz",url:"https://github.com/bstollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day11.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/blog/2023-day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/blog/2023-day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",permalink:"/hub/blog/2023-day12"}},s={authorsImageUrls:[void 0,void 0]},u=[{value:"Day <em>11</em> of #30DaysOfAzureAI",id:"day-11-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/blog/2023-day11"}),(0,r.kt)("meta",{name:"twitter:title",content:"Cross-Platform AI with ONNX and .NET"}),(0,r.kt)("meta",{name:"twitter:description",content:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/blog/2023-day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day11.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://youtu.be/h6HWP5jpA5s"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-11-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"11")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building Cross-Platform AI Solutions with ONNX and .NET")),(0,r.kt)("p",null,'The video Machine learning models with ONNX and .NET | .NET Conf 2022 - YouTube" features a presentation by two cloud advocates from Microsoft, Beatriz Stollnitz and Henk Boelman, who demonstrate how to create a machine learning model using ONNX and .NET. The presentation includes a brief introduction to artificial intelligence (AI) and its subsets, with a focus on machine learning and deep learning. The presenters also explain the difference between traditional programming and machine learning, and how the latter can be used to solve problems that are difficult to solve using traditional programming.'),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The presentation is about machine learning models with ONNX and .NET, presented by Beatriz Stollnitz and Henk."),(0,r.kt)("li",{parentName:"ol"},"They start with a dataset of Lego figures, create a model, and demonstrate how to run it in a .NET Maui application that can run on a mobile phone."),(0,r.kt)("li",{parentName:"ol"},"The presentation covers an overview of AI, machine learning, expert systems, and deep learning, and how they relate to traditional programming.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 11",src:a(77523).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/maui?WT.mc_id=aiml-89446-dglover"},".NET Multi-platform App UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/concept-onnx?WT.mc_id=aiml-89446-dglover"},"ONNX and Azure Machine Learning: Create and accelerate ML models")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/add-machine-learning-to-uwp-app?WT.mc_id=aiml-89446-dglover"},"Create a machine learning model for offline use on a Windows device"))),(0,r.kt)("p",null,"The video is a presentation on machine learning models using ONNX and .NET. The presenters, Bea and Henk, start with an overview of AI and machine learning, explaining that machine learning is a subset of AI that involves creating a model that can learn from data and make predictions without being explicitly programmed. They explain that deep learning, a subset of machine learning that uses artificial neural networks, is well-suited to big data."),(0,r.kt)("p",null,"The presentation then goes on to demonstrate how to create a machine learning model using ONNX and .NET. The presenters use a dataset of Lego figures and explain how to create a model that can predict the color of a Lego figure based on its shape. They use tools like Visual Studio and the ML.NET library to create the model, and then show how to use the ONNX format to export the model for use in a .NET Maui application."),(0,r.kt)("p",null,"The presentation concludes with a demo of the .NET Maui application, which uses the machine learning model to predict the color of a Lego figure from an image. The presenters explain how the application works and discuss some of the challenges they faced in creating the model and the application. They also emphasize the importance of testing and evaluating machine learning models to ensure their accuracy and reliability. Overall, the presentation provides an accessible introduction to machine learning using ONNX and .NET, and demonstrates how these tools can be used to create practical applications."),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/h6HWP5jpA5s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/h6HWP5jpA5s"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},77523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day11-b17d5e8fecba63c8e602611bb63e315b.png"}}]);