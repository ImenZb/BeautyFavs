import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private _productList$ = new BehaviorSubject([]);
  public productList$ = this._productList$.asObservable();
  private _tag$: BehaviorSubject<string> = new BehaviorSubject('null');
  public tag$ = this._tag$.asObservable();
  private _category$: BehaviorSubject<string> = new BehaviorSubject('all');
  public category$ = this._category$.asObservable(); 
  constructor(private _af: AngularFirestore) {
    this._af
      .collection<any[]>('products')
      .stateChanges(['added', 'modified'])
      .pipe(
        map(actions => actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {id, ...data};
        }))
      )
      .subscribe(
        newData => {
          const currentState = this._productList$.value.filter(
            product => !newData.find(newP => newP.id === product.id)
          );
          const newState = [
            ...currentState,
            ...newData
          ];
          this._productList$.next(newState);
        }
      );
  }
  
  getProducts(){
    return combineLatest([
      this.tag$,
      this.category$,
      this.productList$
    ]).pipe(
      map(([tag, category, productList]) => {
        switch (true) {
          case (tag === 'null' && category === 'all'):
            //searchtag all et categorie all
            return productList;
            break;
          case (tag !== 'null' && category !== 'all'):
            //searchtag et category != all
            return productList.filter(product => product.tag === tag && product.category === category);
            break;
          case (tag !== 'null' && category === 'all'):
            //searchtag !=all et category = all
            return productList.filter(product => product.tag === tag);
            break;
          case (tag == 'null' && category !== 'all'):
            //searchtag est all et category!= all
            return productList.filter(product => product.category === category);
            break;
          default:
            return productList.filter(product => product.tag === tag && product.category === category);
            break;
        }
      })
    )
  }

  setTag(tag:string){
    this._tag$.next(tag);
  }

  setCategory(category:string){
    this._category$.next(category);
  }

  
  //increment/decrement likes
  async modifylike(id:string, n: number){
    const FieldValue = firebase.firestore.FieldValue;
    const product = await this._af.collection('products', ref => ref.where('id', '==',id))
    .valueChanges({ idField: 'key' })
    .pipe(first()).toPromise();
    const key = product[0].key;
    console.log('product',product[0]);
    
    this._af.collection('products', ref => ref.where('id', '==',id)).doc(key).update({ likes: FieldValue.increment(n) })
  }
  
}
