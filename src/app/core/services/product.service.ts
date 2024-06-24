import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../features/buy/models/product.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../env/dev.env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl
  }

  //** For now, we will always find a product by its ID because it is mocked on the server. In the future, we need to develop a strategy to handle this.*/
  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
