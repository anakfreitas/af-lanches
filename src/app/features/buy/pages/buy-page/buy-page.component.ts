import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent {
  public list: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
    this.list = this.productService.allProducts;
  }


}
