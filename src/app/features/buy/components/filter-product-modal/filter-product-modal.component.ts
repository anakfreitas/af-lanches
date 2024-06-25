import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../services/local-storage.service';

export type OptionsFilter = 'best-sellers' | 'lowest-price';
@Component({
  selector: 'app-filter-product-modal',
  templateUrl: './filter-product-modal.component.html',
  styleUrls: ['./filter-product-modal.component.scss'],
})
export class FilterProductModalComponent {
  public labelPosition!: OptionsFilter;
  constructor(
    public dialogRef: MatDialogRef<FilterProductModalComponent>,
    private localStorageService: LocalStorageService
  ) {
    this.labelPosition =
      (this.localStorageService.getItem('filter') as OptionsFilter) ||
      'best-sellers';
  }
  closeModal() {
    this.dialogRef.close();
  }

  submit() {
    if (this.labelPosition) {
      this.dialogRef.close(this.labelPosition);
      this.localStorageService.setItem('filter', this.labelPosition);
    }
  }

  clear() {
    this.dialogRef.close('clear');
    this.localStorageService.removeItem('filter');
  }
}
