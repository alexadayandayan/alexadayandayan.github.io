(this.webpackJsonpcrud2=this.webpackJsonpcrud2||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){},196:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(54),s=c.n(n),r=(c(167),c(168),c(12)),l=c(207),i=c(210),j=c(208),o=c(209),d=c(112),b=c(77),u=c.n(b),h=c(7),O=c(6);function x(){Object(h.n)();var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),b=Object(r.a)(s,2),x=b[0],m=b[1],p=Object(a.useState)(""),f=Object(r.a)(p,2),S=f[0],g=f[1],C=Object(a.useState)(!1),v=Object(r.a)(C,2),w=(v[0],v[1]),N=Object(a.useState)(null),P=Object(r.a)(N,2);P[0],P[1];Object(a.useEffect)((function(){I()}),[]);var I=function(){n([]),g(""),u.a.get("https://6501cdc9736d26322f5c5038.mockapi.io/ims/subscriber/").then((function(e){console.log(e.data),n(e.data)}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"search-form__error",children:S}),Object(O.jsxs)(l.a,{className:"search-form d-flex",children:[Object(O.jsx)(l.a.Field,{className:"phone-search",children:Object(O.jsx)("input",{required:!0,type:"number",placeholder:"Phone Number",onChange:function(e){return m(e.target.value)}})}),Object(O.jsx)(i.a,{onClick:function(){n([]),g(""),u.a.get("https://6501cdc9736d26322f5c5038.mockapi.io/ims/subscriber/".concat(x)).then((function(e){n([e.data])})).catch((function(e){e.response&&g("Subscriber not found")}))},type:"submit",disabled:!x,children:"Submit"})]}),Object(O.jsxs)(j.a,{singleLine:!0,children:[Object(O.jsxs)(j.a.Header,{children:[Object(O.jsxs)(j.a.Row,{children:[Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",children:"Phone Number"}),Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",children:"Username"}),Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",children:"Password"}),Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",children:"Domain"}),Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",children:"Status"}),Object(O.jsx)(j.a.HeaderCell,{colSpan:"2",children:"Call Forward No Reply"}),Object(O.jsx)(j.a.HeaderCell,{rowSpan:"2",colSpan:"2",children:"Actions"})]}),Object(O.jsxs)(j.a.Row,{children:[Object(O.jsx)(j.a.HeaderCell,{children:"Provisioned"}),Object(O.jsx)(j.a.HeaderCell,{children:"Destination"})]})]}),Object(O.jsx)(j.a.Body,{children:c.map((function(e){return Object(O.jsxs)(j.a.Row,{children:[Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Phone Number: "}),e.phoneNumber]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Username: "}),e.username]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Password: "}),e.password]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Domain: "}),e.domain]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Status: "}),e.status]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Provisioned: "}),"true"===e.features.callForwardNoReply.provisioned?"true":"false"]}),Object(O.jsxs)(j.a.Cell,{children:[Object(O.jsx)("span",{children:"Destination: "}),e.features.callForwardNoReply.destination]}),Object(O.jsx)(j.a.Cell,{className:"p-0",children:Object(O.jsx)(d.b,{to:"/update",children:Object(O.jsx)(i.a,{className:"submit",onClick:function(){return function(e){var t=e.phoneNumber,c=e.username,a=e.password,n=e.domain,s=e.status,r=e.provisioned;localStorage.setItem("Phone Number",t),localStorage.setItem("Username",c),localStorage.setItem("Password",a),localStorage.setItem("Domain",n),localStorage.setItem("Status",s),localStorage.setItem("Provisioned",r)}(e)},children:"Update"})})}),Object(O.jsx)(j.a.Cell,{className:"p-0",children:Object(O.jsxs)(o.a,{trigger:Object(O.jsx)(i.a,{className:"delete",children:"Delete"}),children:[Object(O.jsx)(o.a.Header,{children:"Delete Subscriber"}),Object(O.jsx)(o.a.Content,{children:Object(O.jsx)("p",{children:"Are you sure you want to delete this Subscriber?"})}),Object(O.jsx)(o.a.Content,{children:Object(O.jsxs)("div",{class:"actions",children:[Object(O.jsx)(i.a,{children:"Cancel"}),Object(O.jsx)(i.a,{onClick:function(){return function(e){u.a.delete("https://6501cdc9736d26322f5c5038.mockapi.io/ims/subscriber/".concat(e)).then((function(){I(),w(!1)}))}(e.phoneNumber)},children:"Delete"})]})})]})})]})}))})]})]})}function m(){var e=Object(h.n)(),t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],s=c[1],j=Object(a.useState)(""),o=Object(r.a)(j,2),d=o[0],b=o[1],x=Object(a.useState)(""),m=Object(r.a)(x,2),p=m[0],f=m[1],S=Object(a.useState)(""),g=Object(r.a)(S,2),C=g[0],v=g[1],w=Object(a.useState)(""),N=Object(r.a)(w,2),P=N[0],I=N[1];Object(a.useEffect)((function(){s(localStorage.getItem("Phone Number")),b(localStorage.getItem("Username")),f(localStorage.getItem("Password")),v(localStorage.getItem("Domain")),I(localStorage.getItem("Status"))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h4",{children:["Phone Number: ",n]}),Object(O.jsxs)(l.a,{className:"update-form",children:[Object(O.jsxs)(l.a.Field,{children:[Object(O.jsx)("label",{children:"User Name"}),Object(O.jsx)("input",{placeholder:"User Name",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)(l.a.Field,{children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{placeholder:"Password",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(O.jsxs)(l.a.Field,{children:[Object(O.jsx)("label",{children:"Domain"}),Object(O.jsx)("input",{placeholder:"Domain",value:C,onChange:function(e){return v(e.target.value)}})]}),Object(O.jsxs)(l.a.Field,{children:[Object(O.jsx)("label",{children:"Status"}),Object(O.jsx)("input",{placeholder:"Status",value:P,onChange:function(e){return I(e.target.value)}})]}),Object(O.jsx)(i.a,{onClick:function(){e("/")},children:"Cancel"}),Object(O.jsx)(i.a,{className:"submit",type:"submit",onClick:function(){u.a.put("https://6501cdc9736d26322f5c5038.mockapi.io/ims/subscriber/".concat(n),{username:d,password:p,domain:C,status:P}).then((function(){e("/")}))},children:"Update"})]})]})}var p=function(){return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("h2",{children:"IMS Home Phone Subscriber Service"}),Object(O.jsx)(d.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{index:!0,element:Object(O.jsx)(x,{})}),Object(O.jsx)(h.a,{path:"/update",element:Object(O.jsx)(m,{})})]})})]})};c(195);s.a.render(Object(O.jsx)(p,{}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.4d40b9bb.chunk.js.map