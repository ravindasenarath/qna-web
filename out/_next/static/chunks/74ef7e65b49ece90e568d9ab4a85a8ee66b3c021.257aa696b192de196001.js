(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+WX+":function(t,e,n){t.exports={container:"detail-page-container_container__3BRtT"}},"/eOx":function(t,e,n){t.exports={postCell:"post-summary_postCell__1oBZ0",text:"post-summary_text__18Au_",footer:"post-summary_footer__1H-y1",row:"post-summary_row__ZOglb",tagContainer:"post-summary_tagContainer__3H-7-",userDetails:"post-summary_userDetails__3b4Vw",info:"post-summary_info__3c04Z",delete:"post-summary_delete__2WLyb"}},"0IiK":function(t,e,n){t.exports={voteCell:"post-vote_voteCell__1GCHp",voteButton:"post-vote_voteButton__1PHsV",voted:"post-vote_voted__2mE9z",score:"post-vote_score__2te3m"}},"2Zz9":function(t,e,n){t.exports={container:"button-group_container__F0-AA",active:"button-group_active__3Y2Lf",borderBottom:"button-group_borderBottom__2Wu6p"}},"8Xn0":function(t,e,n){t.exports={commentContainer:"comment-item_commentContainer__1ce-y",owner:"comment-item_owner__2ewyj",dateText:"comment-item_dateText__qy-uB",delete:"comment-item_delete__3NnEO"}},Abyp:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("HlVv"),c=n("2Zz9"),u=n.n(c),d=r.a.createElement;e.a=function(t){var e=t.buttons,n=t.selected,a=t.setSelected,r=t.borderBottom,o=void 0!==r&&r;return d("div",{className:i()(u.a.container,o&&u.a.borderBottom)},e.map((function(t){return d(s.a,{key:t,className:n===t&&u.a.active,onClick:function(){return a(t)}},t)})))}},ID87:function(t,e,n){t.exports={commentCell:"comment-list_commentCell__369F6",animation:"comment-list_animation__rHsIw","background-fade":"comment-list_background-fade__fZHu5",addComment:"comment-list_addComment__2rHR8",showMore:"comment-list_showMore__1QN6w"}},JW02:function(t,e,n){t.exports={container:"answer-container_container__1JhnB",header:"answer-container_header__2xWxk",adminAnswer:"answer-container_adminAnswer__BLqC5",fill:"answer-container_fill__2nEgn"}},Ldsk:function(t,e,n){t.exports={container:"textarea_container__u09m6",textarea:"textarea_textarea__1_Q73",hasError:"textarea_hasError__1Y7I-",errorMessage:"textarea_errorMessage__1KI89",label:"textarea_label__mSDaL",inputInfo:"textarea_inputInfo__2dxbD"}},OTcJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var a=n("q1tI"),r=n.n(a),o=n("vDqi"),i=n.n(o),s=n("LIAn"),c=n("Qv+q"),u=r.a.createElement,d=Object(a.createContext)(),l=d.Provider,m=function(t){var e=t.children,n=Object(a.useContext)(s.a).authState,r=i.a.create({baseURL:c.a});return r.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(n.token),t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){var e=t&&t.response?t.response.status:0;return 401!==e&&403!==e||console.log("error code",e),Promise.reject(t)})),u(l,{value:{authAxios:r}},e)}},QOvq:function(t,e,n){t.exports={container:"add-response_container__20VEb",textarea:"add-response_textarea__U73AR",status:"add-response_status__1LJst"}},bOU5:function(t,e,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("TSYQ"),c=n.n(s),u=n("Ldsk"),d=n.n(u),l=i.a.createElement;e.a=function(t){var e=t.label,n=t.inputInfo,o=t.hasError,i=t.errorMessage,s=t.className,u=Object(r.a)(t,["label","inputInfo","hasError","errorMessage","className"]);return l("div",{className:d.a.container},e&&l("label",{className:d.a.label},e),n&&l("p",{className:d.a.inputInfo},n),l("textarea",Object(a.a)({className:c()(d.a.textarea,s,o&&d.a.hasError)},u)),o&&l("p",{className:d.a.errorMessage},i))}},c9jt:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("nOHt"),u=n("YFqc"),d=n.n(u),l=n("HM39"),m=n("LIAn"),f=n("OTcJ"),h=n("Z7cN"),v=n("/eOx"),w=n.n(v),b=n("sV8b"),g=s.a.createElement;e.a=function(t){var e,n=t.tags,a=t.author,s=t.created,u=t.questionId,v=t.answerId,p=t.setQuestion,_=t.isUserDetailsVisible,x=void 0===_||_,C=t.children,y=Object(i.useContext)(m.a),O=y.authState,T=y.isAdmin,N=Object(i.useContext)(f.a).authAxios,j=Object(c.useRouter)(),S=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure delete your post?")){t.next=7;break}return t.next=4,N.delete(v?"/answer/".concat(u,"/").concat(v):"/question/".concat(u));case 4:e=t.sent,n=e.data,v?p(n):j.push("/");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return g("div",{className:w.a.postCell},g("div",{className:w.a.text},C),g("div",{className:w.a.footer},g("div",{className:w.a.row},g("div",{className:w.a.tagContainer},null===n||void 0===n?void 0:n.map((function(t){return g(h.a,{key:t},t)}))),x&&g("div",{className:w.a.userDetails},g(d.a,{href:"/users/[user]",as:"/users/".concat(a.username)},g("a",null,g("img",{src:Object(b.a)(a,32),alt:a.username}))),g("div",{className:w.a.info},g("span",null,n?"asked":"answered"," ",Object(l.a)(new Date(s),{addSuffix:!0})),g(d.a,{href:"/users/[user]",as:"/users/".concat(a.username)},g("a",null,a.displayname))))),((null===(e=O.userInfo)||void 0===e?void 0:e.id)===a.id||T())&&g("div",{className:w.a.row},g("a",{className:w.a.delete,onClick:function(){return S()}},"delete"))))}},cdMG:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("YFqc"),u=n.n(c),d=n("KYPV"),l=n("UGp+"),m=n("OTcJ"),f=n("LIAn"),h=n("/Wiz"),v=n("bOU5"),w=n("HlVv"),b=n("Z7cN"),g=n("QOvq"),p=n.n(g),_=s.a.createElement;e.a=function(t){var e=t.type,n=t.id,a=t.tags,s=t.setResponse,c=Object(i.useContext)(m.a).authAxios,g=Object(i.useContext)(f.a).isAuthenticated,x=Object(i.useContext)(h.a).handleComponentVisible,C=Object(i.useState)(!1),y=C[0],O=C[1];return _(d.a,{initialValues:{text:""},onSubmit:function(){var t=Object(o.a)(r.a.mark((function t(a,o){var i,u,d,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.setStatus,u=o.resetForm,O(!0),t.prev=2,t.next=5,c.post("/".concat(e,"/").concat(n),a);case 5:d=t.sent,l=d.data,s(l),u({}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),i(t.t0.response.data.message);case 14:O(!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}(),validationSchema:l.b({text:l.d().required("Body is missing.").min(30,"Body must be at least 30 characters.").max(3e4,"Body cannot be longer than 30000 characters.")})},(function(t){var e=t.values,n=t.errors,r=t.touched,o=t.status,i=t.handleChange,s=t.handleBlur,c=t.handleSubmit,d=t.isSubmitting;return _("form",{className:p.a.container,onSubmit:c},_("h2",null,"Your answer"),_(v.a,{name:"text",autoComplete:"off",value:e.text,onChange:i,onBlur:s,hasError:r.text&&n.text,errorMessage:n.text&&n.text,className:p.a.textarea}),_("p",{className:p.a.status},o),_("div",{className:p.a.button},_(w.a,{type:"submit",primary:!0,isLoading:y,disabled:d,onClick:function(){return!g()&&x(!0,"signup")}},"Post Your Answer")),_("h3",null,"Browse other questions tagged \xa0",a.map((function(t){return _(b.a,{key:t},t)})),"or \xa0",_(u.a,{href:"/questions/ask",as:"/questions/ask"},_("a",null,"ask your own question."))))}))}},ep1A:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("v0uu"),i=n("MhZx"),s=n("jCHi"),c=n("thU0"),u=n("+WX+"),d=n.n(u),l=r.a.createElement;e.a=function(t){var e=t.children,n=Object(i.a)();return l("div",{className:d.a.container},l(c.a,{border:!1},e),n.width>o.c.TABLET_SIZE&&l(s.a,{marginTop:16}))}},kZgV:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("LIAn"),i=n("/Wiz"),s=n("o0o1"),c=n.n(s),u=n("HaE+"),d=n("KYPV"),l=n("UGp+"),m=n("OTcJ"),f=n("bOU5"),h=n("HlVv"),v=n("tda2"),w=n.n(v),b=r.a.createElement,g=function(t){var e=t.questionId,n=t.answerId,r=t.setShowAddComment,o=t.setQuestion,i=Object(a.useContext)(m.a).authAxios,s=Object(a.useState)(!1),v=s[0],g=s[1];return b(d.a,{initialValues:{comment:""},onSubmit:function(){var t=Object(u.a)(c.a.mark((function t(a,s){var u,d,l,m;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=s.setStatus,d=s.resetForm,g(!0),t.prev=2,t.next=5,i.post("/comment/".concat(e,"/").concat(n||""),a);case 5:l=t.sent,m=l.data,o(m),d({}),r(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),u(t.t0.response.data.message);case 15:g(!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,n){return t.apply(this,arguments)}}(),validationSchema:l.b({comment:l.d().required("Comment is missing.").min(5,"Comment must be at least 5 characters.").max(1e3,"Comment cannot be longer than 1000 characters.")})},(function(t){var e=t.values,n=t.errors,a=t.touched,r=t.status,o=t.handleChange,i=t.handleBlur,s=t.handleSubmit,c=t.isSubmitting;return b("form",{className:w.a.container,onSubmit:s},b(f.a,{name:"comment",autoComplete:"off",value:e.comment,onChange:o,onBlur:i,hasError:a.comment&&n.comment,errorMessage:n.comment&&n.comment}),b("p",{className:w.a.status},r),b("div",null,b(h.a,{className:w.a.button,type:"submit",primary:!0,isLoading:v,disabled:c},"Add Comment")))}))},p=n("ID87"),_=n.n(p),x=r.a.createElement;e.a=function(t){var e=t.children,n=t.questionId,r=t.answerId,s=t.setQuestion,c=Object(a.useContext)(o.a).isAuthenticated,u=Object(a.useContext)(i.a).handleComponentVisible,d=Object(a.useState)(!1),l=d[0],m=d[1],f=Object(a.useState)(e.slice(0,3)),h=f[0],v=f[1],w=Object(a.useState)(null),b=w[0],p=w[1];return Object(a.useEffect)((function(){v(e.slice(0,3))}),[e]),Object(a.useEffect)((function(){p(e.length-h.length)}),[h]),x("div",{className:_.a.commentCell},h,b>0?x("a",{className:_.a.showMore,onClick:function(){return v(e)}},"show ",x("b",null,b)," more comments"):!l&&x("a",{className:_.a.addComment,onClick:function(){return c()?m(!0):u(!0,"signup")}},"add comment"),l&&x(g,{questionId:n,answerId:r,setShowAddComment:m,setQuestion:s}))}},l4qj:function(t,e,n){t.exports={layout:"post-wrapper_layout__bER9l",adminPost:"post-wrapper_adminPost__1xTUq",borderBottom:"post-wrapper_borderBottom__3ei2Z",adminAnswer:"post-wrapper_adminAnswer__3cGj7"}},nF3H:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("l4qj"),c=n.n(s),u=r.a.createElement;e.a=function(t){var e=t.borderBottom,n=void 0===e||e,a=t.isAdminPost,r=void 0!==a&&a,o=t.adminAnswer,s=void 0!==o&&o,d=t.children;return u("div",{className:i()(c.a.layout,n&&c.a.borderBottom,r&&c.a.adminPost,s&&c.a.adminAnswer)},d)}},oVS1:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("LIAn"),c=n("HlVv"),u=n("sXwS"),d=n.n(u),l=r.a.createElement;e.a=function(t){var e=t.title,n=t.create,r=t.createComp,o=t.borderBottom,u=void 0===o||o,m=(t.start,t.children),f=Object(a.useContext)(s.a).isAuthenticated;return l("div",{className:i()(d.a.container,u&&d.a.borderBottom)},l("div",{className:d.a.title},l("h1",null,e),l("div",{className:d.a.buttonContainer},n&&l(c.a,{href:f()?r:"/auth",primary:!0},n))),m&&l("p",{className:d.a.summary},m))}},sV8b:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(t,e){return"admin"===t.role?"/images/npp-logo.jpg":"https://secure.gravatar.com/avatar/".concat(t.id,"?s=").concat(e,"&d=identicon")}},sXwS:function(t,e,n){t.exports={container:"page-title_container__2y0RO",borderBottom:"page-title_borderBottom__ijYtw",title:"page-title_title__tRISx",summary:"page-title_summary__3wbe9",buttonContainer:"page-title_buttonContainer__13v6e"}},tda2:function(t,e,n){t.exports={container:"add-comment_container__1HLB5",button:"add-comment_button__1B6fu",status:"add-comment_status__17kg1"}},vfxs:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("v0uu"),c=n("Abyp"),u=n("JW02"),d=n.n(u),l=r.a.createElement;e.a=function(t){var e=t.answersCount,n=t.answerSortType,a=t.setAnswerSortType,r=t.threadType,o=t.children;return l("div",{className:i()(d.a.container,r===s.b.QUESTIONS&&d.a.adminAnswer)},r===s.b.DISCUSSIONS&&l("div",{className:d.a.header},l("div",{className:d.a.fill},l("h2",null,e," Replies")),l(c.a,{buttons:["Votes","Newest","Oldest"],selected:n,setSelected:a})),o)}},wbyS:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("YFqc"),u=n.n(c),d=n("/Tr7"),l=n("jIYg");var m=n("iSMj");function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(t,e){return Object(l.a)(2,arguments),function(t,e){Object(l.a)(2,arguments);var n=Object(d.a)(t).getTime(),a=f(e);return new Date(n+a)}(t,-f(e))}function v(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var w={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return v("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):v(n+1,2)},d:function(t,e){return v(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return v(t.getUTCHours()%12||12,e.length)},H:function(t,e){return v(t.getUTCHours(),e.length)},m:function(t,e){return v(t.getUTCMinutes(),e.length)},s:function(t,e){return v(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return v(Math.floor(a*Math.pow(10,n-3)),e.length)}},b=864e5;function g(t){Object(l.a)(1,arguments);var e=Object(d.a)(t),n=e.getUTCDay(),a=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function p(t){Object(l.a)(1,arguments);var e=Object(d.a)(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=g(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=g(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}var _=6048e5;function x(t){Object(l.a)(1,arguments);var e=Object(d.a)(t),n=g(e).getTime()-function(t){Object(l.a)(1,arguments);var e=p(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),g(n)}(e).getTime();return Math.round(n/_)+1}function C(t,e){Object(l.a)(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:f(r),i=null==n.weekStartsOn?o:f(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Object(d.a)(t),c=s.getUTCDay(),u=(c<i?7:0)+c-i;return s.setUTCDate(s.getUTCDate()-u),s.setUTCHours(0,0,0,0),s}function y(t,e){Object(l.a)(1,arguments);var n=Object(d.a)(t,e),a=n.getUTCFullYear(),r=e||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:f(i),c=null==r.firstWeekContainsDate?s:f(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(a+1,0,c),u.setUTCHours(0,0,0,0);var m=C(u,e),h=new Date(0);h.setUTCFullYear(a,0,c),h.setUTCHours(0,0,0,0);var v=C(h,e);return n.getTime()>=m.getTime()?a+1:n.getTime()>=v.getTime()?a:a-1}var O=6048e5;function T(t,e){Object(l.a)(1,arguments);var n=Object(d.a)(t),a=C(n,e).getTime()-function(t,e){Object(l.a)(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:f(r),i=null==n.firstWeekContainsDate?o:f(n.firstWeekContainsDate),s=y(t,e),c=new Date(0);return c.setUTCFullYear(s,0,i),c.setUTCHours(0,0,0,0),C(c,e)}(n,e).getTime();return Math.round(a/O)+1}var N="midnight",j="noon",S="morning",k="afternoon",U="evening",E="night";function M(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+v(o,2)}function q(t,e){return t%60===0?(t>0?"-":"+")+v(Math.abs(t)/60,2):D(t,e)}function D(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+v(Math.floor(r/60),2)+n+v(r%60,2)}var I={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w.y(t,e)},Y:function(t,e,n,a){var r=y(t,a),o=r>0?r:1-r;return"YY"===e?v(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):v(o,e.length)},R:function(t,e){return v(p(t),e.length)},u:function(t,e){return v(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return v(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return v(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return w.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return v(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=T(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):v(r,e.length)},I:function(t,e,n){var a=x(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):v(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):w.d(t,e)},D:function(t,e,n){var a=function(t){Object(l.a)(1,arguments);var e=Object(d.a)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=n-e.getTime();return Math.floor(a/b)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):v(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return v(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return v(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return v(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?j:0===r?N:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?U:r>=12?k:r>=4?S:E,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return w.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):w.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):w.s(t,e)},S:function(t,e){return w.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return q(r);case"XXXX":case"XX":return D(r);case"XXXXX":case"XXX":default:return D(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return q(r);case"xxxx":case"xx":return D(r);case"xxxxx":case"xxx":default:return D(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+M(r,":");case"OOOO":default:return"GMT"+D(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+M(r,":");case"zzzz":default:return"GMT"+D(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return v(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return v((a._originalDate||t).getTime(),e.length)}};function Y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function B(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var A={p:B,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return Y(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Y(r,e)).replace("{{time}}",B(o,e))}},H=n("JCDJ"),P=["D","DD"],L=["YY","YYYY"];function Q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,W=/''/g,F=/[a-zA-Z]/;function X(t,e,n){Object(l.a)(2,arguments);var a=String(e),r=n||{},o=r.locale||m.a,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:f(i),c=null==r.firstWeekContainsDate?s:f(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=o.options&&o.options.weekStartsOn,v=null==u?0:f(u),w=null==r.weekStartsOn?v:f(r.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var b=Object(d.a)(t);if(!function(t){Object(l.a)(1,arguments);var e=Object(d.a)(t);return!isNaN(e)}(b))throw new RangeError("Invalid time value");var g=h(b,Object(H.a)(b)),p={firstWeekContainsDate:c,weekStartsOn:w,locale:o,_originalDate:b};return a.match(G).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,A[e])(t,o.formatLong,p):t})).join("").match(z).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return n.match(R)[1].replace(W,"'");var i,s=I[a];if(s)return r.useAdditionalWeekYearTokens||(i=n,-1===L.indexOf(i))||Q(n,e,t),!r.useAdditionalDayOfYearTokens&&function(t){return-1!==P.indexOf(t)}(n)&&Q(n,e,t),s(g,n,o.localize,p);if(a.match(F))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}var V=n("LIAn"),Z=n("OTcJ"),J=n("8Xn0"),K=n.n(J),$=s.a.createElement;e.a=function(t){var e,n=t.author,a=t.created,s=t.isOwner,c=t.answerId,d=t.questionId,l=t.commentId,m=t.setQuestion,f=t.children,h=Object(i.useContext)(V.a),v=h.authState,w=h.isAdmin,b=Object(i.useContext)(Z.a).authAxios,g=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure delete your comment?")){t.next=7;break}return t.next=4,b.delete(c?"/comment/".concat(d,"/").concat(c,"/").concat(l):"/comment/".concat(d,"/").concat(l));case 4:e=t.sent,n=e.data,m(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return $("div",{className:K.a.commentContainer},$("p",null,f," \u2013")," \xa0",$(u.a,{href:"/users/[user]",as:"/users/".concat(n)},$("a",{className:s?K.a.owner:void 0},n)),"\xa0",$("p",{className:K.a.dateText},X(new Date(a),"MMM dd'`'yy 'at' k':'mm")," "),((null===(e=v.userInfo)||void 0===e?void 0:e.username)===n||w())&&$("a",{className:K.a.delete,onClick:function(){return g()}},"delete"))}},z3Z8:function(t,e,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("LIAn"),u=n("OTcJ"),d=n("/Wiz"),l=n("HlVv"),m=n("dhEp"),f=n("0IiK"),h=n.n(f),v=s.a.createElement;e.a=function(t){var e=t.score,n=t.votes,a=t.questionId,s=t.answerId,f=t.setQuestion,w=Object(i.useContext)(c.a),b=w.authState,g=w.isAuthenticated,p=Object(i.useContext)(u.a).authAxios,_=Object(i.useContext)(d.a).handleComponentVisible,x=function(){var t;return 1===(null===(t=n.find((function(t){var e;return t.user===(null===(e=b.userInfo)||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.vote)},C=function(){var t;return-1===(null===(t=n.find((function(t){var e;return t.user===(null===(e=b.userInfo)||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.vote)},y=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/votes/upvote/".concat(a,"/").concat(s||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/votes/downvote/".concat(a,"/").concat(s||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/votes/unvote/".concat(a,"/").concat(s||""));case 2:e=t.sent,n=e.data,f(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return v("div",{className:h.a.voteCell},v(l.a,{className:h.a.voteButton,onClick:function(){return g()?x()?T():y():_(!0,"signup")}},v(m.c,{className:x()?h.a.voted:""})),v("div",{className:h.a.score},e),v(l.a,{className:h.a.voteButton,onClick:function(){return g()?C()?T():O():_(!0,"signup")}},v(m.b,{className:C()?h.a.voted:""})))}}}]);