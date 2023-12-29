import { Component } from '@angular/core';
import { PatientService } from 'app/services/patient.service';
import { FileUploadEvent } from 'primeng/fileupload';



@Component({
  selector: 'patient-file-creation',
  templateUrl: './patient-file-creation.component.html',
  styleUrls: ['./patient-file-creation.component.css']
})
export class PatientFileCreationComponent {

  constructor(private patientService: PatientService) { }

  onUpload(event: FileUploadEvent) {

    this.patientService.createPatientsCSV(event.files[0]).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
