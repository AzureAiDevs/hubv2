"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,b=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(b,s(s({ref:t},c),{},{components:a})):r.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=h;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[p]="string"==typeof e?e:i,s[1]=n;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},98155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const o={slug:"2023-day6",title:"6. \ud83c\udfc1The Mission of Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Why you should care about Responsible AI and Microsoft role https://azureaidevs.github.io/hub/blog/2023-day6 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},s=void 0,n={permalink:"/hub/blog/2023-day6",source:"@site/blog/2023-aia/2023-04-07-rai-mission/index.md",title:"6. \ud83c\udfc1The Mission of Responsible AI",description:"Why you should care about Responsible AI and Microsoft role https://azureaidevs.github.io/hub/blog/2023-day6 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.845,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day6",title:"6. \ud83c\udfc1The Mission of Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Why you should care about Responsible AI and Microsoft role https://azureaidevs.github.io/hub/blog/2023-day6 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},prevItem:{title:"5. \ud83c\udfc1Learn key Azure ML Concepts",permalink:"/hub/blog/2023-day5"},nextItem:{title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",permalink:"/hub/blog/2023-day7"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>6</em> of #30DaysOfAzureAI",id:"day-6-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Why Responsible AI?",id:"why-responsible-ai",level:2},{value:"Today&#39;s reference article",id:"todays-reference-article",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day6"}),(0,i.kt)("meta",{property:"og:title",content:"The Mission of Responsible AI"}),(0,i.kt)("meta",{property:"og:description",content:"Why you should care about Responsible AI and Microsoft role https://azureaidevs.github.io/hub/blog/2023-day6 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://www.microsoft.com/en-us/ai/our-approach"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/6-the-mission-of-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-6-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"6")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why you should care about Responsible AI and Microsoft role")),(0,i.kt)("p",null,"Yesterday was an introduction to the Azure Machine Learning. Today is all about understanding why Microsoft is committed to Responsible AI, and why you should be as well. So, come along, you'll be happy you did."),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Microsoft invests in AI to benefit everyone in organizations, with a focus on responsible AI."),(0,i.kt)("li",{parentName:"ul"},"Microsoft Research focuses on developing large-scale, sophisticated, and intuitive AI models. "),(0,i.kt)("li",{parentName:"ul"},"Microsoft recognizes the importance of responsible AI.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 6",src:a(53707).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,i.kt)("h2",{id:"why-responsible-ai"},"Why Responsible AI?"),(0,i.kt)("p",null,"Microsoft is investing heavily in AI because it believes that it can benefit everyone at every level of every organization. However, Microsoft acknowledges the need for responsible AI by design, guided by a set of principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. Microsoft believes that proactive, self-regulatory efforts by responsible companies help pave the way for new laws to ensure that AI is developed and deployed responsibly. Microsoft also believes that democratic law-making processes are necessary to create principled and actionable norms that ensure organizations develop and deploy AI responsibly."),(0,i.kt)("p",null,"Microsoft Research has been advancing the foundations of computing for over 30 years, and its researchers collaborate across disciplines, institutions, and geographies to deliver cutting-edge AI advances. Recent efforts have focused on developing large-scale AI models that can process information in increasingly sophisticated ways while also becoming more natural and intuitive to use. Advances in deep learning, coupled with internet-scale datasets and Microsoft Azure's increasingly powerful AI supercomputing resources, have made it possible to create AI models that perform a broad range of tasks across many different applications."),(0,i.kt)("h2",{id:"todays-reference-article"},"Today's reference article"),(0,i.kt)("p",null,"Read today's ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/ai/our-approach"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-the-mission-of-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},53707:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day6-35ca83493f1bcd4070a47d5df4909763.png"}}]);