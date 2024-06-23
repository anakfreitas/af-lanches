import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './features/buy/pages/buy-page/buy-page.component';
import { CheckoutPageComponent } from './features/checkout/pages/checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuyPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
