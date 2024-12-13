(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xa(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ce={},Ji=[],Mn=()=>{},Qf=()=>!1,Wr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ya=n=>n.startsWith("onUpdate:"),Ae=Object.assign,qa=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},th=Object.prototype.hasOwnProperty,te=(n,t)=>th.call(n,t),Bt=Array.isArray,Qi=n=>Xr(n)==="[object Map]",au=n=>Xr(n)==="[object Set]",Gt=n=>typeof n=="function",ve=n=>typeof n=="string",ii=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",lu=n=>(fe(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),cu=Object.prototype.toString,Xr=n=>cu.call(n),eh=n=>Xr(n).slice(8,-1),uu=n=>Xr(n)==="[object Object]",$a=n=>ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cs=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nh=/-(\w)/g,ti=Yr(n=>n.replace(nh,(t,e)=>e?e.toUpperCase():"")),ih=/\B([A-Z])/g,Ri=Yr(n=>n.replace(ih,"-$1").toLowerCase()),fu=Yr(n=>n.charAt(0).toUpperCase()+n.slice(1)),oo=Yr(n=>n?`on${fu(n)}`:""),Ei=(n,t)=>!Object.is(n,t),ao=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},hu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},sh=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ul;const qr=()=>Ul||(Ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ve(i)?lh(i):ja(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ve(n)||fe(n))return n}const rh=/;(?![^(]*\))/g,oh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function lh(n){const t={};return n.replace(ah,"").split(rh).forEach(e=>{if(e){const i=e.split(oh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ka(n){let t="";if(ve(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Ka(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const ch="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uh=Xa(ch);function du(n){return!!n||n===""}const pu=n=>!!(n&&n.__v_isRef===!0),mu=n=>ve(n)?n:n==null?"":Bt(n)||fe(n)&&(n.toString===cu||!Gt(n.toString))?pu(n)?mu(n.value):JSON.stringify(n,_u,2):String(n),_u=(n,t)=>pu(t)?_u(n,t.value):Qi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[lo(i,r)+" =>"]=s,e),{})}:au(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>lo(e))}:ii(t)?lo(t):fe(t)&&!Bt(t)&&!uu(t)?String(t):t,lo=(n,t="")=>{var e;return ii(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class fh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=$e;try{return $e=this,t()}finally{$e=e}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hh(){return $e}let le;const co=new WeakSet;class gu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,co.has(this)&&(co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Il(this),Mu(this);const t=le,e=un;le=this,un=!0;try{return this.fn()}finally{Su(this),le=t,un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qa(t);this.deps=this.depsTail=void 0,Il(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let vu=0,Ps,Ds;function xu(n,t=!1){if(n.flags|=8,t){n.next=Ds,Ds=n;return}n.next=Ps,Ps=n}function Za(){vu++}function Ja(){if(--vu>0)return;if(Ds){let t=Ds;for(Ds=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ps;){let t=Ps;for(Ps=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Mu(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Su(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Qa(i),dh(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function $o(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Eu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Eu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!$o(n)){n.flags&=-3;return}const e=le,i=un;le=n,un=!0;try{Mu(n);const s=n.fn(n._value);(t.version===0||Ei(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=e,un=i,Su(n),n.flags&=-3}}function Qa(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Qa(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function dh(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let un=!0;const yu=[];function si(){yu.push(un),un=!1}function ri(){const n=yu.pop();un=n===void 0?!0:n}function Il(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=le;le=void 0;try{t()}finally{le=e}}}let Os=0;class ph{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!un||le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==le)e=this.activeLink=new ph(le,this),le.deps?(e.prevDep=le.depsTail,le.depsTail.nextDep=e,le.depsTail=e):le.deps=le.depsTail=e,bu(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=le.depsTail,e.nextDep=void 0,le.depsTail.nextDep=e,le.depsTail=e,le.deps===e&&(le.deps=i)}return e}trigger(t){this.version++,Os++,this.notify(t)}notify(t){Za();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ja()}}}function bu(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)bu(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const jo=new WeakMap,yi=Symbol(""),Ko=Symbol(""),Bs=Symbol("");function Pe(n,t,e){if(un&&le){let i=jo.get(n);i||jo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Tu),s.map=i,s.key=e),s.track()}}function Ln(n,t,e,i,s,r){const o=jo.get(n);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(Za(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&$a(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Bs||!ii(d)&&d>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Bs)),t){case"add":l?c&&a(o.get("length")):(a(o.get(yi)),Qi(n)&&a(o.get(Ko)));break;case"delete":l||(a(o.get(yi)),Qi(n)&&a(o.get(Ko)));break;case"set":Qi(n)&&a(o.get(yi));break}}Ja()}function Li(n){const t=se(n);return t===n?t:(Pe(t,"iterate",Bs),fn(n)?t:t.map(Ve))}function $r(n){return Pe(n=se(n),"iterate",Bs),n}const mh={__proto__:null,[Symbol.iterator](){return uo(this,Symbol.iterator,Ve)},concat(...n){return Li(this).concat(...n.map(t=>Bt(t)?Li(t):t))},entries(){return uo(this,"entries",n=>(n[1]=Ve(n[1]),n))},every(n,t){return Tn(this,"every",n,t,void 0,arguments)},filter(n,t){return Tn(this,"filter",n,t,e=>e.map(Ve),arguments)},find(n,t){return Tn(this,"find",n,t,Ve,arguments)},findIndex(n,t){return Tn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Tn(this,"findLast",n,t,Ve,arguments)},findLastIndex(n,t){return Tn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Tn(this,"forEach",n,t,void 0,arguments)},includes(...n){return fo(this,"includes",n)},indexOf(...n){return fo(this,"indexOf",n)},join(n){return Li(this).join(n)},lastIndexOf(...n){return fo(this,"lastIndexOf",n)},map(n,t){return Tn(this,"map",n,t,void 0,arguments)},pop(){return Ms(this,"pop")},push(...n){return Ms(this,"push",n)},reduce(n,...t){return Nl(this,"reduce",n,t)},reduceRight(n,...t){return Nl(this,"reduceRight",n,t)},shift(){return Ms(this,"shift")},some(n,t){return Tn(this,"some",n,t,void 0,arguments)},splice(...n){return Ms(this,"splice",n)},toReversed(){return Li(this).toReversed()},toSorted(n){return Li(this).toSorted(n)},toSpliced(...n){return Li(this).toSpliced(...n)},unshift(...n){return Ms(this,"unshift",n)},values(){return uo(this,"values",Ve)}};function uo(n,t,e){const i=$r(n),s=i[t]();return i!==n&&!fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const _h=Array.prototype;function Tn(n,t,e,i,s,r){const o=$r(n),a=o!==n&&!fn(n),l=o[t];if(l!==_h[t]){const f=l.apply(n,r);return a?Ve(f):f}let c=e;o!==n&&(a?c=function(f,d){return e.call(this,Ve(f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Nl(n,t,e,i){const s=$r(n);let r=e;return s!==n&&(fn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Ve(a),l,n)}),s[t](r,...i)}function fo(n,t,e){const i=se(n);Pe(i,"iterate",Bs);const s=i[t](...e);return(s===-1||s===!1)&&il(e[0])?(e[0]=se(e[0]),i[t](...e)):s}function Ms(n,t,e=[]){si(),Za();const i=se(n)[t].apply(n,e);return Ja(),ri(),i}const gh=Xa("__proto__,__v_isRef,__isVue"),Au=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function vh(n){ii(n)||(n=String(n));const t=se(this);return Pe(t,"has",n),t.hasOwnProperty(n)}class wu{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Rh:Du:r?Pu:Cu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=mh[e]))return l;if(e==="hasOwnProperty")return vh}const a=Reflect.get(t,e,Be(t)?t:i);return(ii(e)?Au.has(e):gh(e))||(s||Pe(t,"get",e),r)?a:Be(a)?o&&$a(e)?a:a.value:fe(a)?s?Lu(a):el(a):a}}class Ru extends wu{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=as(r);if(!fn(i)&&!as(i)&&(r=se(r),i=se(i)),!Bt(t)&&Be(r)&&!Be(i))return l?!1:(r.value=i,!0)}const o=Bt(t)&&$a(e)?Number(e)<t.length:te(t,e),a=Reflect.set(t,e,i,Be(t)?t:s);return t===se(s)&&(o?Ei(i,r)&&Ln(t,"set",e,i):Ln(t,"add",e,i)),a}deleteProperty(t,e){const i=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Ln(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!ii(e)||!Au.has(e))&&Pe(t,"has",e),i}ownKeys(t){return Pe(t,"iterate",Bt(t)?"length":yi),Reflect.ownKeys(t)}}class xh extends wu{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Mh=new Ru,Sh=new xh,Eh=new Ru(!0);const Zo=n=>n,tr=n=>Reflect.getPrototypeOf(n);function yh(n,t,e){return function(...i){const s=this.__v_raw,r=se(s),o=Qi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Zo:t?Jo:Ve;return!t&&Pe(r,"iterate",l?Ko:yi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function er(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Th(n,t){const e={get(s){const r=this.__v_raw,o=se(r),a=se(s);n||(Ei(s,a)&&Pe(o,"get",s),Pe(o,"get",a));const{has:l}=tr(o),c=t?Zo:n?Jo:Ve;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Pe(se(s),"iterate",yi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=se(r),a=se(s);return n||(Ei(s,a)&&Pe(o,"has",s),Pe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=se(a),c=t?Zo:n?Jo:Ve;return!n&&Pe(l,"iterate",yi),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ae(e,n?{add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear")}:{add(s){!t&&!fn(s)&&!as(s)&&(s=se(s));const r=se(this);return tr(r).has.call(r,s)||(r.add(s),Ln(r,"add",s,s)),this},set(s,r){!t&&!fn(r)&&!as(r)&&(r=se(r));const o=se(this),{has:a,get:l}=tr(o);let c=a.call(o,s);c||(s=se(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ei(r,u)&&Ln(o,"set",s,r):Ln(o,"add",s,r),this},delete(s){const r=se(this),{has:o,get:a}=tr(r);let l=o.call(r,s);l||(s=se(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ln(r,"delete",s,void 0),c},clear(){const s=se(this),r=s.size!==0,o=s.clear();return r&&Ln(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=yh(s,n,t)}),e}function tl(n,t){const e=Th(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(e,s)&&s in i?e:i,s,r)}const bh={get:tl(!1,!1)},Ah={get:tl(!1,!0)},wh={get:tl(!0,!1)};const Cu=new WeakMap,Pu=new WeakMap,Du=new WeakMap,Rh=new WeakMap;function Ch(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ph(n){return n.__v_skip||!Object.isExtensible(n)?0:Ch(eh(n))}function el(n){return as(n)?n:nl(n,!1,Mh,bh,Cu)}function Dh(n){return nl(n,!1,Eh,Ah,Pu)}function Lu(n){return nl(n,!0,Sh,wh,Du)}function nl(n,t,e,i,s){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Ph(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ts(n){return as(n)?ts(n.__v_raw):!!(n&&n.__v_isReactive)}function as(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function il(n){return n?!!n.__v_raw:!1}function se(n){const t=n&&n.__v_raw;return t?se(t):n}function Lh(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&hu(n,"__v_skip",!0),n}const Ve=n=>fe(n)?el(n):n,Jo=n=>fe(n)?Lu(n):n;function Be(n){return n?n.__v_isRef===!0:!1}function Uh(n){return Be(n)?n.value:n}const Ih={get:(n,t,e)=>t==="__v_raw"?n:Uh(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Be(s)&&!Be(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Uu(n){return ts(n)?n:new Proxy(n,Ih)}class Nh{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return xu(this,!0),!0}get value(){const t=this.dep.track();return Eu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Fh(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Nh(i,s,e)}const nr={},Fr=new WeakMap;let _i;function Oh(n,t=!1,e=_i){if(e){let i=Fr.get(e);i||Fr.set(e,i=[]),i.push(n)}}function Bh(n,t,e=ce){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:fn(y)||s===!1||s===0?Kn(y,1):Kn(y);let u,f,d,p,x=!1,S=!1;if(Be(n)?(f=()=>n.value,x=fn(n)):ts(n)?(f=()=>c(n),x=!0):Bt(n)?(S=!0,x=n.some(y=>ts(y)||fn(y)),f=()=>n.map(y=>{if(Be(y))return y.value;if(ts(y))return c(y);if(Gt(y))return l?l(y,2):y()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){si();try{d()}finally{ri()}}const y=_i;_i=u;try{return l?l(n,3,[p]):n(p)}finally{_i=y}}:f=Mn,t&&s){const y=f,N=s===!0?1/0:s;f=()=>Kn(y(),N)}const _=hh(),h=()=>{u.stop(),_&&_.active&&qa(_.effects,u)};if(r&&t){const y=t;t=(...N)=>{y(...N),h()}}let w=S?new Array(n.length).fill(nr):nr;const A=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const N=u.run();if(s||x||(S?N.some((C,P)=>Ei(C,w[P])):Ei(N,w))){d&&d();const C=_i;_i=u;try{const P=[N,w===nr?void 0:S&&w[0]===nr?[]:w,p];l?l(t,3,P):t(...P),w=N}finally{_i=C}}}else u.run()};return a&&a(A),u=new gu(f),u.scheduler=o?()=>o(A,!1):A,p=y=>Oh(y,!1,u),d=u.onStop=()=>{const y=Fr.get(u);if(y){if(l)l(y,4);else for(const N of y)N();Fr.delete(u)}},t?i?A(!0):w=u.run():o?o(A.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Kn(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Be(n))Kn(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)Kn(n[i],t,e);else if(au(n)||Qi(n))n.forEach(i=>{Kn(i,t,e)});else if(uu(n)){for(const i in n)Kn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(n,t,e,i){try{return i?n(...i):n()}catch(s){jr(s,t,e)}}function En(n,t,e,i){if(Gt(n)){const s=Ys(n,t,e,i);return s&&lu(s)&&s.catch(r=>{jr(r,t,e)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],t,e,i));return s}}function jr(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){si(),Ys(r,null,10,[n,l,c]),ri();return}}zh(n,e,s,i,o)}function zh(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Fe=[];let pn=-1;const es=[];let qn=null,qi=0;const Iu=Promise.resolve();let Or=null;function Hh(n){const t=Or||Iu;return n?t.then(this?n.bind(this):n):t}function Vh(n){let t=pn+1,e=Fe.length;for(;t<e;){const i=t+e>>>1,s=Fe[i],r=zs(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function sl(n){if(!(n.flags&1)){const t=zs(n),e=Fe[Fe.length-1];!e||!(n.flags&2)&&t>=zs(e)?Fe.push(n):Fe.splice(Vh(t),0,n),n.flags|=1,Nu()}}function Nu(){Or||(Or=Iu.then(Ou))}function Gh(n){Bt(n)?es.push(...n):qn&&n.id===-1?qn.splice(qi+1,0,n):n.flags&1||(es.push(n),n.flags|=1),Nu()}function Fl(n,t,e=pn+1){for(;e<Fe.length;e++){const i=Fe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Fe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Fu(n){if(es.length){const t=[...new Set(es)].sort((e,i)=>zs(e)-zs(i));if(es.length=0,qn){qn.push(...t);return}for(qn=t,qi=0;qi<qn.length;qi++){const e=qn[qi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}qn=null,qi=0}}const zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ou(n){try{for(pn=0;pn<Fe.length;pn++){const t=Fe[pn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ys(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pn<Fe.length;pn++){const t=Fe[pn];t&&(t.flags&=-2)}pn=-1,Fe.length=0,Fu(),Or=null,(Fe.length||es.length)&&Ou()}}let vn=null,Bu=null;function Br(n){const t=vn;return vn=n,Bu=n&&n.type.__scopeId||null,t}function kh(n,t=vn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wl(-1);const r=Br(t);let o;try{o=n(...s)}finally{Br(r),i._d&&Wl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function li(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(si(),En(l,e,8,[n.el,a,n,t]),ri())}}const Wh=Symbol("_vte"),Xh=n=>n.__isTeleport;function rl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,rl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function zu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zr(n,t,e,i,s=!1){if(Bt(n)){n.forEach((x,S)=>zr(x,t&&(Bt(t)?t[S]:t),e,i,s));return}if(Ls(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?cl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ce?a.refs={}:a.refs,f=a.setupState,d=se(f),p=f===ce?()=>!1:x=>te(d,x);if(c!=null&&c!==l&&(ve(c)?(u[c]=null,p(c)&&(f[c]=null)):Be(c)&&(c.value=null)),Gt(l))Ys(l,a,12,[o,u]);else{const x=ve(l),S=Be(l);if(x||S){const _=()=>{if(n.f){const h=x?p(l)?f[l]:u[l]:l.value;s?Bt(h)&&qa(h,r):Bt(h)?h.includes(r)||h.push(r):x?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else x?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,qe(_,e)):_()}}}qr().requestIdleCallback;qr().cancelIdleCallback;const Ls=n=>!!n.type.__asyncLoader,Hu=n=>n.type.__isKeepAlive;function Yh(n,t){Vu(n,"a",t)}function qh(n,t){Vu(n,"da",t)}function Vu(n,t,e=Oe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Kr(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Hu(s.parent.vnode)&&$h(i,t,e,s),s=s.parent}}function $h(n,t,e,i){const s=Kr(t,n,i,!0);Gu(()=>{qa(i[t],s)},e)}function Kr(n,t,e=Oe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{si();const a=qs(e),l=En(t,e,n,o);return a(),ri(),l});return i?s.unshift(r):s.push(r),r}}const Hn=n=>(t,e=Oe)=>{(!Gs||n==="sp")&&Kr(n,(...i)=>t(...i),e)},jh=Hn("bm"),Kh=Hn("m"),Zh=Hn("bu"),Jh=Hn("u"),Qh=Hn("bum"),Gu=Hn("um"),td=Hn("sp"),ed=Hn("rtg"),nd=Hn("rtc");function id(n,t=Oe){Kr("ec",n,t)}const sd=Symbol.for("v-ndc");function rd(n,t,e,i){let s;const r=e,o=Bt(n);if(o||ve(n)){const a=o&&ts(n);let l=!1;a&&(l=!fn(n),n=$r(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=t(l?Ve(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(fe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Qo=n=>n?uf(n)?cl(n):Qo(n.parent):null,Us=Ae(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qo(n.parent),$root:n=>Qo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ol(n),$forceUpdate:n=>n.f||(n.f=()=>{sl(n.update)}),$nextTick:n=>n.n||(n.n=Hh.bind(n.proxy)),$watch:n=>wd.bind(n)}),ho=(n,t)=>n!==ce&&!n.__isScriptSetup&&te(n,t),od={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ho(i,t))return o[t]=1,i[t];if(s!==ce&&te(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&te(c,t))return o[t]=3,r[t];if(e!==ce&&te(e,t))return o[t]=4,e[t];ta&&(o[t]=0)}}const u=Us[t];let f,d;if(u)return t==="$attrs"&&Pe(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==ce&&te(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,te(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ho(s,t)?(s[t]=e,!0):i!==ce&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==ce&&te(n,o)||ho(t,o)||(a=r[0])&&te(a,o)||te(i,o)||te(Us,o)||te(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ol(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ta=!0;function ad(n){const t=ol(n),e=n.proxy,i=n.ctx;ta=!1,t.beforeCreate&&Bl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:S,deactivated:_,beforeDestroy:h,beforeUnmount:w,destroyed:A,unmounted:y,render:N,renderTracked:C,renderTriggered:P,errorCaptured:O,serverPrefetch:T,expose:E,inheritAttrs:D,components:J,directives:Y,filters:Q}=t;if(c&&ld(c,i,null),o)for(const et in o){const H=o[et];Gt(H)&&(i[et]=H.bind(e))}if(s){const et=s.call(e,e);fe(et)&&(n.data=el(et))}if(ta=!0,r)for(const et in r){const H=r[et],ft=Gt(H)?H.bind(e,e):Gt(H.get)?H.get.bind(e,e):Mn,vt=!Gt(H)&&Gt(H.set)?H.set.bind(e):Mn,Tt=jd({get:ft,set:vt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Dt=>Tt.value=Dt})}if(a)for(const et in a)ku(a[et],i,e,et);if(l){const et=Gt(l)?l.call(e):l;Reflect.ownKeys(et).forEach(H=>{pd(H,et[H])})}u&&Bl(u,n,"c");function j(et,H){Bt(H)?H.forEach(ft=>et(ft.bind(e))):H&&et(H.bind(e))}if(j(jh,f),j(Kh,d),j(Zh,p),j(Jh,x),j(Yh,S),j(qh,_),j(id,O),j(nd,C),j(ed,P),j(Qh,w),j(Gu,y),j(td,T),Bt(E))if(E.length){const et=n.exposed||(n.exposed={});E.forEach(H=>{Object.defineProperty(et,H,{get:()=>e[H],set:ft=>e[H]=ft})})}else n.exposed||(n.exposed={});N&&n.render===Mn&&(n.render=N),D!=null&&(n.inheritAttrs=D),J&&(n.components=J),Y&&(n.directives=Y),T&&zu(n)}function ld(n,t,e=Mn){Bt(n)&&(n=ea(n));for(const i in n){const s=n[i];let r;fe(s)?"default"in s?r=Ar(s.from||i,s.default,!0):r=Ar(s.from||i):r=Ar(s),Be(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Bl(n,t,e){En(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ku(n,t,e,i){let s=i.includes(".")?sf(e,i):()=>e[i];if(ve(n)){const r=t[n];Gt(r)&&mo(s,r)}else if(Gt(n))mo(s,n.bind(e));else if(fe(n))if(Bt(n))n.forEach(r=>ku(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&mo(s,r,n)}}function ol(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Hr(l,c,o,!0)),Hr(l,t,o)),fe(t)&&r.set(t,l),l}function Hr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Hr(n,r,e,!0),s&&s.forEach(o=>Hr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=cd[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const cd={data:zl,props:Hl,emits:Hl,methods:ws,computed:ws,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:ws,directives:ws,watch:fd,provide:zl,inject:ud};function zl(n,t){return t?n?function(){return Ae(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function ud(n,t){return ws(ea(n),ea(t))}function ea(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ue(n,t){return n?[...new Set([].concat(n,t))]:t}function ws(n,t){return n?Ae(Object.create(null),n,t):t}function Hl(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Ae(Object.create(null),Ol(n),Ol(t??{})):t}function fd(n,t){if(!n)return t;if(!t)return n;const e=Ae(Object.create(null),n);for(const i in t)e[i]=Ue(n[i],t[i]);return e}function Wu(){return{app:null,config:{isNativeTag:Qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hd=0;function dd(n,t){return function(i,s=null){Gt(i)||(i=Ae({},i)),s!=null&&!fe(s)&&(s=null);const r=Wu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Kd,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Gt(u.install)?(o.add(u),u.install(c,...f)):Gt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Kt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(p,u):n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,cl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ns;ns=c;try{return u()}finally{ns=f}}};return c}}let ns=null;function pd(n,t){if(Oe){let e=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===e&&(e=Oe.provides=Object.create(i)),e[n]=t}}function Ar(n,t,e=!1){const i=Oe||vn;if(i||ns){const s=ns?ns._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const Xu={},Yu=()=>Object.create(Xu),qu=n=>Object.getPrototypeOf(n)===Xu;function md(n,t,e,i=!1){const s={},r=Yu();n.propsDefaults=Object.create(null),$u(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Dh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function _d(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=se(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zr(n.emitsOptions,d))continue;const p=t[d];if(l)if(te(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const x=ti(d);s[x]=na(l,a,x,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{$u(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!te(t,f)&&((u=Ri(f))===f||!te(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=na(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!te(t,f))&&(delete r[f],c=!0)}c&&Ln(n.attrs,"set","")}function $u(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Cs(l))continue;const c=t[l];let u;s&&te(s,u=ti(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Zr(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=se(e),c=a||ce;for(let u=0;u<r.length;u++){const f=r[u];e[f]=na(s,l,f,c[f],n,!te(c,f))}}return o}function na(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=qs(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ri(e))&&(i=!0))}return i}const gd=new WeakMap;function ju(n,t,e=!1){const i=e?gd:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Gt(n)){const u=f=>{l=!0;const[d,p]=ju(f,t,!0);Ae(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return fe(n)&&i.set(n,Ji),Ji;if(Bt(r))for(let u=0;u<r.length;u++){const f=ti(r[u]);Vl(f)&&(o[f]=ce)}else if(r)for(const u in r){const f=ti(u);if(Vl(f)){const d=r[u],p=o[f]=Bt(d)||Gt(d)?{type:d}:Ae({},d),x=p.type;let S=!1,_=!0;if(Bt(x))for(let h=0;h<x.length;++h){const w=x[h],A=Gt(w)&&w.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(_=!1)}else S=Gt(x)&&x.name==="Boolean";p[0]=S,p[1]=_,(S||te(p,"default"))&&a.push(f)}}const c=[o,a];return fe(n)&&i.set(n,c),c}function Vl(n){return n[0]!=="$"&&!Cs(n)}const Ku=n=>n[0]==="_"||n==="$stable",al=n=>Bt(n)?n.map(_n):[_n(n)],vd=(n,t,e)=>{if(t._n)return t;const i=kh((...s)=>al(t(...s)),e);return i._c=!1,i},Zu=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Ku(s))continue;const r=n[s];if(Gt(r))t[s]=vd(s,r,i);else if(r!=null){const o=al(r);t[s]=()=>o}}},Ju=(n,t)=>{const e=al(t);n.slots.default=()=>e},Qu=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},xd=(n,t,e)=>{const i=n.slots=Yu();if(n.vnode.shapeFlag&32){const s=t._;s?(Qu(i,t,e),e&&hu(i,"_",s,!0)):Zu(t,i)}else t&&Ju(n,t)},Md=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ce;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Qu(s,t,e):(r=!t.$stable,Zu(t,s)),o=t}else t&&(Ju(n,t),o={default:1});if(r)for(const a in s)!Ku(a)&&o[a]==null&&delete s[a]},qe=Id;function Sd(n){return Ed(n)}function Ed(n,t){const e=qr();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Mn,insertStaticContent:x}=n,S=(b,g,X,K=null,q=null,V=null,st=void 0,$=null,v=!!g.dynamicChildren)=>{if(b===g)return;b&&!Ss(b,g)&&(K=ht(b),Dt(b,q,V,!0),b=null),g.patchFlag===-2&&(v=!1,g.dynamicChildren=null);const{type:m,ref:R,shapeFlag:I}=g;switch(m){case Jr:_(b,g,X,K);break;case Hs:h(b,g,X,K);break;case wr:b==null&&w(g,X,K,st);break;case mn:J(b,g,X,K,q,V,st,$,v);break;default:I&1?N(b,g,X,K,q,V,st,$,v):I&6?Y(b,g,X,K,q,V,st,$,v):(I&64||I&128)&&m.process(b,g,X,K,q,V,st,$,v,Ot)}R!=null&&q&&zr(R,b&&b.ref,V,g||b,!g)},_=(b,g,X,K)=>{if(b==null)i(g.el=a(g.children),X,K);else{const q=g.el=b.el;g.children!==b.children&&c(q,g.children)}},h=(b,g,X,K)=>{b==null?i(g.el=l(g.children||""),X,K):g.el=b.el},w=(b,g,X,K)=>{[b.el,b.anchor]=x(b.children,g,X,K,b.el,b.anchor)},A=({el:b,anchor:g},X,K)=>{let q;for(;b&&b!==g;)q=d(b),i(b,X,K),b=q;i(g,X,K)},y=({el:b,anchor:g})=>{let X;for(;b&&b!==g;)X=d(b),s(b),b=X;s(g)},N=(b,g,X,K,q,V,st,$,v)=>{g.type==="svg"?st="svg":g.type==="math"&&(st="mathml"),b==null?C(g,X,K,q,V,st,$,v):T(b,g,q,V,st,$,v)},C=(b,g,X,K,q,V,st,$)=>{let v,m;const{props:R,shapeFlag:I,transition:z,dirs:B}=b;if(v=b.el=o(b.type,V,R&&R.is,R),I&8?u(v,b.children):I&16&&O(b.children,v,null,K,q,po(b,V),st,$),B&&li(b,null,K,"created"),P(v,b,b.scopeId,st,K),R){for(const rt in R)rt!=="value"&&!Cs(rt)&&r(v,rt,null,R[rt],V,K);"value"in R&&r(v,"value",null,R.value,V),(m=R.onVnodeBeforeMount)&&dn(m,K,b)}B&&li(b,null,K,"beforeMount");const lt=yd(q,z);lt&&z.beforeEnter(v),i(v,g,X),((m=R&&R.onVnodeMounted)||lt||B)&&qe(()=>{m&&dn(m,K,b),lt&&z.enter(v),B&&li(b,null,K,"mounted")},q)},P=(b,g,X,K,q)=>{if(X&&p(b,X),K)for(let V=0;V<K.length;V++)p(b,K[V]);if(q){let V=q.subTree;if(g===V||of(V.type)&&(V.ssContent===g||V.ssFallback===g)){const st=q.vnode;P(b,st,st.scopeId,st.slotScopeIds,q.parent)}}},O=(b,g,X,K,q,V,st,$,v=0)=>{for(let m=v;m<b.length;m++){const R=b[m]=$?$n(b[m]):_n(b[m]);S(null,R,g,X,K,q,V,st,$)}},T=(b,g,X,K,q,V,st)=>{const $=g.el=b.el;let{patchFlag:v,dynamicChildren:m,dirs:R}=g;v|=b.patchFlag&16;const I=b.props||ce,z=g.props||ce;let B;if(X&&ci(X,!1),(B=z.onVnodeBeforeUpdate)&&dn(B,X,g,b),R&&li(g,b,X,"beforeUpdate"),X&&ci(X,!0),(I.innerHTML&&z.innerHTML==null||I.textContent&&z.textContent==null)&&u($,""),m?E(b.dynamicChildren,m,$,X,K,po(g,q),V):st||H(b,g,$,null,X,K,po(g,q),V,!1),v>0){if(v&16)D($,I,z,X,q);else if(v&2&&I.class!==z.class&&r($,"class",null,z.class,q),v&4&&r($,"style",I.style,z.style,q),v&8){const lt=g.dynamicProps;for(let rt=0;rt<lt.length;rt++){const at=lt[rt],Ut=I[at],it=z[at];(it!==Ut||at==="value")&&r($,at,Ut,it,q,X)}}v&1&&b.children!==g.children&&u($,g.children)}else!st&&m==null&&D($,I,z,X,q);((B=z.onVnodeUpdated)||R)&&qe(()=>{B&&dn(B,X,g,b),R&&li(g,b,X,"updated")},K)},E=(b,g,X,K,q,V,st)=>{for(let $=0;$<g.length;$++){const v=b[$],m=g[$],R=v.el&&(v.type===mn||!Ss(v,m)||v.shapeFlag&70)?f(v.el):X;S(v,m,R,null,K,q,V,st,!0)}},D=(b,g,X,K,q)=>{if(g!==X){if(g!==ce)for(const V in g)!Cs(V)&&!(V in X)&&r(b,V,g[V],null,q,K);for(const V in X){if(Cs(V))continue;const st=X[V],$=g[V];st!==$&&V!=="value"&&r(b,V,$,st,q,K)}"value"in X&&r(b,"value",g.value,X.value,q)}},J=(b,g,X,K,q,V,st,$,v)=>{const m=g.el=b?b.el:a(""),R=g.anchor=b?b.anchor:a("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:B}=g;B&&($=$?$.concat(B):B),b==null?(i(m,X,K),i(R,X,K),O(g.children||[],X,R,q,V,st,$,v)):I>0&&I&64&&z&&b.dynamicChildren?(E(b.dynamicChildren,z,X,q,V,st,$),(g.key!=null||q&&g===q.subTree)&&tf(b,g,!0)):H(b,g,X,R,q,V,st,$,v)},Y=(b,g,X,K,q,V,st,$,v)=>{g.slotScopeIds=$,b==null?g.shapeFlag&512?q.ctx.activate(g,X,K,st,v):Q(g,X,K,q,V,st,v):ot(b,g,v)},Q=(b,g,X,K,q,V,st)=>{const $=b.component=kd(b,K,q);if(Hu(b)&&($.ctx.renderer=Ot),Wd($,!1,st),$.asyncDep){if(q&&q.registerDep($,j,st),!b.el){const v=$.subTree=Kt(Hs);h(null,v,g,X)}}else j($,b,g,X,q,V,st)},ot=(b,g,X)=>{const K=g.component=b.component;if(Ld(b,g,X))if(K.asyncDep&&!K.asyncResolved){et(K,g,X);return}else K.next=g,K.update();else g.el=b.el,K.vnode=g},j=(b,g,X,K,q,V,st)=>{const $=()=>{if(b.isMounted){let{next:I,bu:z,u:B,parent:lt,vnode:rt}=b;{const yt=ef(b);if(yt){I&&(I.el=rt.el,et(b,I,st)),yt.asyncDep.then(()=>{b.isUnmounted||$()});return}}let at=I,Ut;ci(b,!1),I?(I.el=rt.el,et(b,I,st)):I=rt,z&&ao(z),(Ut=I.props&&I.props.onVnodeBeforeUpdate)&&dn(Ut,lt,I,rt),ci(b,!0);const it=_o(b),dt=b.subTree;b.subTree=it,S(dt,it,f(dt.el),ht(dt),b,q,V),I.el=it.el,at===null&&Ud(b,it.el),B&&qe(B,q),(Ut=I.props&&I.props.onVnodeUpdated)&&qe(()=>dn(Ut,lt,I,rt),q)}else{let I;const{el:z,props:B}=g,{bm:lt,m:rt,parent:at,root:Ut,type:it}=b,dt=Ls(g);if(ci(b,!1),lt&&ao(lt),!dt&&(I=B&&B.onVnodeBeforeMount)&&dn(I,at,g),ci(b,!0),z&&Yt){const yt=()=>{b.subTree=_o(b),Yt(z,b.subTree,b,q,null)};dt&&it.__asyncHydrate?it.__asyncHydrate(z,b,yt):yt()}else{Ut.ce&&Ut.ce._injectChildStyle(it);const yt=b.subTree=_o(b);S(null,yt,X,K,b,q,V),g.el=yt.el}if(rt&&qe(rt,q),!dt&&(I=B&&B.onVnodeMounted)){const yt=g;qe(()=>dn(I,at,yt),q)}(g.shapeFlag&256||at&&Ls(at.vnode)&&at.vnode.shapeFlag&256)&&b.a&&qe(b.a,q),b.isMounted=!0,g=X=K=null}};b.scope.on();const v=b.effect=new gu($);b.scope.off();const m=b.update=v.run.bind(v),R=b.job=v.runIfDirty.bind(v);R.i=b,R.id=b.uid,v.scheduler=()=>sl(R),ci(b,!0),m()},et=(b,g,X)=>{g.component=b;const K=b.vnode.props;b.vnode=g,b.next=null,_d(b,g.props,K,X),Md(b,g.children,X),si(),Fl(b),ri()},H=(b,g,X,K,q,V,st,$,v=!1)=>{const m=b&&b.children,R=b?b.shapeFlag:0,I=g.children,{patchFlag:z,shapeFlag:B}=g;if(z>0){if(z&128){vt(m,I,X,K,q,V,st,$,v);return}else if(z&256){ft(m,I,X,K,q,V,st,$,v);return}}B&8?(R&16&&Et(m,q,V),I!==m&&u(X,I)):R&16?B&16?vt(m,I,X,K,q,V,st,$,v):Et(m,q,V,!0):(R&8&&u(X,""),B&16&&O(I,X,K,q,V,st,$,v))},ft=(b,g,X,K,q,V,st,$,v)=>{b=b||Ji,g=g||Ji;const m=b.length,R=g.length,I=Math.min(m,R);let z;for(z=0;z<I;z++){const B=g[z]=v?$n(g[z]):_n(g[z]);S(b[z],B,X,null,q,V,st,$,v)}m>R?Et(b,q,V,!0,!1,I):O(g,X,K,q,V,st,$,v,I)},vt=(b,g,X,K,q,V,st,$,v)=>{let m=0;const R=g.length;let I=b.length-1,z=R-1;for(;m<=I&&m<=z;){const B=b[m],lt=g[m]=v?$n(g[m]):_n(g[m]);if(Ss(B,lt))S(B,lt,X,null,q,V,st,$,v);else break;m++}for(;m<=I&&m<=z;){const B=b[I],lt=g[z]=v?$n(g[z]):_n(g[z]);if(Ss(B,lt))S(B,lt,X,null,q,V,st,$,v);else break;I--,z--}if(m>I){if(m<=z){const B=z+1,lt=B<R?g[B].el:K;for(;m<=z;)S(null,g[m]=v?$n(g[m]):_n(g[m]),X,lt,q,V,st,$,v),m++}}else if(m>z)for(;m<=I;)Dt(b[m],q,V,!0),m++;else{const B=m,lt=m,rt=new Map;for(m=lt;m<=z;m++){const Lt=g[m]=v?$n(g[m]):_n(g[m]);Lt.key!=null&&rt.set(Lt.key,m)}let at,Ut=0;const it=z-lt+1;let dt=!1,yt=0;const Rt=new Array(it);for(m=0;m<it;m++)Rt[m]=0;for(m=B;m<=I;m++){const Lt=b[m];if(Ut>=it){Dt(Lt,q,V,!0);continue}let Ct;if(Lt.key!=null)Ct=rt.get(Lt.key);else for(at=lt;at<=z;at++)if(Rt[at-lt]===0&&Ss(Lt,g[at])){Ct=at;break}Ct===void 0?Dt(Lt,q,V,!0):(Rt[Ct-lt]=m+1,Ct>=yt?yt=Ct:dt=!0,S(Lt,g[Ct],X,null,q,V,st,$,v),Ut++)}const Mt=dt?Td(Rt):Ji;for(at=Mt.length-1,m=it-1;m>=0;m--){const Lt=lt+m,Ct=g[Lt],ee=Lt+1<R?g[Lt+1].el:K;Rt[m]===0?S(null,Ct,X,ee,q,V,st,$,v):dt&&(at<0||m!==Mt[at]?Tt(Ct,X,ee,2):at--)}}},Tt=(b,g,X,K,q=null)=>{const{el:V,type:st,transition:$,children:v,shapeFlag:m}=b;if(m&6){Tt(b.component.subTree,g,X,K);return}if(m&128){b.suspense.move(g,X,K);return}if(m&64){st.move(b,g,X,Ot);return}if(st===mn){i(V,g,X);for(let I=0;I<v.length;I++)Tt(v[I],g,X,K);i(b.anchor,g,X);return}if(st===wr){A(b,g,X);return}if(K!==2&&m&1&&$)if(K===0)$.beforeEnter(V),i(V,g,X),qe(()=>$.enter(V),q);else{const{leave:I,delayLeave:z,afterLeave:B}=$,lt=()=>i(V,g,X),rt=()=>{I(V,()=>{lt(),B&&B()})};z?z(V,lt,rt):rt()}else i(V,g,X)},Dt=(b,g,X,K=!1,q=!1)=>{const{type:V,props:st,ref:$,children:v,dynamicChildren:m,shapeFlag:R,patchFlag:I,dirs:z,cacheIndex:B}=b;if(I===-2&&(q=!1),$!=null&&zr($,null,X,b,!0),B!=null&&(g.renderCache[B]=void 0),R&256){g.ctx.deactivate(b);return}const lt=R&1&&z,rt=!Ls(b);let at;if(rt&&(at=st&&st.onVnodeBeforeUnmount)&&dn(at,g,b),R&6)ut(b.component,X,K);else{if(R&128){b.suspense.unmount(X,K);return}lt&&li(b,null,g,"beforeUnmount"),R&64?b.type.remove(b,g,X,Ot,K):m&&!m.hasOnce&&(V!==mn||I>0&&I&64)?Et(m,g,X,!1,!0):(V===mn&&I&384||!q&&R&16)&&Et(v,g,X),K&&Zt(b)}(rt&&(at=st&&st.onVnodeUnmounted)||lt)&&qe(()=>{at&&dn(at,g,b),lt&&li(b,null,g,"unmounted")},X)},Zt=b=>{const{type:g,el:X,anchor:K,transition:q}=b;if(g===mn){tt(X,K);return}if(g===wr){y(b);return}const V=()=>{s(X),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(b.shapeFlag&1&&q&&!q.persisted){const{leave:st,delayLeave:$}=q,v=()=>st(X,V);$?$(b.el,V,v):v()}else V()},tt=(b,g)=>{let X;for(;b!==g;)X=d(b),s(b),b=X;s(g)},ut=(b,g,X)=>{const{bum:K,scope:q,job:V,subTree:st,um:$,m:v,a:m}=b;Gl(v),Gl(m),K&&ao(K),q.stop(),V&&(V.flags|=8,Dt(st,b,g,X)),$&&qe($,g),qe(()=>{b.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Et=(b,g,X,K=!1,q=!1,V=0)=>{for(let st=V;st<b.length;st++)Dt(b[st],g,X,K,q)},ht=b=>{if(b.shapeFlag&6)return ht(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const g=d(b.anchor||b.el),X=g&&g[Wh];return X?d(X):g};let wt=!1;const It=(b,g,X)=>{b==null?g._vnode&&Dt(g._vnode,null,null,!0):S(g._vnode||null,b,g,null,null,null,X),g._vnode=b,wt||(wt=!0,Fl(),Fu(),wt=!1)},Ot={p:S,um:Dt,m:Tt,r:Zt,mt:Q,mc:O,pc:H,pbc:E,n:ht,o:n};let ae,Yt;return{render:It,hydrate:ae,createApp:dd(It,ae)}}function po({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ci({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function yd(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function tf(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=$n(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&tf(o,a)),a.type===Jr&&(a.el=o.el)}}function Td(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ef(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ef(t)}function Gl(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const bd=Symbol.for("v-scx"),Ad=()=>Ar(bd);function mo(n,t,e){return nf(n,t,e)}function nf(n,t,e=ce){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ae({},e),l=t&&i||!t&&r!=="post";let c;if(Gs){if(r==="sync"){const p=Ad();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=Oe;a.call=(p,x,S)=>En(p,u,x,S);let f=!1;r==="post"?a.scheduler=p=>{qe(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,x)=>{x?p():sl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Bh(n,t,a);return Gs&&(c?c.push(d):l&&d()),d}function wd(n,t,e){const i=this.proxy,s=ve(n)?n.includes(".")?sf(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const o=qs(this),a=nf(s,r.bind(i),e);return o(),a}function sf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Rd=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ti(t)}Modifiers`]||n[`${Ri(t)}Modifiers`];function Cd(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ce;let s=e;const r=t.startsWith("update:"),o=r&&Rd(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ve(u)?u.trim():u)),o.number&&(s=e.map(sh)));let a,l=i[a=oo(t)]||i[a=oo(ti(t))];!l&&r&&(l=i[a=oo(Ri(t))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}function rf(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Gt(n)){const l=c=>{const u=rf(c,t,!0);u&&(a=!0,Ae(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(fe(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Ae(o,r),fe(n)&&i.set(n,o),o)}function Zr(n,t){return!n||!Wr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Ri(t))||te(n,t))}function _o(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:x,inheritAttrs:S}=n,_=Br(n);let h,w;try{if(e.shapeFlag&4){const y=s||i,N=y;h=_n(c.call(N,y,u,f,p,d,x)),w=a}else{const y=t;h=_n(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),w=t.props?a:Pd(a)}}catch(y){Is.length=0,jr(y,n,1),h=Kt(Hs)}let A=h;if(w&&S!==!1){const y=Object.keys(w),{shapeFlag:N}=A;y.length&&N&7&&(r&&y.some(Ya)&&(w=Dd(w,r)),A=ls(A,w,!1,!0))}return e.dirs&&(A=ls(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&rl(A,e.transition),h=A,Br(_),h}const Pd=n=>{let t;for(const e in n)(e==="class"||e==="style"||Wr(e))&&((t||(t={}))[e]=n[e]);return t},Dd=(n,t)=>{const e={};for(const i in n)(!Ya(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Ld(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?kl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Zr(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?kl(i,o,c):!0:!!o;return!1}function kl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Zr(e,r))return!0}return!1}function Ud({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const of=n=>n.__isSuspense;function Id(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Gh(n)}const mn=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),Hs=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),Is=[];let Ke=null;function ye(n=!1){Is.push(Ke=n?null:[])}function Nd(){Is.pop(),Ke=Is[Is.length-1]||null}let Vs=1;function Wl(n,t=!1){Vs+=n,n<0&&Ke&&t&&(Ke.hasOnce=!0)}function Fd(n){return n.dynamicChildren=Vs>0?Ke||Ji:null,Nd(),Vs>0&&Ke&&Ke.push(n),n}function Te(n,t,e,i,s,r){return Fd(Xt(n,t,e,i,s,r,!0))}function af(n){return n?n.__v_isVNode===!0:!1}function Ss(n,t){return n.type===t.type&&n.key===t.key}const lf=({key:n})=>n??null,Rr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ve(n)||Be(n)||Gt(n)?{i:vn,r:n,k:t,f:!!e}:n:null);function Xt(n,t=null,e=null,i=0,s=null,r=n===mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&lf(t),ref:t&&Rr(t),scopeId:Bu,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return a?(ll(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ve(e)?8:16),Vs>0&&!o&&Ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ke.push(l),l}const Kt=Od;function Od(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===sd)&&(n=Hs),af(n)){const a=ls(n,t,!0);return e&&ll(a,e),Vs>0&&!r&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(n)]=a:Ke.push(a)),a.patchFlag=-2,a}if($d(n)&&(n=n.__vccOpts),t){t=Bd(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=Ka(a)),fe(l)&&(il(l)&&!Bt(l)&&(l=Ae({},l)),t.style=ja(l))}const o=ve(n)?1:of(n)?128:Xh(n)?64:fe(n)?4:Gt(n)?2:0;return Xt(n,t,e,i,s,o,r,!0)}function Bd(n){return n?il(n)||qu(n)?Ae({},n):n:null}function ls(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Hd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&lf(c),ref:t&&t.ref?e&&r?Bt(r)?r.concat(Rr(t)):[r,Rr(t)]:Rr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==mn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ls(n.ssContent),ssFallback:n.ssFallback&&ls(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&rl(u,l.clone(u)),u}function zd(n=" ",t=0){return Kt(Jr,null,n,t)}function cf(n,t){const e=Kt(wr,null,n);return e.staticCount=t,e}function _n(n){return n==null||typeof n=="boolean"?Kt(Hs):Bt(n)?Kt(mn,null,n.slice()):af(n)?$n(n):Kt(Jr,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ls(n)}function ll(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ll(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!qu(t)?t._ctx=vn:s===3&&vn&&(vn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Gt(t)?(t={default:t,_ctx:vn},e=32):(t=String(t),i&64?(e=16,t=[zd(t)]):e=8);n.children=t,n.shapeFlag|=e}function Hd(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ka([t.class,i.class]));else if(s==="style")t.style=ja([t.style,i.style]);else if(Wr(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function dn(n,t,e,i=null){En(n,t,7,[e,i])}const Vd=Wu();let Gd=0;function kd(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Vd,r={uid:Gd++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ju(i,s),emitsOptions:rf(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Cd.bind(null,r),n.ce&&n.ce(r),r}let Oe=null,Vr,ia;{const n=qr(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Vr=t("__VUE_INSTANCE_SETTERS__",e=>Oe=e),ia=t("__VUE_SSR_SETTERS__",e=>Gs=e)}const qs=n=>{const t=Oe;return Vr(n),n.scope.on(),()=>{n.scope.off(),Vr(t)}},Xl=()=>{Oe&&Oe.scope.off(),Vr(null)};function uf(n){return n.vnode.shapeFlag&4}let Gs=!1;function Wd(n,t=!1,e=!1){t&&ia(t);const{props:i,children:s}=n.vnode,r=uf(n);md(n,i,r,t),xd(n,s,e);const o=r?Xd(n,t):void 0;return t&&ia(!1),o}function Xd(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,od);const{setup:i}=e;if(i){si();const s=n.setupContext=i.length>1?qd(n):null,r=qs(n),o=Ys(i,n,0,[n.props,s]),a=lu(o);if(ri(),r(),(a||n.sp)&&!Ls(n)&&zu(n),a){if(o.then(Xl,Xl),t)return o.then(l=>{Yl(n,l,t)}).catch(l=>{jr(l,n,0)});n.asyncDep=o}else Yl(n,o,t)}else ff(n,t)}function Yl(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=Uu(t)),ff(n,e)}let ql;function ff(n,t,e){const i=n.type;if(!n.render){if(!t&&ql&&!i.render){const s=i.template||ol(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);i.render=ql(s,c)}}n.render=i.render||Mn}{const s=qs(n);si();try{ad(n)}finally{ri(),s()}}}const Yd={get(n,t){return Pe(n,"get",""),n[t]}};function qd(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Yd),slots:n.slots,emit:n.emit,expose:t}}function cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Uu(Lh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Us)return Us[e](n)},has(t,e){return e in t||e in Us}})):n.proxy}function $d(n){return Gt(n)&&"__vccOpts"in n}const jd=(n,t)=>Fh(n,t,Gs),Kd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sa;const $l=typeof window<"u"&&window.trustedTypes;if($l)try{sa=$l.createPolicy("vue",{createHTML:n=>n})}catch{}const hf=sa?n=>sa.createHTML(n):n=>n,Zd="http://www.w3.org/2000/svg",Jd="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,jl=Dn&&Dn.createElement("template"),Qd={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Dn.createElementNS(Zd,n):t==="mathml"?Dn.createElementNS(Jd,n):e?Dn.createElement(n,{is:e}):Dn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Dn.createTextNode(n),createComment:n=>Dn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Dn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{jl.innerHTML=hf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},tp=Symbol("_vtc");function ep(n,t,e){const i=n[tp];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Kl=Symbol("_vod"),np=Symbol("_vsh"),ip=Symbol(""),sp=/(^|;)\s*display\s*:/;function rp(n,t,e){const i=n.style,s=ve(e);let r=!1;if(e&&!s){if(t)if(ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Cr(i,a,"")}else for(const o in t)e[o]==null&&Cr(i,o,"");for(const o in e)o==="display"&&(r=!0),Cr(i,o,e[o])}else if(s){if(t!==e){const o=i[ip];o&&(e+=";"+o),i.cssText=e,r=sp.test(e)}}else t&&n.removeAttribute("style");Kl in n&&(n[Kl]=r?i.display:"",n[np]&&(i.display="none"))}const Zl=/\s*!important$/;function Cr(n,t,e){if(Bt(e))e.forEach(i=>Cr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=op(n,t);Zl.test(e)?n.setProperty(Ri(i),e.replace(Zl,""),"important"):n[i]=e}}const Jl=["Webkit","Moz","ms"],go={};function op(n,t){const e=go[t];if(e)return e;let i=ti(t);if(i!=="filter"&&i in n)return go[t]=i;i=fu(i);for(let s=0;s<Jl.length;s++){const r=Jl[s]+i;if(r in n)return go[t]=r}return t}const Ql="http://www.w3.org/1999/xlink";function tc(n,t,e,i,s,r=uh(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ql,t.slice(6,t.length)):n.setAttributeNS(Ql,t,e):e==null||r&&!du(e)?n.removeAttribute(t):n.setAttribute(t,r?"":ii(e)?String(e):e)}function ec(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?hf(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=du(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function ap(n,t,e,i){n.addEventListener(t,e,i)}function lp(n,t,e,i){n.removeEventListener(t,e,i)}const nc=Symbol("_vei");function cp(n,t,e,i,s=null){const r=n[nc]||(n[nc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=up(t);if(i){const c=r[t]=dp(i,s);ap(n,a,c,l)}else o&&(lp(n,a,o,l),r[t]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function up(n){let t;if(ic.test(n)){t={};let i;for(;i=n.match(ic);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ri(n.slice(2)),t]}let vo=0;const fp=Promise.resolve(),hp=()=>vo||(fp.then(()=>vo=0),vo=Date.now());function dp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;En(pp(i,e.value),t,5,[i])};return e.value=n,e.attached=hp(),e}function pp(n,t){if(Bt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const sc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mp=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?ep(n,i,o):t==="style"?rp(n,e,i):Wr(t)?Ya(t)||cp(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_p(n,t,i,o))?(ec(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tc(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ve(i))?ec(n,ti(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),tc(n,t,i,o))};function _p(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sc(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sc(t)&&ve(e)?!1:t in n}const gp=Ae({patchProp:mp},Qd);let rc;function vp(){return rc||(rc=Sd(gp))}const xp=(...n)=>{const t=vp().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Sp(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Mp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Mp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sp(n){return ve(n)?document.querySelector(n):n}const Ep=""+new URL("main-logo-DoiNXn_B.png",import.meta.url).href,yp="data:image/svg+xml,%3csvg%20width='27'%20height='26'%20viewBox='0%200%2027%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.7493%202.16675H10.2493C9.65104%202.16675%209.16602%202.65177%209.16602%203.25008V5.41675C9.16602%206.01506%209.65104%206.50008%2010.2493%206.50008H16.7493C17.3477%206.50008%2017.8327%206.01506%2017.8327%205.41675V3.25008C17.8327%202.65177%2017.3477%202.16675%2016.7493%202.16675Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.834%204.33325H20.0006C20.5753%204.33325%2021.1264%204.56153%2021.5327%204.96785C21.939%205.37418%2022.1673%205.92528%2022.1673%206.49992V21.6666C22.1673%2022.2412%2021.939%2022.7923%2021.5327%2023.1987C21.1264%2023.605%2020.5753%2023.8333%2020.0006%2023.8333H7.00065C6.42602%2023.8333%205.87491%2023.605%205.46859%2023.1987C5.06226%2022.7923%204.83398%2022.2412%204.83398%2021.6666V6.49992C4.83398%205.92528%205.06226%205.37418%205.46859%204.96785C5.87491%204.56153%206.42602%204.33325%207.00065%204.33325H9.16732'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94922%209.75H18.0492'%20stroke='white'%20stroke-linecap='round'/%3e%3cpath%20d='M8.94922%2012.3501H18.0492'%20stroke='white'%20stroke-linecap='round'/%3e%3cpath%20d='M8.94922%2014.95H18.0492'%20stroke='white'%20stroke-linecap='round'/%3e%3c/svg%3e",De=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Tp={class:"ip"},bp={__name:"Ip",setup(n){const t=()=>{navigator.clipboard.writeText("95.154.67.65")};return(e,i)=>(ye(),Te("div",Tp,[Xt("button",{class:"ip__clipboard",onClick:t},i[0]||(i[0]=[Xt("img",{src:yp,alt:""},null,-1)])),i[1]||(i[1]=Xt("div",{class:"ip__text"},"yusheero",-1))]))}},df=De(bp,[["__scopeId","data-v-9c730f62"]]),Ap={id:"main-content",class:"main-content"},wp={__name:"MainContent",setup(n){return(t,e)=>(ye(),Te("section",Ap,[e[0]||(e[0]=Xt("div",{class:"panorama"},null,-1)),e[1]||(e[1]=Xt("img",{class:"main-content__image",src:Ep,alt:"main logo"},null,-1)),Kt(df),e[2]||(e[2]=Xt("p",{class:"main-content__text"},"Дальневосточный комплекс серверов майнкрафт",-1))]))}},Rp=De(wp,[["__scopeId","data-v-7b1dcf2d"]]),Cp=""+new URL("celedia-new-logo-aHS0XD8p.png",import.meta.url).href,Pp={class:"rules-item"},Dp=["src"],Lp={class:"rules-item__text"},Up={__name:"RulesItem",props:{title:String,image:String},setup(n){return(t,e)=>(ye(),Te("div",Pp,[Xt("img",{class:"rules-item__image",src:n.image,alt:""},null,8,Dp),Xt("h3",Lp,mu(n.title),1)]))}},Ip=De(Up,[["__scopeId","data-v-e65f5550"]]),Np={class:"server-rules"},Fp={__name:"ServerRules",props:{rulesData:Object},setup(n){return(t,e)=>(ye(),Te("div",Np,[(ye(!0),Te(mn,null,rd(n.rulesData,i=>(ye(),Te("div",{key:i.id},[Kt(Ip,{title:i.title,image:i.imagePath},null,8,["title","image"])]))),128))]))}},ul=De(Fp,[["__scopeId","data-v-1b1e9dda"]]),Op="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-external-link'%3e%3cpath%20d='M15%203h6v6'/%3e%3cpath%20d='M10%2014%2021%203'/%3e%3cpath%20d='M18%2013v6a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V8a2%202%200%200%201%202-2h6'/%3e%3c/svg%3e",Bp={},zp={class:"server-doc"};function Hp(n,t){return ye(),Te("div",zp,t[0]||(t[0]=[Xt("button",{class:"server-doc__button"},[Xt("h3",{class:"server-doc__title"},"Документация сервера"),Xt("img",{src:Op,alt:"external-link"})],-1)]))}const fl=De(Bp,[["render",Hp],["__scopeId","data-v-ccddc28d"]]),Vp={id:"celedia-new",class:"celedia-new"},Gp={class:"container"},kp={__name:"CelediaNewContent",setup(n){const t={data:[{id:1,title:"Приват",imagePath:"./src/components/server-rules/rules-item/images/shield.svg"},{id:2,title:"Вайп",imagePath:"./src/components/server-rules/rules-item/images/eraser.svg"},{id:3,title:"Актуальный",imagePath:"./src/components/server-rules/rules-item/images/candy.svg"}]};return(e,i)=>(ye(),Te("section",Vp,[Xt("div",Gp,[i[0]||(i[0]=Xt("div",{class:"celedia-new__header"},[Xt("img",{class:"celedia-new__logo",src:Cp,alt:""}),Xt("div",{class:"celedia-new__description"},"Новый проект, направленный на актуализирование мира и версии игры. Вайп раз в год, без сброса инвентарей игроков. Всегда последняя и доступная версия игры и минимальное количество плагинов направленных на защиту игроков")],-1)),Kt(ul,{rulesData:t.data},null,8,["rulesData"]),Kt(fl)])]))}},Wp=De(kp,[["__scopeId","data-v-369bb15c"]]),Xp=""+new URL("celedia-old-logo-gvp6uuGg.png",import.meta.url).href,Yp={id:"celedia-old",class:"celedia-old"},qp={class:"container"},$p={__name:"CelediaOldContent",setup(n){const t={data:[{id:1,title:"Приват",imagePath:"./src/components/server-rules/rules-item/images/shield.svg"},{id:2,title:"Без вайпа",imagePath:"./src/components/server-rules/rules-item/images/leaf.svg"},{id:3,title:"Актуальный",imagePath:"./src/components/server-rules/rules-item/images/candy.svg"}]};return(e,i)=>(ye(),Te("section",Yp,[Xt("div",qp,[i[0]||(i[0]=Xt("div",{class:"celedia-old__header"},[Xt("img",{class:"celedia-old__logo",src:Xp,alt:""}),Xt("div",{class:"celedia-old__description"},"Новый проект, направленный на актуализирование мира и версии игры. Всегда последняя и доступная версия игры и минимальное количество плагинов направленных на защиту игроков")],-1)),Kt(ul,{rulesData:t.data},null,8,["rulesData"]),Kt(fl)])]))}},jp=De($p,[["__scopeId","data-v-96855619"]]),Kp=""+new URL("pawhera-logo-D-w3-0C6.png",import.meta.url).href,Zp={id:"pawhera",class:"pawhera"},Jp={class:"container"},Qp={__name:"PawheraContent",setup(n){const t={data:[{id:1,title:"Анархия",imagePath:"./src/components/server-rules/rules-item/images/swords.svg"},{id:2,title:"Без вайпа",imagePath:"./src/components/server-rules/rules-item/images/leaf.svg"},{id:3,title:"Актуальный",imagePath:"./src/components/server-rules/rules-item/images/candy.svg"}]};return(e,i)=>(ye(),Te("section",Zp,[Xt("div",Jp,[i[0]||(i[0]=Xt("div",{class:"pawhera__header"},[Xt("img",{class:"pawhera__logo",src:Kp,alt:""}),Xt("div",{class:"pawhera__description"},"На сервере действую только те правила, которые защищают стабильную работу сервера")],-1)),Kt(ul,{rulesData:t.data},null,8,["rulesData"]),Kt(fl)])]))}},tm=De(Qp,[["__scopeId","data-v-dd568645"]]),em=""+new URL("femc-icon-hQf78yHB.png",import.meta.url).href,nm=""+new URL("celedia-new-icon-DiC2h6MX.png",import.meta.url).href,im=""+new URL("celedia-old-icon-DT7lDTme.png",import.meta.url).href,sm=""+new URL("pawhera-icon-BKdiZUbD.png",import.meta.url).href,rm=""+new URL("news-icon-Ci99AfzR.png",import.meta.url).href,oc=""+new URL("play-icon-Cu2ulPym.png",import.meta.url).href,om={},am={class:"navigation"};function lm(n,t){return ye(),Te("div",am,t[0]||(t[0]=[cf('<a href="#main-content" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+em+'" alt="" data-v-5c74d90e></a><a href="#celedia-new" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+nm+'" alt="" data-v-5c74d90e></a><a href="#celedia-old" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+im+'" alt="" data-v-5c74d90e></a><a href="#pawhera" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+sm+'" alt="" data-v-5c74d90e></a><a href="#news" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+rm+'" alt="" data-v-5c74d90e></a><a href="#play" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+oc+'" alt="" data-v-5c74d90e></a><a href="#socials" class="navigation__item" data-v-5c74d90e><img class="navigation__image" src="'+oc+'" alt="" data-v-5c74d90e></a>',7)]))}const cm=De(om,[["render",lm],["__scopeId","data-v-5c74d90e"]]),um=""+new URL("villager-BCmzDZ5c.jpg",import.meta.url).href,fm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-x'%3e%3cpath%20d='M18%206%206%2018'/%3e%3cpath%20d='m6%206%2012%2012'/%3e%3c/svg%3e",hm={id:"notification",class:"notification"},dm={__name:"Notification",setup(n){function t(){document.getElementById("notification").remove()}return(e,i)=>(ye(),Te("div",hm,[i[1]||(i[1]=Xt("div",{class:"notification__inner"},[Xt("img",{class:"notification__image",src:um,alt:""}),Xt("div",{class:"notification__text"},"Релиз версии 1.21.3 на всех серверах!")],-1)),Xt("button",{class:"notification__button",onClick:t},i[0]||(i[0]=[Xt("img",{src:fm,alt:""},null,-1)]))]))}},pm=De(dm,[["__scopeId","data-v-e7d7241d"]]),mm={},_m={id:"news",class:"news-content"};function gm(n,t){return ye(),Te("section",_m,t[0]||(t[0]=[Xt("div",{class:"block"},[Xt("div",{class:"block__title"},"NEWS"),Xt("div",{class:"block__subtitle"},"В разработке")],-1)]))}const vm=De(mm,[["render",gm],["__scopeId","data-v-63dd58df"]]),xm=""+new URL("stats-image-E2U-jS9M.png",import.meta.url).href,Mm={},Sm={class:"stats-item"};function Em(n,t){return ye(),Te("div",Sm,t[0]||(t[0]=[cf('<img src="'+xm+'" alt="" data-v-5ff33fb9><div class="stats-item__info" data-v-5ff33fb9><div class="stats-item__title" data-v-5ff33fb9>Название сервера</div><div class="stats-item__text-online" data-v-5ff33fb9>Игроков онлайн</div><div class="stats-item__text-version" data-v-5ff33fb9>Версия: </div></div>',2)]))}const Es=De(Mm,[["render",Em],["__scopeId","data-v-5ff33fb9"]]),ym={class:"stats"},Tm={class:"stats__row"},bm={class:"stats__row"},Am={__name:"ServersStats",setup(n){return(t,e)=>(ye(),Te("div",ym,[Xt("div",Tm,[Kt(Es),Kt(Es),Kt(Es)]),Xt("div",bm,[Kt(Es),Kt(Es)])]))}},wm=De(Am,[["__scopeId","data-v-f602ca15"]]),Rm={id:"play",class:"play-content"},Cm={__name:"PlayContent",setup(n){return(t,e)=>(ye(),Te("section",Rm,[Kt(df),Kt(wm)]))}},Pm=De(Cm,[["__scopeId","data-v-8bcee1ce"]]),Dm={},Lm={id:"socials",class:"socials-content"};function Um(n,t){return ye(),Te("section",Lm,t[0]||(t[0]=[Xt("div",{class:"block"},[Xt("div",{class:"block__title"},"SOCIALS")],-1)]))}const Im=De(Dm,[["render",Um],["__scopeId","data-v-8cf3b2fd"]]),Nm={class:"main"},Fm={__name:"App",setup(n){return(t,e)=>(ye(),Te("main",Nm,[Kt(pm),Kt(cm),Kt(Rp),Kt(Wp),Kt(jp),Kt(tm),Kt(vm),Kt(Pm),Kt(Im)]))}},Om=De(Fm,[["__scopeId","data-v-2a211d09"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="171",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bm=0,ac=1,zm=2,pf=1,Hm=2,Pn=3,ei=0,Ge=1,Un=2,Jn=0,ss=1,lc=2,cc=3,uc=4,Vm=5,vi=100,Gm=101,km=102,Wm=103,Xm=104,Ym=200,qm=201,$m=202,jm=203,ra=204,oa=205,Km=206,Zm=207,Jm=208,Qm=209,t_=210,e_=211,n_=212,i_=213,s_=214,aa=0,la=1,ca=2,cs=3,ua=4,fa=5,ha=6,da=7,mf=0,r_=1,o_=2,Qn=0,a_=1,l_=2,c_=3,u_=4,f_=5,h_=6,d_=7,_f=300,us=301,fs=302,pa=303,ma=304,Qr=306,_a=1e3,Mi=1001,ga=1002,hn=1003,p_=1004,ir=1005,xn=1006,xo=1007,Si=1008,Bn=1009,gf=1010,vf=1011,ks=1012,dl=1013,bi=1014,In=1015,$s=1016,pl=1017,ml=1018,hs=1020,xf=35902,Mf=1021,Sf=1022,cn=1023,Ef=1024,yf=1025,rs=1026,ds=1027,Tf=1028,_l=1029,bf=1030,gl=1031,vl=1033,Pr=33776,Dr=33777,Lr=33778,Ur=33779,va=35840,xa=35841,Ma=35842,Sa=35843,Ea=36196,ya=37492,Ta=37496,ba=37808,Aa=37809,wa=37810,Ra=37811,Ca=37812,Pa=37813,Da=37814,La=37815,Ua=37816,Ia=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,Ir=36492,za=36494,Ha=36495,Af=36283,Va=36284,Ga=36285,ka=36286,m_=3200,__=3201,g_=0,v_=1,Zn="",je="srgb",ps="srgb-linear",Gr="linear",ie="srgb",Ui=7680,fc=519,x_=512,M_=513,S_=514,wf=515,E_=516,y_=517,T_=518,b_=519,hc=35044,dc="300 es",Nn=2e3,kr=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Ns=Math.PI/180,Ws=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function xl(n,t){return(n%t+t)%t}function A_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function w_(n,t,e){return n!==t?(e-n)/(t-n):0}function Fs(n,t,e){return(1-e)*n+e*t}function R_(n,t,e,i){return Fs(n,t,1-Math.exp(-e*i))}function C_(n,t=1){return t-Math.abs(xl(n,t*2)-t)}function P_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function D_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function L_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function U_(n,t){return n+Math.random()*(t-n)}function I_(n){return n*(.5-Math.random())}function N_(n){n!==void 0&&(pc=n);let t=pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F_(n){return n*Ns}function O_(n){return n*Ws}function B_(n){return(n&n-1)===0&&n!==0}function z_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function H_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function V_(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),x=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const G_={DEG2RAD:Ns,RAD2DEG:Ws,generateUUID:_s,clamp:Wt,euclideanModulo:xl,mapLinear:A_,inverseLerp:w_,lerp:Fs,damp:R_,pingpong:C_,smoothstep:P_,smootherstep:D_,randInt:L_,randFloat:U_,randFloatSpread:I_,seededRandom:N_,degToRad:F_,radToDeg:O_,isPowerOfTwo:B_,ceilPowerOfTwo:z_,floorPowerOfTwo:H_,setQuaternionFromProperEuler:V_,normalize:Ie,denormalize:$i};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],S=s[0],_=s[3],h=s[6],w=s[1],A=s[4],y=s[7],N=s[2],C=s[5],P=s[8];return r[0]=o*S+a*w+l*N,r[3]=o*_+a*A+l*C,r[6]=o*h+a*y+l*P,r[1]=c*S+u*w+f*N,r[4]=c*_+u*A+f*C,r[7]=c*h+u*y+f*P,r[2]=d*S+p*w+x*N,r[5]=d*_+p*A+x*C,r[8]=d*h+p*y+x*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,x=e*f+i*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=f*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=d*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=p*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Ht;function Rf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k_(){const n=Xs("canvas");return n.style.display="block",n}const mc={};function ji(n){n in mc||(mc[n]=!0,console.warn(n))}function W_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function X_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Y_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _c=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){const n={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ps]:{primaries:t,whitePoint:i,transfer:Gr,toXYZ:_c,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:_c,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}const jt=q_();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class $_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Xs("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j_=0;class Cf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(So(s[o].image)):r.push(So(s[o]))}else r=So(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K_=0;class ke extends Ci{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=Mi,s=Mi,r=xn,o=Si,a=cn,l=Bn,c=ke.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=_s(),this.name="",this.source=new Cf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=_f;ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],S=l[2],_=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(p+1)/2,N=(h+1)/2,C=(u+d)/4,P=(f+S)/4,O=(x+_)/4;return A>y&&A>N?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=C/i,r=P/i):y>N?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=O/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=P/r,s=O/r),this.set(i,s,r,e),this}let w=Math.sqrt((_-x)*(_-x)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(_-x)/w,this.y=(f-S)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z_ extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Z_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Pf extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=S;return}if(f!==S||l!==d||c!==p||u!==x){let _=1-a;const h=l*d+c*p+u*x+f*S,w=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const N=Math.sqrt(A),C=Math.atan2(N,h*w);_=Math.sin(_*C)/N,a=Math.sin(a*C)/N}const y=a*w;if(l=l*_+d*y,c=c*_+p*y,u=u*_+x*y,f=f*_+S*y,_===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+u*f+l*p-c*d,t[e+1]=l*x+u*d+c*f-a*p,t[e+2]=c*x+u*p+a*d-l*f,t[e+3]=u*x-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new G,vc=new wi;class js{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),rr.subVectors(this.max,ys),Ni.subVectors(t.a,ys),Fi.subVectors(t.b,ys),Oi.subVectors(t.c,ys),Vn.subVectors(Fi,Ni),Gn.subVectors(Oi,Fi),ui.subVectors(Ni,Oi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ui.z,ui.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ui.z,0,-ui.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ui.y,ui.x,0];return!yo(e,Ni,Fi,Oi,rr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ni,Fi,Oi,rr))?!1:(or.crossVectors(Vn,Gn),e=[or.x,or.y,or.z],yo(e,Ni,Fi,Oi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new G,new G,new G,new G,new G,new G,new G,new G],rn=new G,sr=new js,Ni=new G,Fi=new G,Oi=new G,Vn=new G,Gn=new G,ui=new G,ys=new G,rr=new G,or=new G,fi=new G;function yo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fi.fromArray(n,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Q_=new js,Ts=new G,To=new G;class Ml{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Q_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(To)),this.expandByPoint(Ts.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new G,bo=new G,ar=new G,kn=new G,Ao=new G,lr=new G,wo=new G;class Df{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bo.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=kn.dot(this.direction),l=-kn.dot(ar),c=kn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-a,d=o*a-l,x=r*u,f>=0)if(d>=-x)if(d<=x){const S=1/u;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bo).addScaledVector(ar,d),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,i,s,r){Ao.subVectors(e,t),lr.subVectors(i,t),wo.crossVectors(Ao,lr);let o=this.direction.dot(wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(lr.crossVectors(kn,lr));if(l<0)return null;const c=a*this.direction.dot(Ao.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(wo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,s,r,o,a,l,c,u,f,d,p,x,S,_){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,d,p,x,S,_)}set(t,e,i,s,r,o,a,l,c,u,f,d,p,x,S,_){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=S,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*f,x=a*u,S=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,x=c*u,S=c*f;e[0]=d+S*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-x,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,x=c*u,S=c*f;e[0]=d-S*a,e[4]=-o*f,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*u,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*f,x=a*u,S=a*f;e[0]=l*u,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*f,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=S-d*f,e[8]=x*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+x,e[10]=d-S*f}else if(t.order==="XZY"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+S,e[5]=o*u,e[9]=p*f-x,e[2]=x*f-p,e[6]=a*u,e[10]=S*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tg,t,eg)}lookAt(t,e,i){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Wn.crossVectors(i,Xe),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Wn.crossVectors(i,Xe)),Wn.normalize(),cr.crossVectors(Xe,Wn),s[0]=Wn.x,s[4]=cr.x,s[8]=Xe.x,s[1]=Wn.y,s[5]=cr.y,s[9]=Xe.y,s[2]=Wn.z,s[6]=cr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],S=i[6],_=i[10],h=i[14],w=i[3],A=i[7],y=i[11],N=i[15],C=s[0],P=s[4],O=s[8],T=s[12],E=s[1],D=s[5],J=s[9],Y=s[13],Q=s[2],ot=s[6],j=s[10],et=s[14],H=s[3],ft=s[7],vt=s[11],Tt=s[15];return r[0]=o*C+a*E+l*Q+c*H,r[4]=o*P+a*D+l*ot+c*ft,r[8]=o*O+a*J+l*j+c*vt,r[12]=o*T+a*Y+l*et+c*Tt,r[1]=u*C+f*E+d*Q+p*H,r[5]=u*P+f*D+d*ot+p*ft,r[9]=u*O+f*J+d*j+p*vt,r[13]=u*T+f*Y+d*et+p*Tt,r[2]=x*C+S*E+_*Q+h*H,r[6]=x*P+S*D+_*ot+h*ft,r[10]=x*O+S*J+_*j+h*vt,r[14]=x*T+S*Y+_*et+h*Tt,r[3]=w*C+A*E+y*Q+N*H,r[7]=w*P+A*D+y*ot+N*ft,r[11]=w*O+A*J+y*j+N*vt,r[15]=w*T+A*Y+y*et+N*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],x=t[3],S=t[7],_=t[11],h=t[15];return x*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+S*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+_*(+e*c*f-e*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*f+e*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],x=t[12],S=t[13],_=t[14],h=t[15],w=f*_*c-S*d*c+S*l*p-a*_*p-f*l*h+a*d*h,A=x*d*c-u*_*c-x*l*p+o*_*p+u*l*h-o*d*h,y=u*S*c-x*f*c+x*a*p-o*S*p-u*a*h+o*f*h,N=x*f*l-u*S*l-x*a*d+o*S*d+u*a*_-o*f*_,C=e*w+i*A+s*y+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=w*P,t[1]=(S*d*r-f*_*r-S*s*p+i*_*p+f*s*h-i*d*h)*P,t[2]=(a*_*r-S*l*r+S*s*c-i*_*c-a*s*h+i*l*h)*P,t[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*P,t[4]=A*P,t[5]=(u*_*r-x*d*r+x*s*p-e*_*p-u*s*h+e*d*h)*P,t[6]=(x*l*r-o*_*r-x*s*c+e*_*c+o*s*h-e*l*h)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=y*P,t[9]=(x*f*r-u*S*r-x*i*p+e*S*p+u*i*h-e*f*h)*P,t[10]=(o*S*r-x*a*r+x*i*c-e*S*c-o*i*h+e*a*h)*P,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*p-e*a*p)*P,t[12]=N*P,t[13]=(u*S*s-x*f*s+x*i*d-e*S*d-u*i*_+e*f*_)*P,t[14]=(x*a*s-o*S*s-x*i*l+e*S*l+o*i*_-e*a*_)*P,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,x=r*f,S=o*u,_=o*f,h=a*f,w=l*c,A=l*u,y=l*f,N=i.x,C=i.y,P=i.z;return s[0]=(1-(S+h))*N,s[1]=(p+y)*N,s[2]=(x-A)*N,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(d+h))*C,s[6]=(_+w)*C,s[7]=0,s[8]=(x+A)*P,s[9]=(_-w)*P,s[10]=(1-(d+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Nn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,x;if(a===Nn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===kr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Nn){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(o-r),d=(e+t)*c,p=(i+s)*u;let x,S;if(a===Nn)x=(o+r)*f,S=-2*f;else if(a===kr)x=r*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new G,on=new ge,tg=new G(0,0,0),eg=new G(1,1,1),Wn=new G,cr=new G,Xe=new G,xc=new ge,Mc=new wi;class zn{constructor(t=0,e=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ng=0;const Sc=new G,zi=new wi,wn=new ge,ur=new G,bs=new G,ig=new G,sg=new wi,Ec=new G(1,0,0),yc=new G(0,1,0),Tc=new G(0,0,1),bc={type:"added"},rg={type:"removed"},Hi={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ze extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new G,e=new zn,i=new wi,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ht}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ur.copy(t):ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(bs,ur,this.up):wn.lookAt(ur,bs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rg),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,ig),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new G(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new G,Rn=new G,Co=new G,Cn=new G,Vi=new G,Gi=new G,Ac=new G,Po=new G,Do=new G,Lo=new G,Uo=new pe,Io=new pe,No=new pe;class ln{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){an.subVectors(s,e),Rn.subVectors(i,e),Co.subVectors(t,e);const o=an.dot(an),a=an.dot(Rn),l=an.dot(Co),c=Rn.dot(Rn),u=Rn.dot(Co),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Uo.setScalar(0),Io.setScalar(0),No.setScalar(0),Uo.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,i),No.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Uo,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(No,r.z),o}static isFrontFacing(t,e,i,s){return an.subVectors(i,e),Rn.subVectors(t,e),an.cross(Rn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,i),Gi.subVectors(r,i),Po.subVectors(t,i);const l=Vi.dot(Po),c=Gi.dot(Po);if(l<=0&&c<=0)return e.copy(i);Do.subVectors(t,s);const u=Vi.dot(Do),f=Gi.dot(Do);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Vi,o);Lo.subVectors(t,r);const p=Vi.dot(Lo),x=Gi.dot(Lo);if(x>=0&&p<=x)return e.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Gi,a);const _=u*x-p*f;if(_<=0&&f-u>=0&&p-x>=0)return Ac.subVectors(r,s),a=(f-u)/(f-u+(p-x)),e.copy(s).addScaledVector(Ac,a);const h=1/(_+S+d);return o=S*h,a=d*h,e.copy(i).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=xl(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Fo(o,r,t+1/3),this.g=Fo(o,r,t),this.b=Fo(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Uf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Wt(Ce.r*255,0,255))*65536+Math.round(Wt(Ce.g*255,0,255))*256+Math.round(Wt(Ce.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=je){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,s=Ce.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(fr);const i=Fs(Xn.h,fr.h,e),s=Fs(Xn.s,fr.s,e),r=Fs(Xn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new oe;oe.NAMES=Uf;let og=0;class to extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=ss,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ra&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class If extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new G,hr=new kt;class Sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class Nf extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ff extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ti extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ag=0;const tn=new ge,Oo=new Ze,ki=new G,Ye=new js,As=new js,Ee=new G;class Pi extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rf(t)?Ff:Nf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,i){return tn.makeTranslation(t,e,i),this.applyMatrix4(tn),this}scale(t,e,i){return tn.makeScale(t,e,i),this.applyMatrix4(tn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ti(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ye.min,As.min),Ye.expandByPoint(Ee),Ee.addVectors(Ye.max,As.max),Ye.expandByPoint(Ee)):(Ye.expandByPoint(As.min),Ye.expandByPoint(As.max))}Ye.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ee.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),Ee.add(ki)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new G,l[O]=new G;const c=new G,u=new G,f=new G,d=new kt,p=new kt,x=new kt,S=new G,_=new G;function h(O,T,E){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[O].add(S),a[T].add(S),a[E].add(S),l[O].add(_),l[T].add(_),l[E].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,T=w.length;O<T;++O){const E=w[O],D=E.start,J=E.count;for(let Y=D,Q=D+J;Y<Q;Y+=3)h(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const A=new G,y=new G,N=new G,C=new G;function P(O){N.fromBufferAttribute(s,O),C.copy(N);const T=a[O];A.copy(T),A.sub(N.multiplyScalar(N.dot(T))).normalize(),y.crossVectors(C,T);const D=y.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,D)}for(let O=0,T=w.length;O<T;++O){const E=w[O],D=E.start,J=E.count;for(let Y=D,Q=D+J;Y<Q;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,_=l.length;S<_;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new Sn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ge,hi=new Df,dr=new Ml,Rc=new G,pr=new G,mr=new G,_r=new G,Bo=new G,gr=new G,Cc=new G,vr=new G;class Fn extends Ze{constructor(t=new Pi,e=new If){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Bo.fromBufferAttribute(f,t),o?gr.addScaledVector(Bo,u):gr.addScaledVector(Bo.sub(e),u))}e.add(gr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(dr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(dr,Rc)===null||hi.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),hi.copy(t.ray).applyMatrix4(wc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const _=d[x],h=o[_.materialIndex],w=Math.max(_.start,p.start),A=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=w,N=A;y<N;y+=3){const C=a.getX(y),P=a.getX(y+1),O=a.getX(y+2);s=xr(this,h,t,i,c,u,f,C,P,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let _=x,h=S;_<h;_+=3){const w=a.getX(_),A=a.getX(_+1),y=a.getX(_+2);s=xr(this,o,t,i,c,u,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const _=d[x],h=o[_.materialIndex],w=Math.max(_.start,p.start),A=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=w,N=A;y<N;y+=3){const C=y,P=y+1,O=y+2;s=xr(this,h,t,i,c,u,f,C,P,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let _=x,h=S;_<h;_+=3){const w=_,A=_+1,y=_+2;s=xr(this,o,t,i,c,u,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function lg(n,t,e,i,s,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;vr.copy(a),vr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:n}}function xr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,pr),n.getVertexPosition(l,mr),n.getVertexPosition(c,_r);const u=lg(n,t,e,i,pr,mr,_r,Cc);if(u){const f=new G;ln.getBarycoord(Cc,pr,mr,_r,f),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,f,new kt)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,f,new kt)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};ln.getNormal(pr,mr,_r,d.normal),u.face=d,u.barycoord=f}return u}class Ks extends Pi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(f,2));function x(S,_,h,w,A,y,N,C,P,O,T){const E=y/P,D=N/O,J=y/2,Y=N/2,Q=C/2,ot=P+1,j=O+1;let et=0,H=0;const ft=new G;for(let vt=0;vt<j;vt++){const Tt=vt*D-Y;for(let Dt=0;Dt<ot;Dt++){const Zt=Dt*E-J;ft[S]=Zt*w,ft[_]=Tt*A,ft[h]=Q,c.push(ft.x,ft.y,ft.z),ft[S]=0,ft[_]=0,ft[h]=C>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push(Dt/P),f.push(1-vt/O),et+=1}}for(let vt=0;vt<O;vt++)for(let Tt=0;Tt<P;Tt++){const Dt=d+Tt+ot*vt,Zt=d+Tt+ot*(vt+1),tt=d+(Tt+1)+ot*(vt+1),ut=d+(Tt+1)+ot*vt;l.push(Dt,Zt,ut),l.push(Zt,tt,ut),H+=6}a.addGroup(p,H,T),p+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const s in i)t[s]=i[s]}return t}function cg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Of(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ug={clone:ms,merge:Ne};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bf extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new G,Pc=new kt,Dc=new kt;class en extends Bf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Dc),e.subVectors(Dc,Pc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class dg extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new en(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new en(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new en(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new en(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new en(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Sl extends ke{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pg extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ks(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Jn});r.uniforms.tEquirect.value=e;const o=new Fn(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=xn),new dg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class mg extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zo=new G,_g=new G,gg=new Ht;class jn{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=zo.subVectors(i,e).cross(_g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gg.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ml,Mr=new G;class zf{constructor(t=new jn,e=new jn,i=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],x=s[9],S=s[10],_=s[11],h=s[12],w=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,_-p,y-h).normalize(),i[1].setComponents(l+r,d+c,_+p,y+h).normalize(),i[2].setComponents(l+o,d+u,_+x,y+w).normalize(),i[3].setComponents(l-o,d-u,_-x,y-w).normalize(),i[4].setComponents(l-a,d-f,_-S,y-A).normalize(),e===Nn)i[5].setComponents(l+a,d+f,_+S,y+A).normalize();else if(e===kr)i[5].setComponents(a,f,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sr extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hf extends ke{constructor(t,e,i,s,r,o,a,l,c,u=rs){if(u!==rs&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===rs&&(i=bi),i===void 0&&u===ds&&(i=hs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class eo extends Pi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,d=e/l,p=[],x=[],S=[],_=[];for(let h=0;h<u;h++){const w=h*d-o;for(let A=0;A<c;A++){const y=A*f-r;x.push(y,-w,0),S.push(0,0,1),_.push(A/a),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const A=w+c*h,y=w+c*(h+1),N=w+1+c*(h+1),C=w+1+c*h;p.push(A,y,C),p.push(y,N,C)}this.setIndex(p),this.setAttribute("position",new Ti(x,3)),this.setAttribute("normal",new Ti(S,3)),this.setAttribute("uv",new Ti(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}class vg extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Mg{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const Sg=new Mg;class El{constructor(t){this.manager=t!==void 0?t:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";class Eg extends El{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Lc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xs("img");function l(){u(),Lc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class yg extends El{constructor(t){super(t)}load(t,e,i,s){const r=new Sl;r.colorSpace=je;const o=new Eg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class Tg extends Bf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bg extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Uc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ag extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ic(n,t,e,i){const s=wg(i);switch(e){case Mf:return n*t;case Ef:return n*t;case yf:return n*t*2;case Tf:return n*t/s.components*s.byteLength;case _l:return n*t/s.components*s.byteLength;case bf:return n*t*2/s.components*s.byteLength;case gl:return n*t*2/s.components*s.byteLength;case Sf:return n*t*3/s.components*s.byteLength;case cn:return n*t*4/s.components*s.byteLength;case vl:return n*t*4/s.components*s.byteLength;case Pr:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:case Sa:return Math.max(n,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ir:case za:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Af:case Va:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ga:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wg(n){switch(n){case Bn:case gf:return{byteLength:1,components:1};case ks:case vf:case $s:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case bi:case dl:case In:return{byteLength:4,components:1};case xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Rg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],S=f[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Dg,alphamap_pars_fragment:Lg,alphatest_fragment:Ug,alphatest_pars_fragment:Ig,aomap_fragment:Ng,aomap_pars_fragment:Fg,batching_pars_vertex:Og,batching_vertex:Bg,begin_vertex:zg,beginnormal_vertex:Hg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:qg,color_fragment:$g,color_pars_fragment:jg,color_pars_vertex:Kg,color_vertex:Zg,common:Jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:t0,displacementmap_pars_vertex:e0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:S0,envmap_vertex:f0,fog_vertex:h0,fog_pars_vertex:d0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:g0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:x0,lights_pars_begin:M0,lights_toon_fragment:E0,lights_toon_pars_fragment:y0,lights_phong_fragment:T0,lights_phong_pars_fragment:b0,lights_physical_fragment:A0,lights_physical_pars_fragment:w0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:I0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:O0,map_particle_pars_fragment:B0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:H0,morphinstance_vertex:V0,morphcolor_vertex:G0,morphnormal_vertex:k0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:Y0,normal_fragment_maps:q0,normal_pars_fragment:$0,normal_pars_vertex:j0,normal_vertex:K0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:tv,iridescence_pars_fragment:ev,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:sv,project_vertex:rv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:lv,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:fv,shadowmap_vertex:hv,shadowmask_pars_fragment:dv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:_v,skinnormal_vertex:gv,specularmap_fragment:vv,specularmap_pars_fragment:xv,tonemapping_fragment:Mv,tonemapping_pars_fragment:Sv,transmission_fragment:Ev,transmission_pars_fragment:yv,uv_pars_fragment:Tv,uv_pars_vertex:bv,uv_vertex:Av,worldpos_vertex:wv,background_vert:Rv,background_frag:Cv,backgroundCube_vert:Pv,backgroundCube_frag:Dv,cube_vert:Lv,cube_frag:Uv,depth_vert:Iv,depth_frag:Nv,distanceRGBA_vert:Fv,distanceRGBA_frag:Ov,equirect_vert:Bv,equirect_frag:zv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:kv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:Yv,meshmatcap_frag:qv,meshnormal_vert:$v,meshnormal_frag:jv,meshphong_vert:Kv,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:Qv,meshtoon_vert:tx,meshtoon_frag:ex,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ox,sprite_frag:ax},pt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},gn={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gn.physical={uniforms:Ne([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Er={r:0,b:0,g:0},pi=new zn,lx=new ge;function cx(n,t,e,i,s,r,o){const a=new oe(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function x(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function S(A){let y=!1;const N=x(A);N===null?h(a,l):N&&N.isColor&&(h(N,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(A,y){const N=x(y);N&&(N.isCubeTexture||N.mapping===Qr)?(u===void 0&&(u=new Fn(new Ks(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ms(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(pi)),u.material.toneMapped=jt.getTransfer(N.colorSpace)!==ie,(f!==N||d!==N.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=N,d=N.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Fn(new eo(2,2),new ni({name:"BackgroundMaterial",uniforms:ms(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(N.colorSpace)!==ie,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||d!==N.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=N,d=N.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,y){A.getRGB(Er,Of(n)),i.buffers.color.setClear(Er.r,Er.g,Er.b,y,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:S,addToRenderList:_,dispose:w}}function ux(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,J,Y,Q){let ot=!1;const j=f(Y,J,D);r!==j&&(r=j,c(r.object)),ot=p(E,Y,J,Q),ot&&x(E,Y,J,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,y(E,D,J,Y),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,D,J){const Y=J.wireframe===!0;let Q=i[E.id];Q===void 0&&(Q={},i[E.id]=Q);let ot=Q[D.id];ot===void 0&&(ot={},Q[D.id]=ot);let j=ot[Y];return j===void 0&&(j=d(l()),ot[Y]=j),j}function d(E){const D=[],J=[],Y=[];for(let Q=0;Q<e;Q++)D[Q]=0,J[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:J,attributeDivisors:Y,object:E,attributes:{},index:null}}function p(E,D,J,Y){const Q=r.attributes,ot=D.attributes;let j=0;const et=J.getAttributes();for(const H in et)if(et[H].location>=0){const vt=Q[H];let Tt=ot[H];if(Tt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;j++}return r.attributesNum!==j||r.index!==Y}function x(E,D,J,Y){const Q={},ot=D.attributes;let j=0;const et=J.getAttributes();for(const H in et)if(et[H].location>=0){let vt=ot[H];vt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor));const Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),Q[H]=Tt,j++}r.attributes=Q,r.attributesNum=j,r.index=Y}function S(){const E=r.newAttributes;for(let D=0,J=E.length;D<J;D++)E[D]=0}function _(E){h(E,0)}function h(E,D){const J=r.newAttributes,Y=r.enabledAttributes,Q=r.attributeDivisors;J[E]=1,Y[E]===0&&(n.enableVertexAttribArray(E),Y[E]=1),Q[E]!==D&&(n.vertexAttribDivisor(E,D),Q[E]=D)}function w(){const E=r.newAttributes,D=r.enabledAttributes;for(let J=0,Y=D.length;J<Y;J++)D[J]!==E[J]&&(n.disableVertexAttribArray(J),D[J]=0)}function A(E,D,J,Y,Q,ot,j){j===!0?n.vertexAttribIPointer(E,D,J,Q,ot):n.vertexAttribPointer(E,D,J,Y,Q,ot)}function y(E,D,J,Y){S();const Q=Y.attributes,ot=J.getAttributes(),j=D.defaultAttributeValues;for(const et in ot){const H=ot[et];if(H.location>=0){let ft=Q[et];if(ft===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor)),ft!==void 0){const vt=ft.normalized,Tt=ft.itemSize,Dt=t.get(ft);if(Dt===void 0)continue;const Zt=Dt.buffer,tt=Dt.type,ut=Dt.bytesPerElement,Et=tt===n.INT||tt===n.UNSIGNED_INT||ft.gpuType===dl;if(ft.isInterleavedBufferAttribute){const ht=ft.data,wt=ht.stride,It=ft.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)h(H.location+Ot,ht.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)_(H.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Ot=0;Ot<H.locationSize;Ot++)A(H.location+Ot,Tt/H.locationSize,tt,vt,wt*ut,(It+Tt/H.locationSize*Ot)*ut,Et)}else{if(ft.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)h(H.location+ht,ft.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ht=0;ht<H.locationSize;ht++)_(H.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let ht=0;ht<H.locationSize;ht++)A(H.location+ht,Tt/H.locationSize,tt,vt,Tt*ut,Tt/H.locationSize*ht*ut,Et)}}else if(j!==void 0){const vt=j[et];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(H.location,vt);break;case 3:n.vertexAttrib3fv(H.location,vt);break;case 4:n.vertexAttrib4fv(H.location,vt);break;default:n.vertexAttrib1fv(H.location,vt)}}}}w()}function N(){O();for(const E in i){const D=i[E];for(const J in D){const Y=D[J];for(const Q in Y)u(Y[Q].object),delete Y[Q];delete D[J]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const J in D){const Y=D[J];for(const Q in Y)u(Y[Q].object),delete Y[Q];delete D[J]}delete i[E.id]}function P(E){for(const D in i){const J=i[D];if(J[E.id]===void 0)continue;const Y=J[E.id];for(const Q in Y)u(Y[Q].object),delete Y[Q];delete J[E.id]}}function O(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:_,disableUnusedAttributes:w}}function fx(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];e.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S]*d[S];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:N,maxSamples:C}}function dx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new jn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,S=f.clipIntersection,_=f.clipShadows,h=n.get(f);if(!s||x===null||x.length===0||r&&!_)r?u(null):c();else{const w=r?0:i,A=w*4;let y=h.clippingState||null;l.value=y,y=u(x,d,A,p);for(let N=0;N!==A;++N)y[N]=e[N];h.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,x){const S=f!==null?f.length:0;let _=null;if(S!==0){if(_=l.value,x!==!0||_===null){const h=p+S*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<h)&&(_=new Float32Array(h));for(let A=0,y=p;A!==S;++A,y+=4)o.copy(f[A]).applyMatrix4(w,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,_}}function px(n){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=us:a===ma&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zi=4,Nc=[.125,.215,.35,.446,.526,.582],xi=20,Ho=new Tg,Fc=new oe;let Vo=null,Go=0,ko=0,Wo=!1;const gi=(1+Math.sqrt(5))/2,Yi=1/gi,Oc=[new G(-gi,Yi,0),new G(gi,Yi,0),new G(-Yi,0,gi),new G(Yi,0,gi),new G(0,gi,-Yi),new G(0,gi,Yi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Go,ko),this._renderer.xr.enabled=Wo,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:$s,format:cn,colorSpace:ps,depthBuffer:!1},s=zc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(r)),this._blurMaterial=_x(r,t,e)}return s}_compileMaterial(t){const e=new Fn(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,i,s){const a=new en(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fc),u.toneMapping=Qn,u.autoClear=!1;const p=new If({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),x=new Fn(new Ks,p);let S=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,S=!0):(p.color.copy(Fc),S=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const A=this._cubeSize;yr(s,w*A,h>2?A:0,A,A),u.setRenderTarget(s),S&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===us||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ho)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(s-r-1)%Oc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),S=r/x,_=isFinite(r)?1+Math.floor(u*S):xi;_>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${xi}`);const h=[];let w=0;for(let P=0;P<xi;++P){const O=P/S,T=Math.exp(-O*O/2);h.push(T),P===0?w+=T:P<_&&(w+=2*T)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-i;const y=this._sizeLods[s],N=3*y*(s>A-Zi?s-A+Zi:0),C=4*(this._cubeSize-y);yr(e,N,C,3*y,2*y),l.setRenderTarget(e),l.render(f,Ho)}}function mx(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+Nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zi?l=Nc[o-n+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,S=3,_=2,h=1,w=new Float32Array(S*x*p),A=new Float32Array(_*x*p),y=new Float32Array(h*x*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,O=C>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(T,S*x*C),A.set(d,_*x*C);const E=[C,C,C,C,C,C];y.set(E,h*x*C)}const N=new Pi;N.setAttribute("position",new Sn(w,S)),N.setAttribute("uv",new Sn(A,_)),N.setAttribute("faceIndex",new Sn(y,h)),t.push(N),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zc(n,t,e){const i=new Ai(n,t,e);return i.texture.mapping=Qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function _x(n,t,e){const i=new Float32Array(xi),s=new G(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pa||l===ma,u=l===us||l===fs;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bc(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Bc(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function vx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ji("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xx(n,t,e,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,x=f.attributes.position;let S=0;if(p!==null){const w=p.array;S=p.version;for(let A=0,y=w.length;A<y;A+=3){const N=w[A+0],C=w[A+1],P=w[A+2];d.push(N,C,C,P,P,N)}}else if(x!==void 0){const w=x.array;S=x.version;for(let A=0,y=w.length/3-1;A<y;A+=3){const N=A+0,C=A+1,P=A+2;d.push(N,C,C,P,P,N)}}else return;const _=new(Rf(d)?Ff:Nf)(d,1);_.version=S;const h=r.get(f);h&&t.remove(h),r.set(f,_)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Mx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,d*o,x),e.update(p,i,x))}function u(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,x);let _=0;for(let h=0;h<x;h++)_+=p[h];e.update(_,i,1)}function f(d,p,x,S){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],S[h]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,S,0,x);let h=0;for(let w=0;w<x;w++)h+=p[w]*S[w];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Sx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ex(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let y=a.attributes.position.count*A,N=1;y>t.maxTextureSize&&(N=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*N*4*f),P=new Pf(C,y,N,f);P.type=In,P.needsUpdate=!0;const O=A*4;for(let E=0;E<f;E++){const D=_[E],J=h[E],Y=w[E],Q=y*N*4*E;for(let ot=0;ot<D.count;ot++){const j=ot*O;p===!0&&(s.fromBufferAttribute(D,ot),C[Q+j+0]=s.x,C[Q+j+1]=s.y,C[Q+j+2]=s.z,C[Q+j+3]=0),x===!0&&(s.fromBufferAttribute(J,ot),C[Q+j+4]=s.x,C[Q+j+5]=s.y,C[Q+j+6]=s.z,C[Q+j+7]=0),S===!0&&(s.fromBufferAttribute(Y,ot),C[Q+j+8]=s.x,C[Q+j+9]=s.y,C[Q+j+10]=s.z,C[Q+j+11]=Y.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new kt(y,N)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function yx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Gf=new ke,Gc=new Hf(1,1),kf=new Pf,Wf=new J_,Xf=new Sl,kc=[],Wc=[],Xc=new Float32Array(16),Yc=new Float32Array(9),qc=new Float32Array(4);function gs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function no(n,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Tx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function Rx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;qc.set(i),n.uniformMatrix2fv(this.addr,!1,qc),Se(e,i)}}function Cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Yc.set(i),n.uniformMatrix3fv(this.addr,!1,Yc),Se(e,i)}}function Px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Xc.set(i),n.uniformMatrix4fv(this.addr,!1,Xc),Se(e,i)}}function Dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function Nx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=wf,r=Gc):r=Gf,e.setTexture2D(t||r,s)}function Hx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wf,s)}function Vx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xf,s)}function Gx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kf,s)}function kx(n){switch(n){case 5126:return Tx;case 35664:return bx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Dx;case 35667:case 35671:return Lx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ix;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Wx(n,t){n.uniform1fv(this.addr,t)}function Xx(n,t){const e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function Yx(n,t){const e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function qx(n,t){const e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function $x(n,t){const e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jx(n,t){const e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Kx(n,t){const e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zx(n,t){n.uniform1iv(this.addr,t)}function Jx(n,t){n.uniform2iv(this.addr,t)}function Qx(n,t){n.uniform3iv(this.addr,t)}function tM(n,t){n.uniform4iv(this.addr,t)}function eM(n,t){n.uniform1uiv(this.addr,t)}function nM(n,t){n.uniform2uiv(this.addr,t)}function iM(n,t){n.uniform3uiv(this.addr,t)}function sM(n,t){n.uniform4uiv(this.addr,t)}function rM(n,t,e){const i=this.cache,s=t.length,r=no(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Gf,r[o])}function oM(n,t,e){const i=this.cache,s=t.length,r=no(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wf,r[o])}function aM(n,t,e){const i=this.cache,s=t.length,r=no(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xf,r[o])}function lM(n,t,e){const i=this.cache,s=t.length,r=no(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kf,r[o])}function cM(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return $x;case 35675:return jx;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class uM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kx(e.type)}}class fM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cM(e.type)}}class hM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function $c(n,t){n.seq.push(t),n.map[t.id]=t}function dM(n,t,e){const i=n.name,s=i.length;for(Xo.lastIndex=0;;){const r=Xo.exec(i),o=Xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$c(e,c===void 0?new uM(a,n,t):new fM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new hM(a),$c(e,f)),e=f}}}class Nr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function jc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const pM=37297;let mM=0;function _M(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Kc=new Ht;function gM(n){jt._getMatrix(Kc,jt.workingColorSpace,n);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Gr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_M(n.getShaderSource(t),o)}else return s}function vM(n,t){const e=gM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xM(n,t){let e;switch(t){case a_:e="Linear";break;case l_:e="Reinhard";break;case c_:e="Cineon";break;case u_:e="ACESFilmic";break;case h_:e="AgX";break;case d_:e="Neutral";break;case f_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Tr=new G;function MM(){jt.getLuminanceCoefficients(Tr);const n=Tr.x.toFixed(4),t=Tr.y.toFixed(4),e=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function EM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rs(n){return n!==""}function Jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(TM,AM)}const bM=new Map;function AM(n,t){let e=Vt[t];if(e===void 0){const i=bM.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(n){return n.replace(wM,RM)}function RM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function PM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function LM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mf:t="ENVMAP_BLENDING_MULTIPLY";break;case r_:t="ENVMAP_BLENDING_MIX";break;case o_:t="ENVMAP_BLENDING_ADD";break}return t}function UM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function IM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=CM(e),c=PM(e),u=DM(e),f=LM(e),d=UM(e),p=SM(e),x=EM(r),S=s.createProgram();let _,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Rs).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Rs).join(`
`),h.length>0&&(h+=`
`)):(_=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),h=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?xM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,vM("linearToOutputTexel",e.outputColorSpace),MM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Wa(o),o=Jc(o,e),o=Qc(o,e),a=Wa(a),a=Jc(a,e),a=Qc(a,e),o=tu(o),a=tu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=w+_+o,y=w+h+a,N=jc(s,s.VERTEX_SHADER,A),C=jc(s,s.FRAGMENT_SHADER,y);s.attachShader(S,N),s.attachShader(S,C),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(D){if(n.debug.checkShaderErrors){const J=s.getProgramInfoLog(S).trim(),Y=s.getShaderInfoLog(N).trim(),Q=s.getShaderInfoLog(C).trim();let ot=!0,j=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,N,C);else{const et=Zc(s,N,"vertex"),H=Zc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+et+`
`+H)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||Q==="")&&(j=!1);j&&(D.diagnostics={runnable:ot,programLog:J,vertexShader:{log:Y,prefix:_},fragmentShader:{log:Q,prefix:h}})}s.deleteShader(N),s.deleteShader(C),O=new Nr(s,S),T=yM(s,S)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,pM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mM++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=C,this}let NM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new OM(t),e.set(t,i)),i}}class OM{constructor(t){this.id=NM++,this.code=t,this.usedTimes=0}}function BM(n,t,e,i,s,r,o){const a=new Lf,l=new FM,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,E,D,J,Y){const Q=J.fog,ot=Y.geometry,j=T.isMeshStandardMaterial?J.environment:null,et=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),H=et&&et.mapping===Qr?et.image.height:null,ft=x[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const vt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Tt=vt!==void 0?vt.length:0;let Dt=0;ot.morphAttributes.position!==void 0&&(Dt=1),ot.morphAttributes.normal!==void 0&&(Dt=2),ot.morphAttributes.color!==void 0&&(Dt=3);let Zt,tt,ut,Et;if(ft){const ne=gn[ft];Zt=ne.vertexShader,tt=ne.fragmentShader}else Zt=T.vertexShader,tt=T.fragmentShader,l.update(T),ut=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const ht=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),It=Y.isInstancedMesh===!0,Ot=Y.isBatchedMesh===!0,ae=!!T.map,Yt=!!T.matcap,b=!!et,g=!!T.aoMap,X=!!T.lightMap,K=!!T.bumpMap,q=!!T.normalMap,V=!!T.displacementMap,st=!!T.emissiveMap,$=!!T.metalnessMap,v=!!T.roughnessMap,m=T.anisotropy>0,R=T.clearcoat>0,I=T.dispersion>0,z=T.iridescence>0,B=T.sheen>0,lt=T.transmission>0,rt=m&&!!T.anisotropyMap,at=R&&!!T.clearcoatMap,Ut=R&&!!T.clearcoatNormalMap,it=R&&!!T.clearcoatRoughnessMap,dt=z&&!!T.iridescenceMap,yt=z&&!!T.iridescenceThicknessMap,Rt=B&&!!T.sheenColorMap,Mt=B&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ct=!!T.specularColorMap,ee=!!T.specularIntensityMap,L=lt&&!!T.transmissionMap,mt=lt&&!!T.thicknessMap,Z=!!T.gradientMap,nt=!!T.alphaMap,xt=T.alphaTest>0,gt=!!T.alphaHash,zt=!!T.extensions;let he=Qn;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(he=n.toneMapping);const we={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:Zt,fragmentShader:tt,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&Y._colorsTexture!==null,instancing:It,instancingColor:It&&Y.instanceColor!==null,instancingMorph:It&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ps,alphaToCoverage:!!T.alphaToCoverage,map:ae,matcap:Yt,envMap:b,envMapMode:b&&et.mapping,envMapCubeUVHeight:H,aoMap:g,lightMap:X,bumpMap:K,normalMap:q,displacementMap:d&&V,emissiveMap:st,normalMapObjectSpace:q&&T.normalMapType===v_,normalMapTangentSpace:q&&T.normalMapType===g_,metalnessMap:$,roughnessMap:v,anisotropy:m,anisotropyMap:rt,clearcoat:R,clearcoatMap:at,clearcoatNormalMap:Ut,clearcoatRoughnessMap:it,dispersion:I,iridescence:z,iridescenceMap:dt,iridescenceThicknessMap:yt,sheen:B,sheenColorMap:Rt,sheenRoughnessMap:Mt,specularMap:Lt,specularColorMap:Ct,specularIntensityMap:ee,transmission:lt,transmissionMap:L,thicknessMap:mt,gradientMap:Z,opaque:T.transparent===!1&&T.blending===ss&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:gt,combine:T.combine,mapUv:ae&&S(T.map.channel),aoMapUv:g&&S(T.aoMap.channel),lightMapUv:X&&S(T.lightMap.channel),bumpMapUv:K&&S(T.bumpMap.channel),normalMapUv:q&&S(T.normalMap.channel),displacementMapUv:V&&S(T.displacementMap.channel),emissiveMapUv:st&&S(T.emissiveMap.channel),metalnessMapUv:$&&S(T.metalnessMap.channel),roughnessMapUv:v&&S(T.roughnessMap.channel),anisotropyMapUv:rt&&S(T.anisotropyMap.channel),clearcoatMapUv:at&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&S(T.sheenRoughnessMap.channel),specularMapUv:Lt&&S(T.specularMap.channel),specularColorMapUv:Ct&&S(T.specularColorMap.channel),specularIntensityMapUv:ee&&S(T.specularIntensityMap.channel),transmissionMapUv:L&&S(T.transmissionMap.channel),thicknessMapUv:mt&&S(T.thicknessMap.channel),alphaMapUv:nt&&S(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(q||m),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ot.attributes.uv&&(ae||nt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:Y.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:ae&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Un,flipSided:T.side===Ge,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function h(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(w(E,T),A(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function w(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function A(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=x[T.type];let D;if(E){const J=gn[E];D=ug.clone(J.uniforms)}else D=T.uniforms;return D}function N(T,E){let D;for(let J=0,Y=u.length;J<Y;J++){const Q=u[J];if(Q.cacheKey===E){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new IM(n,E,T,r),u.push(D)),D}function C(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:_,getProgramCacheKey:h,getUniforms:y,acquireProgram:N,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:O}}function zM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function HM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function nu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function iu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,d,p,x,S,_){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:_},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=S,h.group=_),t++,h}function a(f,d,p,x,S,_){const h=o(f,d,p,x,S,_);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,x,S,_){const h=o(f,d,p,x,S,_);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||HM),i.length>1&&i.sort(d||nu),s.length>1&&s.sort(d||nu)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function VM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function GM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new oe};break;case"SpotLight":e={position:new G,direction:new G,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function kM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let WM=0;function XM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function YM(n){const t=new GM,e=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ge,o=new ge;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,S=0,_=0,h=0,w=0,A=0,y=0,N=0,C=0,P=0;c.sort(XM);for(let T=0,E=c.length;T<E;T++){const D=c[T],J=D.color,Y=D.intensity,Q=D.distance,ot=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=J.r*Y,f+=J.g*Y,d+=J.b*Y;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],Y);P++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ot,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=j,p++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(J).multiplyScalar(Y),j.distance=Q,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[S]=j;const et=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,et.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[S]=et.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=ot,y++}S++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(J).multiplyScalar(Y),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=j,_++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const et=D.shadow,H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=ot,i.pointShadowMatrix[x]=D.shadow.matrix,A++}i.point[x]=j,x++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(Y),j.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[h]=j,h++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==x||O.spotLength!==S||O.rectAreaLength!==_||O.hemiLength!==h||O.numDirectionalShadows!==w||O.numPointShadows!==A||O.numSpotShadows!==y||O.numSpotMaps!==N||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=_,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,O.directionalLength=p,O.pointLength=x,O.spotLength=S,O.rectAreaLength=_,O.hemiLength=h,O.numDirectionalShadows=w,O.numPointShadows=A,O.numSpotShadows=y,O.numSpotMaps=N,O.numLightProbes=P,i.version=WM++)}function l(c,u){let f=0,d=0,p=0,x=0,S=0;const _=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const A=c[h];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),f++}else if(A.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),o.identity(),r.copy(A.matrixWorld),r.premultiply(_),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(_),S++}}}return{setup:a,setupView:l,state:i}}function su(n){const t=new YM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new su(n),t.set(s,[a])):r>=o.length?(a=new su(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM(n,t,e){let i=new zf;const s=new kt,r=new kt,o=new pe,a=new vg({depthPacking:__}),l=new xg,c={},u=e.maxTextureSize,f={[ei]:Ge,[Ge]:ei,[Un]:Un},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:$M,fragmentShader:jM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Pi;x.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Fn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let h=this.type;this.render=function(C,P,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Jn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=h!==Pn&&this.type===Pn,Q=h===Pn&&this.type!==Pn;for(let ot=0,j=C.length;ot<j;ot++){const et=C[ot],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ft=H.getFrameExtents();if(s.multiply(ft),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,H.mapSize.y=r.y)),H.map===null||Y===!0||Q===!0){const Tt=this.type!==Pn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(s.x,s.y,Tt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const vt=H.getViewportCount();for(let Tt=0;Tt<vt;Tt++){const Dt=H.getViewport(Tt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),J.viewport(o),H.updateMatrices(et,Tt),i=H.getFrustum(),y(P,O,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&w(H,O),H.needsUpdate=!1}h=this.type,_.needsUpdate=!1,n.setRenderTarget(T,E,D)};function w(C,P){const O=t.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,O,p,S,null)}function A(C,P,O,T){let E=null;const D=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)E=D;else if(E=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const J=E.uuid,Y=P.uuid;let Q=c[J];Q===void 0&&(Q={},c[J]=Q);let ot=Q[Y];ot===void 0&&(ot=E.clone(),Q[Y]=ot,P.addEventListener("dispose",N)),E=ot}if(E.visible=P.visible,E.wireframe=P.wireframe,T===Pn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const J=n.properties.get(E);J.light=O}return E}function y(C,P,O,T,E){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const Y=t.update(C),Q=C.material;if(Array.isArray(Q)){const ot=Y.groups;for(let j=0,et=ot.length;j<et;j++){const H=ot[j],ft=Q[H.materialIndex];if(ft&&ft.visible){const vt=A(C,ft,T,E);C.onBeforeShadow(n,C,P,O,Y,vt,H),n.renderBufferDirect(O,null,Y,vt,C,H),C.onAfterShadow(n,C,P,O,Y,vt,H)}}}else if(Q.visible){const ot=A(C,Q,T,E);C.onBeforeShadow(n,C,P,O,Y,ot,null),n.renderBufferDirect(O,null,Y,ot,C,null),C.onAfterShadow(n,C,P,O,Y,ot,null)}}const J=C.children;for(let Y=0,Q=J.length;Y<Q;Y++)y(J[Y],P,O,T,E)}function N(C){C.target.removeEventListener("dispose",N);for(const O in c){const T=c[O],E=C.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const ZM={[aa]:la,[ca]:ha,[ua]:da,[cs]:fa,[la]:aa,[ha]:ca,[da]:ua,[fa]:cs};function JM(n,t){function e(){let L=!1;const mt=new pe;let Z=null;const nt=new pe(0,0,0,0);return{setMask:function(xt){Z!==xt&&!L&&(n.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){L=xt},setClear:function(xt,gt,zt,he,we){we===!0&&(xt*=he,gt*=he,zt*=he),mt.set(xt,gt,zt,he),nt.equals(mt)===!1&&(n.clearColor(xt,gt,zt,he),nt.copy(mt))},reset:function(){L=!1,Z=null,nt.set(-1,0,0,0)}}}function i(){let L=!1,mt=!1,Z=null,nt=null,xt=null;return{setReversed:function(gt){if(mt!==gt){const zt=t.get("EXT_clip_control");mt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const he=xt;xt=null,this.setClear(he)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?ht(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!L&&(n.depthMask(gt),Z=gt)},setFunc:function(gt){if(mt&&(gt=ZM[gt]),nt!==gt){switch(gt){case aa:n.depthFunc(n.NEVER);break;case la:n.depthFunc(n.ALWAYS);break;case ca:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case fa:n.depthFunc(n.GEQUAL);break;case ha:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=gt}},setLocked:function(gt){L=gt},setClear:function(gt){xt!==gt&&(mt&&(gt=1-gt),n.clearDepth(gt),xt=gt)},reset:function(){L=!1,Z=null,nt=null,xt=null,mt=!1}}}function s(){let L=!1,mt=null,Z=null,nt=null,xt=null,gt=null,zt=null,he=null,we=null;return{setTest:function(ne){L||(ne?ht(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(ne){mt!==ne&&!L&&(n.stencilMask(ne),mt=ne)},setFunc:function(ne,nn,yn){(Z!==ne||nt!==nn||xt!==yn)&&(n.stencilFunc(ne,nn,yn),Z=ne,nt=nn,xt=yn)},setOp:function(ne,nn,yn){(gt!==ne||zt!==nn||he!==yn)&&(n.stencilOp(ne,nn,yn),gt=ne,zt=nn,he=yn)},setLocked:function(ne){L=ne},setClear:function(ne){we!==ne&&(n.clearStencil(ne),we=ne)},reset:function(){L=!1,mt=null,Z=null,nt=null,xt=null,gt=null,zt=null,he=null,we=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],x=null,S=!1,_=null,h=null,w=null,A=null,y=null,N=null,C=null,P=new oe(0,0,0),O=0,T=!1,E=null,D=null,J=null,Y=null,Q=null;const ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,et=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=et>=2);let ft=null,vt={};const Tt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Zt=new pe().fromArray(Tt),tt=new pe().fromArray(Dt);function ut(L,mt,Z,nt){const xt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(L,gt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<Z;zt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(mt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return gt}const Et={};Et[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(cs),K(!1),q(ac),ht(n.CULL_FACE),g(Jn);function ht(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function wt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function It(L,mt){return f[L]!==mt?(n.bindFramebuffer(L,mt),f[L]=mt,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=mt),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ot(L,mt){let Z=p,nt=!1;if(L){Z=d.get(mt),Z===void 0&&(Z=[],d.set(mt,Z));const xt=L.textures;if(Z.length!==xt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,zt=xt.length;gt<zt;gt++)Z[gt]=n.COLOR_ATTACHMENT0+gt;Z.length=xt.length,nt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,nt=!0);nt&&n.drawBuffers(Z)}function ae(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const Yt={[vi]:n.FUNC_ADD,[Gm]:n.FUNC_SUBTRACT,[km]:n.FUNC_REVERSE_SUBTRACT};Yt[Wm]=n.MIN,Yt[Xm]=n.MAX;const b={[Ym]:n.ZERO,[qm]:n.ONE,[$m]:n.SRC_COLOR,[ra]:n.SRC_ALPHA,[t_]:n.SRC_ALPHA_SATURATE,[Jm]:n.DST_COLOR,[Km]:n.DST_ALPHA,[jm]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Zm]:n.ONE_MINUS_DST_ALPHA,[e_]:n.CONSTANT_COLOR,[n_]:n.ONE_MINUS_CONSTANT_COLOR,[i_]:n.CONSTANT_ALPHA,[s_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(L,mt,Z,nt,xt,gt,zt,he,we,ne){if(L===Jn){S===!0&&(wt(n.BLEND),S=!1);return}if(S===!1&&(ht(n.BLEND),S=!0),L!==Vm){if(L!==_||ne!==T){if((h!==vi||y!==vi)&&(n.blendEquation(n.FUNC_ADD),h=vi,y=vi),ne)switch(L){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,A=null,N=null,C=null,P.set(0,0,0),O=0,_=L,T=ne}return}xt=xt||mt,gt=gt||Z,zt=zt||nt,(mt!==h||xt!==y)&&(n.blendEquationSeparate(Yt[mt],Yt[xt]),h=mt,y=xt),(Z!==w||nt!==A||gt!==N||zt!==C)&&(n.blendFuncSeparate(b[Z],b[nt],b[gt],b[zt]),w=Z,A=nt,N=gt,C=zt),(he.equals(P)===!1||we!==O)&&(n.blendColor(he.r,he.g,he.b,we),P.copy(he),O=we),_=L,T=!1}function X(L,mt){L.side===Un?wt(n.CULL_FACE):ht(n.CULL_FACE);let Z=L.side===Ge;mt&&(Z=!Z),K(Z),L.blending===ss&&L.transparent===!1?g(Jn):g(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const nt=L.stencilWrite;a.setTest(nt),nt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function q(L){L!==Bm?(ht(n.CULL_FACE),L!==D&&(L===ac?n.cullFace(n.BACK):L===zm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),D=L}function V(L){L!==J&&(j&&n.lineWidth(L),J=L)}function st(L,mt,Z){L?(ht(n.POLYGON_OFFSET_FILL),(Y!==mt||Q!==Z)&&(n.polygonOffset(mt,Z),Y=mt,Q=Z)):wt(n.POLYGON_OFFSET_FILL)}function $(L){L?ht(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function v(L){L===void 0&&(L=n.TEXTURE0+ot-1),ft!==L&&(n.activeTexture(L),ft=L)}function m(L,mt,Z){Z===void 0&&(ft===null?Z=n.TEXTURE0+ot-1:Z=ft);let nt=vt[Z];nt===void 0&&(nt={type:void 0,texture:void 0},vt[Z]=nt),(nt.type!==L||nt.texture!==mt)&&(ft!==Z&&(n.activeTexture(Z),ft=Z),n.bindTexture(L,mt||Et[L]),nt.type=L,nt.texture=mt)}function R(){const L=vt[ft];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Zt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function Mt(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function Lt(L,mt){let Z=c.get(mt);Z===void 0&&(Z=new WeakMap,c.set(mt,Z));let nt=Z.get(L);nt===void 0&&(nt=n.getUniformBlockIndex(mt,L.name),Z.set(L,nt))}function Ct(L,mt){const nt=c.get(mt).get(L);l.get(mt)!==nt&&(n.uniformBlockBinding(mt,nt,L.__bindingPointIndex),l.set(mt,nt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,vt={},f={},d=new WeakMap,p=[],x=null,S=!1,_=null,h=null,w=null,A=null,y=null,N=null,C=null,P=new oe(0,0,0),O=0,T=!1,E=null,D=null,J=null,Y=null,Q=null,Zt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:wt,bindFramebuffer:It,drawBuffers:Ot,useProgram:ae,setBlending:g,setMaterial:X,setFlipSided:K,setCullFace:q,setLineWidth:V,setPolygonOffset:st,setScissorTest:$,activeTexture:v,bindTexture:m,unbindTexture:R,compressedTexImage2D:I,compressedTexImage3D:z,texImage2D:dt,texImage3D:yt,updateUBOMapping:Lt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:it,texSubImage2D:B,texSubImage3D:lt,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:Rt,viewport:Mt,reset:ee}}function QM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,m){return p?new OffscreenCanvas(v,m):Xs("canvas")}function S(v,m,R){let I=1;const z=$(v);if((z.width>R||z.height>R)&&(I=R/Math.max(z.width,z.height)),I<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const B=Math.floor(I*z.width),lt=Math.floor(I*z.height);f===void 0&&(f=x(B,lt));const rt=m?x(B,lt):f;return rt.width=B,rt.height=lt,rt.getContext("2d").drawImage(v,0,0,B,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+B+"x"+lt+")."),rt}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),v;return v}function _(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function w(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(v,m,R,I,z=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let B=m;if(m===n.RED&&(R===n.FLOAT&&(B=n.R32F),R===n.HALF_FLOAT&&(B=n.R16F),R===n.UNSIGNED_BYTE&&(B=n.R8)),m===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(B=n.R8UI),R===n.UNSIGNED_SHORT&&(B=n.R16UI),R===n.UNSIGNED_INT&&(B=n.R32UI),R===n.BYTE&&(B=n.R8I),R===n.SHORT&&(B=n.R16I),R===n.INT&&(B=n.R32I)),m===n.RG&&(R===n.FLOAT&&(B=n.RG32F),R===n.HALF_FLOAT&&(B=n.RG16F),R===n.UNSIGNED_BYTE&&(B=n.RG8)),m===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(B=n.RG8UI),R===n.UNSIGNED_SHORT&&(B=n.RG16UI),R===n.UNSIGNED_INT&&(B=n.RG32UI),R===n.BYTE&&(B=n.RG8I),R===n.SHORT&&(B=n.RG16I),R===n.INT&&(B=n.RG32I)),m===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(B=n.RGB8UI),R===n.UNSIGNED_SHORT&&(B=n.RGB16UI),R===n.UNSIGNED_INT&&(B=n.RGB32UI),R===n.BYTE&&(B=n.RGB8I),R===n.SHORT&&(B=n.RGB16I),R===n.INT&&(B=n.RGB32I)),m===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),R===n.UNSIGNED_INT&&(B=n.RGBA32UI),R===n.BYTE&&(B=n.RGBA8I),R===n.SHORT&&(B=n.RGBA16I),R===n.INT&&(B=n.RGBA32I)),m===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),m===n.RGBA){const lt=z?Gr:jt.getTransfer(I);R===n.FLOAT&&(B=n.RGBA32F),R===n.HALF_FLOAT&&(B=n.RGBA16F),R===n.UNSIGNED_BYTE&&(B=lt===ie?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function y(v,m){let R;return v?m===null||m===bi||m===hs?R=n.DEPTH24_STENCIL8:m===In?R=n.DEPTH32F_STENCIL8:m===ks&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===bi||m===hs?R=n.DEPTH_COMPONENT24:m===In?R=n.DEPTH_COMPONENT32F:m===ks&&(R=n.DEPTH_COMPONENT16),R}function N(v,m){return _(v)===!0||v.isFramebufferTexture&&v.minFilter!==hn&&v.minFilter!==xn?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function C(v){const m=v.target;m.removeEventListener("dispose",C),O(m),m.isVideoTexture&&u.delete(m)}function P(v){const m=v.target;m.removeEventListener("dispose",P),E(m)}function O(v){const m=i.get(v);if(m.__webglInit===void 0)return;const R=v.source,I=d.get(R);if(I){const z=I[m.__cacheKey];z.usedTimes--,z.usedTimes===0&&T(v),Object.keys(I).length===0&&d.delete(R)}i.remove(v)}function T(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const R=v.source,I=d.get(R);delete I[m.__cacheKey],o.memory.textures--}function E(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(m.__webglFramebuffer[I]))for(let z=0;z<m.__webglFramebuffer[I].length;z++)n.deleteFramebuffer(m.__webglFramebuffer[I][z]);else n.deleteFramebuffer(m.__webglFramebuffer[I]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[I])}else{if(Array.isArray(m.__webglFramebuffer))for(let I=0;I<m.__webglFramebuffer.length;I++)n.deleteFramebuffer(m.__webglFramebuffer[I]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let I=0;I<m.__webglColorRenderbuffer.length;I++)m.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[I]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const R=v.textures;for(let I=0,z=R.length;I<z;I++){const B=i.get(R[I]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),i.remove(R[I])}i.remove(v)}let D=0;function J(){D=0}function Y(){const v=D;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),D+=1,v}function Q(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function ot(v,m){const R=i.get(v);if(v.isVideoTexture&&V(v),v.isRenderTargetTexture===!1&&v.version>0&&R.__version!==v.version){const I=v.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(R,v,m);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+m)}function j(v,m){const R=i.get(v);if(v.version>0&&R.__version!==v.version){tt(R,v,m);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+m)}function et(v,m){const R=i.get(v);if(v.version>0&&R.__version!==v.version){tt(R,v,m);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+m)}function H(v,m){const R=i.get(v);if(v.version>0&&R.__version!==v.version){ut(R,v,m);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+m)}const ft={[_a]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[ga]:n.MIRRORED_REPEAT},vt={[hn]:n.NEAREST,[p_]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},Tt={[x_]:n.NEVER,[b_]:n.ALWAYS,[M_]:n.LESS,[wf]:n.LEQUAL,[S_]:n.EQUAL,[T_]:n.GEQUAL,[E_]:n.GREATER,[y_]:n.NOTEQUAL};function Dt(v,m){if(m.type===In&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===xn||m.magFilter===xo||m.magFilter===ir||m.magFilter===Si||m.minFilter===xn||m.minFilter===xo||m.minFilter===ir||m.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ft[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ft[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ft[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,vt[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,vt[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Tt[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===hn||m.minFilter!==ir&&m.minFilter!==Si||m.type===In&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Zt(v,m){let R=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",C));const I=m.source;let z=d.get(I);z===void 0&&(z={},d.set(I,z));const B=Q(m);if(B!==v.__cacheKey){z[B]===void 0&&(z[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),z[B].usedTimes++;const lt=z[v.__cacheKey];lt!==void 0&&(z[v.__cacheKey].usedTimes--,lt.usedTimes===0&&T(m)),v.__cacheKey=B,v.__webglTexture=z[B].texture}return R}function tt(v,m,R){let I=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(I=n.TEXTURE_3D);const z=Zt(v,m),B=m.source;e.bindTexture(I,v.__webglTexture,n.TEXTURE0+R);const lt=i.get(B);if(B.version!==lt.__version||z===!0){e.activeTexture(n.TEXTURE0+R);const rt=jt.getPrimaries(jt.workingColorSpace),at=m.colorSpace===Zn?null:jt.getPrimaries(m.colorSpace),Ut=m.colorSpace===Zn||rt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let it=S(m.image,!1,s.maxTextureSize);it=st(m,it);const dt=r.convert(m.format,m.colorSpace),yt=r.convert(m.type);let Rt=A(m.internalFormat,dt,yt,m.colorSpace,m.isVideoTexture);Dt(I,m);let Mt;const Lt=m.mipmaps,Ct=m.isVideoTexture!==!0,ee=lt.__version===void 0||z===!0,L=B.dataReady,mt=N(m,it);if(m.isDepthTexture)Rt=y(m.format===ds,m.type),ee&&(Ct?e.texStorage2D(n.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,dt,yt,null));else if(m.isDataTexture)if(Lt.length>0){Ct&&ee&&e.texStorage2D(n.TEXTURE_2D,mt,Rt,Lt[0].width,Lt[0].height);for(let Z=0,nt=Lt.length;Z<nt;Z++)Mt=Lt[Z],Ct?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,dt,yt,Mt.data):e.texImage2D(n.TEXTURE_2D,Z,Rt,Mt.width,Mt.height,0,dt,yt,Mt.data);m.generateMipmaps=!1}else Ct?(ee&&e.texStorage2D(n.TEXTURE_2D,mt,Rt,it.width,it.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,dt,yt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,dt,yt,it.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ct&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Rt,Lt[0].width,Lt[0].height,it.depth);for(let Z=0,nt=Lt.length;Z<nt;Z++)if(Mt=Lt[Z],m.format!==cn)if(dt!==null)if(Ct){if(L)if(m.layerUpdates.size>0){const xt=Ic(Mt.width,Mt.height,m.format,m.type);for(const gt of m.layerUpdates){const zt=Mt.data.subarray(gt*xt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*xt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,gt,Mt.width,Mt.height,1,dt,zt)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,it.depth,dt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Rt,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,it.depth,dt,yt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Rt,Mt.width,Mt.height,it.depth,0,dt,yt,Mt.data)}else{Ct&&ee&&e.texStorage2D(n.TEXTURE_2D,mt,Rt,Lt[0].width,Lt[0].height);for(let Z=0,nt=Lt.length;Z<nt;Z++)Mt=Lt[Z],m.format!==cn?dt!==null?Ct?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,dt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Rt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,dt,yt,Mt.data):e.texImage2D(n.TEXTURE_2D,Z,Rt,Mt.width,Mt.height,0,dt,yt,Mt.data)}else if(m.isDataArrayTexture)if(Ct){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Rt,it.width,it.height,it.depth),L)if(m.layerUpdates.size>0){const Z=Ic(it.width,it.height,m.format,m.type);for(const nt of m.layerUpdates){const xt=it.data.subarray(nt*Z/it.data.BYTES_PER_ELEMENT,(nt+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,it.width,it.height,1,dt,yt,xt)}m.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,yt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,dt,yt,it.data);else if(m.isData3DTexture)Ct?(ee&&e.texStorage3D(n.TEXTURE_3D,mt,Rt,it.width,it.height,it.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,yt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,dt,yt,it.data);else if(m.isFramebufferTexture){if(ee)if(Ct)e.texStorage2D(n.TEXTURE_2D,mt,Rt,it.width,it.height);else{let Z=it.width,nt=it.height;for(let xt=0;xt<mt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Rt,Z,nt,0,dt,yt,null),Z>>=1,nt>>=1}}else if(Lt.length>0){if(Ct&&ee){const Z=$(Lt[0]);e.texStorage2D(n.TEXTURE_2D,mt,Rt,Z.width,Z.height)}for(let Z=0,nt=Lt.length;Z<nt;Z++)Mt=Lt[Z],Ct?L&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,dt,yt,Mt):e.texImage2D(n.TEXTURE_2D,Z,Rt,dt,yt,Mt);m.generateMipmaps=!1}else if(Ct){if(ee){const Z=$(it);e.texStorage2D(n.TEXTURE_2D,mt,Rt,Z.width,Z.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,yt,it)}else e.texImage2D(n.TEXTURE_2D,0,Rt,dt,yt,it);_(m)&&h(I),lt.__version=B.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ut(v,m,R){if(m.image.length!==6)return;const I=Zt(v,m),z=m.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+R);const B=i.get(z);if(z.version!==B.__version||I===!0){e.activeTexture(n.TEXTURE0+R);const lt=jt.getPrimaries(jt.workingColorSpace),rt=m.colorSpace===Zn?null:jt.getPrimaries(m.colorSpace),at=m.colorSpace===Zn||lt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Ut=m.isCompressedTexture||m.image[0].isCompressedTexture,it=m.image[0]&&m.image[0].isDataTexture,dt=[];for(let nt=0;nt<6;nt++)!Ut&&!it?dt[nt]=S(m.image[nt],!0,s.maxCubemapSize):dt[nt]=it?m.image[nt].image:m.image[nt],dt[nt]=st(m,dt[nt]);const yt=dt[0],Rt=r.convert(m.format,m.colorSpace),Mt=r.convert(m.type),Lt=A(m.internalFormat,Rt,Mt,m.colorSpace),Ct=m.isVideoTexture!==!0,ee=B.__version===void 0||I===!0,L=z.dataReady;let mt=N(m,yt);Dt(n.TEXTURE_CUBE_MAP,m);let Z;if(Ut){Ct&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Lt,yt.width,yt.height);for(let nt=0;nt<6;nt++){Z=dt[nt].mipmaps;for(let xt=0;xt<Z.length;xt++){const gt=Z[xt];m.format!==cn?Rt!==null?Ct?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,gt.width,gt.height,Rt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,gt.width,gt.height,Rt,Mt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Lt,gt.width,gt.height,0,Rt,Mt,gt.data)}}}else{if(Z=m.mipmaps,Ct&&ee){Z.length>0&&mt++;const nt=$(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Lt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(it){Ct?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt[nt].width,dt[nt].height,Rt,Mt,dt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Lt,dt[nt].width,dt[nt].height,0,Rt,Mt,dt[nt].data);for(let xt=0;xt<Z.length;xt++){const zt=Z[xt].image[nt].image;Ct?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,zt.width,zt.height,Rt,Mt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Lt,zt.width,zt.height,0,Rt,Mt,zt.data)}}else{Ct?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,Mt,dt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Lt,Rt,Mt,dt[nt]);for(let xt=0;xt<Z.length;xt++){const gt=Z[xt];Ct?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Rt,Mt,gt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Lt,Rt,Mt,gt.image[nt])}}}_(m)&&h(n.TEXTURE_CUBE_MAP),B.__version=z.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function Et(v,m,R,I,z,B){const lt=r.convert(R.format,R.colorSpace),rt=r.convert(R.type),at=A(R.internalFormat,lt,rt,R.colorSpace),Ut=i.get(m),it=i.get(R);if(it.__renderTarget=m,!Ut.__hasExternalTextures){const dt=Math.max(1,m.width>>B),yt=Math.max(1,m.height>>B);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?e.texImage3D(z,B,at,dt,yt,m.depth,0,lt,rt,null):e.texImage2D(z,B,at,dt,yt,0,lt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),q(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,z,it.__webglTexture,0,K(m)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,z,it.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(v,m,R){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const I=m.depthTexture,z=I&&I.isDepthTexture?I.type:null,B=y(m.stencilBuffer,z),lt=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=K(m);q(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,B,m.width,m.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,B,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,B,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,v)}else{const I=m.textures;for(let z=0;z<I.length;z++){const B=I[z],lt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),at=A(B.internalFormat,lt,rt,B.colorSpace),Ut=K(m);R&&q(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,at,m.width,m.height):q(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,at,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,at,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(v,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=i.get(m.depthTexture);I.__renderTarget=m,(!I.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ot(m.depthTexture,0);const z=I.__webglTexture,B=K(m);if(m.depthTexture.format===rs)q(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(m.depthTexture.format===ds)q(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function It(v){const m=i.get(v),R=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const I=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),I){const z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,I.removeEventListener("dispose",z)};I.addEventListener("dispose",z),m.__depthDisposeCallback=z}m.__boundDepthTexture=I}if(v.depthTexture&&!m.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");wt(m.__webglFramebuffer,v)}else if(R){m.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[I]),m.__webglDepthbuffer[I]===void 0)m.__webglDepthbuffer[I]=n.createRenderbuffer(),ht(m.__webglDepthbuffer[I],v,!1);else{const z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=m.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),ht(m.__webglDepthbuffer,v,!1);else{const I=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(v,m,R){const I=i.get(v);m!==void 0&&Et(I.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&It(v)}function ae(v){const m=v.texture,R=i.get(v),I=i.get(m);v.addEventListener("dispose",P);const z=v.textures,B=v.isWebGLCubeRenderTarget===!0,lt=z.length>1;if(lt||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=m.version,o.memory.textures++),B){R.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[rt]=[];for(let at=0;at<m.mipmaps.length;at++)R.__webglFramebuffer[rt][at]=n.createFramebuffer()}else R.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let rt=0;rt<m.mipmaps.length;rt++)R.__webglFramebuffer[rt]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(lt)for(let rt=0,at=z.length;rt<at;rt++){const Ut=i.get(z[rt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&q(v)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let rt=0;rt<z.length;rt++){const at=z[rt];R.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[rt]);const Ut=r.convert(at.format,at.colorSpace),it=r.convert(at.type),dt=A(at.internalFormat,Ut,it,at.colorSpace,v.isXRRenderTarget===!0),yt=K(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,dt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,R.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(R.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,m);for(let rt=0;rt<6;rt++)if(m.mipmaps&&m.mipmaps.length>0)for(let at=0;at<m.mipmaps.length;at++)Et(R.__webglFramebuffer[rt][at],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else Et(R.__webglFramebuffer[rt],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);_(m)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let rt=0,at=z.length;rt<at;rt++){const Ut=z[rt],it=i.get(Ut);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Dt(n.TEXTURE_2D,Ut),Et(R.__webglFramebuffer,v,Ut,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),_(Ut)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(rt=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,I.__webglTexture),Dt(rt,m),m.mipmaps&&m.mipmaps.length>0)for(let at=0;at<m.mipmaps.length;at++)Et(R.__webglFramebuffer[at],v,m,n.COLOR_ATTACHMENT0,rt,at);else Et(R.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,rt,0);_(m)&&h(rt),e.unbindTexture()}v.depthBuffer&&It(v)}function Yt(v){const m=v.textures;for(let R=0,I=m.length;R<I;R++){const z=m[R];if(_(z)){const B=w(v),lt=i.get(z).__webglTexture;e.bindTexture(B,lt),h(B),e.unbindTexture()}}}const b=[],g=[];function X(v){if(v.samples>0){if(q(v)===!1){const m=v.textures,R=v.width,I=v.height;let z=n.COLOR_BUFFER_BIT;const B=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(v),rt=m.length>1;if(rt)for(let at=0;at<m.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let at=0;at<m.length;at++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(z|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const Ut=i.get(m[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,R,I,0,0,R,I,z,n.NEAREST),l===!0&&(b.length=0,g.length=0,b.push(n.COLOR_ATTACHMENT0+at),v.depthBuffer&&v.resolveDepthBuffer===!1&&(b.push(B),g.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let at=0;at<m.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const Ut=i.get(m[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function K(v){return Math.min(s.maxSamples,v.samples)}function q(v){const m=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function V(v){const m=o.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function st(v,m){const R=v.colorSpace,I=v.format,z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||R!==ps&&R!==Zn&&(jt.getTransfer(R)===ie?(I!==cn||z!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),m}function $(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=ot,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=q}function tS(n,t){function e(i,s=Zn){let r;const o=jt.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.BYTE;if(i===vf)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===$s)return n.HALF_FLOAT;if(i===Mf)return n.ALPHA;if(i===Sf)return n.RGB;if(i===cn)return n.RGBA;if(i===Ef)return n.LUMINANCE;if(i===yf)return n.LUMINANCE_ALPHA;if(i===rs)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===Tf)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===bf)return n.RG;if(i===gl)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Pr||i===Dr||i===Lr||i===Ur)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===va||i===xa||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===ya||i===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===ya)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La||i===Ua||i===Ia||i===Na||i===Fa||i===Oa||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===za||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ir)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Af||i===Va||i===Ga||i===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const eS={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const _=e.getJointPose(S,i),h=this._getHandJoint(c,S);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Sr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rS extends Ci{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const S=new sS,_=e.getContextAttributes();let h=null,w=null;const A=[],y=[],N=new kt;let C=null;const P=new en;P.viewport=new pe;const O=new en;O.viewport=new pe;const T=[P,O],E=new bg;let D=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=A[tt];return ut===void 0&&(ut=new Yo,A[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=A[tt];return ut===void 0&&(ut=new Yo,A[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=A[tt];return ut===void 0&&(ut=new Yo,A[tt]=ut),ut.getHandSpace()};function Y(tt){const ut=y.indexOf(tt.inputSource);if(ut===-1)return;const Et=A[ut];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ot);for(let tt=0;tt<A.length;tt++){const ut=y[tt];ut!==null&&(y[tt]=null,A[tt].disconnect(ut))}D=null,J=null,S.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,w=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ot),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ai(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ut=null,Et=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=_.stencil?ds:rs,Et=_.stencil?hs:bi);const wt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ai(d.textureWidth,d.textureHeight,{format:cn,type:Bn,depthTexture:new Hf(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(tt){for(let ut=0;ut<tt.removed.length;ut++){const Et=tt.removed[ut],ht=y.indexOf(Et);ht>=0&&(y[ht]=null,A[ht].disconnect(Et))}for(let ut=0;ut<tt.added.length;ut++){const Et=tt.added[ut];let ht=y.indexOf(Et);if(ht===-1){for(let It=0;It<A.length;It++)if(It>=y.length){y.push(Et),ht=It;break}else if(y[It]===null){y[It]=Et,ht=It;break}if(ht===-1)break}const wt=A[ht];wt&&wt.connect(Et)}}const j=new G,et=new G;function H(tt,ut,Et){j.setFromMatrixPosition(ut.matrixWorld),et.setFromMatrixPosition(Et.matrixWorld);const ht=j.distanceTo(et),wt=ut.projectionMatrix.elements,It=Et.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),ae=wt[14]/(wt[10]+1),Yt=(wt[9]+1)/wt[5],b=(wt[9]-1)/wt[5],g=(wt[8]-1)/wt[0],X=(It[8]+1)/It[0],K=Ot*g,q=Ot*X,V=ht/(-g+X),st=V*-g;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(st),tt.translateZ(V),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),wt[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const $=Ot+V,v=ae+V,m=K-st,R=q+(ht-st),I=Yt*ae/v*$,z=b*ae/v*$;tt.projectionMatrix.makePerspective(m,R,I,z,$,v),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ut=tt.near,Et=tt.far;S.texture!==null&&(S.depthNear>0&&(ut=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),E.near=O.near=P.near=ut,E.far=O.far=P.far=Et,(D!==E.near||J!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,J=E.far),P.layers.mask=tt.layers.mask|2,O.layers.mask=tt.layers.mask|4,E.layers.mask=P.layers.mask|O.layers.mask;const ht=tt.parent,wt=E.cameras;ft(E,ht);for(let It=0;It<wt.length;It++)ft(wt[It],ht);wt.length===2?H(E,P,O):E.projectionMatrix.copy(P.projectionMatrix),vt(tt,E,ht)};function vt(tt,ut,Et){Et===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ws*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Tt=null;function Dt(tt,ut){if(u=ut.getViewerPose(c||o),x=ut,u!==null){const Et=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ht=!1;Et.length!==E.cameras.length&&(E.cameras.length=0,ht=!0);for(let It=0;It<Et.length;It++){const Ot=Et[It];let ae=null;if(p!==null)ae=p.getViewport(Ot);else{const b=f.getViewSubImage(d,Ot);ae=b.viewport,It===0&&(t.setRenderTargetTextures(w,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(w))}let Yt=T[It];Yt===void 0&&(Yt=new en,Yt.layers.enable(It),Yt.viewport=new pe,T[It]=Yt),Yt.matrix.fromArray(Ot.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ot.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ae.x,ae.y,ae.width,ae.height),It===0&&(E.matrix.copy(Yt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ht===!0&&E.cameras.push(Yt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const It=f.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&S.init(t,It,s.renderState)}}for(let Et=0;Et<A.length;Et++){const ht=y[Et],wt=A[Et];ht!==null&&wt!==void 0&&wt.update(ht,ut,c||o)}Tt&&Tt(tt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),x=null}const Zt=new Vf;Zt.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){Tt=tt},this.dispose=function(){}}}const mi=new zn,oS=new ge;function aS(n,t){function e(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,Of(n)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,w,A,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(_,h):h.isMeshToonMaterial?(r(_,h),f(_,h)):h.isMeshPhongMaterial?(r(_,h),u(_,h)):h.isMeshStandardMaterial?(r(_,h),d(_,h),h.isMeshPhysicalMaterial&&p(_,h,y)):h.isMeshMatcapMaterial?(r(_,h),x(_,h)):h.isMeshDepthMaterial?r(_,h):h.isMeshDistanceMaterial?(r(_,h),S(_,h)):h.isMeshNormalMaterial?r(_,h):h.isLineBasicMaterial?(o(_,h),h.isLineDashedMaterial&&a(_,h)):h.isPointsMaterial?l(_,h,w,A):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,e(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,e(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===Ge&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,e(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===Ge&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,e(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,e(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);const w=t.get(h),A=w.envMap,y=w.envMapRotation;A&&(_.envMap.value=A,mi.copy(y),mi.x*=-1,mi.y*=-1,mi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),_.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(mi)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,_.aoMapTransform))}function o(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,e(h.map,_.mapTransform))}function a(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,w,A){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*w,_.scale.value=A*.5,h.map&&(_.map.value=h.map,e(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,e(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function u(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function f(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function d(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function p(_,h,w){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ge&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,h){h.matcap&&(_.matcap.value=h.matcap)}function S(_,h){const w=t.get(h).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const y=A.program;i.uniformBlockBinding(w,y)}function c(w,A){let y=s[w.id];y===void 0&&(x(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",_));const N=A.program;i.updateUBOMapping(w,N);const C=t.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function u(w){const A=f();w.__bindingPointIndex=A;const y=n.createBuffer(),N=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,N,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const A=s[w.id],y=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,P=y.length;C<P;C++){const O=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,E=O.length;T<E;T++){const D=O[T];if(p(D,C,T,N)===!0){const J=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ot=0;ot<Y.length;ot++){const j=Y[ot],et=S(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,J+Q,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Q),Q+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,A,y,N){const C=w.value,P=A+"_"+y;if(N[P]===void 0)return typeof C=="number"||typeof C=="boolean"?N[P]=C:N[P]=C.clone(),!0;{const O=N[P];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return N[P]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function x(w){const A=w.uniforms;let y=0;const N=16;for(let P=0,O=A.length;P<O;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let E=0,D=T.length;E<D;E++){const J=T[E],Y=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,ot=Y.length;Q<ot;Q++){const j=Y[Q],et=S(j),H=y%N,ft=H%et.boundary,vt=H+ft;y+=ft,vt!==0&&N-vt<et.storage&&(y+=N-vt),J.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=et.storage}}}const C=y%N;return C>0&&(y+=N-C),w.__size=y,w.__cache={},this}function S(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function _(w){const A=w.target;A.removeEventListener("dispose",_);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class cS{constructor(t={}){const{canvas:e=k_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),S=new Int32Array(4);let _=null,h=null;const w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Qn,this.toneMappingExposure=1;const y=this;let N=!1,C=0,P=0,O=null,T=-1,E=null;const D=new pe,J=new pe;let Y=null;const Q=new oe(0);let ot=0,j=e.width,et=e.height,H=1,ft=null,vt=null;const Tt=new pe(0,0,j,et),Dt=new pe(0,0,j,et);let Zt=!1;const tt=new zf;let ut=!1,Et=!1;const ht=new ge,wt=new ge,It=new G,Ot=new pe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function b(){return O===null?H:1}let g=i;function X(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),g===null){const U="webgl2";if(g=X(U,M),g===null)throw X(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,q,V,st,$,v,m,R,I,z,B,lt,rt,at,Ut,it,dt,yt,Rt,Mt,Lt,Ct,ee,L;function mt(){K=new vx(g),K.init(),Ct=new tS(g,K),q=new hx(g,K,t,Ct),V=new JM(g,K),q.reverseDepthBuffer&&d&&V.buffers.depth.setReversed(!0),st=new Sx(g),$=new zM,v=new QM(g,K,V,$,q,Ct,st),m=new px(y),R=new gx(y),I=new Rg(g),ee=new ux(g,I),z=new xx(g,I,st,ee),B=new yx(g,z,I,st),Rt=new Ex(g,q,v),it=new dx($),lt=new BM(y,m,R,K,q,ee,it),rt=new aS(y,$),at=new VM,Ut=new qM(K),yt=new cx(y,m,R,V,B,p,l),dt=new KM(y,B,q),L=new lS(g,st,q,V),Mt=new fx(g,K,st),Lt=new Mx(g,K,st),st.programs=lt.programs,y.capabilities=q,y.extensions=K,y.properties=$,y.renderLists=at,y.shadowMap=dt,y.state=V,y.info=st}mt();const Z=new rS(y,g);this.xr=Z,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(j,et,!1))},this.getSize=function(M){return M.set(j,et)},this.setSize=function(M,U,k=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,et=U,e.width=Math.floor(M*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*H,et*H).floor()},this.setDrawingBufferSize=function(M,U,k){j=M,et=U,H=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,U,k,W){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,k,W),V.viewport(D.copy(Tt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,U,k,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,U,k,W),V.scissor(J.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){V.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(M=!0,U=!0,k=!0){let W=0;if(M){let F=!1;if(O!==null){const ct=O.texture.format;F=ct===vl||ct===gl||ct===_l}if(F){const ct=O.texture.type,_t=ct===Bn||ct===bi||ct===ks||ct===hs||ct===pl||ct===ml,St=yt.getClearColor(),bt=yt.getClearAlpha(),Nt=St.r,Ft=St.g,At=St.b;_t?(x[0]=Nt,x[1]=Ft,x[2]=At,x[3]=bt,g.clearBufferuiv(g.COLOR,0,x)):(S[0]=Nt,S[1]=Ft,S[2]=At,S[3]=bt,g.clearBufferiv(g.COLOR,0,S))}else W|=g.COLOR_BUFFER_BIT}U&&(W|=g.DEPTH_BUFFER_BIT),k&&(W|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),at.dispose(),Ut.dispose(),$.dispose(),m.dispose(),R.dispose(),B.dispose(),ee.dispose(),L.dispose(),lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Al),Z.removeEventListener("sessionend",wl),oi.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=st.autoReset,U=dt.enabled,k=dt.autoUpdate,W=dt.needsUpdate,F=dt.type;mt(),st.autoReset=M,dt.enabled=U,dt.autoUpdate=k,dt.needsUpdate=W,dt.type=F}function gt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const U=M.target;U.removeEventListener("dispose",zt),he(U)}function he(M){we(M),$.remove(M)}function we(M){const U=$.get(M).programs;U!==void 0&&(U.forEach(function(k){lt.releaseProgram(k)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,W,F,ct){U===null&&(U=ae);const _t=F.isMesh&&F.matrixWorld.determinant()<0,St=$f(M,U,k,W,F);V.setMaterial(W,_t);let bt=k.index,Nt=1;if(W.wireframe===!0){if(bt=z.getWireframeAttribute(k),bt===void 0)return;Nt=2}const Ft=k.drawRange,At=k.attributes.position;let qt=Ft.start*Nt,Jt=(Ft.start+Ft.count)*Nt;ct!==null&&(qt=Math.max(qt,ct.start*Nt),Jt=Math.min(Jt,(ct.start+ct.count)*Nt)),bt!==null?(qt=Math.max(qt,0),Jt=Math.min(Jt,bt.count)):At!=null&&(qt=Math.max(qt,0),Jt=Math.min(Jt,At.count));const me=Jt-qt;if(me<0||me===1/0)return;ee.setup(F,W,St,k,bt);let de,$t=Mt;if(bt!==null&&(de=I.get(bt),$t=Lt,$t.setIndex(de)),F.isMesh)W.wireframe===!0?(V.setLineWidth(W.wireframeLinewidth*b()),$t.setMode(g.LINES)):$t.setMode(g.TRIANGLES);else if(F.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),V.setLineWidth(Pt*b()),F.isLineSegments?$t.setMode(g.LINES):F.isLineLoop?$t.setMode(g.LINE_LOOP):$t.setMode(g.LINE_STRIP)}else F.isPoints?$t.setMode(g.POINTS):F.isSprite&&$t.setMode(g.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))$t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,be=F._multiDrawCounts,Qt=F._multiDrawCount,sn=bt?I.get(bt).bytesPerElement:1,Di=$.get(W).currentProgram.getUniforms();for(let We=0;We<Qt;We++)Di.setValue(g,"_gl_DrawID",We),$t.render(Pt[We]/sn,be[We])}else if(F.isInstancedMesh)$t.renderInstances(qt,me,F.count);else if(k.isInstancedBufferGeometry){const Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,Pt);$t.renderInstances(qt,me,be)}else $t.render(qt,me)};function ne(M,U,k){M.transparent===!0&&M.side===Un&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,Qs(M,U,k),M.side=ei,M.needsUpdate=!0,Qs(M,U,k),M.side=Un):Qs(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),h=Ut.get(k),h.init(U),A.push(h),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const W=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){const St=ct[_t];ne(St,k,F),W.add(St)}else ne(ct,k,F),W.add(ct)}),A.pop(),h=null,W},this.compileAsync=function(M,U,k=null){const W=this.compile(M,U,k);return new Promise(F=>{function ct(){if(W.forEach(function(_t){$.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){F(M);return}setTimeout(ct,10)}K.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let nn=null;function yn(M){nn&&nn(M)}function Al(){oi.stop()}function wl(){oi.start()}const oi=new Vf;oi.setAnimationLoop(yn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){nn=M,Z.setAnimationLoop(M),M===null?oi.stop():oi.start()},Z.addEventListener("sessionstart",Al),Z.addEventListener("sessionend",wl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,O),h=Ut.get(M,A.length),h.init(U),A.push(h),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(wt),Et=this.localClippingEnabled,ut=it.init(this.clippingPlanes,Et),_=at.get(M,w.length),_.init(),w.push(_),Z.enabled===!0&&Z.isPresenting===!0){const ct=y.xr.getDepthSensingMesh();ct!==null&&so(ct,U,-1/0,y.sortObjects)}so(M,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ft,vt),Yt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Yt&&yt.addToRenderList(_,M),this.info.render.frame++,ut===!0&&it.beginShadows();const k=h.state.shadowsArray;dt.render(k,M,U),ut===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(h.setupLights(),U.isArrayCamera){const ct=U.cameras;if(F.length>0)for(let _t=0,St=ct.length;_t<St;_t++){const bt=ct[_t];Cl(W,F,M,bt)}Yt&&yt.render(M);for(let _t=0,St=ct.length;_t<St;_t++){const bt=ct[_t];Rl(_,M,bt,bt.viewport)}}else F.length>0&&Cl(W,F,M,U),Yt&&yt.render(M),Rl(_,M,U);O!==null&&(v.updateMultisampleRenderTarget(O),v.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(y,M,U),ee.resetDefaultState(),T=-1,E=null,A.pop(),A.length>0?(h=A[A.length-1],ut===!0&&it.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function so(M,U,k,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){W&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);const _t=B.update(M),St=M.material;St.visible&&_.push(M,_t,St,k,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const _t=B.update(M),St=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(St)){const bt=_t.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const At=bt[Nt],qt=St[At.materialIndex];qt&&qt.visible&&_.push(M,_t,qt,k,Ot.z,At)}}else St.visible&&_.push(M,_t,St,k,Ot.z,null)}}const ct=M.children;for(let _t=0,St=ct.length;_t<St;_t++)so(ct[_t],U,k,W)}function Rl(M,U,k,W){const F=M.opaque,ct=M.transmissive,_t=M.transparent;h.setupLightsView(k),ut===!0&&it.setGlobalState(y.clippingPlanes,k),W&&V.viewport(D.copy(W)),F.length>0&&Js(F,U,k),ct.length>0&&Js(ct,U,k),_t.length>0&&Js(_t,U,k),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Cl(M,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Ai(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?$s:Bn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const ct=h.state.transmissionRenderTarget[W.id],_t=W.viewport||D;ct.setSize(_t.z,_t.w);const St=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(Q),ot=y.getClearAlpha(),ot<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&yt.render(k);const bt=y.toneMapping;y.toneMapping=Qn;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),ut===!0&&it.setGlobalState(y.clippingPlanes,W),Js(M,k,W),v.updateMultisampleRenderTarget(ct),v.updateRenderTargetMipmap(ct),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let At=0,qt=U.length;At<qt;At++){const Jt=U[At],me=Jt.object,de=Jt.geometry,$t=Jt.material,Pt=Jt.group;if($t.side===Un&&me.layers.test(W.layers)){const be=$t.side;$t.side=Ge,$t.needsUpdate=!0,Pl(me,k,W,de,$t,Pt),$t.side=be,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(v.updateMultisampleRenderTarget(ct),v.updateRenderTargetMipmap(ct))}y.setRenderTarget(St),y.setClearColor(Q,ot),Nt!==void 0&&(W.viewport=Nt),y.toneMapping=bt}function Js(M,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ct=M.length;F<ct;F++){const _t=M[F],St=_t.object,bt=_t.geometry,Nt=W===null?_t.material:W,Ft=_t.group;St.layers.test(k.layers)&&Pl(St,U,k,bt,Nt,Ft)}}function Pl(M,U,k,W,F,ct){M.onBeforeRender(y,U,k,W,F,ct),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,U,k,W,M,ct),F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,y.renderBufferDirect(k,U,W,F,M,ct),F.side=ei,F.needsUpdate=!0,y.renderBufferDirect(k,U,W,F,M,ct),F.side=Un):y.renderBufferDirect(k,U,W,F,M,ct),M.onAfterRender(y,U,k,W,F,ct)}function Qs(M,U,k){U.isScene!==!0&&(U=ae);const W=$.get(M),F=h.state.lights,ct=h.state.shadowsArray,_t=F.state.version,St=lt.getParameters(M,F.state,ct,U,k),bt=lt.getProgramCacheKey(St);let Nt=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?R:m).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",zt),Nt=new Map,W.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===_t)return Ll(M,St),Ft}else St.uniforms=lt.getUniforms(M),M.onBeforeCompile(St,y),Ft=lt.acquireProgram(St,bt),Nt.set(bt,Ft),W.uniforms=St.uniforms;const At=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=it.uniform),Ll(M,St),W.needsLights=Kf(M),W.lightsStateVersion=_t,W.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function Dl(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Nr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ll(M,U){const k=$.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function $f(M,U,k,W,F){U.isScene!==!0&&(U=ae),v.resetTextureUnits();const ct=U.fog,_t=W.isMeshStandardMaterial?U.environment:null,St=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ps,bt=(W.isMeshStandardMaterial?R:m).get(W.envMap||_t),Nt=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,Jt=!!k.morphAttributes.color;let me=Qn;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(me=y.toneMapping);const de=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$t=de!==void 0?de.length:0,Pt=$.get(W),be=h.state.lights;if(ut===!0&&(Et===!0||M!==E)){const Le=M===E&&W.id===T;it.setState(W,M,Le)}let Qt=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==be.state.version||Pt.outputColorSpace!==St||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==bt||W.fog===!0&&Pt.fog!==ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Ft||Pt.morphTargets!==At||Pt.morphNormals!==qt||Pt.morphColors!==Jt||Pt.toneMapping!==me||Pt.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,Pt.__version=W.version);let sn=Pt.currentProgram;Qt===!0&&(sn=Qs(W,U,F));let Di=!1,We=!1,xs=!1;const ue=sn.getUniforms(),Je=Pt.uniforms;if(V.useProgram(sn.program)&&(Di=!0,We=!0,xs=!0),W.id!==T&&(T=W.id,We=!0),Di||E!==M){V.buffers.depth.getReversed()?(ht.copy(M.projectionMatrix),X_(ht),Y_(ht),ue.setValue(g,"projectionMatrix",ht)):ue.setValue(g,"projectionMatrix",M.projectionMatrix),ue.setValue(g,"viewMatrix",M.matrixWorldInverse);const ze=ue.map.cameraPosition;ze!==void 0&&ze.setValue(g,It.setFromMatrixPosition(M.matrixWorld)),q.logarithmicDepthBuffer&&ue.setValue(g,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(g,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,We=!0,xs=!0)}if(F.isSkinnedMesh){ue.setOptional(g,F,"bindMatrix"),ue.setOptional(g,F,"bindMatrixInverse");const Le=F.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ue.setValue(g,"boneTexture",Le.boneTexture,v))}F.isBatchedMesh&&(ue.setOptional(g,F,"batchingTexture"),ue.setValue(g,"batchingTexture",F._matricesTexture,v),ue.setOptional(g,F,"batchingIdTexture"),ue.setValue(g,"batchingIdTexture",F._indirectTexture,v),ue.setOptional(g,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(g,"batchingColorTexture",F._colorsTexture,v));const Qe=k.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&Rt.update(F,k,sn),(We||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,ue.setValue(g,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Je.envMap.value=bt,Je.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Je.envMapIntensity.value=U.environmentIntensity),We&&(ue.setValue(g,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&jf(Je,xs),ct&&W.fog===!0&&rt.refreshFogUniforms(Je,ct),rt.refreshMaterialUniforms(Je,W,H,et,h.state.transmissionRenderTarget[M.id]),Nr.upload(g,Dl(Pt),Je,v)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nr.upload(g,Dl(Pt),Je,v),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(g,"center",F.center),ue.setValue(g,"modelViewMatrix",F.modelViewMatrix),ue.setValue(g,"normalMatrix",F.normalMatrix),ue.setValue(g,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Le=W.uniformsGroups;for(let ze=0,ro=Le.length;ze<ro;ze++){const ai=Le[ze];L.update(ai,sn),L.bind(ai,sn)}}return sn}function jf(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Kf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,U,k){$.get(M.texture).__webglTexture=U,$.get(M.depthTexture).__webglTexture=k;const W=$.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const k=$.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){O=M,C=U,P=k;let W=!0,F=null,ct=!1,_t=!1;if(M){const bt=$.get(M);if(bt.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(g.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(bt.__hasExternalTextures)v.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(bt.__boundDepthTexture!==At){if(At!==null&&$.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(_t=!0);const Ft=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?F=Ft[U][k]:F=Ft[U],ct=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?F=$.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[k]:F=Ft,D.copy(M.viewport),J.copy(M.scissor),Y=M.scissorTest}else D.copy(Tt).multiplyScalar(H).floor(),J.copy(Dt).multiplyScalar(H).floor(),Y=Zt;if(V.bindFramebuffer(g.FRAMEBUFFER,F)&&W&&V.drawBuffers(M,F),V.viewport(D),V.scissor(J),V.setScissorTest(Y),ct){const bt=$.get(M.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,k)}else if(_t){const bt=$.get(M.texture),Nt=U||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Nt)}T=-1},this.readRenderTargetPixels=function(M,U,k,W,F,ct,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){V.bindFramebuffer(g.FRAMEBUFFER,St);try{const bt=M.texture,Nt=bt.format,Ft=bt.type;if(!q.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&k>=0&&k<=M.height-F&&g.readPixels(U,k,W,F,Ct.convert(Nt),Ct.convert(Ft),ct)}finally{const bt=O!==null?$.get(O).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,W,F,ct,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){const bt=M.texture,Nt=bt.format,Ft=bt.type;if(!q.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-W&&k>=0&&k<=M.height-F){V.bindFramebuffer(g.FRAMEBUFFER,St);const At=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,At),g.bufferData(g.PIXEL_PACK_BUFFER,ct.byteLength,g.STREAM_READ),g.readPixels(U,k,W,F,Ct.convert(Nt),Ct.convert(Ft),0);const qt=O!==null?$.get(O).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,qt);const Jt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await W_(g,Jt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,At),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ct),g.deleteBuffer(At),g.deleteSync(Jt),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,k=0){M.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-k),F=Math.floor(M.image.width*W),ct=Math.floor(M.image.height*W),_t=U!==null?U.x:0,St=U!==null?U.y:0;v.setTexture2D(M,0),g.copyTexSubImage2D(g.TEXTURE_2D,k,0,0,_t,St,F,ct),V.unbindTexture()};const Zf=g.createFramebuffer(),Jf=g.createFramebuffer();this.copyTextureToTexture=function(M,U,k=null,W=null,F=0,ct=null){M.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],U=arguments[2],ct=arguments[3]||0,k=null),ct===null&&(F!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=F,F=0):ct=0);let _t,St,bt,Nt,Ft,At,qt,Jt,me;const de=M.isCompressedTexture?M.mipmaps[ct]:M.image;if(k!==null)_t=k.max.x-k.min.x,St=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,Nt=k.min.x,Ft=k.min.y,At=k.isBox3?k.min.z:0;else{const Qe=Math.pow(2,-F);_t=Math.floor(de.width*Qe),St=Math.floor(de.height*Qe),M.isDataArrayTexture?bt=de.depth:M.isData3DTexture?bt=Math.floor(de.depth*Qe):bt=1,Nt=0,Ft=0,At=0}W!==null?(qt=W.x,Jt=W.y,me=W.z):(qt=0,Jt=0,me=0);const $t=Ct.convert(U.format),Pt=Ct.convert(U.type);let be;U.isData3DTexture?(v.setTexture3D(U,0),be=g.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),be=g.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),be=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=g.getParameter(g.UNPACK_ROW_LENGTH),sn=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Di=g.getParameter(g.UNPACK_SKIP_PIXELS),We=g.getParameter(g.UNPACK_SKIP_ROWS),xs=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(g.UNPACK_SKIP_IMAGES,At);const ue=M.isDataArrayTexture||M.isData3DTexture,Je=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Qe=$.get(M),Le=$.get(U),ze=$.get(Qe.__renderTarget),ro=$.get(Le.__renderTarget);V.bindFramebuffer(g.READ_FRAMEBUFFER,ze.__webglFramebuffer),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,ro.__webglFramebuffer);for(let ai=0;ai<bt;ai++)ue&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,$.get(M).__webglTexture,F,At+ai),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,$.get(U).__webglTexture,ct,me+ai)),g.blitFramebuffer(Nt,Ft,_t,St,qt,Jt,_t,St,g.DEPTH_BUFFER_BIT,g.NEAREST);V.bindFramebuffer(g.READ_FRAMEBUFFER,null),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||$.has(M)){const Qe=$.get(M),Le=$.get(U);V.bindFramebuffer(g.READ_FRAMEBUFFER,Zf),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,Jf);for(let ze=0;ze<bt;ze++)ue?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Qe.__webglTexture,F,At+ze):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Qe.__webglTexture,F),Je?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Le.__webglTexture,ct,me+ze):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Le.__webglTexture,ct),F!==0?g.blitFramebuffer(Nt,Ft,_t,St,qt,Jt,_t,St,g.COLOR_BUFFER_BIT,g.NEAREST):Je?g.copyTexSubImage3D(be,ct,qt,Jt,me+ze,Nt,Ft,_t,St):g.copyTexSubImage2D(be,ct,qt,Jt,Nt,Ft,_t,St);V.bindFramebuffer(g.READ_FRAMEBUFFER,null),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Je?M.isDataTexture||M.isData3DTexture?g.texSubImage3D(be,ct,qt,Jt,me,_t,St,bt,$t,Pt,de.data):U.isCompressedArrayTexture?g.compressedTexSubImage3D(be,ct,qt,Jt,me,_t,St,bt,$t,de.data):g.texSubImage3D(be,ct,qt,Jt,me,_t,St,bt,$t,Pt,de):M.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,ct,qt,Jt,_t,St,$t,Pt,de.data):M.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,ct,qt,Jt,de.width,de.height,$t,de.data):g.texSubImage2D(g.TEXTURE_2D,ct,qt,Jt,_t,St,$t,Pt,de);g.pixelStorei(g.UNPACK_ROW_LENGTH,Qt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,sn),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Di),g.pixelStorei(g.UNPACK_SKIP_ROWS,We),g.pixelStorei(g.UNPACK_SKIP_IMAGES,xs),ct===0&&U.generateMipmaps&&g.generateMipmap(be),V.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k=null,W=null,F=0){return M.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,k,W,F)},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),V.unbindTexture()},this.resetState=function(){C=0,P=0,O=null,V.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const ru={type:"change"},Tl={type:"start"},Yf={type:"end"},br=new Df,ou=new jn,uS=Math.cos(70*G_.DEG2RAD),xe=new G,He=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class fS extends Ag{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new wi,this._lastTargetPosition=new G,this._quat=new wi().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new G,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new G,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dS.bind(this),this._onPointerDown=hS.bind(this),this._onPointerUp=pS.bind(this),this._onContextMenu=SS.bind(this),this._onMouseWheel=gS.bind(this),this._onKeyDown=vS.bind(this),this._onTouchStart=xS.bind(this),this._onTouchMove=MS.bind(this),this._onMouseDown=mS.bind(this),this._onMouseMove=_S.bind(this),this._interceptControlDown=ES.bind(this),this._interceptControlUp=yS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(br.origin.copy(this.object.position),br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(br.direction))<uS?this.object.lookAt(this.target):(ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),br.intersectPlane(ou,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function dS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function pS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case is.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case is.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Tl)}function _S(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gS(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(Tl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yf))}function vS(n){this.enabled!==!1&&this._handleKeyDown(n)}function xS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Tl)}function MS(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function SS(n){this.enabled!==!1&&n.preventDefault()}function ES(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}xp(Om).mount("#app");const TS="images/panorama",bS=["panorama_1","panorama_3","panorama_4","panorama_5","panorama_0","panorama_2"].map(n=>`${TS}/${n}.png`),io=new en(100,window.innerWidth/window.innerHeight,.1,1e3);io.position.set(.2,.2,-1);const bl=new mg;bl.add(io);const AS=await new yg().loadAsync(bS);bl.background=AS;const Zs=new cS({antialias:!0});Zs.setSize(window.innerWidth,window.innerHeight);Zs.setPixelRatio(window.devicePixelRatio);const wS=document.querySelector(".panorama");wS.appendChild(Zs.domElement);const vs=new fS(io,Zs.domElement);vs.enablePan=!1;vs.enableZoom=!1;vs.autoRotate=!0;vs.enableDamping=!0;vs.autoRotateSpeed=.2;function qf(){requestAnimationFrame(qf),vs.update(),Zs.render(bl,io)}qf();
