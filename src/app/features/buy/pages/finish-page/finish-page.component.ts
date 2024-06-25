import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { ProductsResume } from '../../models/product.model';
import { PurchaseInfos } from '../../models/purchase.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.scss'],
})
export class FinishPageComponent implements OnInit {
  // The constructor ensures that these values always exist.
  public lastProductsResume!: ProductsResume[];
  public lastPurchaseInfos!: PurchaseInfos;

  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ) {
    if (
      this.checkoutService.lastProductsResume &&
      this.checkoutService.lastPurchaseInfos
    ) {
      this.lastProductsResume = this.checkoutService.lastProductsResume;
      this.lastPurchaseInfos = this.checkoutService.lastPurchaseInfos;

      this.checkoutService.lastProductsResume = undefined;
      this.checkoutService.lastPurchaseInfos = undefined;
    }
    // else {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {}
}
