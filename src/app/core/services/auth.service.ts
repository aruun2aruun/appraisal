import {Injectable} from '@angular/core';
import {UserType} from '../../model/user-type';
import {UserService} from '../../core/services/user.service';
import {CycleSelectionService} from './cycle-selection.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private userService: UserService,
              private cycleSelectionService: CycleSelectionService) {
  }

  isAdministrator = false;
  isHeadof = false;

  loggedIn = false;
  loggedInUser: UserType;

  init() {
    console.log(sessionStorage.getItem('userSigninName'));
    if (sessionStorage.getItem('userSigninName')) {
      this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(
        data => {
          this.loggedInUser = data;
          this.loggedIn = true;
          if (data.roles.find(obj => obj.type === 'Administrator')) {
            this.isAdministrator = true;
          }
          if (data.roles.find(obj => obj.type === 'Headof')) {
            this.isHeadof = true;
          }
        }
      );
    } else {
      this.loggedIn = false;
      this.isAdministrator = false;
      this.isHeadof = false;
    }

    this.cycleSelectionService.initialize();
  }

  clear() {
    this.loggedInUser = null;
    this.loggedIn = false;
  }
}
