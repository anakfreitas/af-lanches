import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { CurrencyBrlPipe } from '../../../../shared/pipes/currency-brl.pipe';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { DeviceService } from '../../../../core/services/device.service';
import { ProductNoteComponent } from '../../components/reviews/product-note/product-note.component';
import { Review } from '../../../../core/models/reviews.model';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent implements OnInit {
  public list: Product[] = [];
  public isMobile: boolean = false;
  layoutList: string | null = null;
  private storageSubscription: Subscription | undefined;
  private storageEventListener = (event: StorageEvent) => {
    if (event.key === 'layoutList') {
      this.layoutList = event.newValue;
    }
  };

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private productService: ProductService,
    private snackbarService: SnackbarService,
    private deviceService: DeviceService,
    private localStorageService: LocalStorageService
  ) {
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.screenMobile();
  }

  ngOnInit(): void {
    this.getProducts();
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

  getProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.list = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    window.removeEventListener('storage', this.storageEventListener);
  }

  openProductDetails(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '850px';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.maxHeight = this.isMobile ? '90vh' : '100%';
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      ...product,
      buyAction: (quantity) => {
        this.cartService.addToCart(product.id, quantity);
        this.dialog.closeAll();
        const s = quantity > 1 ? 's' : '';
        this.snackbarService.open(
          'Produto' +
            s +
            ' adicionado' +
            s +
            ' por ' +
            new CurrencyBrlPipe().transform(quantity * product.price),
          {
            icon: 'check',
            type: 'success',
          }
        );
      },
    } as ToBuyProduct;
    dialogConfig.panelClass = 'custom-dialog-container';
    this.dialog.open(ProductDetailModalComponent, dialogConfig);
  }
}
