import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPartyPasswordComponent } from './existing-party-password.component';

describe('ExistingPartyPasswordComponent', () => {
  let component: ExistingPartyPasswordComponent;
  let fixture: ComponentFixture<ExistingPartyPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPartyPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPartyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
