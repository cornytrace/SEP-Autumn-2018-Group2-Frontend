(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea53"],{"83d6":function(a,e,t){"use strict";e["a"]={platforms:[{name:"Coursera"}],course_pages:[{name:"Videos",icon:"fa fa-video-camera"},{name:"Quizzes",icon:"cui-check"},{name:"Assignments",icon:"cui-calendar"},{name:"Lessons",icon:"cui-calendar"}],course_default:"course-select",platform_default:"platform-select",roles:[{name:"Teacher",id:"teacher"},{name:"Quality and design team member",id:"qdt"},{name:"Admin",id:"admin"}]}},"8f59":function(a,e,t){},bb51:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"animated fadeIn"},[t("b-row",a._l(a.platforms,function(e){return t("b-col",{key:e.name,attrs:{sm:12/a.platforms.length,lg:12/a.platforms.length}},[t("b-card",{staticClass:"bg",attrs:{"no-body":""}},[t("b-card-header",[t("router-link",{attrs:{to:e.name.toLowerCase()}},[t("h4",[a._v(a._s(e.name))])])],1),t("b-card-body",{staticClass:"pb-0"},[t("b-card",{attrs:{"no-body":""}},[t("b-card-header",{staticClass:"bg-success"},[a._v("\n              Platform Information\n            ")]),t("b-card-body",{staticClass:"pb-0"},[t("p",[a._v("Number of courses: 2"),t("br"),a._v("Total enrolled student: 243,342"),t("br"),a._v("Course completers: 243,342"),t("br"),a._v("Payments: 243,342")]),t("div",{staticClass:"chart-wrapper"})])],1),t("b-card",{attrs:{"no-body":""}},[t("b-card-header",{staticClass:"bg-primary"},[t("router-link",{staticClass:"link-light",attrs:{to:"/course/automata-system-validation"}},[a._v("Quantitative model checking")])],1),t("b-card-body",{staticClass:"pb-0"},[t("p",[a._v("Number of courses: 2"),t("br"),a._v("Total enrolled student: 243,342"),t("br"),a._v("New enrolled student: 243,342"),t("br"),a._v("Course completers: 243,342"),t("br"),a._v("Payments: 243,342")]),t("div",{staticClass:"chart-wrapper"})])],1),t("b-card",{attrs:{"no-body":""}},[t("b-card-header",{staticClass:"bg-primary"},[t("router-link",{staticClass:"link-light",attrs:{to:"/course/automata-system-validation"}},[a._v("Automata system")])],1),t("b-card-body",{staticClass:"pb-0"},[t("p",[a._v("Number of courses: 2"),t("br"),a._v("Total enrolled student: 243,342"),t("br"),a._v("New enrolled student: 243,342"),t("br"),a._v("Course completers: 243,342"),t("br"),a._v("Payments: 243,342")]),t("div",{staticClass:"chart-wrapper"})])],1)],1)],1)],1)}))],1)},r=[],n=t("fd50"),o=t("f1fb"),l=t("83d6"),i={name:"home",components:{BarExample:n["a"],Callout:o["d"]},data:function(){return{platforms:l["a"].platforms,selected:"Month",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},methods:{}},c=i,u=(t("cccb"),t("2877")),m=Object(u["a"])(c,s,r,!1,null,null,null);m.options.__file="Home.vue";e["default"]=m.exports},cccb:function(a,e,t){"use strict";var s=t("8f59"),r=t.n(s);r.a},fd50:function(a,e,t){"use strict";var s,r,n=t("1fca"),o=t("1fef"),l={name:"BarExample",extends:n["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!1,custom:o["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,e){return{backgroundColor:e.data.datasets[a.datasetIndex].backgroundColor}}}}})}},i=l,c=t("2877"),u=Object(c["a"])(i,s,r,!1,null,null,null);u.options.__file="BarExample.vue";e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-ea53.c09d37d7.js.map