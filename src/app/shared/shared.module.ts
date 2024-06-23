import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyBrlPipe } from './pipes/currency-brl.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [CurrencyBrlPipe],
  imports: [NgFor],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    NgxImageZoomModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    NgFor,

    // Shared Things
    CurrencyBrlPipe,
  ],
})
export class SharedModule {}
