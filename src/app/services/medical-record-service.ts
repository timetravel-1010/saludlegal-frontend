import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalRecordOut } from 'app/models/medical-record-out';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  baseURL: string = 'http://localhost:8081/api/v1/medical-records';
  REPORTS_DIRECTORY: string = 'REPORTS_DIRECTORY';

  constructor(private http: HttpClient) { }

  getPatientMedicalRecords(patientCC: number) {
    return this.http.get(`${this.baseURL}/${patientCC}`)
  }

  createMedicalRecord(medRecord: MedicalRecordOut) {
    return this.http.post(this.baseURL, medRecord, {
      responseType: 'text'
    });
  }

  generateMedicalRecordsReport() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'text/plain');

    return this.http.post(`${this.baseURL}/reports`, this.REPORTS_DIRECTORY, 
      { 
        headers: headers,
        responseType: 'text' 
      }
    );
  }
}
