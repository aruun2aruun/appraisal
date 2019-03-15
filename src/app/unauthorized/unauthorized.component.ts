import { Component, OnInit, OnDestroy } from '@angular/core';
import {PageHeaderService} from '../core/services/page-header.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit, OnDestroy {

  email: string;
  displayName: string;

  constructor(private pageHeaderService: PageHeaderService) {
    this.pageHeaderService.setTitle('Unauthorized Access');
    this.pageHeaderService.hideCycle();
  }

  ngOnInit() {
    this.displayName = sessionStorage.getItem('userDisplayName');
    this.email = sessionStorage.getItem('userSigninName');
  }

  ngOnDestroy(): void {
    this.pageHeaderService.showCycle();
  }

}
