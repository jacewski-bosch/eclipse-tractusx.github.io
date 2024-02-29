"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(r),y=a,f=s["".concat(l,".").concat(y)]||s[y]||u[y]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},39613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i="DataPlane Proxy Provider API",p={unversionedId:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README",id:"version-23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README",title:"DataPlane Proxy Provider API",description:"This extension provide additional dataplane extension for proxying requests to backends.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api",slug:"/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/",permalink:"/docs-kits/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"DataPlane Proxy Consumer API",permalink:"/docs-kits/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-consumer-api/"},next:{title:"DataPlane Proxy Provider Core",permalink:"/docs-kits/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/"}},l={},d=[{value:"Configuration",id:"configuration",level:2}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataplane-proxy-provider-api"},"DataPlane Proxy Provider API"),(0,a.kt)("p",null,"This extension provide additional dataplane extension for proxying requests to backends.\nThe configuration of the proxy can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/"},"here")),(0,a.kt)("p",null,"The provider proxy is mounted into the EDC default context, and it's available in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"<defaultContext>/gateway")),(0,a.kt)("p",null,"The proxy will look for subPath in the request and match the subpath with the configured ones and forward\nthe rest of the path and query parameters."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"with this URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8181/api/gateway/aas/test")," it will look for the ",(0,a.kt)("inlineCode",{parentName:"p"},"aas")," alias in the configuration,\nand it will compose the final url to call based on that configuration appending to it the remaining part of the path and query\nparameters."),(0,a.kt)("p",null,"When the proxy receive a request, it must contain the EDR, which will be decoded with the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," validation endpoint."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tx.dpf.provider.proxy.thread.pool"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"10")))))}s.isMDXComponent=!0}}]);