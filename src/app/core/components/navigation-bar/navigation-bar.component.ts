import {Component} from '@angular/core';
import {PageHeaderService} from '../../services/page-header.service';
import {CycleSelectionService} from '../../services/cycle-selection.service';
import {AuthService} from '../../services/auth.service';
import { InitializationService } from '../../services/initialization.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  appraisal = {
    id: '5f5a2f930ccdc63c6069ea6b'
  };

  cycles: any[];

  constructor( public pageHeaderService: PageHeaderService,
               public cycleSelectionService: CycleSelectionService,
               public authService: AuthService,
               private initializationService: InitializationService,
               private store: Store<AppState>) {
                const cycles$ = this.store.pipe(select('cycles'));
                cycles$.subscribe(result => {
                  this.cycles = result;
                });
               }

  changeCycle(cycle) {
    this.cycleSelectionService.changeCycle(cycle);
  }
}
