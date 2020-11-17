import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { UserService } from './user.service';
import { UserReload } from '../../store/user.actions';
import { RoleReload } from '../../store/role.actions';
import { RoleService } from './role.service';
import { GoalService } from 'src/app/goal/goal.service';
import { GoalReload } from 'src/app/store/Goal.actions';
import { CycleService } from './cycle.service';
import { CycleReload } from 'src/app/store/Cycle.actions';
import { CycleSelectionService } from './cycle-selection.service';
import { AppraisalService } from './appraisal.service';
import { AppraisalReviewReload } from 'src/app/store/appraisal-review.actions';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  loggedInUser$ = new BehaviorSubject(null);
  showValidationErrors$ = new BehaviorSubject(false);

  users$ = this.store.pipe(select((state) => state.users));

  constructor(
    private cycleSelectionService: CycleSelectionService,
    private userService: UserService,
    private roleService: RoleService,
    private goalService: GoalService,
    private cycleService: CycleService,
    private appraisalService: AppraisalService,
    private store: Store<AppState>
  ) {
    this.initialize();
  }

  initialize() {
    this.cycleSelectionService.initialize();
    this.initializeLoggedInUser();
    this.getAllUsers();
    this.getAllRoles();
    this.getAllGoals();
    this.getAllCycles();
    this.getAllAppraisalReviews();
  }

  initializeLoggedInUser() {
    console.log('******* Retrieving Login data *******');
    if (sessionStorage.getItem('idToken')) {
      this.userService.getLoggedInUserData().subscribe(
        data => {
          this.loggedInUser$.next(data);
        }
      );
      console.log('******* Login data read *******');
    } else {
      setTimeout(() => {
        this.initializeLoggedInUser();
      }, 500);
    }
  }

  getAllUsers() {
    this.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.userService.getUsers().subscribe((users) => {
          this.store.dispatch(new UserReload(users));
        });
      }
    });
  }

  getAllRoles() {
    this.cycleSelectionService.cycleChangedEvent.subscribe((data) => {
      if (data) {
        this.refreshAllRoles(data.id);
      }
    });
  }

  refreshAllRoles(cycleId) {
    this.roleService.getRoles(cycleId).subscribe((roles) => {
      this.store.dispatch(new RoleReload(roles));
    });
  }

  getAllGoals() {
    this.cycleSelectionService.cycleChangedEvent.subscribe((data) => {
      if (data) {
        this.goalService.getGoals(data.id).subscribe((goals) => {
          this.store.dispatch(new GoalReload(goals));
        });
      }
    });
  }

  getAllCycles() {
    this.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.cycleService.getCycles().subscribe((cycles) => {
          this.store.dispatch(new CycleReload(cycles));
        });
      }
    });
  }

  getAllAppraisalReviews() {
    this.cycleSelectionService.cycleChangedEvent.subscribe((data) => {
      if (data) {
        this.appraisalService
          .getAppraisalReviews(data.id)
          .subscribe((appraisalReviews) => {
            this.store.dispatch(new AppraisalReviewReload(appraisalReviews));
          });
      }
    });
  }
}
