import{_ as n,a as t,b as a,c as s,i as c,s as i,d as o,S as r,e as u,g as e,h as f,k as l,m as d,n as h,o as m,N as v,r as p,A as I,B as g,O as k,I as E,J as q,K as y,P as S}from"./client.fd46c72f.js";import{e as j}from"./index.62fee899.js";function x(n){var t,a,s,c;return{c:function(){t=u("div"),a=u("div"),this.h()},l:function(n){t=e(n,"DIV",{class:!0});var s=f(t);a=e(s,"DIV",{class:!0}),f(a).forEach(l),s.forEach(l),this.h()},h:function(){d(a,"class","inner svelte-1p0qk2m"),d(t,"class","middle svelte-1p0qk2m")},m:function(n,s){h(n,t,s),m(t,a),c=!0},i:function(n){c||(y(function(){s||(s=v(a,D,{duration:1e3},!0)),s.run(1)}),c=!0)},o:function(n){s||(s=v(a,D,{duration:1e3},!1)),s.run(0),c=!1},d:function(n){n&&l(t),n&&s&&s.end()}}}function C(n){var t,a,s=n[0]&&x();return{c:function(){t=u("section"),s&&s.c(),this.h()},l:function(n){t=e(n,"SECTION",{class:!0});var a=f(t);s&&s.l(a),a.forEach(l),this.h()},h:function(){d(t,"class"," svelte-1p0qk2m")},m:function(n,c){h(n,t,c),s&&s.m(t,null),a=!0},p:function(n,a){p(a,1)[0];n[0]?s?I(s,1):((s=x()).c(),I(s,1),s.m(t,null)):s&&(S(),g(s,1,1,function(){s=null}),k())},i:function(n){a||(I(s),a=!0)},o:function(n){g(s),a=!1},d:function(n){n&&l(t),s&&s.d()}}}function D(n,t){var a=getComputedStyle(n).transform.replace("none","");return{delay:t.delay||0,duration:t.duration||400,easing:t.easing||j,css:function(n,t){return"transform: ".concat(a," scale(").concat(n,")")}}}function N(n,t,a){var s,c;return E(function(){c=setInterval(function(){a(0,s=!s)},1e3)}),q(function(){c&&clearInterval(c)}),[s]}export default(function(u){function e(n){var r;return t(this,e),r=a(this,s(e).call(this)),c(o(r),n,N,C,i,{}),r}return n(e,r),e}());