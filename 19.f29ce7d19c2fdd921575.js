(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"L+dR":function(t,n,i){"use strict";i.r(n),i.d(n,"ProfilModule",function(){return j});var o=i("ofXK"),e=i("tyNb"),r=i("0P5H"),c=i("mrSG"),a=i("3Pt+"),s=i("SxV6"),l=i("lJxs"),b=i("fXoL"),u=i("UbJi"),d=i("qfBg"),g=i("6/gD"),p=i("TEn/"),h=i("jhN1");let m=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(h.b))},t.\u0275pipe=b.Ib({name:"safe",type:t,pure:!0}),t})();function f(t,n){if(1&t&&(b.Kb(0,"img",20),b.Zb(1,"safe")),2&t){const t=b.Yb();b.ec("src",b.ac(1,1,t.photoUrl),b.kc)}}function O(t,n){if(1&t){const t=b.Pb();b.Ob(0,"ion-icon",21),b.Wb("click",function(){return b.ic(t),b.Yb().savePicture()}),b.Nb()}}function N(t,n){if(1&t){const t=b.Pb();b.Ob(0,"ion-icon",22),b.Wb("click",function(){return b.ic(t),b.Yb().takePicture()}),b.Nb()}}let v=(()=>{class t{constructor(t,n,i,o,e){this._auth=t,this._userService=n,this._photo=i,this._formBuilder=o,this._router=e,this.isActivatedCam=!1}ngOnInit(){this.editForm=this._formBuilder.group({firstName:["",a.l.required],lastName:["",a.l.required],email:["",a.l.required],username:["",a.l.required]})}ionViewWillEnter(){return Object(c.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this._auth.currentUser;this.uid=t,this.user$=this._userService.getByUid(t),this.photoUrl=yield this.user$.pipe(Object(s.a)(),Object(l.a)(t=>(null==t?void 0:t.photoUrl)?null==t?void 0:t.photoUrl:"assets/images/users/profile_32.png")).toPromise()})}takePicture(){return Object(c.b)(this,void 0,void 0,function*(){yield this._photo.takePict(),this.photoUrl=this._photo.avatarURL,this.isActivatedCam=!0})}savePicture(){this._photo.savePict(),this.isActivatedCam=!1}onSubmit(){this._userService.updateUserData(Object.assign(Object.assign({},this.editForm.value),{uid:this.uid})),this._router.navigate(["profil"])}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(u.a),b.Jb(d.a),b.Jb(g.a),b.Jb(a.a),b.Jb(e.e))},t.\u0275cmp=b.Db({type:t,selectors:[["app-edit-profil"]],decls:51,vars:21,consts:[["slot","start"],["color","primary","text",""],[1,"ion-no-padding",3,"fullscreen"],["lines","none"],[1,"ion-no-padding"],["size","4"],[1,"profile-avatar"],[3,"src",4,"ngIf"],["color","primary","name","add-circle",3,"click",4,"ngIf","ngIfElse"],["takephoto",""],[1,"ion-no-padding","formEdit"],["size","12",1,"ion-no-padding","ion-margin-top"],[3,"formGroup","ngSubmit"],["position","floating"],["required","","formControlName","email","type","text",3,"value"],["required","","formControlName","firstName","type","text",3,"value"],["required","","formControlName","lastName","type","text",3,"value"],["required","","formControlName","username","type","text",3,"value"],[1,"ion-margin-top","ion-margin-bottom","ion-text-center"],["color","primary","type","submit",3,"disabled"],[3,"src"],["color","primary","name","add-circle",3,"click"],["color","primary","name","camera",3,"click"]],template:function(t,n){if(1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-title"),b.rc(3,"Edit profil"),b.Nb(),b.Ob(4,"ion-buttons",0),b.Kb(5,"ion-back-button",1),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",2),b.Ob(7,"ion-item",3),b.Ob(8,"ion-label"),b.Ob(9,"h3"),b.Ob(10,"strong"),b.rc(11),b.Zb(12,"async"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(13,"ion-grid"),b.Ob(14,"ion-row",4),b.Ob(15,"ion-col",5),b.Ob(16,"div",6),b.pc(17,f,2,3,"img",7),b.pc(18,O,1,0,"ion-icon",8),b.pc(19,N,1,0,"ng-template",null,9,b.qc),b.Nb(),b.Nb(),b.Nb(),b.Ob(21,"ion-row",10),b.Ob(22,"ion-item-divider"),b.Ob(23,"ion-label"),b.Ob(24,"h3"),b.rc(25,"Edit your personnal infos"),b.Nb(),b.Nb(),b.Nb(),b.Ob(26,"ion-col",11),b.Ob(27,"form",12),b.Wb("ngSubmit",function(){return n.onSubmit()}),b.Ob(28,"ion-item"),b.Ob(29,"ion-label",13),b.rc(30,"E-Mail"),b.Nb(),b.Kb(31,"ion-input",14),b.Zb(32,"async"),b.Nb(),b.Ob(33,"ion-item"),b.Ob(34,"ion-label",13),b.rc(35,"FirstName"),b.Nb(),b.Kb(36,"ion-input",15),b.Zb(37,"async"),b.Nb(),b.Ob(38,"ion-item"),b.Ob(39,"ion-label",13),b.rc(40,"LasttName"),b.Nb(),b.Kb(41,"ion-input",16),b.Zb(42,"async"),b.Nb(),b.Ob(43,"ion-item"),b.Ob(44,"ion-label",13),b.rc(45,"Username"),b.Nb(),b.Kb(46,"ion-input",17),b.Zb(47,"async"),b.Nb(),b.Ob(48,"div",18),b.Ob(49,"ion-button",19),b.rc(50," Save "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t){const t=b.hc(20);let i=null,o=null,e=null,r=null,c=null;b.zb(6),b.ec("fullscreen",!0),b.zb(5),b.tc("",null==(i=b.ac(12,11,n.user$))?null:i.username," "),b.zb(6),b.ec("ngIf",!!n.photoUrl),b.zb(1),b.ec("ngIf",n.isActivatedCam)("ngIfElse",t),b.zb(9),b.ec("formGroup",n.editForm),b.zb(4),b.ec("value",null==(o=b.ac(32,13,n.user$))?null:o.email),b.zb(5),b.ec("value",null==(e=b.ac(37,15,n.user$))?null:e.firstName),b.zb(5),b.ec("value",null==(r=b.ac(42,17,n.user$))?null:r.lastName),b.zb(5),b.ec("value",null==(c=b.ac(47,19,n.user$))?null:c.username),b.zb(3),b.ec("disabled",n.editForm.invalid)}},directives:[p.t,p.V,p.U,p.i,p.f,p.g,p.q,p.z,p.B,p.s,p.G,p.p,o.j,p.A,a.m,a.h,a.c,p.y,p.cb,a.k,a.g,a.b,p.h,p.u],pipes:[o.b,m],styles:[".profile-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;bottom:10px;right:-200px;font-size:20px;border-radius:50%;background-color:#fff}.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%;height:80%!important;max-width:none;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-bottom:-3px;margin-left:150px}ion-button[_ngcontent-%COMP%]{width:40%;text-transform:capitalize;font-weight:500;font-size:large}.formEdit[_ngcontent-%COMP%]{border:2px solid var(--ion-color-primary);border-radius:10px}ion-item-divider[_ngcontent-%COMP%]{border-top-left-radius:8px;border-top-right-radius:8px;text-transform:capitalize;font-weight:500;font-size:large;background-color:var(--ion-color-primary);color:var(--ion-color-light)}ion-input[_ngcontent-%COMP%]{--color:var(--ion-color-medium-tint)}"]}),t})(),_=(()=>{class t{constructor(t,n,i){this._modalCtrl=t,this._userService=n,this._auth=i}ngOnInit(){}closeModal(){this._modalCtrl.dismiss()}onClick(){return Object(c.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this.user$.pipe(Object(s.a)()).toPromise();this._userService.update(t,{role:"pro"},this.category,this.location),this._modalCtrl.dismiss()})}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(p.Y),b.Jb(d.a),b.Jb(u.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-pro-account-modal"]],decls:33,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back-sharp"],["fixed",""],["size","12"],["lines","none",1,"ion-text-nowrap","ion-text-center"],["type","text","placeholder","category",3,"ngModel","ngModelChange"],["type","text","placeholder","State",3,"ngModel","ngModelChange"],["size","12",1,"ion-text-center"],["expand","block","shape","round",3,"click"]],template:function(t,n){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-buttons",0),b.Ob(3,"ion-button",1),b.Wb("click",function(){return n.closeModal()}),b.Kb(4,"ion-icon",2),b.Nb(),b.Nb(),b.Ob(5,"ion-title"),b.rc(6,"Pro account settings"),b.Nb(),b.Nb(),b.Nb(),b.Ob(7,"ion-content"),b.Ob(8,"ion-grid",3),b.Ob(9,"ion-row"),b.Ob(10,"ion-col",4),b.Ob(11,"ion-item",5),b.Ob(12,"ion-text"),b.Ob(13,"h4"),b.Ob(14,"b"),b.rc(15,"Enter/Select a category"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(16,"ion-col",4),b.Ob(17,"ion-item"),b.Ob(18,"ion-input",6),b.Wb("ngModelChange",function(t){return n.category=t}),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(19,"ion-row"),b.Ob(20,"ion-col",4),b.Ob(21,"ion-item",5),b.Ob(22,"ion-text"),b.Ob(23,"h4"),b.Ob(24,"b"),b.rc(25,"Add your location"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(26,"ion-col",4),b.Ob(27,"ion-item"),b.Ob(28,"ion-input",7),b.Wb("ngModelChange",function(t){return n.location=t}),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(29,"ion-row"),b.Ob(30,"ion-col",8),b.Ob(31,"ion-button",9),b.Wb("click",function(){return n.onClick()}),b.rc(32," Save "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.zb(18),b.ec("ngModel",n.category),b.zb(10),b.ec("ngModel",n.location))},directives:[p.t,p.V,p.i,p.h,p.u,p.U,p.q,p.s,p.G,p.p,p.z,p.R,p.y,p.cb,a.g,a.i],styles:[""]}),t})();var x=i("+acA"),C=i("P3Ni"),P=i("n4ln");function y(t,n){if(1&t&&b.Kb(0,"img",29),2&t){const t=b.Yb();b.ec("src",t.photoUrl,b.kc)}}function w(t,n){if(1&t&&b.Kb(0,"div",32),2&t){const t=n.$implicit;b.nc("background-image: url("+(null==t?null:t.image_url)+");"),b.ec("routerLink","../detail/"+(null==t?null:t.id))}}function M(t,n){if(1&t&&(b.Ob(0,"div"),b.Ob(1,"div",30),b.pc(2,w,1,3,"div",31),b.Zb(3,"async"),b.Nb(),b.Nb()),2&t){const t=b.Yb();b.zb(2),b.ec("ngForOf",b.ac(3,1,t.favProducsList$))}}function z(t,n){if(1&t&&b.Kb(0,"div",32),2&t){const t=n.$implicit;b.nc("background-image: url("+(null==t?null:t.image_url)+");"),b.ec("routerLink","../detail/"+(null==t?null:t.id))}}function k(t,n){if(1&t&&(b.Ob(0,"div"),b.Ob(1,"div",30),b.pc(2,z,1,3,"div",31),b.Zb(3,"async"),b.Nb(),b.Nb()),2&t){const t=b.Yb();b.zb(2),b.ec("ngForOf",b.ac(3,1,t.likedProducsList$))}}function S(t,n){if(1&t&&(b.Ob(0,"ion-item",34),b.Ob(1,"ion-avatar",4),b.Kb(2,"img",29),b.Nb(),b.Ob(3,"ion-label"),b.Ob(4,"h3"),b.rc(5),b.Nb(),b.Ob(6,"p"),b.rc(7),b.Zb(8,"async"),b.Zb(9,"category"),b.Nb(),b.Nb(),b.Nb()),2&t){const t=n.$implicit;b.ec("routerLink","pro/"+(null==t?null:t.uid)),b.zb(2),b.ec("src",null==t?null:t.photoUrl,b.kc),b.zb(3),b.sc(null==t?null:t.username),b.zb(2),b.sc(b.ac(8,4,b.ac(9,6,null==t?null:t.categoryId)))}}function $(t,n){if(1&t&&(b.Ob(0,"div"),b.pc(1,S,10,8,"ion-item",33),b.Zb(2,"async"),b.Nb()),2&t){const t=b.Yb();b.zb(1),b.ec("ngForOf",b.ac(2,1,t.followingList))}}const U=[{path:"",component:(()=>{class t{constructor(t,n,i,o,e,r,c,a,s){this.actionSheetCtrl=t,this._auth=n,this._router=i,this._menu=o,this._userService=e,this._favs=r,this._likes=c,this._photo=a,this._modalController=s,this.openedSegment="grid",this.isActivatedCam=!1}ngOnInit(){return Object(c.b)(this,void 0,void 0,function*(){})}ionViewWillEnter(){return Object(c.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this._auth.currentUser;this.user$=this._userService.getByUid(t),this.photoUrl=yield this.user$.pipe(Object(s.a)(),Object(l.a)(t=>(null==t?void 0:t.photoUrl)?null==t?void 0:t.photoUrl:"assets/images/users/profile_32.png")).toPromise(),this.favProducsList$=this._favs.getFavProductsList(),this.likedProducsList$=this._likes.getLikedProductsList(),this.likes$=this._likes.getCountByUID(t),this.favs$=this._favs.getCountByUID(t),this.nbFollowings$=this._userService.getCountFollowing(t),this.followingList=this._userService.getFollowingInfos(t)})}takePicture(){return Object(c.b)(this,void 0,void 0,function*(){yield this._photo.takePict(),this.photoUrl=this._photo.avatarURL,this.isActivatedCam=!0})}savePicture(){this._photo.savePict(),this.isActivatedCam=!1}openFirst(){this._menu.enable(!0,"first"),this._menu.open("first")}openEnd(){this._menu.open("end")}openCustom(){this._menu.enable(!0,"custom"),this._menu.open("custom")}segmentChanged(t){this.openedSegment=t.detail.value}logout(){this._auth.signOut(),this._router.navigate(["/login"])}presentActionSheet(){return Object(c.b)(this,void 0,void 0,function*(){const t=yield this.actionSheetCtrl.create({cssClass:"my-custom-class",buttons:[{text:"Edit profile",icon:"create-outline",handler:()=>{console.log("edit clicked")}},{text:"Switch to Pro account",handler:()=>Object(c.b)(this,void 0,void 0,function*(){const t=yield this._modalController.create({component:_,cssClass:"my-custom-modal-css",componentProps:{user$:this.user$}});yield t.present()})},{text:"Logout",icon:"log-out-outline",handler:()=>{this._auth.signOut(),this._router.navigate(["/login"])}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{}}]});yield t.present(),yield t.onDidDismiss()})}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(p.a),b.Jb(u.a),b.Jb(e.e),b.Jb(p.X),b.Jb(d.a),b.Jb(x.a),b.Jb(C.a),b.Jb(g.a),b.Jb(p.Y))},t.\u0275cmp=b.Db({type:t,selectors:[["app-profil"]],decls:62,vars:24,consts:[[3,"fullscreen"],["lines","none"],["name","chevron-down-outline"],["id","main"],["slot","start"],[3,"click"],["slot","start","name","menu"],[1,"ion-padding-top"],["size","4"],[1,"profile-avatar"],[3,"src",4,"ngIf"],["size","8",1,"ion-align-self-center"],["size","4",1,"data-box"],[1,"sec-row"],["size","6",1,"ion-margin-left"],[1,"status"],[1,"name"],["size","12"],["routerLink","edit","expand","full","color","light",1,"btn-edit"],["color","medium",3,"ngModel","ngModelChange","ionChange"],["value","grid"],["name","grid-outline"],["value","heart"],["name","heart-outline"],["value","tags"],["name","person-circle-outline"],[1,"ion-padding-top",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"src"],[1,"grid"],["class","img_box",3,"style","routerLink",4,"ngFor","ngForOf"],[1,"img_box",3,"routerLink"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,n){if(1&t&&(b.Ob(0,"ion-content",0),b.Ob(1,"ion-item",1),b.Ob(2,"ion-label"),b.Ob(3,"h3"),b.Ob(4,"strong"),b.rc(5),b.Zb(6,"async"),b.Nb(),b.Kb(7,"ion-icon",2),b.Nb(),b.Nb(),b.Ob(8,"div",3),b.Ob(9,"ion-buttons",4),b.Ob(10,"ion-button",5),b.Wb("click",function(){return n.presentActionSheet()}),b.Kb(11,"ion-icon",6),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(12,"ion-grid"),b.Ob(13,"ion-row",7),b.Ob(14,"ion-col",8),b.Ob(15,"div",9),b.pc(16,y,1,1,"img",10),b.Nb(),b.Nb(),b.Ob(17,"ion-col",11),b.Ob(18,"ion-row"),b.Ob(19,"ion-col",12),b.Ob(20,"strong"),b.rc(21),b.Zb(22,"async"),b.Nb(),b.Ob(23,"p"),b.rc(24,"Likes"),b.Nb(),b.Nb(),b.Ob(25,"ion-col",12),b.Ob(26,"strong"),b.rc(27),b.Zb(28,"async"),b.Nb(),b.Ob(29,"p"),b.rc(30,"favs"),b.Nb(),b.Nb(),b.Ob(31,"ion-col",12),b.Ob(32,"strong"),b.rc(33),b.Zb(34,"async"),b.Nb(),b.Ob(35,"p"),b.rc(36,"Following Pros"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(37,"ion-row",13),b.Ob(38,"ion-col",14),b.Ob(39,"p",15),b.Ob(40,"strong",16),b.rc(41),b.Zb(42,"async"),b.Zb(43,"async"),b.Nb(),b.Kb(44,"br"),b.Nb(),b.Nb(),b.Nb(),b.Ob(45,"ion-row"),b.Ob(46,"ion-col",17),b.Ob(47,"ion-button",18),b.rc(48,"Edit Profile"),b.Nb(),b.Nb(),b.Nb(),b.Ob(49,"ion-row",7),b.Ob(50,"ion-col",17),b.Ob(51,"ion-segment",19),b.Wb("ngModelChange",function(t){return n.openedSegment=t})("ionChange",function(t){return n.segmentChanged(t)}),b.Ob(52,"ion-segment-button",20),b.Kb(53,"ion-icon",21),b.Nb(),b.Ob(54,"ion-segment-button",22),b.Kb(55,"ion-icon",23),b.Nb(),b.Ob(56,"ion-segment-button",24),b.Kb(57,"ion-icon",25),b.Nb(),b.Nb(),b.Ob(58,"div",26),b.pc(59,M,4,3,"div",27),b.pc(60,k,4,3,"div",27),b.pc(61,$,3,3,"div",28),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t){let t=null,i=null;b.ec("fullscreen",!0),b.zb(5),b.tc("",null==(t=b.ac(6,12,n.user$))?null:t.username," "),b.zb(11),b.ec("ngIf",!!n.photoUrl),b.zb(5),b.tc(" ",b.ac(22,14,n.likes$)," "),b.zb(6),b.tc(" ",b.ac(28,16,n.favs$)," "),b.zb(6),b.tc(" ",b.ac(34,18,n.nbFollowings$)," "),b.zb(8),b.uc("",null==(i=b.ac(42,20,n.user$))?null:i.firstName," ",null==(i=b.ac(43,22,n.user$))?null:i.lastName,""),b.zb(10),b.ec("ngModel",n.openedSegment),b.zb(7),b.ec("ngSwitch",n.openedSegment),b.zb(1),b.ec("ngSwitchCase","grid"),b.zb(1),b.ec("ngSwitchCase","heart")}},directives:[p.q,p.z,p.B,p.u,p.i,p.h,p.s,p.G,p.p,o.j,e.f,p.ab,p.I,p.bb,a.g,a.i,p.J,o.k,o.l,o.m,o.i,p.e],pipes:[o.b,P.a],styles:["h1[_ngcontent-%COMP%]{font-size:30px}ion-toolbar[_ngcontent-%COMP%]{--min-height:35px!important}.grid[_ngcontent-%COMP%]{padding-bottom:20px}ion-item[_ngcontent-%COMP%]{padding-top:20px!important}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:100px!important;max-height:100px!important}ion-label[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize}.allProducts[_ngcontent-%COMP%]{position:absolute;right:5px}.img_box[_ngcontent-%COMP%]{width:33.3%;border-radius:50%;padding-bottom:0}.my-custom-menu[_ngcontent-%COMP%]{--width:75%}ion-title[_ngcontent-%COMP%]{font-size:small;color:#000}.settingBtn[_ngcontent-%COMP%]{height:100px;position:absolute;bottom:0}.add_story[_ngcontent-%COMP%]{position:relative;margin-left:7px;margin-right:12px;border-radius:50%;padding:2px}.profile-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;bottom:-5px;right:21px;font-size:20px;border-radius:50%;background-color:#fff}.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px!important;max-width:none;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-bottom:-3px;margin-left:6px}.data-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px;font-size:14px;color:#000;font-weight:500}.data-box[_ngcontent-%COMP%]{text-align:center!important}ion-item[_ngcontent-%COMP%]:first-child{position:fixed;width:100%!important;z-index:999}ion-grid[_ngcontent-%COMP%]{margin-top:12%}@media (min-width:600px){ion-row.sec-row[_ngcontent-%COMP%]{margin-top:-2%}}@media (max-width:599px){ion-row.sec-row[_ngcontent-%COMP%]{margin-top:-4%}}p.status[_ngcontent-%COMP%]{font-size:12px;padding-left:10px}strong.name[_ngcontent-%COMP%]{font-size:small!important}.btn-edit[_ngcontent-%COMP%]{box-shadow:none!important;font-weight:600}.highlights[_ngcontent-%COMP%]{display:flex;overflow:scroll}.highlights[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin:7px 6px 7px 7px;background-size:contain;border-radius:50%;padding:2px}.highlights[_ngcontent-%COMP%]   .add_highlight[_ngcontent-%COMP%]{margin-left:7px;margin-right:12px}.add_highlight[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:61px;border:1px!important;color:silver}.highlights[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px!important;max-width:none;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-bottom:-3px}.highlight-name[_ngcontent-%COMP%]{font-size:11px;text-align:center;margin:4px 0 0;font-weight:500;color:#383a3e}.grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.img_box[_ngcontent-%COMP%]{border:1px solid #fff;width:30%;padding-bottom:31%;background-size:cover;background-repeat:no-repeat;margin-left:3.3%;margin-bottom:3.3%}"]}),t})()},{path:"edit",component:v},{path:"pro/:id",component:r.a}];let L=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[e.g.forChild(U)],e.g]}),t})();var J=i("PCNd");let j=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[o.c,L,p.W,a.d,a.j,J.a]]}),t})()}}]);