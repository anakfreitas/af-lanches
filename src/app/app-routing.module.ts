import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './features/buy/pages/buy-page/buy-page.component';
import { CheckoutPageComponent } from './features/buy/pages/checkout-page/checkout-page.component';
import { FinishPageComponent } from './features/buy/pages/finish-page/finish-page.component';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuyPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'finish',
    component: FinishPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
