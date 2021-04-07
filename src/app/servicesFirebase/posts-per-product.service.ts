import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostsPerProductService {
  private dbPath = '/postsPerProduct';
  postsProductRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.postsProductRef = db.list(this.dbPath);
  }

  /** CRUD methods**/
  getAllByProductID(keyProduct:string): AngularFireList<any> {
    this.postsProductRef = this.db.list(this.dbPath+'/'+keyProduct);
    return this.postsProductRef;
  }


  create(keyProduct: string, keyPost:string): any {
    return this.postsProductRef.update(keyProduct,{[keyPost]:true});
  }
/*
  update(key: string, value: any): Promise<void> {
    return this.postsProductRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.postsProductRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.postsProductRef.remove();
  }*/
}
