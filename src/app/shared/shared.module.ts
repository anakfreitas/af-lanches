import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartComponent } from './components/buttons/add-cart/add-cart.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyBrlPipe } from './pipes/currency-brl.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AddCartComponent, CurrencyBrlPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  exports: [AddCartComponent, CurrencyBrlPipe, CommonModule],
})
export class SharedModule {}
