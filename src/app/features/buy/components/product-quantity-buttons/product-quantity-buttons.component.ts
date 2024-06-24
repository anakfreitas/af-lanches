import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-quantity-buttons',
  templateUrl: './product-quantity-buttons.component.html',
  styleUrls: ['./product-quantity-buttons.component.scss'],
})
export class ProductQuantityButtonsComponent {
  @Input() quantity = 0;

  @Output() decrement = new EventEmitter();
  @Output() increment = new EventEmitter();
}
