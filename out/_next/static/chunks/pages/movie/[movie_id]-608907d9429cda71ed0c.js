_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{M9VM:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie/[movie_id]",function(){return a("Zr2r")}])},Zr2r:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var i=a("nKUr"),n=a("rePB"),r=a("g4pe"),c=a.n(r),o=(a("q1tI"),a("20a2")),s=(a("VtrM"),a("xwo/")),l=a("qH/0"),m=a("0KWv"),d=a("qMnc"),j=a("R/WZ"),b=a("tRbT"),u=a("30+C"),v=a("ofer"),x=a("wb2y"),h=Object(j.a)((function(e){return{movieInfo:Object(n.a)({padding:"0px 100px",marginTop:-70},e.breakpoints.down("sm"),{padding:"0px 16px"}),card:Object(n.a)({width:214.54,height:281.54,backgroundColor:"silver",marginBottom:16,marginRight:8,backgroundSize:"100% 100%",backgroundPosition:"0% 0%",backgroundRepeat:"no-repeat"},e.breakpoints.down("sm"),{width:114.54,height:181.54}),movieTitle:{display:"flex",flexDirection:"column",marginLeft:54,justifyContent:"center"},movieTitleInfo:{marginTop:24},section:{marginTop:32},recomm:{marginTop:32,padding:"0px 100px"},infoItem:{marginRight:24},moviInfo_label:{marginBottom:24}}}));function O(){var e=h(),t=Object(o.useRouter)(),a=Object(s.b)(t.query.movie_id).movie,n=Object(s.d)(t.query.movie_id).trailer,r=Object(s.a)(t.query.movie_id).cast,j=Object(s.c)(t.query.movie_id).recomm;return a?Object(i.jsxs)("div",{children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)("meta",{name:"description",content:"Generated by create next app"}),Object(i.jsx)("title",{children:"Moviebot"})]}),Object(i.jsx)(l.a,{}),Object(i.jsx)(m.a,{img:a}),Object(i.jsxs)("main",{children:[Object(i.jsxs)(b.a,{container:!0,className:e.movieInfo,children:[Object(i.jsxs)(b.a,{item:!0,container:!0,xs:12,children:[Object(i.jsx)(b.a,{item:!0,children:Object(i.jsx)(u.a,{className:e.card,style:{backgroundImage:'url("https://image.tmdb.org/t/p/w500'.concat(a.poster_path,'")')}})}),Object(i.jsxs)("div",{className:e.movieTitle,children:[Object(i.jsx)(v.a,{variant:"h3",children:a.original_title}),Object(i.jsxs)(b.a,{item:!0,container:!0,className:e.movieTitleInfo,children:[Object(i.jsx)(v.a,{variant:"subtitle1",className:e.infoItem,children:a.release_date}),Object(i.jsx)(x.a,{orientation:"vertical",flexItem:!0,className:e.infoItem}),a.genres.map((function(t,a){return Object(i.jsx)(v.a,{variant:"subtitle1",className:e.infoItem,children:t.name},a)})),Object(i.jsx)(x.a,{orientation:"vertical",flexItem:!0,className:e.infoItem}),Object(i.jsx)(v.a,{variant:"subtitle1",className:e.infoItem,children:a.vote_average})]})]})]}),Object(i.jsxs)(b.a,{item:!0,container:!0,xs:12,className:e.section,children:[Object(i.jsxs)(b.a,{item:!0,xs:6,children:[Object(i.jsx)(v.a,{variant:"h6",className:e.moviInfo_label,children:"Overview"}),Object(i.jsx)(v.a,{variant:"subtitle2",style:{paddingRight:20},children:a.overview})]}),Object(i.jsxs)(b.a,{item:!0,xs:2,children:[Object(i.jsx)(v.a,{variant:"h6",className:e.moviInfo_label,children:"Director"}),Object(i.jsx)(v.a,{variant:"subtitle2",children:"Christoper Nolan"})]}),Object(i.jsxs)(b.a,{item:!0,xs:2,children:[Object(i.jsx)(v.a,{variant:"h6",className:e.moviInfo_label,children:"Revenue"}),Object(i.jsxs)(v.a,{variant:"subtitle2",children:["$",a.revenue]})]}),Object(i.jsxs)(b.a,{item:!0,xs:2,children:[Object(i.jsx)(v.a,{variant:"h6",className:e.moviInfo_label,children:"Budget"}),Object(i.jsxs)(v.a,{variant:"subtitle2",children:["$",a.budget]})]})]}),Object(i.jsxs)(b.a,{item:!0,container:!0,xs:12,className:e.section,children:[Object(i.jsx)(d.a,{title:"Trailer",type:"trailer",datas:n}),Object(i.jsx)(d.a,{title:"Cast",type:"cast",datas:r})]})]}),Object(i.jsx)(b.a,{container:!0,className:e.recomm,children:Object(i.jsx)(b.a,{item:!0,xs:12,children:Object(i.jsx)(d.a,{title:"Recommendation",list:"recommendation",type:"movie",datas:j})})})]}),Object(i.jsx)("footer",{})]}):Object(i.jsx)("div",{children:console.log(a)})}},"xwo/":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s}));a("20a2");var i=a("VtrM"),n=function(e){return fetch(e).then((function(e){return e.json()}))},r=function(e){var t=Object(i.a)("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"),n);return{movie:t.data,error:t.error}},c=function(e){var t=Object(i.a)("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"),n);return{trailer:t.data,error:t.error}},o=function(e){var t=Object(i.a)("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1"),n);return{recomm:t.data,error:t.error}},s=function(e){var t=Object(i.a)("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US"),n);return{cast:t.data,error:t.error}}}},[["M9VM",0,2,1,3,4]]]);