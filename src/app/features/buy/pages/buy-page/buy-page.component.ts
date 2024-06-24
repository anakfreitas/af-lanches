import { Component } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { DeviceService } from '../../../../core/services/device.service';
import { ProductNoteComponent } from '../../components/reviews/product-note/product-note.component';
import { Review } from '../../../../core/models/reviews.model';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent {
  public list: Product[] = [];
  public isMobile: boolean = false;

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private productService: ProductService,
    private deviceService: DeviceService
  ) {
    this.list = this.productService.allProducts;
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.screenMobile();

    // const data = {
    //   productId: '3',
    //   name: 'User Teste',
    // };
    // const dialogRef = this.dialog.open(ProductNoteComponent, {
    //   width: '300px',
    //   height: '150px',
    //   data: data,
    // });
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
        this.cartService.addToCart(product, quantity);
        this.dialog.closeAll();
      },
    } as ToBuyProduct;
    dialogConfig.panelClass = 'custom-dialog-container';
    this.dialog.open(ProductDetailModalComponent, dialogConfig);
  }
}
