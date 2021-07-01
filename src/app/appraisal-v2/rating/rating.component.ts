import { Component, Input, OnInit } from '@angular/core';
import { Ratings } from 'src/app/core/enum/ratings.enum';
import { IAppraisal } from '../appraisal-v2.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratings: any[] = [{
    score: 0,
    value: '0 - Not Rated'
  }, {
    score: 1,
    value: '1 - Below Expectations'
  }, {
    score: 2,
    value: '2 - Meets Expectations'
  }, {
    score: 3,
    value: '3 - Above Expectations'
  }, {
    score: 4,
    value: '4 - Excellent'
  }, {
    score: 5,
    value: '5 - Outstanding'
  }];
  @Input() appraisal?: IAppraisal;
  @Input() headers?: any;

  constructor() { }

  ngOnInit() {
    // this.ratings = Object.values(Ratings);
  }

  getValues(id) {
    if (this.headers.find((item) => item.id === id)) {
      return this.headers.find((item) => item.id === id).reviewerId;
    } else {
      return id;
    }
  }
}
