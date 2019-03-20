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
  sectionResponses: any = [];
  ratings: string[] = ['1. Outstanding', '2. Exceeds Expectation', '3. Meets+ Expectation',
                       '4. Meets Expectation', '5. Meets Partial Expectation', '6. Needs Improvement'];
  @Input() appraisalVisibility: string;
  @Input() reviewerVisibility: string;
  @Input() currentUser: UserType;
  score: any = [[0.0, 0.0], [0.0, 0.0]];
  totalScore: number;

  constructor(private cycleSelectionService: CycleSelectionService, private pageHeaderService: PageHeaderService,
               private appraisalService: AppraisalService, private userService: UserService, private snackBar: MatSnackBar) {
    pageHeaderService.setTitle('Self Appraisal');
    cycleSelectionService.cycleChangedEvent.subscribe(data => this.initialize());
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
    this.loadQuestions();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  loadQuestions() {
    this.appraisalService.getSectiononebyUserId(this.currentCycle.id, this.currentUser.id).subscribe(
      response => {
        this.sectionResponses = response;
        this.calculateScore();
      }
    );
  }

  save(responseObject) {
    // console.log(responseObject)
    this.appraisalService.saveSectionOneFeedback(responseObject, this.currentCycle.id, this.currentUser.id).subscribe(
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
    this.totalScore = 0.0;
    this.sectionResponses.forEach(obj => {
      const element = [];
      obj.response.forEach(item => {
        if (item.reviewerRating !== null) {
          element.push(this.getScore(item.weightage, item.reviewerRating));
          this.totalScore = this.totalScore + this.getScore(item.weightage, item.reviewerRating);
        } else {
          element.push('');
        }
      });
      this.score.push(element);
    });
  }

  private getScore(weightage: number, reviewerRating: any) {
    let rating = 1;
    if (reviewerRating === '1. Outstanding') {
      rating = 1;
    } else if (reviewerRating === '2. Exceeds Expectation') {
      rating = 2;
    } else if (reviewerRating === '3. Meets+ Expectation') {
      rating = 3;
    } else if (reviewerRating === '4. Meets Expectation') {
      rating = 4;
    } else if (reviewerRating === '5. Meets Partial Expectation') {
      rating = 5;
    } else if (reviewerRating === '6. Needs Improvement') {
      rating = 6;
    }

    return (rating * weightage) / 100;

  }
}
