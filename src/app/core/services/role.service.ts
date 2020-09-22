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
export class RoleService {

  constructor(private httpService: HttpService) {
  }

  getRoles(cycleId: string): Observable<any> {
    return this.httpService.get(`appraisal/role?cycleId=${cycleId}`).pipe(map(response => response));
  }
}
