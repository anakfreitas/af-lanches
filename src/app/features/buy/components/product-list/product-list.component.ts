import { Component, EventEmitter, HostListener, Injectable, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product, ToBuyProduct } from '../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { DeviceService } from '../../../../core/services/device.service';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { CurrencyBrlPipe } from '../../../../shared/pipes/currency-brl.pipe';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `Primeira página`;
  itemsPerPageLabel = `Itens por página:`;
  lastPageLabel = `Última Página`;
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página anterior ';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class ProductListComponent implements OnInit, OnChanges {
  @HostListener('search', ['$event'])
  @Input() allProducts: any;
  @Input() layout: any;

  @Output() filter: EventEmitter<string> = new EventEmitter();
  public isMobile: boolean = false;
  public products: any;
  public message: boolean = false;

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private deviceService: DeviceService,
    private snackbarService: SnackbarService
  ) {
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.screenMobile();
  }

  ngOnInit() {
    this.products = this.allProducts
  }

  ngOnChanges(): void{
    this.products = this.allProducts
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

  filterList(value: string) {
    this.filter.emit(value);
  }

  searchProduct(search: string) {
      if (search !== '') {
        this.products = this.allProducts.filter((item: any) => {
          this.message = false;
          return item.title.toLowerCase().includes(search.toLowerCase());
        });
        if(JSON.stringify(this.products) === '[]'){
          this.message = true;
        }
      } else {
        this.message = false;
        this.products = [...this.allProducts];
      }
  }


}
