import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public getTopSellingProducts() {
    return [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 5 },
      { id: '3', quantity: 4 },
      { id: '4', quantity: 7 },
      { id: '5', quantity: 3 },
    ];
  }

  getRatings() {
    return [
      { id: '1', '1': 0, '2': 1, '3': 1, '4': 0, '5': 0 },
      { id: '2', '1': 0, '2': 1, '3': 1, '4': 3, '5': 0 },
      { id: '3', '1': 0, '2': 1, '3': 2, '4': 1, '5': 0 },
      { id: '3', '1': 1, '2': 1, '3': 2, '4': 3, '5': 1 },
      { id: '3', '1': 2, '2': 1, '3': 2, '4': 0, '5': 0 },
    ];
  }
}
