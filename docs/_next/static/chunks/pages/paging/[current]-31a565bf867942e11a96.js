_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"K/GO":function(e,t,a){e.exports={excerpt:"PostItem_excerpt__3GYCA"}},NOv7:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a("xwgP"),n=a.n(r),s=a("rn73"),o=a.n(s),l=a("fHag"),c=a("MRay"),u=a("fvlj"),i=a("G9T2"),d=a("EwH3"),m=a("KN/5"),g=a.n(m),p=a("K/GO"),f=a.n(p),x=n.a.createElement;function b(e){var t=e.title,a=e.coverImage,r=e.date,n=e.excerpt,s=e.author,o=e.slug;return x(g.a,{as:"/posts/".concat(o),href:"/posts/[slug]"},x("section",{className:"md:flex md:rounded-xl p-8 md:p-0 mb-4 cursor-pointer hover:shadow-md",style:{background:"#fafafa"}},x("img",{className:"w-64 h-auto rounded-xl md:rounded-l-xl md:rounded-r-none mx-auto",src:a,alt:t,width:"384",height:"512"}),x("div",{className:"pt-6 md:p-4 text-center md:text-left space-y-4 flex-auto"},x("blockquote",{className:"mb-0"},x("h3",{className:"text-lg font-semibold"},x(g.a,{as:"/posts/".concat(o),href:"/posts/[slug]"},t))),x("figcaption",{className:"font-medium"},x("div",{className:"flex items-center"},x("img",{src:s.picture,className:"w-8 h-8 rounded-full mr-2",alt:s.name}),x("div",{className:"text-gray-800"},s.name),x("span",{className:"ml-1",style:{color:"#bfbfbf"}},x(d.a,{dateString:r}))),x("div",{className:f.a.excerpt},n)))))}var v=a("pyR8"),w=a("LFwS"),N=n.a.createElement;function h(e){var t=e.current,a=e.totalPage;return N("section",{className:"flex justify-between flex-wrap my-8"},N("div",null,t>1&&N(g.a,{as:"/paging/".concat(Number(t)-1),href:"/paging/[current]"},N("div",{className:"cursor-pointer flex items-center text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-10 duration-200 transition-colors"},N(v.a,null)))),N("div",null,t<a&&N(g.a,{as:"/paging/".concat(Number(t)+1),href:"/paging/[current]"},N("div",{className:"cursor-pointer flex items-center text-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-10 duration-200 transition-colors"},N(w.a,null)))))}var P=n.a.createElement;function _(e){var t=e.posts,a=e.current,r=e.totalPage;return P("section",null,P("div",{className:"mb-8"},t.map((function(e){return P(b,{key:e.slug,title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt})}))),P(h,{current:a,totalPage:r}))}var y=n.a.createElement;function k(e){var t=e.allPosts,a=e.postsByPageIndex,r=e.current,n=e.totalPage,s=e.tags;return y(i.a,null,y(o.a,null,y("title",null,"\u6de1\u70d8\u7cd5\u7684\u5b66\u4e60\u7b14\u8bb0")),y(l.a,null,y(c.a,null,y(_,{posts:a,current:r,totalPage:n})),y(u.a,{allPosts:t,tags:s})))}},aosB:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a("xwgP"),n=a.n(r),s=a("NOv7"),o=n.a.createElement,l=!0;function c(e){var t=e.allPosts,a=e.postsByPageIndex,r=e.current,n=e.totalPage,l=e.tags;return o(s.a,{allPosts:t,postsByPageIndex:a,current:r,totalPage:n,tags:l})}},cwKX:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/paging/[current]",function(){return a("aosB")}])}},[["cwKX",0,4,5,1,2,3]]]);