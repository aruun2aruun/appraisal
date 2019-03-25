import { Component, OnInit, OnDestroy } from '@angular/core';
import {PageHeaderService} from '../core/services/page-header.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, OnDestroy {

  constructor(private pageHeaderService: PageHeaderService) {
    pageHeaderService.setTitle('Help');
  }

  ngOnInit() {
    this.pageHeaderService.hideCycle();
  }

  ngOnDestroy() {
    this.pageHeaderService.showCycle();
  }

}
