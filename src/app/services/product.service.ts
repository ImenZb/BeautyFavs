import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduit } from '../interfaces/produit';

const url = './assets/data.json';
const urlDB = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduit[]>{
    return this.http.get<IProduit[]>(urlDB);
   /* return this.http.get(url).pipe(
      map((response: {products: IProduit[]}) => response.products)
    );*/
  }

  create(product: IProduit): Observable<IProduit>{
    return this.http.post<IProduit>(urlDB,product);
  }

  
}
