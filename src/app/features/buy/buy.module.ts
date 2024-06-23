import { NgModule } from '@angular/core';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { CheckoutButtonComponent } from './components/checkout-button/checkout-button.component';
import { ReviewsComponent } from '../../core/components/product/reviews/reviews.component';

@NgModule({
  declarations: [
    BuyPageComponent,
    AddCartButtonComponent,
    CheckoutButtonComponent,
    ProductDetailModalComponent,
    ReviewsComponent
  ],
  exports: [CheckoutButtonComponent],
  imports: [SharedModule],
})
export class BuyModule {}
