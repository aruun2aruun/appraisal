import { Component, OnInit } from '@angular/core';
import {GoalDefinitionService} from './goal-definition.service';
import {GoalDefinitionType} from '../model/goal-definition-type';
import {PageHeaderService} from '../core/services/page-header.service';
import {AuthService} from '../core/services/auth.service';

@Component({
  selector: 'app-goal-definition',
  templateUrl: './goal-definition.component.html',
  styleUrls: ['./goal-definition.component.scss']
})
export class GoalDefinitionComponent implements OnInit {

  data: GoalDefinitionType[];

  constructor(private goalDefinitionService: GoalDefinitionService,
              private pageHeaderService: PageHeaderService,
              private authService: AuthService) {
    pageHeaderService.setTitle('Goal Definition');
  }

  ngOnInit() {
    this.initialize();
    this.authService.init();
  }

  initialize() {
    this.goalDefinitionService.getDefinitions().subscribe(
      response => {
        this.data = response;
      });
  }

}
