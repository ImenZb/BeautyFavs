(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"L+dR":function(t,n,i){"use strict";i.r(n),i.d(n,"ProfilModule",function(){return z});var o=i("ofXK"),e=i("tyNb"),c=i("mrSG"),r=i("SxV6"),s=i("lJxs"),a=i("fXoL"),l=i("TEn/"),b=i("qfBg"),d=i("UbJi"),g=i("3Pt+");let u=(()=>{class t{constructor(t,n,i){this._modalCtrl=t,this._userService=n,this._auth=i}ngOnInit(){}closeModal(){this._modalCtrl.dismiss()}onClick(){return Object(c.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this.user$.pipe(Object(r.a)()).toPromise();this._userService.update(t,{role:"pro"},this.category),this._modalCtrl.dismiss()})}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(l.Z),a.Jb(b.a),a.Jb(d.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-pro-account-modal"]],decls:21,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back-sharp"],["fixed",""],["size","12"],["lines","none",1,"ion-text-nowrap","ion-text-center"],["type","text","placeholder","category",3,"ngModel","ngModelChange"],["expand","block","fill","clear","shape","round",3,"click"]],template:function(t,n){1&t&&(a.Ob(0,"ion-header"),a.Ob(1,"ion-toolbar"),a.Ob(2,"ion-buttons",0),a.Ob(3,"ion-button",1),a.Wb("click",function(){return n.closeModal()}),a.Kb(4,"ion-icon",2),a.Nb(),a.Nb(),a.Ob(5,"ion-title"),a.pc(6,"Pro account settings"),a.Nb(),a.Nb(),a.Nb(),a.Ob(7,"ion-content"),a.Ob(8,"ion-grid",3),a.Ob(9,"ion-row"),a.Ob(10,"ion-col",4),a.Ob(11,"ion-item",5),a.Ob(12,"ion-text"),a.Ob(13,"h4"),a.Ob(14,"b"),a.pc(15,"Enter/Select a category"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(16,"ion-col",4),a.Ob(17,"ion-item"),a.Ob(18,"ion-input",6),a.Wb("ngModelChange",function(t){return n.category=t}),a.Nb(),a.Ob(19,"ion-button",7),a.Wb("click",function(){return n.onClick()}),a.pc(20," Save "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(18),a.dc("ngModel",n.category))},directives:[l.t,l.V,l.i,l.h,l.u,l.U,l.q,l.s,l.G,l.p,l.z,l.R,l.y,l.db,g.g,g.i],styles:[""]}),t})();var p=i("+acA"),h=i("P3Ni"),m=i("6/gD"),f=i("jhN1");let O=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(f.b))},t.\u0275pipe=a.Ib({name:"safe",type:t,pure:!0}),t})();function _(t,n){if(1&t&&(a.Kb(0,"img",31),a.Zb(1,"safe")),2&t){const t=a.Yb();a.dc("src",a.ac(1,1,t.photoUrl),a.ic)}}function x(t,n){if(1&t){const t=a.Pb();a.Ob(0,"ion-icon",32),a.Wb("click",function(){return a.gc(t),a.Yb().savePicture()}),a.Nb()}}function v(t,n){if(1&t){const t=a.Pb();a.Ob(0,"ion-icon",33),a.Wb("click",function(){return a.gc(t),a.Yb().takePicture()}),a.Nb()}}function C(t,n){if(1&t&&a.Kb(0,"div",36),2&t){const t=n.$implicit;a.lc("background-image: url("+(null==t?null:t.image_url)+");"),a.dc("routerLink","../detail/"+(null==t?null:t.id))}}function N(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"div",34),a.nc(2,C,1,3,"div",35),a.Zb(3,"async"),a.Nb(),a.Nb()),2&t){const t=a.Yb();a.zb(2),a.dc("ngForOf",a.ac(3,1,t.favProducsList$))}}function P(t,n){if(1&t&&a.Kb(0,"div",36),2&t){const t=n.$implicit;a.lc("background-image: url("+(null==t?null:t.image_url)+");"),a.dc("routerLink","../detail/"+(null==t?null:t.id))}}function w(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"div",34),a.nc(2,P,1,3,"div",35),a.Zb(3,"async"),a.Nb(),a.Nb()),2&t){const t=a.Yb();a.zb(2),a.dc("ngForOf",a.ac(3,1,t.likedProducsList$))}}function M(t,n){1&t&&(a.Ob(0,"div"),a.pc(1," pros "),a.Nb())}const y=[{path:"",component:(()=>{class t{constructor(t,n,i,o,e,c,r,s,a){this.actionSheetCtrl=t,this._auth=n,this._router=i,this._menu=o,this._userService=e,this._favs=c,this._likes=r,this._photo=s,this._modalController=a,this.openedSegment="grid",this.isActivatedCam=!1}ngOnInit(){return Object(c.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this._auth.currentUser;this.user$=this._userService.getByUid(t),this.photoUrl=yield this.user$.pipe(Object(r.a)(),Object(s.a)(t=>(null==t?void 0:t.photoUrl)?null==t?void 0:t.photoUrl:"assets/images/users/profile_32.png")).toPromise(),this.favProducsList$=this._favs.getFavProductsList(),this.likedProducsList$=this._likes.getLikedProductsList(),this.likes=this._likes.getCountByUID(t),this.favs=this._favs.getCountByUID(t)})}takePicture(){return Object(c.b)(this,void 0,void 0,function*(){yield this._photo.takePict(),this.photoUrl=this._photo.avatarURL,this.isActivatedCam=!0})}savePicture(){this._photo.savePict(),this.isActivatedCam=!1}openFirst(){this._menu.enable(!0,"first"),this._menu.open("first")}openEnd(){this._menu.open("end")}openCustom(){this._menu.enable(!0,"custom"),this._menu.open("custom")}segmentChanged(t){this.openedSegment=t.detail.value}logout(){this._auth.signOut(),this._router.navigate(["/login"])}presentActionSheet(){return Object(c.b)(this,void 0,void 0,function*(){const t=yield this.actionSheetCtrl.create({cssClass:"my-custom-class",buttons:[{text:"Edit profile",icon:"create-outline",handler:()=>{console.log("edit clicked")}},{text:"Switch to Pro account",handler:()=>Object(c.b)(this,void 0,void 0,function*(){const t=yield this._modalController.create({component:u,cssClass:"my-custom-modal-css",componentProps:{user$:this.user$}});yield t.present()})},{text:"Logout",icon:"log-out-outline",handler:()=>{this._auth.signOut(),this._router.navigate(["/login"]),console.log("logout clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{}}]});yield t.present(),yield t.onDidDismiss()})}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(l.a),a.Jb(d.a),a.Jb(e.e),a.Jb(l.Y),a.Jb(b.a),a.Jb(p.a),a.Jb(h.a),a.Jb(m.a),a.Jb(l.Z))},t.\u0275cmp=a.Db({type:t,selectors:[["app-profil"]],decls:64,vars:23,consts:[[3,"fullscreen"],["lines","none"],["name","chevron-down-outline"],["id","main"],["slot","start"],[3,"click"],["slot","start","name","menu"],[1,"ion-padding-top"],["size","4"],[1,"profile-avatar"],[3,"src",4,"ngIf"],["color","primary","name","add-circle",3,"click",4,"ngIf","ngIfElse"],["takephoto",""],["size","8",1,"ion-align-self-center"],["size","4",1,"data-box"],[1,"sec-row"],["size","6"],[1,"status"],[1,"name"],["size","12"],["expand","full","color","light",1,"btn-edit"],["color","medium",3,"ngModel","ngModelChange","ionChange"],["value","grid"],["name","grid-outline"],["value","heart"],["name","heart-outline"],["value","tags"],["name","person-circle-outline"],[1,"ion-padding-top",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"src"],["color","primary","name","add-circle",3,"click"],["color","primary","name","camera",3,"click"],[1,"grid"],["class","img_box",3,"style","routerLink",4,"ngFor","ngForOf"],[1,"img_box",3,"routerLink"]],template:function(t,n){if(1&t&&(a.Ob(0,"ion-content",0),a.Ob(1,"ion-item",1),a.Ob(2,"ion-label"),a.Ob(3,"h3"),a.Ob(4,"strong"),a.pc(5),a.Zb(6,"async"),a.Nb(),a.Kb(7,"ion-icon",2),a.Nb(),a.Nb(),a.Ob(8,"div",3),a.Ob(9,"ion-buttons",4),a.Ob(10,"ion-button",5),a.Wb("click",function(){return n.presentActionSheet()}),a.Kb(11,"ion-icon",6),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"ion-grid"),a.Ob(13,"ion-row",7),a.Ob(14,"ion-col",8),a.Ob(15,"div",9),a.nc(16,_,2,3,"img",10),a.nc(17,x,1,0,"ion-icon",11),a.nc(18,v,1,0,"ng-template",null,12,a.oc),a.Nb(),a.Nb(),a.Ob(20,"ion-col",13),a.Ob(21,"ion-row"),a.Ob(22,"ion-col",14),a.Ob(23,"strong"),a.pc(24),a.Zb(25,"async"),a.Nb(),a.Ob(26,"p"),a.pc(27,"Likes"),a.Nb(),a.Nb(),a.Ob(28,"ion-col",14),a.Ob(29,"strong"),a.pc(30),a.Zb(31,"async"),a.Nb(),a.Ob(32,"p"),a.pc(33,"favs"),a.Nb(),a.Nb(),a.Ob(34,"ion-col",14),a.Ob(35,"strong"),a.pc(36," nb "),a.Nb(),a.Ob(37,"p"),a.pc(38,"Following Pros"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(39,"ion-row",15),a.Ob(40,"ion-col",16),a.Ob(41,"p",17),a.Ob(42,"strong",18),a.pc(43),a.Zb(44,"async"),a.Zb(45,"async"),a.Nb(),a.Kb(46,"br"),a.Nb(),a.Nb(),a.Nb(),a.Ob(47,"ion-row"),a.Ob(48,"ion-col",19),a.Ob(49,"ion-button",20),a.pc(50,"Edit Profile"),a.Nb(),a.Nb(),a.Nb(),a.Ob(51,"ion-row",7),a.Ob(52,"ion-col",19),a.Ob(53,"ion-segment",21),a.Wb("ngModelChange",function(t){return n.openedSegment=t})("ionChange",function(t){return n.segmentChanged(t)}),a.Ob(54,"ion-segment-button",22),a.Kb(55,"ion-icon",23),a.Nb(),a.Ob(56,"ion-segment-button",24),a.Kb(57,"ion-icon",25),a.Nb(),a.Ob(58,"ion-segment-button",26),a.Kb(59,"ion-icon",27),a.Nb(),a.Nb(),a.Ob(60,"div",28),a.nc(61,N,4,3,"div",29),a.nc(62,w,4,3,"div",29),a.nc(63,M,2,0,"div",30),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t){const t=a.fc(19);let i=null,o=null;a.dc("fullscreen",!0),a.zb(5),a.rc("",null==(i=a.ac(6,13,n.user$))?null:i.username," "),a.zb(11),a.dc("ngIf",!!n.photoUrl),a.zb(1),a.dc("ngIf",n.isActivatedCam)("ngIfElse",t),a.zb(7),a.rc(" ",a.ac(25,15,n.likes)," "),a.zb(6),a.rc(" ",a.ac(31,17,n.favs)," "),a.zb(13),a.sc("",null==(o=a.ac(44,19,n.user$))?null:o.firstName," ",null==(o=a.ac(45,21,n.user$))?null:o.lasttName,""),a.zb(10),a.dc("ngModel",n.openedSegment),a.zb(7),a.dc("ngSwitch",n.openedSegment),a.zb(1),a.dc("ngSwitchCase","grid"),a.zb(1),a.dc("ngSwitchCase","heart")}},directives:[l.q,l.z,l.B,l.u,l.i,l.h,l.s,l.G,l.p,o.l,l.I,l.cb,g.g,g.i,l.J,o.m,o.n,o.o,o.k,e.f,l.bb],pipes:[o.b,O],styles:["h1[_ngcontent-%COMP%]{font-size:30px}ion-toolbar[_ngcontent-%COMP%]{--min-height:35px!important}.grid[_ngcontent-%COMP%]{padding-bottom:20px}ion-item[_ngcontent-%COMP%]{padding-top:20px!important}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:100px!important;max-height:100px!important}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0;opacity:.2}ion-label[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize}.allProducts[_ngcontent-%COMP%]{position:absolute;right:5px}.img_box[_ngcontent-%COMP%]{width:33.3%;border-radius:50%;padding-bottom:0}.my-custom-menu[_ngcontent-%COMP%]{--width:75%}ion-title[_ngcontent-%COMP%]{font-size:small;color:#000}.settingBtn[_ngcontent-%COMP%]{height:100px;position:absolute;bottom:0}.add_story[_ngcontent-%COMP%]{position:relative;margin-left:7px;margin-right:12px;border-radius:50%;padding:2px}.profile-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;bottom:-5px;right:21px;font-size:20px;border-radius:50%;background-color:#fff}.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px!important;max-width:none;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-bottom:-3px;margin-left:6px}.data-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px;font-size:14px;color:#000;font-weight:500}.data-box[_ngcontent-%COMP%]{text-align:center!important}ion-item[_ngcontent-%COMP%]:first-child{position:fixed;width:100%!important;z-index:999}ion-grid[_ngcontent-%COMP%]{margin-top:12%}@media (min-width:600px){ion-row.sec-row[_ngcontent-%COMP%]{margin-top:-2%}}@media (max-width:599px){ion-row.sec-row[_ngcontent-%COMP%]{margin-top:-4%}}p.status[_ngcontent-%COMP%]{font-size:12px}strong.name[_ngcontent-%COMP%]{font-size:small!important}.btn-edit[_ngcontent-%COMP%]{box-shadow:none!important;font-weight:600}.highlights[_ngcontent-%COMP%]{display:flex;overflow:scroll}.highlights[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin:7px 6px 7px 7px;background-size:contain;border-radius:50%;padding:2px}.highlights[_ngcontent-%COMP%]   .add_highlight[_ngcontent-%COMP%]{margin-left:7px;margin-right:12px}.add_highlight[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:61px;border:1px!important;color:silver}.highlights[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px!important;max-width:none;border-radius:50%;overflow:hidden;border:2px solid #fff;margin-bottom:-3px}.highlight-name[_ngcontent-%COMP%]{font-size:11px;text-align:center;margin:4px 0 0;font-weight:500;color:#383a3e}.grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.img_box[_ngcontent-%COMP%]{border:1px solid #fff;width:30%;padding-bottom:31%;background-size:cover;background-repeat:no-repeat;margin-left:3.3%;margin-bottom:3.3%}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[e.g.forChild(y)],e.g]}),t})(),z=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[o.c,k,l.W,g.d]]}),t})()}}]);