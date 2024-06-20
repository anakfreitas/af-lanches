import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    title: '',
    price: 0,
    images: [],
  };

  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  addToCart() {
    console.log(`${this.product.title} adicionado ao carrinho!`);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
