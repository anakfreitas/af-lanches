import { NgModule } from '@angular/core';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { CheckoutButtonComponent } from './components/checkout-button/checkout-button.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    // Components
    AddCartButtonComponent,
    CheckoutButtonComponent,
    ProductDetailModalComponent,
    CheckoutFormComponent,

    // Pages
    BuyPageComponent,
    CheckoutPageComponent,
  ],
  exports: [CheckoutButtonComponent],
  imports: [SharedModule],
})
export class BuyModule {}
