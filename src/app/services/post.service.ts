import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IPost } from '../interfaces/post';
import { first, map, switchMap, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { IUser } from '../interfaces/user';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _postsList$ = new BehaviorSubject([]);
  public postsList$ = this._postsList$.asObservable();

  constructor(
    private _userService: UserService,
    private _af: AngularFirestore
  ) {
    this._af
      .collection<any[]>('posts')
      .stateChanges(['added'])
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { id, ...data };
          })
        )
      )
      .subscribe((newData) => {
        const currentState = this._postsList$.value.filter(
          (post) => !newData.find((newP) => newP.id === post.id)
        );
        const newState = [...currentState, ...newData];
        this._postsList$.next(newState);
      });
  }

  getPostsByProduct(productid: string) {
    return this._af
      .collection<IPost>('posts', (ref) =>
        ref.where('productId', '==', productid)
      )
      .valueChanges()
      .pipe(
        switchMap(async (posts) => {
          const users = await this._userService
            .getAll()
            .pipe(first())
            .toPromise();
          //const users = await this._af.collection<IUser>('users').valueChanges().pipe(first()).toPromise();
          //add users info related to post
          return posts.map((post) => {
            const uid = post.uid;
            const user = users.filter((user) => user.uid === uid);
            return {
              ...post,
              username: user[0]?.username,
              photoUrl: user[0]?.photoUrl,
            };
          });
        })
      );
  }

  save(p: Partial<IPost> & { uid: string }) {
    //generate an id
    const id = this._af.createId();
    //generate date
    const date = firebase.firestore.FieldValue.serverTimestamp();
    //prepare data
    const data = {
      id,
      productId: p.productId,
      uid: p.uid,
      body: p.body,
      date,
    };
    this._af.collection('posts').doc(id).set(data);
  }

  //get the first feed related to the product
  getFirstPostsByProduct(productid: string) {
    return this.postsList$
      .pipe(
        switchMap(async(posts$) => {
          const posts = posts$.filter(element => element.productId === productid);
          if (posts.length <= 0) return;
          const uid = posts[posts.length - 1].uid;
          const user = await this._userService
            .getByUid(uid)
            .pipe(first())
            .toPromise();
          return {
            ...posts[posts.length - 1],
            username: user?.username,
            photoUrl: user?.photoUrl,
          };
        })
      )
/*
    const posts = await this._af
      .collection<IPost>('posts', (ref) =>
        ref.where('productId', '==', productid)
      )
      .valueChanges()
      .pipe(first())
      .toPromise();
    if (posts.length <= 0) return;
    const uid = posts[0].uid;
    const user = await this._userService
      .getByUid(uid)
      .pipe(first())
      .toPromise();
    return {
      ...posts[0],
      username: user?.username,
      photoUrl: user?.photoUrl,
    };*/
  }

  //check if user already have a feed related the product
  /*async isUserFeed(uid: string, productid: string) {
    const posts = await this._af
      .collection<IPost>('posts', (ref) =>
        ref.where('productId', '==', productid).where('uid', '==', uid)
      )
      .valueChanges()
      .pipe(first())
      .toPromise();
    return posts.length > 0;
  }*/
}
