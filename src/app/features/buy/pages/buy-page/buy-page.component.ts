import { Component } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent {
  public list: Product[] = [];

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.list = this.productService.allProducts;
  }

  openProductDetails(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '850px';
    dialogConfig.maxWidth = '90vw';
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
