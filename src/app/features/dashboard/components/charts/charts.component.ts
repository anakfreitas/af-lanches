import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  @Input() chart!: Chart;
  @Input() idChart: string = 'canvas';
  @Input() title: string = '';

  ngOnInit() {}
}
