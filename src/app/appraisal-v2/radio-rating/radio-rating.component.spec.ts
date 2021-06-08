import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioRatingComponent } from './radio-rating.component';

describe('RadioRatingComponent', () => {
  let component: RadioRatingComponent;
  let fixture: ComponentFixture<RadioRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
