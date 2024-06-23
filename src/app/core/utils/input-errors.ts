import { AbstractControl } from '@angular/forms';

const AfInputError = {
  required: {
    condiction: (fieldControl: AbstractControl) =>
      fieldControl.hasError('required'),
    text: 'Campo obrigatório.',
  },
  default: (fieldError: string, text: string) => ({
    condiction: (fieldControl: AbstractControl) =>
      fieldControl.hasError(fieldError),
    text: text,
  }),
  minLength: (length: number) => ({
    condiction: (fieldControl: AbstractControl) =>
      fieldControl.hasError('minlength'),
    text: 'Mínimo de ' + length.toString() + ' caractere(s).',
  }),
} as const;

export const AfInputErrors = {
  required: [AfInputError.required],
  name: [AfInputError.required, AfInputError.minLength(4)],
  cep: [AfInputError.required, AfInputError.default('mask', 'CEP inválido.')],
  email: [
    AfInputError.required,
    AfInputError.default('email', 'E-mail inválido.'),
  ],
  phone: [
    AfInputError.required,
    AfInputError.default('mask', 'Númeero de telefone inválido.'),
  ],
  cardNumber: [
    AfInputError.required,
    AfInputError.default('mask', 'Número de cartão inválido.'),
  ],
  cardExpiry: [
    AfInputError.required,
    AfInputError.default('mask', 'Data de validade inválida.'),
  ],
};

export default AfInputError;
