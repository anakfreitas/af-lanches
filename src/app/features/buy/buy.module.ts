import { NgModule } from '@angular/core';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { CheckoutButtonComponent } from './components/checkout-button/checkout-button.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ProductQuantityButtonsComponent } from './components/product-quantity-buttons/product-quantity-buttons.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProductNoteComponent } from './components/reviews/product-note/product-note.component';

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
    ProductQuantityButtonsComponent,
    FinishPageComponent,
    ReviewsComponent,
    ProductNoteComponent
  ],
  exports: [CheckoutButtonComponent],
  imports: [SharedModule],
})
export class BuyModule {}
