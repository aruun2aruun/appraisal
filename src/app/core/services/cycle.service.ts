import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from './http.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private httpService: HttpService) {
  }

  getCyclebyId(cycleId): Observable<any> {
    return this.httpService.get( `/cycle/${cycleId}`).pipe(map(response => response));
  }

  getCycles(): Observable<any> {
    return this.httpService.get(`/cycle`).pipe(map(response => response));
  }

  createCycle(result): Observable<any> {
    return this.httpService.post(`/cycle`, result, httpOptions);
  }

  deleteCycle(cycleId: string): Observable<any> {
    return this.httpService.delete(`/cycle/${cycleId}`, httpOptions);
  }
}
