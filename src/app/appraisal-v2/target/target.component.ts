import { Component, Input, OnInit } from '@angular/core';
import { ITarget } from '../appraisal-v2.component';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  @Input() target?: ITarget;
  @Input() newTarget?: ITarget;

  constructor() { }

  ngOnInit() {
  }
}
