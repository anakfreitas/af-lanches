import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterProductModalComponent } from '../filter-product-modal/filter-product-modal.component';

@Component({
  selector: 'app-layout-button',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.scss']
})
export class LayoutButtonComponent {

  @Input() layout: any;
  public selectedValue: string | undefined;

  ordemFilters = [
    { value: 'menor-preco', viewValue: 'Menor preço' },
    { value: 'mais-vendidos', viewValue: 'Mais vendidos' },
    { value: 'maior-preço', viewValue: 'Maior preço' },
  ];


  constructor(
    private localStorageService: LocalStorageService,
    private dialog: MatDialog,
  ) { }

  setLayout(type: string) {
    this.localStorageService.setItem('layoutList', type);
  }
  openProductFilter() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.autoFocus = true;
    this.dialog.open(FilterProductModalComponent, dialogConfig);
  }
}
