(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ev(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qp={exports:{}},Ml={},Yp={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Tv=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Av=Symbol.for("react.suspense"),bv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),xh=Symbol.iterator;function Lv(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,Zp={};function hi(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Xp}hi.prototype.isReactComponent={};hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function eg(){}eg.prototype=hi.prototype;function kc(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Xp}var Ec=kc.prototype=new eg;Ec.constructor=kc;Jp(Ec,hi.prototype);Ec.isPureReactComponent=!0;var wh=Array.isArray,tg=Object.prototype.hasOwnProperty,Sc={current:null},ng={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tg.call(e,r)&&!ng.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zs,type:t,key:s,ref:o,props:i,_owner:Sc.current}}function Mv(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cc(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kh=/\/+/g;function va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function So(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zs:case Sv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+va(o,0):r,wh(i)?(n="",t!=null&&(n=t.replace(kh,"$&/")+"/"),So(i,e,n,"",function(u){return u})):i!=null&&(Cc(i)&&(i=Mv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+va(s,l);o+=So(s,e,n,a,i)}else if(a=Lv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+va(s,l++),o+=So(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ro(t,e,n){if(t==null)return t;var r=[],i=0;return So(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},Co={transition:null},jv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Sc};function ig(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!Cc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=hi;$.Fragment=Cv;$.Profiler=Tv;$.PureComponent=kc;$.StrictMode=Iv;$.Suspense=Av;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;$.act=ig;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)tg.call(e,a)&&!ng.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zs,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:Pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rv,_context:t},t.Consumer=t};$.createElement=rg;$.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:Nv,render:t}};$.isValidElement=Cc;$.lazy=function(t){return{$$typeof:Ov,_payload:{_status:-1,_result:t},_init:Fv}};$.memo=function(t,e){return{$$typeof:bv,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=Co.transition;Co.transition={};try{t()}finally{Co.transition=e}};$.unstable_act=ig;$.useCallback=function(t,e){return ze.current.useCallback(t,e)};$.useContext=function(t){return ze.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};$.useEffect=function(t,e){return ze.current.useEffect(t,e)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return ze.current.useMemo(t,e)};$.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};$.useRef=function(t){return ze.current.useRef(t)};$.useState=function(t){return ze.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";Yp.exports=$;var j=Yp.exports;const zv=Ev(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=j,Wv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Hv=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vv={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$v.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wv,type:t,key:s,ref:o,props:i,_owner:Hv.current}}Ml.Fragment=Bv;Ml.jsx=sg;Ml.jsxs=sg;qp.exports=Ml;var c=qp.exports,lu={},og={exports:{}},it={},lg={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,F){var D=C.length;C.push(F);e:for(;0<D;){var oe=D-1>>>1,re=C[oe];if(0<i(re,F))C[oe]=F,C[D]=re,D=oe;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var F=C[0],D=C.pop();if(D!==F){C[0]=D;e:for(var oe=0,re=C.length,wr=re>>>1;oe<wr;){var Je=2*(oe+1)-1,Ut=C[Je],Ze=Je+1,ot=C[Ze];if(0>i(Ut,D))Ze<re&&0>i(ot,Ut)?(C[oe]=ot,C[Ze]=D,oe=Ze):(C[oe]=Ut,C[Je]=D,oe=Je);else if(Ze<re&&0>i(ot,D))C[oe]=ot,C[Ze]=D,oe=Ze;else break e}}return F}function i(C,F){var D=C.sortIndex-F.sortIndex;return D!==0?D:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,h=null,p=3,_=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=C)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function w(C){if(x=!1,y(C),!v)if(n(a)!==null)v=!0,Si(I);else{var F=n(u);F!==null&&Ci(w,F.startTime-C)}}function I(C,F){v=!1,x&&(x=!1,m(A),A=-1),_=!0;var D=p;try{for(y(F),h=n(a);h!==null&&(!(h.expirationTime>F)||C&&!Ye());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,p=h.priorityLevel;var re=oe(h.expirationTime<=F);F=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(a)&&r(a),y(F)}else r(a);h=n(a)}if(h!==null)var wr=!0;else{var Je=n(u);Je!==null&&Ci(w,Je.startTime-F),wr=!1}return wr}finally{h=null,p=D,_=!1}}var P=!1,N=null,A=-1,se=5,W=-1;function Ye(){return!(t.unstable_now()-W<se)}function zt(){if(N!==null){var C=t.unstable_now();W=C;var F=!0;try{F=N(!0,C)}finally{F?Xe():(P=!1,N=null)}}else P=!1}var Xe;if(typeof g=="function")Xe=function(){g(zt)};else if(typeof MessageChannel<"u"){var Zs=new MessageChannel,ga=Zs.port2;Zs.port1.onmessage=zt,Xe=function(){ga.postMessage(null)}}else Xe=function(){b(zt,0)};function Si(C){N=C,P||(P=!0,Xe())}function Ci(C,F){A=b(function(){C(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Si(I))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(C){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var D=p;p=F;try{return C()}finally{p=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=p;p=C;try{return F()}finally{p=D}},t.unstable_scheduleCallback=function(C,F,D){var oe=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?oe+D:oe):D=oe,C){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,C={id:f++,callback:F,priorityLevel:C,startTime:D,expirationTime:re,sortIndex:-1},D>oe?(C.sortIndex=D,e(u,C),n(a)===null&&C===n(u)&&(x?(m(A),A=-1):x=!0,Ci(w,D-oe))):(C.sortIndex=re,e(a,C),v||_||(v=!0,Si(I))),C},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(C){var F=p;return function(){var D=p;p=F;try{return C.apply(this,arguments)}finally{p=D}}}})(ag);lg.exports=ag;var Gv=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=j,rt=Gv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,ds={};function pr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(ds[t]=e,t=0;t<e.length;t++)ug.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,Qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eh={},Sh={};function qv(t){return au.call(Sh,t)?!0:au.call(Eh,t)?!1:Qv.test(t)?Sh[t]=!0:(Eh[t]=!0,!1)}function Yv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xv(t,e,n,r){if(e===null||typeof e>"u"||Yv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ic,Tc);Te[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ic,Tc);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ic,Tc);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rc(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xv(e,n,i,r)&&(n=null),r||i===null?qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Pc=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,xa;function Hi(t){if(xa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xa=e&&e[1]||""}return`
`+xa+t}var wa=!1;function ka(t,e){if(!t||wa)return"";wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{wa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hi(t):""}function Jv(t){switch(t.tag){case 5:return Hi(t.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return t=ka(t.type,!1),t;case 11:return t=ka(t.type.render,!1),t;case 1:return t=ka(t.type,!0),t;default:return""}}function hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Tr:return"Fragment";case Ir:return"Portal";case uu:return"Profiler";case Pc:return"StrictMode";case cu:return"Suspense";case du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dg:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case Nc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ac:return e=t.displayName||null,e!==null?e:hu(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return hu(t(e))}catch{}}return null}function Zv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(e);case 8:return e===Pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function e0(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=e0(t))}function pg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fu(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(t,e){e=e.checked,e!=null&&Rc(t,"checked",e,!1)}function pu(t,e){gg(t,e);var n=Ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vi=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Vi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ln(n)}}function mg(t,e){var n=Ln(e.value),r=Ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(t){t0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yi[e]=Yi[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yi.hasOwnProperty(t)&&Yi[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var n0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(n0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,Wr=null,Br=null;function Nh(t){if(t=Bs(t)){if(typeof wu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ul(e),wu(t.stateNode,t.type,e))}}function wg(t){Wr?Br?Br.push(t):Br=[t]:Wr=t}function kg(){if(Wr){var t=Wr,e=Br;if(Br=Wr=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function Eg(t,e){return t(e)}function Sg(){}var Ea=!1;function Cg(t,e,n){if(Ea)return t(e,n);Ea=!0;try{return Eg(t,e,n)}finally{Ea=!1,(Wr!==null||Br!==null)&&(Sg(),kg())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var ku=!1;if(Jt)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){ku=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{ku=!1}function r0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Xi=!1,$o=null,Ho=!1,Eu=null,i0={onError:function(t){Xi=!0,$o=t}};function s0(t,e,n,r,i,s,o,l,a){Xi=!1,$o=null,r0.apply(i0,arguments)}function o0(t,e,n,r,i,s,o,l,a){if(s0.apply(this,arguments),Xi){if(Xi){var u=$o;Xi=!1,$o=null}else throw Error(E(198));Ho||(Ho=!0,Eu=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(gr(t)!==t)throw Error(E(188))}function l0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ah(i),t;if(s===r)return Ah(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Tg(t){return t=l0(t),t!==null?Rg(t):null}function Rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rg(t);if(e!==null)return e;t=t.sibling}return null}var Pg=rt.unstable_scheduleCallback,bh=rt.unstable_cancelCallback,a0=rt.unstable_shouldYield,u0=rt.unstable_requestPaint,fe=rt.unstable_now,c0=rt.unstable_getCurrentPriorityLevel,Oc=rt.unstable_ImmediatePriority,Ng=rt.unstable_UserBlockingPriority,Vo=rt.unstable_NormalPriority,d0=rt.unstable_LowPriority,Ag=rt.unstable_IdlePriority,Dl=null,Lt=null;function h0(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:g0,f0=Math.log,p0=Math.LN2;function g0(t){return t>>>=0,t===0?32:31-(f0(t)/p0|0)|0}var lo=64,ao=4194304;function Gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Go(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gi(l):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function m0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=m0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=lo;return lo<<=1,!(lo&4194240)&&(lo=64),t}function Sa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function _0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function Og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lg,Mc,Mg,Dg,Fg,Cu=!1,uo=[],kn=null,En=null,Sn=null,ps=new Map,gs=new Map,hn=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(e.pointerId)}}function Oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bs(e),e!==null&&Mc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x0(t,e,n,r,i){switch(e){case"focusin":return kn=Oi(kn,t,e,n,r,i),!0;case"dragenter":return En=Oi(En,t,e,n,r,i),!0;case"mouseover":return Sn=Oi(Sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Oi(ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gs.set(s,Oi(gs.get(s)||null,t,e,n,r,i)),!0}return!1}function jg(t){var e=qn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ig(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xu=r,n.target.dispatchEvent(r),xu=null}else return e=Bs(n),e!==null&&Mc(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){Io(t)&&n.delete(e)}function w0(){Cu=!1,kn!==null&&Io(kn)&&(kn=null),En!==null&&Io(En)&&(En=null),Sn!==null&&Io(Sn)&&(Sn=null),ps.forEach(Lh),gs.forEach(Lh)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,w0)))}function ms(t){function e(i){return Li(i,t)}if(0<uo.length){Li(uo[0],t);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kn!==null&&Li(kn,t),En!==null&&Li(En,t),Sn!==null&&Li(Sn,t),ps.forEach(e),gs.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)jg(n),n.blockedOn===null&&hn.shift()}var $r=on.ReactCurrentBatchConfig,Ko=!0;function k0(t,e,n,r){var i=Q,s=$r.transition;$r.transition=null;try{Q=1,Dc(t,e,n,r)}finally{Q=i,$r.transition=s}}function E0(t,e,n,r){var i=Q,s=$r.transition;$r.transition=null;try{Q=4,Dc(t,e,n,r)}finally{Q=i,$r.transition=s}}function Dc(t,e,n,r){if(Ko){var i=Iu(t,e,n,r);if(i===null)La(t,e,r,Qo,n),Oh(t,r);else if(x0(i,t,e,n,r))r.stopPropagation();else if(Oh(t,r),e&4&&-1<v0.indexOf(t)){for(;i!==null;){var s=Bs(i);if(s!==null&&Lg(s),s=Iu(t,e,n,r),s===null&&La(t,e,r,Qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else La(t,e,r,null,n)}}var Qo=null;function Iu(t,e,n,r){if(Qo=null,t=bc(r),t=qn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qo=t,null}function zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case Oc:return 1;case Ng:return 4;case Vo:case d0:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var vn=null,Fc=null,To=null;function Ug(){if(To)return To;var t,e=Fc,n=e.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return To=i.slice(t,1<r?1-r:void 0)}function Ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Mh(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Mh,this.isPropagationStopped=Mh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=st(fi),Ws=ue({},fi,{view:0,detail:0}),S0=st(Ws),Ca,Ia,Mi,Fl=ue({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(Ca=t.screenX-Mi.screenX,Ia=t.screenY-Mi.screenY):Ia=Ca=0,Mi=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),Dh=st(Fl),C0=ue({},Fl,{dataTransfer:0}),I0=st(C0),T0=ue({},Ws,{relatedTarget:0}),Ta=st(T0),R0=ue({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=st(R0),N0=ue({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=st(N0),b0=ue({},fi,{data:0}),Fh=st(b0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M0[t])?!!e[t]:!1}function zc(){return D0}var F0=ue({},Ws,{key:function(t){if(t.key){var e=O0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j0=st(F0),z0=ue({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=st(z0),U0=ue({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),W0=st(U0),B0=ue({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=st(B0),H0=ue({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=st(H0),G0=[9,13,27,32],Uc=Jt&&"CompositionEvent"in window,Ji=null;Jt&&"documentMode"in document&&(Ji=document.documentMode);var K0=Jt&&"TextEvent"in window&&!Ji,Wg=Jt&&(!Uc||Ji&&8<Ji&&11>=Ji),zh=" ",Uh=!1;function Bg(t,e){switch(t){case"keyup":return G0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function Q0(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(Uh=!0,zh);case"textInput":return t=e.data,t===zh&&Uh?null:t;default:return null}}function q0(t,e){if(Rr)return t==="compositionend"||!Uc&&Bg(t,e)?(t=Ug(),To=Fc=vn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y0[t.type]:e==="textarea"}function Hg(t,e,n,r){wg(r),e=qo(e,"onChange"),0<e.length&&(n=new jc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zi=null,ys=null;function X0(t){tm(t,0)}function jl(t){var e=Ar(t);if(pg(e))return t}function J0(t,e){if(t==="change")return e}var Vg=!1;if(Jt){var Ra;if(Jt){var Pa="oninput"in document;if(!Pa){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Pa=typeof Bh.oninput=="function"}Ra=Pa}else Ra=!1;Vg=Ra&&(!document.documentMode||9<document.documentMode)}function $h(){Zi&&(Zi.detachEvent("onpropertychange",Gg),ys=Zi=null)}function Gg(t){if(t.propertyName==="value"&&jl(ys)){var e=[];Hg(e,ys,t,bc(t)),Cg(X0,e)}}function Z0(t,e,n){t==="focusin"?($h(),Zi=e,ys=n,Zi.attachEvent("onpropertychange",Gg)):t==="focusout"&&$h()}function ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(ys)}function tx(t,e){if(t==="click")return jl(e)}function nx(t,e){if(t==="input"||t==="change")return jl(e)}function rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:rx;function _s(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!au.call(e,i)||!It(t[i],e[i]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=Hh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hh(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qg(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function Wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=Qg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(r!==null&&Wc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vh(n,s);var o=Vh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sx=Jt&&"documentMode"in document&&11>=document.documentMode,Pr=null,Tu=null,es=null,Ru=!1;function Gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Pr==null||Pr!==Bo(r)||(r=Pr,"selectionStart"in r&&Wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),es&&_s(es,r)||(es=r,r=qo(Tu,"onSelect"),0<r.length&&(e=new jc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pr)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Na={},qg={};Jt&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function zl(t){if(Na[t])return Na[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qg)return Na[t]=e[n];return t}var Yg=zl("animationend"),Xg=zl("animationiteration"),Jg=zl("animationstart"),Zg=zl("transitionend"),em=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(t,e){em.set(t,e),pr(e,[t])}for(var Aa=0;Aa<Kh.length;Aa++){var ba=Kh[Aa],ox=ba.toLowerCase(),lx=ba[0].toUpperCase()+ba.slice(1);jn(ox,"on"+lx)}jn(Yg,"onAnimationEnd");jn(Xg,"onAnimationIteration");jn(Jg,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Zg,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));function Qh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,o0(r,e,void 0,t),t.currentTarget=null}function tm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Qh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Qh(i,l,u),s=a}}}if(Ho)throw t=Eu,Ho=!1,Eu=null,t}function te(t,e){var n=e[Ou];n===void 0&&(n=e[Ou]=new Set);var r=t+"__bubble";n.has(r)||(nm(e,t,2,!1),n.add(r))}function Oa(t,e,n){var r=0;e&&(r|=4),nm(n,t,r,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[fo]){t[fo]=!0,ug.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||Oa(n,!1,t),Oa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Oa("selectionchange",!1,e))}}function nm(t,e,n,r){switch(zg(e)){case 1:var i=k0;break;case 4:i=E0;break;default:i=Dc}n=i.bind(null,e,n,t),i=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function La(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Cg(function(){var u=s,f=bc(n),h=[];e:{var p=em.get(t);if(p!==void 0){var _=jc,v=t;switch(t){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":_=j0;break;case"focusin":v="focus",_=Ta;break;case"focusout":v="blur",_=Ta;break;case"beforeblur":case"afterblur":_=Ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=W0;break;case Yg:case Xg:case Jg:_=P0;break;case Zg:_=$0;break;case"scroll":_=S0;break;case"wheel":_=V0;break;case"copy":case"cut":case"paste":_=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=jh}var x=(e&4)!==0,b=!x&&t==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var g=u,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=fs(g,m),w!=null&&x.push(xs(g,w,y)))),b)break;g=g.return}0<x.length&&(p=new _(p,v,null,n,f),h.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==xu&&(v=n.relatedTarget||n.fromElement)&&(qn(v)||v[Zt]))break e;if((_||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?qn(v):null,v!==null&&(b=gr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(x=Dh,w="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=jh,w="onPointerLeave",m="onPointerEnter",g="pointer"),b=_==null?p:Ar(_),y=v==null?p:Ar(v),p=new x(w,g+"leave",_,n,f),p.target=b,p.relatedTarget=y,w=null,qn(f)===u&&(x=new x(m,g+"enter",v,n,f),x.target=y,x.relatedTarget=b,w=x),b=w,_&&v)t:{for(x=_,m=v,g=0,y=x;y;y=Sr(y))g++;for(y=0,w=m;w;w=Sr(w))y++;for(;0<g-y;)x=Sr(x),g--;for(;0<y-g;)m=Sr(m),y--;for(;g--;){if(x===m||m!==null&&x===m.alternate)break t;x=Sr(x),m=Sr(m)}x=null}else x=null;_!==null&&qh(h,p,_,x,!1),v!==null&&b!==null&&qh(h,b,v,x,!0)}}e:{if(p=u?Ar(u):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var I=J0;else if(Wh(p))if(Vg)I=nx;else{I=ex;var P=Z0}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=tx);if(I&&(I=I(t,u))){Hg(h,I,n,f);break e}P&&P(t,p,u),t==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&gu(p,"number",p.value)}switch(P=u?Ar(u):window,t){case"focusin":(Wh(P)||P.contentEditable==="true")&&(Pr=P,Tu=u,es=null);break;case"focusout":es=Tu=Pr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Gh(h,n,f);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":Gh(h,n,f)}var N;if(Uc)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Rr?Bg(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Wg&&n.locale!=="ko"&&(Rr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Rr&&(N=Ug()):(vn=f,Fc="value"in vn?vn.value:vn.textContent,Rr=!0)),P=qo(u,A),0<P.length&&(A=new Fh(A,t,null,n,f),h.push({event:A,listeners:P}),N?A.data=N:(N=$g(n),N!==null&&(A.data=N)))),(N=K0?Q0(t,n):q0(t,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(f=new Fh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=N))}tm(h,e)})}function xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(xs(t,s,i)),s=fs(t,e),s!=null&&r.push(xs(t,s,i))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fs(n,s),a!=null&&o.unshift(xs(n,a,l))):i||(a=fs(n,s),a!=null&&o.push(xs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ux=/\r\n?/g,cx=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(cx,"")}function po(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(E(425))}function Yo(){}var Pu=null,Nu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(fx)}:bu;function fx(t){setTimeout(function(){throw t})}function Ma(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+pi,ws="__reactProps$"+pi,Zt="__reactContainer$"+pi,Ou="__reactEvents$"+pi,px="__reactListeners$"+pi,gx="__reactHandles$"+pi;function qn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zt]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jh(t);t!==null;){if(n=t[Ot])return n;t=Jh(t)}return e}t=n,n=t.parentNode}return null}function Bs(t){return t=t[Ot]||t[Zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ul(t){return t[ws]||null}var Lu=[],br=-1;function zn(t){return{current:t}}function ne(t){0>br||(t.current=Lu[br],Lu[br]=null,br--)}function ee(t,e){br++,Lu[br]=t.current,t.current=e}var Mn={},Oe=zn(Mn),Ge=zn(!1),nr=Mn;function Jr(t,e){var n=t.type.contextTypes;if(!n)return Mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Xo(){ne(Ge),ne(Oe)}function Zh(t,e,n){if(Oe.current!==Mn)throw Error(E(168));ee(Oe,e),ee(Ge,n)}function rm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Zv(t)||"Unknown",i));return ue({},n,r)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,nr=Oe.current,ee(Oe,t),ee(Ge,Ge.current),!0}function ef(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=rm(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,ne(Ge),ne(Oe),ee(Oe,t)):ne(Ge),ee(Ge,n)}var $t=null,Wl=!1,Da=!1;function im(t){$t===null?$t=[t]:$t.push(t)}function mx(t){Wl=!0,im(t)}function Un(){if(!Da&&$t!==null){Da=!0;var t=0,e=Q;try{var n=$t;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$t=null,Wl=!1}catch(i){throw $t!==null&&($t=$t.slice(t+1)),Pg(Oc,Un),i}finally{Q=e,Da=!1}}return null}var Or=[],Lr=0,Zo=null,el=0,at=[],ut=0,rr=null,Ht=1,Vt="";function Vn(t,e){Or[Lr++]=el,Or[Lr++]=Zo,Zo=t,el=e}function sm(t,e,n){at[ut++]=Ht,at[ut++]=Vt,at[ut++]=rr,rr=t;var r=Ht;t=Vt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Et(e)+i|n<<i|r,Vt=s+t}else Ht=1<<s|n<<i|r,Vt=t}function Bc(t){t.return!==null&&(Vn(t,1),sm(t,1,0))}function $c(t){for(;t===Zo;)Zo=Or[--Lr],Or[Lr]=null,el=Or[--Lr],Or[Lr]=null;for(;t===rr;)rr=at[--ut],at[ut]=null,Vt=at[--ut],at[ut]=null,Ht=at[--ut],at[ut]=null}var nt=null,tt=null,ie=!1,_t=null;function om(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:Ht,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(ie){var e=tt;if(e){var n=e;if(!tf(t,e)){if(Mu(t))throw Error(E(418));e=Cn(n.nextSibling);var r=nt;e&&tf(t,e)?om(r,n):(t.flags=t.flags&-4097|2,ie=!1,nt=t)}}else{if(Mu(t))throw Error(E(418));t.flags=t.flags&-4097|2,ie=!1,nt=t}}}function nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function go(t){if(t!==nt)return!1;if(!ie)return nf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=tt)){if(Mu(t))throw lm(),Error(E(418));for(;e;)om(t,e),e=Cn(e.nextSibling)}if(nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=Cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?Cn(t.stateNode.nextSibling):null;return!0}function lm(){for(var t=tt;t;)t=Cn(t.nextSibling)}function Zr(){tt=nt=null,ie=!1}function Hc(t){_t===null?_t=[t]:_t.push(t)}var yx=on.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rf(t){var e=t._init;return e(t._payload)}function am(t){function e(m,g){if(t){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Pn(m,g),m.index=0,m.sibling=null,m}function s(m,g,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,g,y,w){return g===null||g.tag!==6?(g=$a(y,m.mode,w),g.return=m,g):(g=i(g,y),g.return=m,g)}function a(m,g,y,w){var I=y.type;return I===Tr?f(m,g,y.props.children,w,y.key):g!==null&&(g.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&rf(I)===g.type)?(w=i(g,y.props),w.ref=Di(m,g,y),w.return=m,w):(w=Mo(y.type,y.key,y.props,null,m.mode,w),w.ref=Di(m,g,y),w.return=m,w)}function u(m,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Ha(y,m.mode,w),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function f(m,g,y,w,I){return g===null||g.tag!==7?(g=er(y,m.mode,w,I),g.return=m,g):(g=i(g,y),g.return=m,g)}function h(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=$a(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case io:return y=Mo(g.type,g.key,g.props,null,m.mode,y),y.ref=Di(m,null,g),y.return=m,y;case Ir:return g=Ha(g,m.mode,y),g.return=m,g;case cn:var w=g._init;return h(m,w(g._payload),y)}if(Vi(g)||Ai(g))return g=er(g,m.mode,y,null),g.return=m,g;mo(m,g)}return null}function p(m,g,y,w){var I=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:l(m,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case io:return y.key===I?a(m,g,y,w):null;case Ir:return y.key===I?u(m,g,y,w):null;case cn:return I=y._init,p(m,g,I(y._payload),w)}if(Vi(y)||Ai(y))return I!==null?null:f(m,g,y,w,null);mo(m,y)}return null}function _(m,g,y,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,l(g,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case io:return m=m.get(w.key===null?y:w.key)||null,a(g,m,w,I);case Ir:return m=m.get(w.key===null?y:w.key)||null,u(g,m,w,I);case cn:var P=w._init;return _(m,g,y,P(w._payload),I)}if(Vi(w)||Ai(w))return m=m.get(y)||null,f(g,m,w,I,null);mo(g,w)}return null}function v(m,g,y,w){for(var I=null,P=null,N=g,A=g=0,se=null;N!==null&&A<y.length;A++){N.index>A?(se=N,N=null):se=N.sibling;var W=p(m,N,y[A],w);if(W===null){N===null&&(N=se);break}t&&N&&W.alternate===null&&e(m,N),g=s(W,g,A),P===null?I=W:P.sibling=W,P=W,N=se}if(A===y.length)return n(m,N),ie&&Vn(m,A),I;if(N===null){for(;A<y.length;A++)N=h(m,y[A],w),N!==null&&(g=s(N,g,A),P===null?I=N:P.sibling=N,P=N);return ie&&Vn(m,A),I}for(N=r(m,N);A<y.length;A++)se=_(N,m,A,y[A],w),se!==null&&(t&&se.alternate!==null&&N.delete(se.key===null?A:se.key),g=s(se,g,A),P===null?I=se:P.sibling=se,P=se);return t&&N.forEach(function(Ye){return e(m,Ye)}),ie&&Vn(m,A),I}function x(m,g,y,w){var I=Ai(y);if(typeof I!="function")throw Error(E(150));if(y=I.call(y),y==null)throw Error(E(151));for(var P=I=null,N=g,A=g=0,se=null,W=y.next();N!==null&&!W.done;A++,W=y.next()){N.index>A?(se=N,N=null):se=N.sibling;var Ye=p(m,N,W.value,w);if(Ye===null){N===null&&(N=se);break}t&&N&&Ye.alternate===null&&e(m,N),g=s(Ye,g,A),P===null?I=Ye:P.sibling=Ye,P=Ye,N=se}if(W.done)return n(m,N),ie&&Vn(m,A),I;if(N===null){for(;!W.done;A++,W=y.next())W=h(m,W.value,w),W!==null&&(g=s(W,g,A),P===null?I=W:P.sibling=W,P=W);return ie&&Vn(m,A),I}for(N=r(m,N);!W.done;A++,W=y.next())W=_(N,m,A,W.value,w),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?A:W.key),g=s(W,g,A),P===null?I=W:P.sibling=W,P=W);return t&&N.forEach(function(zt){return e(m,zt)}),ie&&Vn(m,A),I}function b(m,g,y,w){if(typeof y=="object"&&y!==null&&y.type===Tr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case io:e:{for(var I=y.key,P=g;P!==null;){if(P.key===I){if(I=y.type,I===Tr){if(P.tag===7){n(m,P.sibling),g=i(P,y.props.children),g.return=m,m=g;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&rf(I)===P.type){n(m,P.sibling),g=i(P,y.props),g.ref=Di(m,P,y),g.return=m,m=g;break e}n(m,P);break}else e(m,P);P=P.sibling}y.type===Tr?(g=er(y.props.children,m.mode,w,y.key),g.return=m,m=g):(w=Mo(y.type,y.key,y.props,null,m.mode,w),w.ref=Di(m,g,y),w.return=m,m=w)}return o(m);case Ir:e:{for(P=y.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=Ha(y,m.mode,w),g.return=m,m=g}return o(m);case cn:return P=y._init,b(m,g,P(y._payload),w)}if(Vi(y))return v(m,g,y,w);if(Ai(y))return x(m,g,y,w);mo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,y),g.return=m,m=g):(n(m,g),g=$a(y,m.mode,w),g.return=m,m=g),o(m)):n(m,g)}return b}var ei=am(!0),um=am(!1),tl=zn(null),nl=null,Mr=null,Vc=null;function Gc(){Vc=Mr=nl=null}function Kc(t){var e=tl.current;ne(tl),t._currentValue=e}function Fu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hr(t,e){nl=t,Vc=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(Vc!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(nl===null)throw Error(E(308));Mr=t,nl.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Yn=null;function Qc(t){Yn===null?Yn=[t]:Yn.push(t)}function cm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qc(e)):(n.next=i.next,i.next=n),e.interleaved=n,en(t,r)}function en(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,en(t,n)}return i=r.interleaved,i===null?(e.next=e,Qc(r)):(e.next=i.next,i.next=e),r.interleaved=e,en(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lc(t,n)}}function sf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,f=u=a=null,l=s;do{var p=l.lane,_=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,x=l;switch(p=e,_=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(_,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(_,h,p):v,p==null)break e;h=ue({},h,p);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else _={eventTime:_,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=_,a=h):f=f.next=_,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=h}}function of(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var $s={},Mt=zn($s),ks=zn($s),Es=zn($s);function Xn(t){if(t===$s)throw Error(E(174));return t}function Yc(t,e){switch(ee(Es,e),ee(ks,t),ee(Mt,$s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}ne(Mt),ee(Mt,e)}function ti(){ne(Mt),ne(ks),ne(Es)}function hm(t){Xn(Es.current);var e=Xn(Mt.current),n=yu(e,t.type);e!==n&&(ee(ks,t),ee(Mt,n))}function Xc(t){ks.current===t&&(ne(Mt),ne(ks))}var le=zn(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fa=[];function Jc(){for(var t=0;t<Fa.length;t++)Fa[t]._workInProgressVersionPrimary=null;Fa.length=0}var No=on.ReactCurrentDispatcher,ja=on.ReactCurrentBatchConfig,ir=0,ae=null,ge=null,ve=null,sl=!1,ts=!1,Ss=0,_x=0;function Ne(){throw Error(E(321))}function Zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function ed(t,e,n,r,i,s){if(ir=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?kx:Ex,t=n(r,i),ts){s=0;do{if(ts=!1,Ss=0,25<=s)throw Error(E(301));s+=1,ve=ge=null,e.updateQueue=null,No.current=Sx,t=n(r,i)}while(ts)}if(No.current=ol,e=ge!==null&&ge.next!==null,ir=0,ve=ge=ae=null,sl=!1,e)throw Error(E(300));return t}function td(){var t=Ss!==0;return Ss=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=t:ve=ve.next=t,ve}function pt(){if(ge===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ve===null?ae.memoizedState:ve.next;if(e!==null)ve=e,ge=t;else{if(t===null)throw Error(E(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?ae.memoizedState=ve=t:ve=ve.next=t}return ve}function Cs(t,e){return typeof e=="function"?e(t):e}function za(t){var e=pt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((ir&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ae.lanes|=f,sr|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,It(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ua(t){var e=pt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fm(){}function pm(t,e){var n=ae,r=pt(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,nd(ym.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Is(9,mm.bind(null,n,r,i,e),void 0,null),Ee===null)throw Error(E(349));ir&30||gm(n,e,i)}return i}function gm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mm(t,e,n,r){e.value=n,e.getSnapshot=r,_m(e)&&vm(t)}function ym(t,e,n){return n(function(){_m(e)&&vm(t)})}function _m(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function vm(t){var e=en(t,1);e!==null&&St(e,t,1,-1)}function lf(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,ae,t),[e.memoizedState,t]}function Is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xm(){return pt().memoizedState}function Ao(t,e,n,r){var i=bt();ae.flags|=t,i.memoizedState=Is(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Zc(r,o.deps)){i.memoizedState=Is(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Is(1|e,n,s,r)}function af(t,e){return Ao(8390656,8,t,e)}function nd(t,e){return Bl(2048,8,t,e)}function wm(t,e){return Bl(4,2,t,e)}function km(t,e){return Bl(4,4,t,e)}function Em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sm(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,Em.bind(null,e,t),n)}function rd(){}function Cm(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Im(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tm(t,e,n){return ir&21?(It(n,e)||(n=bg(),ae.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function vx(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=ja.transition;ja.transition={};try{t(!1),e()}finally{Q=n,ja.transition=r}}function Rm(){return pt().memoizedState}function xx(t,e,n){var r=Rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pm(t))Nm(e,n);else if(n=cm(t,e,n,r),n!==null){var i=De();St(n,t,r,i),Am(n,e,r)}}function wx(t,e,n){var r=Rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pm(t))Nm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=e.interleaved;a===null?(i.next=i,Qc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=cm(t,e,i,r),n!==null&&(i=De(),St(n,t,r,i),Am(n,e,r))}}function Pm(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Nm(t,e){ts=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Am(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lc(t,n)}}var ol={readContext:ft,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},kx={readContext:ft,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:af,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ao(4194308,4,Em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ao(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ao(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xx.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:lf,useDebugValue:rd,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=lf(!1),e=t[0];return t=vx.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=bt();if(ie){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ee===null)throw Error(E(349));ir&30||gm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,af(ym.bind(null,r,s,t),[t]),r.flags|=2048,Is(9,mm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Ee.identifierPrefix;if(ie){var n=Vt,r=Ht;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ex={readContext:ft,useCallback:Cm,useContext:ft,useEffect:nd,useImperativeHandle:Sm,useInsertionEffect:wm,useLayoutEffect:km,useMemo:Im,useReducer:za,useRef:xm,useState:function(){return za(Cs)},useDebugValue:rd,useDeferredValue:function(t){var e=pt();return Tm(e,ge.memoizedState,t)},useTransition:function(){var t=za(Cs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:fm,useSyncExternalStore:pm,useId:Rm,unstable_isNewReconciler:!1},Sx={readContext:ft,useCallback:Cm,useContext:ft,useEffect:nd,useImperativeHandle:Sm,useInsertionEffect:wm,useLayoutEffect:km,useMemo:Im,useReducer:Ua,useRef:xm,useState:function(){return Ua(Cs)},useDebugValue:rd,useDeferredValue:function(t){var e=pt();return ge===null?e.memoizedState=t:Tm(e,ge.memoizedState,t)},useTransition:function(){var t=Ua(Cs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:fm,useSyncExternalStore:pm,useId:Rm,unstable_isNewReconciler:!1};function mt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=Rn(t),s=Yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(St(e,t,i,r),Po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=Rn(t),s=Yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(St(e,t,i,r),Po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=Rn(t),i=Yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=In(t,i,r),e!==null&&(St(e,t,r,n),Po(e,t,r))}};function uf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_s(n,r)||!_s(i,s):!0}function bm(t,e,n){var r=!1,i=Mn,s=e.contextType;return typeof s=="object"&&s!==null?s=ft(s):(i=Ke(e)?nr:Oe.current,r=e.contextTypes,s=(r=r!=null)?Jr(t,i):Mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ft(s):(s=Ke(e)?nr:Oe.current,i.context=Jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$l.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,e){try{var n="",r=e;do n+=Jv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function Om(t,e,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,Yu=r),Uu(t,e)},n}function Lm(t,e,n){n=Yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function df(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function hf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yt(-1,1),e.tag=2,In(n,e,1))),n.lanes|=1),t)}var Ix=on.ReactCurrentOwner,$e=!1;function Me(t,e,n,r){e.child=t===null?um(e,null,n,r):ei(e,t.child,n,r)}function pf(t,e,n,r,i){n=n.render;var s=e.ref;return Hr(e,i),r=ed(t,e,n,r,s,i),n=td(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(ie&&n&&Bc(e),e.flags|=1,Me(t,e,r,i),e.child)}function gf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mm(t,e,s,r,i)):(t=Mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(o,r)&&t.ref===e.ref)return tn(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Mm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_s(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,tn(t,e,i)}return Wu(t,e,n,r,i)}function Dm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Fr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Fr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Fr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Fr,et),et|=r;return Me(t,e,i,n),e.child}function Fm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,r,i){var s=Ke(n)?nr:Oe.current;return s=Jr(e,s),Hr(e,i),n=ed(t,e,n,r,s,i),r=td(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(ie&&r&&Bc(e),e.flags|=1,Me(t,e,n,i),e.child)}function mf(t,e,n,r,i){if(Ke(n)){var s=!0;Jo(e)}else s=!1;if(Hr(e,i),e.stateNode===null)bo(t,e),bm(e,n,r),zu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ke(n)?nr:Oe.current,u=Jr(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&cf(e,o,r,u),dn=!1;var p=e.memoizedState;o.state=p,rl(e,r,o,i),a=e.memoizedState,l!==r||p!==a||Ge.current||dn?(typeof f=="function"&&(ju(e,n,f,r),a=e.memoizedState),(l=dn||uf(e,n,l,r,p,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:mt(e.type,l),o.props=u,h=e.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ft(a):(a=Ke(n)?nr:Oe.current,a=Jr(e,a));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==a)&&cf(e,o,r,a),dn=!1,p=e.memoizedState,o.state=p,rl(e,r,o,i);var v=e.memoizedState;l!==h||p!==v||Ge.current||dn?(typeof _=="function"&&(ju(e,n,_,r),v=e.memoizedState),(u=dn||uf(e,n,u,r,p,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Bu(t,e,n,r,s,i)}function Bu(t,e,n,r,i,s){Fm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ef(e,n,!1),tn(t,e,s);r=e.stateNode,Ix.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ei(e,t.child,null,s),e.child=ei(e,null,l,s)):Me(t,e,l,s),e.memoizedState=r.state,i&&ef(e,n,!0),e.child}function jm(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),Yc(t,e.containerInfo)}function yf(t,e,n,r,i){return Zr(),Hc(i),e.flags|=256,Me(t,e,n,r),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function zm(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(le,i&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,r,0,null),t=er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hu(n),e.memoizedState=$u,t):id(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Pn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pn(l,s):(s=er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$u,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function id(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,r){return r!==null&&Hc(r),ei(e,t.child,null,n),t=id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wa(Error(E(422))),yo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gl({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ei(e,t.child,null,o),e.child.memoizedState=Hu(o),e.memoizedState=$u,s);if(!(e.mode&1))return yo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Wa(s,r,void 0),yo(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,en(t,i),St(r,t,i,-1))}return cd(),r=Wa(Error(E(421))),yo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=Cn(i.nextSibling),nt=e,ie=!0,_t=null,t!==null&&(at[ut++]=Ht,at[ut++]=Vt,at[ut++]=rr,Ht=t.id,Vt=t.overflow,rr=e),e=id(e,r.children),e.flags|=4096,e)}function _f(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fu(t.return,e,n)}function Ba(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Um(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_f(t,n,e);else if(t.tag===19)_f(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ba(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ba(e,!0,n,null,s);break;case"together":Ba(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rx(t,e,n){switch(e.tag){case 3:jm(e),Zr();break;case 5:hm(e);break;case 1:Ke(e.type)&&Jo(e);break;case 4:Yc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?zm(t,e,n):(ee(le,le.current&1),t=tn(t,e,n),t!==null?t.sibling:null);ee(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Um(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Dm(t,e,n)}return tn(t,e,n)}var Wm,Vu,Bm,$m;Wm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};Bm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xn(Mt.current);var s=null;switch(n){case"input":i=fu(t,i),r=fu(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=mu(t,i),r=mu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yo)}_u(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$m=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Px(t,e,n){var r=e.pendingProps;switch($c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ke(e.type)&&Xo(),Ae(e),null;case 3:return r=e.stateNode,ti(),ne(Ge),ne(Oe),Jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(Zu(_t),_t=null))),Vu(t,e),Ae(e),null;case 5:Xc(e);var i=Xn(Es.current);if(n=e.type,t!==null&&e.stateNode!=null)Bm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ae(e),null}if(t=Xn(Mt.current),go(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Ki.length;i++)te(Ki[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ih(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Rh(r,s),te("invalid",r)}_u(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&po(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&po(r.textContent,l,t),i=["children",""+l]):ds.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":so(r),Th(r,s,!0);break;case"textarea":so(r),Ph(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[ws]=r,Wm(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ki.length;i++)te(Ki[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Ih(t,r),i=fu(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":Rh(t,r),i=mu(t,r),te("invalid",t);break;default:i=r}_u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?xg(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_g(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&hs(t,a):typeof a=="number"&&hs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&Rc(t,s,a,o))}switch(n){case"input":so(t),Th(t,r,!1);break;case"textarea":so(t),Ph(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)$m(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Xn(Es.current),Xn(Mt.current),go(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Ae(e),null;case 13:if(ne(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&tt!==null&&e.mode&1&&!(e.flags&128))lm(),Zr(),e.flags|=98560,s=!1;else if(s=go(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ot]=e}else Zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else _t!==null&&(Zu(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?me===0&&(me=3):cd())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return ti(),Vu(t,e),t===null&&vs(e.stateNode.containerInfo),Ae(e),null;case 10:return Kc(e.type._context),Ae(e),null;case 17:return Ke(e.type)&&Xo(),Ae(e),null;case 19:if(ne(le),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>ri&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ae(e),null}else 2*fe()-s.renderingStartTime>ri&&n!==1073741824&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=le.current,ee(le,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Nx(t,e){switch($c(e),e.tag){case 1:return Ke(e.type)&&Xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ti(),ne(Ge),ne(Oe),Jc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xc(e),null;case 13:if(ne(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(le),null;case 4:return ti(),null;case 10:return Kc(e.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var _o=!1,be=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,T=null;function Dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Gu(t,e,n){try{n()}catch(r){ce(t,e,r)}}var vf=!1;function bx(t,e){if(Pu=Ko,t=Qg(),Wc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++u===i&&(l=o),p===s&&++f===r&&(a=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},Ko=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?x:mt(e.type,x),b);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return v=vf,vf=!1,v}function ns(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gu(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hm(t){var e=t.alternate;e!==null&&(t.alternate=null,Hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[ws],delete e[Ou],delete e[px],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vm(t){return t.tag===5||t.tag===3||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yo));else if(r!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var Se=null,yt=!1;function an(t,e,n){for(n=n.child;n!==null;)Gm(t,e,n),n=n.sibling}function Gm(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:be||Dr(n,e);case 6:var r=Se,i=yt;Se=null,an(t,e,n),Se=r,yt=i,Se!==null&&(yt?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(yt?(t=Se,n=n.stateNode,t.nodeType===8?Ma(t.parentNode,n):t.nodeType===1&&Ma(t,n),ms(t)):Ma(Se,n.stateNode));break;case 4:r=Se,i=yt,Se=n.stateNode.containerInfo,yt=!0,an(t,e,n),Se=r,yt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gu(n,e,o),i=i.next}while(i!==r)}an(t,e,n);break;case 1:if(!be&&(Dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,e,l)}an(t,e,n);break;case 21:an(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,an(t,e,n),be=r):an(t,e,n);break;default:an(t,e,n)}}function wf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(r){var i=Wx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,yt=!1;break e;case 3:Se=l.stateNode.containerInfo,yt=!0;break e;case 4:Se=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(Se===null)throw Error(E(160));Gm(s,o,i),Se=null,yt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Km(e,t),e=e.sibling}function Km(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),At(t),r&4){try{ns(3,t,t.return),Hl(3,t)}catch(x){ce(t,t.return,x)}try{ns(5,t,t.return)}catch(x){ce(t,t.return,x)}}break;case 1:gt(e,t),At(t),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(gt(e,t),At(t),r&512&&n!==null&&Dr(n,n.return),t.flags&32){var i=t.stateNode;try{hs(i,"")}catch(x){ce(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gg(i,s),vu(l,o);var u=vu(l,s);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?xg(i,h):f==="dangerouslySetInnerHTML"?_g(i,h):f==="children"?hs(i,h):Rc(i,f,h,u)}switch(l){case"input":pu(i,s);break;case"textarea":mg(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ur(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ur(i,!!s.multiple,s.defaultValue,!0):Ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[ws]=s}catch(x){ce(t,t.return,x)}}break;case 6:if(gt(e,t),At(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){ce(t,t.return,x)}}break;case 3:if(gt(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(e.containerInfo)}catch(x){ce(t,t.return,x)}break;case 4:gt(e,t),At(t);break;case 13:gt(e,t),At(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ld=fe())),r&4&&wf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||f,gt(e,t),be=u):gt(e,t),At(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(T=t,f=t.child;f!==null;){for(h=T=f;T!==null;){switch(p=T,_=p.child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Dr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:Dr(p,p.return);break;case 22:if(p.memoizedState!==null){Ef(h);continue}}_!==null?(_.return=p,T=_):Ef(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vg("display",o))}catch(x){ce(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ce(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(e,t),At(t),r&4&&wf(t);break;case 21:break;default:gt(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hs(i,""),r.flags&=-33);var s=xf(t);qu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xf(t);Qu(t,l,o);break;default:throw Error(E(161))}}catch(a){ce(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ox(t,e,n){T=t,Qm(t)}function Qm(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_o;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||be;l=_o;var u=be;if(_o=o,(be=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?Sf(i):a!==null?(a.return=o,T=a):Sf(i);for(;s!==null;)T=s,Qm(s),s=s.sibling;T=i,_o=l,be=u}kf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):kf(t)}}function kf(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&of(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}of(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ms(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}be||e.flags&512&&Ku(e)}catch(p){ce(e,e.return,p)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Ef(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Sf(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(a){ce(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ce(e,i,a)}}var s=e.return;try{Ku(e)}catch(a){ce(e,s,a)}break;case 5:var o=e.return;try{Ku(e)}catch(a){ce(e,o,a)}}}catch(a){ce(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var Lx=Math.ceil,ll=on.ReactCurrentDispatcher,sd=on.ReactCurrentOwner,ht=on.ReactCurrentBatchConfig,H=0,Ee=null,pe=null,Ie=0,et=0,Fr=zn(0),me=0,Ts=null,sr=0,Vl=0,od=0,rs=null,Be=null,ld=0,ri=1/0,Bt=null,al=!1,Yu=null,Tn=null,vo=!1,xn=null,ul=0,is=0,Xu=null,Oo=-1,Lo=0;function De(){return H&6?fe():Oo!==-1?Oo:Oo=fe()}function Rn(t){return t.mode&1?H&2&&Ie!==0?Ie&-Ie:yx.transition!==null?(Lo===0&&(Lo=bg()),Lo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:zg(t.type)),t):1}function St(t,e,n,r){if(50<is)throw is=0,Xu=null,Error(E(185));Us(t,n,r),(!(H&2)||t!==Ee)&&(t===Ee&&(!(H&2)&&(Vl|=n),me===4&&fn(t,Ie)),Qe(t,r),n===1&&H===0&&!(e.mode&1)&&(ri=fe()+500,Wl&&Un()))}function Qe(t,e){var n=t.callbackNode;y0(t,e);var r=Go(t,t===Ee?Ie:0);if(r===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?mx(Cf.bind(null,t)):im(Cf.bind(null,t)),hx(function(){!(H&6)&&Un()}),n=null;else{switch(Og(r)){case 1:n=Oc;break;case 4:n=Ng;break;case 16:n=Vo;break;case 536870912:n=Ag;break;default:n=Vo}n=ny(n,qm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qm(t,e){if(Oo=-1,Lo=0,H&6)throw Error(E(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=Go(t,t===Ee?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=H;H|=2;var s=Xm();(Ee!==t||Ie!==e)&&(Bt=null,ri=fe()+500,Zn(t,e));do try{Fx();break}catch(l){Ym(t,l)}while(!0);Gc(),ll.current=s,H=i,pe!==null?e=0:(Ee=null,Ie=0,e=me)}if(e!==0){if(e===2&&(i=Su(t),i!==0&&(r=i,e=Ju(t,i))),e===1)throw n=Ts,Zn(t,0),fn(t,r),Qe(t,fe()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mx(i)&&(e=cl(t,r),e===2&&(s=Su(t),s!==0&&(r=s,e=Ju(t,s))),e===1))throw n=Ts,Zn(t,0),fn(t,r),Qe(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Gn(t,Be,Bt);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=ld+500-fe(),10<e)){if(Go(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bu(Gn.bind(null,t,Be,Bt),e);break}Gn(t,Be,Bt);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lx(r/1960))-r,10<r){t.timeoutHandle=bu(Gn.bind(null,t,Be,Bt),r);break}Gn(t,Be,Bt);break;case 5:Gn(t,Be,Bt);break;default:throw Error(E(329))}}}return Qe(t,fe()),t.callbackNode===n?qm.bind(null,t):null}function Ju(t,e){var n=rs;return t.current.memoizedState.isDehydrated&&(Zn(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Be,Be=n,e!==null&&Zu(e)),t}function Zu(t){Be===null?Be=t:Be.push.apply(Be,t)}function Mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~od,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function Cf(t){if(H&6)throw Error(E(327));Vr();var e=Go(t,0);if(!(e&1))return Qe(t,fe()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=Su(t);r!==0&&(e=r,n=Ju(t,r))}if(n===1)throw n=Ts,Zn(t,0),fn(t,e),Qe(t,fe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gn(t,Be,Bt),Qe(t,fe()),null}function ad(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(ri=fe()+500,Wl&&Un())}}function or(t){xn!==null&&xn.tag===0&&!(H&6)&&Vr();var e=H;H|=1;var n=ht.transition,r=Q;try{if(ht.transition=null,Q=1,t)return t()}finally{Q=r,ht.transition=n,H=e,!(H&6)&&Un()}}function ud(){et=Fr.current,ne(Fr)}function Zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dx(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch($c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:ti(),ne(Ge),ne(Oe),Jc();break;case 5:Xc(r);break;case 4:ti();break;case 13:ne(le);break;case 19:ne(le);break;case 10:Kc(r.type._context);break;case 22:case 23:ud()}n=n.return}if(Ee=t,pe=t=Pn(t.current,null),Ie=et=e,me=0,Ts=null,od=Vl=sr=0,Be=rs=null,Yn!==null){for(e=0;e<Yn.length;e++)if(n=Yn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yn=null}return t}function Ym(t,e){do{var n=pe;try{if(Gc(),No.current=ol,sl){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(ir=0,ve=ge=ae=null,ts=!1,Ss=0,sd.current=null,n===null||n.return===null){me=1,Ts=e,pe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ie,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=hf(o);if(_!==null){_.flags&=-257,ff(_,o,l,s,e),_.mode&1&&df(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(a),e.updateQueue=x}else v.add(a);break e}else{if(!(e&1)){df(s,u,e),cd();break e}a=Error(E(426))}}else if(ie&&l.mode&1){var b=hf(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ff(b,o,l,s,e),Hc(ni(a,l));break e}}s=a=ni(a,l),me!==4&&(me=2),rs===null?rs=[s]:rs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Om(s,a,e);sf(s,m);break e;case 1:l=a;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Tn===null||!Tn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Lm(s,l,e);sf(s,w);break e}}s=s.return}while(s!==null)}Zm(n)}catch(I){e=I,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Xm(){var t=ll.current;return ll.current=ol,t===null?ol:t}function cd(){(me===0||me===3||me===2)&&(me=4),Ee===null||!(sr&268435455)&&!(Vl&268435455)||fn(Ee,Ie)}function cl(t,e){var n=H;H|=2;var r=Xm();(Ee!==t||Ie!==e)&&(Bt=null,Zn(t,e));do try{Dx();break}catch(i){Ym(t,i)}while(!0);if(Gc(),H=n,ll.current=r,pe!==null)throw Error(E(261));return Ee=null,Ie=0,me}function Dx(){for(;pe!==null;)Jm(pe)}function Fx(){for(;pe!==null&&!a0();)Jm(pe)}function Jm(t){var e=ty(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Zm(t):pe=e,sd.current=null}function Zm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nx(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,pe=null;return}}else if(n=Px(n,e,et),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);me===0&&(me=5)}function Gn(t,e,n){var r=Q,i=ht.transition;try{ht.transition=null,Q=1,jx(t,e,n,r)}finally{ht.transition=i,Q=r}return null}function jx(t,e,n,r){do Vr();while(xn!==null);if(H&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_0(t,s),t===Ee&&(pe=Ee=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,ny(Vo,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ht.transition,ht.transition=null;var o=Q;Q=1;var l=H;H|=4,sd.current=null,bx(t,n),Km(n,t),ix(Nu),Ko=!!Pu,Nu=Pu=null,t.current=n,Ox(n),u0(),H=l,Q=o,ht.transition=s}else t.current=n;if(vo&&(vo=!1,xn=t,ul=i),s=t.pendingLanes,s===0&&(Tn=null),h0(n.stateNode),Qe(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,t=Yu,Yu=null,t;return ul&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===Xu?is++:(is=0,Xu=t):is=0,Un(),null}function Vr(){if(xn!==null){var t=Og(ul),e=ht.transition,n=Q;try{if(ht.transition=null,Q=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,ul=0,H&6)throw Error(E(331));var i=H;for(H|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ns(8,f,s)}var h=f.child;if(h!==null)h.return=f,T=h;else for(;T!==null;){f=T;var p=f.sibling,_=f.return;if(Hm(f),f===u){T=null;break}if(p!==null){p.return=_,T=p;break}T=_}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ns(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var g=t.current;for(T=g;T!==null;){o=T;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,T=y;else e:for(o=g;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(I){ce(l,l.return,I)}if(l===o){T=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,T=w;break e}T=l.return}}if(H=i,Un(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Dl,t)}catch{}r=!0}return r}finally{Q=n,ht.transition=e}}return!1}function If(t,e,n){e=ni(n,e),e=Om(t,e,1),t=In(t,e,1),e=De(),t!==null&&(Us(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)If(t,t,n);else for(;e!==null;){if(e.tag===3){If(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=ni(n,t),t=Lm(e,t,1),e=In(e,t,1),t=De(),e!==null&&(Us(e,1,t),Qe(e,t));break}}e=e.return}}function zx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,Ee===t&&(Ie&n)===n&&(me===4||me===3&&(Ie&130023424)===Ie&&500>fe()-ld?Zn(t,0):od|=n),Qe(t,e)}function ey(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=De();t=en(t,e),t!==null&&(Us(t,e,n),Qe(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ey(t,n)}function Wx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),ey(t,n)}var ty;ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,Rx(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ie&&e.flags&1048576&&sm(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bo(t,e),t=e.pendingProps;var i=Jr(e,Oe.current);Hr(e,n),i=ed(null,e,r,t,i,n);var s=td();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qc(e),i.updater=$l,e.stateNode=i,i._reactInternals=e,zu(e,r,t,n),e=Bu(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Bc(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$x(r),t=mt(r,t),i){case 0:e=Wu(null,e,r,t,n);break e;case 1:e=mf(null,e,r,t,n);break e;case 11:e=pf(null,e,r,t,n);break e;case 14:e=gf(null,e,r,mt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Wu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),mf(t,e,r,i,n);case 3:e:{if(jm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dm(t,e),rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ni(Error(E(423)),e),e=yf(t,e,r,n,i);break e}else if(r!==i){i=ni(Error(E(424)),e),e=yf(t,e,r,n,i);break e}else for(tt=Cn(e.stateNode.containerInfo.firstChild),nt=e,ie=!0,_t=null,n=um(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===i){e=tn(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return hm(e),t===null&&Du(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Au(r,i)?o=null:s!==null&&Au(r,s)&&(e.flags|=32),Fm(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&Du(e),null;case 13:return zm(t,e,n);case 4:return Yc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ei(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),pf(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(tl,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ge.current){e=tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Yt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Fu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hr(e,n),i=ft(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),gf(t,e,r,i,n);case 15:return Mm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),bo(t,e),e.tag=1,Ke(r)?(t=!0,Jo(e)):t=!1,Hr(e,n),bm(e,r,i),zu(e,r,i,n),Bu(null,e,r,!0,t,n);case 19:return Um(t,e,n);case 22:return Dm(t,e,n)}throw Error(E(156,e.tag))};function ny(t,e){return Pg(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new Bx(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $x(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nc)return 11;if(t===Ac)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Tr:return er(n.children,i,s,e);case Pc:o=8,i|=8;break;case uu:return t=ct(12,n,e,i|2),t.elementType=uu,t.lanes=s,t;case cu:return t=ct(13,n,e,i),t.elementType=cu,t.lanes=s,t;case du:return t=ct(19,n,e,i),t.elementType=du,t.lanes=s,t;case hg:return Gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:o=10;break e;case dg:o=9;break e;case Nc:o=11;break e;case Ac:o=14;break e;case cn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function er(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=ct(22,t,r,e),t.elementType=hg,t.lanes=n,t.stateNode={isHidden:!1},t}function $a(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function Ha(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hd(t,e,n,r,i,s,o,l,a){return t=new Hx(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(s),t}function Vx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ry(t){if(!t)return Mn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ke(n))return rm(t,n,e)}return e}function iy(t,e,n,r,i,s,o,l,a){return t=hd(n,r,!0,t,i,s,o,l,a),t.context=ry(null),n=t.current,r=De(),i=Rn(n),s=Yt(r,i),s.callback=e??null,In(n,s,i),t.current.lanes=i,Us(t,i,r),Qe(t,r),t}function Kl(t,e,n,r){var i=e.current,s=De(),o=Rn(i);return n=ry(n),e.context===null?e.context=n:e.pendingContext=n,e=Yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=In(i,e,o),t!==null&&(St(t,i,o,s),Po(t,i,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fd(t,e){Tf(t,e),(t=t.alternate)&&Tf(t,e)}function Gx(){return null}var sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function pd(t){this._internalRoot=t}Ql.prototype.render=pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Kl(t,e,null,null)};Ql.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){Kl(null,t,null,null)}),e[Zt]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&jg(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function Kx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=dl(o);s.call(u)}}var o=iy(e,r,t,0,null,!1,!1,"",Rf);return t._reactRootContainer=o,t[Zt]=o.current,vs(t.nodeType===8?t.parentNode:t),or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=dl(a);l.call(u)}}var a=hd(t,0,!1,null,null,!1,!1,"",Rf);return t._reactRootContainer=a,t[Zt]=a.current,vs(t.nodeType===8?t.parentNode:t),or(function(){Kl(e,a,n,r)}),a}function Yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=dl(o);l.call(a)}}Kl(e,o,t,i)}else o=Kx(n,e,t,i,r);return dl(o)}Lg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gi(e.pendingLanes);n!==0&&(Lc(e,n|1),Qe(e,fe()),!(H&6)&&(ri=fe()+500,Un()))}break;case 13:or(function(){var r=en(t,1);if(r!==null){var i=De();St(r,t,1,i)}}),fd(t,1)}};Mc=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var n=De();St(e,t,134217728,n)}fd(t,134217728)}};Mg=function(t){if(t.tag===13){var e=Rn(t),n=en(t,e);if(n!==null){var r=De();St(n,t,e,r)}fd(t,e)}};Dg=function(){return Q};Fg=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};wu=function(t,e,n){switch(e){case"input":if(pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ul(r);if(!i)throw Error(E(90));pg(r),pu(r,i)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};Eg=ad;Sg=or;var Qx={usingClientEntryPoint:!1,Events:[Bs,Ar,Ul,wg,kg,ad]},ji={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Dl=xo.inject(qx),Lt=xo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(E(200));return Vx(t,e,null,n)};it.createRoot=function(t,e){if(!gd(t))throw Error(E(299));var n=!1,r="",i=sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hd(t,1,!1,null,null,n,!1,r,i),t[Zt]=e.current,vs(t.nodeType===8?t.parentNode:t),new pd(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return or(t)};it.hydrate=function(t,e,n){if(!ql(e))throw Error(E(200));return Yl(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iy(e,null,t,1,n??null,i,!1,s,o),t[Zt]=e.current,vs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};it.render=function(t,e,n){if(!ql(e))throw Error(E(200));return Yl(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!ql(t))throw Error(E(40));return t._reactRootContainer?(or(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[Zt]=null})}),!0):!1};it.unstable_batchedUpdates=ad;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Yl(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(t){console.error(t)}}oy(),og.exports=it;var Yx=og.exports,Pf=Yx;lu.createRoot=Pf.createRoot,lu.hydrateRoot=Pf.hydrateRoot;const Xx="/assets/alira-CVWaGqH7.jpg",Jx=()=>{};var Nf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,h=(s&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new ew;const p=s<<2|l>>4;if(r.push(p),u!==64){const _=l<<4&240|u>>2;if(r.push(_),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(t){const e=ay(t);return md.encodeByteArray(e,!0)},hl=function(t){return uy(t).replace(/\./g,"")},fl=function(t){try{return md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){return cy(void 0,t)}function cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nw(n)||(t[n]=cy(t[n],e[n]));return t}function nw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=()=>rw().__FIREBASE_DEFAULTS__,sw=()=>{if(typeof process>"u"||typeof Nf>"u")return;const t=Nf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ow=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fl(t[1]);return e&&JSON.parse(e)},yd=()=>{try{return Jx()||iw()||sw()||ow()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dy=t=>{var e,n;return(n=(e=yd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lw=t=>{const e=dy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hy=()=>{var t;return(t=yd())==null?void 0:t.config},fy=t=>{var e;return(e=yd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function uw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dw(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hw(){return ly.NODE_ADMIN===!0}function fw(){try{return typeof indexedDB=="object"}catch{return!1}}function pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gw,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,l,r)}}function mw(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Rs(fl(s[0])||""),n=Rs(fl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yw=function(t){const e=gy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_w=function(t){const e=gy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ec(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Af(s)&&Af(o)){if(!lr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):h<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const p=(i<<5|i>>>27)+u+a+f+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function xw(t,e){const n=new ww(t,e);return n.subscribe.bind(n)}class ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Va),i.error===void 0&&(i.error=Va),i.complete===void 0&&(i.complete=Va);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Va(){}function Xl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function my(t){return(await fetch(t,{credentials:"include"})).ok}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iw(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cw(t){return t===Kn?void 0:t}function Iw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Rw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Pw=Y.INFO,Nw={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Aw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Nw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=Pw,this._logHandler=Aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const bw=(t,e)=>e.some(n=>t instanceof n);let bf,Of;function Ow(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lw(){return Of||(Of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,tc=new WeakMap,_y=new WeakMap,Ga=new WeakMap,xd=new WeakMap;function Mw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yy.set(n,t)}).catch(()=>{}),xd.set(e,t),e}function Dw(t){if(tc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tc.set(t,e)}let nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_y.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fw(t){nc=t(nc)}function jw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ka(this),e,...n);return _y.set(r,e.sort?e.sort():[e]),Nn(r)}:Lw().includes(t)?function(...e){return t.apply(Ka(this),e),Nn(yy.get(this))}:function(...e){return Nn(t.apply(Ka(this),e))}}function zw(t){return typeof t=="function"?jw(t):(t instanceof IDBTransaction&&Dw(t),bw(t,Ow())?new Proxy(t,nc):t)}function Nn(t){if(t instanceof IDBRequest)return Mw(t);if(Ga.has(t))return Ga.get(t);const e=zw(t);return e!==t&&(Ga.set(t,e),xd.set(e,t)),e}const Ka=t=>xd.get(t);function Uw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ww=["get","getKey","getAll","getAllKeys","count"],Bw=["put","add","delete","clear"],Qa=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Bw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ww.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Qa.set(e,s),s}Fw(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",Mf="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new vd("@firebase/app"),Vw="@firebase/app-compat",Gw="@firebase/analytics-compat",Kw="@firebase/analytics",Qw="@firebase/app-check-compat",qw="@firebase/app-check",Yw="@firebase/auth",Xw="@firebase/auth-compat",Jw="@firebase/database",Zw="@firebase/data-connect",e1="@firebase/database-compat",t1="@firebase/functions",n1="@firebase/functions-compat",r1="@firebase/installations",i1="@firebase/installations-compat",s1="@firebase/messaging",o1="@firebase/messaging-compat",l1="@firebase/performance",a1="@firebase/performance-compat",u1="@firebase/remote-config",c1="@firebase/remote-config-compat",d1="@firebase/storage",h1="@firebase/storage-compat",f1="@firebase/firestore",p1="@firebase/ai",g1="@firebase/firestore-compat",m1="firebase",y1="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="[DEFAULT]",_1={[rc]:"fire-core",[Vw]:"fire-core-compat",[Kw]:"fire-analytics",[Gw]:"fire-analytics-compat",[qw]:"fire-app-check",[Qw]:"fire-app-check-compat",[Yw]:"fire-auth",[Xw]:"fire-auth-compat",[Jw]:"fire-rtdb",[Zw]:"fire-data-connect",[e1]:"fire-rtdb-compat",[t1]:"fire-fn",[n1]:"fire-fn-compat",[r1]:"fire-iid",[i1]:"fire-iid-compat",[s1]:"fire-fcm",[o1]:"fire-fcm-compat",[l1]:"fire-perf",[a1]:"fire-perf-compat",[u1]:"fire-rc",[c1]:"fire-rc-compat",[d1]:"fire-gcs",[h1]:"fire-gcs-compat",[f1]:"fire-fst",[g1]:"fire-fst-compat",[p1]:"fire-vertex","fire-js":"fire-js",[m1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,v1=new Map,sc=new Map;function Df(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(sc.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of gl.values())Df(n,t);for(const n of v1.values())Df(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Hs("app","Firebase",x1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=y1;function vy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ic,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw Gt.create("no-options");const s=gl.get(i);if(s)if(lr(n,s.options)){if(lr(r,s.config))return s;throw Gt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Gt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Tw(i);for(const a of sc.values())o.addComponent(a);const l=new w1(n,r,o);return gl.set(i,l),l}function xy(t=ic){const e=gl.get(t);if(!e&&t===ic&&hy())return vy();if(!e)throw Gt.create("no-app",{appName:t});return e}function An(t,e,n){let r=_1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(o.join(" "));return}si(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="firebase-heartbeat-database",E1=1,Ps="firebase-heartbeat-store";let qa=null;function wy(){return qa||(qa=Uw(k1,E1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),qa}async function S1(t){try{const n=(await wy()).transaction(Ps),r=await n.objectStore(Ps).get(ky(t));return await n.done,r}catch(e){if(e instanceof Wn)nn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function Ff(t,e){try{const r=(await wy()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(e,ky(t)),await r.done}catch(n){if(n instanceof Wn)nn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(r.message)}}}function ky(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=1024,I1=30;class T1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>I1){const o=N1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jf(),{heartbeatsToSend:r,unsentEntries:i}=R1(this._heartbeatsCache.heartbeats),s=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return nn.warn(n),""}}}function jf(){return new Date().toISOString().substring(0,10)}function R1(t,e=C1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class P1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fw()?pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await S1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ff(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ff(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zf(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}function N1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){si(new ar("platform-logger",e=>new $w(e),"PRIVATE")),si(new ar("heartbeat",e=>new T1(e),"PRIVATE")),An(rc,Mf,t),An(rc,Mf,"esm2020"),An("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A1("");var b1="firebase",O1="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(b1,O1,"app");var Uf={};const Wf="@firebase/database",Bf="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ey="";function L1(t){Ey=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new M1(e)}}catch{}return new D1},Jn=Sy("localStorage"),F1=Sy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new vd("@firebase/database"),j1=function(){let t=1;return function(){return t++}}(),Cy=function(t){const e=Ew(t),n=new vw;n.update(e);const r=n.digest();return md.encodeByteArray(r)},Gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gs.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let ss=null,$f=!0;const z1=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Gr.logLevel=Y.VERBOSE,ss=Gr.log.bind(Gr)},Ce=function(...t){if($f===!0&&($f=!1,ss===null&&F1.get("logging_enabled")===!0&&z1()),ss){const e=Gs.apply(null,t);ss(e)}},Ks=function(t){return function(...e){Ce(t,...e)}},oc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gs(...t);Gr.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${Gs(...t)}`;throw Gr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Gs(...t);Gr.warn(e)},U1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},W1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",ur="[MAX_NAME]",mr=function(t,e){if(t===e)return 0;if(t===oi||e===ur)return-1;if(e===oi||t===ur)return 1;{const n=Hf(t),r=Hf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},B1=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Ed=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=Ed(t[e[r]]);return n+="}",n},Iy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ty=function(t){S(!kd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let h="";for(a=0;a<64;a+=8){let p=parseInt(f.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},$1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function V1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const G1=new RegExp("^-?(0*)\\d{1,10}$"),K1=-2147483648,Q1=2147483647,Hf=function(t){if(G1.test(t)){const e=Number(t);if(e>=K1&&e<=Q1)return e}return null},vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},q1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Do{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Do.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="5",Ry="v",Py="s",Ny="r",Ay="f",by=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Oy="ls",Ly="p",lc="ac",My="websocket",Dy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function J1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jy(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===My)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);J1(t)&&(n.ns=t.namespace);const i=[];return Re(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={},Xa={};function Cd(t){const e=t.toString();return Ya[e]||(Ya[e]=new Z1),Ya[e]}function ek(t,e){const n=t.toString();return Xa[n]||(Xa[n]=e()),Xa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="start",nk="close",rk="pLPCommand",ik="pRTLPCB",zy="id",Uy="pw",Wy="ser",sk="cb",ok="seg",lk="ts",ak="d",uk="dframe",By=1870,$y=30,ck=By-$y,dk=25e3,hk=3e4;class jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ks(e),this.stats_=Cd(n),this.urlFn=a=>(this.appCheckToken&&(a[lc]=this.appCheckToken),jy(n,Dy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hk)),W1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vf)this.id=l,this.password=a;else if(o===nk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vf]="t",r[Wy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ry]=Sd,this.transportSessionId&&(r[Py]=this.transportSessionId),this.lastSessionId&&(r[Oy]=this.lastSessionId),this.applicationId&&(r[Ly]=this.applicationId),this.appCheckToken&&(r[lc]=this.appCheckToken),typeof location<"u"&&location.hostname&&by.test(location.hostname)&&(r[Ny]=Ay);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$1()&&!H1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uy(n),i=Iy(r,ck);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uk]="t",r[zy]=e,r[Uy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j1(),window[rk+this.uniqueCallbackIdentifier]=e,window[ik+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zy]=this.myID,e[Uy]=this.myPW,e[Wy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$y+r.length<=By;){const o=this.pendingSegs.shift();r=r+"&"+ok+i+"="+o.seg+"&"+lk+i+"="+o.ts+"&"+ak+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=16384,pk=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class xt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ks(this.connId),this.stats_=Cd(n),this.connURL=xt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ry]=Sd,typeof location<"u"&&location.hostname&&by.test(location.hostname)&&(o[Ny]=Ay),n&&(o[Py]=n),r&&(o[Oy]=r),i&&(o[lc]=i),s&&(o[Ly]=s),jy(e,My,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{let r;hw(),this.mySock=new ml(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ml!==null&&!xt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iy(n,fk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static get ALL_TRANSPORTS(){return[jr,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=xt&&xt.isAvailable();let r=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xt];else{const i=this.transports_=[];for(const s of Ns.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ns.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=6e4,mk=5e3,yk=10*1024,_k=100*1024,Ja="t",Gf="d",vk="s",Kf="r",xk="e",Qf="o",qf="a",Yf="n",Xf="p",wk="h";class kk{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ks("c:"+this.id+":"),this.transportManager_=new Ns(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_k?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===qf?this.upgradeIfSecondaryHealthy_():n===Kf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),r=zi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),r=zi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(Ja,e);if(Gf in e){const r=e[Gf];if(n===wk){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vk?this.onConnectionShutdown_(r):n===Kf?this.onReset_(r):n===xk?oc("Server Error: "+r):n===Qf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Vy{static getInstance(){return new yl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=32,Zf=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new X("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Td(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ek(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function As(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return He(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sk(t,e){const n=As(t,0),r=As(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=mr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Rd(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ck{constructor(e,n){this.errorPrefix_=n,this.parts_=As(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jl(this.parts_[r]);Ky(this)}}function Ik(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),Ky(t)}function Tk(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ky(t){if(t.byteLength_>Zf)throw new Error(t.errorPrefix_+"has a key path longer than "+Zf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jf+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Vy{static getInstance(){return new Pd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=1e3,Rk=60*5*1e3,ep=30*1e3,Pk=1.3,Nk=3e4,Ak="server_kill",tp=3;class Xt extends Hy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Xt.nextPersistentConnectionId_++,this.log_=Ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=Rk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new mi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_w(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ep)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):oc("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nk&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,l=new kk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ak)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ec(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ed(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tp&&(this.reconnectDelay_=ep,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ey.replace(/\./g,"-")]=1,_d()?e["framework.cordova"]=1:py()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yl.getInstance().currentlyOnline();return ec(this.interruptReasons_)&&e}}Xt.nextPersistentConnectionId_=0;Xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(oi,e),i=new U(oi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;class Qy extends Zl{static get __EMPTY_NODE(){return wo}static set __EMPTY_NODE(e){wo=e}compare(e,n){return mr(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(ur,wo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,wo)}toString(){return".key"}}const Kr=new Qy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class bk{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new bk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e){return mr(t.name,e.name)}function Nd(t,e){return mr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;function Lk(t){ac=t}const qy=function(t){return typeof t=="number"?"number:"+Ty(t):"string:"+t},Yy=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else S(t===ac||t.isEmpty(),"priority of unexpected type.");S(t===ac||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;class _e{static set __childrenNodeConstructor(e){np=e}static get __childrenNodeConstructor(){return np}constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:z(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ty(this.value_):e+=this.value_,this.lazyHash_=Cy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xy,Jy;function Mk(t){Xy=t}function Dk(t){Jy=t}class Fk extends Zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(ur,new _e("[PRIORITY-POST]",Jy))}makePost(e,n){const r=Xy(e);return new U(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const he=new Fk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=Math.log(2);class zk{constructor(e){const n=s=>parseInt(Math.log(s)/jk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _l=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let h,p;if(f===0)return null;if(f===1)return h=t[a],p=n?n(h):h,new xe(p,h.node,xe.BLACK,null,null);{const _=parseInt(f/2,10)+a,v=i(a,_),x=i(_+1,u);return h=t[_],p=n?n(h):h,new xe(p,h.node,xe.BLACK,v,x)}},s=function(a){let u=null,f=null,h=t.length;const p=function(v,x){const b=h-v,m=h;h-=v;const g=i(b+1,m),y=t[b],w=n?n(y):y;_(new xe(w,y.node,x,null,g))},_=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const x=a.nextBitIsOne(),b=Math.pow(2,a.count-(v+1));x?p(b,xe.BLACK):(p(b,xe.BLACK),p(b,xe.RED))}return f},o=new zk(t.length),l=s(o);return new Ve(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const Cr={};class Kt{static get Default(){return S(Cr&&he,"ChildrenNode.ts has not been loaded"),Za=Za||new Kt({".priority":Cr},{".priority":he}),Za}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=_l(r,e.getCompare()):l=Cr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Kt(f,u)}addToIndexes(e,n){const r=pl(this.indexes_,(i,s)=>{const o=ii(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),_l(l,o.getCompare())}else return Cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=pl(this.indexes_,i=>{if(i===Cr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Kt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;class M{static get EMPTY_NODE(){return Wi||(Wi=new M(new Ve(Nd),null,Kt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yy(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wi}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wi:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wi:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{S(z(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qy(this.getPriority().val())+":"),this.forEachChild(he,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Cy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qs?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(he),i=n.getIterator(he);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uk extends M{constructor(){super(new Ve(Nd),M.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Qs=new Uk;Object.defineProperties(U,{MIN:{value:new U(oi,M.EMPTY_NODE)},MAX:{value:new U(ur,Qs)}});Qy.__EMPTY_NODE=M.EMPTY_NODE;_e.__childrenNodeConstructor=M;Lk(Qs);Dk(Qs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=!0;function we(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,we(e))}if(!(t instanceof Array)&&Wk){const n=[];let r=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return M.EMPTY_NODE;const s=_l(n,Ok,o=>o.name,Nd);if(r){const o=_l(n,he.getCompare());return new M(s,we(e),new Kt({".priority":o},{".priority":he}))}else return new M(s,we(e),Kt.Default)}else{let n=M.EMPTY_NODE;return Re(t,(r,i)=>{if(jt(t,r)&&r.substring(0,1)!=="."){const s=we(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(we(e))}}Mk(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends Zl{constructor(e){super(),this.indexPath_=e,S(!B(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}makePost(e,n){const r=we(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Qs);return new U(ur,e)}toString(){return As(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k extends Zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=we(e);return new U(n,r)}toString(){return".value"}}const Hk=new $k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){return{type:"value",snapshotNode:t}}function li(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(bs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(li(n,r)):o.trackChildChange(Os(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(he,(i,s)=>{n.hasChild(i)||r.trackChildChange(bs(i,s))}),n.isLeafNode()||n.forEachChild(he,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Os(i,s,o))}else r.trackChildChange(li(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.indexedFilter_=new Ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ls.getStartPost_(e),this.endPost_=Ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(he,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(p,_)=>h(_,p)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,a);if(f&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Os(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(bs(n,h));const x=l.updateImmediateChild(n,M.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(li(p.name,p.node)),x.updateImmediateChild(p.name,p.node)):x}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(bs(u.name,u.node)),s.trackChildChange(li(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ur}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kk(t){return t.loadsAllData()?new Ad(t.getIndex()):t.hasLimit()?new Gk(t):new Ls(t)}function Qk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function rp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===Hk?n="$value":t.index_===Kr?n="$key":(S(t.index_ instanceof Bk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ip(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Hy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ks("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vl.getListenId_(e,r),l={};this.listens_[o]=l;const a=rp(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let h=f;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ii(this.listens_,o)===l){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",i(p,null)}})}unlisten(e,n){const r=vl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rp(e._queryParams),r=e._path.toString(),i=new mi;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Rs(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){return{value:null,children:new Map}}function e_(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,xl());const i=t.children.get(r);e=Z(e),e_(i,e,n)}}function uc(t,e,n){t.value!==null?n(e,t.value):Yk(t,(r,i)=>{const s=new X(e.toString()+"/"+r);uc(i,s,n)})}function Yk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Re(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=10*1e3,Jk=30*1e3,Zk=5*60*1e3;class eE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Xk(e);const r=sp+(Jk-sp)*Math.random();os(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(i,s)=>{s>0&&jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*Zk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Md(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Od()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new wl(K(),n,this.revert)}}else return S(z(this.path)===e,"operationForChild called for unrelated child."),new wl(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Ms(this.source,K()):new Ms(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return B(this.path)?new cr(this.source,K(),this.snap.getImmediateChild(e)):new cr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new cr(this.source,K(),n.value):new ai(this.source,K(),n)}else return S(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Vk(o.childName,o.snapshotNode))}),Bi(t,i,"child_removed",e,r,n),Bi(t,i,"child_added",e,r,n),Bi(t,i,"child_moved",s,r,n),Bi(t,i,"child_changed",e,r,n),Bi(t,i,"value",e,r,n),i}function Bi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>iE(t,l,a)),o.forEach(l=>{const a=rE(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function rE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iE(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){return{eventCache:t,serverCache:e}}function ls(t,e,n,r){return ea(new dr(e,n,r),t.serverCache)}function t_(t,e,n,r){return ea(t.eventCache,new dr(e,n,r))}function cc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const sE=()=>(eu||(eu=new Ve(B1)),eu);class J{static fromObject(e){let n=new J(null);return Re(e,(r,i)=>{n=n.set(new X(r),i)}),n}constructor(e,n=sE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(B(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:de(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new J(null)}}set(e,n){if(B(e))return new J(n,this.children);{const r=z(e),s=(this.children.get(r)||new J(null)).set(Z(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(B(e))return n;{const r=z(e),s=(this.children.get(r)||new J(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),de(n,i),r):new J(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new J(null))}}function as(t,e,n){if(B(e))return new Ct(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function dc(t,e,n){let r=t;return Re(n,(i,s)=>{r=as(r,de(e,i),s)}),r}function op(t,e){if(B(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Ct(n)}}function hc(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function lp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function bn(t,e){if(B(e))return t;{const n=yr(t,e);return n!=null?new Ct(new J(n)):new Ct(t.writeTree_.subtree(e))}}function fc(t){return t.writeTree_.isEmpty()}function ui(t,e){return n_(K(),t.writeTree_,e)}function n_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n_(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){return o_(e,t)}function oE(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=r}function lE(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=dc(t.visibleWrites,e,n),t.lastWriteId=r}function aE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function uE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&cE(l,r.path)?i=!1:dt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return dE(t),!0;if(r.snap)t.visibleWrites=op(t.visibleWrites,r.path);else{const l=r.children;Re(l,a=>{t.visibleWrites=op(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function cE(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(de(t.path,n),e))return!0;return!1}function dE(t){t.visibleWrites=r_(t.allWrites,hE,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hE(t){return t.visible}function r_(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)dt(n,o)?(l=He(n,o),r=as(r,l,s.snap)):dt(o,n)&&(l=He(o,n),r=as(r,K(),s.snap.getChild(l)));else if(s.children){if(dt(n,o))l=He(n,o),r=dc(r,l,s.children);else if(dt(o,n))if(l=He(o,n),B(l))r=dc(r,K(),s.children);else{const a=ii(s.children,z(l));if(a){const u=a.getChild(Z(l));r=as(r,K(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function i_(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=bn(t.visibleWrites,e);if(fc(o))return n;if(n==null&&!hc(o,K()))return null;{const l=n||M.EMPTY_NODE;return ui(o,l)}}}else{const s=bn(t.visibleWrites,e);if(!i&&fc(s))return n;if(!i&&n==null&&!hc(s,K()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(dt(u.path,e)||dt(e,u.path))},l=r_(t.allWrites,o,e),a=n||M.EMPTY_NODE;return ui(l,a)}}}function fE(t,e,n){let r=M.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=bn(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=ui(bn(s,new X(o)),l);r=r.updateImmediateChild(o,a)}),lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=bn(t.visibleWrites,e);return lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function pE(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(hc(t.visibleWrites,s))return null;{const o=bn(t.visibleWrites,s);return fc(o)?i.getChild(n):ui(o,i.getChild(n))}}function gE(t,e,n,r){const i=de(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=bn(t.visibleWrites,i);return ui(o,r.getNode().getImmediateChild(n))}else return null}function mE(t,e){return yr(t.visibleWrites,e)}function yE(t,e,n,r,i,s,o){let l;const a=bn(t.visibleWrites,e),u=yr(a,K());if(u!=null)l=u;else if(n!=null)l=ui(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],h=o.getCompare(),p=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=p.getNext();for(;_&&f.length<i;)h(_,r)!==0&&f.push(_),_=p.getNext();return f}else return[]}function _E(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function kl(t,e,n,r){return i_(t.writeTree,t.treePath,e,n,r)}function Fd(t,e){return fE(t.writeTree,t.treePath,e)}function ap(t,e,n,r){return pE(t.writeTree,t.treePath,e,n,r)}function El(t,e){return mE(t.writeTree,de(t.treePath,e))}function vE(t,e,n,r,i,s){return yE(t.writeTree,t.treePath,e,n,r,i,s)}function jd(t,e,n){return gE(t.writeTree,t.treePath,e,n)}function s_(t,e){return o_(de(t.treePath,e),t.writeTree)}function o_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Os(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,bs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,li(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Os(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const l_=new wE;class zd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=vE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){return{filter:t}}function EE(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SE(t,e,n,r,i){const s=new xE;let o,l;if(n.type===wt.OVERWRITE){const u=n;u.source.fromUser?o=pc(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=Sl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===wt.MERGE){const u=n;u.source.fromUser?o=IE(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=gc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===wt.ACK_USER_WRITE){const u=n;u.revert?o=PE(t,e,u.path,r,i,s):o=TE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===wt.LISTEN_COMPLETE)o=RE(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const a=s.getChanges();return CE(e,o,a),{viewCache:o,changes:a}}function CE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Zy(cc(e)))}}function a_(t,e,n,r,i,s){const o=e.eventCache;if(El(r,n)!=null)return e;{let l,a;if(B(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hr(e),f=u instanceof M?u:M.EMPTY_NODE,h=Fd(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=kl(r,hr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){S(Dn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const h=ap(r,n,f,a);h!=null?l=t.filter.updatePriority(f,h):l=o.getNode()}else{const f=Z(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const p=ap(r,n,o.getNode(),a);p!=null?h=o.getNode().getImmediateChild(u).updateChild(f,p):h=o.getNode().getImmediateChild(u)}else h=jd(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,f,i,s):l=o.getNode()}}return ls(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Sl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),_,null)}else{const _=z(n);if(!a.isCompleteForPath(n)&&Dn(n)>1)return e;const v=Z(n),b=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=f.updatePriority(a.getNode(),b):u=f.updateChild(a.getNode(),_,b,v,l_,null)}const h=t_(e,u,a.isFullyInitialized()||B(n),f.filtersNodes()),p=new zd(i,h,s);return a_(t,h,n,i,p,l)}function pc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new zd(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ls(e,u,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ls(e,u,l.isFullyInitialized(),l.isFiltered());else{const p=Z(n),_=l.getNode().getImmediateChild(h);let v;if(B(p))v=r;else{const x=f.getCompleteChild(h);x!=null?Td(p)===".priority"&&x.getChild(Gy(p)).isEmpty()?v=x:v=x.updateChild(p,r):v=M.EMPTY_NODE}if(_.equals(v))a=e;else{const x=t.filter.updateChild(l.getNode(),h,v,p,f,o);a=ls(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function up(t,e){return t.eventCache.isCompleteForChild(e)}function IE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=de(n,a);up(e,z(f))&&(l=pc(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=de(n,a);up(e,z(f))||(l=pc(t,l,f,u,i,s,o))}),l}function cp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function gc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new J(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((h,p)=>{if(f.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=cp(t,_,p);a=Sl(t,a,new X(h),v,i,s,o,l)}}),u.children.inorderTraversal((h,p)=>{const _=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!f.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),x=cp(t,v,p);a=Sl(t,a,new X(h),x,i,s,o,l)}}),a}function TE(t,e,n,r,i,s,o){if(El(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Sl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new J(null);return a.getNode().forEachChild(Kr,(f,h)=>{u=u.set(new X(f),h)}),gc(t,e,n,u,i,s,l,o)}else return e}else{let u=new J(null);return r.foreach((f,h)=>{const p=de(n,f);a.isCompleteForPath(p)&&(u=u.set(f,a.getNode().getChild(p)))}),gc(t,e,n,u,i,s,l,o)}}function RE(t,e,n,r,i){const s=e.serverCache,o=t_(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return a_(t,o,n,r,l_,i)}function PE(t,e,n,r,i,s){let o;if(El(r,n)!=null)return e;{const l=new zd(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||z(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=kl(r,hr(e));else{const h=e.serverCache.getNode();S(h instanceof M,"serverChildren would be complete if leaf node"),f=Fd(r,h)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=z(n);let h=jd(r,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=a.getImmediateChild(f)),h!=null?u=t.filter.updateChild(a,f,h,Z(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,M.EMPTY_NODE,Z(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kl(r,hr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||El(r,K())!=null,ls(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ad(r.getIndex()),s=Kk(r);this.processor_=kE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,l.getNode(),null),f=new dr(a,o.isFullyInitialized(),i.filtersNodes()),h=new dr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ea(h,f),this.eventGenerator_=new tE(this.query_)}get query(){return this.query_}}function AE(t){return t.viewCache_.serverCache.getNode()}function bE(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function dp(t){return t.eventRegistrations_.length===0}function OE(t,e){t.eventRegistrations_.push(e)}function hp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fp(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(S(hr(t.viewCache_),"We should always have a full cache before handling merges"),S(cc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SE(t.processor_,i,e,n,r);return EE(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,u_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function LE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(s,o)=>{r.push(li(s,o))}),n.isFullyInitialized()&&r.push(Zy(n.getNode())),u_(t,r,n.getNode(),e)}function u_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class ME{constructor(){this.views=new Map}}function DE(t){S(!Cl,"__referenceConstructor has already been defined"),Cl=t}function FE(){return S(Cl,"Reference.ts has not been loaded"),Cl}function jE(t){return t.views.size===0}function Ud(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),fp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fp(o,e,n,r));return s}}function zE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=kl(n,i?r:null),a=!1;l?a=!0:r instanceof M?(l=Fd(n,r),a=!1):(l=M.EMPTY_NODE,a=!1);const u=ea(new dr(l,a,!1),new dr(r,i,!1));return new NE(e,u)}return o}function UE(t,e,n,r,i,s){const o=zE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OE(o,n),LE(o,n)}function WE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(hp(u,n,r)),dp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(hp(a,n,r)),dp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Fn(t)&&s.push(new(FE())(e._repo,e._path)),{removed:s,events:o}}function c_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qr(t,e){let n=null;for(const r of t.views.values())n=n||bE(r,e);return n}function d_(t,e){if(e._queryParams.loadsAllData())return ta(t);{const r=e._queryIdentifier;return t.views.get(r)}}function h_(t,e){return d_(t,e)!=null}function Fn(t){return ta(t)!=null}function ta(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;function BE(t){S(!Il,"__referenceConstructor has already been defined"),Il=t}function $E(){return S(Il,"Reference.ts has not been loaded"),Il}let HE=1;class pp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=_E(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function f_(t,e,n,r,i){return oE(t.pendingWriteTree_,e,n,r,i),i?xi(t,new cr(Od(),e,n)):[]}function VE(t,e,n,r){lE(t.pendingWriteTree_,e,n,r);const i=J.fromObject(n);return xi(t,new ai(Od(),e,i))}function wn(t,e,n=!1){const r=aE(t.pendingWriteTree_,e);if(uE(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(K(),!0):Re(r.children,o=>{s=s.set(new X(o),!0)}),xi(t,new wl(r.path,s,n))}else return[]}function na(t,e,n){return xi(t,new cr(Ld(),e,n))}function GE(t,e,n){const r=J.fromObject(n);return xi(t,new ai(Ld(),e,r))}function KE(t,e){return xi(t,new Ms(Ld(),e))}function QE(t,e,n){const r=Bd(t,n);if(r){const i=$d(r),s=i.path,o=i.queryId,l=He(s,e),a=new Ms(Md(o),l);return Hd(t,s,a)}else return[]}function mc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||h_(o,e))){const a=WE(o,e,n,r);jE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(p,_)=>Fn(_));if(f&&!h){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=XE(p);for(let v=0;v<_.length;++v){const x=_[v],b=x.query,m=m_(t,x);t.listenProvider_.startListening(us(b),Tl(t,b),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(us(e),null):u.forEach(p=>{const _=t.queryToTagMap.get(ra(p));t.listenProvider_.stopListening(us(p),_)}))}JE(t,u)}return l}function qE(t,e,n,r){const i=Bd(t,r);if(i!=null){const s=$d(i),o=s.path,l=s.queryId,a=He(o,e),u=new cr(Md(l),a,n);return Hd(t,o,u)}else return[]}function YE(t,e,n,r){const i=Bd(t,r);if(i){const s=$d(i),o=s.path,l=s.queryId,a=He(o,e),u=J.fromObject(n),f=new ai(Md(l),a,u);return Hd(t,o,f)}else return[]}function gp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const v=He(p,i);s=s||Qr(_,v),o=o||Fn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Fn(l),s=s||Qr(l,K())):(l=new ME,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const x=Qr(v,K());x&&(s=s.updateImmediateChild(_,x))}));const u=h_(l,e);if(!u&&!e._queryParams.loadsAllData()){const p=ra(e);S(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=ZE();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const f=Dd(t.pendingWriteTree_,i);let h=UE(l,e,n,f,s,a);if(!u&&!o&&!r){const p=d_(l,e);h=h.concat(eS(t,e,p))}return h}function Wd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),u=Qr(l,a);if(u)return u});return i_(i,e,s,n,!0)}function xi(t,e){return p_(e,t.syncPointTree_,null,Dd(t.pendingWriteTree_,K()))}function p_(t,e,n,r){if(B(t.path))return g_(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=Qr(i,K()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=s_(r,o);s=s.concat(p_(l,a,u,f))}return i&&(s=s.concat(Ud(i,t,r,n))),s}}function g_(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=Qr(i,K()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=s_(r,o),f=t.operationForChild(o);f&&(s=s.concat(g_(f,l,a,u)))}),i&&(s=s.concat(Ud(i,t,r,n))),s}function m_(t,e){const n=e.query,r=Tl(t,n);return{hashFn:()=>(AE(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QE(t,n._path,r):KE(t,n._path);{const s=V1(i,n);return mc(t,n,null,s)}}}}function Tl(t,e){const n=ra(e);return t.queryToTagMap.get(n)}function ra(t){return t._path.toString()+"$"+t._queryIdentifier}function Bd(t,e){return t.tagToQueryMap.get(e)}function $d(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Hd(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=Dd(t.pendingWriteTree_,e);return Ud(r,n,i,null)}function XE(t){return t.fold((e,n,r)=>{if(n&&Fn(n))return[ta(n)];{let i=[];return n&&(i=c_(n)),Re(r,(s,o)=>{i=i.concat(o)}),i}})}function us(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($E())(t._repo,t._path):t}function JE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ra(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ZE(){return HE++}function eS(t,e,n){const r=e._path,i=Tl(t,e),s=m_(t,n),o=t.listenProvider_.startListening(us(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,h)=>{if(!B(u)&&f&&Fn(f))return[ta(f).query];{let p=[];return f&&(p=p.concat(c_(f).map(_=>_.query))),Re(h,(_,v)=>{p=p.concat(v)}),p}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(us(f),Tl(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vd(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Gd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const tS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rS(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},rS=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},y_=function(t,e,n,r){return Kd(e,new Gd(n,t),r)},__=function(t,e,n){return Kd(t,new Vd(e),n)};function Kd(t,e,n){const r=t.getPriority().val(),i=mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,we(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(he,(l,a)=>{const u=Kd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qd(t,e){let n=e instanceof X?e:new X(e),r=t,i=z(n);for(;i!==null;){const s=ii(r.node.children,i)||{children:{},childCount:0};r=new Qd(i,r,s),n=Z(n),i=z(n)}return r}function wi(t){return t.node.value}function v_(t,e){t.node.value=e,yc(t)}function x_(t){return t.node.childCount>0}function iS(t){return wi(t)===void 0&&!x_(t)}function ia(t,e){Re(t.node.children,(n,r)=>{e(new Qd(n,t,r))})}function w_(t,e,n,r){n&&e(t),ia(t,i=>{w_(i,e,!0)})}function sS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function qs(t){return new X(t.parent===null?t.name:qs(t.parent)+"/"+t.name)}function yc(t){t.parent!==null&&oS(t.parent,t.name,t)}function oS(t,e,n){const r=iS(n),i=jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/[\[\].#$\/\u0000-\u001F\u007F]/,aS=/[\[\].#$\u0000-\u001F\u007F]/,tu=10*1024*1024,Yd=function(t){return typeof t=="string"&&t.length!==0&&!lS.test(t)},k_=function(t){return typeof t=="string"&&t.length!==0&&!aS.test(t)},uS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),k_(t)},cS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!kd(t)||t&&typeof t=="object"&&jt(t,".sv")},E_=function(t,e,n,r){r&&e===void 0||sa(Xl(t,"value"),e,n)},sa=function(t,e,n){const r=n instanceof X?new Ck(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(r)+" with contents = "+e.toString());if(kd(e))throw new Error(t+"contains "+e.toString()+" "+Qn(r));if(typeof e=="string"&&e.length>tu/3&&Jl(e)>tu)throw new Error(t+"contains a string greater than "+tu+" utf8 bytes "+Qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Yd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ik(r,o),sa(t,l,r),Tk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qn(r)+" in addition to actual children.")}},dS=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=As(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Yd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Sk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},hS=function(t,e,n,r){const i=Xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Re(e,(o,l)=>{const a=new X(o);if(sa(i,l,de(n,a)),Td(a)===".priority"&&!cS(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),dS(i,s)},S_=function(t,e,n,r){if(!k_(n))throw new Error(Xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(t,e,n)},C_=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},pS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uS(n))throw new Error(Xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Rd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function I_(t,e,n){oa(t,n),T_(t,r=>Rd(r,e))}function Tt(t,e,n){oa(t,n),T_(t,r=>dt(r,e)||dt(e,r))}function T_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ss&&Ce("event: "+n.toString()),vi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="repo_interrupt",_S=25;class vS{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xl(),this.transactionQueueTree_=new Qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xS(t,e,n){if(t.stats_=Cd(t.repoInfo_),t.forceRestClient_||q1())t.server_=new vl(t.repoInfo_,(r,i,s,o)=>{yp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xt(t.repoInfo_,e,(r,i,s,o)=>{yp(t,r,i,s,o)},r=>{_p(t,r)},r=>{wS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ek(t.repoInfo_,()=>new eE(t.stats_,t.server_)),t.infoData_=new qk,t.infoSyncTree_=new pp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=na(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Xd(t,"connected",!1),t.serverSyncTree_=new pp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Tt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function R_(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function la(t){return tS({timestamp:R_(t)})}function yp(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=pl(n,u=>we(u));o=YE(t.serverSyncTree_,s,a,i)}else{const a=we(n);o=qE(t.serverSyncTree_,s,a,i)}else if(r){const a=pl(n,u=>we(u));o=GE(t.serverSyncTree_,s,a)}else{const a=we(n);o=na(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ci(t,s)),Tt(t.eventQueue_,l,o)}function _p(t,e){Xd(t,"connected",e),e===!1&&SS(t)}function wS(t,e){Re(e,(n,r)=>{Xd(t,n,r)})}function Xd(t,e,n){const r=new X("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(r,i);const s=na(t.infoSyncTree_,r,i);Tt(t.eventQueue_,r,s)}function Jd(t){return t.nextWriteId_++}function kS(t,e,n,r,i){aa(t,"set",{path:e.toString(),value:n,priority:r});const s=la(t),o=we(n,r),l=Wd(t.serverSyncTree_,e),a=__(o,l,s),u=Jd(t),f=f_(t.serverSyncTree_,e,a,u,!0);oa(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const v=p==="ok";v||Fe("set at "+e+" failed: "+p);const x=wn(t.serverSyncTree_,u,!v);Tt(t.eventQueue_,e,x),_c(t,i,p,_)});const h=eh(t,e);ci(t,h),Tt(t.eventQueue_,h,[])}function ES(t,e,n,r){aa(t,"update",{path:e.toString(),value:n});let i=!0;const s=la(t),o={};if(Re(n,(l,a)=>{i=!1,o[l]=y_(de(e,l),we(a),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),_c(t,r,"ok",void 0);else{const l=Jd(t),a=VE(t.serverSyncTree_,e,o,l);oa(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,f)=>{const h=u==="ok";h||Fe("update at "+e+" failed: "+u);const p=wn(t.serverSyncTree_,l,!h),_=p.length>0?ci(t,e):e;Tt(t.eventQueue_,_,p),_c(t,r,u,f)}),Re(n,u=>{const f=eh(t,de(e,u));ci(t,f)}),Tt(t.eventQueue_,e,[])}}function SS(t){aa(t,"onDisconnectEvents");const e=la(t),n=xl();uc(t.onDisconnect_,K(),(i,s)=>{const o=y_(i,s,t.serverSyncTree_,e);e_(n,i,o)});let r=[];uc(n,K(),(i,s)=>{r=r.concat(na(t.serverSyncTree_,i,s));const o=eh(t,i);ci(t,o)}),t.onDisconnect_=xl(),Tt(t.eventQueue_,K(),r)}function CS(t,e,n){let r;z(e._path)===".info"?r=gp(t.infoSyncTree_,e,n):r=gp(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function vp(t,e,n){let r;z(e._path)===".info"?r=mc(t.infoSyncTree_,e,n):r=mc(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function IS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yS)}function aa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function _c(t,e,n,r){e&&vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function P_(t,e,n){return Wd(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Zd(t,e=t.transactionQueueTree_){if(e||ua(t,e),wi(e)){const n=A_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TS(t,qs(e),n)}else x_(e)&&ia(e,n=>{Zd(t,n)})}function TS(t,e,n){const r=n.map(u=>u.currentWriteId),i=P_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];S(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=He(e,f.path);s=s.updateChild(h,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{aa(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,f=f.concat(wn(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();ua(t,qd(t.transactionQueueTree_,e)),Zd(t,t.transactionQueueTree_),Tt(t.eventQueue_,e,f);for(let p=0;p<h.length;p++)vi(h[p])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}ci(t,e)}},o)}function ci(t,e){const n=N_(t,e),r=qs(n),i=A_(t,n);return RS(t,i,r),r}function RS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=He(n,a.path);let f=!1,h;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,h=a.abortReason,i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=_S)f=!0,h="maxretry",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else{const p=P_(t,a.path,o);a.currentInputSnapshot=p;const _=e[l].update(p.val());if(_!==void 0){sa("transaction failed: Data returned ",_,a.path);let v=we(_);typeof _=="object"&&_!=null&&jt(_,".priority")||(v=v.updatePriority(p.getPriority()));const b=a.currentWriteId,m=la(t),g=__(v,p,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=g,a.currentWriteId=Jd(t),o.splice(o.indexOf(b),1),i=i.concat(f_(t.serverSyncTree_,a.path,g,a.currentWriteId,a.applyLocally)),i=i.concat(wn(t.serverSyncTree_,b,!0))}else f=!0,h="nodata",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0))}Tt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}ua(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)vi(r[l]);Zd(t,t.transactionQueueTree_)}function N_(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&wi(r)===void 0;)r=qd(r,n),e=Z(e),n=z(e);return r}function A_(t,e){const n=[];return b_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function b_(t,e,n){const r=wi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ia(e,i=>{b_(t,i,n)})}function ua(t,e){const n=wi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,v_(e,n.length>0?n:void 0)}ia(e,r=>{ua(t,r)})}function eh(t,e){const n=qs(N_(t,e)),r=qd(t.transactionQueueTree_,e);return sS(r,i=>{nu(t,i)}),nu(t,r),w_(r,i=>{nu(t,i)}),n}function nu(t,e){const n=wi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?v_(e,void 0):n.length=s+1,Tt(t.eventQueue_,qs(e),i);for(let o=0;o<r.length;o++)vi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const xp=function(t,e){const n=AS(t),r=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||U1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},AS=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(f,h)),f<h&&(i=PS(t.substring(f,h)));const p=NS(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bS=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=wp.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=wp.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class LS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Td(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=ip(this._queryParams),n=Ed(e);return n==="{}"?"default":n}get _queryObject(){return ip(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof ca))return!1;const n=this._repo===e._repo,r=Rd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ek(this._path)}}class Bn extends ca{constructor(e,n){super(e,n,new bd,!1)}get parent(){const e=Gy(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=Ds(this.ref,e);return new Rl(this._node.getChild(n),r,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Rl(i,Ds(this.ref,r),he)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _r(t,e){return t=qe(t),t._checkNotDeleted("ref"),e!==void 0?Ds(t._root,e):t._root}function Ds(t,e){return t=qe(t),z(t._path)===null?fS("child","path",e):S_("child","path",e),new Bn(t._repo,de(t._path,e))}function DS(t,e){t=qe(t),C_("push",t._path),E_("push",e,t._path,!0);const n=R_(t._repo),r=bS(n),i=Ds(t,r),s=Ds(t,r);let o;return e!=null?o=th(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function th(t,e){t=qe(t),C_("set",t._path),E_("set",e,t._path,!1);const n=new mi;return kS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function O_(t,e){hS("update",e,t._path);const n=new mi;return ES(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class nh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new OS("value",this,new Rl(e.snapshotNode,new Bn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new LS(this,e,n):null}matches(e){return e instanceof nh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function FS(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,h)=>{vp(t._repo,t,l),a(f,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new MS(n,s||void 0),l=new nh(o);return CS(t._repo,t,l),()=>vp(t._repo,t,l)}function L_(t,e,n,r){return FS(t,"value",e,n,r)}class jS{}class zS extends jS{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ca(e._repo,e._path,Qk(e._queryParams,this._limit),e._orderByCalled)}}function US(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new zS(t)}function WS(t,...e){let n=qe(t);for(const r of e)n=r._apply(n);return n}DE(Bn);BE(Bn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="FIREBASE_DATABASE_EMULATOR_HOST",vc={};let $S=!1;function HS(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Vs(s);t.repoInfo_=new Fy(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function VS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xp(s,i),l=o.repoInfo,a;typeof process<"u"&&Uf&&(a=Uf[BS]),a?(s=`http://${a}?ns=${l.namespace}`,o=xp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new X1(t.name,t.options,e);pS("Invalid Firebase Database URL",o),B(o.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KS(l,t,u,new Y1(t,n));return new QS(f,t)}function GS(t,e){const n=vc[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IS(t),delete n[t.key]}function KS(t,e,n,r){let i=vc[e.name];i||(i={},vc[e.name]=i);let s=i[t.toURLString()];return s&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new vS(t,$S,n,r),i[t.toURLString()]=s,s}class QS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function qS(t=xy(),e){const n=wd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lw("database");r&&YS(n,...r)}return n}function YS(t,e,n,r={}){t=qe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&lr(r,s.repoInfo_.emulatorOptions))return;rn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Do(Do.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:aw(r.mockUserToken,t.app.options.projectId);o=new Do(l)}Vs(e)&&my(e),HS(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){L1(_i),si(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return VS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),An(Wf,Bf,t),An(Wf,Bf,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XS();function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=M_,D_=new Hs("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new vd("@firebase/auth");function Fo(t,...e){Pl.logLevel<=Y.WARN&&Pl.warn(`Auth (${_i}): ${t}`,...e)}function jo(t,...e){Pl.logLevel<=Y.ERROR&&Pl.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw ih(t,...e)}function Dt(t,...e){return ih(t,...e)}function rh(t,e,n){const r={...JS(),[e]:n};return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return rh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return D_.create(t,...e)}function O(t,e,...n){if(!t)throw ih(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ZS(){return kp()==="http:"||kp()==="https:"}function kp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||cw()||"connection"in navigator)?navigator.onLine:!0}function tC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=_d()||py()}get(){return eC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iC=new Ys(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function $n(t,e,n,r,i={}){return j_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yi({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return uw()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(u.credentials="include"),F_.fetch()(await z_(t,t.config.apiHost,n,l),u)})}async function j_(t,e,n){t._canInitEmulator=!1;const r={...nC,...e};try{const i=new oC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Eo(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rh(t,f,u);Rt(t,f)}}catch(i){if(i instanceof Wn)throw i;Rt(t,"network-request-failed",{message:String(i)})}}async function da(t,e,n,r,i={}){const s=await $n(t,e,n,r,i);return"mfaPendingCredential"in s&&Rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function z_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?sh(t.config,i):`${t.config.apiScheme}://${i}`;return rC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function sC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),iC.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}function Ep(t){return t!==void 0&&t.enterprise!==void 0}class lC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aC(t,e){return $n(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Nl(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cC(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=oh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cs(ru(i.auth_time)),issuedAtTime:cs(ru(i.iat)),expirationTime:cs(ru(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ru(t){return Number(t)*1e3}function oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=fl(n);return i?JSON.parse(i):(jo("Failed to decode base64 JWT payload"),null)}catch(i){return jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sp(t){const e=oh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&dC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Fs(t,Nl(e,{idToken:n}));O(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?U_(i.providerUserInfo):[],o=pC(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function fC(t){const e=qe(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){const n=await j_(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await z_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(a.credentials="include"),F_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(t,e){return $n(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await Fs(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:_,providerData:v,stsTokenManager:x}=n;O(h&&x,e,"internal-error");const b=qr.fromJSON(this.name,x);O(typeof h=="string",e,"internal-error"),un(r,e.name),un(i,e.name),O(typeof p=="boolean",e,"internal-error"),O(typeof _=="boolean",e,"internal-error"),un(s,e.name),un(o,e.name),un(l,e.name),un(a,e.name),un(u,e.name),un(f,e.name);const m=new kt({uid:h,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:f});return v&&Array.isArray(v)&&(m.providerData=v.map(g=>({...g}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new qr;i.updateFromServerResponse(n);const s=new kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new qr;l.updateFromIdToken(r);const a=new kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new Map;function qt(t){sn(t instanceof Function,"Expected a class definition");let e=Cp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W_.type="NONE";const Ip=W_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class tr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Nl(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new tr(qt(Ip),e,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||qt(Ip);const o=zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await Nl(e,{idToken:f}).catch(()=>{});if(!p)break;h=await kt._fromGetAccountInfoResponse(e,p,f)}else h=kt._fromJSON(e,f);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new tr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new tr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K_(e))return"Blackberry";if(Q_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(G_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=je()){return/firefox\//i.test(t)}function $_(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(t=je()){return/crios\//i.test(t)}function V_(t=je()){return/iemobile/i.test(t)}function G_(t=je()){return/android/i.test(t)}function K_(t=je()){return/blackberry/i.test(t)}function Q_(t=je()){return/webos/i.test(t)}function lh(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yC(t=je()){var e;return lh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _C(){return dw()&&document.documentMode===10}function q_(t=je()){return lh(t)||G_(t)||Q_(t)||K_(t)||/windows phone/i.test(t)||V_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=Tp(je());break;case"Worker":n=`${Tp(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e={}){return $n(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class kC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rp(this),this.idTokenSubscription=new Rp(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await tr.create(this,e)}catch(o){Fo(`Failed to initialize persistence: ${o}`),this.persistenceManager=await tr.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Fo(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nl(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(On(this));const n=e?qe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xC(this),n=new kC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}).catch(a=>{if(!o)if(typeof n!="function"&&n.error)n.error(a);else if(r)r(a);else throw a}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=rh(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Fo(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ki(t){return qe(t)}class Rp{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SC(t){ha=t}function X_(t){return ha.loadJS(t)}function CC(){return ha.recaptchaEnterpriseScript}function IC(){return ha.gapiScript}function TC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class RC{constructor(){this.enterprise=new PC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="recaptcha-enterprise",J_="NO_RECAPTCHA",Pp="onFirebaseAuthREInstanceReady";class pn{constructor(e){this.type=NC,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{aC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new lC(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Ep(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(J_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&Ep(window.grecaptcha)&&pn.scriptInjectionDeferred)await pn.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=CC();a.length!==0&&(a+=l+`&onload=${Pp}`),pn.scriptInjectionDeferred=new mi,window[Pp]=()=>{var u;(u=pn.scriptInjectionDeferred)==null||u.resolve()},X_(a).then(()=>{var u;return(u=pn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}pn.scriptInjectionDeferred=null;async function Np(t,e,n,r=!1,i=!1){const s=new pn(t);let o;if(i)o=J_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ap(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Np(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Np(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lr(s,e??{}))return i;Rt(i,"already-initialized")}return n.initialize({options:e})}function bC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=ki(t);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Z_(e),{host:o,port:l}=LC(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(lr(u,r.config.emulator)&&lr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vs(o)?my(`${s}//${o}${a}`):MC()}function Z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=Z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bp(o)}}}function bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function DC(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function zC(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends ah{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ap(e,n,"signInWithPassword",FC);case"emailLink":return jC(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ap(e,r,"signUpPassword",DC);case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="http://localhost";class fr extends ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:UC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=Qi(qi(t)).link,n=e?Qi(qi(e)).deep_link_id:null,r=Qi(qi(t)).deep_link_id;return(r?Qi(qi(r)).link:null)||r||n||e||t}class uh{constructor(e){const n=Qi(qi(e)),r=n.apiKey??null,i=n.oobCode??null,s=WC(n.mode??null);O(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=BC(e);try{return new uh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uh.parseLink(n);return O(r,"argument-error"),js._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Xs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Xs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Xs{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kt._fromIdTokenResponse(e,r,i),o=Op(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Op(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Op(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Wn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function $C(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const s=await Fs(t,tv(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=oh(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t,e,n=!1){if(vt(t.app))return Promise.reject(On(t));const r="signIn",i=await tv(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VC(t,e){return nv(ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function KC(t,e,n){return vt(t.app)?Promise.reject(On(t)):VC(qe(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GC(t),r})}function QC(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function qC(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}const Ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=1e3,XC=10;class iv extends rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_C()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const JC=iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sv.type="SESSION";const ov=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await ZC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ch("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function tI(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function nI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iI(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",sI=1,Ll="firebaseLocalStorage",uv="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function oI(){const t=indexedDB.deleteDatabase(av);return new Js(t).toPromise()}function cv(){const t=indexedDB.open(av,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:uv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await oI(),e(await cv()))})})}async function Lp(t,e,n){const r=pa(t,!0).put({[uv]:e,value:n});return new Js(r).toPromise()}async function lI(t,e){const n=pa(t,!1).get(e),r=await new Js(n).toPromise();return r===void 0?null:r.value}function Mp(t,e){const n=pa(t,!0).delete(e);return new Js(n).toPromise()}const aI=800,uI=3;class dv{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=cv(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uI)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(iI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await nI(),!this.activeServiceWorker)return;this.sender=new eI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Lp(e,Ol,"1"),await Mp(e,Ol)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=pa(i,!1).getAll();return new Js(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||Fo(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}dv.type="LOCAL";const cI=dv;new Ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e){return e?qt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return nv(t.auth,new dh(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),HC(n,new dh(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),$C(n,new dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:Rt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Ys(2e3,1e4);class zr extends hv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gI.get())};e()}}zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="pendingRedirect",Uo=new Map;class yI extends hv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=wI(e),r=xI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vI(t,e){Uo.set(t._key(),e)}function xI(t){return qt(t._redirectPersistence)}function wI(t){return zo(mI,t.config.apiKey,t.name)}async function kI(t,e,n=!1){if(vt(t.app))return Promise.reject(On(t));const r=ki(t),i=dI(r,e),o=await new yI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=10*60*1e3;class SI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(e))}saveEventToCache(e){this.cachedEventUids.add(Dp(e)),this.lastProcessedEventTime=Date.now()}}function Dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function PI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await II(t);for(const n of e)try{if(NI(n))return}catch{}Rt(t,"unauthorized-domain")}function NI(t){const e=xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RI.test(n))return!1;if(TI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Ys(3e4,6e4);function Fp(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bI(t){return new Promise((e,n)=>{var i,s,o;function r(){Fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(Dt(t,"network-request-failed"))},timeout:AI.get()})}if((s=(i=Ft().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ft().gapi)!=null&&o.load)r();else{const l=TC("iframefcb");return Ft()[l]=()=>{gapi.load?r():n(Dt(t,"network-request-failed"))},X_(`${IC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Wo=null,e})}let Wo=null;function OI(t){return Wo=Wo||bI(t),Wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new Ys(5e3,15e3),MI="__/auth/iframe",DI="emulator/auth/iframe",FI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sh(e,DI):`https://${t.config.authDomain}/${MI}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=jI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function UI(t){const e=await OI(t),n=Ft().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:zI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Ft().setTimeout(()=>{s(o)},LI.get());function a(){Ft().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,$I=600,HI="_blank",VI="http://localhost";class jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GI(t,e,n,r=BI,i=$I){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...WI,width:r.toString(),height:i.toString(),top:s,left:o},u=je().toLowerCase();n&&(l=H_(u)?HI:n),B_(u)&&(e=e||VI,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(yC(u)&&l!=="_self")return KI(e||"",l),new jp(null);const h=window.open(e||"",l,f);O(h,t,"popup-blocked");try{h.focus()}catch{}return new jp(h)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="__/auth/handler",qI="emulator/auth/handler",YI=encodeURIComponent("fac");async function zp(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof ev){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ec(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xs){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),u=a?`#${YI}=${encodeURIComponent(a)}`:"";return`${XI(t)}?${yi(l).slice(1)}${u}`}function XI({config:t}){return t.emulator?sh(t,qI):`https://${t.authDomain}/${QI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="webStorageSupport";class JI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ov,this._completeRedirectFn=kI,this._overrideRedirectResult=vI}async _openPopup(e,n,r,i){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await zp(e,n,r,xc(),i);return GI(e,s,ch())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zp(e,n,r,xc(),i);return tI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new SI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(iu,{type:iu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[iu];s!==void 0&&n(!!s),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||$_()||lh()}}const ZI=JI;var Up="@firebase/auth",Wp="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(t){si(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},u=new EC(r,i,s,a);return bC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new ar("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new eT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Up,Wp,tT(t)),An(Up,Wp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=5*60,iT=fy("authIdTokenMaxAge")||rT;let Bp=null;const sT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iT)return;const i=n==null?void 0:n.token;Bp!==i&&(Bp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oT(t=xy()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AC(t,{popupRedirectResolver:ZI,persistence:[cI,JC,ov]}),r=fy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sT(s.toString());qC(n,o,()=>o(n.currentUser)),QC(n,l=>o(l))}}const i=dy("auth");return i&&OC(n,`http://${i}`),n}function lT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}SC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");const aT={apiKey:"AIzaSyDy408fAd5Ux6ZfVwymp2_4KwCBMkCfqqg",databaseURL:"https://smart-greenhouse-85a01-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"smart-greenhouse-85a01"},pv=vy(aT),xr=qS(pv),uT=oT(pv);KC(uT,"akusayangcyrene@example.com","AkuSayangCyrene").then(()=>console.log("[Firebase] Web terautentikasi")).catch(t=>console.warn("[Firebase] Auth warning:",t.message));const cT=t=>th(_r(xr,"greenhouse/kontrol/modeOtomatis"),!!t),dT=t=>O_(_r(xr,"greenhouse"),{"kontrol/overrideManual":!!t,"pompa/statusPompa":!!t}),$p=(t,e,n)=>O_(_r(xr,"greenhouse/setting"),{batasKeringTanah:Number(t),batasBasahTanah:Number(e),waktuSiramMaksimal:Number(n)}),Hp=t=>DS(_r(xr,"greenhouse/riwayat"),t),hT=()=>th(_r(xr,"greenhouse/riwayat"),null),fT=t=>{const e=WS(_r(xr,"greenhouse/riwayat"),US(50));return L_(e,n=>{const r=n.val();if(!r){t(null);return}const i=Object.keys(r).map(s=>({...r[s],firebaseKey:s})).sort((s,o)=>(o.id||0)-(s.id||0));t(i)},n=>{console.warn("[Firebase] Error reading riwayat:",n)})};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gv=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>j.createElement("svg",{ref:a,...gT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:gv("lucide",i),...l},[...o.map(([u,f])=>j.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,e)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(mT,{ref:s,iconNode:e,className:gv(`lucide-${pT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=ye("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=ye("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=ye("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=ye("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=ye("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=ye("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=ye("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=ye("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=ye("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=ye("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]),d={linen:"#F7F1E8",cardBg:"#D5BDAF",bannerBg:"#C4A48E",dark:"#2E241E",muted:"#6E5E54",darkAlmond:"#8C6853",darkSage:"#5C7359",darkSlate:"#4D6B7C",textLight:"#FFF8F0"},$i=({top:t="7px",right:e="10px",opacity:n=.55})=>c.jsxs("svg",{width:"28",height:"12",viewBox:"0 0 28 12",style:{position:"absolute",top:t,right:e,pointerEvents:"none",zIndex:10},children:[c.jsx("circle",{cx:"5",cy:"5",r:"1.5",fill:"#FFF8F0",opacity:n}),c.jsx("line",{x1:"10",y1:"5",x2:"24",y2:"5",stroke:"#FFF8F0",strokeWidth:"2.5",strokeLinecap:"round",opacity:n})]}),NT=()=>c.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,minHeight:"100%",pointerEvents:"none",overflow:"hidden",zIndex:0},children:[c.jsxs("svg",{width:"110",height:"110",viewBox:"0 0 100 100",style:{position:"absolute",top:"6px",right:"-18px",opacity:1},children:[[0,45,90,135,180,225,270,315].map((t,e)=>{const n=t*Math.PI/180,r=50+33*Math.cos(n),i=50+33*Math.sin(n),s=50+43*Math.cos(n),o=50+43*Math.sin(n);return c.jsx("line",{x1:r,y1:i,x2:s,y2:o,stroke:d.dark,strokeWidth:"2.5",strokeLinecap:"round"},e)}),c.jsx("circle",{cx:"50",cy:"50",r:"28",fill:"#FFE89E",stroke:d.dark,strokeWidth:"2.5"}),c.jsx("path",{d:"M 40 48 Q 43 44 46 48",fill:"none",stroke:d.dark,strokeWidth:"2.2",strokeLinecap:"round"}),c.jsx("path",{d:"M 54 48 Q 57 44 60 48",fill:"none",stroke:d.dark,strokeWidth:"2.2",strokeLinecap:"round"}),c.jsx("path",{d:"M 47 53 Q 50 58 53 53",fill:"none",stroke:d.dark,strokeWidth:"2",strokeLinecap:"round"}),c.jsx("ellipse",{cx:"37",cy:"53",rx:"3",ry:"2",fill:"#E8A388",opacity:1}),c.jsx("ellipse",{cx:"63",cy:"53",rx:"3",ry:"2",fill:"#E8A388",opacity:1})]}),c.jsx("svg",{width:"90",height:"50",viewBox:"0 0 90 50",style:{position:"absolute",top:"170px",left:"-18px",opacity:1},children:c.jsx("path",{d:"M 20 40 Q 10 40 10 30 Q 10 20 22 18 Q 28 8 44 8 Q 60 8 66 18 Q 78 18 80 28 Q 82 40 70 40 Z",fill:"#FAF3EB",stroke:d.dark,strokeWidth:"2",strokeLinejoin:"round"})}),c.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",style:{position:"absolute",top:"115px",left:"26px",opacity:1},children:c.jsx("path",{d:"M 12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z",fill:"#FFE89E",stroke:d.dark,strokeWidth:"1.5"})}),c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",style:{position:"absolute",top:"320px",right:"16px",opacity:1},children:c.jsx("path",{d:"M 10 2 Q 10 10 2 10 Q 10 10 10 18 Q 10 10 18 10 Q 10 10 10 2 Z",fill:"#FAF3EB",stroke:d.dark,strokeWidth:"1.5"})}),c.jsx("svg",{width:"82",height:"46",viewBox:"0 0 80 45",style:{position:"absolute",top:"490px",right:"-24px",opacity:1},children:c.jsx("path",{d:"M 18 36 Q 8 36 8 26 Q 8 18 20 16 Q 26 8 40 8 Q 54 8 60 16 Q 72 16 74 25 Q 74 36 62 36 Z",fill:"#FAF3EB",stroke:d.dark,strokeWidth:"2",strokeLinejoin:"round"})}),c.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",style:{position:"absolute",top:"780px",right:"24px",opacity:1},children:c.jsx("path",{d:"M 11 2 Q 11 11 2 11 Q 11 11 11 20 Q 11 11 20 11 Q 11 11 11 2 Z",fill:"#FFE89E",stroke:d.dark,strokeWidth:"1.5"})})]});function AT(){const[t,e]=j.useState("dashboard"),[n,r]=j.useState(!1),[i,s]=j.useState(!0),[o,l]=j.useState(!1),[a,u]=j.useState(!1),[f,h]=j.useState(!1),[p,_]=j.useState("-"),[v,x]=j.useState(40),[b,m]=j.useState(65),[g,y]=j.useState(15),[w,I]=j.useState("semua"),[P,N]=j.useState(0),[A,se]=j.useState(0),[W,Ye]=j.useState(0),[zt,Xe]=j.useState(!1),[Zs,ga]=j.useState(0),[Si,Ci]=j.useState(18),[C,F]=j.useState(""),[D,oe]=j.useState({depan:[0,0,0,0,0,0],tengah:[0,0,0,0,0,0],belakang:[0,0,0,0,0,0]}),re=j.useRef(0);j.useEffect(()=>{const k=L_(_r(xr,"greenhouse"),q=>{const R=q.val();if(!R){Xe(!1);return}if(re.current=Date.now(),R.sistem?(R.sistem.online===!1?Xe(!1):Xe(!0),R.sistem.uptime!==void 0&&ga(Number(R.sistem.uptime)),R.sistem.jumlahSensorAktif!==void 0&&Ci(Number(R.sistem.jumlahSensorAktif))):Xe(!0),R.udara&&(R.udara.suhuUdara!==void 0&&N(Number(R.udara.suhuUdara)),R.udara.kelembabanUdara!==void 0&&se(Number(R.udara.kelembabanUdara))),R.tanah&&R.tanah.suhuTanah!==void 0&&Ye(Number(R.tanah.suhuTanah)),R.pompa&&(R.pompa.statusPompa!==void 0&&u(!!R.pompa.statusPompa),R.pompa.cooldownAktif!==void 0&&h(!!R.pompa.cooldownAktif),R.pompa.waktuSiramTerakhir&&_(String(R.pompa.waktuSiramTerakhir))),R.sensor){const Le=[],Nt=[],Hn=[];for(let Pe=0;Pe<6;Pe++)Le.push(R.sensor[`depan${Pe}`]!==void 0?Math.round(R.sensor[`depan${Pe}`]):0),Nt.push(R.sensor[`tengah${Pe}`]!==void 0?Math.round(R.sensor[`tengah${Pe}`]):0),Hn.push(R.sensor[`belakang${Pe}`]!==void 0?Math.round(R.sensor[`belakang${Pe}`]):0);oe({depan:Le,tengah:Nt,belakang:Hn})}R.setting&&(R.setting.batasKeringTanah!==void 0&&x(Number(R.setting.batasKeringTanah)),R.setting.batasBasahTanah!==void 0&&m(Number(R.setting.batasBasahTanah)),R.setting.waktuSiramMaksimal!==void 0&&y(Number(R.setting.waktuSiramMaksimal))),R.kontrol&&(R.kontrol.modeOtomatis!==void 0&&s(!!R.kontrol.modeOtomatis),R.kontrol.overrideManual!==void 0&&l(!!R.kontrol.overrideManual))}),L=setInterval(()=>{re.current>0&&Date.now()-re.current>12e3&&Xe(!1)},3e3),V=()=>{re.current>0&&Date.now()-re.current<12e3&&Xe(!0)},G=()=>Xe(!1);return window.addEventListener("online",V),window.addEventListener("offline",G),()=>{k(),clearInterval(L),window.removeEventListener("online",V),window.removeEventListener("offline",G)}},[]);const wr=k=>{if(!k)return"0d";const L=Math.floor(k/3600),V=Math.floor(k%3600/60),G=k%60;return L>0?`${L}j ${V}m ${G}d`:V>0?`${V}m ${G}d`:`${G}d`},Je=D.depan.reduce((k,L)=>k+L,0)/6,Ut=D.tengah.reduce((k,L)=>k+L,0)/6,Ze=D.belakang.reduce((k,L)=>k+L,0)/6,ot=(Je+Ut+Ze)/3,lt=!!(i?a:o),hh=[{id:1,tipe:"off",waktu:"10:45:15",tanggal:"Hari ini",keterangan:"Penyiraman Selesai",mode:"Otomatis",kelembaban:66.2,durasi:"18 dtk"},{id:2,tipe:"on",waktu:"10:44:57",tanggal:"Hari ini",keterangan:"Pompa Menyala (Penyiraman Dimulai)",mode:"Otomatis",kelembaban:37.8,durasi:"-"},{id:3,tipe:"off",waktu:"08:30:10",tanggal:"Hari ini",keterangan:"Penyiraman Selesai",mode:"Manual",kelembaban:65,durasi:"12 dtk"},{id:4,tipe:"on",waktu:"08:29:58",tanggal:"Hari ini",keterangan:"Pompa Menyala (Siram Manual)",mode:"Manual",kelembaban:39.1,durasi:"-"}],[Wt,eo]=j.useState(()=>{try{const k=localStorage.getItem("greenhouse_pump_logs");return k!==null?JSON.parse(k):hh}catch{return hh}});j.useEffect(()=>{const k=fT(L=>{if(L&&Array.isArray(L)&&L.length>0){eo(L);try{localStorage.setItem("greenhouse_pump_logs",JSON.stringify(L))}catch{}}});return()=>{typeof k=="function"&&k()}},[]);const fh=j.useRef(lt),to=j.useRef(null);j.useEffect(()=>{if(fh.current===lt)return;const L=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});if(lt){to.current=Date.now();const V={id:Date.now(),tipe:"on",waktu:L,tanggal:"Hari ini",keterangan:i?"Pompa Menyala (Penyiraman Otomatis)":"Pompa Menyala (Penyiraman Manual)",mode:i?"Otomatis":"Manual",kelembaban:Number(ot.toFixed(1)),durasi:"-"};eo(G=>{const q=[V,...G.filter(R=>R.id!==V.id)].slice(0,50);try{localStorage.setItem("greenhouse_pump_logs",JSON.stringify(q))}catch{}return q}),Hp(V).catch(()=>{})}else{let V="-";to.current&&(V=`${Math.max(1,Math.round((Date.now()-to.current)/1e3))} dtk`,to.current=null);const G={id:Date.now(),tipe:"off",waktu:L,tanggal:"Hari ini",keterangan:"Pompa Dimatikan (Penyiraman Selesai)",mode:i?"Otomatis":"Manual",kelembaban:Number(ot.toFixed(1)),durasi:V};eo(q=>{const R=[G,...q.filter(Le=>Le.id!==G.id)].slice(0,50);try{localStorage.setItem("greenhouse_pump_logs",JSON.stringify(R))}catch{}return R}),Hp(G).catch(()=>{})}fh.current=lt},[lt,i,ot]);const[We,Ii]=j.useState("idle"),[Pt,ma]=j.useState(!1),[ph,ya]=j.useState(0),Ti=j.useRef([]),gh=j.useRef(new Set),mh=()=>{Ti.current.forEach(k=>clearTimeout(k)),Ti.current=[]},yh=k=>{mh(),gh.current.add(k),ma(!0),Ii("start"),ya(0);const L=setTimeout(()=>{Ii("sweep-up")},30);Ti.current.push(L);const V=Date.now(),G=setInterval(()=>{const Le=Date.now()-V,Nt=Math.min(Le/520,1);ya(Number((Nt*100).toFixed(1))),Nt>=1&&clearInterval(G)},30),q=setTimeout(()=>{clearInterval(G),Ii("sweep-down");const Le=Number(ot||0),Nt=Date.now(),Hn=setInterval(()=>{const Pe=Date.now()-Nt,ln=Math.min(Pe/580,1),Pi=100-ln*(100-Le);ya(Number(Pi.toFixed(1))),ln>=1&&clearInterval(Hn)},30)},580);Ti.current.push(q);const R=setTimeout(()=>{Ii("idle"),ma(!1)},1250);Ti.current.push(R)};j.useEffect(()=>(yh("dashboard"),()=>mh()),[]);const[no,mv]=j.useState(()=>Array.from({length:10},()=>({depan:0,tengah:0,belakang:0})));j.useEffect(()=>{mv(k=>{const L={depan:Number(Je.toFixed(1)),tengah:Number(Ut.toFixed(1)),belakang:Number(Ze.toFixed(1))};return[...k.slice(1),L]})},[Je,Ut,Ze]);const kr=k=>no.map((L,V)=>{const G=Math.round(V/(no.length-1)*300),q=Math.max(0,Math.min(100,L[k]||0)),R=Math.round(85-q/100*70);return`${G},${R}`}).join(" "),yv=k=>k<v?{bg:d.darkAlmond,text:d.textLight,label:"Kering"}:k>b?{bg:d.darkSlate,text:d.textLight,label:"Basah"}:{bg:d.darkSage,text:d.textLight,label:"Normal"},Er=[...D.depan,...D.tengah,...D.belakang],_h=Er.filter(k=>k<v).length,vh=Er.filter(k=>k>b).length,_v=Er.length-_h-vh,Ri=k=>{F(k),setTimeout(()=>F(""),3e3)},vv=k=>{Pt||t===k||(e(k),gh.current.has(k)?(Ii("idle"),ma(!1)):yh(k))};return c.jsxs("div",{className:"app-screen-container",style:{color:d.dark,fontFamily:"'Nunito', sans-serif"},children:[Pt&&c.jsx("div",{style:{position:"absolute",inset:0,zIndex:9999,cursor:"not-allowed",userSelect:"none"}}),C&&c.jsxs("div",{style:{position:"absolute",bottom:"96px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#FAF3EB",color:d.dark,padding:"8px 18px",borderRadius:"20px",fontSize:"12px",fontWeight:"800",fontFamily:"'Fredoka', sans-serif",boxShadow:"3px 3px 0px #2E241E",zIndex:100,display:"flex",alignItems:"center",gap:"8px",border:`2px solid ${d.dark}`,whiteSpace:"nowrap",animation:"toastSlideUp 0.25s cubic-bezier(0.34, 1.25, 0.64, 1)",pointerEvents:"none"},children:[c.jsx(su,{size:16,color:d.darkSage}),C]}),c.jsxs("div",{style:{flexShrink:0,padding:"20px 24px 14px",backgroundColor:d.cardBg,borderBottom:`3px solid ${d.dark}`,display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:30},children:[c.jsxs("div",{children:[c.jsxs("h1",{style:{fontSize:"18px",fontWeight:"700",display:"flex",alignItems:"center",gap:"8px",color:d.dark,fontFamily:"'Fredoka', sans-serif",margin:0},children:[c.jsx(Gp,{size:20,color:d.dark,fill:d.dark})," Smart Greenhouse"]}),c.jsx("p",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",fontWeight:"700"},children:"AbasFarm v1.0"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",backgroundColor:zt?d.darkSage:d.darkAlmond,color:d.textLight,padding:"5px 10px",borderRadius:"8px",cursor:"default",userSelect:"none",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",transition:"background-color 0.3s ease"},children:[zt?c.jsx(RT,{size:14,color:d.textLight}):c.jsx(TT,{size:14,color:d.textLight}),c.jsx("span",{style:{fontSize:"11px",fontWeight:"800"},children:zt?"Online":"Offline"})]})]}),c.jsxs("div",{style:{flex:1,padding:"16px",overflowY:"auto",WebkitOverflowScrolling:"touch",paddingBottom:"20px",position:"relative"},children:[c.jsx(NT,{}),t==="dashboard"&&c.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{onClick:()=>r(!n),style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"14px",border:`3px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E",padding:"14px 16px",marginTop:"16px",display:"flex",flexDirection:"column",minHeight:"62px",overflow:"visible",cursor:"pointer",transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",userSelect:"none"},children:[c.jsx($i,{}),c.jsxs("div",{style:{position:"absolute",top:"-12px",left:"-8px",width:"52px",height:"52px",borderRadius:"13px",border:`2.5px solid ${d.dark}`,boxShadow:"2.5px 2.5px 0px #2E241E",backgroundColor:"#FAF3EB",overflow:"hidden",zIndex:5},children:[c.jsx("img",{src:Xx,alt:"ALIRA",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),c.jsx("div",{style:{position:"absolute",top:"3px",left:"4px",width:"16px",height:"5px",borderRadius:"3px",backgroundColor:"rgba(255, 255, 255, 0.6)",pointerEvents:"none"}})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",paddingLeft:"40px"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"17px",fontWeight:"800",color:d.dark,fontFamily:"'Fredoka', sans-serif",letterSpacing:"0.3px",lineHeight:"1.2"},children:"ALIRA"}),c.jsx("div",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",lineHeight:"1.3",fontWeight:"800",display:"flex",alignItems:"center",gap:"4px"},children:c.jsx("span",{children:"Lihat catatan"})})]}),c.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#FAF3EB",border:`1.5px solid ${d.dark}`,boxShadow:"1px 1px 0px #2E241E",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.35s cubic-bezier(0.34, 1.25, 0.64, 1)",transform:n?"rotate(90deg)":"rotate(0deg)"},children:c.jsx(_T,{size:14,color:d.dark})})]}),c.jsx("div",{style:{maxHeight:n?"300px":"0px",opacity:n?1:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease",marginTop:n?"12px":"0px",width:"100%"},children:c.jsxs("div",{style:{padding:"12px",backgroundColor:"#FAF3EB",borderRadius:"10px",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",fontSize:"11px",lineHeight:"1.6",color:d.dark,fontWeight:"600"},children:["ALIRA merupakan kepanjangan dari ",c.jsx("strong",{children:"Aksi Lingkungan Irigasi Ramah Alam"}),", merupakan kelompok pemuda institusi yang bergerak di bidang pertanian/perkebunan membantu menciptakan sistem irigasi cerdas ramah lingkungan berbasis IoT."]})})]}),(()=>{const k=Math.min(100,Math.max(0,ot))/100,L=We==="start"?0:We==="sweep-up"?1:k,V=298.5,G=V*(1-L),q=We==="idle"?ot:ph,R=q<v?d.darkAlmond:q>b?d.darkSlate:d.darkSage,Le=q<v?"kering":q>b?"basah":"optimal";return c.jsxs("div",{style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"10px",padding:"16px",border:`3px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E"},children:[c.jsx($i,{}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"13px",color:d.dark,fontWeight:"800"},children:"Kelembaban tanah rata-rata"}),c.jsx("div",{style:{fontSize:"10px",color:d.muted,fontWeight:"700"},children:"18 sensor terhubung"})]}),c.jsx("span",{style:{fontSize:"10px",fontWeight:"800",padding:"3px 8px",borderRadius:"6px",border:`2px solid ${d.dark}`,boxShadow:"1px 1px 0px #2E241E",backgroundColor:R,color:d.textLight},children:Le})]}),c.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"6px 0 10px"},children:c.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",style:{maxWidth:"100%",overflow:"visible"},children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"moisturePastelGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[c.jsx("stop",{offset:"0%",stopColor:"#F6B17A"}),c.jsx("stop",{offset:"28%",stopColor:"#F9D976"}),c.jsx("stop",{offset:"60%",stopColor:"#80B996"}),c.jsx("stop",{offset:"100%",stopColor:"#6C9BCF"})]})}),c.jsx("path",{d:"M 45 132 A 95 95 0 0 1 235 132",fill:"none",stroke:d.dark,strokeWidth:"20",strokeLinecap:"round"}),c.jsx("path",{d:"M 45 132 A 95 95 0 0 1 235 132",fill:"none",stroke:"#F5EBE0",strokeWidth:"12",strokeLinecap:"round"}),c.jsx("path",{d:"M 45 132 A 95 95 0 0 1 235 132",fill:"none",stroke:"url(#moisturePastelGrad)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:V,strokeDashoffset:G,style:{transition:"stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)"}}),c.jsxs("g",{style:{transformOrigin:"140px 132px",transformBox:"view-box",transform:`rotate(${L*180}deg)`,transition:"transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"},children:[c.jsx("circle",{cx:"45",cy:"132",r:"11.5",fill:R,stroke:d.dark,strokeWidth:"3"}),c.jsx("circle",{cx:"42.2",cy:"129.2",r:"3.2",fill:"#FFF8F0",opacity:"0.9"})]}),c.jsxs("text",{x:"140",y:"100",textAnchor:"middle",fill:d.dark,style:{fontFamily:"'Fredoka', sans-serif",fontSize:"36px",fontWeight:"700"},children:[(We==="idle"?ot:ph).toFixed(1),"%"]}),c.jsx("text",{x:"140",y:"118",textAnchor:"middle",fill:d.muted,style:{fontSize:"11px",fontWeight:"800"},children:"kelembaban tanah"}),c.jsx("text",{x:"42",y:"154",textAnchor:"middle",fill:d.muted,style:{fontSize:"10px",fontWeight:"800"},children:"0%"}),c.jsx("text",{x:"238",y:"154",textAnchor:"middle",fill:d.muted,style:{fontSize:"10px",fontWeight:"800"},children:"100%"})]})}),c.jsx("div",{style:{marginTop:"8px",paddingTop:"12px",borderTop:`2px dashed ${d.dark}`,display:"flex",justifyContent:"center"},children:c.jsxs("svg",{width:"100%",height:"54",viewBox:"0 0 320 54",style:{maxWidth:"340px",overflow:"visible",filter:"drop-shadow(2px 2px 0px #2E241E)"},children:[c.jsx("polygon",{points:"26,4 120,4 98,50 4,50",fill:d.darkAlmond,stroke:d.dark,strokeWidth:"2.5",strokeLinejoin:"round"}),c.jsx("polygon",{points:"120,4 214,4 192,50 98,50",fill:d.darkSage,stroke:d.dark,strokeWidth:"2.5",strokeLinejoin:"round"}),c.jsx("polygon",{points:"214,4 308,4 286,50 192,50",fill:d.darkSlate,stroke:d.dark,strokeWidth:"2.5",strokeLinejoin:"round"}),c.jsx("text",{x:"62",y:"22",textAnchor:"middle",fill:d.textLight,opacity:"0.9",style:{fontSize:"10px",fontWeight:"800"},children:"depan"}),c.jsxs("text",{x:"62",y:"41",textAnchor:"middle",fill:d.textLight,style:{fontFamily:"'Fredoka', sans-serif",fontSize:"15px",fontWeight:"700"},children:[Je.toFixed(1),"%"]}),c.jsx("text",{x:"156",y:"22",textAnchor:"middle",fill:d.textLight,opacity:"0.9",style:{fontSize:"10px",fontWeight:"800"},children:"tengah"}),c.jsxs("text",{x:"156",y:"41",textAnchor:"middle",fill:d.textLight,style:{fontFamily:"'Fredoka', sans-serif",fontSize:"15px",fontWeight:"700"},children:[Ut.toFixed(1),"%"]}),c.jsx("text",{x:"250",y:"22",textAnchor:"middle",fill:d.textLight,opacity:"0.9",style:{fontSize:"10px",fontWeight:"800"},children:"belakang"}),c.jsxs("text",{x:"250",y:"41",textAnchor:"middle",fill:d.textLight,style:{fontFamily:"'Fredoka', sans-serif",fontSize:"15px",fontWeight:"700"},children:[Ze.toFixed(1),"%"]})]})})]})})(),c.jsxs("div",{style:{position:"relative",backgroundColor:lt?d.bannerBg:d.cardBg,borderRadius:"10px",padding:"20px",border:`3px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E",display:"flex",flexDirection:"column",alignItems:"center",transition:"background-color 0.25s ease"},children:[c.jsx($i,{}),c.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:lt?d.darkSage:d.dark,display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",marginBottom:"12px",transition:"all 0.25s ease"},children:c.jsx(ou,{size:40,color:d.textLight})}),c.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:d.dark,letterSpacing:"0.5px",fontFamily:"'Fredoka', sans-serif",margin:0,transition:"color 0.25s ease"},children:lt?"Pompa Siram Aktif":f&&i?"Pompa Mati (Cooldown)":"Pompa Mati"}),c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginTop:"4px"},children:[c.jsxs("p",{style:{fontSize:"12px",color:d.muted,margin:0,fontWeight:"700"},children:["Terakhir siram: ",p&&p!=="-"?p:Wt.length>0?Wt[0].waktu:"-"]}),f&&!lt&&i&&c.jsx("span",{style:{fontSize:"11px",fontWeight:"800",color:d.darkAlmond,fontFamily:"'Fredoka', sans-serif"},children:"Cooldown Aktif"}),lt&&c.jsx("span",{style:{fontSize:"11px",fontWeight:"800",color:d.darkSage,fontFamily:"'Fredoka', sans-serif"},children:"Menyiram"})]}),c.jsxs("div",{style:{width:"100%",marginTop:"16px",paddingTop:"16px",borderTop:`2px dashed ${d.dark}`},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"14px",fontWeight:"800",color:d.dark},children:"Mode Otomatis"}),c.jsx("div",{style:{fontSize:"11px",color:d.muted,fontWeight:"700"},children:i?"Menyiram otomatis sesuai sensor":"Kontrol manual via tombol"})]}),c.jsx("button",{onClick:()=>{const k=!i;s(k),cT(k),Ri(`Mode Otomatis: ${k?"ON":"OFF"}`)},style:{width:"52px",height:"28px",borderRadius:"8px",backgroundColor:i?d.darkSage:d.darkAlmond,border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",cursor:"pointer",position:"relative",transition:"background-color 0.2s",flexShrink:0},children:c.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:d.textLight,position:"absolute",top:"2px",left:i?"26px":"2px",transition:"left 0.2s"}})})]}),i?c.jsxs("p",{style:{fontSize:"11px",color:d.muted,marginTop:"10px",textAlign:"center",fontWeight:"700",lineHeight:"1.4"},children:["Pompa menyala otomatis jika kelembaban tanah < ",v,"%. Ubah switch ke manual jika ingin menyalakan langsung dari web."]}):c.jsxs("div",{style:{width:"100%",marginTop:"12px",backgroundColor:"#FAF3EB",borderRadius:"10px",border:`2px solid ${d.dark}`,padding:"12px",boxShadow:"inset 1px 1px 0px rgba(255, 255, 255, 0.6), 2px 2px 0px #2E241E",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("span",{style:{fontSize:"12px",fontWeight:"800",color:d.dark,display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Kp,{size:14,color:o?d.darkAlmond:d.muted}),"Kontrol Pompa Manual"]}),c.jsx("span",{style:{fontSize:"10px",fontWeight:"900",padding:"2px 8px",borderRadius:"6px",border:`1.5px solid ${d.dark}`,backgroundColor:o?d.darkSage:d.darkAlmond,color:d.textLight},children:o?"Pompa Nyala":"Pompa Mati"})]}),c.jsxs("button",{onClick:()=>{const k=!o;l(k),dT(k),u(k),Ri(`Pompa Manual: ${k?"ON":"OFF"}`)},style:{width:"100%",padding:"10px",borderRadius:"8px",backgroundColor:o?d.darkAlmond:d.darkSage,color:d.textLight,border:`2px solid ${d.dark}`,boxShadow:"0 3px 0px #2E241E",fontWeight:"800",fontSize:"13px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontFamily:"'Fredoka', sans-serif"},children:[c.jsx(Kp,{size:16}),o?"Matikan Pompa Manual":"Nyalakan Pompa Manual"]})]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"},children:[c.jsxs("div",{style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"26px 26px 8px 8px",padding:"14px 8px 12px",textAlign:"center",border:`2.5px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E"},children:[c.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",backgroundColor:"#FAF3EB",border:`2px solid ${d.dark}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",boxShadow:"1.5px 1.5px 0px #2E241E"},children:c.jsx(Qp,{size:18,color:d.dark})}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"700",color:d.dark,fontFamily:"'Fredoka', sans-serif"},children:[P.toFixed(1),"°C"]}),c.jsx("div",{style:{fontSize:"10px",color:d.muted,marginTop:"2px",fontWeight:"800"},children:"Suhu Udara"})]}),c.jsxs("div",{style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"26px 8px 26px 8px",padding:"14px 8px 12px",textAlign:"center",border:`2.5px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E"},children:[c.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"14px 4px 14px 4px",backgroundColor:"#FAF3EB",border:`2px solid ${d.dark}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",boxShadow:"1.5px 1.5px 0px #2E241E"},children:c.jsx(PT,{size:18,color:d.dark})}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"700",color:d.dark,fontFamily:"'Fredoka', sans-serif"},children:[A.toFixed(1),"%"]}),c.jsx("div",{style:{fontSize:"10px",color:d.muted,marginTop:"2px",fontWeight:"800"},children:"Kelembaban Air"})]}),c.jsxs("div",{style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"8px 26px 8px 26px",padding:"14px 8px 12px",textAlign:"center",border:`2.5px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E"},children:[c.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"4px 14px 4px 14px",backgroundColor:"#FAF3EB",border:`2px solid ${d.dark}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px",boxShadow:"1.5px 1.5px 0px #2E241E"},children:c.jsx(Qp,{size:18,color:d.dark})}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"700",color:d.dark,fontFamily:"'Fredoka', sans-serif"},children:[W.toFixed(1),"°C"]}),c.jsx("div",{style:{fontSize:"10px",color:d.muted,marginTop:"2px",fontWeight:"800"},children:"Suhu Tanah"})]})]}),c.jsxs("div",{style:{position:"relative",backgroundColor:d.cardBg,borderRadius:"10px",padding:"16px",border:`3px solid ${d.dark}`,boxShadow:"inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E"},children:[c.jsx($i,{}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[c.jsxs("span",{style:{fontSize:"14px",fontWeight:"700",color:d.dark,display:"flex",alignItems:"center",gap:"6px",fontFamily:"'Fredoka', sans-serif"},children:[c.jsx(yT,{size:16,color:d.dark})," Grafik Kelembaban Real-time"]}),c.jsx("span",{style:{fontSize:"11px",color:d.muted,fontWeight:"800"},children:"10 titik terakhir"})]}),c.jsx("div",{style:{height:"120px",width:"100%",position:"relative",backgroundColor:"#FAF3EB",borderRadius:"8px",border:`2px solid ${d.dark}`,padding:"4px",boxSizing:"border-box"},children:c.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 300 100",preserveAspectRatio:"none",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"areaDepan",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:d.darkAlmond,stopOpacity:"0.35"}),c.jsx("stop",{offset:"100%",stopColor:d.darkAlmond,stopOpacity:"0.0"})]}),c.jsxs("linearGradient",{id:"areaTengah",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:d.darkSage,stopOpacity:"0.35"}),c.jsx("stop",{offset:"100%",stopColor:d.darkSage,stopOpacity:"0.0"})]}),c.jsxs("linearGradient",{id:"areaBelakang",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:d.darkSlate,stopOpacity:"0.35"}),c.jsx("stop",{offset:"100%",stopColor:d.darkSlate,stopOpacity:"0.0"})]})]}),c.jsx("line",{x1:"0",y1:"20",x2:"300",y2:"20",stroke:d.dark,strokeDasharray:"4",opacity:"0.15"}),c.jsx("line",{x1:"0",y1:"50",x2:"300",y2:"50",stroke:d.dark,strokeDasharray:"4",opacity:"0.15"}),c.jsx("line",{x1:"0",y1:"80",x2:"300",y2:"80",stroke:d.dark,strokeDasharray:"4",opacity:"0.15"}),c.jsx("polygon",{points:`0,85 ${kr("depan")} 300,85`,fill:"url(#areaDepan)"}),c.jsx("polygon",{points:`0,85 ${kr("tengah")} 300,85`,fill:"url(#areaTengah)"}),c.jsx("polygon",{points:`0,85 ${kr("belakang")} 300,85`,fill:"url(#areaBelakang)"}),c.jsx("polyline",{fill:"none",stroke:d.darkAlmond,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:kr("depan"),style:{transition:"all 0.5s ease"}}),c.jsx("polyline",{fill:"none",stroke:d.darkSage,strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round",points:kr("tengah"),style:{transition:"all 0.5s ease"}}),c.jsx("polyline",{fill:"none",stroke:d.darkSlate,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:kr("belakang"),style:{transition:"all 0.5s ease"}}),(()=>{const k=no[no.length-1],L=Math.round(85-Math.max(0,Math.min(100,k.depan||0))/100*70),V=Math.round(85-Math.max(0,Math.min(100,k.tengah||0))/100*70),G=Math.round(85-Math.max(0,Math.min(100,k.belakang||0))/100*70);return c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"300",cy:L,r:"3.5",fill:d.darkAlmond,stroke:d.dark,strokeWidth:"1.5"}),c.jsx("circle",{cx:"300",cy:V,r:"3.5",fill:d.darkSage,stroke:d.dark,strokeWidth:"1.5"}),c.jsx("circle",{cx:"300",cy:G,r:"3.5",fill:d.darkSlate,stroke:d.dark,strokeWidth:"1.5"})]})})()]})}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px",marginTop:"12px"},children:[c.jsxs("div",{style:{backgroundColor:d.darkAlmond,color:d.textLight,padding:"7px 4px",borderRadius:"6px",textAlign:"center",fontWeight:"800",fontSize:"11px",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",fontFamily:"'Fredoka', sans-serif"},children:["Depan: ",Je.toFixed(1),"%"]}),c.jsxs("div",{style:{backgroundColor:d.darkSage,color:d.textLight,padding:"7px 4px",borderRadius:"6px",textAlign:"center",fontWeight:"800",fontSize:"11px",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",fontFamily:"'Fredoka', sans-serif"},children:["Tengah: ",Ut.toFixed(1),"%"]}),c.jsxs("div",{style:{backgroundColor:d.darkSlate,color:d.textLight,padding:"7px 4px",borderRadius:"6px",textAlign:"center",fontWeight:"800",fontSize:"11px",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",fontFamily:"'Fredoka', sans-serif"},children:["Belakang: ",Ze.toFixed(1),"%"]})]})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"10px",padding:"14px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",fontSize:"12px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"8px",borderBottom:`1px dashed ${d.dark}`},children:[c.jsx("span",{style:{color:d.muted,fontWeight:"800"},children:"Sensor Aktif"}),c.jsxs("span",{style:{fontWeight:"800",color:d.darkSage},children:[Si," / 18 Online"]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:"8px"},children:[c.jsx("span",{style:{color:d.muted,fontWeight:"800"},children:"Uptime ESP32"}),c.jsx("span",{style:{fontWeight:"800",color:d.dark},children:wr(Zs)})]})]})]}),t==="sensor"&&c.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:"700",color:d.dark,display:"flex",alignItems:"center",gap:"8px",fontFamily:"'Fredoka', sans-serif",margin:0},children:[c.jsx(xT,{size:22,color:d.dark})," Detail 18 Sensor Tanah"]}),c.jsx("p",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",fontWeight:"700"},children:"Dikelompokkan per zona (Depan, Tengah, Belakang)"})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"20px",border:`2px solid ${d.dark}`,boxShadow:"4px 4px 0px #2E241E",padding:"20px 16px",position:"relative",overflow:"hidden"},children:[c.jsx($i,{top:"8px",right:"12px"}),c.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"12px"},children:[{label:"Kering",count:_h,color:d.darkAlmond,sub:`<${v}%`},{label:"Normal",count:_v,color:d.darkSage,sub:"optimal"},{label:"Basah",count:vh,color:d.darkSlate,sub:`>${b}%`}].map((k,L)=>{const V=Er.length>0?k.count/Er.length*100:0,G=We==="start"?0:We==="sweep-up"?100:V,q=32,R=2*Math.PI*q,Le=R-G/100*R;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[c.jsxs("div",{style:{position:"relative",width:"78px",height:"78px"},children:[c.jsxs("svg",{width:"78",height:"78",viewBox:"0 0 78 78",children:[c.jsx("circle",{cx:"39",cy:"39",r:q,fill:"none",stroke:d.linen,strokeWidth:"7"}),c.jsx("circle",{cx:"39",cy:"39",r:q,fill:"none",stroke:k.color,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:R,strokeDashoffset:Le,transform:"rotate(-90 39 39)",style:{transition:"stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)"}})]}),c.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},children:c.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:k.color,fontFamily:"'Fredoka', sans-serif",lineHeight:1},children:We==="sweep-up"?Er.length:k.count})})]}),c.jsx("div",{style:{fontSize:"11px",fontWeight:"800",color:d.dark,marginTop:"6px",fontFamily:"'Fredoka', sans-serif"},children:k.label}),c.jsx("div",{style:{fontSize:"9px",fontWeight:"700",color:d.muted},children:k.sub})]},L)})})]}),c.jsx("div",{style:{display:"flex",gap:"6px",overflowX:"auto",paddingBottom:"4px"},children:["semua","depan","tengah","belakang"].map(k=>c.jsx("button",{onClick:()=>I(k),style:{padding:"6px 14px",borderRadius:"8px",backgroundColor:w===k?d.dark:d.cardBg,color:w===k?d.textLight:d.dark,border:`2px solid ${d.dark}`,boxShadow:w===k?"2px 2px 0px #2E241E":"none",fontSize:"12px",fontWeight:"800",cursor:"pointer",textTransform:"capitalize",fontFamily:"'Fredoka', sans-serif"},children:k},k))}),["depan","tengah","belakang"].map((k,L)=>{if(w!=="semua"&&w!==k)return null;const V=D[k],G=V.reduce((Pe,ln)=>Pe+ln,0)/6,q=k.charAt(0).toUpperCase()+k.slice(1),R=d.bannerBg,Le=["28px 10px 28px 10px","10px 28px 10px 28px","28px 28px 10px 10px"],Nt=[["20px 6px 20px 6px","6px 20px 6px 20px","20px 20px 6px 6px","6px 6px 20px 20px","20px 6px 6px 20px","6px 20px 20px 6px"],["6px 6px 20px 20px","20px 6px 6px 20px","6px 20px 20px 6px","20px 6px 20px 6px","6px 20px 6px 20px","20px 20px 6px 6px"],["20px 20px 6px 6px","6px 20px 20px 6px","20px 6px 6px 20px","6px 20px 6px 20px","6px 6px 20px 20px","20px 6px 20px 6px"]],Hn=Nt[L%Nt.length];return c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:Le[L%Le.length],border:`2px solid ${d.dark}`,boxShadow:"4px 4px 0px #2E241E",overflow:"hidden",marginBottom:"4px"},children:[c.jsxs("div",{style:{background:`linear-gradient(135deg, ${R}, ${R}dd)`,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`2px solid ${d.dark}`},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"10px",backgroundColor:d.linen,display:"flex",alignItems:"center",justifyContent:"center",border:`1.5px solid ${d.dark}`,boxShadow:"1.5px 1.5px 0px #2E241E"},children:c.jsx(wT,{size:16,color:d.dark})}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontSize:"14px",fontWeight:"700",color:d.dark,fontFamily:"'Fredoka', sans-serif"},children:["Zona ",q]}),c.jsx("div",{style:{fontSize:"9px",fontWeight:"700",color:d.muted},children:"6 sensor aktif"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",backgroundColor:d.dark,padding:"6px 12px",borderRadius:"10px",border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E"},children:[c.jsx(Gp,{size:12,color:d.textLight}),c.jsxs("span",{style:{fontSize:"14px",fontWeight:"800",color:d.textLight,fontFamily:"'Fredoka', sans-serif"},children:[G.toFixed(1),"%"]})]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",padding:"10px"},children:V.map((Pe,ln)=>{const Pi=yv(Pe),xv=Math.min(100,Math.max(0,Pe)),wv=We==="start"?0:We==="sweep-up"?100:xv,Ni=28,_a=Math.PI*Ni,kv=_a-wv/100*_a;return c.jsxs("div",{style:{backgroundColor:d.linen,borderRadius:Hn[ln%Hn.length],padding:"12px 8px 10px",border:`1.5px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",position:"relative"},children:[c.jsxs("div",{style:{position:"relative",width:"68px",height:"38px"},children:[c.jsxs("svg",{width:"68",height:"38",viewBox:"0 0 62 38",children:[c.jsx("path",{d:`M 3 35 A ${Ni} ${Ni} 0 0 1 59 35`,fill:"none",stroke:d.cardBg,strokeWidth:"5",strokeLinecap:"round"}),c.jsx("path",{d:`M 3 35 A ${Ni} ${Ni} 0 0 1 59 35`,fill:"none",stroke:R,strokeWidth:"5",strokeLinecap:"round",strokeDasharray:_a,strokeDashoffset:kv,style:{transition:"stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)"}})]}),c.jsxs("div",{style:{position:"absolute",bottom:"0px",left:"50%",transform:"translateX(-50%)",fontSize:"15px",fontWeight:"700",color:d.dark,fontFamily:"'Fredoka', sans-serif",lineHeight:1},children:[We==="sweep-up"?100:Pe,"%"]})]}),c.jsxs("div",{style:{fontSize:"9px",fontWeight:"800",color:d.muted,textAlign:"center",lineHeight:1.2},children:["#",ln+1]}),c.jsx("div",{style:{fontSize:"8px",fontWeight:"800",backgroundColor:Pi.bg,color:Pi.text,padding:"2px 6px",borderRadius:"4px",lineHeight:1.2},children:Pi.label})]},ln)})})]},k)})]}),t==="setting"&&(()=>{const k=We==="start"?10:We==="sweep-up"?60:v,L=We==="start"?50:We==="sweep-up"?90:b,V=Math.min(100,Math.max(0,(k-10)/50*100)),G=Math.min(100,Math.max(0,(L-50)/40*100));return c.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:"14px"},children:[c.jsxs("div",{children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:"700",color:d.dark,display:"flex",alignItems:"center",gap:"8px",fontFamily:"'Fredoka', sans-serif",margin:0},children:[c.jsx(CT,{size:22,color:d.dark})," Konfigurasi Threshold"]}),c.jsx("p",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",fontWeight:"700"},children:"Pengaturan batas kelembaban penyiraman otomatis"})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"10px",padding:"16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontSize:"14px",fontWeight:"800",color:d.dark},children:"Batas Kering Tanah"}),c.jsxs("span",{style:{fontSize:"24px",fontWeight:"700",color:d.darkAlmond,fontFamily:"'Fredoka', sans-serif"},children:[k,"%"]})]}),c.jsxs("p",{style:{fontSize:"11px",color:d.muted,margin:"4px 0 12px",fontWeight:"700"},children:["Pompa menyala otomatis saat kelembaban ",c.jsxs("span",{style:{color:d.darkAlmond,fontWeight:"900"},children:["< ",k,"%"]})]}),c.jsxs("div",{style:{position:"relative",width:"100%",height:"26px",display:"flex",alignItems:"center",margin:"6px 0"},children:[c.jsx("div",{style:{position:"absolute",left:0,right:0,height:"10px",backgroundColor:d.linen,borderRadius:"6px",border:`2px solid ${d.dark}`,boxShadow:"inset 1px 1px 0px rgba(0,0,0,0.1)",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${V}%`,backgroundColor:d.darkAlmond,borderRadius:"4px",transition:"width 0.55s cubic-bezier(0.4, 0, 0.2, 1)"}})}),c.jsx("div",{style:{position:"absolute",left:`calc(${V}% - 11px)`,width:"22px",height:"22px",borderRadius:"50%",backgroundColor:d.dark,border:`2px solid ${d.dark}`,boxShadow:"1.5px 1.5px 0px #2E241E",transition:"left 0.55s cubic-bezier(0.4, 0, 0.2, 1)",pointerEvents:"none",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:d.textLight}})}),c.jsx("input",{type:"range",min:"10",max:"60",value:k,disabled:Pt,onChange:q=>x(Number(q.target.value)),style:{position:"absolute",left:0,right:0,width:"100%",height:"100%",opacity:0,cursor:Pt?"not-allowed":"pointer",zIndex:3,pointerEvents:Pt?"none":"auto"}})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:d.muted,marginTop:"4px",fontWeight:"800"},children:[c.jsx("span",{children:"10%"}),c.jsx("span",{children:"60%"})]})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"10px",padding:"16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontSize:"14px",fontWeight:"800",color:d.dark},children:"Batas Basah Tanah"}),c.jsxs("span",{style:{fontSize:"24px",fontWeight:"700",color:d.darkSlate,fontFamily:"'Fredoka', sans-serif"},children:[L,"%"]})]}),c.jsxs("p",{style:{fontSize:"11px",color:d.muted,margin:"4px 0 12px",fontWeight:"700"},children:["Pompa mati otomatis saat kelembaban ",c.jsxs("span",{style:{color:d.darkSlate,fontWeight:"900"},children:["> ",L,"%"]})]}),c.jsxs("div",{style:{position:"relative",width:"100%",height:"26px",display:"flex",alignItems:"center",margin:"6px 0"},children:[c.jsx("div",{style:{position:"absolute",left:0,right:0,height:"10px",backgroundColor:d.linen,borderRadius:"6px",border:`2px solid ${d.dark}`,boxShadow:"inset 1px 1px 0px rgba(0,0,0,0.1)",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${G}%`,backgroundColor:d.darkSlate,borderRadius:"4px",transition:"width 0.55s cubic-bezier(0.4, 0, 0.2, 1)"}})}),c.jsx("div",{style:{position:"absolute",left:`calc(${G}% - 11px)`,width:"22px",height:"22px",borderRadius:"50%",backgroundColor:d.dark,border:`2px solid ${d.dark}`,boxShadow:"1.5px 1.5px 0px #2E241E",transition:"left 0.55s cubic-bezier(0.4, 0, 0.2, 1)",pointerEvents:"none",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:d.textLight}})}),c.jsx("input",{type:"range",min:"50",max:"90",value:L,disabled:Pt,onChange:q=>m(Number(q.target.value)),style:{position:"absolute",left:0,right:0,width:"100%",height:"100%",opacity:0,cursor:Pt?"not-allowed":"pointer",zIndex:3,pointerEvents:Pt?"none":"auto"}})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:d.muted,marginTop:"4px",fontWeight:"800"},children:[c.jsx("span",{children:"50%"}),c.jsx("span",{children:"90%"})]})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"10px",padding:"16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E"},children:[c.jsx("span",{style:{fontSize:"13px",fontWeight:"800",color:d.dark},children:"Visualisasi Range Status"}),c.jsxs("div",{style:{display:"flex",height:"34px",borderRadius:"6px",overflow:"hidden",margin:"10px 0 6px",border:`2px solid ${d.dark}`},children:[c.jsx("div",{style:{flex:k,backgroundColor:d.darkAlmond,color:d.textLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"900",transition:"flex 0.55s ease"},children:"Kering"}),c.jsx("div",{style:{flex:Math.max(1,L-k),backgroundColor:d.darkSage,color:d.textLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"900",transition:"flex 0.55s ease"},children:"Normal"}),c.jsx("div",{style:{flex:Math.max(1,100-L),backgroundColor:d.darkSlate,color:d.textLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"900",transition:"flex 0.55s ease"},children:"Basah"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:d.muted,fontWeight:"800"},children:[c.jsx("span",{children:"0%"}),c.jsxs("span",{style:{color:d.darkAlmond},children:[k,"%"]}),c.jsxs("span",{style:{color:d.darkSlate},children:[L,"%"]}),c.jsx("span",{children:"100%"})]})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"18px",padding:"16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E"},children:[c.jsx("span",{style:{fontSize:"14px",fontWeight:"800",color:d.dark},children:"Waktu Siram Maksimal (Safety Timer)"}),c.jsx("p",{style:{fontSize:"11px",color:d.muted,margin:"4px 0 10px",fontWeight:"700"},children:"Pompa akan mati otomatis jika menyala melebihi durasi ini"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("input",{type:"number",min:"1",max:"60",value:g,onChange:q=>y(Number(q.target.value)),style:{backgroundColor:d.linen,border:`2px solid ${d.dark}`,borderRadius:"8px",padding:"10px 14px",color:d.dark,fontSize:"16px",fontWeight:"900",width:"90px",fontFamily:"'Fredoka', sans-serif"}}),c.jsx("span",{style:{fontSize:"14px",fontWeight:"700",color:d.muted},children:"menit"})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"6px"},children:[c.jsx("button",{onClick:()=>{x(40),m(65),y(15),$p(40,65,15),Ri("Threshold direset ke Default!")},style:{padding:"12px",borderRadius:"8px",backgroundColor:d.cardBg,border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",color:d.dark,fontSize:"13px",fontWeight:"800",cursor:"pointer",fontFamily:"'Fredoka', sans-serif"},children:"Reset Default"}),c.jsxs("button",{onClick:()=>{$p(v,b,g),Ri("Setting berhasil disimpan ke Firebase!")},style:{padding:"12px",borderRadius:"8px",backgroundColor:d.dark,border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",color:d.textLight,fontSize:"13px",fontWeight:"800",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",fontFamily:"'Fredoka', sans-serif"},children:[c.jsx(su,{size:16,color:d.textLight}),"Simpan Setting"]})]})]})})(),t==="history"&&c.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:"14px"},children:[c.jsxs("div",{children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:"700",color:d.dark,display:"flex",alignItems:"center",gap:"8px",fontFamily:"'Fredoka', sans-serif",margin:0},children:[c.jsx(Vp,{size:22,color:d.dark})," Log Riwayat Pompa"]}),c.jsx("p",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",fontWeight:"700"},children:"Catatan aktivitas penyiraman otomatis & manual"})]}),c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"12px",padding:"14px 16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",display:"flex",justifyContent:"space-around",alignItems:"center"},children:[c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"10px",color:d.muted,fontWeight:"800"},children:"Total Aktivitas"}),c.jsx("div",{style:{fontSize:"20px",fontWeight:"800",color:d.dark,fontFamily:"'Fredoka', sans-serif",marginTop:"2px"},children:Wt.length})]}),c.jsx("div",{style:{width:"2px",height:"28px",backgroundColor:d.dark,opacity:.2}}),c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"10px",color:d.muted,fontWeight:"800"},children:"Status Pompa"}),c.jsx("div",{style:{fontSize:"12px",fontWeight:"800",color:lt?d.darkSage:d.darkAlmond,marginTop:"4px",fontFamily:"'Fredoka', sans-serif"},children:lt?"Menyiram":"Standby"})]}),c.jsx("div",{style:{width:"2px",height:"28px",backgroundColor:d.dark,opacity:.2}}),c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"10px",color:d.muted,fontWeight:"800"},children:"Terakhir Siram"}),c.jsx("div",{style:{fontSize:"11px",fontWeight:"800",color:d.dark,fontFamily:"'Fredoka', sans-serif",marginTop:"4px"},children:p&&p!=="-"?p:Wt.length>0?Wt[0].waktu:"-"})]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2px",flexWrap:"wrap",gap:"8px"},children:[c.jsxs("span",{style:{fontSize:"12px",fontWeight:"800",color:d.dark,display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(vT,{size:14,color:d.dark})," Riwayat Terkini (",Wt.length,")"]}),Wt.length>0&&c.jsxs("button",{onClick:()=>{eo([]);try{localStorage.setItem("greenhouse_pump_logs","[]")}catch{}hT().catch(()=>{}),Ri("Riwayat log berhasil dibersihkan")},style:{display:"flex",alignItems:"center",gap:"4px",backgroundColor:d.linen,border:`1.5px solid ${d.dark}`,borderRadius:"6px",padding:"4px 8px",fontSize:"10.5px",fontWeight:"800",color:d.darkAlmond,cursor:"pointer",boxShadow:"1px 1px 0px #2E241E",fontFamily:"'Fredoka', sans-serif"},children:[c.jsx(IT,{size:12,color:d.darkAlmond})," Bersihkan"]})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Wt.length===0?c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"12px",padding:"28px 16px",border:`2px solid ${d.dark}`,boxShadow:"3px 3px 0px #2E241E",textAlign:"center"},children:[c.jsx(ou,{size:32,color:d.muted,style:{margin:"0 auto 8px",opacity:.6}}),c.jsx("div",{style:{fontSize:"13px",fontWeight:"800",color:d.dark},children:"Belum ada catatan aktivitas pompa"}),c.jsx("div",{style:{fontSize:"11px",color:d.muted,marginTop:"2px",fontWeight:"700"},children:"Aktivitas penyiraman otomatis atau manual akan tercatat di sini secara otomatis."})]}):Wt.map(k=>{const L=k.tipe==="on";return c.jsxs("div",{style:{backgroundColor:d.cardBg,borderRadius:"12px",padding:"12px 14px",border:`2px solid ${d.dark}`,boxShadow:"2.5px 2.5px 0px #2E241E",display:"flex",alignItems:"center",gap:"12px"},children:[c.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",backgroundColor:L?d.darkSlate:d.darkAlmond,border:`1.5px solid ${d.dark}`,boxShadow:"1.5px 1.5px 0px #2E241E",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:L?c.jsx(ou,{size:20,color:d.textLight}):c.jsx(su,{size:20,color:d.textLight})}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontSize:"12px",fontWeight:"800",color:d.dark,fontFamily:"'Fredoka', sans-serif"},children:k.keterangan}),c.jsx("span",{style:{fontSize:"10px",fontWeight:"800",color:d.muted},children:k.waktu})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px",flexWrap:"wrap"},children:[c.jsx("span",{style:{fontSize:"9px",fontWeight:"800",backgroundColor:k.mode==="Otomatis"?d.darkSage:d.darkAlmond,color:d.textLight,padding:"2px 6px",borderRadius:"4px",border:`1px solid ${d.dark}`},children:k.mode}),k.kelembaban!==void 0&&c.jsxs("span",{style:{fontSize:"10px",color:d.dark,fontWeight:"700"},children:["Kelembaban: ",c.jsxs("strong",{children:[k.kelembaban,"%"]})]}),k.durasi&&k.durasi!=="-"&&c.jsxs("span",{style:{fontSize:"10px",color:d.muted,fontWeight:"700"},children:["• Durasi: ",c.jsx("strong",{children:k.durasi})]})]})]})]},k.id)})})]})]}),c.jsx("div",{style:{flexShrink:0,height:"82px",backgroundColor:d.cardBg,borderTop:`3px solid ${d.dark}`,padding:"10px 14px 22px",zIndex:30,boxSizing:"border-box"},children:c.jsxs("div",{style:{position:"relative",display:"flex",gap:"6px",width:"100%",height:"100%",alignItems:"center"},children:[c.jsx("div",{style:{position:"absolute",top:"0px",bottom:"0px",left:0,width:"calc((100% - 18px) / 4)",backgroundColor:d.dark,border:`2px solid ${d.dark}`,boxShadow:"2px 2px 0px #2E241E",borderRadius:t==="dashboard"?"8px 8px 8px 28px":t==="history"?"8px 8px 28px 8px":"8px 8px 8px 8px",transform:`translateX(${t==="dashboard"?"0%":t==="sensor"?"calc(100% + 6px)":t==="setting"?"calc(200% + 12px)":"calc(300% + 18px)"})`,transition:"transform 0.35s cubic-bezier(0.34, 1.25, 0.64, 1), border-radius 0.3s ease",pointerEvents:"none",zIndex:1}}),[{key:"dashboard",label:"dashboard",Icon:kT},{key:"sensor",label:"sensor",Icon:ET},{key:"setting",label:"setting",Icon:ST},{key:"history",label:"history",Icon:Vp}].map(({key:k,label:L,Icon:V})=>{const G=t===k;return c.jsxs("button",{disabled:Pt,onClick:()=>vv(k),style:{position:"relative",zIndex:2,flex:1,height:"100%",background:"none",border:"none",outline:"none",padding:"6px 4px",color:G?d.textLight:d.muted,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4px",fontSize:"10.5px",fontWeight:"800",cursor:Pt?"not-allowed":"pointer",fontFamily:"'Fredoka', sans-serif",transition:"color 0.25s ease"},children:[c.jsx(V,{size:17,color:G?d.textLight:d.muted,style:{transition:"color 0.25s ease"}}),L]},k)})]})})]})}lu.createRoot(document.getElementById("root")).render(c.jsx(zv.StrictMode,{children:c.jsx(AT,{})}));
