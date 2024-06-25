import { Injectable } from '@angular/core';
import { ProductsResume } from '../models/product.model';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Cart } from '../models/cart.model';
import { ProductService } from '../../../core/services/product.service';
import { SnackbarService } from '../../../core/services/snackbar.service';

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
  public currentValue = combineLatest([
    this.cart,
    this.productService.allProducts,
  ]).pipe(
    map(([cart, allProducts]) => {
      const productPrices: { [id: string]: number } = allProducts.reduce(
        (p, c) => ({ ...p, [c.id]: c.price }),
        {}
      );
      return Object.keys(cart).reduce(
        (p, c) => p + productPrices[c] * cart[c],
        0
      );
    })
  );

  public productsResume = combineLatest([
    this.cart,
    this.productService.allProducts,
  ]).pipe(
    map(([cart, allProducts]) => {
      const productsResume: ProductsResume[] = [];
      for (const productId of Object.keys(cart)) {
        const product = allProducts.find(
          (_product) => _product.id === productId
        )!;
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

  constructor(
    private productService: ProductService,
    private snackbarService: SnackbarService
  ) {
    this.hydrateCart();
  }

  /** In future, we can use an 'oldProduct' endpoint to informs to user which product have expired.  */
  private hydrateCart() {
    const currentCart = JSON.parse(
      localStorage.getItem(cartKey) ?? '{}'
    ) as Cart;
    this.productService.allProducts.subscribe((allProducts) => {
      let expiredProductsQuantity = 0;
      Object.keys(currentCart).forEach((productId) => {
        if (!allProducts.find((product) => product.id === productId)) {
          expiredProductsQuantity++;
          delete currentCart[productId];
        }
      });
      if (expiredProductsQuantity > 0) {
        const s = expiredProductsQuantity > 1 ? 's' : '';

        this.snackbarService.open('Produto' + s + 'do carrinho expirado' + s, {
          type: 'error',
          icon: 'error',
        });
      }

      this.setCart(currentCart);
    });
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
    if (currentCart[productId] > 1) {
      currentCart[productId]--;
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
