import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduit } from '../interfaces/produit';

const urlDB = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduit[]>{
    return this.http.get<IProduit[]>(urlDB);
  }

  getById(id:string): Observable<IProduit>{
    return this.http.get<IProduit[]>(urlDB).pipe(
      map(products => products.find(a => a.id === id))
    );
  }

  getByTag(tag:string): Observable<IProduit[]>{
    return this.http.get<IProduit[]>(urlDB).pipe(
      map(products => products.filter(a => a.tag === tag))
    );
  }

  getByCategory(category:string): Observable<IProduit[]>{
    return this.http.get<IProduit[]>(urlDB).pipe(
      map(products => products.filter(a => a.category === category))
    );
  }

  getByTagCategory(category:string,tag:string): Observable<IProduit[]>{
    return this.http.get<IProduit[]>(urlDB).pipe(
      map(products => products.filter(a => (a.category === category && a.tag === tag)))
    );
  }
  create(product: IProduit): Promise<IProduit>{
    return this.http.post<IProduit>(urlDB,product).toPromise();
  }

  update(product: IProduit){
    return this.http.put<IProduit>(urlDB+'/'+product.id, product);
  }
  
}
