import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IPost } from '../interfaces/post';
import { first, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

const apiUrl = ' http://localhost:3000/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _postsList$ = new BehaviorSubject([]);
  public postsList$ = this._postsList$.asObservable();

  constructor(
    private http: HttpClient,
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
    return combineLatest([
      this._af
        .collection<IPost>('posts', (ref) =>
          ref.where('productId', '==', productid)
        )
        .valueChanges(),
      this._userService.getAll(),
    ]).pipe(
      map(([posts, users]) => {
        //add users info related to post
        posts.forEach((post) => {
          const uid = post.uid;
          const user = users.filter((user) => (user.uid = uid));
          (post = post),
            { username: user[0]?.username, photoUrl: user[0]?.photoUrl };
        });
        return posts;
      })
    );
    //return this._af.collection('posts', ref => ref.where('productId','==',productid)).valueChanges();
  }
  save(p: Partial<IPost> & { uid: string }) {
    //generate an id
    const id = this._af.createId();
    //prepare data
    const data = {
      id,
      productId: p.productId,
      uid: p.uid,
      body: p.body,
      date: Date.now(),
    };
    this._af.collection('posts').doc(id).set(data);
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(apiUrl);
  }

  /* getById(id:number): Observable<IPost>{
    return this.http.get<IPost[]>(apiUrl).pipe(
      map(posts => posts.find(a => a.id === id))
    );
  }*/

  create(post: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(apiUrl, post);
  }

  update(post: IPost) {
    return this.http.put<IPost>(apiUrl + '/' + post.id, post);
  }

  //get the first feed related to the product
  async getFirstPostsByProduct(productid: string) {

    const posts = await this._af
      .collection<IPost>('posts', (ref) =>
        ref.where('productId', '==', productid)
      )
      .valueChanges().pipe(first())
      .toPromise();
    if(posts.length <= 0) return;
    const uid = posts[0].uid;
    const user = await this._userService.getByUid(uid).pipe(first()).toPromise();
    
    return {
      ...posts[0],
      username: user?.username,
      photoUrl: user?.photoUrl,
    };
  }

  //check if user already have a feed related the product
  async isUserFeed(uid: string, productid: string) {
    const posts = await this._af
      .collection<IPost>('posts', (ref) =>
        ref.where('productId', '==', productid).where('uid', '==', uid)
      )
      .valueChanges().pipe(first())
      .toPromise();
    return posts.length > 0;
  }

}
