(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function g0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Uu={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function mp(){if(Fd)return Hl;Fd=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(o,d,h){var b=null;if(h!==void 0&&(b=""+h),d.key!==void 0&&(b=""+d.key),"key"in d){h={};for(var M in d)M!=="key"&&(h[M]=d[M])}else h=d;return d=h.ref,{$$typeof:r,type:o,key:b,ref:d!==void 0?d:null,props:h}}return Hl.Fragment=u,Hl.jsx=s,Hl.jsxs=s,Hl}var Wd;function pp(){return Wd||(Wd=1,Uu.exports=mp()),Uu.exports}var A=pp(),ju={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function bp(){if($d)return it;$d=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.iterator;function B(g){return g===null||typeof g!="object"?null:(g=k&&g[k]||g["@@iterator"],typeof g=="function"?g:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function H(g,U,Q){this.props=g,this.context=U,this.refs=N,this.updater=Q||q}H.prototype.isReactComponent={},H.prototype.setState=function(g,U){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,U,"setState")},H.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Z(){}Z.prototype=H.prototype;function X(g,U,Q){this.props=g,this.context=U,this.refs=N,this.updater=Q||q}var P=X.prototype=new Z;P.constructor=X,j(P,H.prototype),P.isPureReactComponent=!0;var dt=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function W(g,U,Q,L,$,ht){return Q=ht.ref,{$$typeof:r,type:g,key:U,ref:Q!==void 0?Q:null,props:ht}}function st(g,U){return W(g.type,U,void 0,void 0,void 0,g.props)}function at(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Qt(g){var U={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Q){return U[Q]})}var Gt=/\/+/g;function Ht(g,U){return typeof g=="object"&&g!==null&&g.key!=null?Qt(""+g.key):U.toString(36)}function qe(){}function Le(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(qe,qe):(g.status="pending",g.then(function(U){g.status==="pending"&&(g.status="fulfilled",g.value=U)},function(U){g.status==="pending"&&(g.status="rejected",g.reason=U)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Jt(g,U,Q,L,$){var ht=typeof g;(ht==="undefined"||ht==="boolean")&&(g=null);var lt=!1;if(g===null)lt=!0;else switch(ht){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(g.$$typeof){case r:case u:lt=!0;break;case x:return lt=g._init,Jt(lt(g._payload),U,Q,L,$)}}if(lt)return $=$(g),lt=L===""?"."+Ht(g,0):L,dt($)?(Q="",lt!=null&&(Q=lt.replace(Gt,"$&/")+"/"),Jt($,U,Q,"",function(on){return on})):$!=null&&(at($)&&($=st($,Q+($.key==null||g&&g.key===$.key?"":(""+$.key).replace(Gt,"$&/")+"/")+lt)),U.push($)),1;lt=0;var le=L===""?".":L+":";if(dt(g))for(var Et=0;Et<g.length;Et++)L=g[Et],ht=le+Ht(L,Et),lt+=Jt(L,U,Q,ht,$);else if(Et=B(g),typeof Et=="function")for(g=Et.call(g),Et=0;!(L=g.next()).done;)L=L.value,ht=le+Ht(L,Et++),lt+=Jt(L,U,Q,ht,$);else if(ht==="object"){if(typeof g.then=="function")return Jt(Le(g),U,Q,L,$);throw U=String(g),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return lt}function R(g,U,Q){if(g==null)return g;var L=[],$=0;return Jt(g,L,"","",function(ht){return U.call(Q,ht,$++)}),L}function Y(g){if(g._status===-1){var U=g._result;U=U(),U.then(function(Q){(g._status===0||g._status===-1)&&(g._status=1,g._result=Q)},function(Q){(g._status===0||g._status===-1)&&(g._status=2,g._result=Q)}),g._status===-1&&(g._status=0,g._result=U)}if(g._status===1)return g._result.default;throw g._result}var et=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function St(){}return it.Children={map:R,forEach:function(g,U,Q){R(g,function(){U.apply(this,arguments)},Q)},count:function(g){var U=0;return R(g,function(){U++}),U},toArray:function(g){return R(g,function(U){return U})||[]},only:function(g){if(!at(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},it.Component=H,it.Fragment=s,it.Profiler=d,it.PureComponent=X,it.StrictMode=o,it.Suspense=y,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,it.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},it.cache=function(g){return function(){return g.apply(null,arguments)}},it.cloneElement=function(g,U,Q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var L=j({},g.props),$=g.key,ht=void 0;if(U!=null)for(lt in U.ref!==void 0&&(ht=void 0),U.key!==void 0&&($=""+U.key),U)!V.call(U,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&U.ref===void 0||(L[lt]=U[lt]);var lt=arguments.length-2;if(lt===1)L.children=Q;else if(1<lt){for(var le=Array(lt),Et=0;Et<lt;Et++)le[Et]=arguments[Et+2];L.children=le}return W(g.type,$,void 0,void 0,ht,L)},it.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},it.createElement=function(g,U,Q){var L,$={},ht=null;if(U!=null)for(L in U.key!==void 0&&(ht=""+U.key),U)V.call(U,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&($[L]=U[L]);var lt=arguments.length-2;if(lt===1)$.children=Q;else if(1<lt){for(var le=Array(lt),Et=0;Et<lt;Et++)le[Et]=arguments[Et+2];$.children=le}if(g&&g.defaultProps)for(L in lt=g.defaultProps,lt)$[L]===void 0&&($[L]=lt[L]);return W(g,ht,void 0,void 0,null,$)},it.createRef=function(){return{current:null}},it.forwardRef=function(g){return{$$typeof:M,render:g}},it.isValidElement=at,it.lazy=function(g){return{$$typeof:x,_payload:{_status:-1,_result:g},_init:Y}},it.memo=function(g,U){return{$$typeof:m,type:g,compare:U===void 0?null:U}},it.startTransition=function(g){var U=F.T,Q={};F.T=Q;try{var L=g(),$=F.S;$!==null&&$(Q,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(St,et)}catch(ht){et(ht)}finally{F.T=U}},it.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},it.use=function(g){return F.H.use(g)},it.useActionState=function(g,U,Q){return F.H.useActionState(g,U,Q)},it.useCallback=function(g,U){return F.H.useCallback(g,U)},it.useContext=function(g){return F.H.useContext(g)},it.useDebugValue=function(){},it.useDeferredValue=function(g,U){return F.H.useDeferredValue(g,U)},it.useEffect=function(g,U,Q){var L=F.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(g,U)},it.useId=function(){return F.H.useId()},it.useImperativeHandle=function(g,U,Q){return F.H.useImperativeHandle(g,U,Q)},it.useInsertionEffect=function(g,U){return F.H.useInsertionEffect(g,U)},it.useLayoutEffect=function(g,U){return F.H.useLayoutEffect(g,U)},it.useMemo=function(g,U){return F.H.useMemo(g,U)},it.useOptimistic=function(g,U){return F.H.useOptimistic(g,U)},it.useReducer=function(g,U,Q){return F.H.useReducer(g,U,Q)},it.useRef=function(g){return F.H.useRef(g)},it.useState=function(g){return F.H.useState(g)},it.useSyncExternalStore=function(g,U,Q){return F.H.useSyncExternalStore(g,U,Q)},it.useTransition=function(){return F.H.useTransition()},it.version="19.1.0",it}var Id;function Ku(){return Id||(Id=1,ju.exports=bp()),ju.exports}var z=Ku();const ze=g0(z);var Bu={exports:{}},ql={},Hu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function gp(){return t0||(t0=1,function(r){function u(R,Y){var et=R.length;R.push(Y);t:for(;0<et;){var St=et-1>>>1,g=R[St];if(0<d(g,Y))R[St]=Y,R[et]=g,et=St;else break t}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Y=R[0],et=R.pop();if(et!==Y){R[0]=et;t:for(var St=0,g=R.length,U=g>>>1;St<U;){var Q=2*(St+1)-1,L=R[Q],$=Q+1,ht=R[$];if(0>d(L,et))$<g&&0>d(ht,L)?(R[St]=ht,R[$]=et,St=$):(R[St]=L,R[Q]=et,St=Q);else if($<g&&0>d(ht,et))R[St]=ht,R[$]=et,St=$;else break t}}return Y}function d(R,Y){var et=R.sortIndex-Y.sortIndex;return et!==0?et:R.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var b=Date,M=b.now();r.unstable_now=function(){return b.now()-M}}var y=[],m=[],x=1,k=null,B=3,q=!1,j=!1,N=!1,H=!1,Z=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function dt(R){for(var Y=s(m);Y!==null;){if(Y.callback===null)o(m);else if(Y.startTime<=R)o(m),Y.sortIndex=Y.expirationTime,u(y,Y);else break;Y=s(m)}}function F(R){if(N=!1,dt(R),!j)if(s(y)!==null)j=!0,V||(V=!0,Ht());else{var Y=s(m);Y!==null&&Jt(F,Y.startTime-R)}}var V=!1,W=-1,st=5,at=-1;function Qt(){return H?!0:!(r.unstable_now()-at<st)}function Gt(){if(H=!1,V){var R=r.unstable_now();at=R;var Y=!0;try{t:{j=!1,N&&(N=!1,X(W),W=-1),q=!0;var et=B;try{e:{for(dt(R),k=s(y);k!==null&&!(k.expirationTime>R&&Qt());){var St=k.callback;if(typeof St=="function"){k.callback=null,B=k.priorityLevel;var g=St(k.expirationTime<=R);if(R=r.unstable_now(),typeof g=="function"){k.callback=g,dt(R),Y=!0;break e}k===s(y)&&o(y),dt(R)}else o(y);k=s(y)}if(k!==null)Y=!0;else{var U=s(m);U!==null&&Jt(F,U.startTime-R),Y=!1}}break t}finally{k=null,B=et,q=!1}Y=void 0}}finally{Y?Ht():V=!1}}}var Ht;if(typeof P=="function")Ht=function(){P(Gt)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Le=qe.port2;qe.port1.onmessage=Gt,Ht=function(){Le.postMessage(null)}}else Ht=function(){Z(Gt,0)};function Jt(R,Y){W=Z(function(){R(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(R){switch(B){case 1:case 2:case 3:var Y=3;break;default:Y=B}var et=B;B=Y;try{return R()}finally{B=et}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var et=B;B=R;try{return Y()}finally{B=et}},r.unstable_scheduleCallback=function(R,Y,et){var St=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?St+et:St):et=St,R){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=et+g,R={id:x++,callback:Y,priorityLevel:R,startTime:et,expirationTime:g,sortIndex:-1},et>St?(R.sortIndex=et,u(m,R),s(y)===null&&R===s(m)&&(N?(X(W),W=-1):N=!0,Jt(F,et-St))):(R.sortIndex=g,u(y,R),j||q||(j=!0,V||(V=!0,Ht()))),R},r.unstable_shouldYield=Qt,r.unstable_wrapCallback=function(R){var Y=B;return function(){var et=B;B=Y;try{return R.apply(this,arguments)}finally{B=et}}}}(qu)),qu}var e0;function vp(){return e0||(e0=1,Hu.exports=gp()),Hu.exports}var Lu={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function yp(){if(n0)return Wt;n0=1;var r=Ku();function u(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,m,x){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:y,containerInfo:m,implementation:x}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Wt.createPortal=function(y,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return h(y,m,null,x)},Wt.flushSync=function(y){var m=b.T,x=o.p;try{if(b.T=null,o.p=2,y)return y()}finally{b.T=m,o.p=x,o.d.f()}},Wt.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(y,m))},Wt.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Wt.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var x=m.as,k=M(x,m.crossOrigin),B=typeof m.integrity=="string"?m.integrity:void 0,q=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:q}):x==="script"&&o.d.X(y,{crossOrigin:k,integrity:B,fetchPriority:q,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Wt.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=M(m.as,m.crossOrigin);o.d.M(y,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(y)},Wt.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,k=M(x,m.crossOrigin);o.d.L(y,x,{crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Wt.preloadModule=function(y,m){if(typeof y=="string")if(m){var x=M(m.as,m.crossOrigin);o.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(y)},Wt.requestFormReset=function(y){o.d.r(y)},Wt.unstable_batchedUpdates=function(y,m){return y(m)},Wt.useFormState=function(y,m,x){return b.H.useFormState(y,m,x)},Wt.useFormStatus=function(){return b.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var a0;function xp(){if(a0)return Lu.exports;a0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Lu.exports=yp(),Lu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function Sp(){if(l0)return ql;l0=1;var r=vp(),u=Ku(),s=xp();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M(t){if(h(t)!==t)throw Error(o(188))}function y(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return M(l),t;if(i===a)return M(l),e;i=i.sibling}throw Error(o(188))}if(n.return!==a.return)n=l,a=i;else{for(var c=!1,f=l.child;f;){if(f===n){c=!0,n=l,a=i;break}if(f===a){c=!0,a=l,n=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===n){c=!0,n=i,a=l;break}if(f===a){c=!0,a=i,n=l;break}f=f.sibling}if(!c)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,k=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),P=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),Qt=Symbol.for("react.memo_cache_sentinel"),Gt=Symbol.iterator;function Ht(t){return t===null||typeof t!="object"?null:(t=Gt&&t[Gt]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Symbol.for("react.client.reference");function Le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case H:return"Profiler";case N:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case P:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case dt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:Le(t.type)||"Memo";case st:e=t._payload,t=t._init;try{return Le(t(e))}catch{}}return null}var Jt=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},St=[],g=-1;function U(t){return{current:t}}function Q(t){0>g||(t.current=St[g],St[g]=null,g--)}function L(t,e){g++,St[g]=t.current,t.current=e}var $=U(null),ht=U(null),lt=U(null),le=U(null);function Et(t,e){switch(L(lt,e),L(ht,t),L($,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ed(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ed(e),t=Td(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q($),L($,t)}function on(){Q($),Q(ht),Q(lt)}function yr(t){t.memoizedState!==null&&L(le,t);var e=$.current,n=Td(e,t.type);e!==n&&(L(ht,t),L($,n))}function Jl(t){ht.current===t&&(Q($),Q(ht)),le.current===t&&(Q(le),kl._currentValue=et)}var xr=Object.prototype.hasOwnProperty,Sr=r.unstable_scheduleCallback,Ar=r.unstable_cancelCallback,V0=r.unstable_shouldYield,K0=r.unstable_requestPaint,Re=r.unstable_now,J0=r.unstable_getCurrentPriorityLevel,ac=r.unstable_ImmediatePriority,lc=r.unstable_UserBlockingPriority,Pl=r.unstable_NormalPriority,P0=r.unstable_LowPriority,ic=r.unstable_IdlePriority,F0=r.log,W0=r.unstable_setDisableYieldValue,Ya=null,ie=null;function un(t){if(typeof F0=="function"&&W0(t),ie&&typeof ie.setStrictMode=="function")try{ie.setStrictMode(Ya,t)}catch{}}var re=Math.clz32?Math.clz32:th,$0=Math.log,I0=Math.LN2;function th(t){return t>>>=0,t===0?32:31-($0(t)/I0|0)|0}var Fl=256,Wl=4194304;function kn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $l(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?l=kn(a):(c&=f,c!==0?l=kn(c):n||(n=f&~t,n!==0&&(l=kn(n))))):(f=a&~i,f!==0?l=kn(f):c!==0?l=kn(c):n||(n=a&~t,n!==0&&(l=kn(n)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:l}function Xa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function eh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(){var t=Fl;return Fl<<=1,(Fl&4194048)===0&&(Fl=256),t}function oc(){var t=Wl;return Wl<<=1,(Wl&62914560)===0&&(Wl=4194304),t}function Or(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nh(t,e,n,a,l,i){var c=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var f=t.entanglements,p=t.expirationTimes,E=t.hiddenUpdates;for(n=c&~n;0<n;){var D=31-re(n),_=1<<D;f[D]=0,p[D]=-1;var T=E[D];if(T!==null)for(E[D]=null,D=0;D<T.length;D++){var w=T[D];w!==null&&(w.lane&=-536870913)}n&=~_}a!==0&&uc(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function uc(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-re(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function cc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-re(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Er(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sc(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Gd(t.type))}function ah(t,e){var n=Y.p;try{return Y.p=t,e()}finally{Y.p=n}}var cn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+cn,It="__reactProps$"+cn,$n="__reactContainer$"+cn,Mr="__reactEvents$"+cn,lh="__reactListeners$"+cn,ih="__reactHandles$"+cn,fc="__reactResources$"+cn,Ga="__reactMarker$"+cn;function wr(t){delete t[Pt],delete t[It],delete t[Mr],delete t[lh],delete t[ih]}function In(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dd(t);t!==null;){if(n=t[Pt])return n;t=Dd(t)}return e}t=n,n=t.parentNode}return null}function ta(t){if(t=t[Pt]||t[$n]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ea(t){var e=t[fc];return e||(e=t[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[Ga]=!0}var dc=new Set,hc={};function _n(t,e){na(t,e),na(t+"Capture",e)}function na(t,e){for(hc[t]=e,t=0;t<e.length;t++)dc.add(e[t])}var rh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},pc={};function oh(t){return xr.call(pc,t)?!0:xr.call(mc,t)?!1:rh.test(t)?pc[t]=!0:(mc[t]=!0,!1)}function Il(t,e,n){if(oh(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ti(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ye(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var zr,bc;function aa(t){if(zr===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zr=e&&e[1]||"",bc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zr+t+bc}var Dr=!1;function Rr(t,e){if(!t||Dr)return"";Dr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(w){var T=w}Reflect.construct(t,[],_)}else{try{_.call()}catch(w){T=w}t.call(_.prototype)}}else{try{throw Error()}catch(w){T=w}(_=t())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(w){if(w&&T&&typeof w.stack=="string")return[w.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var p=c.split(`
`),E=f.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===E.length)for(a=p.length-1,l=E.length-1;1<=a&&0<=l&&p[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==E[l]){var D=`
`+p[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=l);break}}}finally{Dr=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?aa(n):""}function uh(t){switch(t.tag){case 26:case 27:case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 15:return Rr(t.type,!1);case 11:return Rr(t.type.render,!1);case 1:return Rr(t.type,!0);case 31:return aa("Activity");default:return""}}function gc(t){try{var e="";do e+=uh(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ch(t){var e=vc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ei(t){t._valueTracker||(t._valueTracker=ch(t))}function yc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=vc(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function ni(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sh=/[\n"\\]/g;function be(t){return t.replace(sh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Nr(t,e,n,a,l,i,c,f){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?Cr(t,c,pe(e)):n!=null?Cr(t,c,pe(n)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+pe(f):t.removeAttribute("name")}function xc(t,e,n,a,l,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;n=n!=null?""+pe(n):"",e=e!=null?""+pe(e):n,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function Cr(t,e,n){e==="number"&&ni(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function la(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+pe(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Sc(t,e,n){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+pe(n):""}function Ac(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(o(92));if(Jt(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=pe(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||fh.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Ec(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&Oc(t,l,a)}else for(var i in e)e.hasOwnProperty(i)&&Oc(t,i,e[i])}function kr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(t){return hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _r=null;function Ur(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ra=null,oa=null;function Tc(t){var e=ta(t);if(e&&(t=e.stateNode)){var n=t[It]||null;t:switch(t=e.stateNode,e.type){case"input":if(Nr(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[It]||null;if(!l)throw Error(o(90));Nr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&yc(a)}break t;case"textarea":Sc(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&la(t,!!n.multiple,e,!1)}}}var jr=!1;function Mc(t,e,n){if(jr)return t(e,n);jr=!0;try{var a=t(e);return a}finally{if(jr=!1,(ra!==null||oa!==null)&&(Xi(),ra&&(e=ra,t=oa,oa=ra=null,Tc(e),t)))for(e=0;e<t.length;e++)Tc(t[e])}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(Xe)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Br=!1}var sn=null,Hr=null,li=null;function wc(){if(li)return li;var t,e=Hr,n=e.length,a,l="value"in sn?sn.value:sn.textContent,i=l.length;for(t=0;t<n&&e[t]===l[t];t++);var c=n-t;for(a=1;a<=c&&e[n-a]===l[i-a];a++);return li=l.slice(t,1<a?1-a:void 0)}function ii(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ri(){return!0}function zc(){return!1}function te(t){function e(n,a,l,i,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(n=t[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:zc,this.isPropagationStopped=zc,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),e}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=te(Un),Ja=x({},Un,{view:0,detail:0}),mh=te(Ja),qr,Lr,Pa,ui=x({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(qr=t.screenX-Pa.screenX,Lr=t.screenY-Pa.screenY):Lr=qr=0,Pa=t),qr)},movementY:function(t){return"movementY"in t?t.movementY:Lr}}),Dc=te(ui),ph=x({},ui,{dataTransfer:0}),bh=te(ph),gh=x({},Ja,{relatedTarget:0}),Yr=te(gh),vh=x({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=te(vh),xh=x({},Un,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sh=te(xh),Ah=x({},Un,{data:0}),Rc=te(Ah),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Th[t])?!!e[t]:!1}function Xr(){return Mh}var wh=x({},Ja,{key:function(t){if(t.key){var e=Oh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ii(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Eh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(t){return t.type==="keypress"?ii(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ii(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zh=te(wh),Dh=x({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=te(Dh),Rh=x({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),Nh=te(Rh),Ch=x({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=te(Ch),_h=x({},ui,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uh=te(_h),jh=x({},Un,{newState:0,oldState:0}),Bh=te(jh),Hh=[9,13,27,32],Qr=Xe&&"CompositionEvent"in window,Fa=null;Xe&&"documentMode"in document&&(Fa=document.documentMode);var qh=Xe&&"TextEvent"in window&&!Fa,Cc=Xe&&(!Qr||Fa&&8<Fa&&11>=Fa),kc=" ",_c=!1;function Uc(t,e){switch(t){case"keyup":return Hh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ua=!1;function Lh(t,e){switch(t){case"compositionend":return jc(e);case"keypress":return e.which!==32?null:(_c=!0,kc);case"textInput":return t=e.data,t===kc&&_c?null:t;default:return null}}function Yh(t,e){if(ua)return t==="compositionend"||!Qr&&Uc(t,e)?(t=wc(),li=Hr=sn=null,ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cc&&e.locale!=="ko"?null:e.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xh[t.type]:e==="textarea"}function Hc(t,e,n,a){ra?oa?oa.push(a):oa=[a]:ra=a,e=Ji(e,"onChange"),0<e.length&&(n=new oi("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Wa=null,$a=null;function Qh(t){yd(t,0)}function ci(t){var e=Za(t);if(yc(e))return t}function qc(t,e){if(t==="change")return e}var Lc=!1;if(Xe){var Gr;if(Xe){var Zr="oninput"in document;if(!Zr){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Zr=typeof Yc.oninput=="function"}Gr=Zr}else Gr=!1;Lc=Gr&&(!document.documentMode||9<document.documentMode)}function Xc(){Wa&&(Wa.detachEvent("onpropertychange",Qc),$a=Wa=null)}function Qc(t){if(t.propertyName==="value"&&ci($a)){var e=[];Hc(e,$a,t,Ur(t)),Mc(Qh,e)}}function Gh(t,e,n){t==="focusin"?(Xc(),Wa=e,$a=n,Wa.attachEvent("onpropertychange",Qc)):t==="focusout"&&Xc()}function Zh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ci($a)}function Vh(t,e){if(t==="click")return ci(e)}function Kh(t,e){if(t==="input"||t==="change")return ci(e)}function Jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oe=typeof Object.is=="function"?Object.is:Jh;function Ia(t,e){if(oe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!xr.call(e,l)||!oe(t[l],e[l]))return!1}return!0}function Gc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zc(t,e){var n=Gc(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Gc(n)}}function Vc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ni(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ni(t.document)}return e}function Vr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ph=Xe&&"documentMode"in document&&11>=document.documentMode,ca=null,Kr=null,tl=null,Jr=!1;function Jc(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||ca==null||ca!==ni(a)||(a=ca,"selectionStart"in a&&Vr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),tl&&Ia(tl,a)||(tl=a,a=Ji(Kr,"onSelect"),0<a.length&&(e=new oi("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=ca)))}function jn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sa={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionrun:jn("Transition","TransitionRun"),transitionstart:jn("Transition","TransitionStart"),transitioncancel:jn("Transition","TransitionCancel"),transitionend:jn("Transition","TransitionEnd")},Pr={},Pc={};Xe&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Bn(t){if(Pr[t])return Pr[t];if(!sa[t])return t;var e=sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pc)return Pr[t]=e[n];return t}var Fc=Bn("animationend"),Wc=Bn("animationiteration"),$c=Bn("animationstart"),Fh=Bn("transitionrun"),Wh=Bn("transitionstart"),$h=Bn("transitioncancel"),Ic=Bn("transitionend"),ts=new Map,Fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fr.push("scrollEnd");function Ee(t,e){ts.set(t,e),_n(e,[t])}var es=new WeakMap;function ge(t,e){if(typeof t=="object"&&t!==null){var n=es.get(t);return n!==void 0?n:(e={value:t,source:e,stack:gc(e)},es.set(t,e),e)}return{value:t,source:e,stack:gc(e)}}var ve=[],fa=0,Wr=0;function si(){for(var t=fa,e=Wr=fa=0;e<t;){var n=ve[e];ve[e++]=null;var a=ve[e];ve[e++]=null;var l=ve[e];ve[e++]=null;var i=ve[e];if(ve[e++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&ns(n,l,i)}}function fi(t,e,n,a){ve[fa++]=t,ve[fa++]=e,ve[fa++]=n,ve[fa++]=a,Wr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function $r(t,e,n,a){return fi(t,e,n,a),di(t)}function da(t,e){return fi(t,null,null,e),di(t)}function ns(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=t.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-re(n),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),i):null}function di(t){if(50<Tl)throw Tl=0,iu=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ha={};function Ih(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ue(t,e,n,a){return new Ih(t,e,n,a)}function Ir(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qe(t,e){var n=t.alternate;return n===null?(n=ue(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function as(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function hi(t,e,n,a,l,i){var c=0;if(a=t,typeof t=="function")Ir(t)&&(c=1);else if(typeof t=="string")c=ep(t,n,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=ue(31,n,e,l),t.elementType=at,t.lanes=i,t;case j:return Hn(n.children,l,i,e);case N:c=8,l|=24;break;case H:return t=ue(12,n,e,l|2),t.elementType=H,t.lanes=i,t;case F:return t=ue(13,n,e,l),t.elementType=F,t.lanes=i,t;case V:return t=ue(19,n,e,l),t.elementType=V,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:case P:c=10;break t;case X:c=9;break t;case dt:c=11;break t;case W:c=14;break t;case st:c=16,a=null;break t}c=29,n=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=ue(c,n,e,l),e.elementType=t,e.type=a,e.lanes=i,e}function Hn(t,e,n,a){return t=ue(7,t,a,e),t.lanes=n,t}function to(t,e,n){return t=ue(6,t,null,e),t.lanes=n,t}function eo(t,e,n){return e=ue(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ma=[],pa=0,mi=null,pi=0,ye=[],xe=0,qn=null,Ge=1,Ze="";function Ln(t,e){ma[pa++]=pi,ma[pa++]=mi,mi=t,pi=e}function ls(t,e,n){ye[xe++]=Ge,ye[xe++]=Ze,ye[xe++]=qn,qn=t;var a=Ge;t=Ze;var l=32-re(a)-1;a&=~(1<<l),n+=1;var i=32-re(e)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Ge=1<<32-re(e)+l|n<<l|a,Ze=i+t}else Ge=1<<i|n<<l|a,Ze=t}function no(t){t.return!==null&&(Ln(t,1),ls(t,1,0))}function ao(t){for(;t===mi;)mi=ma[--pa],ma[pa]=null,pi=ma[--pa],ma[pa]=null;for(;t===qn;)qn=ye[--xe],ye[xe]=null,Ze=ye[--xe],ye[xe]=null,Ge=ye[--xe],ye[xe]=null}var $t=null,Dt=null,pt=!1,Yn=null,Ne=!1,lo=Error(o(519));function Xn(t){var e=Error(o(418,""));throw al(ge(e,t)),lo}function is(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[It]=a,n){case"dialog":ct("cancel",e),ct("close",e);break;case"iframe":case"object":case"embed":ct("load",e);break;case"video":case"audio":for(n=0;n<wl.length;n++)ct(wl[n],e);break;case"source":ct("error",e);break;case"img":case"image":case"link":ct("error",e),ct("load",e);break;case"details":ct("toggle",e);break;case"input":ct("invalid",e),xc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ei(e);break;case"select":ct("invalid",e);break;case"textarea":ct("invalid",e),Ac(e,a.value,a.defaultValue,a.children),ei(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Od(e.textContent,n)?(a.popover!=null&&(ct("beforetoggle",e),ct("toggle",e)),a.onScroll!=null&&ct("scroll",e),a.onScrollEnd!=null&&ct("scrollend",e),a.onClick!=null&&(e.onclick=Pi),e=!0):e=!1,e||Xn(t)}function rs(t){for($t=t.return;$t;)switch($t.tag){case 5:case 13:Ne=!1;return;case 27:case 3:Ne=!0;return;default:$t=$t.return}}function el(t){if(t!==$t)return!1;if(!pt)return rs(t),pt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Su(t.type,t.memoizedProps)),n=!n),n&&Dt&&Xn(t),rs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Dt=Me(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Dt=null}}else e===27?(e=Dt,Mn(t.type)?(t=Tu,Tu=null,Dt=t):Dt=e):Dt=$t?Me(t.stateNode.nextSibling):null;return!0}function nl(){Dt=$t=null,pt=!1}function os(){var t=Yn;return t!==null&&(ae===null?ae=t:ae.push.apply(ae,t),Yn=null),t}function al(t){Yn===null?Yn=[t]:Yn.push(t)}var io=U(null),Qn=null,Ve=null;function fn(t,e,n){L(io,e._currentValue),e._currentValue=n}function Ke(t){t._currentValue=io.current,Q(io)}function ro(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function oo(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=l;for(var p=0;p<e.length;p++)if(f.context===e[p]){i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),ro(i.return,n,t),a||(c=null);break t}i=f.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=n,i=c.alternate,i!==null&&(i.lanes|=n),ro(c,n,t),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function ll(t,e,n,a){t=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=l.type;oe(l.pendingProps.value,c.value)||(t!==null?t.push(f):t=[f])}}else if(l===le.current){if(c=l.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(kl):t=[kl])}l=l.return}t!==null&&oo(e,t,n,a),e.flags|=262144}function bi(t){for(t=t.firstContext;t!==null;){if(!oe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gn(t){Qn=t,Ve=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return us(Qn,t)}function gi(t,e){return Qn===null&&Gn(t),us(t,e)}function us(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ve===null){if(t===null)throw Error(o(308));Ve=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ve=Ve.next=e;return n}var tm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},em=r.unstable_scheduleCallback,nm=r.unstable_NormalPriority,Ut={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uo(){return{controller:new tm,data:new Map,refCount:0}}function il(t){t.refCount--,t.refCount===0&&em(nm,function(){t.controller.abort()})}var rl=null,co=0,ba=0,ga=null;function am(t,e){if(rl===null){var n=rl=[];co=0,ba=du(),ga={status:"pending",value:void 0,then:function(a){n.push(a)}}}return co++,e.then(cs,cs),e}function cs(){if(--co===0&&rl!==null){ga!==null&&(ga.status="fulfilled");var t=rl;rl=null,ba=0,ga=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function lm(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var ss=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&am(t,e),ss!==null&&ss(t,e)};var Zn=U(null);function so(){var t=Zn.current;return t!==null?t:Ot.pooledCache}function vi(t,e){e===null?L(Zn,Zn.current):L(Zn,e.pool)}function fs(){var t=so();return t===null?null:{parent:Ut._currentValue,pool:t}}var ol=Error(o(460)),ds=Error(o(474)),yi=Error(o(542)),fo={then:function(){}};function hs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xi(){}function ms(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(xi,xi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,bs(t),t;default:if(typeof e.status=="string")e.then(xi,xi);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,bs(t),t}throw ul=e,ol}}var ul=null;function ps(){if(ul===null)throw Error(o(459));var t=ul;return ul=null,t}function bs(t){if(t===ol||t===yi)throw Error(o(483))}var dn=!1;function ho(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function mn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=di(t),ns(t,null,n),e}return fi(t,a,e,n),di(t)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,cc(t,n)}}function po(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?l=i=e:i=i.next=e}else l=i=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var bo=!1;function sl(){if(bo){var t=ga;if(t!==null)throw t}}function fl(t,e,n,a){bo=!1;var l=t.updateQueue;dn=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var p=f,E=p.next;p.next=null,c===null?i=E:c.next=E,c=p;var D=t.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==c&&(f===null?D.firstBaseUpdate=E:f.next=E,D.lastBaseUpdate=p))}if(i!==null){var _=l.baseState;c=0,D=E=p=null,f=i;do{var T=f.lane&-536870913,w=T!==f.lane;if(w?(ft&T)===T:(a&T)===T){T!==0&&T===ba&&(bo=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var nt=t,I=f;T=e;var xt=n;switch(I.tag){case 1:if(nt=I.payload,typeof nt=="function"){_=nt.call(xt,_,T);break t}_=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=I.payload,T=typeof nt=="function"?nt.call(xt,_,T):nt,T==null)break t;_=x({},_,T);break t;case 2:dn=!0}}T=f.callback,T!==null&&(t.flags|=64,w&&(t.flags|=8192),w=l.callbacks,w===null?l.callbacks=[T]:w.push(T))}else w={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(E=D=w,p=_):D=D.next=w,c|=T;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;w=f,f=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);D===null&&(p=_),l.baseState=p,l.firstBaseUpdate=E,l.lastBaseUpdate=D,i===null&&(l.shared.lanes=0),An|=c,t.lanes=c,t.memoizedState=_}}function gs(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function vs(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)gs(n[t],e)}var va=U(null),Si=U(0);function ys(t,e){t=tn,L(Si,t),L(va,e),tn=t|e.baseLanes}function go(){L(Si,tn),L(va,va.current)}function vo(){tn=Si.current,Q(va),Q(Si)}var pn=0,rt=null,vt=null,kt=null,Ai=!1,ya=!1,Vn=!1,Oi=0,dl=0,xa=null,im=0;function Nt(){throw Error(o(321))}function yo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oe(t[n],e[n]))return!1;return!0}function xo(t,e,n,a,l,i){return pn=i,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?nf:af,Vn=!1,i=n(a,l),Vn=!1,ya&&(i=Ss(e,n,a,l)),xs(t),i}function xs(t){R.H=Di;var e=vt!==null&&vt.next!==null;if(pn=0,kt=vt=rt=null,Ai=!1,dl=0,xa=null,e)throw Error(o(300));t===null||Lt||(t=t.dependencies,t!==null&&bi(t)&&(Lt=!0))}function Ss(t,e,n,a){rt=t;var l=0;do{if(ya&&(xa=null),dl=0,ya=!1,25<=l)throw Error(o(301));if(l+=1,kt=vt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=dm,i=e(n,a)}while(ya);return i}function rm(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?hl(e):e,t=t.useState()[0],(vt!==null?vt.memoizedState:null)!==t&&(rt.flags|=1024),e}function So(){var t=Oi!==0;return Oi=0,t}function Ao(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Oo(t){if(Ai){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ai=!1}pn=0,kt=vt=rt=null,ya=!1,dl=Oi=0,xa=null}function ee(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?rt.memoizedState=kt=t:kt=kt.next=t,kt}function _t(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=kt===null?rt.memoizedState:kt.next;if(e!==null)kt=e,vt=t;else{if(t===null)throw rt.alternate===null?Error(o(467)):Error(o(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},kt===null?rt.memoizedState=kt=t:kt=kt.next=t}return kt}function Eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var e=dl;return dl+=1,xa===null&&(xa=[]),t=ms(xa,t,e),e=rt,(kt===null?e.memoizedState:kt.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?nf:af),t}function Ei(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===P)return Ft(t)}throw Error(o(438,String(t)))}function To(t){var e=null,n=rt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=rt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Eo(),rt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=Qt;return e.index++,n}function Je(t,e){return typeof e=="function"?e(t):e}function Ti(t){var e=_t();return Mo(e,vt,t)}function Mo(t,e,n){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}e.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var f=c=null,p=null,E=e,D=!1;do{var _=E.lane&-536870913;if(_!==E.lane?(ft&_)===_:(pn&_)===_){var T=E.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),_===ba&&(D=!0);else if((pn&T)===T){E=E.next,T===ba&&(D=!0);continue}else _={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=_,c=i):p=p.next=_,rt.lanes|=T,An|=T;_=E.action,Vn&&n(i,_),i=E.hasEagerState?E.eagerState:n(i,_)}else T={lane:_,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=T,c=i):p=p.next=T,rt.lanes|=_,An|=_;E=E.next}while(E!==null&&E!==e);if(p===null?c=i:p.next=f,!oe(i,t.memoizedState)&&(Lt=!0,D&&(n=ga,n!==null)))throw n;t.memoizedState=i,t.baseState=c,t.baseQueue=p,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function wo(t){var e=_t(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,i=e.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do i=t(i,c.action),c=c.next;while(c!==l);oe(i,e.memoizedState)||(Lt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,a]}function As(t,e,n){var a=rt,l=_t(),i=pt;if(i){if(n===void 0)throw Error(o(407));n=n()}else n=e();var c=!oe((vt||l).memoizedState,n);c&&(l.memoizedState=n,Lt=!0),l=l.queue;var f=Ts.bind(null,a,l,t);if(ml(2048,8,f,[t]),l.getSnapshot!==e||c||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Sa(9,Mi(),Es.bind(null,a,l,n,e),null),Ot===null)throw Error(o(349));i||(pn&124)!==0||Os(a,e,n)}return n}function Os(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e=Eo(),rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Es(t,e,n,a){e.value=n,e.getSnapshot=a,Ms(e)&&ws(t)}function Ts(t,e,n){return n(function(){Ms(e)&&ws(t)})}function Ms(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oe(t,n)}catch{return!0}}function ws(t){var e=da(t,2);e!==null&&he(e,t,2)}function zo(t){var e=ee();if(typeof t=="function"){var n=t;if(t=n(),Vn){un(!0);try{n()}finally{un(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:t},e}function zs(t,e,n,a){return t.baseState=n,Mo(t,vt,typeof a=="function"?a:Je)}function om(t,e,n,a,l){if(zi(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};R.T!==null?n(!0):i.isTransition=!1,a(i),n=e.pending,n===null?(i.next=e.pending=i,Ds(e,i)):(i.next=n.next,e.pending=n.next=i)}}function Ds(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var i=R.T,c={};R.T=c;try{var f=n(l,a),p=R.S;p!==null&&p(c,f),Rs(t,e,f)}catch(E){Do(t,e,E)}finally{R.T=i}}else try{i=n(l,a),Rs(t,e,i)}catch(E){Do(t,e,E)}}function Rs(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ns(t,e,a)},function(a){return Do(t,e,a)}):Ns(t,e,n)}function Ns(t,e,n){e.status="fulfilled",e.value=n,Cs(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Ds(t,n)))}function Do(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Cs(e),e=e.next;while(e!==a)}t.action=null}function Cs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ks(t,e){return e}function _s(t,e){if(pt){var n=Ot.formState;if(n!==null){t:{var a=rt;if(pt){if(Dt){e:{for(var l=Dt,i=Ne;l.nodeType!==8;){if(!i){l=null;break e}if(l=Me(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Dt=Me(l.nextSibling),a=l.data==="F!";break t}}Xn(a)}a=!1}a&&(e=n[0])}}return n=ee(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},n.queue=a,n=Is.bind(null,rt,a),a.dispatch=n,a=zo(!1),i=_o.bind(null,rt,!1,a.queue),a=ee(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=om.bind(null,rt,l,i,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function Us(t){var e=_t();return js(e,vt,t)}function js(t,e,n){if(e=Mo(t,e,ks)[0],t=Ti(Je)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=hl(e)}catch(c){throw c===ol?yi:c}else a=e;e=_t();var l=e.queue,i=l.dispatch;return n!==e.memoizedState&&(rt.flags|=2048,Sa(9,Mi(),um.bind(null,l,n),null)),[a,i,t]}function um(t,e){t.action=e}function Bs(t){var e=_t(),n=vt;if(n!==null)return js(e,n,t);_t(),e=e.memoizedState,n=_t();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Sa(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=rt.updateQueue,e===null&&(e=Eo(),rt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Mi(){return{destroy:void 0,resource:void 0}}function Hs(){return _t().memoizedState}function wi(t,e,n,a){var l=ee();a=a===void 0?null:a,rt.flags|=t,l.memoizedState=Sa(1|e,Mi(),n,a)}function ml(t,e,n,a){var l=_t();a=a===void 0?null:a;var i=l.memoizedState.inst;vt!==null&&a!==null&&yo(a,vt.memoizedState.deps)?l.memoizedState=Sa(e,i,n,a):(rt.flags|=t,l.memoizedState=Sa(1|e,i,n,a))}function qs(t,e){wi(8390656,8,t,e)}function Ls(t,e){ml(2048,8,t,e)}function Ys(t,e){return ml(4,2,t,e)}function Xs(t,e){return ml(4,4,t,e)}function Qs(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gs(t,e,n){n=n!=null?n.concat([t]):null,ml(4,4,Qs.bind(null,e,t),n)}function Ro(){}function Zs(t,e){var n=_t();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&yo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Vs(t,e){var n=_t();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&yo(e,a[1]))return a[0];if(a=t(),Vn){un(!0);try{t()}finally{un(!1)}}return n.memoizedState=[a,e],a}function No(t,e,n){return n===void 0||(pn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Ff(),rt.lanes|=t,An|=t,n)}function Ks(t,e,n,a){return oe(n,e)?n:va.current!==null?(t=No(t,n,a),oe(t,e)||(Lt=!0),t):(pn&42)===0?(Lt=!0,t.memoizedState=n):(t=Ff(),rt.lanes|=t,An|=t,e)}function Js(t,e,n,a,l){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=R.T,f={};R.T=f,_o(t,!1,e,n);try{var p=l(),E=R.S;if(E!==null&&E(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=lm(p,a);pl(t,e,D,de(t))}else pl(t,e,a,de(t))}catch(_){pl(t,e,{then:function(){},status:"rejected",reason:_},de())}finally{Y.p=i,R.T=c}}function cm(){}function Co(t,e,n,a){if(t.tag!==5)throw Error(o(476));var l=Ps(t).queue;Js(t,l,e,et,n===null?cm:function(){return Fs(t),n(a)})}function Ps(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:et},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Fs(t){var e=Ps(t).next.queue;pl(t,e,{},de())}function ko(){return Ft(kl)}function Ws(){return _t().memoizedState}function $s(){return _t().memoizedState}function sm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=de();t=hn(n);var a=mn(e,t,n);a!==null&&(he(a,e,n),cl(a,e,n)),e={cache:uo()},t.payload=e;return}e=e.return}}function fm(t,e,n){var a=de();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},zi(t)?tf(e,n):(n=$r(t,e,n,a),n!==null&&(he(n,t,a),ef(n,e,a)))}function Is(t,e,n){var a=de();pl(t,e,n,a)}function pl(t,e,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(zi(t))tf(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,f=i(c,n);if(l.hasEagerState=!0,l.eagerState=f,oe(f,c))return fi(t,e,l,0),Ot===null&&si(),!1}catch{}finally{}if(n=$r(t,e,l,a),n!==null)return he(n,t,a),ef(n,e,a),!0}return!1}function _o(t,e,n,a){if(a={lane:2,revertLane:du(),action:a,hasEagerState:!1,eagerState:null,next:null},zi(t)){if(e)throw Error(o(479))}else e=$r(t,n,a,2),e!==null&&he(e,t,2)}function zi(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function tf(t,e){ya=Ai=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ef(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,cc(t,n)}}var Di={readContext:Ft,use:Ei,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},nf={readContext:Ft,use:Ei,useCallback:function(t,e){return ee().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:qs,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,wi(4194308,4,Qs.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wi(4194308,4,t,e)},useInsertionEffect:function(t,e){wi(4,2,t,e)},useMemo:function(t,e){var n=ee();e=e===void 0?null:e;var a=t();if(Vn){un(!0);try{t()}finally{un(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ee();if(n!==void 0){var l=n(e);if(Vn){un(!0);try{n(e)}finally{un(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=fm.bind(null,rt,t),[a.memoizedState,t]},useRef:function(t){var e=ee();return t={current:t},e.memoizedState=t},useState:function(t){t=zo(t);var e=t.queue,n=Is.bind(null,rt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ro,useDeferredValue:function(t,e){var n=ee();return No(n,t,e)},useTransition:function(){var t=zo(!1);return t=Js.bind(null,rt,t.queue,!0,!1),ee().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=rt,l=ee();if(pt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Ot===null)throw Error(o(349));(ft&124)!==0||Os(a,e,n)}l.memoizedState=n;var i={value:n,getSnapshot:e};return l.queue=i,qs(Ts.bind(null,a,i,t),[t]),a.flags|=2048,Sa(9,Mi(),Es.bind(null,a,i,n,e),null),n},useId:function(){var t=ee(),e=Ot.identifierPrefix;if(pt){var n=Ze,a=Ge;n=(a&~(1<<32-re(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=Oi++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=im++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ko,useFormState:_s,useActionState:_s,useOptimistic:function(t){var e=ee();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=_o.bind(null,rt,!0,n),n.dispatch=e,[t,e]},useMemoCache:To,useCacheRefresh:function(){return ee().memoizedState=sm.bind(null,rt)}},af={readContext:Ft,use:Ei,useCallback:Zs,useContext:Ft,useEffect:Ls,useImperativeHandle:Gs,useInsertionEffect:Ys,useLayoutEffect:Xs,useMemo:Vs,useReducer:Ti,useRef:Hs,useState:function(){return Ti(Je)},useDebugValue:Ro,useDeferredValue:function(t,e){var n=_t();return Ks(n,vt.memoizedState,t,e)},useTransition:function(){var t=Ti(Je)[0],e=_t().memoizedState;return[typeof t=="boolean"?t:hl(t),e]},useSyncExternalStore:As,useId:Ws,useHostTransitionStatus:ko,useFormState:Us,useActionState:Us,useOptimistic:function(t,e){var n=_t();return zs(n,vt,t,e)},useMemoCache:To,useCacheRefresh:$s},dm={readContext:Ft,use:Ei,useCallback:Zs,useContext:Ft,useEffect:Ls,useImperativeHandle:Gs,useInsertionEffect:Ys,useLayoutEffect:Xs,useMemo:Vs,useReducer:wo,useRef:Hs,useState:function(){return wo(Je)},useDebugValue:Ro,useDeferredValue:function(t,e){var n=_t();return vt===null?No(n,t,e):Ks(n,vt.memoizedState,t,e)},useTransition:function(){var t=wo(Je)[0],e=_t().memoizedState;return[typeof t=="boolean"?t:hl(t),e]},useSyncExternalStore:As,useId:Ws,useHostTransitionStatus:ko,useFormState:Bs,useActionState:Bs,useOptimistic:function(t,e){var n=_t();return vt!==null?zs(n,vt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:To,useCacheRefresh:$s},Aa=null,bl=0;function Ri(t){var e=bl;return bl+=1,Aa===null&&(Aa=[]),ms(Aa,t,e)}function gl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ni(t,e){throw e.$$typeof===k?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function lf(t){var e=t._init;return e(t._payload)}function rf(t){function e(S,v){if(t){var O=S.deletions;O===null?(S.deletions=[v],S.flags|=16):O.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function l(S,v){return S=Qe(S,v),S.index=0,S.sibling=null,S}function i(S,v,O){return S.index=O,t?(O=S.alternate,O!==null?(O=O.index,O<v?(S.flags|=67108866,v):O):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function c(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function f(S,v,O,C){return v===null||v.tag!==6?(v=to(O,S.mode,C),v.return=S,v):(v=l(v,O),v.return=S,v)}function p(S,v,O,C){var G=O.type;return G===j?D(S,v,O.props.children,C,O.key):v!==null&&(v.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===st&&lf(G)===v.type)?(v=l(v,O.props),gl(v,O),v.return=S,v):(v=hi(O.type,O.key,O.props,null,S.mode,C),gl(v,O),v.return=S,v)}function E(S,v,O,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==O.containerInfo||v.stateNode.implementation!==O.implementation?(v=eo(O,S.mode,C),v.return=S,v):(v=l(v,O.children||[]),v.return=S,v)}function D(S,v,O,C,G){return v===null||v.tag!==7?(v=Hn(O,S.mode,C,G),v.return=S,v):(v=l(v,O),v.return=S,v)}function _(S,v,O){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=to(""+v,S.mode,O),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case B:return O=hi(v.type,v.key,v.props,null,S.mode,O),gl(O,v),O.return=S,O;case q:return v=eo(v,S.mode,O),v.return=S,v;case st:var C=v._init;return v=C(v._payload),_(S,v,O)}if(Jt(v)||Ht(v))return v=Hn(v,S.mode,O,null),v.return=S,v;if(typeof v.then=="function")return _(S,Ri(v),O);if(v.$$typeof===P)return _(S,gi(S,v),O);Ni(S,v)}return null}function T(S,v,O,C){var G=v!==null?v.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return G!==null?null:f(S,v,""+O,C);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case B:return O.key===G?p(S,v,O,C):null;case q:return O.key===G?E(S,v,O,C):null;case st:return G=O._init,O=G(O._payload),T(S,v,O,C)}if(Jt(O)||Ht(O))return G!==null?null:D(S,v,O,C,null);if(typeof O.then=="function")return T(S,v,Ri(O),C);if(O.$$typeof===P)return T(S,v,gi(S,O),C);Ni(S,O)}return null}function w(S,v,O,C,G){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(O)||null,f(v,S,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case B:return S=S.get(C.key===null?O:C.key)||null,p(v,S,C,G);case q:return S=S.get(C.key===null?O:C.key)||null,E(v,S,C,G);case st:var ot=C._init;return C=ot(C._payload),w(S,v,O,C,G)}if(Jt(C)||Ht(C))return S=S.get(O)||null,D(v,S,C,G,null);if(typeof C.then=="function")return w(S,v,O,Ri(C),G);if(C.$$typeof===P)return w(S,v,O,gi(v,C),G);Ni(v,C)}return null}function nt(S,v,O,C){for(var G=null,ot=null,K=v,tt=v=0,Xt=null;K!==null&&tt<O.length;tt++){K.index>tt?(Xt=K,K=null):Xt=K.sibling;var mt=T(S,K,O[tt],C);if(mt===null){K===null&&(K=Xt);break}t&&K&&mt.alternate===null&&e(S,K),v=i(mt,v,tt),ot===null?G=mt:ot.sibling=mt,ot=mt,K=Xt}if(tt===O.length)return n(S,K),pt&&Ln(S,tt),G;if(K===null){for(;tt<O.length;tt++)K=_(S,O[tt],C),K!==null&&(v=i(K,v,tt),ot===null?G=K:ot.sibling=K,ot=K);return pt&&Ln(S,tt),G}for(K=a(K);tt<O.length;tt++)Xt=w(K,S,tt,O[tt],C),Xt!==null&&(t&&Xt.alternate!==null&&K.delete(Xt.key===null?tt:Xt.key),v=i(Xt,v,tt),ot===null?G=Xt:ot.sibling=Xt,ot=Xt);return t&&K.forEach(function(Nn){return e(S,Nn)}),pt&&Ln(S,tt),G}function I(S,v,O,C){if(O==null)throw Error(o(151));for(var G=null,ot=null,K=v,tt=v=0,Xt=null,mt=O.next();K!==null&&!mt.done;tt++,mt=O.next()){K.index>tt?(Xt=K,K=null):Xt=K.sibling;var Nn=T(S,K,mt.value,C);if(Nn===null){K===null&&(K=Xt);break}t&&K&&Nn.alternate===null&&e(S,K),v=i(Nn,v,tt),ot===null?G=Nn:ot.sibling=Nn,ot=Nn,K=Xt}if(mt.done)return n(S,K),pt&&Ln(S,tt),G;if(K===null){for(;!mt.done;tt++,mt=O.next())mt=_(S,mt.value,C),mt!==null&&(v=i(mt,v,tt),ot===null?G=mt:ot.sibling=mt,ot=mt);return pt&&Ln(S,tt),G}for(K=a(K);!mt.done;tt++,mt=O.next())mt=w(K,S,tt,mt.value,C),mt!==null&&(t&&mt.alternate!==null&&K.delete(mt.key===null?tt:mt.key),v=i(mt,v,tt),ot===null?G=mt:ot.sibling=mt,ot=mt);return t&&K.forEach(function(hp){return e(S,hp)}),pt&&Ln(S,tt),G}function xt(S,v,O,C){if(typeof O=="object"&&O!==null&&O.type===j&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case B:t:{for(var G=O.key;v!==null;){if(v.key===G){if(G=O.type,G===j){if(v.tag===7){n(S,v.sibling),C=l(v,O.props.children),C.return=S,S=C;break t}}else if(v.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===st&&lf(G)===v.type){n(S,v.sibling),C=l(v,O.props),gl(C,O),C.return=S,S=C;break t}n(S,v);break}else e(S,v);v=v.sibling}O.type===j?(C=Hn(O.props.children,S.mode,C,O.key),C.return=S,S=C):(C=hi(O.type,O.key,O.props,null,S.mode,C),gl(C,O),C.return=S,S=C)}return c(S);case q:t:{for(G=O.key;v!==null;){if(v.key===G)if(v.tag===4&&v.stateNode.containerInfo===O.containerInfo&&v.stateNode.implementation===O.implementation){n(S,v.sibling),C=l(v,O.children||[]),C.return=S,S=C;break t}else{n(S,v);break}else e(S,v);v=v.sibling}C=eo(O,S.mode,C),C.return=S,S=C}return c(S);case st:return G=O._init,O=G(O._payload),xt(S,v,O,C)}if(Jt(O))return nt(S,v,O,C);if(Ht(O)){if(G=Ht(O),typeof G!="function")throw Error(o(150));return O=G.call(O),I(S,v,O,C)}if(typeof O.then=="function")return xt(S,v,Ri(O),C);if(O.$$typeof===P)return xt(S,v,gi(S,O),C);Ni(S,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,v!==null&&v.tag===6?(n(S,v.sibling),C=l(v,O),C.return=S,S=C):(n(S,v),C=to(O,S.mode,C),C.return=S,S=C),c(S)):n(S,v)}return function(S,v,O,C){try{bl=0;var G=xt(S,v,O,C);return Aa=null,G}catch(K){if(K===ol||K===yi)throw K;var ot=ue(29,K,null,S.mode);return ot.lanes=C,ot.return=S,ot}finally{}}}var Oa=rf(!0),of=rf(!1),Se=U(null),Ce=null;function bn(t){var e=t.alternate;L(jt,jt.current&1),L(Se,t),Ce===null&&(e===null||va.current!==null||e.memoizedState!==null)&&(Ce=t)}function uf(t){if(t.tag===22){if(L(jt,jt.current),L(Se,t),Ce===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ce=t)}}else gn()}function gn(){L(jt,jt.current),L(Se,Se.current)}function Pe(t){Q(Se),Ce===t&&(Ce=null),Q(jt)}var jt=U(0);function Ci(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Eu(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Uo(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jo={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=de(),l=hn(a);l.payload=e,n!=null&&(l.callback=n),e=mn(t,l,a),e!==null&&(he(e,t,a),cl(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=de(),l=hn(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=mn(t,l,a),e!==null&&(he(e,t,a),cl(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=de(),a=hn(n);a.tag=2,e!=null&&(a.callback=e),e=mn(t,a,n),e!==null&&(he(e,t,n),cl(e,t,n))}};function cf(t,e,n,a,l,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,c):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,a)||!Ia(l,i):!0}function sf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&jo.enqueueReplaceState(e,e.state,null)}function Kn(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var ki=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ff(t){ki(t)}function df(t){console.error(t)}function hf(t){ki(t)}function _i(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function mf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bo(t,e,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){_i(t,e)},n}function pf(t){return t=hn(t),t.tag=3,t}function bf(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){mf(e,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){mf(e,n,a),typeof l!="function"&&(On===null?On=new Set([this]):On.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function hm(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&ll(e,n,l,!0),n=Se.current,n!==null){switch(n.tag){case 13:return Ce===null?ou():n.alternate===null&&Rt===0&&(Rt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===fo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),cu(t,a,l)),!1;case 22:return n.flags|=65536,a===fo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),cu(t,a,l)),!1}throw Error(o(435,n.tag))}return cu(t,a,l),ou(),!1}if(pt)return e=Se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==lo&&(t=Error(o(422),{cause:a}),al(ge(t,n)))):(a!==lo&&(e=Error(o(423),{cause:a}),al(ge(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=ge(a,n),l=Bo(t.stateNode,a,l),po(t,l),Rt!==4&&(Rt=2)),!1;var i=Error(o(520),{cause:a});if(i=ge(i,n),El===null?El=[i]:El.push(i),Rt!==4&&(Rt=2),e===null)return!0;a=ge(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Bo(n.stateNode,a,t),po(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=pf(l),bf(l,t,n,a),po(n,l),!1}n=n.return}while(n!==null);return!1}var gf=Error(o(461)),Lt=!1;function Zt(t,e,n,a){e.child=t===null?of(e,null,n,a):Oa(e,t.child,n,a)}function vf(t,e,n,a,l){n=n.render;var i=e.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Gn(e),a=xo(t,e,n,c,i,l),f=So(),t!==null&&!Lt?(Ao(t,e,l),Fe(t,e,l)):(pt&&f&&no(e),e.flags|=1,Zt(t,e,a,l),e.child)}function yf(t,e,n,a,l){if(t===null){var i=n.type;return typeof i=="function"&&!Ir(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,xf(t,e,i,a,l)):(t=hi(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Zo(t,l)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(c,a)&&t.ref===e.ref)return Fe(t,e,l)}return e.flags|=1,t=Qe(i,a),t.ref=e.ref,t.return=e,e.child=t}function xf(t,e,n,a,l){if(t!==null){var i=t.memoizedProps;if(Ia(i,a)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=a=i,Zo(t,l))(t.flags&131072)!==0&&(Lt=!0);else return e.lanes=t.lanes,Fe(t,e,l)}return Ho(t,e,n,a,l)}function Sf(t,e,n){var a=e.pendingProps,l=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|n:n,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Af(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&vi(e,i!==null?i.cachePool:null),i!==null?ys(e,i):go(),uf(e);else return e.lanes=e.childLanes=536870912,Af(t,e,i!==null?i.baseLanes|n:n,n)}else i!==null?(vi(e,i.cachePool),ys(e,i),gn(),e.memoizedState=null):(t!==null&&vi(e,null),go(),gn());return Zt(t,e,l,n),e.child}function Af(t,e,n,a){var l=so();return l=l===null?null:{parent:Ut._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&vi(e,null),go(),uf(e),t!==null&&ll(t,e,a,!0),null}function Ui(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ho(t,e,n,a,l){return Gn(e),n=xo(t,e,n,a,void 0,l),a=So(),t!==null&&!Lt?(Ao(t,e,l),Fe(t,e,l)):(pt&&a&&no(e),e.flags|=1,Zt(t,e,n,l),e.child)}function Of(t,e,n,a,l,i){return Gn(e),e.updateQueue=null,n=Ss(e,a,n,l),xs(t),a=So(),t!==null&&!Lt?(Ao(t,e,i),Fe(t,e,i)):(pt&&a&&no(e),e.flags|=1,Zt(t,e,n,i),e.child)}function Ef(t,e,n,a,l){if(Gn(e),e.stateNode===null){var i=ha,c=n.contextType;typeof c=="object"&&c!==null&&(i=Ft(c)),i=new n(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},ho(e),c=n.contextType,i.context=typeof c=="object"&&c!==null?Ft(c):ha,i.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(Uo(e,n,c,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&jo.enqueueReplaceState(i,i.state,null),fl(e,a,i,l),sl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,p=Kn(n,f);i.props=p;var E=i.context,D=n.contextType;c=ha,typeof D=="object"&&D!==null&&(c=Ft(D));var _=n.getDerivedStateFromProps;D=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||E!==c)&&sf(e,i,a,c),dn=!1;var T=e.memoizedState;i.state=T,fl(e,a,i,l),sl(),E=e.memoizedState,f||T!==E||dn?(typeof _=="function"&&(Uo(e,n,_,a),E=e.memoizedState),(p=dn||cf(e,n,p,a,T,E,c))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=c,a=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,mo(t,e),c=e.memoizedProps,D=Kn(n,c),i.props=D,_=e.pendingProps,T=i.context,E=n.contextType,p=ha,typeof E=="object"&&E!==null&&(p=Ft(E)),f=n.getDerivedStateFromProps,(E=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==_||T!==p)&&sf(e,i,a,p),dn=!1,T=e.memoizedState,i.state=T,fl(e,a,i,l),sl();var w=e.memoizedState;c!==_||T!==w||dn||t!==null&&t.dependencies!==null&&bi(t.dependencies)?(typeof f=="function"&&(Uo(e,n,f,a),w=e.memoizedState),(D=dn||cf(e,n,D,a,T,w,p)||t!==null&&t.dependencies!==null&&bi(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=w),i.props=a,i.state=w,i.context=p,a=D):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ui(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Oa(e,t.child,null,l),e.child=Oa(e,null,n,l)):Zt(t,e,n,l),e.memoizedState=i.state,t=e.child):t=Fe(t,e,l),t}function Tf(t,e,n,a){return nl(),e.flags|=256,Zt(t,e,n,a),e.child}var qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lo(t){return{baseLanes:t,cachePool:fs()}}function Yo(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ae),t}function Mf(t,e,n){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(jt.current&2)!==0),c&&(l=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(l?bn(e):gn(),pt){var f=Dt,p;if(p=f){t:{for(p=f,f=Ne;p.nodeType!==8;){if(!f){f=null;break t}if(p=Me(p.nextSibling),p===null){f=null;break t}}f=p}f!==null?(e.memoizedState={dehydrated:f,treeContext:qn!==null?{id:Ge,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},p=ue(18,null,null,0),p.stateNode=f,p.return=e,e.child=p,$t=e,Dt=null,p=!0):p=!1}p||Xn(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Eu(f)?e.lanes=32:e.lanes=536870912,null;Pe(e)}return f=a.children,a=a.fallback,l?(gn(),l=e.mode,f=ji({mode:"hidden",children:f},l),a=Hn(a,l,n,null),f.return=e,a.return=e,f.sibling=a,e.child=f,l=e.child,l.memoizedState=Lo(n),l.childLanes=Yo(t,c,n),e.memoizedState=qo,a):(bn(e),Xo(e,f))}if(p=t.memoizedState,p!==null&&(f=p.dehydrated,f!==null)){if(i)e.flags&256?(bn(e),e.flags&=-257,e=Qo(t,e,n)):e.memoizedState!==null?(gn(),e.child=t.child,e.flags|=128,e=null):(gn(),l=a.fallback,f=e.mode,a=ji({mode:"visible",children:a.children},f),l=Hn(l,f,n,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Oa(e,t.child,null,n),a=e.child,a.memoizedState=Lo(n),a.childLanes=Yo(t,c,n),e.memoizedState=qo,e=l);else if(bn(e),Eu(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var E=c.dgst;c=E,a=Error(o(419)),a.stack="",a.digest=c,al({value:a,source:null,stack:null}),e=Qo(t,e,n)}else if(Lt||ll(t,e,n,!1),c=(n&t.childLanes)!==0,Lt||c){if(c=Ot,c!==null&&(a=n&-n,a=(a&42)!==0?1:Er(a),a=(a&(c.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,da(t,a),he(c,t,a),gf;f.data==="$?"||ou(),e=Qo(t,e,n)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Dt=Me(f.nextSibling),$t=e,pt=!0,Yn=null,Ne=!1,t!==null&&(ye[xe++]=Ge,ye[xe++]=Ze,ye[xe++]=qn,Ge=t.id,Ze=t.overflow,qn=e),e=Xo(e,a.children),e.flags|=4096);return e}return l?(gn(),l=a.fallback,f=e.mode,p=t.child,E=p.sibling,a=Qe(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,E!==null?l=Qe(E,l):(l=Hn(l,f,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,f=t.child.memoizedState,f===null?f=Lo(n):(p=f.cachePool,p!==null?(E=Ut._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=fs(),f={baseLanes:f.baseLanes|n,cachePool:p}),l.memoizedState=f,l.childLanes=Yo(t,c,n),e.memoizedState=qo,a):(bn(e),n=t.child,t=n.sibling,n=Qe(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=n,e.memoizedState=null,n)}function Xo(t,e){return e=ji({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ji(t,e){return t=ue(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Qo(t,e,n){return Oa(e,t.child,null,n),t=Xo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wf(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ro(t.return,e,n)}function Go(t,e,n,a,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=l)}function zf(t,e,n){var a=e.pendingProps,l=a.revealOrder,i=a.tail;if(Zt(t,e,a.children,n),a=jt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wf(t,n,e);else if(t.tag===19)wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(L(jt,a),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Ci(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Go(e,!1,l,n,i);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Ci(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Go(e,!0,n,null,i);break;case"together":Go(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fe(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(ll(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=Qe(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qe(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&bi(t)))}function mm(t,e,n){switch(e.tag){case 3:Et(e,e.stateNode.containerInfo),fn(e,Ut,t.memoizedState.cache),nl();break;case 27:case 5:yr(e);break;case 4:Et(e,e.stateNode.containerInfo);break;case 10:fn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(bn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Mf(t,e,n):(bn(e),t=Fe(t,e,n),t!==null?t.sibling:null);bn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(ll(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return zf(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),L(jt,jt.current),a)break;return null;case 22:case 23:return e.lanes=0,Sf(t,e,n);case 24:fn(e,Ut,t.memoizedState.cache)}return Fe(t,e,n)}function Df(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Lt=!0;else{if(!Zo(t,n)&&(e.flags&128)===0)return Lt=!1,mm(t,e,n);Lt=(t.flags&131072)!==0}else Lt=!1,pt&&(e.flags&1048576)!==0&&ls(e,pi,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")Ir(a)?(t=Kn(a,t),e.tag=1,e=Ef(null,e,a,t,n)):(e.tag=0,e=Ho(null,e,a,t,n));else{if(a!=null){if(l=a.$$typeof,l===dt){e.tag=11,e=vf(null,e,a,t,n);break t}else if(l===W){e.tag=14,e=yf(null,e,a,t,n);break t}}throw e=Le(a)||a,Error(o(306,e,""))}}return e;case 0:return Ho(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Kn(a,e.pendingProps),Ef(t,e,a,l,n);case 3:t:{if(Et(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,mo(t,e),fl(e,a,null,n);var c=e.memoizedState;if(a=c.cache,fn(e,Ut,a),a!==i.cache&&oo(e,[Ut],n,!0),sl(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Tf(t,e,a,n);break t}else if(a!==l){l=ge(Error(o(424)),e),al(l),e=Tf(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=Me(t.firstChild),$t=e,pt=!0,Yn=null,Ne=!0,n=of(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(nl(),a===l){e=Fe(t,e,n);break t}Zt(t,e,a,n)}e=e.child}return e;case 26:return Ui(t,e),t===null?(n=kd(e.type,null,e.pendingProps,null))?e.memoizedState=n:pt||(n=e.type,t=e.pendingProps,a=Fi(lt.current).createElement(n),a[Pt]=e,a[It]=t,Kt(a,n,t),qt(a),e.stateNode=a):e.memoizedState=kd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yr(e),t===null&&pt&&(a=e.stateNode=Rd(e.type,e.pendingProps,lt.current),$t=e,Ne=!0,l=Dt,Mn(e.type)?(Tu=l,Dt=Me(a.firstChild)):Dt=l),Zt(t,e,e.pendingProps.children,n),Ui(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((l=a=Dt)&&(a=Xm(a,e.type,e.pendingProps,Ne),a!==null?(e.stateNode=a,$t=e,Dt=Me(a.firstChild),Ne=!1,l=!0):l=!1),l||Xn(e)),yr(e),l=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,a=i.children,Su(l,i)?a=null:c!==null&&Su(l,c)&&(e.flags|=32),e.memoizedState!==null&&(l=xo(t,e,rm,null,null,n),kl._currentValue=l),Ui(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&pt&&((t=n=Dt)&&(n=Qm(n,e.pendingProps,Ne),n!==null?(e.stateNode=n,$t=e,Dt=null,t=!0):t=!1),t||Xn(e)),null;case 13:return Mf(t,e,n);case 4:return Et(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Oa(e,null,a,n):Zt(t,e,a,n),e.child;case 11:return vf(t,e,e.type,e.pendingProps,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,fn(e,e.type,a.value),Zt(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Gn(e),l=Ft(l),a=a(l),e.flags|=1,Zt(t,e,a,n),e.child;case 14:return yf(t,e,e.type,e.pendingProps,n);case 15:return xf(t,e,e.type,e.pendingProps,n);case 19:return zf(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=ji(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Qe(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Sf(t,e,n);case 24:return Gn(e),a=Ft(Ut),t===null?(l=so(),l===null&&(l=Ot,i=uo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),e.memoizedState={parent:a,cache:l},ho(e),fn(e,Ut,l)):((t.lanes&n)!==0&&(mo(t,e),fl(e,null,null,n),sl()),l=t.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),fn(e,Ut,a)):(a=i.cache,fn(e,Ut,a),a!==l.cache&&oo(e,[Ut],n,!0))),Zt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function We(t){t.flags|=4}function Rf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hd(e)){if(e=Se.current,e!==null&&((ft&4194048)===ft?Ce!==null:(ft&62914560)!==ft&&(ft&536870912)===0||e!==Ce))throw ul=fo,ds;t.flags|=8192}}function Bi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?oc():536870912,t.lanes|=e,wa|=e)}function vl(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function pm(t,e,n){var a=e.pendingProps;switch(ao(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ke(Ut),on(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(el(e)?We(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,os())),wt(e),null;case 26:return n=e.memoizedState,t===null?(We(e),n!==null?(wt(e),Rf(e,n)):(wt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(We(e),wt(e),Rf(e,n)):(wt(e),e.flags&=-16777217):(t.memoizedProps!==a&&We(e),wt(e),e.flags&=-16777217),null;case 27:Jl(e),n=lt.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return wt(e),null}t=$.current,el(e)?is(e):(t=Rd(l,a,n),e.stateNode=t,We(e))}return wt(e),null;case 5:if(Jl(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return wt(e),null}if(t=$.current,el(e))is(e);else{switch(l=Fi(lt.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}t[Pt]=e,t[It]=a;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Kt(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&We(e)}}return wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=lt.current,el(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=$t,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Od(t.nodeValue,n)),t||Xn(e)}else t=Fi(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return wt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=el(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Pt]=e}else nl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),l=!1}else l=os(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Pe(e),e):(Pe(e),null)}if(Pe(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Bi(e,e.updateQueue),wt(e),null;case 4:return on(),t===null&&bu(e.stateNode.containerInfo),wt(e),null;case 10:return Ke(e.type),wt(e),null;case 19:if(Q(jt),l=e.memoizedState,l===null)return wt(e),null;if(a=(e.flags&128)!==0,i=l.rendering,i===null)if(a)vl(l,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Ci(t),i!==null){for(e.flags|=128,vl(l,!1),t=i.updateQueue,e.updateQueue=t,Bi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)as(n,t),n=n.sibling;return L(jt,jt.current&1|2),e.child}t=t.sibling}l.tail!==null&&Re()>Li&&(e.flags|=128,a=!0,vl(l,!1),e.lanes=4194304)}else{if(!a)if(t=Ci(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Bi(e,t),vl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!pt)return wt(e),null}else 2*Re()-l.renderingStartTime>Li&&n!==536870912&&(e.flags|=128,a=!0,vl(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Re(),e.sibling=null,t=jt.current,L(jt,a?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return Pe(e),vo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&Bi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&Q(Zn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ke(Ut),wt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function bm(t,e){switch(ao(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ke(Ut),on(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Jl(e),null;case 13:if(Pe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));nl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(jt),null;case 4:return on(),null;case 10:return Ke(e.type),null;case 22:case 23:return Pe(e),vo(),t!==null&&Q(Zn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ke(Ut),null;case 25:return null;default:return null}}function Nf(t,e){switch(ao(e),e.tag){case 3:Ke(Ut),on();break;case 26:case 27:case 5:Jl(e);break;case 4:on();break;case 13:Pe(e);break;case 19:Q(jt);break;case 10:Ke(e.type);break;case 22:case 23:Pe(e),vo(),t!==null&&Q(Zn);break;case 24:Ke(Ut)}}function yl(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var i=n.create,c=n.inst;a=i(),c.destroy=a}n=n.next}while(n!==l)}}catch(f){At(e,e.return,f)}}function vn(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,l=e;var p=n,E=f;try{E()}catch(D){At(l,p,D)}}}a=a.next}while(a!==i)}}catch(D){At(e,e.return,D)}}function Cf(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{vs(e,n)}catch(a){At(t,t.return,a)}}}function kf(t,e,n){n.props=Kn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){At(t,e,a)}}function xl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(l){At(t,e,l)}}function ke(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){At(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){At(t,e,l)}else n.current=null}function _f(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){At(t,t.return,l)}}function Vo(t,e,n){try{var a=t.stateNode;Bm(a,t.type,n,e),a[It]=e}catch(l){At(t,t.return,l)}}function Uf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mn(t.type)||t.tag===4}function Ko(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Uf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jo(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pi));else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Jo(t,e,n),t=t.sibling;t!==null;)Jo(t,e,n),t=t.sibling}function Hi(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Hi(t,e,n),t=t.sibling;t!==null;)Hi(t,e,n),t=t.sibling}function jf(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Kt(e,a,n),e[Pt]=t,e[It]=n}catch(i){At(t,t.return,i)}}var $e=!1,Ct=!1,Po=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function gm(t,e){if(t=t.containerInfo,yu=nr,t=Kc(t),Vr(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var c=0,f=-1,p=-1,E=0,D=0,_=t,T=null;e:for(;;){for(var w;_!==n||l!==0&&_.nodeType!==3||(f=c+l),_!==i||a!==0&&_.nodeType!==3||(p=c+a),_.nodeType===3&&(c+=_.nodeValue.length),(w=_.firstChild)!==null;)T=_,_=w;for(;;){if(_===t)break e;if(T===n&&++E===l&&(f=c),T===i&&++D===a&&(p=c),(w=_.nextSibling)!==null)break;_=T,T=_.parentNode}_=w}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:t,selectionRange:n},nr=!1,Yt=e;Yt!==null;)if(e=Yt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Yt=t;else for(;Yt!==null;){switch(e=Yt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var nt=Kn(n.type,l,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(nt,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(I){At(n,n.return,I)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Ou(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ou(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Yt=t;break}Yt=e.return}}function Hf(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:yn(t,n),a&4&&yl(5,n);break;case 1:if(yn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(c){At(n,n.return,c)}else{var l=Kn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){At(n,n.return,c)}}a&64&&Cf(n),a&512&&xl(n,n.return);break;case 3:if(yn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{vs(t,e)}catch(c){At(n,n.return,c)}}break;case 27:e===null&&a&4&&jf(n);case 26:case 5:yn(t,n),e===null&&a&4&&_f(n),a&512&&xl(n,n.return);break;case 12:yn(t,n);break;case 13:yn(t,n),a&4&&Yf(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Mm.bind(null,n),Gm(t,n))));break;case 22:if(a=n.memoizedState!==null||$e,!a){e=e!==null&&e.memoizedState!==null||Ct,l=$e;var i=Ct;$e=a,(Ct=e)&&!i?xn(t,n,(n.subtreeFlags&8772)!==0):yn(t,n),$e=l,Ct=i}break;case 30:break;default:yn(t,n)}}function qf(t){var e=t.alternate;e!==null&&(t.alternate=null,qf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,ne=!1;function Ie(t,e,n){for(n=n.child;n!==null;)Lf(t,e,n),n=n.sibling}function Lf(t,e,n){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 26:Ct||ke(n,e),Ie(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ct||ke(n,e);var a=Tt,l=ne;Mn(n.type)&&(Tt=n.stateNode,ne=!1),Ie(t,e,n),Dl(n.stateNode),Tt=a,ne=l;break;case 5:Ct||ke(n,e);case 6:if(a=Tt,l=ne,Tt=null,Ie(t,e,n),Tt=a,ne=l,Tt!==null)if(ne)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(i){At(n,e,i)}else try{Tt.removeChild(n.stateNode)}catch(i){At(n,e,i)}break;case 18:Tt!==null&&(ne?(t=Tt,zd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Bl(t)):zd(Tt,n.stateNode));break;case 4:a=Tt,l=ne,Tt=n.stateNode.containerInfo,ne=!0,Ie(t,e,n),Tt=a,ne=l;break;case 0:case 11:case 14:case 15:Ct||vn(2,n,e),Ct||vn(4,n,e),Ie(t,e,n);break;case 1:Ct||(ke(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&kf(n,e,a)),Ie(t,e,n);break;case 21:Ie(t,e,n);break;case 22:Ct=(a=Ct)||n.memoizedState!==null,Ie(t,e,n),Ct=a;break;default:Ie(t,e,n)}}function Yf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(n){At(e,e.return,n)}}function vm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Bf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Bf),e;default:throw Error(o(435,t.tag))}}function Fo(t,e){var n=vm(t);e.forEach(function(a){var l=wm.bind(null,t,a);n.has(a)||(n.add(a),a.then(l,l))})}function ce(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=t,c=e,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(Mn(f.type)){Tt=f.stateNode,ne=!1;break t}break;case 5:Tt=f.stateNode,ne=!1;break t;case 3:case 4:Tt=f.stateNode.containerInfo,ne=!0;break t}f=f.return}if(Tt===null)throw Error(o(160));Lf(i,c,l),Tt=null,ne=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Xf(e,t),e=e.sibling}var Te=null;function Xf(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ce(e,t),se(t),a&4&&(vn(3,t,t.return),yl(3,t),vn(5,t,t.return));break;case 1:ce(e,t),se(t),a&512&&(Ct||n===null||ke(n,n.return)),a&64&&$e&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Te;if(ce(e,t),se(t),a&512&&(Ct||n===null||ke(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ga]||i[Pt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Kt(i,a,n),i[Pt]=t,qt(i),a=i;break t;case"link":var c=jd("link","href",l).get(a+(n.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(f,1);break e}}i=l.createElement(a),Kt(i,a,n),l.head.appendChild(i);break;case"meta":if(c=jd("meta","content",l).get(a+(n.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(f,1);break e}}i=l.createElement(a),Kt(i,a,n),l.head.appendChild(i);break;default:throw Error(o(468,a))}i[Pt]=t,qt(i),a=i}t.stateNode=a}else Bd(l,t.type,t.stateNode);else t.stateNode=Ud(l,a,t.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Bd(l,t.type,t.stateNode):Ud(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Vo(t,t.memoizedProps,n.memoizedProps)}break;case 27:ce(e,t),se(t),a&512&&(Ct||n===null||ke(n,n.return)),n!==null&&a&4&&Vo(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ce(e,t),se(t),a&512&&(Ct||n===null||ke(n,n.return)),t.flags&32){l=t.stateNode;try{ia(l,"")}catch(w){At(t,t.return,w)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,Vo(t,l,n!==null?n.memoizedProps:l)),a&1024&&(Po=!0);break;case 6:if(ce(e,t),se(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(w){At(t,t.return,w)}}break;case 3:if(Ii=null,l=Te,Te=Wi(e.containerInfo),ce(e,t),Te=l,se(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Bl(e.containerInfo)}catch(w){At(t,t.return,w)}Po&&(Po=!1,Qf(t));break;case 4:a=Te,Te=Wi(t.stateNode.containerInfo),ce(e,t),se(t),Te=a;break;case 12:ce(e,t),se(t);break;case 13:ce(e,t),se(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=Re()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fo(t,a)));break;case 22:l=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,E=$e,D=Ct;if($e=E||l,Ct=D||p,ce(e,t),Ct=D,$e=E,se(t),a&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||p||$e||Ct||Jn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(i=p.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=p.stateNode;var _=p.memoizedProps.style,T=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(w){At(p,p.return,w)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(w){At(p,p.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Fo(t,n))));break;case 19:ce(e,t),se(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fo(t,a)));break;case 30:break;case 21:break;default:ce(e,t),se(t)}}function se(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Uf(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,i=Ko(t);Hi(t,i,l);break;case 5:var c=n.stateNode;n.flags&32&&(ia(c,""),n.flags&=-33);var f=Ko(t);Hi(t,f,c);break;case 3:case 4:var p=n.stateNode.containerInfo,E=Ko(t);Jo(t,E,p);break;default:throw Error(o(161))}}catch(D){At(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function yn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Hf(t,e.alternate,e),e=e.sibling}function Jn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:vn(4,e,e.return),Jn(e);break;case 1:ke(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&kf(e,e.return,n),Jn(e);break;case 27:Dl(e.stateNode);case 26:case 5:ke(e,e.return),Jn(e);break;case 22:e.memoizedState===null&&Jn(e);break;case 30:Jn(e);break;default:Jn(e)}t=t.sibling}}function xn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:xn(l,i,n),yl(4,i);break;case 1:if(xn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){At(a,a.return,E)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)gs(p[l],f)}catch(E){At(a,a.return,E)}}n&&c&64&&Cf(i),xl(i,i.return);break;case 27:jf(i);case 26:case 5:xn(l,i,n),n&&a===null&&c&4&&_f(i),xl(i,i.return);break;case 12:xn(l,i,n);break;case 13:xn(l,i,n),n&&c&4&&Yf(l,i);break;case 22:i.memoizedState===null&&xn(l,i,n),xl(i,i.return);break;case 30:break;default:xn(l,i,n)}e=e.sibling}}function Wo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&il(n))}function $o(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t))}function _e(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(t,e,n,a),e=e.sibling}function Gf(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:_e(t,e,n,a),l&2048&&yl(9,e);break;case 1:_e(t,e,n,a);break;case 3:_e(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t)));break;case 12:if(l&2048){_e(t,e,n,a),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){At(e,e.return,p)}}else _e(t,e,n,a);break;case 13:_e(t,e,n,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?_e(t,e,n,a):Sl(t,e):i._visibility&2?_e(t,e,n,a):(i._visibility|=2,Ea(t,e,n,a,(e.subtreeFlags&10256)!==0)),l&2048&&Wo(c,e);break;case 24:_e(t,e,n,a),l&2048&&$o(e.alternate,e);break;default:_e(t,e,n,a)}}function Ea(t,e,n,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,c=e,f=n,p=a,E=c.flags;switch(c.tag){case 0:case 11:case 15:Ea(i,c,f,p,l),yl(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?Ea(i,c,f,p,l):Sl(i,c):(D._visibility|=2,Ea(i,c,f,p,l)),l&&E&2048&&Wo(c.alternate,c);break;case 24:Ea(i,c,f,p,l),l&&E&2048&&$o(c.alternate,c);break;default:Ea(i,c,f,p,l)}e=e.sibling}}function Sl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:Sl(n,a),l&2048&&Wo(a.alternate,a);break;case 24:Sl(n,a),l&2048&&$o(a.alternate,a);break;default:Sl(n,a)}e=e.sibling}}var Al=8192;function Ta(t){if(t.subtreeFlags&Al)for(t=t.child;t!==null;)Zf(t),t=t.sibling}function Zf(t){switch(t.tag){case 26:Ta(t),t.flags&Al&&t.memoizedState!==null&&ap(Te,t.memoizedState,t.memoizedProps);break;case 5:Ta(t);break;case 3:case 4:var e=Te;Te=Wi(t.stateNode.containerInfo),Ta(t),Te=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Al,Al=16777216,Ta(t),Al=e):Ta(t));break;default:Ta(t)}}function Vf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ol(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Yt=a,Jf(a,t)}Vf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kf(t),t=t.sibling}function Kf(t){switch(t.tag){case 0:case 11:case 15:Ol(t),t.flags&2048&&vn(9,t,t.return);break;case 3:Ol(t);break;case 12:Ol(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,qi(t)):Ol(t);break;default:Ol(t)}}function qi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Yt=a,Jf(a,t)}Vf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:vn(8,e,e.return),qi(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,qi(e));break;default:qi(e)}t=t.sibling}}function Jf(t,e){for(;Yt!==null;){var n=Yt;switch(n.tag){case 0:case 11:case 15:vn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:il(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Yt=a;else t:for(n=t;Yt!==null;){a=Yt;var l=a.sibling,i=a.return;if(qf(a),a===n){Yt=null;break t}if(l!==null){l.return=i,Yt=l;break t}Yt=i}}}var ym={getCacheForType:function(t){var e=Ft(Ut),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},xm=typeof WeakMap=="function"?WeakMap:Map,bt=0,Ot=null,ut=null,ft=0,gt=0,fe=null,Sn=!1,Ma=!1,Io=!1,tn=0,Rt=0,An=0,Pn=0,tu=0,Ae=0,wa=0,El=null,ae=null,eu=!1,nu=0,Li=1/0,Yi=null,On=null,Vt=0,En=null,za=null,Da=0,au=0,lu=null,Pf=null,Tl=0,iu=null;function de(){if((bt&2)!==0&&ft!==0)return ft&-ft;if(R.T!==null){var t=ba;return t!==0?t:du()}return sc()}function Ff(){Ae===0&&(Ae=(ft&536870912)===0||pt?rc():536870912);var t=Se.current;return t!==null&&(t.flags|=32),Ae}function he(t,e,n){(t===Ot&&(gt===2||gt===9)||t.cancelPendingCommit!==null)&&(Ra(t,0),Tn(t,ft,Ae,!1)),Qa(t,n),((bt&2)===0||t!==Ot)&&(t===Ot&&((bt&2)===0&&(Pn|=n),Rt===4&&Tn(t,ft,Ae,!1)),Ue(t))}function Wf(t,e,n){if((bt&6)!==0)throw Error(o(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Xa(t,e),l=a?Om(t,e):uu(t,e,!0),i=a;do{if(l===0){Ma&&!a&&Tn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!Sm(n)){l=uu(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var f=t;l=El;var p=f.current.memoizedState.isDehydrated;if(p&&(Ra(f,c).flags|=256),c=uu(f,c,!1),c!==2){if(Io&&!p){f.errorRecoveryDisabledLanes|=i,Pn|=i,l=4;break t}i=ae,ae=l,i!==null&&(ae===null?ae=i:ae.push.apply(ae,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){Ra(t,0),Tn(t,e,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Tn(a,e,Ae,!Sn);break t;case 2:ae=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=nu+300-Re(),10<l)){if(Tn(a,e,Ae,!Sn),$l(a,0,!0)!==0)break t;a.timeoutHandle=Md($f.bind(null,a,n,ae,Yi,eu,e,Ae,Pn,wa,Sn,i,2,-0,0),l);break t}$f(a,n,ae,Yi,eu,e,Ae,Pn,wa,Sn,i,0,-0,0)}}break}while(!0);Ue(t)}function $f(t,e,n,a,l,i,c,f,p,E,D,_,T,w){if(t.timeoutHandle=-1,_=e.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Cl={stylesheets:null,count:0,unsuspend:np},Zf(e),_=lp(),_!==null)){t.cancelPendingCommit=_(id.bind(null,t,e,i,n,a,l,c,f,p,D,1,T,w)),Tn(t,i,c,!E);return}id(t,e,i,n,a,l,c,f,p)}function Sm(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!oe(i(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e,n,a){e&=~tu,e&=~Pn,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var i=31-re(l),c=1<<i;a[i]=-1,l&=~c}n!==0&&uc(t,n,e)}function Xi(){return(bt&6)===0?(Ml(0),!1):!0}function ru(){if(ut!==null){if(gt===0)var t=ut.return;else t=ut,Ve=Qn=null,Oo(t),Aa=null,bl=0,t=ut;for(;t!==null;)Nf(t.alternate,t),t=t.return;ut=null}}function Ra(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,qm(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ru(),Ot=t,ut=n=Qe(t.current,null),ft=e,gt=0,fe=null,Sn=!1,Ma=Xa(t,e),Io=!1,wa=Ae=tu=Pn=An=Rt=0,ae=El=null,eu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-re(a),i=1<<l;e|=t[l],a&=~i}return tn=e,si(),n}function If(t,e){rt=null,R.H=Di,e===ol||e===yi?(e=ps(),gt=3):e===ds?(e=ps(),gt=4):gt=e===gf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fe=e,ut===null&&(Rt=1,_i(t,ge(e,t.current)))}function td(){var t=R.H;return R.H=Di,t===null?Di:t}function ed(){var t=R.A;return R.A=ym,t}function ou(){Rt=4,Sn||(ft&4194048)!==ft&&Se.current!==null||(Ma=!0),(An&134217727)===0&&(Pn&134217727)===0||Ot===null||Tn(Ot,ft,Ae,!1)}function uu(t,e,n){var a=bt;bt|=2;var l=td(),i=ed();(Ot!==t||ft!==e)&&(Yi=null,Ra(t,e)),e=!1;var c=Rt;t:do try{if(gt!==0&&ut!==null){var f=ut,p=fe;switch(gt){case 8:ru(),c=6;break t;case 3:case 2:case 9:case 6:Se.current===null&&(e=!0);var E=gt;if(gt=0,fe=null,Na(t,f,p,E),n&&Ma){c=0;break t}break;default:E=gt,gt=0,fe=null,Na(t,f,p,E)}}Am(),c=Rt;break}catch(D){If(t,D)}while(!0);return e&&t.shellSuspendCounter++,Ve=Qn=null,bt=a,R.H=l,R.A=i,ut===null&&(Ot=null,ft=0,si()),c}function Am(){for(;ut!==null;)nd(ut)}function Om(t,e){var n=bt;bt|=2;var a=td(),l=ed();Ot!==t||ft!==e?(Yi=null,Li=Re()+500,Ra(t,e)):Ma=Xa(t,e);t:do try{if(gt!==0&&ut!==null){e=ut;var i=fe;e:switch(gt){case 1:gt=0,fe=null,Na(t,e,i,1);break;case 2:case 9:if(hs(i)){gt=0,fe=null,ad(e);break}e=function(){gt!==2&&gt!==9||Ot!==t||(gt=7),Ue(t)},i.then(e,e);break t;case 3:gt=7;break t;case 4:gt=5;break t;case 7:hs(i)?(gt=0,fe=null,ad(e)):(gt=0,fe=null,Na(t,e,i,7));break;case 5:var c=null;switch(ut.tag){case 26:c=ut.memoizedState;case 5:case 27:var f=ut;if(!c||Hd(c)){gt=0,fe=null;var p=f.sibling;if(p!==null)ut=p;else{var E=f.return;E!==null?(ut=E,Qi(E)):ut=null}break e}}gt=0,fe=null,Na(t,e,i,5);break;case 6:gt=0,fe=null,Na(t,e,i,6);break;case 8:ru(),Rt=6;break t;default:throw Error(o(462))}}Em();break}catch(D){If(t,D)}while(!0);return Ve=Qn=null,R.H=a,R.A=l,bt=n,ut!==null?0:(Ot=null,ft=0,si(),Rt)}function Em(){for(;ut!==null&&!V0();)nd(ut)}function nd(t){var e=Df(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?Qi(t):ut=e}function ad(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Of(n,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=Of(n,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Oo(e);default:Nf(n,e),e=ut=as(e,tn),e=Df(n,e,tn)}t.memoizedProps=t.pendingProps,e===null?Qi(t):ut=e}function Na(t,e,n,a){Ve=Qn=null,Oo(e),Aa=null,bl=0;var l=e.return;try{if(hm(t,l,e,n,ft)){Rt=1,_i(t,ge(n,t.current)),ut=null;return}}catch(i){if(l!==null)throw ut=l,i;Rt=1,_i(t,ge(n,t.current)),ut=null;return}e.flags&32768?(pt||a===1?t=!0:Ma||(ft&536870912)!==0?t=!1:(Sn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Se.current,a!==null&&a.tag===13&&(a.flags|=16384))),ld(e,t)):Qi(e)}function Qi(t){var e=t;do{if((e.flags&32768)!==0){ld(e,Sn);return}t=e.return;var n=pm(e.alternate,e,tn);if(n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);Rt===0&&(Rt=5)}function ld(t,e){do{var n=bm(t.alternate,t);if(n!==null){n.flags&=32767,ut=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=n}while(t!==null);Rt=6,ut=null}function id(t,e,n,a,l,i,c,f,p){t.cancelPendingCommit=null;do Gi();while(Vt!==0);if((bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=Wr,nh(t,n,i,c,f,p),t===Ot&&(ut=Ot=null,ft=0),za=e,En=t,Da=n,au=i,lu=l,Pf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zm(Pl,function(){return sd(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=Y.p,Y.p=2,c=bt,bt|=4;try{gm(t,e,n)}finally{bt=c,Y.p=l,R.T=a}}Vt=1,rd(),od(),ud()}}function rd(){if(Vt===1){Vt=0;var t=En,e=za,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var a=Y.p;Y.p=2;var l=bt;bt|=4;try{Xf(e,t);var i=xu,c=Kc(t.containerInfo),f=i.focusedElem,p=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Vc(f.ownerDocument.documentElement,f)){if(p!==null&&Vr(f)){var E=p.start,D=p.end;if(D===void 0&&(D=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(D,f.value.length);else{var _=f.ownerDocument||document,T=_&&_.defaultView||window;if(T.getSelection){var w=T.getSelection(),nt=f.textContent.length,I=Math.min(p.start,nt),xt=p.end===void 0?I:Math.min(p.end,nt);!w.extend&&I>xt&&(c=xt,xt=I,I=c);var S=Zc(f,I),v=Zc(f,xt);if(S&&v&&(w.rangeCount!==1||w.anchorNode!==S.node||w.anchorOffset!==S.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var O=_.createRange();O.setStart(S.node,S.offset),w.removeAllRanges(),I>xt?(w.addRange(O),w.extend(v.node,v.offset)):(O.setEnd(v.node,v.offset),w.addRange(O))}}}}for(_=[],w=f;w=w.parentNode;)w.nodeType===1&&_.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var C=_[f];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}nr=!!yu,xu=yu=null}finally{bt=l,Y.p=a,R.T=n}}t.current=e,Vt=2}}function od(){if(Vt===2){Vt=0;var t=En,e=za,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var a=Y.p;Y.p=2;var l=bt;bt|=4;try{Hf(t,e.alternate,e)}finally{bt=l,Y.p=a,R.T=n}}Vt=3}}function ud(){if(Vt===4||Vt===3){Vt=0,K0();var t=En,e=za,n=Da,a=Pf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,za=En=null,cd(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(On=null),Tr(n),e=e.stateNode,ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,l=Y.p,Y.p=2,R.T=null;try{for(var i=t.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{R.T=e,Y.p=l}}(Da&3)!==0&&Gi(),Ue(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===iu?Tl++:(Tl=0,iu=t):Tl=0,Ml(0)}}function cd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,il(e)))}function Gi(t){return rd(),od(),ud(),sd()}function sd(){if(Vt!==5)return!1;var t=En,e=au;au=0;var n=Tr(Da),a=R.T,l=Y.p;try{Y.p=32>n?32:n,R.T=null,n=lu,lu=null;var i=En,c=Da;if(Vt=0,za=En=null,Da=0,(bt&6)!==0)throw Error(o(331));var f=bt;if(bt|=4,Kf(i.current),Gf(i,i.current,c,n),bt=f,Ml(0,!1),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(Ya,i)}catch{}return!0}finally{Y.p=l,R.T=a,cd(t,e)}}function fd(t,e,n){e=ge(n,e),e=Bo(t.stateNode,e,2),t=mn(t,e,2),t!==null&&(Qa(t,2),Ue(t))}function At(t,e,n){if(t.tag===3)fd(t,t,n);else for(;e!==null;){if(e.tag===3){fd(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(On===null||!On.has(a))){t=ge(n,t),n=pf(2),a=mn(e,n,2),a!==null&&(bf(n,a,e,t),Qa(a,2),Ue(a));break}}e=e.return}}function cu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new xm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Io=!0,l.add(n),t=Tm.bind(null,t,e,n),e.then(t,t))}function Tm(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ot===t&&(ft&n)===n&&(Rt===4||Rt===3&&(ft&62914560)===ft&&300>Re()-nu?(bt&2)===0&&Ra(t,0):tu|=n,wa===ft&&(wa=0)),Ue(t)}function dd(t,e){e===0&&(e=oc()),t=da(t,e),t!==null&&(Qa(t,e),Ue(t))}function Mm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dd(t,n)}function wm(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),dd(t,n)}function zm(t,e){return Sr(t,e)}var Zi=null,Ca=null,su=!1,Vi=!1,fu=!1,Fn=0;function Ue(t){t!==Ca&&t.next===null&&(Ca===null?Zi=Ca=t:Ca=Ca.next=t),Vi=!0,su||(su=!0,Rm())}function Ml(t,e){if(!fu&&Vi){fu=!0;do for(var n=!1,a=Zi;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-re(42|t)+1)-1,i&=l&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,bd(a,i))}else i=ft,i=$l(a,a===Ot?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Xa(a,i)||(n=!0,bd(a,i));a=a.next}while(n);fu=!1}}function Dm(){hd()}function hd(){Vi=su=!1;var t=0;Fn!==0&&(Hm()&&(t=Fn),Fn=0);for(var e=Re(),n=null,a=Zi;a!==null;){var l=a.next,i=md(a,e);i===0?(a.next=null,n===null?Zi=l:n.next=l,l===null&&(Ca=n)):(n=a,(t!==0||(i&3)!==0)&&(Vi=!0)),a=l}Ml(t)}function md(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-re(i),f=1<<c,p=l[c];p===-1?((f&n)===0||(f&a)!==0)&&(l[c]=eh(f,e)):p<=e&&(t.expiredLanes|=f),i&=~f}if(e=Ot,n=ft,n=$l(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(gt===2||gt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ar(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Xa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Ar(a),Tr(n)){case 2:case 8:n=lc;break;case 32:n=Pl;break;case 268435456:n=ic;break;default:n=Pl}return a=pd.bind(null,t),n=Sr(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Ar(a),t.callbackPriority=2,t.callbackNode=null,2}function pd(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var a=ft;return a=$l(t,t===Ot?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Wf(t,a,e),md(t,Re()),t.callbackNode!=null&&t.callbackNode===n?pd.bind(null,t):null)}function bd(t,e){if(Gi())return null;Wf(t,e,!0)}function Rm(){Lm(function(){(bt&6)!==0?Sr(ac,Dm):hd()})}function du(){return Fn===0&&(Fn=rc()),Fn}function gd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ai(""+t)}function vd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Nm(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var i=gd((l[It]||null).action),c=a.submitter;c&&(e=(e=c[It]||null)?gd(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var f=new oi("action","action",null,a,l);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Fn!==0){var p=c?vd(l,c):new FormData(l);Co(n,{pending:!0,data:p,method:l.method,action:i},null,p)}}else typeof i=="function"&&(f.preventDefault(),p=c?vd(l,c):new FormData(l),Co(n,{pending:!0,data:p,method:l.method,action:i},i,p))},currentTarget:l}]})}}for(var hu=0;hu<Fr.length;hu++){var mu=Fr[hu],Cm=mu.toLowerCase(),km=mu[0].toUpperCase()+mu.slice(1);Ee(Cm,"on"+km)}Ee(Fc,"onAnimationEnd"),Ee(Wc,"onAnimationIteration"),Ee($c,"onAnimationStart"),Ee("dblclick","onDoubleClick"),Ee("focusin","onFocus"),Ee("focusout","onBlur"),Ee(Fh,"onTransitionRun"),Ee(Wh,"onTransitionStart"),Ee($h,"onTransitionCancel"),Ee(Ic,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function yd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var c=a.length-1;0<=c;c--){var f=a[c],p=f.instance,E=f.currentTarget;if(f=f.listener,p!==i&&l.isPropagationStopped())break t;i=f,l.currentTarget=E;try{i(l)}catch(D){ki(D)}l.currentTarget=null,i=p}else for(c=0;c<a.length;c++){if(f=a[c],p=f.instance,E=f.currentTarget,f=f.listener,p!==i&&l.isPropagationStopped())break t;i=f,l.currentTarget=E;try{i(l)}catch(D){ki(D)}l.currentTarget=null,i=p}}}}function ct(t,e){var n=e[Mr];n===void 0&&(n=e[Mr]=new Set);var a=t+"__bubble";n.has(a)||(xd(e,t,2,!1),n.add(a))}function pu(t,e,n){var a=0;e&&(a|=4),xd(n,t,a,e)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function bu(t){if(!t[Ki]){t[Ki]=!0,dc.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ki]||(e[Ki]=!0,pu("selectionchange",!1,e))}}function xd(t,e,n,a){switch(Gd(e)){case 2:var l=op;break;case 8:l=up;break;default:l=Ru}n=l.bind(null,e,n,t),l=void 0,!Br||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function gu(t,e,n,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===l)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;f!==null;){if(c=In(f),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=i=c;continue t}f=f.parentNode}}a=a.return}Mc(function(){var E=i,D=Ur(n),_=[];t:{var T=ts.get(t);if(T!==void 0){var w=oi,nt=t;switch(t){case"keypress":if(ii(n)===0)break t;case"keydown":case"keyup":w=zh;break;case"focusin":nt="focus",w=Yr;break;case"focusout":nt="blur",w=Yr;break;case"beforeblur":case"afterblur":w=Yr;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Nh;break;case Fc:case Wc:case $c:w=yh;break;case Ic:w=kh;break;case"scroll":case"scrollend":w=mh;break;case"wheel":w=Uh;break;case"copy":case"cut":case"paste":w=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Nc;break;case"toggle":case"beforetoggle":w=Bh}var I=(e&4)!==0,xt=!I&&(t==="scroll"||t==="scrollend"),S=I?T!==null?T+"Capture":null:T;I=[];for(var v=E,O;v!==null;){var C=v;if(O=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||O===null||S===null||(C=Va(v,S),C!=null&&I.push(zl(v,C,O))),xt)break;v=v.return}0<I.length&&(T=new w(T,nt,null,n,D),_.push({event:T,listeners:I}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",T&&n!==_r&&(nt=n.relatedTarget||n.fromElement)&&(In(nt)||nt[$n]))break t;if((w||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,w?(nt=n.relatedTarget||n.toElement,w=E,nt=nt?In(nt):null,nt!==null&&(xt=h(nt),I=nt.tag,nt!==xt||I!==5&&I!==27&&I!==6)&&(nt=null)):(w=null,nt=E),w!==nt)){if(I=Dc,C="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(I=Nc,C="onPointerLeave",S="onPointerEnter",v="pointer"),xt=w==null?T:Za(w),O=nt==null?T:Za(nt),T=new I(C,v+"leave",w,n,D),T.target=xt,T.relatedTarget=O,C=null,In(D)===E&&(I=new I(S,v+"enter",nt,n,D),I.target=O,I.relatedTarget=xt,C=I),xt=C,w&&nt)e:{for(I=w,S=nt,v=0,O=I;O;O=ka(O))v++;for(O=0,C=S;C;C=ka(C))O++;for(;0<v-O;)I=ka(I),v--;for(;0<O-v;)S=ka(S),O--;for(;v--;){if(I===S||S!==null&&I===S.alternate)break e;I=ka(I),S=ka(S)}I=null}else I=null;w!==null&&Sd(_,T,w,I,!1),nt!==null&&xt!==null&&Sd(_,xt,nt,I,!0)}}t:{if(T=E?Za(E):window,w=T.nodeName&&T.nodeName.toLowerCase(),w==="select"||w==="input"&&T.type==="file")var G=qc;else if(Bc(T))if(Lc)G=Kh;else{G=Zh;var ot=Gh}else w=T.nodeName,!w||w.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&kr(E.elementType)&&(G=qc):G=Vh;if(G&&(G=G(t,E))){Hc(_,G,n,D);break t}ot&&ot(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Cr(T,"number",T.value)}switch(ot=E?Za(E):window,t){case"focusin":(Bc(ot)||ot.contentEditable==="true")&&(ca=ot,Kr=E,tl=null);break;case"focusout":tl=Kr=ca=null;break;case"mousedown":Jr=!0;break;case"contextmenu":case"mouseup":case"dragend":Jr=!1,Jc(_,n,D);break;case"selectionchange":if(Ph)break;case"keydown":case"keyup":Jc(_,n,D)}var K;if(Qr)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else ua?Uc(t,n)&&(tt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(tt="onCompositionStart");tt&&(Cc&&n.locale!=="ko"&&(ua||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ua&&(K=wc()):(sn=D,Hr="value"in sn?sn.value:sn.textContent,ua=!0)),ot=Ji(E,tt),0<ot.length&&(tt=new Rc(tt,t,null,n,D),_.push({event:tt,listeners:ot}),K?tt.data=K:(K=jc(n),K!==null&&(tt.data=K)))),(K=qh?Lh(t,n):Yh(t,n))&&(tt=Ji(E,"onBeforeInput"),0<tt.length&&(ot=new Rc("onBeforeInput","beforeinput",null,n,D),_.push({event:ot,listeners:tt}),ot.data=K)),Nm(_,t,E,n,D)}yd(_,e)})}function zl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ji(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Va(t,n),l!=null&&a.unshift(zl(t,l,i)),l=Va(t,e),l!=null&&a.push(zl(t,l,i))),t.tag===3)return a;t=t.return}return[]}function ka(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sd(t,e,n,a,l){for(var i=e._reactName,c=[];n!==null&&n!==a;){var f=n,p=f.alternate,E=f.stateNode;if(f=f.tag,p!==null&&p===a)break;f!==5&&f!==26&&f!==27||E===null||(p=E,l?(E=Va(n,i),E!=null&&c.unshift(zl(n,E,p))):l||(E=Va(n,i),E!=null&&c.push(zl(n,E,p)))),n=n.return}c.length!==0&&t.push({event:e,listeners:c})}var Um=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Ad(t){return(typeof t=="string"?t:""+t).replace(Um,`
`).replace(jm,"")}function Od(t,e){return e=Ad(e),Ad(t)===e}function Pi(){}function yt(t,e,n,a,l,i){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ia(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ia(t,""+a);break;case"className":ti(t,"class",a);break;case"tabIndex":ti(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(t,n,a);break;case"style":Ec(t,a,i);break;case"data":if(e!=="object"){ti(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=ai(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&yt(t,e,"name",l.name,l,null),yt(t,e,"formEncType",l.formEncType,l,null),yt(t,e,"formMethod",l.formMethod,l,null),yt(t,e,"formTarget",l.formTarget,l,null)):(yt(t,e,"encType",l.encType,l,null),yt(t,e,"method",l.method,l,null),yt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=ai(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=Pi);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=ai(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":ct("beforetoggle",t),ct("toggle",t),Il(t,"popover",a);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Il(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dh.get(n)||n,Il(t,n,a))}}function vu(t,e,n,a,l,i){switch(n){case"style":Ec(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ia(t,a):(typeof a=="number"||typeof a=="bigint")&&ia(t,""+a);break;case"onScroll":a!=null&&ct("scroll",t);break;case"onScrollEnd":a!=null&&ct("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),i=t[It]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Il(t,n,a)}}}function Kt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ct("error",t),ct("load",t);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:yt(t,e,i,c,n,null)}}l&&yt(t,e,"srcSet",n.srcSet,n,null),a&&yt(t,e,"src",n.src,n,null);return;case"input":ct("invalid",t);var f=i=c=l=null,p=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":c=D;break;case"checked":p=D;break;case"defaultChecked":E=D;break;case"value":i=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:yt(t,e,a,D,n,null)}}xc(t,i,f,p,E,c,l,!1),ei(t);return;case"select":ct("invalid",t),a=c=i=null;for(l in n)if(n.hasOwnProperty(l)&&(f=n[l],f!=null))switch(l){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:yt(t,e,l,f,n,null)}e=i,n=c,t.multiple=!!a,e!=null?la(t,!!a,e,!1):n!=null&&la(t,!!a,n,!0);return;case"textarea":ct("invalid",t),i=l=a=null;for(c in n)if(n.hasOwnProperty(c)&&(f=n[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":l=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:yt(t,e,c,f,n,null)}Ac(t,a,l,i),ei(t);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:yt(t,e,p,a,n,null)}return;case"dialog":ct("beforetoggle",t),ct("toggle",t),ct("cancel",t),ct("close",t);break;case"iframe":case"object":ct("load",t);break;case"video":case"audio":for(a=0;a<wl.length;a++)ct(wl[a],t);break;case"image":ct("error",t),ct("load",t);break;case"details":ct("toggle",t);break;case"embed":case"source":case"link":ct("error",t),ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:yt(t,e,E,a,n,null)}return;default:if(kr(e)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&vu(t,e,D,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&yt(t,e,f,a,n,null))}function Bm(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,f=null,p=null,E=null,D=null;for(w in n){var _=n[w];if(n.hasOwnProperty(w)&&_!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=_;default:a.hasOwnProperty(w)||yt(t,e,w,null,a,_)}}for(var T in a){var w=a[T];if(_=n[T],a.hasOwnProperty(T)&&(w!=null||_!=null))switch(T){case"type":i=w;break;case"name":l=w;break;case"checked":E=w;break;case"defaultChecked":D=w;break;case"value":c=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,e));break;default:w!==_&&yt(t,e,T,w,a,_)}}Nr(t,c,f,p,E,D,i,l);return;case"select":w=c=f=T=null;for(i in n)if(p=n[i],n.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":w=p;default:a.hasOwnProperty(i)||yt(t,e,i,null,a,p)}for(l in a)if(i=a[l],p=n[l],a.hasOwnProperty(l)&&(i!=null||p!=null))switch(l){case"value":T=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==p&&yt(t,e,l,i,a,p)}e=f,n=c,a=w,T!=null?la(t,!!n,T,!1):!!a!=!!n&&(e!=null?la(t,!!n,e,!0):la(t,!!n,n?[]:"",!1));return;case"textarea":w=T=null;for(f in n)if(l=n[f],n.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:yt(t,e,f,null,a,l)}for(c in a)if(l=a[c],i=n[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":T=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&yt(t,e,c,l,a,i)}Sc(t,T,w);return;case"option":for(var nt in n)if(T=n[nt],n.hasOwnProperty(nt)&&T!=null&&!a.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:yt(t,e,nt,null,a,T)}for(p in a)if(T=a[p],w=n[p],a.hasOwnProperty(p)&&T!==w&&(T!=null||w!=null))switch(p){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:yt(t,e,p,T,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&yt(t,e,I,null,a,T);for(E in a)if(T=a[E],w=n[E],a.hasOwnProperty(E)&&T!==w&&(T!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:yt(t,e,E,T,a,w)}return;default:if(kr(e)){for(var xt in n)T=n[xt],n.hasOwnProperty(xt)&&T!==void 0&&!a.hasOwnProperty(xt)&&vu(t,e,xt,void 0,a,T);for(D in a)T=a[D],w=n[D],!a.hasOwnProperty(D)||T===w||T===void 0&&w===void 0||vu(t,e,D,T,a,w);return}}for(var S in n)T=n[S],n.hasOwnProperty(S)&&T!=null&&!a.hasOwnProperty(S)&&yt(t,e,S,null,a,T);for(_ in a)T=a[_],w=n[_],!a.hasOwnProperty(_)||T===w||T==null&&w==null||yt(t,e,_,T,a,w)}var yu=null,xu=null;function Fi(t){return t.nodeType===9?t:t.ownerDocument}function Ed(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Au=null;function Hm(){var t=window.event;return t&&t.type==="popstate"?t===Au?!1:(Au=t,!0):(Au=null,!1)}var Md=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(t){return wd.resolve(null).then(t).catch(Ym)}:Md;function Ym(t){setTimeout(function(){throw t})}function Mn(t){return t==="head"}function zd(t,e){var n=e,a=0,l=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<a&&8>a){n=a;var c=t.ownerDocument;if(n&1&&Dl(c.documentElement),n&2&&Dl(c.body),n&4)for(n=c.head,Dl(n),c=n.firstChild;c;){var f=c.nextSibling,p=c.nodeName;c[Ga]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=f}}if(l===0){t.removeChild(i),Bl(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=i}while(n);Bl(e)}function Ou(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ou(n),wr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Xm(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ga])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Me(t.nextSibling),t===null)break}return null}function Qm(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Me(t.nextSibling),t===null))return null;return t}function Eu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Gm(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Me(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Tu=null;function Dd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Rd(t,e,n){switch(e=Fi(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Dl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wr(t)}var Oe=new Map,Nd=new Set;function Wi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var en=Y.d;Y.d={f:Zm,r:Vm,D:Km,C:Jm,L:Pm,m:Fm,X:$m,S:Wm,M:Im};function Zm(){var t=en.f(),e=Xi();return t||e}function Vm(t){var e=ta(t);e!==null&&e.tag===5&&e.type==="form"?Fs(e):en.r(t)}var _a=typeof document>"u"?null:document;function Cd(t,e,n){var a=_a;if(a&&typeof e=="string"&&e){var l=be(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Nd.has(l)||(Nd.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Kt(e,"link",t),qt(e),a.head.appendChild(e)))}}function Km(t){en.D(t),Cd("dns-prefetch",t,null)}function Jm(t,e){en.C(t,e),Cd("preconnect",t,e)}function Pm(t,e,n){en.L(t,e,n);var a=_a;if(a&&t&&e){var l='link[rel="preload"][as="'+be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+be(n.imageSizes)+'"]')):l+='[href="'+be(t)+'"]';var i=l;switch(e){case"style":i=Ua(t);break;case"script":i=ja(t)}Oe.has(i)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Oe.set(i,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(Rl(i))||e==="script"&&a.querySelector(Nl(i))||(e=a.createElement("link"),Kt(e,"link",t),qt(e),a.head.appendChild(e)))}}function Fm(t,e){en.m(t,e);var n=_a;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+be(a)+'"][href="'+be(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ja(t)}if(!Oe.has(i)&&(t=x({rel:"modulepreload",href:t},e),Oe.set(i,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(i)))return}a=n.createElement("link"),Kt(a,"link",t),qt(a),n.head.appendChild(a)}}}function Wm(t,e,n){en.S(t,e,n);var a=_a;if(a&&t){var l=ea(a).hoistableStyles,i=Ua(t);e=e||"default";var c=l.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Rl(i)))f.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Oe.get(i))&&Mu(t,n);var p=c=a.createElement("link");qt(p),Kt(p,"link",t),p._p=new Promise(function(E,D){p.onload=E,p.onerror=D}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,$i(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:f},l.set(i,c)}}}function $m(t,e){en.X(t,e);var n=_a;if(n&&t){var a=ea(n).hoistableScripts,l=ja(t),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(t=x({src:t,async:!0},e),(e=Oe.get(l))&&wu(t,e),i=n.createElement("script"),qt(i),Kt(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Im(t,e){en.M(t,e);var n=_a;if(n&&t){var a=ea(n).hoistableScripts,l=ja(t),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(t=x({src:t,async:!0,type:"module"},e),(e=Oe.get(l))&&wu(t,e),i=n.createElement("script"),qt(i),Kt(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function kd(t,e,n,a){var l=(l=lt.current)?Wi(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ua(n.href),n=ea(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ua(n.href);var i=ea(l).hoistableStyles,c=i.get(t);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=l.querySelector(Rl(t)))&&!i._p&&(c.instance=i,c.state.loading=5),Oe.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Oe.set(t,n),i||tp(l,t,n,c.state))),e&&a===null)throw Error(o(528,""));return c}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ja(n),n=ea(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Ua(t){return'href="'+be(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function _d(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function tp(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Kt(e,"link",n),qt(e),t.head.appendChild(e))}function ja(t){return'[src="'+be(t)+'"]'}function Nl(t){return"script[async]"+t}function Ud(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+be(n.href)+'"]');if(a)return e.instance=a,qt(a),a;var l=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),qt(a),Kt(a,"style",l),$i(a,n.precedence,t),e.instance=a;case"stylesheet":l=Ua(n.href);var i=t.querySelector(Rl(l));if(i)return e.state.loading|=4,e.instance=i,qt(i),i;a=_d(n),(l=Oe.get(l))&&Mu(a,l),i=(t.ownerDocument||t).createElement("link"),qt(i);var c=i;return c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Kt(i,"link",a),e.state.loading|=4,$i(i,n.precedence,t),e.instance=i;case"script":return i=ja(n.src),(l=t.querySelector(Nl(i)))?(e.instance=l,qt(l),l):(a=n,(l=Oe.get(i))&&(a=x({},n),wu(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),qt(l),Kt(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,$i(a,n.precedence,t));return e.instance}function $i(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===e)i=f;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Mu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ii=null;function jd(t,e,n){if(Ii===null){var a=new Map,l=Ii=new Map;l.set(n,a)}else l=Ii,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var i=n[l];if(!(i[Ga]||i[Pt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function Bd(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ep(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Hd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Cl=null;function np(){}function ap(t,e,n){if(Cl===null)throw Error(o(475));var a=Cl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Ua(n.href),i=t.querySelector(Rl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=tr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,qt(i);return}i=t.ownerDocument||t,n=_d(n),(l=Oe.get(l))&&Mu(n,l),i=i.createElement("link"),qt(i);var c=i;c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Kt(i,"link",n),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=tr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function lp(){if(Cl===null)throw Error(o(475));var t=Cl;return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function tr(){if(this.count--,this.count===0){if(this.stylesheets)zu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var er=null;function zu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,er=new Map,e.forEach(ip,t),er=null,tr.call(t))}function ip(t,e){if(!(e.state.loading&4)){var n=er.get(t);if(n)var a=n.get(null);else{n=new Map,er.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}l=e.instance,c=l.getAttribute("data-precedence"),i=n.get(c)||a,i===a&&n.set(null,l),n.set(c,l),this.count++,a=tr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var kl={$$typeof:P,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function rp(t,e,n,a,l,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function qd(t,e,n,a,l,i,c,f,p,E,D,_){return t=new rp(t,e,n,c,f,p,E,_),e=1,i===!0&&(e|=24),i=ue(3,null,null,e),t.current=i,i.stateNode=t,e=uo(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:e},ho(i),t}function Ld(t){return t?(t=ha,t):ha}function Yd(t,e,n,a,l,i){l=Ld(l),a.context===null?a.context=l:a.pendingContext=l,a=hn(e),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=mn(t,a,e),n!==null&&(he(n,t,e),cl(n,t,e))}function Xd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Du(t,e){Xd(t,e),(t=t.alternate)&&Xd(t,e)}function Qd(t){if(t.tag===13){var e=da(t,67108864);e!==null&&he(e,t,67108864),Du(t,67108864)}}var nr=!0;function op(t,e,n,a){var l=R.T;R.T=null;var i=Y.p;try{Y.p=2,Ru(t,e,n,a)}finally{Y.p=i,R.T=l}}function up(t,e,n,a){var l=R.T;R.T=null;var i=Y.p;try{Y.p=8,Ru(t,e,n,a)}finally{Y.p=i,R.T=l}}function Ru(t,e,n,a){if(nr){var l=Nu(a);if(l===null)gu(t,e,a,ar,n),Zd(t,a);else if(sp(l,t,e,n,a))a.stopPropagation();else if(Zd(t,a),e&4&&-1<cp.indexOf(t)){for(;l!==null;){var i=ta(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=kn(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var p=1<<31-re(c);f.entanglements[1]|=p,c&=~p}Ue(i),(bt&6)===0&&(Li=Re()+500,Ml(0))}}break;case 13:f=da(i,2),f!==null&&he(f,i,2),Xi(),Du(i,2)}if(i=Nu(a),i===null&&gu(t,e,a,ar,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else gu(t,e,a,null,n)}}function Nu(t){return t=Ur(t),Cu(t)}var ar=null;function Cu(t){if(ar=null,t=In(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=b(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ar=t,null}function Gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J0()){case ac:return 2;case lc:return 8;case Pl:case P0:return 32;case ic:return 268435456;default:return 32}default:return 32}}var ku=!1,wn=null,zn=null,Dn=null,_l=new Map,Ul=new Map,Rn=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zd(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":_l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(e.pointerId)}}function jl(t,e,n,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=ta(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function sp(t,e,n,a,l){switch(e){case"focusin":return wn=jl(wn,t,e,n,a,l),!0;case"dragenter":return zn=jl(zn,t,e,n,a,l),!0;case"mouseover":return Dn=jl(Dn,t,e,n,a,l),!0;case"pointerover":var i=l.pointerId;return _l.set(i,jl(_l.get(i)||null,t,e,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Ul.set(i,jl(Ul.get(i)||null,t,e,n,a,l)),!0}return!1}function Vd(t){var e=In(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=b(n),e!==null){t.blockedOn=e,ah(t.priority,function(){if(n.tag===13){var a=de();a=Er(a);var l=da(n,a);l!==null&&he(l,n,a),Du(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);_r=a,n.target.dispatchEvent(a),_r=null}else return e=ta(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function Kd(t,e,n){lr(t)&&n.delete(e)}function fp(){ku=!1,wn!==null&&lr(wn)&&(wn=null),zn!==null&&lr(zn)&&(zn=null),Dn!==null&&lr(Dn)&&(Dn=null),_l.forEach(Kd),Ul.forEach(Kd)}function ir(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fp)))}var rr=null;function Jd(t){rr!==t&&(rr=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rr===t&&(rr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(Cu(a||n)===null)continue;break}var i=ta(n);i!==null&&(t.splice(e,3),e-=3,Co(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Bl(t){function e(p){return ir(p,t)}wn!==null&&ir(wn,t),zn!==null&&ir(zn,t),Dn!==null&&ir(Dn,t),_l.forEach(e),Ul.forEach(e);for(var n=0;n<Rn.length;n++){var a=Rn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)Vd(n),n.blockedOn===null&&Rn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],c=l[It]||null;if(typeof i=="function")c||Jd(n);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[It]||null)f=c.formAction;else if(Cu(l)!==null)continue}else f=c.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),Jd(n)}}}function _u(t){this._internalRoot=t}or.prototype.render=_u.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,a=de();Yd(n,a,t,e,null,null)},or.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yd(t.current,2,null,t,null,null),Xi(),e[$n]=null}};function or(t){this._internalRoot=t}or.prototype.unstable_scheduleHydration=function(t){if(t){var e=sc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&Vd(t)}};var Pd=u.version;if(Pd!=="19.1.0")throw Error(o(527,Pd,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=y(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var dp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{Ya=ur.inject(dp),ie=ur}catch{}}return ql.createRoot=function(t,e){if(!d(t))throw Error(o(299));var n=!1,a="",l=ff,i=df,c=hf,f=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=qd(t,1,!1,null,null,n,a,l,i,c,f,null),t[$n]=e.current,bu(t),new _u(e)},ql.hydrateRoot=function(t,e,n){if(!d(t))throw Error(o(299));var a=!1,l="",i=ff,c=df,f=hf,p=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),e=qd(t,1,!0,e,n??null,a,l,i,c,f,p,E),e.context=Ld(null),n=e.current,a=de(),a=Er(a),l=hn(a),l.callback=null,mn(n,l,a),n=a,e.current.lanes=n,Qa(e,n),Ue(e),t[$n]=e.current,bu(t),new or(e)},ql.version="19.1.0",ql}var i0;function Ap(){if(i0)return Bu.exports;i0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Bu.exports=Sp(),Bu.exports}var Op=Ap();const Ep=g0(Op);/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r0="popstate";function Tp(r={}){function u(o,d){let{pathname:h,search:b,hash:M}=o.location;return Gu("",{pathname:h,search:b,hash:M},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(o,d){return typeof d=="string"?d:Xl(d)}return wp(u,s,null,r)}function zt(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Be(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Mp(){return Math.random().toString(36).substring(2,10)}function o0(r,u){return{usr:r.state,key:r.key,idx:u}}function Gu(r,u,s=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?qa(u):u,state:s,key:u&&u.key||o||Mp()}}function Xl({pathname:r="/",search:u="",hash:s=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function qa(r){let u={};if(r){let s=r.indexOf("#");s>=0&&(u.hash=r.substring(s),r=r.substring(0,s));let o=r.indexOf("?");o>=0&&(u.search=r.substring(o),r=r.substring(0,o)),r&&(u.pathname=r)}return u}function wp(r,u,s,o={}){let{window:d=document.defaultView,v5Compat:h=!1}=o,b=d.history,M="POP",y=null,m=x();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function x(){return(b.state||{idx:null}).idx}function k(){M="POP";let H=x(),Z=H==null?null:H-m;m=H,y&&y({action:M,location:N.location,delta:Z})}function B(H,Z){M="PUSH";let X=Gu(N.location,H,Z);m=x()+1;let P=o0(X,m),dt=N.createHref(X);try{b.pushState(P,"",dt)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;d.location.assign(dt)}h&&y&&y({action:M,location:N.location,delta:1})}function q(H,Z){M="REPLACE";let X=Gu(N.location,H,Z);m=x();let P=o0(X,m),dt=N.createHref(X);b.replaceState(P,"",dt),h&&y&&y({action:M,location:N.location,delta:0})}function j(H){return zp(H)}let N={get action(){return M},get location(){return r(d,b)},listen(H){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(r0,k),y=H,()=>{d.removeEventListener(r0,k),y=null}},createHref(H){return u(d,H)},createURL:j,encodeLocation(H){let Z=j(H);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:B,replace:q,go(H){return b.go(H)}};return N}function zp(r,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),zt(s,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Xl(r);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function v0(r,u,s="/"){return Dp(r,u,s,!1)}function Dp(r,u,s,o){let d=typeof u=="string"?qa(u):u,h=ln(d.pathname||"/",s);if(h==null)return null;let b=y0(r);Rp(b);let M=null;for(let y=0;M==null&&y<b.length;++y){let m=Yp(h);M=qp(b[y],m,o)}return M}function y0(r,u=[],s=[],o="",d=!1){let h=(b,M,y=d,m)=>{let x={relativePath:m===void 0?b.path||"":m,caseSensitive:b.caseSensitive===!0,childrenIndex:M,route:b};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&y)return;zt(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let k=an([o,x.relativePath]),B=s.concat(x);b.children&&b.children.length>0&&(zt(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),y0(b.children,u,B,k,y)),!(b.path==null&&!b.index)&&u.push({path:k,score:Bp(k,b.index),routesMeta:B})};return r.forEach((b,M)=>{if(b.path===""||!b.path?.includes("?"))h(b,M);else for(let y of x0(b.path))h(b,M,!0,y)}),u}function x0(r){let u=r.split("/");if(u.length===0)return[];let[s,...o]=u,d=s.endsWith("?"),h=s.replace(/\?$/,"");if(o.length===0)return d?[h,""]:[h];let b=x0(o.join("/")),M=[];return M.push(...b.map(y=>y===""?h:[h,y].join("/"))),d&&M.push(...b),M.map(y=>r.startsWith("/")&&y===""?"/":y)}function Rp(r){r.sort((u,s)=>u.score!==s.score?s.score-u.score:Hp(u.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var Np=/^:[\w-]+$/,Cp=3,kp=2,_p=1,Up=10,jp=-2,u0=r=>r==="*";function Bp(r,u){let s=r.split("/"),o=s.length;return s.some(u0)&&(o+=jp),u&&(o+=kp),s.filter(d=>!u0(d)).reduce((d,h)=>d+(Np.test(h)?Cp:h===""?_p:Up),o)}function Hp(r,u){return r.length===u.length&&r.slice(0,-1).every((o,d)=>o===u[d])?r[r.length-1]-u[u.length-1]:0}function qp(r,u,s=!1){let{routesMeta:o}=r,d={},h="/",b=[];for(let M=0;M<o.length;++M){let y=o[M],m=M===o.length-1,x=h==="/"?u:u.slice(h.length)||"/",k=mr({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},x),B=y.route;if(!k&&m&&s&&!o[o.length-1].route.index&&(k=mr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},x)),!k)return null;Object.assign(d,k.params),b.push({params:d,pathname:an([h,k.pathname]),pathnameBase:Zp(an([h,k.pathnameBase])),route:B}),k.pathnameBase!=="/"&&(h=an([h,k.pathnameBase]))}return b}function mr(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,o]=Lp(r.path,r.caseSensitive,r.end),d=u.match(s);if(!d)return null;let h=d[0],b=h.replace(/(.)\/+$/,"$1"),M=d.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:k},B)=>{if(x==="*"){let j=M[B]||"";b=h.slice(0,h.length-j.length).replace(/(.)\/+$/,"$1")}const q=M[B];return k&&!q?m[x]=void 0:m[x]=(q||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:b,pattern:r}}function Lp(r,u=!1,s=!0){Be(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,M,y)=>(o.push({paramName:M,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),o]}function Yp(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Be(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function ln(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,o=r.charAt(s);return o&&o!=="/"?null:r.slice(s)||"/"}function Xp(r,u="/"){let{pathname:s,search:o="",hash:d=""}=typeof r=="string"?qa(r):r;return{pathname:s?s.startsWith("/")?s:Qp(s,u):u,search:Vp(o),hash:Kp(d)}}function Qp(r,u){let s=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Yu(r,u,s,o){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gp(r){return r.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function S0(r){let u=Gp(r);return u.map((s,o)=>o===u.length-1?s.pathname:s.pathnameBase)}function A0(r,u,s,o=!1){let d;typeof r=="string"?d=qa(r):(d={...r},zt(!d.pathname||!d.pathname.includes("?"),Yu("?","pathname","search",d)),zt(!d.pathname||!d.pathname.includes("#"),Yu("#","pathname","hash",d)),zt(!d.search||!d.search.includes("#"),Yu("#","search","hash",d)));let h=r===""||d.pathname==="",b=h?"/":d.pathname,M;if(b==null)M=s;else{let k=u.length-1;if(!o&&b.startsWith("..")){let B=b.split("/");for(;B[0]==="..";)B.shift(),k-=1;d.pathname=B.join("/")}M=k>=0?u[k]:"/"}let y=Xp(d,M),m=b&&b!=="/"&&b.endsWith("/"),x=(h||b===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(m||x)&&(y.pathname+="/"),y}var an=r=>r.join("/").replace(/\/\/+/g,"/"),Zp=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Kp=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Jp(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var O0=["POST","PUT","PATCH","DELETE"];new Set(O0);var Pp=["GET",...O0];new Set(Pp);var La=z.createContext(null);La.displayName="DataRouter";var br=z.createContext(null);br.displayName="DataRouterState";z.createContext(!1);var E0=z.createContext({isTransitioning:!1});E0.displayName="ViewTransition";var Fp=z.createContext(new Map);Fp.displayName="Fetchers";var Wp=z.createContext(null);Wp.displayName="Await";var He=z.createContext(null);He.displayName="Navigation";var Ql=z.createContext(null);Ql.displayName="Location";var rn=z.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var Ju=z.createContext(null);Ju.displayName="RouteError";function $p(r,{relative:u}={}){zt(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=z.useContext(He),{hash:d,pathname:h,search:b}=Vl(r,{relative:u}),M=h;return s!=="/"&&(M=h==="/"?s:an([s,h])),o.createHref({pathname:M,search:b,hash:d})}function Gl(){return z.useContext(Ql)!=null}function Wn(){return zt(Gl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Ql).location}var T0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M0(r){z.useContext(He).static||z.useLayoutEffect(r)}function Zl(){let{isDataRoute:r}=z.useContext(rn);return r?fb():Ip()}function Ip(){zt(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(La),{basename:u,navigator:s}=z.useContext(He),{matches:o}=z.useContext(rn),{pathname:d}=Wn(),h=JSON.stringify(S0(o)),b=z.useRef(!1);return M0(()=>{b.current=!0}),z.useCallback((y,m={})=>{if(Be(b.current,T0),!b.current)return;if(typeof y=="number"){s.go(y);return}let x=A0(y,JSON.parse(h),d,m.relative==="path");r==null&&u!=="/"&&(x.pathname=x.pathname==="/"?u:an([u,x.pathname])),(m.replace?s.replace:s.push)(x,m.state,m)},[u,s,h,d,r])}z.createContext(null);function Vl(r,{relative:u}={}){let{matches:s}=z.useContext(rn),{pathname:o}=Wn(),d=JSON.stringify(S0(s));return z.useMemo(()=>A0(r,JSON.parse(d),o,u==="path"),[r,d,o,u])}function tb(r,u){return w0(r,u)}function w0(r,u,s,o,d){zt(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=z.useContext(He),{matches:b}=z.useContext(rn),M=b[b.length-1],y=M?M.params:{},m=M?M.pathname:"/",x=M?M.pathnameBase:"/",k=M&&M.route;{let X=k&&k.path||"";z0(m,!k||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let B=Wn(),q;if(u){let X=typeof u=="string"?qa(u):u;zt(x==="/"||X.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${X.pathname}" was given in the \`location\` prop.`),q=X}else q=B;let j=q.pathname||"/",N=j;if(x!=="/"){let X=x.replace(/^\//,"").split("/");N="/"+j.replace(/^\//,"").split("/").slice(X.length).join("/")}let H=v0(r,{pathname:N});Be(k||H!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Be(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=ib(H&&H.map(X=>Object.assign({},X,{params:Object.assign({},y,X.params),pathname:an([x,h.encodeLocation?h.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?x:an([x,h.encodeLocation?h.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),b,s,o,d);return u&&Z?z.createElement(Ql.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},Z):Z}function eb(){let r=sb(),u=Jp(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",r),b=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:h},"ErrorBoundary")," or"," ",z.createElement("code",{style:h},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},u),s?z.createElement("pre",{style:d},s):null,b)}var nb=z.createElement(eb,null),ab=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){this.props.unstable_onError?this.props.unstable_onError(r,u):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?z.createElement(rn.Provider,{value:this.props.routeContext},z.createElement(Ju.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lb({routeContext:r,match:u,children:s}){let o=z.useContext(La);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),z.createElement(rn.Provider,{value:r},s)}function ib(r,u=[],s=null,o=null,d=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let h=r,b=s?.errors;if(b!=null){let m=h.findIndex(x=>x.route.id&&b?.[x.route.id]!==void 0);zt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),h=h.slice(0,Math.min(h.length,m+1))}let M=!1,y=-1;if(s)for(let m=0;m<h.length;m++){let x=h[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=m),x.route.id){let{loaderData:k,errors:B}=s,q=x.route.loader&&!k.hasOwnProperty(x.route.id)&&(!B||B[x.route.id]===void 0);if(x.route.lazy||q){M=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((m,x,k)=>{let B,q=!1,j=null,N=null;s&&(B=b&&x.route.id?b[x.route.id]:void 0,j=x.route.errorElement||nb,M&&(y<0&&k===0?(z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,N=null):y===k&&(q=!0,N=x.route.hydrateFallbackElement||null)));let H=u.concat(h.slice(0,k+1)),Z=()=>{let X;return B?X=j:q?X=N:x.route.Component?X=z.createElement(x.route.Component,null):x.route.element?X=x.route.element:X=m,z.createElement(lb,{match:x,routeContext:{outlet:m,matches:H,isDataRoute:s!=null},children:X})};return s&&(x.route.ErrorBoundary||x.route.errorElement||k===0)?z.createElement(ab,{location:s.location,revalidation:s.revalidation,component:j,error:B,children:Z(),routeContext:{outlet:null,matches:H,isDataRoute:!0},unstable_onError:o}):Z()},null)}function Pu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rb(r){let u=z.useContext(La);return zt(u,Pu(r)),u}function ob(r){let u=z.useContext(br);return zt(u,Pu(r)),u}function ub(r){let u=z.useContext(rn);return zt(u,Pu(r)),u}function Fu(r){let u=ub(r),s=u.matches[u.matches.length-1];return zt(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function cb(){return Fu("useRouteId")}function sb(){let r=z.useContext(Ju),u=ob("useRouteError"),s=Fu("useRouteError");return r!==void 0?r:u.errors?.[s]}function fb(){let{router:r}=rb("useNavigate"),u=Fu("useNavigate"),s=z.useRef(!1);return M0(()=>{s.current=!0}),z.useCallback(async(d,h={})=>{Be(s.current,T0),s.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:u,...h}))},[r,u])}var c0={};function z0(r,u,s){!u&&!c0[r]&&(c0[r]=!0,Be(!1,s))}z.memo(db);function db({routes:r,future:u,state:s,unstable_onError:o}){return w0(r,void 0,s,o,u)}function Ha(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hb({basename:r="/",children:u=null,location:s,navigationType:o="POP",navigator:d,static:h=!1}){zt(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),M=z.useMemo(()=>({basename:b,navigator:d,static:h,future:{}}),[b,d,h]);typeof s=="string"&&(s=qa(s));let{pathname:y="/",search:m="",hash:x="",state:k=null,key:B="default"}=s,q=z.useMemo(()=>{let j=ln(y,b);return j==null?null:{location:{pathname:j,search:m,hash:x,state:k,key:B},navigationType:o}},[b,y,m,x,k,B,o]);return Be(q!=null,`<Router basename="${b}"> is not able to match the URL "${y}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:z.createElement(He.Provider,{value:M},z.createElement(Ql.Provider,{children:u,value:q}))}function mb({children:r,location:u}){return tb(Zu(r),u)}function Zu(r,u=[]){let s=[];return z.Children.forEach(r,(o,d)=>{if(!z.isValidElement(o))return;let h=[...u,d];if(o.type===z.Fragment){s.push.apply(s,Zu(o.props.children,h));return}zt(o.type===Ha,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Zu(o.props.children,h)),s.push(b)}),s}var dr="get",hr="application/x-www-form-urlencoded";function gr(r){return r!=null&&typeof r.tagName=="string"}function pb(r){return gr(r)&&r.tagName.toLowerCase()==="button"}function bb(r){return gr(r)&&r.tagName.toLowerCase()==="form"}function gb(r){return gr(r)&&r.tagName.toLowerCase()==="input"}function vb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function yb(r,u){return r.button===0&&(!u||u==="_self")&&!vb(r)}var cr=null;function xb(){if(cr===null)try{new FormData(document.createElement("form"),0),cr=!1}catch{cr=!0}return cr}var Sb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xu(r){return r!=null&&!Sb.has(r)?(Be(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hr}"`),null):r}function Ab(r,u){let s,o,d,h,b;if(bb(r)){let M=r.getAttribute("action");o=M?ln(M,u):null,s=r.getAttribute("method")||dr,d=Xu(r.getAttribute("enctype"))||hr,h=new FormData(r)}else if(pb(r)||gb(r)&&(r.type==="submit"||r.type==="image")){let M=r.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||M.getAttribute("action");if(o=y?ln(y,u):null,s=r.getAttribute("formmethod")||M.getAttribute("method")||dr,d=Xu(r.getAttribute("formenctype"))||Xu(M.getAttribute("enctype"))||hr,h=new FormData(M,r),!xb()){let{name:m,type:x,value:k}=r;if(x==="image"){let B=m?`${m}.`:"";h.append(`${B}x`,"0"),h.append(`${B}y`,"0")}else m&&h.append(m,k)}}else{if(gr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=dr,o=null,d=hr,b=r}return h&&d==="text/plain"&&(b=h,h=void 0),{action:o,method:s.toLowerCase(),encType:d,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wu(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Ob(r,u,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname=`_root.${s}`:u&&ln(o.pathname,u)==="/"?o.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function Eb(r,u){if(r.id in u)return u[r.id];try{let s=await import(r.module);return u[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Mb(r,u,s){let o=await Promise.all(r.map(async d=>{let h=u.routes[d.route.id];if(h){let b=await Eb(h,s);return b.links?b.links():[]}return[]}));return Rb(o.flat(1).filter(Tb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function s0(r,u,s,o,d,h){let b=(y,m)=>s[m]?y.route.id!==s[m].route.id:!0,M=(y,m)=>s[m].pathname!==y.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==y.params["*"];return h==="assets"?u.filter((y,m)=>b(y,m)||M(y,m)):h==="data"?u.filter((y,m)=>{let x=o.routes[y.route.id];if(!x||!x.hasLoader)return!1;if(b(y,m)||M(y,m))return!0;if(y.route.shouldRevalidate){let k=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function wb(r,u,{includeHydrateFallback:s}={}){return zb(r.map(o=>{let d=u.routes[o.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function zb(r){return[...new Set(r)]}function Db(r){let u={},s=Object.keys(r).sort();for(let o of s)u[o]=r[o];return u}function Rb(r,u){let s=new Set;return new Set(u),r.reduce((o,d)=>{let h=JSON.stringify(Db(d));return s.has(h)||(s.add(h),o.push({key:h,link:d})),o},[])}function D0(){let r=z.useContext(La);return Wu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Nb(){let r=z.useContext(br);return Wu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $u=z.createContext(void 0);$u.displayName="FrameworkContext";function R0(){let r=z.useContext($u);return Wu(r,"You must render this element inside a <HydratedRouter> element"),r}function Cb(r,u){let s=z.useContext($u),[o,d]=z.useState(!1),[h,b]=z.useState(!1),{onFocus:M,onBlur:y,onMouseEnter:m,onMouseLeave:x,onTouchStart:k}=u,B=z.useRef(null);z.useEffect(()=>{if(r==="render"&&b(!0),r==="viewport"){let N=Z=>{Z.forEach(X=>{b(X.isIntersecting)})},H=new IntersectionObserver(N,{threshold:.5});return B.current&&H.observe(B.current),()=>{H.disconnect()}}},[r]),z.useEffect(()=>{if(o){let N=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(N)}}},[o]);let q=()=>{d(!0)},j=()=>{d(!1),b(!1)};return s?r!=="intent"?[h,B,{}]:[h,B,{onFocus:Ll(M,q),onBlur:Ll(y,j),onMouseEnter:Ll(m,q),onMouseLeave:Ll(x,j),onTouchStart:Ll(k,q)}]:[!1,B,{}]}function Ll(r,u){return s=>{r&&r(s),s.defaultPrevented||u(s)}}function kb({page:r,...u}){let{router:s}=D0(),o=z.useMemo(()=>v0(s.routes,r,s.basename),[s.routes,r,s.basename]);return o?z.createElement(Ub,{page:r,matches:o,...u}):null}function _b(r){let{manifest:u,routeModules:s}=R0(),[o,d]=z.useState([]);return z.useEffect(()=>{let h=!1;return Mb(r,u,s).then(b=>{h||d(b)}),()=>{h=!0}},[r,u,s]),o}function Ub({page:r,matches:u,...s}){let o=Wn(),{manifest:d,routeModules:h}=R0(),{basename:b}=D0(),{loaderData:M,matches:y}=Nb(),m=z.useMemo(()=>s0(r,u,y,d,o,"data"),[r,u,y,d,o]),x=z.useMemo(()=>s0(r,u,y,d,o,"assets"),[r,u,y,d,o]),k=z.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let j=new Set,N=!1;if(u.forEach(Z=>{let X=d.routes[Z.route.id];!X||!X.hasLoader||(!m.some(P=>P.route.id===Z.route.id)&&Z.route.id in M&&h[Z.route.id]?.shouldRevalidate||X.hasClientLoader?N=!0:j.add(Z.route.id))}),j.size===0)return[];let H=Ob(r,b,"data");return N&&j.size>0&&H.searchParams.set("_routes",u.filter(Z=>j.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[H.pathname+H.search]},[b,M,o,d,m,u,r,h]),B=z.useMemo(()=>wb(x,d),[x,d]),q=_b(x);return z.createElement(z.Fragment,null,k.map(j=>z.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...s})),B.map(j=>z.createElement("link",{key:j,rel:"modulepreload",href:j,...s})),q.map(({key:j,link:N})=>z.createElement("link",{key:j,nonce:s.nonce,...N})))}function jb(...r){return u=>{r.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N0&&(window.__reactRouterVersion="7.9.3")}catch{}function Bb({basename:r,children:u,window:s}){let o=z.useRef();o.current==null&&(o.current=Tp({window:s,v5Compat:!0}));let d=o.current,[h,b]=z.useState({action:d.action,location:d.location}),M=z.useCallback(y=>{z.startTransition(()=>b(y))},[b]);return z.useLayoutEffect(()=>d.listen(M),[d,M]),z.createElement(hb,{basename:r,children:u,location:h.location,navigationType:h.action,navigator:d})}var C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k0=z.forwardRef(function({onClick:u,discover:s="render",prefetch:o="none",relative:d,reloadDocument:h,replace:b,state:M,target:y,to:m,preventScrollReset:x,viewTransition:k,...B},q){let{basename:j}=z.useContext(He),N=typeof m=="string"&&C0.test(m),H,Z=!1;if(typeof m=="string"&&N&&(H=m,N0))try{let at=new URL(window.location.href),Qt=m.startsWith("//")?new URL(at.protocol+m):new URL(m),Gt=ln(Qt.pathname,j);Qt.origin===at.origin&&Gt!=null?m=Gt+Qt.search+Qt.hash:Z=!0}catch{Be(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=$p(m,{relative:d}),[P,dt,F]=Cb(o,B),V=Yb(m,{replace:b,state:M,target:y,preventScrollReset:x,relative:d,viewTransition:k});function W(at){u&&u(at),at.defaultPrevented||V(at)}let st=z.createElement("a",{...B,...F,href:H||X,onClick:Z||h?u:W,ref:jb(q,dt),target:y,"data-discover":!N&&s==="render"?"true":void 0});return P&&!N?z.createElement(z.Fragment,null,st,z.createElement(kb,{page:X})):st});k0.displayName="Link";var Hb=z.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:o="",end:d=!1,style:h,to:b,viewTransition:M,children:y,...m},x){let k=Vl(b,{relative:m.relative}),B=Wn(),q=z.useContext(br),{navigator:j,basename:N}=z.useContext(He),H=q!=null&&Vb(k)&&M===!0,Z=j.encodeLocation?j.encodeLocation(k).pathname:k.pathname,X=B.pathname,P=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;s||(X=X.toLowerCase(),P=P?P.toLowerCase():null,Z=Z.toLowerCase()),P&&N&&(P=ln(P,N)||P);const dt=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let F=X===Z||!d&&X.startsWith(Z)&&X.charAt(dt)==="/",V=P!=null&&(P===Z||!d&&P.startsWith(Z)&&P.charAt(Z.length)==="/"),W={isActive:F,isPending:V,isTransitioning:H},st=F?u:void 0,at;typeof o=="function"?at=o(W):at=[o,F?"active":null,V?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Qt=typeof h=="function"?h(W):h;return z.createElement(k0,{...m,"aria-current":st,className:at,ref:x,style:Qt,to:b,viewTransition:M},typeof y=="function"?y(W):y)});Hb.displayName="NavLink";var qb=z.forwardRef(({discover:r="render",fetcherKey:u,navigate:s,reloadDocument:o,replace:d,state:h,method:b=dr,action:M,onSubmit:y,relative:m,preventScrollReset:x,viewTransition:k,...B},q)=>{let j=Gb(),N=Zb(M,{relative:m}),H=b.toLowerCase()==="get"?"get":"post",Z=typeof M=="string"&&C0.test(M),X=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let dt=P.nativeEvent.submitter,F=dt?.getAttribute("formmethod")||b;j(dt||P.currentTarget,{fetcherKey:u,method:F,navigate:s,replace:d,state:h,relative:m,preventScrollReset:x,viewTransition:k})};return z.createElement("form",{ref:q,method:H,action:N,onSubmit:o?y:X,...B,"data-discover":!Z&&r==="render"?"true":void 0})});qb.displayName="Form";function Lb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _0(r){let u=z.useContext(La);return zt(u,Lb(r)),u}function Yb(r,{target:u,replace:s,state:o,preventScrollReset:d,relative:h,viewTransition:b}={}){let M=Zl(),y=Wn(),m=Vl(r,{relative:h});return z.useCallback(x=>{if(yb(x,u)){x.preventDefault();let k=s!==void 0?s:Xl(y)===Xl(m);M(r,{replace:k,state:o,preventScrollReset:d,relative:h,viewTransition:b})}},[y,M,m,s,o,u,r,d,h,b])}var Xb=0,Qb=()=>`__${String(++Xb)}__`;function Gb(){let{router:r}=_0("useSubmit"),{basename:u}=z.useContext(He),s=cb();return z.useCallback(async(o,d={})=>{let{action:h,method:b,encType:M,formData:y,body:m}=Ab(o,u);if(d.navigate===!1){let x=d.fetcherKey||Qb();await r.fetch(x,s,d.action||h,{preventScrollReset:d.preventScrollReset,formData:y,body:m,formMethod:d.method||b,formEncType:d.encType||M,flushSync:d.flushSync})}else await r.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:y,body:m,formMethod:d.method||b,formEncType:d.encType||M,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,u,s])}function Zb(r,{relative:u}={}){let{basename:s}=z.useContext(He),o=z.useContext(rn);zt(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),h={...Vl(r||".",{relative:u})},b=Wn();if(r==null){h.search=b.search;let M=new URLSearchParams(h.search),y=M.getAll("index");if(y.some(x=>x==="")){M.delete("index"),y.filter(k=>k).forEach(k=>M.append("index",k));let x=M.toString();h.search=x?`?${x}`:""}}return(!r||r===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:an([s,h.pathname])),Xl(h)}function Vb(r,{relative:u}={}){let s=z.useContext(E0);zt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=_0("useViewTransitionState"),d=Vl(r,{relative:u});if(!s.isTransitioning)return!1;let h=ln(s.currentLocation.pathname,o)||s.currentLocation.pathname,b=ln(s.nextLocation.pathname,o)||s.nextLocation.pathname;return mr(d.pathname,b)!=null||mr(d.pathname,h)!=null}const U0="http://localhost:8000",j0=async(r,u={})=>{const s=await fetch(r,{credentials:"include",cache:"no-cache",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",...u.headers},...u}),o=await s.json();if(!s.ok)throw new Error(o.error||"Request failed");return o},Kb=r=>j0(`${U0}${r}`),Iu=(r,u)=>j0(`${U0}${r}`,{method:"POST",body:JSON.stringify(u)}),Jb=async(r,u)=>await Iu("/auth/login",{email:r,password:u}),Pb=async(r,u,s)=>await Iu("/auth/register",{username:r,email:u,password:s}),Fb=async()=>await Iu("/auth/logout"),B0=z.createContext(),tc=()=>{const r=z.useContext(B0);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},Wb=({children:r})=>{const[u,s]=z.useState(null),[o,d]=z.useState(!0);z.useEffect(()=>{h()},[]);const h=async()=>{try{const x=await Kb("/auth/me");console.log("Auth check successful:",x),s(x.user)}catch(x){console.log("Auth check failed:",x.message),s(null)}finally{d(!1)}},m={user:u,loading:o,login:async(x,k)=>{d(!0);try{const B=await Jb(x,k);return s(B.user),B}finally{d(!1)}},register:async(x,k,B)=>{d(!0);try{const q=await Pb(x,k,B);return s(q.user),q}finally{d(!1)}},logout:async()=>{d(!0);try{console.log("Logging out..."),await Fb(),console.log("Logout API call successful"),s(null),console.log("User state cleared")}finally{d(!1)}},isAuthenticated:!!u};return A.jsx(B0.Provider,{value:m,children:r})},$b="data:image/svg+xml,%3csvg%20width='1280'%20height='303'%20viewBox='0%200%201280%20303'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M799.742%20106L471%20303H1145L799.742%20106Z'%20fill='%23749DA1'/%3e%3cpath%20d='M800.077%20106L734%20303H1145L800.077%20106Z'%20fill='%23EB9191'/%3e%3cpath%20d='M0%20303L360.231%20116L689%20303H0Z'%20fill='%2376A6A1'/%3e%3cpath%20d='M312%20303L360.01%20116L689%20303H312Z'%20fill='%23F39A88'/%3e%3cpath%20d='M993.343%200L1268%20303H736L993.343%200Z'%20fill='%237DAE9D'/%3e%3cpath%20d='M993.274%200L1268%20303H961L993.274%200Z'%20fill='%23F6A57F'/%3e%3cpath%20d='M551.399%20142L744%20303H336L551.399%20142Z'%20fill='%238AB597'/%3e%3cpath%20d='M509%20303L551.441%20142L744%20303H509Z'%20fill='%23F6B178'/%3e%3cpath%20d='M1392%20303L1148.93%20126L909%20303H1392Z'%20fill='%239DBA8F'/%3e%3cpath%20d='M1392%20303L1149.28%20126L1121%20303H1392Z'%20fill='%23F1BF75'/%3e%3cpath%20d='M999%20303L811.249%20182L618%20303H999Z'%20fill='%23B4BE89'/%3e%3cpath%20d='M789%20303H999L811.022%20182L789%20303Z'%20fill='%23E8CD75'/%3e%3c/svg%3e",Kl="/assets/potara-logo-DdlKRYS8.png",ec="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgTSURBVHgB7d3/cePGGcbxV5n8n3MFhiuIOwhTQS4VhB3kUoF0FdipQHQFliugXMHZFQCu4M4VPMZ6wRFF4QV38YNaiN/PDOd0AEhJ5KPF7mKxawYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgCDd2BSRV7T8f2sfX3aafbm5udgZcUhvEb9vHZ71Uh30GXEoXuiG3BiytDdpGab4zYEltyLZK96l9vDO8mr8YDkL9ca/Y2Fml8MfU/QF+WPPv8SZllowH9Ro/yC6Apw21/xjKMDKMqwqkYm/B3vk9PhvKMBDGUD/8USsOpOIp+TudVxlen/zW9Kdu/04rC2QXwlv1950SxlINhLE+OuZcIItpZSuW9LXScZouRSgVdCaM3XFFB3JECA8eDWUYCKN6ji0ukBNCePC9oRwDH9S7nmOLCOQMITx4byjHwAdVOcefC+S9LWRECB813H3FFaWStB9I43xQ3w4856KBVGxo1UoXjt10z/XC+Ggoi+Kptc/7M89bPJBdCPfKC+H25DX2zrFbQ1naD+Vh7Ie1VCDnCGH3OtXAcypDWQYCdZf4/L1mCuRcITx6vQ/O8x4M5Qmh04QQKV7x+KQJgVQswc6VsskhPHrd2nn+2efiFciv4CeXHmMDqfxLd3VqkORfXeKqS6naD+e986F9ynydrEBmhjAc9yHz59md+xlQGMUhVr0BsExdIGsN+1Hp3TQhhKEakd0fOPA9NoYydQHyjAlBpfQSb/YQdj+DV/WoDWWTH55Rt6rKL21T3Gtit4smdFfhlcm/CrO1kZQ/ivxRM5xCRd/iug2UJJNGtcjvNjpWa8Z6nPw/AhouaxBC53yAe5to4LWzW8iJ389r0W8M5ZN/pWKWPjm97GYJAZ19xIwSBwujYPL7GoPKZqCn+5UXm79Hft/i1rAOGm79bm0l5PctVvYGXMuMEs3AvlXMRKY45K3q2bW7ublpDOshv3tnFfUt+T0CG8O6aPi6ctHD8+U3XLKur5fumiZ++nVgX+k3Lm2d7f+3N+SawvjLwL7S6419Ezg1b20q6GsKYzOw7x9WqK61X/XsejSsi9IGuBbbiJF/m0JlWAfljbIusiEgfzQ316HXQPlD/cNxRdYZ5V9x2RjKNSKEf5YwKrRbR353zqOhTCNDGG4NqKxg8kvF2UcCYaKRIXzUCk5xGl4yZJGhaRhBT/cgv7kQHiht0O69aFG/jq602CnPqkJ4oPTFlGox7d3lKH9KkNWG8JjiGMw68fdlybklXWsIjylWSerE3z0cVxnmMzKED28phKeUVocMQj16a5hG8bS0V557XUlpoLxSkoU5x9CI5SQ0YTaGtVP/smx96mv5Q52MEI6nWEruE96zWizw7lN+nZAQOuTfgnuKTvJTSlvrjhBmUHpdku6fA8VLdylq0SLMonhpNOWCAA0bDU9LdxpEriiMpLQuoDBI5HrPNhqeOcsL5b0Yt5dNsYvsXGu7mMU5X4XGLz9Wd8GkVZhIafXIsL+ya6S8TtuhN/D2at/EDAQygeK8N6FL4hdNs1fsq6wMvQhkhu7NIpgLUtoqDbXoQntyFMxaBHNWiYG87kaNR/FU/r3mqWPeK7Ywr/qNXkMgb6xwit07W4uzPlQ2TZjipGkfP3dff7E4TcgXuwJd0MLU0UM9E4/t+/FPw7CuhAtXGqauw3IqvN5e8fT+pktQadzSc3B0b2gIzoPmVxPIP138Wnbxp+lzuuC87x7/snn8rz1VTVqWo49ix/3xKbKxWFX4cunZZ5V2yr5rf66PdiGrD+MpxWvb4TGljvlT+yHMdo1csWUfTn2bhMO/dI+DJvG44HfnuUOvGQJZmW/bvhc/2AW8uTAe60qiTfcI4Uw9/YZGzTc2k/bn2Fn/HItrEEL8zSUaeW86jKeOTpOb7t+/Dxz+1RwfQFcq1rZu/27fiwfDsjTzIpc9r58yzrB0G7uAa5q51tM42yeHUbFUXOvp+SBUWR7tAv5qCBPP9wWvsunuBvZ9HPhep/9/Zy/ru3+z9DrwWE37uFgHOGGMV2L6Sq+vbYIzpWJYSOjOZqbYXXMc0Oro6+N9Vc+2Y6GuHN6Xh2u5OlUE+esKTqqwa7iuWBlwSgusVKrh2yzuDegj/2ax0cv/UipiNPnrCmY3ECgVx6NrJ/JKwcryDXXlXOw67xoRxshbVzCrr7E7BW+d3SzFewZhjBpne+5pOpSKlbOPUvEMwhg1zvbK8myd7ZSKSKN4z02f5L5GxcG+tKAxjWZYXFz+zWO0oJFH/aN3kvoaKRUxK03oa6RUxKzk39xVnXkepeJMaE0/8UannOtrvHW2f6QFnYcwPmmc7e5pWnGG3cp5rZ0hC2F80jjbK/N5peIPlIr5COOTxtneO8hWcQWBynmdnSEbYXzSONu/Ot3QNUz+6xxPqYhp5I9rrHuOvfWOpQWNWai/47s+OWZovOKdAXOQ0/F9csyOUhGLk7+MXNXtp1RcEA2Y535zth/6Gu/MtzNMwn3Tz3lXYUKJGPYN3QfdGCahZHzOC2MoGe/MxyjuGVAyPtc428MkpO+dfZSKmJ/82SWGVIZZcJp+rrE8lIpYhvJXf60MWEpGEBnFjWUpfY2ZyjAr6owv/Z5wDHVFLE/nF+uhVFwIJeNLv53ZT6m4EML40rlpg7nashDC+NJQGCkVF0QYX2oG9lEqLogwvuSVjJSKuCz1z0j2mRY0XkUbvLuTIM6ydBswiuLdgpUBAAAAAAAAAAAAAAAAAADgavwBzEUKuxRX6G4AAAAASUVORK5CYII=",H0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV6SURBVHgB7ZzvlaM2EMBn8/I928EqFZxTQbgKch2E68AdmK1gfRV4U8FuKjBXwe1VYFLBXiqY05hhEQKMBMj82fm9p4dsSwJrNCPNIAAQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBOFdcwMLABFv9UHptNHplhPxQ6eMjy83Nzc/YKHMVhC68yN9+FOniJMLLzp91elZCyUFoT8kAJ2OOJyTTjFr0+yZjUawBuygPvrJ3HyHfLRTyvg7ojBTiut94LwJlb/XGvIIwmW0EB4aRnTK2uE1onX5jU571ghbQxQIdaiTG8xQytoxRvtxg0B2IJTQ6LQ66VWnTxAA3W5iCeMJFzJ3BKVBCMHNRsM5v71rYbA5mqRD+NxPIgw4d8ajpQlX7wjrGg7w3tB/entNc9RxLUfjWrbwXmiw0RFMiGUiX6c2Ub/C9UigdLbu+4QguLNoZUUxp9/46/8hd/RS3Wbm2hbFpXR7n3X2CLlTuOVrXC+sDW8mCTzh+o88ci9x8DV3homaXCuCg9XJMfasu0U/Tujhj2DuvRdEsFawpzZgfalJpCwYZZWLLGE7dyrXLzRtD2ulrzZYQnDyuqmM0anOpgZL8/QN1gqWKxMfbdiZWoQedh/z+FJB4lhnX1SANYJV++vkOGHVlL1iD18DPSdgrM5DCibgFwiLaU7+catSWULe+yxJzXp8JCFEDuUXe4vVCcxjOeeR6VjeaWLHfIKlUZxgw6TMvxd0TsBz0IhgWJ2ROtbZG3XiljIbrPsTR7sD9efM1SRiNUyuYAJCmqaNkU/BjQ9G/rmlzBOUuzgKIp2OAzrx7Vp7msLBhBSEMvIvjnUiPn5t2hrDZkjxRxLUH1DOB/T9gcuRoO7AnTvP6xydkLEmZeSzrsLWaH5xaPOLFtZ5QwHmq87zxgNux9TG73D5vLdG+f9gIq6lEZln+TZBpEb+LyP/aORppfZgfG4zcWb5pvbXARoetWP5qGui5nJHo9zO+P5tteWzSNBlnqeeqIPSQxAbR0HY9zVO2L4hTXWc01wuTxreCO3Q+WBOzq3eMK9qPkJp7hQ0O22fHVZAiZH/AmvEVyO4TuEfuIZDYswjsgWv6LgvCgfeI1kMWHWSfKOgvW4eeZY/uphCj/bIgf2Ec5tnsBoFVY51zFBDBIFAK7oLI2BYgCPMCXScfK065k2aIH/IEkKv6G5Hm/O6p4GegTejnmnS/oYRsTrMeYB0tLmx2lQwN7C0w86jG+vbXDYwEGy+7ZrAQLC+lE5gjmCPCZvrRVan9doAxgLYYT1am8BAGoQw3/vdVocmnnVjq/PoT8eOdaMWAdDnCAaCAfbvBn9iCHOzFOmUaQfrd8+6ZJYo7K2sn1LIg3nFw4zFU0N3fK6mTiGHLRn6wCPmcwBdU2EyM50+ThU+d8Ya2TF4wqMvwfoDJy6QBuxxpAkUJ3icYFSMiz/1VWEWCAn1GS/v+MswX9PHiOPt3MN8dXRarBAIrGrFA4wAlhvLiqTG7HjrXFtL+MsTQgFWQwrOWyKnhIVtP2iZhhL4VeARa+7CG+wfhIS17GQJIYE1gHlQDOcsjBYtGGXZOyuwvru7l7M2Ntju/KWLnQ+6aBDGYao/e0EAwR43nhUNNpjyMVyJDgGQ37LcCdkXLJ8EwmsJBMuXrjT5IgdcqxlyAZtf1XDijhk0oWPpb+xbOr/QAAUTMqv3NbEm0BYZZf2UQfkuJjqeY0wtuwGpLgkvgnwLZ9RyOmrnX532S37hVlCwvimgi5NjuSL2FMHMmPWr5Hh0R5DvxqO3mfWZQEmLUsgf/01hpizinX4FPF8oKN/tp6AqnAzK0Ph5X6yYHUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQhH78BAg2NJUMz2ecAAAAAElFTkSuQmCC",q0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVWSURBVHgB7Z3rceM2FIWvM/m/7iDYCuJUEJWwqcBKBXEqMLeCOBXYW8FuKhC3AjkVSB3YqeAEGMJjCQAfIgGIoM43A49J8SVe3AcuHhIhhBBCCCGEEEIIIYQQQtoAoEwRMh+0QK51WevyqMsOPlv72UpIfqzWPOjyguHsdLkRkh6rQfeYxr0skCuZCVYbvuqiWg551eWLLnv7/7Uu5pzbwLHV1dXVZyFx0UK67TBzNTp8EBoz+TVw3p2QeJgXOkZAges8OecbwV8LmY7VJMTQBjT+bedc5y8h07Amy8W86NGRm9FAalVEWmq/2VYyEfi+rhIyDmOSUgjJXrtyrr0RcjoBk/eCiCmhgPnDEszfj5Kfytn+U7d59hIJfS0TLb61s94wfq+WyNgKdnNwr1dbnvVzvEqpBLSplgSgyQEeEqVNZZ/fNCc26E9vPaLU5DH8ts5KEhC4z4OMBO9prQ3GUV5KC8eR3k4SAT+geJQTQePrjMBPSQy3MVmjs/koNNqjDnbVko+PQw+0z2m0YNVxmPE//+jyLE3u8dnuV9L4rD/k+LveG6EX4bfQdFtErWUd91o796oHnHMN32S6DEprofFlUdtzP0g+fna2n2Um2EpjTPFtyyFPunzUGrEyUaX0YKPYv53dv0oJBGrYShIxVKNszd/0aJCSEVgNPeRFSiDwEpQkAn4wUQeOuUN7oLCLUZH0NfbOdUc3vLOYPpy/PXEUYaLJqpsSenHGZP0yxMSNYLSgzpGZyIFytv8zf2yNNrm/UIZ+r8vvkQX04XBjSgYmVzCROyz9ydneW63eSlhI3ySyFtlKES3HmEVQM2k/GE1Sgf0m1/hbgmd0K8RsotxOAo5VSSIC9wrxgrSRpzvE4JtMIGc7Kmd4+qHn872kCxjeWDnbkzQqp6D+dbaVpKPLN3yXRkh7SYvbwK1lAjkF5foAJQnoMalfbHYhqc+0JvWoskzV3pyC2kseVMv+z/plrSUPa2f7u0zknIJSkoaQthghVZIP1+w9SSnA7909uY/ohHsdppAqyQj8PGPSCDcJzsPXkhA0SdHsg1rgD4ObFJafBad9k6yH91y0aNNKSsPUrsNvIAsjoE3RKmPOYMKwP9woznZ3gGYQi3J2lzn1J2AaPskCQLjrvZaI5NYoN42iZBmYCNYNXNZSKvC7p5OF6LlAeCprJaXjRH5bKRj9/DcBIS0jmsXxkKwyBnwEsH5p5wgp6oSHswK/n0ZJYSA8v8uQbKxidvSX+eR8ubUUBsJDzCpZEvBzfqMH8J8DNLM0XGpZIjhucxQzI7BFSDssdZ4wjlNJRQQUHUJSslTgTxhQMlPQBA6XJyQDCgkorJC2FykkAwrIUCDcTrocIb2BGfdNock4UEgG+JPGZhE5oXttpstbBSbwQs7e5QF/oZI3imrrRQX+wh1nexlo/NG2RUiVXDqYQcMXTQQamtD2MgctnwXwc2bZfACayLPN1O3AlaDfgT+FcyUZsGZ31yKkB1xi0NAFMvupHi0ypm453RQxsS/u0D8k6/FF02XeNrl6S1PXAxL7qR4zZ6iE9APfT60lAlZAmw4BGS26ETIM+H5qUt4P/Yt8UIvGgmPfMap/ygroqUdAJg2khIwDE9bxw/t6el3LtTGiiwH8oc7VgHOGCMjAdlEs4PdPbXqOvR8goBolTnmZO/ADAOV8PlRAOwooIfC7Pe7s/lMEtBaSFvhZis1AAZnPTVuMfigXcGYkDtCgOwroDCD8KwAuDBLmANqzCo8U0IzA8Zwj+h/LbH7j8BC8ryVUF/0bF4QQQgghhBBCCCGEEEIIIYQQQgghZBL/Aya2gqNT39qzAAAAAElFTkSuQmCC",L0="data:image/svg+xml,%3csvg%20width='621'%20height='21'%20viewBox='0%200%20621%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M615.5%2010.0752C593.855%206.8826%20574.314%202.50625%20549.212%200.820284C460.677%20-3.7713%20452.56%2012.2992%20398.447%2014.7744C378.305%2014.0928%20367.482%209.0349%20352.751%206.16517C329.903%200.569179%20292.475%20-1.58312%20263.915%202.86497C237.61%206.45214%20219.573%2013.3395%20189.059%2015.1331C145.768%2016.4962%20122.62%200.999641%2066.5529%203.5824C49.4171%203.36717%20-22.7337%2015.4201%207.17884%2018.9355C18.1518%2019.9399%2022.5109%2017.2854%2028.3731%2015.6712C35.2876%2013.9493%2042.8033%2012.371%2051.0706%2011.0437C101.276%202.64974%20132.841%2021.6976%20181.994%2020.9802C257.753%2020.6215%20279.097%20-7.25085%20352.751%2014.7026C436.326%2035.0419%20468.794%20-4.48873%20559.433%208.20985C573.412%2010.2187%20586.339%2012.6221%20600.018%2014.7026C613.246%2016.9267%20629.78%2012.4068%20615.5%2010.0752Z'%20fill='%23749DA1'/%3e%3c/svg%3e";function nc(){const r=Zl(),{user:u,logout:s,isAuthenticated:o}=tc(),d=async()=>{try{await s(),r("/")}catch(h){console.error("Logout failed:",h)}};return A.jsxs("header",{className:"top-0 left-0 right-0 z-50 h-20 bg-beige flex items-center px-5",children:[A.jsx("a",{href:"/",children:A.jsx("img",{className:"w-32",src:Kl,alt:"Potara Logo"})}),A.jsx("div",{className:"ml-auto flex items-center gap-4",children:o?A.jsxs(A.Fragment,{children:[A.jsxs("span",{className:"almost-black font-unkempt text-lg",children:["Hello, ",u?.username,"!"]}),A.jsx("button",{onClick:d,className:"bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition",children:"Log Out"})]}):A.jsx("button",{onClick:()=>r("/sign-up"),className:"bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer",children:"Sign Up / Log In"})})]})}function Y0(){return A.jsxs("div",{className:"font-unkempt text-beige text-2xl bg-almostblack w-full h-25 flex flex-row place-content-evenly gap-50 place-content-center items-center",children:[A.jsx("p",{children:"Made with <3"}),A.jsx("a",{href:"/",children:A.jsx("img",{className:"max-w-40 h-auto",src:Kl})}),A.jsx("p",{children:"© 2025 Potara"})]})}function Ib(){const r=Zl();return A.jsx(A.Fragment,{children:A.jsxs("div",{className:"relative h-screen overflow-hidden",children:[A.jsx(nc,{}),A.jsxs("div",{className:"flex flex-col items-center justify-start pt-36",children:[A.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[A.jsx("h2",{className:"almost-black text-4xl",children:"Welcome to"}),A.jsx("img",{src:ec,alt:"Star",className:"absolute -top-18 -left-16 w-38 h-38 animate-tilt-snap-2"}),A.jsx("img",{src:H0,alt:"Swirl",className:"absolute top-[30px] -left-26 w-24 h-24 animate-tilt-snap-2"}),A.jsx("img",{src:Kl,alt:"Potara Logo",className:"w-96"}),A.jsx("img",{src:q0,alt:"Heart",className:"absolute bottom-[44px] -right-25 w-24 h-24 animate-tilt-snap-2"}),A.jsxs("h1",{className:"almost-black tracking-widest text-4xl mb-6",children:["Make drawing ",A.jsx("a",{className:"tracking-[6px]",children:"simple"}),"."]}),A.jsx("img",{src:L0,alt:"Squiggle",className:"absolute bottom-[44px] -right-[-36px] w-24 h-26"}),A.jsx("button",{className:`px-8 py-5 bg-white text-black text-4xl rounded-3xl shadow-md hover:bg-sillyyellow
                    transition-transform duration-200 ease-in-out transform hover:scale-105 font-unkempt cursor-pointer`,onClick:()=>r("/start"),children:"Get Started"})]}),A.jsx("img",{src:$b,alt:"Mountains",className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] z-0"})]})]})})}const tg="/assets/potara-symbol-CghQcv_w.png";function eg({referenceData:r,currentImageType:u}){const s=z.useRef(null),o=z.useRef(null),[d,h]=z.useState("#000000"),[b,M]=z.useState(5),[y,m]=z.useState(!1),[x,k]=z.useState("pen"),B=32,q=.18,j=.58,N=["#000000","#FFFFFF","#808080","#FF0000","#FFA500","#FFFF00","#00FF00","#0000FF","#A020F0","#FF8DA1","#895129"];z.useEffect(()=>{const V=s.current;if(!V)return;const W=V.getContext("2d");V.width=800,V.height=500,W.lineCap="round",W.lineJoin="round",W.lineWidth=b,W.strokeStyle=d,o.current={canvas:V,ctx:W}},[]),z.useEffect(()=>{const V=s.current;if(!V)return;const W=new Image;W.src=tg,W.onload=()=>{const st=Math.min(B/W.width,B/W.height,1),at=Math.max(1,Math.round(W.width*st)),Qt=Math.max(1,Math.round(W.height*st)),Gt=document.createElement("canvas");Gt.width=at,Gt.height=Qt,Gt.getContext("2d").drawImage(W,0,0,at,Qt);const Ht=Gt.toDataURL("image/png"),qe=Math.round(at*q),Le=Math.round(Qt*j);V.style.cursor=`url(${Ht}) ${qe} ${Le}, crosshair`}},[]),z.useEffect(()=>{if(!o.current)return;const{ctx:V}=o.current;V.strokeStyle=d,V.lineWidth=b},[d,b]);const H=V=>{if(!o.current)return;m(!0);const{canvas:W,ctx:st}=o.current,at=W.getBoundingClientRect();st.globalCompositeOperation=x==="eraser"?"destination-out":"source-over",st.beginPath(),st.moveTo(V.clientX-at.left,V.clientY-at.top)},Z=V=>{if(!y||!o.current)return;const{canvas:W,ctx:st}=o.current,at=W.getBoundingClientRect();st.lineTo(V.clientX-at.left,V.clientY-at.top),st.stroke()},X=()=>m(!1),P=()=>{if(!o.current)return;const{canvas:V,ctx:W}=o.current;W.clearRect(0,0,V.width,V.height)},dt=()=>{const V=s.current;if(!V)return;const W=document.createElement("a");W.download="drawing.png",W.href=V.toDataURL("image/png"),W.click()},F=()=>{k(V=>V==="eraser"?"pen":"eraser")};return A.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-[900px] px-4",children:[A.jsx("div",{className:"rounded-xl border border-gray-200 bg-white/90 p-4 shadow-sm mb-3",children:A.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-sm font-medium text-gray-600 mb-2 block font-unkempt",children:"Colors:"}),A.jsx("div",{className:"flex gap-2 flex-wrap",children:N.map(V=>A.jsx("button",{onClick:()=>{h(V),k("pen")},className:`w-6 h-6 rounded border-2 ${d===V&&x==="pen"?"border-gray-800":"border-gray-300 hover:border-gray-500"}`,style:{backgroundColor:V},"aria-label":`Pick ${V}`},V))})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-sm font-medium text-gray-600 mb-2 block font-unkempt",children:"Brush Size:"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("input",{type:"range",min:"1",max:"30",value:b,onChange:V=>M(Number(V.target.value)),className:"w-24"}),A.jsxs("span",{className:"text-sm text-gray-500 w-10 font-unkempt",children:[b,"px"]})]})]}),A.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[A.jsx("button",{onClick:F,className:`px-3 py-2 rounded-lg border ${x==="eraser"?"bg-[#EB9191] text-white border-gray-900 font-unkempt":"bg-white text-gray-800 border-gray-300 hover:bg-gray-50 font-unkempt"}`,title:"Toggle Eraser",children:"Eraser"}),A.jsx("button",{onClick:P,className:"px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-unkempt",title:"Clear",children:"Clear"}),A.jsx("button",{onClick:dt,className:"px-3 py-2 rounded-lg border bg-black text-white border-gray-300 hover:bg-gray-700 font-unkempt",title:"Download PNG",children:"Download"})]})]})}),A.jsx("div",{className:"rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white",children:A.jsx("canvas",{ref:s,width:800,height:500,className:"block w-full h-auto",onMouseDown:H,onMouseMove:Z,onMouseUp:X,onMouseLeave:X})}),A.jsx("p",{className:"text-xs text-gray-500 mt-2 mb-8 text-center",children:"Pick a color to draw. Toggle Eraser to remove mistakes. Clear to restart. Download to save your masterpiece!"})]})}const ng="/assets/uploadImage-DnXKGKUs.svg",ag="data:image/svg+xml,%3csvg%20width='108'%20height='108'%20viewBox='0%200%20108%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M48.8842%2047.5769C49.9926%2048.6001%2051.9821%2048.3727%2052.6358%2046.9801C53.2326%2045.0759%2050.3621%2041.3811%2049.7368%2039.2211C46.2126%2031.4906%2042.6031%2023.7885%2038.88%2016.1432C37.7431%2013.5285%2033.1673%2014.978%2034.3894%2017.8201C39.42%2027.6253%2043.6263%2037.9422%2048.8842%2047.5769ZM69.12%2070.5127C67.1305%2067.8127%2063.1515%2070.4843%2065.2831%2073.3264C68.1252%2080.6306%2070.4273%2088.1053%2073.1558%2095.4664C74.0368%2098.1664%2078.7263%2097.2285%2077.7884%2094.2727C73.0705%2081.1422%2070.7968%2073.7243%2069.12%2070.5127ZM51.1863%2066.4485C49.3673%2067.4432%2049.0263%2070.0011%2047.9179%2071.6495C44.3084%2078.8685%2040.4715%2085.9453%2036.6631%2093.0506C36.0663%2094.159%2036.5494%2095.4664%2037.6294%2096.0632C38.6526%2096.6317%2040.2158%2096.4895%2040.8126%2095.3527C47.0652%2083.7285%2050.561%2076.7938%2053.6305%2070.3706C55.3073%2068.4948%2053.7158%2065.6527%2051.1863%2066.4485ZM66.7326%2046.5253C71.5073%2035.5548%2075.8842%2027.7959%2083.1031%2014.2959C84.4958%2011.7948%2080.3747%209.60639%2078.9821%2011.9938C73.2979%2022.8222%2067.4147%2033.5938%2062.8673%2044.9338C61.8726%2047.2359%2065.7947%2048.8274%2066.7326%2046.5253ZM44.4221%2055.3643C38.8515%2054.1422%2033.0536%2054.2274%2027.3694%2053.7727C21.3158%2053.4032%2015.2336%2053.0906%209.17997%2052.5506C7.95786%2052.4369%206.70733%2053.2611%206.62207%2054.5685C6.84944%2058.5759%2013.9831%2056.9559%2016.7968%2057.638C25.5221%2058.2632%2034.3326%2058.2348%2043.0294%2059.2864C45.8147%2060.2527%2047.1789%2056.2738%2044.4221%2055.3643ZM98.9052%2054.398C91.9137%2054.6253%2084.9221%2054.8811%2077.9589%2055.3643C76.2536%2055.6485%2074.321%2055.2222%2072.7863%2056.0748C71.621%2056.9559%2072.0189%2058.7748%2073.2694%2059.3716C81.8526%2059.8832%2090.6631%2058.718%2099.3031%2058.7464C102.401%2058.6611%20101.747%2054.199%2098.9052%2054.398Z'%20fill='white'/%3e%3c/svg%3e",lg="/assets/lookingAtPhoto-pjYxb54B.png",ig="/assets/bird1-Br73LA4r.png",rg="/assets/bird2-DDiqMz0t.png";function Bt(r,u){u===void 0&&(u={});var s=u.insertAt;if(r&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",s==="top"&&o.firstChild?o.insertBefore(d,o.firstChild):o.appendChild(d),d.styleSheet?d.styleSheet.cssText=r:d.appendChild(document.createTextNode(r))}}Bt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var je=function(){return je=Object.assign||function(r){for(var u,s=1,o=arguments.length;s<o;s++)for(var d in u=arguments[s])Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d]);return r},je.apply(this,arguments)};function pr(r){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},pr(r)}var og=/^\s+/,ug=/\s+$/;function J(r,u){if(u=u||{},(r=r||"")instanceof J)return r;if(!(this instanceof J))return new J(r,u);var s=function(o){var d={r:0,g:0,b:0},h=1,b=null,M=null,y=null,m=!1,x=!1;typeof o=="string"&&(o=function(j){j=j.replace(og,"").replace(ug,"").toLowerCase();var N,H=!1;if(Vu[j])j=Vu[j],H=!0;else if(j=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(N=we.rgb.exec(j))?{r:N[1],g:N[2],b:N[3]}:(N=we.rgba.exec(j))?{r:N[1],g:N[2],b:N[3],a:N[4]}:(N=we.hsl.exec(j))?{h:N[1],s:N[2],l:N[3]}:(N=we.hsla.exec(j))?{h:N[1],s:N[2],l:N[3],a:N[4]}:(N=we.hsv.exec(j))?{h:N[1],s:N[2],v:N[3]}:(N=we.hsva.exec(j))?{h:N[1],s:N[2],v:N[3],a:N[4]}:(N=we.hex8.exec(j))?{r:me(N[1]),g:me(N[2]),b:me(N[3]),a:b0(N[4]),format:H?"name":"hex8"}:(N=we.hex6.exec(j))?{r:me(N[1]),g:me(N[2]),b:me(N[3]),format:H?"name":"hex"}:(N=we.hex4.exec(j))?{r:me(N[1]+""+N[1]),g:me(N[2]+""+N[2]),b:me(N[3]+""+N[3]),a:b0(N[4]+""+N[4]),format:H?"name":"hex8"}:(N=we.hex3.exec(j))?{r:me(N[1]+""+N[1]),g:me(N[2]+""+N[2]),b:me(N[3]+""+N[3]),format:H?"name":"hex"}:!1}(o)),pr(o)=="object"&&(nn(o.r)&&nn(o.g)&&nn(o.b)?(k=o.r,B=o.g,q=o.b,d={r:255*Mt(k,255),g:255*Mt(B,255),b:255*Mt(q,255)},m=!0,x=String(o.r).substr(-1)==="%"?"prgb":"rgb"):nn(o.h)&&nn(o.s)&&nn(o.v)?(b=Yl(o.s),M=Yl(o.v),d=function(j,N,H){j=6*Mt(j,360),N=Mt(N,100),H=Mt(H,100);var Z=Math.floor(j),X=j-Z,P=H*(1-N),dt=H*(1-X*N),F=H*(1-(1-X)*N),V=Z%6,W=[H,dt,P,P,F,H][V],st=[F,H,H,dt,P,P][V],at=[P,P,F,H,H,dt][V];return{r:255*W,g:255*st,b:255*at}}(o.h,b,M),m=!0,x="hsv"):nn(o.h)&&nn(o.s)&&nn(o.l)&&(b=Yl(o.s),y=Yl(o.l),d=function(j,N,H){var Z,X,P;function dt(W,st,at){return at<0&&(at+=1),at>1&&(at-=1),at<1/6?W+6*(st-W)*at:at<.5?st:at<2/3?W+(st-W)*(2/3-at)*6:W}if(j=Mt(j,360),N=Mt(N,100),H=Mt(H,100),N===0)Z=X=P=H;else{var F=H<.5?H*(1+N):H+N-H*N,V=2*H-F;Z=dt(V,F,j+1/3),X=dt(V,F,j),P=dt(V,F,j-1/3)}return{r:255*Z,g:255*X,b:255*P}}(o.h,b,y),m=!0,x="hsl"),o.hasOwnProperty("a")&&(h=o.a));var k,B,q;return h=X0(h),{ok:m,format:o.format||x,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:h}}(r);this._originalInput=r,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=u.format||s.format,this._gradientType=u.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function f0(r,u,s){r=Mt(r,255),u=Mt(u,255),s=Mt(s,255);var o,d,h=Math.max(r,u,s),b=Math.min(r,u,s),M=(h+b)/2;if(h==b)o=d=0;else{var y=h-b;switch(d=M>.5?y/(2-h-b):y/(h+b),h){case r:o=(u-s)/y+(u<s?6:0);break;case u:o=(s-r)/y+2;break;case s:o=(r-u)/y+4}o/=6}return{h:o,s:d,l:M}}function d0(r,u,s){r=Mt(r,255),u=Mt(u,255),s=Mt(s,255);var o,d,h=Math.max(r,u,s),b=Math.min(r,u,s),M=h,y=h-b;if(d=h===0?0:y/h,h==b)o=0;else{switch(h){case r:o=(u-s)/y+(u<s?6:0);break;case u:o=(s-r)/y+2;break;case s:o=(r-u)/y+4}o/=6}return{h:o,s:d,v:M}}function h0(r,u,s,o){var d=[De(Math.round(r).toString(16)),De(Math.round(u).toString(16)),De(Math.round(s).toString(16))];return o&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function m0(r,u,s,o){return[De(Q0(o)),De(Math.round(r).toString(16)),De(Math.round(u).toString(16)),De(Math.round(s).toString(16))].join("")}function cg(r,u){u=u===0?0:u||10;var s=J(r).toHsl();return s.s-=u/100,s.s=vr(s.s),J(s)}function sg(r,u){u=u===0?0:u||10;var s=J(r).toHsl();return s.s+=u/100,s.s=vr(s.s),J(s)}function fg(r){return J(r).desaturate(100)}function dg(r,u){u=u===0?0:u||10;var s=J(r).toHsl();return s.l+=u/100,s.l=vr(s.l),J(s)}function hg(r,u){u=u===0?0:u||10;var s=J(r).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-u/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-u/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-u/100*255))),J(s)}function mg(r,u){u=u===0?0:u||10;var s=J(r).toHsl();return s.l-=u/100,s.l=vr(s.l),J(s)}function pg(r,u){var s=J(r).toHsl(),o=(s.h+u)%360;return s.h=o<0?360+o:o,J(s)}function bg(r){var u=J(r).toHsl();return u.h=(u.h+180)%360,J(u)}function p0(r,u){if(isNaN(u)||u<=0)throw new Error("Argument to polyad must be a positive number");for(var s=J(r).toHsl(),o=[J(r)],d=360/u,h=1;h<u;h++)o.push(J({h:(s.h+h*d)%360,s:s.s,l:s.l}));return o}function gg(r){var u=J(r).toHsl(),s=u.h;return[J(r),J({h:(s+72)%360,s:u.s,l:u.l}),J({h:(s+216)%360,s:u.s,l:u.l})]}function vg(r,u,s){u=u||6,s=s||30;var o=J(r).toHsl(),d=360/s,h=[J(r)];for(o.h=(o.h-(d*u>>1)+720)%360;--u;)o.h=(o.h+d)%360,h.push(J(o));return h}function yg(r,u){u=u||6;for(var s=J(r).toHsv(),o=s.h,d=s.s,h=s.v,b=[],M=1/u;u--;)b.push(J({h:o,s:d,v:h})),h=(h+M)%1;return b}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,u,s,o=this.toRgb();return r=o.r/255,u=o.g/255,s=o.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(r){return this._a=X0(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=d0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=d0(this._r,this._g,this._b),u=Math.round(360*r.h),s=Math.round(100*r.s),o=Math.round(100*r.v);return this._a==1?"hsv("+u+", "+s+"%, "+o+"%)":"hsva("+u+", "+s+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var r=f0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=f0(this._r,this._g,this._b),u=Math.round(360*r.h),s=Math.round(100*r.s),o=Math.round(100*r.l);return this._a==1?"hsl("+u+", "+s+"%, "+o+"%)":"hsla("+u+", "+s+"%, "+o+"%, "+this._roundA+")"},toHex:function(r){return h0(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(u,s,o,d,h){var b=[De(Math.round(u).toString(16)),De(Math.round(s).toString(16)),De(Math.round(o).toString(16)),De(Q0(d))];return h&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)&&b[3].charAt(0)==b[3].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Mt(this._r,255))+"%",g:Math.round(100*Mt(this._g,255))+"%",b:Math.round(100*Mt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Mt(this._r,255))+"%, "+Math.round(100*Mt(this._g,255))+"%, "+Math.round(100*Mt(this._b,255))+"%)":"rgba("+Math.round(100*Mt(this._r,255))+"%, "+Math.round(100*Mt(this._g,255))+"%, "+Math.round(100*Mt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(xg[h0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var u="#"+m0(this._r,this._g,this._b,this._a),s=u,o=this._gradientType?"GradientType = 1, ":"";if(r){var d=J(r);s="#"+m0(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+u+",endColorstr="+s+")"},toString:function(r){var u=!!r;r=r||this._format;var s=!1,o=this._a<1&&this._a>=0;return u||!o||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(s=this.toRgbString()),r==="prgb"&&(s=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(s=this.toHexString()),r==="hex3"&&(s=this.toHexString(!0)),r==="hex4"&&(s=this.toHex8String(!0)),r==="hex8"&&(s=this.toHex8String()),r==="name"&&(s=this.toName()),r==="hsl"&&(s=this.toHslString()),r==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(r,u){var s=r.apply(null,[this].concat([].slice.call(u)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(dg,arguments)},brighten:function(){return this._applyModification(hg,arguments)},darken:function(){return this._applyModification(mg,arguments)},desaturate:function(){return this._applyModification(cg,arguments)},saturate:function(){return this._applyModification(sg,arguments)},greyscale:function(){return this._applyModification(fg,arguments)},spin:function(){return this._applyModification(pg,arguments)},_applyCombination:function(r,u){return r.apply(null,[this].concat([].slice.call(u)))},analogous:function(){return this._applyCombination(vg,arguments)},complement:function(){return this._applyCombination(bg,arguments)},monochromatic:function(){return this._applyCombination(yg,arguments)},splitcomplement:function(){return this._applyCombination(gg,arguments)},triad:function(){return this._applyCombination(p0,[3])},tetrad:function(){return this._applyCombination(p0,[4])}},J.fromRatio=function(r,u){if(pr(r)=="object"){var s={};for(var o in r)r.hasOwnProperty(o)&&(s[o]=o==="a"?r[o]:Yl(r[o]));r=s}return J(r,u)},J.equals=function(r,u){return!(!r||!u)&&J(r).toRgbString()==J(u).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(r,u,s){s=s===0?0:s||50;var o=J(r).toRgb(),d=J(u).toRgb(),h=s/100;return J({r:(d.r-o.r)*h+o.r,g:(d.g-o.g)*h+o.g,b:(d.b-o.b)*h+o.b,a:(d.a-o.a)*h+o.a})},J.readability=function(r,u){var s=J(r),o=J(u);return(Math.max(s.getLuminance(),o.getLuminance())+.05)/(Math.min(s.getLuminance(),o.getLuminance())+.05)},J.isReadable=function(r,u,s){var o,d,h=J.readability(r,u);switch(d=!1,(o=function(b){var M,y;return M=((b=b||{level:"AA",size:"small"}).level||"AA").toUpperCase(),y=(b.size||"small").toLowerCase(),M!=="AA"&&M!=="AAA"&&(M="AA"),y!=="small"&&y!=="large"&&(y="small"),{level:M,size:y}}(s)).level+o.size){case"AAsmall":case"AAAlarge":d=h>=4.5;break;case"AAlarge":d=h>=3;break;case"AAAsmall":d=h>=7}return d},J.mostReadable=function(r,u,s){var o,d,h,b,M=null,y=0;d=(s=s||{}).includeFallbackColors,h=s.level,b=s.size;for(var m=0;m<u.length;m++)(o=J.readability(r,u[m]))>y&&(y=o,M=J(u[m]));return J.isReadable(r,M,{level:h,size:b})||!d?M:(s.includeFallbackColors=!1,J.mostReadable(r,["#fff","#000"],s))};var Vu=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},xg=J.hexNames=function(r){var u={};for(var s in r)r.hasOwnProperty(s)&&(u[r[s]]=s);return u}(Vu);function X0(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Mt(r,u){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(r)&&(r="100%");var s=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(r);return r=Math.min(u,Math.max(0,parseFloat(r))),s&&(r=parseInt(r*u,10)/100),Math.abs(r-u)<1e-6?1:r%u/parseFloat(u)}function vr(r){return Math.min(1,Math.max(0,r))}function me(r){return parseInt(r,16)}function De(r){return r.length==1?"0"+r:""+r}function Yl(r){return r<=1&&(r=100*r+"%"),r}function Q0(r){return Math.round(255*parseFloat(r)).toString(16)}function b0(r){return me(r)/255}var Cn,sr,fr,we=(sr="[\\s|\\(]+("+(Cn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")\\s*\\)?",fr="[\\s|\\(]+("+Cn+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")\\s*\\)?",{CSS_UNIT:new RegExp(Cn),rgb:new RegExp("rgb"+sr),rgba:new RegExp("rgba"+fr),hsl:new RegExp("hsl"+sr),hsla:new RegExp("hsla"+fr),hsv:new RegExp("hsv"+sr),hsva:new RegExp("hsva"+fr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function nn(r){return!!we.CSS_UNIT.exec(r)}var Sg=function(r,u){var s=(typeof r=="string"?parseInt(r):r)||0;if(s>=-5&&s<=5){var o=s,d=parseFloat(u),h=d+o*(d/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:u}},Ag=function(r,u){var s=r||{},o="";switch(u){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var d={};if(s.fontSize){var h=s.fontSize;d=function(b,M){var y={};for(var m in b)Object.prototype.hasOwnProperty.call(b,m)&&M.indexOf(m)<0&&(y[m]=b[m]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function"){var x=0;for(m=Object.getOwnPropertySymbols(b);x<m.length;x++)M.indexOf(m[x])<0&&Object.prototype.propertyIsEnumerable.call(b,m[x])&&(y[m[x]]=b[m[x]])}return y}(s,["fontSize"]),o=h}return{fontSize:o,styles:d}},Og={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Eg=function(r){var u=r.className,s=r.text,o=r.textColor,d=r.staticText,h=r.style;return s?ze.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(u||"").trim(),style:je(je(je({},d&&Og),o&&{color:o,mixBlendMode:"unset"}),h&&h)},typeof s=="string"&&s.length?s:"loading"):null},G0="rgb(50, 205, 50)";function Tg(r,u){if(u===void 0&&(u=0),r.length===0)throw new Error("Input array cannot be empty!");var s=[];return function o(d,h){return h===void 0&&(h=0),s.push.apply(s,d),s.length<h&&o(s,h),s.slice(0,h)}(r,u)}Bt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);J(G0).toRgb();Array.from({length:4},function(r,u){return"--atom-phase".concat(u+1,"-rgb")});Bt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var Ba=Array.from({length:4},function(r,u){return"--commet-phase".concat(u+1,"-color")}),Mg=function(r){var u,s=Ag(r?.style,r?.size),o=s.styles,d=s.fontSize,h=r?.easing,b=Sg(r?.speedPlus,"1.2s").animationPeriod,M=function(y){var m={};if(y instanceof Array){for(var x=Tg(y,Ba.length),k=0;k<x.length&&!(k>=4);k++)m[Ba[k]]=x[k];return m}try{if(typeof y!="string")throw new Error("Color String expected");for(var B=0;B<Ba.length;B++)m[Ba[B]]=y}catch(q){for(q instanceof Error?console.warn("[".concat(q.message,']: Received "').concat(typeof y,'" instead with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y)," received in <Commet /> indicator cannot be processed. Using default instead!")),B=0;B<Ba.length;B++)m[Ba[B]]=G0}return m}((u=r?.color)!==null&&u!==void 0?u:"");return ze.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:je(je(je(je(je({},d&&{fontSize:d}),b&&{"--rli-animation-duration":b}),h&&{"--rli-animation-function":h}),M),o),role:"status","aria-live":"polite","aria-label":"Loading"},ze.createElement("span",{className:"rli-d-i-b commet-indicator"},ze.createElement("span",{className:"rli-d-i-b commet-box"},ze.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),ze.createElement("span",{className:"rli-d-i-b  commetball-box"})),ze.createElement("span",{className:"rli-d-i-b commet-box"},ze.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),ze.createElement("span",{className:"rli-d-i-b commetball-box"})),ze.createElement(Eg,{className:"commet-text",text:r?.text,textColor:r?.textColor})))};Bt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--OP-annulus-phase".concat(u+1,"-color")});function Qu(r){return r&&r.Math===Math&&r}Bt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Qu(typeof window=="object"&&window)||Qu(typeof self=="object"&&self)||Qu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,u){return"--OP-dotted-phase".concat(u+1,"-color")});Bt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--OP-spokes-phase".concat(u+1,"-color")});Bt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(r,u){return"--OP-annulus-dual-sectors-phase".concat(u+1,"-color")});Bt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return["--OP-annulus-track-phase".concat(u+1,"-color"),"--OP-annulus-sector-phase".concat(u+1,"-color")]});Bt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--four-square-phase".concat(u+1,"-color")});Bt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--mosaic-phase".concat(u+1,"-color")});Bt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--riple-phase".concat(u+1,"-color")});Bt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--TD-pulsate-phase".concat(u+1,"-color")});Bt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--TD-brick-stack-phase".concat(u+1,"-color")});Bt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--TD-bob-phase".concat(u+1,"-color")});Bt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--TD-bounce-phase".concat(u+1,"-color")});Bt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--shape-phase".concat(u+1,"-color")});Bt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--trophySpin-phase".concat(u+1,"-color")});Bt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--slab-phase".concat(u+1,"-color")});Bt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(r,u){return"--life-line-phase".concat(u+1,"-color")});function wg(){const[r,u]=z.useState(null),[s,o]=z.useState(null),[d,h]=z.useState("original"),[b,M]=z.useState(!1),y=()=>{if(!s)return null;switch(d){case"original":return s.originalImageUrl;case"shapes":return s.shapeImageUrl;case"outlines":return s.outlineImageUrl;default:return s.originalImageUrl}},m=async x=>{const k=x.target.files[0];if(!k)return;const B=URL.createObjectURL(k);u(B),M(!0);try{M(!0);const q=new FormData;q.append("image",k);const N=await fetch("http://localhost:8000/upload_ref",{method:"POST",body:q,credentials:"include"});if(!N.ok)throw new Error("Failed to upload and process image");const H=await N.json();o(H),h("original")}catch(q){console.error("Upload error:",q)}finally{M(!1)}};return A.jsxs(A.Fragment,{children:[A.jsx(nc,{}),A.jsxs("main",{className:"",children:[A.jsx("div",{className:"min-h-screen flex justify-center bg-beige mt-20",children:A.jsxs("div",{className:"text-center relative",children:[!r&&A.jsxs(A.Fragment,{children:[A.jsx("img",{className:"absolute left-[60px] animate-tilt-snap-2 -top-24",src:ag,alt:""}),A.jsxs("p",{className:"font-unkempt text-5xl almost-black max-w-xl mx-auto mb-12 mt-0",children:["Learn to draw any image by breaking it down into its"," ",A.jsx("span",{className:"awesome-blue",children:"simplest"})," shapes!"]})]}),A.jsx("input",{type:"file",accept:"image/*",id:"uploadInput",onChange:m,className:"hidden"}),r?A.jsxs("div",{className:"flex flex-row gap-15",children:[A.jsx("div",{className:"flex flex-col !justify-start gap-5",children:b?A.jsxs("div",{className:"w-[520px] h-[520px] flex flex-col justify-center items-center",children:[A.jsx(Mg,{color:"#FFFFFF",size:"medium",text:"",textColor:""}),A.jsx("p",{className:"text-4xl mt-10",children:"Processing Image..."})]}):s&&A.jsxs(A.Fragment,{children:[A.jsx("img",{className:"w-[520px] h-auto block ml-0",src:y(),alt:`${d} Image`}),A.jsxs("div",{className:"flex justify-center gap-3 mt-4",children:[A.jsx("button",{onClick:()=>h("original"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${d==="original"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"Original"}),A.jsx("button",{onClick:()=>h("shapes"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${d==="shapes"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"Shapes Guide"}),A.jsx("button",{onClick:()=>h("outlines"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${d==="outlines"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:"Outlines Guide"})]})]})}),A.jsx(eg,{referenceData:s,currentImageType:d})]}):A.jsx("label",{htmlFor:"uploadInput",className:"cursor-pointer inline-block",children:A.jsx("img",{className:"w-[900px] h-auto",src:ng,alt:"Upload an image"})})]})}),A.jsxs("div",{className:"flex flex-col h-40 mt-0 bg-sillyyellow text-center justify-center items-center w-full relative",children:[A.jsx("h1",{className:"font-kavivanar almost-black text-6xl",children:"I N S T R U C T I O N S"}),A.jsx("img",{className:"absolute bottom-[20px]",src:L0,alt:""}),A.jsx("img",{src:ec,alt:"Star",className:"absolute left-[300px] w-24 h-24 animate-tilt-snap-2"}),A.jsx("img",{src:q0,alt:"Heart",className:"absolute right-[310px] w-24 h-24 animate-tilt-snap-2"})]}),A.jsxs("div",{className:"flex flex-col min-h-screen justify-center items-center gap-15 mt-20 mb-40",children:[A.jsxs("div",{className:"bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center",children:[A.jsxs("h1",{className:"almost-black font-unkempt text-4xl mb-5",children:["1. Upload ",A.jsx("span",{className:"awesome-blue",children:"an image"})," of what you want to draw."]}),A.jsx("img",{className:"max-w-1/4 place-self-center",src:lg,alt:"Upload step"})]}),A.jsxs("div",{className:"bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center",children:[A.jsxs("h1",{className:"almost-black font-unkempt text-4xl mb-5",children:["2. Potara's AI will trace over the ",A.jsx("span",{className:"awesome-blue",children:"basic shapes."})]}),A.jsx("img",{className:"max-w-1/4 place-self-center",src:ig,alt:"Tracing step"})]}),A.jsxs("div",{className:"bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center",children:[A.jsxs("h1",{className:"almost-black font-unkempt text-4xl mb-5",children:["3. Draw those shapes, and upload the finished result to receive"," ",A.jsx("span",{className:"awesome-blue",children:"valuable feedback"})," to improve your drawings!"]}),A.jsx("img",{className:"max-w-1/4 place-self-center",src:rg,alt:"Feedback step"})]})]})]}),A.jsx(Y0,{})]})}const Z0="/assets/testBg-DJbGRRRk.png";function zg(){const[r,u]=z.useState(""),[s,o]=z.useState(""),[d,h]=z.useState(""),[b,M]=z.useState(""),[y,m]=z.useState(""),{register:x,loading:k}=tc(),B=Zl(),q=async j=>{if(j.preventDefault(),m(""),!r||!s||!d||!b){m("Please fill in all fields");return}if(d!==b){m("Passwords do not match");return}if(d.length<6){m("Password must be at least 6 characters long");return}try{await x(r,s,d),B("/start")}catch(N){m(N.message)}};return A.jsxs("main",{className:"relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center",style:{backgroundImage:`url(${Z0})`},children:[A.jsx("a",{href:"/",className:"absolute top-5 left-5",children:A.jsx("img",{src:Kl,alt:"Potara Logo",className:"w-32"})}),A.jsx("a",{href:"/start",className:"absolute top-1 right-8 text-white text-7xl font-bold hover:text-gray-200 transition",children:"×"}),A.jsxs("div",{className:"w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mx-4",children:[A.jsx("h1",{className:"font-unkempt text-4xl text-center mb-6 almost-black",children:"Create your Account"}),A.jsxs("form",{onSubmit:q,className:"space-y-4",children:[y&&A.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl",children:y}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"username",className:"block text-sm almost-black mb-1",children:"Username"}),A.jsx("input",{id:"username",type:"text",value:r,onChange:j=>u(j.target.value),placeholder:"Enter Username",className:"w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:k})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"email",className:"block text-sm almost-black mb-1",children:"Email"}),A.jsx("input",{id:"email",type:"email",value:s,onChange:j=>o(j.target.value),placeholder:"create@potara.art",className:"w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:k})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"password",className:"block text-sm almost-black mb-1",children:"Password"}),A.jsx("input",{id:"password",type:"password",value:d,onChange:j=>h(j.target.value),placeholder:"••••••••",className:"w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:k})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"retype-password",className:"block text-sm almost-black mb-1",children:"Re-type Password"}),A.jsx("input",{id:"retype-password",type:"password",value:b,onChange:j=>M(j.target.value),placeholder:"••••••••",className:"w-full rounded-2xl border border-gray-300 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:k})]}),A.jsx("button",{type:"submit",disabled:k,className:"w-full bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl py-3 rounded-2xl shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed",children:k?"Creating Account...":"Sign Up"})]}),A.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["Already have an account?"," ",A.jsx("a",{href:"/log-in",className:"text-[#EB9191] underline",children:"Log in"})]})]})]})}function Dg(){const[r,u]=z.useState(""),[s,o]=z.useState(""),[d,h]=z.useState(""),{login:b,loading:M}=tc(),y=Zl(),m=async x=>{if(x.preventDefault(),h(""),!r||!s){h("Please fill in all fields");return}try{await b(r,s),y("/start")}catch(k){h(k.message)}};return A.jsxs("main",{className:"relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center",style:{backgroundImage:`url(${Z0})`},children:[A.jsx("a",{href:"/",className:"absolute top-5 left-5",children:A.jsx("img",{src:Kl,alt:"Potara Logo",className:"w-32"})}),A.jsx("a",{href:"/start",className:"absolute top-1 right-8 text-white text-7xl font-bold hover:text-gray-200 transition",children:"×"}),A.jsxs("div",{className:"w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mx-4",children:[A.jsx("h1",{className:"font-unkempt text-4xl text-center mb-6 almost-black",children:"Log in to your Account"}),A.jsxs("form",{onSubmit:m,className:"space-y-4",children:[d&&A.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl",children:d}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"email",className:"block text-sm almost-black mb-1",children:"Email"}),A.jsx("input",{id:"email",type:"email",value:r,onChange:x=>u(x.target.value),placeholder:"create@potara.art",className:"w-full rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:M})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"password",className:"block text-sm almost-black mb-1",children:"Password"}),A.jsx("input",{id:"password",type:"password",value:s,onChange:x=>o(x.target.value),placeholder:"••••••••",className:"w-full rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EB9191]",disabled:M})]}),A.jsx("button",{type:"submit",disabled:M,className:"w-full bg-[#EB9191] hover:bg-[#d97c7c] text-white font-unkempt text-xl py-3 rounded-2xl shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed",children:M?"Logging in...":"Log In"})]}),A.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["Don't have an account?"," ",A.jsx("a",{href:"/sign-up",className:"text-[#EB9191] underline",children:"Sign up"})]})]})]})}function Rg(){const r=[],s=Math.max(4,r.length);return A.jsxs(A.Fragment,{children:[A.jsx(nc,{}),A.jsx("main",{className:"min-h-screen flex flex-col bg-beige",children:A.jsx("section",{className:"flex-1 flex items-start pt-8 md:pt-12",children:A.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4",children:[A.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[A.jsx("img",{src:ec,alt:"Star",className:"w-18 h-18 sm:w-14 sm:h-14 pointer-events-none select-none animate-tilt-snap-2"}),A.jsx("h1",{className:"text-5xl font-kavivanar text-center text-[#749DA1]",children:"G A L L E R Y"}),A.jsx("img",{src:H0,alt:"Swirl",className:"w-18 h-18 sm:w-14 sm:h-14 pointer-events-none select-none animate-tilt-snap-2"})]}),A.jsx("p",{className:"text-2xl font-unkempt text-center mb-6 text-[#424C51]",children:"Save your work and see how far you've come!"}),A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:Array.from({length:s}).map((o,d)=>{const h=r[d];return A.jsx("div",{className:"bg-white rounded-2xl border border-gray-200 shadow-sm w-full h-56 overflow-hidden",children:h?A.jsx("img",{src:typeof h=="string"?h:h.src,alt:typeof h=="string"?"":h.alt||"Gallery item",className:"w-full h-full object-cover"}):null},d)})})]})})}),A.jsx(Y0,{})]})}Ep.createRoot(document.getElementById("root")).render(A.jsx(ze.StrictMode,{children:A.jsx(Wb,{children:A.jsx(Bb,{children:A.jsxs(mb,{children:[A.jsx(Ha,{path:"/",element:A.jsx(Ib,{})}),A.jsx(Ha,{path:"/start",element:A.jsx(wg,{})}),A.jsx(Ha,{path:"/sign-up",element:A.jsx(zg,{})}),A.jsx(Ha,{path:"/log-in",element:A.jsx(Dg,{})}),A.jsx(Ha,{path:"/gallery",element:A.jsx(Rg,{})})]})})})}));
