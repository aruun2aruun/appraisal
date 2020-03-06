import { Component, OnInit } from '@angular/core';
import {PageHeaderService} from '../core/services/page-header.service';
import {AuthService} from '../core/services/auth.service';
import { RatingScaleService } from './rating-scale.service';
import { RatingScaleType } from '../model/rating-scale-type';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  data: RatingScaleType[];

  constructor(private ratingScaleService: RatingScaleService,
              private pageHeaderService: PageHeaderService,
              private authService: AuthService) {
    pageHeaderService.setTitle('Rating Definition');
  }

  ngOnInit() {
    this.initialize();
    this.authService.init();
  }

  initialize() {
    this.ratingScaleService.getDefinitions().subscribe(
      response => {
        this.data = response;
      });
  }

}
