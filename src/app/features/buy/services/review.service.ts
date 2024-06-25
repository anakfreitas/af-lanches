import { Injectable } from '@angular/core';
import { Review } from '../../../core/models/reviews.model';
import { v4 as uuidv4 } from 'uuid';
import { Observable, map } from 'rxjs';
import { RequestService } from '../../../core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private requestService: RequestService) {}

  getReviews(): Observable<Review[]> {
    return this.requestService.get<Review[]>(`reviews`);
  }

  /**
   * Obtém as avalições de um produto
   */
  getReviewsByProduct(productId: string): Observable<Review[]> {
    return this.requestService.get<Review[]>(`reviews`).pipe(
      map((reviews) => {
        const findReviews = reviews.filter(
          (review) => review.productId === productId
        );
        return findReviews;
      })
    );
  }

  saveReview(review: Review): Observable<Review> {
    return this.requestService.post<Review>(`reviews`, {
      ...review,
      reviewId: uuidv4(),
      date: new Date(),
    });
  }

  getRatingLabel(rating: number): string {
    switch (rating) {
      case 1: {
        return 'Horrível';
      }
      case 2: {
        return 'Ruim';
      }
      case 3: {
        return 'Bom';
      }
      case 4: {
        return 'Ótimo';
      }
      case 5: {
        return 'Adorei';
      }
      default: {
        return '';
      }
    }
  }
}
