import {Component, OnInit} from '@angular/core';
import {AppraisalSpinnerService} from './appraisal-spinner.service';

@Component({
  selector: 'app-appraisal-spinner',
  templateUrl: './appraisal-spinner.component.html',
  styleUrls: ['./appraisal-spinner.component.scss']
})
export class AppraisalSpinnerComponent implements OnInit {

  activeSessions: string[] = [];

  constructor(private appraisalSpinnerService: AppraisalSpinnerService) {
    this.appraisalSpinnerService.spinnerEvent$.subscribe(event => {
      event.status === true ? this.activeSessions.push(event.uid) :
        this.activeSessions.splice(this.activeSessions.indexOf(event.uid));
    });
  }

  ngOnInit() {
  }

}
