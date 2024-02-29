"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[98197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a="Creating a Policy Definition",l={unversionedId:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions",id:"version-23.12/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions",title:"Creating a Policy Definition",description:"Old plain JSON Schema",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/3-policy-definitions.md",sourceDirName:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough",slug:"/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions",permalink:"/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions",draft:!1,tags:[],version:"23.12",sidebarPosition:3,frontMatter:{},sidebar:"kits",previous:{title:"Creating an Asset",permalink:"/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets"},next:{title:"Creating a Contract Definition",permalink:"/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions"}},s={},p=[{value:"Old plain JSON Schema",id:"old-plain-json-schema",level:2},{value:"New JSON-LD Document",id:"new-json-ld-document",level:2},{value:"Request",id:"request",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-policy-definition"},"Creating a Policy Definition"),(0,o.kt)("h2",{id:"old-plain-json-schema"},"Old plain JSON Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "<POLICY-DEFINITION-ID>",\n  "policy": {\n    "permissions": [\n      {\n        "action": {\n          "type": "USE"\n        },\n        "constraints": [\n          {\n            "leftExpression": {\n              "value": "<LEFT-EXPRESSION-VALUE>"\n            },\n            "rightExpression": {\n              "value": "<RIGHT-EXPRESSION-VALUE>"\n            },\n            "operator": "<OPERATOR>"\n          }\n        ]\n      }\n    ],\n    "prohibition": [],\n    "obligation": []\n  }\n}\n')),(0,o.kt)("h2",{id:"new-json-ld-document"},"New JSON-LD Document"),(0,o.kt)("p",null,"Policy model is now pure ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/odrl-model/"},"ODRL (Open Digital Rights Language)")," and going through it would help get a more complete picture."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: In our samples, except from ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl")," vocabulary terms that must override ",(0,o.kt)("inlineCode",{parentName:"p"},"edc")," default prefixing, properties ",(0,o.kt)("strong",{parentName:"p"},"WILL NOT")," be explicitly namespaced, and internal nodes ",(0,o.kt)("strong",{parentName:"p"},"WILL NOT")," be typed, relying on ",(0,o.kt)("inlineCode",{parentName:"p"},"@vocab")," prefixing and root schema type inheritance respectively.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type":"PolicyDefinition",\n  "@id": "<POLICY-DEFINITION-ID>",\n  "policy": {\n    "odrl:permission": [\n      {\n        "odrl:action": "USE",\n        "odrl:constraint": [\n          {\n            "odrl:leftOperand": "<LEFT-OPERAND>",\n            "odrl:operator": "<OPERATOR>",\n            "odrl:rightOperand":  "<RIGHT-OPERAND>"\n          }]\n      }\n    ],\n    "odrl:prohibition": [],\n    "odrl:obligation": []\n  }\n}\n')),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"In this case we generate a very simple policy definition, that only contains the minimum in terms of information.\nA Policy MUST have at least one permission, prohibition, or obligation property value of type Rule and in our case it will hold a permission defining our well-known ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartnerNumber")," validation ",(0,o.kt)("inlineCode",{parentName:"p"},"Constraint"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${MANAGEMENT_URL}/v2/policydefinitions" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n              "@context": {\n                "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n                "odrl": "http://www.w3.org/ns/odrl/2/"\n              },\n              "@type":"PolicyDefinition",\n              "@id": "policy-definition-id",\n              "policy": {\n                "odrl:permission": [\n                  {\n                    "odrl:action": "USE",\n                    "odrl:constraint": [\n                      {\n                        "odrl:leftOperand": "BusinessPartnerNumber",\n                        "odrl:operator": "eq",\n                        "odrl:rightOperand":  "BPN"\n                      }]\n                  }\n                ],\n                "odrl:prohibition": [],\n                "odrl:obligation": []\n              }\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')))}d.isMDXComponent=!0}}]);