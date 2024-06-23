export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

export interface ToBuyProduct extends Product {
  buyAction: (quantity: number) => void;
}
