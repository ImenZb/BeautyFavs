import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { IProduit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private _likes$: BehaviorSubject<Partial<IProduit & {key: string}>[]> = new BehaviorSubject([]);
  likes$ = this._likes$.asObservable();

  constructor(
    private _firestore: AngularFirestore,
    private _fireauth: AngularFireAuth
  ) {
    console.log('[INFO] init likeService...');
    this._fireauth.user.pipe(
      map(user => user?.uid),
      switchMap(uid => {
        return this._firestore
        .collection<IProduit & {key: string}>(
          'likes-products',
          ref => ref.where('uid', '==', uid)
        )
        .stateChanges(['added'])
        .pipe(
          map(actions => actions.map(a => {
            const key = a.payload.doc.id;
            const data = a.payload.doc.data();
            return {key, ...data};
          }))
        )
      })
    )
    .subscribe(
        res => {
          const currentState = this._likes$.value.filter(
            product => !res.find(newA => newA.id === product.id)
          );
          const newState = [
            ...currentState,
            ...res
          ];
          this._likes$.next(newState);
        }
      );

    this._fireauth.user
    .pipe(
      map(user => user?.uid),
      switchMap(uid => {
        return this._firestore
        .collection<IProduit & {key: string}>(
          'likes-products',
          ref => ref.where('uid', '==', uid)
        )
        .stateChanges(['removed'])
        .pipe(
          map(actions => actions.map(a => {
            const key = a.payload.doc.id;
            const data = a.payload.doc.data();
            return {key, ...data};
          }))
        )
      })
    )
    .subscribe(
      res => {
        const currentState = this._likes$.value.filter(
          product => !res.find(newA => newA.id === product.id)
        );
        const newState = [
          ...currentState
        ];
        this._likes$.next(newState);
      }
    );
  }

  isLiked(id: string): Observable<boolean> {
    return this._likes$.pipe(
      map(likes => {
       return likes.find(like => like.id === id)}),
      map(Boolean)
    );
  }

  async add(like: {id: string}): Promise<void> {
    const {uid = null} = await this._fireauth.currentUser;
    this._firestore
        .collection('likes-products')
        .add({
          ...like,
          uid
        });
  }

  async remove(id: string): Promise<void> {
    const like = await this._likes$.pipe(
      first(),
      map(likes => likes.find(like => like.id === id))
    ).toPromise();
    const key = like.key;
    await this._firestore.collection('likes-products').doc(key).delete();
  }

  getCount(id:string){
    return this._firestore.collection('likes-products', ref => ref.where('id', '==', id)).valueChanges().pipe(
      map(querySnapshot => {
        return querySnapshot.length;
      }))
  }
}


 /* constructor(private _angularFirestore: AngularFirestore) { }
  public like(holeId: string, userId: string): Observable<DocumentReference> {
    return 
      this._angularFirestore.firestore
        .collection('holes')
        .doc(holeId)
        .collection('likes')
        .add({ uuid: userId })
    
  }

  public unlike(holeId: string, userId: string): Observable<void> {
    return
      this._angularFirestore.firestore
        .collection('holes')
        .doc(holeId)
        .collection('likes')
        .where('uuid', '==', userId)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            return doc.ref.delete();
          });
        })
  }*/
/*
  private likesCollection(holeId: string) {
    return this.firebaseService.database
      .collection('holes')
      .doc(holeId)
      .collection('likes');
  }
private getLikesCount(holeId: string): Observable<number> {
    return from(this.likesCollection(holeId).get()).pipe(
      map(querySnapshot => {
        return querySnapshot.size;
      }),
      catchError(_ => of(0))
    );*/
  


