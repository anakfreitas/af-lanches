import { Component, Input } from '@angular/core';
import { Review } from '../../../../core/models/reviews.model';
import { ReviewService } from '../../../../core/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input() review!: Review;

  public stars: number[] = [1, 2, 3, 4, 5];

  constructor(private reviewService: ReviewService) {}

  getLabel(rating: number) {
    return this.reviewService.getRatingLabel(rating);
  }
}
