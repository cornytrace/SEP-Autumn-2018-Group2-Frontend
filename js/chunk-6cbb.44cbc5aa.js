(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cbb"],{"0a49":function(e,t,r){var n=r("9b43"),s=r("626a"),o=r("4bf8"),i=r("9def"),c=r("cd1c");e.exports=function(e,t){var r=1==e,a=2==e,u=3==e,l=4==e,f=6==e,d=5==e||f,h=t||c;return function(t,c,p){for(var m,b,v=o(t),y=s(v),g=n(c,p,3),w=i(y.length),_=0,S=r?h(t,w):a?h(t,0):void 0;w>_;_++)if((d||_ in y)&&(m=y[_],b=g(m,_,v),e))if(r)S[_]=b;else if(b)switch(e){case 3:return!0;case 5:return m;case 6:return _;case 2:S.push(m)}else if(l)return!1;return f?-1:u||l?l:S}}},"11e9":function(e,t,r){var n=r("52a7"),s=r("4630"),o=r("6821"),i=r("6a99"),c=r("69a8"),a=r("c69a"),u=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?u:function(e,t){if(e=o(e),t=i(t,!0),a)try{return u(e,t)}catch(e){}if(c(e,t))return s(!n.f.call(e,t),e[t])}},"37c8":function(e,t,r){t.f=r("2b4c")},"3a72":function(e,t,r){var n=r("7726"),s=r("8378"),o=r("2d00"),i=r("37c8"),c=r("86cc").f;e.exports=function(e){var t=s.Symbol||(s.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:i.f(e)})}},"5f27":function(e,t,r){"use strict";var n=r("d369"),s=r.n(n);s.a},"67ab":function(e,t,r){var n=r("ca5a")("meta"),s=r("d3f4"),o=r("69a8"),i=r("86cc").f,c=0,a=Object.isExtensible||function(){return!0},u=!r("79e5")(function(){return a(Object.preventExtensions({}))}),l=function(e){i(e,n,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[n].i},d=function(e,t){if(!o(e,n)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[n].w},h=function(e){return u&&p.NEED&&a(e)&&!o(e,n)&&l(e),e},p=e.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},6966:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("b-row",[r("b-col",{attrs:{sm:"7"}},[r("b-list-group",[r("b-list-group-item",{staticClass:"first-row",attrs:{id:"userelement"}},[r("table",[r("tr",[r("th",{attrs:{id:"pk-cell"}},[r("b",[e._v("ID")])]),r("th",{attrs:{id:"email-cell"}},[e._v("Email")]),r("th",{attrs:{id:"name-cell"}},[e._v("Display Name")]),r("th",{attrs:{id:"role-cell"}},[e._v("Role")]),r("th",[e._v("Courses")])])])]),e._l(e.users,function(t){return r("b-list-group-item",{key:t.pk,attrs:{id:"userelement"},on:{click:function(r){e.click(t.pk)}}},[r("table",[r("tr",[r("th",{attrs:{id:"pk-cell"}},[r("b",[e._v(e._s(t.pk))])]),r("th",{attrs:{id:"email-cell"}},[e._v(e._s(t.email))]),r("th",{attrs:{id:"name-cell"}}),r("th",{attrs:{id:"role-cell"}},[e._v(e._s(t.role))]),r("th",e._l(t.courses,function(t){return r("span",{key:t.course_name,attrs:{id:"course"}},[e._v(e._s(t.course_name))])}))])])])})],2)],1),r("b-col",{attrs:{sm:"5"}},[r("b-card",{staticClass:"bg",attrs:{"no-body":""}},[r("b-card-header",[r("b",[e._v("Selected user:")]),e._v(" "+e._s(e.selectedUser)+"\n      ")]),r("b-card-body",{staticClass:"pb-0"},[r("b-form",[r("p",{staticClass:"text-muted"},[e._v("Edit user account")]),r("b-input-group",{staticClass:"mb-3"},[r("b-input-group-prepend",[r("b-input-group-text",[e._v("@")])],1),r("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",autocomplete:"email"},model:{value:e.selectedEmail,callback:function(t){e.selectedEmail=t},expression:"selectedEmail"}})],1),r("b-input-group",{staticClass:"mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRole,expression:"selectedRole"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedRole=t.target.multiple?r:r[0]}}},e._l(e.settings.roles,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))]),r("b-form-select",{staticClass:"mb-3",attrs:{id:"course-selector",multiple:"","select-size":4,options:e.courses,"text-field":"course_name","value-field":"pk"},model:{value:e.selectedCourses,callback:function(t){e.selectedCourses=t},expression:"selectedCourses"}}),r("p",{staticClass:"text-muted"},[e._v("Hold down CTRL to select multiple courses.")]),r("b-alert",{attrs:{id:"alertbox",variant:"danger",dismissible:"",show:e.showAlert},on:{dismissed:function(t){e.showAlert=!1}}},[e._v("\n                Update failed: "+e._s(e.errorReason)+".\n              ")]),r("b-alert",{attrs:{id:"successbox",variant:"success",dismissible:"",show:e.showSuccess},on:{dismissed:function(t){e.showSuccess=!1}}},[e._v("\n                Update success.\n              ")]),r("b-button",{attrs:{id:"savebutton",variant:"success"},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)],1)],1)},s=[],o=(r("7514"),r("ac4d"),r("8a81"),r("ac6a"),r("e0eb")),i=r("83d6"),c={name:"AdminHome",data:function(){return{settings:i["a"],courses:[],selectedCourses:[],selectedEmail:"",selectedUser:"No user selected",selectedRole:i["a"].roles[0].id,showSuccess:!1,showAlert:!1,errorReason:"",users:[]}},methods:{click:function(e){this.showSuccess=!1,this.showAlert=!1;var t=this.getUser(e);this.selectedCourses=[];var r=!0,n=!1,s=void 0;try{for(var o,i=t.courses[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value;this.selectedCourses.push(c.pk)}}catch(e){n=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw s}}this.selectedEmail=t.email,this.selectedUser=t.pk,this.selectedRole=t.role},save:function(){var e=this;if("No user selected"!==this.selectedUser){var t=[],r=!0,n=!1,s=void 0;try{for(var i,c=this.selectedCourses[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var a=i.value;t.push(this.getCourse(a))}}catch(e){n=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw s}}o["a"].updateUser({courses:t,email:this.selectedEmail,pk:this.selectedUser,role:this.selectedRole}).then(function(t){e.showAlert=!1,e.showSuccess=!0,e.getUsers()}).catch(function(t){for(var r in e.errorReason="",t.response.data)e.errorReason+=t.response.data[r][0]+"\n";e.showAlert=!0,e.showSuccess=!1})}else this.showAlert=!0,this.errorReason="No user selected"},getUser:function(e){return this.users.find(function(t){return t.pk===e})},getUsers:function(){var e=this;o["a"].getUsers().then(function(t){e.users=t.data}).catch(function(e){console.log(e)})},getCourse:function(e){return this.courses.find(function(t){return t.pk===e})},getCourses:function(){var e=this;o["a"].getCourses().then(function(t){e.courses=t.data}).catch(function(e){console.log(e)})}},beforeMount:function(){this.getUsers(),this.getCourses()}},a=c,u=(r("5f27"),r("2877")),l=Object(u["a"])(a,n,s,!1,null,null,null);l.options.__file="AdminHome.vue";t["default"]=l.exports},7514:function(e,t,r){"use strict";var n=r("5ca1"),s=r("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o](function(){i=!1}),n(n.P+n.F*i,"Array",{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"7bbc":function(e,t,r){var n=r("6821"),s=r("9093").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(e){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?c(e):s(n(e))}},"83d6":function(e,t,r){"use strict";r("cadf"),r("551c"),r("097d");t["a"]={platforms:[{name:"Coursera"}],course_pages:[{name:"Videos",icon:"fa fa-video-camera"},{name:"Quizzes",icon:"cui-check"},{name:"Assignments",icon:"cui-calendar"},{name:"Lessons",icon:"cui-calendar"}],course_default:"course-select",platform_default:"platform-select",roles:[{name:"Teacher",id:"teacher"},{name:"Quality and design team member",id:"qdt"},{name:"Admin",id:"admin"}]}},"8a81":function(e,t,r){"use strict";var n=r("7726"),s=r("69a8"),o=r("9e1e"),i=r("5ca1"),c=r("2aba"),a=r("67ab").KEY,u=r("79e5"),l=r("5537"),f=r("7f20"),d=r("ca5a"),h=r("2b4c"),p=r("37c8"),m=r("3a72"),b=r("d4c0"),v=r("1169"),y=r("cb7c"),g=r("d3f4"),w=r("6821"),_=r("6a99"),S=r("4630"),k=r("2aeb"),C=r("7bbc"),O=r("11e9"),E=r("86cc"),x=r("0d58"),A=O.f,N=E.f,P=C.f,U=n.Symbol,j=n.JSON,R=j&&j.stringify,F="prototype",D=h("_hidden"),J=h("toPrimitive"),I={}.propertyIsEnumerable,T=l("symbol-registry"),z=l("symbols"),H=l("op-symbols"),K=Object[F],M="function"==typeof U,Q=n.QObject,W=!Q||!Q[F]||!Q[F].findChild,L=o&&u(function(){return 7!=k(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=A(K,t);n&&delete K[t],N(e,t,r),n&&e!==K&&N(K,t,n)}:N,Y=function(e){var t=z[e]=k(U[F]);return t._k=e,t},q=M&&"symbol"==typeof U.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof U},G=function(e,t,r){return e===K&&G(H,t,r),y(e),t=_(t,!0),y(r),s(z,t)?(r.enumerable?(s(e,D)&&e[D][t]&&(e[D][t]=!1),r=k(r,{enumerable:S(0,!1)})):(s(e,D)||N(e,D,S(1,{})),e[D][t]=!0),L(e,t,r)):N(e,t,r)},V=function(e,t){y(e);var r,n=b(t=w(t)),s=0,o=n.length;while(o>s)G(e,r=n[s++],t[r]);return e},$=function(e,t){return void 0===t?k(e):V(k(e),t)},B=function(e){var t=I.call(this,e=_(e,!0));return!(this===K&&s(z,e)&&!s(H,e))&&(!(t||!s(this,e)||!s(z,e)||s(this,D)&&this[D][e])||t)},X=function(e,t){if(e=w(e),t=_(t,!0),e!==K||!s(z,t)||s(H,t)){var r=A(e,t);return!r||!s(z,t)||s(e,D)&&e[D][t]||(r.enumerable=!0),r}},Z=function(e){var t,r=P(w(e)),n=[],o=0;while(r.length>o)s(z,t=r[o++])||t==D||t==a||n.push(t);return n},ee=function(e){var t,r=e===K,n=P(r?H:w(e)),o=[],i=0;while(n.length>i)!s(z,t=n[i++])||r&&!s(K,t)||o.push(z[t]);return o};M||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===K&&t.call(H,r),s(this,D)&&s(this[D],e)&&(this[D][e]=!1),L(this,e,S(1,r))};return o&&W&&L(K,e,{configurable:!0,set:t}),Y(e)},c(U[F],"toString",function(){return this._k}),O.f=X,E.f=G,r("9093").f=C.f=Z,r("52a7").f=B,r("2621").f=ee,o&&!r("2d00")&&c(K,"propertyIsEnumerable",B,!0),p.f=function(e){return Y(h(e))}),i(i.G+i.W+i.F*!M,{Symbol:U});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)h(te[re++]);for(var ne=x(h.store),se=0;ne.length>se;)m(ne[se++]);i(i.S+i.F*!M,"Symbol",{for:function(e){return s(T,e+="")?T[e]:T[e]=U(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in T)if(T[t]===e)return t},useSetter:function(){W=!0},useSimple:function(){W=!1}}),i(i.S+i.F*!M,"Object",{create:$,defineProperty:G,defineProperties:V,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee}),j&&i(i.S+i.F*(!M||u(function(){var e=U();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))})),"JSON",{stringify:function(e){var t,r,n=[e],s=1;while(arguments.length>s)n.push(arguments[s++]);if(r=t=n[1],(g(t)||void 0!==e)&&!q(e))return v(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!q(t))return t}),n[1]=t,R.apply(j,n)}}),U[F][J]||r("32e9")(U[F],J,U[F].valueOf),f(U,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},9093:function(e,t,r){var n=r("ce10"),s=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,s)}},ac4d:function(e,t,r){r("3a72")("asyncIterator")},d369:function(e,t,r){},d4c0:function(e,t,r){var n=r("0d58"),s=r("2621"),o=r("52a7");e.exports=function(e){var t=n(e),r=s.f;if(r){var i,c=r(e),a=o.f,u=0;while(c.length>u)a.call(e,i=c[u++])&&t.push(i)}return t}}}]);
//# sourceMappingURL=chunk-6cbb.44cbc5aa.js.map