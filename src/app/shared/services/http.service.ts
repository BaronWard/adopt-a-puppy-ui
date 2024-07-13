import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)

  get(url: string, params?: any): Observable<any>{
    return this.http.get(`${environment.BASE_API_URL}${url}`, { params })
  }

  post(url: string, data: any, params?: any): Observable<any>{
    return this.http.post(`${environment.BASE_API_URL}${url}`, { params })
  }

  put(url: string, data: any, params?: any): Observable<any>{
    return this.http.put(`${environment.BASE_API_URL}${url}`, { params })
  }

  patch(url: string, data: any, params?: any): Observable<any>{
    return this.http.patch(`${environment.BASE_API_URL}${url}`, { params })
  }

  delete(url: string, params?: any): Observable<any>{
    return this.http.delete(`${environment.BASE_API_URL}${url}`, { params })
  }
}
