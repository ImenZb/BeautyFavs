import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { IProduit } from '../interfaces/produit';
import { ProductListService } from './product-list.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private _likes$: BehaviorSubject<Partial<IProduit & {key: string}>[]> = new BehaviorSubject([]);
  likes$ = this._likes$.asObservable();

  constructor(
    private _firestore: AngularFirestore,
    private _fireauth: AngularFireAuth,
    private _productListService: ProductListService
  ) {
    this._fireauth.user.pipe(
      map(user => user?.uid),
      switchMap(uid => {
        if(!uid)return of([]);
        return this._firestore
        .collection<IProduit & {key: string}>(
          'likes-products',
          ref => ref.where('uid', '==', uid)
        )
        .stateChanges(['added'])
        .pipe(
          map(actions => actions?.map(a => {
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
        if(!uid)return of([]);
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

  async getLikedProductsList(){
    const products = [];
    const { uid=null } = await this._fireauth.currentUser;
    if(!uid)return(products);
    const likes = await this._firestore.collection<{uid:string,id:string}>('likes-products', ref => ref.where('uid', '==', uid)).valueChanges().pipe(first()).toPromise();
    likes.forEach(async (like) => {
      const product = await this._productListService.getByID(like.id).pipe(first()).toPromise();  
      products.push(...product);
    });
    return products;
  }

  getCountByUID(uid: string){
    if(!uid)return(of(0));
    return this._firestore.collection('likes-products', ref => ref.where('uid', '==', uid)).valueChanges().pipe(
      map(querySnapshot => {
        return querySnapshot.length;
      }))
  }
}


  


