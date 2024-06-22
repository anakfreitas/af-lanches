import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart } from '../../core/models/cart.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: BehaviorSubject<Cart> = new BehaviorSubject({});
  public cart = this._cart.asObservable();
  public currentQuantity = this.cart.pipe(
    map((cart) => Object.keys(cart).reduce((p, c) => p + cart[c], 0))
  );
  public currentValue = this.cart.pipe(
    map((cart) => {
      const productPrices: { [id: string]: number } =
        this.productService.allProducts.reduce(
          (p, c) => ({ ...p, [c.id]: c.price }),
          {}
        );
      return Object.keys(cart).reduce(
        (p, c) => p + productPrices[c] * cart[c],
        0
      );
    })
  );

  constructor(private productService: ProductService) {}

  addToCart(product: Product, quantity: number) {
    const currentCart = this._cart.value;
    if (!Object.keys(currentCart).includes(product.id)) {
      currentCart[product.id] = quantity;
    } else {
      currentCart[product.id] += quantity;
    }
    this._cart.next(currentCart);
  }
}
