(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5571"],{"110e":function(t,a,s){},"11e9":function(t,a,s){var e=s("52a7"),i=s("4630"),r=s("6821"),n=s("6a99"),o=s("69a8"),l=s("c69a"),c=Object.getOwnPropertyDescriptor;a.f=s("9e1e")?c:function(t,a){if(t=r(t),a=n(a,!0),l)try{return c(t,a)}catch(t){}if(o(t,a))return i(!e.f.call(t,a),t[a])}},"324b":function(t,a,s){},"37c8":function(t,a,s){a.f=s("2b4c")},"3a72":function(t,a,s){var e=s("7726"),i=s("8378"),r=s("2d00"),n=s("37c8"),o=s("86cc").f;t.exports=function(t){var a=i.Symbol||(i.Symbol=r?{}:e.Symbol||{});"_"==t.charAt(0)||t in a||o(a,t,{value:n.f(t)})}},"4d12":function(t,a,s){"use strict";var e=s("7e24"),i=s.n(e);i.a},"5dbc":function(t,a,s){var e=s("d3f4"),i=s("8b97").set;t.exports=function(t,a,s){var r,n=a.constructor;return n!==s&&"function"==typeof n&&(r=n.prototype)!==s.prototype&&e(r)&&i&&i(t,r),t}},6151:function(t,a,s){"use strict";var e=s("110e"),i=s.n(e);i.a},"67ab":function(t,a,s){var e=s("ca5a")("meta"),i=s("d3f4"),r=s("69a8"),n=s("86cc").f,o=0,l=Object.isExtensible||function(){return!0},c=!s("79e5")(function(){return l(Object.preventExtensions({}))}),u=function(t){n(t,e,{value:{i:"O"+ ++o,w:{}}})},m=function(t,a){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,e)){if(!l(t))return"F";if(!a)return"E";u(t)}return t[e].i},d=function(t,a){if(!r(t,e)){if(!l(t))return!0;if(!a)return!1;u(t)}return t[e].w},v=function(t){return c&&p.NEED&&l(t)&&!r(t,e)&&u(t),t},p=t.exports={KEY:e,NEED:!1,fastKey:m,getWeak:d,onFreeze:v}},"7bbc":function(t,a,s){var e=s("6821"),i=s("9093").f,r={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(t){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==r.call(t)?o(t):i(e(t))}},"7e24":function(t,a,s){},"7f7f":function(t,a,s){var e=s("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in i||s("9e1e")&&e(i,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"7fe2":function(t,a,s){},"83d6":function(t,a,s){"use strict";a["a"]={platforms:[{name:"Coursera"}],course_pages:[{name:"Videos",icon:"fa fa-video-camera"},{name:"Quizzes",icon:"cui-check"},{name:"Assignments",icon:"cui-calendar"},{name:"Lessons",icon:"cui-calendar"}],course_default:"course-select",platform_default:"platform-select",roles:[{name:"Teacher",id:"teacher"},{name:"Quality and design team member",id:"qdt"},{name:"Admin",id:"admin"}]}},"8a81":function(t,a,s){"use strict";var e=s("7726"),i=s("69a8"),r=s("9e1e"),n=s("5ca1"),o=s("2aba"),l=s("67ab").KEY,c=s("79e5"),u=s("5537"),m=s("7f20"),d=s("ca5a"),v=s("2b4c"),p=s("37c8"),f=s("3a72"),g=s("d4c0"),b=s("1169"),h=s("cb7c"),C=s("d3f4"),_=s("6821"),y=s("6a99"),S=s("4630"),x=s("2aeb"),w=s("7bbc"),k=s("11e9"),N=s("86cc"),O=s("0d58"),P=k.f,L=N.f,j=w.f,A=e.Symbol,E=e.JSON,I=E&&E.stringify,D="prototype",T=v("_hidden"),z=v("toPrimitive"),B={}.propertyIsEnumerable,F=u("symbol-registry"),H=u("symbols"),M=u("op-symbols"),$=Object[D],U="function"==typeof A,G=e.QObject,V=!G||!G[D]||!G[D].findChild,q=r&&c(function(){return 7!=x(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,a,s){var e=P($,a);e&&delete $[a],L(t,a,s),e&&t!==$&&L($,a,e)}:L,J=function(t){var a=H[t]=x(A[D]);return a._k=t,a},Y=U&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Q=function(t,a,s){return t===$&&Q(M,a,s),h(t),a=y(a,!0),h(s),i(H,a)?(s.enumerable?(i(t,T)&&t[T][a]&&(t[T][a]=!1),s=x(s,{enumerable:S(0,!1)})):(i(t,T)||L(t,T,S(1,{})),t[T][a]=!0),q(t,a,s)):L(t,a,s)},K=function(t,a){h(t);var s,e=g(a=_(a)),i=0,r=e.length;while(r>i)Q(t,s=e[i++],a[s]);return t},R=function(t,a){return void 0===a?x(t):K(x(t),a)},X=function(t){var a=B.call(this,t=y(t,!0));return!(this===$&&i(H,t)&&!i(M,t))&&(!(a||!i(this,t)||!i(H,t)||i(this,T)&&this[T][t])||a)},W=function(t,a){if(t=_(t),a=y(a,!0),t!==$||!i(H,a)||i(M,a)){var s=P(t,a);return!s||!i(H,a)||i(t,T)&&t[T][a]||(s.enumerable=!0),s}},Z=function(t){var a,s=j(_(t)),e=[],r=0;while(s.length>r)i(H,a=s[r++])||a==T||a==l||e.push(a);return e},tt=function(t){var a,s=t===$,e=j(s?M:_(t)),r=[],n=0;while(e.length>n)!i(H,a=e[n++])||s&&!i($,a)||r.push(H[a]);return r};U||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),a=function(s){this===$&&a.call(M,s),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),q(this,t,S(1,s))};return r&&V&&q($,t,{configurable:!0,set:a}),J(t)},o(A[D],"toString",function(){return this._k}),k.f=W,N.f=Q,s("9093").f=w.f=Z,s("52a7").f=X,s("2621").f=tt,r&&!s("2d00")&&o($,"propertyIsEnumerable",X,!0),p.f=function(t){return J(v(t))}),n(n.G+n.W+n.F*!U,{Symbol:A});for(var at="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),st=0;at.length>st;)v(at[st++]);for(var et=O(v.store),it=0;et.length>it;)f(et[it++]);n(n.S+n.F*!U,"Symbol",{for:function(t){return i(F,t+="")?F[t]:F[t]=A(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var a in F)if(F[a]===t)return a},useSetter:function(){V=!0},useSimple:function(){V=!1}}),n(n.S+n.F*!U,"Object",{create:R,defineProperty:Q,defineProperties:K,getOwnPropertyDescriptor:W,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),E&&n(n.S+n.F*(!U||c(function(){var t=A();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var a,s,e=[t],i=1;while(arguments.length>i)e.push(arguments[i++]);if(s=a=e[1],(C(a)||void 0!==t)&&!Y(t))return b(a)||(a=function(t,a){if("function"==typeof s&&(a=s.call(this,t,a)),!Y(a))return a}),e[1]=a,I.apply(E,e)}}),A[D][z]||s("32e9")(A[D],z,A[D].valueOf),m(A,"Symbol"),m(Math,"Math",!0),m(e.JSON,"JSON",!0)},"8b97":function(t,a,s){var e=s("d3f4"),i=s("cb7c"),r=function(t,a){if(i(t),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,e){try{e=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),e(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,s){return r(t,s),a?t.__proto__=s:e(t,s),t}}({},!1):void 0),check:r}},9093:function(t,a,s){var e=s("ce10"),i=s("e11e").concat("length","prototype");a.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},"92d8":function(t,a,s){"use strict";var e=s("324b"),i=s.n(e);i.a},a70b:function(t,a,s){t.exports=s.p+"img/logo.2d76cab2.svg"},ac4d:function(t,a,s){s("3a72")("asyncIterator")},c5f6:function(t,a,s){"use strict";var e=s("7726"),i=s("69a8"),r=s("2d95"),n=s("5dbc"),o=s("6a99"),l=s("79e5"),c=s("9093").f,u=s("11e9").f,m=s("86cc").f,d=s("aa77").trim,v="Number",p=e[v],f=p,g=p.prototype,b=r(s("2aeb")(g))==v,h="trim"in String.prototype,C=function(t){var a=o(t,!1);if("string"==typeof a&&a.length>2){a=h?a.trim():d(a,3);var s,e,i,r=a.charCodeAt(0);if(43===r||45===r){if(s=a.charCodeAt(2),88===s||120===s)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+a}for(var n,l=a.slice(2),c=0,u=l.length;c<u;c++)if(n=l.charCodeAt(c),n<48||n>i)return NaN;return parseInt(l,e)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof p&&(b?l(function(){g.valueOf.call(s)}):r(s)!=v)?n(new f(C(a)),s,p):C(a)};for(var _,y=s("9e1e")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)i(f,_=y[S])&&!i(p,_)&&m(p,_,u(f,_));p.prototype=g,g.constructor=p,s("2aba")(e,v,p)}},d462:function(t,a,s){"use strict";var e=s("7fe2"),i=s.n(e);i.a},d4c0:function(t,a,s){var e=s("0d58"),i=s("2621"),r=s("52a7");t.exports=function(t){var a=e(t),s=i.f;if(s){var n,o=s(t),l=r.f,c=0;while(o.length>c)l.call(t,n=o[c++])&&a.push(n)}return a}},e8c5:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app"},[e("AppHeader",{attrs:{fixed:""}},[e("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),e("b-link",{staticClass:"nav-brand",attrs:{to:"/"}},[e("img",{staticClass:"logo-style",attrs:{src:s("a70b"),alt:"Logo"}})]),e("SidebarToggler",{staticClass:"d-md-down-none",attrs:{display:"lg"}}),e("b-form-select",{staticClass:"header-select",attrs:{options:t.platformOptions},on:{change:t.platformChange},model:{value:t.selectedPlatform,callback:function(a){t.selectedPlatform=a},expression:"selectedPlatform"}}),"platform-select"!==t.selectedPlatform?e("b-form-select",{staticClass:"header-select",attrs:{options:t.courseOptions},on:{change:t.courseChange},model:{value:t.selectedCourse,callback:function(a){t.selectedCourse=a},expression:"selectedCourse"}}):t._e(),e("b-navbar-nav",{staticClass:"custom-nav ml-auto"},[e("DefaultHeaderDropdownAccnt")],1)],1),e("div",{staticClass:"app-body"},[e("AppSidebar",{attrs:{fixed:""}},[e("SidebarHeader"),e("SidebarForm"),t.level>0?e("BackButton",{attrs:{callback:t.goUp}}):t._e(),e("TopbarNav",{attrs:{navItems:t.top_nav[t.level],clickCallback:t.sideButtonClick}}),e("BottombarNav",{attrs:{navItems:t.bottom_nav}}),e("SidebarFooter"),e("SidebarMinimizer")],1),e("main",{staticClass:"main"},[e("Breadcrumb",{attrs:{list:t.list}}),e("div",{staticClass:"container-fluid"},[e("router-view")],1)],1),e("AppAside",{attrs:{fixed:""}},[e("DefaultAside")],1)],1),e("TheFooter",{class:{"bg-success":t.isPrimary,"bg-danger":!t.isPrimary}},[t._v("\n         API Status: "+t._s(t.apiStatus)+"\n  ")])],1)},i=[],r=(s("ac4d"),s("8a81"),s("ac6a"),s("28a5"),s("7f7f"),{bottom_items:[{name:"Settings",icon:"icon-settings",url:"/settings"},{name:"Contact",icon:"icon-envelope-open",url:"/contact"}]}),n=s("83d6"),o=s("f1fb"),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-tabs",[s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-list"})]),s("b-list-group",{staticClass:"list-group-accent"},[s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Today\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-warning list-group-item-divider",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Meeting with\n          "),s("strong",[t._v("Lucas")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm\n        ")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA\n        ")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-info",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Skype with "),s("strong",[t._v("Megan")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 5pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-social-skype"}),t._v("  On-line")])]),s("hr",{staticClass:"transparent mx-3 my-0"}),s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Tomorrow\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-danger list-group-item-divider",attrs:{href:"#"}},[s("div",[t._v("New UI Project - "),s("strong",[t._v("deadline")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  10 - 11pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})])])]),s("b-list-group-item",{staticClass:"list-group-item-accent-success list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("#10 Startups.Garden")]),t._v(" Meetup")]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-primary list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("Team meeting")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 6pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/8.jpg",alt:"admin@bootstrapmaster.com"}})])])])],1)],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-speech"})]),s("div",{staticClass:"p-3"},[s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"success"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"danger"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"info"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"warning"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"dark"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])])],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-settings"})]),s("div",{staticClass:"p-3"},[s("h6",[t._v("Settings")]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-4"},[s("small",[s("b",[t._v("Option 1")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 2")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm"}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 3")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",disabled:"",defaultChecked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Disabled option.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 4")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1)]),s("hr"),s("h6",[t._v("System Utilization")]),s("div",{staticClass:"text-uppercase mb-1 mt-4"},[s("small",[s("b",[t._v("CPU Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"info",value:25}}),s("small",{staticClass:"text-muted"},[t._v("348 Processes. 1/4 Cores.")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("Memory Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"warning",value:70}}),s("small",{staticClass:"text-muted"},[t._v("11444GB/16384MB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 1 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"danger",value:95}}),s("small",{staticClass:"text-muted"},[t._v("243GB/256GB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 2 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"success",value:10}}),s("small",{staticClass:"text-muted"},[t._v("25GB/256GB")])],1)],2)],1)},c=[],u={name:"DefaultAside",components:{cSwitch:o["u"]}},m=u,d=s("2877"),v=Object(d["a"])(m,l,c,!1,null,null,null);v.options.__file="DefaultAside.vue";var p=v.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[s("template",{slot:"header"},[s("i",{staticClass:"icon-user"})]),s("template",{slot:"dropdown"},[s("b-dropdown-header",{staticClass:"text-center",attrs:{tag:"div"}},[s("strong",[t._v("Account")])]),s("b-dropdown-item",{on:{click:t.doSettings}},[s("i",{staticClass:"fa fa-wrench"}),t._v(" Settings")]),s("b-dropdown-item",{on:{click:t.doLogout}},[s("i",{staticClass:"fa fa-lock"}),t._v(" Logout")])],1)],2)},g=[],b={name:"DefaultHeaderDropdownAccnt",components:{AppHeaderDropdown:o["g"]},data:function(){return{itemsCount:42}},methods:{doLogout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/pages/login")})},doSettings:function(){this.$router.push("/settings")}}},h=b,C=Object(d["a"])(h,f,g,!1,null,null,null);C.options.__file="DefaultHeaderDropdownAccnt.vue";var _=C.exports,y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{class:t.classList,attrs:{display:t.display,mobile:t.mobile,type:"button"},on:{click:t.asideToggle}},[s("span",{staticClass:"icon-bell"}),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.notificationCount))])])},S=[],x=(s("c5f6"),["aside-menu-show","aside-menu-sm-show","aside-menu-md-show","aside-menu-lg-show","aside-menu-xl-show"]),w=["sm","md","lg","xl"];function k(t,a){return a.indexOf(t)>-1}function N(t,a,s){var e=a.indexOf(t),i=a.slice(0,e);i.map(function(t){return document.body.classList.remove(t)}),document.body.classList.toggle(t,s)}var O={name:"NotificationToggler",props:{defaultOpen:{type:Boolean,default:!1},display:{type:String,default:""},mobile:{type:Boolean,default:!1},notificationCount:{type:Number,default:0}},computed:{classList:function(){return["navbar-toggler"]}},methods:{toggle:function(t){var a=[this.display,this.mobile],s=a[0],e=a[1],i=x[0];!e&&s&&k(s,w)&&(i="aside-menu-".concat(s,"-show")),N(i,x,t)},asideToggle:function(t){t.preventDefault(),this.toggle()}}},P=O,L=Object(d["a"])(P,y,S,!1,null,null,null);L.options.__file="NotificationToggler.vue";var j=L.exports,A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"sidebar-nav"},[s("VuePerfectScrollbar",{staticClass:"scroll-area",attrs:{settings:t.psSettings},on:{"ps-scroll-y":t.scrollHandle}},[s("ul",{staticClass:"nav"},[t._l(t.navItems,function(a,e){return[a.title?[s("SidebarNavTitle",{key:e,attrs:{name:a.name,classes:a.class,wrapper:a.wrapper}})]:a.divider?[s("SidebarNavDivider",{key:e,attrs:{classes:a.class}})]:a.label?[s("SidebarNavLabel",{key:e,attrs:{name:a.name,url:a.url,icon:a.icon,label:a.label,classes:a.class}})]:[a.children?[s("SidebarNavDropdown",{key:e,attrs:{name:a.name,url:a.url,icon:a.icon}},[t._l(a.children,function(e,i){return[e.children?[s("SidebarNavDropdown",{key:i,attrs:{name:e.name,url:e.url,icon:e.icon}},t._l(e.children,function(t,e){return s("li",{key:e,staticClass:"nav-item"},[s("SidebarNavLink",{attrs:{name:t.name,url:t.url,icon:t.icon,badge:t.badge,variant:a.variant}})],1)}))]:[s("SidebarNavItem",{key:i,attrs:{classes:a.class}},[s("SidebarNavLink",{attrs:{name:e.name,url:e.url,icon:e.icon,badge:e.badge,variant:a.variant}})],1)]]})],2)]:[s("SidebarNavItem",{key:e,attrs:{classes:a.class}},[s("SidebarNavLink",{attrs:{name:a.name,url:a.url,icon:a.icon,badge:a.badge,variant:a.variant}})],1)]]]})],2),t._t("default")],2)],1)},E=[];function I(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}function D(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{},e=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(a){I(t,a,s[a])})}return t}var T=s("9d63"),z=s.n(T),B={name:"BottombarNav",props:{navItems:{type:Array,required:!0,default:function(){return[]}}},components:{SidebarNavDivider:o["n"],SidebarNavDropdown:o["o"],SidebarNavLink:o["r"],SidebarNavTitle:o["s"],SidebarNavItem:o["p"],SidebarNavLabel:o["q"],VuePerfectScrollbar:z.a},data:function(){return{psSettings:{maxScrollbarLength:200,minScrollbarLength:40,suppressScrollX:!0,wheelPropagation:!1,interceptRailY:function(t){return D({},t,{height:0})}}}},methods:{scrollHandle:function(){}}},F=B,H=(s("6151"),Object(d["a"])(F,A,E,!1,null,"f6619d50",null));H.options.__file="BottombarNav.vue";var M=H.exports,$=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"sidebar-nav"},[s("VuePerfectScrollbar",{staticClass:"scroll-area",attrs:{settings:t.psSettings},on:{"ps-scroll-y":t.scrollHandle}},[s("ul",{staticClass:"nav"},[t._l(t.navItems,function(a,e){return[a.title?[s("SidebarNavTitle",{key:e,attrs:{name:a.name,classes:a.class,wrapper:a.wrapper}})]:a.divider?[s("SidebarNavDivider",{key:e,attrs:{classes:a.class}})]:a.label?[s("SidebarNavLabel",{key:e,attrs:{name:a.name,url:a.url,icon:a.icon,label:a.label,classes:a.class}})]:[s("SidebarNavItem",{key:e,attrs:{classes:a.class}},[s("SidebarNavLink",{attrs:{name:a.name,url:a.url,icon:a.icon,badge:a.badge,variant:a.variant},nativeOn:{click:function(a){return t.clickCallback(a)}}})],1)]]})],2),t._t("default")],2)],1)},U=[],G={name:"TopbarNav",props:{navItems:{type:Array,required:!0,default:function(){return[]}},clickCallback:Function},components:{SidebarNavDivider:o["n"],SidebarNavDropdown:o["o"],SidebarNavLink:o["r"],SidebarNavTitle:o["s"],SidebarNavItem:o["p"],SidebarNavLabel:o["q"],VuePerfectScrollbar:z.a},data:function(){return{psSettings:{maxScrollbarLength:200,minScrollbarLength:40,suppressScrollX:!0,wheelPropagation:!1,interceptRailY:function(t){return D({},t,{height:0})}}}},methods:{goBack:function(){console.log("back")},scrollHandle:function(){}}},V=G,q=(s("d462"),Object(d["a"])(V,$,U,!1,null,"7413d72e",null));q.options.__file="TopbarNav.vue";var J=q.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"backbutton",attrs:{type:"button"},on:{click:t.callback}},[t.minimized?t._e():s("span",{staticClass:"backbutton-text"},[t._v("Up")]),s("i",{staticClass:"fa fa-level-up nav-icon"})])},Q=[],K={name:"backbutton",methods:{},props:{callback:Function,minimized:!1}},R=K,X=(s("92d8"),Object(d["a"])(R,Y,Q,!1,null,null,null));X.options.__file="BackButton.vue";var W=X.exports,Z=s("e0eb"),tt={name:"full",components:{AsideToggler:o["b"],AppHeader:o["f"],AppSidebar:o["h"],AppAside:o["a"],TheFooter:o["e"],Breadcrumb:o["c"],DefaultAside:p,DefaultHeaderDropdownAccnt:_,SidebarForm:o["j"],SidebarFooter:o["i"],SidebarToggler:o["t"],SidebarHeader:o["k"],SidebarNav:o["m"],SidebarMinimizer:o["l"],NotificationToggler:j,BottombarNav:M,TopbarNav:J,BackButton:W},data:function(){return{apiStatus:"Connecting...",isPrimary:!1,level:0,top_nav:[],level_0:["/home","/settings","/contact"],platforms:n["a"].platforms,bottom_nav:r.bottom_items,testCount:5,platformOptions:[],selectedPlatform:n["a"].platform_default,courseOptions:[],selectedCourse:n["a"].course_default,courses:{coursera:[{name:"Coursera course 1",description:"description course 1"},{name:"Coursera course 2",description:"description course 2"}]}}},beforeMount:function(){var t=this;this.testCount=2,Z["a"].testAuth().then(function(){console.log("ok"),t.apiStatus="OK",t.isPrimary=!0}).catch(function(){t.apiStatus="Connection Error"})},mounted:function(){var t=this;this.platformOptions=[{value:n["a"].platform_default,text:"Select platform"}],this.setPlatforms(),this.initializeCourses(),this.$route.path&&this.setNavigation(this.$route.path),this.$router&&this.$router.beforeEach(function(a,s,e){t.setNavigation(a.path),e()})},computed:{list:function(){return this.$route.matched.filter(function(t){return t.meta.label||t.name})}},methods:{goUp:function(){this.level--},doDown:function(){this.level++},setNavigation:function(t){if(this.level=this.getLevel(t),this.level>=1){this.selectedPlatform="/"+t.split("/")[1];var a=t.split("/");this.setCourses(this.courses.coursera,this.selectedPlatform),this.selectedCourse="/"+a[1]+"/"+a[2]}0===this.level?this.selectedPlatform=n["a"].platform_default:1===this.level?(this.selectedCourse=n["a"].course_default,this.$store.commit("setCourses",this.courses.coursera)):2===this.level&&this.setSubPages(t)},platformChange:function(t){t!==n["a"].platform_default&&this.$router.push(t)},courseChange:function(t){t!==n["a"].course_default&&this.$router.push(t)},sideButtonClick:function(t){this.setNavigation(t.srcElement.hash.substring(1))},getLevel:function(t){return-1!==this.level_0.indexOf(t)?0:t.split("/").length-1},initializeCourses:function(){this.courseOptions=[{value:n["a"].course_default,text:"Select course"}]},setPlatforms:function(){this.top_nav[0]=[],this.top_nav[0].push({name:"Home",icon:"cui-home",url:"/home"});var t=!0,a=!1,s=void 0;try{for(var e,i=this.platforms[Symbol.iterator]();!(t=(e=i.next()).done);t=!0){var r=e.value;this.top_nav[0].push({name:r.name,url:r.url||"/"+Z["a"].toUrl(r.name),icon:"cui-dashboard"}),this.platformOptions.push({value:"/"+Z["a"].toUrl(r.name),text:r.name})}}catch(t){a=!0,s=t}finally{try{t||null==i.return||i.return()}finally{if(a)throw s}}},setCourses:function(t,a){this.courseOptions=[{value:n["a"].course_default,text:"Select course"}],this.top_nav[1]=[];var s=!0,e=!1,i=void 0;try{for(var r,o=t[Symbol.iterator]();!(s=(r=o.next()).done);s=!0){var l=r.value;this.courseOptions.push({value:a+"/"+Z["a"].toUrl(l.name),text:l.name}),this.top_nav[1].push({name:l.name,url:a+"/"+Z["a"].toUrl(l.name),icon:"cui-dashboard"})}}catch(t){e=!0,i=t}finally{try{s||null==o.return||o.return()}finally{if(e)throw i}}},setSubPages:function(t){this.top_nav[2]=[];var a=!0,s=!1,e=void 0;try{for(var i,r=n["a"].course_pages[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){var o=i.value;this.top_nav[2].push({name:o.name,icon:o.icon,url:t+"/"+Z["a"].toUrl(o.name)})}}catch(t){s=!0,e=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw e}}}}},at=tt,st=(s("4d12"),Object(d["a"])(at,e,i,!1,null,null,null));st.options.__file="DefaultContainer.vue";a["default"]=st.exports}}]);
//# sourceMappingURL=chunk-5571.0de2a97a.js.map