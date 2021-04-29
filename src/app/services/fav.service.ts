import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { IProduit } from '../interfaces/produit';
import { ProductListService } from './product-list.service';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private _fav$: BehaviorSubject<Partial<IProduit & {key: string}>[]> = new BehaviorSubject([]);
  favs$ = this._fav$.asObservable();

  constructor(
    private _firestore: AngularFirestore,
    private _fireauth: AngularFireAuth,
    private _productListService: ProductListService
  ) {
    this._fireauth.user.pipe(
      map(user => user?.uid),
      switchMap(uid => {
        return this._firestore
        .collection<IProduit & {key: string}>(
          'fav-products',
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
          const currentState = this._fav$.value.filter(
            product => !res.find(newA => newA.id === product.id)
          );
          const newState = [
            ...currentState,
            ...res
          ];
          this._fav$.next(newState);
        }
      );

    this._fireauth.user
    .pipe(
      map(user => user?.uid),
      switchMap(uid => {
        return this._firestore
        .collection<IProduit & {key: string}>(
          'fav-products',
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
        const currentState = this._fav$.value.filter(
          product => !res.find(newA => newA.id === product.id)
        );
        const newState = [
          ...currentState
        ];
        this._fav$.next(newState);
      }
    );
  }

  isFav$(id: string): Observable<boolean> {
    return this._fav$.pipe(
      map(favs => favs.find(fav => fav.id === id)),
      map(Boolean)
    );
  }

  async add(fav: {id: string}): Promise<void> {
    const {uid = null} = await this._fireauth.currentUser;
    this._firestore
        .collection('fav-products')
        .add({
          ...fav,
          uid
        });
  }

  async remove(id: string): Promise<void> {
    const fav = await this._fav$.pipe(
      first(),
      map(favs => favs.find(fav => fav.id === id))
    ).toPromise();
    const key = fav.key;
    await this._firestore.collection('fav-products').doc(key).delete();
  }

  async getFavProductsList(){
    const favs = this._fav$.value;
    const products =[];
    console.log('favs',favs);
    favs.forEach(async (fav) => {
      const product = await this._productListService.getByID(fav.id).pipe(first()).toPromise();
      products.push(...product);
    });
    return products;
  }
  }

