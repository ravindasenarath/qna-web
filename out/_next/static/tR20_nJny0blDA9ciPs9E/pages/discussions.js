(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+A3Y":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("YFqc"),i=a.n(s),c=a("HM39"),o=a("071Y"),u=a.n(o),l=a("Z7cN"),d=a("pst3"),m=a.n(d),v=r.a.createElement;t.a=function(e){var t=e.type,a=e.id,n=e.title,r=e.tags,s=e.author,o=e.createdTime,d=e.children;return v("div",{className:m.a.container},v(i.a,{href:"/".concat(t,"/[slug]"),as:"/".concat(t,"/").concat(a,"-").concat(u()(n))},v("a",{className:m.a.link},n)),v("div",{className:m.a.excerpt},d),v("div",{className:m.a.footer},v("div",{className:m.a.tagContainer},r.map((function(e){return v(l.a,{key:e},e)}))),v("div",{className:m.a.userDetails},v(i.a,{href:"/users/[user]",as:"/users/".concat(s.username)},v("a",null,v("img",{src:"https://secure.gravatar.com/avatar/".concat(s.id,"?s=32&d=identicon"),alt:s.username}))),v("div",{className:m.a.info},v("span",null,"asked"," ",Object(c.a)(new Date(o),{addSuffix:!0})),v(i.a,{href:"/users/[user]",as:"/users/".concat(s.username)},v("a",null,s.displayname))))))}},Jhv0:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("j2Z4"),i=a.n(s),c=r.a.createElement;t.a=function(e){var t=e.voteCount,a=e.answerCount,n=void 0===a?null:a,r=e.view;return c("div",{className:i.a.container},c("div",{className:i.a.vote},c("span",null,t),c("p",null,"votes")),null!==n&&c("div",{className:i.a.answer},c("span",null,n),c("p",null,"answers")),c("p",{className:i.a.view},r," views"))}},Wds1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("m9Vz"),i=a.n(s),c=r.a.createElement;t.a=function(e){var t=e.children;return c("div",{className:i.a.container},t)}},dfzJ:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),s=a("HaE+"),i=a("q1tI"),c=a.n(i),o=a("8Kt/"),u=a.n(o),l=a("nOHt"),d=a("Qv+q"),m=a("okHz"),v=a("Wds1"),_=a("Jhv0"),f=a("+A3Y"),p=a("oVS1"),w=a("Abyp"),h=a("dhEp"),g=a("v0uu"),b=c.a.createElement;t.default=function(){var e=Object(l.useRouter)(),t=Object(i.useState)(null),a=t[0],n=t[1],c=Object(i.useState)("Votes"),o=c[0],y=c[1];Object(i.useEffect)((function(){var t=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.b.get("/discussions");case 2:t=e.sent,a=t.data,n(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var t=Object(s.a)(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.b.get("/discussions/".concat(e.query.tag));case 2:a=t.sent,s=a.data,n(s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.query.tag?a():t()}),[e.query.tag]);return b(m.a,null,b(u.a,null,b("title",null,e.query.tag?e.query.tag:"Discussions"," - NPP Q&A")),b(p.a,{title:e.query.tag?"Discussions tagged [".concat(e.query.tag,"]"):"All Discussions",create:"Start Discussion",createComp:"/discussions/start",borderBottom:!1}),b(w.a,{borderBottom:!0,buttons:["Votes","Views","Newest","Oldest"],selected:o,setSelected:y}),!a&&b("div",{className:"loading"},b(h.h,null)),null===a||void 0===a?void 0:a.sort(function(){switch(o){case"Votes":return function(e,t){return t.score-e.score};case"Views":return function(e,t){return t.views-e.views};case"Newest":return function(e,t){return new Date(t.created)-new Date(e.created)};case"Oldest":return function(e,t){return new Date(e.created)-new Date(t.created)}}}()).map((function(e){var t=e.id,a=e.votes,n=e.answers,r=e.views,s=e.title,i=e.text,c=e.tags,o=e.author,u=e.created;return b(v.a,{key:t},b(_.a,{voteCount:a.length,answerCount:n.length,view:r}),b(f.a,{type:g.b.DISCUSSIONS,id:t,title:s,tags:c,author:o,createdTime:u},i))})))}},j2Z4:function(e,t,a){e.exports={container:"thread-stats_container__10STB",vote:"thread-stats_vote__2M13O",answer:"thread-stats_answer__31-BG",view:"thread-stats_view__34L9w"}},m9Vz:function(e,t,a){e.exports={container:"thread-wrapper_container__J56e-"}},oVS1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("TSYQ"),i=a.n(s),c=a("LIAn"),o=a("HlVv"),u=a("sXwS"),l=a.n(u),d=r.a.createElement;t.a=function(e){var t=e.title,a=e.create,r=e.createComp,s=e.borderBottom,u=void 0===s||s,m=(e.start,e.children),v=Object(n.useContext)(c.a).isAuthenticated;return d("div",{className:i()(l.a.container,u&&l.a.borderBottom)},d("div",{className:l.a.title},d("h1",null,t),d("div",{className:l.a.buttonContainer},a&&d(o.a,{href:v()?r:"/auth",primary:!0},a))),m&&d("p",{className:l.a.summary},m))}},"obK+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/discussions",function(){return a("dfzJ")}])},pst3:function(e,t,a){e.exports={container:"thread-summary_container__2ePqz",link:"thread-summary_link__1AVor",excerpt:"thread-summary_excerpt__14IF2",footer:"thread-summary_footer__1gN6a",tagContainer:"thread-summary_tagContainer__3QCnW",userDetails:"thread-summary_userDetails__2qS1J",info:"thread-summary_info__3RAiK"}},sXwS:function(e,t,a){e.exports={container:"page-title_container__2y0RO",borderBottom:"page-title_borderBottom__ijYtw",title:"page-title_title__tRISx",summary:"page-title_summary__3wbe9",buttonContainer:"page-title_buttonContainer__13v6e"}}},[["obK+",0,2,1,3,4,6]]]);