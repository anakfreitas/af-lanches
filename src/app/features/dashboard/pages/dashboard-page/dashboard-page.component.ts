import { Component } from '@angular/core';
import Chart, { ChartConfiguration, registerables } from 'chart.js/auto';
import { ReviewService } from '../../../../core/services/review.service';
import { ProductService } from '../../../../core/services/product.service';
import { DashboardService } from '../../services/dashboard.service';
import { Product } from '../../../buy/models/product.model';
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
  chart!: Chart;

  options: Option[] = [
    {
      label: 'Mais vendidos',
      value: 1,
    },
    {
      label: 'Mais avaliados',
      value: 2,
    },
  ];

  public selectedOption!: Option;

  public items!: Product[];

  constructor(
    private reviewService: ReviewService,
    private productService: ProductService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.selectedOption = {
      label: 'Mais vendidos',
      value: 1,
    };
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.items = res;
        this.initReviewsChart();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public changeOption(value: Option) {
    this.chart.destroy();
    if (value.value === 1) {
      this.initReviewsChart();
    } else {
      this.initSalessChart();
    }
  }

  private initReviewsChart() {
    const averageRatings = this.reviewService.getAverageRatings();
    const labels = averageRatings.map(
      (ar) => this.items.find((item) => item.id === ar.productId)?.title
    );
    const data = averageRatings.map((ar) => ar.averageRating);

    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Classificação média',
            data: data,
            backgroundColor: 'rgba(52, 192, 235, 0.2)',
            borderColor: 'rgba(52, 192, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    this.chart = new Chart('canvas', chartConfig);
  }

  private initSalessChart() {
    const items = this.dashboardService.getTopSellingProducts();
    const data = items.map((item) => item.quantity);
    const labels = items.map((product) =>
      this.productService.getProductById(product.id).subscribe({
        next: (res) => {
          console.log(res);
        },
      })
    );

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
}
