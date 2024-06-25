export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

export interface ProductsResume extends Product {
  quantity: number;
}

export interface ToBuyProduct extends Product {
  buyAction: (quantity: number) => void;
}

export interface TopSales {
  id: string;
  title: string;
  quantity: number;
}
