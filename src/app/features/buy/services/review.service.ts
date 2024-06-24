import { Injectable } from '@angular/core';
import { Review } from '../../../core/models/reviews.model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../env/dev.env';
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

  /**
   * Obtém as avalições de um produto
   */
  getReviews(productId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`).pipe(
      map((reviews) => {
        const findReviews = reviews.filter(
          (review) => review.productId === productId
        );
        return findReviews;
      })
    );
  }

  saveReview(review: Review): void {
    const allReviews = localStorage.getItem(this.localStorageKey);
    const reviews = allReviews ? JSON.parse(allReviews) : {};

    if (!reviews[review.productId]) {
      reviews[review.productId] = [];
    }

    reviews[review.productId].push({
      ...review,
      reviewId: uuidv4(),
      date: new Date(),
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(reviews));
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
