(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{9618:function(e,t,r){var n={"./AuthorLayout":4152,"./AuthorLayout.js":4152,"./ListLayout":9795,"./ListLayout.js":9795,"./PostLayout":1485,"./PostLayout.js":1485,"./PostSimple":3568,"./PostSimple.js":3568};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},6009:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(872),a=r(1799),i=r(9396),l=r(7320),c=r(5675),o=r.n(c),d=function(e){return(0,n.Z)({},e)};function s(e){return(0,l.tZ)(o(),(0,i.Z)((0,a.Z)({},e),{loader:d,layout:"intrinsic",unoptimized:"true"}))}},3883:function(e,t,r){"use strict";r.d(t,{J:function(){return y}});var n=r(1799),a=r(9534),i=r(7320),l=r(1720),c=r(3194),o=r(6009),d=r(4373),s=function(e){var t=e.toc,r=e.indentDepth,n=void 0===r?3:r,a=e.fromHeading,l=void 0===a?1:a,c=e.toHeading,o=void 0===c?6:c,d=e.asDisclosure,s=void 0!==d&&d,u=e.exclude,m=void 0===u?"":u,h=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),f=t.filter((function(e){return e.depth>=l&&e.depth<=o&&!h.test(e.value)})),p=(0,i.tZ)("ul",{children:f.map((function(e){return(0,i.tZ)("li",{className:"".concat(e.depth>=n&&"ml-6"),children:(0,i.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,i.tZ)(i.HY,{children:s?(0,i.BX)("details",{open:!0,children:[(0,i.tZ)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"Table of Contents"}),(0,i.tZ)("div",{className:"ml-6",children:p})]}):p})},u=function(e){var t=(0,l.useRef)(null),r=(0,l.useState)(!1),n=r[0],a=r[1],c=(0,l.useState)(!1),o=c[0],d=c[1];return(0,i.BX)("div",{ref:t,onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1),d(!1)},className:"relative",children:[n&&(0,i.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(o?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout((function(){d(!1)}),2e3)},children:(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:o?"text-green-400":"text-gray-300",children:o?(0,i.tZ)(i.HY,{children:(0,i.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,i.tZ)(i.HY,{children:(0,i.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,i.tZ)("pre",{children:e.children})]})},m=r(7568),h=r(4051),f=r.n(h),p=r(7059),v=r.n(p),g=function(e){var t=e.title,r=void 0===t?"Subscribe to the newsletter":t,n=(0,l.useRef)(null),a=(0,l.useState)(!1),c=a[0],o=a[1],d=(0,l.useState)(""),s=d[0],u=d[1],h=(0,l.useState)(!1),p=h[0],g=h[1],x=function(){var e=(0,m.Z)(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(v().newsletter.provider),{body:JSON.stringify({email:n.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return o(!0),u("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:n.current.value="",o(!1),g(!0),u("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,i.BX)("div",{children:[(0,i.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,i.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,i.BX)("div",{children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,i.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:p?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:n,required:!0,type:"email",disabled:p})]}),(0,i.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,i.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(p?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:p,children:p?"Thank you!":"Sign up"})})]}),c&&(0,i.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:s})]})},x={Image:o.Z,TOCInline:s,a:d.Z,pre:u,BlogNewsletterForm:function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(g,{title:t})})})},wrapper:function(e){e.components;var t=e.layout,l=(0,a.Z)(e,["components","layout"]),c=r(9618)("./".concat(t)).default;return(0,i.tZ)(c,(0,n.Z)({},l))}},y=function(e){var t=e.layout,r=e.mdxSource,o=(0,a.Z)(e,["layout","mdxSource"]),d=(0,l.useMemo)((function(){return(0,c.getMDXComponent)(r)}),[r]);return(0,i.tZ)(d,(0,n.Z)({layout:t,components:x},o))}},8215:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},9367:function(e,t,r){"use strict";var n=r(7320),a=r(7059),i=r.n(a),l=r(5152),c=r.n(l),o=c()((function(){return r.e(369).then(r.bind(r,369))}),{loadableGenerated:{webpack:function(){return[369]}},ssr:!1}),d=c()((function(){return r.e(13).then(r.bind(r,6013))}),{loadableGenerated:{webpack:function(){return[6013]}},ssr:!1}),s=c()((function(){return r.e(970).then(r.bind(r,9970))}),{loadableGenerated:{webpack:function(){return[9970]}},ssr:!1});t.Z=function(e){var t,r=e.frontMatter;switch(i().comment.giscusConfig.mapping||i().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,n.BX)("div",{id:"comment",children:[i().comment&&"giscus"===i().comment.provider&&(0,n.tZ)(d,{mapping:t}),i().comment&&"utterances"===i().comment.provider&&(0,n.tZ)(o,{issueTerm:t}),i().comment&&"disqus"===i().comment.provider&&(0,n.tZ)(s,{frontMatter:r})]})}},4152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7320),a=r(4642),i=r(6009),l=r(8590),c=function(e){var t=e.src,r=e.width,n=e.quality;return"https://example.com/".concat(t,"?w=").concat(r,"&q=").concat(n||75)};function o(e){var t=e.children,r=e.frontMatter,o=r.name,d=r.avatar,s=r.occupation,u=r.company,m=r.email,h=r.twitter,f=r.linkedin,p=r.github;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"About - ".concat(o),description:"About me - ".concat(o)}),(0,n.BX)("div",{className:"divide-y",children:[(0,n.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"About"})}),(0,n.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,n.BX)("div",{className:"flex flex-col items-center space-x-2 pt-8",children:[(0,n.tZ)(i.Z,{loader:c,src:d,alt:"avatar",width:"192px",height:"192px",className:"h-48 w-48 rounded-full bg-blend-hue hover:origin-top-left motion-safe:animate-pulse "}),(0,n.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:o}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:s}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:u}),(0,n.BX)("div",{className:"flex space-x-3 pt-6",children:[(0,n.tZ)(a.Z,{kind:"mail",href:"mailto:".concat(m)}),(0,n.tZ)(a.Z,{kind:"github",href:p}),(0,n.tZ)(a.Z,{kind:"linkedin",href:f}),(0,n.tZ)(a.Z,{kind:"twitter",href:h})]})]}),(0,n.tZ)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:t})]})]})]})}},1485:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(1799),a=r(9396),i=r(7320),l=r(4373),c=r(8215),o=r(1720),d=r(523),s=r.n(d),u=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1];(0,o.useEffect)((function(){s().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,i.tZ)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 md:flex",children:(0,i.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{opacity:t?1:0},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,i.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})})},m=r(9072),h=r(8590),f=(r(6009),r(2917)),p=r(7059),v=r.n(p),g=r(9367),x=r(7836),y=function(e){var t=e.emoji,r=e.size,n=void 0===r?"twa-lg":r,a=e.className,l="inline-block twa ".concat(n," twa-").concat((0,x.Z)(t)," ").concat(a||"");return(0,i.tZ)("i",{className:l.trim()})},Z={weekday:"long",year:"numeric",month:"long",day:"numeric"};function b(e){var t=e.frontMatter,r=e.authorDetails,a=e.next,o=e.prev,d=(e.page,e.children),s=e.toc,p=t.slug,x=(t.fileName,t.date),b=t.title,N=t.tags,w=t.readingTime.text;return(0,i.BX)(m.Z,{children:[(0,i.tZ)(h.Uy,(0,n.Z)({url:"".concat(v().siteUrl,"/blog/").concat(p),authorDetails:r},t)),(0,i.tZ)(u,{}),(0,i.tZ)("article",{children:(0,i.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,i.tZ)("header",{className:"relative pt-6 xl:pb-6",children:(0,i.tZ)("div",{className:"space-y-1 text-center",children:(0,i.tZ)("dl",{className:"space-y-10",children:(0,i.BX)("div",{children:[(0,i.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,i.tZ)("div",{children:(0,i.tZ)(c.Z,{children:b})}),(0,i.BX)("dd",{className:"flex items-center justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:[(0,i.BX)("time",{dateTime:x,className:"flex items-center",children:[(0,i.tZ)(y,{emoji:"calendar",size:""}),(0,i.tZ)("span",{className:"ml-1.5",children:new Date(x).toLocaleDateString(v().locale,Z)})]}),(0,i.tZ)("span",{className:"mx-2",children:"-"}),(0,i.BX)("div",{className:"flex items-center",children:[(0,i.tZ)(y,{emoji:"hourglass-not-done",size:""}),(0,i.tZ)("span",{className:"ml-1.5",children:w.replace("min","mins")})]})]})]})})})}),(0,i.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"},children:[(0,i.tZ)("dl",{className:"pt-6 pb-5 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"}),(0,i.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:[(0,i.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:d}),(0,i.tZ)(g.Z,{frontMatter:t})]}),(0,i.BX)("footer",{children:[(0,i.BX)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[N&&(0,i.BX)("div",{className:"py-4 xl:py-8",children:[(0,i.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Tags"}),(0,i.tZ)("div",{className:"flex flex-wrap",children:N.map((function(e){return(0,i.tZ)(f.Z,{text:e},e)}))})]}),(a||o)&&(0,i.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[o&&(0,i.BX)("div",{children:[(0,i.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Previous Article"}),(0,i.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,i.tZ)(l.Z,{href:"/blog/".concat(o.slug),children:o.title})})]}),a&&(0,i.BX)("div",{children:[(0,i.tZ)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Next Article"}),(0,i.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,i.tZ)(l.Z,{href:"/blog/".concat(a.slug),children:a.title})})]})]})]}),(0,i.BX)("div",{className:"sticky top-0 pt-4 xl:pt-8",children:[(0,i.tZ)(l.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the Blog"}),(0,i.tZ)("div",{className:"hidden md:block",children:(0,i.tZ)(k,{toc:s})})]})]})]})]})})]})}function k(e){var t=e.toc,r=(0,o.useState)(),c=r[0],d=r[1];N(d);var s=(0,o.useState)([]),u=s[0],m=s[1];(0,o.useEffect)((function(){for(var e=t.map((function(e){return(0,a.Z)((0,n.Z)({},e),{children:[]})})),r=e.length-1;r>=0;r--)if(1!=e[r].depth)for(var i=r;i>=0;i--)if(e[r].depth-e[i].depth==1){e[i].children.unshift(e[r]);break}m(e.filter((function(e){return 1==e.depth})))}),[t]);var h=function(e){var t=e.item,r=e.activeId,n=function(e){if("#"+r===e.url)return!0;var t=!0,a=!1,i=void 0;try{for(var l,c=e.children[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var o=l.value;if(n(o))return!0}}catch(d){a=!0,i=d}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}return!1};return t.map((function(e,t){return(0,i.BX)("div",{children:[(0,i.tZ)(l.Z,{href:e.url,children:(0,i.tZ)("p",{className:"border-l-[3px] pl-2 ".concat(n(e)&&"border-primary-500 text-primary-600"),children:e.value})}),n(e)&&e.children.length>0&&(0,i.tZ)("div",{className:"mt-1 ml-4 space-y-1",children:(0,i.tZ)(h,{item:e.children,activeId:r})})]},t)}))};return(0,i.BX)("div",{className:"mt-5 space-y-1 text-sm",children:[(0,i.tZ)("p",{className:"text-lg font-bold",children:"Table of content"}),(0,i.tZ)(h,{item:u,activeId:c})]})}var N=function(e){var t=(0,o.useRef)({});(0,o.useEffect)((function(){var r=new IntersectionObserver((function(r){t.current=r.reduce((function(e,t){return e[t.target.id]=t,e}),t.current);var a=[];Object.keys(t.current).forEach((function(e){var r=t.current[e];r.isIntersecting&&a.push(r)}));var i=function(e){return n.findIndex((function(t){return t.id===e}))};if(1===a.length)e(a[0].target.id);else if(a.length>1){var l=a.sort((function(e,t){return i(e.target.id)>i(t.target.id)}));e(l[0].target.id)}}),{rootMargin:"0px 0px -40% 0px"}),n=Array.from(document.querySelectorAll("h1, h2, h3"));return n.forEach((function(e){return r.observe(e)})),function(){return r.disconnect()}}),[e])}},3568:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(1799),a=r(7320),i=r(4373),l=r(8215),c=r(9072),o=r(8590),d=r(7059),s=r.n(d),u=r(811),m=r(9367),h=r(1720),f=r(523),p=r.n(f),v=function(){var e=(0,h.useState)(!1),t=e[0],r=e[1];(0,h.useEffect)((function(){p().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,a.BX)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(0,a.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})};function g(e){var t=e.frontMatter,r=(e.authorDetails,e.next),d=e.prev,h=e.children,f=t.date,p=t.title;return(0,a.BX)(c.Z,{children:[(0,a.tZ)(o.Uy,(0,n.Z)({url:"".concat(s().siteUrl,"/blog/").concat(t.slug)},t)),(0,a.tZ)(v,{}),(0,a.tZ)("article",{children:(0,a.BX)("div",{children:[(0,a.tZ)("header",{children:(0,a.BX)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,a.tZ)("dl",{children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:f,children:(0,u.Z)(f)})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(l.Z,{children:p})})]})}),(0,a.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:h})}),(0,a.tZ)(m.Z,{frontMatter:t}),(0,a.tZ)("footer",{children:(0,a.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[d&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(i.Z,{href:"/blog/".concat(d.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",d.title]})}),r&&(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.BX)(i.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}}}]);