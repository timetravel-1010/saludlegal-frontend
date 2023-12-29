import { Component, OnInit } from '@angular/core';
import { MedicalRecordIn } from 'app/models/medical-record-in';
import { MedicalRecordService } from 'app/services/medical-record-service';


@Component({
  selector: 'med-record-consultation-panel',
  templateUrl: './med-record-consultation-panel.component.html',
  styleUrls: ['./med-record-consultation-panel.component.css']
})
export class MedRecordConsultationPanelComponent {

  startDate: Date = new Date();// = new Date("01-13-2024");
  endDate: Date | undefined;
  patientCC: number = 0;
  medicalRecords: MedicalRecordIn[] = [];

  constructor(private medRecordService: MedicalRecordService) { }


  getPatientMedicalRecords() {
    console.log(this.startDate.getFullYear()+"-"+this.startDate.getMonth()+"-"+this.startDate.getDay())
    this.medRecordService.getPatientMedicalRecords(this.patientCC).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        this.medicalRecords = res
      },
      error: (err) => {
        console.error(err, 'error');
      }
    });
  }
}
