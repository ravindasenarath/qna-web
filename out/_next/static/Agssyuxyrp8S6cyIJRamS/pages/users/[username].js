(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3UyI":function(e,a,t){e.exports={avatarCard:"avatar-card_avatarCard__2hQcN",avatar:"avatar-card_avatar__20yjw",displayname:"avatar-card_displayname__12lfX",username:"avatar-card_username__2nA1y",created:"avatar-card_created__IIhTO"}},BPHX:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[username]",function(){return t("nlSI")}])},FC4T:function(e,a,t){e.exports={header:"post-list_header__2k9RI",notfound:"post-list_notfound__27nDa"}},PVoT:function(e,a,t){e.exports={container:"post-item_container__11ydE",vote:"post-item_vote__VqjN5",title:"post-item_title__360V0",created:"post-item_created__oTonw"}},isiQ:function(e,a,t){e.exports={container:"user-card_container__3QVfe"}},nlSI:function(e,a,t){"use strict";t.r(a),t.d(a,"getStaticProps",(function(){return X}));var n=t("o0o1"),r=t.n(n),s=t("HaE+"),c=t("q1tI"),u=t.n(c),i=t("8Kt/"),o=t.n(i),l=t("Qv+q"),d=t("okHz"),p=t("isiQ"),v=t.n(p),f=u.a.createElement,m=function(e){var a=e.children;return f("div",{className:v.a.container},a)},_=t("YFqc"),h=t.n(_),y=t("HM39"),N=t("sV8b"),b=t("dhEp"),w=t("3UyI"),j=t.n(w),g=u.a.createElement,x=function(e){var a=e.username,t=Object(c.useState)(null),n=t[0],u=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.get("/user/".concat(a));case 2:t=e.sent,n=t.data,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),g("div",null,g("div",{className:j.a.avatarCard},n?g("div",{className:j.a.avatar},g(h.a,{href:"/users/[username]",as:"/users/".concat(a)},g("a",null,g("img",{src:Object(N.a)(n,164),alt:a})))):g("div",{className:"loading"},g(b.h,null)),n&&g("h2",{className:j.a.displayname},n.displayname),g("h4",{className:j.a.username},"(",a,")"),n?g("div",{className:j.a.created},g("p",null,"Created:"," ",g("span",null,Object(y.a)(new Date(n.created),{addSuffix:!0})))):g("div",{className:"loading"},g(b.h,null))))},E=t("Abyp"),O=t("FC4T"),T=t.n(O),P=u.a.createElement,q=function(e){var a=e.postType,t=e.setPostType,n=e.children;return P("div",{className:T.a.container},P("div",{className:T.a.header},P("h2",null,"Last Questions"),P(E.a,{buttons:["Questions"],selected:a,setSelected:t})),n)},Q=t("071Y"),k=t.n(Q),I=t("PVoT"),S=t.n(I),V=u.a.createElement,C=function(e){var a=e.vote,t=e.title,n=e.created,r=e.id;return V("div",{className:S.a.container},V("div",{className:S.a.vote},a),V(h.a,{href:"/questions/[slug]",as:"/questions/".concat(r,"-").concat(k()(t))},V("a",{className:S.a.title},t)),V("div",{className:S.a.created},Object(y.a)(new Date(n),{addSuffix:!0})))},H=u.a.createElement;function X(e){return D.apply(this,arguments)}function D(){return(D=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.params.username,e.abrupt("return",{props:{username:t}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.default=function(e){var a=e.username,t=Object(c.useState)(null),n=t[0],u=t[1],i=Object(c.useState)("Questions"),p=i[0],v=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.get("/questions/user/".concat(a));case 2:t=e.sent,n=t.data,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p,a]),H(d.a,{extra:!1},H(o.a,null,H("title",null,"Users ",a," - NPP Q&A")),H(m,null,H(x,{username:a}),H(q,{postType:p,setPostType:v},!n&&H("div",{className:"loading"},H(b.h,null)),null===n||void 0===n?void 0:n.map((function(e){var a=e.id,t=e.title,n=e.score,r=e.created;return H(C,{key:a,title:t,vote:n,created:r,id:a})})),0==(null===n||void 0===n?void 0:n.length)&&H("p",{className:"not-found-questions"},"Don't have any questions yet."))))}},sV8b:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e,a){return"admin"===e.role?"/images/npp-logo.jpg":"https://secure.gravatar.com/avatar/".concat(e.id,"?s=").concat(a,"&d=identicon")}}},[["BPHX",0,2,1,3,4,6]]]);