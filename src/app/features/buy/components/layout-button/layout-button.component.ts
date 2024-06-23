import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-button',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.scss']
})
export class LayoutButtonComponent {

@Input() layout: any;
}
