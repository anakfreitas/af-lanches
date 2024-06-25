import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { ProductsResume } from '../../models/product.model';
import { PurchaseInfos } from '../../models/purchase.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.scss'],
})
export class FinishPageComponent implements OnInit{
  // The constructor ensures that these values always exist.
  public lastProductsResume!: ProductsResume[];
  public lastPurchaseInfos!: PurchaseInfos;


  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ) {
    if (
      this.checkoutService.lastProductsResume &&
      this.checkoutService.lastPurchaseInfos
    ) {
      this.lastProductsResume = this.checkoutService.lastProductsResume;
      this.lastPurchaseInfos = this.checkoutService.lastPurchaseInfos;

      this.checkoutService.lastProductsResume = undefined;
      this.checkoutService.lastPurchaseInfos = undefined;
   }
    // else {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.lastPurchaseInfos = { "name": "herbet junior", "email": "herbetjr@mail.com", "phone": "75456465564", "address": "rua dhjaj k", "cep": "45645646", "city": "djkashd ak", "state": "hdjak dha", "cardName": "dsdsdsds", "cardNumber": "2822222222222222", "cardExpiry": "0102", "cardCvv": "dsdsdsdsd" }
    this.lastProductsResume = [ { "id": "1", "images": [ "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg", "../../../../../assets/img/coxinha.jpg" ], "price": 3, "title": "Pastel de Carne", "quantity": 1 }, { "id": "2", "images": [ "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg", "../../../../../assets/img/coxinha.jpg" ], "price": 9.5, "title": "Pastel de Queijo", "quantity": 1 }, { "id": "4", "images": [ "https://soubh.uai.com.br/uploads/place/image/882/Paulo_Vilela.jpg", "../../../../../assets/img/coxinha.jpg" ], "price": 2.25, "title": "Pastel de Misto", "quantity": 1 } ]
  }
}
