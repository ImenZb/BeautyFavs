(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+acA":function(t,e,i){"use strict";i.d(e,"a",function(){return f});var n=i("mrSG"),r=i("2Vo4"),s=i("lJxs"),o=i("eIep"),a=i("SxV6"),c=i("fXoL"),u=i("I/3d"),l=i("UbJi"),d=i("eDGZ");let f=(()=>{class t{constructor(t,e,i){this._firestore=t,this._fireauth=e,this._productListService=i,this._fav$=new r.a([]),this.favs$=this._fav$.asObservable(),this._fireauth.user.pipe(Object(s.a)(t=>null==t?void 0:t.uid),Object(o.a)(t=>this._firestore.collection("fav-products",e=>e.where("uid","==",t)).stateChanges(["added"]).pipe(Object(s.a)(t=>t.map(t=>{const e=t.payload.doc.id,i=t.payload.doc.data();return Object.assign({key:e},i)}))))).subscribe(t=>{const e=[...this._fav$.value.filter(e=>!t.find(t=>t.id===e.id)),...t];this._fav$.next(e)}),this._fireauth.user.pipe(Object(s.a)(t=>null==t?void 0:t.uid),Object(o.a)(t=>this._firestore.collection("fav-products",e=>e.where("uid","==",t)).stateChanges(["removed"]).pipe(Object(s.a)(t=>t.map(t=>{const e=t.payload.doc.id,i=t.payload.doc.data();return Object.assign({key:e},i)}))))).subscribe(t=>{const e=[...this._fav$.value.filter(e=>!t.find(t=>t.id===e.id))];this._fav$.next(e)})}isFav$(t){return this._fav$.pipe(Object(s.a)(e=>e.find(e=>e.id===t)),Object(s.a)(Boolean))}add(t){return Object(n.b)(this,void 0,void 0,function*(){const{uid:e=null}=yield this._fireauth.currentUser;this._firestore.collection("fav-products").add(Object.assign(Object.assign({},t),{uid:e}))})}remove(t){return Object(n.b)(this,void 0,void 0,function*(){const e=(yield this._fav$.pipe(Object(a.a)(),Object(s.a)(e=>e.find(e=>e.id===t))).toPromise()).key;yield this._firestore.collection("fav-products").doc(e).delete()})}getFavProductsList(){return Object(n.b)(this,void 0,void 0,function*(){const t=this._fav$.value,e=[];return console.log("favs",t),t.forEach(t=>Object(n.b)(this,void 0,void 0,function*(){const i=yield this._productListService.getByID(t.id).pipe(Object(a.a)()).toPromise();e.push(...i)})),e})}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(u.a),c.Sb(l.a),c.Sb(d.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return n}),i.d(e,"d",function(){return a});const n=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,i,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,i,n)}return!1}},JbSX:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("wEJo"),r=i("qULd"),s=i("iWo5");const o=(t,e)=>{let i,o;const a=(t,n,r)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,n);s&&e(s)?s!==i&&(u(),c(s,r)):u()},c=(t,e)=>{i=t,o||(o=i);const r=i;Object(n.f)(()=>r.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!i)return;const e=i;Object(n.f)(()=>e.classList.remove("ion-activated")),t&&o!==i&&i.click(),i=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,r.a),onMove:t=>a(t.currentX,t.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),o=void 0}})}},acej:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s});var n=i("1vRN");const r=async(t,e,i,r,s)=>{if(t)return t.attachViewToDom(e,i,s,r);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return r&&r.forEach(t=>o.classList.add(t)),s&&Object.assign(o,s),e.appendChild(o),await new Promise(t=>Object(n.c)(o,t)),o},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,i){"use strict";i.d(e,"a",function(){return n});const n={bubbles:{dur:1e3,circles:9,fn:(t,e,i)=>{const n=t*e/i-t+"ms",r=2*Math.PI*e/i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,i)=>{const n=e/i,r=t*n-t+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})}}},qULd:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return c}),i.d(e,"e",function(){return a});const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{n.selection()},s=()=>{n.selectionStart()},o=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=t=>{n.impact(t)}},qfBg:function(t,e,i){"use strict";i.d(e,"a",function(){return u});var n=i("vkgz"),r=i("Jgta"),s=i("fXoL"),o=i("I/3d"),a=i("UbJi"),c=i("tyNb");let u=(()=>{class t{constructor(t,e,i){this._af=t,this._auth=e,this._router=i}registerWithEmailPwd(t){this._auth.createUserWithEmailAndPassword(t.email,t.password).then(e=>{this._SetUserData({uid:e.user.uid,lastName:t.lastName,firstName:t.firstName,username:t.username,email:t.email})})}GoogleAuth(){this.AuthLogin(new r.a.auth.GoogleAuthProvider)}AuthLogin(t){this._auth.signInWithPopup(t).then(t=>{const e={username:null==t?void 0:t.user.displayName,email:null==t?void 0:t.user.email,uid:null==t?void 0:t.user.uid,photoUrl:null==t?void 0:t.user.photoURL};this._af.doc("users/"+e.uid).set(e,{merge:!0}),this._router.navigate(["home"])}).catch(t=>{window.alert(t)})}_SetUserData(t){return this._af.doc("users/"+t.uid).set({uid:t.uid,email:t.email,username:t.username,lastName:t.lastName},{merge:!0})}getByUid(t){return this._af.doc("users/"+t).valueChanges()}getAll(){return this._af.collection("users").valueChanges().pipe(Object(n.a)(t=>console.log("----\x3e",t)))}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(o.a),s.Sb(a.a),s.Sb(c.e))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);