import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartService } from '../../services/cart.service';
import { SharedModule } from '../../shared.module';
import { CheckoutButtonComponent } from '../buttons/checkout-button/checkout-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    CheckoutButtonComponent,
  ],
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
