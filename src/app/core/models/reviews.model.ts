export interface Review {
  reviewId?: string, productId: string, productName: string, name: string, date?: Date | string, rating: number
}

export interface ReviewAverage{
  productId: string; title: string; averageRating: number
}
