import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IProduit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products';
  productsRef: AngularFireList<IProduit>;
  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
  }

  /** CRUD methods**/
  getAll(): AngularFireList<IProduit> {
    return this.productsRef;
  }

  create(produit: IProduit): any {
    return this.productsRef.push(produit);
  }

  update(key: string, value: any): Promise<void> {
    return this.productsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.productsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.productsRef.remove();
  }
}
