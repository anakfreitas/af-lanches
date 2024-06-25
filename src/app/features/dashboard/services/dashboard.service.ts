import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services/request.service';
import { RaatingProducts, SeelingsProducts } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private requestService: RequestService) {}

  public getSellingProducts() {
    return this.requestService.get<SeelingsProducts[]>('top-items');
  }

  public getRatings() {
    return this.requestService.get<RaatingProducts[]>('get-ratings-products');
  }
}
