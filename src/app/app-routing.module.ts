import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './features/buy/pages/buy-page/buy-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
