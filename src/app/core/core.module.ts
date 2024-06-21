import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyBrlPipe } from '../shared/pipes/currency-brl.pipe';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, CurrencyBrlPipe],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    SharedModule,
    NgxImageZoomModule
  ],
  exports: [ProductDetailComponent, ProductListComponent],
})
export class CoreModule {}
