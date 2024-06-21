import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
})
export class AddCartComponent {
  @Input() product: Product = {
    title: '',
    price: 0,
    images: [],
  };
  @Input() title: string = 'Adiconar ao carrinho';
  @Input() showIcon: boolean = true;

  public quantity: number = 1;

  constructor() {}

  addToCart() {
    console.log(this.product);
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
