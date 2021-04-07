import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user';

const apiUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get():Observable<IUser[]>{
    return this.http.get<IUser[]>(apiUrl);
  }
  
  getAuthor(id:string): Observable<any> {
    return this.http.get<any>(apiUrl+ `/${id}`);
  }

  getAuthorByUsername(username:string){
    return this.http.get<IUser[]>(apiUrl).pipe(
      map(users => users.find(a => a.username === username))
    );
  }
}
