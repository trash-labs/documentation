(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),y=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,N=n("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=v,E=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,k=l.description,v=l.status,P=l.source,T=l.additionalContributors,A=void 0===T?[]:T,H=N.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:j,description:k}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),k))),null!=H?r.a.createElement(S,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,v||P?r.a.createElement(o.k,{mb:3,alignItems:"center"},v?r.a.createElement(O.a,{status:v}):null,r.a.createElement(o.e,{mx:"auto"}),P?r.a.createElement(f.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},s0sq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),l={},r={_frontmatter:l},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,"All npm packages have a name. Some package names also have a scope. A scope\nfollows the usual rules for package names (URL-safe characters, no leading dots\nor underscores). When used in package names, scopes are preceded by an ",Object(o.b)("inlineCode",{parentName:"p"},"@")," symbol\nand followed by a slash, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"@somescope/somepackagename\n")),Object(o.b)("p",null,"Scopes are a way of grouping related packages together, and also affect a few\nthings about the way npm treats the package."),Object(o.b)("p",null,"Each npm user/organization has their own scope, and only you can add packages\nin your scope. This means you don't have to worry about someone taking your\npackage name ahead of you. Thus it is also a good way to signal official packages\nfor organizations."),Object(o.b)("p",null,"Scoped packages can be published and installed as of ",Object(o.b)("inlineCode",{parentName:"p"},"npm@2")," and are supported\nby the primary npm registry. Unscoped packages can depend on scoped packages and\nvice versa. The npm client is backwards-compatible with unscoped registries,\nso it can be used to work with scoped and unscoped registries at the same time."),Object(o.b)("h3",null,"Installing scoped packages"),Object(o.b)("p",null,"Scoped packages are installed to a sub-folder of the regular installation\nfolder, e.g. if your other packages are installed in ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/packagename"),",\nscoped modules will be installed in ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/@myorg/packagename"),". The scope\nfolder (",Object(o.b)("inlineCode",{parentName:"p"},"@myorg"),") is simply the name of the scope preceded by an ",Object(o.b)("inlineCode",{parentName:"p"},"@")," symbol, and can\ncontain any number of scoped packages."),Object(o.b)("p",null,"A scoped package is installed by referencing it by name, preceded by an\n",Object(o.b)("inlineCode",{parentName:"p"},"@")," symbol, in ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @myorg/mypackage\n")),Object(o.b)("p",null,"Or in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@myorg/mypackage": "^1.3.0"\n}\n')),Object(o.b)("p",null,"Note that if the ",Object(o.b)("inlineCode",{parentName:"p"},"@")," symbol is omitted, in either case, npm will instead attempt to\ninstall from GitHub; see ",Object(o.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-install"},Object(o.b)("inlineCode",{parentName:"a"},"npm install")),"."),Object(o.b)("h3",null,"Requiring scoped packages"),Object(o.b)("p",null,"Because scoped packages are installed into a scope folder, you have to\ninclude the name of the scope when requiring them in your code, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"require('@myorg/mypackage')\n")),Object(o.b)("p",null,"There is nothing special about the way Node treats scope folders. This\nsimply requires the ",Object(o.b)("inlineCode",{parentName:"p"},"mypackage")," module in the folder named ",Object(o.b)("inlineCode",{parentName:"p"},"@myorg"),"."),Object(o.b)("h3",null,"Publishing scoped packages"),Object(o.b)("p",null,"Scoped packages can be published from the CLI as of ",Object(o.b)("inlineCode",{parentName:"p"},"npm@2")," and can be\npublished to any registry that supports them, including the primary npm\nregistry."),Object(o.b)("p",null,"(As of 2015-04-19, and with npm 2.0 or better, the primary npm registry\n",Object(o.b)("strong",{parentName:"p"},"does")," support scoped packages.)"),Object(o.b)("p",null,"If you wish, you may associate a scope with a registry; see below."),Object(o.b)("h4",null,"Publishing public scoped packages to the primary npm registry"),Object(o.b)("p",null,"Publishing to a scope, you have two options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Publishing to your user scope (example: ",Object(o.b)("inlineCode",{parentName:"li"},"@username/module"),")"),Object(o.b)("li",{parentName:"ul"},"Publishing to an organization scope (example: ",Object(o.b)("inlineCode",{parentName:"li"},"@org/module"),")")),Object(o.b)("p",null,"If publishing a public module to an organization scope, you must\nfirst either create an organization with the name of the scope\nthat you'd like to publish to or be added to an existing organization\nwith the appropriate permisssions. For example, if you'd like to\npublish to ",Object(o.b)("inlineCode",{parentName:"p"},"@org"),", you would  need to create the ",Object(o.b)("inlineCode",{parentName:"p"},"org")," organization\non npmjs.com prior to trying to publish."),Object(o.b)("p",null,"Scoped packages are not public by default.  You will need to specify\n",Object(o.b)("inlineCode",{parentName:"p"},"--access public")," with the initial ",Object(o.b)("inlineCode",{parentName:"p"},"npm publish")," command.  This will publish\nthe package and set access to ",Object(o.b)("inlineCode",{parentName:"p"},"public")," as if you had run ",Object(o.b)("inlineCode",{parentName:"p"},"npm access public"),"\nafter publishing.  You do not need to do this when publishing new versions of\nan existing scoped package."),Object(o.b)("h4",null,"Publishing private scoped packages to the npm registry"),Object(o.b)("p",null,"To publish a private scoped package to the npm registry, you must have\nan ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/private-modules/intro"},"npm Private Modules"),"\naccount."),Object(o.b)("p",null,"You can then publish the module with ",Object(o.b)("inlineCode",{parentName:"p"},"npm publish")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm publish\n--access restricted"),", and it will be present in the npm registry, with\nrestricted access. You can then change the access permissions, if\ndesired, with ",Object(o.b)("inlineCode",{parentName:"p"},"npm access")," or on the npmjs.com website."),Object(o.b)("h3",null,"Associating a scope with a registry"),Object(o.b)("p",null,"Scopes can be associated with a separate registry. This allows you to\nseamlessly use a mix of packages from the primary npm registry and one or more\nprivate registries, such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/features/packages"},"GitHub Packages")," or the open source ",Object(o.b)("a",{parentName:"p",href:"https://verdaccio.org"},"Verdaccio"),"\nproject."),Object(o.b)("p",null,"You can associate a scope with a registry at login, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm login --registry=http://reg.example.com --scope=@myco\n")),Object(o.b)("p",null,"Scopes have a many-to-one relationship with registries: one registry can\nhost multiple scopes, but a scope only ever points to one registry."),Object(o.b)("p",null,"You can also associate a scope with a registry using ",Object(o.b)("inlineCode",{parentName:"p"},"npm config"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm config set @myco:registry http://reg.example.com\n")),Object(o.b)("p",null,"Once a scope is associated with a registry, any ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," for a package\nwith that scope will request packages from that registry instead. Any\n",Object(o.b)("inlineCode",{parentName:"p"},"npm publish")," for a package name that contains the scope will be published to\nthat registry instead."),Object(o.b)("h3",null,"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-access"},"npm access")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-scope-md-94b09f5ee508221911bd.js.map