import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from '../../../../shared/services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private mobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  product: Product = {
    title: '',
    price: 0,
    images: [],
  };

  public currentIndex = 0;

  public isMobile: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deviceService: DeviceService
  ) {
    this.product = data;
  }

  ngOnInit(): void {
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.screenMobile();
  }

  @HostListener('window:resize', ['$event'])
  private resize(event: any) {
    this.isMobile =
      this.deviceService.screenMobile() || this.deviceService.isMobile();
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.product.images.length - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.product.images.length - 1
        ? this.currentIndex + 1
        : 0;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
