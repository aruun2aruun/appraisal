import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'https://api.ioak.io:8040/api/214/';

@Injectable({
  providedIn: 'root'
})
export class AppraisalV2Service {

  constructor(private httpService: HttpService, private http: HttpClient) {
  }

  header(employeeId): Observable<any> {
    return this.httpService.get(`api/header/employee/${employeeId}`, false)
      .pipe(map(response => response));
  }

  getheaderId(headerSubmitObj): Observable<any> {
    return this.httpService.post(`api/header`, headerSubmitObj, httpOptions)
      .pipe(map(response => response));
  }

  goals(): Observable<any> {
    return this.http.get(baseUrl + 'appraisal/custom/goal?_limit=12', httpOptions);
  }

  goalReference(): Observable<any> {
    return this.http.get(baseUrl + 'appraisal/custom/goalreference?_limit=12', httpOptions);
  }

  target(): Observable<any> {
    return this.httpService.get(`api/appraisal/custom/target`, false)
      .pipe(map(response => response));
  }

  appraisallong(employeeId, from, to): Observable<any> {
    return this.httpService.get(`api/appraisal/custom/appraisallong?employeeId=${employeeId}?from=${from}?to=${to}`, false)
      .pipe(map(response => response));
  }

  updateAppraisallong(obj, headerId): Observable<any> {
    return this.httpService.post(`api/appraisal/custom/appraisallong?headerId=${headerId}`, obj, httpOptions)
      .pipe(map(response => response));
  }

  getDescriptive(employeeId, from, to): Observable<any> {
    return this.httpService.get(`api/descriptive?employeeId=${employeeId}?from=${from}?to=${to}`, false)
      .pipe(map(response => response));
  }

  updateDescriptive(obj, headerId): Observable<any> {
    return this.httpService.post(`api/descriptive?headerId=${headerId}`, obj, httpOptions)
      .pipe(map(response => response));
  }
}