"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63262],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=o.createContext({}),p=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),k=n,g=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return a?o.createElement(g,i(i({ref:e},c),{},{components:a})):o.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},44237:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1,title:"2. Add Custom Code"},i=void 0,l={unversionedId:"prodev-4/step-2",id:"prodev-4/step-2",title:"2. Add Custom Code",description:"Working as part of the PrioritZ fusion team you will be configuring a custom connector for an existing API.  The team would like to add badging to the PrioritZ application to give credit to users when they have completed ranking an item.  The team identified an existing API, but it doesn't have a Power Platform connector.",source:"@site/docs/prodev-4/step-2.md",sourceDirName:"prodev-4",slug:"/prodev-4/step-2",permalink:"/hubv2/docs/prodev-4/step-2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"2. Add Custom Code"},sidebar:"tutorialSidebar",previous:{title:"1. Build Custom Connector",permalink:"/hubv2/docs/prodev-4/step-1"},next:{title:"3. Use Custom Connector",permalink:"/hubv2/docs/prodev-4/step-3"}},s={},p=[{value:"2.1 Add code from resource folder",id:"21-add-code-from-resource-folder",level:2},{value:"2.2 Update Connector",id:"22-update-connector",level:2},{value:"2.3 Test custom code",id:"23-test-custom-code",level:2}],c={toc:p};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Working as part of the PrioritZ fusion team you will be configuring a custom connector for an existing API.  The team would like to add badging to the PrioritZ application to give credit to users when they have completed ranking an item.  The team identified an existing API, but it doesn't have a Power Platform connector.  "),(0,n.kt)("p",{parentName:"admonition"},"When you review the API, you see that it has four operations and uses API key authentication."),(0,n.kt)("p",{parentName:"admonition"},"In ",(0,n.kt)("strong",{parentName:"p"},"Exercise 2")," you will add a new operation to only return the current badge name and image URL.  You will do this by using the custom code feature to reshape the response from the API.")),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you already have the custom connector open, skip to step 4")),(0,n.kt)("h2",{id:"21-add-code-from-resource-folder"},"2.1 Add code from resource folder"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/ai-april/workshop/powerautomate"},(0,n.kt)("strong",{parentName:"a"},"Power Automate"))," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expand ",(0,n.kt)("strong",{parentName:"p"},"Data")," and select ",(0,n.kt)("strong",{parentName:"p"},"Custom connectors"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button of the custom connector you created."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(18779).Z,width:"940",height:"212"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select the Definition tab and click ",(0,n.kt)("strong",{parentName:"li"},"New action"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(50647).Z,width:"822",height:"339"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Get current badge")," for Summary, ",(0,n.kt)("strong",{parentName:"li"},"Get current badge")," for Description, and ",(0,n.kt)("strong",{parentName:"li"},"getcurrentbadge")," for Operation ID.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(33648).Z,width:"795",height:"361"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Request")," section and click ",(0,n.kt)("strong",{parentName:"li"},"+ Import from sample"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(26695).Z,width:"706",height:"241"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Get")," for Verb, enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://contosobadgestest.azurewebsites.net/getcurrentbadge?id={id}")," for URL, and click Import.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(39569).Z,width:"532",height:"478"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Update connector")," and wait for the connector to be updated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Code")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable ",(0,n.kt)("strong",{parentName:"p"},"Code")," and click ",(0,n.kt)("strong",{parentName:"p"},"Upload"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(24361).Z,width:"866",height:"347"})),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab03/CustomConnectorCode.csx"},(0,n.kt)("strong",{parentName:"a"},"CustomConnectorCode.csx"))," file located in the lab resources folder and click Open.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"getcurrentbadge")," action."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(40150).Z,width:"818",height:"418"})),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Review the code you just added.")),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Update connector")," and wait for the connector to be updated.")),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Advance to ",(0,n.kt)("strong",{parentName:"li"},"Test"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"getcurrentbadge")," action."),(0,n.kt)("li",{parentName:"ol"},"Provide your email address as id and click ",(0,n.kt)("strong",{parentName:"li"},"Test operation"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(23119).Z,width:"859",height:"262"})),(0,n.kt)("admonition",{title:"Note ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The test should succeed, and you should get current badge for the user you created."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Lab-03 Image",src:a(77406).Z,width:"881",height:"483"}))),(0,n.kt)("h2",{id:"22-update-connector"},"2.2 Update Connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the Response ",(0,n.kt)("strong",{parentName:"p"},"Body")," JSON.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Definition")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"getcurrentbadge")," action."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(18151).Z,width:"517",height:"184"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Response")," section and click ",(0,n.kt)("strong",{parentName:"li"},"+ Add default response"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(20760).Z,width:"940",height:"271"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Paste the JSON you copied in the ",(0,n.kt)("strong",{parentName:"li"},"Body")," and click ",(0,n.kt)("strong",{parentName:"li"},"Import"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(10112).Z,width:"623",height:"405"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Update connector")," and wait for the connector to be updated.")),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Do not navigate away from this page.")),(0,n.kt)("h2",{id:"23-test-custom-code"},"2.3 Test custom code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Test")," tab."),(0,n.kt)("li",{parentName:"ol"},"Select the connection you created earlier."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Operations")," section and select the ",(0,n.kt)("strong",{parentName:"li"},"getcurrentbadge")," operation."),(0,n.kt)("li",{parentName:"ol"},"Provide your email as ",(0,n.kt)("strong",{parentName:"li"},"id")," and click ",(0,n.kt)("strong",{parentName:"li"},"Test operation"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lab-03 Image",src:a(22922).Z,width:"731",height:"203"})),(0,n.kt)("admonition",{title:"Note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The operation should succeed, and the response ",(0,n.kt)("strong",{parentName:"p"},"Body")," should look like the image below."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Lab-03 Image",src:a(97699).Z,width:"810",height:"468"}))))}d.isMDXComponent=!0},18779:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-21-873d36d6e1b5caf484a54f38c7016409.jpg"},50647:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-22-90893bff8f3a367e7ec31e725e6cef20.jpg"},33648:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-23-c97fd210b746a7149d3bda67f029065f.jpg"},26695:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-24-65fa51b70a54c662f1525a69d5eadc94.jpg"},39569:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-25-f90ed2fa21078cf9e11241a5fa67b4f8.jpg"},24361:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-26-5394afc426330b20b6620db61ca564cc.jpg"},40150:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-27-8fd08b815dbf9de40e31efa72e172ce7.jpg"},23119:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-28-e0d779112228e8f90bb75408f76014be.jpg"},77406:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-29-db37de566da492938e13276ff28a77ee.jpg"},18151:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-30-edf1da4d9c1698c3d99dcc6f62846471.jpg"},20760:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-31-1458e56bf6f6822ffa937227c577ecd7.jpg"},10112:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-32-6cb42b125ab858a32bd402c9424840cf.jpg"},22922:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-33-e014df158bc3c8c027f664455e715de7.jpg"},97699:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lab03-34-9c6729faeb718cf73c41eeadc7dd1f27.jpg"}}]);