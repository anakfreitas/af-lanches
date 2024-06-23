import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  items = [
    { name: 'Produto 1', quantity: 2, price: 50 },
    { name: 'Produto 2', quantity: 1, price: 75 }
  ];

  get total() {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }
}
