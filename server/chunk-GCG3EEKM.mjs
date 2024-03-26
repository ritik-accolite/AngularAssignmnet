import './polyfills.server.mjs';
import{A as y,B as N,C as x,D as j,E as H,F,I as R,M as T,N as U,O as L,Q as A,R as C,S as M,a as w,b as f,c,d as g,e as s,f as u,g as h,h as p,i,j as n,k as d,l as D,m as O,n as o,o as l,p as b,q as k,r as P,z as _}from"./chunk-6FQLOKGJ.mjs";var $=(()=>{let e=class e{constructor(r,a){this.route=r,this.http=a,this.id=""}ngOnInit(){let r=this.route.snapshot.paramMap.get("id");this.id=parseInt(r,10),this.fetchUserDetails()}fetchUserDetails(){this.http.get("https://jsonplaceholder.typicode.com/users/"+this.id).subscribe(r=>{this.userDetails=r},r=>{console.error("Error fetching user details:",r)})}};e.\u0275fac=function(a){return new(a||e)(u(U),u(x))},e.\u0275cmp=c({type:e,selectors:[["app-user-details"]],decls:44,vars:10,consts:[[1,"vh-100",2,"background-color","#f4f5f7"],[1,"container","py-5","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col","col-lg-6","mb-4","mb-lg-0"],[1,"card","mb-3",2,"border-radius",".5rem"],[1,"row","g-0"],[1,"col-md-4","gradient-custom","text-center","text-white",2,"border-top-left-radius",".5rem","border-bottom-left-radius",".5rem"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp","alt","Avatar",1,"img-fluid","my-5",2,"width","80px"],[1,"far","fa-edit","mb-5"],[1,"col-md-8"],[1,"card-body","p-4"],[1,"mt-0","mb-4"],[1,"row","pt-1"],[1,"col-6","mb-3"],[1,"text-muted"]],template:function(a,m){a&1&&(i(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),d(7,"img",7),i(8,"h5"),o(9),k(10,"uppercase"),n(),i(11,"p"),o(12),n(),d(13,"i",8),n(),i(14,"div",9)(15,"div",10)(16,"h6"),o(17,"Information"),n(),d(18,"hr",11),i(19,"div",12)(20,"div",13)(21,"h6"),o(22,"Email"),n(),i(23,"p",14),o(24),n()(),i(25,"div",13)(26,"h6"),o(27,"Phone"),n(),i(28,"p",14),o(29),n()()(),i(30,"h6"),o(31,"Company"),n(),d(32,"hr",11),i(33,"div",12)(34,"div",13)(35,"h6"),o(36,"Name"),n(),i(37,"p",14),o(38),n()(),i(39,"div",13)(40,"h6"),o(41,"Description"),n(),i(42,"p",14),o(43),n()()()()()()()()()()()),a&2&&(s(9),b("",m.userDetails.id,": ",P(10,8,m.userDetails.name),""),s(3),b("Address: ",m.userDetails.address.street,", ",m.userDetails.address.city,""),s(12),l(m.userDetails.email),s(5),l(m.userDetails.phone),s(9),l(m.userDetails.company.name),s(5),l(m.userDetails.company.bs))},dependencies:[N],styles:[".gradient-custom[_ngcontent-%COMP%]{background:#f6d365;background:-webkit-linear-gradient(to right bottom,rgba(246,211,101,1),rgba(253,160,133,1));background:linear-gradient(to right bottom,#f6d365,#fda085)}"]});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["app-user-card"]],inputs:{user:"user"},decls:27,vars:7,consts:[[1,"card","mb-4"],[1,"card","overflow-hidden","text-center"],["src","https://dummyimage.com/280x120/eb5084/eb5084.png","alt","",1,"card-img-top","img-fluid"],[1,"card-body","p-0"],[1,"avatar","xl","rounded-circle","bg-gray","bg-opacity-10","p-1","position-relative","mt-n5","d-block","mx-auto"],["src","https://bootdey.com/img/Content/avatar/avatar2.png","alt","",1,"avatar-img","img-fluid","rounded-circle"],[1,"mb-0","pt-3"],[1,"text-reset"],[1,"text-muted","small","d-block","mb-4"],[1,"row","mx-0","border-top","border-bottom"],[1,"list-group","list-group-flush"],[1,"list-group-item","px-3","d-flex","align-items-center","justify-content-between"],[1,"text-muted","small"],[1,"btn","btn-primary",3,"routerLink"]],template:function(a,m){a&1&&(i(0,"div",0)(1,"div",1),d(2,"img",2),i(3,"div",3)(4,"a",4),d(5,"img",5),n(),i(6,"h5",6)(7,"p",7),o(8),n()(),i(9,"span",8),o(10),n(),i(11,"div",9)(12,"ul",10)(13,"li",11)(14,"span",12),o(15,"Email"),n(),i(16,"strong"),o(17),n()(),i(18,"li",11)(19,"span",12),o(20,"Address"),n(),i(21,"strong"),o(22),n()(),i(23,"li",11)(24,"div",7)(25,"a",13),o(26,"Click Here for More Details"),n()()()()()()()()),a&2&&(s(8),l(m.user.name),s(2),l(m.user.company.name),s(7),l(m.user.email),s(5),b("",m.user.address.street,", ",m.user.address.city,""),s(3),O("routerLink","/user-details/",m.user.id,""))},dependencies:[C],styles:["body[_ngcontent-%COMP%]{margin-top:20px;background:#eee}.avatar.xl[_ngcontent-%COMP%]{width:5rem;height:5rem;font-size:1.09375rem}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}.bg-opacity-10[_ngcontent-%COMP%]{--bs-bg-opacity: .1}.bg-gray[_ngcontent-%COMP%]{--bs-bg-opacity: 1;background-color:rgba(var(--bs-gray-rgb),var(--bs-bg-opacity))!important}.p-1[_ngcontent-%COMP%]{padding:.25rem!important}.mt-n5[_ngcontent-%COMP%]{margin-top:-1.5rem!important}.mx-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.position-relative[_ngcontent-%COMP%]{position:relative!important}.d-block[_ngcontent-%COMP%]{display:block!important}"]});let t=e;return t})();function V(t,e){t&1&&(i(0,"div")(1,"p"),o(2,"Loading..."),n()())}function W(t,e){if(t&1&&(i(0,"div",7),d(1,"app-user-card",8),n()),t&2){let S=e.$implicit;s(),p("user",S)}}function X(t,e){if(t&1&&(i(0,"div",2)(1,"h2",3),o(2,"List of Users:"),n(),i(3,"div",4)(4,"div",5),h(5,W,2,1,"div",6),n()()()),t&2){let S=D();s(5),p("ngForOf",S.users)}}function Y(t,e){t&1&&(i(0,"div")(1,"p"),o(2,"No users found."),n()())}var E=(()=>{let e=class e{constructor(r){this.http=r,this.users=[],this.loading=!0}ngOnInit(){this.fetchUsers()}fetchUsers(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(r=>{this.users=r,this.loading=!1})}};e.\u0275fac=function(a){return new(a||e)(u(x))},e.\u0275cmp=c({type:e,selectors:[["app-home"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-bg-secondary",4,"ngIf"],[1,"text-bg-secondary"],[1,"text-center"],[1,"container","my-3"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[3,"user"]],template:function(a,m){a&1&&h(0,V,3,0,"div",0)(1,X,6,1,"div",1)(2,Y,3,0,"div",0),a&2&&(p("ngIf",m.loading),s(),p("ngIf",!m.loading&&m.users.length>0),s(),p("ngIf",!m.loading&&m.users.length===0))},dependencies:[_,y,q]});let t=e;return t})();var ee=[{path:"user-details/:id",component:$},{path:"home",component:E}],G=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=g({type:e}),e.\u0275inj=f({imports:[M.forRoot(ee),M]});let t=e;return t})();function te(t,e){t&1&&d(0,"router-outlet")}function ie(t,e){t&1&&d(0,"app-home")}var I=(()=>{let e=class e{constructor(r){this.router=r,this.showRouterOutlet=!1}ngOnInit(){this.router.events.pipe(w(r=>r instanceof T)).subscribe(r=>{this.showRouterOutlet=r.urlAfterRedirects!=="/"})}};e.\u0275fac=function(a){return new(a||e)(u(A))},e.\u0275cmp=c({type:e,selectors:[["app-root"]],decls:14,vars:2,consts:[["data-bs-theme","dark",1,"navbar","bg-dark","navbar-expand-lg","bg-body-tertiary","border-bottom","border-body"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","home",1,"nav-link","active"],[4,"ngIf"]],template:function(a,m){a&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"User Database"),n(),i(4,"button",3),d(5,"span",4),n(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),o(10,"Home"),n()()()()()(),i(11,"div"),h(12,te,1,0,"router-outlet",9)(13,ie,1,0,"app-home",9),n()),a&2&&(s(12),p("ngIf",m.showRouterOutlet),s(),p("ngIf",!m.showRouterOutlet))},dependencies:[y,L,C,E]});let t=e;return t})();var J=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=g({type:e,bootstrap:[I]}),e.\u0275inj=f({providers:[F()],imports:[H,G,j]});let t=e;return t})();var ne=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=g({type:e,bootstrap:[I]}),e.\u0275inj=f({imports:[J,R]});let t=e;return t})();export{ne as a};
