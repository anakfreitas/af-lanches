import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public list: Product[] = [
    {
      title: 'Pastel de Carne',
      price: 9,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
      ],
    },
    {
      title: 'Pastel de Queijo',
      price: 9,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
      ],
    },
    {
      title: 'Pastel de Frango',
      price: 9,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
      ],
    },
    {
      title: 'Pastel de Misto',
      price: 9,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
      ],
    },
    {
      title: 'Pastel de Pizza',
      price: 9,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}

  openProductDetails(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    dialogConfig.panelClass = 'custom-dialog-container';
    this.dialog.open(ProductDetailComponent, dialogConfig);
  }
}
