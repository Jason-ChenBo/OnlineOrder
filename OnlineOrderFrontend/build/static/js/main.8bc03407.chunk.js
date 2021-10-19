(this["webpackJsonpdoordash-app"]=this["webpackJsonpdoordash-app"]||[]).push([[0],{142:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(24),s=n.n(r),i=(n(142),n(30)),o=n(227),u=n(225),l=n(69),j=n(132),d=n(63),b=n(130),h=n(224),f=n(222),m=function(e){var t="/login?username=".concat(e.username,"&password=").concat(e.password);return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to log in")}))},O=function(e){return fetch("/restaurant/".concat(e,"/menu")).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get menus");return e.json()}))},g=function(){return fetch("/restaurants").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get restaurants");return e.json()}))},p=function(e){return fetch("/order/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to add menu item to shopping cart")}))},x=n(136),y=n(9),S=l.a.Option,v=function(e){var t=e.itemId,n=Object(c.useState)(!1),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(y.jsx)(d.a,{title:"Add to shopping cart",children:Object(y.jsx)(b.a,{loading:r,type:"primary",icon:Object(y.jsx)(x.a,{}),onClick:function(){s(!0),p(t).then((function(){return j.b.success("Successfully add item")})).catch((function(e){return j.b.error(e.message)})).finally((function(){s(!1)}))}})})},w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(i.a)(r,2),o=s[0],u=s[1],d=Object(c.useState)([]),b=Object(i.a)(d,2),m=b[0],p=b[1],x=Object(c.useState)(!1),w=Object(i.a)(x,2),I=w[0],F=w[1],C=Object(c.useState)(!1),P=Object(i.a)(C,2),T=P[0],E=P[1];return Object(c.useEffect)((function(){E(!0),g().then((function(e){p(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){E(!1)}))}),[]),Object(c.useEffect)((function(){o&&(F(!0),O(o).then((function(e){a(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){F(!1)})))}),[o]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(l.a,{value:o,onSelect:function(e){return u(e)},placeholder:"Select a restaurant",loading:T,style:{width:300},onChange:function(){},children:m.map((function(e){return Object(y.jsx)(S,{value:e.id,children:e.name})}))}),o&&Object(y.jsx)(h.b,{style:{marginTop:20},loading:I,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},dataSource:n,renderItem:function(e){return Object(y.jsx)(h.b.Item,{children:Object(y.jsxs)(f.a,{title:e.name,extra:Object(y.jsx)(v,{itemId:e.id}),children:[Object(y.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:340,width:"100%",display:"block"}}),"Price: ".concat(e.price)]})})}})]})},I=n(125),F=n(126),C=n(135),P=n(131),T=n(223),E=n(226),k=n(228),N=n(229),L=function(e){Object(C.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(I.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),console.log("Received values of form: ",t),m(t).then((function(){j.b.success("Login Successful"),e.props.onSuccess()})).catch((function(e){j.b.error(e.message)})).finally((function(){e.setState({loading:!1})}))},e}return Object(F.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(T.a,{name:"normal_login",className:"login-form",onFinish:this.onFinish,style:{width:300,margin:"auto"},children:[Object(y.jsx)(T.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(y.jsx)(E.a,{prefix:Object(y.jsx)(k.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(y.jsx)(T.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(y.jsx)(E.a.Password,{prefix:Object(y.jsx)(N.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(y.jsx)(T.a.Item,{children:Object(y.jsx)(T.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0})}),Object(y.jsx)(T.a.Item,{children:Object(y.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})}}]),n}(c.Component),U=L,A=l.a.Option;function B(e){var t=e.itemId,n=Object(c.useState)(!1),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(y.jsx)(d.a,{title:"Add to shopping cart",children:Object(y.jsx)(b.a,{loading:r,type:"primary",icon:Object(y.jsx)(x.a,{}),onClick:function(){s(!0),p(t).then((function(){return j.b.success("Successfully add item")})).catch((function(e){return j.b.error(e.message)})).finally((function(){s(!1)}))}})})}var H=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),u=o[0],d=o[1],b=Object(c.useState)([]),m=Object(i.a)(b,2),p=m[0],x=m[1],S=Object(c.useState)(!1),v=Object(i.a)(S,2),w=v[0],I=v[1],F=Object(c.useState)([]),C=Object(i.a)(F,2),P=C[0],T=C[1];return Object(c.useEffect)((function(){d(!0),g().then((function(e){x(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){d(!1)}))}),[]),Object(c.useEffect)((function(){a&&(I(!0),O(a).then((function(e){T(e)})).catch((function(e){j.b.error(e.message)})).finally((function(){I(!1)})))}),[a]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(l.a,{value:a,loading:u,style:{width:300},placeholder:"Select a restaurant",onChange:function(){},onSelect:function(e){return r(e)},children:p.map((function(e){return Object(y.jsx)(A,{value:e.id,children:e.name},e.id)}))}),a&&Object(y.jsx)(h.b,{style:{marginTop:20},loading:w,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},dataSource:P,renderItem:function(e){return Object(y.jsx)(h.b.Item,{children:Object(y.jsxs)(f.a,{title:e.name,extra:Object(y.jsx)(B,{itemId:e.id}),children:[Object(y.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:"auto",width:"100%",display:"block"}}),"Price: ",e.price]})})}})]})},q=o.a.Header,J=o.a.Content,D=u.a.Title;var M=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(y.jsxs)(o.a,{style:{height:"100vh"},children:[Object(y.jsx)(q,{children:Object(y.jsxs)("div",{className:"header",style:{display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)(D,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"Lai Food"}),n&&Object(y.jsx)("div",{children:Object(y.jsx)(H,{})})]})}),Object(y.jsx)(J,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(y.jsx)(w,{}):Object(y.jsx)(U,{onSuccess:function(){return a(!0)}})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),R()}},[[220,1,2]]]);
//# sourceMappingURL=main.8bc03407.chunk.js.map