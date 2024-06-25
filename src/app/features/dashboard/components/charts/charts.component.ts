import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  @Input() reviewsChart!: Chart;
  @Input() salesChart!: Chart;
  @Input() idChart: string = 'review';
  @Input() title: string = '';

  ngOnInit() {
  }
}
