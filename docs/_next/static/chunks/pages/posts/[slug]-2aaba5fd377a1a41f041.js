_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"3slx":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return j})),a.d(t,"default",(function(){return G}));var n=a("xwgP"),r=a.n(n),l=a("6hmv"),o=a("aEpu"),s=a.n(o),i=a("G9T2"),c=a("fHag"),u=a("MRay"),d=a("fvlj"),m=a("EwH3"),p=r.a.createElement;function f(e){var t=e.name,a=e.picture,n=e.date;return p("div",{className:"flex items-center"},p("img",{src:a,className:"w-8 h-8 rounded-full mr-4",alt:t}),p("div",{className:"text-sm text-cyan-600"},t),p("span",{className:"ml-1 text-gray-500"},p(m.a,{dateString:n})))}var g=a("KN/5"),v=a.n(g),h=r.a.createElement;function x(e){var t=e.title,a=e.src,n=e.slug,r=h("img",{src:a,alt:"Cover Image for ".concat(t),className:"h-64 rounded-xl mx-auto"});return h("div",{className:"sm:mx-0"},n?h(v.a,{as:"/posts/".concat(n),href:"/posts/[slug]"},h("a",{"aria-label":t},r)):r)}var b=r.a.createElement;function y(e){var t=e.children;return b("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left"},t)}var w=r.a.createElement;function N(e){var t=e.title,a=e.coverImage,n=e.date,l=e.author;return w(r.a.Fragment,null,w(y,null,t),w("div",{className:"hidden md:block md:mb-12"},w(f,{name:l.name,picture:l.picture,date:n})),w("div",{className:"mb-6 md:mb-8 sm:mx-0"},w(x,{title:t,src:a})),w("div",{className:"mx-auto"},w("div",{className:"block md:hidden mb-6"},w(f,{name:l.name,picture:l.picture,date:n}))))}var k=a("KPh1"),E=a("6QF7"),_=a.n(E),P=(a("DlD7"),r.a.createElement);function S(e){var t=e.content;return P("div",Object(k.a)({className:"mx-auto"},"className","markdown-body"),P("div",{className:_.a.markdown,dangerouslySetInnerHTML:{__html:t}}))}var R=a("pyR8"),F=a("LFwS"),I=a("VKGr"),A=a("RTFU"),C=r.a.createElement;function H(e){var t=e.prevNextPost,a=t.prevPost,n=t.nextPost;return C(I.a,{className:"flex justify-between my-8",gutter:12},C(A.a,{span:12},n&&C(v.a,{as:"/posts/".concat(n.slug),href:"/posts/[slug]"},C("div",{className:"whitespace-nowrap cursor-pointer flex items-center h-full text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 duration-200 transition-colors"},C(R.a,null),C("span",{className:"ml-2"},n.title)))),C(A.a,{span:12},a&&C(v.a,{as:"/posts/".concat(a.slug),href:"/posts/[slug]"},C("div",{className:"whitespace-nowrap cursor-pointer flex items-center h-full text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 duration-200 transition-colors"},C("span",{className:"mr-2"},a.title),C(F.a,null)))))}var D=a("rn73"),M=a.n(D),T=r.a.createElement,j=!0;function G(e){var t=e.post,a=e.allPosts,n=e.prevNextPost,o=e.preview,m=e.tags,p=Object(l.useRouter)();return p.isFallback||(null===t||void 0===t?void 0:t.slug)?T(i.a,{preview:o},T(M.a,null,T("title",null,t.title," | \u6de1\u70d8\u7cd5"),T("meta",{property:"og:image",content:t.ogImage.url}),T("meta",{name:"description",itemProp:"description",content:t.description}),T("meta",{name:"keywords",itemProp:"keywords",content:t.keyword})),T(c.a,null,p.isFallback?T(y,null,"Loading\u2026"):T(r.a.Fragment,null,T(u.a,null,T(N,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),T(S,{content:t.content}),T(H,{prevNextPost:n})),T(d.a,{allPosts:a,tags:m})))):T(s.a,{statusCode:404})}},"57r2":function(e,t,a){"use strict";var n=a("b83N"),r=a("xjNF"),l=a("vMUQ"),o=a("ArX4"),s=a("by6o");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=s(e);if(t){var r=s(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return o(this,a)}}var c=a("xad3");t.__esModule=!0,t.default=void 0;var u=c(a("xwgP")),d=c(a("NwSH")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,a=e.err;return{statusCode:t&&t.statusCode?t.statusCode:a?a.statusCode:404}}var f=function(e){l(a,e);var t=i(a);function a(){return n(this,a),t.apply(this,arguments)}return r(a,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:g.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:g.h1},e):null,u.default.createElement("div",{style:g.desc},u.default.createElement("h2",{style:g.h2},t,"."))))}}]),a}(u.default.Component);t.default=f,f.displayName="ErrorPage",f.getInitialProps=p,f.origGetInitialProps=p;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"6QF7":function(e,t,a){e.exports={markdown:"PostBody_markdown___-zaK"}},DlD7:function(e,t,a){},"W/tA":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return a("3slx")}])},aEpu:function(e,t,a){e.exports=a("57r2")}},[["W/tA",0,4,5,1,2,3]]]);