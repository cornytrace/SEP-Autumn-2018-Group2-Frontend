(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-653e"],{"11e9":function(t,a,s){var i=s("52a7"),e=s("4630"),r=s("6821"),o=s("6a99"),l=s("69a8"),c=s("c69a"),n=Object.getOwnPropertyDescriptor;a.f=s("9e1e")?n:function(t,a){if(t=r(t),a=o(a,!0),c)try{return n(t,a)}catch(t){}if(l(t,a))return e(!i.f.call(t,a),t[a])}},"52a7":function(t,a){a.f={}.propertyIsEnumerable},"5dbc":function(t,a,s){var i=s("d3f4"),e=s("8b97").set;t.exports=function(t,a,s){var r,o=a.constructor;return o!==s&&"function"==typeof o&&(r=o.prototype)!==s.prototype&&i(r)&&e&&e(t,r),t}},"7f7f":function(t,a,s){var i=s("86cc").f,e=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in e||s("9e1e")&&i(e,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"8b97":function(t,a,s){var i=s("d3f4"),e=s("cb7c"),r=function(t,a){if(e(t),!i(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,i){try{i=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,s){return r(t,s),a?t.__proto__=s:i(t,s),t}}({},!1):void 0),check:r}},9093:function(t,a,s){var i=s("ce10"),e=s("e11e").concat("length","prototype");a.f=Object.getOwnPropertyNames||function(t){return i(t,e)}},c5f6:function(t,a,s){"use strict";var i=s("7726"),e=s("69a8"),r=s("2d95"),o=s("5dbc"),l=s("6a99"),c=s("79e5"),n=s("9093").f,m=s("11e9").f,d=s("86cc").f,v=s("aa77").trim,u="Number",p=i[u],g=p,C=p.prototype,b=r(s("2aeb")(C))==u,f="trim"in String.prototype,_=function(t){var a=l(t,!1);if("string"==typeof a&&a.length>2){a=f?a.trim():v(a,3);var s,i,e,r=a.charCodeAt(0);if(43===r||45===r){if(s=a.charCodeAt(2),88===s||120===s)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:i=2,e=49;break;case 79:case 111:i=8,e=55;break;default:return+a}for(var o,c=a.slice(2),n=0,m=c.length;n<m;n++)if(o=c.charCodeAt(n),o<48||o>e)return NaN;return parseInt(c,i)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof p&&(b?c(function(){C.valueOf.call(s)}):r(s)!=u)?o(new g(_(a)),s,p):_(a)};for(var h,x=s("9e1e")?n(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)e(g,h=x[w])&&!e(p,h)&&d(p,h,m(g,h));p.prototype=C,C.constructor=p,s("2aba")(i,u,p)}},e8c5:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app"},[s("AppHeader",{attrs:{fixed:""}},[s("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),s("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("h4",[t._v("EIT Dashboard")])]),s("SidebarToggler",{staticClass:"d-md-down-none",attrs:{display:"lg"}}),s("b-dropdown",{staticClass:"m-md-2",attrs:{id:"ddown1",text:"Coursera"}},[s("b-dropdown-item",[t._v("Coursera")]),s("b-dropdown-item",[t._v("Other Platform")])],1),s("b-dropdown",{staticClass:"m-md-2",attrs:{id:"ddown1",text:"course-1"}},[s("b-dropdown-item",[t._v("course-1")]),s("b-dropdown-item",[t._v("course-2")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("DefaultHeaderDropdownAccnt")],1),s("NotificationToggler",{staticClass:"d-none d-lg-block",attrs:{notificationCount:t.testCount}})],1),s("div",{staticClass:"app-body"},[s("AppSidebar",{attrs:{fixed:""}},[s("SidebarHeader"),s("SidebarForm"),s("SidebarNav",{attrs:{navItems:t.nav}}),s("SidebarFooter"),s("SidebarMinimizer")],1),s("main",{staticClass:"main"},[s("Breadcrumb",{attrs:{list:t.list}}),s("div",{staticClass:"container-fluid"},[s("router-view")],1)],1),s("AppAside",{attrs:{fixed:""}},[s("DefaultAside")],1)],1)],1)},e=[],r=(s("7f7f"),s("cadf"),s("551c"),s("097d"),{items:[{name:"Courses",icon:"cui-dashboard",url:"/courses"},{name:"Videos",icon:"icon-chart",url:"/videos"},{name:"Graded Quizzes",icon:"icon-check",url:"/quizes"},{name:"Settings",icon:"icon-settings",url:"/settings"},{name:"Contact",icon:"icon-envelope-open",url:"/contact"}]}),o=s("f1fb"),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-tabs",[s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-list"})]),s("b-list-group",{staticClass:"list-group-accent"},[s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Today\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-warning list-group-item-divider",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Meeting with\n          "),s("strong",[t._v("Lucas")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm\n        ")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA\n        ")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-info",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Skype with "),s("strong",[t._v("Megan")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 5pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-social-skype"}),t._v("  On-line")])]),s("hr",{staticClass:"transparent mx-3 my-0"}),s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Tomorrow\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-danger list-group-item-divider",attrs:{href:"#"}},[s("div",[t._v("New UI Project - "),s("strong",[t._v("deadline")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  10 - 11pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})])])]),s("b-list-group-item",{staticClass:"list-group-item-accent-success list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("#10 Startups.Garden")]),t._v(" Meetup")]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-primary list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("Team meeting")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 6pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/8.jpg",alt:"admin@bootstrapmaster.com"}})])])])],1)],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-speech"})]),s("div",{staticClass:"p-3"},[s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"success"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"danger"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"info"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"warning"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"dark"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])])],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-settings"})]),s("div",{staticClass:"p-3"},[s("h6",[t._v("Settings")]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-4"},[s("small",[s("b",[t._v("Option 1")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 2")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm"}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 3")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",disabled:"",defaultChecked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Disabled option.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 4")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1)]),s("hr"),s("h6",[t._v("System Utilization")]),s("div",{staticClass:"text-uppercase mb-1 mt-4"},[s("small",[s("b",[t._v("CPU Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"info",value:25}}),s("small",{staticClass:"text-muted"},[t._v("348 Processes. 1/4 Cores.")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("Memory Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"warning",value:70}}),s("small",{staticClass:"text-muted"},[t._v("11444GB/16384MB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 1 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"danger",value:95}}),s("small",{staticClass:"text-muted"},[t._v("243GB/256GB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 2 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"success",value:10}}),s("small",{staticClass:"text-muted"},[t._v("25GB/256GB")])],1)],2)],1)},c=[],n={name:"DefaultAside",components:{cSwitch:o["o"]}},m=n,d=s("2877"),v=Object(d["a"])(m,l,c,!1,null,null,null);v.options.__file="DefaultAside.vue";var u=v.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[s("template",{slot:"header"},[s("i",{staticClass:"icon-user"})]),s("template",{slot:"dropdown"},[s("b-dropdown-header",{staticClass:"text-center",attrs:{tag:"div"}},[s("strong",[t._v("Account")])]),s("b-dropdown-item",[s("i",{staticClass:"fa fa-bell-o"}),t._v(" Updates\n      "),s("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-item",[s("i",{staticClass:"fa fa-envelope-o"}),t._v(" Messages\n      "),s("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-item",[s("i",{staticClass:"fa fa-tasks"}),t._v(" Tasks\n      "),s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-item",[s("i",{staticClass:"fa fa-comments"}),t._v(" Comments\n      "),s("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-header",{staticClass:"text-center",attrs:{tag:"div"}},[s("strong",[t._v("Settings")])]),s("b-dropdown-item",[s("i",{staticClass:"fa fa-user"}),t._v(" Profile")]),s("b-dropdown-item",[s("i",{staticClass:"fa fa-wrench"}),t._v(" Settings")]),s("b-dropdown-item",[s("i",{staticClass:"fa fa-file"}),t._v(" Projects\n      "),s("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-divider"),s("b-dropdown-item",[s("i",{staticClass:"fa fa-lock"}),t._v(" Logout")])],1)],2)},g=[],C={name:"DefaultHeaderDropdownAccnt",components:{AppHeaderDropdown:o["g"]},data:function(){return{itemsCount:42}}},b=C,f=Object(d["a"])(b,p,g,!1,null,null,null);f.options.__file="DefaultHeaderDropdownAccnt.vue";var _=f.exports,h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{class:t.classList,attrs:{display:t.display,mobile:t.mobile,type:"button"},on:{click:t.asideToggle}},[s("span",{staticClass:"icon-bell"}),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.notificationCount))])])},x=[],w=(s("c5f6"),["aside-menu-show","aside-menu-sm-show","aside-menu-md-show","aside-menu-lg-show","aside-menu-xl-show"]),y=["sm","md","lg","xl"];function A(t,a){return a.indexOf(t)>-1}function S(t,a,s){var i=a.indexOf(t),e=a.slice(0,i);e.map(function(t){return document.body.classList.remove(t)}),document.body.classList.toggle(t,s)}var k={name:"NotificationToggler",props:{defaultOpen:{type:Boolean,default:!1},display:{type:String,default:""},mobile:{type:Boolean,default:!1},notificationCount:{type:Number,default:0}},computed:{classList:function(){return["navbar-toggler"]}},methods:{toggle:function(t){var a=[this.display,this.mobile],s=a[0],i=a[1],e=w[0];!i&&s&&A(s,y)&&(e="aside-menu-".concat(s,"-show")),S(e,w,t)},asideToggle:function(t){t.preventDefault(),this.toggle()}}},j=k,L=Object(d["a"])(j,h,x,!1,null,null,null);L.options.__file="NotificationToggler.vue";var N=L.exports,I={name:"full",components:{AsideToggler:o["b"],AppHeader:o["f"],AppSidebar:o["h"],AppAside:o["a"],TheFooter:o["e"],Breadcrumb:o["c"],DefaultAside:u,DefaultHeaderDropdownAccnt:_,SidebarForm:o["j"],SidebarFooter:o["i"],SidebarToggler:o["n"],SidebarHeader:o["k"],SidebarNav:o["m"],SidebarMinimizer:o["l"],NotificationToggler:N},data:function(){return{nav:r.items,testCount:5}},beforeMount:function(){this.testCount=2},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched.filter(function(t){return t.meta.label||t.name})}}},O=I,T=Object(d["a"])(O,i,e,!1,null,null,null);T.options.__file="DefaultContainer.vue";a["default"]=T.exports}}]);
//# sourceMappingURL=chunk-653e.61011241.js.map