(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{137:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(16),i=c.n(s),r=c(10),a=c.n(r),j=c(24),d=c(15),o=c(20),b=c.n(o),h=c(8),l=(c(135),c(7)),p=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(l.jsxs)(h.j,{id:t,children:[Object(l.jsx)(h.k,{children:"\u042d\u0442\u043e \u0442\u0438\u043f\u0430 \u0442\u0435\u0441\u0442"}),n&&Object(l.jsx)(h.h,{header:Object(l.jsx)(h.i,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(l.jsx)(h.e,{before:n.photo_200?Object(l.jsx)(h.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(l.jsxs)(h.h,{header:Object(l.jsx)(h.i,{mode:"secondary",children:"Navigation Example"}),children:[Object(l.jsx)(h.g,{children:Object(l.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"321314"})}),Object(l.jsx)(h.g,{children:Object(l.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"321314"})})]})]})},O=c.p+"static/media/persik.ae9f0072.png",u=(c(137),function(e){return Object(l.jsxs)(h.j,{id:e.id,children:[Object(l.jsx)(h.k,{left:Object(l.jsx)(h.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(l.jsx)("img",{className:"Persik",src:O,alt:"Persik The Cat"})]})}),x=function(){var e=Object(n.useState)("bright_light"),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)("home"),r=Object(d.a)(i,2),o=r[0],O=r[1],x=Object(n.useState)(null),f=Object(d.a)(x,2),m=f[0],g=f[1],k=Object(n.useState)(Object(l.jsx)(h.m,{size:"large"})),y=Object(d.a)(k,2),v=y[0],w=y[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,g(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;"VKWebAppUpdateConfig"===c&&s(n.scheme)})),function(){e.apply(this,arguments)}()}),[]);var C=function(e){O(e.currentTarget.dataset.to)};return Object(l.jsx)(h.f,{scheme:c,children:Object(l.jsx)(h.a,{children:Object(l.jsx)(h.b,{children:Object(l.jsx)(h.o,{popout:v,children:Object(l.jsx)(h.n,{children:Object(l.jsxs)(h.p,{activePanel:o,children:[Object(l.jsx)(p,{id:"home",fetchedUser:m,go:C}),Object(l.jsx)(u,{id:"persik",go:C})]})})})})})})};a.a.send("VKWebAppInit"),i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.5baecc06.chunk.js.map