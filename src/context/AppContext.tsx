import React, { createContext, useContext, useState, useEffect } from 'react';
import { WorkerProfile, JobOffer, DocumentInfo, ToastMessage, ApplicationStatusStage } from '../types';
import { INITIAL_WORKER_PROFILE, MOCK_JOBS, INITIAL_DOCUMENTS } from '../data/mockData';
import confetti from 'canvas-confetti';

export type AppTab = 
  | 'splash'
  | 'language'
  | 'welcome'
  | 'invite_choice'
  | 'phone_auth'
  | 'otp_verify'
  | 'employer_code'
  | 'enter_code'
  | 'verify_details'
  | 'great_news'
  | 'personal_info'
  | 'terms_service'
  | 'h2_intro'
  | 'us_location_question'
  | 'h2_visa_intro'
  | 'eligibility_chat'
  | 'great_news_h2'
  | 'step1_personal_intro'
  | 'camera_permissions'
  | 'passport_photo_guide'
  | 'passport_camera_sim'
  | 'passport_processing_loader'
  | 'scanned_passport_details'
  | 'profile_photo_guide'
  | 'profile_camera_sim'
  | 'profile_processing_loader'
  | 'confirm_profile_photo'
  | 'step2_contact_details'
  | 'step3_address_id'
  | 'step4_background_survey'
  | 'step5_emergency_contact'
  | 'step6_parents_info'
  | 'step7_marital_status'
  | 'step8_family_us'
  | 'step9_part2_intro'
  | 'step10_visa_preference'
  | 'step11_work_skills'
  | 'step11_h2b_work_skills'
  | 'step12_physical_limitations'
  | 'step13_work_availability'
  | 'step14_part3_intro'
  | 'step15_education_level'
  | 'step16_english_level'
  | 'step17_work_experience'
  | 'step18_part4_intro'
  | 'step19_social_info'
  | 'step20_health_safety'
  | 'step21_criminal_history'
  | 'step22_security_terrorism'
  | 'step23_human_rights'
  | 'step24_immigration_legal'
  | 'step25_final_review'
  | 'step26_finished_profile'
  | 'welcome_offer'
  | 'job_offer_detail'
  | 'offer_accepted_confirmation'
  | 'available_times'
  | 'home'
  | 'jobs'
  | 'calendar'
  | 'documents'
  | 'profile'
  | 'apply_wizard';

export type AppLanguage = 'es' | 'en';

interface AppContextType {
  worker: WorkerProfile;
  jobs: JobOffer[];
  documents: DocumentInfo[];
  currentTab: AppTab;
  setCurrentTab: (tab: AppTab) => void;
  showWelcomeModal: boolean;
  setShowWelcomeModal: (show: boolean) => void;
  showPushBanner: boolean;
  setShowPushBanner: React.Dispatch<React.SetStateAction<boolean>>;
  triggerPushBanner: () => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  toasts: ToastMessage[];
  addToast: (title: string, description?: string, type?: ToastMessage['type']) => void;
  removeToast: (id: string) => void;
  updateWorker: (updated: Partial<WorkerProfile>) => void;
  applyToJob: (jobId: string) => void;
  uploadDocument: (title: string, category: DocumentInfo['category']) => void;
  signContract: (signatureUrl: string) => void;
  advanceStage: () => void;
  resetDemoData: () => void;
  isOffline: boolean;
  setIsOffline: React.Dispatch<React.SetStateAction<boolean>>;
  isFullPhoneView: boolean;
  setIsFullPhoneView: React.Dispatch<React.SetStateAction<boolean>>;
  selectedJobForDetail: JobOffer | null;
  setSelectedJobForDetail: (job: JobOffer | null) => void;
  selectedVisaType: 'h2a' | 'h2b';
  setSelectedVisaType: (visa: 'h2a' | 'h2b') => void;
  onboardingPath: 'invite' | 'search' | null;
  setOnboardingPath: (path: 'invite' | 'search' | null) => void;
  triggerConfetti: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [worker, setWorker] = useState<WorkerProfile>(() => {
    const saved = localStorage.getItem('zipmi_worker_profile');
    return saved ? JSON.parse(saved) : INITIAL_WORKER_PROFILE;
  });

  const [documents, setDocuments] = useState<DocumentInfo[]>(() => {
    const saved = localStorage.getItem('zipmi_worker_docs');
    return saved ? JSON.parse(saved) : INITIAL_DOCUMENTS;
  });

  const [currentTab, setCurrentTab] = useState<AppTab>(() => {
    // URL query check: ?reset=true resets flow to splash immediately
    if (typeof window !== 'undefined' && window.location.search.includes('reset')) {
      localStorage.removeItem('zipmi_current_tab');
      localStorage.removeItem('zipmi_onboarding_path');
      return 'splash';
    }
    const savedTab = localStorage.getItem('zipmi_current_tab');
    return (savedTab as AppTab) || 'splash';
  });

  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_show_welcome_modal');
    return saved === 'true';
  });

  const [showPushBanner, setShowPushBanner] = useState<boolean>(true);

  const triggerPushBanner = () => {
    setShowPushBanner(true);
  };

  const [language, setLanguage] = useState<AppLanguage>('es');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [isFullPhoneView, setIsFullPhoneView] = useState<boolean>(false);
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<JobOffer | null>(null);

  useEffect(() => {
    localStorage.setItem('zipmi_worker_profile', JSON.stringify(worker));
  }, [worker]);

  useEffect(() => {
    localStorage.setItem('zipmi_worker_docs', JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    localStorage.setItem('zipmi_current_tab', currentTab);
  }, [currentTab]);

  useEffect(() => {
    localStorage.setItem('zipmi_show_welcome_modal', String(showWelcomeModal));
  }, [showWelcomeModal]);

  const addToast = (title: string, description?: string, type: ToastMessage['type'] = 'info') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 5);
    const newToast: ToastMessage = { id, title, description, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect fired');
    }
  };

  const updateWorker = (updated: Partial<WorkerProfile>) => {
    setWorker((prev) => ({ ...prev, ...updated }));
  };

  const applyToJob = (jobId: string) => {
    const targetJob = MOCK_JOBS.find((j) => j.id === jobId);
    setWorker((prev) => ({
      ...prev,
      appliedJobId: jobId,
      status: 'revision_documentos'
    }));
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Solicitud Enviada!' : 'Application Sent!',
      language === 'es' 
        ? `Te postulaste con éxito a "${targetJob?.title || 'la vacante'}".`
        : `You successfully applied to "${targetJob?.title || 'the job'}".`,
      'success'
    );
  };

  const uploadDocument = (title: string, category: DocumentInfo['category']) => {
    const newDoc: DocumentInfo = {
      id: 'doc-' + Date.now(),
      title,
      subtitle: language === 'es' ? 'Subido por ti recientemente (En revisión)' : 'Recently uploaded by you (Under review)',
      category,
      status: 'reviewing',
      updatedAt: language === 'es' ? 'Hace un momento' : 'Just now'
    };
    setDocuments((prev) => [newDoc, ...prev]);
    addToast(
      language === 'es' ? 'Documento Guardado' : 'Document Saved',
      language === 'es'
        ? `Recibimos tu foto/copia de "${title}".`
        : `We received your copy of "${title}".`,
      'success'
    );
  };

  const signContract = (signatureUrl: string) => {
    setWorker((prev) => ({
      ...prev,
      hasSignedContract: true,
      signatureUrl,
      status: 'visa_aprobada'
    }));
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Contrato Firmado!' : 'Contract Signed!',
      language === 'es'
        ? 'Tu firma quedó registrada correctamente.'
        : 'Your signature has been registered successfully.',
      'success'
    );
  };

  const STAGES_ORDER: ApplicationStatusStage[] = [
    'registro',
    'revision_documentos',
    'entrevista',
    'oferta_enviada',
    'visa_aprobada',
    'listo_para_viaje'
  ];

  const advanceStage = () => {
    const currentIndex = STAGES_ORDER.indexOf(worker.status);
    if (currentIndex < STAGES_ORDER.length - 1) {
      const nextStage = STAGES_ORDER[currentIndex + 1];
      setWorker((prev) => ({ ...prev, status: nextStage }));
      triggerConfetti();
      addToast(
        language === 'es' ? '¡Avanzaste en tu Proceso!' : 'Stage Advanced!',
        language === 'es' ? 'El equipo de Zipmi actualizó tu estado.' : 'Zipmi team updated your status.',
        'success'
      );
    } else {
      addToast(
        language === 'es' ? 'Proceso Completado' : 'Process Completed',
        language === 'es' ? '¡Felicidades! Ya estás listo para tu viaje.' : 'Congratulations! You are ready for your trip.',
        'info'
      );
    }
  };

  const resetDemoData = () => {
    localStorage.removeItem('zipmi_worker_profile');
    localStorage.removeItem('zipmi_worker_docs');
    localStorage.removeItem('zipmi_show_welcome_modal');
    localStorage.removeItem('zipmi_current_tab');
    localStorage.removeItem('zipmi_onboarding_path');
    setWorker(INITIAL_WORKER_PROFILE);
    setDocuments(INITIAL_DOCUMENTS);
    setOnboardingPath(null);
    setCurrentTab('splash');
    setShowWelcomeModal(false);
    setSelectedJobForDetail(null);
    addToast(
      language === 'es' ? 'Flujo Reiniciado al Inicio' : 'Flow Reset to Start',
      language === 'es' ? 'Regresaste a la pantalla inicial de bienvenida.' : 'Returned to initial welcome screen.',
      'info'
    );
  };

  const [selectedVisaType, setSelectedVisaType] = useState<'h2a' | 'h2b'>('h2a');
  const [onboardingPath, setOnboardingPath] = useState<'invite' | 'search' | null>(() => {
    const saved = localStorage.getItem('zipmi_onboarding_path');
    return (saved as 'invite' | 'search') || null;
  });

  useEffect(() => {
    if (onboardingPath) {
      localStorage.setItem('zipmi_onboarding_path', onboardingPath);
    } else {
      localStorage.removeItem('zipmi_onboarding_path');
    }
  }, [onboardingPath]);

  return (
    <AppContext.Provider
      value={{
        worker,
        jobs: MOCK_JOBS,
        documents,
        currentTab,
        setCurrentTab,
        showWelcomeModal,
        setShowWelcomeModal,
        showPushBanner,
        setShowPushBanner,
        triggerPushBanner,
        language,
        setLanguage,
        toasts,
        addToast,
        removeToast,
        updateWorker,
        applyToJob,
        uploadDocument,
        signContract,
        advanceStage,
        resetDemoData,
        isOffline,
        setIsOffline,
        isFullPhoneView,
        setIsFullPhoneView,
        selectedJobForDetail,
        setSelectedJobForDetail,
        selectedVisaType,
        setSelectedVisaType,
        onboardingPath,
        setOnboardingPath,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp debe usarse dentro de un AppProvider');
  return context;
};
