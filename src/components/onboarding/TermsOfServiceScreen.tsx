import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { VisaPathBottomSheet } from './VisaPathBottomSheet';

export const TermsOfServiceScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, onboardingPath, setShowWelcomeModal, setShowCodeOfferModal } = useApp();
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState<boolean>(false);
  const [showVisaBottomSheet, setShowVisaBottomSheet] = useState<boolean>(false);

  const handleContinueTerms = () => {
    if (!hasAcceptedTerms) return;
    setShowVisaBottomSheet(true);
  };

  const handleConfirmVisaSheet = () => {
    setShowVisaBottomSheet(false);
    updateWorker({
      status: 'revision_documentos',
      hasSignedContract: false
    });
    if (onboardingPath === 'invite') {
      // Path 1 ("Tengo un código de invitación"): Confirming bottom sheet shows CodeWelcomeOfferModal before entering Home
      setShowWelcomeModal(false);
      setShowCodeOfferModal(true);
      setCurrentTab('home');
    } else {
      // Path 2 ("Busco trabajo"): Proceed to eligibility bot and profile wizard steps
      setCurrentTab('h2_intro');
    }
  };

  return (
    <>
      <div
        className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
        data-node-id="3:64956"
      >
        {/* Top Section */}
        <div className="flex flex-col items-center w-full">
          {/* Header - Back Button returning to otp_verify */}
          <div className="w-full flex items-center justify-start mb-[32px]">
            <button
              onClick={() => setCurrentTab('otp_verify')}
              className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Regresar"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          </div>

          {/* Circle Z Badge Icon & Title Section (Figma node 3:64956) */}
          <div className="flex flex-col items-center text-center gap-3 w-full mb-6">
            <div className="size-12 rounded-full bg-[#0038d0] text-white flex items-center justify-center font-bold text-xl shadow-sm mb-1">
              Z
            </div>
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-2xl sm:text-[28px] text-[#0038d0] leading-[36px] tracking-tight w-full">
              {language === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
            </h2>
          </div>

          {/* Legal Body Paragraph (Figma 3:64956) */}
          <div className="w-full mb-8">
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#333333] text-left">
              {language === 'es'
                ? 'Zipmi proporciona herramientas para ayudar a los usuarios a preparar solicitudes para la autorización de trabajo legal en los Estados Unidos, basándose en la información proporcionada por el usuario. Tenga en cuenta que Zipmi no es un bufete de abogados y no ofrece asesoramiento legal; la relación de representación se establece mediante el uso de nuestros servicios. Si bien ayudamos a facilitar la presentación de solicitudes ante entidades gubernamentales, no garantizamos la aprobación de la solicitud. Al utilizar Zipmi, reconoce y acepta estos términos.'
                : 'Zipmi provides tools to help users prepare applications for legal work authorization in the United States, based on the information provided by the user. Please note that Zipmi is not a law firm and does not provide legal advice; the representation relationship is established by using our services. While we help facilitate the submission of applications to government entities, we do not guarantee the approval of the application. By using Zipmi, you acknowledge and accept these terms.'}
            </p>
          </div>

          {/* Checkbox: Filled #0038d0 background when checked */}
          <div
            onClick={() => setHasAcceptedTerms(!hasAcceptedTerms)}
            className="flex items-center gap-3 w-full cursor-pointer group select-none"
          >
            <div
              className={`size-[20px] rounded-[4px] flex items-center justify-center shrink-0 transition-all duration-150 ${
                hasAcceptedTerms
                  ? 'bg-[#0038d0] border border-[#0038d0] text-white shadow-xs scale-105'
                  : 'bg-[#f5f5f5] border border-[#d4d4d4] group-hover:border-[#0038d0]'
              }`}
            >
              {hasAcceptedTerms && (
                <span className="material-symbols-outlined text-[16px] font-bold leading-none">
                  check
                </span>
              )}
            </div>

            <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es'
                ? 'He leído y acepto los términos del servicio'
                : 'I have read and accept the terms of service'}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="w-full pt-6 pb-2">
          <button
            onClick={handleContinueTerms}
            disabled={!hasAcceptedTerms}
            className={`w-full min-h-[44px] h-[44px] px-4 py-[10px] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 ${
              hasAcceptedTerms
                ? 'bg-[#0038d0] text-[#f5f5f5] cursor-pointer active:scale-[0.98]'
                : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed opacity-80'
            }`}
            data-node-id="3:64956"
          >
            {language === 'es' ? 'Continuar' : 'Continue'}
          </button>
        </div>
      </div>

      {/* Visa Path Bottom Sheet */}
      <VisaPathBottomSheet
        isOpen={showVisaBottomSheet}
        onClose={() => setShowVisaBottomSheet(false)}
        onConfirm={handleConfirmVisaSheet}
      />
    </>
  );
};
