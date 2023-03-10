"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4572],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,y=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return i?a.createElement(y,s(s({ref:t},p),{},{components:i})):a.createElement(y,s({ref:t},p))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[u]="string"==typeof e?e:r,s[1]=n;for(var c=2;c<o;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},44901:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var a=i(87462),r=(i(67294),i(3905));const o={slug:"2023-day7",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Accessibility-Employment","Accessibility-Modern-Life","Accessibility-Human-Connection"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","ai-for-accessibility"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day7.png",description:"Learn to build AI for everyone with AI for Accessibility https://azureaidevs.github.io/hub/blog/2023-day7 #30DaysOfAzureAI #AzureAiDevs #AI #Accessibility"},s=void 0,n={permalink:"/hub/blog/2023-day7",source:"@site/blog/2023-aia/2023-04-08-ai-accessibility/index.md",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",description:"Learn to build AI for everyone with AI for Accessibility https://azureaidevs.github.io/hub/blog/2023-day7 #30DaysOfAzureAI #AzureAiDevs #AI #Accessibility",date:"2023-04-08T00:00:00.000Z",formattedDate:"April 8, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"ai-for-accessibility",permalink:"/hub/blog/tags/ai-for-accessibility"}],readingTime:2.425,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate",url:"https://github.com/hnky",tag:"@hboelman",imageURL:"https://github.com/hnky.png",key:"Henk"}],frontMatter:{slug:"2023-day7",title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Accessibility-Employment","Accessibility-Modern-Life","Accessibility-Human-Connection"],tags:["ai-april","30-days-of-azure-ai","ml-developers","app-developers","ai-for-accessibility"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day7.png",description:"Learn to build AI for everyone with AI for Accessibility https://azureaidevs.github.io/hub/blog/2023-day7 #30DaysOfAzureAI #AzureAiDevs #AI #Accessibility"},prevItem:{title:"6. \ud83c\udfc1The Mission of Responsible AI",permalink:"/hub/blog/2023-day6"},nextItem:{title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",permalink:"/hub/blog/2023-day8"}},l={authorsImageUrls:[void 0]},c=[{value:"\ud83d\uddd3\ufe0f Day <em>7</em> of #30DaysOfAzureAI",id:"\ufe0f-day-7-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c 6 ways to improve accessibility with Azure AI",id:"-6-ways-to-improve-accessibility-with-azure-ai",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day7"}),(0,r.kt)("meta",{property:"og:title",content:"Accessible AI Apps for Everyone"}),(0,r.kt)("meta",{property:"og:description",content:"Learn to build AI for everyone with AI for Accessibility https://azureaidevs.github.io/hub/blog/2023-day7 #30DaysOfAzureAI #AzureAiDevs #AI #Accessibility"}),(0,r.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day7.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.microsoft.com/blog/6-ways-to-improve-accessibility-with-azure-ai/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/7-accessible-ai-apps-for-everyone"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-7-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,r.kt)("em",{parentName:"h2"},"7")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn to build AI for everyone with AI for Accessibility")),(0,r.kt)("p",null,"Yesterday we talked about the importance of Responsible AI. Today is about 6 ways to improve accessibility with Azure AI. There are over one billion people in the world living with disabilities."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft's five-year initiative to address the challenges faced by the one billion people living with disabilities worldwide."),(0,r.kt)("li",{parentName:"ul"},"Azure AI offers a range of accessibility solutions to help organizations create more inclusive experiences for their users."),(0,r.kt)("li",{parentName:"ul"},"Microsoft and Azure AI have developed several accessible experiences, including speech-to-text transcription and captioning, content reading, translation services, facial recognition, and image captioning.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 7",src:i(8700).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/ai/ai-for-accessibility"},"AI for Accessibility"))),(0,r.kt)("h2",{id:"-6-ways-to-improve-accessibility-with-azure-ai"},"\ud83d\ude8c 6 ways to improve accessibility with Azure AI"),(0,r.kt)("p",null,"There are over one billion people in the world living with disabilities, and many face barriers to employment, education, and societal inclusion. "),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/blog/6-ways-to-improve-accessibility-with-azure-ai/"},"today's article")," to learn about ","[Microsoft's five-year initiative]","(",(0,r.kt)("a",{parentName:"p",href:"https://blogs.microsoft.com/blog/2021/04/28/doubling-down-on-accessibility-microsofts-next-steps-to-expand-accessibility-in-technology-the-workforce-and-workplace"},"Microsoft launched a new five-year initiative"),") aimed at improving the accessibility of technology and creating opportunities for people with disabilities. "),(0,r.kt)("p",null,"The initiative focuses on three priorities: developing more accessible technology, using this technology to create job opportunities for people with disabilities, and building a more inclusive workplace. "),(0,r.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/blog/6-ways-to-improve-accessibility-with-azure-ai/"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/7-accessible-ai-apps-for-everyone"},"Remember, you can ask a question about this post on GitHub Discussions")))}u.isMDXComponent=!0},8700:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/banner-day7-421eb56ff83d926fde3862f1593bafec.png"}}]);