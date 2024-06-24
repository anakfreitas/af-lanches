import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../env/dev.env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
