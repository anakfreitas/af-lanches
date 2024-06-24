import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-product-modal',
  templateUrl: './filter-product-modal.component.html',
  styleUrls: ['./filter-product-modal.component.scss']
})
export class FilterProductModalComponent {
  labelPosition: 'mais-vendidos' | 'mais-avaliados' = 'mais-vendidos';
  constructor(
    public dialogRef: MatDialogRef<FilterProductModalComponent>,
  ){

  }
  closeModal() {
    this.dialogRef.close();
  }
}
