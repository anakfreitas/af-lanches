import { Component } from '@angular/core';
import { Product, ToBuyProduct } from '../../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartService } from '../../../../shared/services/cart.service';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
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
    this.dialog.open(ProductDetailComponent, dialogConfig);
  }
}
