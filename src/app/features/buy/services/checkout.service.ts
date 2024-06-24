import { Injectable } from '@angular/core';
import { ProductsResume } from '../models/product.model';
import { PurchaseInfos } from '../models/purchase.model';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public lastProductsResume?: ProductsResume[];
  public lastPurchaseInfos?: PurchaseInfos;

  constructor(private router: Router, private cartService: CartService) {}

  finishSale(purchaseInfos: PurchaseInfos) {
    this.cartService.productsResume
      .pipe(first())
      .subscribe((productsResume) => {
        this.lastProductsResume = productsResume;
        this.lastPurchaseInfos = purchaseInfos;
        this.cartService.clearCart();
        this.router.navigate(['/finish']);
      });
  }
}
