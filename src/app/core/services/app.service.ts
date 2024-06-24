import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _loading = new BehaviorSubject(false);

  public loading = this._loading.asObservable();

  setLoadingState(value: boolean) {
    this._loading.next(value);
  }
}
