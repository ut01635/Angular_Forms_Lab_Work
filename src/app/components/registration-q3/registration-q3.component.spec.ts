import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationQ3Component } from './registration-q3.component';

describe('RegistrationQ3Component', () => {
  let component: RegistrationQ3Component;
  let fixture: ComponentFixture<RegistrationQ3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationQ3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationQ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
