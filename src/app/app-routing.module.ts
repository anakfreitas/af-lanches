import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './features/buy/pages/buy-page/buy-page.component';
import { CheckoutPageComponent } from './features/buy/pages/checkout-page/checkout-page.component';
import { FinishPageComponent } from './features/buy/pages/finish-page/finish-page.component';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { productGuard } from './core/guards/product.guard';

const routes: Routes = [
  {
    path: '',
    component: BuyPageComponent,
    canActivate: [productGuard],
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [productGuard],
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [productGuard],
  },
  {
    path: 'finish',
    component: FinishPageComponent,
    canActivate: [productGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
