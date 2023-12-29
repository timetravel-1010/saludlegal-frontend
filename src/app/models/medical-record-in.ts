export interface MedicalRecordIn {
    medicalRecordID: number;
    patientID: number;
    patientName: string;
    healthcareProfessionalID: number;
    healthcareProfessionalName: string;
    creationDate: string;
    vitalSigns: string;
    symptomatology: string;
    injuries: string;
    consultationReason: string;
    diagnosis: string;
    medicalBackground: string;
    interconsultations: string;
    epicrisis: string;
}