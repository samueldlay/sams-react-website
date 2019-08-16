(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),o=a(4),i=a(5),l=a(7),u=a(6),m=a(2),d=a(8);a(17);function p(e){return r.a.createElement("main",{id:"home"},r.a.createElement("h1",{className:"large-heading"},"Samuel ",r.a.createElement("span",{className:"text-secondary"},"Lay")),r.a.createElement("h2",{className:"small-heading"},"Web Developer, Programmer, Writer, & Musician"),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fab fa-github fa-10x"}))))}function h(){return r.a.createElement("main",{id:"about"},r.a.createElement("h1",{className:"large-heading"},"About ",r.a.createElement("span",{className:"text-secondary"},"Me")),r.a.createElement("h2",{className:"small-heading"},"A few details about me..."),r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"bio"},r.a.createElement("h3",{className:"text-secondary"},"My Story"),r.a.createElement("p",null,"I have been programming with JavaScript as my primary language for a little over a year, mainly working on projects intended to encourage growth in my understanding of this versatile language. Every new line of code is another opportunity to create and to learn. Join me as I set sail on this coding adventure!"))))}var v=a(1),f=a.n(v),y=a(3);function b(){return E.apply(this,arguments)}function E(){return(E=Object(y.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="samueldlay",e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,e.prev=7,!n.message){e.next=12;break}throw new Error(n.message,t);case 12:return e.abrupt("return",n);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(7),console.log("ERROR IN GETPROFILE: ",e.t0),e.abrupt("return",e.t0);case 19:case"end":return e.stop()}},e,null,[[7,15]])}))).apply(this,arguments)}function g(){return x.apply(this,arguments)}function x(){return(x=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"samueldlay",e.next=3,fetch("https://api.github.com/users/".concat("samueldlay","/repos"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,e.prev=7,!a.message){e.next=12;break}throw new Error(a.message);case 12:return e.t0=a,e.next=15,b();case 15:return e.t1=e.sent,e.abrupt("return",{repos:e.t0,getprofile:e.t1});case 17:e.next=23;break;case 19:return e.prev=19,e.t2=e.catch(7),console.log("ERROR IN GETREPOS: ",e.t2),e.abrupt("return",e.t2);case 23:case"end":return e.stop()}},e,null,[[7,19]])}))).apply(this,arguments)}var w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:null},a.userData=a.userData.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"userData",value:function(){var e=Object(y.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,g();case 3:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.t2=this,e.next=8,g();case 8:e.t3=e.sent,e.t4={data:e.t3},e.t2.setState.call(e.t2,e.t4);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.userData()}},{key:"render",value:function(){return r.a.createElement("div",{id:"work"},r.a.createElement("h2",null,"My Portfolio"),r.a.createElement("p",{className:"bio"},this.state.data?JSON.stringify(this.state.data,null,4):"LOADING"))}}]),t}(r.a.Component);function A(){return r.a.createElement("main",{id:"contact"},r.a.createElement("h1",{className:"large-heading"},"Contact ",r.a.createElement("span",{className:"text-secondary"},"Me")),r.a.createElement("div",{className:"email"},r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"fas fa-envelope fa-10x"})))))}var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={component:function(){return r.a.createElement(p,null)},homeActive:!0,aboutActive:!1,workActive:!1,contactActive:!1,displayMenu:null},a.animations=a.animations.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"animations",value:function(e){console.log(e.target.textContent),"{Home}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(p,null)},homeActive:!0,aboutActive:!1,workActive:!1,contactActive:!1}),"{About Me}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(h,null)},homeActive:!1,aboutActive:!0,workActive:!1,contactActive:!1}),"{Work}"===e.target.textContent&&this.getUserData(e.target.textContent),"{Contact me}"===e.target.textContent&&this.setState({component:function(){return r.a.createElement(A,null)},homeActive:!1,aboutActive:!1,workActive:!1,contactActive:!0});var t=document.querySelector(".menu-btn"),a=document.querySelector(".menu"),n=document.querySelector(".menu-nav"),c=document.querySelector(".menu-branding"),s=document.querySelectorAll(".menu-item"),o=document.querySelectorAll(".nav-link");this.setState({displayMenu:!1}),this.state.displayMenu?(t.classList.remove("close"),a.classList.remove("display"),n.classList.remove("display"),c.classList.remove("display"),s.forEach(function(e){return e.classList.remove("display")}),this.setState({displayMenu:!1})):(t.classList.add("close"),a.classList.add("display"),n.classList.add("display"),c.classList.add("display"),s.forEach(function(e){e.classList.add("display")}),o.forEach(function(e){e.onmouseover=function(){return e.textContent="{".concat(e.textContent,"}")},e.onmouseout=function(){e.textContent=e.textContent.slice(1,-1)}}),this.setState({displayMenu:!0}))}},{key:"getUserData",value:function(e){this.setState({component:function(){return r.a.createElement(w,null)},homeActive:!1,aboutActive:!1,workActive:!0,contactActive:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layer"},this.state.component()))}}]),t}(n.Component);s.a.render(r.a.createElement(k,null),document.getElementById("samsApp"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b2bd5cb9.chunk.js.map