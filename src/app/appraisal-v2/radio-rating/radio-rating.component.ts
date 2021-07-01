import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-rating',
  templateUrl: './radio-rating.component.html',
  styleUrls: ['./radio-rating.component.scss']
})
export class RadioRatingComponent implements OnInit {
  @Input() ratingInput;
  @Input() submitted;
  ratings: any[] = [{
  //   score: 5,
  //   value: 'Outstanding'
  // }, {
  //   score: 4,
  //   value: 'Excellent'
  // }, {
    score: 3,
    value: 'Above Expectations'
  }, {
    score: 2,
    value: 'Meets Expectations'
  }, {
    score: 1,
    value: 'Below Expectations'
  }];
  @Output() private updatedRating = new EventEmitter();
  cannotRate = false;

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    this.updatedRating.emit($event.value);
    return false;
  }

  cannotRateCriteria(event) {
    this.cannotRate = !this.cannotRate;
    if(this.cannotRate) {
      this.updatedRating.emit(0);
    };
  }
}
