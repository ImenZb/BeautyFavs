(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Sa0y:function(t,e,n){"use strict";n.r(e),n.d(e,"AskModule",function(){return U});var i=n("ofXK"),o=n("tyNb"),r=n("mrSG"),s=n("fXoL"),c=n("6/gD"),a=n("UbJi"),b=n("wD+u");let l=(()=>{class t{constructor(t){this._af=t}addQuestion(t){const e=this._af.createId();this._af.doc("questions/"+e).set(Object.assign(Object.assign({},t),{id:e}))}getAllOrderedByTags(){return this._af.collection("questions",t=>t.orderBy("tag","desc")).valueChanges()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(b.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("TEn/"),g=n("3Pt+");const h=["img"];function p(t,e){if(1&t){const t=s.Pb();s.Ob(0,"ion-col",23,24),s.Kb(2,"ion-img",25),s.Ob(3,"ion-icon",26),s.Wb("click",function(){s.ic(t);const n=e.index;return s.Yb().delete(n)}),s.Nb(),s.Nb()}if(2&t){const t=e.$implicit;s.zb(2),s.ec("src",t.webPath)}}function d(t,e){if(1&t){const t=s.Pb();s.Ob(0,"ion-item",6),s.Wb("click",function(){s.ic(t);const n=e.$implicit,i=s.Yb(),o=s.hc(51);return i.selected(n,o)}),s.rc(1),s.Nb()}if(2&t){const t=e.$implicit;s.zb(1),s.tc(" ",t," ")}}let m=(()=>{class t{constructor(t,e,n,i,o){this._photoService=t,this._auth=e,this._questionService=n,this._router=i,this.alertController=o,this.tags=["anti-acne","anti-rides","anti-rougeurs","anti-UV","bronzant","hydratant","nettoyant","peaux-sensibles","peaux-mixtes","peaux-seches","peaux-normales","cheveux","masque","corps","rasage","mains"],this.items=[],this.categories=[]}ngOnInit(){}inputChanged(t){const e=t.target.value;this.items=e.length<=0?[]:this.tags.filter(t=>t.toLocaleLowerCase().includes(e.toLocaleLowerCase()))}selected(t,e){e.value="",this.selectedTag=t,this.items=[]}addCategory(t){var e;const n=t.detail.value,i=t.detail.checked;void 0===(null===(e=this.categories)||void 0===e?void 0:e.find(t=>t===n))&&i?this.categories.push(n):this.categories=this.categories.filter(t=>t!==n)}delete(t){console.log("photos before delete",this.photos),console.log("service photos before delete",this._photoService.photos),0===t?(this.photos.shift(),this._photoService.photos.shift()):(this.photos=this.photos.splice(t,1),this._photoService.photos=this._photoService.photos.splice(t,1)),this.imgs.toArray()[0].el.style.display="none",console.log("index",t),console.log("photos after delete",this.photos),console.log("service photos after delete",this._photoService.photos)}addImageUrl(){return Object(r.b)(this,void 0,void 0,function*(){yield this._photoService.addNewToGallery(),this.photos=this._photoService.photos,console.log("---\x3e",this.photos)})}onClick(){return Object(r.b)(this,void 0,void 0,function*(){const{uid:t=null}=yield this._auth.currentUser,e=yield this._photoService.getGaleryURL();!this.selectedTag||this.categories.length<0||""===this.textQuestion||this.photos.length<0?this.showAlert():(this._questionService.addQuestion({uid:t,tag:this.selectedTag,categories:this.categories,text:this.textQuestion,photosURL:e,date:new Date}),this.photos=[],this._photoService.photos=[],this._router.navigate(["ask"]))})}showAlert(){this.alertController.create({header:"Alert",subHeader:"Question form not completed",message:"Please fill all fields",buttons:["OK"]}).then(t=>{t.present()})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(c.a),s.Jb(a.a),s.Jb(l),s.Jb(o.e),s.Jb(u.b))},t.\u0275cmp=s.Db({type:t,selectors:[["app-add-question"]],viewQuery:function(t,e){if(1&t&&s.vc(h,!0),2&t){let t;s.gc(t=s.Xb())&&(e.imgs=t)}},inputs:{proUser$:"proUser$"},decls:54,vars:5,consts:[[1,"ion-no-padding"],["slot","start"],["defaultHref","ask","text",""],[1,"ion-padding"],[1,"ion-text-capitalize"],["slot","end"],[3,"click"],["slot","start","name","add"],["size","2"],["slot","icon-only","name","camera"],["size","10"],["position","stacked"],["rows","3","cols","20","placeholder","Enter your question here...","required","",3,"ngModel","ngModelChange"],["size","6",4,"ngFor","ngForOf"],["size","12"],["value","biologique",3,"ionChange"],["value","paramedical",3,"ionChange"],["value","industriel",3,"ionChange"],["value","artisanal",3,"ionChange"],["type","text",3,"ngModel","ngModelChange","ionInput"],["inputTag",""],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],["size","6"],["img",""],[3,"src"],["color","light","name","trash-outline",1,"icon1-img",3,"click"]],template:function(t,e){1&t&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-buttons",1),s.Kb(3,"ion-back-button",2),s.Nb(),s.Ob(4,"ion-title",3),s.Ob(5,"h1",4),s.rc(6,"Add question"),s.Nb(),s.Nb(),s.Ob(7,"ion-buttons",5),s.Ob(8,"ion-button",6),s.Wb("click",function(){return e.onClick()}),s.Kb(9,"ion-icon",7),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(10,"ion-content"),s.Ob(11,"ion-grid"),s.Ob(12,"ion-row"),s.Ob(13,"ion-col",8),s.Ob(14,"ion-button",6),s.Wb("click",function(){return e.addImageUrl()}),s.Kb(15,"ion-icon",9),s.Nb(),s.Nb(),s.Ob(16,"ion-col",10),s.Ob(17,"ion-item"),s.Ob(18,"ion-label",11),s.rc(19,"Question"),s.Nb(),s.Ob(20,"ion-textarea",12),s.Wb("ngModelChange",function(t){return e.textQuestion=t}),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(21,"ion-row"),s.pc(22,p,4,1,"ion-col",13),s.Nb(),s.Ob(23,"ion-row"),s.Ob(24,"ion-col",14),s.Ob(25,"ion-list"),s.Ob(26,"ion-list-header"),s.Ob(27,"ion-label"),s.rc(28,"Category interest"),s.Nb(),s.Nb(),s.Ob(29,"ion-item"),s.Ob(30,"ion-label"),s.rc(31,"Biologique"),s.Nb(),s.Ob(32,"ion-checkbox",15),s.Wb("ionChange",function(t){return e.addCategory(t)}),s.Nb(),s.Nb(),s.Ob(33,"ion-item"),s.Ob(34,"ion-label"),s.rc(35,"Paramedical"),s.Nb(),s.Ob(36,"ion-checkbox",16),s.Wb("ionChange",function(t){return e.addCategory(t)}),s.Nb(),s.Nb(),s.Ob(37,"ion-item"),s.Ob(38,"ion-label"),s.rc(39,"Industriel"),s.Nb(),s.Ob(40,"ion-checkbox",17),s.Wb("ionChange",function(t){return e.addCategory(t)}),s.Nb(),s.Nb(),s.Ob(41,"ion-item"),s.Ob(42,"ion-label"),s.rc(43,"Artisanal"),s.Nb(),s.Ob(44,"ion-checkbox",18),s.Wb("ionChange",function(t){return e.addCategory(t)}),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(45,"ion-row"),s.Ob(46,"ion-col",14),s.Ob(47,"ion-item"),s.Ob(48,"ion-label",11),s.rc(49,"Select tag"),s.Nb(),s.Ob(50,"ion-input",19,20),s.Wb("ngModelChange",function(t){return e.selectedTag=t})("ionInput",function(t){return e.inputChanged(t)}),s.Nb(),s.Ob(52,"ion-list",21),s.pc(53,d,2,1,"ion-item",22),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(20),s.ec("ngModel",e.textQuestion),s.zb(2),s.ec("ngForOf",e.photos),s.zb(28),s.ec("ngModel",e.selectedTag),s.zb(2),s.ec("hidden",e.items.length<=0),s.zb(1),s.ec("ngForOf",e.items))},directives:[u.t,u.V,u.i,u.f,u.g,u.U,u.h,u.u,u.q,u.s,u.G,u.p,u.z,u.B,u.S,u.cb,g.k,g.g,g.i,i.i,u.C,u.D,u.n,u.c,u.y,u.v],styles:['ion-img[_ngcontent-%COMP%]{position:relative}ion-icon.icon1-img[_ngcontent-%COMP%]{position:absolute;bottom:5%;left:5%;opacity:.5;background-color:#000;border-radius:50%;font-size:18px}ion-img[src=""][_ngcontent-%COMP%]{display:none}']}),t})();var O=n("qfBg"),f=n("aZ8m"),N=n("hEMT"),y=n("n4ln");let v=(()=>{class t{transform(t,e){return t?t.filter(t=>t.tag===e):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Ib({name:"filterByTag",type:t,pure:!0}),t})();var x=n("SxV6");let C=(()=>{class t{constructor(t){this._userService=t}transform(t){return Object(r.b)(this,void 0,void 0,function*(){const{username:e=null}=yield this._userService.getByUid(t).pipe(Object(x.a)()).toPromise();return e})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(O.a))},t.\u0275pipe=s.Ib({name:"username",type:t,pure:!0}),t})();var w=n("nyhg");function _(t,e){if(1&t){const t=s.Pb();s.Ob(0,"ion-item",11),s.Wb("click",function(){s.ic(t);const n=e.$implicit;return s.Yb().onClick(n.uid)}),s.Ob(1,"ion-avatar",12),s.Kb(2,"img",13),s.Nb(),s.Ob(3,"ion-label",14),s.Ob(4,"p"),s.rc(5),s.Nb(),s.Ob(6,"p"),s.rc(7),s.Zb(8,"async"),s.Zb(9,"category"),s.Nb(),s.Nb(),s.Nb()}if(2&t){const t=e.$implicit;s.zb(2),s.ec("src",t.photoUrl,s.kc),s.zb(3),s.sc(t.username),s.zb(2),s.sc(s.ac(8,3,s.ac(9,5,t.categoryId)))}}function k(t,e){if(1&t&&(s.Ob(0,"ion-col",21),s.Ob(1,"ion-card",0),s.Ob(2,"ion-card-content",0),s.Kb(3,"img",22),s.Ob(4,"ion-item",23),s.Ob(5,"div",24),s.Ob(6,"ion-text",5),s.Ob(7,"h4"),s.Ob(8,"b"),s.rc(9),s.Nb(),s.Nb(),s.Nb(),s.Ob(10,"ion-text",25),s.Ob(11,"p"),s.Ob(12,"b"),s.rc(13),s.Zb(14,"async"),s.Zb(15,"username"),s.Nb(),s.Nb(),s.Nb(),s.Ob(16,"ion-text"),s.Ob(17,"ion-text",26),s.Ob(18,"p"),s.rc(19),s.Zb(20,"dayJS"),s.Ob(21,"span",27),s.Kb(22,"ion-icon",28),s.rc(23,"nb"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.zb(3),s.ec("src",null==t?null:t.photosURL[0],s.kc),s.zb(6),s.sc(null==t?null:t.text),s.zb(4),s.sc(s.ac(14,4,s.ac(15,6,null==t?null:t.uid))),s.zb(6),s.tc("",s.bc(20,8,null==t?null:t.date.toDate(),"fromNow")," ")}}function z(t,e){if(1&t&&(s.Mb(0),s.Ob(1,"ion-list-header",2),s.Ob(2,"ion-label",16),s.rc(3),s.Nb(),s.Ob(4,"ion-button",17),s.Kb(5,"ion-icon",18),s.rc(6,"See All"),s.Nb(),s.Nb(),s.Ob(7,"ion-row",19),s.pc(8,k,24,11,"ion-col",20),s.Zb(9,"filterByTag"),s.Zb(10,"async"),s.Nb(),s.Lb()),2&t){const t=s.Yb().$implicit,e=s.Yb();s.zb(3),s.sc(t),s.zb(5),s.ec("ngForOf",s.bc(9,2,s.ac(10,5,e.questions$),t))}}function P(t,e){if(1&t&&(s.Mb(0),s.pc(1,z,11,7,"ng-container",15),s.Zb(2,"filterByTag"),s.Zb(3,"async"),s.Lb()),2&t){const t=e.$implicit,n=s.Yb();let i=null;s.zb(1),s.ec("ngIf",(null==(i=s.bc(2,1,s.ac(3,4,n.questions$),t))?null:i.length)>0)}}const M=[{path:"",component:(()=>{class t{constructor(t,e,n){this._questionService=t,this._userService=e,this._router=n,this.tags=["anti-acne","anti-rides","anti-rougeurs","anti-UV","bronzant","hydratant","nettoyant","peaux-sensibles","peaux-mixtes","peaux-seches","peaux-normales","cheveux","masque","corps","rasage","mains"]}ngOnInit(){this.questions$=this._questionService.getAllOrderedByTags(),this.proUsers$=this._userService.getAllPro(),this.nearbyClicked=!1}onClick(t){this._router.navigate(["ask/pro/"+t])}getTown(t){this.nearbyClicked=!0,this.proUsersNearBy$=this._userService.getProListNearby(t.state)}initGeoLocation(t){this.nearbyClicked=t}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(l),s.Jb(O.a),s.Jb(o.e))},t.\u0275cmp=s.Db({type:t,selectors:[["app-ask"]],decls:17,vars:4,consts:[[1,"ion-no-padding"],["size","12",1,"ion-no-padding"],[1,"ion-no-margin"],[1,"label"],[3,"locationEmitternew","initEmitter"],[1,"ion-padding-bottom"],["lines","none","class","ion-text-center ion-no-padding",3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center","ion-padding-bottom"],["size","12"],["color","primary","routerLink","question","fill","outline"],[4,"ngFor","ngForOf"],["lines","none",1,"ion-text-center","ion-no-padding",3,"click"],["slot","start"],[3,"src"],[1,"ion-padding-top"],[4,"ngIf"],[1,"label","ion-text-capitalize"],["color","light","size","small"],["slot","end","name","chevron-forward-outline"],[1,"ion-no-padding","ion-no-margin"],["size","6",4,"ngFor","ngForOf"],["size","6"],[1,"img-wrapper",3,"src"],["lines","none",1,"ion-no-padding","itemQuestion"],[1,"ion-text-start"],["color","primary",1,"ion-padding-bottom"],["color","medium",1,"questionDate"],[1,"questionNbComments"],["name","chatbubble-outline"]],template:function(t,e){1&t&&(s.Kb(0,"app-header"),s.Ob(1,"ion-content"),s.Ob(2,"ion-grid",0),s.Ob(3,"ion-row",0),s.Ob(4,"ion-col",1),s.Ob(5,"ion-list-header",2),s.Ob(6,"ion-label",3),s.rc(7,"Professionels nearby"),s.Nb(),s.Ob(8,"app-geolocate",4),s.Wb("locationEmitternew",function(t){return e.getTown(t)})("initEmitter",function(t){return e.initGeoLocation(t)}),s.Nb(),s.Nb(),s.Ob(9,"ion-list",5),s.pc(10,_,10,7,"ion-item",6),s.Zb(11,"async"),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"ion-row",7),s.Ob(13,"ion-col",8),s.Ob(14,"ion-button",9),s.rc(15," Ask for recommendation "),s.Nb(),s.Nb(),s.Nb(),s.pc(16,P,4,6,"ng-container",10),s.Nb(),s.Nb()),2&t&&(s.zb(10),s.ec("ngForOf",s.ac(11,2,e.nearbyClicked?e.proUsersNearBy$:e.proUsers$)),s.zb(6),s.ec("ngForOf",e.tags))},directives:[f.a,u.q,u.s,u.G,u.p,u.D,u.B,N.a,u.C,i.i,u.h,o.f,u.ab,u.z,u.e,i.j,u.u,u.j,u.k,u.R],pipes:[i.b,y.a,v,C,w.a],styles:["ion-list[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:scroll}ion-item[_ngcontent-%COMP%]{width:100px;display:inline-block}ion-avatar[_ngcontent-%COMP%]{position:absolute;width:80px;height:80px;margin-right:0;border:3px solid #fff}ion-label[_ngcontent-%COMP%]{margin-top:100px;font-size:18px;font-weight:100}p[_ngcontent-%COMP%]{font-size:11px;text-align:center;margin:4px 0 0;font-weight:600}.img-wrapper[_ngcontent-%COMP%]{width:100%;height:100px;max-height:300px}.label[_ngcontent-%COMP%]{margin-top:16px!important;max-width:170px}.padding-bottom[_ngcontent-%COMP%]{--padding-bottom:16px!important}.itemQuestion[_ngcontent-%COMP%]{--padding-start:6px;min-width:100%!important;width:100%!important;max-width:100%!important}.itemQuestion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;text-transform:capitalize}ion-card[_ngcontent-%COMP%]{height:200px}ion-list-header[_ngcontent-%COMP%]{padding-bottom:0;background:var(--ion-color-new);vertical-align:center;height:20px}.questionDate[_ngcontent-%COMP%]{text-align:left;line-height:1.5em}.questionNbComments[_ngcontent-%COMP%]{text-align:right;padding-left:50px;line-height:1.5em}.icon-inner[_ngcontent-%COMP%]{display:none}"]}),t})()},{path:"question",component:m},{path:"pro/:id",component:n("0P5H").a}];let S=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(M)],o.g]}),t})();var q=n("PCNd");let U=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[i.c,S,u.W,g.d,q.a]]}),t})()}}]);