_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/a9y":function(e,t,a){"use strict";var n=a("lwsE"),r=a("W8MJ"),l=a("7W2i"),o=a("a1gu"),i=a("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=i(e);if(t){var r=i(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return o(this,a)}}var c=a("TqRt");t.__esModule=!0,t.default=void 0;var u=c(a("q1tI")),d=c(a("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,a=e.err;return{statusCode:t&&t.statusCode?t.statusCode:a?a.statusCode:404}}var p=function(e){l(a,e);var t=s(a);function a(){return n(this,a),t.apply(this,arguments)}return r(a,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:g.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:g.h1},e):null,u.default.createElement("div",{style:g.desc},u.default.createElement("h2",{style:g.h2},t,"."))))}}]),a}(u.default.Component);t.default=p,p.displayName="ErrorPage",p.getInitialProps=f,p.origGetInitialProps=f;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return a("3slx")}])},"20a2":function(e,t,a){e.exports=a("nOHt")},"3slx":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return q})),a.d(t,"default",(function(){return B}));var n=a("q1tI"),r=a.n(n),l=a("20a2"),o=a("eomm"),i=a.n(o),s=a("G9T2"),c=a("fHag"),u=a("YFqc"),d=a.n(u),m=r.a.createElement;function f(){return m("h2",{className:"text-base md:text-lg tracking-tight md:tracking-tighter leading-tight mb-4 mt-2"},m(d.a,{href:"/"},m("a",{className:"hover:underline"},"\u6de1\u70d8\u7cd5")),".")}var p=a("MRay"),g=a("fvlj"),v=a("EwH3"),h=r.a.createElement;function x(e){var t=e.name,a=e.picture,n=e.date;return h("div",{className:"flex items-center"},h("img",{src:a,className:"w-8 h-8 rounded-full mr-4",alt:t}),h("div",{className:"text-sm text-cyan-600"},t),h("span",{className:"ml-1 text-gray-500"},h(v.a,{dateString:n})))}var b=r.a.createElement;function y(e){var t=e.title,a=e.src,n=e.slug,r=b("img",{src:a,alt:"Cover Image for ".concat(t),className:"h-64 rounded-xl mx-auto"});return b("div",{className:"sm:mx-0"},n?b(d.a,{as:"/posts/".concat(n),href:"/posts/[slug]"},b("a",{"aria-label":t},r)):r)}var N=r.a.createElement;function k(e){var t=e.children;return N("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left"},t)}var w=r.a.createElement;function E(e){var t=e.title,a=e.coverImage,n=e.date,l=e.author;return w(r.a.Fragment,null,w(k,null,t),w("div",{className:"hidden md:block md:mb-12"},w(x,{name:l.name,picture:l.picture,date:n})),w("div",{className:"mb-6 md:mb-8 sm:mx-0"},w(y,{title:t,src:a})),w("div",{className:"mx-auto"},w("div",{className:"block md:hidden mb-6"},w(x,{name:l.name,picture:l.picture,date:n}))))}var _=a("rePB"),P=a("6QF7"),I=a.n(P),R=(a("5MvH"),r.a.createElement);function S(e){var t=e.content;return R("div",Object(_.a)({className:"mx-auto"},"className","markdown-body"),R("div",{className:I.a.markdown,dangerouslySetInnerHTML:{__html:t}}))}var C=a("jhfD"),F=a("rxVv"),H=r.a.createElement;function M(e){var t=e.prevNextPost,a=t.prevPost,n=t.nextPost;return H("section",{className:"flex justify-between my-8"},H("div",null,n&&H(d.a,{as:"/posts/".concat(n.slug),href:"/posts/[slug]"},H("div",{className:"cursor-pointer flex items-center h-10 text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 duration-200 transition-colors"},H(C.a,null),H("span",{className:"ml-2"},n.title)))),H("div",null,a&&H(d.a,{as:"/posts/".concat(a.slug),href:"/posts/[slug]"},H("div",{className:"cursor-pointer flex items-center h-10 text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 duration-200 transition-colors"},H("span",{className:"mr-2"},a.title),H(F.a,null)))))}var A=a("g4pe"),T=a.n(A),j=r.a.createElement,q=!0;function B(e){var t=e.post,a=e.allPosts,n=e.prevNextPost,o=e.preview,u=Object(l.useRouter)();return u.isFallback||(null===t||void 0===t?void 0:t.slug)?j(s.a,{preview:o},j(T.a,null,j("title",null,t.title," | \u6de1\u70d8\u7cd5"),j("meta",{property:"og:image",content:t.ogImage.url}),j("meta",{name:"description",itemprop:"description",content:t.description}),j("meta",{name:"keywords",itemprop:"keywords",content:t.keyword})),j(c.a,null,u.isFallback?j(k,null,"Loading\u2026"):j(r.a.Fragment,null,j(p.a,null,j(f,null),j(E,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),j(S,{content:t.content}),j(M,{prevNextPost:n})),j(g.a,{allPosts:a})))):j(i.a,{statusCode:404})}},"5MvH":function(e,t,a){},"6QF7":function(e,t,a){e.exports={markdown:"PostBody_markdown___-zaK"}},eomm:function(e,t,a){e.exports=a("/a9y")}},[["1VCc",0,2,1,3]]]);