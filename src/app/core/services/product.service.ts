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

  //** For now, we will always find a product by its ID because it is mocked on the server. In the future, we need to develop a strategy to handle this.*/
  public getProductById(id: string): Product {
    return this.allProducts.find((product) => product.id === id)!;
  }
}
