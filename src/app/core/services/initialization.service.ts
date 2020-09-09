import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {BehaviorSubject, Subject} from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  
  loggedInUser$ = new BehaviorSubject(null);
  
  users$ = this.store.pipe(select(state => state.users));

  constructor(private cycleSelectionService: CycleSelectionService,
    private userService: UserService,
    private roleService: RoleService,
    private goalService: GoalService,
    private cycleService: CycleService,
    private store: Store<AppState>
  ) {
    this.cycleSelectionService.initialize();
    this.initializeLoggedInUser();
    this.getAllUsers();
    this.getAllRoles();
    this.getAllGoals();
    this.getAllCycles();
  }

  initializeLoggedInUser() {
    console.log("******* Retrieving Login data *******");
    if (sessionStorage.getItem('userSigninName')) {
      this.users$.subscribe(users => {
        console.log(users);
        this.loggedInUser$.next(users.find(item => item.email === sessionStorage.getItem('userSigninName').toLowerCase()));
      })
      console.log("******* Login data read *******");
    } else {
      setTimeout(() => {this.initializeLoggedInUser()}, 500);
    }
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.store.dispatch(new UserReload(users))
      }
    );
  }

  getAllRoles() {
    this.roleService.getRoles().subscribe(
      roles => {
        this.store.dispatch(new RoleReload(roles))
      }
    );
  }

  getAllGoals() {
    this.cycleSelectionService.cycleChangedEvent.subscribe(data => console.log(data));
    this.goalService.getAllGoals().subscribe(
      goals => {
        this.store.dispatch(new GoalReload(goals))
      }
    );
  }

  getAllCycles() {
    this.cycleService.getCycles().subscribe(
      cycles => {
        this.store.dispatch(new CycleReload(cycles))
      }
    );
  }
}
