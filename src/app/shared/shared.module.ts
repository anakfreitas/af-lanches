import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartComponent } from './components/buttons/add-cart/add-cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddCartComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    AddCartComponent
  ]
})
export class SharedModule { }
