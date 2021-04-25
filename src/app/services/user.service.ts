import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  registerWithEmailPwd(userInput: Partial<IUser> & {password:string}){
      this._auth.createUserWithEmailAndPassword(userInput.email,userInput.password).then(
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
          this._af.doc(`users/${user.uid}`).set(user, {merge: true});
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
      lastName: user.lastName
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
}
