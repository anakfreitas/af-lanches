import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private mobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor() {}

  public isMobile(): boolean {
    return this.mobileDevice;
  }

  public screenMobile(): boolean {
    return window.innerWidth <= 991;
  }
}
