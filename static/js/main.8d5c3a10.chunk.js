(this.webpackJsonptext=this.webpackJsonptext||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(8),s=c.n(i),r=(c(13),c(14),c(2)),l=c(4),d=c(0),j=Object(a.createContext)(),o=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],i=(c[1],Object(a.useState)(!0)),s=Object(r.a)(i,2),o=s[0],u=(s[1],Object(a.useState)(1)),b=Object(r.a)(u,2),O=b[0],h=b[1],m=Object(a.useState)(20),x=Object(r.a)(m,2),f=x[0],p=(x[1],Object(a.useState)([])),v=Object(r.a)(p,2),g=v[0],w=v[1];function y(){return l.a.client.setApiKey("AIzaSyBc5Hz3pajKIjMGTjao4T5erjrzh6mp19g"),l.a.client.load(["https://sheets.googleapis.com/$discovery/rest?version=v4"]).then((function(){console.log("GAPI client loaded for API")}),(function(e){console.error("Error loading GAPI client for API",e)}))}Object(a.useEffect)((function(){l.a.load("client:auth2",(function(){l.a.client.init({apiKey:"AIzaSyBc5Hz3pajKIjMGTjao4T5erjrzh6mp19g",clientId:"106903715070017168642",scope:["https://www.googleapis.com/auth/spreadsheets"]}),l.a.auth2.init({apiKey:"AIzaSyBc5Hz3pajKIjMGTjao4T5erjrzh6mp19g",clientId:"106903715070017168642",scope:["https://www.googleapis.com/auth/spreadsheets"]}).then(y).then(l.a.client.sheets.spreadsheets.values.get({spreadsheetId:"1RybBkYKMBlUb-5u_124eX8X6hT2Dvas9eZ54fNPJaOs",range:"One"}).then((function(e){console.log("Response",e)}),(function(e){console.error("Execute error",e)})))}))}),[o]),Object(a.useEffect)((function(){console.log(n)}),[n]);var N=O*f,_=N-f;Object(a.useEffect)((function(){w(n.slice(_,N))}),[O,_,N,n]);var C={dataArray:n,goods:g,paginete:function(e){h(e)}};return Object(d.jsx)(j.Provider,{value:C,children:e.children})};var u=c(5);c(18),c(19);function b(e){e.day,e.month,e.year,e.types,e.names,e.Id,e.wids;var t=e.data,c=void 0===t?[]:t,n=e.now,i=e.widths,s=e.monthSelect,l=void 0===s?Function.prototype:s,j=Object(a.useRef)(),o=Object(a.useRef)(),u=Object(a.useState)(!1),b=Object(r.a)(u,2),O=b[0],h=b[1];return Object(a.useEffect)((function(){o.current.innerText=j.current.options[j.current.value].text}),[j.value,O,n]),Object(d.jsxs)("div",{tabindex:"-1",onBlur:function(e){h(!1)},style:{width:i?{widths:i,marginLeft:"0"}:"15rem"},onClick:function(e){h(!O)},className:O?" selectric-wrapper selectric-js-select-time selectric-belowselectric-open selectric-focus ":"selectric-wrapper selectric-js-select-time selectric-below",children:[Object(d.jsx)("div",{className:"selectric-hide-select",children:Object(d.jsxs)("select",{ref:j,className:"js-select-time",name:"ShippingCalculateForm[time]",children:[Object(d.jsx)("option",{value:"0",children:n||"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),c.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("option",{value:e.id,children:e.data})})}))]})}),Object(d.jsxs)("div",{className:"selectric",children:[Object(d.jsx)("span",{ref:o,className:"label"}),Object(d.jsx)("b",{className:"button",children:"\u25be"})]}),O&&Object(d.jsx)("div",{className:"selectric-items",style:{display:"block",zIndex:"29",width:"100%"},children:Object(d.jsx)("div",{className:"selectric-scroll",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"highlighted","data-index":"0",onClick:function(e){h(!O),j.current.options[e.target.dataset.index].selected=!0},children:n||"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),c.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{"data-index":e.id,onClick:function(e){h(!O),j.current.options[e.target.dataset.index].selected=!0,l(e.target.dataset.index)},children:e.data})})}))]})})}),Object(d.jsx)("input",{className:"selectric-input",tabindex:"0"})]})}function O(e){var t=e.workshop,c=e.quantity,n=e.id,i=e.addGoodsCount,s=void 0===i?Function.prototype:i,r=e.removeGoodsCount,l=void 0===r?Function.prototype:r,j=Object(a.useRef)();return Object(a.useEffect)((function(){j.current.value=c}),[c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"order__info__item",children:[Object(d.jsx)(b,{data:t}),Object(d.jsx)("div",{className:"order__info__item__count",children:Object(d.jsx)("input",{ref:j,type:"text",className:"input",placeholder:"1",name:"CountGoodsOrder",onBlur:function(){s(n,+j.current.value),console.log(j.current.value)}})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onClick:function(){return s(n)},className:"item__add",children:"\u2039"}),Object(d.jsx)("div",{className:"item__remove",onClick:function(){return l(n,c)},children:"\u2039"})]})]}),Object(d.jsxs)("div",{className:"order__info_comment",children:[Object(d.jsx)("label",{className:"label",for:"",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0442\u043e\u0432\u0430\u0440\u0443"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",className:"input",placeholder:"\u0422\u043e\u043b\u044c\u043a\u043e \u0436\u0435\u043b\u0442\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430"})})]})]})}function h(){var e=new Date,t=Object(a.useState)(e.getDate()+1),c=Object(r.a)(t,2),n=c[0],i=(c[1],Object(a.useState)(e.getMonth()+1)),s=Object(r.a)(i,2),l=s[0],j=(s[1],Object(a.useState)()),o=Object(r.a)(j,2),h=o[0],m=o[1],x=Object(a.useState)(e.getFullYear()),f=Object(r.a)(x,2),p=f[0],v=(f[1],Object(a.useState)(32-new Date(p,l,32).getDate())),g=Object(r.a)(v,2),w=g[0],y=g[1],N=Object(a.useState)([]),_=Object(r.a)(N,2),C=_[0],S=_[1],I=[],k=Object(a.useState)([{id:0,quantity:1}]),q=Object(r.a)(k,2),F=q[0],B=q[1],z=[{id:1,data:"\u042f\u043d\u0432\u0430\u0440\u044c"},{id:2,data:"\u0424\u0435\u0432\u0440\u0430\u043b\u044c"},{id:3,data:"\u041c\u0430\u0440\u0442"},{id:4,data:"\u0410\u043f\u0440\u0435\u043b\u044c"},{id:5,data:"\u041c\u0430\u0439"},{id:6,data:"\u0418\u044e\u043d\u044c"},{id:7,data:"\u0418\u044e\u043b\u044c"},{id:8,data:"\u0410\u0432\u0433\u0443\u0441\u0442"},{id:9,data:"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c"},{id:10,data:"\u041e\u043a\u0442\u044f\u0431\u0440\u044c"},{id:11,data:"\u041d\u043e\u044f\u0431\u0440\u044c"},{id:12,data:"\u0414\u0435\u043a\u0430\u0431\u0440\u044c"}],E=[{id:1,data:p},{id:2,data:p+1},{id:3,data:p+2}],G=[{id:1,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21161"},{id:2,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21162"},{id:3,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21163"}];Object(a.useEffect)((function(){m((function(){for(var e=1;e<=z.length;e++)if(z[e].id===l)return z[e].data}))}),[z,l,p]),Object(a.useEffect)((function(){for(var e=1;e<=w;e++)I[e]={id:e,data:e};S(I)}),[w]);var T=function(e,t){var c=F.map((function(c){return c.id===e?t?Object(u.a)(Object(u.a)({},c),{},{quantity:t}):Object(u.a)(Object(u.a)({},c),{},{quantity:c.quantity+1}):c}));B(c)},A=function(e,t){if(t>1){var c=F.map((function(t){return t.id===e&&t.quantity>=2?Object(u.a)(Object(u.a)({},t),{},{quantity:t.quantity-1}):t}));B(c)}1===t&&L(e)},L=function(e){if(F.length>1){var t=F.filter((function(t){return t.id!==e}));B(t)}};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"order__content",children:[Object(d.jsx)("div",{className:"label--left",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0449\u0438\u043a\u0430"}),Object(d.jsxs)("div",{style:{marginBottom:"5vw"},children:[Object(d.jsx)("div",{className:"label--sm",children:" \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435. \u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043b\u0430\u043d \u0437\u0430\u043a\u0443\u043f\u043e\u043a \u0437\u0430 2-3 \u0434\u043d\u044f \u0438 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043d\u0435\u0439 \u0432\u043f\u0435\u0440\u0451\u0434. \u041d\u0435 \u0433\u043e\u043d\u044f\u0439\u0442\u0435 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0437\u0430 \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u044b\u043c \u043f\u0443\u0447\u043a\u043e\u043c \u0437\u0435\u043b\u0435\u043d\u0438 \u0438\u043b\u0438 \u043a\u0438\u0441\u0442\u043e\u0447\u043a\u043e\u0439 \u0434\u043b\u044f \u043f\u0443\u043f\u043a\u0430. \u041f\u043e\u043d\u044f\u0442\u043d\u043e, \u0447\u0442\u043e \u0431\u044b\u0432\u0430\u044e\u0442 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0435 \u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u043f\u043e\u043a\u0443\u043f\u043e\u043a, \u043d\u043e \u043d\u0435 \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0439\u0442\u0435 \u044d\u0442\u0438\u043c."}),Object(d.jsx)("div",{className:"label--mar",children:"\u0412\u0430\u0448 \u0446\u0435\u0445"}),Object(d.jsx)(b,{data:G}),Object(d.jsx)("div",{className:"label--mar",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(d.jsx)(b,{data:[{id:1,data:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:2,data:"\u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0439"},{id:3,data:"\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432"}]}),Object(d.jsx)("small",{className:"label--sm label--mar",children:"\u0412\u042b\u0411\u0415\u0420\u0418\u0422\u0415 \u0414\u0410\u0422\u0423 \u041f\u041e\u0421\u0422\u0410\u0412\u041a\u0418"}),Object(d.jsxs)("div",{className:"order__date",children:[Object(d.jsx)(b,{data:C,now:n,widths:"4rem",wids:"6.5rem"}),Object(d.jsx)(b,{monthSelect:function(e){var t=new Date(p,e-1,32).getDate();y(32-t),console.log(e,w,t)},data:z,now:h,widths:"7rem",wids:"8.2rem"}),Object(d.jsx)(b,{data:E,now:p,widths:"5.125rem",wids:"7.625rem"})]})]}),Object(d.jsx)("div",{className:"label--left",children:"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(d.jsxs)("div",{className:"form__order__info",children:[Object(d.jsx)("small",{className:"label--sm",children:"\u0414\u0410\u041d\u041d\u042b\u0415 \u041e \u0422\u041e\u0412\u0410\u0420\u0410\u0425"}),Object(d.jsx)("div",{children:F.length>=1&&F.map((function(e){return Object(d.jsx)(O,{quantity:e.quantity,workshop:G,addGoodsCount:T,id:e.id,removeGoodsCount:A},"g"+e.id)}))}),Object(d.jsxs)("div",{className:"btn btn-secondary",onClick:function(){return function(){for(var e=[],t=0;t<F.length;t++)e[t]={id:F[t].id,quantity:F[t].quantity};e[F.length]={id:F.length,quantity:1},setTimeout((function(){B(e),console.log(e)}),100)}()},children:[Object(d.jsx)("span",{children:Object(d.jsx)("svg",{class:"icon icon-plus",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 14 14",fontWeight:"500",width:"14px",height:"14px",children:Object(d.jsx)("path",{"fill-rule":"evenodd",fill:"#6ab04c",d:"M13.000,8.000 L8.000,8.000 L8.000,13.000 C8.000,13.552 7.552,14.000 7.000,14.000 C6.448,14.000 6.000,13.552 6.000,13.000 L6.000,8.000 L1.000,8.000 C0.448,8.000 0.000,7.552 0.000,7.000 C0.000,6.448 0.448,6.000 1.000,6.000 L6.000,6.000 L6.000,1.000 C6.000,0.448 6.448,0.000 7.000,0.000 C7.552,0.000 8.000,0.448 8.000,1.000 L8.000,6.000 L13.000,6.000 C13.552,6.000 14.000,6.448 14.000,7.000 C14.000,7.552 13.552,8.000 13.000,8.000 Z"})})})}),Object(d.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})]}),Object(d.jsx)("div",{className:"label--left",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"label--sm",children:"\u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"\u041a\u0430\u043a\u0438\u0435 \u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u0432 \u043a\u0430\u043a\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438:"}),Object(d.jsx)("textarea",{className:"textarea label--mar"})]})]}),Object(d.jsx)("div",{className:"label--left",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"\u041f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 / \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u0437\u0430\u043a\u0430\u0437\u0443:"}),Object(d.jsx)("textarea",{className:"textarea",style:{marginTop:"1rem",marginRight:"2rem",width:"80%",height:"5vw"}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{style:{marginBottom:"1rem"},class:"btn btn-primary",children:Object(d.jsx)("span",{children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})})]})]})})}function m(){return Object(d.jsx)(d.Fragment,{})}function x(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:"\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u0435\u0440\u043c\u0443"})})}c(20),c(21),c(22),c(23);function f(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(h,{}),Object(d.jsx)(m,{})]})}var p=function(){return Object(d.jsx)(o,{children:Object(d.jsx)(f,{})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.8d5c3a10.chunk.js.map