import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdcallsComponent } from './coldcalls.component';

describe('ColdcallsComponent', () => {
  let component: ColdcallsComponent;
  let fixture: ComponentFixture<ColdcallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdcallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdcallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
