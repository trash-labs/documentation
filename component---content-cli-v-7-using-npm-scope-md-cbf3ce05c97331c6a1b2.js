(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),o=a("q1tI"),c=a.n(o),r=a("7ljp"),s=a("pD55"),p=a("8Aig"),m=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return c.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return c.a.createElement("strong",null,t)},g=a("gnlW"),y=a("mwnC"),f=a("/Rw0"),O=a("dVM4"),j=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return c.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var w=k,N=a("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),a=N.a.getVariantAndPage(e.root,t);if(!a)return null;var n=N.a.getVariantsForPage(e.root,a.page),i=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),i.push(c.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(l.i,{overlay:e.overlay},c.a.createElement(l.i.Button,null,o.variant.title),c.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=v,C=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,j=o.title,k=o.description,v=o.status,z=o.source,A=o.additionalContributors,P=void 0===A?[]:A,H=N.a.getVariantRoot(n.pathname);return c.a.createElement(r.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},c.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(s.a,{title:j,description:k}),c.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),c.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.e,{display:["none",null,null,"block"]},c.a.createElement(y.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(l.e,null,c.a.createElement(l.e,null,c.a.createElement(l.m,{as:"h1"},j),k))),null!=H?c.a.createElement(S,null,c.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?c.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},c.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(w,{items:a.tableOfContents.items})):null,c.a.createElement(T,null,v||z?c.a.createElement(l.k,{mb:3,alignItems:"center"},v?c.a.createElement(O.a,{status:v}):null,c.a.createElement(l.e,{mx:"auto"}),z?c.a.createElement(f.a,{href:z}):null):null,a.tableOfContents.items?c.a.createElement(l.e,{display:["block",null,"none"],mb:3},c.a.createElement(l.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(l.r,{icon:i.b,mr:2}):c.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),c.a.createElement(l.e,{pt:1},c.a.createElement(w,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},Zxz9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),o={},c={_frontmatter:o},r=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(r,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"All npm packages have a name. Some package names also have a scope. A scope\nfollows the usual rules for package names (URL-safe characters, no leading dots\nor underscores). When used in package names, scopes are preceded by an ",Object(l.b)("inlineCode",{parentName:"p"},"@")," symbol\nand followed by a slash, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"@somescope/somepackagename\n")),Object(l.b)("p",null,"Scopes are a way of grouping related packages together, and also affect a few\nthings about the way npm treats the package."),Object(l.b)("p",null,"Each npm user/organization has their own scope, and only you can add packages\nin your scope. This means you don't have to worry about someone taking your\npackage name ahead of you. Thus it is also a good way to signal official packages\nfor organizations."),Object(l.b)("p",null,"Scoped packages can be published and installed as of ",Object(l.b)("inlineCode",{parentName:"p"},"npm@2")," and are supported\nby the primary npm registry. Unscoped packages can depend on scoped packages and\nvice versa. The npm client is backwards-compatible with unscoped registries,\nso it can be used to work with scoped and unscoped registries at the same time."),Object(l.b)("h3",null,"Installing scoped packages"),Object(l.b)("p",null,"Scoped packages are installed to a sub-folder of the regular installation\nfolder, e.g. if your other packages are installed in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/packagename"),",\nscoped modules will be installed in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/@myorg/packagename"),". The scope\nfolder (",Object(l.b)("inlineCode",{parentName:"p"},"@myorg"),") is simply the name of the scope preceded by an ",Object(l.b)("inlineCode",{parentName:"p"},"@")," symbol, and can\ncontain any number of scoped packages."),Object(l.b)("p",null,"A scoped package is installed by referencing it by name, preceded by an\n",Object(l.b)("inlineCode",{parentName:"p"},"@")," symbol, in ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install @myorg/mypackage\n")),Object(l.b)("p",null,"Or in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@myorg/mypackage": "^1.3.0"\n}\n')),Object(l.b)("p",null,"Note that if the ",Object(l.b)("inlineCode",{parentName:"p"},"@")," symbol is omitted, in either case, npm will instead attempt to\ninstall from GitHub; see ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-install"},Object(l.b)("inlineCode",{parentName:"a"},"npm install")),"."),Object(l.b)("h3",null,"Requiring scoped packages"),Object(l.b)("p",null,"Because scoped packages are installed into a scope folder, you have to\ninclude the name of the scope when requiring them in your code, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"require('@myorg/mypackage')\n")),Object(l.b)("p",null,"There is nothing special about the way Node treats scope folders. This\nsimply requires the ",Object(l.b)("inlineCode",{parentName:"p"},"mypackage")," module in the folder named ",Object(l.b)("inlineCode",{parentName:"p"},"@myorg"),"."),Object(l.b)("h3",null,"Publishing scoped packages"),Object(l.b)("p",null,"Scoped packages can be published from the CLI as of ",Object(l.b)("inlineCode",{parentName:"p"},"npm@2")," and can be\npublished to any registry that supports them, including the primary npm\nregistry."),Object(l.b)("p",null,"(As of 2015-04-19, and with npm 2.0 or better, the primary npm registry\n",Object(l.b)("strong",{parentName:"p"},"does")," support scoped packages.)"),Object(l.b)("p",null,"If you wish, you may associate a scope with a registry; see below."),Object(l.b)("h4",null,"Publishing public scoped packages to the primary npm registry"),Object(l.b)("p",null,"To publish a public scoped package, you must specify ",Object(l.b)("inlineCode",{parentName:"p"},"--access public")," with\nthe initial publication. This will publish the package and set access\nto ",Object(l.b)("inlineCode",{parentName:"p"},"public")," as if you had run ",Object(l.b)("inlineCode",{parentName:"p"},"npm access public")," after publishing."),Object(l.b)("h4",null,"Publishing private scoped packages to the npm registry"),Object(l.b)("p",null,"To publish a private scoped package to the npm registry, you must have\nan ",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/private-modules/intro"},"npm Private Modules"),"\naccount."),Object(l.b)("p",null,"You can then publish the module with ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish\n--access restricted"),", and it will be present in the npm registry, with\nrestricted access. You can then change the access permissions, if\ndesired, with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access")," or on the npmjs.com website."),Object(l.b)("h3",null,"Associating a scope with a registry"),Object(l.b)("p",null,"Scopes can be associated with a separate registry. This allows you to\nseamlessly use a mix of packages from the primary npm registry and one or more\nprivate registries, such as ",Object(l.b)("a",{parentName:"p",href:"https://github.com/features/packages"},"GitHub Packages")," or the open source ",Object(l.b)("a",{parentName:"p",href:"https://verdaccio.org"},"Verdaccio"),"\nproject."),Object(l.b)("p",null,"You can associate a scope with a registry at login, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm login --registry=http://reg.example.com --scope=@myco\n")),Object(l.b)("p",null,"Scopes have a many-to-one relationship with registries: one registry can\nhost multiple scopes, but a scope only ever points to one registry."),Object(l.b)("p",null,"You can also associate a scope with a registry using ",Object(l.b)("inlineCode",{parentName:"p"},"npm config"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config set @myco:registry http://reg.example.com\n")),Object(l.b)("p",null,"Once a scope is associated with a registry, any ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," for a package\nwith that scope will request packages from that registry instead. Any\n",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," for a package name that contains the scope will be published to\nthat registry instead."),Object(l.b)("h3",null,"See also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-access"},"npm access")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-using-npm-scope-md-cbf3ce05c97331c6a1b2.js.map