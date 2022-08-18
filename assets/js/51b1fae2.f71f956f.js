"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Getting Started",l={unversionedId:"connector-development/config-based/tutorial/getting-started",id:"connector-development/config-based/tutorial/getting-started",title:"Getting Started",description:"This framework is in alpha stage. Support is not in production and is available only to select users.",source:"@site/../docs/connector-development/config-based/tutorial/0-getting-started.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/getting-started",permalink:"/connector-development/config-based/tutorial/getting-started",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/0-getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{}},c={},s=[{value:"Summary",id:"summary",level:2},{value:"Exchange Rates API Setup",id:"exchange-rates-api-setup",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"\u26a0\ufe0f This framework is in alpha stage. Support is not in production and is available only to select users. \u26a0\ufe0f"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Throughout this tutorial, we'll walk you through the creation an Airbyte source to read and extract data from an HTTP API."),(0,r.kt)("p",null,"We'll build a connector reading data from the Exchange Rates API, but the steps will apply to other HTTP APIs you might be interested in integrating with."),(0,r.kt)("p",null,"The API documentations can be found ",(0,r.kt)("a",{parentName:"p",href:"https://apilayer.com/marketplace/exchangerates_data-api"},"here"),".\nIn this tutorial, we will read data from the following endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Latest Rates Endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Historical Rates Endpoint"))),(0,r.kt)("p",null,"With the end goal of implementing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," containing exchange rates going from a base currency to many other currencies.\nThe output schema of our stream will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "base": "USD",\n  "date": "2022-07-15",\n  "rates": {\n    "CAD": 1.28,\n    "EUR": 0.98\n  }\n}\n')),(0,r.kt)("h2",{id:"exchange-rates-api-setup"},"Exchange Rates API Setup"),(0,r.kt)("p",null,"Before we can get started, you'll need to generate an API access key for the Exchange Rates API.\nThis can be done by signing up for the Free tier plan on ",(0,r.kt)("a",{parentName:"p",href:"https://exchangeratesapi.io/"},"Exchange Rates API"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://exchangeratesapi.io"},"https://exchangeratesapi.io"),' and click "Get free API key" on the top right'),(0,r.kt)("li",{parentName:"ol"},"You'll be taken to ",(0,r.kt)("a",{parentName:"li",href:"https://apilayer.com"},"https://apilayer.com")," -- finish the sign up process, signing up for the free tier"),(0,r.kt)("li",{parentName:"ol"},"Once you're signed in, visit ",(0,r.kt)("a",{parentName:"li",href:"https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab"},"https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab"),' and click "Live Demo"'),(0,r.kt)("li",{parentName:"ol"},"Inside that editor, you'll see an API key. This is your API key.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Exchange Rates API key"),(0,r.kt)("li",{parentName:"ul"},"Python >= 3.9"),(0,r.kt)("li",{parentName:"ul"},"Docker must be running"),(0,r.kt)("li",{parentName:"ul"},"NodeJS")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Next, we'll ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/create-source"},"create a Source using the connector generator.")))}u.isMDXComponent=!0}}]);