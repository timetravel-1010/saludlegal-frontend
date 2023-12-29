import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MedRecordConsultationPanelComponent } from './pages/med-record-consultation-panel/med-record-consultation-panel.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { MedRecordCreationPanelComponent } from './pages/med-record-creation-panel/med-record-creation-panel.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { AdminModule } from '../admin';
import { DoctorHeaderComponent } from './components';
import { DefaultFooterComponent, SecondaryHeaderComponent, SharedModule } from 'app/shared';


@NgModule({
  declarations: [
    DoctorComponent,
    NavbarComponent,
    DoctorHeaderComponent,
    MedRecordConsultationPanelComponent,
    MedRecordCreationPanelComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    AnimateModule,
    InputNumberModule,
    TableModule,
    InputTextareaModule,
    ScrollPanelModule,
    AccordionModule,
    SharedModule,
  ]
})
export class DoctorModule { }
