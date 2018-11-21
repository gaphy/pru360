import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastdueComponent } from './pastdue.component';

describe('PastdueComponent', () => {
  let component: PastdueComponent;
  let fixture: ComponentFixture<PastdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
