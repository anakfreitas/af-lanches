import { Component, Input } from '@angular/core';
import { ToBuyProduct } from '../../models/product.model';
import { SnackbarService } from '../../../../core/services/snackbar.service';
import { CurrencyBrlPipe } from '../../../../shared/pipes/currency-brl.pipe';

@Component({
  selector: 'app-add-cart-button',
  templateUrl: './add-cart-button.component.html',
  styleUrls: ['./add-cart-button.component.scss'],
})
export class AddCartButtonComponent {
  @Input() product: ToBuyProduct = {
    id: '',
    title: '',
    price: 0,
    images: [],
    buyAction: () => null,
  };
  @Input() title: string = 'Adiconar ao carrinho';
  @Input() showIcon: boolean = true;

  public quantity: number = 1;

  addToCart() {
    this.product.buyAction(this.quantity);
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
