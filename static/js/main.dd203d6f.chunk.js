(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){var i={"./portfolio-ss.png":14,"./portfolio/0.png":15,"./portfolio/1.png":16,"./portfolio/2.png":17,"./portfolio/3.png":18,"./portfolio/4.png":19,"./portfolio/5.png":20};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=c,e.exports=n,n.id=13},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/portfolio-ss.25a30dfd.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.34f1bb39.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.b0f4d335.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.15640eb9.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.655001d1.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.d4ffaaec.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.17181320.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/resume.d8e0e6d3.jpg"},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),r=a(6),s=a.n(r),o=(a(12),a(2)),l=a.p+"static/media/portfolio-image.9ba5003f.jpg";var d=function(){return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"column left",children:[Object(i.jsx)("h1",{id:"about",children:"About Me!"}),Object(i.jsx)("img",{src:l,className:"portfolio-image",alt:"portfolio"})]}),Object(i.jsx)("div",{className:"column right",children:Object(i.jsx)("p",{children:"My Name is Allison Smith. By profession, I am a lobbyist in the state of New Mexico. I began creating web applications when I had the idea to create a legislative tracking and reporting service to improve the way I communicated with my clients. I figured quickly that the best way to create this system, was to make it web-based. I set out to learn the basics of HTML, CSS, PHP, MySql and created Roadrunner Capitol Reports. That one application spurred a desire to learn more about software development and use my talents and solid work ethic to create applications for others. I am now adding Javascript, NodeJs, React and ExpressJS to my library of coding experience."})})]})})})};var j=function(e){return Object(i.jsxs)("header",{children:[Object(i.jsx)("h2",{children:Object(i.jsx)("a",{href:"/",children:"Allison K. Smith"})}),Object(i.jsx)("ul",{className:"nav nav-tabs",children:["About","Resume","Contact","Projects"].map((function(t){return Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})]})},u=a(3),h=function(e){var t=e.onClose,a=e.selectedProject,n=a.name,c=a.description,r=a.url,s=a.github;return Object(i.jsx)("div",{className:"modal-backdrop",children:Object(i.jsxs)("div",{className:"modal-container",children:[Object(i.jsx)("h3",{children:n}),Object(i.jsx)("p",{children:c}),Object(i.jsxs)("div",{className:"modal-buttons",children:[Object(i.jsx)("button",{className:"link-button",children:Object(i.jsx)("a",{href:r,children:"Visit Web Site"})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("button",{className:"link-button",children:Object(i.jsx)("a",{href:s,children:"Git Hub Repo"})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("button",{className:"close",onClick:t,type:"button",children:"Close Modal"})]})]})})};var b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),r=c[0],s=c[1],l=Object(n.useState)(),d=Object(o.a)(l,2),j=d[0],b=d[1],m=function(e,t){b(Object(u.a)(Object(u.a)({},e),{},{index:t})),s(!r)};return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{children:"My Projects"}),Object(i.jsx)("p",{children:"Click the image of the project to view details and links to project."}),Object(i.jsxs)("div",{className:"flex-row",children:[r&&Object(i.jsx)(h,{onClose:m,selectedProject:j}),e.projects.map((function(e,t){return Object(i.jsx)("img",{src:a(13)("./".concat(e.category,"/").concat(t,".png")).default,className:"project-image",alt:e.name,onClick:function(){return m(e,t)}},e.id)}))]})]})};var m=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Created By Allison K. Smith"}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/aksmith5239",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/allison-smith-18650810/",target:"_blank",rel:"noreferrer",children:"Linked In"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"mailto:aklobby@gmail.com",children:"Email"})})]})})},p=a(4);var f=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),l=s[0],d=s[1],j=a.name,h=a.email,b=a.message;function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),d(t?"":"Please enter a valid email address")}else e.target.value.length?d(""):d("Please enter a ".concat(e.target.name,"."));l||c(Object(u.a)(Object(u.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return Object(i.jsx)("section",{className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{children:"Contact Me"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(i.jsx)("input",{type:"text",defaultValue:j,onBlur:m,name:"name"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(i.jsx)("input",{type:"email",defaultValue:h,onBlur:m,name:"email"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(i.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:m})]}),l&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error-message",children:l})}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})]})})};var g=function(){return Object(i.jsx)("section",{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"My R\xe9sum\xe9"}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:a(21).default,alt:"resume"})})]})})},O=[{name:"Roadrunner Capitol Reports",description:"A PHP, MySQL web application for professional government affairs consultants to track legislation at the New Mexico legislature",url:"https://www.roadrunnercapitol.com",github:"",category:"portfolio"},{name:"Wizier",description:"A JavaScript web application to help young learners have fun while they study for exams",url:"https://terahje.github.io/group-assignment",github:"https://github.com/terahje/group-assignment",category:"portfolio"},{name:"The Cutting Edge",description:"An ExpressJs, MongoDB web application to for small hair salon's to manage services and appointments",url:" https://the-cutting-edge-20.herokuapp.com",github:"https://github.com/aksmith5239/cutting-edge",category:"portfolio"},{name:"My Team",description:"A NodeJs command line application to generate teams of employees",url:"",github:" https://github.com/aksmith5239/team-profile-generator",category:"portfolio"},{name:"My Tech Blog",description:"My Tech Blog is an interactive web based blog site",url:"https://my-tech-blog-2020.herokuapp.com/",github:" https://github.com/aksmith5239/team-profile-generator",category:"portfolio"},{name:"Weather Dash",description:"A JavaScript application to search for current weather data",url:"https://aksmith5239.github.io/weather-dash/",github:" https://github.com/aksmith5239/weather-dash",category:"portfolio"}];var x=function(){var e=Object(n.useState)("Home"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{currentPage:a,handlePageChange:c}),Object(i.jsx)("div",{children:function(){switch(a){case"Contact":return Object(i.jsx)(f,{});case"Projects":return Object(i.jsx)(b,{projects:O});case"Resume":return Object(i.jsx)(g,{});default:return Object(i.jsx)(d,{})}}()}),Object(i.jsx)(m,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.dd203d6f.chunk.js.map