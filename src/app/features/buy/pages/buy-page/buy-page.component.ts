import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../../../core/services/product.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { CurrencyBrlPipe } from '../../../../shared/pipes/currency-brl.pipe';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { DeviceService } from '../../../../core/services/device.service';
import { Subscription } from 'rxjs';
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
  ) {
    this.productService.allProducts.subscribe(
      (allProducts) => (this.list = allProducts)
    );
  }
  ngOnInit(): void {
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
