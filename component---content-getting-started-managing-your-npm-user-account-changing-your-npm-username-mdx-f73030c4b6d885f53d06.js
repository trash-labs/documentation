(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),u=n("8Aig"),s=n("ReZb"),d=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),E=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var v=w,k=n("MfeC");function x(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=x,j=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,O=r.title,w=r.description,x=r.status,H=r.source,G=r.additionalContributors,M=void 0===G?[]:G,W=k.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:b,PromptReply:f,Screenshot:h.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:O,description:w}),i.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(N,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},O),w))),null!=W?i.a.createElement(I,null,i.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(S,null,x||H?i.a.createElement(o.k,{mb:3,alignItems:"center"},x?i.a.createElement(E.a,{status:x}):null,i.a.createElement(o.e,{mx:"auto"}),H?i.a.createElement(g.a,{href:H}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},UeBh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("O6H6"),r=(n("4LHR"),{}),i={_frontmatter:r},c=l.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is not currently possible to change your npm username.  You'll need to\ncreate a new account and migrate the data to the new account manually."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",{parentName:"li",href:"/creating-a-new-npm-user-account"},"new user account")," with your desired username"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/transferring-a-package-from-a-user-account-to-another-user-account"},"Transfer your packages")," to your new account."),Object(o.b)("li",{parentName:"ol"},"If you are a member of any ",Object(o.b)("a",{parentName:"li",href:"/organizations"},"organizations"),", ask the organization administrator to ",Object(o.b)("a",{parentName:"li",href:"/adding-members-to-your-organization"},"invite your new account to the organization"),"."),Object(o.b)("li",{parentName:"ol"},"Delete your ",Object(o.b)("a",{parentName:"li",href:"/deleting-your-npm-user-account"},"original account"),".  Note that this is permanent, and after 30 days, this account name is available for other people to claim.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-managing-your-npm-user-account-changing-your-npm-username-mdx-f73030c4b6d885f53d06.js.map