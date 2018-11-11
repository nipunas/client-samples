import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRecordComponent } from './child-record.component';

describe('ChildRecordComponent', () => {
  let component: ChildRecordComponent;
  let fixture: ComponentFixture<ChildRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
