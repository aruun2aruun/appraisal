import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppraisalSpinnerService {
  spinnerEvent$ = new Subject<any>();
}
