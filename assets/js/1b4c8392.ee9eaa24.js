"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[21806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},17991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Prepare the infrastructure",sidebar_position:1},o=void 0,s={unversionedId:"tutorials/e2e/connect/prepareInfrastructure",id:"tutorials/e2e/connect/prepareInfrastructure",title:"Prepare the infrastructure",description:"Prerequisites",source:"@site/docs/tutorials/e2e/connect/prepareInfrastructure.md",sourceDirName:"tutorials/e2e/connect",slug:"/tutorials/e2e/connect/prepareInfrastructure",permalink:"/docs/tutorials/e2e/connect/prepareInfrastructure",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/connect/prepareInfrastructure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prepare the infrastructure",sidebar_position:1},sidebar:"tutorials",previous:{title:"Chapter 2: Connect",permalink:"/docs/tutorials/e2e/connect/"},next:{title:"Deploy components",permalink:"/docs/tutorials/e2e/connect/deployComponents"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Notice",id:"notice",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to run the MXD on your local machine, please make sure the following\npreconditions are met."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Have a local Kubernetes runtime ready. We've tested this setup with ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"KinD"),", but other\nruntimes such as ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," may work as well, we just haven't tested them. All following instructions will assume KinD."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli"},"Terraform"),"."),(0,a.kt)("li",{parentName:"ul"},"a POSIX-compliant shell, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"bash")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"zsh")," unless stated otherwise"),(0,a.kt)("li",{parentName:"ul"},"basic knowledge about Helm and Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," a cli tool to easily print logs of a K8S deployment, such as ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stern/stern"},(0,a.kt)("inlineCode",{parentName:"a"},"stern"))),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," a graphical tool to inspect your Kubernetes environment, such as ",(0,a.kt)("a",{parentName:"li",href:"https://k8slens.dev/"},"Lens"),".\nNot mandatory of course, but all screenshots in this doc are created off of Lens."),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," a graphical tool to inspect Postgres databases, such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/"},"PgAdmin"),". Screenshots in\nthis guide are created off of PgAdmin."),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," a graphical tool to send REST requests, such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),". This sample will\ninclude Postman collections that can be imported.")),(0,a.kt)("h2",{id:"notice"},"Notice"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,a.kt)("li",{parentName:"ul"},"Source URL: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}p.isMDXComponent=!0}}]);