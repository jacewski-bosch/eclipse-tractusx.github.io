"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[11038],{89899:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var a=i(87462),n=(i(67294),i(3905)),o=i(26389),s=i(94891),l=i(75190),c=i(47507),r=i(24310),d=i(63303),p=(i(75035),i(85162));const m={id:"delete-contract-definition",title:"deleteContractDefinition",description:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"deleteContractDefinition",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteContractDefinition",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"Contract definition was deleted successfully"},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"A contract definition with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"delete",path:"/v2/contractdefinitions/{id}",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"delete Contract Definition",description:{content:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["v2","contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},u=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition",title:"deleteContractDefinition",description:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"delete-contract-definition",title:"deleteContractDefinition",description:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"deleteContractDefinition",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteContractDefinition",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"Contract definition was deleted successfully"},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"A contract definition with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"delete",path:"/v2/contractdefinitions/{id}",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"delete Contract Definition",description:{content:"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["v2","contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"declineNegotiation",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation"},next:{title:"deleteEdr",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-edr"}},v={},f=[{value:"deleteContractDefinition",id:"deletecontractdefinition",level:2}],y={toc:f};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"deletecontractdefinition"},"deleteContractDefinition"),(0,n.kt)("p",null,"Removes a contract definition with the given ID if possible. DANGER ZONE: Note that deleting contract definitions can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Contract definition was deleted successfully")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed, e.g. id was null")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A contract definition with the given ID does not exist")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);