import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-layout-button',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.scss']
})
export class LayoutButtonComponent {

@Input() layout: any;
public selectedValue: string | undefined;

ordemFilters = [
  {value: 'menor-preco', viewValue: 'Menor preço'},
  {value: 'mais-vendidos', viewValue: 'Mais vendidos'},
  {value: 'maior-preço', viewValue: 'Maior preço'},
];


constructor(private localStorageService: LocalStorageService) {}

setLayout(type: string){
  this.localStorageService.setItem('layoutList', type);
}
}
