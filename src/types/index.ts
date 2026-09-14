export type ApplicationStatusStage = 
  | 'registro'
  | 'revision_documentos'
  | 'entrevista'
  | 'oferta_enviada'
  | 'oferta_firmada'
  | 'solicitud_visa'
  | 'visa_aprobada'
  | 'listo_para_viaje';

export interface WorkerProfile {
  id: string;
  fullName: string;
  phone: string;
  photoUrl: string | null;
  passportNumber: string;
  location: string;
  status: ApplicationStatusStage;
  appliedJobId: string | null;
  hasSignedContract: boolean;
  signatureUrl: string | null;
  registeredAt: string;
  gender?: 'male' | 'female';
  birthDate?: string;
  citizenship?: string;
}

export interface JobOffer {
  id: string;
  title: string;
  location: string;
  companyName: string;
  payRate: string; // ej. "$14.50 USD / Hora"
  duration: string; // ej. "6 Meses (Mayo - Octubre)"
  cropType: string; // ej. "Manzana y Frutales"
  housingIncluded: boolean;
  transportIncluded: boolean;
  slotsRemaining: number;
  description: string;
  requirements: string[];
}

export interface DocumentInfo {
  id: string;
  title: string;
  subtitle: string;
  category: 'identificacion' | 'passport' | 'visa' | 'contrato';
  status: 'valid' | 'expiring' | 'missing' | 'reviewing';
  updatedAt: string;
  previewUrl?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  description?: string;
}
