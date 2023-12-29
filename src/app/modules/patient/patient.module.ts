import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { MedicalRecordsComponent } from './pages/medical-records/medical-records.component';
import { PatientHeaderComponent } from './components/patient-header/patient-header.component';



@NgModule({
  declarations: [
    PatientComponent,
    MedicalRecordsComponent,
    PatientHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
