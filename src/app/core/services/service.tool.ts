import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceTool {

  static baseUrl: string = environment.apiUrl;
  static token = null;

  constructor() {
  }

  public static getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers = headers.set('Content-type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return headers;
  }

  public static getApiPath(relativePath) {
    return `${this.baseUrl}${relativePath}`;
  }

  public processResponse<T>(response: any) {
    let jsonResp;
    try {
      jsonResp = JSON.parse(response);
      return jsonResp;
    } catch (e) {
      return response;
    }
  }

  public processError(err: HttpErrorResponse) {
    return throwError(err);
  }

}
