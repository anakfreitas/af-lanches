import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ToBuyProduct } from '../../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from '../../../../core/services/device.service';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit {
  private mobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  product: ToBuyProduct;

  public currentIndex = 0;

  public isMobile: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailModalComponent>,
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
