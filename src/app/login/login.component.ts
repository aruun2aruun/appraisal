import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {PageHeaderService} from '../core/services/page-header.service';
import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loggedIn: boolean;

    constructor(private router: Router,
                private pageHeaderService: PageHeaderService,
                private authService: AuthService) {
      this.pageHeaderService.setTitle('Login');
      this.pageHeaderService.hideCycle();
    }

    ngOnInit() {
      this.initialize();
      this.authService.init();
    }

    refresh() {
      window.location.reload();
    }

    initialize() {
      this.loggedIn = false;
      if (sessionStorage.getItem('idToken') !== null) {
        this.loggedIn = true;
      }
    }

    logout(): void {
      sessionStorage.clear();
      localStorage.clear();
      this.refresh();
      this.authService.clear();
      this.initialize();
    }

  help() {
    this.router.navigate(['/help']);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.showCycle();
  }

}
