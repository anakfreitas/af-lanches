import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services/request.service';
import { RaatingProducts, TopSales } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private requestService: RequestService) {}

  public getSellingProducts() {
    return this.requestService.get<TopSales[]>('get-sellings-products');
  }

  public getRatings() {
    return this.requestService.get<RaatingProducts[]>('get-ratings-products');
  }
}
