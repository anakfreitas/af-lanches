import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReviewService } from '../../../services/review.service';
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
    };

    this.reviewService.saveReview(review).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
