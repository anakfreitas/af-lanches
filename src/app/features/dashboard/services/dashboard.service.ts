import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public getTopSellingProducts() {
    const items = [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 5 },
      { id: '3', quantity: 4 },
      { id: '4', quantity: 7 },
      { id: '5', quantity: 3 },
    ];
    return items;
  }
}
