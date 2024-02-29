"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),g=a,m=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},18685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},s="Upgrading Tractus-X EDC",o={unversionedId:"kits/tractusx-edc/docs/kit/operation-view/page09_upgrading",id:"version-23.12/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading",title:"Upgrading Tractus-X EDC",description:"Among the goals of Tractus-X EDC is making EDC upgrades as painless as possible.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading.md",sourceDirName:"kits/tractusx-edc/docs/kit/operation-view",slug:"/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Transfer Data",permalink:"/docs-kits/kits/tractusx-edc/docs/samples/Transfer Data"},next:{title:"Migration Version 0.0.x to 0.1.x",permalink:"/docs-kits/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x"}},c={},p=[{value:"Database Migration",id:"database-migration",level:2},{value:"Updating EDC",id:"updating-edc",level:2},{value:"Updating Settings",id:"updating-settings",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-tractus-x-edc"},"Upgrading Tractus-X EDC"),(0,a.kt)("p",null,"Among the goals of Tractus-X EDC is making EDC upgrades as painless as possible.\nThe changes in each release are documented ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/docs/migration"},"here"),".\nUsually there are only three steps to each upgrade."),(0,a.kt)("h2",{id:"database-migration"},"Database Migration"),(0,a.kt)("p",null,"Database migration is simple to accomplish with a PostgreSQL backend.\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/edc-extensions/postgresql-migration"},"PostgreSQL Migration Extension")," is the preferred approach.\nAlternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," files therein can be used to manually update the database schema."),(0,a.kt)("h2",{id:"updating-edc"},"Updating EDC"),(0,a.kt)("p",null,"The easy part of the upgrade process is to simply switch the outdated EDC containers with their newer counterparts."),(0,a.kt)("h2",{id:"updating-settings"},"Updating Settings"),(0,a.kt)("p",null,"Check the newest ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/develop/docs/migration"},"Migration Documents"),"\nfor any changes to the settings structure and apply them to your settings."))}l.isMDXComponent=!0}}]);