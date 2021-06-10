import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {ProvideFeedbackComponent} from './provide-feedback/provide-feedback.component';
import {ReviewResponseComponent} from './review-response/review-response.component';
import {ViewResponseComponent} from './view-response/view-response.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {SelfAppraisalComponent} from './self-appraisal/self-appraisal.component';
import {ManageAppraisalComponent} from './manage-appraisal/manage-appraisal.component';
import {GoalComponent} from './goal/goal.component';
import {AuthGuard} from './auth.guard';
import { RatingScaleComponent } from './rating-scale/rating-scale.component';
import { SetGoalsComponent } from './set-goals/set-goals.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { ChangeCycleDialogComponent } from './change-cycle-dialog/change-cycle-dialog.component';
import { AppraisalV2Component } from './appraisal-v2/appraisal-v2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: ChangeCycleDialogComponent},
  { path: '', component: LoginComponent},
  { path: 'help', component: HelpComponent},
  { path: 'appraisal', component: AppraisalComponent, canActivate: [AuthGuard]},
  { path: 'appraisalv2/:employeeId', component: AppraisalV2Component, canActivate: [AuthGuard]},
  { path: 'user-administration', component: UserAdministrationComponent, canActivate: [AuthGuard]},
  { path: 'appraisal', component: SelfAppraisalComponent, canActivate: [AuthGuard]},
  { path: 'reportees', component: ManageAppraisalComponent, canActivate: [AuthGuard]},
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
