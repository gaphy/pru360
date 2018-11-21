import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccountsComponent } from './newaccounts.component';

describe('NewaccountsComponent', () => {
  let component: NewaccountsComponent;
  let fixture: ComponentFixture<NewaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
