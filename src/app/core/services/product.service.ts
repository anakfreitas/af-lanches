import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Product } from '../../features/buy/models/product.model';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _allProducts: BehaviorSubject<Product[] | null> = new BehaviorSubject(
    null as Product[] | null
  );

  constructor(private requestService: RequestService) {
    this.getAllProducts();
  }

  private getAllProducts() {
    return this.requestService
      .get<Product[]>('products')
      .subscribe((allProducts) => this._allProducts.next(allProducts));
  }

  /** The hydrateCart function ensures that a product will always be found. The products need to be loaded to it works properly. */
  public getProductById(id: string): Product {
    const product = this._allProducts.value!.find(
      (product) => product.id === id
    );
    if (!product) {
      throw new Error(
        "Maybe the product isn't loaded. Use the productGuard to prevent this."
      );
    }

    return product;
  }

  public allProducts = this._allProducts
    .asObservable()
    .pipe(filter((allProducts) => allProducts !== null)) as Observable<
    Product[]
  >;
}
