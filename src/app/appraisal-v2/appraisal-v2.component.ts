import { Component, OnInit } from '@angular/core';
import { AppraisalV2Service } from '../core/services/appraisal-v2.service';
import { StarRatingColor } from './star-rating/star-rating.component';
import { Ratings } from '../core/enum/ratings.enum';

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
  orderId: number;
  rating: number;
  from: Date;
  to: Date;
  employeeId: string;
  reviewerId: string;
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

  goals: IGoal[];
  goalReferences: IGoalReference[];
  targets: ITarget[];
  appraisalLong: IAppraisal[];

  constructor(private appraisalv2Service: AppraisalV2Service) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.ratings = Object.values(Ratings);
    this.getAppraisalGoal();
    this.getGoalReference();
    this.getTarget();
    this.getAppraisalLong();
  }

  async getAppraisalGoal() {
    await this.appraisalv2Service.goal().subscribe(
      response => {
        this.goals = response;
        console.log(response);
      });
  }

  async getGoalReference() {
    await this.appraisalv2Service.goalReference().subscribe(
      response => {
        this.goalReferences = response;
        console.log(response);
      });
  }

  async getTarget() {
    await this.appraisalv2Service.target().subscribe(
      response => {
        this.targets = response;
        console.log(response);
      });
  }

  async getAppraisalLong() {
    await this.appraisalv2Service.appraisallong().subscribe(
      response => {
        this.appraisalLong = response;
        console.log(response);
      });
  }

  onRatingChanged(rating) {
    console.log(rating);
    this.rating = rating;
  }
}
