import { Component } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { Observable } from 'rxjs';
import { Product } from './features/buy/models/product.model';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading = this.appService.loading;

  constructor(private appService: AppService) {}
}
