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

  post<Response, Data = any>(url: string, data: Data) {
    return this.http.post<Response>(apiUrl + '/' + url, data);
  }

  patch<Response, Data = any>(url: string, data: Data) {
    return this.http.patch<Response>(apiUrl + '/' + url, data);
  }
}
