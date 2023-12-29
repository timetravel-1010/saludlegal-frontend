import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordsReportComponent } from './medical-records-report.component';

describe('MedicalRecordsReportComponent', () => {
  let component: MedicalRecordsReportComponent;
  let fixture: ComponentFixture<MedicalRecordsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalRecordsReportComponent]
    });
    fixture = TestBed.createComponent(MedicalRecordsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
