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
export class UserService {

  constructor(private httpService: HttpService) {
  }

  getUsers(): Observable<any> {
    return this.httpService.get('/person').pipe(map(response => response));
  }

  getUsersById(userId): Observable<any> {
    return this.httpService.get( `/person/${userId}`).pipe(map(response => response));
  }

  getUsersByEmail(email): Observable<any> {
    return this.httpService.get(`/person/email/${email}`).pipe(map(response => response));
  }
}
