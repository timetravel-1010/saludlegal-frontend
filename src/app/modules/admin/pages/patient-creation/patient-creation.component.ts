import { Component } from '@angular/core';
import { Patient } from 'app/models';
import { PatientService } from 'app/services/patient.service';

@Component({
  selector: 'patient-creation',
  templateUrl: './patient-creation.component.html',
  styleUrls: ['./patient-creation.component.css']
})
export class PatientCreationComponent {

  patient: Patient = {
    documentNumber: 0,
    documentType: "",
    name1: "",
    name2: "",
    lastname1: "",
    lastname2: "",
    birthdate: "",
    gender: "",
    sex: "",
    address: "",
    phoneNumber: "",
    planTypeId: 0
  }

  documentTypes = ['Cédula de Ciudadanía', 'Cédula de Extranjería', 'Registro Cívil de Nacimiento'];
  genders = ['Masculino', 'Femenino', 'Otro'];
  sexes = ['H', 'M'];


  constructor(private patientService: PatientService) {}

  createPatient() {
    this.patientService.createPatient(this.patient).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
      },
      error: (err) => {
        console.error(err, 'error');
      }
    });
  }
}