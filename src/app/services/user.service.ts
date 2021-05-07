import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, tap, take, first } from 'rxjs/operators';
import { IUser } from '../interfaces/user';
import firebase from 'firebase/app';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _af:AngularFirestore,
              private _auth:AngularFireAuth,
              private _router: Router) { }

  async registerWithEmailPwd(userInput: Partial<IUser> & {password:string}){
   await this._auth.createUserWithEmailAndPassword(userInput.email,userInput.password).then(
        res => {
          const uid = res.user.uid;
          const user = {
                        uid,
                        lastName:userInput.lastName,
                        firstName:userInput.firstName,
                        username:userInput.username,
                        email:userInput.email
                      }
          this._SetUserData(user);
        }
      )
  }

  GoogleAuth() {
    this.AuthLogin(new firebase.auth.GoogleAuthProvider());

  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    this._auth.signInWithPopup(provider)
    .then((result) => {
     const user : Partial<IUser> = {
                                      username: result?.user.displayName,
                                      email: result?.user.email,
                                      uid: result?.user.uid,
                                      photoUrl: result?.user.photoURL                                                         
                                    }
          this._af.doc(`users/${user.uid}`).get().toPromise().then(
            data => {
              if(!data.exists){
                this._af.doc(`users/${user.uid}`).set(user, {merge: true});
              }
            })
          this._router.navigate(['home']);
    }).catch((error) => {
      window.alert(error);
    })
  }
 private _SetUserData(user: Partial<IUser>) {
    const userRef: AngularFirestoreDocument<any> = this._af.doc(`users/${user.uid}`);
    const userData: Partial<IUser> = {
      uid: user.uid,
      email: user.email,
      username: user.username,
      lastName: user.lastName,
      firstName: user.firstName
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  getByUid(uid:string): Observable<Partial<IUser>>{
    return this._af.doc('users/'+ uid).valueChanges();
  }
  
  getAll(){
    return this._af.collection<IUser>('users').valueChanges();
  }

  update(uid: string, value:{role:string}, category: string){
    const id = this._af.createId();
    this._af.doc('pro-categories/' + id).set({id,category})
    this._af.doc('users/'+ uid).update({...value, categoryId: id});
  }

  /**
   * 
   * PRO SECTION
   */

  getAllPro(){
    return this._af.collection('users', ref => ref.where('role', '==', 'pro')).valueChanges();
  }

  //save user uid into prouid follower doc
  setFollower(uidpro: string,uid: string){
    this._af.doc('followers/' + uidpro).get().pipe(
      map(querySnapshot => {
        if(querySnapshot.exists){
          this._af.doc('followers/'+ uidpro).update({[uid]: true});
        }else{
          this._af.doc('followers/'+ uidpro).set({[uid]: true});
        }
      }))
  }

  //save uidpro into user following doc
  setFollowing(uidpro: string, uid: string){
    this._af.doc('followings/' + uid).get().pipe(map(querySnapshot => {
      if(querySnapshot.exists){
        this._af.doc('followings/' + uid).update({[uidpro]: true});
      }else{
        this._af.doc('followings/' + uid).set({[uidpro]: true});
      }
    }))
   
  }

  //check if user is following uidpro
  isFollower(uidpro: string, uid: string){
    return this._af.doc('followers'+ uidpro).get().pipe(tap(
     // docData => docData.get('uid')
    ))
  }

  //get followers count
  getCountFollowers(uidpro:string){
    if(!uidpro)return(of(0));
    return this._af.doc('followers' + uidpro).get().pipe(
      map(querySnapshot => {
        return querySnapshot.data.length;
      }))
  }

  //get following count
  getCountFollowing(uid: string){
    if(!uid)return(of(0));
    return this._af.doc('followings' + uid).get().pipe(
      map(querySnapshot => {
        return querySnapshot.data.length;
      }))
  }


}
