import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedRecordConsultationPanelComponent } from './med-record-consultation-panel.component';

describe('MrConsultationPanelComponent', () => {
  let component: MedRecordConsultationPanelComponent;
  let fixture: ComponentFixture<MedRecordConsultationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedRecordConsultationPanelComponent]
    });
    fixture = TestBed.createComponent(MedRecordConsultationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
