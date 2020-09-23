import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {CycleSelectionService} from '../core/services/cycle-selection.service';
import {UserService} from './../core/services/user.service';
import {AppraisalService} from '../core/services/appraisal.service';
import {CycleType} from '../model/cycle-type';
import {UserType} from '../model/user-type';
import {ManageAppraisalDialogComponent} from '../manage-appraisal-dialog/manage-appraisal-dialog.component';
import {NotifyDialogComponent} from '../notify-dialog/notify-dialog.component';
import {PageHeaderService} from '../core/services/page-header.service';
import * as messageObject from '../message.json';
import {AuthService} from '../core/services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { InitializationService } from '../core/services/initialization.service';

@Component({
  selector: 'app-manage-appraisal',
  templateUrl: './manage-appraisal.component.html',
  styleUrls: ['./manage-appraisal.component.scss']
})
export class ManageAppraisalComponent implements OnInit {
  displayedColumns: string[] = ['username', 'status', 'action'];
  dataSource: any;

  currentCycle: CycleType;
  loggedInUser: UserType;
  userNameMap: any = {};
  cycleId: string;
  userId: string;
  userIds: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  roles: any;

  constructor(private cycleSelectionService: CycleSelectionService,
               private pageHeaderService: PageHeaderService,
               private userService: UserService,
               private snackBar: MatSnackBar,
               private appraisalService: AppraisalService,
               public dialog: MatDialog,
               private authService: AuthService,
               private router: Router,
               public initializationService: InitializationService,
               private store: Store<AppState>) {
    pageHeaderService.setTitle('Manage Appraisal');
    cycleSelectionService.cycleChangedEvent.subscribe(data => this.initialize());
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
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.store
          .pipe(
            select((state) =>
              state.roles.filter((item) => item.reviewerId === loggedInUser.id)
            )
          ).subscribe((roles) => {
            this.roles = roles;
          });
      }
    });
    console.log(this.roles);

    // this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(
    //   data => {
    //     this.loggedInUser = data;
    //     this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
    //     this.getAllUsers();
        this.RenderDataTable();
      // });
  }

  RenderDataTable() {
    // this.cycleId = this.currentCycle.id;
    // this.userIds = [];
    // this.appraisalService.getAppraisal(this.cycleId, this.loggedInUser.id)
    //   .subscribe(
    //   response => {
    //     if (response.length > 0) {
    //       response.forEach((item => {
    //         const obj = {
    //           userId: ''
    //         };
    //         obj.userId = item.userId;
    //         this.userIds.push(item.userId);
    //       }));
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = this.roles;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      //   }
      // },
      // error => {
      //   console.log('There was an error while retrieving Posts !!!' + error);
      // });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(
      users => {
        if (users.length > 0) {
          users.forEach((item => {
            this.userNameMap[item.id] = item;
          }));
        }
      });
  }

  openViewDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.data = {
      userStatus: row.status,
      currentUser: this.userNameMap[row.userId],
      userId: row.userId
    };
    const dialogRef = this.dialog.open(ManageAppraisalDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.initialize();
      if (result) {
        this.viewCycle(result.cycleId, result.extend);
      }
    });
  }

  viewCycle(cycleId: string, extend: string) {
    this.snackBar.open(messageObject.EXTEND_CYCLE.success, null, {
      duration: 3000,
    });
  }

  viewAppraisal(role) {
    this.store
    .pipe(
      select((state) =>
        state.appraisalReviews.filter((item) => item.employeeId  === role.employeeId)
      )
    ).subscribe((appraisalReviews) => {
      console.log(appraisalReviews[0].id);
      this.router.navigate([`appraisal`], {
        queryParams: {id: appraisalReviews[0].id},
      });
    });
  }

  openNotifyDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
      to: 'Open Self Review',
      name: this.loggedInUser.name,
      subject: 'Subject',
      body: 'Body'
    };
    const dialogRef = this.dialog.open(NotifyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notify(result);
      }
    });
  }

  notify(result: any) {
    this.cycleId = this.currentCycle.id;
    this.appraisalService.notifyAppraisal(this.cycleId, result).subscribe(
      response => {
        this.snackBar.open(messageObject.NOTIFY.success, null, {
          duration: 6000,
        });
      });
  }

  openNotifyUserDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '575px';
    dialogConfig.data = {
      to: 'test',
      name: this.loggedInUser.name,
      subject: 'Subject',
      body: 'Body'
    };
    const dialogRef = this.dialog.open(NotifyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notifyUser(result);
      }
    });
  }

  notifyUser(result: any) {
    result.body = result.body + '\n\n' + result.signature;
    this.appraisalService.notifyUser(result).subscribe(
      response =>{
        this.snackBar.open(messageObject.NOTIFY.success, null, {
          duration: 6000,
        });
      });
  }
}
