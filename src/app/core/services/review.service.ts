import { Injectable } from '@angular/core';
import { Review, ReviewAverage } from '../../core/models/reviews.model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../env/dev.env';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private localStorageKey = 'reviews';
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl;
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`);
  }

  /**
   * Obtém as avalições de um produto
   */
  getReviewsByProduct(productId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`).pipe(
      map((reviews) => {
        const findReviews = reviews.filter(
          (review) => review.productId === productId
        );
        return findReviews;
      })
    );
  }

  saveReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, {
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
