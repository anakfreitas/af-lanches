import { Injectable } from '@angular/core';
import { ProductsResume } from '../models/product.model';
import { BehaviorSubject, map } from 'rxjs';
import { Cart } from '../models/cart.model';
import { ProductService } from '../../../core/services/product.service';

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
  public productsResume = this.cart.pipe(
    map((cart) => {
      const productsResume: ProductsResume[] = [];
      for (const productId of Object.keys(cart)) {
        const product = this.productService.getProductById(productId);
        productsResume.push({
          id: product.id,
          images: product.images,
          price: product.price,
          title: product.title,
          quantity: cart[productId],
        });
      }
      return productsResume;
    })
  );

  constructor(private productService: ProductService) {
    this._cart.next(JSON.parse(localStorage.getItem(cartKey) ?? '{}'));
  }

  private setCart(currentCart: Cart) {
    localStorage.setItem(cartKey, JSON.stringify(currentCart));
    this._cart.next(currentCart);
  }

  addToCart(productId: string, quantity: number) {
    const currentCart = this._cart.value;
    if (!Object.keys(currentCart).includes(productId)) {
      currentCart[productId] = quantity;
    } else {
      currentCart[productId] += quantity;
    }
    this.setCart(currentCart);
  }

  incrementProduct(productId: string) {
    const currentCart = this._cart.value;
    currentCart[productId]++;
    this.setCart(currentCart);
  }

  decrementProduct(productId: string) {
    const currentCart = this._cart.value;
    currentCart[productId]--;
    if (currentCart[productId] > 0) {
      this.setCart(currentCart);
    }
  }

  removeFromCart(productId: string) {
    const currentCart = this._cart.value;
    delete currentCart[productId];
    this.setCart(currentCart);
  }

  clearCart() {
    this.setCart({});
  }
}
