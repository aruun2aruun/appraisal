import {Component, OnInit, Inject, ViewChild, AfterViewChecked } from '@angular/core';
import {SelfAppraisalSectiononeComponent } from '../self-appraisal-sectionone/self-appraisal-sectionone.component';
import {MAT_DIALOG_DATA, MatSnackBar, MatDialog, MatDialogConfig} from '@angular/material';
import {SubmitErrorDialogComponent} from '../submit-error-dialog/submit-error-dialog.component';
import {AppraisalService} from '../core/services/appraisal.service';
import {CycleType} from '../model/cycle-type';
import {UserType} from '../model/user-type';
import {UserService} from '../core/services/user.service';

@Component({
  selector: 'app-manage-appraisal-dialog',
  templateUrl: './manage-appraisal-dialog.component.html',
  styleUrls: ['./manage-appraisal-dialog.component.scss']
})
export class ManageAppraisalDialogComponent implements OnInit, AfterViewChecked {

  currentCycle: CycleType;
  currentUser: UserType;
  appraisalVisibility = 'READ-ONLY';
  reviewerVisibility = 'EDITABLE';
  appraisalId: string;
  error: any;
  status: string;
  totalScore: string;

  @ViewChild(SelfAppraisalSectiononeComponent) child;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
               private snackBar: MatSnackBar,
               private appraisalService: AppraisalService,
               private userService: UserService,
               public dialog: MatDialog) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(
        data => {
          this.initialize();
        }
      );
    }, 100);
  }

  initialize() {
    this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
    this.loadAppraisal();
    this.error = null;
  }

  ngAfterViewChecked() {
    this.totalScore = this.child.totalScore;
  }

  loadAppraisal() {
    this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.currentUser.id).subscribe(
      response => {
        this.status = response.status;
        if (response.status === 'SELF_REVIEW') {
          this.appraisalVisibility = 'EDITABLE';
        } else {
          this.appraisalVisibility = 'READ-ONLY';
        }
        this.appraisalId = response.id;
      }
    );
  }

  save() {
    this.snackBar.open('Response Saved', null, {
      duration: 3000,
    });
  }

  submitResponse() {
    this.appraisalService.submitReviewerFeedback(this.appraisalId).subscribe(
      response => {
        this.initialize();
      }, error => {
        if (error.status === 406) {
          this.error = error;
          this.openDialog();
        }
      }
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = this.error;
    this.dialog.open(SubmitErrorDialogComponent, dialogConfig);
  }
}
