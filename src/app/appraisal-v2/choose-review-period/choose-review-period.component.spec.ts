import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseReviewPeriodComponent } from './choose-review-period.component';

describe('ChooseReviewPeriodComponent', () => {
  let component: ChooseReviewPeriodComponent;
  let fixture: ComponentFixture<ChooseReviewPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseReviewPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseReviewPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
