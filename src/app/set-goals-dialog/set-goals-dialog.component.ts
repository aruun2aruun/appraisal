import {Component, OnInit, Inject, ViewChild } from '@angular/core';
import {SelfAppraisalSectiononeComponent } from '../self-appraisal-sectionone/self-appraisal-sectionone.component';
import {MAT_DIALOG_DATA, MatSnackBar, MatDialog, MatDialogConfig} from '@angular/material';
import {SubmitErrorDialogComponent} from '../submit-error-dialog/submit-error-dialog.component';
import {AppraisalService} from '../core/services/appraisal.service';
import {CycleType} from '../model/cycle-type';
import {UserType} from '../model/user-type';
import {UserService} from '../core/services/user.service';

@Component({
  selector: 'app-set-goals-dialog',
  templateUrl: './set-goals-dialog.component.html',
  styleUrls: ['./set-goals-dialog.component.scss']
})
export class SetGoalsDialogComponent implements OnInit {

  @ViewChild(SelfAppraisalSectiononeComponent) child;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
               private snackBar: MatSnackBar,
               private appraisalService: AppraisalService,
               private userService: UserService,
               public dialog: MatDialog) {
                 console.log(data);
  }

  ngOnInit() {
  }

  save() {
    this.snackBar.open('Response Saved', null, {
      duration: 3000,
    });
  }
}
