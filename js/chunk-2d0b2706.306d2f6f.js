(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2706"],{"23b1":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("LoginForm",{attrs:{"init-is-processing":e.isProcessing,"need-clear-password":e.needClearPassword},on:{"after-form-submit":e.afterFormSubmit}})],1)},n=[],a=t("1da1"),o=(t("96cf"),t("d9e2"),t("61b1")),i=t("7696"),c=t("ac0d"),u={mixins:[c["a"]],name:"AdminLogin",components:{LoginForm:o["a"]},data:function(){return{isProcessing:!1,needClearPassword:!1}},methods:{afterFormSubmit:function(e,r){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var n,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.isProcessing=!0,s.next=4,i["a"].adminLogin({account:e,password:r});case 4:if(n=s.sent,a=n.data,"success"===a.status){s.next=8;break}throw new Error(a.message);case 8:localStorage.setItem("token",a.data.token),t.$store.commit("setCurrentUser",a.data.user),t.$router.push("/admin/tweets"),s.next=26;break;case 13:if(s.prev=13,s.t0=s["catch"](0),t.isProcessing=!1,t.needClearPassword=!t.needClearPassword,"You are not admin!"!==s.t0.message){s.next=22;break}return t.ToastError({title:"此帳號非管理者"}),s.abrupt("return");case 22:if("Account didn't exist!"!==s.t0.message&&"Password incorrect!"!==s.t0.message){s.next=25;break}return t.ToastError({title:"登入失敗，帳號或密碼有誤"}),s.abrupt("return");case 25:t.ToastError({title:"無法登入，請稍後再試"});case 26:case"end":return s.stop()}}),s,null,[[0,13]])})))()}}},d=u,m=t("2877"),l=Object(m["a"])(d,s,n,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2706.306d2f6f.js.map