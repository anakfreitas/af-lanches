import { Injectable } from '@angular/core';
import { ProductsResume } from '../models/product.model';
import { PurchaseInfos, TopSales } from '../models/purchase.model';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { Observable, first } from 'rxjs';
import { RequestService } from '../../../core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public lastProductsResume?: ProductsResume[];
  public lastPurchaseInfos?: PurchaseInfos;

  constructor(
    private router: Router,
    private cartService: CartService,
    private requestService: RequestService
  ) {}

  finishSale(purchaseInfos: PurchaseInfos) {
    this.cartService.productsResume
      .pipe(first())
      .subscribe((productsResume) => {
        this.lastProductsResume = productsResume;
        this.lastPurchaseInfos = purchaseInfos;
        // this.increaseSales(productsResume);

        this.cartService.clearCart();
        this.router.navigate(['/finish']);
      });
  }

  /**
   * Incrementa a quantidade de itens compradas
   */
  // increaseSales(productsResume: ProductsResume[]): void {
  //   this.dashboard
  //     .getTopSellingProducts()
  //     .pipe(
  //       switchMap((res) =>
  //         from(productsResume).pipe(
  //           mergeMap((resume) => {
  //             const item = res.find((product) => product.id == resume.id);
  //             if (!item) {
  //               const body: TopSales = {
  //                 id: resume.id,
  //                 quantity: resume.quantity,
  //                 title: resume.title,
  //               };
  //               return this.addTopSale(body);
  //             } else {
  //               return this.updateTopSale(
  //                 item.id,
  //                 item.quantity + resume.quantity
  //               );
  //             }
  //           })
  //         )
  //       )
  //     )
  //     .subscribe({
  //       next: () => {},
  //       error: (err) => {
  //         console.error(err);
  //       },
  //     });
  // }

  addTopSale(body: TopSales): Observable<TopSales> {
    return this.requestService.post<TopSales>(`top-items`, body);
  }

  updateTopSale(id: string, quantity: number): Observable<TopSales> {
    return this.requestService.patch<TopSales>(`top-items/${id}`, {
      quantity,
    });
  }
}
