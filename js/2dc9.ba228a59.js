(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2dc9"],{"2dc9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated fadeIn"},[a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("c-table",{attrs:{caption:"<i class='fa fa-align-justify'></i> Simple Table"}})],1),a("b-col",{attrs:{lg:"6"}},[a("c-table",{attrs:{striped:"",caption:"<i class='fa fa-align-justify'></i> Striped Table"}})],1)],1),a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("c-table",{attrs:{small:"",caption:"<i class='fa fa-align-justify'></i> Condensed Table"}})],1),a("b-col",{attrs:{lg:"6"}},[a("c-table",{attrs:{fixed:"",bordered:"",caption:"<i class='fa fa-align-justify'></i> Bordered Table"}})],1)],1),a("b-row",[a("b-col",{attrs:{sm:"12"}},[a("c-table",{attrs:{hover:"",striped:"",bordered:"",small:"",fixed:"",caption:"<i class='fa fa-align-justify'></i> Combined All Table"}})],1)],1)],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{header:e.caption}},[a("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"status",fn:function(t){return[a("b-badge",{attrs:{variant:e.getBadge(t.item.status)}},[e._v(e._s(t.item.status))])]}}])}),a("nav",[a("b-pagination",{attrs:{"total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},i=[],l=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return e},o={name:"c-table",props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:l([{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}]),fields:[{key:"username"},{key:"registered"},{key:"role"},{key:"status"}],currentPage:1,perPage:5,totalRows:0}},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length}}},u=o,d=a("2877"),c=Object(d["a"])(u,n,i,!1,null,null,null);c.options.__file="Table.vue";var m=c.exports,g={name:"tables",components:{cTable:m}},f=g,b=Object(d["a"])(f,r,s,!1,null,null,null);b.options.__file="Tables.vue";t["default"]=b.exports}}]);
//# sourceMappingURL=2dc9.ba228a59.js.map