import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { AfInputError } from '../../models/af-input';

@Component({
  selector: 'app-af-input',
  templateUrl: './af-input.component.html',
  styleUrls: ['./af-input.component.scss'],
})
/** https://stackoverflow.com/questions/52893088/forwarding-formcontrolname-to-inner-component-in-angular-with-reactive-forms */
export class AfInputComponent implements OnInit {
  public form!: FormGroup;

  @Input()
  public controlName!: string;

  @Input()
  public title!: string;

  @Input()
  public subtitle?: string;

  @Input()
  public placeholder?: string;

  @Input()
  public disabled = false;

  @Input()
  maxlength: number | string = 100;

  @Input()
  mask: string = '';

  @Input()
  type: 'text' | 'numeric' | 'email' = 'text';

  @Input()
  errors: AfInputError[] = [];

  getErrorText(errors: AfInputError[]) {
    return (
      errors.find((error) =>
        error.condiction(this.form.controls[this.controlName])
      )?.text ?? ''
    );
  }

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.form = <FormGroup>this.controlContainer.control;
  }
}
