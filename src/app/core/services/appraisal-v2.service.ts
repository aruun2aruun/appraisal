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

  goal(): Observable<any> {
    const url = baseUrl + 'appraisal/custom/goal?_limit=3';
    return this.http.get<any>(url, httpOptions);
  }

  goalReference(): Observable<any> {
    const url = baseUrl + 'appraisal/custom/goalreference?_limit=3';
    return this.http.get<any>(url, httpOptions);
  }

  target(): Observable<any> {
    const url = baseUrl + 'appraisal/custom/target?_limit=10';
    return this.http.get<any>(url, httpOptions);
  }

  appraisallong(): Observable<any> {
    const url = baseUrl + 'appraisal/custom/appraisallong?_limit=10';
    return this.http.get<any>(url, httpOptions);
  }
}