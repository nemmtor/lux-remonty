!function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([11,1,3,2]),n()}([,,,,,,,,function(e,t){const n=document.querySelector("form"),o=document.querySelector(".form__submit");n.addEventListener("submit",e=>{e.preventDefault(),o.disabled=!0;e.target.name.value,e.target.phone.value,e.target.msg.value;n.classList.add("form--loading"),setTimeout(()=>{n.reset(),n.classList.remove("form--loading"),n.classList.add("form--success")},1500)})},function(e,t){const n=document.querySelector(".cookies");document.querySelector(".cookies__accept").addEventListener("click",()=>{n.style.display="none"})},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(6);var o=n(4),r=n.n(o),a=(n(7),n(8),n(9),n(1)),i=n(3);a.a.registerPlugin(i.a);const c=document.querySelector(".nav__burger-container"),s=document.querySelectorAll(".nav__menu-item"),l=document.querySelector(".nav__menu");a.a.to(".nav__burger-container",{x:0,duration:.5});const u=a.a.timeline({paused:!0});document.addEventListener("DOMContentLoaded",()=>{u.to(".nav__menu",{yPercent:100,duration:.5,ease:"power3.out"}).to(".nav__menu-item",{opacity:1,duration:.5,stagger:.1,ease:"power2.out",y:0},"-=0.2").to(i.a.getRule(".nav__menu::after"),{opacity:1,duration:.5,ease:"power1.out"})});window.matchMedia("screen and (max-width: 768px)").matches&&(c.addEventListener("click",()=>{c.classList.toggle("active"),c.classList.toggle("closed");c.classList.contains("active")?u.timeScale(1).play():u.timeScale(3).reverse()}),s.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("active"),c.classList.add("closed"),u.timeScale(3).reverse()})}),window.addEventListener("click",e=>{l.contains(e.target)||u.isActive()||c.classList.contains("closed")||(c.classList.toggle("active"),c.classList.toggle("closed"),u.timeScale(3).reverse())}));a.a.timeline({repeat:-1,defaults:{stagger:1,duration:1,delay:2,ease:"power4.inOut"}}).to(".opinion",{xPercent:-100}).to(".opinion",{xPercent:-200}).to(".opinion",{xPercent:-300}).set(".opinion",{x:0,delay:0});a.a.timeline({repeat:-1,ease:"power3.inOut"}).fromTo(".footer__scroll-img",{yPercent:100},{yPercent:-100,duration:2}).set(".footer__scroll-img",{yPercent:100});var d=n(5);document.querySelectorAll("[data-scroll]").forEach(e=>{const{target:t}=e.dataset;e.addEventListener("click",()=>{Object(d.a)(t,{offset:-48})})});n(10);r.a.init(),window.onbeforeunload=()=>{window.scrollTo(0,0)}}]);
//# sourceMappingURL=main~f71cff67.f7ad559b9e3cdc912cfe.bundle.js.map