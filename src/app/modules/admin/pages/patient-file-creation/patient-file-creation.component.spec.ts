import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFileCreationComponent } from './patient-file-creation.component';

describe('PatientFileCreationComponent', () => {
  let component: PatientFileCreationComponent;
  let fixture: ComponentFixture<PatientFileCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientFileCreationComponent]
    });
    fixture = TestBed.createComponent(PatientFileCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
