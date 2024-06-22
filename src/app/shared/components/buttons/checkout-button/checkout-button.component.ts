import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.scss'],
  imports: [MatIconModule, MatButtonModule, SharedModule],
  standalone: true,
})
export class CheckoutButtonComponent implements OnChanges {
  @Input() quantity = 0;
  @Input() value = 0;

  public animate = false;

  ngOnChanges(changes: SimpleChanges): void {
    const valueChange = changes['value'];
    if (
      !valueChange.firstChange &&
      valueChange.currentValue > (valueChange.previousValue ?? 0)
    ) {
      this.animate = true;
      setTimeout(() => (this.animate = false), 500);
    }
  }
}
