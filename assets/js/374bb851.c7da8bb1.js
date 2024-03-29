"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[979],{7343:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var i=t(4848),n=t(8453),o=t(3514),r=t(1754);const c={title:"Introduction",slug:"/permissions",tags:["permissions","RBAC"]},a="Permissions (RBAC)",d={id:"docs/core/admin/permissions/intro",title:"Introduction",description:"This is not about the user-permissions plugin which is API orientated, this is about roles based access control commonly known as RBAC.",source:"@site/docs/docs/01-core/admin/02-permissions/00-intro.mdx",sourceDirName:"docs/01-core/admin/02-permissions",slug:"/permissions",permalink:"/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/02-permissions/00-intro.mdx",tags:[{label:"permissions",permalink:"/tags/permissions"},{label:"RBAC",permalink:"/tags/rbac"}],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",slug:"/permissions",tags:["permissions","RBAC"]},sidebar:"docs",previous:{title:"useLicenseLimits",permalink:"/docs/core/admin/ee/hooks/use-license-limits"},next:{title:"How Permissions Work",permalink:"/docs/core/admin/permissions/how-they-work"}},l={},m=[{value:"\u26a0\ufe0f To document \u26a0\ufe0f",id:"\ufe0f-to-document-\ufe0f",level:2}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"permissions-rbac",children:"Permissions (RBAC)"}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["This is not about the ",(0,i.jsx)(s.code,{children:"user-permissions"})," plugin which is API orientated, this is about roles based access control commonly known as RBAC."]})}),"\n",(0,i.jsx)(s.p,{children:"This section is an overview of all the features related to the Permissions core plugin:"}),"\n","\n","\n",(0,i.jsx)(o.A,{items:(0,r.$S)().items}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\ufe0f-to-document-\ufe0f",children:"\u26a0\ufe0f To document \u26a0\ufe0f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"RBAC in the settings page of the admin app"}),"\n",(0,i.jsx)(s.li,{children:"How RBAC works serverside"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,s,t)=>{t.d(s,{A:()=>g});t(6540);var i=t(8215),n=t(1754),o=t(8774),r=t(6654),c=t(1312),a=t(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=t(4848);function m(e){let{href:s,children:t}=e;return(0,l.jsx)(o.A,{href:s,className:(0,i.A)("card padding--lg",d.cardContainer),children:t})}function u(e){let{href:s,icon:t,title:n,description:o}=e;return(0,l.jsxs)(m,{href:s,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),o&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:s}=e;const t=(0,n.Nr)(s);return t?(0,l.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function p(e){let{item:s}=e;const t=(0,r.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(s.docId??void 0);return(0,l.jsx)(u,{href:s.href,icon:t,title:s.label,description:s.description??i?.description})}function f(e){let{item:s}=e;switch(s.type){case"link":return(0,l.jsx)(p,{item:s});case"category":return(0,l.jsx)(h,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function x(e){let{className:s}=e;const t=(0,n.$S)();return(0,l.jsx)(g,{items:t.items,className:s})}function g(e){const{items:s,className:t}=e;if(!s)return(0,l.jsx)(x,{...e});const o=(0,n.d1)(s);return(0,l.jsx)("section",{className:(0,i.A)("row",t),children:o.map(((e,s)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},s)))})}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var i=t(6540);const n={},o=i.createContext(n);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);