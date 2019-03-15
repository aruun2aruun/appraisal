import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './core/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  ADMIN_PATHS = ['/user-administration'];
  HEADOF_PATHS = ['/manage-template', '/manage-template-unit', '/review-response', '/review-selection'];

    constructor(private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (url === '/unauthorized' || url === '/home') {
          return true;
        }

        if (!this.isLoggedIn()) {
            this.router.navigate(['/unauthorized']);
            return false;
        } else {

          this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(
            data => {
              if (data === null) {
                this.router.navigate(['/unauthorized']);
                return false;
              } else {
                return this.isAuthorized(url, data.roles);
              }
            }
          );
          return true;
        }
    }

    public isLoggedIn(): boolean {
        let status = false;
        if ( sessionStorage.getItem('idToken') !== null) {
            status = true;
        } else {
            status = false;
        }
        return status;
    }

  private isAuthorized(url: string, roles: any) {
      if (this.ADMIN_PATHS.find(obj => obj === url) && !roles.find(obj => obj.type === 'Administrator')) {
        this.router.navigate(['/unauthorized']);
        return false;
      } else if (this.HEADOF_PATHS.find(obj => obj === url) && !roles.find(obj => obj.type === 'Headof')) {
        this.router.navigate(['/unauthorized']);
        return false;
      } else {
        return true;
      }
  }
}
