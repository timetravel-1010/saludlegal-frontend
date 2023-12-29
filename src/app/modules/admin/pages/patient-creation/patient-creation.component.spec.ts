import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreationComponent } from './patient-creation.component';

describe('PatientCreationComponent', () => {
  let component: PatientCreationComponent;
  let fixture: ComponentFixture<PatientCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCreationComponent]
    });
    fixture = TestBed.createComponent(PatientCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
