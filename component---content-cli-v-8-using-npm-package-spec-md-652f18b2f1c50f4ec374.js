(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),b=n("pD55"),m=n("8Aig"),p=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return o.a.createElement("strong",null,t)},O=n("gnlW"),h=n("mwnC"),j=n("/Rw0"),f=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var C=N,k=n("MfeC");function E(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),i.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,r.variant.title),o.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,N=r.description,E=r.status,z=r.source,H=r.additionalContributors,P=void 0===H?[]:H,G=k.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:p.a,Note:s.a,Prompt:d,PromptReply:g,Screenshot:O.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(b.a,{title:y,description:N}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(h.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},y),N))),null!=G?o.a.createElement(S,null,o.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(C,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,E||z?o.a.createElement(l.k,{mb:3,alignItems:"center"},E?o.a.createElement(f.a,{status:E}):null,o.a.createElement(l.e,{mx:"auto"}),z?o.a.createElement(j.a,{href:z}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:i.b,mr:2}):o.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(C,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},pScy:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},o={_frontmatter:r},c=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Commands like ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and the dependency sections in the\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),' use a package name specifier.  This can be many different\nthings that all refer to a "package".  Examples include a package name,\ngit url, tarball, or local directory.  These will generally be referred\nto as ',Object(l.b)("inlineCode",{parentName:"p"},"<package-spec>")," in the help output for the npm commands that use\nthis package name specifier."),Object(l.b)("h3",null,"Package name"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[<@scope>/]<pkg>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[<@scope>/]<pkg>@<tag>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[<@scope>/]<pkg>@<version>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[<@scope>/]<pkg>@<version range>"))),Object(l.b)("p",null,"Refers to a package by name, with or without a scope, and optionally\ntag, version, or version range.  This is typically used in combination\nwith the ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config#registry"},"registry")," config to refer to a\npackage in a registry."),Object(l.b)("p",null,"Examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@npmcli/arborist")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@npmcli/arborist@latest")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm@6.13.1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm@^4.0.0"))),Object(l.b)("h3",null,"Aliases"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<alias>@npm:<name>"))),Object(l.b)("p",null,"Primarily used by commands like ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and in the dependency\nsections in the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", this refers to a package by an alias.\nThe ",Object(l.b)("inlineCode",{parentName:"p"},"<alias>")," is the name of the package as it is reified in the\n",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder, and the ",Object(l.b)("inlineCode",{parentName:"p"},"<name>")," refers to a package name as\nfound in the configured registry."),Object(l.b)("p",null,"See ",Object(l.b)("inlineCode",{parentName:"p"},"Package name")," above for more info on referring to a package by\nname, and ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config#registry"},"registry")," for configuring which\nregistry is used when referring to a package by name."),Object(l.b)("p",null,"Examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"semver:@npm:@npmcli/semver-with-patch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"semver:@npm:semver@7.2.2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"semver:@npm:semver@legacy"))),Object(l.b)("h3",null,"Folders"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<folder>"))),Object(l.b)("p",null,"This refers to a package on the local filesystem.  Specifically this is\na folder with a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file in it.  This ",Object(l.b)("em",{parentName:"p"},"should")," always be\nprefixed with a ",Object(l.b)("inlineCode",{parentName:"p"},"/")," or ",Object(l.b)("inlineCode",{parentName:"p"},"./")," (or your OS equivalent) to reduce confusion.\nnpm currently will parse a string with more than one ",Object(l.b)("inlineCode",{parentName:"p"},"/")," in it as a\nfolder, but this is legacy behavior that may be removed in a future\nversion."),Object(l.b)("p",null,"Examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"./my-package")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/opt/npm/my-package"))),Object(l.b)("h3",null,"Tarballs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<tarball file>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<tarball url>"))),Object(l.b)("p",null,"Examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"./my-package.tgz")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"https://registry.npmjs.org/semver/-/semver-1.0.0.tgz"))),Object(l.b)("p",null,"Refers to a package in a tarball format, either on the local filesystem\nor remotely via url.  This is the format that packages exist in when\nuploaded to a registry."),Object(l.b)("h3",null,"git urls"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<git:// url>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<github username>/<github project>"))),Object(l.b)("p",null,"Refers to a package in a git repo.  This can be a full git url, git\nshorthand, or a username/package on GitHub.  You can specify a\ngit tag, branch, or other git ref by appending ",Object(l.b)("inlineCode",{parentName:"p"},"#ref"),"."),Object(l.b)("p",null,"Examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"https://github.com/npm/cli.git")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git@github.com:npm/cli.git")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git+ssh://git@github.com/npm/cli#v6.0.0")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"github:npm/cli#HEAD")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm/cli#c12ea07"))),Object(l.b)("h3",null,"See also"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://npm.im/npm-package-arg"},"npm-package-arg"),"\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},"scope"),"\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config"},"config")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-package-spec-md-652f18b2f1c50f4ec374.js.map