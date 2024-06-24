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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // For injections
    MatDialogModule,
    HeaderComponent,
    NavbarComponent,

    // features
    BuyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
