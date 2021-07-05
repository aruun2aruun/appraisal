import { Component, OnInit } from '@angular/core';
import { AppraisalV2Service } from '../core/services/appraisal-v2.service';
import { StarRatingColor } from './star-rating/star-rating.component';
import { Ratings } from '../core/enum/ratings.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { InitializationService } from '../core/services/initialization.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { SubmitErrorDialogComponent } from '../submit-error-dialog/submit-error-dialog.component';
import { SubmitConfirmationDialogComponent } from '../submit-confirmation-dialog/submit-confirmation-dialog.component';

export interface IGoal {
  criteria: string;
  orderId: number;
  order?: number;
};

export interface IGoalReference {
  orderId: number;
  description: string;
};

export interface ITarget {
  description: string;
  orderId: number;
  createdDate: Date;
};

export interface IAppraisal {
  comment: string;
  orderId: number;
  rating: number;
  from?: number;
  to?: number;
  employeeId?: string;
  reviewerId?: string;
  reviewerType?: string;
  headerId?: string;
  order?: number;
}

@Component({
  selector: 'app-appraisal-v2',
  templateUrl: './appraisal-v2.component.html',
  styleUrls: ['./appraisal-v2.component.scss']
})
export class AppraisalV2Component implements OnInit {
  ratings: Ratings[];

  // STAR RATING
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  headers: any;
  goals: IGoal[];
  goalReferences: IGoalReference[];
  targets: ITarget[];
  appraisalLong: IAppraisal[];
  yourDescriptive: any = {};
  descriptives = [
    {
      from: 202010,
      to: 202103,
      type: 'start',
      comment: 'Perferendis assumenda fugiat fugit dignissimos harum non dolore explicabo voluptatum ex nisi eos sed accusamus modi iusto'
    }, {
      from: 202010,
      to: 202103,
      type: 'continue',
      comment: 'Non provident eligendi repellendus illum voluptas unde voluptas enim officiis deserunt'
    }, {
      from: 202010,
      to: 202103,
      type: 'stop',
      comment: 'Iusto nobis animi architecto illum nesciunt exercitationem facilis officia quisquam necessitatibus iste sit praesentium fugit molestiae'
    }
  ];

  goalsMap = new Map();
  goalReferencesMap = new Map();
  targetsMap = new Map();
  appraisalLongMap = new Map();

  payload: IAppraisal[] = [];
  targetPayload: any = [];
  headerId: any;
  employeeId: string;
  loggedInUser: any;
  from: any;
  to: any;
  error: any;
  submitted = false;

  constructor(
    private appraisalv2Service: AppraisalV2Service,
    private route: ActivatedRoute,
    private router: Router,
    private initializationService: InitializationService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = params.employeeId;
    });
    this.route.queryParams.subscribe((params) => {
      this.from = params.from;
      this.to = params.to;
    });
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.loggedInUser = loggedInUser;
      }
    });
    this.ratings = Object.values(Ratings);
    this.getDescription();
    this.getGoals();
    this.getGoalReference();
    this.getTarget();
    this.getAppraisalLong();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  getDescription() {
    this.appraisalv2Service.getDescriptive(this.employeeId, this.from, this.to).subscribe(
      response => {
        this.descriptives = response;
      });
  }

  getGoals() {
    this.appraisalv2Service.goals(this.employeeId).subscribe(
      response => {
        this.goals = response;
        response.forEach(element => {
          this.goalsMap.set(element.order, element);
        });
        this.createTargetPayload();
        this.initializePayload();
      });
  }

  getGoalReference() {
    this.appraisalv2Service.goalReference().subscribe(
      response => {
        this.goalReferences = response;
        response.forEach(element => {
          this.goalReferencesMap.set(element.orderId, element);
        });
      });
  }

  getTarget() {
    this.appraisalv2Service.targets(this.employeeId).subscribe(
      response => {
        this.targets = response;
        response.forEach(element => {
          this.targetsMap.set(element.orderId, element);
        });
      });
  }

  getAppraisalLong() {
    this.appraisalv2Service.appraisallong(this.employeeId, this.from, this.to).subscribe(
      response => {
        this.appraisalLong = response;
        response.forEach(element => {
          if (this.appraisalLongMap.has(element.orderId)) {
            this.appraisalLongMap.get(element.orderId).push(element);
          } else {
            this.appraisalLongMap.set(element.orderId, [element]);
          }
        });
      });
  }

  getValues(map) {
    return Array.from(map.values());
  }

  onRatingChanged(rating) {
    // console.log(rating);
  }

  submit() {
    this.updateTargets();
    const headerSubmitObj = {
      from: this.from,
      to: this.to,
      employeeId: this.employeeId,
      reviewerId: this.loggedInUser.id
    };
    this.appraisalv2Service.getheaderId(headerSubmitObj)
      .subscribe(
        (response) => {
          this.headerId = response.id;
          this.appraisalv2Service.updateAppraisallong(this.payload, response.id)
            .subscribe(
              (response) => {
                if(response) {
                  this.submitted = true;
                }
                this.snackBar.open('You rating is submitted!', '', {
                  duration: 6000,
                  panelClass: 'success',
                });
              },
              (error) => {
                console.log(error);
              }
            );
          this.updateDescription(this.headerId);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  initializePayload() {
    this.payload = [];
    this.goals.forEach(goal => {
      const obj: IAppraisal = {
        comment: '',
        orderId: goal.order,
        rating: -1
      };
      this.payload.push(obj);
    });
  }

  createTargetPayload() {
    this.targetPayload = [];
    this.goals.forEach(goal => {
      const obj = {
        description: '',
        orderId: goal.order
      };
      this.targetPayload.push(obj);
    });
  }
  
  updateTargets() {
    this.appraisalv2Service.updateTarget(this.targetPayload).subscribe(
      response => {
        this.targetPayload = response;
      });
  }

  updateDescription(headerId) {
    this.appraisalv2Service.updateDescriptive(this.yourDescriptive, headerId).subscribe(
      response => {
        this.yourDescriptive = response;
        console.log(response);
      });
  }

  stepChanged(event, stepper) {
    if (event.previouslySelectedIndex > event.selectedIndex) {
      event.previouslySelectedStep.interacted = false;
    }
  }

  checkResponse() {
    // this.appraisalService.errorCheck(this.appraisalId).subscribe(
    //   response => {
    //     this.openConfirmationDialog();
    //   }, error => {
    //     if (error.status === 406) {
    //       this.error = error;
    //       this.openErrorDialog();
    //     }
    //   }
    // );
  }

  save() {
    alert('TBD');
  }

  cancel() {
    this.router.navigate([`reportees`]);
  }

  openErrorDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = '';
    this.dialog.open(SubmitErrorDialogComponent, dialogConfig);
  }

  openConfirmationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(SubmitConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.submit();
      }
    });
  }
}
