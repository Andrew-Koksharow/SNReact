(this.webpackJsonpproject_two=this.webpackJsonpproject_two||[]).push([[0],{18:function(e,t,n){e.exports={item:"Navbar_item__17chj",activeLink:"Navbar_activeLink__1nxUt"}},25:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__EBIsh",dialogsItems:"Dialog_dialogsItems__x4Lpg"}},33:function(e,t,n){e.exports={avatar:"Ava_avatar__31kYH",item:"Ava_item__x0iiX",description:"Ava_description__3C6nW"}},34:function(e,t,n){e.exports={item:"MyPost_item__qJigH",content:"MyPost_content__3P65b",h:"MyPost_h__2JxiY"}},40:function(e,t,n){e.exports={Header:"Header_Header__2PaMV",loginBlock:"Header_loginBlock__2UB2y"}},41:function(e,t,n){e.exports={activePage:"Paginator_activePage__Ym109"}},54:function(e,t,n){e.exports={avatar:"Users_avatar__3g3hZ"}},64:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){e.exports={item:"Post_item__IBu2k"}},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))},i=n(0),a=n.n(i),r=n(28),c=n.n(r),o=n(13),u=n(14),l=n(16),j=n(15),d=n(6),h=n(3),b=n(7),g=(n(64),n.p+"static/media/loader.14d0199a.svg"),f=n(1),p=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:g})})},O=n(2),x=function(e){return{isAuth:e.auth.isAuth}},E=n(23),m="CREATE-NEW-MESSAGE-TEXT",v="MESSAGE-ADD",C={dialogsData:[{id:1,name:"Andrew"},{id:2,name:"Sveta"},{id:3,name:"Julia"},{id:4,name:"Pasha"},{id:5,name:"Polina"},{id:6,name:"Seva"}],messagesData:[{id:1,message:"hello"},{id:2,message:"how are you?"},{id:3,message:"hi"}],createNewMessagetext:"m"},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=Object(O.a)({},e);return n.createNewMessagetext=t.newText,n;case v:var s=Object(O.a)(Object(O.a)({},e),{},{createNewMessagetext:"",messagesData:[].concat(Object(E.a)(e.messagesData),[{id:6,message:e.createNewMessagetext}])});return s.messagesData=Object(E.a)(e.messagesData),s.messagesData.push({id:6,message:e.createNewMessagetext}),s.createNewMessagetext="",s;default:return e}},P=n(25),S=n.n(P),A=function(e){var t="/message/"+e.id;return Object(f.jsx)("div",{className:S.a.dialog,children:Object(f.jsx)(b.b,{to:t,children:e.name})})},Q=function(e){return Object(f.jsx)("div",{className:"s.dialog",children:e.message})},w=function(e){var t=function(t){Object(l.a)(s,t);var n=Object(j.a)(s);function s(){return Object(o.a)(this,s),n.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(O.a)({},this.props)):Object(f.jsx)(h.a,{to:"/login"})}}]),s}(a.a.Component);return Object(d.b)(x)(t)}((function(e){var t=e.dialogsData.dialogsData.map((function(e){return Object(f.jsx)(A,{name:e.name,id:e.id})})),n=e.dialogsData.messagesData.map((function(e){return Object(f.jsx)(Q,{message:e.message})}));return Object(f.jsxs)("div",{className:S.a.dialogs,children:[Object(f.jsx)("div",{className:S.a.dialogsItems,children:t}),Object(f.jsxs)("div",{className:S.a.messages,children:[n,Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("textarea",{onChange:function(t){var n=t.target.value;e.MessageText(n)},value:e.createNewMessagetext,placeholder:"Enter you message"})]}),Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("button",{onClick:function(){e.addMessage()},children:"Send"})]})]})]})})),T=Object(d.b)((function(e){return{dialogsData:e.dialogPage}}),(function(e){return{addMessage:function(){e({type:"MESSAGE-ADD"})},MessageText:function(t){e({type:"CREATE-NEW-MESSAGE-TEXT",newText:t})}}}))(w),N=n(40),y=n.n(N),U=function(e){return Object(f.jsxs)("header",{className:y.a.Header,children:[Object(f.jsx)("img",{src:"data:image/png;base64,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"}),Object(f.jsx)("div",{className:y.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:" logout "})," "]}):Object(f.jsx)(b.b,{to:"/login",children:" login "})})]})},F=n(51).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"df505b79-2df6-439f-87d2-7a2e3eb90c41"}}),R=function(){return F.get("auth/me").then((function(e){return e.data}))},k=function(e,t,n){return F.post("auth/login",{email:e,password:t,rememberMe:n})},B=function(){return F.delete("auth/login")},M=function(e,t){return F.get("users?page=".concat(e,"&count").concat(t)).then((function(e){return e.data}))},D=function(e){return F.post("follow/".concat(e)).then((function(e){return e.data}))},_=function(e){return F.delete("follow/".concat(e)).then((function(e){return e.data}))},L=function(e){return F.get("profile/".concat(e)).then((function(e){return e.data}))},K=function(e){return F.get("profile/status/".concat(e))},V=function(e){return F.put("profile/status",{status:e})},J="SET_USER_DATA",X={id:null,email:null,login:null,isAuth:!1,password:null,rememberMe:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(O.a)(Object(O.a)({},e),t.data);default:return e}},W=function(e,t,n,s){return{type:J,data:{Id:e,email:t,login:n,isAuth:s}}},H=function(){return function(e){return R().then((function(t){var n=t.data,s=n.id,i=n.email,a=n.login;0===t.resultCode&&e(W(s,i,a,!0))}))}},q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(f.jsx)(U,Object(O.a)({},this.props))}}]),n}(a.a.Component),Y=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){B().then((function(t){0===t.data.resultCode&&e(W(null,null,null,!1))}))}}})(q),z=n(22),Z=Object(d.b)(null,{login:function(e,t,n){return function(s){k(e,t,n).then((function(e){0===e.data.resultCode&&s(H())}))}}})((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"login"}),Object(f.jsx)(z.d,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t,n){var s=n.setSubmitting;e.login(t.email,t.password,t.rememberMe),s(!1)},children:function(e){var t=e.isSubmitting;return Object(f.jsxs)(z.c,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(z.b,{type:"text",name:"email",placeholder:"Enter you login"}),Object(f.jsx)(z.a,{name:"email",component:"div"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(z.b,{type:"password",name:"password"}),Object(f.jsx)(z.a,{name:"password",component:"div"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(z.b,{type:"checkbox",name:"rememberMe"}),"Remember me"]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",disabled:t,children:"Submit"})})]})}})]})})),$=(n(85),function(e){return Object(f.jsx)("div",{children:"First klass"})}),ee=n(18),te=n.n(ee),ne=function(){return Object(f.jsxs)("nav",{className:"nav",children:[Object(f.jsx)("div",{className:te.a.item,children:Object(f.jsx)(b.b,{to:"/profile",activeClassName:te.a.activeLink,children:"Profile"})}),Object(f.jsx)("div",{className:te.a.item,children:Object(f.jsx)(b.b,{to:"/message",activeClassName:te.a.activeLink,children:"Messages"})}),Object(f.jsx)("div",{className:te.a.item,children:Object(f.jsx)(b.b,{to:"/users",activeClassName:te.a.activeLink,children:"Users"})}),Object(f.jsx)("div",{className:te.a.item,children:Object(f.jsx)(b.b,{to:"/music",activeClassName:te.a.activeLink,children:"Music"})}),Object(f.jsx)("div",{className:te.a.item,children:Object(f.jsx)(b.b,{to:"setting",activeClassName:te.a.activeLink,children:"Setting"})})]})},se=n(33),ie=n.n(se),ae=(a.a.Component,n(27)),re=function(e){var t=Object(i.useState)(!1),n=Object(ae.a)(t,2),s=n[0],a=n[1],r=Object(i.useState)(e.status),c=Object(ae.a)(r,2),o=c[0],u=c[1];Object(i.useEffect)((function(){u(e.status)}),[e.status]);return Object(f.jsxs)("div",{children:[!s&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"Enter new status"})}),s&&Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})," "]})]})},ce=function(e){return e.profile?Object(f.jsxs)("div",{className:ie.a.description,children:[Object(f.jsx)("div",{className:ie.a.avatar,children:Object(f.jsx)("img",{src:e.profile.photos.large})}),Object(f.jsx)(re,{status:e.status,updateStatus:e.updateStatus}),Object(f.jsxs)("div",{className:ie.a.item,children:[Object(f.jsxs)("div",{children:["Name : ",e.profile.fullName]}),Object(f.jsxs)("div",{children:["Status:  ",e.profile.aboutMe]}),Object(f.jsxs)("div",{children:["Contact's:",Object(f.jsxs)("div",{children:["Facebook: ",e.profile.contacts.facebook]}),Object(f.jsxs)("div",{children:["website: ",e.profile.contacts.website]}),Object(f.jsxs)("div",{children:["vk: ",e.profile.contacts.vk]})]})]})]}):Object(f.jsx)(p,{})},oe="ADD-POST",ue="CREATE-NEW-POST-TEXT",le="SET_USERS_PROFILE",je="SET_STATUS",de={posts:[{id:1,message:"Hello, it my first post",likesCount:12},{id:2,message:"yo",likesCount:5}],newPostText:"react",profile:null,status:"Helloo"},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:var n={id:5,message:e.newPostText,likesCount:0},s=Object(O.a)({},e);return s.posts=Object(E.a)(e.posts),s.posts.push(n),s.newPostText="",s;case ue:var i=Object(O.a)({},e);return i.newPostText=t.newText,i;case le:return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case je:return Object(O.a)(Object(O.a)({},e),{},{status:t.status});default:return e}},be=function(e){return{type:"CREATE-NEW-POST-TEXT",newText:e}},ge=function(e){return{type:je,status:e}},fe=n(34),pe=n.n(fe),Oe=(n(86),function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:e.message}),Object(f.jsxs)("div",{children:[e.likesCount," Likes"]})]})}),xe=function(e){var t=e.posts.map((function(e){return Object(f.jsx)(Oe,{message:e.message,likesCount:e.likesCount})})),n=a.a.createRef();return Object(f.jsxs)("div",{className:pe.a.content,children:[Object(f.jsx)("div",{className:pe.a.h,children:"My posts"}),Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("textarea",{onChange:function(){var t=n.current.value;e.updateNewPostText(t)},className:pe.a.item,ref:n,value:e.newPostText})]}),Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("button",{onClick:function(){e.addPost()},children:"Create post"})]}),Object(f.jsx)("div",{children:t})]})},Ee=Object(d.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(be(t))},addPost:function(){e({type:"ADD-POST"}),e(be(""))}}}))(xe),me=(n(87),function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(ce,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(f.jsx)(Ee,{})]})}),ve=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.UserId;e||(e=18048),this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(me,Object(O.a)(Object(O.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(a.a.Component),Ce=Object(h.f)(ve),Ie=Object(d.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUsersProfile:function(e){return function(t){L(e).then((function(e){t({type:le,profile:e})}))}},getStatus:function(e){return function(t){K(e).then((function(e){t(ge(e.data))}))}},updateStatus:function(e){return function(t){V(e).then((function(n){0===n.data.resultCode&&t(ge(e))}))}}})(Ce),Pe=(n(88),function(e){return Object(f.jsx)("div",{children:"set"})}),Se="FOLLOW",Ae="UNFOLLOW",Qe="SET_USERS",we="SET_CURRENT_PAGE",Te="SET_TOTAL_COUNT",Ne="IS_FETCHING",ye="TOGGLE_FOLLOW_PROGRESS",Ue={users:[],pageSize:10,currentPage:1,totalCount:0,isFetching:!1,followingInProgress:[2]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case Ae:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case Qe:return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case we:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case Te:return Object(O.a)(Object(O.a)({},e),{},{totalCount:t.totalCount});case Ne:return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case ye:return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.userID]):[e.followingInProgress.filter((function(e){return e!=t.userID}))]});default:return e}},Re=function(e){return{type:Te,totalCount:e}},ke=function(e){return{type:Ne,isFetching:e}},Be=function(e,t){return{type:ye,followingInProgress:e,userID:t}},Me=n.p+"static/media/user_avatar.329f5d2d.png",De=n(54),_e=n.n(De),Le=n(41),Ke=n.n(Le),Ve=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],s=1;s<=t;++s)n.push(s);var a=Object(i.useState)(1),r=Object(ae.a)(a,2),c=r[0],o=r[1],u=Math.ceil(t/10),l=10*(c-1)+1,j=10*c;return Object(f.jsxs)("div",{className:Ke.a.Paginator,children:[c>1&&Object(f.jsx)("button",{onClick:function(){o(c-1)},children:"PREV"}),Object(f.jsx)("div",{children:n.filter((function(e){return e<=j&&e>l})).map((function(t){return Object(f.jsxs)("span",{className:e.currentPage===t&&Ke.a.activePage,onClick:function(n){e.onPageChanged(t)},children:[t," "]})}))}),u>c&&Object(f.jsx)("button",{onClick:function(){o(c+1)},children:"NEXT"})]})},Je=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Ve,{totalCount:e.totalCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.users.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:Me,className:_e.a.avatar})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]})]},t.id)}))]})},Xe=n(55),Ge=Object(Xe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),We=function(e){return e.usersPage.pageSize},He=function(e){return e.usersPage.currentPage},qe=function(e){return e.usersPage.totalCount},Ye=function(e){return e.usersPage.isFetching},ze=function(e){return e.usersPage.followingInProgress},Ze=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(p,{}):null,Object(f.jsx)(Je,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),$e=Object(d.b)((function(e){return{users:Ge(e),pageSize:We(e),currentPage:He(e),totalCount:qe(e),isFetching:Ye(e),followingInProgress:ze(e)}}),{follow:function(e){return function(t){t(Be(!0,e)),D(e).then((function(n){0==n.data.resultCode&&t({type:Se,userID:e})})),t(Be(!1,e))}},unfollow:function(e){return function(t){t(Be(!0,e)),_(e).then((function(n){0==n.data.resultCode&&t({type:Ae,userID:e})})),t(Be(!1,e))}},setCurrentPage:function(e){return{type:we,currentPage:e}},setTotalCount:Re,getUsers:function(e,t){return function(n){n(ke(!0)),M(e,t).then((function(e){var t;n(ke(!1)),n((t=e.items,{type:Qe,users:t})),n(Re(e.totalCount))}))}},toggleFollowingInProgress:Be})(Ze),et="SET_INITIALIZED",tt={initialized:!1},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},st=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initialApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"app_wrapper",children:[Object(f.jsx)("div",{className:"Header",children:Object(f.jsx)(Y,{})}),Object(f.jsx)("div",{className:"nav",children:Object(f.jsx)(ne,{})}),Object(f.jsxs)("div",{className:"app_wrapper_content",children:[Object(f.jsx)(h.b,{path:"/profile/:UserId?",render:function(){return Object(f.jsx)(Ie,{})}}),Object(f.jsx)(h.b,{path:"/message",render:function(){return Object(f.jsx)(T,{})}}),Object(f.jsx)(h.b,{path:"/users",render:function(){return Object(f.jsx)($e,{})}}),Object(f.jsx)(h.b,{path:"/music",component:$}),Object(f.jsx)(h.b,{path:"/setting",component:Pe}),Object(f.jsx)(h.b,{path:"/login",render:function(){return Object(f.jsx)(Z,{})}})]})]})}):Object(f.jsx)(p,{})}}]),n}(a.a.Component),it=Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initialApp:function(){return function(e){e(H()).then((function(){e({type:et})}))}}})(st),at=n(35),rt=n(56),ct=Object(at.b)({profilePage:he,dialogPage:I,usersPage:Fe,auth:G,app:nt}),ot=Object(at.c)(ct,Object(at.a)(rt.a));c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(d.a,{store:ot,children:Object(f.jsx)(it,{})})}),document.getElementById("root")),s()}},[[89,1,2]]]);
//# sourceMappingURL=main.479bf48e.chunk.js.map