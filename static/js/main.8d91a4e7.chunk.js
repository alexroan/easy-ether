(this.webpackJsonponramp=this.webpackJsonponramp||[]).push([[0],{199:function(e,t,n){e.exports=n.p+"static/media/logo-white.86143c9b.png"},201:function(e,t,n){e.exports=n(471)},210:function(e,t,n){},221:function(e,t){},230:function(e,t){},247:function(e,t){},249:function(e,t){},273:function(e,t){},295:function(e,t){},297:function(e,t){},306:function(e,t){},308:function(e,t){},333:function(e,t){},335:function(e,t){},336:function(e,t){},342:function(e,t){},344:function(e,t){},362:function(e,t){},365:function(e,t){},381:function(e,t){},384:function(e,t){},388:function(e,t){},403:function(e,t){},405:function(e,t){},471:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),u=n.n(c),o=n(30),i=n(47),l=n(48),s=n(51),p=n(50),f=(n(210),n(15)),b=n(16),O=(Object(b.a)((function(e){return Object(f.get)(e,"app.coinGecko",null)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"app.ramp",null)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"account.loggingIn",!1)}),(function(e){return e}))),m=Object(b.a)((function(e){return Object(f.get)(e,"account.error",!1)}),(function(e){return e})),E=(Object(b.a)((function(e){return Object(f.get)(e,"account.web3",null)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"account.account","")}),(function(e){return e}))),j=Object(b.a)((function(e){return Object(f.get)(e,"account.balance",null)}),(function(e){return e})),h=(Object(b.a)((function(e){return Object(f.get)(e,"account.loadingFiatBalance",!1)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"account.fiatBalance",null)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"display.tab",null)}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"display.currency","gbp")}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"display.currencySymbol","\xa3")}),(function(e){return e})),Object(b.a)((function(e){return Object(f.get)(e,"topup.active",!1)}),(function(e){return e}))),g=Object(b.a)((function(e){return Object(f.get)(e,"topup.error",!1)}),(function(e){return e})),v=Object(b.a)((function(e){return Object(f.get)(e,"topup.success",!1)}),(function(e){return e})),d=Object(b.a)((function(e){return Object(f.get)(e,"topup.response",null)}),(function(e){return e})),w=n(473),y=n(474),A=n(475),x=n(476),_=n(6),C=n.n(_),N=n(13);function I(e){return{type:"LOGGED_IN",web3:e}}function k(e){return{type:"ACCOUNT_LOADED",account:e}}function D(e){return{type:"BALANCE_LOADED",balance:e}}function L(e){return{type:"COINGECKO_LOADED",coinGecko:e}}function S(e){return{type:"RAMP_SUCCESS",response:e}}function G(e){return{type:"RAMP_CLOSED",response:e}}function R(e){return{type:"RAMP_FAILED",response:e}}var P=n(195),T=function(e,t){t.on("WIDGET_CLOSE_REQUEST_CONFIRMED",(function(t){V(e,t)})),t.on("PURCHASE_CREATED",(function(e){console.log("purchase created",e)})),t.on("PURCHASE_SUCCESSFUL",(function(t){Q(e,t)})),t.on("PURCHASE_FAILED",(function(t){Y(e,t)}))},B=function(){var e=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.currentProvider.on("accountsChanged",(function(e){W(t,n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=n(196),U=n.n(F),M=n(458),H=function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGGING_IN"}),n=null,e.prev=2,e.next=5,new Promise(function(){var e=Object(N.a)(C.a.mark((function e(t,n){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return a=new U.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(e.t0);case 11:e.next=14;break;case 13:window.web3?(r=window.web3,t(r)):n(new Error("No web3 wallet available"));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 5:n=e.sent,t(I(n)),W(t,n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:"LOGIN_FAILED",error:e.t0});case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(C.a.mark((function e(t,n){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getAccounts();case 2:return a=e.sent,r=a[0],t(k(r)),B(t,n),J(t,n,r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(C.a.mark((function e(t,n,a){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getBalance(a);case 2:return r=e.sent,t(D(r)),K(t),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new M,t(L(n)),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(N.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new P.a({hostAppName:"EasyInvest",hostLogoUrl:"https://alexroan.github.io/easy-ether/static/media/logo-white.86143c9b.png",variant:"auto",userAddress:n}).show(),t({type:"RAMP_OPENED"}),T(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup success",n),t(S(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup closed",n),t(G(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup fail",n),t(R(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(25),q=n.n($),z=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.account;return r.a.createElement(q.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(A.a,{className:"text-center"},r.a.createElement("p",null,r.a.createElement("span",{id:"account-address",className:"text-truncate badge badge-pill text-white"},n)),r.a.createElement(x.a,{onClick:function(){X(t,n)}},"Topup")))))}}]),n}(a.Component);var Z=Object(o.b)((function(e){return{account:E(e),topupOpen:h(e),topupError:g(e),topupSuccess:v(e),topupResponse:d(e)}}))(z),ee=n(479),te=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.loggingIn,a=e.loggingInError,c=function(){var e=Object(N.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,H(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(A.a,{className:"text-center"},r.a.createElement(x.a,{onClick:c},"Connect"),!1!==a&&!1===n?r.a.createElement(q.a,null,r.a.createElement(ee.a,{className:"my-2",variant:"danger"},"Connect to wallet failure: ",a.message)):r.a.createElement(r.a.Fragment,null)))))}}]),n}(a.Component);var ne=Object(o.b)((function(e){return{loggingInError:m(e),loggingIn:O(e)}}))(te),ae=n(478),re=n(477),ce=n(62),ue=n(199),oe=n.n(ue),ie=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.loadedBalance;return r.a.createElement("div",{className:"app h-100"},r.a.createElement(ae.a,{fixed:"top"},r.a.createElement(q.a,null,r.a.createElement(ae.a.Brand,null,r.a.createElement(re.a,{src:oe.a,width:"35",height:"35",className:"d-inline-block align-top",alt:"logo"})," ",r.a.createElement("span",null,"Easy Ether")))),null!=e?r.a.createElement(Z,null):r.a.createElement(ne,null),r.a.createElement("footer",null,r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(A.a,{className:"text-center pt-4 pb-2"},r.a.createElement(q.a,null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://alexroan.co.uk"},"Alex Roan"))))),r.a.createElement(q.a,null,r.a.createElement(y.a,null,r.a.createElement(A.a,{className:"text-center pb-4"},r.a.createElement(ce.SocialIcon,{className:"mx-1",url:"https://twitter.com/alexroan"}),r.a.createElement(ce.SocialIcon,{className:"mx-1",url:"https://github.com/alexroan"}),r.a.createElement(ce.SocialIcon,{className:"mx-1",url:"https://medium.com/@alexroan"}),r.a.createElement(ce.SocialIcon,{className:"mx-1",network:"email",url:"mailto:alex.roan@hotmail.com"})))))))}}]),n}(a.Component);var le=Object(o.b)((function(e){return{loadedBalance:j(e)}}))(ie),se=n(31),pe=n(200),fe=n(7);var be=new se.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COINGECKO_LOADED":return Object(fe.a)(Object(fe.a)({},e),{},{coinGecko:t.coinGecko});case"RAMP_LOADED":return Object(fe.a)(Object(fe.a)({},e),{},{ramp:t.ramp});default:return e}},account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGING_IN":return Object(fe.a)(Object(fe.a)({},e),{},{loggingIn:!0,error:!1});case"LOGGED_IN":return Object(fe.a)(Object(fe.a)({},e),{},{loggingIn:!1,web3:t.web3});case"LOGIN_FAILED":return Object(fe.a)(Object(fe.a)({},e),{},{loggingIn:!1,error:t.error});case"ACCOUNT_LOADED":return Object(fe.a)(Object(fe.a)({},e),{},{account:t.account});case"BALANCE_LOADED":return Object(fe.a)(Object(fe.a)({},e),{},{balance:t.balance});case"GETTING_FIAT_BALANCE":return Object(fe.a)(Object(fe.a)({},e),{},{loadingFiatBalance:!0});case"GOT_FIAT_BALANCE":return Object(fe.a)(Object(fe.a)({},e),{},{loadingFiatBalance:!1,fiatBalance:t.balance});default:return e}},display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENCY_CHOSEN":return Object(fe.a)(Object(fe.a)({},e),{},{currency:t.currency,currencySymbol:t.symbol});default:return e}},topup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RAMP_OPENED":return Object(fe.a)(Object(fe.a)({},e),{},{active:!0});case"RAMP_FAILED":return Object(fe.a)(Object(fe.a)({},e),{},{active:!1,error:!0,response:t.response});case"RAMP_CLOSED":return Object(fe.a)(Object(fe.a)({},e),{},{active:!1,response:t.response});case"RAMP_SUCCESS":return Object(fe.a)(Object(fe.a)({},e),{},{active:!1,success:!0,response:t.response});case"RAMP_RESET":return Object(fe.a)(Object(fe.a)({},e),{},{active:!1,error:!1,success:!1,response:null});default:return e}}}),Oe=Object(pe.createLogger)(),me=[],Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d;var je;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(o.a,{store:Object(se.e)(be,je,Ee(se.a.apply(void 0,me.concat([Oe]))))},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.8d91a4e7.chunk.js.map