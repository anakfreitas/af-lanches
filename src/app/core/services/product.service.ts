import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Product } from '../../features/buy/models/product.model';
import { RequestService } from './request.service';
import { TopSales } from '../../features/dashboard/models/dashboard.model';

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
    const product = this._allProducts.value?.find(
      (product) => product.id === id
    );
    if (!product) {
      throw new Error(
        "Maybe the product isn't loaded. Use the productGuard to prevent this."
      );
    }

    return product;
  }

  /**
   * Filter products by lowest price
   */
  public filterByLowestPrice(products: Product[]) {
    return products.sort(
      (productA, productB) => productA.price - productB.price
    );
  }

  public bestSellers(products: Product[], topSales: TopSales[]) {
    return topSales
      .map((item) => {
        const product = products.find((product) => product.id === item.id);
        return { ...item, ...product, price: product?.price || 0, images: product?.images || [] };
      })
      .sort((productA, productB) => productB.quantity - productA.quantity);
  }

  public allProducts = this._allProducts
    .asObservable()
    .pipe(filter((allProducts) => allProducts !== null)) as Observable<
    Product[]
  >;
}
