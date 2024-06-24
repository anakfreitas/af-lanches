import { Injectable } from '@angular/core';
import { Review } from '../../core/models/reviews.model';
import { v4 as uuidv4 } from 'uuid';

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

    reviews[review.productId].push({...review, reviewId: uuidv4(), date: new Date(),});
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

  /**
   * Obtém a média das classificações
   */
  getAverageRatings(): { productId: string, averageRating: number }[] {
    const allReviews = localStorage.getItem(this.localStorageKey);
    const reviews = allReviews ? JSON.parse(allReviews) : {};
    const averageRatings = [];

    for (const productId in reviews) {
      const productReviews = reviews[productId];
      const totalRatings = productReviews.reduce((sum: number, review: any) => sum + review.rating, 0);
      const averageRating = totalRatings / productReviews.length;
      averageRatings.push({ productId, averageRating });
    }

    return averageRatings;
  }
}
