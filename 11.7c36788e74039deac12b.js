(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/m2M":function(t,o,e){"use strict";e.r(o),e.d(o,"TabsModule",function(){return b});var n=e("ofXK"),i=e("tyNb"),r=e("mrSG"),a=e("81uL"),s=e("fXoL"),c=e("TEn/");const l=[{path:"",component:(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}openModal(){return Object(r.b)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:a.a,componentProps:{productName:"",productImg:""},cssClass:"modal"});yield t.present()})}}return t.\u0275fac=function(o){return new(o||t)(s.Jb(c.Z))},t.\u0275cmp=s.Db({type:t,selectors:[["app-tabs"]],decls:23,vars:0,consts:[["slot","bottom"],["tab","home"],["name","home"],["tab","search"],["name","search"],["tab","ask",1,"askTab"],["name","help",1,"askIcon"],["tab",""],["name","notifications-circle-outline"],["tab","profil"],["name","person-circle-outline"]],template:function(t,o){1&t&&(s.Ob(0,"ion-tabs"),s.Ob(1,"ion-tab-bar",0),s.Ob(2,"ion-tab-button",1),s.Kb(3,"ion-icon",2),s.Ob(4,"ion-label"),s.oc(5,"Home"),s.Nb(),s.Nb(),s.Ob(6,"ion-tab-button",3),s.Kb(7,"ion-icon",4),s.Ob(8,"ion-label"),s.oc(9,"Search"),s.Nb(),s.Nb(),s.Ob(10,"ion-tab-button",5),s.Kb(11,"ion-icon",6),s.Ob(12,"ion-text"),s.Ob(13,"ion-label"),s.oc(14,"Ask"),s.Nb(),s.Nb(),s.Nb(),s.Ob(15,"ion-tab-button",7),s.Kb(16,"ion-icon",8),s.Ob(17,"ion-label"),s.oc(18,"Notifications"),s.Nb(),s.Nb(),s.Ob(19,"ion-tab-button",9),s.Kb(20,"ion-icon",10),s.Ob(21,"ion-label"),s.oc(22,"Profil"),s.Nb(),s.Nb(),s.Nb(),s.Nb())},directives:[c.R,c.P,c.Q,c.v,c.C,c.S],styles:["ion-tab-bar[_ngcontent-%COMP%]{--color-selected:var(--ion-color-primary,#3880ff)}.askTab[_ngcontent-%COMP%]{height:70px;border-radius:50%;background:#fff;z-index:100;max-width:70px;color:var(--ion-color-primary,#3880ff);border:4px solid var(--ion-color-primary,#3880ff);margin-top:-18px}ion-tab-bar[_ngcontent-%COMP%]{contain:none}"]}),t})(),children:[{path:"home",loadChildren:()=>Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"fOOd")).then(t=>t.HomeModule)},{path:"search",loadChildren:()=>Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"Wlq6")).then(t=>t.SearchModule)},{path:"detail",loadChildren:()=>Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"FSlI")).then(t=>t.DetailModule)},{path:"profil",loadChildren:()=>e.e(18).then(e.bind(null,"L+dR")).then(t=>t.ProfilModule)},{path:"add",loadChildren:()=>e.e(12).then(e.bind(null,"IZC+")).then(t=>t.AddProductModule)},{path:"ask",loadChildren:()=>e.e(13).then(e.bind(null,"Sa0y")).then(t=>t.AskModule)},{path:"",redirectTo:"home",pathMatch:"full"}]}];let d=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(o){return new(o||t)},imports:[[i.g.forChild(l)],i.g]}),t})();var u=e("PCNd");let b=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(o){return new(o||t)},imports:[[n.c,c.X,d,u.a]]}),t})()},"81uL":function(t,o,e){"use strict";e.d(o,"a",function(){return m});var n=e("mrSG"),i=e("3Pt+"),r=e("fXoL"),a=e("TEn/"),s=e("eDGZ"),c=e("ENZJ"),l=e("UbJi"),d=e("ofXK");function u(t,o){if(1&t&&(r.Ob(0,"ion-thumbnail",22),r.Kb(1,"ion-img",23),r.Nb()),2&t){const t=r.Yb();r.zb(1),r.dc("src",t.productImg)}}function b(t,o){1&t&&r.Kb(0,"ion-icon",24)}function p(t,o){1&t&&r.Kb(0,"ion-icon",25)}function h(t,o){if(1&t){const t=r.Pb();r.Ob(0,"ion-item",26),r.Wb("click",function(){r.gc(t);const e=o.$implicit,n=r.Yb(),i=r.fc(30);return n.selected(e,i)}),r.oc(1),r.Nb()}if(2&t){const t=o.$implicit;r.zb(1),r.qc(" ",t," ")}}let m=(()=>{class t{constructor(t,o,e,n,i){this.modatCtrl=t,this._formBuilder=o,this._productListService=e,this._postService=n,this._auth=i,this.tags=["anti-acne","anti-rides","anti-rougeurs","anti-UV","bronzant","hydratant","nettoyant","peaux-sensibles","peaux-mixtes","peaux-seches","peaux-normales","cheveux","masque","corps","rasage","mains"],this.items=[]}ngOnInit(){return Object(n.b)(this,void 0,void 0,function*(){this.form=this._formBuilder.group({product_name:[this.productName,i.l.required],feed:["",i.l.required],brand:["",i.l.required],tag:["",i.l.required],category:["",i.l.required]}),this.user=yield this._auth.currentUser})}inputChanged(t){const o=t.target.value;this.items=o.length<=0?[]:this.tags.filter(t=>t.toLocaleLowerCase().includes(o.toLocaleLowerCase()))}selected(t,o){o.value="",this.form.patchValue({tag:t}),this.items=[]}onSubmit(){var t;const o=Math.floor(1e3*Math.random()).toString()+"n",e=this.form.get("feed").value,n=this.form.get("product_name").value,i=this.form.get("tag").value,r=this.form.get("category").value,a=this.form.get("brand").value,s=new Date,c={uid:null===(t=this.user)||void 0===t?void 0:t.uid,productId:o,body:e,date:s};this._productListService.create({productId:o,product_name:n,brand:a,tag:i,category:r,created_datetime:s,imageUrl:this.productImg,likes:0}),this._postService.save(c),this.modatCtrl.dismiss()}}return t.\u0275fac=function(o){return new(o||t)(r.Jb(a.Z),r.Jb(i.a),r.Jb(s.a),r.Jb(c.a),r.Jb(l.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-modal-add"]],inputs:{productName:"productName",productImg:"productImg"},decls:47,vars:6,consts:[[3,"formGroup","ngSubmit"],["fill","clear","size","small",1,"close",3,"click"],["color","medium","name","close"],[1,"ion-no-padding","ion-no-margin"],["slot","start",4,"ngIf"],["position","floating",1,"ion-no-padding","ion-no-margin"],["formControlName","product_name","type","text",1,"ion-no-padding","ion-no-margin"],["color","primary","slot","end","name","camera-outline","class","ion-no-padding ion-no-margin",4,"ngIf"],["color","primary","slot","end","name","image-outline","class","ion-no-padding ion-no-margin",4,"ngIf"],["position","floating"],["formControlName","feed","type","text"],["formControlName","brand","type","text"],["formControlName","tag","type","text",3,"ionInput"],["inputTag",""],[3,"hidden"],[3,"click",4,"ngFor","ngForOf"],["formControlName","category","value","","okText","Okay","cancelText","Dismiss"],["value","industriel"],["value","biologique"],["value","artisanal"],["value","paramedical"],["expand","block","size","medium","color","medium","type","submit",1,"postBtn"],["slot","start"],[3,"src"],["color","primary","slot","end","name","camera-outline",1,"ion-no-padding","ion-no-margin"],["color","primary","slot","end","name","image-outline",1,"ion-no-padding","ion-no-margin"],[3,"click"]],template:function(t,o){1&t&&(r.Ob(0,"ion-content"),r.Ob(1,"form",0),r.Wb("ngSubmit",function(){return o.onSubmit()}),r.Ob(2,"ion-grid"),r.Ob(3,"ion-row"),r.Ob(4,"ion-card"),r.Ob(5,"ion-card-header"),r.Ob(6,"ion-card-title"),r.oc(7,"Add a feed"),r.Nb(),r.Ob(8,"ion-button",1),r.Wb("click",function(){return o.modatCtrl.dismiss()}),r.Kb(9,"ion-icon",2),r.Nb(),r.Nb(),r.Ob(10,"ion-card-content"),r.Ob(11,"ion-item",3),r.mc(12,u,2,1,"ion-thumbnail",4),r.Ob(13,"ion-label",5),r.oc(14," Product "),r.Nb(),r.Kb(15,"ion-input",6),r.mc(16,b,1,0,"ion-icon",7),r.mc(17,p,1,0,"ion-icon",8),r.Nb(),r.Ob(18,"ion-item",3),r.Ob(19,"ion-label",9),r.oc(20,"Feed"),r.Nb(),r.Kb(21,"ion-input",10),r.Nb(),r.Ob(22,"ion-item",3),r.Ob(23,"ion-label",9),r.oc(24,"Brand"),r.Nb(),r.Kb(25,"ion-input",11),r.Nb(),r.Ob(26,"ion-item",3),r.Ob(27,"ion-label",9),r.oc(28,"Select tag"),r.Nb(),r.Ob(29,"ion-input",12,13),r.Wb("ionInput",function(t){return o.inputChanged(t)}),r.Nb(),r.Ob(31,"ion-list",14),r.mc(32,h,2,1,"ion-item",15),r.Nb(),r.Nb(),r.Ob(33,"ion-item",3),r.Ob(34,"ion-label",9),r.oc(35,"Category"),r.Nb(),r.Ob(36,"ion-select",16),r.Ob(37,"ion-select-option",17),r.oc(38,"industriel"),r.Nb(),r.Ob(39,"ion-select-option",18),r.oc(40,"biologique"),r.Nb(),r.Ob(41,"ion-select-option",19),r.oc(42,"artisanal"),r.Nb(),r.Ob(43,"ion-select-option",20),r.oc(44,"param\xe9dical"),r.Nb(),r.Nb(),r.Nb(),r.Ob(45,"ion-button",21),r.oc(46," Post "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.zb(1),r.dc("formGroup",o.form),r.zb(11),r.dc("ngIf",""!==o.productImg),r.zb(4),r.dc("ngIf",""===o.productImg),r.zb(1),r.dc("ngIf",""===o.productImg),r.zb(14),r.dc("hidden",o.items.length<=0),r.zb(1),r.dc("ngForOf",o.items))},directives:[a.r,i.m,i.h,i.c,a.t,a.H,a.j,a.l,a.n,a.h,a.v,a.k,a.A,d.j,a.C,a.z,a.db,i.g,i.b,a.D,d.i,a.L,a.cb,a.M,a.U,a.w],styles:["ion-card[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.5);background:var(--ion-color-light)}ion-label[_ngcontent-%COMP%]{font-size:12px}.close[_ngcontent-%COMP%]{position:absolute;right:1px;top:1px}.postBtn[_ngcontent-%COMP%]{margin-top:30px;letter-spacing:4px;text-transform:uppercase}.icon[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}"]}),t})()},ENZJ:function(t,o,e){"use strict";e.d(o,"a",function(){return p});var n=e("mrSG"),i=e("2Vo4"),r=e("itXk"),a=e("lJxs"),s=e("SxV6"),c=e("fXoL"),l=e("IheW"),d=e("qfBg"),u=e("wD+u");const b=" http://localhost:3000/posts";let p=(()=>{class t{constructor(t,o,e){this.http=t,this._userService=o,this._af=e,this._postsList$=new i.a([]),this.postsList$=this._postsList$.asObservable(),this._af.collection("posts").stateChanges(["added"]).pipe(Object(a.a)(t=>t.map(t=>{const o=t.payload.doc.id,e=t.payload.doc.data();return Object.assign({id:o},e)}))).subscribe(t=>{const o=[...this._postsList$.value.filter(o=>!t.find(t=>t.id===o.id)),...t];this._postsList$.next(o)})}getPostsByProduct(t){return Object(r.a)([this._af.collection("posts",o=>o.where("productId","==",t)).valueChanges(),this._userService.getAll()]).pipe(Object(a.a)(([t,o])=>(t.forEach(t=>{const e=t.uid;o.filter(t=>t.uid=e),t=t}),t)))}save(t){const o=this._af.createId(),e={id:o,productId:t.productId,uid:t.uid,body:t.body,date:Date.now()};this._af.collection("posts").doc(o).set(e)}getAllPosts(){return this.http.get(b)}create(t){return this.http.post(b,t)}update(t){return this.http.put(b+"/"+t.id,t)}getFirstPostsByProduct(t){return Object(n.b)(this,void 0,void 0,function*(){const o=yield this._af.collection("posts",o=>o.where("productId","==",t)).valueChanges().pipe(Object(s.a)()).toPromise();if(o.length<=0)return;const e=o[0].uid,n=yield this._userService.getByUid(e).pipe(Object(s.a)()).toPromise();return Object.assign(Object.assign({},o[0]),{username:null==n?void 0:n.username,photoUrl:null==n?void 0:n.photoUrl})})}isUserFeed(t,o){return Object(n.b)(this,void 0,void 0,function*(){return(yield this._af.collection("posts",e=>e.where("productId","==",o).where("uid","==",t)).valueChanges().pipe(Object(s.a)()).toPromise()).length>0})}}return t.\u0275fac=function(o){return new(o||t)(c.Sb(l.a),c.Sb(d.a),c.Sb(u.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PCNd:function(t,o,e){"use strict";e.d(o,"a",function(){return s});var n=e("ofXK"),i=e("TEn/"),r=e("3Pt+"),a=e("fXoL");e("81uL");let s=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(o){return new(o||t)},imports:[[n.c,i.X,r.j,r.d]]}),t})()},eDGZ:function(t,o,e){"use strict";e.d(o,"a",function(){return c});var n=e("2Vo4"),i=e("itXk"),r=e("lJxs"),a=e("fXoL"),s=e("wD+u");let c=(()=>{class t{constructor(t){this._af=t,this._productList$=new n.a([]),this.productList$=this._productList$.asObservable(),this._tag$=new n.a("null"),this.tag$=this._tag$.asObservable(),this._category$=new n.a("all"),this.category$=this._category$.asObservable(),this._af.collection("products").stateChanges(["added","modified"]).pipe(Object(r.a)(t=>t.map(t=>{const o=t.payload.doc.id,e=t.payload.doc.data();return Object.assign({id:o},e)}))).subscribe(t=>{const o=[...this._productList$.value.filter(o=>!t.find(t=>t.id===o.id)),...t];this._productList$.next(o)})}getProducts(){return Object(i.a)([this.tag$,this.category$,this.productList$]).pipe(Object(r.a)(([t,o,e])=>{switch(!0){case"null"===t&&"all"===o:return e;case"null"!==t&&"all"!==o:return e.filter(e=>e.tag===t&&e.category===o);case"null"!==t&&"all"===o:return e.filter(o=>o.tag===t);case"null"==t&&"all"!==o:return e.filter(t=>t.category===o);default:return e.filter(e=>e.tag===t&&e.category===o)}}))}setTag(t){this._tag$.next(t)}setCategory(t){this._category$.next(t)}create(t){this._af.collection("products").add(t)}getByID(t){return this._af.collection("products",o=>o.where("id","==",t)).valueChanges()}}return t.\u0275fac=function(o){return new(o||t)(a.Sb(s.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);