(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(27),l=c.n(a),r=c(11),o=c(9),i=(c(75),c(12)),s=c.n(i),j=c(20),d=c(14),b=c(8),h=c(122),u=c(125),O=c(127),x=c(120),m=c(123),g=c(126),p=c(121),f=c(124),v=c(128),y=c(21),_=c.n(y),k=c(2),N=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(x.a),C=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),S=Object(h.a)({table:{minWidth:700}}),w=function(){var e=S(),t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)(1),i=Object(d.a)(r,2),b=i[0],h=i[1],x=function(){var e=Object(j.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://shivam-oneshot-backend.herokuapp.com/getcollegebystate");case 2:t=e.sent,l(t.data.data),h(t.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x(),console.log(a)}),[]);var y=Object(o.f)();return Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"College by state"}),Object(k.jsx)(m.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:e.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(N,{align:"center",children:"State"}),Object(k.jsx)(N,{align:"center",children:"College Count"}),Object(k.jsx)(N,{align:"center",children:"Percentage"})]})}),Object(k.jsx)(O.a,{children:a.map((function(e){return Object(k.jsxs)(C,{hover:!0,role:"checkbox",onClick:function(t){return c=e._id,console.log(c),void y.push({pathname:"/completecollege",state:{detail:c,url:"getcollegeofstate"}});var c},children:[Object(k.jsx)(N,{align:"center",children:e._id}),Object(k.jsx)(N,{align:"center",children:e.count}),Object(k.jsx)(N,{align:"center",children:"".concat(e.count/b*100,"%")})]},e.name)}))})]})})]})},F=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(x.a),z=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),E=Object(h.a)({table:{minWidth:700}}),W=function(){var e=E(),t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)(1),i=Object(d.a)(r,2),b=i[0],h=i[1],x=function(){var e=Object(j.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://shivam-oneshot-backend.herokuapp.com/getcollegebycourses");case 2:t=e.sent,l(t.data.data),h(t.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x(),console.log(a)}),[]);var y=Object(o.f)();return Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"College by courses"}),Object(k.jsx)(m.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:e.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(F,{align:"center",children:"Course"}),Object(k.jsx)(F,{align:"center",children:"College Count"}),Object(k.jsx)(F,{align:"center",children:"Percentage"})]})}),Object(k.jsx)(O.a,{children:a.map((function(e){return Object(k.jsxs)(z,{hover:!0,role:"checkbox",onClick:function(t){return c=e._id,console.log(c),void y.push({pathname:"/completecollege",state:{course:c,url:"getcollegeofcourse"}});var c},children:[Object(k.jsx)(F,{align:"center",children:e._id}),Object(k.jsx)(F,{align:"center",children:e.total}),Object(k.jsx)(F,{align:"center",children:"".concat(Math.floor(e.total/b*100),"%")})]},e.name)}))})]})})]})},I=c(46),D=c.n(I),P=c(129),B=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(x.a),G=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),L=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),T=function(e){var t=L(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],i=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location.state.url),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url),{state:e.location.state.detail,course:e.location.state.course,college_id:e.location.state.college_id});case 3:c=t.sent,r(c.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var b=Object(o.f)();return Object(k.jsx)(v.a,{m:4,children:Object(k.jsx)(m.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(B,{align:"center",children:"Id"}),Object(k.jsx)(B,{align:"center",children:"College Name "}),Object(k.jsx)(B,{align:"center",children:"City"}),Object(k.jsx)(B,{align:"center",children:"State"}),Object(k.jsx)(B,{align:"center",children:"Country"}),Object(k.jsx)(B,{align:"center",children:"No. of Student"}),Object(k.jsx)(B,{align:"center",children:"Year Founded"}),Object(k.jsx)(B,{align:"center",children:"Courses"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(G,{hover:!0,role:"checkbox",onClick:function(t){return c=e.id,console.log(c),void b.push({pathname:"/insidecollege",state:{detail:c,url:"getsimilarcollege",url_student:"getcollegestudent",college_id:c}});var c},children:[Object(k.jsx)(B,{align:"center",children:e.id}),Object(k.jsx)(B,{align:"center",children:e.name}),Object(k.jsx)(B,{align:"center",children:e.city}),Object(k.jsx)(B,{align:"center",children:e.state}),Object(k.jsx)(B,{align:"center",children:e.country}),Object(k.jsx)(B,{align:"center",children:e.student_count}),Object(k.jsx)(B,{align:"center",children:D()(e.year_founded).format("DD-mm-yyyy")}),Object(k.jsx)(B,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.courses.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})})},H=(c(102),c(62)),J=c(63),Y=c(64),A=c(0);var M=function(){return Object(k.jsx)(A.b.Provider,{value:{color:"#fff",size:64},children:Object(k.jsx)("div",{className:"college__section",children:Object(k.jsxs)("div",{className:"college__wrapper",children:[Object(k.jsx)("h1",{className:"college__heading",children:"Find Colleges"}),Object(k.jsxs)("div",{className:"college__container",children:[Object(k.jsx)(r.b,{to:"/collegebystate",className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(H.a,{})}),Object(k.jsx)("h3",{children:"By"}),Object(k.jsx)("h4",{children:"State"}),Object(k.jsx)("p",{children:"Find colleges by state"})]})}),Object(k.jsx)(r.b,{to:"/collegebycourse",className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(J.a,{})}),Object(k.jsx)("h3",{children:"By"}),Object(k.jsx)("h4",{children:"Courses"}),Object(k.jsx)("p",{children:"Find colleges by Courses"})]})}),Object(k.jsx)(r.b,{to:{pathname:"/completecollege",state:{url:"getallcollege"}},className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(Y.a,{})}),Object(k.jsx)("h3",{children:"Get"}),Object(k.jsx)("h4",{children:"All"}),Object(k.jsx)("p",{children:"Get all the colleges"})]})})]})]})})})},q=c(50),K=c(65);c(103);var Q=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],l=function(){return a(!1)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(A.b.Provider,{value:{color:"#fff"},children:Object(k.jsx)("div",{className:"navbar",children:Object(k.jsxs)("div",{className:"navbar-container container",children:[Object(k.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:l,children:[Object(k.jsx)(K.a,{className:"navbar-icon"}),"StudyHard"]}),Object(k.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:c?Object(k.jsx)(q.b,{}):Object(k.jsx)(q.a,{})}),Object(k.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(r.b,{to:"/",className:"nav-links",onClick:l,children:"Home"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(r.b,{to:"/college",className:"nav-links",children:"College"})})]})]})})})})},R=c(33),U=(c(104),["btn--primary","btn--outline"]),V=["btn--medium","btn--large","btn--mobile","btn--wide"],X=["primary","blue","red","green"],Z=function(e){var t=e.children,c=e.type,n=e.onClick,a=e.buttonStyle,l=e.buttonSize,r=e.buttonColor,o=U.includes(a)?l:U[0],i=V.includes(l)?l:V[0],s=X.includes(r)?l:null;return Object(k.jsx)("button",{className:"btn ".concat(o," ").concat(i," ").concat(s),onClick:n,type:c,children:t})};c(105);var $=function(e){var t=e.lightbg,c=e.topLine,n=e.lightText,a=e.lightTextDesc,l=e.headline,o=e.description,i=e.buttonLabel,s=e.img,j=e.imgStart;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:t?"home__main-section":"home__main-section darkBg",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row home__main-row",style:{display:"flex",flexDirection:"start"==j?"row-reverse":"row"},children:[Object(k.jsx)("div",{className:"col",children:Object(k.jsxs)("div",{className:"home__main-text-wrapper",children:[Object(k.jsx)("div",{className:"top-line",children:c}),Object(k.jsx)("h1",{className:n?"heading":"heading dark",children:l}),Object(k.jsx)("p",{className:a?"home__main-subtitle":"home__main-subtitle dark",children:o}),Object(k.jsx)(r.b,{to:"/college",children:Object(k.jsx)(Z,{buttonSize:"btn--wide",children:i})})]})}),Object(k.jsx)("div",{className:"col",children:Object(k.jsx)("div",{className:"home__main-img-wrapper",children:Object(k.jsx)("img",{src:s,className:"home__main-img"})})})]})})})})},ee={lightbg:!1,lightText:!0,lightTextDesc:!0,topLine:"Welcome",headline:"Search colleges that you want",description:"Get complete details of colleges and students that you want",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg"};var te=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($,Object(R.a)({},ee)),Object(k.jsx)(M,{})]})},ce=function(){return Object(k.jsx)("div",{className:"not-found-bg",children:Object(k.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"})})},ne=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(x.a),ae=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),le=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),re=function(e){var t=le(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],o=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url_student),{state:e.location.state.detail,course:e.location.state.course,college_id:e.location.state.college_id});case 3:c=t.sent,r(c.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"Students"}),Object(k.jsx)(m.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(ne,{align:"center",children:"Id"}),Object(k.jsx)(ne,{align:"center",children:"Name "}),Object(k.jsx)(ne,{align:"center",children:"College_Id"}),Object(k.jsx)(ne,{align:"center",children:"Skills"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(ae,{hover:!0,role:"checkbox",children:[Object(k.jsx)(ne,{align:"center",children:e.id}),Object(k.jsx)(ne,{align:"center",children:e.name}),Object(k.jsx)(ne,{align:"center",children:e.college_id}),Object(k.jsx)(ne,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.skills.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})]})},oe=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(x.a),ie=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),se=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),je=function(e){var t=se(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],o=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location.state.url),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url),{state:e.location.state.detail,course:e.location.state.course,id:e.location.state.college_id});case 3:c=t.sent,console.log(c.data),r(c.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"Similar Colleges"}),Object(k.jsx)(m.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(oe,{align:"center",children:"Id"}),Object(k.jsx)(oe,{align:"center",children:"College Name "}),Object(k.jsx)(oe,{align:"center",children:"City"}),Object(k.jsx)(oe,{align:"center",children:"State"}),Object(k.jsx)(oe,{align:"center",children:"Country"}),Object(k.jsx)(oe,{align:"center",children:"No. of Student"}),Object(k.jsx)(oe,{align:"center",children:"Year Founded"}),Object(k.jsx)(oe,{align:"center",children:"Courses"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(ie,{hover:!0,role:"checkbox",children:[Object(k.jsx)(oe,{align:"center",children:e.id}),Object(k.jsx)(oe,{align:"center",children:e.name}),Object(k.jsx)(oe,{align:"center",children:e.city}),Object(k.jsx)(oe,{align:"center",children:e.state}),Object(k.jsx)(oe,{align:"center",children:e.country}),Object(k.jsx)(oe,{align:"center",children:e.student_count}),Object(k.jsx)(oe,{align:"center",children:D()(e.year_founded).format("DD-mm-yyyy")}),Object(k.jsx)(oe,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.courses.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})]})},de=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(re,Object(R.a)({},e)),Object(k.jsx)(je,Object(R.a)({},e))]})};var be=function(){return Object(k.jsxs)(r.a,{children:[Object(k.jsx)(Q,{}),Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/OS_FE",exact:!0,component:te}),Object(k.jsx)(o.a,{path:"/OS_FE/college",component:M}),Object(k.jsx)(o.a,{path:"/OS_FE/collegebystate",component:w}),Object(k.jsx)(o.a,{path:"/OS_FE/collegebycourse",component:W}),Object(k.jsx)(o.a,{path:"/OS_FE/completecollege",component:T}),Object(k.jsx)(o.a,{path:"/OS_FE/insidecollege",component:de}),Object(k.jsx)(o.a,{component:ce})]})]})};c(106);l.a.render(Object(k.jsx)(be,{}),document.getElementById("root"))},75:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.163f8c50.chunk.js.map