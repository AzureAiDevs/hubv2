"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8612],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(g,n(n({ref:t},s),{},{components:o})):r.createElement(g,n({ref:t},s))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,n=new Array(a);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<a;p++)n[p]=o[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},34009:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));const a={slug:"2023-day4",title:"4. \ud83c\udfc1Use CoPilot to build a AI Receipt App",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Learn how to use CoPilot to build an AI-Powered Receipt Recognition App powered by Azure Form Recognizer"},n=void 0,l={permalink:"/hub/blog/2023-day4",source:"@site/blog/2023-aia/2023-04-05-exploring-cog-services/index.md",title:"4. \ud83c\udfc1Use CoPilot to build a AI Receipt App",description:"Learn how to use CoPilot to build an AI-Powered Receipt Recognition App powered by Azure Form Recognizer",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:2.665,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day4",title:"4. \ud83c\udfc1Use CoPilot to build a AI Receipt App",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Learn how to use CoPilot to build an AI-Powered Receipt Recognition App powered by Azure Form Recognizer"},prevItem:{title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",permalink:"/hub/blog/2023-day3"},nextItem:{title:"5. \ud83c\udfc1Learn key Azure ML Concepts",permalink:"/hub/blog/2023-day5"}},c={authorsImageUrls:[void 0]},p=[{value:"Day <em>4</em> of #30DaysOfAzureAI",id:"day-4-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"How Copilot helps developers generate code for a Form Recognizer application",id:"how-copilot-helps-developers-generate-code-for-a-form-recognizer-application",level:2},{value:"Learn More",id:"learn-more",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day4"}),(0,i.kt)("meta",{name:"twitter:title",content:"Use CoPilot to build a AI Receipt App"}),(0,i.kt)("meta",{name:"twitter:description",content:"Learn how to use CoPilot to build an AI-Powered Receipt Recognition App powered by Azure Form Recognizer"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/4-use-copilot-to-build-a-ai-receipt-app"},"Ask a question about this post on GitHub Discussions"))),(0,i.kt)("h2",{id:"day-4-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"4")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to use CoPilot to build an AI-Powered Receipt Recognition App powered by Azure Form Recognizer")),(0,i.kt)("p",null,"GitHub Copilot is a new tool that uses OpenAI Codex GPT-3 to help developers write code more efficiently and productively. By using natural language, developers can describe what they need to accomplish, and GitHub Copilot will translate that into code in different programming languages such as Python, JavaScript, and more. In this session, we will explore how to use GitHub Copilot to solve business problems using the Azure Form Recognizer API to read the contents of a receipt in Python. The goal of this demonstration is to show how GitHub Copilot can make coding faster and easier."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"GitHub Copilot uses AI to revolutionize programming."),(0,i.kt)("li",{parentName:"ol"},"CoPilot increase efficiency and productivity for developers."),(0,i.kt)("li",{parentName:"ol"},"A tutorial is provided on how to integrate Python with the Azure Form Recognizer API using GitHub Copilot")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Banner Placeholder",src:o(61504).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"how-copilot-helps-developers-generate-code-for-a-form-recognizer-application"},"How Copilot helps developers generate code for a Form Recognizer application"),(0,i.kt)("p",null,"This is a excellent tutorial on how you can use Copilot to help build an app that recognizers printed receipts using the Azure Form Recognizer Cognitive Service. It is a great example of how Copilot can help you to generate code for your AI applications."),(0,i.kt)("p",null,"Be sure to check it out here: ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813"},"How Copilot helps developers generate code for a Form Recognizer application")),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813"},"article"),"."))}u.isMDXComponent=!0},61504:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/banner-0c3b24fb649d43edb317086600f57a29.png"}}]);