import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedoutComponent } from './logedout.component';

describe('LogedoutComponent', () => {
  let component: LogedoutComponent;
  let fixture: ComponentFixture<LogedoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
