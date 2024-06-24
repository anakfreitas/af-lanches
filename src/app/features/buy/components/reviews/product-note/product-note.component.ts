import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReviewService } from '../../../../../core/services/review.service';
import { Review } from '../../../../../core/models/reviews.model';

@Component({
  selector: 'app-product-note',
  templateUrl: './product-note.component.html',
  styleUrls: ['./product-note.component.scss'],
})
export class ProductNoteComponent {
  rating: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ProductNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {}

  setRating(rating: number): void {
    this.rating = rating;
  }

  submitRating(): void {
    if (!this.rating) {
      return;
    }
    const review: Review = {
      ...this.data,
      rating: this.rating,
      productName: this.data.title || '',
    };

    this.reviewService.saveReview(review);
    this.dialogRef.close(this.rating);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
