(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),s=(t(9),t(1)),l="7f1a155e75f67e44e0523c33ce09ba60",m="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),u=Object(s.a)(o,2),i=u[0],p=u[1];return c.a.createElement("div",{className:"undefined"!=typeof i.main&&i.main.temp>16?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(m,"weather?q=").concat(t,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){p(e),r(""),console.log(e)}))}})),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name,", ",i.sys.country," "),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(i.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},i.weather[0].main))):""))};o.a.render(c.a.createElement(u,null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.d4443dd1.chunk.js.map