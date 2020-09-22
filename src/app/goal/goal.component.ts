import { Component, OnInit } from '@angular/core';
import {GoalService} from './goal.service';
import {GoalDefinitionType} from '../model/goal-definition-type';
import {PageHeaderService} from '../core/services/page-header.service';
import {AuthService} from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { UserType } from '../model/user-type';
import { InitializationService } from '../core/services/initialization.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  data: any[];
  loggedInUser: UserType;

  constructor(private goalService: GoalService,
              private pageHeaderService: PageHeaderService,
              private userService: UserService,
              private authService: AuthService,
              private store: Store<AppState>,
              private initializationService: InitializationService) {
    pageHeaderService.setTitle('Goal');
  }

  ngOnInit() {
    this.initializationService.loggedInUser$.subscribe(user => {
      if (user) {
        this.store.pipe(select(state => state.goals.filter(item => item.job === user.job)))
        .subscribe(result => {
          this.data = result;
        });
      }
    });
  }
}
