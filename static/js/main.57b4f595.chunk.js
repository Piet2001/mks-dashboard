(this["webpackJsonpmks-dashboard"]=this["webpackJsonpmks-dashboard"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),i=(n(57),n(16)),o=n.n(i),u=n(25),j=n(9),d=n(27),b=n(7),l=(n(59),n(60),n(94)),h=n(95),p=n(41),f=n(1),x=function(){return Object(f.jsx)("div",{className:"header-wrapper",children:Object(f.jsx)(l.a,{className:"navbar",expand:"lg",children:Object(f.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(h.a,{className:"ml-auto",children:[Object(f.jsx)(d.b,{className:"link",to:"/mks-dashboard",children:Object(f.jsx)(p.b,{id:"icon",size:50})}),Object(f.jsx)(d.b,{className:"link",to:"/mks-dashboard/credits",children:Object(f.jsx)(p.a,{id:"icon",size:50})})]})})})})},O=(n(71),function(){return Object(f.jsx)("div",{className:"footer",children:Object(f.jsxs)("p",{className:"footer-text",children:["\xa9 Copyright 2021 | MKS-Dashboard | ",Object(f.jsx)("img",{src:"https://tokei.rs/b1/github/piet2001/mks-dashboard",alt:"SLOC"})]})})}),m=function(e){return Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(x,{headerTitle:e.title}),e.children,Object(f.jsx)("div",{className:"footer-wrapper",children:Object(f.jsx)(O,{})})]})},v=function(e){return Object(f.jsxs)("div",{children:["Welkom in het mks-dashboard.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Op deze pagina kun je verschillende gegevens over meldkamerspel vinden. Momenteel zijn wij nog bezig met de ontwikkeling hierdoor is het mogelijk dat niet alles werkt zoals het zou moeten. En zijn er weinig opties beschikbaar.",Object(f.jsx)("br",{}),"Wanneer meer functies beschikbaar komen ze op deze site.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]})};var g=function(){return Object(f.jsx)("div",{children:"Je bevind je nu op de voertuigen pagina"})};var k=function(){return Object(f.jsx)("div",{children:"Je bevind je nu op de gebouwen pagina"})},w=n(34),z=n.n(w);var y=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()("https://raw.githubusercontent.com/Piet2001/Teststuff/master/games.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return t(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(e){return n.apply(this,arguments)}function n(){return(n=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),n=0;case 2:if(!(n<t.length)){e.next=9;break}return e.next=5,N(t[n].code);case 5:t[n].avg=e.sent;case 6:n++,e.next=2;break;case 9:console.log(t),c(t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("length: ".concat(n.length)),Object(f.jsxs)("div",{children:["Op deze pagina vind je het gemiddelde aantal credits wat een melding in een versie opleverd.",function(){n.sort((function(e,t){return e.avg<t.avg?1:-1}));var e=0;return n.map((function(t){return e++,Object(f.jsxs)("h4",{children:["#",e," - ",t.code," - ",t.avg]})}))}()]})};function N(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Piet2001/Missionfiles-All-Versions/master/Missions/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){return e}));case 2:return n=e.sent,r=n.reduce((function(e,t){return e+t.average_credits}),0)/n.length,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(90);var S=function(){var e=Object(r.useState)("Default"),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://www.meldkamerspel.com/einsaetze.json/",{headers:{"Content-Type":"application/json"},withCredentials:!0});case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){return l(e)}))}),[n]),console.log(i),Object(f.jsx)(d.a,{children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/mks-dashboard/",children:Object(f.jsx)(m,{children:Object(f.jsx)(v,{setSessionId:c})})}),Object(f.jsx)(b.a,{exact:!0,path:"/mks-dashboard/vehicles",children:Object(f.jsx)(m,{children:Object(f.jsx)(g,{})})}),Object(f.jsx)(b.a,{exact:!0,path:"/mks-dashboard/buildings",children:Object(f.jsx)(m,{children:Object(f.jsx)(k,{})})}),Object(f.jsx)(b.a,{exact:!0,path:"/mks-dashboard/credits",children:Object(f.jsx)(m,{children:Object(f.jsx)(y,{})})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),M()}},[[91,1,2]]]);
//# sourceMappingURL=main.57b4f595.chunk.js.map