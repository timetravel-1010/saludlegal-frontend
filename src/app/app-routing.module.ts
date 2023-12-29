import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, DoctorComponent } from './modules';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'doctor', component: DoctorComponent, loadChildren: () => import('./modules/doctor').then(m => m.DoctorModule) },
  { path: 'admin', component: AdminComponent, loadChildren: () => import('./modules/admin').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
