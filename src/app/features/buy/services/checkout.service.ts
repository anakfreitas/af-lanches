import { Injectable } from '@angular/core';
import { ProductsResume, TopSales } from '../models/product.model';
import { PurchaseInfos } from '../models/purchase.model';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import {
  Observable,
  concatMap,
  first,
  from,
  map,
  mergeMap,
  switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../env/dev.env';
import { DashboardService } from '../../dashboard/services/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl: string = '';

  public lastProductsResume?: ProductsResume[];
  public lastPurchaseInfos?: PurchaseInfos;

  constructor(
    private router: Router,
    private cartService: CartService,
    private http: HttpClient,
    private dashboard: DashboardService
  ) {
    this.apiUrl = apiUrl;
  }

  finishSale(purchaseInfos: PurchaseInfos) {
    this.cartService.productsResume
      .pipe(first())
      .subscribe((productsResume) => {
        this.lastProductsResume = productsResume;
        this.lastPurchaseInfos = purchaseInfos;
        this.increaseSales(productsResume);

        this.cartService.clearCart();
        this.router.navigate(['/finish']);
      });
  }

  /**
   * Incrementa a quantidade de itens compradas
   */
  increaseSales(productsResume: ProductsResume[]): void {
    this.dashboard
      .getTopSellingProducts()
      .pipe(
        switchMap((res) =>
          from(productsResume).pipe(
            mergeMap((resume) => {
              const item = res.find((product) => product.id == resume.id);
              if (!item) {
                const body: TopSales = {
                  id: resume.id,
                  quantity: resume.quantity,
                  title: resume.title,
                };
                return this.addTopSale(body);
              } else {
                return this.updateTopSale(
                  item.id,
                  item.quantity + resume.quantity
                );
              }
            }, 3)
          )
        )
      )
      .subscribe({
        next: () => {},
        error: (err) => {
          console.error(err);
        },
      });
  }

  addTopSale(body: TopSales): Observable<TopSales> {
    return this.http.post<TopSales>(`${this.apiUrl}/top-items`, body);
  }

  updateTopSale(id: string, quantity: number): Observable<TopSales> {
    return this.http.patch<TopSales>(`${this.apiUrl}/top-items/${id}`, {
      quantity,
    });
  }
}
