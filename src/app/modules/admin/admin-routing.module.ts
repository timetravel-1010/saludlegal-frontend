import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFileCreationComponent } from './pages/patient-file-creation/patient-file-creation.component';
import { AdminComponent } from './admin.component';
import { PatientCreationComponent } from './pages/patient-creation/patient-creation.component';
import { MedicalRecordsReportComponent } from './pages/medical-records-report/medical-records-report.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'patient-file-creation', component: PatientFileCreationComponent },
      { path: 'patient-creation', component: PatientCreationComponent },
      { path: 'medical-records-report', component: MedicalRecordsReportComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
