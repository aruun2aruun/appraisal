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
export class AppraisalService {

  constructor(private httpService: HttpService, private http: HttpClient) {
  }

  getReviewGoal(appraisalId): Observable<any> {
    return this.httpService.get(`appraisal/review/goal?appraisalId=${appraisalId}`, false)
      .pipe(map(response => response));
  }

  saveReviewGoal(jsonObj): Observable<any> {
    return this.httpService.put(`appraisal/review/goal`, jsonObj, httpOptions)
      .pipe(map(response => response));
  }

  getAppraisal(cycleId, userId): Observable<any> {
    return this.httpService.get( 'appraisal/cycle/' + cycleId + '/manageable/' + userId)
      .pipe(map(response => response));
  }
  // getAppraisalbyAppraisalId(appraisalId): Observable<any> {
  //   const url = 'appraisal/' + appraisalId;
  //   return this.httpService.get(url).pipe(map(response => response));
  // }
  getAppraisalbyUserId(cycleId, userId): Observable<any> {
    return this.httpService.get(`appraisal/cycle/${cycleId}/user/${userId}`)
      .pipe(map(response => response));
  }
  getSectiononebyUserId(cycleId, userId): Observable<any> {
    return this.httpService.get(`appraisal/cycle/${cycleId}/user/${userId}/sectionone`)
      .pipe(map(response => response));
  }
  getSectiontwobyUserId(section, cycleId, userId): Observable<any> {
    return this.httpService.get(`appraisal/cycle/${cycleId}/user/${userId}/section`)
      .pipe(map(response => response));
  }
  getSectionfourbyUserId(cycleId, userId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfour';
    return this.http.get(url).pipe(map(response => response));
  }
  getSectionfivebyUserId(cycleId, userId): Observable<any> {
    return this.http.get(`appraisal/cycle/${cycleId}/user/${userId}/sectionfive`)
      .pipe(map(response => response));
  }
  submitSelfGoals(appraisalId: string): Observable<any> {
    return this.httpService.post(`appraisal/${appraisalId}/submitSelfGoals`, httpOptions);
  }
  submitFeedback(appraisalId: string): Observable<any> {
    return this.httpService.post(`appraisal/${appraisalId}/submitSelfAppraisal`, httpOptions);
  }
  submitReviewerFeedback(appraisalId: string): Observable<any> {
    return this.httpService.post(`appraisal/${appraisalId}/submitReviewerAppraisal`, httpOptions);
  }
  submitSectionOneReviewerFeedback(appraisalId, reviewerId): Observable<any> {
    return this.httpService.post(`appraisal/${appraisalId}/sectionone/reviewer/${reviewerId}/submit`, httpOptions);
  }
  completeAppraisal(appraisalId: string): Observable<any> {
    const url = environment.baseUrl + 'appraisal/' + appraisalId + '/completeAppraisal';
    return this.http.post<any>(url, httpOptions);
  }
  errorCheck(appraisalId: string): Observable<any> {
    const url = environment.baseUrl + 'appraisal/' + appraisalId + '/errorCheck';
    return this.http.post<any>(url, httpOptions);
  }
  saveFeedback(jsonObj): Observable<any> {
    const url = environment.baseUrl + 'appraisal/saveResponse';
    return this.http.put<any>(url, jsonObj, httpOptions);
  }
  notifyAppraisal(cycleId: string, result: any): Observable<any> {
    const url = environment.baseUrl + '/notification/' + cycleId + '/send';
    return this.http.post<any>(url, result, httpOptions);
  }
  notifyUser(result: any): Observable<any> {
    const url = environment.baseUrl + '/notification/send';
    return this.http.post<any>(url, result, httpOptions);
  }
  saveSectionOneFeedback(jsonObj, cycleId, userId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionone';
    return this.http.put<any>(url, jsonObj, httpOptions);
  }
  saveSectionOneReviewerFeedback(jsonObj, cycleId, userId, reviewerId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionone/reviewer/' + reviewerId;
    return this.http.put<any>(url, jsonObj, httpOptions);
  }
  saveSectionFourFeedback(jsonObj, cycleId, userId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfour';
    return this.http.put<any>(url, jsonObj, httpOptions);
  }
  saveSectionFiveFeedback(jsonObj, cycleId, userId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfive';
    return this.http.put<any>(url, jsonObj, httpOptions);
  }
  saveSectionTwoFeedback(section, jsonObj, cycleId, userId): Observable<any> {
    const url = environment.baseUrl + 'appraisal/cycle/' + cycleId + '/user/' + userId + '/' + section;
    return this.http.put<any>(url, jsonObj, httpOptions);
  }

  getAppraisalReviews(cycleId: string): any {
    return this.httpService.get(`appraisal/review?cycleId=${cycleId}`);
  }
}
