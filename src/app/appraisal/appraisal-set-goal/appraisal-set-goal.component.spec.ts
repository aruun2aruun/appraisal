import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSetGoalComponent } from './appraisal-set-goal.component';

describe('AppraisalSetGoalComponent', () => {
  let component: AppraisalSetGoalComponent;
  let fixture: ComponentFixture<AppraisalSetGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalSetGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalSetGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
