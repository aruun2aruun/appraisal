import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GoalDefinitionType} from '../model/goal-definition-type';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) {
  }

  getDefinitions(userId: string): any {
    return this.http.get<Array<GoalDefinitionType>>(
      environment.baseUrl + '/goal/' + userId
    );
  }

  getGoals(cycleId: string): any {
    return this.http.get<Array<GoalDefinitionType>>(
      `${environment.baseUrl}/appraisal/goal?cycleId=${cycleId}`
    );
  }
}
