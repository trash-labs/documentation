(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),j=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,k=n("MfeC");function C(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},i)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),U=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,C=o.status,M=o.source,D=o.additionalContributors,P=void 0===D?[]:D,W=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:N}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=W?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(U,null,C||M?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(O.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),M?r.a.createElement(j.a,{href:M}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},xUME:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("h3",null,"Version"),Object(l.b)("p",null,"8.0.0"),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"npm is the package manager for the Node JavaScript platform.  It puts\nmodules in place so that node can find them, and manages dependency\nconflicts intelligently."),Object(l.b)("p",null,"It is extremely configurable to support a variety of use cases.  Most\ncommonly, you use it to publish, discover, install, and develop node\nprograms."),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm help")," to get a list of available commands."),Object(l.b)("h3",null,"Important"),Object(l.b)("p",null,"npm comes preconfigured to use npm's public registry at\n",Object(l.b)("a",{parentName:"p",href:"https://registry.npmjs.org"},"https://registry.npmjs.org")," by default. Use of the npm public registry is\nsubject to terms of use available at\n",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/policies/terms"},"https://docs.npmjs.com/policies/terms"),"."),Object(l.b)("p",null,"You can configure npm to use any compatible registry you like, and even\nrun your own registry. Use of someone else's registry is governed by\ntheir terms of use."),Object(l.b)("h3",null,"Introduction"),Object(l.b)("p",null,"You probably got npm because you want to install stuff."),Object(l.b)("p",null,"The very first thing you will most likely want to run in any node\nprogram is ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," to install its dependencies."),Object(l.b)("p",null,"You can also run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install blerg"),' to install the latest version of\n"blerg".  Check out ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-install"},Object(l.b)("inlineCode",{parentName:"a"},"npm install"))," for more\ninfo.  It can do a lot of stuff."),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"npm search")," command to show everything that's available in the\npublic registry.  Use ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls")," to show everything you've installed."),Object(l.b)("h3",null,"Dependencies"),Object(l.b)("p",null,"If a package lists a dependency using a git URL, npm will install that\ndependency using the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/git-guides/install-git"},Object(l.b)("inlineCode",{parentName:"a"},"git")),"\ncommand and will generate an error if it is not installed."),Object(l.b)("p",null,"If one of the packages npm tries to install is a native node module and\nrequires compiling of C++ Code, npm will use\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},"node-gyp")," for that task.\nFor a Unix system, ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},"node-gyp"),"\nneeds Python, make and a buildchain like GCC. On Windows,\nPython and Microsoft Visual Studio C++ are needed. For more information\nvisit ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},"the node-gyp repository")," and\nthe ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp/wiki"},"node-gyp Wiki"),"."),Object(l.b)("h3",null,"Directories"),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/folders"},Object(l.b)("inlineCode",{parentName:"a"},"folders"))," to learn about where npm puts\nstuff."),Object(l.b)("p",null,"In particular, npm has two modes of operation:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"local mode:\nnpm installs packages into the current project directory, which\ndefaults to the current working directory.  Packages install to\n",Object(l.b)("inlineCode",{parentName:"li"},"./node_modules"),", and bins to ",Object(l.b)("inlineCode",{parentName:"li"},"./node_modules/.bin"),"."),Object(l.b)("li",{parentName:"ul"},"global mode:\nnpm installs packages into the install prefix at\n",Object(l.b)("inlineCode",{parentName:"li"},"$npm_config_prefix/lib/node_modules")," and bins to\n",Object(l.b)("inlineCode",{parentName:"li"},"$npm_config_prefix/bin"),".")),Object(l.b)("p",null,"Local mode is the default.  Use ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," or ",Object(l.b)("inlineCode",{parentName:"p"},"--global")," on any command to\nrun in global mode instead."),Object(l.b)("h3",null,"Developer Usage"),Object(l.b)("p",null,"If you're using npm to develop and publish your code, check out the\nfollowing help topics:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"json:\nMake a package.json file.  See\n",Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},Object(l.b)("inlineCode",{parentName:"a"},"package.json")),"."),Object(l.b)("li",{parentName:"ul"},"link:\nLinks your current working code into Node's path, so that you don't\nhave to reinstall every time you make a change.  Use ",Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-link"},Object(l.b)("inlineCode",{parentName:"a"},"npm\nlink"))," to do this."),Object(l.b)("li",{parentName:"ul"},"install:\nIt's a good idea to install things if you don't need the symbolic\nlink.  Especially, installing other peoples code from the registry is\ndone via ",Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},Object(l.b)("inlineCode",{parentName:"a"},"npm install"))),Object(l.b)("li",{parentName:"ul"},"adduser:\nCreate an account or log in.  When you do this, npm will store\ncredentials in the user config file."),Object(l.b)("li",{parentName:"ul"},"publish:\nUse the ",Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},Object(l.b)("inlineCode",{parentName:"a"},"npm publish"))," command to upload your\ncode to the registry.")),Object(l.b)("h4",null,"Configuration"),Object(l.b)("p",null,"npm is extremely configurable.  It reads its configuration options from\n5 places."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Command line switches:\nSet a config with ",Object(l.b)("inlineCode",{parentName:"li"},"--key val"),".  All keys take a value, even if they\nare booleans (the config parser doesn't know what the options are at\nthe time of parsing).  If you do not provide a value (",Object(l.b)("inlineCode",{parentName:"li"},"--key"),") then\nthe option is set to boolean ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},"Environment Variables:\nSet any config by prefixing the name in an environment variable with\n",Object(l.b)("inlineCode",{parentName:"li"},"npm_config_"),".  For example, ",Object(l.b)("inlineCode",{parentName:"li"},"export npm_config_key=val"),"."),Object(l.b)("li",{parentName:"ul"},"User Configs:\nThe file at ",Object(l.b)("inlineCode",{parentName:"li"},"$HOME/.npmrc")," is an ini-formatted list of configs.  If\npresent, it is parsed.  If the ",Object(l.b)("inlineCode",{parentName:"li"},"userconfig")," option is set in the cli\nor env, that file will be used instead."),Object(l.b)("li",{parentName:"ul"},"Global Configs:\nThe file found at ",Object(l.b)("inlineCode",{parentName:"li"},"./etc/npmrc")," (relative to the global prefix will be\nparsed if it is found.  See ",Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-prefix"},Object(l.b)("inlineCode",{parentName:"a"},"npm prefix"))," for\nmore info on the global prefix.  If the ",Object(l.b)("inlineCode",{parentName:"li"},"globalconfig")," option is set\nin the cli, env, or user config, then that file is parsed instead."),Object(l.b)("li",{parentName:"ul"},"Defaults:\nnpm's default configuration options are defined in\nlib/utils/config-defs.js.  These must not be changed.")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config"},Object(l.b)("inlineCode",{parentName:"a"},"config"))," for much much more information."),Object(l.b)("h3",null,"Contributions"),Object(l.b)("p",null,"Patches welcome!"),Object(l.b)("p",null,"If you would like to help, but don't know what to work on, read the\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/npm/cli/blob/latest/CONTRIBUTING.md"},"contributing\nguidelines")," and\ncheck the issues list."),Object(l.b)("h3",null,"Bugs"),Object(l.b)("p",null,"When you find issues, please report them:\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/npm/cli/issues"},"https://github.com/npm/cli/issues")),Object(l.b)("p",null,"Please be sure to follow the template and bug reporting guidelines."),Object(l.b)("h3",null,"Feature Requests"),Object(l.b)("p",null,"Discuss new feature ideas on our discussion forum:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/npm/feedback"},"https://github.com/npm/feedback"))),Object(l.b)("p",null,"Or suggest formal RFC proposals:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/npm/rfcs"},"https://github.com/npm/rfcs"))),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-help"},"npm help")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-prefix"},"npm prefix")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-md-7d686c261f92566af5a6.js.map