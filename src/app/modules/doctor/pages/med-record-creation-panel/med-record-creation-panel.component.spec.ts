import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedRecordCreationPanelComponent } from './med-record-creation-panel.component';

describe('MedRecordCreationPanelComponent', () => {
  let component: MedRecordCreationPanelComponent;
  let fixture: ComponentFixture<MedRecordCreationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedRecordCreationPanelComponent]
    });
    fixture = TestBed.createComponent(MedRecordCreationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
