import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post';
import { map } from 'rxjs/operators';

const apiUrl = ' http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(apiUrl);
  }


  getById(id:number): Observable<IPost>{
    return this.http.get<IPost[]>(apiUrl).pipe(
      map(posts => posts.find(a => a.id === id))
    );
  }

  create(post: Partial<IPost>): Observable<IPost>{
    return this.http.post<IPost>(apiUrl,post);
  }

  update(post: IPost){
    return this.http.put<IPost>(apiUrl +'/'+post.id, post);
  }
}
