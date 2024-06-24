import { Component } from '@angular/core';
import Chart, {
  ChartConfiguration,
  ChartType,
  registerables,
} from 'chart.js/auto';
import { ProductService } from '../../../../core/services/product.service';
import { DashboardService } from '../../services/dashboard.service';

interface Option {
  label: string;
  value: number;
}

Chart.register(...registerables);
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  chart!: Chart<ChartType, any>;

  options: Option[] = [
    {
      label: 'Mais vendidos',
      value: 0,
    },
    {
      label: 'Avaliações',
      value: 1,
    },
  ];

  public selectedOption!: Option;

  constructor(
    private productService: ProductService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.selectedOption = this.options[0];
    this.setSalesChart();
  }

  public changeOption(value: Option) {
    this.chart.destroy();
    this.selectedOption = value;
    switch (value.value) {
      case 0:
        this.setSalesChart();
        break;
      case 1:
        this.setReviewsChart();
        break;
    }
  }

  private setSalesChart() {
    const items = this.dashboardService.getTopSellingProducts();
    const labels = items.map(
      (product) => this.productService.getProductById(product.id).title
    );
    const data = items.map((item) => item.quantity);

    const chartConfig: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Quantidade',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };

    this.chart = new Chart('canvas', chartConfig);
  }

  private setReviewsChart() {
    const data = this.dashboardService.getRatings().map((ratings) => ({
      ...ratings,
      x: this.productService.getProductById(ratings.id).title,
    }));
    const labels = data.map((ratings) => ratings.x);
    const chartConfig: ChartConfiguration<
      ChartType,
      { '1': number; '2': number; '3': number; '4': number; '5': number }[]
    > = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '1 estrela',
            data: data,
            parsing: {
              yAxisKey: '1',
            },
          },
          {
            label: '2 estrelas',
            data: data,
            parsing: {
              yAxisKey: '2',
            },
          },
          {
            label: '3 estrelas',
            data: data,
            parsing: {
              yAxisKey: '3',
            },
          },
          {
            label: '4 estrelas',
            data: data,
            parsing: {
              yAxisKey: '4',
            },
          },
          {
            label: '5 estrelas',
            data: data,
            parsing: {
              yAxisKey: '5',
            },
          },
        ],
      },
    };

    this.chart = new Chart('canvas', chartConfig);
  }
}
