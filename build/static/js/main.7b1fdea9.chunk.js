(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),r=n.n(s),o=(n(25),n(11)),l=n(20),i=(n.p,n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-Link text-default ","aria-current":"page",to:"/",style:{margin:"10px",color:"#000"},children:"Home"})}),Object(d.jsx)("li",{className:"nav-item text-default",children:Object(d.jsx)(i.b,{className:"nav-Link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaulProps={title:"Your Title Here",searchBar:!0};var h=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)("div",{className:"border m-2 p-3",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]})},j=function(e){return Object(d.jsxs)("div",{className:"container w-75",children:[Object(d.jsx)("h3",{className:"text-center m-3",children:"Todos List"}),Object(d.jsx)("div",{className:"d-flex ",children:0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(d.jsx)(h,{todo:t,onDelete:e.onDelete},t.sno)}))})]})},u=function(){return Object(d.jsx)("footer",{className:"bg-dark  text-light py-3",style:{position:"fixed",bottom:"0",width:"100%"},children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 My Todolist"})})},m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Hello I am about function"}),Object(d.jsx)("p",{children:"A looks through its children and renders the first one that matches the current URL A looks through its children and renders the first one that matches the current URL A looks through its children and renders the first one that matches the current URL A looks through its children and renders the first one that matches the current URL A looks through its children and renders the first one that matches the current URL"})]})},x=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),i=l[0],b=l[1];return Object(d.jsxs)("div",{className:"container my-3 w-75",children:[Object(d.jsx)("h2",{className:"text-center",children:"Add a Todo List"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&i?(e.addTodo(c,i),s(""),b("")):alert("title and descrtipn can not be blank")},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:c,className:"form-control",id:"title",placeholder:"title",onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:i,className:"form-control",id:"desc",placeholder:"description",onChange:function(e){b(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success mt-2",children:"Add Todo"})]})]})},O=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){h(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},n=(localStorage.getItem("todos"),function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};h([].concat(Object(l.a)(r),[n])),console.log(n)}),c=Object(a.useState)(e),s=Object(o.a)(c,2),r=s[0],h=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"my todo list ",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{addTodo:n}),Object(d.jsx)(j,{todos:r,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(m,{})})]}),Object(d.jsx)(u,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.7b1fdea9.chunk.js.map