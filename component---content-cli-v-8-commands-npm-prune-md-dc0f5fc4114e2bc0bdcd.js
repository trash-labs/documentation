(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),b=n("8Aig"),s=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},O=n("gnlW"),j=n("mwnC"),f=n("/Rw0"),N=n("dVM4"),g=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(g,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var w=y,C=n("MfeC");function k(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,g=o.title,y=o.description,k=o.status,S=o.source,W=o.additionalContributors,B=void 0===W?[]:W,V=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:g,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},g),y))),null!=V?r.a.createElement(I,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:V,location:a})):null),n.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(D,null,k||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(N.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(f.a,{href:S}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},RIvQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm prune [[<@scope>/]<pkg>...]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,'This command removes "extraneous" packages.  If a package name is provided,\nthen only packages matching one of the supplied names are removed.'),Object(l.b)("p",null,"Extraneous packages are those present in the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder that are\nnot listed as any package's dependency list."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--production")," flag is specified or the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable is set to ",Object(l.b)("inlineCode",{parentName:"p"},"production"),", this command will remove the packages\nspecified in your ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),". Setting ",Object(l.b)("inlineCode",{parentName:"p"},"--no-production")," will negate\n",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," being set to ",Object(l.b)("inlineCode",{parentName:"p"},"production"),"."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run")," flag is used then no changes will actually be made."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--json")," flag is used, then the changes ",Object(l.b)("inlineCode",{parentName:"p"},"npm prune")," made (or would\nhave made with ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run"),") are printed as a JSON object."),Object(l.b)("p",null,"In normal operation, extraneous modules are pruned automatically, so you'll\nonly need this command with the ",Object(l.b)("inlineCode",{parentName:"p"},"--production"),' flag.  However, in the real\nworld, operation is not always "normal".  When crashes or mistakes happen,\nthis command can help clean up any resulting garbage.'),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Run all build scripts (ie, ",Object(l.b)("inlineCode",{parentName:"p"},"preinstall"),", ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"postinstall"),")\nscripts for installed packages in the foreground process, sharing standard\ninput, output, and error with the main npm process."),Object(l.b)("p",null,"Note that this will generally make installs run slower, and be much noisier,\nbut can be useful for debugging."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"install-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When set file: protocol dependencies that exist outside of the project root\nwill be packed and installed as regular dependencies instead of creating a\nsymlink. This option has no effect on workspaces."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-uninstall"},"npm uninstall")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-ls"},"npm ls"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-prune-md-dc0f5fc4114e2bc0bdcd.js.map