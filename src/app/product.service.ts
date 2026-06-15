import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products?limit=6';
  
getClothesCatalog(): Observable<Product[]>{
  return this.http.get<Product[]>(this.apiUrl);
}


}
