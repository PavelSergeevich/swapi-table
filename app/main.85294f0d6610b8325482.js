(()=>{var t={135:(t,e,r)=>{t.exports=r(248)},370:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},248:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=y.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=y,s(L,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},458:(t,e,r)=>{"use strict";t.exports=r.p+"29c050d886d82b6ac1fd.gif"},359:(t,e,r)=>{"use strict";t.exports=r.p+"1e307534e227a270ab63.gif"},547:(t,e,r)=>{"use strict";t.exports=r.p+"8182d75a1800376bb9aa.gif"},656:(t,e,r)=>{"use strict";t.exports=r.p+"9d4b989d44ada002e6e5.gif"},924:(t,e,r)=>{"use strict";t.exports=r.p+"b1e335a838e1c2d910e4.gif"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var t=r(370),e=r.n(t),n=new URL(r(458),r.b),o=new URL(r(656),r.b),a=new URL(r(359),r.b),i=new URL(r(547),r.b),c=new URL(r(924),r.b);e()(n),e()(o),e()(a),e()(i),e()(c);var s=function(t,e,r){var n=document.createElement("tbody");return n.classList.add("table-body"),t.forEach((function(t,o){if(o>=e&&o<r){var a=document.createElement("tr");a.classList.add("table-row");var i=document.createElement("td");for(var c in i.innerText=o+1,i.classList.add("td-text"),a.appendChild(i),console.log(o),t){var s=document.createElement("td");s.innerText=t[c],s.classList.add("td-text"),a.appendChild(s)}n.appendChild(a)}})),n};function u(){var t=sessionStorage.getItem("swapi");return t?JSON.parse(t):[]}function l(){return!!u().length}function f(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}}var h=r(135),d=r.n(h),v=[],g=[],m=[],y=[];function b(t){return w.apply(this,arguments)}function w(){return(w=p(d().mark((function t(e){var r,n,o,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return r=t.sent,console.group("Loading planets..."),t.next=7,r.json();case 7:for(a in n=t.sent,o=Object.assign({},n.results))0!==o[a].residents.length&&(m.push(Object.assign({},{planet:o[a].name,residents:o[a].residents})),console.log("Loading planet --\x3e ".concat(o[a].name,"...")));return t.abrupt("return",m);case 13:t.prev=13,t.t0=t.catch(0),console.error("Error: ",t.t0.message);case 16:return t.prev=16,console.group("Success: All planets is loaded!"),console.groupEnd(),console.groupEnd(),t.finish(16);case 21:case"end":return t.stop()}}),t,null,[[0,13,16,21]])})))).apply(this,arguments)}var x=function(){var t=p(d().mark((function t(e){var r,n,o,a,i,c,s,u,l;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,r=[],t.t0=d().keys(e);case 3:if((t.t1=t.t0()).done){t.next=9;break}return n=t.t1.value,t.next=7,r.push(e[n].residents);case 7:t.next=3;break;case 9:return console.group("Loading residents..."),t.next=12,r;case 12:for(o=t.sent,a=o.flat(),i=[],c=0;c<a.length;c++)s=fetch(a[c]),i.push(s);return t.next=18,Promise.all(i).then((function(t){return t.map((function(t){return t.json()}))}));case 18:return u=t.sent,t.next=21,Promise.all(u);case 21:return(l=t.sent).forEach((function(t){return console.log("Loading resident --\x3e ".concat(t.name,"..."))})),g=l,t.abrupt("return",l);case 27:t.prev=27,t.t2=t.catch(0),console.error("Error: ",t.t2.message);case 30:return t.prev=30,console.group("Success: All residents is loaded!"),console.groupEnd(),console.groupEnd(),t.finish(30);case 35:case"end":return t.stop()}}),t,null,[[0,27,30,35]])})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=p(d().mark((function t(e){var r,n,o,a,i,c,s;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.map((function(t){return 0===t.species.length?t.species=["https://swapi.dev/api/species/1/"]:t.species}));case 3:for(r=t.sent,console.group("Loading species..."),n=r.flat(),o=[],a=0;a<n.length;a++)i=fetch(n[a]),o.push(i);return t.next=10,Promise.all(o).then((function(t){return t.map((function(t){return t.json()}))}));case 10:return c=t.sent,t.next=13,Promise.all(c);case 13:return(s=t.sent).forEach((function(t){return console.log("Loading species --\x3e ".concat(t.name,"..."))})),y=s,t.abrupt("return",s);case 19:t.prev=19,t.t0=t.catch(0),console.error("Error: ",t.t0.message);case 22:return t.prev=22,console.group("Success: All species is loaded!"),console.groupEnd(),console.groupEnd(),t.finish(22);case 27:case"end":return t.stop()}}),t,null,[[0,19,22,27]])})));return function(e){return t.apply(this,arguments)}}();function E(t){return _.apply(this,arguments)}function _(){return(_=p(d().mark((function t(e){var r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(e).then((function(t){return x(t)})).then((function(t){return L(t)}));case 3:for(n in console.info("Creating table..."),r=function(t){m[t].residents.forEach((function(e){return v.push(Object.assign({},{planet:m[t].planet}))}))},m)r(n);v.forEach((function(t,e){Object.assign(t,{residentName:g[e].name,species:y[e].name})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error: ",t.t0.message);case 12:return t.prev=12,t.abrupt("return",v);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}function S(){return(S=p(d().mark((function t(e){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{j(),E("https://swapi.dev/api/planets/?page=".concat(e)).then((function(t){sessionStorage.setItem("swapi",JSON.stringify(t)),console.table(t)}))}catch(t){console.error("Error: ",t.message)}finally{console.log("Loading will be success!")}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){sessionStorage.setItem("swapi",[])}var O=document.querySelector(".load-span"),k=document.querySelector(".status-gif"),P=document.querySelector(".main-table"),T=document.querySelectorAll("button"),I=document.querySelector(".loader"),N=document.getElementById("page-1"),R=document.getElementById("page-2"),C=document.getElementById("page-3"),G=document.getElementById("page-4");function A(t,e){t.classList.add("focus-button"),e.forEach((function(t){return t.classList.remove("focus-button")}))}document.addEventListener("DOMContentLoaded",(function(){!function(t){!function(t){S.apply(this,arguments)}(1);var e=setInterval((function(){l()?(O.classList.remove("load-span_disabled"),k.classList.add("status-gif_disabled")):O.classList.add("load-span_disabled")}),500);setTimeout((function(){if(l()){clearInterval(e),console.log("timer off");var t=u(),r=s(t,0,10);P.appendChild(r)}}),4e3)}()})),T.forEach((function(t,e){t.addEventListener("click",(function(){var t,r;t=10*e,r=10*e+10,P.removeChild(document.querySelector(".table-body")),function(t,e){var r=u(),n=s(r,t,e);I.classList.remove("loader_disabled"),n.classList.add("table-body_disabled"),setTimeout((function(){P.appendChild(n),n.classList.remove("table-body_disabled")}),3e3)}(t,r),setTimeout((function(){return I.classList.add("loader_disabled")}),2e3),0===e&&A(N,[R,C,G]),1===e&&A(R,[N,C,G]),2===e&&A(C,[N,R,G]),3===e&&A(G,[N,R,C])}))}))})()})();