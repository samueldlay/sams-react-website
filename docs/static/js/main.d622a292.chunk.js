(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=a(1),o=a.n(l),i=a(2),u=a(6),m=a(7),p=a(10),f=a(8),h=a(3),v=a(11);a(19);function d(e){var t=e.state;return r.a.createElement("header",null,r.a.createElement("div",{className:"menu-btn",onClick:e.animations},r.a.createElement("div",{className:"btn-line"}),r.a.createElement("div",{className:"btn-line"}),r.a.createElement("div",{className:"btn-line"})),r.a.createElement("nav",{className:"menu"},r.a.createElement("div",{className:"menu-branding"},r.a.createElement("div",{className:"portrait"})),r.a.createElement("ul",{className:"menu-nav"},r.a.createElement("li",{className:"menu-item"},r.a.createElement("p",{className:"nav-link",onClick:function(t){return e.animations(t)},style:t.homeActive?{color:"#eccf28"}:null},"Home")),r.a.createElement("li",{className:"menu-item current"},r.a.createElement("p",{className:"nav-link",onClick:function(t){return e.animations(t)},style:t.aboutActive?{color:"#eccf28"}:null},"About Me")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("p",{className:"nav-link",onClick:function(t){return e.animations(t)},style:t.workActive?{color:"#eccf28"}:null},"Work")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("p",{className:"nav-link",onClick:function(t){return e.animations(t)},style:t.contactActive?{color:"#eccf28"}:null},"Contact me")))))}function E(e){return r.a.createElement("main",{id:"home"},r.a.createElement("h1",{className:"large-heading"},"Samuel ",r.a.createElement("span",{className:"text-secondary"},"Lay")),r.a.createElement("h2",{className:"small-heading"},"Web Developer, Programmer, Writer, & Musician"),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fab fa-github fa-2x"})),r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fas fa-envelope fa-2x"}))))}function b(){return r.a.createElement("main",{id:"about"},r.a.createElement("h1",{className:"large-heading"},"About ",r.a.createElement("span",{className:"text-secondary"},"Me")),r.a.createElement("h2",{className:"small-heading"},"A few details about me..."),r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"bio"},r.a.createElement("h3",{className:"text-secondary"},"My Story"),r.a.createElement("p",null,"On June 2, 1989, my mother gave birth to me without my permission.")),r.a.createElement("div",{className:"job job1"},r.a.createElement("h3",null,"Job 1"),r.a.createElement("h6",null,"Position"),r.a.createElement("p",null,"Coming soonish...")),r.a.createElement("div",{className:"job job2"},r.a.createElement("h3",null,"Job 2"),r.a.createElement("h6",null,"Position2"),r.a.createElement("p",null,"Coming soonish...")),r.a.createElement("div",{className:"job job3"},r.a.createElement("h3",null,"Job 3"),r.a.createElement("h6",null,"Position 3"),r.a.createElement("p",null,"Coming soonish..."))))}function y(e){return r.a.createElement("h2",null,"Portfolio")}function N(){return r.a.createElement("main",{id:"contact"},r.a.createElement("h1",{className:"large-heading"},"Contact ",r.a.createElement("span",{className:"text-secondary"},"Me")),r.a.createElement("div",{className:"email"},r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fas fa-envelope fa-10x"})))))}var g=a(9);function k(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/samueldlay");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,e.prev=6,!n.message){e.next=11;break}throw new Error(n.message,t);case 11:return e.abrupt("return",n);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(6),console.log("ERROR IN GETPROFILE: ",e.t0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}},e,null,[[6,14]])}))).apply(this,arguments)}function w(e){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/samueldlay/repos");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,e.prev=6,!n.message){e.next=11;break}throw new Error(n.message);case 11:return e.abrupt("return",n);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(6),console.log("ERROR IN GETREPOS: ",e.t0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}},e,null,[[6,14]])}))).apply(this,arguments)}function C(e,t){return e+function(e){return e.reduce(function(e,t){return e+t.stargazers_count},0)}(t)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Promise.all([k(t),w(t)]),e.next=3,a.then(function(){var e=Object(i.a)(o.a.mark(function e(t){var a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(g.a)(t,2),n=a[0],!(r=a[1]).message&&!n.message){e.next=3;break}return e.abrupt("return",r||n);case 3:return e.abrupt("return",{profile:n,score:C(n.followers,r)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={component:function(){return r.a.createElement(E,null)},homeActive:!0,aboutActive:!1,workActive:!1,contactActive:!1,displayMenu:null},a.animations=a.animations.bind(Object(h.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"animations",value:function(e){console.log(e.target.textContent),"{Home}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(E,null)},homeActive:!0}),"{About Me}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(b,null)},homeActive:!1,aboutActive:!0,workActive:!1,contactActive:!1}),"{Work}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(y,null)},homeActive:!1,aboutActive:!1,workActive:!0,contactActive:!1}),"{Contact me}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(N,null)},homeActive:!1,aboutActive:!1,workActive:!1,contactActive:!0});var t=document.querySelector(".menu-btn"),a=document.querySelector(".menu"),n=document.querySelector(".menu-nav"),c=document.querySelector(".menu-branding"),s=document.querySelectorAll(".menu-item"),l=document.querySelectorAll(".nav-link");this.setState({displayMenu:!1}),this.state.displayMenu?(t.classList.remove("close"),a.classList.remove("display"),n.classList.remove("display"),c.classList.remove("display"),s.forEach(function(e){return e.classList.remove("display")}),this.setState({displayMenu:!1})):(t.classList.add("close"),a.classList.add("display"),n.classList.add("display"),c.classList.add("display"),s.forEach(function(e){e.classList.add("display")}),l.forEach(function(e){e.onmouseover=function(){return e.textContent="{".concat(e.textContent,"}")},e.onmouseout=function(){e.textContent=e.textContent.slice(1,-1)}}),this.setState({displayMenu:!0}))}},{key:"getUserData",value:function(){var e=Object(i.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,j();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{animations:this.animations,state:this.state}),this.state.component())}}]),t}(n.Component);s.a.render(r.a.createElement(S,null),document.getElementById("samsApp"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d622a292.chunk.js.map