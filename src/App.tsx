import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { MobileContainer } from './components/layout/MobileContainer';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { HomeView } from './views/HomeView';
import { JobsView } from './views/JobsView';
import { DocumentsView } from './views/DocumentsView';
import { ProfileView } from './views/ProfileView';
import { CalendarView } from './views/CalendarView';
import { MultiStepRegistration } from './components/workflow/MultiStepRegistration';
import { SplashScreen } from './components/onboarding/SplashScreen';
import { LanguageSelectScreen } from './components/onboarding/LanguageSelectScreen';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { InviteOrSearchScreen } from './components/onboarding/InviteOrSearchScreen';
import { PhoneAuthScreen } from './components/onboarding/PhoneAuthScreen';
import { OtpVerifyScreen } from './components/onboarding/OtpVerifyScreen';
import { EmployerCodeScreen } from './components/onboarding/EmployerCodeScreen';
import { EnterCodeScreen } from './components/onboarding/EnterCodeScreen';
import { VerifyDetailsScreen } from './components/onboarding/VerifyDetailsScreen';
import { GreatNewsScreen } from './components/onboarding/GreatNewsScreen';
import { PersonalInfoScreen } from './components/onboarding/PersonalInfoScreen';
import { TermsOfServiceScreen } from './components/onboarding/TermsOfServiceScreen';
import { H2IntroScreen } from './components/onboarding/H2IntroScreen';
import { UsLocationQuestionScreen } from './components/onboarding/UsLocationQuestionScreen';
import { H2VisaIntroScreen } from './components/onboarding/H2VisaIntroScreen';
import { EligibilityChatWizard } from './components/onboarding/EligibilityChatWizard';
import { GreatNewsH2Screen } from './components/onboarding/GreatNewsH2Screen';
import { Step1PersonalInfoScreen } from './components/onboarding/Step1PersonalInfoScreen';
import { CameraPermissionsScreen } from './components/onboarding/CameraPermissionsScreen';
import { PassportPhotoGuideScreen } from './components/onboarding/PassportPhotoGuideScreen';
import { PassportCameraSimulator } from './components/onboarding/PassportCameraSimulator';
import { PassportProcessingLoader } from './components/onboarding/PassportProcessingLoader';
import { ScannedPassportDetailsScreen } from './components/onboarding/ScannedPassportDetailsScreen';
import { ProfilePhotoGuideScreen } from './components/onboarding/ProfilePhotoGuideScreen';
import { ProfileCameraSimulator } from './components/onboarding/ProfileCameraSimulator';
import { ProfileProcessingLoader } from './components/onboarding/ProfileProcessingLoader';
import { ConfirmProfilePhotoScreen } from './components/onboarding/ConfirmProfilePhotoScreen';
import { Step2ContactDetailsScreen } from './components/onboarding/Step2ContactDetailsScreen';
import { Step3AddressIdScreen } from './components/onboarding/Step3AddressIdScreen';
import { Step4BackgroundSurveyScreen } from './components/onboarding/Step4BackgroundSurveyScreen';
import { Step5EmergencyContactScreen } from './components/onboarding/Step5EmergencyContactScreen';
import { Step6ParentsInfoScreen } from './components/onboarding/Step6ParentsInfoScreen';
import { Step7MaritalStatusScreen } from './components/onboarding/Step7MaritalStatusScreen';
import { Step8FamilyUSScreen } from './components/onboarding/Step8FamilyUSScreen';
import { Step9Part2IntroScreen } from './components/onboarding/Step9Part2IntroScreen';
import { Step10VisaPreferenceScreen } from './components/onboarding/Step10VisaPreferenceScreen';
import { Step11WorkSkillsScreen } from './components/onboarding/Step11WorkSkillsScreen';
import { Step11H2BWorkSkillsScreen } from './components/onboarding/Step11H2BWorkSkillsScreen';
import { Step12PhysicalLimitationsScreen } from './components/onboarding/Step12PhysicalLimitationsScreen';
import { Step13WorkAvailabilityScreen } from './components/onboarding/Step13WorkAvailabilityScreen';
import { Step14Part3IntroScreen } from './components/onboarding/Step14Part3IntroScreen';
import { Step15EducationLevelScreen } from './components/onboarding/Step15EducationLevelScreen';
import { Step16EnglishLevelScreen } from './components/onboarding/Step16EnglishLevelScreen';
import { Step17WorkExperienceScreen } from './components/onboarding/Step17WorkExperienceScreen';
import { Step18Part4IntroScreen } from './components/onboarding/Step18Part4IntroScreen';
import { Step19SocialInfoScreen } from './components/onboarding/Step19SocialInfoScreen';
import { Step20HealthSafetyScreen } from './components/onboarding/Step20HealthSafetyScreen';
import { Step21CriminalHistoryScreen } from './components/onboarding/Step21CriminalHistoryScreen';
import { Step22SecurityTerrorismScreen } from './components/onboarding/Step22SecurityTerrorismScreen';
import { Step23HumanRightsScreen } from './components/onboarding/Step23HumanRightsScreen';
import { Step24ImmigrationLegalScreen } from './components/onboarding/Step24ImmigrationLegalScreen';
import { Step25FinalReviewScreen } from './components/onboarding/Step25FinalReviewScreen';
import { Step26FinishedProfileScreen } from './components/onboarding/Step26FinishedProfileScreen';
import { WelcomeOfferModal } from './components/onboarding/WelcomeOfferModal';
import { JobOfferDetailScreen } from './components/onboarding/JobOfferDetailScreen';
import { ViewSignedDocumentScreen } from './components/onboarding/ViewSignedDocumentScreen';
import { ConfirmationScreen } from './components/onboarding/ConfirmationScreen';
import { AvailableTimesView } from './views/AvailableTimesView';
import { InterviewScheduledConfirmationView } from './views/InterviewScheduledConfirmationView';
import { NotificationsView } from './views/NotificationsView';
import { PushNotificationBanner } from './components/PushNotificationBanner';
import { AppointmentDetailBottomSheet } from './components/onboarding/AppointmentDetailBottomSheet';

import { VideoCallLoaderScreen } from './components/onboarding/VideoCallLoaderScreen';
import { VideoCallSimulationScreen } from './components/onboarding/VideoCallSimulationScreen';
import { InterviewCompletedModal } from './components/onboarding/InterviewCompletedModal';

import { ReviewInformationHubScreen } from './components/visa_review/ReviewInformationHubScreen';
import { SocialSecurityReviewScreen } from './components/visa_review/SocialSecurityReviewScreen';
import { ContactDetailsReviewScreen } from './components/visa_review/ContactDetailsReviewScreen';
import { PreviousUsTravelReviewScreen } from './components/visa_review/PreviousUsTravelReviewScreen';
import { FatherInfoReviewScreen } from './components/visa_review/FatherInfoReviewScreen';
import { MotherInfoReviewScreen } from './components/visa_review/MotherInfoReviewScreen';
import { MaritalStatusReviewScreen } from './components/visa_review/MaritalStatusReviewScreen';
import { FamilyInUsReviewScreen } from './components/visa_review/FamilyInUsReviewScreen';
import { EducationReviewScreen } from './components/visa_review/EducationReviewScreen';
import { WorkReviewScreen } from './components/visa_review/WorkReviewScreen';
import { FinalQuestionsReviewScreen } from './components/visa_review/FinalQuestionsReviewScreen';
import { VisaApplicationConsentScreen } from './components/visa_review/VisaApplicationConsentScreen';
import { VisaSubmittedSuccessScreen } from './components/visa_review/VisaSubmittedSuccessScreen';
import { Ds160DocumentViewerScreen } from './components/documents/Ds160DocumentViewerScreen';

const MainContent: React.FC = () => {
  const { currentTab, showWelcomeModal, showInterviewCompletedModal } = useApp();

  const isOnboardingTab = [
    'splash',
    'language',
    'welcome',
    'invite_choice',
    'phone_auth',
    'otp_verify',
    'employer_code',
    'enter_code',
    'verify_details',
    'great_news',
    'personal_info',
    'terms_service',
    'h2_intro',
    'us_location_question',
    'h2_visa_intro',
    'eligibility_chat',
    'great_news_h2',
    'step1_personal_intro',
    'camera_permissions',
    'passport_photo_guide',
    'passport_camera_sim',
    'passport_processing_loader',
    'scanned_passport_details',
    'profile_photo_guide',
    'profile_camera_sim',
    'profile_processing_loader',
    'confirm_profile_photo',
    'step2_contact_details',
    'step3_address_id',
    'step4_background_survey',
    'step5_emergency_contact',
    'step6_parents_info',
    'step7_marital_status',
    'step8_family_us',
    'step9_part2_intro',
    'step10_visa_preference',
    'step11_work_skills',
    'step11_h2b_work_skills',
    'step12_physical_limitations',
    'step13_work_availability',
    'step14_part3_intro',
    'step15_education_level',
    'step16_english_level',
    'step17_work_experience',
    'step18_part4_intro',
    'step19_social_info',
    'step20_health_safety',
    'step21_criminal_history',
    'step22_security_terrorism',
    'step23_human_rights',
    'step24_immigration_legal',
    'step25_final_review',
    'step26_finished_profile',
    'job_offer_detail',
    'view_signed_document',
    'offer_accepted_confirmation',
    'video_loader',
    'video_call',
    'visa_review_hub',
    'visa_review_ssn',
    'visa_review_contact',
    'visa_review_prev_travel',
    'visa_review_father',
    'visa_review_mother',
    'visa_review_marital',
    'visa_review_family_us',
    'visa_review_education',
    'visa_review_work',
    'visa_review_final_questions',
    'visa_review_consent',
    'visa_review_success',
    'view_ds160_document'
  ].includes(currentTab);

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative w-full h-full">
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Figma Onboarding Screens */}
        {currentTab === 'splash' && <SplashScreen />}
        {currentTab === 'language' && <LanguageSelectScreen />}
        {currentTab === 'welcome' && <WelcomeScreen />}
        {currentTab === 'invite_choice' && <InviteOrSearchScreen />}
        {currentTab === 'phone_auth' && <PhoneAuthScreen />}
        {currentTab === 'otp_verify' && <OtpVerifyScreen />}
        {currentTab === 'employer_code' && <EmployerCodeScreen />}
        {currentTab === 'enter_code' && <EnterCodeScreen />}
        {currentTab === 'verify_details' && <VerifyDetailsScreen />}
        {currentTab === 'great_news' && <GreatNewsScreen />}
        {currentTab === 'personal_info' && <PersonalInfoScreen />}
        {currentTab === 'terms_service' && <TermsOfServiceScreen />}
        {currentTab === 'h2_intro' && <H2IntroScreen />}
        {currentTab === 'us_location_question' && <UsLocationQuestionScreen />}
        {currentTab === 'h2_visa_intro' && <H2VisaIntroScreen />}
        {currentTab === 'eligibility_chat' && <EligibilityChatWizard />}
        {currentTab === 'great_news_h2' && <GreatNewsH2Screen />}
        {currentTab === 'step1_personal_intro' && <Step1PersonalInfoScreen />}
        {currentTab === 'camera_permissions' && <CameraPermissionsScreen />}
        {currentTab === 'passport_photo_guide' && <PassportPhotoGuideScreen />}
        {currentTab === 'passport_camera_sim' && <PassportCameraSimulator />}
        {currentTab === 'passport_processing_loader' && <PassportProcessingLoader />}
        {currentTab === 'scanned_passport_details' && <ScannedPassportDetailsScreen />}
        {currentTab === 'profile_photo_guide' && <ProfilePhotoGuideScreen />}
        {currentTab === 'profile_camera_sim' && <ProfileCameraSimulator />}
        {currentTab === 'profile_processing_loader' && <ProfileProcessingLoader />}
        {currentTab === 'confirm_profile_photo' && <ConfirmProfilePhotoScreen />}
        {currentTab === 'step2_contact_details' && <Step2ContactDetailsScreen />}
        {currentTab === 'step3_address_id' && <Step3AddressIdScreen />}
        {currentTab === 'step4_background_survey' && <Step4BackgroundSurveyScreen />}
        {currentTab === 'step5_emergency_contact' && <Step5EmergencyContactScreen />}
        {currentTab === 'step6_parents_info' && <Step6ParentsInfoScreen />}
        {currentTab === 'step7_marital_status' && <Step7MaritalStatusScreen />}
        {currentTab === 'step8_family_us' && <Step8FamilyUSScreen />}
        {currentTab === 'step9_part2_intro' && <Step9Part2IntroScreen />}
        {currentTab === 'step10_visa_preference' && <Step10VisaPreferenceScreen />}
        {currentTab === 'step11_work_skills' && <Step11WorkSkillsScreen />}
        {currentTab === 'step11_h2b_work_skills' && <Step11H2BWorkSkillsScreen />}
        {currentTab === 'step12_physical_limitations' && <Step12PhysicalLimitationsScreen />}
        {currentTab === 'step13_work_availability' && <Step13WorkAvailabilityScreen />}
        {currentTab === 'step14_part3_intro' && <Step14Part3IntroScreen />}
        {currentTab === 'step15_education_level' && <Step15EducationLevelScreen />}
        {currentTab === 'step16_english_level' && <Step16EnglishLevelScreen />}
        {currentTab === 'step17_work_experience' && <Step17WorkExperienceScreen />}
        {currentTab === 'step18_part4_intro' && <Step18Part4IntroScreen />}
        {currentTab === 'step19_social_info' && <Step19SocialInfoScreen />}
        {currentTab === 'step20_health_safety' && <Step20HealthSafetyScreen />}
        {currentTab === 'step21_criminal_history' && <Step21CriminalHistoryScreen />}
        {currentTab === 'step22_security_terrorism' && <Step22SecurityTerrorismScreen />}
        {currentTab === 'step23_human_rights' && <Step23HumanRightsScreen />}
        {currentTab === 'step24_immigration_legal' && <Step24ImmigrationLegalScreen />}
        {currentTab === 'step25_final_review' && <Step25FinalReviewScreen />}
        {currentTab === 'step26_finished_profile' && <Step26FinishedProfileScreen />}
        {currentTab === 'job_offer_detail' && <JobOfferDetailScreen />}
        {currentTab === 'view_signed_document' && <ViewSignedDocumentScreen />}
        {currentTab === 'offer_accepted_confirmation' && <ConfirmationScreen />}
        {currentTab === 'video_loader' && <VideoCallLoaderScreen />}
        {currentTab === 'video_call' && <VideoCallSimulationScreen />}

        {/* Visa Review Flow (DS-160 Verification) */}
        {currentTab === 'visa_review_hub' && <ReviewInformationHubScreen />}
        {currentTab === 'visa_review_ssn' && <SocialSecurityReviewScreen />}
        {currentTab === 'visa_review_contact' && <ContactDetailsReviewScreen />}
        {currentTab === 'visa_review_prev_travel' && <PreviousUsTravelReviewScreen />}
        {currentTab === 'visa_review_father' && <FatherInfoReviewScreen />}
        {currentTab === 'visa_review_mother' && <MotherInfoReviewScreen />}
        {currentTab === 'visa_review_marital' && <MaritalStatusReviewScreen />}
        {currentTab === 'visa_review_family_us' && <FamilyInUsReviewScreen />}
        {currentTab === 'visa_review_education' && <EducationReviewScreen />}
        {currentTab === 'visa_review_work' && <WorkReviewScreen />}
        {currentTab === 'visa_review_final_questions' && <FinalQuestionsReviewScreen />}
        {currentTab === 'visa_review_consent' && <VisaApplicationConsentScreen />}
        {currentTab === 'visa_review_success' && <VisaSubmittedSuccessScreen />}
        {currentTab === 'view_ds160_document' && <Ds160DocumentViewerScreen />}

        {/* Worker Portal Views */}
        {(currentTab === 'home' || currentTab === 'welcome_offer') && <HomeView />}
        {currentTab === 'available_times' && <AvailableTimesView />}
        {currentTab === 'interview_scheduled_confirmation' && <InterviewScheduledConfirmationView />}
        {currentTab === 'notifications' && <NotificationsView />}
        {currentTab === 'jobs' && <JobsView />}
        {currentTab === 'calendar' && <CalendarView />}
        {(currentTab === 'documents' || currentTab === 'profile') && <DocumentsView />}
        {currentTab === 'apply_wizard' && <MultiStepRegistration />}
      </div>

      {/* Push Notification Banner Overlay */}
      {!isOnboardingTab && <PushNotificationBanner />}

      {/* Bottom Nav Bar (hidden on onboarding & apply wizard) */}
      {!isOnboardingTab && <BottomNavigation />}

      {/* Welcome Offer Modal Overlay on Home (Covers whole screen including BottomNavigation) */}
      {(currentTab === 'home' || currentTab === 'welcome_offer') && showWelcomeModal && <WelcomeOfferModal />}

      {/* Post-Interview Completed Modal Overlay (Figma Node 1004:4183) */}
      {showInterviewCompletedModal && <InterviewCompletedModal />}

      {/* Appointment Detail Bottom Sheet Overlay */}
      <AppointmentDetailBottomSheet />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MobileContainer>
        <MainContent />
      </MobileContainer>
    </AppProvider>
  );
}

export default App;
