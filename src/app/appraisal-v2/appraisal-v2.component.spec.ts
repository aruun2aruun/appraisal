import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalV2Component } from './appraisal-v2.component';

describe('AppraisalV2Component', () => {
  let component: AppraisalV2Component;
  let fixture: ComponentFixture<AppraisalV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
