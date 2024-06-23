import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, map } from 'rxjs';
import { Cart } from '../models/cart.model';
import { ProductService } from './product.service';

const cartKey = 'cart_state';

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

  constructor(private productService: ProductService) {
    this._cart.next(JSON.parse(localStorage.getItem(cartKey) ?? '{}'));
  }

  private setCart(currentCart: Cart) {
    localStorage.setItem(cartKey, JSON.stringify(currentCart));
    this._cart.next(currentCart);
  }

  addToCart(product: Product, quantity: number) {
    const currentCart = this._cart.value;
    if (!Object.keys(currentCart).includes(product.id)) {
      currentCart[product.id] = quantity;
    } else {
      currentCart[product.id] += quantity;
    }
    this.setCart(currentCart);
  }
}
