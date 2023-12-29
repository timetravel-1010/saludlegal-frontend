import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFileCreationComponent } from './pages/patient-file-creation/patient-file-creation.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SharedModule } from 'app/shared';
import { PatientCreationComponent } from './pages/patient-creation/patient-creation.component';
import { FileUploadModule } from 'primeng/fileupload';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MedicalRecordsReportComponent } from './pages/medical-records-report/medical-records-report.component';



@NgModule({
  declarations: [
    PatientFileCreationComponent,
    AdminComponent,
    AdminHeaderComponent,
    PatientCreationComponent,
    MedicalRecordsReportComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FileUploadModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    ScrollPanelModule
  ]
})
export class AdminModule { }
