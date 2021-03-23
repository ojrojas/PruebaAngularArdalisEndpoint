import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoutesApis } from './api.routes';
import { Result} from '../../models/result.model';
import { ResponseModel } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(routesApis: RoutesApis, params: any): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.get<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}/${params}`, { observe: 'response' });
  }

  getAll<T>(routesApis: RoutesApis): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.get<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}`, { observe: 'response' });
  }

  post<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.post<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  patch<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.patch<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  put<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.put<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  delete<T>(routesApis: RoutesApis, params: any): Observable<HttpResponse<ResponseModel<T>>> {
    return this.http.delete<ResponseModel<T>>(
      `${environment.BaseUrlApi}${routesApis}/${params}`, { observe: 'response' });
  }

  postLogin(entity: any, routesApis: RoutesApis): Observable<HttpResponse<ResponseModel<string>>> {
    return this.http.post<ResponseModel<string>>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }


}
