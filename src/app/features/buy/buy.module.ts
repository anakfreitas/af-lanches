import { NgModule } from '@angular/core';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { CheckoutButtonComponent } from './components/checkout-button/checkout-button.component';
import { CurrencyBrlPipe } from '../../shared/pipes/currency-brl.pipe';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    BuyPageComponent,
    AddCartButtonComponent,
    CheckoutButtonComponent,
    ProductDetailModalComponent,
  ],
  exports: [CheckoutButtonComponent],
  imports: [SharedModule],
})
export class BuyModule {}
