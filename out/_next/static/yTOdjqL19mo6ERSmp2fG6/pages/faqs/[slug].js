(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+WX+":function(t,e,n){t.exports={container:"detail-page-container_container__3BRtT"}},"/eOx":function(t,e,n){t.exports={postCell:"post-summary_postCell__1oBZ0",text:"post-summary_text__18Au_",footer:"post-summary_footer__1H-y1",row:"post-summary_row__ZOglb",tagContainer:"post-summary_tagContainer__3H-7-",userDetails:"post-summary_userDetails__3b4Vw",info:"post-summary_info__3c04Z",delete:"post-summary_delete__2WLyb"}},"0IiK":function(t,e,n){t.exports={voteCell:"post-vote_voteCell__1GCHp",voteButton:"post-vote_voteButton__1PHsV",voted:"post-vote_voted__2mE9z",score:"post-vote_score__2te3m"}},OTcJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return v}));var a=n("q1tI"),r=n.n(a),o=n("vDqi"),s=n.n(o),c=n("LIAn"),u=n("Qv+q"),i=r.a.createElement,l=Object(a.createContext)(),d=l.Provider,v=function(t){var e=t.children,n=Object(a.useContext)(c.a).authState,r=s.a.create({baseURL:u.a});return r.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(n.token),t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){var e=t&&t.response?t.response.status:0;return 401!==e&&403!==e||console.log("error code",e),Promise.reject(t)})),i(d,{value:{authAxios:r}},e)}},c9jt:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),s=n("q1tI"),c=n.n(s),u=n("nOHt"),i=n("YFqc"),l=n.n(i),d=n("HM39"),v=n("LIAn"),f=n("OTcJ"),p=n("Z7cN"),m=n("/eOx"),_=n.n(m),h=n("sV8b"),b=c.a.createElement;e.a=function(t){var e,n=t.tags,a=t.author,c=t.created,i=t.questionId,m=t.answerId,w=t.setQuestion,x=t.children,q=Object(s.useContext)(v.a),g=q.authState,y=q.isAdmin,j=Object(s.useContext)(f.a).authAxios,C=Object(u.useRouter)(),O=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure delete your post?")){t.next=7;break}return t.next=4,j.delete(m?"/answer/".concat(i,"/").concat(m):"/question/".concat(i));case 4:e=t.sent,n=e.data,m?w(n):C.push("/");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return b("div",{className:_.a.postCell},b("div",{className:_.a.text},x),b("div",{className:_.a.footer},b("div",{className:_.a.row},b("div",{className:_.a.tagContainer},null===n||void 0===n?void 0:n.map((function(t){return b(p.a,{key:t},t)}))),b("div",{className:_.a.userDetails},b(l.a,{href:"/users/[user]",as:"/users/".concat(a.username)},b("a",null,b("img",{src:Object(h.a)(a,32),alt:a.username}))),b("div",{className:_.a.info},b("span",null,n?"asked":"answered"," ",Object(d.a)(new Date(c),{addSuffix:!0})),b(l.a,{href:"/users/[user]",as:"/users/".concat(a.username)},b("a",null,a.displayname))))),((null===(e=g.userInfo)||void 0===e?void 0:e.id)===a.id||y())&&b("div",{className:_.a.row},b("a",{className:_.a.delete,onClick:function(){return O()}},"delete"))))}},ep1A:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("v0uu"),s=n("MhZx"),c=n("jCHi"),u=n("thU0"),i=n("+WX+"),l=n.n(i),d=r.a.createElement;e.a=function(t){var e=t.children,n=Object(s.a)();return d("div",{className:l.a.container},d(u.a,{border:!1},e),n.width>o.c.TABLET_SIZE&&d(c.a,{marginTop:16}))}},hdAE:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return w}));var a=n("o0o1"),r=n.n(a),o=n("HaE+"),s=n("q1tI"),c=n.n(s),u=n("8Kt/"),i=n.n(u),l=n("Qv+q"),d=n("okHz"),v=n("oVS1"),f=n("ep1A"),p=n("nF3H"),m=n("z3Z8"),_=n("c9jt"),h=n("dhEp"),b=c.a.createElement,w=!0;e.default=function(t){var e=t.faqId,n=t.title,a=Object(s.useState)(null),u=a[0],w=a[1];Object(s.useEffect)((function(){(function(){var t=Object(o.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.get("/faq/".concat(e));case 2:n=t.sent,a=n.data,w(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);return b(d.a,{extra:!1},b(i.a,null,u&&b("title",null,u.title),!u&&b("title",null,n),b("link",{rel:"canonical",href:window.location.href})),b(f.a,null,!u&&b("div",{className:"loading"},b(h.h,null)),u&&b(c.a.Fragment,null,b(v.a,{title:u.title,create:"Add FAQ",createComp:"/faqs/add"}),b(p.a,{key:"faq-question",borderBottom:!1},b(m.a,{score:u.score,votes:u.votes,faqId:e,setFaq:w}),b(_.a,{tags:u.tags,author:u.author,created:u.created,faqId:e},u.question)),b(p.a,{key:"faq-answer"},b(_.a,{author:u.author,created:u.created,questionId:e},u.answer)))))}},l4qj:function(t,e,n){t.exports={layout:"post-wrapper_layout__bER9l",adminPost:"post-wrapper_adminPost__1xTUq",borderBottom:"post-wrapper_borderBottom__3ei2Z"}},nF3H:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),s=n.n(o),c=n("l4qj"),u=n.n(c),i=r.a.createElement;e.a=function(t){var e=t.borderBottom,n=void 0===e||e,a=t.isAdminPost,r=void 0!==a&&a,o=t.children;return i("div",{className:s()(u.a.layout,n&&u.a.borderBottom,r&&u.a.adminPost)},o)}},oVS1:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),s=n.n(o),c=n("LIAn"),u=n("HlVv"),i=n("sXwS"),l=n.n(i),d=r.a.createElement;e.a=function(t){var e=t.title,n=t.create,r=t.createComp,o=t.borderBottom,i=void 0===o||o,v=(t.start,t.children),f=Object(a.useContext)(c.a).isAuthenticated;return d("div",{className:s()(l.a.container,i&&l.a.borderBottom)},d("div",{className:l.a.title},d("h1",null,e),d("div",{className:l.a.buttonContainer},n&&d(u.a,{href:f()?r:"/auth",primary:!0},n))),v&&d("p",{className:l.a.summary},v))}},sV8b:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(t,e){return"admin"===t.role?"/images/npp-logo.jpg":"https://secure.gravatar.com/avatar/".concat(t.id,"?s=").concat(e,"&d=identicon")}},sXwS:function(t,e,n){t.exports={container:"page-title_container__2y0RO",borderBottom:"page-title_borderBottom__ijYtw",title:"page-title_title__tRISx",summary:"page-title_summary__3wbe9",buttonContainer:"page-title_buttonContainer__13v6e"}},tUTU:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs/[slug]",function(){return n("hdAE")}])},z3Z8:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),s=n("q1tI"),c=n.n(s),u=n("LIAn"),i=n("OTcJ"),l=n("/Wiz"),d=n("HlVv"),v=n("dhEp"),f=n("0IiK"),p=n.n(f),m=c.a.createElement;e.a=function(t){var e=t.score,n=t.votes,a=t.questionId,c=t.answerId,f=t.setQuestion,_=Object(s.useContext)(u.a),h=_.authState,b=_.isAuthenticated,w=Object(s.useContext)(i.a).authAxios,x=Object(s.useContext)(l.a).handleComponentVisible,q=function(){var t;return 1===(null===(t=n.find((function(t){var e;return t.user===(null===(e=h.userInfo)||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.vote)},g=function(){var t;return-1===(null===(t=n.find((function(t){var e;return t.user===(null===(e=h.userInfo)||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.vote)},y=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/votes/upvote/".concat(a,"/").concat(c||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/votes/downvote/".concat(a,"/").concat(c||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/votes/unvote/".concat(a,"/").concat(c||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m("div",{className:p.a.voteCell},m(d.a,{className:p.a.voteButton,onClick:function(){return b()?q()?C():y():x(!0,"signup")}},m(v.c,{className:q()?p.a.voted:""})),m("div",{className:p.a.score},e),m(d.a,{className:p.a.voteButton,onClick:function(){return b()?g()?C():j():x(!0,"signup")}},m(v.b,{className:g()?p.a.voted:""})))}}},[["tUTU",0,2,1,3,4]]]);