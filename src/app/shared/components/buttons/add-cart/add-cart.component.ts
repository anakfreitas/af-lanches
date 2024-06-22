import { Component, Input } from '@angular/core';
import { ToBuyProduct } from '../../../../core/models/product.model';
import { SnackbarService } from '../../../services/snackbar.service';
import { CurrencyBrlPipe } from '../../../pipes/currency-brl.pipe';
@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
})
export class AddCartComponent {
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

  constructor(private snackbarService: SnackbarService) {}

  addToCart() {
    const s = this.quantity > 1 ? 's' : '';
    this.product.buyAction(this.quantity);
    this.snackbarService.open(
      'Produto' +
        s +
        ' adicionado' +
        s +
        ' por ' +
        new CurrencyBrlPipe().transform(this.quantity * this.product.price),
      {
        icon: 'check',
        type: 'success',
      }
    );
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
