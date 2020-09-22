import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCycleDialogComponent } from './change-cycle-dialog.component';

describe('ChangeCycleDialogComponent', () => {
  let component: ChangeCycleDialogComponent;
  let fixture: ComponentFixture<ChangeCycleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCycleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCycleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
