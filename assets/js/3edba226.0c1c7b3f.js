"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),b=i,h=c["".concat(s,".").concat(b)]||c[b]||d[b]||n;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},94319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cGuide to Responsible AI (Part 2)",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["ai-april","30-days-of-azure-ai","responsible-ai","ml-developers","app-developers","data-scientist"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Get started with the RAI Dashboard and Azure ML (Part 2)"},o=void 0,l={permalink:"/hub/blog/2023-day19",source:"@site/blog/2023-aia/2023-04-20-rai-part-2/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cGuide to Responsible AI (Part 2)",description:"Get started with the RAI Dashboard and Azure ML (Part 2)",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"data-scientist",permalink:"/hub/blog/tags/data-scientist"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cGuide to Responsible AI (Part 2)",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["ai-april","30-days-of-azure-ai","responsible-ai","ml-developers","app-developers","data-scientist"],image:"https://azureaidevs.github.io/hub/img/og/30-01.png",description:"Get started with the RAI Dashboard and Azure ML (Part 2)"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/blog/2023-day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",permalink:"/hub/blog/2023-day20"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>19</em> of #30DaysOfAzureAI",id:"day-19-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day19"}),(0,i.kt)("meta",{name:"twitter:title",content:"Guide to Responsible AI (Part 2)"}),(0,i.kt)("meta",{name:"twitter:description",content:"Get started with the RAI Dashboard and Azure ML (Part 2)"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/og/30-01.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day19"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-guide-to-responsible-ai-(part-2)"},"Ask a question about this post on GitHub Discussions"))),(0,i.kt)("h2",{id:"day-19-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"19")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Get started with the RAI Dashboard and Azure ML (Part 2)")),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Banner Placeholder",src:a(728).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"))}c.isMDXComponent=!0},728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-bf2b81f2d93bcee17eed904fcd3d697e.png"}}]);