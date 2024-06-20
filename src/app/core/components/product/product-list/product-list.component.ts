import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NgFor, MatListModule],

})
export class ProductListComponent {
  public list: any = [
    {
      produto: "Pastel de Carne",
      valor: "R$9,00",
      image: "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg"
    },
    {
      produto: "Pastel de Queijo",
      valor: "R$9,00",
      image: "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg"
    },
    {
      produto: "Pastel de Frango",
      valor: "R$9,00",
      image: "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg"
    },
    {
      produto: "Pastel de Misto",
      valor: "R$9,00",
      image: "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg"
    },
    {
      produto: "Pastel de Pizza",
      valor: "R$9,00",
      image: "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg"
    },

  ]

}
