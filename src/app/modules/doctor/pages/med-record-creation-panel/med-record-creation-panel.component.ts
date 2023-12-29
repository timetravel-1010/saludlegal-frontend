import { Component } from '@angular/core';
import { MedicalRecordOut } from 'app/models';
import { MedicalRecordService } from 'app/services/medical-record-service';

@Component({
  selector: 'med-record-creation-panel',
  templateUrl: './med-record-creation-panel.component.html',
  styleUrls: ['./med-record-creation-panel.component.css']
})
export class MedRecordCreationPanelComponent {

  patientCC: number = 0;
  doctorCC: number = 123456789;
  value: string  = '';
 
  vitalSigns: string  = '';
  symptomatology: string  = '';
  injuries: string  = ''; 
  consultationReason: string  = '';
  diagnosis: string  = '';
  medicalBackground: string  = '';
  interconsultations: string  = ''; 
  epicrisis: string  = '';

  

  constructor(private medRecordService: MedicalRecordService) { }

  createMedicalRecord() {
    var medicalRecord: MedicalRecordOut = {
      patientCC: this.patientCC,
      healthCareProfessionalCC: this.doctorCC,
      vitalSigns: this.vitalSigns,
      symptomatology: this.symptomatology,
      injuries: this.injuries,
      consultationReason: this.consultationReason,
      diagnosis: this.diagnosis,
      medicalBackground: this.medicalBackground,
      interconsultations: this.interconsultations,
      epicrisis: this.epicrisis
    }
    //console.log(medicalRecord);
    this.medRecordService.createMedicalRecord(medicalRecord).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
      },
      error: (err) => {
        console.error(err, 'error');
      }
    });
  }
}
