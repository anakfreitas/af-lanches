import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BuyModule } from './features/buy/buy.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Standalone components
    HeaderComponent,
    NavbarComponent,

    // features
    BuyModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
