import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {ServiceTool} from './service.tool';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private serviceTool: ServiceTool) { }

  public get<T>(path: string): Observable<T> {

    return this.http.get<T>(ServiceTool.getApiPath(path), { headers: ServiceTool.getHeaders()})
      .pipe(
      map(res => this.serviceTool.processResponse(res)),
      catchError(err => this.serviceTool.processError(err)));
  }

  public getFile<T>(path: string): Observable<T> {
    return this.http.get<T>(ServiceTool.getApiPath(path), { headers: ServiceTool.getHeaders(), responseType: 'blob' as 'json'} )
      .pipe(
        map(res => this.serviceTool.processResponse(res)),
        catchError(err => this.serviceTool.processError(err)));
  }



  public post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(ServiceTool.getApiPath(path), body, { headers: ServiceTool.getHeaders()})
      .pipe(
        map(res => this.serviceTool.processResponse(res)),
        catchError(err => this.serviceTool.processError(err)));
  }


  public put<T>(path: string, body: object = {}): Observable<T> {

    return this.http.put<T>(ServiceTool.getApiPath(path), body, {headers: ServiceTool.getHeaders()})
      .pipe(
        map(res => this.serviceTool.processResponse(res)),
        catchError(err => this.serviceTool.processError(err)));
  }

  public delete<T>(path): Observable<T> {
    return this.http.delete<T>(ServiceTool.getApiPath(path), {headers: ServiceTool.getHeaders()})
      .pipe(
        map(res => this.serviceTool.processResponse(res)),
        catchError(err => this.serviceTool.processError(err)));
  }



  public setAuthenticationToken(token: string) {
    localStorage.setItem('auth-token', token);
  }

  public getAuthenticationToken() {
    return localStorage.getItem('auth-token');
  }

  public removeAuthenticationToken() {
    return localStorage.removeItem('auth-token');
  }

}
