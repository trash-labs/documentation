(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),o=t("aOgs"),i=t("q1tI"),r=t.n(i),c=t("7ljp"),s=t("pD55"),p=t("8Aig"),d=t("ReZb"),m=t("GCVy"),u=t("+6vE");var b=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},f=t("gnlW"),g=t("mwnC"),y=t("/Rw0"),O=t("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var n=e.items,t=e.depth;return r.a.createElement(j,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:t+1}):null)})))}w.defaultProps={depth:0};var k=w,v=t("MfeC");function N(e){var n=v.a.getPath(e.location.pathname),t=v.a.getVariantAndPage(e.root,n);if(!t)return null;var a=v.a.getVariantsForPage(e.root,t.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},o)))}N.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=N,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),q=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,i=t.frontmatter,j=i.title,w=i.description,N=i.status,D=i.source,T=i.additionalContributors,W=void 0===T?[]:T,z=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:m.a,Prompt:b,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:j,description:w}),r.a.createElement(p.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),w))),null!=z?r.a.createElement(I,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:t.tableOfContents.items})):null,r.a.createElement(q,null,N||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},N?r.a.createElement(O.a,{status:N}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(y.a,{href:D}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},zZ56:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),o=t("O6H6"),i={},r={_frontmatter:i},c=o.a;function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm query <selector>\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"npm query")," command allows for usage of css selectors in order to retrieve\nan array of dependency objects."),Object(l.b)("h3",null,"Piping npm query to other commands"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# find all dependencies with postinstall scripts & uninstall them\nnpm query ":attr(scripts, [postinstall])" | jq \'map(.name)|join("\\n")\' -r | xargs -I {} npm uninstall {}\n\n# find all git dependencies & explain who requires them\nnpm query ":type(git)" | jq \'map(.name)\' | xargs -I {} npm why {}\n')),Object(l.b)("h3",null,"Extended Use Cases & Queries"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-stylus"},'// all deps\n*\n\n// all direct deps\n:root > *\n\n// direct production deps\n:root > .prod\n\n// direct development deps\n:root > .dev\n\n// any peer dep of a direct deps\n:root > * > .peer\n\n// any workspace dep\n.workspace\n\n// all workspaces that depend on another workspace\n.workspace > .workspace\n\n// all workspaces that have peer deps\n.workspace:has(.peer)\n\n// any dep named "lodash"\n// equivalent to [name="lodash"]\n#lodash\n\n// any deps named "lodash" & within semver range ^"1.2.3"\n#lodash@^1.2.3\n// equivalent to...\n[name="lodash"]:semver(^1.2.3)\n\n// get the hoisted node for a given semver range\n#lodash@^1.2.3:not(:deduped)\n\n// querying deps with a specific version\n#lodash@2.1.5\n// equivalent to...\n[name="lodash"][version="2.1.5"]\n\n// has any deps\n:has(*)\n\n// deps with no other deps (ie. "leaf" nodes)\n:empty\n\n// manually querying git dependencies\n[repository^=github:],\n[repository^=git:],\n[repository^=https://github.com],\n[repository^=http://github.com],\n[repository^=https://github.com],\n[repository^=+git:...]\n\n// querying for all git dependencies\n:type(git)\n\n// get production dependencies that aren\'t also dev deps\n.prod:not(.dev)\n\n// get dependencies with specific licenses\n[license=MIT], [license=ISC]\n\n// find all packages that have @ruyadorno as a contributor\n:attr(contributors, [email=ruyadorno@github.com])\n')),Object(l.b)("h3",null,"Example Response Output"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"an array of dependency objects is returned which can contain multiple copies of the same package which may or may not have been linked or deduped")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "",\n    "version": "",\n    "description": "",\n    "homepage": "",\n    "bugs": {},\n    "author": {},\n    "license": {},\n    "funding": {},\n    "files": [],\n    "main": "",\n    "browser": "",\n    "bin": {},\n    "man": [],\n    "directories": {},\n    "repository": {},\n    "scripts": {},\n    "config": {},\n    "dependencies": {},\n    "devDependencies": {},\n    "optionalDependencies": {},\n    "bundledDependencies": {},\n    "peerDependencies": {},\n    "peerDependenciesMeta": {},\n    "engines": {},\n    "os": [],\n    "cpu": [],\n    "workspaces": {},\n    "keywords": [],\n    ...\n  },\n  ...\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h2",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/dependency-selectors"},"dependency selectors"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-query-md-e7c630393eb270788390.js.map