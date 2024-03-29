"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[243],{7851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=t(4848),c=t(8453);const a={title:"Watch",tags:["pack-up","CLI"]},i=void 0,o={id:"docs/utils/pack-up/commands/watch",title:"Watch",description:"Usage",source:"@site/docs/docs/05-utils/pack-up/01-commands/04-watch.mdx",sourceDirName:"docs/05-utils/pack-up/01-commands",slug:"/docs/utils/pack-up/commands/watch",permalink:"/docs/utils/pack-up/commands/watch",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/05-utils/pack-up/01-commands/04-watch.mdx",tags:[{label:"pack-up",permalink:"/tags/pack-up"},{label:"CLI",permalink:"/tags/cli"}],version:"current",sidebarPosition:4,frontMatter:{title:"Watch",tags:["pack-up","CLI"]},sidebar:"docs",previous:{title:"Check",permalink:"/docs/utils/pack-up/commands/check"},next:{title:"Configuration",permalink:"/docs/utils/pack-up/config"}},r={},p=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Typescript",id:"typescript",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ yarn pack-up watch\n"})}),"\n",(0,s.jsx)(n.p,{children:"Watches your current package for changes and rebuilds when necessary."}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { watch } from '@strapi/pack-up';\n\nwatch();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface WatchOptions {\n  configFile: false;\n  config?: Config;\n  cwd?: string;\n  debug?: boolean;\n  silent?: boolean;\n}\n\ntype Watch = (options?: WatchOptions) => Promise<void>;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const c={},a=s.createContext(c);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);