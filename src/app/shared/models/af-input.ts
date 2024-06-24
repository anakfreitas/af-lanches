import { AbstractControl, FormControl } from '@angular/forms';

export type AfInputError = {
  condiction: (formControl: AbstractControl | FormControl) => boolean;
  text: string;
};
