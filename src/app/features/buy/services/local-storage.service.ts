import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageSubject = new Subject<string>();

  watchStorage() {
    return this.storageSubject.asObservable();
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    this.storageSubject.next(key);
  }

  getItem(key: string) {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, 'grid');
    }
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    this.storageSubject.next(key);
  }
}
