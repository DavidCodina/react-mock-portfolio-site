(this["webpackJsonpreact-mock-portfolio-site"]=this["webpackJsonpreact-mock-portfolio-site"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/avatar.6d10ae4e.png"},23:function(e,a,t){e.exports=t.p+"static/media/avatar-3.8201003d.png"},24:function(e,a,t){e.exports=t.p+"static/media/avatar-4.da5405f8.png"},25:function(e,a,t){e.exports=t.p+"static/media/avatar-2.4bd726fb.png"},26:function(e,a,t){e.exports=t(45)},31:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),c=t.n(r),s=t(12),i=t(2),o=t(3),m=t(5),u=t(4),p=t(6),d=(t(31),function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).toggleCollapse=function(e){var a=e.currentTarget,t=a.dataset.target||a.href||null;if(t){var l=document.querySelector(t);if(l.classList.contains("show")||l.classList.contains("collapsing")){l.style.height="".concat(l.getBoundingClientRect().height,"px");l.offsetHeight;l.classList.add("collapsing"),l.classList.remove("collapse","show"),l.style.height="",setTimeout((function(){l.classList.remove("collapsing"),l.classList.add("collapse")}),350)}else l.classList.remove("collapse"),l.classList.add("collapsing"),l.style.height=0,l.classList.remove("collapsed"),setTimeout((function(){l.classList.remove("collapsing"),l.classList.add("collapse","show"),l.style.height=""}),350),l.style.height=l.scrollHeight+"px"}},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},n.a.createElement(s.b,{className:"navbar-brand",to:this.props.brandUrl},this.props.brandTitle),n.a.createElement("button",{className:"navbar-toggler custom-toggler",type:"button","data-toggle":"collapse","data-target":"#navContent","aria-controls":"navContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleCollapse},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{id:"navContent",className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},this.props.linksArray.map((function(e,a){return n.a.createElement("li",{key:a,className:"nav-item"},n.a.createElement(s.b,{to:e.linkUrl,className:"nav-link"},n.a.createElement("i",{className:e.iconClassString})," ",e.linkTitle))})))))}}]),a}(l.Component)),h=[{linkTitle:" Home ",linkUrl:"/",iconClassString:"fas fa-home"},{linkTitle:" About ",linkUrl:"/about",iconClassString:"fas fa-question"},{linkTitle:" Resume ",linkUrl:"/resume",iconClassString:"fas fa-file"},{linkTitle:" Projects ",linkUrl:"/projects",iconClassString:"fas fa-folder-open"},{linkTitle:" Contact ",linkUrl:"/contact",iconClassString:"fas fa-envelope"}],g=(t(37),function(){return n.a.createElement("header",{className:"header header-gradient"},n.a.createElement(d,{brandTitle:"DavTek Industries",brandUrl:"/",linksArray:h}))}),f=t(10),v=t(22),E=t.n(v),b=(t(38),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"home-page container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("figure",{className:"avatar-figure"},n.a.createElement("img",{className:"avatar-img",src:E.a,alt:"male avatar"})),n.a.createElement("article",{className:"banner-text"},n.a.createElement("h2",{className:"fancy-h2"},"Full Stack Web Developer"),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("p",{className:"text-center m-0 p-2"},"HTML | CSS/Sass | JS/jQuery/React | PHP/Node | MySQL/MongoDB/Firebase"),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.google.com/?client=safari",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-linkedin"})),n.a.createElement("a",{href:"https://www.google.com/?client=safari",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("a",{href:"https://www.google.com/?client=safari",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-codepen"})),n.a.createElement("a",{href:"https://www.google.com/?client=safari",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-youtube"})))))))}}]),a}(l.Component)),N=t(23),k=t.n(N),y=(t(39),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"about-page container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h2",{className:"fancy-h2"},"About this guy:"),n.a.createElement("div",null,n.a.createElement("img",{id:"avatar-img",src:k.a,alt:"avatar"}),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at. In at felis egestas lacus eleifend vestibulum nec quis ligula. Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis. Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at. In at felis egestas lacus eleifend vestibulum nec quis ligula. Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis. Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.")))))}}]),a}(l.Component)),x=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:e.imageUrl,className:"card-img-top",alt:"A programming language logo"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.title),n.a.createElement("p",{className:"card-text"},e.text),n.a.createElement("a",{className:"btn btn-primary",href:e.url,target:"_blank",rel:"noopener noreferrer"},"Go To Project")))},j=function(e){return n.a.createElement("div",{className:e.activeNavLink===e.index?"tab-pane fade show active":"tab-pane fade"},n.a.createElement("h1",{className:"fancy-h1 text-center"},e.title),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card-container col p-0"},e.data.map((function(e){return n.a.createElement(x,{key:e.id,imageUrl:e.imageUrl,title:e.title,text:e.text,url:e.url})}))))))},w=[{title:"React",data:[{id:1,imageUrl:"assets/images/react.png",title:"Project 1",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:2,imageUrl:"assets/images/react.png",title:"Project 2",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:3,imageUrl:"assets/images/react.png",title:"Project 3",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:4,imageUrl:"assets/images/react.png",title:"Project 4",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"}]},{title:"PHP",data:[{id:1,imageUrl:"assets/images/php.png",title:"Project 1",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:2,imageUrl:"assets/images/php.png",title:"Project 2",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:3,imageUrl:"assets/images/php.png",title:"Project 3",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:4,imageUrl:"assets/images/php.png",title:"Project 4",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"}]},{title:"Javascript",data:[{id:1,imageUrl:"assets/images/javascript.png",title:"Project 1",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:2,imageUrl:"assets/images/javascript.png",title:"Project 2",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:3,imageUrl:"assets/images/javascript.png",title:"Project 3",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"},{id:4,imageUrl:"assets/images/javascript.png",title:"Project 4",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",url:"https://www.google.com/?client=safari"}]}],C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={activeNavLink:0,tabs:[]},t.changeTab=function(e){t.setState({activeNavLink:e})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({tabs:w})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"tab-container"},n.a.createElement("div",{className:"tab-buttons-container"},n.a.createElement("button",{className:0===this.state.activeNavLink?"btn btn-primary":"btn",onClick:function(){return e.changeTab(0)}},"React"),n.a.createElement("button",{className:1===this.state.activeNavLink?"btn btn-primary":"btn",onClick:function(){return e.changeTab(1)}},"PHP"),n.a.createElement("button",{className:2===this.state.activeNavLink?"btn btn-primary":"btn",onClick:function(){return e.changeTab(2)}},"Javascript")),n.a.createElement("div",{className:"tab-content"},this.state.tabs.map((function(a,t){return n.a.createElement(j,{key:t,index:t,title:a.title,activeNavLink:e.state.activeNavLink,data:a.data})}))))}}]),a}(l.Component),O=(t(40),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"projects-page container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(C,null))))}}]),a}(l.Component)),P=function(e){var a="".concat(e.value/2-3,"%");return n.a.createElement("div",{className:"progress-container"},n.a.createElement("div",{className:"progress-title-container"},n.a.createElement("h5",{className:"fancy-h5"},e.skill)),n.a.createElement("div",{className:"progress-bar-container"},n.a.createElement("progress",{className:e.classes,max:"100",value:e.value}),n.a.createElement("div",{className:"progress-value-div",style:{paddingLeft:a}},e.value,"%")))},S=t(24),L=t.n(S),q=(t(41),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"resume-page container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 resume-left"},n.a.createElement("figure",null,n.a.createElement("img",{src:L.a,alt:"avatar"})),n.a.createElement("h2",{className:"fancy-h2"},"David Codina"),n.a.createElement("h4",{className:"fancy-h4"},"Programmer"),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at. In at felis egestas lacus eleifend vestibulum nec quis ligula. Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis. Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor."),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("h5",{className:"fancy-h5"},"Address:"),n.a.createElement("p",null,"123 Fake ST Hackersville Washington, 98004"),n.a.createElement("h5",{className:"fancy-h5"},"Phone:"),n.a.createElement("p",null,"(123) 456-7890"),n.a.createElement("h5",{className:"fancy-h5"},"Email:"),n.a.createElement("p",null,"davidmcodina@gwhoops.com"),n.a.createElement("h5",{className:"fancy-h5"},"Web:"),n.a.createElement("p",null,"mywebsite.com")),n.a.createElement("div",{className:"col-lg-8 resume-right"},n.a.createElement("h2",{className:"fancy-h2"},"Education:"),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",null,n.a.createElement("h5",{className:"fancy-h5"}," 2002 - 2006 ")),n.a.createElement("div",null,n.a.createElement("h4",{className:"fancy-h4"},"1st University"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at."))),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",null,n.a.createElement("h5",{className:"fancy-h5"}," 2016 - 2018 ")),n.a.createElement("div",null,n.a.createElement("h4",{className:"fancy-h4"},"2nd University"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at."))),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("h2",{className:"fancy-h2"},"Experience:"),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",null,n.a.createElement("h5",{className:"fancy-h5"}," 2006 - 2010 ")),n.a.createElement("div",null,n.a.createElement("h4",{className:"fancy-h4"},"Employment 1"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at."))),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",null,n.a.createElement("h5",{className:"fancy-h5"}," 2010 - 2016 ")),n.a.createElement("div",null,n.a.createElement("h4",{className:"fancy-h4"},"Employment 2"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at."))),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("h2",{className:"fancy-h2"},"Skills:"),n.a.createElement(P,{classes:"html",skill:"HTML",value:100}),n.a.createElement(P,{classes:"css",skill:"CSS",value:100}),n.a.createElement(P,{classes:"sass",skill:"Sass",value:80}),n.a.createElement(P,{classes:"bootstrap",skill:"Bootstrap",value:95}),n.a.createElement(P,{classes:"javascript",skill:"Javascript",value:100}),n.a.createElement(P,{classes:"jquery",skill:"jQuery",value:85}),n.a.createElement(P,{classes:"react",skill:"React",value:90}),n.a.createElement(P,{classes:"php",skill:"PHP",value:75}),n.a.createElement(P,{classes:"node",skill:"Node",value:70}),n.a.createElement(P,{classes:"sql",skill:"SQL",value:100}),n.a.createElement(P,{classes:"mongo",skill:"Mongo",value:80}),n.a.createElement(P,{classes:"firebase",skill:"Firebase",value:50}),n.a.createElement(P,{classes:"github",skill:"GitHub",value:100}))))}}]),a}(l.Component)),U=(t(42),t(25)),T=t.n(U),H=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-page container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"vertical-line"}),n.a.createElement("div",{className:"col-md"},n.a.createElement("h2",{className:"fancy-h2"},"David Codina"),n.a.createElement("img",{id:"avatar-img",src:T.a,alt:"avatar"}),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum lorem. Pellentesque viverra placerat eros, nec ultrices tellus maximus at. In at felis egestas lacus eleifend vestibulum nec quis ligula. Cras eu viverra lorem. Praesent mollis felis non tincidunt sagittis. Morbi et urna magna. Curabitur dui tortor, interdum ac libero at, commodo ultricies tortor.")),n.a.createElement("div",{className:"col-md"},n.a.createElement("h2",{className:"fancy-h2"},"Contact Me"),n.a.createElement("hr",{className:"fancy-hr"}),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item border-top-0"},n.a.createElement("i",{className:"fas fa-phone-square"})," (123) 456-7890"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{class:"fas fa-envelope"})," davidmcodina@gwhoops.com"),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fab fa-skype"})," ",n.a.createElement("em",null,"skype_Id")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fas fa-fax"})," (123) 456-7890")))))}}]),a}(l.Component),M=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-4"},n.a.createElement("span",{className:"text-danger text-center"},"404")," Page Not Found"),n.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},A=function(){return n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:b}),n.a.createElement(f.a,{path:"/about",component:y}),n.a.createElement(f.a,{path:"/projects",component:O}),n.a.createElement(f.a,{path:"/resume",component:q}),n.a.createElement(f.a,{path:"/contact",component:H}),n.a.createElement(f.a,{component:M}))},I=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(A,null))}}]),a}(l.Component);t(43),t(44);c.a.render(n.a.createElement(s.a,null,n.a.createElement(I,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.91bf321b.chunk.js.map