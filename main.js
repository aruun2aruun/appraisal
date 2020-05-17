(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _provide_feedback_provide_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provide-feedback/provide-feedback.component */ "./src/app/provide-feedback/provide-feedback.component.ts");
/* harmony import */ var _review_response_review_response_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review-response/review-response.component */ "./src/app/review-response/review-response.component.ts");
/* harmony import */ var _view_response_view_response_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-response/view-response.component */ "./src/app/view-response/view-response.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _user_administration_user_administration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-administration/user-administration.component */ "./src/app/user-administration/user-administration.component.ts");
/* harmony import */ var _self_appraisal_self_appraisal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./self-appraisal/self-appraisal.component */ "./src/app/self-appraisal/self-appraisal.component.ts");
/* harmony import */ var _manage_appraisal_manage_appraisal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-appraisal/manage-appraisal.component */ "./src/app/manage-appraisal/manage-appraisal.component.ts");
/* harmony import */ var _goal_definition_goal_definition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./goal-definition/goal-definition.component */ "./src/app/goal-definition/goal-definition.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _rating_scale_rating_scale_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rating-scale/rating-scale.component */ "./src/app/rating-scale/rating-scale.component.ts");
/* harmony import */ var _set_goals_set_goals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./set-goals/set-goals.component */ "./src/app/set-goals/set-goals.component.ts");

















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"] },
    { path: 'provide-feedback', component: _provide_feedback_provide_feedback_component__WEBPACK_IMPORTED_MODULE_6__["ProvideFeedbackComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'review-response', component: _review_response_review_response_component__WEBPACK_IMPORTED_MODULE_7__["ReviewResponseComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'view-response', component: _view_response_view_response_component__WEBPACK_IMPORTED_MODULE_8__["ViewResponseComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user-administration', component: _user_administration_user_administration_component__WEBPACK_IMPORTED_MODULE_10__["UserAdministrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'self-appraisal', component: _self_appraisal_self_appraisal_component__WEBPACK_IMPORTED_MODULE_11__["SelfAppraisalComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'manage-appraisal', component: _manage_appraisal_manage_appraisal_component__WEBPACK_IMPORTED_MODULE_12__["ManageAppraisalComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'goal-definition', component: _goal_definition_goal_definition_component__WEBPACK_IMPORTED_MODULE_13__["GoalDefinitionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'rating-scale', component: _rating_scale_rating_scale_component__WEBPACK_IMPORTED_MODULE_15__["RatingScaleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'unauthorized', component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_9__["UnauthorizedComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'set-goals', component: _set_goals_set_goals_component__WEBPACK_IMPORTED_MODULE_16__["SetGoalsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\nmain {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'feedback-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/navigation-bar/navigation-bar.component */ "./src/app/core/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _provide_feedback_provide_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./provide-feedback/provide-feedback.component */ "./src/app/provide-feedback/provide-feedback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _core_components_user_search_bar_user_search_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/components/user-search-bar/user-search-bar.component */ "./src/app/core/components/user-search-bar/user-search-bar.component.ts");
/* harmony import */ var _review_response_review_response_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./review-response/review-response.component */ "./src/app/review-response/review-response.component.ts");
/* harmony import */ var _view_response_view_response_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-response/view-response.component */ "./src/app/view-response/view-response.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _core_components_text_input_dialog_text_input_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/components/text-input-dialog/text-input-dialog.component */ "./src/app/core/components/text-input-dialog/text-input-dialog.component.ts");
/* harmony import */ var _user_administration_user_administration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-administration/user-administration.component */ "./src/app/user-administration/user-administration.component.ts");
/* harmony import */ var _user_administration_dialog_user_administration_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-administration-dialog/user-administration-dialog.component */ "./src/app/user-administration-dialog/user-administration-dialog.component.ts");
/* harmony import */ var _self_appraisal_self_appraisal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./self-appraisal/self-appraisal.component */ "./src/app/self-appraisal/self-appraisal.component.ts");
/* harmony import */ var _manage_appraisal_manage_appraisal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manage-appraisal/manage-appraisal.component */ "./src/app/manage-appraisal/manage-appraisal.component.ts");
/* harmony import */ var _self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./self-appraisal-sectionone/self-appraisal-sectionone.component */ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.ts");
/* harmony import */ var _self_appraisal_sectiontwo_self_appraisal_sectiontwo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./self-appraisal-sectiontwo/self-appraisal-sectiontwo.component */ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.ts");
/* harmony import */ var _manage_appraisal_dialog_manage_appraisal_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./manage-appraisal-dialog/manage-appraisal-dialog.component */ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.ts");
/* harmony import */ var _goal_definition_goal_definition_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./goal-definition/goal-definition.component */ "./src/app/goal-definition/goal-definition.component.ts");
/* harmony import */ var _rating_scale_rating_scale_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rating-scale/rating-scale.component */ "./src/app/rating-scale/rating-scale.component.ts");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _self_appraisal_sectionfour_self_appraisal_sectionfour_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./self-appraisal-sectionfour/self-appraisal-sectionfour.component */ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.ts");
/* harmony import */ var _submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./submit-error-dialog/submit-error-dialog.component */ "./src/app/submit-error-dialog/submit-error-dialog.component.ts");
/* harmony import */ var _submit_confirmation_dialog_submit_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./submit-confirmation-dialog/submit-confirmation-dialog.component */ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.ts");
/* harmony import */ var _self_appraisal_sectionfive_self_appraisal_sectionfive_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./self-appraisal-sectionfive/self-appraisal-sectionfive.component */ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _set_goals_set_goals_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./set-goals/set-goals.component */ "./src/app/set-goals/set-goals.component.ts");
/* harmony import */ var _set_goals_dialog_set_goals_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./set-goals-dialog/set-goals-dialog.component */ "./src/app/set-goals-dialog/set-goals-dialog.component.ts");










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavigationBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _provide_feedback_provide_feedback_component__WEBPACK_IMPORTED_MODULE_16__["ProvideFeedbackComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _core_components_user_search_bar_user_search_bar_component__WEBPACK_IMPORTED_MODULE_18__["UserSearchBarComponent"],
                _review_response_review_response_component__WEBPACK_IMPORTED_MODULE_19__["ReviewResponseComponent"],
                _view_response_view_response_component__WEBPACK_IMPORTED_MODULE_20__["ViewResponseComponent"],
                _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_21__["UnauthorizedComponent"],
                _core_components_text_input_dialog_text_input_dialog_component__WEBPACK_IMPORTED_MODULE_22__["TextInputDialogComponent"],
                _user_administration_user_administration_component__WEBPACK_IMPORTED_MODULE_23__["UserAdministrationComponent"],
                _user_administration_dialog_user_administration_dialog_component__WEBPACK_IMPORTED_MODULE_24__["UserAdministrationDialogComponent"],
                _self_appraisal_self_appraisal_component__WEBPACK_IMPORTED_MODULE_25__["SelfAppraisalComponent"],
                _manage_appraisal_manage_appraisal_component__WEBPACK_IMPORTED_MODULE_26__["ManageAppraisalComponent"],
                _self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_27__["SelfAppraisalSectiononeComponent"],
                _self_appraisal_sectiontwo_self_appraisal_sectiontwo_component__WEBPACK_IMPORTED_MODULE_28__["SelfAppraisalSectiontwoComponent"],
                _manage_appraisal_dialog_manage_appraisal_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ManageAppraisalDialogComponent"],
                _goal_definition_goal_definition_component__WEBPACK_IMPORTED_MODULE_30__["GoalDefinitionComponent"],
                _rating_scale_rating_scale_component__WEBPACK_IMPORTED_MODULE_31__["RatingScaleComponent"],
                _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NotifyDialogComponent"],
                _self_appraisal_sectionfour_self_appraisal_sectionfour_component__WEBPACK_IMPORTED_MODULE_33__["SelfAppraisalSectionfourComponent"],
                _self_appraisal_sectionfive_self_appraisal_sectionfive_component__WEBPACK_IMPORTED_MODULE_36__["SelfAppraisalSectionfiveComponent"],
                _submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_34__["SubmitErrorDialogComponent"],
                _submit_confirmation_dialog_submit_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SubmitConfirmationDialogComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_37__["HelpComponent"],
                _set_goals_set_goals_component__WEBPACK_IMPORTED_MODULE_38__["SetGoalsComponent"],
                _set_goals_dialog_set_goals_dialog_component__WEBPACK_IMPORTED_MODULE_39__["SetGoalsDialogComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [
                _core_components_text_input_dialog_text_input_dialog_component__WEBPACK_IMPORTED_MODULE_22__["TextInputDialogComponent"],
                _user_administration_dialog_user_administration_dialog_component__WEBPACK_IMPORTED_MODULE_24__["UserAdministrationDialogComponent"],
                _manage_appraisal_dialog_manage_appraisal_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ManageAppraisalDialogComponent"],
                _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NotifyDialogComponent"],
                _submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_34__["SubmitErrorDialogComponent"],
                _submit_confirmation_dialog_submit_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_35__["SubmitConfirmationDialogComponent"],
                _set_goals_dialog_set_goals_dialog_component__WEBPACK_IMPORTED_MODULE_39__["SetGoalsDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
        this.ADMIN_PATHS = ['/user-administration'];
        this.MANAGER_PATHS = ['/manage-appraisal'];
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthGuard.prototype.verifyLogin = function (url) {
        var _this = this;
        if (url === '/unauthorized' || url === '/home') {
            return true;
        }
        if (!this.isLoggedIn()) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        else {
            this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                if (data === null) {
                    _this.router.navigate(['/unauthorized']);
                    return false;
                }
                else {
                    return _this.isAuthorized(url, data.roles);
                }
            });
            return true;
        }
    };
    AuthGuard.prototype.isLoggedIn = function () {
        var status = false;
        if (sessionStorage.getItem('idToken') !== null) {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthGuard.prototype.isAuthorized = function (url, roles) {
        if (this.ADMIN_PATHS.find(function (obj) { return obj === url; }) && !roles.find(function (obj) { return obj.type === 'Administrator'; })) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        else if (this.MANAGER_PATHS.find(function (obj) { return obj === url; }) &&
            !roles.find(function (obj) { return obj.type === 'TeamLead'; }) &&
            !roles.find(function (obj) { return obj.type === 'ProjectManager'; }) &&
            !roles.find(function (obj) { return obj.type === 'PracticeDirector'; }) &&
            !roles.find(function (obj) { return obj.type === 'HR'; }) &&
            !roles.find(function (obj) { return obj.type === 'Administrator'; })) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/components/navigation-bar/navigation-bar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/navigation-bar/navigation-bar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" style=\"position: fixed; z-index: 999;\">\r\n\r\n  <mat-toolbar-row class=\"mat-elevation-z8\">\r\n\r\n    <a class=\"logo\" fxHide=\"false\" fxHide.lt-md>\r\n      <img src=\"../../../../assets/img/logo.png\" alt=\"Westernacher logo\" class=\"tt-retina-logo\" height=\"40\">\r\n    </a>\r\n    <button mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/home\">Home</button>\r\n    <button *ngIf=\"authService.loggedIn\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/self-appraisal\">Self Appraisal</button>\r\n    <button *ngIf=\"authService.isAdministrator\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/user-administration\">Access Control</button>\r\n    <button *ngIf=\"authService.isReviewer\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/manage-appraisal\">Manage Appraisal</button>\r\n    <button *ngIf=\"authService.loggedIn\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/goal-definition\">Goals</button>\r\n    <button *ngIf=\"authService.loggedIn\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/set-goals\">Set Goals</button>\r\n    <button *ngIf=\"authService.loggedIn\" mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/rating-scale\">Rating definition</button>\r\n    <button mat-stroked-button fxHide=\"false\" fxHide.lt-md routerLink=\"/help\">Help</button>\r\n\r\n    <button class=\"logo_menu\" mat-stroked-button fxShow=\"false\" fxShow.lt-md [matMenuTriggerFor]=\"mobileMenu\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <a class=\"logo\" fxShow=\"false\" fxShow.lt-md>\r\n      <img src=\"../../../../assets/img/logo.png\" alt=\"Westernacher logo\" class=\"tt-retina-logo\" height=\"40\">\r\n    </a>\r\n\r\n    <span class=\"fill-remaining-space\"></span>\r\n\r\n    <span fxShow=\"false\" fxShow.lt-md class=\"fill-remaining-space\"></span>\r\n\r\n    <span mat-icon-button fxHide=\"false\" fxHide.lt-md  *ngIf=\"this.authService.loggedInUser\">{{this.authService.loggedInUser.name}}</span>\r\n\r\n    <button mat-icon-button onclick=\"location.href='https://appraisal.ioak.org/login'\">\r\n      <!--<button mat-icon-button routerLink=\"/login\">-->\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-toolbar>\r\n  <mat-toolbar-row></mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <span fxShow=\"false\" fxShow.lt-md class=\"header-mobile\">{{pageHeaderService.title}}</span>\r\n    <span fxHide=\"false\" fxHide.lt-md>{{pageHeaderService.title}}</span>\r\n    <span class=\"fill-remaining-space\"></span>\r\n    <button mat-stroked-button fxHide=\"false\" [hidden]=\"pageHeaderService.hideCycleFromView\"\r\n            [matMenuTriggerFor]=\"cycleMenu\">\r\n      <span *ngIf=\"cycleSelectionService.currentCycle\">{{cycleSelectionService.currentCycle.name}}</span>\r\n      <mat-icon>expand_more</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!--Sub menu for user settings-->\r\n<mat-menu #accountMenu=\"matMenu\">\r\n  <!--<button mat-menu-item *ngIf=\"!loggedIn\" routerLink='/login'>Sign In</button>-->\r\n  <!--<button mat-menu-item *ngIf=\"loggedIn\" routerLink='/login'>Sign Out</button>-->\r\n  <button mat-menu-item routerLink='/login'>Sign In/Out</button>\r\n</mat-menu>\r\n\r\n<!--Sub menu for Feedback cycle selection-->\r\n<mat-menu #cycleMenu=\"matMenu\">\r\n  <button *ngFor=\"let item of cycleSelectionService.activeCycles\" mat-menu-item (click)=\"changeCycle(item)\">{{item.name}}</button>\r\n</mat-menu>\r\n\r\n<!--Sub menu for small displays-->\r\n<mat-menu #mobileMenu=\"matMenu\">\r\n  <button mat-menu-item routerLink=\"/home\">Home</button>\r\n  <button *ngIf=\"authService.loggedIn\" mat-menu-item routerLink=\"/self-appraisal\">Self Appraisal</button>\r\n  <button *ngIf=\"authService.isAdministrator\" mat-menu-item routerLink=\"/user-administration\">Access Control</button>\r\n  <button *ngIf=\"authService.isReviewer\" mat-menu-item routerLink=\"/manage-appraisal\">Manage Appraisal</button>\r\n  <button *ngIf=\"authService.loggedIn\" mat-menu-item routerLink=\"/goal-definition\">Goals</button>\r\n  <button *ngIf=\"authService.loggedIn\" mat-menu-item routerLink=\"/set-goals\">Set Goals</button>\r\n  <button *ngIf=\"authService.loggedIn\" mat-menu-item routerLink=\"/rating-scale\">Rating Definition</button>\r\n  <button mat-menu-item routerLink=\"/help\">Help</button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/core/components/navigation-bar/navigation-bar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/navigation-bar/navigation-bar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  margin: 10px; }\n\n.logo {\n  background: #fff;\n  cursor: auto;\n  margin: 0 10px 0 -15px;\n  padding: 5px 10px 0px 10px; }\n\n@media (max-width: 600px) {\n  .logo {\n    margin: 0 10px 0 -15px;\n    padding: 7px 10px 0px 10px; }\n  .logo_menu {\n    min-width: 20px;\n    margin: 0 30px 0 0;\n    padding: 0; } }\n\n@media (min-width: 601px) and (max-width: 960px) {\n  .logo {\n    padding: 8px 10px; }\n  .logo_menu {\n    min-width: 20px;\n    padding: 0;\n    margin: 0 30px 0 0; } }\n\n.mat-icon-button {\n  color: white; }\n\nmat-toolbar-row span img {\n  width: 110px; }\n\n.fill-remaining-space {\n  flex: 1 1 auto; }\n\nmat-toolbar-row .mat-stroked-button {\n  border: none; }\n\n.button-large {\n  font-size: large; }\n\n.header-mobile {\n  font-size: small; }\n\n[hidden] {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL0M6XFxwcm9qZWN0XFx3b3Jrc3BhY2VcXDIwMTkwOVxcYXBwcmFpc2FsL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uLWJhclxcbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBLEVBQ1g7O0FBR0g7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0IsRUFBQSxFQUNuQjs7QUFHSDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUNUbEI7RURZVyx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAtMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCAwcHggMTBweDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgLTE1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTBweCAwcHggMTBweDtcclxuICB9XHJcbiAgLmxvZ29fbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIH1cclxuICAubG9nb19tZW51IHtcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvdyBzcGFuIGltZyB7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3cgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnV0dG9uLWxhcmdlIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaGVhZGVyLW1vYmlsZSB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTBweDsgfVxuXG4ubG9nbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogYXV0bztcbiAgbWFyZ2luOiAwIDEwcHggMCAtMTVweDtcbiAgcGFkZGluZzogNXB4IDEwcHggMHB4IDEwcHg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2dvIHtcbiAgICBtYXJnaW46IDAgMTBweCAwIC0xNXB4O1xuICAgIHBhZGRpbmc6IDdweCAxMHB4IDBweCAxMHB4OyB9XG4gIC5sb2dvX21lbnUge1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XG4gICAgcGFkZGluZzogMDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5sb2dvIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDsgfVxuICAubG9nb19tZW51IHtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7IH0gfVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbm1hdC10b29sYmFyLXJvdyBzcGFuIGltZyB7XG4gIHdpZHRoOiAxMTBweDsgfVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG5tYXQtdG9vbGJhci1yb3cgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uYnV0dG9uLWxhcmdlIHtcbiAgZm9udC1zaXplOiBsYXJnZTsgfVxuXG4uaGVhZGVyLW1vYmlsZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7IH1cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/navigation-bar/navigation-bar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/navigation-bar/navigation-bar.component.ts ***!
  \****************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");





var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(pageHeaderService, cycleSelectionService, authService) {
        this.pageHeaderService = pageHeaderService;
        this.cycleSelectionService = cycleSelectionService;
        this.authService = authService;
    }
    NavigationBarComponent.prototype.changeCycle = function (cycle) {
        this.cycleSelectionService.changeCycle(cycle);
    };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/core/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/core/components/navigation-bar/navigation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"],
            _services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/text-input-dialog/text-input-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/text-input-dialog/text-input-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2 mat-dialog-title>{{dialogTitle}}</h2>\r\n\r\n  <mat-dialog-content>\r\n    <div>\r\n      <mat-form-field style=\"width: 70%\">\r\n        <input matInput placeholder=\"{{dialogPlaceholder}}\" [(ngModel)]=\"data.suggestion\">\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button  type=\"button\" mat-stroked-button class=\"btn btn-outline-primary sharp dialog-button\" [mat-dialog-close]=\"data\" >\r\n      OK\r\n    </button>\r\n    <button type=\"button\" mat-stroked-button class=\"btn btn-outline-primary sharp dialog-button\" [mat-dialog-close] >\r\n      Cancel\r\n    </button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/text-input-dialog/text-input-dialog.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/text-input-dialog/text-input-dialog.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-button {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3RleHQtaW5wdXQtZGlhbG9nL0M6XFxwcm9qZWN0XFx3b3Jrc3BhY2VcXDIwMTkwOVxcYXBwcmFpc2FsL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFx0ZXh0LWlucHV0LWRpYWxvZ1xcdGV4dC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvdGV4dC1pbnB1dC1kaWFsb2cvdGV4dC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWJ1dHRvbntcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/text-input-dialog/text-input-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/text-input-dialog/text-input-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TextInputDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputDialogComponent", function() { return TextInputDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var TextInputDialogComponent = /** @class */ (function () {
    function TextInputDialogComponent(data) {
        this.data = data;
        this.dialogTitle = data.title;
        this.dialogPlaceholder = data.placeholder;
    }
    TextInputDialogComponent.prototype.ngOnInit = function () {
    };
    TextInputDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-input-dialog',
            template: __webpack_require__(/*! ./text-input-dialog.component.html */ "./src/app/core/components/text-input-dialog/text-input-dialog.component.html"),
            styles: [__webpack_require__(/*! ./text-input-dialog.component.scss */ "./src/app/core/components/text-input-dialog/text-input-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TextInputDialogComponent);
    return TextInputDialogComponent;
}());



/***/ }),

/***/ "./src/app/core/components/user-search-bar/user-search-bar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/user-search-bar/user-search-bar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <mat-form-field style=\"width: 100%\">\r\n    <mat-chip-list #chipList>\r\n      <input #autocompleteInput type=\"text\" placeholder=\"Select Participants\" matInput [formControl]=\"userSearchControl\"\r\n             [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let user of matchingUsers\" [value]=\"user\" (onSelectionChange)=\"addPerson(user)\">\r\n          {{user.name}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-chip-list>\r\n\r\n  </mat-form-field>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/core/components/user-search-bar/user-search-bar.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/user-search-bar/user-search-bar.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy91c2VyLXNlYXJjaC1iYXIvdXNlci1zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/user-search-bar/user-search-bar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/user-search-bar/user-search-bar.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchBarComponent", function() { return UserSearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var UserSearchBarComponent = /** @class */ (function () {
    function UserSearchBarComponent() {
        this.userSearchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.person = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserSearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.options;
        this.userSearchControl.valueChanges.subscribe(function (searchText) {
            _this.matchingUsers = _this.searchFilter(searchText);
        });
    };
    UserSearchBarComponent.prototype.searchFilter = function (searchText) {
        if (searchText === '' || searchText === null || searchText === undefined || typeof searchText !== 'string') {
            return [];
        }
        if (searchText.endsWith('@westernacher.com')) {
            return searchText ? this.users.filter(function (user) { return user.email.toLowerCase() === searchText.toLowerCase(); }) : this.users;
        }
        return searchText ? this.users.filter(function (user) { return user.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1; }) : this.users;
    };
    UserSearchBarComponent.prototype.addPerson = function (user) {
        this.person.emit(user);
        this.autocompleteInput.nativeElement.focus();
        this.autocompleteInput.nativeElement.value = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserSearchBarComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autocompleteInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserSearchBarComponent.prototype, "autocompleteInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserSearchBarComponent.prototype, "person", void 0);
    UserSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-search-bar',
            template: __webpack_require__(/*! ./user-search-bar.component.html */ "./src/app/core/components/user-search-bar/user-search-bar.component.html"),
            styles: [__webpack_require__(/*! ./user-search-bar.component.scss */ "./src/app/core/components/user-search-bar/user-search-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserSearchBarComponent);
    return UserSearchBarComponent;
}());



/***/ }),

/***/ "./src/app/core/services/appraisal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/appraisal.service.ts ***!
  \****************************************************/
/*! exports provided: AppraisalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppraisalService", function() { return AppraisalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AppraisalService = /** @class */ (function () {
    function AppraisalService(http) {
        this.http = http;
    }
    AppraisalService.prototype.getAppraisal = function (cycleId, userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/manageable/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getAppraisalbyAppraisalId = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getAppraisalbyUserId = function (cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getSectiononebyUserId = function (cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionone';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getSectiontwobyUserId = function (section, cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/' + section;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getSectionfourbyUserId = function (cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfour';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.getSectionfivebyUserId = function (cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfive';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    AppraisalService.prototype.submitSelfGoals = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/submitSelfGoals';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.submitFeedback = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/submitSelfAppraisal';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.submitReviewerFeedback = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/submitReviewerAppraisal';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.submitSectionOneReviewerFeedback = function (appraisalId, reviewerId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/sectionone/reviewer/' + reviewerId + '/submit';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.completeAppraisal = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/completeAppraisal';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.errorCheck = function (appraisalId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/' + appraisalId + '/errorCheck';
        return this.http.post(url, httpOptions);
    };
    AppraisalService.prototype.saveFeedback = function (jsonObj) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/saveResponse';
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService.prototype.notifyAppraisal = function (cycleId, result) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/notification/' + cycleId + '/send';
        return this.http.post(url, result, httpOptions);
    };
    AppraisalService.prototype.notifyUser = function (result) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/notification/send';
        return this.http.post(url, result, httpOptions);
    };
    AppraisalService.prototype.saveSectionOneFeedback = function (jsonObj, cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionone';
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService.prototype.saveSectionOneReviewerFeedback = function (jsonObj, cycleId, userId, reviewerId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionone/reviewer/' + reviewerId;
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService.prototype.saveSectionFourFeedback = function (jsonObj, cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfour';
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService.prototype.saveSectionFiveFeedback = function (jsonObj, cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/sectionfive';
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService.prototype.saveSectionTwoFeedback = function (section, jsonObj, cycleId, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/appraisal/cycle/' + cycleId + '/user/' + userId + '/' + section;
        return this.http.put(url, jsonObj, httpOptions);
    };
    AppraisalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppraisalService);
    return AppraisalService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(userService, cycleSelectionService) {
        this.userService = userService;
        this.cycleSelectionService = cycleSelectionService;
        this.isAdministrator = false;
        this.isReviewer = false;
        this.loggedIn = false;
    }
    AuthService.prototype.init = function () {
        var _this = this;
        console.log(sessionStorage.getItem('userSigninName'));
        if (sessionStorage.getItem('userSigninName')) {
            this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.loggedIn = true;
                if (data.roles.find(function (obj) { return obj.type === 'Administrator'; })) {
                    _this.isAdministrator = true;
                }
                if (data.roles.length > 0) {
                    _this.isReviewer = true;
                }
            });
        }
        else {
            this.loggedIn = false;
            this.isAdministrator = false;
            this.isReviewer = false;
        }
        this.cycleSelectionService.initialize();
    };
    AuthService.prototype.clear = function () {
        this.loggedInUser = null;
        this.loggedIn = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/cycle-selection.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/cycle-selection.service.ts ***!
  \**********************************************************/
/*! exports provided: CycleSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleSelectionService", function() { return CycleSelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CycleSelectionService = /** @class */ (function () {
    function CycleSelectionService() {
        this.cycleChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CycleSelectionService.prototype.changeCycle = function (cycle) {
        this.currentCycle = cycle;
        localStorage.setItem('currentCycle', JSON.stringify(cycle));
        this.cycleChangedEvent.emit(cycle);
    };
    CycleSelectionService.prototype.initialize = function () {
        if (localStorage.getItem('activeCycles')) {
            this.activeCycles = JSON.parse(localStorage.getItem('activeCycles'));
        }
        if (localStorage.getItem('currentCycle')) {
            this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        }
    };
    CycleSelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CycleSelectionService);
    return CycleSelectionService;
}());



/***/ }),

/***/ "./src/app/core/services/cycle.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/cycle.service.ts ***!
  \************************************************/
/*! exports provided: CycleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleService", function() { return CycleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CycleService = /** @class */ (function () {
    function CycleService(http) {
        this.http = http;
    }
    CycleService.prototype.getCyclebyId = function (cycleId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/cycle/' + cycleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    CycleService.prototype.getCycles = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/cycle').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    CycleService.prototype.createCycle = function (result) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/cycle';
        return this.http.post(url, result, httpOptions);
    };
    CycleService.prototype.deleteCycle = function (cycleId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/cycle/' + cycleId;
        return this.http.delete(url, httpOptions);
    };
    CycleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CycleService);
    return CycleService;
}());



/***/ }),

/***/ "./src/app/core/services/feedback.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/feedback.service.ts ***!
  \***************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.getProviders = function (cycleId, receiverId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/receiver/' + receiverId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    FeedbackService.prototype.getReceivers = function (cycleId, providerId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/provider/' + providerId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    FeedbackService.prototype.getCycle = function (cycleId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    FeedbackService.prototype.getCyclesByReceiver = function (receiverId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/receiver/' + receiverId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    FeedbackService.prototype.saveProviders = function (jsonObj, cycleId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/updateProviders';
        return this.http.put(url, jsonObj, httpOptions);
    };
    FeedbackService.prototype.saveFeedback = function (jsonObj, cycleId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/saveResponse';
        return this.http.put(url, jsonObj, httpOptions);
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/core/services/page-header.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/page-header.service.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderService", function() { return PageHeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderService = /** @class */ (function () {
    function PageHeaderService() {
        this.showCycle();
    }
    PageHeaderService.prototype.setTitle = function (title) {
        this.title = title;
    };
    PageHeaderService.prototype.hideCycle = function () {
        this.hideCycleFromView = true;
    };
    PageHeaderService.prototype.showCycle = function () {
        this.hideCycleFromView = false;
    };
    PageHeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderService);
    return PageHeaderService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/person').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    UserService.prototype.getUsersById = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/person/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    UserService.prototype.getUsersByEmail = function (email) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/person/email/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/goal-definition/goal-definition.component.html":
/*!****************************************************************!*\
  !*** ./src/app/goal-definition/goal-definition.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-accordion *ngFor=\"let row of data\">\r\n    <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"display: inline-block\">\r\n          {{row.group}} > {{row.criteria}}\r\n          <span style=\"float: right\"> Weightage: {{row.weightage * 100 | number : '1.1-1'}}%</span>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <p>{{row.description}}</p>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/goal-definition/goal-definition.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/goal-definition/goal-definition.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWwtZGVmaW5pdGlvbi9nb2FsLWRlZmluaXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/goal-definition/goal-definition.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goal-definition/goal-definition.component.ts ***!
  \**************************************************************/
/*! exports provided: GoalDefinitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalDefinitionComponent", function() { return GoalDefinitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _goal_definition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-definition.service */ "./src/app/goal-definition/goal-definition.service.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");






var GoalDefinitionComponent = /** @class */ (function () {
    function GoalDefinitionComponent(goalDefinitionService, pageHeaderService, userService, authService) {
        this.goalDefinitionService = goalDefinitionService;
        this.pageHeaderService = pageHeaderService;
        this.userService = userService;
        this.authService = authService;
        pageHeaderService.setTitle('Goal Definition');
    }
    GoalDefinitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //After loggin for the first time: When user navigates to any page from home page, the initialization of current and active cycles does not complete until ngOnInit on the second page finishes. So, timeout is set for the first navigation away from home component.
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.authService.init();
                _this.initialize();
            });
        }, 100);
    };
    GoalDefinitionComponent.prototype.initialize = function () {
        var _this = this;
        this.goalDefinitionService.getDefinitions(this.loggedInUser.id).subscribe(function (response) {
            _this.data = response;
        });
    };
    GoalDefinitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goal-definition',
            template: __webpack_require__(/*! ./goal-definition.component.html */ "./src/app/goal-definition/goal-definition.component.html"),
            styles: [__webpack_require__(/*! ./goal-definition.component.scss */ "./src/app/goal-definition/goal-definition.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_goal_definition_service__WEBPACK_IMPORTED_MODULE_2__["GoalDefinitionService"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__["PageHeaderService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GoalDefinitionComponent);
    return GoalDefinitionComponent;
}());



/***/ }),

/***/ "./src/app/goal-definition/goal-definition.service.ts":
/*!************************************************************!*\
  !*** ./src/app/goal-definition/goal-definition.service.ts ***!
  \************************************************************/
/*! exports provided: GoalDefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalDefinitionService", function() { return GoalDefinitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GoalDefinitionService = /** @class */ (function () {
    function GoalDefinitionService(http) {
        this.http = http;
    }
    GoalDefinitionService.prototype.getDefinitions = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/goalDefinition/' + userId);
    };
    GoalDefinitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoalDefinitionService);
    return GoalDefinitionService;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button class=\"btn btn-outline-primary sharp\" (click)=\"openSupportDialog()\">\r\n  <mat-icon>email</mat-icon>\r\n  Contact support / Send an Email\r\n</button>\r\n\r\n<!--<h2>Allowing Content in Chrome/Opera/Chromium and Firefox</h2>-->\r\n<!--<p>To display the content please follow the directions below:</p>-->\r\n\r\n<!--<h3>Google Chrome, Chromium, Opera</h3>-->\r\n<!--<ul>-->\r\n  <!--<li>Look for the small gray shield icon in the extreme right-hand corner of the address bar.-->\r\n    <!--<img src=\"../../appraisal/assets/img/help_chrome.png\" alt=\"\" width=\"100%\">-->\r\n  <!--</li>-->\r\n  <!--<li>Click the \"Load unsafe script\" link.-->\r\n    <!--<img src=\"../../appraisal/assets/img/help_chrome1.png\" alt=\"\" width=\"100%\">-->\r\n  <!--</li>-->\r\n<!--</ul>-->\r\n\r\n<!--<h3>Mozilla Firefox</h3>-->\r\n<!--<ul>-->\r\n  <!--<li>Click the lock icon in the address bar.</li>-->\r\n  <!--<li>Click the arrow on the Control Center:-->\r\n    <!--<img src=\"../../appraisal/assets/img/help_firefox.png\" alt=\"\" width=\"100%\">-->\r\n  <!--</li>-->\r\n  <!--<li>Click \"Disable protection for now\".-->\r\n    <!--<img src=\"../../appraisal/assets/img/help_firefox1.png\" alt=\"\" width=\"100%\">-->\r\n  <!--</li>-->\r\n<!--</ul>-->\r\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  line-height: 24px; }\n  ul li img {\n    border: 1px solid #bbb;\n    margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcaGVscFxcaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQixFQUFBO0VBRnJCO0lBSU0sc0JBQXNCO0lBQ3RCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);







var HelpComponent = /** @class */ (function () {
    function HelpComponent(pageHeaderService, dialog, snackBar, appraisalService) {
        this.pageHeaderService = pageHeaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        pageHeaderService.setTitle('Help');
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.pageHeaderService.hideCycle();
    };
    HelpComponent.prototype.openSupportDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {
            to: 'appraisal.westernacher@gmail.com',
            subject: 'Subject',
            body: 'Please specify your email Id while raising any question.'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notify(result);
            }
        });
    };
    HelpComponent.prototype.notify = function (result) {
        var _this = this;
        this.appraisalService.notifyUser(result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_6__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    HelpComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.showCycle();
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__["AppraisalService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.isAdministrator\">\r\n  <h2>{{this.daysdiff |  number : '1.0-0'}} day/s to go</h2>\r\n  <p><b>Evaluation period: </b>{{cycle.evaluationPeriod}}</p>\r\n  <p><b>Self appraisal deadline:</b> {{cycle.selfAppraisalDeadline | date}}</p>\r\n</div>\r\n\r\n<div *ngIf=\"authService.isAdministrator\">\r\n  <p><b>Self Review: </b>{{status?.selfReview}}</p>\r\n  <p><b>Head Review:</b> {{status?.headReview}}</p>\r\n  <p><b>Scheduled:</b> {{status?.scheduled}}</p>\r\n  <p><b>Closed:</b> {{status?.complete}}</p>\r\n</div>\r\n\r\n\r\n<br>\r\n<button mat-stroked-button class=\"btn btn-outline-primary sharp\" routerLink=\"/goal-definition\">\r\n  <mat-icon>play_arrow</mat-icon>\r\n  Start Appraisal\r\n</button>\r\n&nbsp;\r\n<button mat-stroked-button class=\"btn btn-outline-primary sharp\" (click)=\"openSupportDialog()\">\r\n  <mat-icon>email</mat-icon>\r\n  Contact support\r\n</button>\r\n<!--&nbsp;-->\r\n<!--<button mat-stroked-button class=\"btn btn-outline-primary sharp\"  (click)=\"help()\">-->\r\n  <!--<mat-icon>block</mat-icon>-->\r\n  <!--How to unblock content on my browser?-->\r\n<!--</button>-->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/cycle.service */ "./src/app/core/services/cycle.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);













var HomeComponent = /** @class */ (function () {
    function HomeComponent(pageHeaderService, homeService, userService, cycleSelectionService, authService, dialog, snackBar, appraisalService, cycleService, router) {
        this.pageHeaderService = pageHeaderService;
        this.homeService = homeService;
        this.userService = userService;
        this.cycleSelectionService = cycleSelectionService;
        this.authService = authService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        this.cycleService = cycleService;
        this.router = router;
        this.cycle = [];
        this.today = Date.now();
        pageHeaderService.setTitle('Home');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageHeaderService.hideCycle();
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
        this.initialize();
    };
    HomeComponent.prototype.initialize = function () {
        var _this = this;
        this.homeService.getCycles().subscribe(function (cycles) {
            for (var _i = 0, cycles_1 = cycles; _i < cycles_1.length; _i++) {
                var cycle = cycles_1[_i];
                if (cycle.status === 'ACTIVE') {
                    _this.cycle = cycle;
                    var today = new Date(_this.today).getTime();
                    var endDate = new Date(_this.cycle.selfAppraisalDeadline).getTime();
                    if (today > endDate) {
                        _this.daysdiff = 0;
                    }
                    else {
                        _this.daysdiff = Math.abs(endDate - today) / (1000 * 60 * 60 * 24);
                    }
                }
            }
        });
        this.homeService.getStatus().subscribe(function (status) {
            _this.status = status;
        });
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent.prototype.openSupportDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {
            to: 'appraisal.westernacher@gmail.com',
            subject: 'Subject',
            body: 'Please specify your email Id while raising any question.'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_10__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notify(result);
            }
        });
    };
    HomeComponent.prototype.notify = function (result) {
        var _this = this;
        this.appraisalService.notifyUser(result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_12__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    HomeComponent.prototype.help = function () {
        this.router.navigate(['/help']);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.showCycle();
        this.initializeCycleAndAccess();
    };
    HomeComponent.prototype.initializeCycleAndAccess = function () {
        var _this = this;
        if (sessionStorage.getItem('userSigninName') === null) {
            return;
        }
        this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
            _this.authService.isAdministrator = false;
            _this.authService.isReviewer = false;
            _this.authService.loggedIn = true;
            _this.authService.loggedInUser = data;
            if (data.roles.find(function (obj) { return obj.type === 'Administrator'; })) {
                _this.authService.isAdministrator = true;
            }
            if (data.roles.find(function (obj) { return obj.type === 'TeamLead'; }) ||
                data.roles.find(function (obj) { return obj.type === 'ProjectManager'; }) ||
                data.roles.find(function (obj) { return obj.type === 'PracticeDirector'; }) ||
                data.roles.find(function (obj) { return obj.type === 'HR'; })) {
                _this.authService.isReviewer = true;
            }
            _this.homeService.getCycles().subscribe(function (cycles) {
                _this.cycleSelectionService.activeCycles = [];
                for (var _i = 0, cycles_2 = cycles; _i < cycles_2.length; _i++) {
                    var cycle = cycles_2[_i];
                    if (cycle.status === 'ACTIVE') {
                        _this.cycleSelectionService.activeCycles.push(cycle);
                    }
                }
                if (_this.cycleSelectionService.activeCycles.length > 0 && (_this.cycleSelectionService.currentCycle === undefined ||
                    _this.cycleSelectionService.activeCycles.find(function (x) { return x.id === _this.cycleSelectionService.currentCycle.id; }) === undefined)) {
                    _this.cycleSelectionService.currentCycle = _this.cycleSelectionService.activeCycles[0];
                    localStorage.setItem('currentCycle', JSON.stringify(_this.cycleSelectionService.currentCycle));
                }
                localStorage.setItem('activeCycles', JSON.stringify(_this.cycleSelectionService.activeCycles));
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_4__["CycleSelectionService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_8__["AppraisalService"],
            _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_7__["CycleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getCycles = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/cycle');
    };
    HomeService.prototype.getStatus = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/appraisal/getStatusCount');
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button type=\"submit\" mat-stroked-button (click)=\"login()\" color=\"primary\"><mat-icon>create</mat-icon> Sign in with Office 365 Account</button>-->\r\n\r\n<!--VERSION 1-->\r\n<!--\r\n<h4 id=\"WelcomeMessage\"></h4>\r\n<button id=\"SignIn\" onclick=\"signIn()\">Sign In</button>\r\n<br/><br/>\r\n<pre id=\"json\"></pre>\r\n-->\r\n\r\n<!--VERSION 2-->\r\n<div *ngIf=\"!loggedIn\">\r\n  You are not logged in <a href=\"/login\" id=\"connect-button\">Sign in using Exchange 365</a>\r\n  <br>\r\n</div>\r\n<button *ngIf=\"loggedIn\" type=\"button\" mat-stroked-button (click)=\"logout()\"\r\n        class=\"button-large\" color=\"primary\">\r\n  <mat-icon>exit_to_app</mat-icon>\r\n  Logout\r\n</button>\r\n<br><br>\r\n<button mat-stroked-button class=\"btn btn-outline-primary sharp\" (click)=\"openSupportDialog()\">\r\n  <mat-icon>email</mat-icon>\r\n  Contact support\r\n</button>\r\n<!--&nbsp;-->\r\n<!--<button mat-stroked-button class=\"btn btn-outline-primary sharp\"  (click)=\"help()\">-->\r\n  <!--<mat-icon>block</mat-icon>-->\r\n  <!--How to unblock content on my browser?-->\r\n<!--</button>-->\r\n\r\n\r\n\r\n<!--<nav class=\"navbar navbar-inverse navbar-fixed-top\">-->\r\n    <!--<div class=\"container\">-->\r\n        <!--<div id=\"navbar\" class=\"navbar-collapse collapse\">-->\r\n            <!--<div class=\"nav navbar-nav navbar-right authed-nav\">-->\r\n                <!--<a href=\"#signout\">Sign out</a>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"nav navbar-nav navbar-right signin\">-->\r\n                <!--<a href=\"/login\" id=\"connect-button\">Sign In</a>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</nav>-->\r\n\r\n<!--<div class=\"container main-container\">-->\r\n    <!--<div id=\"signin-prompt\" class=\"jumbotron page\">-->\r\n        <!--<h1>Outlook SPA Demo</h1>-->\r\n        <!--<p>This example shows how to get an OAuth token from Azure using the <a href=\"https://azure.microsoft.com/en-us/documentation/articles/active-directory-v2-protocols-implicit/\">implicit grant flow</a> and to use that token to make calls to the Outlook APIs.</p>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; logged in user welcome &ndash;&gt;-->\r\n    <!--<div id=\"logged-in-welcome\" class=\"jumbotron page\" style=\"display: none;\">-->\r\n        <!--<h1>Outlook SPA Demo</h1>-->\r\n        <!--<p>Welcome <span id=\"username\"></span>!</p>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; unsupported browser message &ndash;&gt;-->\r\n    <!--<div id=\"unsupported\" class=\"jumbotron page\" style=\"display: none;\">-->\r\n        <!--<h1>Oops....</h1>-->\r\n        <!--<p>This page requires browser support for <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API\">session storage</a> and <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues\"><code>crypto.getRandomValues</code></a>. Unfortunately, your browser does not support one or both features. Please visit this page using a different browser.</p>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; error message &ndash;&gt;-->\r\n    <!--<div id=\"error-display\" class=\"page panel panel-danger\" style=\"display: none;\">-->\r\n        <!--<div class=\"panel-heading\">-->\r\n            <!--<h3 class=\"panel-title\" id=\"error-name\"></h3>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"panel-body\">-->\r\n            <!--<pre><code id=\"error-desc\"></code></pre>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; token display &ndash;&gt;-->\r\n    <!--<div id=\"token-display\" class=\"page panel panel-default\" style=\"display: none;\">-->\r\n        <!--<div class=\"panel-body\">-->\r\n            <!--<table>-->\r\n                <!--<tr>-->\r\n                    <!--<th>userDisplayName</th>-->\r\n                    <!--<th>userDomainType</th>-->\r\n                    <!--<th>userSigninName</th>-->\r\n                <!--</tr>-->\r\n                <!--<tr>-->\r\n                    <!--<td id=\"displayName\"></td>-->\r\n                    <!--<td id=\"domainType\"></td>-->\r\n                    <!--<td id=\"signinName\"></td>-->\r\n                <!--</tr>-->\r\n            <!--</table>-->\r\n            <!--<h4>Expires:</h4>-->\r\n            <!--<p id=\"expires-display\"></p>-->\r\n            <!--<h4>Access Token:</h4>-->\r\n            <!--<pre><code id=\"token\"></code></pre>-->\r\n            <!--<h4>ID Token:</h4>-->\r\n            <!--<pre><code id=\"id-token\"></code></pre>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authed-nav {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhlZC1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, pageHeaderService, dialog, appraisalService, snackBar, authService) {
        this.router = router;
        this.pageHeaderService = pageHeaderService;
        this.dialog = dialog;
        this.appraisalService = appraisalService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.pageHeaderService.setTitle('Login');
        this.pageHeaderService.hideCycle();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.authService.init();
    };
    LoginComponent.prototype.refresh = function () {
        window.location.reload();
    };
    LoginComponent.prototype.initialize = function () {
        this.loggedIn = false;
        if (sessionStorage.getItem('idToken') !== null) {
            this.loggedIn = true;
        }
    };
    LoginComponent.prototype.logout = function () {
        sessionStorage.clear();
        localStorage.clear();
        this.refresh();
        this.authService.clear();
        this.initialize();
    };
    LoginComponent.prototype.help = function () {
        this.router.navigate(['/help']);
    };
    LoginComponent.prototype.notify = function (result) {
        var _this = this;
        this.appraisalService.notifyUser(result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_7__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    LoginComponent.prototype.openSupportDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {
            to: 'appraisal.westernacher@gmail.com',
            subject: 'Subject',
            body: 'Please specify your email Id while raising any question.'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notify(result);
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.showCycle();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__["PageHeaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_8__["AppraisalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{data.currentUser.name}}\r\n  <span *ngIf=\"data.userStatus !== 'SELF_REVIEW'\">TotalScore - <b>{{this.totalScore |  number : '1.2-2'}}</b></span>\r\n</h2>\r\n<div class=\"userDetails\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>Designation</th>\r\n        <th>Joining Date</th>\r\n        <th>Last Appraisal date</th>\r\n        <th>Appraisal Period</th>\r\n        <th>Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{data.currentUser.designation}}</td>\r\n        <td>{{data.currentUser.joiningDate | date}}</td>\r\n        <td>{{data.currentUser.lastAppraisalDate | date}}</td>\r\n        <td>{{data.currentUser.duration}}&nbsp;days</td>\r\n        <td>{{status}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<mat-dialog-content>\r\n  <div *ngIf=\"data.userStatus === 'SELF_REVIEW'\">\r\n    <p>Self Review Pending</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"data.userStatus !== 'SELF_REVIEW'\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">Goals/Targets achieved</mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <app-self-appraisal-sectionone [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"data.currentUser\" [currentStatus]=\"status\"></app-self-appraisal-sectionone>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">Additional activities/tasks performed</mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <app-self-appraisal-sectiontwo [section]=\"'sectiontwo'\" [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"data.currentUser\"></app-self-appraisal-sectiontwo>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">Future Aspirations</mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <app-self-appraisal-sectiontwo [section]=\"'sectionthree'\" [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"data.currentUser\"></app-self-appraisal-sectiontwo>\r\n        <mat-action-row></mat-action-row>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">Additional Feedback from appraisee</mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <app-self-appraisal-sectionfour [appraisalVisibility]=\"appraisalVisibility\" [currentUser]=\"data.currentUser\"></app-self-appraisal-sectionfour>\r\n        <mat-action-row></mat-action-row>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">Additional Feedback from you</mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <app-self-appraisal-sectionfive [appraisalVisibility]=\"reviewerVisibility\" [currentUser]=\"data.currentUser\"></app-self-appraisal-sectionfive>\r\n        <mat-action-row></mat-action-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"display: flex;\">\r\n  <div *ngIf=\"error\" class=\"error\">\r\n    <mat-icon color=\"warn\">error</mat-icon>\r\n    <mat-label class=\"label\"><a title=\"Click to see Errors\" (click)=\"openDialog()\">{{error.error.sectionOneError.length}} errors</a></mat-label>\r\n  </div>\r\n  <div class=\"button-holder\" *ngIf=\"showSaveSubmit\">\r\n    <div *ngIf=\"data.userStatus === 'SELF_REVIEW' || data.userStatus === 'COMPLETE'\">    \r\n      <button type=\"button\" mat-stroked-button mat-button [mat-dialog-close] >\r\n        <mat-icon>close</mat-icon>\r\n        Close\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"data.userStatus === 'PROJECT_MANAGER' || 'REPORTING_MANAGER' || 'PRACTICE_DIRECTOR' || 'HR'\">\r\n      <button type=\"button\" mat-stroked-button mat-button (click)=\"save()\">\r\n        <mat-icon>create</mat-icon>\r\n        Save\r\n      </button>\r\n      <button type=\"button\" mat-stroked-button mat-button (click)=\"submitReviewerResponse()\" [mat-dialog-close]>\r\n        <mat-icon>done</mat-icon>\r\n        Submit\r\n      </button>\r\n      <!-- <button type=\"button\" mat-stroked-button mat-button (click)=\"markAsScheduled()\" [mat-dialog-close]>\r\n        <mat-icon>schedule</mat-icon>\r\n        Mark as Scheduled\r\n      </button> -->\r\n    </div>\r\n    <div *ngIf=\"data.userStatus === 'SCHEDULED'\">\r\n      <button type=\"button\" mat-stroked-button mat-button (click)=\"completeAppraisal()\" [mat-dialog-close]>\r\n        <mat-icon>done</mat-icon>\r\n        Mark as Complete\r\n      </button>  \r\n    </div>\r\n  </div>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin: 0 0 10px; }\n  h2 span {\n    float: right;\n    font-size: 16px;\n    font-weight: normal; }\n  h2 span b {\n      color: #4caf50; }\n  h4 {\n  margin-top: 0;\n  font-weight: normal; }\n  .mat-dialog-content {\n  overflow: auto; }\n  .mat-dialog-content .expansion-panel {\n    margin: 5px; }\n  .mat-form-field-infix {\n  width: 45px; }\n  table {\n  width: 100%;\n  border: none;\n  border-collapse: collapse;\n  margin: 5px 0 10px; }\n  table th, table td {\n    border: none;\n    text-align: left;\n    padding: 5px 0;\n    width: 25%; }\n  table th {\n    font-weight: bold; }\n  .error {\n  float: left;\n  display: inline-block; }\n  .error .label {\n    vertical-align: super;\n    margin: 0 0 0 5px; }\n  .button-holder {\n  margin-left: auto;\n  order: 2; }\n  .mat-expansion-panel-header {\n  height: 48px !important;\n  padding: 0 10px;\n  border-bottom: 1px solid #ccc;\n  text-transform: uppercase;\n  font-weight: bold; }\n  .mat-expansion-panel-content {\n  margin: 10px 0 0 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFwcHJhaXNhbC1kaWFsb2cvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXG1hbmFnZS1hcHByYWlzYWwtZGlhbG9nXFxtYW5hZ2UtYXBwcmFpc2FsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUx2QjtNQU9NLGNBQWMsRUFBQTtFQUlwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUVyQjtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUdJLFdBQVcsRUFBQTtFQUdmO0VBQ0UsV0FBVyxFQUFBO0VBRWI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtFQUpwQjtJQU9JLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVUsRUFBQTtFQVZkO0lBYUksaUJBQWlCLEVBQUE7RUFHckI7RUFDRSxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7RUFGdkI7SUFJSSxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7RUFHckI7RUFDRSxpQkFBaUI7RUFDakIsUUFBUSxFQUFBO0VBRVY7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hcHByYWlzYWwtZGlhbG9nL21hbmFnZS1hcHByYWlzYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYiB7XHJcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5oNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC5leHBhbnNpb24tcGFuZWx7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICB3aWR0aDogNDVweDtcclxufSAgXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW46IDVweCAwIDEwcHg7XHJcbiAgLy8gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4uZXJyb3Ige1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAubGFiZWwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgfVxyXG59XHJcbi5idXR0b24taG9sZGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBvcmRlcjogMjtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageAppraisalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAppraisalDialogComponent", function() { return ManageAppraisalDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../self-appraisal-sectionone/self-appraisal-sectionone.component */ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submit-error-dialog/submit-error-dialog.component */ "./src/app/submit-error-dialog/submit-error-dialog.component.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");







var ManageAppraisalDialogComponent = /** @class */ (function () {
    function ManageAppraisalDialogComponent(data, snackBar, appraisalService, userService, dialog) {
        this.data = data;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.dialog = dialog;
        this.appraisalVisibility = 'READ-ONLY';
        this.reviewerVisibility = 'EDITABLE';
        this.showSaveSubmit = false;
    }
    ManageAppraisalDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    ManageAppraisalDialogComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.loadAppraisal();
        this.error = null;
    };
    ManageAppraisalDialogComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.data.userStatus !== 'SELF_REVIEW') {
                _this.totalScore = _this.child.totalScore;
            }
        }, 100);
    };
    ManageAppraisalDialogComponent.prototype.loadAppraisal = function () {
        var _this = this;
        this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.data.currentUser.id).subscribe(function (response) {
            _this.appraisal = response;
            if (response.sectiononeResponse.length > 0) {
                _this.repAppRes = response.sectiononeResponse[0].response[0];
            }
            _this.status = response.status;
            // if (response.status === 'SELF_REVIEW') {
            //   this.appraisalVisibility = 'EDITABLE';
            //   this.reviewerVisibility = 'READ-ONLY';
            // } else {
            _this.reviewerVisibility = 'EDITABLE';
            _this.appraisalVisibility = 'READ-ONLY';
            // }
            _this.appraisalId = response.id;
            _this.saveSubmit();
        });
    };
    ManageAppraisalDialogComponent.prototype.saveSubmit = function () {
        if (this.repAppRes) {
            if (this.appraisal.status === 'SELF_APPRAISAL' || this.appraisal.status === 'COMPLETE') {
                this.showSaveSubmit = false;
            }
            else if (this.appraisal.status === 'HR' && this.repAppRes.hrReviews[this.loggedInUser.id]) {
                this.showSaveSubmit = true;
            }
            else if (this.appraisal.status === 'PRACTICE_DIRECTOR' && this.repAppRes.practiceDirectorReviews[this.loggedInUser.id]) {
                this.showSaveSubmit = true;
            }
            else if (this.appraisal.status === 'REPORTING_MANAGER' && this.repAppRes.teamLeadReviews[this.loggedInUser.id]) {
                this.showSaveSubmit = true;
            }
            else if (this.appraisal.status === 'PROJECT_MANAGER' && this.repAppRes.projectManagerReviews[this.loggedInUser.id]) {
                this.showSaveSubmit = true;
            }
        }
    };
    ManageAppraisalDialogComponent.prototype.save = function () {
        this.snackBar.open('Response Saved', null, {
            duration: 3000,
        });
    };
    ManageAppraisalDialogComponent.prototype.submitReviewerResponse = function () {
        var _this = this;
        this.appraisalService.submitSectionOneReviewerFeedback(this.appraisalId, this.loggedInUser.id).subscribe(function (response) {
            _this.initialize();
        }, function (error) {
            if (error.status === 406) {
                _this.error = error;
                _this.openDialog();
            }
        });
    };
    ManageAppraisalDialogComponent.prototype.markAsScheduled = function () {
        var _this = this;
        this.appraisalService.submitReviewerFeedback(this.appraisalId).subscribe(function (response) {
            _this.initialize();
        }, function (error) {
            if (error.status === 406) {
                _this.error = error;
                _this.openDialog();
            }
        });
    };
    ManageAppraisalDialogComponent.prototype.completeAppraisal = function () {
        var _this = this;
        this.appraisalService.completeAppraisal(this.appraisalId).subscribe(function (response) {
            _this.initialize();
        });
    };
    ManageAppraisalDialogComponent.prototype.openDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';
        dialogConfig.data = this.error;
        this.dialog.open(_submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SubmitErrorDialogComponent"], dialogConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_2__["SelfAppraisalSectiononeComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageAppraisalDialogComponent.prototype, "child", void 0);
    ManageAppraisalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-appraisal-dialog',
            template: __webpack_require__(/*! ./manage-appraisal-dialog.component.html */ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-appraisal-dialog.component.scss */ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__["AppraisalService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ManageAppraisalDialogComponent);
    return ManageAppraisalDialogComponent;
}());



/***/ }),

/***/ "./src/app/manage-appraisal/manage-appraisal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manage-appraisal/manage-appraisal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<button mat-stroked-button class=\"mat-primary notify\" (click)=\"openNotifyDialog()\">\r\n  <mat-icon>notifications</mat-icon>\r\n  Send Notification\r\n</button>\r\n\r\n<div class=\"table-container mat-elevation-z8\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"empid\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"10\"> Emp Id </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"10\">\r\n        <span class=\"mobile-label\">Id:</span>\r\n        {{userNameMap[row.userId].empId}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"username\" >\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"15\"> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"15\">\r\n        <span class=\"mobile-label\">User:</span>\r\n        {{userNameMap[row.userId].name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container matColumnDef=\"useremail\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"30\"> Email </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"30\">\r\n        <span class=\"mobile-label\">Email:</span>\r\n        {{userNameMap[row.userId].email}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Duration Column -->\r\n    <ng-container matColumnDef=\"duration\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"12\"> Appraisal Period </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"12\">\r\n        <span class=\"mobile-label\">Appraisal Period:</span>\r\n        {{userNameMap[row.userId].duration}} days\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Last Appraisal Column -->\r\n    <ng-container matColumnDef=\"lastappraisal\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"12\"> Last Appraisal Date </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"12\">\r\n        <span class=\"mobile-label\">Last Appraisal Date:</span>\r\n        {{userNameMap[row.userId].lastAppraisalDate | date}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"12\"> Status </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"12\">\r\n        <span class=\"mobile-label\">Status:</span>\r\n        <b [ngClass]=[row.status]>{{row.status}}</b>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"10\"> Action </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"10\">\r\n        <button mat-icon-button matTooltip=\"View Appraisal Cycle\" matTooltipPosition=\"before\" class=\"mat-primary\" (click)=\"openViewDialog(row)\">\r\n          <mat-icon>assessment</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"View Appraisal Cycle\" matTooltipPosition=\"before\" class=\"mat-primary\" (click)=\"openNotifyUserDialog(row)\">\r\n          <mat-icon>mail_outline</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50]\" [pageSize]=\"10\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/manage-appraisal/manage-appraisal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/manage-appraisal/manage-appraisal.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n  .table-container .mat-table {\n    overflow: auto;\n    max-height: 500px; }\n  .table-container .mat-table .mat-header-row {\n      min-height: 48px; }\n  .table-container .mat-table .mat-row {\n      min-height: 40px; }\n  .mobile-label {\n  display: none; }\n  .notify {\n  float: right;\n  margin: 20px 0 0; }\n  @media (max-width: 600px) {\n  .mobile-label {\n    width: 75px;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none !important; }\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 16px; }\n    .mat-row .mat-cell:first-of-type {\n      padding-left: 0; }\n    .mat-row::after {\n      min-height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFwcHJhaXNhbC9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcbWFuYWdlLWFwcHJhaXNhbFxcbWFuYWdlLWFwcHJhaXNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBSmxCO0lBTUksY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBUHJCO01BU00sZ0JBQWdCLEVBQUE7RUFUdEI7TUFZTSxnQkFBZ0IsRUFBQTtFQUl0QjtFQUNFLGFBQWEsRUFBQTtFQUVmO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0Usd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0lBSG5CO01BS0ksZUFBZSxFQUFBO0lBTG5CO01BUUksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtYXBwcmFpc2FsL21hbmFnZS1hcHByYWlzYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yb3cge1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9iaWxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ub3RpZnkge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDIwcHggMCAwO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2JpbGUtbGFiZWwge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LXJvdyB7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/manage-appraisal/manage-appraisal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-appraisal/manage-appraisal.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageAppraisalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAppraisalComponent", function() { return ManageAppraisalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _manage_appraisal_dialog_manage_appraisal_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manage-appraisal-dialog/manage-appraisal-dialog.component */ "./src/app/manage-appraisal-dialog/manage-appraisal-dialog.component.ts");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");











var ManageAppraisalComponent = /** @class */ (function () {
    function ManageAppraisalComponent(cycleSelectionService, pageHeaderService, userService, snackBar, appraisalService, dialog, authService) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.pageHeaderService = pageHeaderService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        this.dialog = dialog;
        this.authService = authService;
        this.displayedColumns = ['empid', 'username', 'useremail', 'duration', 'lastappraisal', 'status', 'action'];
        this.userNameMap = {};
        pageHeaderService.setTitle('Manage Appraisal');
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    ManageAppraisalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
                _this.authService.init();
            });
        }, 100);
    };
    ManageAppraisalComponent.prototype.initialize = function () {
        var _this = this;
        this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
            _this.loggedInUser = data;
            _this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
            _this.getAllUsers();
            _this.RenderDataTable();
        });
    };
    ManageAppraisalComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.cycleId = this.currentCycle.id;
        this.userIds = [];
        this.appraisalService.getAppraisal(this.cycleId, this.loggedInUser.id)
            .subscribe(function (response) {
            if (response.length > 0) {
                response.forEach((function (item) {
                    var obj = {
                        userId: ''
                    };
                    obj.userId = item.userId;
                    _this.userIds.push(item.userId);
                }));
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                _this.dataSource.data = response;
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
    };
    ManageAppraisalComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageAppraisalComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            if (users.length > 0) {
                users.forEach((function (item) {
                    _this.userNameMap[item.id] = item;
                }));
            }
        });
    };
    ManageAppraisalComponent.prototype.openViewDialog = function (row) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '80%';
        dialogConfig.data = {
            userStatus: row.status,
            currentUser: this.userNameMap[row.userId],
            userId: row.userId
        };
        var dialogRef = this.dialog.open(_manage_appraisal_dialog_manage_appraisal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ManageAppraisalDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.initialize();
            if (result) {
                _this.viewCycle(result.cycleId, result.extend);
            }
        });
    };
    ManageAppraisalComponent.prototype.viewCycle = function (cycleId, extend) {
        this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_9__["EXTEND_CYCLE"].success, null, {
            duration: 3000,
        });
    };
    ManageAppraisalComponent.prototype.openNotifyDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {
            to: 'Open Self Review',
            name: this.loggedInUser.name,
            subject: 'Subject',
            body: 'Body'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notify(result);
            }
        });
    };
    ManageAppraisalComponent.prototype.notify = function (result) {
        var _this = this;
        this.cycleId = this.currentCycle.id;
        this.appraisalService.notifyAppraisal(this.cycleId, result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_9__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    ManageAppraisalComponent.prototype.openNotifyUserDialog = function (row) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.height = '575px';
        dialogConfig.data = {
            to: this.userNameMap[row.userId].email,
            name: this.loggedInUser.name,
            subject: 'Subject',
            body: 'Body'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notifyUser(result);
            }
        });
    };
    ManageAppraisalComponent.prototype.notifyUser = function (result) {
        var _this = this;
        result.body = result.body + '\n\n' + result.signature;
        this.appraisalService.notifyUser(result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_9__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ManageAppraisalComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ManageAppraisalComponent.prototype, "sort", void 0);
    ManageAppraisalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-appraisal',
            template: __webpack_require__(/*! ./manage-appraisal.component.html */ "./src/app/manage-appraisal/manage-appraisal.component.html"),
            styles: [__webpack_require__(/*! ./manage-appraisal.component.scss */ "./src/app/manage-appraisal/manage-appraisal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_8__["PageHeaderService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__["AppraisalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], ManageAppraisalComponent);
    return ManageAppraisalComponent;
}());



/***/ }),

/***/ "./src/app/message.json":
/*!******************************!*\
  !*** ./src/app/message.json ***!
  \******************************/
/*! exports provided: OPT_OUT, SAVE_PROVIDERS, SUBMIT_PROVIDERS, WORKFLOW, APPROVE_SELECTION, REJECT_SELECTION, SELECT_REVIEWER, SAVE_FEEDBACK, SUBMIT_FEEDBACK, PAGE_HEADERS, PLACEHOLDERS, APPROVE_RESPONSE, REJECT_RESPONSE, UPDATE_ROLES, CREATE_CYCLE, ACTIVATE_CYCLE, EXTEND_CYCLE, DELETE_CYCLE, NOTIFY, LABELS, SET_GOALS, default */
/***/ (function(module) {

module.exports = {"OPT_OUT":{"error":"Error Encountered","success":"You have Opted out of review cycle"},"SAVE_PROVIDERS":{"error":"Error Encountered","success":"Feedback Providers saved successfully "},"SUBMIT_PROVIDERS":{"error":"Error Encountered","success":"Feedback Providers submitted successfully "},"WORKFLOW":{"NO_ACTIVE_CYCLE":"No Current Cycle in Progress","NO_FEEDBACK_TO_REVIEW":"Nothing to review now ","NO_FEEDBACK_PENDING":"There is no Feedback Pending","FEEDBACK_REVIEWED":"Response has been Reviewed","NO_RESPONSE_PROVIDED":"No Response still provided"},"APPROVE_SELECTION":{"error":"Error Encountered","success":"You Approved  Selection of Participants"},"REJECT_SELECTION":{"error":"Error Encountered","success":"You Rejected Selection of Participants"},"SELECT_REVIEWER":{"message":"Select a Person from Drop Down to provide Feedback"},"SAVE_FEEDBACK":{"error":"Error Encountered","success":"Feedback is Saved successfully"},"SUBMIT_FEEDBACK":{"error":"Error Encountered","success":"Feedback is submitted successfully"},"PAGE_HEADERS":{"PROVIDE_FEEDBACK":"Provide Feedback","VIEW_FEEDBACK":"View Response"},"PLACEHOLDERS":{"PROVIDE_FEEDBACK_SELECT":"Choose Person","PROVIDE_FEEDBACK_ANSWERS":"Enter Your answer here","VIEW_FEEDBACK_CYCLE_SELECT":"Choose Cycle","VIEW_FEEDBACK_SELECT":"Choose Person"},"APPROVE_RESPONSE":{"error":"Error Encountered","success":"You Approved  Response of Participants"},"REJECT_RESPONSE":{"error":"Error Encountered","success":"You Rejected Response of Participants"},"UPDATE_ROLES":{"error":"User role update failed","success":"Roles updated successfully"},"CREATE_CYCLE":{"error":"Cycle creation failed","success":"Cycle created successfully"},"ACTIVATE_CYCLE":{"error":"Cycle activation failed","success":"Cycle activated successfully"},"EXTEND_CYCLE":{"error":"Cycle extension failed","success":"Cycle extended successfully"},"DELETE_CYCLE":{"error":"Cycle deleteion failed","success":"Cycle deleted successfully"},"NOTIFY":{"error":"Notification failed","success":"Notification sent successfully","BODY_PLACEHOLDER":"Enter e-mail content here"},"LABELS":{"VIEW_RESPONSE_CYCLE_CHECkBOX":"Show feedback for previous cycle"},"SET_GOALS":{"success":"Goals saved successfully!","submit":"Goals submitted successfully!"}};

/***/ }),

/***/ "./src/app/model/user-type.ts":
/*!************************************!*\
  !*** ./src/app/model/user-type.ts ***!
  \************************************/
/*! exports provided: UserType, Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var UserType = /** @class */ (function () {
    function UserType() {
    }
    return UserType;
}());

var Roles = /** @class */ (function () {
    function Roles() {
    }
    return Roles;
}());



/***/ }),

/***/ "./src/app/notify-dialog/notify-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/notify-dialog/notify-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{this.dialogHeader}}</h2>\r\n\r\n<mat-dialog-content>\r\n  <form class=\"form\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"To\" value=\"\" [(ngModel)]=\"data.to\" [ngModelOptions]=\"{standalone: true}\" disabled=true>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Subject\" value=\"\" [(ngModel)]=\"this.data.subject\" [ngModelOptions]=\"{standalone: true}\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea style=\"width: 100%\" [(ngModel)]=\"this.data.body\" [ngModelOptions]=\"{standalone: true}\" matInput matTextareaAutosize matAutosizeMinRows=9 matAutosizeMaxRows=9 placeholder=\"Body\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea style=\"width: 100%\" [(ngModel)]=\"this.data.signature\" [ngModelOptions]=\"{standalone: true}\" matInput matTextareaAutosize matAutosizeMinRows=2 matAutosizeMaxRows=3 placeholder=\"Signature\"></textarea>\r\n    </mat-form-field>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n  <button type=\"button\" mat-stroked-button mat-button [mat-dialog-close]=\"data\" >\r\n    Send\r\n  </button>\r\n  <button type=\"button\" mat-stroked-button mat-button [mat-dialog-close]>\r\n    Cancel\r\n  </button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/notify-dialog/notify-dialog.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notify-dialog/notify-dialog.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin: 0 0 10px; }\n\n.mat-dialog-container {\n  padding-bottom: 10px; }\n\n.mat-dialog-content {\n  overflow: auto;\n  width: 100%;\n  max-height: -webkit-max-content;\n  max-height: -moz-max-content;\n  max-height: max-content; }\n\n.form {\n  min-width: 150px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.mat-form-field-infix {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZ5LWRpYWxvZy9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcbm90aWZ5LWRpYWxvZ1xcbm90aWZ5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsK0JBQXVCO0VBQXZCLDRCQUF1QjtFQUF2Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZ5LWRpYWxvZy9ub3RpZnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG4uZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notify-dialog/notify-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notify-dialog/notify-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: NotifyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyDialogComponent", function() { return NotifyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);




var NotifyDialogComponent = /** @class */ (function () {
    function NotifyDialogComponent(data) {
        this.data = data;
        this.dialogHeader = 'Send Notification';
        this.placeholder_body = _message_json__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"].BODY_PLACEHOLDER;
    }
    NotifyDialogComponent.prototype.ngOnInit = function () {
        this.data.subject = this.data.subject;
        this.data.body = this.data.body;
        this.data.signature = 'Regards,\n' + this.data.name;
    };
    NotifyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify-dialog',
            template: __webpack_require__(/*! ./notify-dialog.component.html */ "./src/app/notify-dialog/notify-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notify-dialog.component.scss */ "./src/app/notify-dialog/notify-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NotifyDialogComponent);
    return NotifyDialogComponent;
}());



/***/ }),

/***/ "./src/app/provide-feedback/provide-feedback.component.html":
/*!******************************************************************!*\
  !*** ./src/app/provide-feedback/provide-feedback.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"receiverIds.length !== 0\">\r\n\r\n  <mat-form-field style=\"width: 70%\">\r\n    <mat-select #MatSelect placeholder=\"{{placeholder_select}}\" [(ngModel)]=\"selectedValue\"\r\n                (ngModelChange)=\"getAnswers(selectedValue)\">\r\n      <mat-option #MatOption *ngFor=\"let receiver of receiverIds; let i = index;\" [value]=\"receiver\">\r\n        {{usersJsonObj[receiver]}}\r\n      </mat-option>\r\n    </mat-select>\r\n\r\n  </mat-form-field>\r\n\r\n  <form class=\"response-form\">\r\n    <div *ngFor=\"let question of Questions; let i = index; trackBy:trackByIndex;\">\r\n      <mat-label>{{question}}</mat-label>\r\n\r\n      <mat-form-field class=\"response-full-width\">\r\n        <textarea style=\"width: 100%\" [(ngModel)]=\"answers[i]\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=3\r\n                  placeholder=\"{{placeholder_answer}}\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n\r\n  <p>\r\n    <button type=\"button\" mat-stroked-button (click)=\"save('Save',selectedValue)\"\r\n            class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>create</mat-icon>\r\n      Save\r\n    </button>\r\n    &nbsp;\r\n    <button type=\"button\" mat-stroked-button (click)=\"submitResponse('Submit',selectedValue)\"\r\n            class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>done</mat-icon>\r\n      Submit\r\n    </button>\r\n    &nbsp;\r\n    <button *ngIf=\"receiverIds.length > 1\" type=\"button\" mat-stroked-button\r\n            (click)=\"skip()\" class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>skip_next</mat-icon>\r\n      Skip\r\n    </button>\r\n\r\n  </p>\r\n\r\n</div>\r\n<div *ngIf=\"receiverIds.length === 0\">\r\n  <h3>{{message}}</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/provide-feedback/provide-feedback.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/provide-feedback/provide-feedback.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".response-form {\n  min-width: 150px;\n  width: 70%; }\n\n.response-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZS1mZWVkYmFjay9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxccHJvdmlkZS1mZWVkYmFja1xccHJvdmlkZS1mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlLWZlZWRiYWNrL3Byb3ZpZGUtZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2UtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmVzcG9uc2UtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/provide-feedback/provide-feedback.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/provide-feedback/provide-feedback.component.ts ***!
  \****************************************************************/
/*! exports provided: ProvideFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideFeedbackComponent", function() { return ProvideFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/feedback.service */ "./src/app/core/services/feedback.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/cycle.service */ "./src/app/core/services/cycle.service.ts");
/* harmony import */ var _provide_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provide-feedback.service */ "./src/app/provide-feedback/provide-feedback.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var ProvideFeedbackComponent = /** @class */ (function () {
    function ProvideFeedbackComponent(pageHeaderService, cycleSelectionService, feedbackService, userService, cycleService, provideFeedbackService, snackBar) {
        var _this = this;
        this.pageHeaderService = pageHeaderService;
        this.cycleSelectionService = cycleSelectionService;
        this.feedbackService = feedbackService;
        this.userService = userService;
        this.cycleService = cycleService;
        this.provideFeedbackService = provideFeedbackService;
        this.snackBar = snackBar;
        this.usersJsonObj = {};
        this.receiverJsonObj = {};
        this.receiverIds = [];
        this.Questions = [];
        this.answers = [];
        this.message = _message_json__WEBPACK_IMPORTED_MODULE_8__["WORKFLOW"].NO_FEEDBACK_PENDING;
        this.placeholder_select = _message_json__WEBPACK_IMPORTED_MODULE_8__["PLACEHOLDERS"].PROVIDE_FEEDBACK_SELECT;
        this.placeholder_answer = _message_json__WEBPACK_IMPORTED_MODULE_8__["PLACEHOLDERS"].PROVIDE_FEEDBACK_ANSWERS;
        pageHeaderService.setTitle(_message_json__WEBPACK_IMPORTED_MODULE_8__["PAGE_HEADERS"].PROVIDE_FEEDBACK);
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    ProvideFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        //After loggin for the first time: When user navigates to any page from home page, the initialization of current and active cycles does not complete until ngOnInit on the second page finishes. So, timeout is set for the first navigation away from home component.
        setTimeout(function () {
            _this.getAllUsers();
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    ProvideFeedbackComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            if (users.length > 0) {
                users.forEach((function (item) {
                    _this.usersJsonObj[item.id] = item.name;
                }));
            }
        });
    };
    ProvideFeedbackComponent.prototype.initialize = function () {
        this.receiverJsonObj = {};
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.initializeReceiver();
        this.getCycle();
    };
    ProvideFeedbackComponent.prototype.initializeReceiver = function () {
        var _this = this;
        this.receiverIds = [];
        var providerId = this.loggedInUser.id;
        this.feedbackService.getReceivers(this.currentCycle.id, providerId).subscribe(function (response) {
            if (response.length > 0) {
                response.forEach((function (item) {
                    if (item.status === 'PENDING_RESPONSE') {
                        if (item.responses !== null) {
                            _this.receiverJsonObj[item.receiverId] = item.responses;
                        }
                        else {
                            _this.receiverJsonObj[item.receiverId] = [];
                        }
                    }
                }));
            }
            _this.receiverIds = Object.keys(_this.receiverJsonObj);
            _this.selectedValue = _this.receiverIds[0];
            _this.answers = _this.receiverJsonObj[_this.selectedValue];
        });
    };
    ProvideFeedbackComponent.prototype.getCycle = function () {
        var _this = this;
        this.cycleService.getCyclebyId(this.currentCycle.id).subscribe(function (response) {
            _this.Questions = response.questions;
        });
    };
    ProvideFeedbackComponent.prototype.getAnswers = function (receiver) {
        this.selectedValue = receiver;
        this.answers = this.receiverJsonObj[receiver];
        console.log(this.answers);
    };
    ProvideFeedbackComponent.prototype.save = function (action, selectedValue) {
        var _this = this;
        var jsonObj = {
            'receiverId': selectedValue,
            'providerId': this.loggedInUser.id,
            'responses': this.answers
        };
        this.feedbackService.saveFeedback(jsonObj, this.currentCycle.id).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_8__["SAVE_FEEDBACK"].success, action, {
                duration: 3000,
            });
        });
    };
    ProvideFeedbackComponent.prototype.submitResponse = function (action, selectedValue) {
        var _this = this;
        this.save('', selectedValue);
        var jsonObj = {
            'receiverId': selectedValue,
            'providerId': this.loggedInUser.id,
        };
        this.provideFeedbackService.submitFeedback(jsonObj, this.currentCycle.id).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_8__["SUBMIT_FEEDBACK"].success, action, {
                duration: 3000,
            });
        });
        var index = this.receiverIds.indexOf(this.selectedValue);
        this.receiverIds.splice(index, 1);
        if (index < this.receiverIds.length - 1) {
            this.selectedValue = this.receiverIds[index];
            this.getAnswers(this.selectedValue);
        }
        else {
            this.selectedValue = this.receiverIds[0];
            this.getAnswers(this.selectedValue);
        }
    };
    ProvideFeedbackComponent.prototype.skip = function () {
        var index = this.receiverIds.indexOf(this.selectedValue);
        if (index < this.receiverIds.length - 1) {
            this.selectedValue = this.receiverIds[index + 1];
            this.getAnswers(this.selectedValue);
        }
        else {
            this.selectedValue = this.receiverIds[0];
            this.getAnswers(this.selectedValue);
        }
    };
    ProvideFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provide-feedback',
            template: __webpack_require__(/*! ./provide-feedback.component.html */ "./src/app/provide-feedback/provide-feedback.component.html"),
            styles: [__webpack_require__(/*! ./provide-feedback.component.scss */ "./src/app/provide-feedback/provide-feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"], _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"],
            _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_6__["CycleService"],
            _provide_feedback_service__WEBPACK_IMPORTED_MODULE_7__["ProvideFeedbackService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], ProvideFeedbackComponent);
    return ProvideFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/provide-feedback/provide-feedback.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/provide-feedback/provide-feedback.service.ts ***!
  \**************************************************************/
/*! exports provided: ProvideFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideFeedbackService", function() { return ProvideFeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProvideFeedbackService = /** @class */ (function () {
    function ProvideFeedbackService(http) {
        this.http = http;
    }
    ProvideFeedbackService.prototype.submitFeedback = function (jsonObj, cycleId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/submitResponse';
        return this.http.post(url, jsonObj, httpOptions);
    };
    ProvideFeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProvideFeedbackService);
    return ProvideFeedbackService;
}());



/***/ }),

/***/ "./src/app/rating-scale/rating-scale.component.html":
/*!**********************************************************!*\
  !*** ./src/app/rating-scale/rating-scale.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"table-container mat-elevation-z8\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- Rating Column -->\r\n    <ng-container matColumnDef=\"rating\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> rating </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <span class=\"mobile-label\">rating:</span>\r\n        {{row.rating}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- appraisalCriteria Column -->\r\n    <ng-container matColumnDef=\"appraisalCriteria\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Appraisee criteria </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <span class=\"mobile-label\">appraisalCriteria:</span>\r\n        {{row.appraisalCriteria}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- reviewerCriteria Column -->\r\n    <ng-container matColumnDef=\"reviewerCriteria\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"{'hide': !authService.isReviewer}\"> Reviewer criteria </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" [ngClass]=\"{'hide': !authService.isReviewer}\">\r\n        <span class=\"mobile-label\">Reviewer criteria:</span>\r\n        {{row.reviewerCriteria}}\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>"

/***/ }),

/***/ "./src/app/rating-scale/rating-scale.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/rating-scale/rating-scale.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  margin-bottom: 16px; }\n\n.table-container .mat-table {\n    overflow: auto; }\n\n.table-container .mat-table .mat-header-row {\n      min-height: 48px; }\n\n.table-container .mat-table .mat-header-row .hide {\n        display: none; }\n\n.table-container .mat-table .mat-row {\n      min-height: 40px; }\n\n.table-container .mat-table .mat-row mat-cell {\n        padding: 5px 10px;\n        line-height: 18px;\n        font-size: 13px; }\n\n.table-container .mat-table .mat-row mat-cell.hide {\n          display: none; }\n\n.mobile-label {\n  display: none; }\n\n.notify {\n  float: right;\n  margin: 20px 0 0; }\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 75px;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none !important; }\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 16px; }\n    .mat-row .mat-cell:first-of-type {\n      padding-left: 0; }\n    .mat-row::after {\n      min-height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nLXNjYWxlL0M6XFxwcm9qZWN0XFx3b3Jrc3BhY2VcXDIwMTkwOVxcYXBwcmFpc2FsL3NyY1xcYXBwXFxyYXRpbmctc2NhbGVcXHJhdGluZy1zY2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUpyQjtJQU1JLGNBQWMsRUFBQTs7QUFObEI7TUFRTSxnQkFBZ0IsRUFBQTs7QUFSdEI7UUFVUSxhQUFhLEVBQUE7O0FBVnJCO01Bd0NNLGdCQUFnQixFQUFBOztBQXhDdEI7UUEwQ1EsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7O0FBNUN2QjtVQThDVSxhQUFhLEVBQUE7O0FBTXZCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtJQUhuQjtNQUtJLGVBQWUsRUFBQTtJQUxuQjtNQVFJLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmF0aW5nLXNjYWxlL3JhdGluZy1zY2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIC5oaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIC5tYXQtY29sdW1uLWFwcHJhaXNhbENyaXRlcmlhIHtcclxuICAgICAgLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgICAgLy8gICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgLy8gICBmbGV4OiAwIDAgMjglICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIC8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAvLyAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIC8vICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAgIC8vICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgICAvLyAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgICAgLy8gICBoeXBoZW5zOiBhdXRvO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC5tYXQtY29sdW1uLXJldmlld2VyQ3JpdGVyaWEge1xyXG4gICAgICAvLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIGZsZXg6IDAgMCAyNSUgIWltcG9ydGFudDtcclxuICAgICAgLy8gICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIC8vICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgLy8gICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgICAgLy8gICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAgIC8vICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgICAvLyAgIGh5cGhlbnM6IGF1dG87XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIC5tYXQtcm93IHtcclxuICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgbWF0LWNlbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAmLmhpZGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vYmlsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubm90aWZ5IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9iaWxlLWxhYmVsIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1yb3cgeyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/rating-scale/rating-scale.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rating-scale/rating-scale.component.ts ***!
  \********************************************************/
/*! exports provided: RatingScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingScaleComponent", function() { return RatingScaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _rating_scale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rating-scale.service */ "./src/app/rating-scale/rating-scale.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var RatingScaleComponent = /** @class */ (function () {
    function RatingScaleComponent(ratingScaleService, pageHeaderService, authService) {
        this.ratingScaleService = ratingScaleService;
        this.pageHeaderService = pageHeaderService;
        this.authService = authService;
        this.displayedColumns = ['rating', 'appraisalCriteria', 'reviewerCriteria'];
        pageHeaderService.setTitle('Rating Definition');
    }
    RatingScaleComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.authService.init();
    };
    RatingScaleComponent.prototype.initialize = function () {
        var _this = this;
        this.ratingScaleService.getDefinitions().subscribe(function (response) {
            _this.data = response;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
            _this.dataSource.data = response;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], RatingScaleComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], RatingScaleComponent.prototype, "sort", void 0);
    RatingScaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating-scale',
            template: __webpack_require__(/*! ./rating-scale.component.html */ "./src/app/rating-scale/rating-scale.component.html"),
            styles: [__webpack_require__(/*! ./rating-scale.component.scss */ "./src/app/rating-scale/rating-scale.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rating_scale_service__WEBPACK_IMPORTED_MODULE_4__["RatingScaleService"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RatingScaleComponent);
    return RatingScaleComponent;
}());



/***/ }),

/***/ "./src/app/rating-scale/rating-scale.service.ts":
/*!******************************************************!*\
  !*** ./src/app/rating-scale/rating-scale.service.ts ***!
  \******************************************************/
/*! exports provided: RatingScaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingScaleService", function() { return RatingScaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RatingScaleService = /** @class */ (function () {
    function RatingScaleService(http) {
        this.http = http;
    }
    RatingScaleService.prototype.getDefinitions = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/ratingScale');
    };
    RatingScaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RatingScaleService);
    return RatingScaleService;
}());



/***/ }),

/***/ "./src/app/review-response/review-response.component.html":
/*!****************************************************************!*\
  !*** ./src/app/review-response/review-response.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"receiverIds.length !== 0\">\r\n  <mat-form-field style=\"width: 100%\">\r\n    <mat-select #MatSelect placeholder=\"Feedback Receiver\" [(ngModel)]=\"selectedValue\"\r\n                (ngModelChange)=\"loadFeedback(selectedValue)\">\r\n      <mat-option #MatOption *ngFor=\"let receiverId of receiverIds; let x = index; trackBy:trackByIndex;\" [value]=\"receiverId\">\r\n        {{userNameMap[receiverId]}}\r\n      </mat-option>\r\n    </mat-select>\r\n\r\n  </mat-form-field>\r\n  <div>\r\n    <mat-accordion>\r\n      <mat-expansion-panel #mep=\"matExpansionPanel\"  *ngFor=\"let providerId  of providerIds; let i = index;\" (opened)=\"loadAnswers(providerId)\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title style=\"width: 70%\">\r\n            {{userNameMap[providerId]}}\r\n          </mat-panel-title>\r\n          <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\">\r\n            {{statusJson[status[i]]}}\r\n          </mat-panel-description>\r\n\r\n        </mat-expansion-panel-header>\r\n\r\n        <form class=\"response-form\" *ngIf=\"status[i] === 'REVIEW_RESPONSE'\">\r\n          <div *ngFor=\"let question of questions; let i = index; trackBy:trackByIndex;\">\r\n            <mat-label>{{question}}</mat-label>\r\n            <p class=\"answer\">{{answers[i]}}</p>\r\n            <hr>\r\n          </div>\r\n        </form>\r\n        <div *ngIf=\"status[i] === 'PENDING_RESPONSE'\">\r\n          <h3>{{message_response_pending}}</h3>\r\n        </div>\r\n        <div *ngIf=\"status[i] === 'COMPLETED'\">\r\n          <h3>{{message_response_approved}}</h3>\r\n        </div>\r\n\r\n        <mat-action-row *ngIf=\"status[i] === 'REVIEW_RESPONSE'\">\r\n          <button type=\"button\" mat-stroked-button (click)=\"approve('Approve')\"\r\n                  class=\"btn btn-outline-primary sharp\">\r\n            <mat-icon>done</mat-icon>\r\n            Approve\r\n          </button>\r\n          &nbsp;\r\n          <button type=\"button\" mat-stroked-button (click)=\"openDialog()\"\r\n                  class=\"btn btn-outline-primary sharp\" color=\"warn\">\r\n            <mat-icon>not_interested</mat-icon>\r\n            Reject\r\n          </button>\r\n        </mat-action-row>\r\n        <mat-action-row *ngIf=\"status[i] === 'PENDING_RESPONSE'\">\r\n          <button type=\"button\" mat-stroked-button (click)=\"reminder('Reminder Send')\"\r\n                  class=\"btn btn-outline-primary sharp\">\r\n            <mat-icon>done</mat-icon>\r\n            Send Reminder\r\n          </button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n\r\n  <p *ngIf=\"receiverIds.length > 1\">\r\n    <button [disabled]=\"index < 1\" type=\"button\" mat-stroked-button\r\n            (click)=\"previous()\" class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>skip_previous</mat-icon>\r\n      Previous\r\n    </button>\r\n    &nbsp;\r\n    <button [disabled]=\"index === (receiverIds.length-1)\" type=\"button\" mat-stroked-button\r\n            (click)=\"next()\" class=\"btn btn-outline-primary sharp\">\r\n      Next\r\n      <mat-icon>skip_next</mat-icon>\r\n    </button>\r\n  </p>\r\n</div>\r\n<h3 *ngIf=\"receiverIds.length === 0\">{{message_no_action}}</h3>\r\n"

/***/ }),

/***/ "./src/app/review-response/review-response.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/review-response/review-response.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LXJlc3BvbnNlL0M6XFxwcm9qZWN0XFx3b3Jrc3BhY2VcXDIwMTkwOVxcYXBwcmFpc2FsL3NyY1xcYXBwXFxyZXZpZXctcmVzcG9uc2VcXHJldmlldy1yZXNwb25zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1yZXNwb25zZS9yZXZpZXctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2Vye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/review-response/review-response.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/review-response/review-response.component.ts ***!
  \**************************************************************/
/*! exports provided: ReviewResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewResponseComponent", function() { return ReviewResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/feedback.service */ "./src/app/core/services/feedback.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_components_text_input_dialog_text_input_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/components/text-input-dialog/text-input-dialog.component */ "./src/app/core/components/text-input-dialog/text-input-dialog.component.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services/cycle.service */ "./src/app/core/services/cycle.service.ts");
/* harmony import */ var _review_response_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review.response.service */ "./src/app/review-response/review.response.service.ts");












var ReviewResponseComponent = /** @class */ (function () {
    function ReviewResponseComponent(cycleSelectionService, pageHeaderService, feedbackService, userService, snackBar, dialog, cycleService, reviewResponseService) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.pageHeaderService = pageHeaderService;
        this.feedbackService = feedbackService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.cycleService = cycleService;
        this.reviewResponseService = reviewResponseService;
        this.receiverIds = [];
        this.providerIds = [];
        this.receiverToProviderMap = {};
        this.userNameMap = {};
        this.answers = [];
        this.feedbackList = [];
        this.questions = [];
        this.status = [];
        this.index = 0;
        this.message_no_action = _message_json__WEBPACK_IMPORTED_MODULE_8__["WORKFLOW"].NO_ACTIVE_CYCLE;
        this.message_response_approved = _message_json__WEBPACK_IMPORTED_MODULE_8__["WORKFLOW"].FEEDBACK_REVIEWED;
        this.message_response_pending = _message_json__WEBPACK_IMPORTED_MODULE_8__["WORKFLOW"].NO_RESPONSE_PROVIDED;
        this.statusJson = {
            'REVIEW_RESPONSE': 'Ready for review',
            'PENDING_RESPONSE': 'Waiting for response',
            'COMPLETED': 'Review Done'
        };
        pageHeaderService.setTitle('Review Selection');
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    ReviewResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //After loggin for the first time: When user navigates to any page from home page, the initialization of current and active cycles does not complete until ngOnInit on the second page finishes. So, timeout is set for the first navigation away from home component.
        setTimeout(function () {
            _this.initializeAllUsersList();
            _this.initialize();
            _this.loadQuestions();
        }, 100);
    };
    ReviewResponseComponent.prototype.initialize = function () {
        this.receiverToProviderMap = {};
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.initializeReceiver();
    };
    ReviewResponseComponent.prototype.initializeAllUsersList = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            if (users.length > 0) {
                users.forEach((function (item) {
                    _this.userNameMap[item.id] = item.name;
                }));
            }
        });
    };
    ReviewResponseComponent.prototype.initializeReceiver = function () {
        var _this = this;
        this.receiverIds = [];
        this.providerIds = [];
        this.feedbackService.getCycle(this.currentCycle.id).subscribe(function (response) {
            if (response.length > 0) {
                // console.log(response);
                response.forEach((function (item) {
                    if (item.receiverId !== null) {
                        if (_this.receiverToProviderMap[item.receiverId] === undefined) {
                            _this.receiverToProviderMap[item.receiverId] = [item.providerId];
                        }
                        else {
                            _this.receiverToProviderMap[item.receiverId].push(item.providerId);
                        }
                    }
                }));
            }
            _this.receiverIds = Object.keys(_this.receiverToProviderMap);
            _this.selectedValue = _this.receiverIds[0];
            _this.providerIds = _this.receiverToProviderMap[_this.selectedValue];
            _this.loadFeedback(_this.selectedValue);
        });
    };
    ReviewResponseComponent.prototype.loadQuestions = function () {
        var _this = this;
        this.cycleService.getCyclebyId(this.currentCycle.id).subscribe(function (response) {
            _this.questions = response.questions;
        });
    };
    ReviewResponseComponent.prototype.loadFeedback = function (receiver) {
        var _this = this;
        this.feedbackList = [];
        this.status = [];
        this.selectedValue = receiver;
        this.providerIds = this.receiverToProviderMap[receiver];
        this.feedbackService.getProviders(this.currentCycle.id, receiver).subscribe(function (result) {
            result.forEach((function (item) {
                var obj = {
                    providerId: '',
                    responses: [],
                    status: ''
                };
                obj.providerId = item.providerId;
                obj.responses = item.responses;
                obj.status = item.status;
                _this.feedbackList.push(obj);
                _this.status.push(item.status);
            }));
        });
    };
    ReviewResponseComponent.prototype.loadAnswers = function (providerId) {
        var _this = this;
        this.selectedProviderId = providerId;
        this.answers = [];
        this.feedbackList.forEach(function (item) {
            if (item.providerId === providerId) {
                if (item.responses !== null) {
                    _this.answers = item.responses;
                    console.log(_this.answers);
                }
                else {
                    _this.answers = [];
                }
            }
        });
    };
    ReviewResponseComponent.prototype.next = function () {
        this.index = this.receiverIds.indexOf(this.selectedValue);
        this.index = this.index + 1;
        if (this.index <= this.receiverIds.length - 1) {
            this.selectedValue = this.receiverIds[this.index];
            this.loadFeedback(this.selectedValue);
        }
    };
    ReviewResponseComponent.prototype.previous = function () {
        this.index = this.receiverIds.indexOf(this.selectedValue);
        this.index = this.index - 1;
        if (this.index >= 0) {
            this.selectedValue = this.receiverIds[this.index];
            this.loadFeedback(this.selectedValue);
        }
    };
    ReviewResponseComponent.prototype.approve = function (action) {
        var _this = this;
        var jsonObj = {
            'receiverId': this.selectedValue,
            'providerId': this.selectedProviderId
        };
        this.reviewResponseService.approve(this.currentCycle.id, jsonObj).subscribe(function (response) {
            _this.loadFeedback(_this.selectedValue);
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_8__["APPROVE_RESPONSE"].success, action, {
                duration: 3000,
            });
        });
    };
    ReviewResponseComponent.prototype.reject = function (action, suggestion) {
        var _this = this;
        var jsonObj = {
            'receiverId': this.selectedValue,
            'providerId': this.selectedProviderId,
            'suggestion': suggestion
        };
        this.reviewResponseService.reject(this.currentCycle.id, jsonObj).subscribe(function (response) {
            _this.loadFeedback(_this.selectedValue);
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_8__["REJECT_RESPONSE"].success, action, {
                duration: 3000,
            });
        });
    };
    ReviewResponseComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '500px';
        dialogConfig.data = {
            title: 'Message to Participant',
            placeholder: 'Suggestions to change response',
        };
        var dialogRef = this.dialog.open(_core_components_text_input_dialog_text_input_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TextInputDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.reject('reject', result.suggestion);
            }
        });
    };
    ReviewResponseComponent.prototype.reminder = function (action) {
        this.snackBar.open('', action, {
            duration: 3000,
        });
    };
    ReviewResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-response',
            template: __webpack_require__(/*! ./review-response.component.html */ "./src/app/review-response/review-response.component.html"),
            styles: [__webpack_require__(/*! ./review-response.component.scss */ "./src/app/review-response/review-response.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"], _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__["PageHeaderService"],
            _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_9__["CycleService"],
            _review_response_service__WEBPACK_IMPORTED_MODULE_10__["ReviewResponseService"]])
    ], ReviewResponseComponent);
    return ReviewResponseComponent;
}());



/***/ }),

/***/ "./src/app/review-response/review.response.service.ts":
/*!************************************************************!*\
  !*** ./src/app/review-response/review.response.service.ts ***!
  \************************************************************/
/*! exports provided: ReviewResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewResponseService", function() { return ReviewResponseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ReviewResponseService = /** @class */ (function () {
    function ReviewResponseService(http) {
        this.http = http;
    }
    ReviewResponseService.prototype.approve = function (cycleId, jsonObj) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/approveFeedback';
        return this.http.post(url, jsonObj, httpOptions);
    };
    ReviewResponseService.prototype.reject = function (cycleId, jsonObj) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/feedback/cycle/' + cycleId + '/rejectFeedback';
        return this.http.post(url, jsonObj, httpOptions);
    };
    ReviewResponseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReviewResponseService);
    return ReviewResponseService;
}());



/***/ }),

/***/ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"appraisalVisibility === 'EDITABLE'\">\r\n  <mat-form-field class=\"response-full-width\">\r\n        <textarea (focusout)=\"save()\" [(ngModel)]=\"sectionResponse\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=10 data-ng-minLength=\"10\"\r\n                  placeholder=\"Additional Feedback\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"appraisalVisibility === 'READ-ONLY'\">\r\n  <mat-form-field class=\"response-full-width\">\r\n        <textarea [disabled]=\"true\" (focusout)=\"save()\" [(ngModel)]=\"sectionResponse\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=10 data-ng-minLength=\"10\"\r\n                  placeholder=\"Additional Feedback\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".response-form {\n  min-width: 150px;\n  width: 70%; }\n\n.response-full-width {\n  width: 100%; }\n\n.response {\n  margin-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZi1hcHByYWlzYWwtc2VjdGlvbmZpdmUvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXHNlbGYtYXBwcmFpc2FsLXNlY3Rpb25maXZlXFxzZWxmLWFwcHJhaXNhbC1zZWN0aW9uZml2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxmLWFwcHJhaXNhbC1zZWN0aW9uZml2ZS9zZWxmLWFwcHJhaXNhbC1zZWN0aW9uZml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5yZXNwb25zZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmVzcG9uc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelfAppraisalSectionfiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfAppraisalSectionfiveComponent", function() { return SelfAppraisalSectionfiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _model_user_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user-type */ "./src/app/model/user-type.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SelfAppraisalSectionfiveComponent = /** @class */ (function () {
    function SelfAppraisalSectionfiveComponent(cycleSelectionService, appraisalService, userService, snackBar) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.snackBar = snackBar;
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SelfAppraisalSectionfiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.initialize();
            });
        }, 100);
    };
    SelfAppraisalSectionfiveComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.loadAdditionalComment();
    };
    SelfAppraisalSectionfiveComponent.prototype.loadAdditionalComment = function () {
        var _this = this;
        this.appraisalService.getSectionfivebyUserId(this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            if (response) {
                _this.sectionResponse = response.sectionfive;
            }
        });
    };
    SelfAppraisalSectionfiveComponent.prototype.save = function () {
        var _this = this;
        var jsonObj = {
            'sectionfive': this.sectionResponse
        };
        this.appraisalService.saveSectionFiveFeedback(jsonObj, this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.snackBar.open('Response Auto Saved', '', {
                duration: 3000,
                panelClass: ['custom-auto-save']
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_user_type__WEBPACK_IMPORTED_MODULE_4__["UserType"])
    ], SelfAppraisalSectionfiveComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectionfiveComponent.prototype, "appraisalVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectionfiveComponent.prototype, "reviewerVisibility", void 0);
    SelfAppraisalSectionfiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-self-appraisal-sectionfive',
            template: __webpack_require__(/*! ./self-appraisal-sectionfive.component.html */ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.html"),
            styles: [__webpack_require__(/*! ./self-appraisal-sectionfive.component.scss */ "./src/app/self-appraisal-sectionfive/self-appraisal-sectionfive.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__["AppraisalService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SelfAppraisalSectionfiveComponent);
    return SelfAppraisalSectionfiveComponent;
}());



/***/ }),

/***/ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"appraisalVisibility === 'EDITABLE'\">\r\n  <mat-form-field class=\"response-full-width\">\r\n        <textarea (focusout)=\"save()\" [(ngModel)]=\"sectionResponse\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=10 data-ng-minLength=\"10\"\r\n                  placeholder=\"Additional Feedback\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div *ngIf=\"appraisalVisibility === 'READ-ONLY'\">\r\n  <mat-form-field class=\"response-full-width\">\r\n        <textarea [disabled]=\"true\" (focusout)=\"save()\" [(ngModel)]=\"sectionResponse\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=10 data-ng-minLength=\"10\"\r\n                  placeholder=\"Additional Feedback\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".response-form {\n  min-width: 150px;\n  width: 70%; }\n\n.response-full-width {\n  width: 100%; }\n\n.response {\n  margin-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZi1hcHByYWlzYWwtc2VjdGlvbmZvdXIvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXHNlbGYtYXBwcmFpc2FsLXNlY3Rpb25mb3VyXFxzZWxmLWFwcHJhaXNhbC1zZWN0aW9uZm91ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxmLWFwcHJhaXNhbC1zZWN0aW9uZm91ci9zZWxmLWFwcHJhaXNhbC1zZWN0aW9uZm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5yZXNwb25zZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmVzcG9uc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelfAppraisalSectionfourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfAppraisalSectionfourComponent", function() { return SelfAppraisalSectionfourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _model_user_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user-type */ "./src/app/model/user-type.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SelfAppraisalSectionfourComponent = /** @class */ (function () {
    function SelfAppraisalSectionfourComponent(cycleSelectionService, appraisalService, userService, snackBar) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.snackBar = snackBar;
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SelfAppraisalSectionfourComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    SelfAppraisalSectionfourComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        if (!this.currentUser) {
            this.currentUser = this.loggedInUser;
        }
        this.loadAdditionalComment();
    };
    SelfAppraisalSectionfourComponent.prototype.loadAdditionalComment = function () {
        var _this = this;
        this.appraisalService.getSectionfourbyUserId(this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            if (response) {
                _this.sectionResponse = response.sectionfour;
            }
        });
    };
    SelfAppraisalSectionfourComponent.prototype.save = function () {
        var _this = this;
        var jsonObj = {
            'sectionfour': this.sectionResponse
        };
        this.appraisalService.saveSectionFourFeedback(jsonObj, this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.snackBar.open('Response Auto Saved', '', {
                duration: 3000,
                panelClass: ['custom-auto-save']
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_user_type__WEBPACK_IMPORTED_MODULE_4__["UserType"])
    ], SelfAppraisalSectionfourComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectionfourComponent.prototype, "appraisalVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectionfourComponent.prototype, "reviewerVisibility", void 0);
    SelfAppraisalSectionfourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-self-appraisal-sectionfour',
            template: __webpack_require__(/*! ./self-appraisal-sectionfour.component.html */ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.html"),
            styles: [__webpack_require__(/*! ./self-appraisal-sectionfour.component.scss */ "./src/app/self-appraisal-sectionfour/self-appraisal-sectionfour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__["AppraisalService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SelfAppraisalSectionfourComponent);
    return SelfAppraisalSectionfourComponent;
}());



/***/ }),

/***/ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"appraisalVisibility === 'EDITABLE'\">\r\n  <li>Ratings in each category is mandatory</li>\r\n  <li>Comments should be more than 50 characters long</li>\r\n</ul>\r\n<div *ngFor=\"let sectionResponse of sectionResponses; let i = index; trackBy:trackByIndex;\">\r\n  <h3>{{sectionResponse.group}}</h3>\r\n  <div class=\"response\" *ngFor=\" let response of sectionResponse.response; let x = index; trackBy:trackByIndex;\">\r\n\r\n    <!-- CREATE/EDIT SELF GOALS -->\r\n    <div *ngIf=\"showSetGoals\" [ngClass]=\"{'selfAppraisalEditable': showSetGoals }\">\r\n      <div>\r\n        <h4 style=\"display: inline-block\">{{response.criteria}}</h4>\r\n        <button class=\"score\" *ngIf=\"(reviewerVisibility === 'EDITABLE' || reviewerVisibility === 'READ-ONLY') && score[i][x]\"\r\n                type=\"button\" mat-stroked-button mat-button [disabled]=\"true\">\r\n          <mat-icon color=\"accent\">check_circle</mat-icon>\r\n          {{score[i][x]}}\r\n        </button>\r\n        <div style=\"float: right\">\r\n          <mat-label>Weightage:</mat-label>\r\n          {{response.weightage * 100 | number : '1.1-1'}}%\r\n        </div>\r\n        <div class=\"description\"><b>{{response.description}}</b></div>\r\n      </div>\r\n      <div style=\"display: inline-block\"><mat-label>Set Self Goal:</mat-label></div>\r\n      <div class=\"set-goals\">\r\n        <mat-form-field class=\"response-full-width\">\r\n        <textarea (focusout)=\"save(sectionResponses, 'Saved')\"\r\n                  style=\"width: 100%\" [(ngModel)]=\"response.customDescription\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Description\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input (focusout)=\"save(sectionResponses, 'Saved')\"\r\n                  type=\"number\" [(ngModel)]=\"response.customWeightage\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput onkeypress=\"if (this.value.length > 1) return false;\" max=\"100\"\r\n                  placeholder=\"Weightage\" value=\"\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- CREATE/EDIT SELF APPRAISAL -->\r\n    <div *ngIf=\"appraisalVisibility === 'EDITABLE' && (response.weightage * 100) !== 0\" [ngClass]=\"{'selfAppraisalEditable': appraisalVisibility == 'EDITABLE' }\">\r\n      <div>\r\n        <h4 style=\"display: inline-block\">{{response.criteria}}</h4>\r\n        <button class=\"score\" *ngIf=\"(reviewerVisibility === 'EDITABLE' || reviewerVisibility === 'READ-ONLY') && score[i][x]\"\r\n                type=\"button\" mat-stroked-button mat-button [disabled]=\"true\">\r\n          <mat-icon color=\"accent\">check_circle</mat-icon>\r\n          {{score[i][x]}}\r\n        </button>\r\n        <div style=\"float: right\">\r\n          <mat-label>Weightage:</mat-label>\r\n          {{response.weightage * 100 | number : '1.1-1'}}%\r\n        </div>\r\n        <div class=\"description\"><b>{{response.description}}</b></div>\r\n      </div>\r\n      <div style=\"display: inline-block\"><mat-label>Self Goal:</mat-label></div>\r\n      <div class=\"set-goals\">\r\n        <mat-form-field class=\"response-full-width\">\r\n        <textarea [disabled]=true\r\n                  style=\"width: 100%; color: black\" [(ngModel)]=\"response.customDescription\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input [disabled]=true\r\n                style=\"width: 100%; color: black\" [(ngModel)]=\"response.customWeightage\" [ngModelOptions]=\"{ standalone: true }\"\r\n                matInput type=\"number\" #weightage onkeypress=\"if (this.value.length > 1) return false;\" max=\"100\"\r\n                placeholder=\"Weightage\" value=\"\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div style=\"display: inline-block\"><mat-label>Self Appraisal Comment:</mat-label></div>\r\n      <mat-form-field style=\"width: 20%; float: right\">\r\n        <mat-select (focusout)=\"save(sectionResponses, 'Saved')\" #MatSelect placeholder=\"Self Appraisal rating\"\r\n                    [(ngModel)]=\"response.selfRating\">\r\n          <mat-option #MatOption *ngFor=\"let rating of ratings\" [value]=\"rating\">\r\n            {{rating}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div>\r\n        <mat-form-field class=\"response-full-width\">\r\n        <textarea (focusout)=\"save(sectionResponses, 'Saved')\"\r\n                  style=\"width: 100%\" [(ngModel)]=\"response.selfComment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Provide a comment to support your rating\" #selfReviewComment></textarea>\r\n        <mat-hint align=\"start\"><strong>Comment should be atleast 50 characters</strong> </mat-hint>\r\n        <mat-hint align=\"end\">{{selfReviewComment.value.length}} / {{selfReviewComment.value.length}}</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- VIEW SELF APPRAISAL -->\r\n    <div *ngIf=\"appraisalVisibility === 'READ-ONLY' && (response.weightage * 100) !== 0\" [ngClass]=\"{'selfAppraisalReadOnly': appraisalVisibility == 'READ-ONLY' }\">\r\n      <div>\r\n        <h4 style=\"display: inline-block\">{{response.criteria}}</h4>\r\n        <button class=\"score\" *ngIf=\"(reviewerVisibility === 'EDITABLE' || reviewerVisibility === 'READ-ONLY') && score[i][x]\"\r\n                type=\"button\" mat-stroked-button mat-button [disabled]=\"true\">\r\n          <mat-icon color=\"accent\">check_circle</mat-icon>\r\n          {{score[i][x]}}\r\n        </button>\r\n        <div style=\"float: right\" *ngIf=\"(response.weightage * 100) !== 0\">\r\n          <mat-label>Weightage:</mat-label>\r\n          {{response.weightage * 100 | number : '1.1-1'}}%\r\n        </div>\r\n        <div class=\"description\"><b>{{response.description}}</b></div>\r\n      </div>\r\n      <div style=\"display: inline-block\"><mat-label>Self Goal:</mat-label></div>\r\n      <div class=\"set-goals\">\r\n        <mat-form-field class=\"response-full-width\">\r\n        <textarea [disabled]=true\r\n                  style=\"width: 100%; color: black\" [(ngModel)]=\"response.customDescription\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input [disabled]=true\r\n                style=\"width: 100%; color: black\" [(ngModel)]=\"response.customWeightage\" [ngModelOptions]=\"{ standalone: true }\"\r\n                matInput type=\"number\" #weightage onkeypress=\"if (this.value.length > 1) return false;\" max=\"100\"\r\n                placeholder=\"Weightage\" value=\"\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div style=\"display: inline-block\"><mat-label>Self Appraisal Comment:</mat-label></div>\r\n      <div style=\"float: right\">\r\n        <mat-label>{{response.selfRating}}</mat-label>\r\n      </div>\r\n      <div>\r\n        <mat-form-field class=\"response-full-width\">\r\n        <textarea [disabled]=true\r\n                  style=\"width: 100%; color: black\" [(ngModel)]=\"response.selfComment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- VIEW ALL REVIEWS -->\r\n    <div *ngIf=\"(response.weightage * 100) !== 0 && reviewerVisibility === 'EDITABLE'\">\r\n      <div *ngIf=\"!response.projectManagerReviews[this.loggedInUser.id]\">\r\n        <div *ngFor=\"let review of response.projectManagerReviews | keyvalue; let x = index; trackBy:trackByIndex;\" class=\"reviewerSectionReadOnly\">\r\n          <div *ngIf=\"review.key !== this.loggedInUser.id && review.value.complete\" class=\"reviews\">\r\n            <div style=\"float: right\">\r\n              <mat-label>{{review.value.rating}}</mat-label>\r\n            </div>\r\n            <div>\r\n              <mat-label>Reviewed by {{review.value.name}} <i>(Project Manager)</i></mat-label>\r\n              <mat-form-field class=\"response-full-width\">\r\n              <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                        [(ngModel)]=\"review.value.comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                        matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!response.projectManagerReviews[this.loggedInUser.id] && !response.teamLeadReviews[this.loggedInUser.id]\">\r\n        <div *ngFor=\"let review of response.teamLeadReviews | keyvalue; let x = index; trackBy:trackByIndex;\" class=\"reviewerSectionReadOnly\">\r\n          <div *ngIf=\"review.key !== this.loggedInUser.id && review.value.complete\" class=\"reviews\">\r\n            <div style=\"float: right\">\r\n              <mat-label>{{review.value.rating}}</mat-label>\r\n            </div>\r\n            <div>\r\n              <mat-label>Reviewed by {{review.value.name}} <i>(Reporting Manager)</i></mat-label>\r\n              <mat-form-field class=\"response-full-width\">\r\n              <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                        [(ngModel)]=\"review.value.comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                        matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!response.projectManagerReviews[this.loggedInUser.id] && !response.teamLeadReviews[this.loggedInUser.id] && !response.practiceDirectorReviews[this.loggedInUser.id]\">\r\n        <div *ngFor=\"let review of response.practiceDirectorReviews | keyvalue; let x = index; trackBy:trackByIndex;\" class=\"reviewerSectionReadOnly\">\r\n          <div *ngIf=\"review.key !== this.loggedInUser.id && review.value.complete\" class=\"reviews\">\r\n            <div style=\"float: right\">\r\n              <mat-label>{{review.value.rating}}</mat-label>\r\n            </div>\r\n            <div>\r\n              <mat-label>Reviewed by {{review.value.name}} <i>(Practice Director)</i></mat-label>\r\n              <mat-form-field class=\"response-full-width\">\r\n              <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                        [(ngModel)]=\"review.value.comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                        matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!response.projectManagerReviews[this.loggedInUser.id] && !response.teamLeadReviews[this.loggedInUser.id] && !response.practiceDirectorReviews[this.loggedInUser.id] && !response.hrReviews[this.loggedInUser.id]\">\r\n        <div *ngFor=\"let review of response.hrReviews | keyvalue; let x = index; trackBy:trackByIndex;\" class=\"reviewerSectionReadOnly\">\r\n          <div *ngIf=\"review.key !== this.loggedInUser.id && review.value.complete\" class=\"reviews\">\r\n            <div style=\"float: right\">\r\n              <mat-label>{{review.value.rating}}</mat-label>\r\n            </div>\r\n            <div>\r\n              <mat-label>Reviewed by {{review.value.name}} <i>(HR)</i></mat-label>\r\n              <mat-form-field class=\"response-full-width\">\r\n              <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                        [(ngModel)]=\"review.value.comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                        matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- CREATE EDIT PROJECT MANAGER REVIEWS -->\r\n      <div *ngIf=\"reviewerVisibility === 'EDITABLE' && (currentStatus === 'PROJECT_MANAGER' || currentStatus === 'REPORTING_MANAGER' || currentStatus === 'PRACTICE_DIRECTOR' || currentStatus === 'HR' || currentStatus === 'COMPLETE') && response.projectManagerReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionEditable': reviewerVisibility == 'EDITABLE' }\">\r\n        <mat-form-field style=\"width: 20%; float: right\">\r\n          <mat-select (focusout)=\"saveReview(sectionResponse, response, 'ProjectManager', response.projectManagerReviews[this.loggedInUser.id].complete)\" #MatSelect placeholder=\"Reviewer rating\"\r\n                      [disabled]=\"response.projectManagerReviews[this.loggedInUser.id].complete\"\r\n                      [(ngModel)]=\"response.projectManagerReviews[this.loggedInUser.id].rating\">\r\n            <mat-option #MatOption *ngFor=\"let rating of ratings; let i = index;\" [value]=\"rating\">\r\n              {{rating}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-label>Your Comment as a Project Manager</mat-label>\r\n        <mat-form-field class=\"response-full-width\">\r\n          <textarea (focusout)=\"saveReview(sectionResponse, response, 'ProjectManager', response.projectManagerReviews[this.loggedInUser.id].complete)\" style=\"width: 100%\"\r\n                    [disabled]=\"response.projectManagerReviews[this.loggedInUser.id].complete\"\r\n                  [(ngModel)]=\"response.projectManagerReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Provide a comment to support your rating\">\r\n          </textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- CREATE EDIT REPORTING MANAGER (TEAM LEAD) REVIEWS -->\r\n      <div *ngIf=\"reviewerVisibility === 'EDITABLE' && (currentStatus === 'REPORTING_MANAGER' || currentStatus === 'PRACTICE_DIRECTOR' || currentStatus === 'HR' || currentStatus === 'COMPLETE') && response.teamLeadReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionEditable': reviewerVisibility == 'EDITABLE' }\">\r\n        <mat-form-field style=\"width: 20%; float: right\">\r\n          <mat-select (focusout)=\"saveReview(sectionResponse, response, 'TeamLead', response.teamLeadReviews[this.loggedInUser.id].complete)\" #MatSelect placeholder=\"Reviewer rating\"\r\n                      [disabled]=\"response.teamLeadReviews[this.loggedInUser.id].complete\"\r\n                      [(ngModel)]=\"response.teamLeadReviews[this.loggedInUser.id].rating\">\r\n            <mat-option #MatOption *ngFor=\"let rating of ratings; let i = index;\" [value]=\"rating\">\r\n              {{rating}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-label>Your Comment as a Reporting Manager</mat-label>\r\n        <mat-form-field class=\"response-full-width\">\r\n          <textarea (focusout)=\"saveReview(sectionResponse, response, 'TeamLead', response.teamLeadReviews[this.loggedInUser.id].complete)\" style=\"width: 100%\"\r\n                    [disabled]=\"response.teamLeadReviews[this.loggedInUser.id].complete\"\r\n                  [(ngModel)]=\"response.teamLeadReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Provide a comment to support your rating\">\r\n          </textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- CREATE EDIT PRACTICE DIRECTOR REVIEWS -->\r\n      <div *ngIf=\"reviewerVisibility === 'EDITABLE' && (currentStatus === 'PRACTICE_DIRECTOR' || currentStatus === 'HR' || currentStatus === 'COMPLETE') && response.practiceDirectorReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionEditable': reviewerVisibility == 'EDITABLE' }\">\r\n        <mat-form-field style=\"width: 20%; float: right\">\r\n          <mat-select (focusout)=\"saveReview(sectionResponse, response, 'PracticeDirector', response.practiceDirectorReviews[this.loggedInUser.id].complete)\" #MatSelect placeholder=\"Reviewer rating\"\r\n                      [disabled]=\"response.practiceDirectorReviews[this.loggedInUser.id].complete\"\r\n                      [(ngModel)]=\"response.practiceDirectorReviews[this.loggedInUser.id].rating\">\r\n            <mat-option #MatOption *ngFor=\"let rating of ratings; let i = index;\" [value]=\"rating\">\r\n              {{rating}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-label>Your Comment as a Practice Director</mat-label>\r\n        <mat-form-field class=\"response-full-width\">\r\n          <textarea (focusout)=\"saveReview(sectionResponse, response, 'PracticeDirector', response.practiceDirectorReviews[this.loggedInUser.id].complete)\" style=\"width: 100%\"\r\n                    [disabled]=\"response.practiceDirectorReviews[this.loggedInUser.id].complete\"\r\n                  [(ngModel)]=\"response.practiceDirectorReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Provide a comment to support your rating\">\r\n          </textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- CREATE EDIT HR REVIEWS -->\r\n      <div *ngIf=\"reviewerVisibility === 'EDITABLE' && (currentStatus === 'HR' || currentStatus === 'COMPLETE') && response.hrReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionEditable': reviewerVisibility == 'EDITABLE' }\">\r\n        <mat-form-field style=\"width: 20%; float: right\">\r\n          <mat-select (focusout)=\"saveReview(sectionResponse, response, 'HR', response.hrReviews[this.loggedInUser.id].complete)\" #MatSelect placeholder=\"Reviewer rating\"\r\n                      [disabled]=\"response.hrReviews[this.loggedInUser.id].complete\"\r\n                      [(ngModel)]=\"response?.hrReviews[this.loggedInUser.id].rating\">\r\n            <mat-option #MatOption *ngFor=\"let rating of ratings; let i = index;\" [value]=\"rating\">\r\n              {{rating}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-label>Your Comment as a HR</mat-label>\r\n        <mat-form-field class=\"response-full-width\">\r\n          <textarea (focusout)=\"saveReview(sectionResponse, response, 'HR', response.hrReviews[this.loggedInUser.id].complete)\" style=\"width: 100%\"\r\n                    [disabled]=\"response.hrReviews[this.loggedInUser.id].complete\"\r\n                  [(ngModel)]=\"response?.hrReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                  placeholder=\"Provide a comment to support your rating\">\r\n          </textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- VIEW TEAM LEAD REVIEWS -->\r\n      <!-- <div *ngIf=\"reviewerVisibility === 'READ-ONLY' && response.teamLeadReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionReadOnly': reviewerVisibility == 'READ-ONLY' }\">\r\n        <div style=\"float: right\">\r\n          <mat-label>{{response.teamLeadReviews[this.loggedInUser.id].rating}}</mat-label>\r\n        </div>\r\n        <div>\r\n          <mat-label>Reviewed by {{loggedInUser.name}} <i>(Reporting Manager)</i></mat-label>\r\n          <mat-form-field class=\"response-full-width\">\r\n          <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                    [(ngModel)]=\"response.teamLeadReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                    placeholder=\"Provide a comment to support your rating\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- VIEW PROJECT MANAGER REVIEWS -->\r\n      <!-- <div *ngIf=\"reviewerVisibility === 'READ-ONLY' && response.projectManagerReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionReadOnly': reviewerVisibility == 'READ-ONLY' }\">\r\n        <div style=\"float: right\">\r\n          <mat-label>{{response.projectManagerReviews[this.loggedInUser.id].rating}}</mat-label>\r\n        </div>\r\n        <div>\r\n          <mat-label>Reviewed by {{loggedInUser.name}} <i>(Project Manager)</i></mat-label>\r\n          <mat-form-field class=\"response-full-width\">\r\n          <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                    [(ngModel)]=\"response.projectManagerReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                    placeholder=\"Provide a comment to support your rating\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- VIEW PRACTICE DIRECTOR REVIEWS -->\r\n      <!-- <div *ngIf=\"reviewerVisibility === 'READ-ONLY' && response.practiceDirectorReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionReadOnly': reviewerVisibility == 'READ-ONLY' }\">\r\n        <div style=\"float: right\">\r\n          <mat-label>{{response.practiceDirectorReviews[this.loggedInUser.id].rating}}</mat-label>\r\n        </div>\r\n        <div>\r\n          <mat-label>Reviewed by {{loggedInUser.name}} <i>(Practice Director)</i></mat-label>\r\n          <mat-form-field class=\"response-full-width\">\r\n          <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                    [(ngModel)]=\"response.practiceDirectorReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- VIEW HR REVIEWS -->\r\n      <!-- <div *ngIf=\"reviewerVisibility === 'READ-ONLY' && response.hrReviews[this.loggedInUser.id]\" [ngClass]=\"{'reviewerSectionReadOnly': reviewerVisibility == 'READ-ONLY' }\">\r\n        <div style=\"float: right\">\r\n          <mat-label>{{response.hrReviews[this.loggedInUser.id].rating}}</mat-label>\r\n        </div>\r\n        <div>\r\n          <mat-label>Reviewed by {{loggedInUser.name}} <i>(HR)</i></mat-label>\r\n          <mat-form-field class=\"response-full-width\">\r\n          <textarea [disabled]=\"true\" style=\"width: 100%; color: black\"\r\n                    [(ngModel)]=\"response.hrReviews[this.loggedInUser.id].comment\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    matInput matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=4 data-ng-minLength=\"10\"\r\n                    placeholder=\"Provide a comment to support your rating\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".response-form {\n  min-width: 150px;\n  width: 70%; }\n\n.example-full-width {\n  width: 75px; }\n\n.response-full-width {\n  width: 100%; }\n\n.set-goals {\n  display: flex;\n  align-items: flex-end; }\n\nmat-icon {\n  vertical-align: sub; }\n\n.score {\n  border: none;\n  padding: 0px; }\n\ntextarea {\n  font-size: 13px; }\n\nh4 {\n  margin: 0;\n  text-transform: uppercase; }\n\n.description {\n  margin: 5px 0 10px; }\n\n.selfAppraisalEditable {\n  background-color: rgba(204, 229, 255, 0.5);\n  border-radius: 4px;\n  border: 1px solid #b8daff;\n  color: #004085;\n  padding: 10px;\n  margin: 0 0 10px 0; }\n\n.selfAppraisalReadOnly {\n  background-color: rgba(226, 227, 229, 0.5);\n  border-radius: 4px;\n  border: 1px solid #d6d8db;\n  color: #383d41;\n  padding: 10px 10px 0;\n  margin: 10px 0 0; }\n\n.reviewerSectionEditable {\n  background-color: rgba(204, 229, 255, 0.5);\n  border-radius: 4px;\n  border: 1px solid #b8daff;\n  color: #004085;\n  padding: 10px 10px 0;\n  margin: 0 0 10px 0; }\n\n.reviewerSectionReadOnly > div {\n  background-color: rgba(226, 227, 229, 0.5);\n  border-radius: 4px;\n  border: 1px solid #d6d8db;\n  color: #383d41;\n  padding: 10px 10px 0;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZi1hcHByYWlzYWwtc2VjdGlvbm9uZS9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcc2VsZi1hcHByYWlzYWwtc2VjdGlvbm9uZVxcc2VsZi1hcHByYWlzYWwtc2VjdGlvbm9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxTQUFTO0VBQ1QseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsMENBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwwQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDBDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBRUksMENBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxmLWFwcHJhaXNhbC1zZWN0aW9ub25lL3NlbGYtYXBwcmFpc2FsLXNlY3Rpb25vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2UtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG59XHJcbi5yZXNwb25zZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2V0LWdvYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5tYXQtaWNvbntcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG59XHJcbi5zY29yZXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbnRleHRhcmVhIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4O1xyXG59XHJcbi5zZWxmQXBwcmFpc2FsRWRpdGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjY2NlNWZmLCAkYWxwaGE6IDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGRhZmY7XHJcbiAgY29sb3I6ICMwMDQwODU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbn1cclxuLnNlbGZBcHByYWlzYWxSZWFkT25seSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNlMmUzZTUsICRhbHBoYTogMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDhkYjtcclxuICBjb2xvcjogIzM4M2Q0MTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG59XHJcbi5yZXZpZXdlclNlY3Rpb25FZGl0YWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNjY2U1ZmYsICRhbHBoYTogMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4ZGFmZjtcclxuICBjb2xvcjogIzAwNDA4NTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbn1cclxuLnJldmlld2VyU2VjdGlvblJlYWRPbmx5IHtcclxuICA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2UyZTNlNSwgJGFscGhhOiAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDhkYjtcclxuICAgIGNvbG9yOiAjMzgzZDQxO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SelfAppraisalSectiononeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfAppraisalSectiononeComponent", function() { return SelfAppraisalSectiononeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _model_user_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user-type */ "./src/app/model/user-type.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SelfAppraisalSectiononeComponent = /** @class */ (function () {
    function SelfAppraisalSectiononeComponent(cycleSelectionService, appraisalService, userService, snackBar) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.sectionResponses = [];
        this.ratings = [
            '1 - Deficient',
            '2 - Improvements Required',
            '3 - Meets Expectations',
            '4 - Above Expectations',
            '5 - Excellent'
        ];
        this.score = [[0.0, 0.0], [0.0, 0.0]];
        this.reviewerData = {
            rating: '',
            comment: ''
        };
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SelfAppraisalSectiononeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    SelfAppraisalSectiononeComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        if (!this.currentUser) {
            this.currentUser = this.loggedInUser;
        }
        this.loadQuestions();
    };
    SelfAppraisalSectiononeComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    SelfAppraisalSectiononeComponent.prototype.loadQuestions = function () {
        var _this = this;
        this.appraisalService.getSectiononebyUserId(this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.sectionResponses = response;
            _this.calculateScore();
        });
    };
    SelfAppraisalSectiononeComponent.prototype.save = function (responseObject) {
        var _this = this;
        this.appraisalService.saveSectionOneFeedback(responseObject, this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.snackBar.open('Response Auto Saved', '', {
                duration: 3000,
                panelClass: ['custom-auto-save']
            });
        });
        this.calculateScore();
    };
    SelfAppraisalSectiononeComponent.prototype.findReviewType = function (roleType) {
        var reviewType = null;
        switch (roleType) {
            case 'ProjectManager':
                reviewType = 'projectManagerReviews';
                break;
            case 'TeamLead':
                reviewType = 'teamLeadReviews';
                break;
            case 'PracticeDirector':
                reviewType = 'practiceDirectorReviews';
                break;
            default:
                reviewType = 'hrReviews';
        }
        return reviewType;
    };
    SelfAppraisalSectiononeComponent.prototype.submitReview = function () {
        console.log(this.sectionResponses);
    };
    SelfAppraisalSectiononeComponent.prototype.saveReview = function (sectionResponseObj, responseObj, roleType, isComplete) {
        var _this = this;
        if (!isComplete) {
            var reviewType = this.findReviewType(roleType);
            this.appraisalService.saveSectionOneReviewerFeedback([
                {
                    'group': sectionResponseObj.group,
                    'criteria': responseObj.criteria,
                    'reviewerId': this.loggedInUser.id,
                    'rating': responseObj[reviewType][this.loggedInUser.id].rating,
                    'comment': responseObj[reviewType][this.loggedInUser.id].comment,
                    'roleType': roleType
                }
            ], this.currentCycle.id, this.currentUser.id, this.loggedInUser.id).subscribe(function (response) {
                _this.snackBar.open('Response Auto Saved', '', {
                    duration: 3000,
                    panelClass: ['custom-auto-save']
                });
            });
        }
        this.calculateScore();
    };
    SelfAppraisalSectiononeComponent.prototype.calculateScore = function () {
        var _this = this;
        this.score = [];
        this.totalScore = 0.0;
        this.sectionResponses.forEach(function (obj) {
            var element = [];
            obj.response.forEach(function (item) {
                if (item.practiceDirectorReviews[_this.loggedInUser.id]) {
                    for (var property in item.practiceDirectorReviews) {
                        if (property) {
                            element.push(_this.getScore(item.weightage, item.practiceDirectorReviews[property].rating));
                        }
                    }
                }
                else {
                    element.push('');
                }
            });
            _this.score.push(element);
            var flatArr = _this.score.flat();
            var arrAvg = function (arr) { return arr.reduce(function (a, b) { return a + b; }); };
            _this.totalScore = arrAvg(flatArr);
        });
    };
    SelfAppraisalSectiononeComponent.prototype.getScore = function (weightage, reviewerRating) {
        var rating = 1;
        if (reviewerRating === '1 - Deficient') {
            rating = 1;
        }
        else if (reviewerRating === '2 - Improvements Required') {
            rating = 2;
        }
        else if (reviewerRating === '3 - Meets Expectations') {
            rating = 3;
        }
        else if (reviewerRating === '4 - Above Expectations') {
            rating = 4;
        }
        else if (reviewerRating === '5 - Excellent') {
            rating = 5;
        }
        return rating * weightage;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiononeComponent.prototype, "appraisalVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiononeComponent.prototype, "reviewerVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_user_type__WEBPACK_IMPORTED_MODULE_4__["UserType"])
    ], SelfAppraisalSectiononeComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiononeComponent.prototype, "currentStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SelfAppraisalSectiononeComponent.prototype, "showSetGoals", void 0);
    SelfAppraisalSectiononeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-self-appraisal-sectionone',
            template: __webpack_require__(/*! ./self-appraisal-sectionone.component.html */ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.html"),
            styles: [__webpack_require__(/*! ./self-appraisal-sectionone.component.scss */ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__["AppraisalService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SelfAppraisalSectiononeComponent);
    return SelfAppraisalSectiononeComponent;
}());



/***/ }),

/***/ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"appraisalVisibility === 'EDITABLE'\" class=\"form\">\r\n  <div *ngFor=\"let topic of sectionTopics; let i = index;\">\r\n    <h3>Topic {{i+1}}\r\n      <button type=\"button\" mat-icon-button color=\"warn\" (click)=\"removeTopic(i)\" matTooltip=\"Remove Topic\" matTooltipPosition=\"after\"  class=\"btn btn-outline-primary sharp\" (focusout)=\"save(sectionTopics, 'Saved')\"><mat-icon>remove_circle_outline</mat-icon></button>\r\n    </h3>\r\n    <div class=\"topic\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Topic\" [(ngModel)]=\"sectionTopics[i].topic\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"monthinput\">\r\n        <input matInput placeholder=\"Duration\" [(ngModel)]=\"sectionTopics[i].duration\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\">\r\n      </mat-form-field>months\r\n\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea style=\"width: 100%\" matInput matTextareaAutosize matAutosizeMinRows=4 matAutosizeMaxRows=4 placeholder=\"Comments\" [(ngModel)]=\"sectionTopics[i].comment\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n</form>\r\n<button *ngIf=\"appraisalVisibility === 'EDITABLE'\" type=\"button\" mat-stroked-button (click)=\"addTopic()\" class=\"btn btn-outline-primary sharp\">\r\n  <mat-icon color=\"primary\">add</mat-icon>Add\r\n</button>\r\n\r\n<form *ngIf=\"appraisalVisibility === 'READ-ONLY'\" class=\"form\">\r\n  <div *ngFor=\"let topic of sectionTopics; let i = index;\">\r\n    <h3>Topic {{i+1}}\r\n      <button [disabled]=\"true\" type=\"button\" mat-icon-button color=\"warn\" (click)=\"removeTopic(i)\" matTooltip=\"Remove Topic\" matTooltipPosition=\"after\"  class=\"btn btn-outline-primary sharp\" (focusout)=\"save(sectionTopics, 'Saved')\"><mat-icon>remove_circle_outline</mat-icon></button>\r\n    </h3>\r\n    <div class=\"topic\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input [disabled]=\"true\" matInput placeholder=\"Topic\" [(ngModel)]=\"sectionTopics[i].topic\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"monthinput\">\r\n        <input [disabled]=\"true\" matInput placeholder=\"Duration\" [(ngModel)]=\"sectionTopics[i].duration\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\">\r\n      </mat-form-field>months\r\n\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea [disabled]=\"true\" style=\"width: 100%\" matInput matTextareaAutosize matAutosizeMinRows=4 matAutosizeMaxRows=4 placeholder=\"Comments\" [(ngModel)]=\"sectionTopics[i].comment\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"reviewer === true\" (focusout)=\"save(sectionTopics, 'Saved')\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n</form>\r\n<button *ngIf=\"appraisalVisibility === 'READ-ONLY'\" [disabled]=\"true\" type=\"button\" mat-stroked-button (click)=\"addTopic()\" class=\"btn btn-outline-primary sharp\">\r\n  <mat-icon color=\"primary\">add</mat-icon>Add\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  min-width: 150px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.monthinput {\n  width: 30px; }\n\n.topic {\n  margin: 0 0 0 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZi1hcHByYWlzYWwtc2VjdGlvbnR3by9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcc2VsZi1hcHByYWlzYWwtc2VjdGlvbnR3b1xcc2VsZi1hcHByYWlzYWwtc2VjdGlvbnR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGYtYXBwcmFpc2FsLXNlY3Rpb250d28vc2VsZi1hcHByYWlzYWwtc2VjdGlvbnR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubW9udGhpbnB1dCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnRvcGljIHtcclxuICBtYXJnaW46IDAgMCAwIDIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SelfAppraisalSectiontwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfAppraisalSectiontwoComponent", function() { return SelfAppraisalSectiontwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _model_user_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user-type */ "./src/app/model/user-type.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SelfAppraisalSectiontwoComponent = /** @class */ (function () {
    function SelfAppraisalSectiontwoComponent(cycleSelectionService, appraisalService, userService, snackBar) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.sectionTopics = [];
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SelfAppraisalSectiontwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    SelfAppraisalSectiontwoComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        if (!this.currentUser) {
            this.currentUser = this.loggedInUser;
        }
        this.loadTopics();
    };
    SelfAppraisalSectiontwoComponent.prototype.loadTopics = function () {
        var _this = this;
        this.appraisalService.getSectiontwobyUserId(this.section, this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.sectionTopics = response;
        });
    };
    SelfAppraisalSectiontwoComponent.prototype.addTopic = function () {
        var newTopic = {
            'topic': "",
            'duration': "",
            'comment': ""
        };
        this.sectionTopics.push(newTopic);
    };
    SelfAppraisalSectiontwoComponent.prototype.removeTopic = function (i) {
        this.sectionTopics.splice(i, 1);
    };
    SelfAppraisalSectiontwoComponent.prototype.save = function (responseObject) {
        var _this = this;
        console.log(responseObject);
        this.appraisalService.saveSectionTwoFeedback(this.section, responseObject, this.currentCycle.id, this.currentUser.id).subscribe(function (response) {
            _this.snackBar.open('Response Auto Saved', '', {
                duration: 3000,
                panelClass: ['custom-auto-save']
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiontwoComponent.prototype, "appraisalVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiontwoComponent.prototype, "reviewerVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelfAppraisalSectiontwoComponent.prototype, "section", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_user_type__WEBPACK_IMPORTED_MODULE_4__["UserType"])
    ], SelfAppraisalSectiontwoComponent.prototype, "currentUser", void 0);
    SelfAppraisalSectiontwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-self-appraisal-sectiontwo',
            template: __webpack_require__(/*! ./self-appraisal-sectiontwo.component.html */ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.html"),
            styles: [__webpack_require__(/*! ./self-appraisal-sectiontwo.component.scss */ "./src/app/self-appraisal-sectiontwo/self-appraisal-sectiontwo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_3__["AppraisalService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SelfAppraisalSectiontwoComponent);
    return SelfAppraisalSectiontwoComponent;
}());



/***/ }),

/***/ "./src/app/self-appraisal/self-appraisal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/self-appraisal/self-appraisal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 0 60px 0;\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"width: 70%\">\r\n          Goals/Targets achieved\r\n        </mat-panel-title>\r\n        <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\">\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <app-self-appraisal-sectionone [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"currentUser\"></app-self-appraisal-sectionone>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"width: 70%\">Additional activities/tasks performed</mat-panel-title>\r\n        <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <app-self-appraisal-sectiontwo [section]=\"'sectiontwo'\" [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"currentUser\"></app-self-appraisal-sectiontwo>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"width: 70%\">Future Aspirations</mat-panel-title>\r\n        <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\"></mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <app-self-appraisal-sectiontwo [section]=\"'sectionthree'\" [appraisalVisibility]=\"appraisalVisibility\" [reviewerVisibility]=\"reviewerVisibility\" [currentUser]=\"currentUser\"></app-self-appraisal-sectiontwo>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel class=\"expansion-panel\" #mep=\"matExpansionPanel\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"width: 70%\">\r\n          Additional Feedback from you\r\n        </mat-panel-title>\r\n        <mat-panel-description fxHide=\"false\" fxHide.lt-md style=\"justify-content: space-evenly\">\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <app-self-appraisal-sectionfour [appraisalVisibility]=\"appraisalVisibility\" [currentUser]=\"currentUser\"></app-self-appraisal-sectionfour>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n<footer>\r\n  <div *ngIf=\"error\" layout=\"row\" layout-align=\"center center\" class=\"error\">\r\n    <mat-icon color=\"warn\">error</mat-icon>\r\n    <mat-label> <a title=\"Click to see Errors\" (click)=\"openErrorDialog()\">{{error.error.sectionOneError.length}} errors</a> </mat-label>\r\n  </div>\r\n  <div *ngIf=\"appraisalVisibility === 'EDITABLE'\" layout=\"row\" layout-align=\"center center\" class=\"footer-button\">\r\n    <button type=\"button\" mat-stroked-button (click)=\"save()\"\r\n            class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>create</mat-icon>\r\n      Save as Draft\r\n    </button>\r\n    &nbsp;\r\n    <button type=\"button\" mat-stroked-button (click)=\"checkResponse()\"\r\n            class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>done</mat-icon>\r\n      Submit\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"appraisalVisibility !== 'EDITABLE'\" layout=\"row\" layout-align=\"center center\" class=\"footer-button\">\r\n    <p class=\"submit-msg\">Your self appraisal is submitted</p>\r\n  </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/self-appraisal/self-appraisal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/self-appraisal/self-appraisal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion-panel {\n  margin: 5px; }\n\nfooter {\n  background-color: #d6d8d9;\n  border-top: 1px solid #999999;\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  right: 0px; }\n\n.footer-button {\n  margin: 1%;\n  float: right; }\n\n.error {\n  margin: 1.5% 0 0 2%;\n  display: inline-block; }\n\na {\n  color: red;\n  cursor: pointer;\n  margin-left: 10px; }\n\na:hover {\n  text-decoration: underline; }\n\nmat-label {\n  vertical-align: super; }\n\n.submit-msg {\n  color: green;\n  font-weight: bold;\n  margin: 0 5px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZi1hcHByYWlzYWwvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXHNlbGYtYXBwcmFpc2FsXFxzZWxmLWFwcHJhaXNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxmLWFwcHJhaXNhbC9zZWxmLWFwcHJhaXNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbnNpb24tcGFuZWx7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ4ZDk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmZvb3Rlci1idXR0b257XHJcbiAgbWFyZ2luOiAxJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmVycm9ye1xyXG4gIG1hcmdpbjogMS41JSAwIDAgMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG59XHJcbi5zdWJtaXQtbXNne1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/self-appraisal/self-appraisal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/self-appraisal/self-appraisal.component.ts ***!
  \************************************************************/
/*! exports provided: SelfAppraisalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfAppraisalComponent", function() { return SelfAppraisalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../submit-error-dialog/submit-error-dialog.component */ "./src/app/submit-error-dialog/submit-error-dialog.component.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _submit_confirmation_dialog_submit_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../submit-confirmation-dialog/submit-confirmation-dialog.component */ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.ts");










var SelfAppraisalComponent = /** @class */ (function () {
    function SelfAppraisalComponent(cycleSelectionService, pageHeaderService, dialog, appraisalService, userService, authService, snackBar) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.pageHeaderService = pageHeaderService;
        this.dialog = dialog;
        this.appraisalService = appraisalService;
        this.userService = userService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.appraisalVisibility = 'EDITABLE';
        this.reviewerVisibility = 'HIDDEN';
        pageHeaderService.setTitle('Self Appraisal');
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SelfAppraisalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = undefined;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                // this.currentUser = data;
                _this.initialize();
                _this.authService.init();
            });
        }, 100);
    };
    SelfAppraisalComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.loadAppraisal();
        this.error = null;
    };
    SelfAppraisalComponent.prototype.loadAppraisal = function () {
        var _this = this;
        this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.loggedInUser.id).subscribe(function (response) {
            _this.status = response.status;
            _this.reviewerVisibility = 'READ-ONLY';
            if (response.status === 'SELF_REVIEW' || response.status === 'SET_GOALS') {
                _this.appraisalVisibility = 'EDITABLE';
            }
            else {
                _this.appraisalVisibility = 'READ-ONLY';
            }
            _this.appraisalId = response.id;
        });
    };
    SelfAppraisalComponent.prototype.save = function () {
        this.snackBar.open('Response Saved', '', {
            duration: 3000,
            panelClass: ['custom-auto-save']
        });
    };
    SelfAppraisalComponent.prototype.submitResponse = function () {
        var _this = this;
        this.appraisalService.submitFeedback(this.appraisalId).subscribe(function (response) {
            _this.initialize();
        }, function (error) {
            if (error.status === 406) {
                _this.error = error;
                _this.openErrorDialog();
            }
        });
    };
    SelfAppraisalComponent.prototype.checkResponse = function () {
        var _this = this;
        this.appraisalService.errorCheck(this.appraisalId).subscribe(function (response) {
            _this.openConfirmationDialog();
        }, function (error) {
            if (error.status === 406) {
                _this.error = error;
                _this.openErrorDialog();
            }
        });
    };
    SelfAppraisalComponent.prototype.openErrorDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';
        dialogConfig.data = this.error;
        this.dialog.open(_submit_error_dialog_submit_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SubmitErrorDialogComponent"], dialogConfig);
    };
    SelfAppraisalComponent.prototype.openConfirmationDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '500px';
        dialogConfig.data = {};
        var dialogRef = this.dialog.open(_submit_confirmation_dialog_submit_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["SubmitConfirmationDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // console.log('ok pressed');
                _this.submitResponse();
            }
        });
    };
    SelfAppraisalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-self-appraisal',
            template: __webpack_require__(/*! ./self-appraisal.component.html */ "./src/app/self-appraisal/self-appraisal.component.html"),
            styles: [__webpack_require__(/*! ./self-appraisal.component.scss */ "./src/app/self-appraisal/self-appraisal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_2__["CycleSelectionService"], _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_3__["PageHeaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__["AppraisalService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SelfAppraisalComponent);
    return SelfAppraisalComponent;
}());



/***/ }),

/***/ "./src/app/set-goals-dialog/set-goals-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/set-goals-dialog/set-goals-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{data.currentUser.name}}</h2>\r\n<div class=\"userDetails\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>Designation</th>\r\n        <th>Joining Date</th>\r\n        <th>Last Appraisal date</th>\r\n        <th>Appraisal Period</th>\r\n        <th>Appraisal Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{data.currentUser.designation}}</td>\r\n        <td>{{data.currentUser.joiningDate | date}}</td>\r\n        <td>{{data.currentUser.lastAppraisalDate | date}}</td>\r\n        <td>{{data.currentUser.duration}}&nbsp;days</td>\r\n        <td>{{data.userStatus}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<mat-dialog-content>\r\n  <div *ngIf=\"data.userStatus !== 'SET_GOALS'\">\r\n    <p><strong>Cannot Set Goals Now!</strong> Goals can be set only before the start of appraisal!</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"data.userStatus === 'SET_GOALS'\">\r\n    <app-self-appraisal-sectionone\r\n      [currentUser]=\"data.currentUser\"\r\n      [currentStatus]=\"data.userStatus\"\r\n      [showSetGoals]=\"true\">\r\n    </app-self-appraisal-sectionone>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n  <button type=\"button\" *ngIf=\"data.userStatus !== 'SET_GOALS'\" mat-stroked-button mat-button [mat-dialog-close]>\r\n    <mat-icon>close</mat-icon>\r\n    Close\r\n  </button>\r\n  <button type=\"button\" *ngIf=\"data.userStatus === 'SET_GOALS'\" mat-stroked-button mat-button [mat-dialog-close] (click)=\"save()\">\r\n    <mat-icon>create</mat-icon>\r\n    Save as Draft\r\n  </button>\r\n  <button type=\"button\" *ngIf=\"data.userStatus === 'SET_GOALS'\" mat-stroked-button mat-button [mat-dialog-close] (click)=\"submitSelfGoal()\">\r\n    <mat-icon>done</mat-icon>\r\n    Submit\r\n  </button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/set-goals-dialog/set-goals-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/set-goals-dialog/set-goals-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin: 0 0 10px; }\n  h2 span {\n    float: right;\n    font-size: 16px;\n    font-weight: normal; }\n  h2 span b {\n      color: #4caf50; }\n  h4 {\n  margin-top: 0;\n  font-weight: normal; }\n  .mat-form-field-infix {\n  width: 45px; }\n  table {\n  width: 100%;\n  border: none;\n  border-collapse: collapse;\n  margin: 5px 0 10px; }\n  table th, table td {\n    border: none;\n    text-align: left;\n    padding: 5px 0;\n    width: 25%; }\n  table th {\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0LWdvYWxzLWRpYWxvZy9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcc2V0LWdvYWxzLWRpYWxvZ1xcc2V0LWdvYWxzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUx2QjtNQU9NLGNBQWMsRUFBQTtFQUlwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUVyQjtFQUNFLFdBQVcsRUFBQTtFQUViO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7RUFKcEI7SUFPSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVLEVBQUE7RUFWZDtJQWFJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0LWdvYWxzLWRpYWxvZy9zZXQtZ29hbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYiB7XHJcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5oNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn0gIFxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4O1xyXG4gIC8vICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICB0aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/set-goals-dialog/set-goals-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/set-goals-dialog/set-goals-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: SetGoalsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGoalsDialogComponent", function() { return SetGoalsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../self-appraisal-sectionone/self-appraisal-sectionone.component */ "./src/app/self-appraisal-sectionone/self-appraisal-sectionone.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");







var SetGoalsDialogComponent = /** @class */ (function () {
    function SetGoalsDialogComponent(data, snackBar, appraisalService, authService, dialog) {
        this.data = data;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        this.authService = authService;
        this.dialog = dialog;
    }
    SetGoalsDialogComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.authService.init();
    };
    SetGoalsDialogComponent.prototype.initialize = function () {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.loadAppraisal();
    };
    SetGoalsDialogComponent.prototype.loadAppraisal = function () {
        var _this = this;
        this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.data.currentUser.id).subscribe(function (response) {
            _this.appraisalId = response.id;
        });
    };
    SetGoalsDialogComponent.prototype.save = function () {
        this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_5__["SET_GOALS"].success, null, {
            duration: 3000
        });
    };
    SetGoalsDialogComponent.prototype.submitSelfGoal = function () {
        var _this = this;
        this.appraisalService.submitSelfGoals(this.appraisalId).subscribe(function (response) {
            _this.initialize();
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_5__["SET_GOALS"].submit, null, {
                duration: 3000
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_self_appraisal_sectionone_self_appraisal_sectionone_component__WEBPACK_IMPORTED_MODULE_2__["SelfAppraisalSectiononeComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SetGoalsDialogComponent.prototype, "child", void 0);
    SetGoalsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-goals-dialog',
            template: __webpack_require__(/*! ./set-goals-dialog.component.html */ "./src/app/set-goals-dialog/set-goals-dialog.component.html"),
            styles: [__webpack_require__(/*! ./set-goals-dialog.component.scss */ "./src/app/set-goals-dialog/set-goals-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_4__["AppraisalService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SetGoalsDialogComponent);
    return SetGoalsDialogComponent;
}());



/***/ }),

/***/ "./src/app/set-goals/set-goals.component.html":
/*!****************************************************!*\
  !*** ./src/app/set-goals/set-goals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z8\">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"empid\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"10\"> Emp Id </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"10\">\r\n        <span class=\"mobile-label\">Id:</span>\r\n        {{userNameMap[row.userId]?.empId}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"username\" >\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"15\"> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"15\">\r\n        <span class=\"mobile-label\">User:</span>\r\n        {{userNameMap[row.userId]?.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container matColumnDef=\"useremail\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"30\"> Email </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"30\">\r\n        <span class=\"mobile-label\">Email:</span>\r\n        {{userNameMap[row.userId]?.email}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef fxFlex=\"10\"> Action </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" fxFlex=\"10\">\r\n        <button mat-icon-button matTooltip=\"Set goals\" matTooltipPosition=\"before\" class=\"mat-primary\" (click)=\"openViewDialog(row)\">\r\n          <mat-icon>flag</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50]\" [pageSize]=\"10\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/set-goals/set-goals.component.scss":
/*!****************************************************!*\
  !*** ./src/app/set-goals/set-goals.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n  .table-container .mat-table {\n    overflow: auto;\n    max-height: 500px; }\n  .table-container .mat-table .mat-header-row {\n      min-height: 48px; }\n  .table-container .mat-table .mat-row {\n      min-height: 40px; }\n  .mobile-label {\n  display: none; }\n  @media (max-width: 600px) {\n  .mobile-label {\n    width: 75px;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none !important; }\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 16px; }\n    .mat-row .mat-cell:first-of-type {\n      padding-left: 0; }\n    .mat-row::after {\n      min-height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0LWdvYWxzL0M6XFxwcm9qZWN0XFx3b3Jrc3BhY2VcXDIwMTkwOVxcYXBwcmFpc2FsL3NyY1xcYXBwXFxzZXQtZ29hbHNcXHNldC1nb2Fscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBSmxCO0lBTUksY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBUHJCO01BU00sZ0JBQWdCLEVBQUE7RUFUdEI7TUFZTSxnQkFBZ0IsRUFBQTtFQUl0QjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0U7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0Usd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0lBSG5CO01BS0ksZUFBZSxFQUFBO0lBTG5CO01BUUksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZXQtZ29hbHMvc2V0LWdvYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5tYXQtcm93IHtcclxuICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vYmlsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9iaWxlLWxhYmVsIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1yb3cgeyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/set-goals/set-goals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/set-goals/set-goals.component.ts ***!
  \**************************************************/
/*! exports provided: SetGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGoalsComponent", function() { return SetGoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _set_goals_dialog_set_goals_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../set-goals-dialog/set-goals-dialog.component */ "./src/app/set-goals-dialog/set-goals-dialog.component.ts");









var SetGoalsComponent = /** @class */ (function () {
    function SetGoalsComponent(cycleSelectionService, pageHeaderService, userService, snackBar, appraisalService, dialog, authService) {
        var _this = this;
        this.cycleSelectionService = cycleSelectionService;
        this.pageHeaderService = pageHeaderService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.appraisalService = appraisalService;
        this.dialog = dialog;
        this.authService = authService;
        this.displayedColumns = ['empid', 'username', 'useremail', 'action'];
        this.userNameMap = {};
        this.userIds = [];
        pageHeaderService.setTitle('Set Goals');
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    SetGoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
                _this.initialize();
                _this.authService.init();
            });
        }, 100);
    };
    SetGoalsComponent.prototype.initialize = function () {
        this.loadSelfAppraisal();
        this.getAllUsers();
        this.RenderDataTable();
    };
    SetGoalsComponent.prototype.loadSelfAppraisal = function () {
        var _this = this;
        this.appraisalService.getAppraisalbyUserId(this.currentCycle.id, this.loggedInUser.id).subscribe(function (response) {
            _this.selfAppraisal = response;
        });
    };
    SetGoalsComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            if (users.length > 0) {
                users.forEach((function (item) {
                    _this.userNameMap[item.id] = item;
                }));
            }
        });
    };
    SetGoalsComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.cycleId = this.currentCycle.id;
        this.userIds.push(this.loggedInUser.id);
        this.appraisalService.getAppraisal(this.cycleId, this.loggedInUser.id)
            .subscribe(function (response) {
            if (response.length > 0) {
                response.forEach((function (item) {
                    var obj = {
                        userId: ''
                    };
                    obj.userId = item.userId;
                    _this.userIds.push(item.userId);
                }));
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            response = response.concat([_this.selfAppraisal]);
            _this.dataSource.data = response;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
    };
    SetGoalsComponent.prototype.openViewDialog = function (row) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '80%';
        dialogConfig.data = {
            userStatus: row.status,
            currentUser: this.userNameMap[row.userId],
            userId: row.userId
        };
        var dialogRef = this.dialog.open(_set_goals_dialog_set_goals_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SetGoalsDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.initialize();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SetGoalsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SetGoalsComponent.prototype, "sort", void 0);
    SetGoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-goals',
            template: __webpack_require__(/*! ./set-goals.component.html */ "./src/app/set-goals/set-goals.component.html"),
            styles: [__webpack_require__(/*! ./set-goals.component.scss */ "./src/app/set-goals/set-goals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_6__["PageHeaderService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_5__["AppraisalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], SetGoalsComponent);
    return SetGoalsComponent;
}());



/***/ }),

/***/ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-dialog-content>\r\nSelf appraisal cannot be edited after submission. Do you want to proceed?\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align=\"end\">\r\n    <button type=\"button\" mat-stroked-button class=\"btn btn-outline-primary sharp dialog-button\" [mat-dialog-close] >\r\n      <mat-icon>close</mat-icon>\r\n      Cancel\r\n    </button>\r\n    <button  type=\"button\" mat-stroked-button class=\"btn btn-outline-primary sharp dialog-button\" (click)=\"proceed()\" [mat-dialog-close]=\"data\" >\r\n      <mat-icon>done</mat-icon>\r\n      Proceed\r\n    </button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-button {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LWNvbmZpcm1hdGlvbi1kaWFsb2cvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXHN1Ym1pdC1jb25maXJtYXRpb24tZGlhbG9nXFxzdWJtaXQtY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdC1jb25maXJtYXRpb24tZGlhbG9nL3N1Ym1pdC1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1idXR0b257XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubmitConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitConfirmationDialogComponent", function() { return SubmitConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SubmitConfirmationDialogComponent = /** @class */ (function () {
    function SubmitConfirmationDialogComponent(data) {
        this.data = data;
    }
    SubmitConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    SubmitConfirmationDialogComponent.prototype.proceed = function () {
        this.data.proceed = true;
    };
    SubmitConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-confirmation-dialog',
            template: __webpack_require__(/*! ./submit-confirmation-dialog.component.html */ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./submit-confirmation-dialog.component.scss */ "./src/app/submit-confirmation-dialog/submit-confirmation-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SubmitConfirmationDialogComponent);
    return SubmitConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/submit-error-dialog/submit-error-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/submit-error-dialog/submit-error-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <mat-icon color=\"warn\">error</mat-icon>\r\n    <mat-label style=\"vertical-align: super\">Mandatory fields are missing</mat-label>\r\n  </div>\r\n\r\n  <mat-dialog-content color=\"warm\">\r\n    <ul class=\"error-block\" *ngFor=\"let error of errors\" >\r\n      <li>{{error}}</li>\r\n    </ul>\r\n\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align=\"end\">\r\n    <button type=\"button\" mat-stroked-button class=\"btn btn-outline-primary sharp dialog-button\" [mat-dialog-close] >\r\n      <mat-icon>close</mat-icon>\r\n      Close\r\n    </button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/submit-error-dialog/submit-error-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/submit-error-dialog/submit-error-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-button {\n  margin: 5px; }\n\n.error-block {\n  color: red;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LWVycm9yLWRpYWxvZy9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcc3VibWl0LWVycm9yLWRpYWxvZ1xcc3VibWl0LWVycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFVBQVU7RUFDVixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJtaXQtZXJyb3ItZGlhbG9nL3N1Ym1pdC1lcnJvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWJ1dHRvbntcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uZXJyb3ItYmxvY2t7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/submit-error-dialog/submit-error-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/submit-error-dialog/submit-error-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: SubmitErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitErrorDialogComponent", function() { return SubmitErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SubmitErrorDialogComponent = /** @class */ (function () {
    function SubmitErrorDialogComponent(data) {
        this.data = data;
        this.errors = data.error.sectionOneError;
        console.log(this.errors);
    }
    SubmitErrorDialogComponent.prototype.ngOnInit = function () {
    };
    SubmitErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-error-dialog',
            template: __webpack_require__(/*! ./submit-error-dialog.component.html */ "./src/app/submit-error-dialog/submit-error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./submit-error-dialog.component.scss */ "./src/app/submit-error-dialog/submit-error-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SubmitErrorDialogComponent);
    return SubmitErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.html":
/*!**********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"email === null\">\r\n  You are not logged in. <a href=\"https://aruun2aruun.github.io/appraisal\">Login</a> to proceed further\r\n</div>\r\n\r\n<div *ngIf=\"email !== null\">\r\n  {{displayName}} ({{email}}) is not authorized to access the app\r\n</div>\r\n\r\n<!--<br>-->\r\n<!--<button mat-stroked-button class=\"btn btn-outline-primary sharp\" (click)=\"openSupportDialog()\">-->\r\n  <!--<mat-icon>email</mat-icon>-->\r\n  <!--Contact support-->\r\n<!--</button>-->\r\n<!--&nbsp;-->\r\n<!--<button mat-stroked-button class=\"btn btn-outline-primary sharp\"  (click)=\"help()\">-->\r\n  <!--<mat-icon>block</mat-icon>-->\r\n  <!--How to unblock content on my browser?-->\r\n<!--</button>-->\r\n"

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notify-dialog/notify-dialog.component */ "./src/app/notify-dialog/notify-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/appraisal.service */ "./src/app/core/services/appraisal.service.ts");








var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent(router, pageHeaderService, dialog, appraisalService, snackBar) {
        this.router = router;
        this.pageHeaderService = pageHeaderService;
        this.dialog = dialog;
        this.appraisalService = appraisalService;
        this.snackBar = snackBar;
        this.pageHeaderService.setTitle('Unauthorized Access');
        this.pageHeaderService.hideCycle();
    }
    UnauthorizedComponent.prototype.help = function () {
        this.router.navigate(['/help']);
    };
    UnauthorizedComponent.prototype.notify = function (result) {
        var _this = this;
        this.appraisalService.notifyUser(result).subscribe(function (response) {
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"].success, null, {
                duration: 6000,
            });
        });
    };
    UnauthorizedComponent.prototype.openSupportDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {
            to: 'appraisal.westernacher@gmail.com',
            subject: 'Subject',
            body: 'Please specify your email Id while raising any question.'
        };
        var dialogRef = this.dialog.open(_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_5__["NotifyDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.notify(result);
            }
        });
    };
    UnauthorizedComponent.prototype.ngOnInit = function () {
        this.displayName = sessionStorage.getItem('userDisplayName');
        this.email = sessionStorage.getItem('userSigninName');
    };
    UnauthorizedComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.showCycle();
    };
    UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! ./unauthorized.component.html */ "./src/app/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.scss */ "./src/app/unauthorized/unauthorized.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _core_services_appraisal_service__WEBPACK_IMPORTED_MODULE_7__["AppraisalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/user-administration-dialog/user-administration-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/user-administration-dialog/user-administration-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit Roles</h2>\r\n<h4>{{data.userName}}</h4>\r\n\r\n<mat-dialog-content>\r\n  <div *ngFor=\"let role of data.roles\">\r\n    <mat-checkbox color=\"primary\" [(ngModel)] = \"role.state\">{{role.type}}</mat-checkbox>\r\n    <div *ngIf=\"role.state && role.options !== undefined && role.options.length > 0\">\r\n      <div class=\"subrole_checkbox\" *ngFor=\"let option of role.options\"><mat-checkbox [(ngModel)] = \"option.state\">{{option.name}}</mat-checkbox></div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n\r\n<mat-dialog-actions align=\"end\">\r\n    <button type=\"button\" mat-stroked-button mat-button [mat-dialog-close]=\"data\" >\r\n        Save\r\n    </button>\r\n    <div fxFlex></div>\r\n    <button type=\"button\" mat-stroked-button mat-button [mat-dialog-close] >\r\n        Cancel\r\n    </button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/user-administration-dialog/user-administration-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user-administration-dialog/user-administration-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin: 0; }\n\nh4 {\n  margin-top: 0;\n  font-weight: normal; }\n\n.mat-dialog-content {\n  overflow: hidden; }\n\n.mat-slide-toggle {\n  height: 40px;\n  font-size: small; }\n\n.mat-checkbox-label {\n  font-size: small; }\n\n.mat-dialog-actions {\n  margin: 10px 0 -10px; }\n\n.mat-dialog-actions[align='end'] {\n    justify-content: flex-end; }\n\n.mat-dialog-actions[align='center'] {\n    justify-content: center; }\n\n.mat-expansion-panel {\n  box-shadow: none; }\n\n.mat-expansion-panel .mat-expansion-panel-header {\n    padding: 0 1px; }\n\n.subrole_checkbox {\n  margin-left: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hZG1pbmlzdHJhdGlvbi1kaWFsb2cvQzpcXHByb2plY3RcXHdvcmtzcGFjZVxcMjAxOTA5XFxhcHByYWlzYWwvc3JjXFxhcHBcXHVzZXItYWRtaW5pc3RyYXRpb24tZGlhbG9nXFx1c2VyLWFkbWluaXN0cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRHhCO0lBR1EseUJBQXlCLEVBQUE7O0FBSGpDO0lBTVEsdUJBQXVCLEVBQUE7O0FBRy9CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBR1EsY0FBYyxFQUFBOztBQUd0QjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hZG1pbmlzdHJhdGlvbi1kaWFsb2cvdXNlci1hZG1pbmlzdHJhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tYXQtc2xpZGUtdG9nZ2xlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgLTEwcHg7XHJcbiAgICAmW2FsaWduPSdlbmQnXSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgICZbYWxpZ249J2NlbnRlciddIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFweDtcclxuICAgIH1cclxufVxyXG4uc3Vicm9sZV9jaGVja2JveHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-administration-dialog/user-administration-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user-administration-dialog/user-administration-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserAdministrationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdministrationDialogComponent", function() { return UserAdministrationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UserAdministrationDialogComponent = /** @class */ (function () {
    function UserAdministrationDialogComponent(data) {
        this.data = data;
    }
    UserAdministrationDialogComponent.prototype.ngOnInit = function () {
    };
    UserAdministrationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-administration-dialog',
            template: __webpack_require__(/*! ./user-administration-dialog.component.html */ "./src/app/user-administration-dialog/user-administration-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-administration-dialog.component.scss */ "./src/app/user-administration-dialog/user-administration-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UserAdministrationDialogComponent);
    return UserAdministrationDialogComponent;
}());



/***/ }),

/***/ "./src/app/user-administration/user-administration.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-administration/user-administration.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"table-container mat-elevation-z8\">\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\" >\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <span class=\"mobile-label\">Name:</span>\r\n                {{row.name}} \r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Email Column -->\r\n        <ng-container matColumnDef=\"email\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header fxFlex=\"40\"> Email </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\" fxFlex=\"40\">\r\n                <span class=\"mobile-label\">Email:</span>\r\n                {{row.email}}\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"action\">\r\n            <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n                <button mat-icon-button matTooltip=\"Edit roles\" matTooltipPosition=\"before\" class=\"mat-primary\" (click)=\"openDialog(element)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                </button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50]\" [pageSize]=\"10\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-administration/user-administration.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/user-administration/user-administration.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n  .table-container .mat-table {\n    overflow: auto;\n    max-height: 500px; }\n  .table-container .mat-table .mat-header-row {\n      min-height: 48px; }\n  .table-container .mat-table .mat-row {\n      min-height: 40px; }\n  .mobile-label {\n  display: none; }\n  @media (max-width: 600px) {\n  .mobile-label {\n    width: 50px;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none !important; }\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 16px; }\n    .mat-row .mat-cell:first-of-type {\n      padding-left: 0; }\n    .mat-row::after {\n      min-height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hZG1pbmlzdHJhdGlvbi9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcdXNlci1hZG1pbmlzdHJhdGlvblxcdXNlci1hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBSnBCO0lBTVEsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBUHpCO01BU1ksZ0JBQWdCLEVBQUE7RUFUNUI7TUFZWSxnQkFBZ0IsRUFBQTtFQUk1QjtFQUNJLGFBQWEsRUFBQTtFQUdqQjtFQUNJO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLHdCQUF1QixFQUFBO0VBRTNCO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtJQUhyQjtNQUtRLGVBQWUsRUFBQTtJQUx2QjtNQVFRLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hZG1pbmlzdHJhdGlvbi91c2VyLWFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1vYmlsZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1vYmlsZS1sYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXQtcm93IHsgXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-administration/user-administration.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-administration/user-administration.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserAdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdministrationComponent", function() { return UserAdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_administration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-administration.service */ "./src/app/user-administration/user-administration.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _user_administration_dialog_user_administration_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-administration-dialog/user-administration-dialog.component */ "./src/app/user-administration-dialog/user-administration-dialog.component.ts");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");









/**
 * @title Data table with sorting, pagination, and filtering.
 */
var UserAdministrationComponent = /** @class */ (function () {
    function UserAdministrationComponent(userAdministrationService, pageHeaderService, userService, snackBar, authService, dialog) {
        this.userAdministrationService = userAdministrationService;
        this.pageHeaderService = pageHeaderService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'email', 'action'];
        this.ROLE_TEMPLATE = [
            { 'type': 'Administrator', 'state': false }
        ];
        pageHeaderService.setTitle('User Administration');
        pageHeaderService.hideCycle();
    }
    UserAdministrationComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.authService.init();
    };
    UserAdministrationComponent.prototype.initialize = function () {
        this.RenderDataTable();
    };
    UserAdministrationComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            _this.dataSource.data = res;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
    };
    UserAdministrationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserAdministrationComponent.prototype.openDialog = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        var roles = JSON.parse(JSON.stringify(this.ROLE_TEMPLATE));
        // Transformation from backend domain to UI representation
        if (element.roles != null) {
            element.roles.forEach((function (role) {
                var matchedRole = roles.find(function (obj) { return obj.type === role.type; });
                if (matchedRole !== undefined) {
                    matchedRole.state = true;
                    if (role.options != null) {
                        role.options.forEach((function (option) {
                            var matchedOption = matchedRole.options.find(function (obj) { return obj.name === option; });
                            if (matchedOption !== undefined) {
                                matchedOption.state = true;
                            }
                        }));
                    }
                }
            }));
        }
        dialogConfig.autoFocus = true;
        dialogConfig.width = '300px';
        dialogConfig.data = {
            userId: element.id,
            userName: element.name,
            userUnit: element.unit,
            roles: roles
        };
        var dialogRef = this.dialog.open(_user_administration_dialog_user_administration_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserAdministrationDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var newRoles_1 = [];
                // Transformation from UI representation to backend domain
                result.roles.forEach((function (role) {
                    if (role.state) {
                        var newOptions_1 = [];
                        if (role.options !== undefined) {
                            role.options.forEach((function (option) {
                                if (option.state) {
                                    newOptions_1.push(option.name);
                                }
                            }));
                        }
                        newRoles_1.push({ 'type': role.type, 'options': newOptions_1 });
                    }
                }));
                _this.updateRoles(result.userId, newRoles_1);
            }
        });
    };
    UserAdministrationComponent.prototype.updateRoles = function (userId, roles) {
        var _this = this;
        this.userAdministrationService.updateRoles(userId, roles).subscribe(function (response) {
            _this.initialize();
            _this.snackBar.open(_message_json__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ROLES"].success, null, {
                duration: 3000,
            });
        });
    };
    UserAdministrationComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.showCycle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserAdministrationComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UserAdministrationComponent.prototype, "sort", void 0);
    UserAdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-administration',
            template: __webpack_require__(/*! ./user-administration.component.html */ "./src/app/user-administration/user-administration.component.html"),
            styles: [__webpack_require__(/*! ./user-administration.component.scss */ "./src/app/user-administration/user-administration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_administration_service__WEBPACK_IMPORTED_MODULE_3__["UserAdministrationService"], _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_6__["PageHeaderService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserAdministrationComponent);
    return UserAdministrationComponent;
}());



/***/ }),

/***/ "./src/app/user-administration/user-administration.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-administration/user-administration.service.ts ***!
  \********************************************************************/
/*! exports provided: UserAdministrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdministrationService", function() { return UserAdministrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserAdministrationService = /** @class */ (function () {
    function UserAdministrationService(http) {
        this.http = http;
    }
    UserAdministrationService.prototype.updateRoles = function (userId, roles) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/person/' + userId + '/updateRoles';
        return this.http.put(url, roles, httpOptions);
    };
    UserAdministrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserAdministrationService);
    return UserAdministrationService;
}());



/***/ }),

/***/ "./src/app/view-response/view-response.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-response/view-response.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" cycleIds.length > 0 && providerIds.length > 1 \">\r\n\r\n<div>\r\n  <mat-checkbox checked=\"showAllCycles\" [(ngModel)]=\"showAllCycles\" [ngModelOptions]=\"{ standalone: true }\"\r\n                (ngModelChange)=\"loadCycles(showAllCycles)\">{{label_checkbox_cycle}}\r\n  </mat-checkbox>\r\n</div>\r\n<br>\r\n<div>\r\n  <mat-form-field>\r\n    <mat-select #MatSelect placeholder=\"{{placeholder_select_cycle}}\" [(ngModel)]=\"selectedCycleId\"\r\n                (ngModelChange)=\"initialize()\">\r\n      <mat-option #MatOption *ngFor=\"let cycleId of cycleIds\" [value]=\"cycleId\">\r\n        {{cycleNameMap[cycleId]}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<br>\r\n  <mat-form-field style=\"width: 70%\">\r\n    <mat-select #MatSelect placeholder=\"{{placeholder_select_provider}}\" [(ngModel)]=\"selectedValue\"\r\n                (ngModelChange)=\"loadAnswers(selectedValue)\">\r\n      <mat-option #MatOption *ngFor=\"let providerId of providerIds; let x = index;\" [value]=\"providerId\">\r\n        {{userNameMap[providerId]}}\r\n      </mat-option>\r\n    </mat-select>\r\n\r\n  </mat-form-field>\r\n\r\n  <form class=\"response-form\">\r\n    <div *ngFor=\"let question of questions; let i = index; trackBy:trackByIndex;\">\r\n      <mat-label>{{question}}</mat-label>\r\n      <div *ngFor=\"let answer of answers\">\r\n        <p class=\"answer_provider\" *ngIf=\"selectedValue === 'all'\">{{userNameMap[answer.key]}}</p>\r\n        <div class=\"clear_provider\"></div>\r\n        <p class=\"answer\">{{answer.responses[i]}}</p>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n\r\n  </form>\r\n  <p *ngIf=\" providerIds.length > 2 && selectedValue !== 'all' \">\r\n    <button type=\"button\" mat-stroked-button [disabled]=\"index <= 1\"\r\n            (click)=\"previous()\" class=\"btn btn-outline-primary sharp\">\r\n      <mat-icon>skip_previous</mat-icon>\r\n      Previous\r\n    </button>\r\n    &nbsp;\r\n    <button *ngIf=\"providerIds.length > 1\" type=\"button\" mat-stroked-button\r\n            [disabled]=\"index === (providerIds.length-1)\"\r\n            (click)=\"next()\" class=\"btn btn-outline-primary sharp\">\r\n      Next\r\n      <mat-icon>skip_next</mat-icon>\r\n    </button>\r\n\r\n  </p>\r\n\r\n</div>\r\n<div *ngIf=\"cycleIds.length === 0 || providerIds.length <= 1\">\r\n  <h3>{{message_no_feedback}}</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-response/view-response.component.scss":
/*!************************************************************!*\
  !*** ./src/app/view-response/view-response.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".response-form {\n  min-width: 150px;\n  width: 70%; }\n\n.response-full-width {\n  width: 100%; }\n\n.answer_provider {\n  float: right; }\n\n.clear_provider {\n  clear: both; }\n\n.answer {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1yZXNwb25zZS9DOlxccHJvamVjdFxcd29ya3NwYWNlXFwyMDE5MDlcXGFwcHJhaXNhbC9zcmNcXGFwcFxcdmlldy1yZXNwb25zZVxcdmlldy1yZXNwb25zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LXJlc3BvbnNlL3ZpZXctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2UtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmVzcG9uc2UtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFuc3dlcl9wcm92aWRlcntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNsZWFyX3Byb3ZpZGVye1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5hbnN3ZXJ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view-response/view-response.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-response/view-response.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResponseComponent", function() { return ViewResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/page-header.service */ "./src/app/core/services/page-header.service.ts");
/* harmony import */ var _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/cycle-selection.service */ "./src/app/core/services/cycle-selection.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/cycle.service */ "./src/app/core/services/cycle.service.ts");
/* harmony import */ var _message_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message.json */ "./src/app/message.json");
var _message_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../message.json */ "./src/app/message.json", 1);
/* harmony import */ var _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/feedback.service */ "./src/app/core/services/feedback.service.ts");








var ViewResponseComponent = /** @class */ (function () {
    function ViewResponseComponent(pageHeaderService, cycleSelectionService, feedbackService, userService, cycleService) {
        var _this = this;
        this.pageHeaderService = pageHeaderService;
        this.cycleSelectionService = cycleSelectionService;
        this.feedbackService = feedbackService;
        this.userService = userService;
        this.cycleService = cycleService;
        this.userNameMap = { 'all': 'All' };
        this.cycleNameMap = {};
        this.providerIds = ['all'];
        this.feedbackJsonObj = [];
        this.questions = [];
        this.answers = [];
        this.index = 0;
        this.cycleIds = [];
        this.message_no_feedback = _message_json__WEBPACK_IMPORTED_MODULE_6__["WORKFLOW"].NO_FEEDBACK_PENDING;
        this.placeholder_select_provider = _message_json__WEBPACK_IMPORTED_MODULE_6__["PLACEHOLDERS"].VIEW_FEEDBACK_SELECT;
        this.placeholder_select_cycle = _message_json__WEBPACK_IMPORTED_MODULE_6__["PLACEHOLDERS"].VIEW_FEEDBACK_CYCLE_SELECT;
        this.label_checkbox_cycle = _message_json__WEBPACK_IMPORTED_MODULE_6__["LABELS"].VIEW_RESPONSE_CYCLE_CHECkBOX;
        pageHeaderService.setTitle(_message_json__WEBPACK_IMPORTED_MODULE_6__["PAGE_HEADERS"].VIEW_FEEDBACK);
        pageHeaderService.hideCycleFromView = true;
        cycleSelectionService.cycleChangedEvent.subscribe(function (data) { return _this.initialize(); });
    }
    ViewResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.userService.getUsersByEmail(sessionStorage.getItem('userSigninName').toLowerCase()).subscribe(function (data) {
                _this.loggedInUser = data;
                _this.initialize();
            });
        }, 100);
    };
    ViewResponseComponent.prototype.ngOnDestroy = function () {
        this.pageHeaderService.hideCycleFromView = false;
    };
    ViewResponseComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            if (users.length > 0) {
                users.forEach((function (item) {
                    _this.userNameMap[item.id] = item.name;
                }));
            }
        });
    };
    ViewResponseComponent.prototype.getAllCycle = function () {
        var _this = this;
        this.cycleService.getCycles().subscribe(function (cycles) {
            if (cycles.length > 0) {
                cycles.forEach((function (item) {
                    _this.cycleNameMap[item.id] = item.name;
                }));
            }
        });
    };
    ViewResponseComponent.prototype.initialize = function () {
        this.getAllUsers();
        this.getAllCycle();
        this.loadCycles(false);
        this.feedbackJsonObj = [];
        this.initializeReceiver();
        this.loadQuestions();
    };
    ViewResponseComponent.prototype.initializeReceiver = function () {
        var _this = this;
        this.feedbackJsonObj = [];
        this.providerIds = ['all'];
        var receiverId = this.loggedInUser.id;
        this.feedbackService.getProviders(this.selectedCycleId, receiverId).subscribe(function (result) {
            result.forEach((function (item) {
                if (item.status === 'COMPLETED') {
                    var obj = {
                        providerId: '',
                        responses: [],
                        status: ''
                    };
                    obj.providerId = item.providerId;
                    obj.responses = item.responses;
                    obj.status = item.status;
                    _this.feedbackJsonObj.push(obj);
                    _this.providerIds.push(item.providerId);
                }
            }));
            _this.selectedValue = _this.providerIds[0];
            _this.loadAnswers(_this.selectedValue);
        });
    };
    ViewResponseComponent.prototype.loadQuestions = function () {
        var _this = this;
        if (this.selectedCycleId) {
            this.cycleService.getCyclebyId(this.selectedCycleId).subscribe(function (response) {
                _this.questions = response.questions;
            });
        }
    };
    ViewResponseComponent.prototype.loadAnswers = function (providerId) {
        var _this = this;
        this.answers = [];
        this.index = this.providerIds.indexOf(this.selectedValue);
        if (providerId === 'all') {
            this.feedbackJsonObj.forEach(function (item) {
                var obj = {};
                obj['key'] = item.providerId;
                obj['responses'] = item.responses;
                _this.answers.push(obj);
            });
        }
        else {
            var answer = this.feedbackJsonObj.find(function (item) { return item.providerId === providerId; });
            if (answer !== undefined) {
                var obj = {};
                obj['key'] = providerId;
                obj['responses'] = answer.responses;
                this.answers.push(obj);
            }
        }
    };
    ViewResponseComponent.prototype.next = function () {
        this.index = this.providerIds.indexOf(this.selectedValue);
        this.index = this.index + 1;
        if (this.index <= this.providerIds.length - 1) {
            this.selectedValue = this.providerIds[this.index];
            this.loadAnswers(this.selectedValue);
        }
    };
    ViewResponseComponent.prototype.previous = function () {
        this.index = this.providerIds.indexOf(this.selectedValue);
        this.index = this.index - 1;
        if (this.index >= 1) {
            this.selectedValue = this.providerIds[this.index];
            this.loadAnswers(this.selectedValue);
        }
    };
    ViewResponseComponent.prototype.loadAllCycleByReceiverId = function () {
        var _this = this;
        this.feedbackService.getCyclesByReceiver(this.loggedInUser.id).subscribe(function (result) {
            result.forEach((function (item) {
                if (_this.cycleIds.indexOf(item.cycleId) === -1) {
                    _this.cycleIds.push(item.cycleId);
                }
            }));
            _this.selectedCycleId = _this.cycleIds[0];
        });
    };
    ViewResponseComponent.prototype.loadCycles = function (showAllCycles) {
        var _this = this;
        this.cycleIds = [];
        if (showAllCycles) {
            this.loadAllCycleByReceiverId();
        }
        else {
            JSON.parse(localStorage.getItem('activeCycles')).forEach((function (item) { return _this.cycleIds.push(item.id); }));
            this.selectedCycleId = this.cycleIds[0];
        }
    };
    ViewResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-response',
            template: __webpack_require__(/*! ./view-response.component.html */ "./src/app/view-response/view-response.component.html"),
            styles: [__webpack_require__(/*! ./view-response.component.scss */ "./src/app/view-response/view-response.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_page_header_service__WEBPACK_IMPORTED_MODULE_2__["PageHeaderService"], _core_services_cycle_selection_service__WEBPACK_IMPORTED_MODULE_3__["CycleSelectionService"],
            _core_services_feedback_service__WEBPACK_IMPORTED_MODULE_7__["FeedbackService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _core_services_cycle_service__WEBPACK_IMPORTED_MODULE_5__["CycleService"]])
    ], ViewResponseComponent);
    return ViewResponseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project\workspace\201909\appraisal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map