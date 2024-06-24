export interface Review {
  reviewId?: string, productId: string, name: string, date?: Date, rating: number
}

export interface ReviewAverage{
  productId: string, averageRating: number
}
