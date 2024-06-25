import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../env/dev.env';
import { Observable } from 'rxjs';
import { TopSales } from '../../buy/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl;
  }

  public getTopSellingProducts(): Observable<
  TopSales[]
  > {
    return this.http.get<TopSales[]>(
      `${this.apiUrl}/top-items`
    );
  }
}
