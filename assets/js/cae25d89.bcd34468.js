"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[10485],{87191:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const i={},l="Pinterest",o={unversionedId:"integrations/sources/pinterest",id:"integrations/sources/pinterest",title:"Pinterest",description:"This page contains the setup guide and reference information for the Pinterest source connector.",source:"@site/../docs/integrations/sources/pinterest.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/pinterest",permalink:"/integrations/sources/pinterest",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/pinterest.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PersistIq",permalink:"/integrations/sources/persistiq"},next:{title:"Pipedrive",permalink:"/integrations/sources/pipedrive"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Rate Limits",id:"rate-limits",level:5},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pinterest"},"Pinterest"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Pinterest source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To set up the Pinterest source connector with Airbyte Open Source, you'll need your Pinterest ",(0,n.kt)("a",{parentName:"p",href:"https://developers.pinterest.com/docs/getting-started/set-up-app/"},"App ID and secret key")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.pinterest.com/docs/getting-started/authentication/#Refreshing%20an%20access%20token"},"refresh token"),"."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Pinterest")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Pinterest connector."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data. As per Pinterest API restriction, the date cannot be more than 914 days in the past."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"OAuth2.0")," authorization method is selected by default. Click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Pinterest account"),". Log in and authorize your Pinterest account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Pinterest")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Pinterest connector."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data. As per Pinterest API restriction, the date cannot be more than 914 days in the past."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"OAuth2.0")," authorization method is selected by default. For ",(0,n.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,n.kt)("strong",{parentName:"li"},"Client Secret"),", enter your Pinterest ",(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/getting-started/set-up-app/"},"App ID and secret key"),". For ",(0,n.kt)("strong",{parentName:"li"},"Refresh Token"),", enter your Pinterest ",(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/getting-started/authentication/#Refreshing%20an%20access%20token"},"Refresh Token"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Pinterest source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/user_account/analytics"},"Account analytics")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/boards/list"},"Boards")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/board_sections/list"},"Board sections")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/board_sections/list_pins"},"Pins on board section")," ","(","Full table",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/boards/list_pins"},"Pins on board")," ","(","Full table",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_accounts/list"},"Ad accounts")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_account/analytics"},"Ad account analytics")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/campaigns/list"},"Campaigns")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/campaigns/list"},"Campaign analytics")," ","(","Incremental",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/list"},"Ad groups")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/analytics"},"Ad group analytics")," ","(","Incremental",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ads/list"},"Ads")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ads/analytics"},"Ad analytics")," ","(","Incremental",")")))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by the Pinterest ",(0,n.kt)("a",{parentName:"p",href:"https://developers.pinterest.com/docs/api/v5/#tag/Rate-limits"},"requests limitation"),"."),(0,n.kt)("h5",{id:"rate-limits"},"Rate Limits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Analytics streams: 300 calls per day / per user \\"),(0,n.kt)("li",{parentName:"ul"},"Ad accounts streams (Campaigns, Ad groups, Ads): 1000 calls per min / per user / per app \\"),(0,n.kt)("li",{parentName:"ul"},"Boards streams: 10 calls per sec / per user / per app")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15074"},"15074")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added filter based on statuses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18285"},"18285")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix type of ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17387"},"17387")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," dynamically based on API restrictions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use CDK 0.1.89")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16799"},"16799")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16161"},"16161")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ability to handle ",(0,n.kt)("inlineCode",{parentName:"td"},"429 - Too Many Requests")," error with respect to ",(0,n.kt)("inlineCode",{parentName:"td"},"Max Rate Limit Exceeded Error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16271"},"16271")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10223"},"10223")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix naming of ",(0,n.kt)("inlineCode",{parentName:"td"},"AD_ID")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"AD_ACCOUNT_ID")," fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9043"},"9043")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7493"},"7493")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Release Pinterest CDK Connector")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);