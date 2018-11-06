(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d67dc"],{"737a":function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"8"}},[e("b-card-group",[e("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[e("b-card-body",[e("b-form",[e("h1",[t._v("Forgot password")]),e("p",{staticClass:"text-muted"},[t._v("Enter email address and you will receive a password reset link.")]),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[t._v("@")])],1),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",autocomplete:"username email"},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}})],1),e("b-alert",{attrs:{id:"errorAlert",variant:"danger",dismissible:"",show:t.showAlert},on:{dismissed:function(r){t.showAlert=!1}}},[t._v("\n                  Password reset failed: "+t._s(t.errorReason)+".\n                ")]),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-button",{staticClass:"px-4",attrs:{variant:"primary",id:"submitbutton"},on:{click:t.doSubmit}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},a=[],o=e("e0eb"),i=e("c100"),n={name:"ForgotPassword",data:function(){return{email:"",showAlert:!1,errorReason:""}},methods:{doSubmit:function(){var t=this;o["a"].validEmail(this.email)?o["a"].sendPasswordReset(this.email).then(function(){t.$router.push("/pages/login")}).catch(function(r){if(t.isValidJSONString(r)){for(var e in t.errorReason="",r.response.data)t.errorReason+=r.response.data[e][0]+"\n";t.showAlert=!0}else t.errorReason=i["a"].error_server,t.showAlert=!0}):(this.showAlert=!0,this.errorReason=i["a"].error_wrong_email)},isValidJSONString:function(t){try{JSON.parse(t)}catch(t){return!1}return!0}}},l=n,c=e("2877"),d=Object(c["a"])(l,s,a,!1,null,null,null);d.options.__file="ForgotPassword.vue";r["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d67dc.9afc3e5f.js.map