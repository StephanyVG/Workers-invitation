import React, { createContext, useContext, useState, useEffect } from 'react';
import { WorkerProfile, JobOffer, DocumentInfo, ToastMessage, ApplicationStatusStage } from '../types';
import { INITIAL_WORKER_PROFILE, MOCK_JOBS, INITIAL_DOCUMENTS } from '../data/mockData';
export interface FinalQuestionsData {
  social: {
    militaryServed: 'yes' | 'no' | null;
    militaryCountry: string;
    militaryBranch: string;
    militaryRank: string;
    militarySpecialty: string;
    militaryFromDate: string;
    militaryToDate: string;
    traveledCountries: 'yes' | 'no' | null;
    visitedCountries: Array<{ id: number; country: string }>;
    clanMember: 'yes' | 'no' | null;
    clanName?: string;
    belongedGroups: 'yes' | 'no' | null;
    organizationName?: string;
    weaponsTraining: 'yes' | 'no' | null;
    weaponsDetails?: string;
    rebelGroup: 'yes' | 'no' | null;
    rebelDetails?: string;
  };
  health: {
    contagiousDisease: 'yes' | 'no' | null;
    dangerousIllness: 'yes' | 'no' | null;
    drugAddiction: 'yes' | 'no' | null;
  };
  criminal: {
    q1: 'yes' | 'no' | null;
    q2: 'yes' | 'no' | null;
    q3: 'yes' | 'no' | null;
    q4: 'yes' | 'no' | null;
    q5: 'yes' | 'no' | null;
    q6: 'yes' | 'no' | null;
    q7: 'yes' | 'no' | null;
  };
  security: {
    q1: 'yes' | 'no' | null;
    q2: 'yes' | 'no' | null;
    q3: 'yes' | 'no' | null;
    q4: 'yes' | 'no' | null;
    q5: 'yes' | 'no' | null;
  };
  humanRights: {
    q1: 'yes' | 'no' | null;
    q2: 'yes' | 'no' | null;
    q3: 'yes' | 'no' | null;
    q4: 'yes' | 'no' | null;
    q5: 'yes' | 'no' | null;
  };
  immigration: {
    q1: 'yes' | 'no' | null;
    q2: 'yes' | 'no' | null;
    q3: 'yes' | 'no' | null;
    q4: 'yes' | 'no' | null;
    q5: 'yes' | 'no' | null;
    q6: 'yes' | 'no' | null;
    q7: 'yes' | 'no' | null;
  };
}

export const INITIAL_FINAL_QUESTIONS: FinalQuestionsData = {
  social: {
    militaryServed: 'yes',
    militaryCountry: 'USA',
    militaryBranch: 'Branch of service',
    militaryRank: 'Rank/Position',
    militarySpecialty: 'Military Speciality',
    militaryFromDate: 'MM/YYYY',
    militaryToDate: 'MM/YYYY',
    traveledCountries: 'yes',
    visitedCountries: [
      { id: 1, country: 'USA' },
      { id: 2, country: 'Panamá' },
    ],
    clanMember: 'no',
    belongedGroups: 'no',
    weaponsTraining: 'no',
    rebelGroup: 'no',
  },
  health: {
    contagiousDisease: 'no',
    dangerousIllness: 'no',
    drugAddiction: 'no',
  },
  criminal: {
    q1: 'no',
    q2: 'no',
    q3: 'no',
    q4: 'no',
    q5: 'no',
    q6: 'no',
    q7: 'no',
  },
  security: {
    q1: 'no',
    q2: 'no',
    q3: 'no',
    q4: 'no',
    q5: 'no',
  },
  humanRights: {
    q1: 'no',
    q2: 'no',
    q3: 'no',
    q4: 'no',
    q5: 'no',
  },
  immigration: {
    q1: 'no',
    q2: 'no',
    q3: 'no',
    q4: 'no',
    q5: 'no',
    q6: 'no',
    q7: 'no',
  },
};

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
  | 'job_details'
  | 'job_invitation_accepted'
  | 'job_offer_detail'
  | 'view_signed_document'
  | 'offer_accepted_confirmation'
  | 'available_times'
  | 'interview_scheduled_confirmation'
  | 'notifications'
  | 'video_loader'
  | 'video_call'
  | 'home'
  | 'jobs'
  | 'calendar'
  | 'documents'
  | 'profile'
  | 'apply_wizard'
  | 'visa_review_hub'
  | 'visa_review_ssn'
  | 'visa_review_contact'
  | 'visa_review_prev_travel'
  | 'visa_review_father'
  | 'visa_review_mother'
  | 'visa_review_marital'
  | 'visa_review_family_us'
  | 'visa_review_education'
  | 'visa_review_work'
  | 'visa_review_final_questions'
  | 'visa_review_consent'
  | 'visa_review_success'
  | 'view_ds160_document'
  | 'consular_details'
  | 'visa_photo_guide'
  | 'visa_camera_sim'
  | 'visa_review'
  | 'travel_itinerary'
  | 'i9_review'
  | 'i9_edit'
  | 'i9_confirmation'
  | 'view_i9_document'
  | 'refunds_hub'
  | 'refunds_visa'
  | 'refunds_transport'
  | 'refunds_accommodation'
  | 'refunds_food'
  | 'refunds_success'
  | 'refunds_status_details'
  | 'refunds_breakdown'
  | 'refunds_completed_success'
  | 'visa_employer_changes_review'
  | 'visa_employer_change_edit_job1'
  | 'visa_employer_change_edit_job2'
  | 'visa_employer_changes_confirmation';

export type AppLanguage = 'es' | 'en';

export interface EmployerJobChangeData {
  employerName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  telephone: string;
  jobTitle: string;
  supervisorSurname: string;
  supervisorGivenNames: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const INITIAL_JOB1_DATA: EmployerJobChangeData = {
  employerName: 'Green Valley Farms',
  streetAddress1: '123 Orchard Lane',
  streetAddress2: 'Suite B',
  city: 'Yakima',
  state: 'Washington',
  zipCode: '98901',
  telephone: '(509) 555-0143',
  jobTitle: 'Farm Hand',
  supervisorSurname: 'Smith',
  supervisorGivenNames: 'John',
  startDate: '01/2021',
  endDate: '12/2022',
  description: 'Pruning apple trees, harvesting fruit, general orchard maintenance.'
};

export const INITIAL_JOB2_DATA: EmployerJobChangeData = {
  employerName: 'Sunny Acres',
  streetAddress1: '456 Valley Road',
  streetAddress2: '',
  city: 'Fresno',
  state: 'California',
  zipCode: '93722',
  telephone: '(559) 555-0189',
  jobTitle: 'Field Supervisor',
  supervisorSurname: 'Rodriguez',
  supervisorGivenNames: 'Carlos',
  startDate: '03/2023',
  endDate: '11/2023',
  description: 'Irrigation management, supervising picking crews.'
};

export interface PushBannerNotification {
  id?: string;
  title: string;
  description: string;
  time: string;
  targetTab: AppTab;
}

export interface ScheduledInterviewInfo {
  date: string;
  time: string;
  farm: string;
}

export interface I9FormData {
  lastName: string;
  firstName: string;
  middleInitial: string;
  dateOfBirth: string;
  citizenshipStatus: string;
  address: string;
  passportNumber: string;
  countryOfIssuance: string;
  visaExpirationDate: string;
}

export interface RefundsProgress {
  visa: {
    completed: boolean;
    notApplicable?: boolean;
    appointmentFee: boolean;
    borderFee: boolean;
  };
  transport: {
    completed: boolean;
    notApplicable?: boolean;
    consulateTransport: boolean;
    consulateAmount: string;
    consulateCurrency: 'MXN' | 'USD';
    consulateReceiptPhoto?: string;
    workplaceTransport: boolean;
    workplaceAmount?: string;
    workplaceCurrency?: 'MXN' | 'USD';
    workplaceReceiptPhoto?: string;
  };
  hotel: {
    completed: boolean;
    notApplicable?: boolean;
    amount: string;
    currency: 'MXN' | 'USD';
    nights: number;
    people: number;
    receiptPhoto?: string;
  };
  food: {
    completed: boolean;
    notApplicable?: boolean;
    foodAmount: string;
    foodCurrency: 'MXN' | 'USD';
    foodReceiptPhoto?: string;
    othersAmount: string;
    othersCurrency: 'MXN' | 'USD';
    othersReceiptPhoto?: string;
  };
  submitted: boolean;
  status?: 'pending' | 'refunded';
}

export const INITIAL_REFUNDS_PROGRESS: RefundsProgress = {
  visa: {
    completed: false,
    notApplicable: false,
    appointmentFee: false,
    borderFee: false,
  },
  transport: {
    completed: false,
    consulateTransport: false,
    consulateAmount: '25.00',
    consulateCurrency: 'MXN',
    workplaceTransport: false,
    workplaceAmount: '0.00',
    workplaceCurrency: 'USD',
  },
  hotel: {
    completed: false,
    amount: '0.00',
    currency: 'USD',
    nights: 1,
    people: 1,
  },
  food: {
    completed: false,
    foodAmount: '12.00',
    foodCurrency: 'USD',
    othersAmount: '0.00',
    othersCurrency: 'USD',
  },
  submitted: false,
  status: 'pending',
};

interface AppContextType {
  refundsProgress: RefundsProgress;
  updateRefundsProgress: (updates: Partial<RefundsProgress>) => void;
  markRefundCategoryDone: (category: 'visa' | 'transport' | 'hotel' | 'food', notApplicable?: boolean) => void;
  submitAllRefunds: () => void;
  setRefundStatus: (status: 'pending' | 'refunded') => void;
  showRefundCameraModal: boolean;
  setShowRefundCameraModal: React.Dispatch<React.SetStateAction<boolean>>;
  showRefundFinishLaterModal: boolean;
  setShowRefundFinishLaterModal: React.Dispatch<React.SetStateAction<boolean>>;
  showRefundConfirmModal: boolean;
  setShowRefundConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  refundCameraTarget: { category: 'transport' | 'hotel' | 'food' | 'others'; subField?: string } | null;
  setRefundCameraTarget: React.Dispatch<React.SetStateAction<{ category: 'transport' | 'hotel' | 'food' | 'others'; subField?: string } | null>>;
  worker: WorkerProfile;
  jobs: JobOffer[];
  documents: DocumentInfo[];
  currentTab: AppTab;
  setCurrentTab: (tab: AppTab) => void;
  showWelcomeModal: boolean;
  setShowWelcomeModal: (show: boolean) => void;
  showCodeOfferModal: boolean;
  setShowCodeOfferModal: (show: boolean) => void;
  showInterviewCompletedModal: boolean;
  setShowInterviewCompletedModal: (show: boolean) => void;
  showPushBanner: boolean;
  setShowPushBanner: React.Dispatch<React.SetStateAction<boolean>>;
  pushBannerData: PushBannerNotification | null;
  setPushBannerData: React.Dispatch<React.SetStateAction<PushBannerNotification | null>>;
  triggerPushBanner: (customData?: PushBannerNotification) => void;
  selectedDocumentType: 'barcode' | 'document' | 'visa';
  setSelectedDocumentType: (type: 'barcode' | 'document' | 'visa') => void;
  hasConfirmedConsularDetails: boolean;
  setHasConfirmedConsularDetails: React.Dispatch<React.SetStateAction<boolean>>;
  isVisaApprovedConfirmed: boolean;
  setIsVisaApprovedConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  hasUploadedVisa: boolean;
  setHasUploadedVisa: React.Dispatch<React.SetStateAction<boolean>>;
  showConsularDetailsModal: boolean;
  setShowConsularDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
  showTransportBottomSheet: boolean;
  setShowTransportBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  showTravelDetailsModal: boolean;
  setShowTravelDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
  showArrivalCongratsModal: boolean;
  setShowArrivalCongratsModal: React.Dispatch<React.SetStateAction<boolean>>;
  transportPreference: 'employer' | 'own' | null;
  setTransportPreference: React.Dispatch<React.SetStateAction<'employer' | 'own' | null>>;
  hasConfirmedTravelItinerary: boolean;
  setHasConfirmedTravelItinerary: React.Dispatch<React.SetStateAction<boolean>>;
  hasArrivedAtJob: boolean;
  setHasArrivedAtJob: React.Dispatch<React.SetStateAction<boolean>>;
  hasCompletedI9Review: boolean;
  setHasCompletedI9Review: React.Dispatch<React.SetStateAction<boolean>>;
  showI9SignBottomSheet: boolean;
  setShowI9SignBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  i9FormData: I9FormData;
  setI9FormData: React.Dispatch<React.SetStateAction<I9FormData>>;
  showI9SavedToast: boolean;
  setShowI9SavedToast: React.Dispatch<React.SetStateAction<boolean>>;
  scheduledInterview: ScheduledInterviewInfo | null;
  setScheduledInterview: (interview: ScheduledInterviewInfo | null) => void;
  selectedAppointmentDetail: ScheduledInterviewInfo | null;
  setSelectedAppointmentDetail: React.Dispatch<React.SetStateAction<ScheduledInterviewInfo | null>>;
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
  finalQuestionsData: FinalQuestionsData;
  updateFinalQuestions: (updated: Partial<FinalQuestionsData>) => void;
  editingFinalQuestionFromReview: boolean;
  setEditingFinalQuestionFromReview: React.Dispatch<React.SetStateAction<boolean>>;
  visaReviewSection: number;
  setVisaReviewSection: (section: number) => void;
  hasEmployerVisaChanges: boolean;
  setHasEmployerVisaChanges: React.Dispatch<React.SetStateAction<boolean>>;
  employerVisaChangesReviewed: boolean;
  setEmployerVisaChangesReviewed: React.Dispatch<React.SetStateAction<boolean>>;
  dontShowFinalReviewAgain: boolean;
  setDontShowFinalReviewAgain: React.Dispatch<React.SetStateAction<boolean>>;
  job1Status: 'pending' | 'resolved' | 'approved' | 'rejected';
  setJob1Status: React.Dispatch<React.SetStateAction<'pending' | 'resolved' | 'approved' | 'rejected'>>;
  job2Status: 'pending' | 'resolved' | 'approved' | 'rejected';
  setJob2Status: React.Dispatch<React.SetStateAction<'pending' | 'resolved' | 'approved' | 'rejected'>>;
  job3Status: 'pending' | 'accepted' | 'rejected';
  setJob3Status: React.Dispatch<React.SetStateAction<'pending' | 'accepted' | 'rejected'>>;
  job1Data: EmployerJobChangeData;
  setJob1Data: React.Dispatch<React.SetStateAction<EmployerJobChangeData>>;
  updateJob1Data: (updates: Partial<EmployerJobChangeData>) => void;
  job2Data: EmployerJobChangeData;
  setJob2Data: React.Dispatch<React.SetStateAction<EmployerJobChangeData>>;
  updateJob2Data: (updates: Partial<EmployerJobChangeData>) => void;
  showEmployerChangesSuccessToast: boolean;
  setShowEmployerChangesSuccessToast: React.Dispatch<React.SetStateAction<boolean>>;
  resetEmployerChanges: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Ensure URL is immediately forced to root '/' upon entry
if (typeof window !== 'undefined') {
  if (window.location.pathname !== '/' || window.location.search || window.location.hash) {
    window.history.replaceState(null, '', '/');
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [worker, setWorker] = useState<WorkerProfile>(() => {
    const saved = localStorage.getItem('zipmi_worker_profile');
    const parsed = saved ? JSON.parse(saved) : INITIAL_WORKER_PROFILE;
    return { ...parsed, photoUrl: '/profile.png' };
  });

  const [documents, setDocuments] = useState<DocumentInfo[]>(() => {
    const saved = localStorage.getItem('zipmi_worker_docs');
    return saved ? JSON.parse(saved) : INITIAL_DOCUMENTS;
  });

  // Preserve current screen across browser refreshes
  const [currentTab, setCurrentTab] = useState<AppTab>(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab') as AppTab;
    if (tab) return tab;
    const saved = localStorage.getItem('zipmi_current_tab') as AppTab;
    if (saved && saved.startsWith('visa_employer_change')) {
      return 'home';
    }
    return saved || 'splash';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_current_tab', currentTab);
  }, [currentTab]);

  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(false);
  const [showCodeOfferModal, setShowCodeOfferModal] = useState<boolean>(false);
  const [showInterviewCompletedModal, setShowInterviewCompletedModal] = useState<boolean>(false);

  const [showPushBanner, setShowPushBanner] = useState<boolean>(false);
  const [pushBannerData, setPushBannerData] = useState<PushBannerNotification | null>(null);

  const triggerPushBanner = (customData?: PushBannerNotification) => {
    if (customData) {
      setPushBannerData(customData);
    }
    setShowPushBanner(true);
  };

  const [selectedDocumentType, setSelectedDocumentType] = useState<'barcode' | 'document' | 'visa'>('barcode');

  const [hasConfirmedConsularDetails, setHasConfirmedConsularDetails] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_confirmed_consular');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_confirmed_consular', String(hasConfirmedConsularDetails));
  }, [hasConfirmedConsularDetails]);

  const [isVisaApprovedConfirmed, setIsVisaApprovedConfirmed] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_visa_approved_confirmed');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_visa_approved_confirmed', String(isVisaApprovedConfirmed));
  }, [isVisaApprovedConfirmed]);

  const [hasUploadedVisa, setHasUploadedVisa] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_has_uploaded_visa');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_has_uploaded_visa', String(hasUploadedVisa));
  }, [hasUploadedVisa]);

  const [showConsularDetailsModal, setShowConsularDetailsModal] = useState<boolean>(false);
  const [showTransportBottomSheet, setShowTransportBottomSheet] = useState<boolean>(false);
  const [showTravelDetailsModal, setShowTravelDetailsModal] = useState<boolean>(false);
  const [showArrivalCongratsModal, setShowArrivalCongratsModal] = useState<boolean>(false);

  const [transportPreference, setTransportPreference] = useState<'employer' | 'own' | null>(() => {
    const saved = localStorage.getItem('zipmi_transport_preference');
    return (saved as 'employer' | 'own' | null) || 'employer';
  });

  useEffect(() => {
    if (transportPreference) {
      localStorage.setItem('zipmi_transport_preference', transportPreference);
    } else {
      localStorage.removeItem('zipmi_transport_preference');
    }
  }, [transportPreference]);

  const [hasConfirmedTravelItinerary, setHasConfirmedTravelItinerary] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_confirmed_travel_itinerary');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_confirmed_travel_itinerary', String(hasConfirmedTravelItinerary));
  }, [hasConfirmedTravelItinerary]);

  const [hasArrivedAtJob, setHasArrivedAtJob] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_has_arrived_at_job');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_has_arrived_at_job', String(hasArrivedAtJob));
  }, [hasArrivedAtJob]);

  const [hasCompletedI9Review, setHasCompletedI9Review] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_has_completed_i9_review');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_has_completed_i9_review', String(hasCompletedI9Review));
  }, [hasCompletedI9Review]);

  const [showI9SignBottomSheet, setShowI9SignBottomSheet] = useState<boolean>(false);
  const [showI9SavedToast, setShowI9SavedToast] = useState<boolean>(false);

  const [i9FormData, setI9FormData] = useState<I9FormData>(() => {
    const saved = localStorage.getItem('zipmi_i9_form_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      lastName: 'García',
      firstName: 'Francisco',
      middleInitial: 'Francisco',
      dateOfBirth: '24/12/1960',
      citizenshipStatus: 'A noncitizen national of the United States',
      address: '123 Farm Rd, Sunnyside, WA 98944',
      passportNumber: '123213',
      countryOfIssuance: 'Mexico',
      visaExpirationDate: '12/12/2026',
    };
  });

  useEffect(() => {
    localStorage.setItem('zipmi_i9_form_data', JSON.stringify(i9FormData));
  }, [i9FormData]);

  const [refundsProgress, setRefundsProgress] = useState<RefundsProgress>(() => {
    const saved = localStorage.getItem('zipmi_refunds_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return INITIAL_REFUNDS_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem('zipmi_refunds_progress', JSON.stringify(refundsProgress));
  }, [refundsProgress]);

  const [showRefundCameraModal, setShowRefundCameraModal] = useState<boolean>(false);
  const [showRefundFinishLaterModal, setShowRefundFinishLaterModal] = useState<boolean>(false);
  const [showRefundConfirmModal, setShowRefundConfirmModal] = useState<boolean>(false);
  const [refundCameraTarget, setRefundCameraTarget] = useState<{ category: 'transport' | 'hotel' | 'food' | 'others'; subField?: string } | null>(null);

  // Employer Visa Changes State (Figma nodes 1628:54217, 17:32148 - 17:33453) - Oculto por defecto
  const [hasEmployerVisaChanges, setHasEmployerVisaChanges] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_has_employer_visa_changes');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_has_employer_visa_changes', String(hasEmployerVisaChanges));
  }, [hasEmployerVisaChanges]);

  const [employerVisaChangesReviewed, setEmployerVisaChangesReviewed] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_employer_changes_reviewed');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_employer_changes_reviewed', String(employerVisaChangesReviewed));
  }, [employerVisaChangesReviewed]);

  const [dontShowFinalReviewAgain, setDontShowFinalReviewAgain] = useState<boolean>(() => {
    const saved = localStorage.getItem('zipmi_dont_show_final_review');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_dont_show_final_review', String(dontShowFinalReviewAgain));
  }, [dontShowFinalReviewAgain]);

  const [job1Status, setJob1Status] = useState<'pending' | 'resolved' | 'approved' | 'rejected'>(() => {
    const saved = localStorage.getItem('zipmi_job1_status');
    return (saved as any) || 'pending';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_job1_status', job1Status);
  }, [job1Status]);

  const [job2Status, setJob2Status] = useState<'pending' | 'resolved' | 'approved' | 'rejected'>(() => {
    const saved = localStorage.getItem('zipmi_job2_status');
    return (saved as any) || 'pending';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_job2_status', job2Status);
  }, [job2Status]);

  const [job3Status, setJob3Status] = useState<'pending' | 'accepted' | 'rejected'>(() => {
    const saved = localStorage.getItem('zipmi_job3_status');
    return (saved as any) || 'pending';
  });

  useEffect(() => {
    localStorage.setItem('zipmi_job3_status', job3Status);
  }, [job3Status]);

  const [job1Data, setJob1Data] = useState<EmployerJobChangeData>(() => {
    const saved = localStorage.getItem('zipmi_job1_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return INITIAL_JOB1_DATA;
  });

  useEffect(() => {
    localStorage.setItem('zipmi_job1_data', JSON.stringify(job1Data));
  }, [job1Data]);

  const [job2Data, setJob2Data] = useState<EmployerJobChangeData>(() => {
    const saved = localStorage.getItem('zipmi_job2_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return INITIAL_JOB2_DATA;
  });

  useEffect(() => {
    localStorage.setItem('zipmi_job2_data', JSON.stringify(job2Data));
  }, [job2Data]);

  const [showEmployerChangesSuccessToast, setShowEmployerChangesSuccessToast] = useState<boolean>(false);

  const updateJob1Data = (updates: Partial<EmployerJobChangeData>) => {
    setJob1Data((prev) => ({ ...prev, ...updates }));
  };

  const updateJob2Data = (updates: Partial<EmployerJobChangeData>) => {
    setJob2Data((prev) => ({ ...prev, ...updates }));
  };

  const resetEmployerChanges = () => {
    localStorage.removeItem('zipmi_has_employer_visa_changes');
    localStorage.removeItem('zipmi_employer_changes_reviewed');
    localStorage.removeItem('zipmi_dont_show_final_review');
    localStorage.removeItem('zipmi_job1_status');
    localStorage.removeItem('zipmi_job2_status');
    localStorage.removeItem('zipmi_job3_status');
    localStorage.removeItem('zipmi_job1_data');
    localStorage.removeItem('zipmi_job2_data');
    setHasEmployerVisaChanges(true);
    setEmployerVisaChangesReviewed(false);
    setDontShowFinalReviewAgain(false);
    setJob1Status('pending');
    setJob2Status('pending');
    setJob3Status('pending');
    setJob1Data(INITIAL_JOB1_DATA);
    setJob2Data(INITIAL_JOB2_DATA);
    setShowEmployerChangesSuccessToast(false);
  };

  const updateRefundsProgress = (updates: Partial<RefundsProgress>) => {
    setRefundsProgress((prev) => ({
      ...prev,
      ...updates,
      visa: { ...prev.visa, ...(updates.visa || {}) },
      transport: { ...prev.transport, ...(updates.transport || {}) },
      hotel: { ...prev.hotel, ...(updates.hotel || {}) },
      food: { ...prev.food, ...(updates.food || {}) },
    }));
  };

  const markRefundCategoryDone = (category: 'visa' | 'transport' | 'hotel' | 'food', notApplicable?: boolean) => {
    setRefundsProgress((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        completed: notApplicable === undefined ? true : false,
        notApplicable: !!notApplicable,
      },
    }));
  };

  const submitAllRefunds = () => {
    setRefundsProgress((prev) => ({ ...prev, submitted: true, status: 'pending' }));
    addToast(
      language === 'es' ? 'Reembolsos Enviados' : 'Refunds Submitted',
      language === 'es'
        ? 'Tu solicitud de reembolso ha sido enviada con éxito a tu empleador.'
        : 'Your refund request has been successfully submitted to your employer.',
      'success'
    );
  };

  const setRefundStatus = (status: 'pending' | 'refunded') => {
    setRefundsProgress((prev) => ({ ...prev, status }));
  };

  const [scheduledInterview, setScheduledInterview] = useState<ScheduledInterviewInfo | null>(() => {
    const saved = localStorage.getItem('zipmi_scheduled_interview');
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedAppointmentDetail, setSelectedAppointmentDetail] = useState<ScheduledInterviewInfo | null>(null);

  useEffect(() => {
    if (scheduledInterview) {
      localStorage.setItem('zipmi_scheduled_interview', JSON.stringify(scheduledInterview));
    } else {
      localStorage.removeItem('zipmi_scheduled_interview');
    }
  }, [scheduledInterview]);

  const [language, setLanguage] = useState<AppLanguage>('es');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [isFullPhoneView, setIsFullPhoneView] = useState<boolean>(false);
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<JobOffer | null>(null);
  const [visaReviewSection, setVisaReviewSection] = useState<number>(0);

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

  useEffect(() => {
    localStorage.setItem('zipmi_show_code_offer_modal', String(showCodeOfferModal));
  }, [showCodeOfferModal]);

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
    // Confetti animation disabled
  };

  const [finalQuestionsData, setFinalQuestionsData] = useState<FinalQuestionsData>(() => {
    const saved = localStorage.getItem('zipmi_final_questions');
    return saved ? JSON.parse(saved) : INITIAL_FINAL_QUESTIONS;
  });

  const [editingFinalQuestionFromReview, setEditingFinalQuestionFromReview] = useState<boolean>(false);

  const updateFinalQuestions = (updated: Partial<FinalQuestionsData>) => {
    setFinalQuestionsData((prev) => {
      const next = { ...prev, ...updated };
      localStorage.setItem('zipmi_final_questions', JSON.stringify(next));
      return next;
    });
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
    localStorage.removeItem('zipmi_show_code_offer_modal');
    localStorage.removeItem('zipmi_current_tab');
    localStorage.removeItem('zipmi_onboarding_path');
    localStorage.removeItem('zipmi_confirmed_consular');
    localStorage.removeItem('zipmi_visa_approved_confirmed');
    localStorage.removeItem('zipmi_has_uploaded_visa');
    localStorage.removeItem('zipmi_transport_preference');
    localStorage.removeItem('zipmi_confirmed_travel_itinerary');
    localStorage.removeItem('zipmi_has_arrived_at_job');
    localStorage.removeItem('zipmi_has_completed_i9_review');
    localStorage.removeItem('zipmi_i9_form_data');
    localStorage.removeItem('zipmi_refunds_progress');
    sessionStorage.removeItem('zipmi_i9_banner_dismissed');
    setHasConfirmedConsularDetails(false);
    setIsVisaApprovedConfirmed(false);
    setHasUploadedVisa(false);
    setTransportPreference('employer');
    setHasConfirmedTravelItinerary(false);
    setHasArrivedAtJob(false);
    setHasCompletedI9Review(false);
    setShowI9SignBottomSheet(false);
    setShowI9SavedToast(false);
    setRefundsProgress(INITIAL_REFUNDS_PROGRESS);
    setShowRefundCameraModal(false);
    setShowRefundFinishLaterModal(false);
    setShowRefundConfirmModal(false);
    setRefundCameraTarget(null);
    setWorker(INITIAL_WORKER_PROFILE);
    setDocuments(INITIAL_DOCUMENTS);
    localStorage.removeItem('zipmi_current_tab');
    localStorage.removeItem('zipmi_final_questions');
    setFinalQuestionsData(INITIAL_FINAL_QUESTIONS);
    setEditingFinalQuestionFromReview(false);
    setCurrentTab('splash');
    setShowWelcomeModal(false);
    setShowCodeOfferModal(false);
    setSelectedJobForDetail(null);
    resetEmployerChanges();
    setToasts([]);
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
        refundsProgress,
        updateRefundsProgress,
        markRefundCategoryDone,
        submitAllRefunds,
        setRefundStatus,
        showRefundCameraModal,
        setShowRefundCameraModal,
        showRefundFinishLaterModal,
        setShowRefundFinishLaterModal,
        showRefundConfirmModal,
        setShowRefundConfirmModal,
        refundCameraTarget,
        setRefundCameraTarget,
        worker,
        jobs: MOCK_JOBS,
        documents,
        currentTab,
        setCurrentTab,
        showWelcomeModal,
        setShowWelcomeModal,
        showCodeOfferModal,
        setShowCodeOfferModal,
        showInterviewCompletedModal,
        setShowInterviewCompletedModal,
        showPushBanner,
        setShowPushBanner,
        pushBannerData,
        setPushBannerData,
        triggerPushBanner,
        selectedDocumentType,
        setSelectedDocumentType,
        hasConfirmedConsularDetails,
        setHasConfirmedConsularDetails,
        isVisaApprovedConfirmed,
        setIsVisaApprovedConfirmed,
        hasUploadedVisa,
        setHasUploadedVisa,
        showConsularDetailsModal,
        setShowConsularDetailsModal,
        showTransportBottomSheet,
        setShowTransportBottomSheet,
        showTravelDetailsModal,
        setShowTravelDetailsModal,
        showArrivalCongratsModal,
        setShowArrivalCongratsModal,
        transportPreference,
        setTransportPreference,
        hasConfirmedTravelItinerary,
        setHasConfirmedTravelItinerary,
        hasArrivedAtJob,
        setHasArrivedAtJob,
        hasCompletedI9Review,
        setHasCompletedI9Review,
        showI9SignBottomSheet,
        setShowI9SignBottomSheet,
        i9FormData,
        setI9FormData,
        showI9SavedToast,
        setShowI9SavedToast,
        scheduledInterview,
        setScheduledInterview,
        selectedAppointmentDetail,
        setSelectedAppointmentDetail,
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
        triggerConfetti,
        finalQuestionsData,
        updateFinalQuestions,
        editingFinalQuestionFromReview,
        setEditingFinalQuestionFromReview,
        visaReviewSection,
        setVisaReviewSection,
        hasEmployerVisaChanges,
        setHasEmployerVisaChanges,
        employerVisaChangesReviewed,
        setEmployerVisaChangesReviewed,
        dontShowFinalReviewAgain,
        setDontShowFinalReviewAgain,
        job1Status,
        setJob1Status,
        job2Status,
        setJob2Status,
        job3Status,
        setJob3Status,
        job1Data,
        setJob1Data,
        updateJob1Data,
        job2Data,
        setJob2Data,
        updateJob2Data,
        showEmployerChangesSuccessToast,
        setShowEmployerChangesSuccessToast,
        resetEmployerChanges
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
