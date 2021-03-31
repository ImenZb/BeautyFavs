import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url ='https://www.googleapis.com/customsearch/v1?key=AIzaSyCFen6NifzjQvj_QX8vhh_-sMil2nJtNbI&cx=4a589f3673b1234e4';
@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  
  constructor(private _http:HttpClient) { }

  getAll(query:string):Observable<any>{
    return this._http.get(url+`&q=${query}`);
   
  }
}
