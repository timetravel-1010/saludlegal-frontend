import { Component } from '@angular/core';
import { MedicalRecordService } from 'app/services/medical-record-service';

@Component({
  selector: 'medical-records-report',
  templateUrl: './medical-records-report.component.html',
  styleUrls: ['./medical-records-report.component.css']
})
export class MedicalRecordsReportComponent {
  
  constructor(private medRecordService: MedicalRecordService) { }
  
  generateReport() {
    this.medRecordService.generateMedicalRecordsReport().subscribe({
      next: (res: any) => {
        console.log(res, 'response');
      },
      error: (err) => {
        console.error(err, 'error');
      }
    });
  }

}
