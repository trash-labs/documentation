(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),o=t("aOgs"),l=t("q1tI"),r=t.n(l),c=t("7ljp"),d=t("pD55"),p=t("8Aig"),m=t("ReZb"),s=t("GCVy"),b=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var f=function(e){var n=e.children;return r.a.createElement("strong",null,n)},h=t("gnlW"),g=t("mwnC"),j=t("/Rw0"),O=t("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var n=e.items,t=e.depth;return r.a.createElement(y,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:t+1}):null)})))}v.defaultProps={depth:0};var k=v,E=t("MfeC");function C(e){var n=E.a.getPath(e.location.pathname),t=E.a.getVariantAndPage(e.root,n);if(!t)return null;var a=E.a.getVariantsForPage(e.root,t.page),o=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(l=e),o.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,l.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},o)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=C,_=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),w=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),D=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,l=t.frontmatter,y=l.title,v=l.description,C=l.status,T=l.source,z=l.additionalContributors,H=void 0===z?[]:z,M=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:s.a,Prompt:u,PromptReply:f,Screenshot:h.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(d.a,{title:y,description:v}),r.a.createElement(p.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(w,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(x,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),v))),null!=M?r.a.createElement(D,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),t.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:t.tableOfContents.items})):null,r.a.createElement(S,null,C||T?r.a.createElement(i.k,{mb:3,alignItems:"center"},C?r.a.createElement(O.a,{status:C}):null,r.a.createElement(i.e,{mx:"auto"}),T?r.a.createElement(j.a,{href:T}):null):null,t.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(i.r,{icon:o.b,mr:2}):r.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(k,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(b.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},pfJR:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("O6H6"),l={},r={_frontmatter:l},c=o.a;function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To specify the packages your project depends on, you must\nlist them as ",Object(i.b)("inlineCode",{parentName:"p"},'"dependencies"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"devDependencies"')," in your package's ",Object(i.b)("a",{parentName:"p",href:"creating-a-packge-json-file"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," file. When you (or another user) run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", npm will download dependencies and devDependencies that are listed in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," that meet the ",Object(i.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semantic version")," requirements listed for each. To see which versions of a package will be installed, use the ",Object(i.b)("a",{parentName:"p",href:"https://semver.npmjs.com/"},"semver calculator"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"dependencies"'),": Packages required by your application in production."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"devDependencies"'),": Packages that are only needed for local development and testing.")),Object(i.b)("h2",null,"Adding dependencies to a ",Object(i.b)("inlineCode",{parentName:"h2"},"package.json")," file"),Object(i.b)("p",null,"You can add dependencies to a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file from the command line or by manually editing the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(i.b)("h3",null,"Adding dependencies to a ",Object(i.b)("inlineCode",{parentName:"h3"},"package.json")," file from the command line"),Object(i.b)("p",null,"To add dependencies and devDependencies to a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file from the command line, you can install them in the root directory of your package using the ",Object(i.b)("inlineCode",{parentName:"p"},"--save-prod")," flag for dependencies (the default behavior of ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),") or the ",Object(i.b)("inlineCode",{parentName:"p"},"--save-dev")," flag for devDependencies."),Object(i.b)("p",null,"To add an entry to the ",Object(i.b)("inlineCode",{parentName:"p"},'"dependencies"')," attribute of a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, on the command line, run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install <package-name> [--save-prod]\n")),Object(i.b)("p",null,"To add an entry to the ",Object(i.b)("inlineCode",{parentName:"p"},'"devDependencies"')," attribute of a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, on the command line, run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install <package-name> --save-dev\n")),Object(i.b)("h3",null,"Manually editing the ",Object(i.b)("inlineCode",{parentName:"h3"},"package.json")," file"),Object(i.b)("p",null,"To add dependencies to a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, in a text editor, add an attribute called ",Object(i.b)("inlineCode",{parentName:"p"},'"dependencies"')," that references the name and ",Object(i.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semantic version")," of each dependency:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "name": "my_package",\n  "version": "1.0.0",\n  "dependencies": {\n    "my_dep": "^1.0.0",\n    "another_dep": "~2.2.0"\n  }\n}\n')),Object(i.b)("p",null,"To add devDependencies to a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, in a text editor, add an attribute called ",Object(i.b)("inlineCode",{parentName:"p"},'"devDependencies"')," that references the name and ",Object(i.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semantic version")," of each devDependency:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"name": "my_package",\n"version": "1.0.0",\n"dependencies": {\n  "my_dep": "^1.0.0",\n  "another_dep": "~2.2.0"\n},\n"devDependencies" : {\n  "my_test_framework": "^3.1.0".\n  "another_dev_dep": "1.0.0 - 1.2.0"\n}\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-specifying-dependencies-and-devdependencies-in-a-package-json-file-mdx-39bd7a74ea8d850b85fe.js.map