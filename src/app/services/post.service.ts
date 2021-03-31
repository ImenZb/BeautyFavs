import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
  getAllPosts(): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  getById(id:string): Observable<any> {
    return this.http.get<any>(apiUrl + `/${id}`);
  }
}
