"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6718],{9289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(4848),i=t(8453);const o={title:"Relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",tags:["content-manager","relations","redux-store"]},r=void 0,s={id:"docs/core/content-manager/relations",title:"Relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",source:"@site/docs/docs/01-core/content-manager/01-relations.mdx",sourceDirName:"docs/01-core/content-manager",slug:"/docs/core/content-manager/relations",permalink:"/docs/core/content-manager/relations",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-manager/01-relations.mdx",tags:[{label:"content-manager",permalink:"/tags/content-manager"},{label:"relations",permalink:"/tags/relations"},{label:"redux-store",permalink:"/tags/redux-store"}],version:"current",sidebarPosition:1,frontMatter:{title:"Relations",description:"Conceptual guide to relations in the Content Manager focussing on the technical decisions taken.",tags:["content-manager","relations","redux-store"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/content-manager/intro"},next:{title:"Review Workflows",permalink:"/docs/core/content-manager/review-workflows"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Data management in frontend",id:"data-management-in-frontend",level:2},{value:"Preparing relation fields in the store",id:"preparing-relation-fields-in-the-store",level:3},{value:"Handling updates to relation fields",id:"handling-updates-to-relation-fields",level:3},{value:"Cleaning data to be posted to the API",id:"cleaning-data-to-be-posted-to-the-api",level:3},{value:"Frontend component architecture",id:"frontend-component-architecture",level:2},{value:"<code>RelationInputDataManager</code>",id:"relationinputdatamanager",level:3},{value:"<code>RelationInput</code>",id:"relationinput",level:3},{value:"useRelation() hook",id:"userelation-hook",level:2},{value:"<code>Options</code>",id:"options",level:3},{value:"Return values",id:"return-values",level:3},{value:"<code>relations</code>",id:"relations",level:4},{value:"<code>search</code>",id:"search",level:4},{value:"<code>searchFor(string)</code>",id:"searchforstring",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"Relations are a term used to describe how two or more entities are connected. Previously in the sidebar of an entity,\nin Nov2020 we released a refactor that moved these fields into the main editing flow for a better editor experience\nand to improve performance of the CMS application when many relations were used."}),"\n",(0,a.jsx)("img",{src:"/img/content-manager/relations/component-example.png",alt:"An example of the relations input in the CMS edit view"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"above: An example of the relations input in the CMS edit view"})}),"\n",(0,a.jsx)(n.h2,{id:"data-management-in-frontend",children:"Data management in frontend"}),"\n",(0,a.jsx)("img",{src:"/img/content-manager/relations/relations-statemanagemen-diagram.png",alt:"a diagram overview explaining how state management works in relations"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"above: A high-level diagram of how relations state management works"})}),"\n",(0,a.jsx)(n.h3,{id:"preparing-relation-fields-in-the-store",children:"Preparing relation fields in the store"}),"\n",(0,a.jsxs)(n.p,{children:["When you first open an existing entity, we call the admin API and put the data into the store to pre-populate fields\nwith existing values. However, its important to know when you have fields with ",(0,a.jsx)(n.code,{children:"type === 'relation'"})," in your schema\nthat the data you receive will not be an array, but rather an object with the count of how many relations in that\nfield exist. For example, a section of the response may look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "my_relations": {\n    "count": 6\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["So without intervention, your inputs would try to append new relations to the ",(0,a.jsx)(n.code,{children:"my_relations"})," object, which would not\nwork. Instead of this, before calling the redux action ",(0,a.jsx)(n.code,{children:"INIT_FORM"})," we recursively find the paths fields based on the\nfollowing conditions:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The field is a relation"}),"\n",(0,a.jsx)(n.li,{children:"The field is a component"}),"\n",(0,a.jsx)(n.li,{children:"The field is a repeatable component"}),"\n",(0,a.jsx)(n.li,{children:"The field is a dynamic zone"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["These paths ",(0,a.jsx)(n.em,{children:"do not"})," take into account index values. So if you have a repetable component field where the schema looks like:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "repeatable_single_component_relation": {\n    "type": "component",\n    "repeatable": true,\n    "component": "basic.relation"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"and the components looks like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "basic.relation": {\n    "attributes": {\n      "id": {\n        "type": "integer"\n      },\n      "categories": {\n        "type": "relation",\n        "relation": "oneToMany",\n        "target": "api::category.category",\n        "targetModel": "api::category.category",\n        "relationType": "oneToMany"\n      },\n      "my_name": {\n        "type": "string"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then the path to the relation field would be ",(0,a.jsx)(n.code,{children:"repeatable_single_component_relation.categories"}),". Even though when\nrelations are added the path to the field in the redux store would be ",(0,a.jsx)(n.code,{children:"repeatable_single_component_relation.0.categories"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Inside the reducer we reduce the array of ",(0,a.jsx)(n.code,{children:"relationalFieldPaths"})," to an object with the ",(0,a.jsx)(n.code,{children:"initialValues"})," clone as\nas the base. If there is ",(0,a.jsx)(n.code,{children:"modifiedData"})," in the browser i.e. you've made changes to the entity and saved those changes,\nwe just replace the first level of the field with the ",(0,a.jsx)(n.code,{children:"modifiedData"})," so the data structure is preserved and we're not\nloosing the relations we had already loaded in the component. If the first part of the path is highlighted as the\n",(0,a.jsx)(n.code,{children:"relationalField"})," then we simply replace that intial object with an empty array."]}),"\n",(0,a.jsxs)(n.p,{children:["However, if the first part of the path is either a repeatable component, a dynamic zone or a regular component then we\nrecursively find the relation fields and replace the object with an array. This is handled by the ",(0,a.jsx)(n.code,{children:"findLeafByPathAndReplace"}),"\nutility function. This function in short, takes an end path (in this case the relational field) and a primitive to replace\nwhen it finds the endpath (an empty array in this case). It then recursively reduces the paths to the relational field mapping\nthrough arrays if necessary (in the instance of repetable components for example) replacing the endpath with the primitive."]}),"\n",(0,a.jsx)(n.p,{children:"When this is done, we have sucessfully prepared our initial data for usage with relations."}),"\n",(0,a.jsx)(n.h3,{id:"handling-updates-to-relation-fields",children:"Handling updates to relation fields"}),"\n",(0,a.jsxs)(n.p,{children:["Because we've prepared the fields prior to the component loading, adding & removing relations, it's relatively easy to do so.\nWhen a relation is added, we simply push the new relation to the array of relations. When a relation is removed, we simply\nfilter out the relation from the array of relations. This is handled inside the reducer actions ",(0,a.jsx)(n.code,{children:"CONNECT_RELATION"})," &\n",(0,a.jsx)(n.code,{children:"DISCONNECT_RELATION"})," respectively."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Connecting relations adds the item to the end of the list, whilst loading more relations prepends to\nthe beginning of the list. This is the expected behaviour, to keep the order of the list in the UI in sync with the API response."})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"RelationInput"})," component takes the field in ",(0,a.jsx)(n.code,{children:"modifiedData"})," as its source of truth. You could therefore consider this to\nbe the ",(0,a.jsx)(n.code,{children:"browserState"})," and ",(0,a.jsx)(n.code,{children:"initialData"})," to be the ",(0,a.jsx)(n.code,{children:"serverState"}),". When relations are loaded they're added to both the ",(0,a.jsx)(n.code,{children:"intialData"}),"\nand ",(0,a.jsx)(n.code,{children:"modifiedData"})," objects, but when you connect/disconnect only the ",(0,a.jsx)(n.code,{children:"modifiedData"})," is updated. This is useful when we're preparing\ndata for the api."]}),"\n",(0,a.jsx)(n.h3,{id:"cleaning-data-to-be-posted-to-the-api",children:"Cleaning data to be posted to the API"}),"\n",(0,a.jsxs)(n.p,{children:["The API to update the entity expects relations to be categorised into two groups, a ",(0,a.jsx)(n.code,{children:"connect"})," array and ",(0,a.jsx)(n.code,{children:"disconnect"})," array.\nYou could do this as the user interacts with the input but we found this to be confusing and then involved us managing three\ndifferent arrays which makes the code more complex. Instead, because the browser doesn't really care about whats new and removed\nand we have a copy of the slice of data we're mutating from the server we can run a small diff algorithm to determine which\nrelations have been connected and which have been disconnected. Returning an object like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "my_relations": {\n    "connect": [{ "id": 1 }, { "id": 2 }],\n    "disconnect": []\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"frontend-component-architecture",children:"Frontend component architecture"}),"\n",(0,a.jsx)(n.p,{children:"The input field for relation fields consist of two components:"}),"\n",(0,a.jsx)(n.h3,{id:"relationinputdatamanager",children:(0,a.jsx)(n.code,{children:"RelationInputDataManager"})}),"\n",(0,a.jsxs)(n.p,{children:["This container component handles data fetching and data normalization for the ",(0,a.jsx)(n.code,{children:"RelationInput"})," component. This has been extracted from\nthe ",(0,a.jsx)(n.code,{children:"RelationInput"})," so that Strapi is able to move the underlying component into the design-system if the community would need it\n(most other input components can be consumed from there)."]}),"\n",(0,a.jsx)(n.h3,{id:"relationinput",children:(0,a.jsx)(n.code,{children:"RelationInput"})}),"\n",(0,a.jsxs)(n.p,{children:["This component is the presentational counterpart to the ",(0,a.jsx)(n.code,{children:"RelationInputDataManager"})," component. It renders an input field based on the data passed from the data manager."]}),"\n",(0,a.jsxs)(n.p,{children:["Under the hood it is using ",(0,a.jsx)(n.code,{children:"react-window"})," to render a list of relations in a virtualized view. Some fields need to render thousands of relations, which\nwould otherwise have a negative impact on the overall performance of the content-manager."]}),"\n",(0,a.jsx)(n.h2,{id:"userelation-hook",children:"useRelation() hook"}),"\n",(0,a.jsx)(n.p,{children:"This hook takes care of data-fetching and normalizes results relations aswell as search-results."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const { relations: RelationResults, search: RelationResults, searchFor } = useRelation(reactQueryCacheKey: Array<string | object>, options: Options);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"options",children:(0,a.jsx)(n.code,{children:"Options"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"option"}),"s is a mandatory configuration and should implement the following shape:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  name: string; // name of the relation field\n  relation: RelationConfiguration;\n  search: SearchConfiguration;\n}\n\ntype RelationConfiguration = {\n  endpoint: string;   // URL from where existing relations should be fetched\n  enabled: boolean;   // defines whether relations should be fetched once the hook is called\n  pageParams: object; // additional query params which will be appended to `endpoint`\n  onLoad: (results: RelationResult[]) => void;  // callback that will be fired after relations have been fetched (paginated)\n  normalizeArguments = {\n    mainFieldName: string;  // name of the target model main field, determining which field to display (fallback: id)\n    shouldAddLink: boolean; // if the user is allowed to read the target model, the returned relations should include a link to the target\n    targetModel: object;    // target content-type model\n  };\n  pageGoal: number; // the current page-count of the already loaded relations used to keep the redux store and query cache in sync.\n}\n\ntype SearchConfiguration = {\n  endpoint: string;   // URL from where new relations should be fetched\n  pageParams: object; // additional query params which will be appended to `endpoint`\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"return-values",children:"Return values"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"relations"})," and ",(0,a.jsx)(n.code,{children:"search"})," both return a consistent relation format:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type RelationResults = RelationResult[];\n\ntype RelationResult = {\n  id: number;\n  href?: string; // based on `shouldAddLink` and the `targetModel`\n  publicationState: 'draft' | 'published';\n  mainField: string; // will fallback to \"id\" if not set\n};\n"})}),"\n",(0,a.jsx)(n.h4,{id:"relations",children:(0,a.jsx)(n.code,{children:"relations"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"relations"})," refers to a ",(0,a.jsx)(n.a,{href:"https://tanstack.com/query/v4/docs/react/guides/infinite-queries",children:"inifinite-query return type"})," from react-query. It exposes paginated relational data\naswell as methods to check if there are more pages or fetch more paginated results. Relations for a given field are fetched as soon as the hook is called."]}),"\n",(0,a.jsx)(n.h4,{id:"search",children:(0,a.jsx)(n.code,{children:"search"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"search"})," refers to a ",(0,a.jsx)(n.a,{href:"https://tanstack.com/query/v4/docs/react/guides/infinite-queries",children:"inifinite-query return type"})," from react-query. It exposes paginated search results\nfor a relational field. Search results are only fetched after ",(0,a.jsx)(n.code,{children:"searchFor()"})," has been called."]}),"\n",(0,a.jsx)(n.h4,{id:"searchforstring",children:(0,a.jsx)(n.code,{children:"searchFor(string)"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"searchFor"})," is a method which can be used to search for entities which haven't been connected with the source entity yet. The method accepts a search-term: ",(0,a.jsx)(n.code,{children:'searchFor("term")'}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(6540);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);