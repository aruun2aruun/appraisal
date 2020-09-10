import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderService } from '../core/services/page-header.service';
import { AppraisalService } from '../core/services/appraisal.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { UserType } from '../model/user-type';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {

  queryParamId: any;
  appraisal: any;
  appraisalId: any;
  appraisalGoals: any[];
  user: UserType[];
  goals: any[] = [];

  constructor(
    private pageHeaderService: PageHeaderService,
    private appraisalService: AppraisalService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private store: Store<AppState>) {
      this.pageHeaderService.setTitle('Appraisal');
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
        this.queryParamId = params.id;
      }
    );
    this.initialize();
    this.getReviewGoal();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  initialize() {
    const appraisalReviews$ = this.store.pipe(select('appraisalReviews'));
    appraisalReviews$.subscribe(result => {
      if (this.queryParamId) {
        this.appraisal = result.filter(item => item.id === this.queryParamId);
      } else {
        this.appraisal = result.filter(item => item.employeeId === this.authService.loggedInUser.id);
      }
    });
    console.log(this.appraisal);
    const users$ = this.store.pipe(select('users'));
    users$.subscribe(result => {
      this.user = result.filter(item => item.id === this.appraisal[0].employeeId);
    });
    console.log(this.user);
    const goals$ = this.store.pipe(select('goals'));
    goals$.subscribe(result => {
      this.goals = result.filter(item => item.jobName === this.user[0].jobName);
    });
    console.log(this.goals);
  }

  getReviewGoal() {
    this.appraisalService.getReviewGoal(this.appraisal[0].id)
    .subscribe(
      response => {
        this.appraisalGoals = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
