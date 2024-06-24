import { Component } from '@angular/core';
import { PurchaseInfos } from '../../models/purchase.model';
import { ProductService } from '../../../../core/services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductsResume, Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  public productsResume: Observable<ProductsResume[]> =
    this.cartService.productsResume;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private snackbarService: SnackbarService
  ) {}

  incrementProduct(productId: string) {
    this.cartService.incrementProduct(productId);
  }

  decrementProduct(productId: string) {
    this.cartService.decrementProduct(productId);
  }

  removeProduct(productId: string) {
    this.cartService.removeFromCart(productId);
    this.snackbarService.open('Produto removido', {
      icon: 'delete',
      type: 'error',
    });
  }

  finalizePurchase(purchaseInfos: PurchaseInfos) {
    this.checkoutService.finishSale(purchaseInfos);
  }
}
