import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBrl'
})
export class CurrencyBrlPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) {
      return '';
    }

    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

}
