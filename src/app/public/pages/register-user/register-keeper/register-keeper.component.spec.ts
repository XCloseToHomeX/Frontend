import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKeeperComponent } from './register-keeper.component';

describe('RegisterKeeperComponent', () => {
  let component: RegisterKeeperComponent;
  let fixture: ComponentFixture<RegisterKeeperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterKeeperComponent]
    });
    fixture = TestBed.createComponent(RegisterKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
