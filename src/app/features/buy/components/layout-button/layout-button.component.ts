import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterProductModalComponent } from '../filter-product-modal/filter-product-modal.component';

@Component({
  selector: 'app-layout-button',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.scss'],
})
export class LayoutButtonComponent {
  @Input() layout: any;

  @Output() filter: EventEmitter<string> = new EventEmitter();

  public selectedValue: string | undefined;
  public counterFilter: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {}

  setLayout(type: string) {
    this.localStorageService.setItem('layoutList', type);
  }
  openProductFilter() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(
      FilterProductModalComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.filter.emit(value);
      }
    });
  }
}
