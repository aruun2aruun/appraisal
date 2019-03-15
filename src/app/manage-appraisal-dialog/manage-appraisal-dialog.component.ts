import {Component, OnInit, Inject} from '@angular/core';
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
export class ManageAppraisalDialogComponent implements OnInit {

  currentCycle: CycleType;
  loggedInUser: UserType;
  appraisalVisibility = 'READ-ONLY';
  reviewerVisibility = 'EDITABLE';
  appraisalId: string;
  error: string;
  status: string;

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
          this.loggedInUser = data;
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

  loadAppraisal() {
    this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.loggedInUser.id).subscribe(
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
    this.appraisalService.submitFeedback(this.appraisalId).subscribe(
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
