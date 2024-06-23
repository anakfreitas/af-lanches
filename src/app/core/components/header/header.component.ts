import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CartService } from '../../../features/buy/services/cart.service';
import { BuyModule } from '../../../features/buy/buy.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SharedModule, BuyModule],
})
export class HeaderComponent {
  public cartQuantity = 0;
  public cartValue = 0;

  constructor(private cartService: CartService) {
    this.cartService.currentQuantity.subscribe(
      (cartQuantity) => (this.cartQuantity = cartQuantity)
    );
    this.cartService.currentValue.subscribe(
      (cartValue) => (this.cartValue = cartValue)
    );
  }
}
