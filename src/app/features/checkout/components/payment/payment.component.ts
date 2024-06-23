import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cardName: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }
}