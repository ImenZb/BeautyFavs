(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Wlq6:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchModule",function(){return w});var i=n("ofXK"),o=n("tyNb"),r=n("mrSG"),c=n("cp0P"),l=n("SxV6"),s=n("lJxs"),b=n("81uL"),a=n("fXoL"),u=n("tk/3");let p=(()=>{class e{constructor(e){this._http=e}getAll(e){return this._http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCFen6NifzjQvj_QX8vhh_-sMil2nJtNbI&cx=4a589f3673b1234e4&q="+e)}}return e.\u0275fac=function(t){return new(t||e)(a.Sb(u.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("Gdn9"),h=n("eDGZ"),g=n("TEn/");function m(e,t){1&e&&(a.Ob(0,"ion-list-header"),a.Ob(1,"ion-label"),a.rc(2,"Already reviewd"),a.Nb(),a.Nb())}function f(e,t){if(1&e&&(a.Mb(0),a.Ob(1,"ion-item"),a.Ob(2,"ion-avatar",6),a.Kb(3,"img",7),a.Nb(),a.Ob(4,"ion-label",8),a.Ob(5,"ion-text"),a.rc(6),a.Nb(),a.Ob(7,"ion-text",9),a.Kb(8,"br"),a.rc(9),a.Nb(),a.Nb(),a.Ob(10,"ion-button",10),a.Kb(11,"ion-icon",11),a.Nb(),a.Nb(),a.Lb()),2&e){const e=t.$implicit;a.zb(3),a.ec("src",null==e?null:e.image_url,a.kc),a.zb(3),a.sc(null==e?null:e.product_name),a.zb(3),a.tc("",e.brand," "),a.zb(1),a.ec("routerLink","../detail/"+e.id)}}function O(e,t){1&e&&(a.Ob(0,"ion-list-header"),a.Ob(1,"ion-label"),a.rc(2,"New products add feed"),a.Nb(),a.Nb())}function N(e,t){if(1&e){const e=a.Pb();a.Mb(0),a.Ob(1,"ion-item"),a.Ob(2,"ion-avatar",6),a.Kb(3,"img",7),a.Nb(),a.Ob(4,"ion-label",8),a.Kb(5,"ion-text",12),a.Ob(6,"ion-text",9),a.Kb(7,"br"),a.rc(8),a.Nb(),a.Nb(),a.Ob(9,"ion-button",13),a.Wb("click",function(){a.ic(e);const t=a.Yb().$implicit;return a.Yb().openModal(t)}),a.Kb(10,"ion-icon",14),a.Nb(),a.Nb(),a.Lb()}if(2&e){const e=a.Yb().$implicit;a.zb(3),a.ec("src",null==e||null==e.pagemap||null==e.pagemap.cse_thumbnail[0]?null:e.pagemap.cse_thumbnail[0].src,a.kc),a.zb(2),a.ec("innerHTML",(null==e?null:e.htmlTitle.split("/b>")[0])+"/b>",a.jc),a.zb(3),a.tc("Vendu par ",e.displayLink.split(".")[1]," ")}}function y(e,t){if(1&e&&(a.Mb(0),a.pc(1,N,11,3,"ng-container",4),a.Lb()),2&e){const e=t.$implicit;a.zb(1),a.ec("ngIf",(null==e||null==e.pagemap?null:e.pagemap.cse_thumbnail)&&!(null!=e&&e.htmlTitle.includes("ligne")))}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.serviceGoogle=e,this.serviceProduit=t,this._productListService=n,this.modalCtrl=i,this.query="",this.isKeyEntered=!1}ngOnInit(){}filterList(e){this.query=e.srcElement.value,this.isKeyEntered=!0,this.resultsGoogle=this.getGoogle(),this.resultsLocal=this.getLocal()}getGoogle(){return Object(c.a)([this.serviceGoogle.getAll(this.query),this._productListService.productList$.pipe(Object(l.a)())]).pipe(Object(s.a)(([e,t])=>{let n=[];return[...e.items].forEach(e=>{for(let i=0;i<t.length;i++){const o=t[i],r=e.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=o.product_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");r.includes(c)||n.push(e)}}),[...new Set(n)]}))}getLocal(){return Object(c.a)([this.serviceGoogle.getAll(this.query),this._productListService.productList$.pipe(Object(l.a)()),this.getProduct().pipe(Object(l.a)())]).pipe(Object(s.a)(([e,t,n])=>{let i=[];return[...e.items].forEach(e=>{for(let n=0;n<t.length;n++){const o=t[n],r=e.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=o.product_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");r.split(""),r.includes(c)&&i.push(o)}}),[...new Set([...i,...n])]}))}openModal(e){return Object(r.b)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:b.a,componentProps:{productName:e.title,productImg:e.pagemap.cse_thumbnail[0].src||"../../../assets/images/home1.jpg"}});yield t.present()})}getProduct(){return this._productListService.getProducts().pipe(Object(s.a)(e=>e.filter(e=>this.isMatched(this.query,e.product_name))))}isMatched(e,t){let n=e.split(" "),i=!1;for(let o=0;o<n.length&&(i=t.includes(n[o]),!i);o++);return i}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(p),a.Jb(d.a),a.Jb(h.a),a.Jb(g.Y))},e.\u0275cmp=a.Db({type:e,selectors:[["app-search"]],decls:23,vars:10,consts:[[1,"ion-no-padding"],[1,"ion-text-capitalize"],["size","12"],[3,"keyup.enter"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","start"],[3,"src"],[1,"ion-text-wrap","myLabel"],["color","primary"],["fill","clear","shape","round","size","small",3,"routerLink"],["slot","end","name","chevron-forward-outline"],[3,"innerHTML"],["fill","clear","shape","round","size","small",3,"click"],["slot","end","name","add"]],template:function(e,t){if(1&e&&(a.Ob(0,"ion-header"),a.Ob(1,"ion-toolbar",0),a.Ob(2,"ion-title",0),a.Ob(3,"h1",1),a.rc(4,"Truth on Cosmetic"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-content"),a.Ob(6,"ion-grid"),a.Ob(7,"ion-row"),a.Ob(8,"ion-col",2),a.Ob(9,"ion-searchbar",3),a.Wb("keyup.enter",function(e){return t.filterList(e)}),a.Nb(),a.Nb(),a.Nb(),a.Ob(10,"ion-row"),a.Ob(11,"ion-col",2),a.Ob(12,"ion-list"),a.pc(13,m,3,0,"ion-list-header",4),a.Zb(14,"async"),a.pc(15,f,12,4,"ng-container",5),a.Zb(16,"async"),a.Nb(),a.Nb(),a.Nb(),a.Ob(17,"ion-row"),a.Ob(18,"ion-col",2),a.Ob(19,"ion-list"),a.pc(20,O,3,0,"ion-list-header",4),a.pc(21,y,2,1,"ng-container",5),a.Zb(22,"async"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e){let e=null;a.zb(13),a.ec("ngIf",t.isKeyEntered&&(null==(e=a.ac(14,4,t.resultsLocal))?null:e.length)>0),a.zb(2),a.ec("ngForOf",a.ac(16,6,t.resultsLocal)),a.zb(5),a.ec("ngIf",t.isKeyEntered),a.zb(1),a.ec("ngForOf",a.ac(22,8,t.resultsGoogle))}},directives:[g.t,g.V,g.U,g.q,g.s,g.G,g.p,g.H,g.cb,g.C,i.j,i.i,g.D,g.B,g.z,g.e,g.R,g.h,o.f,g.ab,g.u],pipes:[i.b],styles:[".myLabel[_ngcontent-%COMP%]{font-size:12px}"]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(v)],o.g]}),e})();var z=n("PCNd");let w=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[i.c,L,g.W,u.b,z.a]]}),e})()}}]);