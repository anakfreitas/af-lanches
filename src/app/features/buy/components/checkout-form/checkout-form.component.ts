import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AfInputValidators } from '../../../../core/utils/input-validators';
import { AfInputErrors } from '../../../../core/utils/input-errors';
import { PurchaseForm } from '../../models/purchase.model';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent {
  public checkoutForm: FormGroup;

  public nameErrors = AfInputErrors.name;
  public emailErrors = AfInputErrors.email;
  public phoneErrors = AfInputErrors.phone;
  public requiredError = AfInputErrors.required;
  public cepErrors = AfInputErrors.cep;
  public cardNumberErrors = AfInputErrors.cardNumber;
  public cardExpiryErrors = AfInputErrors.cardExpiry;

  @Output()
  onSuccessSubmit = new EventEmitter<PurchaseForm>();

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', AfInputValidators.name({ required: true })],
      email: ['', AfInputValidators.email],
      phone: ['', AfInputValidators.phone],
      address: ['', AfInputValidators.required],
      city: ['', AfInputValidators.required],
      state: ['', AfInputValidators.required],
      cep: ['', AfInputValidators.cep],
      cardNumber: ['', AfInputValidators.required],
      cardName: ['', AfInputValidators.required],
      cardExpiry: ['', AfInputValidators.required],
      cardCvv: ['', AfInputValidators.required],
    });
  }

  submit() {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      this.onSuccessSubmit.emit({
        name: this.checkoutForm.controls['name'].value,
        email: this.checkoutForm.controls['email'].value,
        phone: this.checkoutForm.controls['phone'].value,
        address: this.checkoutForm.controls['address'].value,
        cep: this.checkoutForm.controls['cep'].value,
        city: this.checkoutForm.controls['city'].value,
        state: this.checkoutForm.controls['state'].value,
        cardName: this.checkoutForm.controls['cardName'].value,
        cardNumber: this.checkoutForm.controls['cardNumber'].value,
        cardExpiry: this.checkoutForm.controls['cardExpiry'].value,
        cardCvv: this.checkoutForm.controls['cardCvv'].value,
      });
      this.checkoutForm.reset();
    }
  }
}
