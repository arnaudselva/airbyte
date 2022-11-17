"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[41798],{81309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const l={},o="Deploy Airbyte on Plural",i={unversionedId:"deploying-airbyte/on-plural",id:"deploying-airbyte/on-plural",title:"Deploy Airbyte on Plural",description:"Overview",source:"@site/../docs/deploying-airbyte/on-plural.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-plural",permalink:"/deploying-airbyte/on-plural",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-plural.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Restack",permalink:"/deploying-airbyte/on-restack"},next:{title:"Deploy Airbyte on Oracle Cloud",permalink:"/deploying-airbyte/on-oci-vm"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installing Airbyte",id:"installing-airbyte",level:2},{value:"Adding the Plural Console",id:"adding-the-plural-console",level:2},{value:"Accessing your Airbyte Installation",id:"accessing-your-airbyte-installation",level:2},{value:"Accessing your Console Installation",id:"accessing-your-console-installation",level:2},{value:"Advanced Use Cases",id:"advanced-use-cases",level:2},{value:"Running with External Airflow",id:"running-with-external-airflow",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-airbyte-on-plural"},"Deploy Airbyte on Plural"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.plural.sh/"},"Plural")," is a free, open-source, unified application deployment platform that makes it easy to run open-source software on Kubernetes. It aims to make applications as portable as possible, without sacrificing the ability for the users to own the applications they desire to use."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you'd prefer to follow along with a video, check out the Plural Airbyte deployment guide video ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/suvTJyJ6PzI"},"here"))),(0,a.kt)("p",null,"First, create an account on ",(0,a.kt)("a",{parentName:"p",href:"https://app.plural.sh"},"https://app.plural.sh"),".  This is simply to track your installations and allow for the delivery of automated upgrades, you will not be asked to provide any infrastructure credentials or sensitive information."),(0,a.kt)("p",null,"Then, install the Plural CLI by following steps 1, 2, and 3 of the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.plural.sh/getting-started"},"here"),". Through this, you will also configure your cloud provider and the domain name under which your application will be deployed to."),(0,a.kt)("p",null,"We now need a Git repository to store your Plural configuration in. This will also contain the Helm and Terraform files that Plural will autogenerate for you."),(0,a.kt)("p",null,"You now have two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"plural init")," in any directory to let Plural initiate an OAuth workflow to create a Git repo for you."),(0,a.kt)("li",{parentName:"ul"},"Create a Git repo manually, clone it down and run ",(0,a.kt)("inlineCode",{parentName:"li"},"plural init")," inside it.")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"plural init")," will configure your installation and cloud provider for the repo. You're now ready to install Airbyte on your Plural repo!"),(0,a.kt)("h2",{id:"installing-airbyte"},"Installing Airbyte"),(0,a.kt)("p",null,"To install Airbyte on your Plural repo, simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle install airbyte $CONSOLE_BUNDLE_NAME\n")),(0,a.kt)("p",null,"To find the console bundle name for your cloud provider, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle list airbyte\n")),(0,a.kt)("p",null,"For example, this is what it looks like for AWS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle install airbyte airbyte-aws\n")),(0,a.kt)("p",null,"Plural's Airbyte distribution currently has support for AWS, GCP and Azure set up and ready to go, so feel free to pick whichever best fits your infrastructure."),(0,a.kt)("p",null,"The CLI will prompt you to choose whether or not you want to use Plural OIDC. ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC")," allows you to login to the applications you host on Plural with your login to ",(0,a.kt)("a",{parentName:"p",href:"https://app.plural.sh"},"app.plural.sh"),", acting as an SSO provider."),(0,a.kt)("p",null,"After this, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'plural build\nplural deploy --commit "deploying airbyte"\n')),(0,a.kt)("h2",{id:"adding-the-plural-console"},"Adding the Plural Console"),(0,a.kt)("p",null,"To make management of your installation as simple as possible, we recommend installing the Plural Console.  The console provides tools to manage resource scaling, receiving automated upgrades, dashboards tailored to your Airbyte installation, and log aggregation. This can be done using the exact same process as above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'plural bundle install console console-aws\nplural build\nplural deploy --commit "deploying the console too"\n')),(0,a.kt)("h2",{id:"accessing-your-airbyte-installation"},"Accessing your Airbyte Installation"),(0,a.kt)("p",null,"Now, just head over to ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte.SUBDOMAIN_NAME.onplural.sh")," to access the Airbyte UI."),(0,a.kt)("h2",{id:"accessing-your-console-installation"},"Accessing your Console Installation"),(0,a.kt)("p",null,"To monitor and manage your Airbyte installation, head over to the Plural Console at ",(0,a.kt)("inlineCode",{parentName:"p"},"console.YOUR_ORGANIZATION.onplural.sh")," (or whichever subdomain you chose)."),(0,a.kt)("h2",{id:"advanced-use-cases"},"Advanced Use Cases"),(0,a.kt)("h3",{id:"running-with-external-airflow"},"Running with External Airflow"),(0,a.kt)("p",null,"If you have an Airflow instance external to the Plural Kubernetes cluster with your Airbyte installation, you can still have Airflow manage the Airbyte installation. This happens because Basic Auth setup is required for external authentication - Plural OIDC is not sufficient here."),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"context.yaml")," file located at the root of your Plural installation, create a user with Basic Auth for Airbyte. Then on your Airbyte Airflow connector, use the following URL template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://username:password@airbytedomain\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you have any issues with installing Airbyte on Plural, feel free to join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/bEBAMXV64s"},"Discord Community")," and we can help you out."),(0,a.kt)("p",null,"If you'd like to request any new features for our Airbyte installation, feel free to open an issue or PR at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsh/plural-artifacts"},"https://github.com/pluralsh/plural-artifacts"),"."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"To learn more about what you can do with Plural and more advanced uses of the platform, feel free to dive deeper into our docs ",(0,a.kt)("a",{parentName:"p",href:"https://docs.plural.sh"},"here.")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,h=d["".concat(u,".").concat(y)]||d[y]||c[y]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);