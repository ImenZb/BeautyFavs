(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Wlq6:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchModule",function(){return w});var i=n("ofXK"),o=n("tyNb"),r=n("mrSG"),c=n("cp0P"),l=n("SxV6"),s=n("lJxs"),b=n("81uL"),a=n("fXoL"),u=n("tk/3");let p=(()=>{class e{constructor(e){this._http=e}getAll(e){return this._http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCFen6NifzjQvj_QX8vhh_-sMil2nJtNbI&cx=4a589f3673b1234e4&q="+e)}}return e.\u0275fac=function(t){return new(t||e)(a.Sb(u.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("Gdn9"),h=n("eDGZ"),g=n("TEn/");function m(e,t){1&e&&(a.Ob(0,"ion-list-header"),a.Ob(1,"ion-label"),a.qc(2,"Already reviewd"),a.Nb(),a.Nb())}function f(e,t){if(1&e&&(a.Mb(0),a.Ob(1,"ion-item"),a.Ob(2,"ion-avatar",6),a.Kb(3,"img",7),a.Nb(),a.Ob(4,"ion-label",8),a.Ob(5,"pre"),a.qc(6),a.Zb(7,"json"),a.Nb(),a.Ob(8,"ion-text"),a.qc(9),a.Nb(),a.Ob(10,"ion-text",9),a.Kb(11,"br"),a.qc(12),a.Nb(),a.Nb(),a.Ob(13,"ion-button",10),a.Kb(14,"ion-icon",11),a.Nb(),a.Nb(),a.Lb()),2&e){const e=t.$implicit;a.zb(3),a.ec("src",null==e?null:e.image_url,a.jc),a.zb(3),a.rc(a.ac(7,5,null==e?null:e.image_url)),a.zb(3),a.rc(null==e?null:e.product_name),a.zb(3),a.sc("",e.brand," "),a.zb(1),a.ec("routerLink","../detail/"+e.id)}}function O(e,t){1&e&&(a.Ob(0,"ion-list-header"),a.Ob(1,"ion-label"),a.qc(2,"New products add feed"),a.Nb(),a.Nb())}function N(e,t){if(1&e){const e=a.Pb();a.Mb(0),a.Ob(1,"ion-item"),a.Ob(2,"ion-avatar",6),a.Kb(3,"img",7),a.Nb(),a.Ob(4,"ion-label",8),a.Kb(5,"ion-text",12),a.Ob(6,"ion-text",9),a.Kb(7,"br"),a.qc(8),a.Nb(),a.Nb(),a.Ob(9,"ion-button",13),a.Wb("click",function(){a.hc(e);const t=a.Yb().$implicit;return a.Yb().openModal(t)}),a.Kb(10,"ion-icon",14),a.Nb(),a.Nb(),a.Lb()}if(2&e){const e=a.Yb().$implicit;a.zb(3),a.ec("src",null==e||null==e.pagemap||null==e.pagemap.cse_thumbnail[0]?null:e.pagemap.cse_thumbnail[0].src,a.jc),a.zb(2),a.ec("innerHTML",(null==e?null:e.htmlTitle.split("/b>")[0])+"/b>",a.ic),a.zb(3),a.sc("Vendu par ",e.displayLink.split(".")[1]," ")}}function y(e,t){if(1&e&&(a.Mb(0),a.oc(1,N,11,3,"ng-container",4),a.Lb()),2&e){const e=t.$implicit;a.zb(1),a.ec("ngIf",(null==e||null==e.pagemap?null:e.pagemap.cse_thumbnail)&&!(null!=e&&e.htmlTitle.includes("ligne")))}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.serviceGoogle=e,this.serviceProduit=t,this._productListService=n,this.modalCtrl=i,this.query="",this.isKeyEntered=!1}ngOnInit(){}filterList(e){this.query=e.srcElement.value,this.isKeyEntered=!0,this.resultsGoogle=this.getGoogle(),this.resultsLocal=this.getLocal()}getGoogle(){return Object(c.a)([this.serviceGoogle.getAll(this.query),this._productListService.productList$.pipe(Object(l.a)())]).pipe(Object(s.a)(([e,t])=>{let n=[];return[...e.items].forEach(e=>{for(let i=0;i<t.length;i++){const o=t[i],r=e.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=o.product_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");r.includes(c)||n.push(e)}}),[...new Set(n)]}))}getLocal(){return Object(c.a)([this.serviceGoogle.getAll(this.query),this._productListService.productList$.pipe(Object(l.a)()),this.getProduct().pipe(Object(l.a)())]).pipe(Object(s.a)(([e,t,n])=>{let i=[];return[...e.items].forEach(e=>{for(let n=0;n<t.length;n++){const o=t[n],r=e.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=o.product_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");r.split(""),r.includes(c)&&i.push(o)}}),[...new Set([...i,...n])]}))}openModal(e){return Object(r.b)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:b.a,componentProps:{productName:e.title,productImg:e.pagemap.cse_thumbnail[0].src||"../../../assets/images/home1.jpg"}});yield t.present()})}getProduct(){return this._productListService.getProducts().pipe(Object(s.a)(e=>e.filter(e=>this.isMatched(this.query,e.product_name))))}isMatched(e,t){let n=e.split(" "),i=!1;for(let o=0;o<n.length&&(i=t.includes(n[o]),!i);o++);return i}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(p),a.Jb(d.a),a.Jb(h.a),a.Jb(g.Z))},e.\u0275cmp=a.Db({type:e,selectors:[["app-search"]],decls:23,vars:10,consts:[[1,"ion-no-padding"],[1,"ion-text-capitalize"],["size","12"],[3,"keyup.enter"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","start"],[3,"src"],[1,"ion-text-wrap","myLabel"],["color","primary"],["fill","clear","shape","round","size","small",3,"routerLink"],["slot","end","name","chevron-forward-outline"],[3,"innerHTML"],["fill","clear","shape","round","size","small",3,"click"],["slot","end","name","add"]],template:function(e,t){if(1&e&&(a.Ob(0,"ion-header"),a.Ob(1,"ion-toolbar",0),a.Ob(2,"ion-title",0),a.Ob(3,"h1",1),a.qc(4,"Truth on Cosmetic"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-content"),a.Ob(6,"ion-grid"),a.Ob(7,"ion-row"),a.Ob(8,"ion-col",2),a.Ob(9,"ion-searchbar",3),a.Wb("keyup.enter",function(e){return t.filterList(e)}),a.Nb(),a.Nb(),a.Nb(),a.Ob(10,"ion-row"),a.Ob(11,"ion-col",2),a.Ob(12,"ion-list"),a.oc(13,m,3,0,"ion-list-header",4),a.Zb(14,"async"),a.oc(15,f,15,7,"ng-container",5),a.Zb(16,"async"),a.Nb(),a.Nb(),a.Nb(),a.Ob(17,"ion-row"),a.Ob(18,"ion-col",2),a.Ob(19,"ion-list"),a.oc(20,O,3,0,"ion-list-header",4),a.oc(21,y,2,1,"ng-container",5),a.Zb(22,"async"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e){let e=null;a.zb(13),a.ec("ngIf",t.isKeyEntered&&(null==(e=a.ac(14,4,t.resultsLocal))?null:e.length)>0),a.zb(2),a.ec("ngForOf",a.ac(16,6,t.resultsLocal)),a.zb(5),a.ec("ngIf",t.isKeyEntered),a.zb(1),a.ec("ngForOf",a.ac(22,8,t.resultsGoogle))}},directives:[g.t,g.V,g.U,g.q,g.s,g.G,g.p,g.H,g.db,g.C,i.k,i.j,g.D,g.B,g.z,g.e,g.R,g.h,o.f,g.bb,g.u],pipes:[i.b,i.f],styles:[".myLabel[_ngcontent-%COMP%]{font-size:12px}"]}),e})()}];let z=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(v)],o.g]}),e})();var L=n("PCNd");let w=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[i.c,z,g.W,u.b,L.a]]}),e})()}}]);