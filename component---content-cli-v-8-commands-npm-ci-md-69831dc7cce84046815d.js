(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),d=t("GCVy"),m=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var j=function(e){var n=e.children;return r.a.createElement("strong",null,n)},h=t("gnlW"),O=t("mwnC"),f=t("/Rw0"),N=t("dVM4"),g=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var n=e.items,t=e.depth;return r.a.createElement(g,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:t+1}):null)})))}y.defaultProps={depth:0};var C=y,k=t("MfeC");function w(e){var n=k.a.getPath(e.location.pathname),t=k.a.getVariantAndPage(e.root,n);if(!t)return null;var a=k.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=w,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),D=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,g=o.title,y=o.description,w=o.status,B=o.source,S=o.additionalContributors,W=void 0===S?[]:S,z=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:u,PromptReply:j,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:g,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(T,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},g),y))),null!=z?r.a.createElement(_,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?r.a.createElement(D,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:t.tableOfContents.items})):null,r.a.createElement(I,null,w||B?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(N.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),B?r.a.createElement(f.a,{href:B}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(C,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(m.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},"Ta+b":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm ci\n\naliases: clean-install, ic, install-clean, isntall-clean\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command is similar to ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-install"},Object(l.b)("inlineCode",{parentName:"a"},"npm install")),", except\nit's meant to be used in automated environments such as test platforms,\ncontinuous integration, and deployment -- or any situation where you want\nto make sure you're doing a clean install of your dependencies."),Object(l.b)("p",null,"The main differences between using ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The project ",Object(l.b)("strong",{parentName:"li"},"must")," have an existing ",Object(l.b)("inlineCode",{parentName:"li"},"package-lock.json")," or\n",Object(l.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json"),"."),Object(l.b)("li",{parentName:"ul"},"If dependencies in the package lock do not match those in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),",\n",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," will exit with an error, instead of updating the package lock."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," can only install entire projects at a time: individual\ndependencies cannot be added with this command."),Object(l.b)("li",{parentName:"ul"},"If a ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," is already present, it will be automatically removed\nbefore ",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," begins its install."),Object(l.b)("li",{parentName:"ul"},"It will never write to ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," or any of the package-locks:\ninstalls are essentially frozen.")),Object(l.b)("p",null,"NOTE: If you create your ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," file by running ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nwith flags that can affect the shape of your dependency tree, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," or ",Object(l.b)("inlineCode",{parentName:"p"},"--install-links"),", you ",Object(l.b)("em",{parentName:"p"},"must")," provide the same\nflags to ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," or you are likely to encounter errors. An easy way to do\nthis is to run, for example,\n",Object(l.b)("inlineCode",{parentName:"p"},"npm config set legacy-peer-deps=true --location=project")," and commit the\n",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," file to your repo."),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"Make sure you have a package-lock and an up-to-date install:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ cd ./my/npm/project\n$ npm install\nadded 154 packages in 10s\n$ ls | grep package-lock\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," in that project"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm ci\nadded 154 packages in 5s\n")),Object(l.b)("p",null,"Configure Travis CI to build using ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# .travis.yml\ninstall:\n- npm ci\n# keep the npm cache around to speed up installs\ncache:\n  directories:\n  - "$HOME/.npm"\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true")," unless when using ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," where it defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Save installed packages to a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file as dependencies."),Object(l.b)("p",null,"When used with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm rm")," command, removes the dependency from\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"Will also prevent writing to ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save-exact")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Dependencies saved to package.json will be configured with an exact version\nrather than using npm's default semver range operator."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global-style")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package into your local ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder with\nthe same layout it uses with the global ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder. Only your\ndirect dependencies will show in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," and everything they depend\non will be flattened in their ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders. This obviously will\neliminate some deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),", ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),"\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"legacy-bundling")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package such that versions of npm prior to 1.4,\nsuch as the one included with node 0.8, can install the package. This\neliminates all automatic deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"global-style")," this option\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"strict-peer-deps")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," is not set, then ",Object(l.b)("em",{parentName:"p"},"any"),"\nconflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," will be treated as an install failure, even\nif npm could reasonably guess the appropriate resolution based on non-peer\ndependency relationships."),Object(l.b)("p",null,"By default, conflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," deep in the dependency graph will\nbe resolved using the nearest non-peer dependency specification, even if\ndoing so will result in some packages receiving a peer dependency outside\nthe range set in their package's ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," object."),Object(l.b)("p",null,"When such and override is performed, a warning is printed, explaining the\nconflict and the packages involved. If ",Object(l.b)("inlineCode",{parentName:"p"},"--strict-peer-deps")," is set, then\nthis warning is treated as a failure."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"package-lock")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to false, then ignore ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files when installing. This\nwill also prevent ",Object(l.b)("em",{parentName:"p"},"writing")," ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if ",Object(l.b)("inlineCode",{parentName:"p"},"save")," is true."),Object(l.b)("p",null,"This configuration does not affect ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Run all build scripts (ie, ",Object(l.b)("inlineCode",{parentName:"p"},"preinstall"),", ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"postinstall"),")\nscripts for installed packages in the foreground process, sharing standard\ninput, output, and error with the main npm process."),Object(l.b)("p",null,"Note that this will generally make installs run slower, and be much noisier,\nbut can be useful for debugging."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" submit audit reports alongside the current npm command to the\ndefault registry and all registries configured for scopes. See the\ndocumentation for ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-audit"},Object(l.b)("inlineCode",{parentName:"a"},"npm audit"))," for details on what is\nsubmitted."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"bin-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Tells npm to create symlinks (or ",Object(l.b)("inlineCode",{parentName:"p"},".cmd")," shims on Windows) for package\nexecutables."),Object(l.b)("p",null,"Set to false to have it not do this. This can be used to work around the\nfact that some file systems don't support symlinks, even on ostensibly Unix\nsystems."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"fund")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" displays the message at the end of each ',Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nacknowledging the number of dependencies looking for funding. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-fund"},Object(l.b)("inlineCode",{parentName:"a"},"npm\nfund"))," for details."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"install-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When set file: protocol dependencies that exist outside of the project root\nwill be packed and installed as regular dependencies instead of creating a\nsymlink. This option has no effect on workspaces."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-lock-json"},"package-lock.json"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-ci-md-69831dc7cce84046815d.js.map