import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CartService } from '../../../features/buy/services/cart.service';
import { BuyModule } from '../../../features/buy/buy.module';
import { Router } from '@angular/router';

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

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.currentQuantity.subscribe(
      (cartQuantity) => (this.cartQuantity = cartQuantity)
    );
    this.cartService.currentValue.subscribe(
      (cartValue) => (this.cartValue = cartValue)
    );
  }

  toCheckout() {
    this.router.navigate(['/checkout']);
  }
}
