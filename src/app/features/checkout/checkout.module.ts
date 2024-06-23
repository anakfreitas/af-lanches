import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { AddressComponent } from './components/address/address.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReviewComponent } from './components/review/review.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';



@NgModule({
  declarations: [
    InformationComponent,
    AddressComponent,
    ShippingComponent,
    PaymentComponent,
    ReviewComponent,
    CheckoutPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
