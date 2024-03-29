"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9562],{7858:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=t(4848),o=t(8453);const n={title:"Source",tags:["providers","data-transfer","experimental"]},a="Strapi Remote Source Provider",i={id:"docs/core/data-transfer/providers/remote-strapi/source",title:"Source",description:"The Strapi remote source provider connects to a remote Strapi websocket server and sends messages to move between stages and pull data.",source:"@site/docs/docs/01-core/data-transfer/02-providers/05-remote-strapi/02-source.md",sourceDirName:"docs/01-core/data-transfer/02-providers/05-remote-strapi",slug:"/docs/core/data-transfer/providers/remote-strapi/source",permalink:"/docs/core/data-transfer/providers/remote-strapi/source",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/data-transfer/02-providers/05-remote-strapi/02-source.md",tags:[{label:"providers",permalink:"/tags/providers"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"experimental",permalink:"/tags/experimental"}],version:"current",sidebarPosition:2,frontMatter:{title:"Source",tags:["providers","data-transfer","experimental"]},sidebar:"docs",previous:{title:"Websocket",permalink:"/docs/core/data-transfer/providers/remote-strapi/websocket"},next:{title:"Destination",permalink:"/docs/core/data-transfer/providers/remote-strapi/destination"}},c={},d=[{value:"Provider Options",id:"provider-options",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"strapi-remote-source-provider",children:"Strapi Remote Source Provider"}),"\n",(0,s.jsx)(r.p,{children:"The Strapi remote source provider connects to a remote Strapi websocket server and sends messages to move between stages and pull data."}),"\n",(0,s.jsx)(r.h2,{id:"provider-options",children:"Provider Options"}),"\n",(0,s.jsxs)(r.p,{children:["The remote source provider accepts ",(0,s.jsx)(r.code,{children:"url"}),", ",(0,s.jsx)(r.code,{children:"auth"}),", and ",(0,s.jsx)(r.code,{children:"retryMessageOptions"})," described below."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"interface ITransferTokenAuth {\n  type: 'token';\n  token: string;\n}\n\nexport interface IRemoteStrapiDestinationProviderOptions\n  extends Pick<ILocalStrapiDestinationProviderOptions, 'restore' | 'strategy'> {\n  url: URL;\n  auth?: ITransferTokenAuth;\n  retryMessageOptions?: {\n    retryMessageTimeout: number; // milliseconds to wait for a response from a message\n    retryMessageMaxRetries: number; // max number of retries for a message before aborting transfer\n  };\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Note: ",(0,s.jsx)(r.code,{children:"url"})," must include the protocol ",(0,s.jsx)(r.code,{children:"https"})," or ",(0,s.jsx)(r.code,{children:"http"})," which will then be converted to ",(0,s.jsx)(r.code,{children:"wss"})," or ",(0,s.jsx)(r.code,{children:"ws"})," to make the connection. A secure connection is strongly recommended, especially given the high access level that the transfer token provides."]})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var s=t(6540);const o={},n=s.createContext(o);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);