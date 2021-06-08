import { Component, OnInit } from '@angular/core';
import { AppraisalV2Service } from '../core/services/appraisal-v2.service';
import { StarRatingColor } from './star-rating/star-rating.component';
import { Ratings } from '../core/enum/ratings.enum';
import { ActivatedRoute } from '@angular/router';
import { InitializationService } from '../core/services/initialization.service';
import { AuthService } from '../core/services/auth.service';

export interface IGoal {
  criteria: string;
  orderId: number;
};

export interface IGoalReference {
  orderId: number;
  description: string;
};

export interface ITarget {
  description: string;
  orderId: number;
  createdDate: Date;
};

export interface IAppraisal {
  comment: string;
  orderId: number;
  rating: number;
  from?: number;
  to?: number;
  employeeId?: string;
  reviewerId?: string;
  reviewerType?: string;
  headerId?: string;
}

@Component({
  selector: 'app-appraisal-v2',
  templateUrl: './appraisal-v2.component.html',
  styleUrls: ['./appraisal-v2.component.scss']
})
export class AppraisalV2Component implements OnInit {
  ratings: Ratings[];

  // STAR RATING
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  header: any;
  goals: IGoal[];
  goalReferences: IGoalReference[];
  targets: ITarget[];
  appraisalLong: IAppraisal[];

  submitObj: IAppraisal[] = [];
  headerId: any;
  loggedInUser: any;

  constructor(
    private appraisalv2Service: AppraisalV2Service,
    private route: ActivatedRoute,
    private initializationService: InitializationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.loggedInUser = loggedInUser;
      }
    });
    console.log(this.authService.loggedInUser);
    this.ratings = Object.values(Ratings);
    // this.getHeaders();
    this.getHeaderObj();
    this.getAppraisalGoal();
    this.getGoalReference();
    this.getTarget();
    this.getAppraisalLong();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  // getHeaders() {
  //   this.appraisalv2Service.header().subscribe(
  //     response => {
  //       this.header = response;
  //     });
  // }

  getHeaderObj() {
    const headerSubmitObj = {
      from: 202009,
      to: 202103,
      employeeId: this.loggedInUser.id,
      reviewerId: this.loggedInUser.id,
      reviewerType: this.loggedInUser.job
    };
    this.appraisalv2Service.getheaderId(headerSubmitObj)
      .subscribe(
        (response) => {
          console.log(response);
          this.headerId = response.id;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async getAppraisalGoal() {
    await this.appraisalv2Service.goal().subscribe(
      response => {
        this.goals = response;
        console.log('goals',response);
});
  }

  async getGoalReference() {
    await this.appraisalv2Service.goalReference().subscribe(
      response => {
        this.goalReferences = response;
        console.log('goalReferences', response);      });
  }

  async getTarget() {
    await this.appraisalv2Service.target().subscribe(
      response => {
        this.targets = response;
        console.log('targets',response);      });
  }

  async getAppraisalLong() {
    await this.appraisalv2Service.appraisallong(this.headerId).subscribe(
      response => {
        this.appraisalLong = response;
        console.log('appraisalLong',response);      });
  }

  onRatingChanged(rating) {
    console.log(rating);
  }

  submit() {
    this.createSubmitObj();
  }

  createSubmitObj() {
    this.goals.forEach(item => {
      const obj: IAppraisal = {
        comment: this.goalReferences[item.orderId].description,
        orderId: item.orderId,
        rating: this.appraisalLong[item.orderId].rating,
        headerId: this.headerId
      };
      this.submitObj.push(obj);
    });
    this.appraisalv2Service.updateAppraisallong(this.submitObj)
      .subscribe(
        (response) => {
          this.submitObj = [];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
