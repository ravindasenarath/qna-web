(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3UyI":function(e,a,t){e.exports={avatarCard:"avatar-card_avatarCard__2hQcN",avatar:"avatar-card_avatar__20yjw",displayname:"avatar-card_displayname__12lfX",username:"avatar-card_username__2nA1y",created:"avatar-card_created__IIhTO"}},BPHX:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[username]",function(){return t("nlSI")}])},FC4T:function(e,a,t){e.exports={header:"post-list_header__2k9RI",notfound:"post-list_notfound__27nDa"}},PVoT:function(e,a,t){e.exports={container:"post-item_container__11ydE",vote:"post-item_vote__VqjN5",title:"post-item_title__360V0",created:"post-item_created__oTonw"}},isiQ:function(e,a,t){e.exports={container:"user-card_container__3QVfe"}},nlSI:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSP",(function(){return X}));var n=t("o0o1"),r=t.n(n),s=t("HaE+"),c=t("q1tI"),i=t.n(c),o=t("8Kt/"),u=t.n(o),l=t("Qv+q"),d=t("okHz"),v=t("isiQ"),p=t.n(v),f=i.a.createElement,_=function(e){var a=e.children;return f("div",{className:p.a.container},a)},m=t("YFqc"),h=t.n(m),N=t("HM39"),y=t("sV8b"),b=t("dhEp"),w=t("3UyI"),j=t.n(w),g=i.a.createElement,E=function(e){var a=e.username,t=Object(c.useState)(null),n=t[0],i=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.get("/user/".concat(a));case 2:t=e.sent,n=t.data,i(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),g("div",null,g("div",{className:j.a.avatarCard},n?g("div",{className:j.a.avatar},g(h.a,{href:"/users/[username]",as:"/users/".concat(a)},g("a",null,g("img",{src:Object(y.a)(n,164),alt:a})))):g("div",{className:"loading"},g(b.h,null)),n&&g("h2",{className:j.a.displayname},n.displayname),g("h4",{className:j.a.username},"(",a,")"),n?g("div",{className:j.a.created},g("p",null,"Created:"," ",g("span",null,Object(N.a)(new Date(n.created),{addSuffix:!0})))):g("div",{className:"loading"},g(b.h,null))))},T=t("Abyp"),x=t("FC4T"),O=t.n(x),P=i.a.createElement,S=function(e){var a=e.postType,t=e.setPostType,n=e.children;return P("div",{className:O.a.container},P("div",{className:O.a.header},P("h2",null,"Last Questions"),P(T.a,{buttons:["Questions"],selected:a,setSelected:t})),n)},q=t("071Y"),Q=t.n(q),I=t("PVoT"),k=t.n(I),V=i.a.createElement,C=function(e){var a=e.vote,t=e.title,n=e.created,r=e.id;return V("div",{className:k.a.container},V("div",{className:k.a.vote},a),V(h.a,{href:"/questions/[slug]",as:"/questions/".concat(r,"-").concat(Q()(t))},V("a",{className:k.a.title},t)),V("div",{className:k.a.created},Object(N.a)(new Date(n),{addSuffix:!0})))},H=i.a.createElement,X=!0;a.default=function(e){var a=e.username,t=Object(c.useState)(null),n=t[0],i=t[1],o=Object(c.useState)("Questions"),v=o[0],p=o[1];return Object(c.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.get("/questions/user/".concat(a));case 2:t=e.sent,n=t.data,i(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v,a]),H(d.a,{extra:!1},H(u.a,null,H("title",null,"Users ",a," - NPP Q&A")),H(_,null,H(E,{username:a}),H(S,{postType:v,setPostType:p},!n&&H("div",{className:"loading"},H(b.h,null)),null===n||void 0===n?void 0:n.map((function(e){var a=e.id,t=e.title,n=e.score,r=e.created;return H(C,{key:a,title:t,vote:n,created:r,id:a})})),0==(null===n||void 0===n?void 0:n.length)&&H("p",{className:"not-found-questions"},"Don't have any questions yet."))))}},sV8b:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e,a){return"admin"===e.role?"/images/npp-logo.jpg":"https://secure.gravatar.com/avatar/".concat(e.id,"?s=").concat(a,"&d=identicon")}}},[["BPHX",0,2,1,3,4,6]]]);