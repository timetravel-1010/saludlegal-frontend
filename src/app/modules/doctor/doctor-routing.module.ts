import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { MedRecordConsultationPanelComponent, MedRecordCreationPanelComponent } from './pages';


const routes: Routes = [
  {
    path: 'doctor', component: DoctorComponent, children: [
      { path: 'med-record-creation', component: MedRecordCreationPanelComponent },
      { path: 'med-record-consultation', component: MedRecordConsultationPanelComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
