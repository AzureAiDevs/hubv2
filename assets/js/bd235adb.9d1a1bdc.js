"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/blog/2023-day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},o=void 0,l={permalink:"/hub/blog/2023-day12",source:"@site/blog/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/blog/2023-day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",tag:"@CassieBreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/blog/2023-day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/blog/2023-day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hub/blog/2023-day13"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>12</em> of #30DaysOfAzureAI",id:"day-12-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day12"}),(0,r.kt)("meta",{property:"og:title",content:"Run BERT NLP models locally in Excel"}),(0,r.kt)("meta",{property:"og:description",content:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/blog/2023-day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"}),(0,r.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/12-run-bert-nlp-models-locally-in-excel"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-12-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"12")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run BERT NLP models locally in Excel with ONNX and JavaScript")),(0,r.kt)("p",null,"Yesterday was all about building cross-platform intelligent apps with .NET MAUI and ONNX. Today is for people looking to extend Excel with BERT-JS and the ONNX Runtime. What? You can do that, yup, follow along to learn more."),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The article provides a guide to building an Excel add-in that performs natural language processing tasks using the BERT model and ONNX Runtime. "),(0,r.kt)("li",{parentName:"ol"},"BERT is a deep learning model that is designed to understand the context and meaning of words in text. "),(0,r.kt)("li",{parentName:"ol"},"The article includes step-by-step instructions, code examples, and screenshots to help readers follow along.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 12",src:a(33523).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard"))),(0,r.kt)("p",null,'The article "Building an Excel Add-in with BERT-JS and ONNX Runtime" highlights the importance of using responsible AI in developing applications. The use of BERT-JS and ONNX Runtime enables the creation of an Excel add-in that performs natural language processing tasks within a spreadsheet. BERT, a deep learning model developed by Google, is designed to understand the context and meaning of words in text. By using a transformer-based architecture, BERT can analyze entire sentences or paragraphs rather than processing words one by one. The article provides step-by-step instructions and code examples to help readers follow along in building the add-in.'),(0,r.kt)("p",null,"The article emphasizes the importance of responsible AI in building applications that use machine learning models. By using ONNX Runtime, the performance of the BERT-JS model can be optimized, resulting in faster and more efficient processing of natural language tasks. Additionally, the article encourages developers to be mindful of potential biases and ethical considerations when building applications that use machine learning models. By considering responsible AI practices, developers can create applications that are fair, transparent, and trustworthy."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(92396).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-run-bert-nlp-models-locally-in-excel"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},92396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bert-excel-dab9169fb12f6a0846795bf37f432df3.gif"},33523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day12-06eee5a6fbcb4f256cfc70db499818b9.png"}}]);