import { Component, OnInit } from '@angular/core';
import {GoalService} from './goal.service';
import {GoalDefinitionType} from '../model/goal-definition-type';
import {PageHeaderService} from '../core/services/page-header.service';
import {AuthService} from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { UserType } from '../model/user-type';
import { InitializationService } from '../core/services/initialization.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  data: GoalDefinitionType[];
  loggedInUser: UserType;

  constructor(private goalService: GoalService,
              private pageHeaderService: PageHeaderService,
              private userService: UserService,
              private authService: AuthService,
              private initializationService: InitializationService) {
    pageHeaderService.setTitle('Goal');
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('userSigninName'));
    //After loggin for the first time: When user navigates to any page from home page, the initialization of current and active cycles does not complete until ngOnInit on the second page finishes. So, timeout is set for the first navigation away from home component.
    this.initializationService.loggedInUser$.subscribe(user => {
      this.loggedInUser = user;
      
      if (user) {
        this.initialize();
      }
    });
  }

  initialize() {
    this.goalService.getDefinitions(this.loggedInUser.id).subscribe(
      response => {
        this.data = response;
      });
  }

}
