(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),b=n("pD55"),m=n("8Aig"),u=n("ReZb"),s=n("GCVy"),d=n("+6vE");var p=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),O=n("/Rw0"),g=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return o.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var E=v,N=n("MfeC");function k(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},r)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=k,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,v=i.description,k=i.status,A=i.source,D=i.additionalContributors,M=void 0===D?[]:D,T=N.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:u.a,Note:s.a,Prompt:p,PromptReply:h,Screenshot:f.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(b.a,{title:j,description:v}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(C,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},j),v))),null!=T?o.a.createElement(S,null,o.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(P,null,k||A?o.a.createElement(l.k,{mb:3,alignItems:"center"},k?o.a.createElement(g.a,{status:k}):null,o.a.createElement(l.e,{mx:"auto"}),A?o.a.createElement(O.a,{href:A}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},eHak:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));var a,l=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},c=(a="Screenshot",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:o},m=i.a;function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(m,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"About audit reports"),Object(r.b)("p",null,"Audit reports contain tables of information about security vulnerabilities in your project's dependencies to help you fix the vulnerability or troubleshoot further."),Object(r.b)(c,{src:"/packages-and-modules/securing-your-code/audit-report-results.png",alt:"Screenshot showing command-line audit report results",mdxType:"Screenshot"}),Object(r.b)("h2",null,"Vulnerability table fields"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#severity"},"Severity")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#description"},"Description")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#package"},"Package")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#patched-in"},"Patched in")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#dependency-of"},"Dependency of")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#path"},"Path")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#more-info"},"More info"))),Object(r.b)("h3",null,"Severity"),Object(r.b)("p",null,"The severity of the vulnerability, determined by the impact and exploitability of the vulnerability in its most common use case."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Severity"),Object(r.b)("th",{parentName:"tr",align:"left"},"Recommended action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Critical"),Object(r.b)("td",{parentName:"tr",align:"left"},"Address immediately")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"High"),Object(r.b)("td",{parentName:"tr",align:"left"},"Address as quickly as possible")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Moderate"),Object(r.b)("td",{parentName:"tr",align:"left"},"Address as time allows")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Low"),Object(r.b)("td",{parentName:"tr",align:"left"},"Address at your discretion")))),Object(r.b)("h4",null,"Description"),Object(r.b)("p",null,'The description of the vulnerability. For example, "Denial of service".'),Object(r.b)("h4",null,"Package"),Object(r.b)("p",null,"The name of the package that contains the vulnerability."),Object(r.b)("h4",null,"Patched in"),Object(r.b)("p",null,"The semantic version range that describes which versions contain a fix for the vulnerability."),Object(r.b)("h4",null,"Dependency of"),Object(r.b)("p",null,"The module that the package with the vulnerability depends on."),Object(r.b)("h4",null,"Path"),Object(r.b)("p",null,"The path to the code that contains the vulnerability."),Object(r.b)("h4",null,"More info"),Object(r.b)("p",null,"A link to the security report."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-securing-your-code-about-audit-reports-mdx-aaf0e84ab323720842e5.js.map