import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './core/components/product/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CurrencyBrlPipe } from './shared/pipes/currency-brl.pipe';

import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { ProductListComponent } from './core/components/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent, CurrencyBrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    SharedModule,
    HeaderComponent,
    NavbarComponent,
    CoreModule,
    ProductListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
