import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  finalizePurchase() {
    // Implementar lógica para finalizar a compra
    alert('Compra finalizada com sucesso!');
  }
}
