import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Product, TopSales } from '../../features/buy/models/product.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../env/dev.env';
import { DashboardService } from '../../features/dashboard/services/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private dashBoardService: DashboardService
  ) {
    this.apiUrl = apiUrl;
  }

  ///** The hydrateCart function ensures that a product will always be found. */
  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  /**
   * Filter products by lowest price
   */
  public filterByLowestPrice(products: Product[]) {
    return products.sort(
      (productA, productB) => productA.price - productB.price
    );
  }

  public bestSellers(products: Product[], topSales: TopSales[]) {
    return topSales
      .map((item) => {
        const product = products.find((product) => product.id === item.id);
        return { ...item, ...product, price: product?.price || 0, images: product?.images || [] };
      })
      .sort((productA, productB) => productB.quantity - productA.quantity);
  }
}
