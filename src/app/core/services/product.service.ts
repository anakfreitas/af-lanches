import { Injectable } from '@angular/core';
import { Product } from '../../features/buy/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts: Product[] = [
    {
      id: '1',
      title: 'Pastel de Carne',
      price: 3,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
        '../../../../../assets/img/coxinha.jpg',
      ],
    },
    {
      id: '2',
      title: 'Pastel de Queijo',
      price: 9.5,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
        '../../../../../assets/img/coxinha.jpg',
      ],
    },
    {
      id: '3',
      title: 'Pastel de Frango',
      price: 10,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
        '../../../../../assets/img/coxinha.jpg',
      ],
    },
    {
      id: '4',
      title: 'Pastel de Misto',
      price: 2.25,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
        '../../../../../assets/img/coxinha.jpg',
      ],
    },
    {
      id: '5',
      title: 'Pastel de Pizza',
      price: 9.99,
      images: [
        'https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg',
        '../../../../../assets/img/coxinha.jpg',
      ],
    },
  ];

  public getProductById(id: string): Product | undefined {
    return this.allProducts.find((product) => product.id === id);
  }

  public getTopSellingProducts() {
    const items = [
      { id: '1', title: 'Pastel de Carne', quantity: 2 },
      { id: '2', title: 'Pastel de Queijo', quantity: 5 },
      { id: '3', title: 'Pastel de Frango', quantity: 4 },
      { id: '4', title: 'Pastel de Misto', quantity: 7 },
      { id: '5', title: 'Pastel de Pizza', quantity: 3 },
    ];
    return items;
  }
}
