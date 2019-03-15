import {Component, OnInit, Input} from '@angular/core';
import {CycleSelectionService} from '../core/services/cycle-selection.service';
import {PageHeaderService} from '../core/services/page-header.service';
import {AppraisalService} from '../core/services/appraisal.service';
import {CycleType} from '../model/cycle-type';
import {UserType} from '../model/user-type';
import {UserService} from '../core/services/user.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-self-appraisal-sectionone',
  templateUrl: './self-appraisal-sectionone.component.html',
  styleUrls: ['./self-appraisal-sectionone.component.scss']
})
export class SelfAppraisalSectiononeComponent implements OnInit {

  currentCycle: CycleType;
  loggedInUser: UserType;
  sectionResponses: any = [];
  ratings: string[] = ['Outstanding', 'Exceeds Expectation', 'Meets+ Expectation',
    'Meets Expectation', 'Meets Partial Expectation', 'Needs Improvement'];
  @Input() appraisalVisibility: string;
  @Input() reviewerVisibility: string;
  score: any = [[8.3, 8.9], [9.4, 9.9]];

  constructor(private cycleSelectionService: CycleSelectionService, private pageHeaderService: PageHeaderService,
              private appraisalService: AppraisalService, private userService: UserService, private snackBar: MatSnackBar) {
    pageHeaderService.setTitle('Self Appraisal');
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
    this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
    this.loadQuestions();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  loadQuestions() {
    this.appraisalService.getSectiononebyUserId(this.currentCycle.id, this.loggedInUser.id).subscribe(
      response => {
        this.sectionResponses = response;
        this.calculateScore();
      }
    );
  }

  save(responseObject) {
    // console.log(responseObject)
    this.appraisalService.saveSectionOneFeedback(responseObject, this.currentCycle.id, this.loggedInUser.id).subscribe(
      response => {
        this.snackBar.open('Response Auto Saved', '', {
          duration: 3000,
          panelClass: ['custom-auto-save']
        });
      }
    );
    this.calculateScore();
  }

  calculateScore() {
    this.score = [];
    this.sectionResponses.forEach(obj => {
      const element = [];
      obj.response.forEach(item => {
        if (item.reviewerRating !== null) {
          element.push(this.getScore(item.weightage, item.reviewerRating));
        } else {
          element.push('');
        }
      });
      this.score.push(element);
    });

    console.log(this.score);
  }

  private getScore(weightage: number, reviewerRating: any) {
    let rating = 1;
    if (reviewerRating === 'Outstanding') {
      rating = 1;
    } else if (reviewerRating === 'Exceeds Expectation') {
      rating = 2;
    } else if (reviewerRating === 'Meets+ Expectation') {
      rating = 3;
    } else if (reviewerRating === 'Meets Expectation') {
      rating = 4;
    } else if (reviewerRating === 'Meets Partial Expectation') {
      rating = 5;
    } else if (reviewerRating === 'Needs Improvement') {
      rating = 6;
    }

    return (rating * weightage) / 100;

  }
}
