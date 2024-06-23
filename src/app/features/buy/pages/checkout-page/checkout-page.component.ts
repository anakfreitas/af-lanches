import { Component } from '@angular/core';
import { PurchaseForm } from '../../models/purchase.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  finalizePurchase(purchaseForm: PurchaseForm) {
    // Implementar lógica para finalizar a compra
    alert('Compra finalizada com sucesso!');
    console.log(purchaseForm);
  }
}
