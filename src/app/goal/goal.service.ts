import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpService} from '../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpService: HttpService) {
  }

  getDefinitions(userId: string): any {
    return this.httpService.get(`/goal/${userId}`);
  }

  getGoals(cycleId: string): any {
    return this.httpService.get(`/appraisal/goal?cycleId=${cycleId}`);
  }
}
