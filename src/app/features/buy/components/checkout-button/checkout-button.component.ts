import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.scss'],
})
export class CheckoutButtonComponent implements OnChanges {
  @Input() quantity = 0;
  @Input() value = 0;
  @Output() onClick = new EventEmitter();

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
