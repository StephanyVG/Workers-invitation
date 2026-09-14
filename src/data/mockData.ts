import { JobOffer, DocumentInfo, WorkerProfile } from '../types';

export const INITIAL_WORKER_PROFILE: WorkerProfile = {
  id: 'wrk-001',
  fullName: 'Mateo Hernández Ruiz',
  phone: '811-456-7890',
  photoUrl: '/profile.png',
  passportNumber: 'G29481059',
  location: 'Saltillo, Coahuila',
  status: 'revision_documentos',
  appliedJobId: 'job-1',
  hasSignedContract: false,
  signatureUrl: null,
  registeredAt: '2026-09-01'
};

export const MOCK_JOBS: JobOffer[] = [
  {
    id: 'job-1',
    title: 'Recolección de Manzana y Cuidado de Huerto',
    companyName: 'Huertos Scot Marks & Co.',
    location: 'Washington, EE. UU.',
    payRate: '$16.50 USD / Hora',
    duration: '6 Meses (Mayo a Octubre)',
    cropType: 'Manzana y Peral',
    housingIncluded: true,
    transportIncluded: true,
    slotsRemaining: 8,
    description: 'Trabajo en campo abierto seleccionando y cosechando fruta madura. Se ofrece casa limpia compartida y transporte diario al campo.',
    requirements: [
      'Disponibilidad para trabajar al aire libre',
      'Ganas de aprender el cuidado de frutales',
      'Pasaporte vigente o en trámite'
    ]
  },
  {
    id: 'job-2',
    title: 'Cuidado y Empaque de Berries',
    companyName: 'Agro Fincas Gutters Landscaping',
    location: 'Georgia, EE. UU.',
    payRate: '$15.80 USD / Hora',
    duration: '5 Meses (Junio a Octubre)',
    cropType: 'Fresa y Arándano',
    housingIncluded: true,
    transportIncluded: true,
    slotsRemaining: 12,
    description: 'Empaque cuidadoso de fruta fresca en cajas para transporte. Ambiente familiar con capacitadores que hablan español.',
    requirements: [
      'Atención a los detalles para cuidar la fruta',
      'Puntualidad en los horarios de salida'
    ]
  },
  {
    id: 'job-3',
    title: 'Mantenimiento de Cultivos y Riego',
    companyName: 'Ranchos del Sol LLC',
    location: 'Carolina del Norte, EE. UU.',
    payRate: '$15.25 USD / Hora',
    duration: '7 Meses (Abril a Noviembre)',
    cropType: 'Vegetales y Hortalizas',
    housingIncluded: true,
    transportIncluded: true,
    slotsRemaining: 4,
    description: 'Revisión del riego por goteo, deshierbe amable y apoyo en la preparación del terreno para siembra.',
    requirements: [
      'Gusto por el trabajo agrícola',
      'Trabajo en equipo'
    ]
  }
];

export const INITIAL_DOCUMENTS: DocumentInfo[] = [
  {
    id: 'doc-1',
    title: 'Pasaporte Mexicano',
    subtitle: 'Vence en Diciembre 2028 (Válido)',
    category: 'passport',
    status: 'valid',
    updatedAt: 'Hace 2 días'
  },
  {
    id: 'doc-2',
    title: 'Fotografía Tamaño Credencial',
    subtitle: 'Fondo blanco (Aprobada por el equipo)',
    category: 'identificacion',
    status: 'valid',
    updatedAt: 'Hace 5 días'
  },
  {
    id: 'doc-3',
    title: 'Solicitud de Visa H-2A',
    subtitle: 'En revisión por nuestro equipo legal',
    category: 'visa',
    status: 'reviewing',
    updatedAt: 'Ayer'
  },
  {
    id: 'doc-4',
    title: 'Contrato de Trabajo Temporada 2026',
    subtitle: 'Pendiente de tu firma digital',
    category: 'contrato',
    status: 'expiring',
    updatedAt: 'Hoy'
  }
];

export const STAGE_STEPS_INFO = [
  { stage: 'registro', label: 'Registro de Datos', desc: 'Completaste tu información personal' },
  { stage: 'revision_documentos', label: 'Revisión de Papeles', desc: 'Revisamos que tus documentos estén completos' },
  { stage: 'entrevista', label: 'Entrevista Breve', desc: 'Charla rápida con el coordinador de empleo' },
  { stage: 'oferta_enviada', label: 'Contrato de Empleo', desc: 'Revisa y firma tu contrato para asegurar tu lugar' },
  { stage: 'visa_aprobada', label: 'Cita de Visa Aprobada', desc: 'Tu permiso de trabajo temporal está listo' },
  { stage: 'listo_para_viaje', label: '¡Listo para el Viaje!', desc: 'Punto de reunión y boleto de autobús preparado' }
];
