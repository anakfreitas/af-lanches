import { Injectable } from '@angular/core';
import { Review } from '../../core/models/reviews.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private localStorageKey = 'reviews';

  constructor() {}

  /**
   * Obtém as avalições de um produto
   */
  getReviews(productId: string): Review[] {
    const allReviews = localStorage.getItem(this.localStorageKey);
    const reviews = allReviews ? JSON.parse(allReviews) : {};
    return reviews[productId] || [];
  }

  saveReview(review: Review): void {
    const allReviews = localStorage.getItem(this.localStorageKey);
    const reviews = allReviews ? JSON.parse(allReviews) : {};

    if (!reviews[review.productId]) {
      reviews[review.productId] = [];
    }

    reviews[review.productId].push(review);
    localStorage.setItem(this.localStorageKey, JSON.stringify(reviews));
  }

  clearReviews(): void {
    localStorage.removeItem(this.localStorageKey);
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
