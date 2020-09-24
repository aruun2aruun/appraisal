import {Injectable} from '@angular/core';
import {UserType} from '../../model/user-type';
import {UserService} from '../../core/services/user.service';
import {CycleSelectionService} from './cycle-selection.service';
import { InitializationService } from './initialization.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private userService: UserService,
              private cycleSelectionService: CycleSelectionService,
              private initializationService: InitializationService,
              private store: Store<AppState>) { this.init() }

  isAdministrator = false;
  isReviewer = false;

  loggedIn = false;
  loggedInUser: UserType;
  roles: any[];

  init() {
    this.initializationService.loggedInUser$.subscribe(user => {
      this.isAdministrator = false;
      this.isReviewer = false;
      this.loggedInUser = user;
      if (user) {
        this.loggedIn = true;
        this.store.pipe(select(state => state.roles.filter(item => item.employeeId === user.id)))
        .subscribe(result => {
          this.roles = result;
        });
      } else {
        this.loggedIn = false;
        this.roles = [];
      }
    });
  }

  clear() {
    this.loggedInUser = null;
    this.loggedIn = false;
  }
}
