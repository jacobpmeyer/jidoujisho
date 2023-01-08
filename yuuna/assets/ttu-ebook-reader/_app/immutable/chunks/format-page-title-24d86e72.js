var Wt=Object.defineProperty;var Ut=(t,e,n)=>e in t?Wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var b=(t,e,n)=>(Ut(t,typeof e!="symbol"?e+"":e,n),n),Xe=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var N=(t,e,n)=>(Xe(t,e,"read from private field"),n?n.call(t):e.get(t)),le=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},B=(t,e,n,r)=>(Xe(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Se=(t,e,n,r)=>({set _(o){B(t,e,o,n)},get _(){return N(t,e,r)}});import{a4 as G,S as be,i as ve,n as _e,W as ke,j as E,s as ne,k as x,l as C,f as g,c as re,m as S,a as k,O as D,X as Ie,Y as $e,Z as Ee,d as y,t as $,a5 as Ht,a6 as Gt,a7 as zt,g as qe,b as Ye,a8 as Kt,p as W,_ as lt,a9 as je,aa as Xt,Q as Ve,ab as pe,ac as qt,w as oe,x as ae,y as se,z as ie,q as Y,r as J,u as ye,ad as Yt}from"./singletons-54206af0.js";import{i as O,_ as ut,S as Jt,a as K,o as ft,b as Qt,c as dt,e as xe,O as A,r as Zt,f as en,g as tn,h as nn,j as ht,n as rn,k as mt,l as on,m as an,d as sn,w as pt}from"./dialog-manager-6307dd27.js";const cn=!0,ln=cn;function un(t){return O(t==null?void 0:t.lift)}function M(t){return function(e){if(un(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function j(t,e,n,r,o){return new fn(t,e,n,r,o)}var fn=function(t){ut(e,t);function e(n,r,o,a,c,l){var s=t.call(this,n)||this;return s.onFinalize=c,s.shouldUnsubscribe=l,s._next=r?function(i){try{r(i)}catch(u){n.error(u)}}:t.prototype._next,s._error=a?function(i){try{a(i)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=o?function(){try{o()}catch(i){n.error(i)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(Jt),gt={now:function(){return(gt.delegate||Date).now()},delegate:void 0},dn=function(t){ut(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=gt);var a=t.call(this)||this;return a._bufferSize=n,a._windowTime=r,a._timestampProvider=o,a._buffer=[],a._infiniteTimeWindow=!0,a._infiniteTimeWindow=r===1/0,a._bufferSize=Math.max(1,n),a._windowTime=Math.max(1,r),a}return e.prototype.next=function(n){var r=this,o=r.isStopped,a=r._buffer,c=r._infiniteTimeWindow,l=r._timestampProvider,s=r._windowTime;o||(a.push(n),!c&&a.push(l.now()+s)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,a=o._infiniteTimeWindow,c=o._buffer,l=c.slice(),s=0;s<l.length&&!n.closed;s+=a?1:2)n.next(l[s]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,a=n._buffer,c=n._infiniteTimeWindow,l=(c?1:2)*r;if(r<1/0&&l<a.length&&a.splice(0,a.length-l),!c){for(var s=o.now(),i=0,u=1;u<a.length&&a[u]<=s;u+=2)i=u;i&&a.splice(0,i+1)}},e}(K);function hn(t){return t&&O(t.schedule)}function Fe(t){return t[t.length-1]}function Jr(t){return O(Fe(t))?t.pop():void 0}function wt(t){return hn(Fe(t))?t.pop():void 0}function Qr(t,e){return typeof Fe(t)=="number"?t.pop():e}var bt=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function vt(t){return O(t==null?void 0:t.then)}function _t(t){return O(t[ft])}function yt(t){return Symbol.asyncIterator&&O(t==null?void 0:t[Symbol.asyncIterator])}function St(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function mn(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var kt=mn();function It(t){return O(t==null?void 0:t[kt])}function $t(t){return Qt(this,arguments,function(){var n,r,o,a;return dt(this,function(c){switch(c.label){case 0:n=t.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,xe(n.read())];case 3:return r=c.sent(),o=r.value,a=r.done,a?[4,xe(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,xe(o)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Et(t){return O(t==null?void 0:t.getReader)}function V(t){if(t instanceof A)return t;if(t!=null){if(_t(t))return pn(t);if(bt(t))return gn(t);if(vt(t))return wn(t);if(yt(t))return xt(t);if(It(t))return bn(t);if(Et(t))return vn(t)}throw St(t)}function pn(t){return new A(function(e){var n=t[ft]();if(O(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gn(t){return new A(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function wn(t){return new A(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Zt)})}function bn(t){return new A(function(e){var n,r;try{for(var o=en(t),a=o.next();!a.done;a=o.next()){var c=a.value;if(e.next(c),e.closed)return}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function xt(t){return new A(function(e){_n(t,e).catch(function(n){return e.error(n)})})}function vn(t){return xt($t(t))}function _n(t,e){var n,r,o,a;return tn(this,void 0,void 0,function(){var c,l;return dt(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),n=nn(t),s.label=1;case 1:return[4,n.next()];case 2:if(r=s.sent(),!!r.done)return[3,4];if(c=r.value,e.next(c),e.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=s.sent(),o={error:l},[3,11];case 6:return s.trys.push([6,,9,10]),r&&!r.done&&(a=n.return)?[4,a.call(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function U(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var a=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(a),!o)return a}function Ct(t,e){return e===void 0&&(e=0),M(function(n,r){n.subscribe(j(r,function(o){return U(r,t,function(){return r.next(o)},e)},function(){return U(r,t,function(){return r.complete()},e)},function(o){return U(r,t,function(){return r.error(o)},e)}))})}function Ot(t,e){return e===void 0&&(e=0),M(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function yn(t,e){return V(t).pipe(Ot(e),Ct(e))}function Sn(t,e){return V(t).pipe(Ot(e),Ct(e))}function kn(t,e){return new A(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function In(t,e){return new A(function(n){var r;return U(n,e,function(){r=t[kt](),U(n,e,function(){var o,a,c;try{o=r.next(),a=o.value,c=o.done}catch(l){n.error(l);return}c?n.complete():n.next(a)},0,!0)}),function(){return O(r==null?void 0:r.return)&&r.return()}})}function Tt(t,e){if(!t)throw new Error("Iterable cannot be null");return new A(function(n){U(n,e,function(){var r=t[Symbol.asyncIterator]();U(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function $n(t,e){return Tt($t(t),e)}function En(t,e){if(t!=null){if(_t(t))return yn(t,e);if(bt(t))return kn(t,e);if(vt(t))return Sn(t,e);if(yt(t))return Tt(t,e);if(It(t))return In(t,e);if(Et(t))return $n(t,e)}throw St(t)}function De(t,e){return e?En(t,e):V(t)}function Ne(t,e){return M(function(n,r){var o=0;n.subscribe(j(r,function(a){r.next(t.call(e,a,o++))}))})}function xn(t,e,n,r,o,a,c,l){var s=[],i=0,u=0,f=!1,d=function(){f&&!s.length&&!i&&e.complete()},h=function(_){return i<r?p(_):s.push(_)},p=function(_){a&&e.next(_),i++;var I=!1;V(n(_,u++)).subscribe(j(e,function(T){o==null||o(T),a?h(T):e.next(T)},function(){I=!0},void 0,function(){if(I)try{i--;for(var T=function(){var F=s.shift();c?U(e,c,function(){return p(F)}):p(F)};s.length&&i<r;)T();d()}catch(F){e.error(F)}}))};return t.subscribe(j(e,h,function(){f=!0,d()})),function(){l==null||l()}}function Pt(t,e,n){return n===void 0&&(n=1/0),O(e)?Pt(function(r,o){return Ne(function(a,c){return e(r,a,o,c)})(V(t(r,o)))},n):(typeof e=="number"&&(n=e),M(function(r,o){return xn(r,o,t,n)}))}function Cn(t){return t===void 0&&(t=1/0),Pt(ht,t)}function On(){return Cn(1)}function Je(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return On()(De(t,wt(t)))}var Tn=new A(rn);function Pn(t,e){return M(function(n,r){var o=0;n.subscribe(j(r,function(a){return t.call(e,a,o++)&&r.next(a)}))})}function Dt(t){return M(function(e,n){var r=null,o=!1,a;r=e.subscribe(j(n,void 0,void 0,function(c){a=V(t(c,Dt(t)(e))),r?(r.unsubscribe(),r=null,a.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,a.subscribe(n))})}function Dn(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new K}:e,r=t.resetOnError,o=r===void 0?!0:r,a=t.resetOnComplete,c=a===void 0?!0:a,l=t.resetOnRefCountZero,s=l===void 0?!0:l;return function(i){var u,f,d,h=0,p=!1,_=!1,I=function(){f==null||f.unsubscribe(),f=void 0},T=function(){I(),u=d=void 0,p=_=!1},F=function(){var m=u;T(),m==null||m.unsubscribe()};return M(function(m,v){h++,!_&&!p&&I();var w=d=d??n();v.add(function(){h--,h===0&&!_&&!p&&(f=Ce(F,s))}),w.subscribe(v),!u&&h>0&&(u=new mt({next:function(P){return w.next(P)},error:function(P){_=!0,I(),f=Ce(T,o,P),w.error(P)},complete:function(){p=!0,I(),f=Ce(T,c),w.complete()}}),V(m).subscribe(u))})(i)}}function Ce(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var o=new mt({next:function(){o.unsubscribe(),t()}});return V(e.apply(void 0,on([],an(n)))).subscribe(o)}}function ee(t,e,n){var r,o,a,c,l=!1;return t&&typeof t=="object"?(r=t.bufferSize,c=r===void 0?1/0:r,o=t.windowTime,e=o===void 0?1/0:o,a=t.refCount,l=a===void 0?!1:a,n=t.scheduler):c=t??1/0,Dn({connector:function(){return new dn(c,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:l})}function Ln(t){return Pn(function(e,n){return t<=n})}function ue(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=wt(t);return M(function(r,o){(n?Je(t,r,n):Je(t,r)).subscribe(o)})}function z(t,e){return M(function(n,r){var o=null,a=0,c=!1,l=function(){return c&&!o&&r.complete()};n.subscribe(j(r,function(s){o==null||o.unsubscribe();var i=0,u=a++;V(t(s,u)).subscribe(o=j(r,function(f){return r.next(e?e(s,f,u,i++):f)},function(){o=null,l()}))},function(){c=!0,l()}))})}function Qe(t,e,n){var r=O(t)||e||n?{next:t,error:e,complete:n}:t;return r?M(function(o,a){var c;(c=r.subscribe)===null||c===void 0||c.call(r);var l=!0;o.subscribe(j(a,function(s){var i;(i=r.next)===null||i===void 0||i.call(r,s),a.next(s)},function(){var s;l=!1,(s=r.complete)===null||s===void 0||s.call(r),a.complete()},function(s){var i;l=!1,(i=r.error)===null||i===void 0||i.call(r,s),a.error(s)},function(){var s,i;l&&((s=r.unsubscribe)===null||s===void 0||s.call(r)),(i=r.finalize)===null||i===void 0||i.call(r)}))}):ht}G.disable_scroll_handling;const Zr=G.goto;G.invalidate;G.invalidateAll;G.preload_data;G.preload_code;G.before_navigate;const eo=G.after_navigate;var L=(t=>(t.AUTO_SCROLL_TOGGLE="autoScrollToggle",t.AUTO_SCROLL_INCREASE="autoScrollIncrease",t.AUTO_SCROLL_DECREASE="autoScrollDecrease",t.BOOKMARK="bookmark",t.JUMP_TO_BOOKMARK="jumpToBookmark",t.NEXT_CHAPTER="nextChapter",t.NEXT_PAGE="nextPage",t.PREV_CHAPTER="prevChapter",t.PREV_PAGE="prevPage",t))(L||{});const Rn=t=>({}),Ze=t=>({}),An=t=>({}),et=t=>({}),Mn=t=>({}),tt=t=>({});function Bn(t){let e,n,r,o,a,c;const l=t[1].header,s=ke(l,t,t[0],tt),i=t[1].content,u=ke(i,t,t[0],et),f=t[1].footer,d=ke(f,t,t[0],Ze);return{c(){e=E("section"),n=E("h2"),s&&s.c(),r=ne(),u&&u.c(),o=ne(),a=E("footer"),d&&d.c(),this.h()},l(h){e=x(h,"SECTION",{class:!0});var p=C(e);n=x(p,"H2",{class:!0});var _=C(n);s&&s.l(_),_.forEach(g),r=re(p),u&&u.l(p),o=re(p),a=x(p,"FOOTER",{class:!0});var I=C(a);d&&d.l(I),I.forEach(g),p.forEach(g),this.h()},h(){S(n,"class","weight-medium mb-5 text-xl"),S(a,"class","flex flex-wrap items-center justify-end pt-5"),S(e,"class","mdc-elevation--z24 rounded bg-white p-6")},m(h,p){k(h,e,p),D(e,n),s&&s.m(n,null),D(e,r),u&&u.m(e,null),D(e,o),D(e,a),d&&d.m(a,null),c=!0},p(h,[p]){s&&s.p&&(!c||p&1)&&Ie(s,l,h,h[0],c?Ee(l,h[0],p,Mn):$e(h[0]),tt),u&&u.p&&(!c||p&1)&&Ie(u,i,h,h[0],c?Ee(i,h[0],p,An):$e(h[0]),et),d&&d.p&&(!c||p&1)&&Ie(d,f,h,h[0],c?Ee(f,h[0],p,Rn):$e(h[0]),Ze)},i(h){c||(y(s,h),y(u,h),y(d,h),c=!0)},o(h){$(s,h),$(u,h),$(d,h),c=!1},d(h){h&&g(e),s&&s.d(h),u&&u.d(h),d&&d.d(h)}}}function jn(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=a=>{"$$scope"in a&&n(0,o=a.$$scope)},[o,r]}class Lt extends be{constructor(e){super(),ve(this,e,jn,Bn,_e,{})}}function Rt(t){const e=t-1;return e*e*e+1}function to(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function ge(t){return--t*t*t*t*t+1}function we(t,{delay:e=0,duration:n=400,easing:r=Ht}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*o}`}}function no(t,{delay:e=0,duration:n=400,easing:r=Rt,x:o=0,y:a=0,opacity:c=0}={}){const l=getComputedStyle(t),s=+l.opacity,i=l.transform==="none"?"":l.transform,u=s*(1-c);return{delay:e,duration:n,easing:r,css:(f,d)=>`
			transform: ${i} translate(${(1-f)*o}px, ${(1-f)*a}px);
			opacity: ${s-u*d}`}}function ro(t,{delay:e=0,duration:n=400,easing:r=Rt,start:o=0,opacity:a=0}={}){const c=getComputedStyle(t),l=+c.opacity,s=c.transform==="none"?"":c.transform,i=1-o,u=l*(1-a);return{delay:e,duration:n,easing:r,css:(f,d)=>`
			transform: ${s} scale(${1-i*d});
			opacity: ${l-u*d}
		`}}function nt(t,e,n){const r=t.slice();return r[16]=e[n],r}function rt(t,e){let n,r,o=`${e[1]}px`,a=`${e[1]}px`,c=`${e[3]}px`,l=`${e[2]}px`,s,i;return{key:t,first:null,c(){n=E("span"),this.h()},l(u){n=x(u,"SPAN",{class:!0}),C(n).forEach(g),this.h()},h(){S(n,"class","absolute rounded-full bg-gray-400/50"),W(n,"width",o),W(n,"height",a),W(n,"top",c),W(n,"left",l),this.first=n},m(u,f){k(u,n,f),s||(i=lt(n,"introend",e[8]),s=!0)},p(u,f){e=u,f&2&&o!==(o=`${e[1]}px`)&&W(n,"width",o),f&2&&a!==(a=`${e[1]}px`)&&W(n,"height",a),f&8&&c!==(c=`${e[3]}px`)&&W(n,"top",c),f&4&&l!==(l=`${e[2]}px`)&&W(n,"left",l)},i(u){u&&(r||je(()=>{r=Xt(n,Fn,{}),r.start()}))},o:Ve,d(u){u&&g(n),s=!1,i()}}}function ot(t){let e,n,r;return{c(){e=E("span"),this.h()},l(o){e=x(o,"SPAN",{class:!0}),C(e).forEach(g),this.h()},h(){S(e,"class","absolute inset-0 h-full w-full bg-gray-400/25")},m(o,a){k(o,e,a),r=!0},p(o,a){},i(o){r||(o&&je(()=>{n||(n=pe(e,we,{easing:ge},!0)),n.run(1)}),r=!0)},o(o){o&&(n||(n=pe(e,we,{easing:ge},!1)),n.run(0)),r=!1},d(o){o&&g(e),o&&n&&n.end()}}}function at(t){let e,n,r;return{c(){e=E("span"),this.h()},l(o){e=x(o,"SPAN",{class:!0}),C(e).forEach(g),this.h()},h(){S(e,"class","absolute inset-0 h-full w-full bg-gray-400/[.10]")},m(o,a){k(o,e,a),r=!0},p(o,a){},i(o){r||(o&&je(()=>{n||(n=pe(e,we,{easing:ge},!0)),n.run(1)}),r=!0)},o(o){o&&(n||(n=pe(e,we,{easing:ge},!1)),n.run(0)),r=!1},d(o){o&&g(e),o&&n&&n.end()}}}function Vn(t){let e,n=[],r=new Map,o,a,c=t[4];const l=u=>u[16].id;for(let u=0;u<c.length;u+=1){let f=nt(t,c,u),d=l(f);r.set(d,n[u]=rt(d,f))}let s=t[5]&&ot(),i=(t[5]||t[6])&&at();return{c(){e=E("span");for(let u=0;u<n.length;u+=1)n[u].c();o=ne(),s&&s.c(),a=ne(),i&&i.c(),this.h()},l(u){e=x(u,"SPAN",{class:!0});var f=C(e);for(let d=0;d<n.length;d+=1)n[d].l(f);o=re(f),s&&s.l(f),a=re(f),i&&i.l(f),f.forEach(g),this.h()},h(){S(e,"class","absolute inset-0 h-full w-full")},m(u,f){k(u,e,f);for(let d=0;d<n.length;d+=1)n[d].m(e,null);D(e,o),s&&s.m(e,null),D(e,a),i&&i.m(e,null),t[9](e)},p(u,[f]){f&30&&(c=u[4],n=Gt(n,f,l,1,u,c,r,e,zt,rt,o,nt)),u[5]?s?(s.p(u,f),f&32&&y(s,1)):(s=ot(),s.c(),y(s,1),s.m(e,a)):s&&(qe(),$(s,1,1,()=>{s=null}),Ye()),u[5]||u[6]?i?(i.p(u,f),f&96&&y(i,1)):(i=at(),i.c(),y(i,1),i.m(e,null)):i&&(qe(),$(i,1,1,()=>{i=null}),Ye())},i(u){for(let f=0;f<c.length;f+=1)y(n[f]);y(s),y(i)},o(u){$(s),$(i)},d(u){u&&g(e);for(let f=0;f<n.length;f+=1)n[f].d();s&&s.d(),i&&i.d(),t[9](null)}}}function Fn(t,e){return{delay:0,duration:400,css:(n,r)=>`
          transform: scale(${n*4});
          opacity: ${r}
        `}}function Nn(t,e,n){let r,o=0,a=0,c=0,l=[],s=!1,i=!1,u,f=[];Kt(()=>{h()});function d(m,v,w){m.addEventListener(v,w),f.push({el:m,type:v,listener:w})}function h(){f.forEach(({el:m,type:v,listener:w})=>m.removeEventListener(v,w)),f=[]}function p(m,v,w,P,Ft,Nt){n(1,o=Math.max(Ft,Nt));const Ke=o/2;n(2,a=m-w-Ke),n(3,c=v-P-Ke),n(4,l=[{id:Date.now()}]),n(5,s=!0),n(6,i=!1)}function _(m,v){const w=v.getBoundingClientRect();p(m.clientX,m.clientY,w.left,w.top,w.width,w.height)}function I(m,v){const w=m.touches[0],P=v.getBoundingClientRect();p(w.clientX,w.clientY,P.left,P.top,P.width,P.height)}const T=()=>n(4,l=[]);function F(m){qt[m?"unshift":"push"](()=>{u=m,n(0,u)})}return t.$$.update=()=>{if(t.$$.dirty&1&&n(7,r=u==null?void 0:u.parentElement),t.$$.dirty&128&&r){r.classList.add("relative","overflow-hidden"),h();const m=r;d(m,"focusin",()=>n(6,i=!0)),d(m,"focusout",()=>n(6,i=!1)),d(m,"mouseenter",()=>n(6,i=!0)),d(m,"mouseleave",()=>{n(5,s=!1),n(6,i=!1)}),d(m,"mousedown",v=>_(v,m)),d(m,"mouseup",()=>n(5,s=!1)),d(m,"touchstart",v=>I(v,m)),d(m,"touchend",()=>n(5,s=!1)),d(m,"touchcancel",()=>n(5,s=!1))}},[u,o,a,c,l,s,i,r,T,F]}class Le extends be{constructor(e){super(),ve(this,e,Nn,Vn,_e,{})}}const oo="relative h-12 bg-gray-700 text-white xl:h-10",Wn="p-3 xl:p-2.5",ao="px-4 md:px-8 lg:max-w-4xl xl:max-w-none 2xl:max-w-6xl mx-auto",Un="opacity-60 hover:opacity-100 transition-opacity",so="p-4 xl:p-3",io="-translate-x-4 xl:-translate-x-3",co="translate-x-4 xl:translate-x-3",lo="mt-1 block w-full px-0.5 bg-background-color border-0 border-b-2 border-gray-400/50 focus:ring-0 focus:border-black transition",Re="inline-block no-underline font-medium rounded min-w-[64px] px-4 leading-9 cursor-pointer text-cyan-900",uo=`flex justify-center items-center h-12 w-12 cursor-pointer text-xl xl:h-10 xl:w-10 xl:text-lg ${Wn} ${Un}`,Hn={[3]:console.error,[4]:console.warn,[6]:console.info,[7]:console.debug};let Ae=[];function fe(t){return(e,...n)=>{const r=[e].concat(n);Ae.push({level:t,args:Gn(r)}),Hn[t].apply(null,r)}}const We={get history(){return Array.from(Ae)},error:fe(3),warn:fe(4),info:fe(6),debug:fe(7),clearHistory:()=>{Ae=[]}};function Gn(t){return t.map(e=>e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:typeof e=="object"?JSON.parse(JSON.stringify(e)):e)}function zn(t){let e;return{c(){e=Y(t[0])},l(n){e=J(n,t[0])},m(n,r){k(n,e,r)},p(n,r){r&1&&ye(e,n[0])},d(n){n&&g(e)}}}function Kn(t){let e,n;return{c(){e=E("p"),n=Y(t[1])},l(r){e=x(r,"P",{});var o=C(e);n=J(o,t[1]),o.forEach(g)},m(r,o){k(r,e,o),D(e,n)},p(r,o){o&2&&ye(n,r[1])},d(r){r&&g(e)}}}function Xn(t){let e,n,r,o,a,c,l,s;return r=new Le({}),l=new Le({}),{c(){e=E("a"),n=Y(`Open Repository
      `),oe(r.$$.fragment),o=ne(),a=E("a"),c=Y(`Download Report
      `),oe(l.$$.fragment),this.h()},l(i){e=x(i,"A",{class:!0,href:!0,target:!0});var u=C(e);n=J(u,`Open Repository
      `),ae(r.$$.fragment,u),u.forEach(g),o=re(i),a=x(i,"A",{class:!0,href:!0,download:!0});var f=C(a);c=J(f,`Download Report
      `),ae(l.$$.fragment,f),f.forEach(g),this.h()},h(){S(e,"class",Re),S(e,"href","https://github.com/ttu-ttu/ebook-reader"),S(e,"target","_blank"),S(a,"class",Re),S(a,"href",t[2]),S(a,"download","log.json")},m(i,u){k(i,e,u),D(e,n),se(r,e,null),k(i,o,u),k(i,a,u),D(a,c),se(l,a,null),s=!0},p:Ve,i(i){s||(y(r.$$.fragment,i),y(l.$$.fragment,i),s=!0)},o(i){$(r.$$.fragment,i),$(l.$$.fragment,i),s=!1},d(i){i&&g(e),ie(r),i&&g(o),i&&g(a),ie(l)}}}function qn(t){let e,n;return e=new Lt({props:{$$slots:{footer:[Xn],content:[Kn],header:[zn]},$$scope:{ctx:t}}}),{c(){oe(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,o){se(e,r,o),n=!0},p(r,[o]){const a={};o&19&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){$(e.$$.fragment,r),n=!1},d(r){ie(e,r)}}}function Yn(t,e,n){var l,s;let{title:r="Error"}=e,{message:o}=e;const c=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({userAgent:navigator.userAgent,viewport:{visualViewport:!!window.visualViewport,width:((l=window.visualViewport)==null?void 0:l.width)??window.innerWidth,height:((s=window.visualViewport)==null?void 0:s.height)??window.innerHeight},settings:{theme:Pr.getValue(),fontSize:Lr.getValue(),fontFamilyGroupOne:Rr.getValue(),fontFamilyGroupTwo:Ar.getValue(),firstDimensionMargin:Nr.getValue(),secondDimensionMaxValue:Fr.getValue(),viewMode:Vr.getValue(),writingMode:Vt.getValue(),autoBookmark:Hr.getValue(),hideSpoilerImage:Mr.getValue(),hideFurigana:Br.getValue(),furiganaStyle:jr.getValue(),avoidPageBreak:Ur.getValue(),pageColumns:Gr.getValue(),autoPositionOnResize:Wr.getValue(),requestPersistentStorage:zr.getValue(),multiplier:Dr.getValue()},log:We.history},null,2))}`;return t.$$set=i=>{"title"in i&&n(0,r=i.title),"message"in i&&n(1,o=i.message)},[r,o,c]}class Jn extends be{constructor(e){super(),ve(this,e,Yn,qn,_e,{title:0,message:1})}}function Qn(t){let e;return{c(){e=Y(t[0])},l(n){e=J(n,t[0])},m(n,r){k(n,e,r)},p(n,r){r&1&&ye(e,n[0])},d(n){n&&g(e)}}}function Zn(t){let e,n;return{c(){e=E("p"),n=Y(t[1])},l(r){e=x(r,"P",{});var o=C(e);n=J(o,t[1]),o.forEach(g)},m(r,o){k(r,e,o),D(e,n)},p(r,o){o&2&&ye(n,r[1])},d(r){r&&g(e)}}}function er(t){let e,n,r,o,a,c;return r=new Le({}),{c(){e=E("button"),n=Y(`Close
      `),oe(r.$$.fragment),this.h()},l(l){e=x(l,"BUTTON",{class:!0});var s=C(e);n=J(s,`Close
      `),ae(r.$$.fragment,s),s.forEach(g),this.h()},h(){S(e,"class",Re)},m(l,s){k(l,e,s),D(e,n),se(r,e,null),o=!0,a||(c=lt(e,"click",t[3]),a=!0)},p:Ve,i(l){o||(y(r.$$.fragment,l),o=!0)},o(l){$(r.$$.fragment,l),o=!1},d(l){l&&g(e),ie(r),a=!1,c()}}}function tr(t){let e,n;return e=new Lt({props:{$$slots:{footer:[er],content:[Zn],header:[Qn]},$$scope:{ctx:t}}}),{c(){oe(e.$$.fragment)},l(r){ae(e.$$.fragment,r)},m(r,o){se(e,r,o),n=!0},p(r,[o]){const a={};o&19&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){$(e.$$.fragment,r),n=!1},d(r){ie(e,r)}}}function nr(t,e,n){let{title:r}=e,{message:o}=e;const a=Yt(),c=()=>a("close");return t.$$set=l=>{"title"in l&&n(0,r=l.title),"message"in l&&n(1,o=l.message)},[r,o,a,c]}class rr extends be{constructor(e){super(),ve(this,e,nr,tr,_e,{title:0,message:1})}}var Ue=(t=>(t.BROWSER="browser",t))(Ue||{});class or{constructor(e){b(this,"window");b(this,"dataListFetched",!1);this.window=e}}class ar extends or{constructor(){super(...arguments);b(this,"titleToFileData",new Map)}async init(n){this.window=n}async getDataList(){if(!this.dataListFetched){const r=await(await he.db).getAll("data");for(let o=0,{length:a}=r;o<a;o+=1)this.applyUpsert(r[o]);this.dataListFetched=!0}return[...this.titleToFileData.values()]}async addBook(n){return he.upsertData(n,this)}applyUpsert(n){const r=this.titleToFileData.get(n.title)||{};r.id=n.id,r.title=n.title,r.imagePath=n.coverImage||"",r.lastBookModified=n.lastBookModified||0,r.lastBookOpen=n.lastBookOpen||0,r.progress=0,r.lastBookmarkModified=0,this.titleToFileData.set(n.title,r)}async deleteBookData(n,r){const o=[],a=new Map;for(let s=0,{length:i}=n;s<i;s+=1){const u=this.titleToFileData.get(n[s]);u&&(o.push(u.id),a.set(u.id,u.title))}const{error:c,deleted:l}=await he.deleteData(o,r).catch(s=>({error:s.message,deleted:[]}));for(let s=0,{length:i}=l;s<i;s+=1){const u=l[s];this.titleToFileData.delete(a.get(u)||"")}return l.length&&he.dataListChanged$.next(),[c,l]}}let de;async function sr(t,e){switch(t){case Ue.BROWSER:return de||(de=new ar(e)),await de.init(e),de;default:throw new Error(`No Handler Implementation for ${t}`)}}const me=new K;function ir(t,e="",n){if(t.name!=="AbortError"&&We.error(`${e}${t.message}`),t.name==="AbortError"||t.name==="ReplicationError"&&!t.isRecoverable){if(n)for(let r=0,{length:o}=n;r<o;r+=1)n[r].clearQueue();throw t}return me.next({progressToAdd:-1}),`${e}${t.message}`}function cr(t,e=ln){return e?t():Tn}class lr{constructor(e){b(this,"value");b(this,"next");this.value=e}}var R,X,q;class ur{constructor(){le(this,R,void 0);le(this,X,void 0);le(this,q,void 0);this.clear()}enqueue(e){const n=new lr(e);N(this,R)?(N(this,X).next=n,B(this,X,n)):(B(this,R,n),B(this,X,n)),Se(this,q)._++}dequeue(){const e=N(this,R);if(!!e)return B(this,R,N(this,R).next),Se(this,q)._--,e.value}clear(){B(this,R,void 0),B(this,X,void 0),B(this,q,0)}get size(){return N(this,q)}*[Symbol.iterator](){let e=N(this,R);for(;e;)yield e.value,e=e.next}}R=new WeakMap,X=new WeakMap,q=new WeakMap;function fr(t){if(!((Number.isInteger(t)||t===Number.POSITIVE_INFINITY)&&t>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new ur;let n=0;const r=()=>{n--,e.size>0&&e.dequeue()()},o=async(l,s,i)=>{n++;const u=(async()=>l(...i))();s(u);try{await u}catch{}r()},a=(l,s,i)=>{e.enqueue(o.bind(void 0,l,s,i)),(async()=>(await Promise.resolve(),n<t&&e.size>0&&e.dequeue()()))()},c=(l,...s)=>new Promise(i=>{a(l,i,s)});return Object.defineProperties(c,{activeCount:{get:()=>n},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),c}class dr extends Error{constructor(){super(...arguments);b(this,"name","AbortError")}}function hr(t){if(typeof t.throwIfAborted=="function")t.throwIfAborted();else if(t.aborted)throw new dr("User canceled")}const te=0;class mr{constructor(e){b(this,"db$");b(this,"isReady$");b(this,"listLoading$",new K);b(this,"dataListChanged$",new K);b(this,"dataList$",cr(()=>this.dataListChanged$.pipe(ue(!0),Qe(e=>{e&&this.listLoading$.next(!0)}),z(()=>De(sr(Ue.BROWSER,window).then(e=>e.getDataList())).pipe(Dt(e=>{if(e instanceof Error){const n=We.history.length>1;sn.dialogs$.next([{component:n?Jn:rr,props:{title:"Failure",message:n?"Error(s) occurred":`An Error occured: ${e.message}`}}])}return[[]]}))),Qe(()=>this.listLoading$.next(!1)),ee({refCount:!0,bufferSize:1}))));b(this,"dataIds$",this.dataListChanged$.pipe(ue(0),z(()=>this.db$),z(e=>e.getAllKeys("data")),ee({refCount:!0,bufferSize:1})));b(this,"bookmarksChanged$",new K);b(this,"bookmarks$",this.bookmarksChanged$.pipe(ue(0),z(()=>this.db$),z(e=>e.getAll("bookmark")),ee({refCount:!0,bufferSize:1})));b(this,"lastItemChanged$",new K);b(this,"lastItem$",this.lastItemChanged$.pipe(ue(0),z(()=>this.db$),z(e=>e.get("lastItem",te)),ee({refCount:!0,bufferSize:1})));this.db=e,this.db$=De(e).pipe(ee({refCount:!0,bufferSize:1})),this.isReady$=this.db$.pipe(Ne(n=>!!n))}async getData(e){if(!Number.isNaN(e))return(await this.db).get("data",e)}async upsertData(e,n){const r=await this.db;let o,a;const c=r.transaction("data","readwrite"),{store:l}=c,s=await l.index("title").get(e.title);if(s)a={...e,id:s.id,lastBookModified:e.lastBookModified||s.lastBookModified,lastBookOpen:e.lastBookOpen||s.lastBookOpen},o=await l.put(a);else{const i=e;o=await l.add(i),a={...e,id:o}}return await c.done,n.applyUpsert(a),me.next({progressToAdd:100}),this.dataListChanged$.next(),o}async deleteData(e,n){const r=await this.db,o=await r.get("lastItem",te),a=await r.getAllKeys("bookmark"),c=o==null?void 0:o.dataId,l=new Set(a),s=[],i=fr(1),u=[];let f="";return me.next({progressToAdd:0,baseProgress:100,maxProgress:100*e.length}),e.forEach(d=>u.push(i(async()=>{try{hr(n),s.push(await this.deleteSingleData(r,d,{lastItem:c,bookmarkIds:l}))}catch(h){f=ir(h,`Error deleting Book with id ${d}: `,[i])}}))),await Promise.all(u).catch(()=>{}),{error:f,deleted:s}}async getBookmark(e){return(await this.db).get("bookmark",e)}async putBookmark(e){const r=await(await this.db).put("bookmark",e);return this.bookmarksChanged$.next(),r}async putLastItem(e){const r=await(await this.db).put("lastItem",{dataId:e},te);return this.lastItemChanged$.next(),r}async deleteLastItem(){await(await this.db).delete("lastItem",te),this.lastItemChanged$.next()}async deleteSingleData(e,n,r){const o=["data"],a=r.lastItem===n,c=r.bookmarkIds.has(n);a&&o.push("lastItem"),c&&o.push("bookmark");const l=e.transaction(o,"readwrite");try{a&&await l.objectStore("lastItem").delete(te),c&&await l.objectStore("bookmark").delete(n),await l.objectStore("data").delete(n),await l.done,a&&this.lastItemChanged$.next()}catch(s){try{l.abort(),await l.done}catch{}throw s}return me.next({progressToAdd:100}),n}}const pr=(t,e)=>e.some(n=>t instanceof n);let st,it;function gr(){return st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wr(){return it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const At=new WeakMap,Me=new WeakMap,Mt=new WeakMap,Oe=new WeakMap,He=new WeakMap;function br(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",a),t.removeEventListener("error",c)},a=()=>{n(H(t.result)),o()},c=()=>{r(t.error),o()};t.addEventListener("success",a),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&At.set(n,t)}).catch(()=>{}),He.set(e,t),e}function vr(t){if(Me.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",c),t.removeEventListener("abort",c)},a=()=>{n(),o()},c=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",a),t.addEventListener("error",c),t.addEventListener("abort",c)});Me.set(t,e)}let Be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Me.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _r(t){Be=t(Be)}function yr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Te(this),e,...n);return Mt.set(r,e.sort?e.sort():[e]),H(r)}:wr().includes(t)?function(...e){return t.apply(Te(this),e),H(At.get(this))}:function(...e){return H(t.apply(Te(this),e))}}function Sr(t){return typeof t=="function"?yr(t):(t instanceof IDBTransaction&&vr(t),pr(t,gr())?new Proxy(t,Be):t)}function H(t){if(t instanceof IDBRequest)return br(t);if(Oe.has(t))return Oe.get(t);const e=Sr(t);return e!==t&&(Oe.set(t,e),He.set(e,t)),e}const Te=t=>He.get(t);function kr(t,e,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const c=indexedDB.open(t,e),l=H(c);return r&&c.addEventListener("upgradeneeded",s=>{r(H(c.result),s.oldVersion,s.newVersion,H(c.transaction),s)}),n&&c.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),l.then(s=>{a&&s.addEventListener("close",()=>a()),o&&s.addEventListener("versionchange",i=>o(i.oldVersion,i.newVersion,i))}).catch(()=>{}),l}const Ir=["get","getKey","getAll","getAllKeys","count"],$r=["put","add","delete","clear"],Pe=new Map;function ct(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pe.get(e))return Pe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=$r.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ir.includes(n)))return;const a=async function(c,...l){const s=this.transaction(c,o?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(l.shift())),(await Promise.all([i[n](...l),o&&s.done]))[0]};return Pe.set(e,a),a}_r(t=>({...t,get:(e,n,r)=>ct(e,n)||t.get(e,n,r),has:(e,n)=>!!ct(e,n)||t.has(e,n)}));async function Er(t,e,n,r){t.createObjectStore("data",{keyPath:"id",autoIncrement:!0}).createIndex("title","title"),t.createObjectStore("bookmark",{keyPath:"dataId"}),t.createObjectStore("lastItem");const a=t,c=r,l={data:{},scrollX:{}};{let s=await c.objectStore("keyvaluepairs").openCursor();for(;s;){const i=/([^-]+)-(.+)/.exec(s.key);if(i)switch(i[1]){case"data":case"scrollX":l[i[1]][i[2]]=s.value;break}else s.key==="lastItem"&&(l[s.key]=s.value);s=await s.continue()}}await Promise.all(Object.entries(l.data).map(async([s,i])=>{const u=JSON.parse(i);if(xr(u)){const f={...u,blobs:{},hasThumb:!1,lastBookModified:0,lastBookOpen:0},d=await r.objectStore("data").add(f),h=l.scrollX[s];h&&await r.objectStore("bookmark").put({dataId:d,scrollX:+h,progress:"0%",lastBookmarkModified:0}),l.lastItem===s&&r.objectStore("lastItem").put({dataId:d},0)}})),a.deleteObjectStore("keyvaluepairs"),a.deleteObjectStore("local-forage-detect-blob-support")}function xr(t){return typeof t=="object"&&t?["title","elementHtml","styleSheet"].every(e=>e in t&&typeof t[e]=="string"):!1}function Cr(t="books"){return kr(t,3,{async upgrade(e,n,r,o){switch(n){case 0:{e.createObjectStore("data",{keyPath:"id",autoIncrement:!0}).createIndex("title","title"),e.createObjectStore("bookmark",{keyPath:"dataId"}),e.createObjectStore("lastItem");break}case 2:{await Er(e,n,r,o);break}}}})}var Bt=(t=>(t.Partial="partial",t.Full="full",t.Toggle="toggle",t))(Bt||{});function Ge(t,e,n){return(r,o)=>{const a=Or(t)(r,o,e),c=pt(a);return c.pipe(Ln(1)).subscribe(l=>{t.setItem(r,n(l??o))}),c}}function Or(t){return(e,n,r)=>{const o=t.getItem(e);return o?r(o):n}}class Tr{constructor(){b(this,"_store",new Map)}setItem(e,n){this._store.set(e,n)}getItem(e){return this._store.get(e)}removeItem(e){this._store.delete(e)}clear(){this._store=new Map}}const ze=typeof window>"u"?new Tr:window.localStorage;function Q(t=ze){return Ge(t,e=>!!+e,e=>e?"1":"0")}function ce(t=ze){return Ge(t,e=>+e,e=>`${e}`)}function Z(t=ze){return Ge(t,e=>e,e=>e)}var jt=(t=>(t.Continuous="continuous",t.Paginated="paginated",t))(jt||{});const Pr=Z()("theme","light-theme"),Dr=ce()("autoScrollMultiplier",20),Lr=ce()("fontSize",20),Rr=Z()("fontFamilyGroupOne",""),Ar=Z()("fontFamilyGroupTwo",""),Mr=Q()("hideSpoilerImage",!0),Br=Q()("hideFurigana",!1),jr=Z()("furiganaStyle",Bt.Partial),Vt=Z()("writingMode","vertical-rl"),fo=Vt.pipe(Ne(t=>t==="vertical-rl")),Vr=Z()("viewMode",jt.Paginated),Fr=ce()("secondDimensionMaxValue",0),Nr=ce()("firstDimensionMargin",0),Wr=Q()("autoPositionOnResize",!0),Ur=Q()("avoidPageBreak",!1),Hr=Q()("autoBookmark",!1),Gr=ce()("pageColumns",0),zr=Q()("requestPersistentStorage",!0),ho=pt({KeyB:L.BOOKMARK,KeyR:L.JUMP_TO_BOOKMARK,PageDown:L.NEXT_PAGE,PageUp:L.PREV_PAGE,Space:L.AUTO_SCROLL_TOGGLE,KeyA:L.AUTO_SCROLL_INCREASE,KeyD:L.AUTO_SCROLL_DECREASE,KeyN:L.PREV_CHAPTER,KeyM:L.NEXT_CHAPTER}),Kr=Cr(),he=new mr(Kr);function mo(t){const e="ッツ Ebook Reader";return t?`${t} | ${e}`:e}export{Ur as $,co as A,oo as B,ln as C,L as D,sr as E,Bt as F,Pr as G,Vt as H,ho as I,to as J,no as K,fo as L,Dr as M,Tn as N,Lr as O,Rr as P,Ar as Q,dn as R,Ue as S,Mr as T,Br as U,jt as V,jr as W,Vr as X,Fr as Y,Nr as Z,Wr as _,gt as a,Gr as a0,Hr as a1,Jr as a2,U as a3,ge as a4,ro as a5,ao as a6,so as a7,fr as a8,me as a9,hr as aa,ir as ab,rr as ac,zr as ad,We as ae,Jn as af,Le as ag,lo as ah,eo as ai,De as b,Pt as c,he as d,V as e,mo as f,Zr as g,hn as h,bt as i,Qr as j,Cn as k,j as l,Ne as m,Pn as n,M as o,wt as p,Ln as q,Ct as r,z as s,Qe as t,cr as u,ue as v,ee as w,Dn as x,uo as y,io as z};