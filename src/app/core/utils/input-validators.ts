import { Validators } from '@angular/forms';

export const AfInputValidators = {
  required: Validators.compose([Validators.required]),
  name: ({ required }: { required: boolean }) =>
    Validators.compose([
      required ? Validators.required : undefined,
      Validators.minLength(4),
    ]),
  cpf: Validators.compose([Validators.required]),
  birthDate: Validators.compose([Validators.required]),
  email: Validators.compose([Validators.required, Validators.email]),
  cep: Validators.compose([Validators.required]),
  phone: Validators.compose([Validators.required, Validators.minLength(11)]),
};
