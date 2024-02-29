"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[39172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"TRG 6.01 - Released Helm Chart"},l=void 0,o={unversionedId:"release/trg-6/trg-6-1",id:"release/trg-6/trg-6-1",title:"TRG 6.01 - Released Helm Chart",description:"| Status | Created     | Post-History    |",source:"@site/docs/release/trg-6/trg-6-1.md",sourceDirName:"release/trg-6",slug:"/release/trg-6/trg-6-1",permalink:"/docs/release/trg-6/trg-6-1",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-6/trg-6-1.md",tags:[],version:"current",frontMatter:{title:"TRG 6.01 - Released Helm Chart"},sidebar:"docs",previous:{title:"TRG 5.11 - Upgradeability",permalink:"/docs/release/trg-5/trg-5-11"},next:{title:"TRG 7.00 - Recurring activities for each PR",permalink:"/docs/release/trg-7/trg-7-00"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Why",id:"why",level:2},{value:"Process description",id:"process-description",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Don&#39;ts",id:"donts",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"01-Dec-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A released Helm chart for each Tractus-X sub-product is expected to be available in corresponding GitHub repository."),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Tractus-X components can only be used and bundled with other components of Tractus-X if there is a version of the\ncomponent with reliable content. This can only be achieved by creating a release of your Helm chart. We recommend to use\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/helm-chart-releaser"},"GitHub Chart Releaser Action"),"."),(0,a.kt)("h3",{id:"process-description"},"Process description"),(0,a.kt)("p",null,"If you follow this recommendation to use GitHub Chart Releaser Action to provide a released Helm Chart for your\nTractus-X sub-product, the process will provide the following for you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A GiHub Release is created with",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a GitHub release, named ",(0,a.kt)("em",{parentName:"li"},"Chartname-Semver")," (e.g. ",(0,a.kt)("em",{parentName:"li"},"productABC-0.1.1"),")"),(0,a.kt)("li",{parentName:"ul"},"a Git tag ",(0,a.kt)("em",{parentName:"li"},"Chartname-Semver")),(0,a.kt)("li",{parentName:"ul"},"a release asset, containing the Helm chart files"))),(0,a.kt)("li",{parentName:"ol"},"A local Helm repository is created (file ",(0,a.kt)("inlineCode",{parentName:"li"},"index.yaml")," in branch ",(0,a.kt)("em",{parentName:"li"},"gh-pages"),")")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Only if you follow this TRG to release a Helm Chart, the released Helm chart will be automatically added to\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/charts/"},"central Tractus-X Helm repository"),".")),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To get the GitHub Chart Releaser Action working, the following prerequisites must be met:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A branch named ",(0,a.kt)("inlineCode",{parentName:"li"},"gh-pages")," in your repository"),(0,a.kt)("li",{parentName:"ul"},"Helm charts must be located in folder ",(0,a.kt)("inlineCode",{parentName:"li"},"/charts")),(0,a.kt)("li",{parentName:"ul"},"A GitHub Actions Workflow (see section ",(0,a.kt)("a",{parentName:"li",href:"#implementation"},"Implementaion"),")")),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Create a GitHub Workflow file with following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Release - Helm Charts\n\non:\n  push:\n    paths:\n      - \'charts/**\'\n    branches:\n      - main\njobs:\n  release:\n    # depending on default permission settings for your org (contents being read-only or read-write for workloads), you will have to add permissions\n    # see: https://docs.github.com/en/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token\n    permissions:\n      contents: write\n    runs-on: ubuntu-latest\n\n    steps:\n      # fetch-depth: 0 is required to determine differences in chart(s)\n      - name: Checkout\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n\n      - name: Configure Git\n        run: |\n          git config user.name "$GITHUB_ACTOR"\n          git config user.email "$GITHUB_ACTOR@users.noreply.github.com"\n\n      - name: Install Helm\n        uses: azure/setup-helm@v3\n        with:\n          token: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Run chart-releaser\n        uses: helm/chart-releaser-action@v1.4.1\n        env:\n          CR_TOKEN: "${{ secrets.GITHUB_TOKEN }}"\n')),(0,a.kt)("p",null,"Each time a changed Helm Chart is pushed (e.g. merge a PR) to ",(0,a.kt)("em",{parentName:"p"},"main")," branch, the workflow will be triggered."),(0,a.kt)("h3",{id:"donts"},"Don'ts"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Changing the ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")," requires also changing the ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart.yaml")),(0,a.kt)("li",{parentName:"ul"},"Chart ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," itself can be increased without changing the ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")))),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"appVersion")," is increased, also the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," must be increased, otherwise the workflow will\nfail:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chart Releaser Action - Tag error",src:r(41202).Z,width:"2526",height:"1406"})),(0,a.kt)("p",null,"The Helm chart name and version is used for creating the Git Tag. As the Helm chart version did not increase, the\nworkflow tries to create a Git tag which already exists."))}u.isMDXComponent=!0},41202:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/trg-6-1_chart_release_action_tag-error-7fa1d16e631704844e383203bf0f008a.png"}}]);