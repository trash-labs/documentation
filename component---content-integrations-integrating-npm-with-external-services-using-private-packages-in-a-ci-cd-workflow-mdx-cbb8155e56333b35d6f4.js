(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),s=n("pD55"),u=n("8Aig"),m=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},y=n("gnlW"),f=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),k=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var j=w,v=n("MfeC");function C(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},r)))}C.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=C,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,k=l.title,w=l.description,C=l.status,P=l.source,T=l.additionalContributors,M=void 0===T?[]:T,H=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:m.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:y.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:k,description:w}),i.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(x,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},k),w))),null!=H?i.a.createElement(I,null,i.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:n.tableOfContents.items})):null,i.a.createElement(D,null,C||P?i.a.createElement(o.k,{mb:3,alignItems:"center"},C?i.a.createElement(O.a,{status:C}):null,i.a.createElement(o.e,{mx:"auto"}),P?i.a.createElement(g.a,{href:P}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},e8Sw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i={_frontmatter:l},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use access tokens to test private npm packages with continuous integration (CI) systems, or deploy them using continuous deployment (CD) systems."),Object(o.b)("h2",null,"Create a new access token"),Object(o.b)("p",null,"Create a new access token that will be used only to access npm packages from a CI/CD server."),Object(o.b)("h3",null,"Continuous integration"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"npm token create")," will generate a token with both read and write permissions. When generating a token for use in a continuous integration environment, we recommend creating a read-only token:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm token create --read-only\n")),Object(o.b)("p",null,'For more information on creating access tokens, including CIDR-whitelisted tokens, see "',Object(o.b)("a",{parentName:"p",href:"creating-and-viewing-access-tokens"},"Creating an access token"),'".'),Object(o.b)("h3",null,"Continuous deployment"),Object(o.b)("p",null,"Since continuous deployment environments usually involve the creation of a deploy artifact, you may wish to create an ",Object(o.b)("a",{parentName:"p",href:"creating-and-viewing-access-tokens"},"automation token")," on the website. This will allow you to publish even if you have two-factor authentication enabled on your account."),Object(o.b)("h3",null,"Interactive workflows"),Object(o.b)("p",null,"If your workflow produces a package, but you publish it manually after validation, then you will want to create a token with read and write permissions, which are granted with the standard token creation command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm token create\n")),Object(o.b)("h3",null,"CIDR whitelists"),Object(o.b)("p",null,"For increased security, you may use a CIDR-whitelisted token that can only be used from a certain IP address range. You can use a CIDR whitelist with a read and publish token or a read-only token:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm token create --cidr=[list]\nnpm token create --read-only --cidr=[list]\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm token create --cidr=192.0.2.0/24\n")),Object(o.b)("p",null,'For more information, see "',Object(o.b)("a",{parentName:"p",href:"creating-and-viewing-access-tokens"},"Creating and viewing authentication tokens"),'".'),Object(o.b)("h2",null,"Set the token as an environment variable on the CI/CD server"),Object(o.b)("p",null,"Set your token as an environment variable, or a secret, in your CI/CD server."),Object(o.b)("p",null,"For example, in GitHub Actions, you would ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"add your token as a secret"),". Then you can make the secret available to workflows."),Object(o.b)("p",null,"If you named the secret ",Object(o.b)("inlineCode",{parentName:"p"},"NPM_TOKEN"),", then you would want to create an environment variable named ",Object(o.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," from that secret."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"steps:\n  - run: |\n      npm install\n  - env:\n      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n")),Object(o.b)("p",null,"Consult your CI/CD server's documentation for more details."),Object(o.b)("h2",null,"Create and check in a project-specific .npmrc file"),Object(o.b)("p",null,"Use a project-specific ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file with a variable for your token to securely authenticate your CI/CD server with npm."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the root directory of your project, create a custom ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file with the following contents:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," that you are specifying a literal value of ",Object(o.b)("inlineCode",{parentName:"p"},"${NPM_TOKEN}"),". The npm cli will replace this value with the contents of the ",Object(o.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable. Do ",Object(o.b)("strong",{parentName:"p"},"not")," put a token in this file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check in the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file."))),Object(o.b)("h2",null,"Securing your token"),Object(o.b)("p",null,"Your token may have permission to read private packages, publish new packages on your behalf, or change user or package settings. Protect your token."),Object(o.b)("p",null,"Do not add your token to version control or store it insecurely. Store it in a password manager, your cloud provider's secure storage, or your CI/CD provider's secure storage."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-using-private-packages-in-a-ci-cd-workflow-mdx-cbb8155e56333b35d6f4.js.map