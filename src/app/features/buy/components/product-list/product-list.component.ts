import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { DeviceService } from '../../../../core/services/device.service';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { CurrencyBrlPipe } from '../../../../shared/pipes/currency-brl.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: any;
  @Input() layout: any;

  @Output() filter: EventEmitter<string> = new EventEmitter();
  public isMobile: boolean = false;

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private deviceService: DeviceService,
    private snackbarService: SnackbarService
  ) {
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.screenMobile();
  }

  openProductDetails(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '850px';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.maxHeight = this.isMobile ? '90vh' : '100%';
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      ...product,
      buyAction: (quantity) => {
        this.cartService.addToCart(product.id, quantity);
        this.dialog.closeAll();
        const s = quantity > 1 ? 's' : '';
        this.snackbarService.open(
          'Produto' +
            s +
            ' adicionado' +
            s +
            ' por ' +
            new CurrencyBrlPipe().transform(quantity * product.price),
          {
            icon: 'check',
            type: 'success',
          }
        );
      },
    } as ToBuyProduct;
    dialogConfig.panelClass = 'custom-dialog-container';
    this.dialog.open(ProductDetailModalComponent, dialogConfig);
  }

  filterList(value: string) {
    this.filter.emit(value);
  }
}
