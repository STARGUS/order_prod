(this.webpackJsonptext=this.webpackJsonptext||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(8),a=c.n(i),l=(c(13),c(14),c(5)),r=c(0),d=Object(n.createContext)(),o=function(e){function t(){l.a.client.init({apiKey:"AIzaSyBc5Hz3pajKIjMGTjao4T5erjrzh6mp19g",clientId:"172260655751-r690rhf5ujtmhs9f3lvb73f12s30uvc0.apps.googleusercontent.com",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:["https://www.googleapis.com/auth/spreadsheets"]}).then((function(){console.log("true"),l.a.auth2.getAuthInstance().isSignedIn.listen(c),c(l.a.auth2.getAuthInstance().isSignedIn.get())}),(function(e){console.log("true"),console.log(JSON.stringify(e,null,2))}))}function c(e){e&&l.a.client.sheets.spreadsheets.values.get({spreadsheetId:"1RybBkYKMBlUb-5u_124eX8X6hT2Dvas9eZ54fNPJaOs",range:"One"}).then((function(e){console.log(e.result)}),(function(e){console.log("Error: "+e.result.error.message)}))}Object(n.useEffect)((function(){l.a.load("client:auth2",t)}),[t]);return Object(r.jsx)(d.Provider,{value:{},children:e.children})},j=c(4),u=c(2);c(18),c(19);function b(e){var t=e.data,c=void 0===t?[]:t,s=e.now,i=e.widths,a=e.monthSelect,l=void 0===a?Function.prototype:a,d=Object(n.useRef)(),o=Object(n.useRef)(),j=Object(n.useState)(!1),b=Object(u.a)(j,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){o.current.innerText=d.current.options[d.current.value].text}),[h,s]),Object(r.jsxs)("div",{tabIndex:"-1",onMouseDown:function(){return d.current.click()},onBlur:function(e){m(!1)},style:{width:i?{widths:i,marginLeft:"0"}:"15rem"},onClick:function(e){m(!h)},className:h?" selectric-wrapper selectric-js-select-time selectric-belowselectric-open selectric-focus ":"selectric-wrapper selectric-js-select-time selectric-below",children:[Object(r.jsx)("div",{className:"selectric-hide-select",children:Object(r.jsxs)("select",{onFocus:console.log("\u0424\u043e\u043a\u0443\u0441"),onBlur:function(e){m(!1)},tabIndex:"-1",ref:d,className:"js-select-time",name:"ShippingCalculateForm[data]",children:[Object(r.jsx)("option",{value:"0",children:s||"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"},"op"),c.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("option",{value:e.id,children:e.data},"opt"+t)})}))]})}),Object(r.jsxs)("div",{className:"selectric",children:[Object(r.jsx)("span",{ref:o,className:"label"}),Object(r.jsx)("b",{className:"button",children:"\u25be"})]}),h&&Object(r.jsx)("div",{className:"selectric-items",style:{display:"block",zIndex:"29",width:"100%"},children:Object(r.jsx)("div",{className:"selectric-scroll",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"highlighted","data-index":"0",onClick:function(e){m(!h),d.current.options[e.target.dataset.index].selected=!0},children:s||"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"},"l"),c.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{"data-index":e.id,onClick:function(e){m(!h),d.current.options[e.target.dataset.index].selected=!0,l(e.target.dataset.index)},children:e.data},"li"+t)})}))]})})}),Object(r.jsx)("input",{className:"selectric-input",tabIndex:"0"})]},s)}function h(e){var t=e.workshop,c=e.quantity,s=e.id,i=e.addGoodsCount,a=void 0===i?Function.prototype:i,l=e.removeGoodsCount,d=void 0===l?Function.prototype:l,o=Object(n.useRef)();return Object(n.useEffect)((function(){o.current.value=+c.toFixed(1)}),[c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"order__info__item",children:[Object(r.jsx)(b,{data:t},"links"+s),Object(r.jsxs)("div",{className:"info--count",children:[Object(r.jsx)("div",{className:"order__info__item__count",children:Object(r.jsx)("input",{ref:o,type:"text",className:"input",placeholder:"1",name:"CountGoodsOrder",onBlur:function(){a(s,+o.current.value),console.log(o.current.value)}})}),Object(r.jsxs)("div",{style:{position:"relative",display:"block"},children:[Object(r.jsx)("div",{onClick:function(){return a(s)},className:"item__add",children:"\u2039"}),Object(r.jsx)("div",{className:"item__remove",onClick:function(){return d(s,c)},children:"\u2039"})]})]})]}),Object(r.jsxs)("div",{className:"order__info_comment",children:[Object(r.jsx)("label",{className:"label",htmlFor:"inputKomProduct",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0442\u043e\u0432\u0430\u0440\u0443"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{name:"inputKomProduct",type:"text",className:"input",placeholder:"..."})})]})]})}function m(){var e=new Date,t=Object(n.useState)(e.getDate()+1),c=Object(u.a)(t,2),s=c[0],i=(c[1],Object(n.useState)(e.getMonth()+1)),a=Object(u.a)(i,2),l=a[0],d=(a[1],Object(n.useState)()),o=Object(u.a)(d,2),m=o[0],O=o[1],x=Object(n.useState)(e.getFullYear()),f=Object(u.a)(x,2),v=f[0],p=(f[1],Object(n.useState)(32-new Date(v,l,32).getDate())),g=Object(u.a)(p,2),w=g[0],N=g[1],y=Object(n.useState)([]),_=Object(u.a)(y,2),k=_[0],C=_[1],S=[],F=Object(n.useState)([{id:0,quantity:1}]),L=Object(u.a)(F,2),q=L[0],I=L[1],B=[{id:1,data:"\u042f\u043d\u0432\u0430\u0440\u044c"},{id:2,data:"\u0424\u0435\u0432\u0440\u0430\u043b\u044c"},{id:3,data:"\u041c\u0430\u0440\u0442"},{id:4,data:"\u0410\u043f\u0440\u0435\u043b\u044c"},{id:5,data:"\u041c\u0430\u0439"},{id:6,data:"\u0418\u044e\u043d\u044c"},{id:7,data:"\u0418\u044e\u043b\u044c"},{id:8,data:"\u0410\u0432\u0433\u0443\u0441\u0442"},{id:9,data:"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c"},{id:10,data:"\u041e\u043a\u0442\u044f\u0431\u0440\u044c"},{id:11,data:"\u041d\u043e\u044f\u0431\u0440\u044c"},{id:12,data:"\u0414\u0435\u043a\u0430\u0431\u0440\u044c"}],E=[{id:1,data:v},{id:2,data:v+1},{id:3,data:v+2}],D=[{id:1,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21161"},{id:2,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21162"},{id:3,data:"\u041a\u0443\u0445\u043d\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u21163"}];Object(n.useEffect)((function(){O((function(){for(var e=1;e<=B.length;e++)if(B[e].id===l)return B[e].data}))}),[B,l,v]),Object(n.useEffect)((function(){for(var e=1;e<=w;e++)S[e]={id:e,data:e};C(S)}),[w]);var M=function(e,t){var c=q.map((function(c){return c.id===e?t?Object(j.a)(Object(j.a)({},c),{},{quantity:t}):Object(j.a)(Object(j.a)({},c),{},{quantity:c.quantity+1}):c}));I(c)},z=function(e,t){if(t>1){var c=q.map((function(t){return t.id===e&&t.quantity>=2?Object(j.a)(Object(j.a)({},t),{},{quantity:t.quantity-1}):t}));I(c)}1===t&&G(e)},G=function(e){if(q.length>1){var t=q.filter((function(t){return t.id!==e}));I(t)}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"order__content",children:[Object(r.jsx)("div",{className:"label--left",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0449\u0438\u043a\u0430"}),Object(r.jsxs)("div",{style:{marginBottom:"5vw"},children:[Object(r.jsx)("div",{className:"label--sm",children:"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435. \u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043b\u0430\u043d \u0437\u0430\u043a\u0443\u043f\u043e\u043a \u0437\u0430 2-3 \u0434\u043d\u044f \u0438 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043d\u0435\u0439 \u0432\u043f\u0435\u0440\u0451\u0434. \u041d\u0435 \u0433\u043e\u043d\u044f\u0439\u0442\u0435 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0437\u0430 \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u044b\u043c \u043f\u0443\u0447\u043a\u043e\u043c \u0437\u0435\u043b\u0435\u043d\u0438 \u0438\u043b\u0438 \u043a\u0438\u0441\u0442\u043e\u0447\u043a\u043e\u0439 \u0434\u043b\u044f \u043f\u0443\u043f\u043a\u0430. \u041f\u043e\u043d\u044f\u0442\u043d\u043e, \u0447\u0442\u043e \u0431\u044b\u0432\u0430\u044e\u0442 \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0435 \u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u043f\u043e\u043a\u0443\u043f\u043e\u043a, \u043d\u043e \u043d\u0435 \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0439\u0442\u0435 \u044d\u0442\u0438\u043c."}),Object(r.jsx)("div",{className:"label--mar",children:"\u0412\u0430\u0448 \u0446\u0435\u0445"}),Object(r.jsx)(b,{data:D},"link1"),Object(r.jsx)("div",{className:"label--mar",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(r.jsx)(b,{data:[{id:1,data:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:2,data:"\u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0439"},{id:3,data:"\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432"}]},"link2"),Object(r.jsx)("small",{className:"label--sm label--mar",children:"\u0412\u042b\u0411\u0415\u0420\u0418\u0422\u0415 \u0414\u0410\u0422\u0423 \u041f\u041e\u0421\u0422\u0410\u0412\u041a\u0418"}),Object(r.jsxs)("div",{className:"order__date",children:[Object(r.jsx)(b,{data:k,now:s,widths:"3rem",wids:"3rem"},"link3"),Object(r.jsx)(b,{monthSelect:function(e){var t=new Date(v,e-1,32).getDate();N(32-t),console.log(e,w,t)},data:B,now:m,widths:"7rem",wids:"8.2rem"},"link4"),Object(r.jsx)(b,{data:E,now:v,widths:"5.125rem",wids:"7.625rem"},"link5")]},"lin1")]}),Object(r.jsx)("div",{className:"label--left",children:"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(r.jsxs)("div",{className:"form__order__info",children:[Object(r.jsx)("small",{className:"label--sm",children:"\u0414\u0410\u041d\u041d\u042b\u0415 \u041e \u0422\u041e\u0412\u0410\u0420\u0410\u0425"}),Object(r.jsx)("div",{children:q.length>=1&&q.map((function(e){return Object(r.jsx)(h,{quantity:e.quantity,workshop:D,addGoodsCount:M,id:e.id,removeGoodsCount:z},"g"+e.id)}))}),Object(r.jsxs)("div",{className:"btn btn-secondary",onClick:function(){return function(){for(var e=[],t=0;t<q.length;t++)e[t]={id:q[t].id,quantity:q[t].quantity};e[q.length]={id:q.length,quantity:1},setTimeout((function(){I(e),console.log(e)}),100)}()},children:[Object(r.jsx)("span",{children:Object(r.jsx)("svg",{className:"icon icon-plus",children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 14 14",fontWeight:"500",width:"14px",height:"14px",children:Object(r.jsx)("path",{fillRule:"evenodd",fill:"#6ab04c",d:"M13.000,8.000 L8.000,8.000 L8.000,13.000 C8.000,13.552 7.552,14.000 7.000,14.000 C6.448,14.000 6.000,13.552 6.000,13.000 L6.000,8.000 L1.000,8.000 C0.448,8.000 0.000,7.552 0.000,7.000 C0.000,6.448 0.448,6.000 1.000,6.000 L6.000,6.000 L6.000,1.000 C6.000,0.448 6.448,0.000 7.000,0.000 C7.552,0.000 8.000,0.448 8.000,1.000 L8.000,6.000 L13.000,6.000 C13.552,6.000 14.000,6.448 14.000,7.000 C14.000,7.552 13.552,8.000 13.000,8.000 Z"})})})}),Object(r.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})]}),Object(r.jsx)("div",{className:"label--left",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"label--sm",children:"\u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u041a\u0430\u043a\u0438\u0435 \u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b \u0438 \u0432 \u043a\u0430\u043a\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438:"}),Object(r.jsx)("textarea",{className:"textarea label--mar"})]})]}),Object(r.jsx)("div",{className:"label--left",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u041f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0435 / \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u0437\u0430\u043a\u0430\u0437\u0443:"}),Object(r.jsx)("textarea",{className:"textarea",style:{marginTop:"1rem",marginRight:"2rem",width:"80%",height:"5vw"}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{style:{marginBottom:"1rem"},className:"btn btn-primary",children:Object(r.jsx)("span",{children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})})]})]})})}function O(){return Object(r.jsx)(r.Fragment,{})}c(20);function x(){var e=Object(n.useState)(document.documentElement.clientWidth),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(u.a)(i,2),l=a[0],d=a[1];return window.addEventListener("resize",(function(){return s(document.documentElement.clientWidth)})),Object(n.useEffect)((function(){c>=560&&(d(""),window.pageYOffset>=16?d("header--shut"):d(""),window.onscroll=function(){window.pageYOffset>=16?d("header--shut"):d("")})}),[c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{onClick:function(){return console.log(c)},className:l?l+" header":" header",children:Object(r.jsx)("div",{className:"header--inner",children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("img",{className:"header--img",src:"logowhite.png",alt:"a"})})})}),Object(r.jsxs)("div",{className:"header--nav",children:[Object(r.jsx)("div",{className:"header--breadcrumbs",children:Object(r.jsxs)("ul",{className:"breadcrumbs",children:[Object(r.jsx)("li",{className:"breadcrumbs__item",children:Object(r.jsx)("a",{href:"/",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlnsa:"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"1rem",height:"0.8rem",viewBox:"0 0 228.6 187.5",style:{enableBackground:"new 0 0 228.6 187.5"},xmlSpace:"preserve",children:[Object(r.jsx)("defs",{}),Object(r.jsx)("path",{d:"M174.7,163.5h-26v-62.1H79.9v62.1h-26V77.4l60.4-47l60.4,47V163.5z M103.9,125.5h20.8v34.4h-20.8V125.5z M228.6,89L114.3,0 L65.8,37.8v-20h-24v38.7L0,89l14.7,18.9l15.2-11.8v91.4h168.8V96.1l15.2,11.8L228.6,89z"})]})})}),Object(r.jsx)("li",{className:"breadcrumbs__item",children:Object(r.jsx)("a",{href:"https://lukino.ru/products",children:"\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u0435\u0440\u043c\u0443"})})]})}),Object(r.jsx)("div",{className:"label",children:"\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043d\u0430 \u0444\u0435\u0440\u043c\u0443"})]})]})}c(21),c(22),c(23),c(24),c(25);function f(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(m,{}),Object(r.jsx)(O,{})]})}var v=function(){return Object(r.jsx)(o,{children:Object(r.jsx)(f,{})})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.50410c90.chunk.js.map