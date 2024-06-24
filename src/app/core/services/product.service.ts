import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../features/buy/models/product.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../env/dev.env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl;
  }

  ///** The hydrateCart function ensures that a product will always be found. */
  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
