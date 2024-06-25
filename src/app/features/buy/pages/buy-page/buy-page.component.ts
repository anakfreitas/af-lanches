import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent implements OnInit {
  public list: Product[] = [];
  layoutList: string | null = null;
  private storageSubscription: Subscription | undefined;
  private storageEventListener = (event: StorageEvent) => {
    if (event.key === 'layoutList') {
      this.layoutList = event.newValue;
    }
  };

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.productService.allProducts.subscribe(
      (allProducts) => (this.list = allProducts)
    );

    this.layoutList = this.localStorageService.getItem('layoutList');

    this.storageSubscription = this.localStorageService
      .watchStorage()
      .subscribe((key) => {
        if (key === 'layoutList') {
          this.layoutList = this.localStorageService.getItem('layoutList');
        }
      });

    window.addEventListener('storage', this.storageEventListener);
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    window.removeEventListener('storage', this.storageEventListener);
  }
}
