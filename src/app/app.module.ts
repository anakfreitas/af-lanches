import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatDialogModule } from '@angular/material/dialog';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BuyModule } from './features/buy/buy.module';
import { CheckoutModule } from './features/checkout/checkout.module';
import { ChartsComponent } from './features/dashboard/components/charts/charts.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ChartsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // For injections
    MatDialogModule,
    HeaderComponent,
    NavbarComponent,

    // features
    BuyModule,
    CheckoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
