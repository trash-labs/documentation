(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{DQCB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},b=l.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(b,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"So, you've decided to use npm to develop (and maybe publish/deploy)\nyour project."),Object(i.b)("p",null,"Fantastic!"),Object(i.b)("p",null,"There are a few things that you need to do above the simple steps\nthat your users will do to install your program."),Object(i.b)("h3",null,"About These Documents"),Object(i.b)("p",null,"These are man pages.  If you install npm, you should be able to\nthen do ",Object(i.b)("inlineCode",{parentName:"p"},"man npm-thing")," to get the documentation on a particular\ntopic, or ",Object(i.b)("inlineCode",{parentName:"p"},"npm help thing")," to see the same information."),Object(i.b)("h3",null,"What is a Package"),Object(i.b)("p",null,"A package is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a) a folder containing a program described by a package.json file"),Object(i.b)("li",{parentName:"ul"},"b) a gzipped tarball containing (a)"),Object(i.b)("li",{parentName:"ul"},"c) a url that resolves to (b)"),Object(i.b)("li",{parentName:"ul"},"d) a ",Object(i.b)("inlineCode",{parentName:"li"},"<name>@<version>")," that is published on the registry with (c)"),Object(i.b)("li",{parentName:"ul"},"e) a ",Object(i.b)("inlineCode",{parentName:"li"},"<name>@<tag>")," that points to (d)"),Object(i.b)("li",{parentName:"ul"},"f) a ",Object(i.b)("inlineCode",{parentName:"li"},"<name>"),' that has a "latest" tag satisfying (e)'),Object(i.b)("li",{parentName:"ul"},"g) a ",Object(i.b)("inlineCode",{parentName:"li"},"git")," url that, when cloned, results in (a).")),Object(i.b)("p",null,"Even if you never publish your package, you can still get a lot of\nbenefits of using npm if you just want to write a node program (a), and\nperhaps if you also want to be able to easily install it elsewhere\nafter packing it up into a tarball (b)."),Object(i.b)("p",null,"Git urls can be of the form:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git://github.com/user/project.git#commit-ish\ngit+ssh://user@hostname:project.git#commit-ish\ngit+http://user@hostname/project/blah.git#commit-ish\ngit+https://user@hostname/project/blah.git#commit-ish\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"commit-ish")," can be any tag, sha, or branch which can be supplied as\nan argument to ",Object(i.b)("inlineCode",{parentName:"p"},"git checkout"),".  The default is whatever the repository uses\nas its default branch."),Object(i.b)("h3",null,"The package.json File"),Object(i.b)("p",null,"You need to have a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file in the root of your project to do\nmuch of anything with npm.  That is basically the whole interface."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," for details about what\ngoes in that file.  At the very least, you need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"name: This should be a string that identifies your project.  Please do\nnot use the name to specify that it runs on node, or is in JavaScript.\nYou can use the \"engines\" field to explicitly state the versions of node\n(or whatever else) that your program requires, and it's pretty well\nassumed that it's JavaScript."),Object(i.b)("p",{parentName:"li"},"It does not necessarily need to match your github repository name."),Object(i.b)("p",{parentName:"li"},"So, ",Object(i.b)("inlineCode",{parentName:"p"},"node-foo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bar-js")," are bad names.  ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," are better.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"version: A semver-compatible version.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"engines: Specify the versions of node (or whatever else) that your\nprogram runs on.  The node API changes a lot, and there may be bugs or\nnew functionality that you depend on.  Be explicit.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"author: Take some credit.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"scripts: If you have a special compilation or installation script, then\nyou should put it in the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),' object.  You should definitely have at\nleast a basic smoke-test command as the "scripts.test" field.  See\n',Object(i.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scripts"},"scripts"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'main: If you have a single module that serves as the entry point to your\nprogram (like what the "foo" package gives you at require("foo")), then\nyou need to specify that in the "main" field.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'directories: This is an object mapping names to folders.  The best ones\nto include are "lib" and "doc", but if you use "man" to specify a folder\nfull of man pages, they\'ll get installed just like these ones.'))),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," in the root of your package in order to get you\nstarted with a pretty basic package.json file.  See ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-init"},Object(i.b)("inlineCode",{parentName:"a"},"npm\ninit"))," for more info."),Object(i.b)("h3",null,"Keeping files ",Object(i.b)("em",{parentName:"h3"},"out")," of your Package"),Object(i.b)("p",null,"Use a ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," file to keep stuff out of your package.  If there's no\n",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," file, but there ",Object(i.b)("em",{parentName:"p"},"is")," a ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file, then npm will ignore\nthe stuff matched by the ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file.  If you ",Object(i.b)("em",{parentName:"p"},"want")," to include\nsomething that is excluded by your ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file, you can create an\nempty ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," file to override it. Like ",Object(i.b)("inlineCode",{parentName:"p"},"git"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," looks for\n",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," and ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," files in all subdirectories of your package,\nnot only the root directory."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," files follow the ",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring"},"same pattern\nrules"),"\nas ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Blank lines or lines starting with ",Object(i.b)("inlineCode",{parentName:"li"},"#")," are ignored."),Object(i.b)("li",{parentName:"ul"},"Standard glob patterns work."),Object(i.b)("li",{parentName:"ul"},"You can end patterns with a forward slash ",Object(i.b)("inlineCode",{parentName:"li"},"/")," to specify a directory."),Object(i.b)("li",{parentName:"ul"},"You can negate a pattern by starting it with an exclamation point ",Object(i.b)("inlineCode",{parentName:"li"},"!"),".")),Object(i.b)("p",null,"By default, the following paths and files are ignored, so there's no\nneed to add them to ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," explicitly:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".*.swp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"._*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".DS_Store")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".gitignore")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".hg")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".npmignore")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".npmrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".lock-wscript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".svn")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".wafpickle-*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.gypi")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CVS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm-debug.log"))),Object(i.b)("p",null,"Additionally, everything in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," is ignored, except for\nbundled dependencies. npm automatically handles this for you, so don't\nbother adding ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," to ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore"),"."),Object(i.b)("p",null,"The following paths and files are never ignored, so adding them to\n",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," is pointless:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"README")," (and its variants)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CHANGELOG")," (and its variants)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LICENSE")," / ",Object(i.b)("inlineCode",{parentName:"li"},"LICENCE"))),Object(i.b)("p",null,"If, given the structure of your project, you find ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," to be a\nmaintenance headache, you might instead try populating the ",Object(i.b)("inlineCode",{parentName:"p"},"files"),"\nproperty of ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", which is an array of file or directory names\nthat should be included in your package. Sometimes manually picking\nwhich items to allow is easier to manage than building a block list."),Object(i.b)("h4",null,"Testing whether your ",Object(i.b)("inlineCode",{parentName:"h4"},".npmignore")," or ",Object(i.b)("inlineCode",{parentName:"h4"},"files")," config works"),Object(i.b)("p",null,"If you want to double check that your package will include only the files\nyou intend it to when published, you can run the ",Object(i.b)("inlineCode",{parentName:"p"},"npm pack")," command locally\nwhich will generate a tarball in the working directory, the same way it\ndoes for publishing."),Object(i.b)("h3",null,"Link Packages"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm link")," is designed to install a development package and see the\nchanges in real time without having to keep re-installing it.  (You do\nneed to either re-link or ",Object(i.b)("inlineCode",{parentName:"p"},"npm rebuild -g")," to update compiled packages,\nof course.)"),Object(i.b)("p",null,"More info at ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-link"},Object(i.b)("inlineCode",{parentName:"a"},"npm link")),"."),Object(i.b)("h3",null,"Before Publishing: Make Sure Your Package Installs and Works"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This is important.")),Object(i.b)("p",null,"If you can not install it locally, you'll have\nproblems trying to publish it.  Or, worse yet, you'll be able to\npublish it, but you'll be publishing a broken or pointless package.\nSo don't do that."),Object(i.b)("p",null,"In the root of your package, do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install . -g\n")),Object(i.b)("p",null,"That'll show you that it's working.  If you'd rather just create a symlink\npackage that points to your working directory, then do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm link\n")),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"npm ls -g")," to see if it's there."),Object(i.b)("p",null,"To test a local install, go into some other folder, and then do:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd ../some-other-folder\nnpm install ../my-package\n")),Object(i.b)("p",null,"to install it locally into the node_modules folder in that other place."),Object(i.b)("p",null,'Then go into the node-repl, and try using require("my-thing") to\nbring in your module\'s main module.'),Object(i.b)("h3",null,"Create a User Account"),Object(i.b)("p",null,"Create a user with the adduser command.  It works like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm adduser\n")),Object(i.b)("p",null,"and then follow the prompts."),Object(i.b)("p",null,"This is documented better in ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-adduser"},"npm adduser"),"."),Object(i.b)("h3",null,"Publish your Package"),Object(i.b)("p",null,"This part's easy.  In the root of your folder, do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm publish\n")),Object(i.b)("p",null,"You can give publish a url to a tarball, or a filename of a tarball,\nor a path to a folder."),Object(i.b)("p",null,"Note that pretty much ",Object(i.b)("strong",{parentName:"p"},"everything in that folder will be exposed"),"\nby default.  So, if you have secret stuff in there, use a\n",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," file to list out the globs to ignore, or publish\nfrom a fresh checkout."),Object(i.b)("h3",null,"Brag about it"),Object(i.b)("p",null,"Send emails, write blogs, blab in IRC."),Object(i.b)("p",null,"Tell the world how easy it is to install your program!"),Object(i.b)("h3",null,"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm"},"npm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-init"},"npm init")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm adduser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry"))))}c.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),b=n("7ljp"),c=n("pD55"),p=n("8Aig"),s=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},j=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),f=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var C=N,k=n("MfeC");function w(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=w,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,w=o.status,P=o.source,A=o.additionalContributors,B=void 0===A?[]:A,G=k.a.getVariantRoot(a.pathname);return r.a.createElement(b.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:y,description:N}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),N))),null!=G?r.a.createElement(S,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?r.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,w||P?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(f.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),P?r.a.createElement(O.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(C,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-developers-md-1c5421162b55d5c0bda8.js.map