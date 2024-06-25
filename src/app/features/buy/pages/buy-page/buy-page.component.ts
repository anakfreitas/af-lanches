import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DashboardService } from '../../../dashboard/services/dashboard.service';

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
    private localStorageService: LocalStorageService,
    private dashBoardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getList();
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

  getList() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.list = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterList(value: string) {
    switch (value) {
      case 'lowest-price': {
        this.list = this.productService.filterByLowestPrice(this.list);
        break;
      }
      case 'best-sellers': {
        this.dashBoardService.getTopSellingProducts().subscribe({
          next: (items) => {
            this.list = this.productService.bestSellers(this.list, items)
          },
        });
        break;
      }
      default:
        this.getList();
    }
  }
}
