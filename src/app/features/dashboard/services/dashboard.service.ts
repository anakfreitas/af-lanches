import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../env/dev.env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = apiUrl;
  }

  public getTopSellingProducts(): Observable<
    { id: string; title: string; quantity: number }[]
  > {
    return this.http.get<{ id: string; title: string; quantity: number }[]>(
      `${this.apiUrl}/top-items`
    );
  }
}
