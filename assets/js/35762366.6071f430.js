"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET"},i=void 0,l={permalink:"/hubv2/blog/2023-day11",source:"@site/blog/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"Building Cross-Platform AI Solutions with ONNX and .NET",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"}],readingTime:.835,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate @hboelman",url:"https://github.com/hnky",imageURL:"https://github.com/hnky.png",key:"Henk"}],frontMatter:{slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET"},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbAzure OpenAI with Cognitive Search",permalink:"/hubv2/blog/2023-day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbBERT NLP in JavaScript with ONNX and Excel",permalink:"/hubv2/blog/2023-day12"}},s={authorsImageUrls:[void 0]},c=[{value:"Welcome to <em>Day 11</em> of 30DaysOfAzureAI!",id:"welcome-to-day-11-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day11"}),(0,n.kt)("meta",{name:"twitter:title",content:"Cross-Platform AI with ONNX and .NET"}),(0,n.kt)("meta",{name:"twitter:description",content:"Building Cross-Platform AI Solutions with ONNX and .NET"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day11/banner.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://aka.ms/ai-april/2023-day11"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Ask a question about this post on GitHub Discussions"))),(0,n.kt)("h2",{id:"welcome-to-day-11-of-30daysofazureai"},"Welcome to ",(0,n.kt)("em",{parentName:"h2"},"Day 11")," of 30DaysOfAzureAI!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty Banner Placeholder",src:r(55825).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Building Cross-Platform AI Solutions with ONNX and .NET"))}p.isMDXComponent=!0},55825:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-693e3f7031fd738b2dbe0dfb847b83af.png"}}]);