(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3KVQ":function(e,r,t){"use strict";t.r(r),t.d(r,"RegisterModule",function(){return k});var i=t("ofXK"),o=t("tyNb"),n=t("mrSG"),s=t("3Pt+"),b=t("gcOT"),a=t("cu8M"),c=t("fXoL"),u=t("UbJi"),d=t("qfBg"),f=t("TEn/");function m(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"First Name is required"),c.Nb())}function l(e,r){if(1&e&&(c.Ob(0,"div",16),c.oc(1,m,2,0,"div",17),c.Nb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.f.firstName.errors.required)}}function p(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"Last Name is required"),c.Nb())}function g(e,r){if(1&e&&(c.Ob(0,"div",16),c.oc(1,p,2,0,"div",17),c.Nb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.f.lastName.errors.required)}}function N(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"Last Name is required"),c.Nb())}function v(e,r){if(1&e&&(c.Ob(0,"div",16),c.oc(1,N,2,0,"div",17),c.Nb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.f.email.errors.required)}}function O(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"Username is required"),c.Nb())}function q(e,r){if(1&e&&(c.Ob(0,"div",16),c.oc(1,O,2,0,"div",17),c.Nb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.f.username.errors.required)}}function h(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"Password is required"),c.Nb())}function w(e,r){1&e&&(c.Ob(0,"div"),c.qc(1,"Password must be at least 6 characters"),c.Nb())}function y(e,r){if(1&e&&(c.Ob(0,"div",16),c.oc(1,h,2,0,"div",17),c.oc(2,w,2,0,"div",17),c.Nb()),2&e){const e=c.Yb();c.zb(1),c.ec("ngIf",e.f.password.errors.required),c.zb(1),c.ec("ngIf",e.f.password.errors.minlength)}}const{Storage:I}=b.d,z=[{path:"",component:(()=>{class e{constructor(e,r,t,i){this._formBuilder=e,this._router=r,this._auth=t,this._userService=i,this.submitted=!1}ngOnInit(){this.registerForm=this._formBuilder.group({firstName:["",s.l.required],lastName:["",s.l.required],email:["",s.l.required],username:["",s.l.required],password:["",[s.l.required,s.l.minLength(6)]]})}get f(){return this.registerForm.controls}onSubmit(){return Object(n.b)(this,void 0,void 0,function*(){this.submitted=!0,this.registerForm.invalid||(yield I.set({key:a.c,value:"true"}),yield this._userService.registerWithEmailPwd(this.registerForm.value),this._router.navigate(["/home"]))})}}return e.\u0275fac=function(r){return new(r||e)(c.Jb(s.a),c.Jb(o.e),c.Jb(u.a),c.Jb(d.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-register"]],decls:39,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"input-group"],["position","floating","for","firstName"],["type","text","formControlName","firstName"],["class","errors",4,"ngIf"],["position","floating","for","lastName"],["type","text","formControlName","lastName"],["position","floating","for","email"],["type","email","formControlName","email"],["position","floating","for","username"],["type","text","formControlName","username"],["position","floating","for","password"],["type","password","formControlName","password"],["type","submit","expand","block"],["routerLink","/login","type","button","expand","block","color","primary","fill","clear"],["routerLink","/login",1,"redirect"],[1,"errors"],[4,"ngIf"]],template:function(e,r){1&e&&(c.Ob(0,"ion-content"),c.Ob(1,"h3"),c.qc(2,"Create your account!"),c.Nb(),c.Ob(3,"form",0),c.Wb("ngSubmit",function(){return r.onSubmit()}),c.Ob(4,"div",1),c.Ob(5,"ion-item"),c.Ob(6,"ion-label",2),c.qc(7,"First Name"),c.Nb(),c.Kb(8,"ion-input",3),c.Nb(),c.oc(9,l,2,1,"div",4),c.Ob(10,"ion-item"),c.Ob(11,"ion-label",5),c.qc(12,"Last Name"),c.Nb(),c.Kb(13,"ion-input",6),c.Nb(),c.oc(14,g,2,1,"div",4),c.Ob(15,"ion-item"),c.Ob(16,"ion-label",7),c.qc(17,"Email"),c.Nb(),c.Kb(18,"ion-input",8),c.Nb(),c.oc(19,v,2,1,"div",4),c.Ob(20,"ion-item"),c.Ob(21,"ion-label",9),c.qc(22,"Username"),c.Nb(),c.Kb(23,"ion-input",10),c.Nb(),c.oc(24,q,2,1,"div",4),c.Ob(25,"ion-item"),c.Ob(26,"label",11),c.qc(27,"Password"),c.Nb(),c.Kb(28,"ion-input",12),c.Nb(),c.oc(29,y,3,2,"div",4),c.Nb(),c.Ob(30,"ion-button",13),c.qc(31," Register "),c.Nb(),c.Ob(32,"ion-button",14),c.qc(33,"Cancel "),c.Nb(),c.Ob(34,"ion-button",14),c.Ob(35,"span"),c.qc(36,"Already have an account? "),c.Ob(37,"span",15),c.qc(38,"Log In"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.zb(3),c.ec("formGroup",r.registerForm),c.zb(6),c.ec("ngIf",r.submitted&&r.f.firstName.errors),c.zb(5),c.ec("ngIf",r.submitted&&r.f.lastName.errors),c.zb(5),c.ec("ngIf",r.submitted&&r.f.lastName.errors),c.zb(5),c.ec("ngIf",r.submitted&&r.f.username.errors),c.zb(5),c.ec("ngIf",r.submitted&&r.f.password.errors))},directives:[f.q,s.m,s.h,s.c,f.z,f.B,f.y,f.db,s.g,s.b,i.k,f.h,o.f,f.bb],styles:["ion-content[_ngcontent-%COMP%]{--padding-top:40%;--padding-start:10%;--padding-end:10%}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(r){return new(r||e)},imports:[[o.g.forChild(z)],o.g]}),e})(),k=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(r){return new(r||e)},imports:[[i.c,C,f.W,s.j]]}),e})()}}]);