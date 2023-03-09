"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return a?o.createElement(g,n(n({ref:t},d),{},{components:a})):o.createElement(g,n({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,n[1]=l;for(var u=2;u<r;u++)n[u]=a[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),i=(a(67294),a(3905));const r={slug:"2023-day13",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",authors:["Shuyin"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Copilot","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day13.png",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/blog/2023-day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot"},n=void 0,l={permalink:"/hub/blog/2023-day13",source:"@site/blog/2023-aia/2023-04-14-copilot/index.md",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/blog/2023-day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"copilot",permalink:"/hub/blog/tags/copilot"}],readingTime:2.915,hasTruncateMarker:!1,authors:[{name:"Shuyin Zhao",title:"Senior Director Of Product Management",url:"https://github.com/shuyinzjk",tag:"@newmomrules",imageURL:"https://github.com/shuyinzjk.png",key:"Shuyin"}],frontMatter:{slug:"2023-day13",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",authors:["Shuyin"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Copilot","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day13.png",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/blog/2023-day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot"},prevItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",permalink:"/hub/blog/2023-day12"},nextItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",permalink:"/hub/blog/2023-day14"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>13</em> of #30DaysOfAzureAI",id:"day-13-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"What&#39;s new in Copilot",id:"whats-new-in-copilot",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day13"}),(0,i.kt)("meta",{property:"og:title",content:"Copilot's updated AI model"}),(0,i.kt)("meta",{property:"og:description",content:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/blog/2023-day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot"}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day13.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/13-copilot's-updated-ai-model"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-13-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"13")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code")),(0,i.kt)("p",null,"GitHub has improved its AI tool, Copilot, with updated Codex model and Fill-In-the-Middle prompts for code suggestions, as well as a new lightweight client-side model for the VS Code extension. Additionally, they have introduced an AI-based system for preventing vulnerabilities in code that quickly detects insecure coding patterns and provides alternative suggestions. These updates are available to both individual and business users of Copilot and aim to improve the coding speed, accuracy, and security for developers."),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub updated Copilot with improved suggestions and a new Fill-In-the-Middle paradigm."),(0,i.kt)("li",{parentName:"ul"},"The VS Code extension was updated with a lightweight model and improved acceptance rate."),(0,i.kt)("li",{parentName:"ul"},"A new AI-based vulnerability prevention system was introduced with language models to provide alternative suggestions. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 13",src:a(81812).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer?WT.mc_id=aiml-89446-dglover"},"Introducing GitHub Copilot: your AI pair programmer"))),(0,i.kt)("h2",{id:"whats-new-in-copilot"},"What's new in Copilot"),(0,i.kt)("p",null,"GitHub has made updates to its AI-powered coding tool, Copilot, with the goal of improving code suggestions and responsiveness for developers. The underlying Codex model has been updated to deliver better results for code synthesis and the Fill-In-the-Middle paradigm has been introduced for better prompts for code suggestions. The extension for Visual Studio Code has also been updated with a lightweight client-side model that reduces unwanted suggestions and improves acceptance rates."),(0,i.kt)("p",null,"Additionally, an AI-based vulnerability prevention system has been introduced to identify and block insecure coding patterns in real-time. The system uses language models to quickly detect vulnerable patterns, including hardcoded credentials and SQL injections, even in incomplete code fragments. Vulnerable code suggestions are replaced with alternative suggestions."),(0,i.kt)("p",null,"These updates are available on Copilot for Individuals and Copilot for Business and GitHub aims to continue enhancing the developer experience. These updates will help developers code faster and more accurately while improving the security of their code."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(33449).Z,width:"1023",height:"537"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/13-copilot's-updated-ai-model"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},33449:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/image-d00f0bdda2ca4192a7efc678623a974e.webp"},81812:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/banner-day13-ba9f0c81ebb87973b496d7b1d558a42e.png"}}]);