(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),d=n("8Aig"),p=n("ReZb"),u=n("GCVy"),s=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),E=n("/Rw0"),y=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var j=k,w=n("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},l)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),M=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),A=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,O=i.title,k=i.description,v=i.status,R=i.source,I=i.additionalContributors,S=void 0===I?[]:I,T=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:b,PromptReply:f,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:O,description:k}),r.a.createElement(d.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(M,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},O),k))),null!=T?r.a.createElement(_,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?r.a.createElement(A,{display:["none",null,"block"],position:"sticky",top:d.a+24,mt:"6px",maxHeight:"calc(100vh - "+d.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(j,{items:n.tableOfContents.items})):null,r.a.createElement(D,null,v||R?r.a.createElement(o.k,{mb:3,alignItems:"center"},v?r.a.createElement(y.a,{status:v}):null,r.a.createElement(o.e,{mx:"auto"}),R?r.a.createElement(E.a,{href:R}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(S.map((function(e){return{login:e}})))}))))))}},wsZe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={_frontmatter:r},d=i.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(d,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To help others find your packages on npm and have a good experience using your code in their projects, we recommend including a README file in your package directory. Your README file may include directions for installing, configuring, and using the code in your package, as well as any other information a user may find helpful. The README file will be shown on the package page."),Object(l.b)("p",null,"An npm package README file must be in the root-level directory of the package."),Object(l.b)("h2",null,"Creating and adding a README.md file to a package"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"In a text editor, in your package root directory, create a file called ",Object(l.b)("inlineCode",{parentName:"li"},"README.md"),"."),Object(l.b)("li",{parentName:"ol"},"In the ",Object(l.b)("inlineCode",{parentName:"li"},"README.md")," file, add useful information about your package."),Object(l.b)("li",{parentName:"ol"},"Save the ",Object(l.b)("inlineCode",{parentName:"li"},"README.md")," file.")),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," The file extension ",Object(l.b)("inlineCode",{parentName:"p"},".md"),' indicates a Markdown file. For more information about Markdown, see the GitHub Guide "',Object(l.b)("a",{href:"https://guides.github.com/features/mastering-markdown/#what"},"Mastering Markdown"),'".')),Object(l.b)("h2",null,"Updating an existing package README file"),Object(l.b)("p",null,"The README file will only be updated on the package page when you publish a new version of your package. To update your README file:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In a text editor, update the contents of the ",Object(l.b)("inlineCode",{parentName:"p"},"README.md")," file.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Save the ",Object(l.b)("inlineCode",{parentName:"p"},"README.md")," file.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, in the package root directory, run the following commands:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm version patch\nnpm publish\n")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-about-package-readme-files-mdx-6743a8b0223a8da2d315.js.map