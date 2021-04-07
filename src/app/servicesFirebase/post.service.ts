import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private dbPath = '/posts';
  postsRef: AngularFireList<IPost>;

  constructor(private db: AngularFireDatabase) {
    this.postsRef = db.list(this.dbPath);
   }

   /** CRUD methods**/
  getAll(): AngularFireList<IPost> {
    return this.postsRef;
  }

  create(produit: IPost): any {
    return this.postsRef.push(produit);
  }

  update(key: string, value: any): Promise<void> {
    return this.postsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.postsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.postsRef.remove();
  }
}
