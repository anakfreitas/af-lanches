import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReviewComponent } from './components/review/review.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// Importações do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    InformationComponent,
    AddressComponent,
    PaymentComponent,
    ReviewComponent,
    CheckoutPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    
  ]
})
export class CheckoutModule { }
