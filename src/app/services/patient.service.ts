import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseURL: string = 'http://localhost:8081/api/v1/patients';

  constructor(private http: HttpClient) { }

  createPatient(patient: Patient) {
    return this.http.post(this.baseURL, patient, {
      responseType: 'text'
    })
  }

  createPatientsCSV(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');


    return this.http.post(`${this.baseURL}/upload-csv-file`, formData, 
      { 
        headers: headers,
        responseType: 'text'
      }
    );
  }
}