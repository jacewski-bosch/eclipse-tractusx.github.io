"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[12950],{21855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),o=a(26389),n=a(94891),r=(a(75190),a(47507)),p=a(24310),l=a(63303),d=(a(75035),a(85162));const c={id:"get-business-partners",title:"Fetch information about the latest OpenSearch export",description:"Fetch information about the latest export (either ongoing or already finished)",sidebar_label:"Fetch information about the latest OpenSearch export",hide_title:!0,hide_table_of_contents:!0,api:{tags:["open-search-controller"],description:"Fetch information about the latest export (either ongoing or already finished)",operationId:"getBusinessPartners",responses:{200:{description:"Export information found",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Fetching failed (no connection to database)"}},method:"get",path:"/api/opensearch/business-partner",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.1.0-SNAPSHOT"},postman:{name:"Fetch information about the latest OpenSearch export",description:{content:"Fetch information about the latest export (either ongoing or already finished)",type:"text/plain"},url:{path:["api","opensearch","business-partner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},m=void 0,h={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-business-partners",id:"version-23.12/kits/Business Partner Kit/Software Development View/Pool Api/get-business-partners",title:"Fetch information about the latest OpenSearch export",description:"Fetch information about the latest export (either ongoing or already finished)",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Business Partner Kit/Software Development View/Pool Api/get-business-partners.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-business-partners",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-business-partners",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"get-business-partners",title:"Fetch information about the latest OpenSearch export",description:"Fetch information about the latest export (either ongoing or already finished)",sidebar_label:"Fetch information about the latest OpenSearch export",hide_title:!0,hide_table_of_contents:!0,api:{tags:["open-search-controller"],description:"Fetch information about the latest export (either ongoing or already finished)",operationId:"getBusinessPartners",responses:{200:{description:"Export information found",content:{"application/json":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Fetching failed (no connection to database)"}},method:"get",path:"/api/opensearch/business-partner",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.1.0-SNAPSHOT"},postman:{name:"Fetch information about the latest OpenSearch export",description:{content:"Fetch information about the latest export (either ongoing or already finished)",type:"text/plain"},url:{path:["api","opensearch","business-partner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"open-search-controller",permalink:"/docs-kits/category/kits/Business Partner Kit/Software Development View/Pool Api/open-search-controller"},next:{title:"Index new business partner records on OpenSearch",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/export"}},u={},f=[{value:"Fetch information about the latest OpenSearch export",id:"fetch-information-about-the-latest-opensearch-export",level:2}],b={toc:f};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"fetch-information-about-the-latest-opensearch-export"},"Fetch information about the latest OpenSearch export"),(0,s.kt)("p",null,"Fetch information about the latest export (either ongoing or already finished)"),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Export information found")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OPENSEARCH`, `SAAS_IMPORT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_SYNCED`, `RUNNING`, `SUCCESS`, `ERROR`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"progress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"errorDetails",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"startedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"finishedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "type": "OPENSEARCH",\n  "status": "NOT_SYNCED",\n  "count": 0,\n  "progress": 0,\n  "errorDetails": "string",\n  "startedAt": "2023-11-02",\n  "finishedAt": "2023-11-02"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Fetching failed (no connection to database)")),(0,s.kt)("div",null)))))}g.isMDXComponent=!0}}]);