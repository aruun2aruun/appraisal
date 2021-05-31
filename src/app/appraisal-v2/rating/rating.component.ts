import { Component, Input, OnInit } from '@angular/core';
import { Ratings } from 'src/app/core/enum/ratings.enum';
import { IAppraisal } from '../appraisal-v2.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratings: Ratings[];
  @Input() appraisal?: IAppraisal;

  constructor() { }

  ngOnInit() {
    this.ratings = Object.values(Ratings);
  }
}
