import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-manage-appraisal-dialog',
  templateUrl: './manage-appraisal-dialog.component.html',
  styleUrls: ['./manage-appraisal-dialog.component.scss'],
})
export class ManageAppraisalDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
}
