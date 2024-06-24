import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyBrlPipe } from './pipes/currency-brl.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AfInputComponent } from './components/af-input/af-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CurrencyBrlPipe, AfInputComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,
    FormsModule,

    NgxMaskModule.forRoot(),
  ],
  exports: [
    CommonModule,

    // Material imports
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,

    // Form imports
    ReactiveFormsModule,
    FormsModule,

    // Packages imports
    NgxImageZoomModule,

    // Shared things
    CurrencyBrlPipe,
    AfInputComponent,
  ],
})
export class SharedModule {}
