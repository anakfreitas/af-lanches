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
import { ReviewsComponent } from './components/product/reviews/reviews.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ProductGridComponent } from './components/product/product-grid/product-grid.component';
import { GroupButtonsComponent } from '../shared/components/buttons/group-buttons/group-buttons.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductGridComponent,
    ReviewsComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    SharedModule,
    NgxImageZoomModule,
    NavbarComponent,
    HeaderComponent,
    AppRoutingModule,
    GroupButtonsComponent
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductGridComponent,
    HomeLayoutComponent
  ],
})
export class CoreModule {}
