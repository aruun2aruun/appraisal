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
    score: 5,
    value: 'Outstanding'
  }, {
    score: 4,
    value: 'Excellent'
  }, {
    score: 3,
    value: 'Above Expectation'
  }, {
    score: 2,
    value: 'Meets Expectation'
  }, {
    score: 1,
    value: 'Needs Improvement'
  }];
  @Input() appraisal?: IAppraisal;
  @Input() headersMap?: Map<string, any>;
  @Input() headers?: any;

  constructor() { }

  ngOnInit() {
    this.ratings = Object.values(Ratings);
  }

  getValues(id) {
    if (this.headers.find((item) => item.id === id)) {
      return this.headers.find((item) => item.id === id).reviewerId;
    } else {
      return id;
    }
  }
}
