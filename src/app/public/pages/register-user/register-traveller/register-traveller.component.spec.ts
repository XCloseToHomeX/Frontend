import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTravellerComponent } from './register-traveller.component';

describe('RegisterTravellerComponent', () => {
  let component: RegisterTravellerComponent;
  let fixture: ComponentFixture<RegisterTravellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTravellerComponent]
    });
    fixture = TestBed.createComponent(RegisterTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
