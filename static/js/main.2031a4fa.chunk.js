(this.webpackJsonpequus=this.webpackJsonpequus||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(5),o=n(6),c=n(8),r=n(7),i=n(1),l=n(4),u=n.n(l),h=n(18),j=(n(63),function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Max",submitted:!1},t.postDataHandler=function(){var e={title:t.state.title,body:t.state.content,author:t.state.author};u.a.post("/posts",e).then((function(e){console.log(e),t.props.history.replace("/posts")}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=Object(a.jsx)(h.a,{to:"/posts"})),Object(a.jsxs)("div",{className:"NewPost",children:[e,Object(a.jsx)("h2",{children:"Agregar Perfil"}),Object(a.jsx)("label",{children:"Nombre"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Descripci\xf3n"}),Object(a.jsx)("input",{type:"text",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),Object(a.jsx)("button",{onClick:this.postDataHandler,children:"Agregar"})]})}}]),n}(i.Component));e.default=j},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(5),o=n(6),c=n(8),r=n(7),i=n(1),l=n(4),u=n.n(l),h=n(18),j=(n(65),function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Max",submitted:!1},t.postDataHandler=function(){var e={title:t.state.title,body:t.state.content,author:t.state.author};u.a.post("/posts",e).then((function(e){console.log(e),t.props.history.replace("/posts")}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=Object(a.jsx)(h.a,{to:"/posts"})),Object(a.jsxs)("div",{className:"NewPrivileges",children:[e,Object(a.jsx)("h2",{children:"Agregar Privilegio"}),Object(a.jsx)("label",{children:"Nombre"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Descripci\xf3n"}),Object(a.jsx)("input",{type:"text",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),Object(a.jsx)("button",{onClick:this.postDataHandler,children:"Agregar"})]})}}]),n}(i.Component));e.default=j},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(5),o=n(6),c=n(8),r=n(7),i=n(1),l=n(4),u=n.n(l),h=n(18),j=(n(67),function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Max",submitted:!1},t.postDataHandler=function(){var e={title:t.state.title,body:t.state.content,author:t.state.author};u.a.post("/posts",e).then((function(e){console.log(e),t.props.history.replace("/posts")}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=Object(a.jsx)(h.a,{to:"/posts"})),Object(a.jsxs)("div",{className:"NewUser",children:[e,Object(a.jsx)("h2",{children:"Agregar Usuario"}),Object(a.jsx)("label",{children:"Nombre"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Perfil"}),Object(a.jsxs)("select",{value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})},children:[Object(a.jsx)("option",{value:"Max",children:"JC"}),Object(a.jsx)("option",{value:"Manu",children:"Rijo"})]}),Object(a.jsx)("label",{children:"Privilegio"}),Object(a.jsxs)("select",{value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})},children:[Object(a.jsx)("option",{value:"Max",children:"JC"}),Object(a.jsx)("option",{value:"Manu",children:"Rijo"})]}),Object(a.jsx)("label",{children:"Area"}),Object(a.jsxs)("select",{value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})},children:[Object(a.jsx)("option",{value:"Max",children:"JC"}),Object(a.jsx)("option",{value:"Manu",children:"Rijo"})]}),Object(a.jsx)("label",{children:"Jefe Superior"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Area de Influencia"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Tel\xe9fono"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Correo"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("button",{onClick:this.postDataHandler,children:"Agregar"})]})}}]),n}(i.Component));e.default=j},67:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(5),o=n(6),c=n(8),r=n(7),i=n(1),l=n(4),u=n.n(l),h=n(18),j=(n(69),function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Max",submitted:!1},t.postDataHandler=function(){var e={title:t.state.title,body:t.state.content,author:t.state.author};u.a.post("/posts",e).then((function(e){console.log(e),t.props.history.replace("/posts")}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var t=this,e=null;return this.state.submitted&&(e=Object(a.jsx)(h.a,{to:"/posts"})),Object(a.jsxs)("div",{className:"NewArea",children:[e,Object(a.jsx)("h2",{children:"Agregar Area"}),Object(a.jsx)("label",{children:"Nombre"}),Object(a.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(a.jsx)("label",{children:"Descripci\xf3n"}),Object(a.jsx)("input",{type:"text",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),Object(a.jsx)("button",{onClick:this.postDataHandler,children:"Agregar"})]})}}]),n}(i.Component));e.default=j},69:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),o=n(29),c=n.n(o),r=(n(36),n(37),n(5)),i=n(6),l=n(8),u=n(7),h=n(74),j=n(75),d=n(76),p=n(30),b=n(15),O=n(4),f=n.n(O),v=f.a.create({baseURL:"https://jsonplaceholder.typicode.com"});v.defaults.headers.common.Authorization="AUTH TOKEN FROM INSTANCE";var x=v,m=(n(56),function(t){return Object(a.jsxs)("article",{className:"Post",onClick:t.clicked,children:[Object(a.jsx)("h1",{children:t.title}),Object(a.jsx)("div",{className:"Info",children:Object(a.jsx)("div",{className:"Author",children:t.author})})]})}),g=(n(57),n(58),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={loadedPost:null},t.deletePostHandler=function(){f.a.delete("/posts/"+t.props.match.params.id).then((function(t){console.log(t)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.loadData()}},{key:"componentDidUpdate",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this;this.props.match.params.id&&(!this.state.loadedPost||this.state.loadedPost&&this.state.loadedPost.id!==+this.props.match.params.id)&&f.a.get("/posts/"+this.props.match.params.id).then((function(e){t.setState({loadedPost:e.data})}))}},{key:"render",value:function(){var t=Object(a.jsx)("p",{style:{textAlign:"center"},children:"Please select a Post!"});return this.props.match.params.id&&(t=Object(a.jsx)("p",{style:{textAlign:"center"},children:"Loading...!"})),this.state.loadedPost&&(t=Object(a.jsxs)("div",{className:"FullPost",children:[Object(a.jsx)("h1",{children:this.state.loadedPost.title}),Object(a.jsx)("p",{children:this.state.loadedPost.body}),Object(a.jsx)("div",{className:"Edit",children:Object(a.jsx)("button",{onClick:this.deletePostHandler,className:"Delete",children:"Delete"})})]})),t}}]),n}(s.Component)),y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={posts:[]},t.postSelectedHandler=function(e){t.props.history.push("/posts/"+e)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),x.get("/posts").then((function(e){var n=e.data.slice(0,4).map((function(t){return Object(b.a)(Object(b.a)({},t),{},{author:"Max"})}));t.setState({posts:n})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=Object(a.jsx)("p",{style:{textAlign:"center"},children:"Something went wrong!"});return this.state.error||(e=this.state.posts.map((function(e){return Object(a.jsx)(m,{title:e.title,author:e.author,clicked:function(){return t.postSelectedHandler(e.id)}},e.id)}))),Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{className:"Posts",children:e}),Object(a.jsx)(p.a,{path:this.props.match.url+"/:id",exact:!0,component:g})]})}}]),n}(s.Component),w=function(t){return function(e){Object(l.a)(s,e);var n=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={component:null},t}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({component:t.default})}))}},{key:"render",value:function(){var t=this.state.component;return t?Object(a.jsx)(t,Object(b.a)({},this.props)):null}}]),s}(s.Component)},k=(n(62),n(64),n(66),n(68),w((function(){return Promise.resolve().then(n.bind(null,62))}))),C=w((function(){return Promise.resolve().then(n.bind(null,66))})),N=w((function(){return Promise.resolve().then(n.bind(null,64))})),A=w((function(){return Promise.resolve().then(n.bind(null,68))})),P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={auth:!0},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"menu_bar",children:Object(a.jsxs)("a",{href:"#",className:"bt-menu",children:[Object(a.jsx)("span",{className:"icon-menu"}),"Men\xfa"]})}),Object(a.jsxs)("div",{className:"Blog",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",children:[Object(a.jsx)("span",{className:"icon-home"}),"Inicio"]})}),Object(a.jsxs)("li",{children:[Object(a.jsx)(j.a,{to:"/posts/",exact:!0,activeClassName:"my-active",activeStyle:{color:"#fa923f",textDecoration:"underline"},children:"Operaci\xf3n"}),Object(a.jsx)("span",{className:"icon-database"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(j.a,{to:{pathname:"/new-post",hash:"#submit",search:"?quick-submit=true"},children:"Repositorio"}),Object(a.jsx)("span",{className:"icon-credit"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(j.a,{to:{pathname:"/new-privileges",hash:"#submit",search:"?quick-submit=true"},children:"Tablero de Control"}),Object(a.jsx)("span",{className:"icon-documents"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(j.a,{to:{pathname:"/new-area",hash:"#submit",search:"?quick-submit=true"},children:"M\xf3dulos Especiales"}),Object(a.jsx)("span",{className:"icon-message"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(j.a,{to:{pathname:"/new-user",hash:"#submit",search:"?quick-submit=true"},children:"Configuraci\xf3n"}),Object(a.jsx)("span",{className:"icon-tools"})]})]})}),Object(a.jsxs)("div",{id:"slider",children:[Object(a.jsx)("img",{src:"./logo.png",width:"150px"}),Object(a.jsx)("h1",{children:"Bienvenido a EQUUS - Management Systems"})]})]}),Object(a.jsxs)(d.a,{children:[this.state.auth?Object(a.jsx)(p.a,{path:"/new-post",component:k}):null,this.state.auth?Object(a.jsx)(p.a,{path:"/new-privileges",component:N}):null,this.state.auth?Object(a.jsx)(p.a,{path:"/new-user",component:C}):null,this.state.auth?Object(a.jsx)(p.a,{path:"/new-area",component:A}):null,Object(a.jsx)(p.a,{path:"/posts",component:y}),Object(a.jsx)(p.a,{render:function(){return Object(a.jsx)("h1",{children:"Not found"})}})]})]})]})}}]),n}(s.Component),D=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(P,{})})})}}]),n}(s.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var H=n(13),U=n.n(H);U()(document).ready((function(){U()(".menu_bar").click((function(){1==q?(U()("nav").animate({left:"0"}),q=0):(U()("nav").animate({left:"-100%"}),q=1)})),U()(".submenu").click((function(){U()(this).children(".children").slideToggle(),1}))}));var q=1;f.a.defaults.baseURL="https://jsonplaceholder.typicode.com",f.a.defaults.headers.common.Authorization="AUTH TOKEN",f.a.defaults.headers.post["Content-Type"]="application/json",f.a.interceptors.request.use((function(t){return console.log(t),t}),(function(t){return console.log(t),Promise.reject(t)})),f.a.interceptors.response.use((function(t){return console.log(t),t}),(function(t){return console.log(t),Promise.reject(t)})),c.a.render(Object(a.jsx)(D,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/equus-ui",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/equus-ui","/service-worker.js");S?function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):M(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t):M(t)}))}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.2031a4fa.chunk.js.map