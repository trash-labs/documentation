(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{"+iuS":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},c={_frontmatter:o},r=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(r,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm publish <package-spec>\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Publishes a package to the registry so that it can be installed by name."),Object(l.b)("p",null,"By default npm will publish to the public registry. This can be\noverridden by specifying a different default registry or using a\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope"))," in the name, combined with a\nscope-configured registry (see\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json"},Object(l.b)("inlineCode",{parentName:"a"},"package.json")),")."),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"package")," is interpreted the same way as other commands (like\n",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and can be:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a) a folder containing a program described by a\n",Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},Object(l.b)("inlineCode",{parentName:"a"},"package.json"))," file"),Object(l.b)("li",{parentName:"ul"},"b) a gzipped tarball containing (a)"),Object(l.b)("li",{parentName:"ul"},"c) a url that resolves to (b)"),Object(l.b)("li",{parentName:"ul"},"d) a ",Object(l.b)("inlineCode",{parentName:"li"},"<name>@<version>")," that is published on the registry (see\n",Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},Object(l.b)("inlineCode",{parentName:"a"},"registry")),") with (c)"),Object(l.b)("li",{parentName:"ul"},"e) a ",Object(l.b)("inlineCode",{parentName:"li"},"<name>@<tag>")," (see ",Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-dist-tag"},Object(l.b)("inlineCode",{parentName:"a"},"npm dist-tag")),") that\npoints to (d)"),Object(l.b)("li",{parentName:"ul"},"f) a ",Object(l.b)("inlineCode",{parentName:"li"},"<name>"),' that has a "latest" tag satisfying (e)'),Object(l.b)("li",{parentName:"ul"},"g) a ",Object(l.b)("inlineCode",{parentName:"li"},"<git remote url>")," that resolves to (a)")),Object(l.b)("p",null,"The publish will fail if the package name and version combination already\nexists in the specified registry."),Object(l.b)("p",null,"Once a package is published with a given name and version, that specific\nname and version combination can never be used again, even if it is removed\nwith ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-unpublish"},Object(l.b)("inlineCode",{parentName:"a"},"npm unpublish")),"."),Object(l.b)("p",null,"As of ",Object(l.b)("inlineCode",{parentName:"p"},"npm@5"),", both a sha1sum and an integrity field with a sha512sum of the\ntarball will be submitted to the registry during publication. Subsequent\ninstalls will use the strongest supported algorithm to verify downloads."),Object(l.b)("p",null,"Similar to ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run")," see ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-pack"},Object(l.b)("inlineCode",{parentName:"a"},"npm pack")),", which figures\nout the files to be included and packs them into a tarball to be uploaded\nto the registry."),Object(l.b)("h3",null,"Files included in package"),Object(l.b)("p",null,"To see what will be included in your package, run ",Object(l.b)("inlineCode",{parentName:"p"},"npx npm-packlist"),".  All\nfiles are included by default, with the following exceptions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Certain files that are relevant to package installation and distribution\nare always included.  For example, ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"README.md"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"LICENSE"),", and so on.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'If there is a "files" list in\n',Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json"},Object(l.b)("inlineCode",{parentName:"a"},"package.json")),", then only the files\nspecified will be included.  (If directories are specified, then they\nwill be walked recursively and their contents included, subject to the\nsame ignore rules.)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If there is a ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," or ",Object(l.b)("inlineCode",{parentName:"p"},".npmignore")," file, then ignored files in\nthat and all child directories will be excluded from the package.  If\n",Object(l.b)("em",{parentName:"p"},"both")," files exist, then the ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," is ignored, and only the\n",Object(l.b)("inlineCode",{parentName:"p"},".npmignore")," is used."),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},".npmignore")," files follow the ",Object(l.b)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring"},"same pattern\nrules"),"\nas ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," files")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If the file matches certain patterns, then it will ",Object(l.b)("em",{parentName:"p"},"never")," be included,\nunless explicitly added to the ",Object(l.b)("inlineCode",{parentName:"p"},'"files"')," list in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", or\nun-ignored with a ",Object(l.b)("inlineCode",{parentName:"p"},"!")," rule in a ",Object(l.b)("inlineCode",{parentName:"p"},".npmignore")," or ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," file.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Symbolic links are never included in npm packages."))),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/developers"},Object(l.b)("inlineCode",{parentName:"a"},"developers"))," for full details on what's\nincluded in the published package, as well as details on how the package is\nbuilt."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"tag")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "latest"'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"If you ask npm to install a package and don't tell it a specific version,\nthen it will install the specified tag."),Object(l.b)("p",null,"Also the tag that is added to the package@version specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"npm tag"),"\ncommand, if no explicit tag is given."),Object(l.b)("p",null,"When used by the ",Object(l.b)("inlineCode",{parentName:"p"},"npm diff")," command, this is the tag used to fetch the\ntarball that will be compared with the local files by default."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"access")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'restricted' for scoped packages, 'public' for unscoped packages"),Object(l.b)("li",{parentName:"ul"},'Type: null, "restricted", or "public"')),Object(l.b)("p",null,"When publishing scoped packages, the access level defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"restricted"),".\nIf you want your scoped package to be publicly viewable (and installable)\nset ",Object(l.b)("inlineCode",{parentName:"p"},"--access=public"),". The only valid values for ",Object(l.b)("inlineCode",{parentName:"p"},"access")," are ",Object(l.b)("inlineCode",{parentName:"p"},"public")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"restricted"),". Unscoped packages ",Object(l.b)("em",{parentName:"p"},"always")," have an access level of ",Object(l.b)("inlineCode",{parentName:"p"},"public"),"."),Object(l.b)("p",null,"Note: Using the ",Object(l.b)("inlineCode",{parentName:"p"},"--access")," flag on the ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," command will only set\nthe package access level on the initial publish of the package. Any\nsubsequent ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," commands using the ",Object(l.b)("inlineCode",{parentName:"p"},"--access")," flag will not have an\neffect to the access level. To make changes to the access level after the\ninitial publish use ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"otp")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/package-spec"},"package spec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://npm.im/npm-packlist"},"npm-packlist package")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/scope"},"npm scope")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm adduser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-deprecate"},"npm deprecate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-dist-tag"},"npm dist-tag")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-pack"},"npm pack")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-profile"},"npm profile"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),c=n.n(o),r=n("7ljp"),p=n("pD55"),b=n("8Aig"),s=n("ReZb"),m=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return c.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return c.a.createElement("strong",null,t)},O=n("gnlW"),j=n("mwnC"),f=n("/Rw0"),g=n("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return c.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var w=y,k=n("MfeC");function C(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(c.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(l.i,{overlay:e.overlay},c.a.createElement(l.i.Button,null,o.variant.title),c.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},i)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,C=o.status,D=o.source,W=o.additionalContributors,A=void 0===W?[]:W,B=k.a.getVariantRoot(a.pathname);return c.a.createElement(r.a,{components:{Index:s.a,Note:m.a,Prompt:u,PromptReply:h,Screenshot:O.a}},c.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:N,description:y}),c.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),c.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.e,{display:["none",null,null,"block"]},c.a.createElement(j.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(l.e,null,c.a.createElement(l.e,null,c.a.createElement(l.m,{as:"h1"},N),y))),null!=B?c.a.createElement(I,null,c.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},c.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(w,{items:n.tableOfContents.items})):null,c.a.createElement(T,null,C||D?c.a.createElement(l.k,{mb:3,alignItems:"center"},C?c.a.createElement(g.a,{status:C}):null,c.a.createElement(l.e,{mx:"auto"}),D?c.a.createElement(f.a,{href:D}):null):null,n.tableOfContents.items?c.a.createElement(l.e,{display:["block",null,"none"],mb:3},c.a.createElement(l.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(l.r,{icon:i.b,mr:2}):c.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),c.a.createElement(l.e,{pt:1},c.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-publish-md-b761eed1d93f8896707d.js.map