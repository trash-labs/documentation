(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var w=E,k=n("MfeC");function v(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},o)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=v,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,E=r.description,v=r.status,z=r.source,H=r.additionalContributors,P=void 0===H?[]:H,T=k.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:f.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:y,description:E}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},y),E))),null!=T?i.a.createElement(S,null,i.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(W,null,v||z?i.a.createElement(l.k,{mb:3,alignItems:"center"},v?i.a.createElement(j.a,{status:v}):null,i.a.createElement(l.e,{mx:"auto"}),z?i.a.createElement(g.a,{href:z}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},akU8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},i={_frontmatter:r},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("p",null,"An npm command that lets you create a task in the ",Object(l.b)("inlineCode",{parentName:"p"},"scripts")," section of the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm set-script [<script>] [<command>]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'npm set-script start "http-server ."'))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-project",\n  "scripts": {\n    "start": "http-server .",\n    "test": "some existing value"\n  }\n}\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nnested workspaces)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Enable running a command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," the configured\nworkspaces."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-run-script"},"npm run-script")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-test"},"npm test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-start"},"npm start"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-set-script-md-9f38da40b6a7ef79977b.js.map