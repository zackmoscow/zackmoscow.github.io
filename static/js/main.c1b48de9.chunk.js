(this["webpackJsonpzackmoscow.github.io"]=this["webpackJsonpzackmoscow.github.io"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),c=t.n(r),s=(t(16),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),p=t(7),d=t(10),E=t.n(d),h=(t(19),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,l=this.props.data.address.city,r=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#skills"},"Skills/Experience")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",e,"."),n.a.createElement("h3",null,"I'm a ",l," based ",n.a.createElement("span",null,a)," ",t),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},r))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(l.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2020 Zack Moscow"),n.a.createElement("li",null,"Design by ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.address.city,l=this.props.data.address.state,r=this.props.data.email;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:e,alt:"Tim Baker Profile Pic"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,a),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,n.a.createElement("strong",null,"E-mail: "),n.a.createElement("a",{href:"mailto:zmoscow@gmail.com"},r)),n.a.createElement("br",null),n.a.createElement("span",null,n.a.createElement("strong",null,"Location: "),t,", ",l)))))))}}]),a}(l.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.skills.map((function(e){var a="images/icons/"+e.image;return n.a.createElement("div",{key:e.name,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("p",{className:"text-center"},e.name),n.a.createElement("img",{alt:e.name,src:a})))})),t=this.props.data.education.map((function(e){return n.a.createElement("div",{key:e.school},n.a.createElement("h3",null,e.school),n.a.createElement("p",{className:"info"},e.degree," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.graduated)),n.a.createElement("p",null,e.description))})),l=this.props.data.work.map((function(e){return n.a.createElement("div",{key:e.company},n.a.createElement("h3",null,e.company),n.a.createElement("p",{className:"info"},e.title,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.years)),n.a.createElement("p",null,e.description))}));return n.a.createElement("section",{id:"skills"},n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",{className:"text-center"},e),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a))),n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},t)))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},l)))}}]),a}(l.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return n.a.createElement("div",{key:e.title,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.url,title:e.title},n.a.createElement("img",{alt:e.title,src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.category))))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Here are some of my recent projects:"),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(l.Component),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},p.a.initialize("UA-110570651-1"),p.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getResumeData",value:function(){E.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{data:this.state.resumeData.main}),n.a.createElement(v,{data:this.state.resumeData.main}),n.a.createElement(b,{data:this.state.resumeData.portfolio}),n.a.createElement(N,{data:this.state.resumeData.skills}),n.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(l.Component);c.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c1b48de9.chunk.js.map