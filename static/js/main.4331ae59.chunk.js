(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(27),l=c.n(a),r=c(11),o=c(9),i=(c(74),c(12)),s=c.n(i),j=c(20),d=c(14),b=c(8),h=c(121),u=c(124),O=c(126),m=c(119),x=c(122),g=c(125),p=c(120),f=c(123),v=c(127),y=c(21),_=c.n(y),k=c(2),N=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),S=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),C=Object(h.a)({table:{minWidth:700}}),w=function(){var e=C(),t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)(1),i=Object(d.a)(r,2),b=i[0],h=i[1],m=function(){var e=Object(j.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://shivam-oneshot-backend.herokuapp.com/getcollegebystate");case 2:t=e.sent,l(t.data.data),h(t.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m(),console.log(a)}),[]);var y=Object(o.f)();return Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"College by state"}),Object(k.jsx)(x.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:e.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(N,{align:"center",children:"State"}),Object(k.jsx)(N,{align:"center",children:"College Count"}),Object(k.jsx)(N,{align:"center",children:"Percentage"})]})}),Object(k.jsx)(O.a,{children:a.map((function(e){return Object(k.jsxs)(S,{hover:!0,role:"checkbox",onClick:function(t){return c=e._id,console.log(c),void y.push({pathname:"/OS_FE/completecollege",state:{detail:c,url:"getcollegeofstate"}});var c},children:[Object(k.jsx)(N,{align:"center",children:e._id}),Object(k.jsx)(N,{align:"center",children:e.count}),Object(k.jsx)(N,{align:"center",children:"".concat(e.count/b*100,"%")})]},e.name)}))})]})})]})},F=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),E=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),z=Object(h.a)({table:{minWidth:700}}),W=function(){var e=z(),t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)(1),i=Object(d.a)(r,2),b=i[0],h=i[1],m=function(){var e=Object(j.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://shivam-oneshot-backend.herokuapp.com/getcollegebycourses");case 2:t=e.sent,l(t.data.data),h(t.data.total);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m(),console.log(a)}),[]);var y=Object(o.f)();return Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"College by courses"}),Object(k.jsx)(x.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:e.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(F,{align:"center",children:"Course"}),Object(k.jsx)(F,{align:"center",children:"College Count"}),Object(k.jsx)(F,{align:"center",children:"Percentage"})]})}),Object(k.jsx)(O.a,{children:a.map((function(e){return Object(k.jsxs)(E,{hover:!0,role:"checkbox",onClick:function(t){return c=e._id,console.log(c),void y.push({pathname:"/OS_FE/completecollege",state:{course:c,url:"getcollegeofcourse"}});var c},children:[Object(k.jsx)(F,{align:"center",children:e._id}),Object(k.jsx)(F,{align:"center",children:e.total}),Object(k.jsx)(F,{align:"center",children:"".concat(Math.floor(e.total/b*100),"%")})]},e.name)}))})]})})]})},D=c(47),I=c.n(D),P=c(128),L=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),B=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),G=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),T=function(e){var t=G(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],i=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location.state.url),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url),{state:e.location.state.detail,course:e.location.state.course,college_id:e.location.state.college_id});case 3:c=t.sent,r(c.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var b=Object(o.f)();return Object(k.jsx)(v.a,{m:4,children:Object(k.jsx)(x.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(L,{align:"center",children:"Id"}),Object(k.jsx)(L,{align:"center",children:"College Name "}),Object(k.jsx)(L,{align:"center",children:"City"}),Object(k.jsx)(L,{align:"center",children:"State"}),Object(k.jsx)(L,{align:"center",children:"Country"}),Object(k.jsx)(L,{align:"center",children:"No. of Student"}),Object(k.jsx)(L,{align:"center",children:"Year Founded"}),Object(k.jsx)(L,{align:"center",children:"Courses"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(B,{hover:!0,role:"checkbox",onClick:function(t){return c=e.id,console.log(c),void b.push({pathname:"/OS_FE/insidecollege",state:{detail:c,url:"getsimilarcollege",url_student:"getcollegestudent",college_id:c}});var c},children:[Object(k.jsx)(L,{align:"center",children:e.id}),Object(k.jsx)(L,{align:"center",children:e.name}),Object(k.jsx)(L,{align:"center",children:e.city}),Object(k.jsx)(L,{align:"center",children:e.state}),Object(k.jsx)(L,{align:"center",children:e.country}),Object(k.jsx)(L,{align:"center",children:e.student_count}),Object(k.jsx)(L,{align:"center",children:I()(e.year_founded).format("DD-mm-yyyy")}),Object(k.jsx)(L,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.courses.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})})},A=(c(101),c(62)),J=c(63),M=c(64),K=c(0);var Y=function(){return Object(k.jsx)(K.b.Provider,{value:{color:"#fff",size:64},children:Object(k.jsx)("div",{className:"college__section",children:Object(k.jsxs)("div",{className:"college__wrapper",children:[Object(k.jsx)("h1",{className:"college__heading",children:"Find Colleges"}),Object(k.jsxs)("div",{className:"college__container",children:[Object(k.jsx)(r.b,{to:"/OS_FE/collegebystate",className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(A.a,{})}),Object(k.jsx)("h3",{children:"By"}),Object(k.jsx)("h4",{children:"State"}),Object(k.jsx)("p",{children:"Find colleges by state"})]})}),Object(k.jsx)(r.b,{to:"/OS_FE/collegebycourse",className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(J.a,{})}),Object(k.jsx)("h3",{children:"By"}),Object(k.jsx)("h4",{children:"Courses"}),Object(k.jsx)("p",{children:"Find colleges by Courses"})]})}),Object(k.jsx)(r.b,{to:{pathname:"/OS_FE/completecollege",state:{url:"getallcollege"}},className:"college__container-card",children:Object(k.jsxs)("div",{className:"college__container-cardInfo",children:[Object(k.jsx)("div",{className:"icon",children:Object(k.jsx)(M.a,{})}),Object(k.jsx)("h3",{children:"Get"}),Object(k.jsx)("h4",{children:"All"}),Object(k.jsx)("p",{children:"Get all the colleges"})]})})]})]})})})},H=c(33);c(102);var Q=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],l=function(){return a(!1)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(K.b.Provider,{value:{color:"#fff"},children:Object(k.jsx)("div",{className:"navbar",children:Object(k.jsxs)("div",{className:"navbar-container container",children:[Object(k.jsxs)(r.b,{to:"/OS_FE",className:"navbar-logo",onClick:l,children:[Object(k.jsx)(H.c,{className:"navbar-icon"}),"CollegeFinder"]}),Object(k.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:c?Object(k.jsx)(H.b,{}):Object(k.jsx)(H.a,{})}),Object(k.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(r.b,{to:"/OS_FE",className:"nav-links",onClick:l,children:"Home"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(r.b,{to:"/OS_FE/college",className:"nav-links",children:"College"})})]})]})})})})},U=c(34),X=(c(103),["btn--primary","btn--outline"]),q=["btn--medium","btn--large","btn--mobile","btn--wide"],R=["primary","blue","red","green"],V=function(e){var t=e.children,c=e.type,n=e.onClick,a=e.buttonStyle,l=e.buttonSize,r=e.buttonColor,o=X.includes(a)?l:X[0],i=q.includes(l)?l:q[0],s=R.includes(r)?l:null;return Object(k.jsx)("button",{className:"btn ".concat(o," ").concat(i," ").concat(s),onClick:n,type:c,children:t})};c(104);var Z=function(e){var t=e.lightbg,c=e.topLine,n=e.lightText,a=e.lightTextDesc,l=e.headline,o=e.description,i=e.buttonLabel,s=e.img,j=e.imgStart;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:t?"home__main-section":"home__main-section darkBg",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row home__main-row",style:{display:"flex",flexDirection:"start"==j?"row-reverse":"row"},children:[Object(k.jsx)("div",{className:"col",children:Object(k.jsxs)("div",{className:"home__main-text-wrapper",children:[Object(k.jsx)("div",{className:"top-line",children:c}),Object(k.jsx)("h1",{className:n?"heading":"heading dark",children:l}),Object(k.jsx)("p",{className:a?"home__main-subtitle":"home__main-subtitle dark",children:o}),Object(k.jsx)(r.b,{to:"/OS_FE/college",children:Object(k.jsx)(V,{buttonSize:"btn--wide",children:i})})]})}),Object(k.jsx)("div",{className:"col",children:Object(k.jsx)("div",{className:"home__main-img-wrapper",children:Object(k.jsx)("img",{src:s,className:"home__main-img"})})})]})})})})},$={lightbg:!1,lightText:!0,lightTextDesc:!0,topLine:"Welcome",headline:"Search colleges that you want",description:"Get complete details of colleges and students that you want",buttonLabel:"Get Started",imgStart:"",img:"https://raw.githubusercontent.com/ShivamPrajapati-dev/OS_FE/main/public/images/svg-1.svg?token=AMXMEKFC4PJK66WUED7QP2LALBEWW"};var ee=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Z,Object(U.a)({},$)),Object(k.jsx)(Y,{})]})},te=function(){return Object(k.jsx)("div",{className:"not-found-bg",children:Object(k.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"})})},ce=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),ne=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),ae=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),le=function(e){var t=ae(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],o=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url_student),{state:e.location.state.detail,course:e.location.state.course,college_id:e.location.state.college_id});case 3:c=t.sent,r(c.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"Students"}),Object(k.jsx)(x.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(ce,{align:"center",children:"Id"}),Object(k.jsx)(ce,{align:"center",children:"Name "}),Object(k.jsx)(ce,{align:"center",children:"College_Id"}),Object(k.jsx)(ce,{align:"center",children:"Skills"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(ne,{hover:!0,role:"checkbox",children:[Object(k.jsx)(ce,{align:"center",children:e.id}),Object(k.jsx)(ce,{align:"center",children:e.name}),Object(k.jsx)(ce,{align:"center",children:e.college_id}),Object(k.jsx)(ce,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.skills.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})]})},re=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),oe=Object(b.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a),ie=Object(h.a)((function(e){return{table:{minWidth:700},root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}})),se=function(e){var t=ie(),c=Object(n.useState)([]),a=Object(d.a)(c,2),l=a[0],r=a[1],o=function(){var t=Object(j.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.location.state.url),t.next=3,_.a.post("https://shivam-oneshot-backend.herokuapp.com/".concat(e.location.state.url),{state:e.location.state.detail,course:e.location.state.course,id:e.location.state.college_id});case 3:c=t.sent,console.log(c.data),r(c.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(k.jsxs)(v.a,{m:4,children:[Object(k.jsx)("h1",{children:"Similar Colleges"}),Object(k.jsx)(x.a,{component:f.a,children:Object(k.jsxs)(u.a,{className:t.table,"aria-label":"customized table",children:[Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(re,{align:"center",children:"Id"}),Object(k.jsx)(re,{align:"center",children:"College Name "}),Object(k.jsx)(re,{align:"center",children:"City"}),Object(k.jsx)(re,{align:"center",children:"State"}),Object(k.jsx)(re,{align:"center",children:"Country"}),Object(k.jsx)(re,{align:"center",children:"No. of Student"}),Object(k.jsx)(re,{align:"center",children:"Year Founded"}),Object(k.jsx)(re,{align:"center",children:"Courses"})]})}),Object(k.jsx)(O.a,{children:l.map((function(e){return Object(k.jsxs)(oe,{hover:!0,role:"checkbox",children:[Object(k.jsx)(re,{align:"center",children:e.id}),Object(k.jsx)(re,{align:"center",children:e.name}),Object(k.jsx)(re,{align:"center",children:e.city}),Object(k.jsx)(re,{align:"center",children:e.state}),Object(k.jsx)(re,{align:"center",children:e.country}),Object(k.jsx)(re,{align:"center",children:e.student_count}),Object(k.jsx)(re,{align:"center",children:I()(e.year_founded).format("DD-mm-yyyy")}),Object(k.jsx)(re,{align:"center",children:Object(k.jsx)("div",{component:"ul",className:t.root,children:e.courses.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(P.a,{label:e,className:t.chip,color:"primary",style:{backgroundColor:"#276afb"}})},e.key)}))})})]},e.name)}))})]})})]})},je=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(le,Object(U.a)({},e)),Object(k.jsx)(se,Object(U.a)({},e))]})};var de=function(){return Object(k.jsxs)(r.a,{children:[Object(k.jsx)(Q,{}),Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/OS_FE",exact:!0,component:ee}),Object(k.jsx)(o.a,{path:"/OS_FE/college",component:Y}),Object(k.jsx)(o.a,{path:"/OS_FE/collegebystate",component:w}),Object(k.jsx)(o.a,{path:"/OS_FE/collegebycourse",component:W}),Object(k.jsx)(o.a,{path:"/OS_FE/completecollege",component:T}),Object(k.jsx)(o.a,{path:"/OS_FE/insidecollege",component:je}),Object(k.jsx)(o.a,{component:te})]})]})};c(105);l.a.render(Object(k.jsx)(de,{}),document.getElementById("root"))},74:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.4331ae59.chunk.js.map