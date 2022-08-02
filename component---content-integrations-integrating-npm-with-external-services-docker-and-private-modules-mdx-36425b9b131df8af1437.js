(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{EeZl:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a,o=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={_frontmatter:r},m=l.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(m,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To install private npm packages in a Docker container, you will need to use Docker's build-time variables."),Object(i.b)("h2",null,"Background: runtime variables"),Object(i.b)("p",null,"You cannot install private npm packages in a Docker container using only runtime variables.  Consider the following Dockerfile:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"FROM node\n\nCOPY package.json package.json  \nRUN npm install\n\n# Add your source files\nCOPY . .  \nCMD npm start  \n")),Object(i.b)("p",null,"Which will use the official ",Object(i.b)("a",{parentName:"p",href:"https://hub.docker.com/_/node"},"Node.js")," image, copy the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," into our container, installs dependencies, copies the source files and runs the start command as specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"In order to install private packages, you may think that we could just add a line before we run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", using the ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#env"},"ENV parameter"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ENV NPM_TOKEN=00000000-0000-0000-0000-000000000000\n")),Object(i.b)("p",null,"However, this doesn't work as you would expect, because you want the npm install to occur when you run ",Object(i.b)("inlineCode",{parentName:"p"},"docker build"),", and in this instance, ",Object(i.b)("inlineCode",{parentName:"p"},"ENV")," variables aren't used, they are set for runtime only."),Object(i.b)("p",null,"Instead of run-time variables, you must use a different way of passing environment variables to Docker, available since Docker 1.9: the ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#arg"},"ARG parameter"),"."),Object(i.b)("h2",null,"Create and check in a project-specific .npmrc file"),Object(i.b)("p",null,"A complete example that will allow you to use ",Object(i.b)("inlineCode",{parentName:"p"},"--build-arg")," to pass in your NPM_TOKEN requires adding a ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file to the project."),Object(i.b)("p",null,"Use a project-specific ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file with a variable for your token to securely authenticate your Docker image with npm."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the root directory of your project, create a custom ",Object(i.b)("a",{href:"https://docs.npmjs.com/cli-documentation/files/npmrc"},Object(i.b)("inlineCode",{parentName:"p"},".npmrc"))," file with the following contents:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," that you are specifying a literal value of ",Object(i.b)("inlineCode",{parentName:"p"},"${NPM_TOKEN}"),".  The npm cli will replace this value with the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable.  Do ",Object(i.b)("strong",{parentName:"p"},"not")," put a token in this file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check in the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file."))),Object(i.b)("h2",null,"Update the Dockerfile"),Object(i.b)("p",null,"The Dockerfile that takes advantage of this has a few more lines in it than the earlier example that allows us to use the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file and the ",Object(i.b)("inlineCode",{parentName:"p"},"ARG")," parameter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"FROM node\n\nARG NPM_TOKEN  \nCOPY .npmrc .npmrc  \nCOPY package.json package.json  \nRUN npm install  \nRUN rm -f .npmrc\n\n# Add your source files\nCOPY . .  \nCMD npm start\n")),Object(i.b)("p",null,"This adds the expected ",Object(i.b)("inlineCode",{parentName:"p"},"ARG NPM_TOKEN"),", but also copies the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file, and removes it when ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," completes."),Object(i.b)("h2",null,"Build the Docker image"),Object(i.b)("p",null,"To build the image using the above Dockerfile and the npm authentication token, you can run the following command. Note the ",Object(i.b)("inlineCode",{parentName:"p"},".")," at the end to give ",Object(i.b)("inlineCode",{parentName:"p"},"docker build")," the current directory as an argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker build --build-arg NPM_TOKEN=${NPM_TOKEN} .\n")),Object(i.b)("p",null,"This will build the Docker image with the current ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable, so you can run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," inside your container as the current logged-in user."),Object(i.b)(c,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Even if you delete the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file, it will be kept in the commit history. To clean your secrets entirely, make sure to squash them."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You may commit the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file under a different name, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc.docker")," to prevent local build from using it."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You may need to specify a working directory different from the default ",Object(i.b)("inlineCode",{parentName:"p"},"/"),"  otherwise some frameworks like Angular will fail.")))}b.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),b=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var k=N,E=n("MfeC");function w(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=w,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),M=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,y=l.title,N=l.description,w=l.status,D=l.source,I=l.additionalContributors,R=void 0===I?[]:I,A=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(x,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},y),N))),null!=A?r.a.createElement(T,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(M,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(P,null,w||D?r.a.createElement(o.k,{mb:3,alignItems:"center"},w?r.a.createElement(g.a,{status:w}):null,r.a.createElement(o.e,{mx:"auto"}),D?r.a.createElement(j.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-docker-and-private-modules-mdx-36425b9b131df8af1437.js.map