import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../env/dev.env';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  get<Response>(url: string) {
    return this.http.get<Response>(apiUrl + '/' + url);
  }
}
