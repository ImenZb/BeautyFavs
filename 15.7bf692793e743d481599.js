(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{fOOd:function(i,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return Z});var e=n("ofXK"),o=n("tyNb"),s=n("mrSG"),r=n("2Vo4"),c=n("n4WL"),a=n("Nf9K"),l=n("SxV6"),b=n("fXoL"),d=n("UbJi"),p=n("qfBg"),u=n("TEn/"),m=n("eDGZ"),g=n("ENZJ"),h=n("P3Ni"),f=n("+acA");let v=(()=>{class i{constructor(i){this._likeService=i}transform(i){return this._likeService.getCount(i)}}return i.\u0275fac=function(t){return new(t||i)(b.Jb(h.a))},i.\u0275pipe=b.Ib({name:"likesCount",type:i,pure:!0}),i})(),O=(()=>{class i{constructor(i){this._postService=i}transform(i){return this._postService.getFirstPostsByProduct(i)}}return i.\u0275fac=function(t){return new(t||i)(b.Jb(g.a))},i.\u0275pipe=b.Ib({name:"first",type:i,pure:!0}),i})(),x=(()=>{class i{constructor(i){this._likeService=i}transform(i){return this._likeService.isLiked(i)}}return i.\u0275fac=function(t){return new(t||i)(b.Jb(h.a))},i.\u0275pipe=b.Ib({name:"likesInit",type:i,pure:!0}),i})(),k=(()=>{class i{constructor(i){this._favService=i}transform(i){return this._favService.isFav$(i)}}return i.\u0275fac=function(t){return new(t||i)(b.Jb(f.a))},i.\u0275pipe=b.Ib({name:"favInit",type:i,pure:!0}),i})();var _=n("nyhg");function y(i,t){if(1&i&&(b.Ob(0,"ion-segment-button",18),b.Ob(1,"ion-label"),b.rc(2),b.Nb(),b.Nb()),2&i){const i=t.$implicit;b.ec("value",i),b.zb(2),b.sc(i)}}function N(i,t){if(1&i&&(b.Kb(0,"ion-icon",45),b.Zb(1,"async")),2&i){const i=b.Yb().index,t=b.Yb();b.ec("name",b.ac(1,1,t.productsisLiked$)[i]?"heart":"heart-outline")}}function C(i,t){if(1&i&&(b.Kb(0,"ion-icon",45),b.Zb(1,"async"),b.Zb(2,"likesInit")),2&i){const i=b.Yb().$implicit;b.ec("name",b.ac(1,1,b.ac(2,3,i.id))?"heart":"heart-outline")}}function $(i,t){if(1&i&&(b.Kb(0,"ion-icon",46),b.Zb(1,"async")),2&i){const i=b.Yb().index,t=b.Yb();b.ec("name",b.ac(1,1,t.productsisFav$)[i]?"bookmark":"bookmark-outline")}}function P(i,t){if(1&i&&(b.Kb(0,"ion-icon",45),b.Zb(1,"async"),b.Zb(2,"favInit")),2&i){const i=b.Yb().$implicit;b.ec("name",b.ac(1,1,b.ac(2,3,i.id))?"bookmark":"bookmark-outline")}}function L(i,t){if(1&i){const i=b.Pb();b.Ob(0,"ion-chip",26),b.Ob(1,"ion-label",47),b.rc(2),b.Ob(3,"span",48),b.rc(4),b.Nb(),b.Nb(),b.Ob(5,"ion-note"),b.Ob(6,"p",49),b.rc(7),b.Zb(8,"dayJS"),b.Nb(),b.Nb(),b.Ob(9,"ion-button",50),b.Wb("click",function(){b.ic(i);const t=b.Yb().$implicit;return b.Yb().openModal(t)}),b.Ob(10,"span",51),b.rc(11,"See all feeds"),b.Nb(),b.Nb(),b.Nb()}if(2&i){const i=t.ngIf;b.oc("background","#fff"),b.zb(2),b.tc("",i.username,", "),b.zb(2),b.sc(i.body),b.zb(3),b.sc(b.bc(8,5,null==i?null:i.date.toDate(),"fromNow"))}}function F(i,t){1&i&&(b.Ob(0,"ion-chip",52),b.Ob(1,"ion-button",53),b.Ob(2,"span",51),b.rc(3,"0 feed"),b.Nb(),b.Nb(),b.Nb()),2&i&&b.oc("background","#fff")}function w(i,t){1&i&&b.Kb(0,"img",54),2&i&&b.ec("src",t.ngIf,b.kc)}function z(i,t){1&i&&b.Kb(0,"img",55)}function I(i,t){if(1&i){const i=b.Pb();b.Ob(0,"ion-card",19),b.Ob(1,"ion-item",20),b.Ob(2,"ion-label",21),b.Ob(3,"h2",22),b.rc(4),b.Nb(),b.Ob(5,"ion-text",23),b.Ob(6,"p",24),b.rc(7),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Kb(8,"img",25),b.Ob(9,"ion-card-header",26),b.Ob(10,"ion-button",27),b.Wb("click",function(){b.ic(i);const n=t.$implicit,e=t.index;return b.Yb().toggleLikes(n,e)}),b.pc(11,N,2,3,"ion-icon",28),b.Zb(12,"async"),b.pc(13,C,3,5,"ng-template",null,29,b.qc),b.Ob(15,"ion-note"),b.rc(16),b.Zb(17,"async"),b.Zb(18,"likesCount"),b.Nb(),b.Nb(),b.Ob(19,"ion-button",30),b.Wb("click",function(){b.ic(i);const n=t.$implicit,e=t.index;return b.Yb().toggleFavs(n,e)}),b.pc(20,$,2,3,"ion-icon",31),b.Zb(21,"async"),b.pc(22,P,3,5,"ng-template",null,32,b.qc),b.Nb(),b.Nb(),b.Ob(24,"ion-card-content",26),b.Ob(25,"ion-list-header",33),b.pc(26,L,12,8,"ion-chip",34),b.Zb(27,"async"),b.Zb(28,"first"),b.pc(29,F,4,2,"ng-template",null,35,b.qc),b.Nb(),b.Kb(31,"ion-item-divider"),b.Ob(32,"ion-item",36),b.Wb("click",function(n){b.ic(i);const e=t.$implicit;return b.Yb().presentPopover(n,e)}),b.Ob(33,"ion-avatar",37),b.pc(34,w,1,1,"img",38),b.Zb(35,"async"),b.pc(36,z,1,0,"ng-template",null,39,b.qc),b.Nb(),b.Ob(38,"ion-label",40),b.Ob(39,"ion-text",41),b.Ob(40,"p",42),b.rc(41),b.Zb(42,"async"),b.Nb(),b.Nb(),b.Ob(43,"ion-button",43),b.Wb("click",function(n){b.ic(i);const e=t.$implicit;return b.Yb().presentPopover(n,e)}),b.Kb(44,"ion-icon",44),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&i){const i=t.$implicit,n=b.hc(14),e=b.hc(23),o=b.hc(30),s=b.hc(37),r=b.Yb();let c=null,a=null;b.zb(4),b.sc(i.product_name),b.zb(3),b.sc(i.brand),b.zb(1),b.ec("src",i.image_url,b.kc),b.zb(3),b.ec("ngIf",null!==b.ac(12,13,r.isLiked$))("ngIfElse",n),b.zb(5),b.sc(b.ac(17,15,b.ac(18,17,i.id))),b.zb(4),b.ec("ngIf",null!==b.ac(21,19,r.isFav$))("ngIfElse",e),b.zb(6),b.ec("ngIf",b.ac(27,21,b.ac(28,23,i.id)))("ngIfElse",o),b.zb(8),b.ec("ngIf",null==(c=b.ac(35,25,r.user$))?null:c.photoUrl)("ngIfElse",s),b.zb(7),b.tc("",null==(a=b.ac(42,27,r.user$))?null:a.username," add a feed")}}const S=[{path:"",component:(()=>{class i{constructor(i,t,n,e,o,s,c,a){this._auth=i,this._userService=t,this.popoverController=n,this.modalController=e,this._productListService=o,this._postService=s,this._likeService=c,this._favService=a,this.min=0,this.max=10,this.category="all",this.searchTag=null,this.tags=["anti-acne","anti-rides","anti-rougeurs","anti-UV","bronzant","hydratant","nettoyant","peaux-sensibles","peaux-mixtes","peaux-seches","peaux-normales","cheveux","masque","corps","rasage","mains"],this._isLiked$=new r.a(null),this.isLiked$=this._isLiked$.asObservable(),this._isFav$=new r.a(null),this.isFav$=this._isFav$.asObservable(),this._productsisFav$=new r.a([]),this.productsisFav$=this._productsisFav$.asObservable(),this.productsisFav=[],this._productsisLiked$=new r.a([]),this.productsisLiked$=this._productsisFav$.asObservable(),this.productsisLiked=[]}ngOnInit(){return Object(s.b)(this,void 0,void 0,function*(){})}ionViewWillEnter(){return Object(s.b)(this,void 0,void 0,function*(){this.productList$=this._productListService.getProducts();const{uid:i=null}=yield this._auth.currentUser;this.user$=this._userService.getByUid(i),this.productsisFav=(yield this.productList$.toPromise()).map(i=>this.isFav(i)),this._productsisFav$.next(this.productsisFav),this.productsisLiked=(yield this.productList$.toPromise()).map(i=>this.isLiked(i)),this._productsisLiked$.next(this.productsisLiked)})}presentPopover(i,t){return Object(s.b)(this,void 0,void 0,function*(){const n=yield this.popoverController.create({component:c.a,cssClass:"custom-popover",event:i,translucent:!0,componentProps:{product:t,user$:this.user$}});return yield n.present()})}openModal(i){return Object(s.b)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:a.a,componentProps:{produit:i,user$:this.user$}});yield t.present()})}segmentChanged(i){this._productListService.setTag(i.detail.value)}onChange(i){this._productListService.setCategory(i.target.value)}loadData(i){this.max=this.max+10,i.target.complete()}toggleLike(i){return Object(s.b)(this,void 0,void 0,function*(){const t=yield this._likeService.isLiked(i.id).pipe(Object(l.a)()).toPromise();t?yield this.removeLike(i.id):yield this.addLike(i.id),this._isLiked$.next(!t)})}isLiked(i){return Object(s.b)(this,void 0,void 0,function*(){return yield this._likeService.isLiked(i.id).pipe(Object(l.a)()).toPromise()})}toggleLikes(i,t){return Object(s.b)(this,void 0,void 0,function*(){const n=yield this._likeService.isLiked(i.id).pipe(Object(l.a)()).toPromise();n?yield this.removeLike(i.id):yield this.addLike(i.id),this.productsisLiked[t]=!n,this._productsisLiked$.next(this.productsisLiked)})}addLike(i){return Object(s.b)(this,void 0,void 0,function*(){yield this._likeService.add({id:i})})}removeLike(i){return Object(s.b)(this,void 0,void 0,function*(){yield this._likeService.remove(i)})}toggleFav(i){return Object(s.b)(this,void 0,void 0,function*(){const t=yield this._favService.isFav$(i.id).pipe(Object(l.a)()).toPromise();t?yield this.removeFav(i.id):yield this.addFav(i.id),this._isFav$.next(!t)})}isFav(i){return Object(s.b)(this,void 0,void 0,function*(){return yield this._favService.isFav$(i.id).pipe(Object(l.a)()).toPromise()})}toggleFavs(i,t){return Object(s.b)(this,void 0,void 0,function*(){const n=yield this._favService.isFav$(i.id).pipe(Object(l.a)()).toPromise();n?yield this.removeFav(i.id):yield this.addFav(i.id),this.productsisFav[t]=!n,this._productsisFav$.next(this.productsisFav)})}addFav(i){return Object(s.b)(this,void 0,void 0,function*(){yield this._favService.add({id:i})})}removeFav(i){return Object(s.b)(this,void 0,void 0,function*(){yield this._favService.remove(i)})}}return i.\u0275fac=function(t){return new(t||i)(b.Jb(d.a),b.Jb(p.a),b.Jb(u.Z),b.Jb(u.Y),b.Jb(m.a),b.Jb(g.a),b.Jb(h.a),b.Jb(f.a))},i.\u0275cmp=b.Db({type:i,selectors:[["app-home"]],decls:34,vars:4,consts:[[1,"ion-no-padding"],[1,"ion-padding-start","ion-text-start"],[1,"title"],["slot","end",1,"ion-no-padding"],["color","dark"],["ok-text","Ok","cancel-text","Cancel","value","all",3,"ionChange"],["value","all"],["value","paramedical"],["value","biologique"],["value","artisanal"],["value","industriel"],["color","medium","value","null","scrollable","",1,"ion-no-margin","SwipedTabs-tabs","ion-text-capitalize",3,"ionChange"],["value","null",1,"ion-no-padding"],["class","ion-no-padding","color","medium","layout","icon-start",3,"value",4,"ngFor","ngForOf"],["size","12",1,"ion-no-padding"],["class","ion-margin-bottom",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],["color","medium","layout","icon-start",1,"ion-no-padding",3,"value"],[1,"ion-margin-bottom"],[1,"brandItem"],[1,"ion-no-margin"],[1,"ion-no-margin","ion-text-capitalize","name"],["color","primary"],[1,"ion-text-capitalize"],[1,"post_img",3,"src"],[1,"ion-no-padding","ion-no-margin"],["fill","clear","shape","round","size","small",1,"ion-no-padding","ion-no-margin",3,"click"],["slot","icon-only",3,"name",4,"ngIf","ngIfElse"],["initLike",""],["fill","clear","shape","round","size","small",1,"bookmark",3,"click"],[3,"name",4,"ngIf","ngIfElse"],["initFav",""],["lines","line",1,"ion-no-padding","ion-no-margin","ion-padding-bottom"],["class","ion-no-padding ion-no-margin",3,"background",4,"ngIf","ngIfElse"],["comment",""],["lines","none",3,"click"],["slot","start",1,"comment_avatar"],[3,"src",4,"ngIf","ngIfElse"],["default",""],[1,"inputComment","ion-padding"],["color","medium"],[1,"s-text2"],["fill","clear","sizs","small",3,"click"],["slot","end","name","send"],["slot","icon-only",3,"name"],[3,"name"],[1,"post_label"],[1,"post-text"],[1,"post-date"],["fill","clear","size","small",3,"click"],[1,"comment-text1"],[1,"ion-text-center"],["fill","clear","size","small",1,"ion-no-padding","ion-no-margin","text","center"],[3,"src"],["src","assets/images/users/profile_32.png"]],template:function(i,t){if(1&i&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-title",1),b.Ob(3,"ion-text",2),b.rc(4," Truth on Cosmetic "),b.Nb(),b.Nb(),b.Ob(5,"ion-buttons",3),b.Ob(6,"ion-button",4),b.Ob(7,"ion-item"),b.Ob(8,"ion-select",5),b.Wb("ionChange",function(i){return t.onChange(i)}),b.Ob(9,"ion-select-option",6),b.rc(10,"All"),b.Nb(),b.Ob(11,"ion-select-option",7),b.rc(12,"Paramedical"),b.Nb(),b.Ob(13,"ion-select-option",8),b.rc(14,"Biologique"),b.Nb(),b.Ob(15,"ion-select-option",9),b.rc(16,"Artisanal"),b.Nb(),b.Ob(17,"ion-select-option",10),b.rc(18,"Industriel"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(19,"ion-toolbar"),b.Ob(20,"ion-segment",11),b.Wb("ionChange",function(i){return t.segmentChanged(i)}),b.Ob(21,"ion-segment-button",12),b.Ob(22,"ion-label"),b.rc(23,"All"),b.Nb(),b.Nb(),b.pc(24,y,3,2,"ion-segment-button",13),b.Nb(),b.Nb(),b.Nb(),b.Ob(25,"ion-content"),b.Ob(26,"ion-grid",0),b.Ob(27,"ion-row",0),b.Ob(28,"ion-col",14),b.Ob(29,"ion-list",0),b.pc(30,I,45,29,"ion-card",15),b.Zb(31,"async"),b.Nb(),b.Ob(32,"ion-infinite-scroll",16),b.Wb("ionInfinite",function(i){return t.loadData(i)}),b.Kb(33,"ion-infinite-scroll-content",17),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&i){let i=null;b.zb(24),b.ec("ngForOf",t.tags.sort()),b.zb(6),b.ec("ngForOf",null==(i=b.ac(31,2,t.productList$))?null:i.slice(t.min,t.max))}},directives:[u.t,u.V,u.U,u.R,u.i,u.h,u.z,u.K,u.bb,u.L,u.I,u.J,u.B,e.i,u.q,u.s,u.G,u.p,u.C,u.w,u.x,u.j,u.l,e.j,u.E,u.k,u.D,u.A,u.e,u.u,u.o],pipes:[e.b,v,O,x,k,_.a],styles:[".title[_ngcontent-%COMP%]{font-family:Crete Round,serif;font-size:18px;color:#444;--padding-left:16px}.img-wrapper[_ngcontent-%COMP%]{min-height:40px;width:100%;background-size:cover;background-repeat:no-repeat;vertical-align:middle}.post_img[_ngcontent-%COMP%]{width:100%;max-height:300px}.post_avatar[_ngcontent-%COMP%]{padding:2px;height:35px;width:35px}.post_label[_ngcontent-%COMP%]{white-space:nowrap;font-size:14px!important;font-weight:700;color:#1e2023!important;padding-left:5px}.post-text[_ngcontent-%COMP%]{color:#1e2023!important}.post-date[_ngcontent-%COMP%], .post-text[_ngcontent-%COMP%]{font-size:12px;margin:0 6px}.post-date[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.comment-text1[_ngcontent-%COMP%]{margin:2.5px 6px 0 16px}.comment-text1[_ngcontent-%COMP%], .comment-text2[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium)}.comment-text2[_ngcontent-%COMP%]{display:inline;margin:2px 6px 0 0}.comment_avatar[_ngcontent-%COMP%]{padding:1px;height:40px;width:40px}.bookmark[_ngcontent-%COMP%]{position:absolute;right:-20px}ion-segment[_ngcontent-%COMP%]{height:40px;min-height:40px;padding-top:5px}ion-segment-button[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:var(--ion-color-medium);text-transform:capitalize;--border-color:#f2f2f2;--border-radius:5px;--border-style:solid;--border-width:1px;height:30px;min-height:30px;min-width:100px;--padding-end:3px;color:#1e2023}ion-card[_ngcontent-%COMP%]{box-shadow:0 0 6px 0 rgba(157,96,212,.5);border:3px solid transparent;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(101deg,#78e4ff,#ff48fa);background-origin:border-box;background-clip:content-box,border-box;box-shadow:inset 2px 1000px 1px #fff}ion-item.brandItem[_ngcontent-%COMP%]{--padding-start:2px;font-weight:550}h2.name[_ngcontent-%COMP%]{font-weight:550}.inputComment[_ngcontent-%COMP%]{border:1px solid #f5f6f9;border-radius:50px;font-size:12px;background-color:#f5f6f9;position:relative}.inputComment[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;right:5px;top:8px}ion-item-divider[_ngcontent-%COMP%]{min-height:1px}"]}),i})()}];let M=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(t){return new(t||i)},imports:[[o.g.forChild(S)],o.g]}),i})();var j=n("PCNd");let Z=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(t){return new(t||i)},imports:[[e.c,M,u.W,j.a]]}),i})()}}]);