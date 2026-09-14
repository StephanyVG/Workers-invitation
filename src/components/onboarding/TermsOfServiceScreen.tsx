import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { VisaPathBottomSheet } from './VisaPathBottomSheet';

export const TermsOfServiceScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, onboardingPath } = useApp();
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState<boolean>(false);
  const [showVisaBottomSheet, setShowVisaBottomSheet] = useState<boolean>(false);
  const [showInviteModal, setShowInviteModal] = useState<boolean>(false);

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
    // Open Modal Node 3654:9349 for Path 1 (Invitation code flow)
    setShowInviteModal(true);
  };

  const handleInviteModalContinue = () => {
    setShowInviteModal(false);
    if (onboardingPath === 'invite') {
      // Path 1 (Tengo un código de invitación): Skip profile creation wizard completely & go straight to Home
      setCurrentTab('home');
    } else {
      // Path 2 (Busco trabajo): Proceed to eligibility bot and profile wizard steps
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

      {/* Figma Node 3654:9349 Modal (Path 1: Invitation Code Path) */}
      {showInviteModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center px-4 py-8 animate-fadeIn"
          data-node-id="3654:9349"
        >
          <div
            className="w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 animate-scaleUp"
            data-node-id="3654:9349"
          >
            {/* Top Image Frame (393:30993) - Height 209px with centered BubbleZip */}
            <div
              className="w-full h-[209px] bg-[#d8e3ff] relative overflow-hidden flex items-center justify-center"
              data-node-id="393:30993"
            >
              {/* Centered BubbleZip Graphic (393:30997) */}
              <img
                src="/BubbleZip.svg"
                alt="BubbleZip"
                className="w-[120px] h-[120px] object-contain relative z-10 mx-auto my-auto"
                data-node-id="393:30997"
              />
              {/* Decorative Accent Dots */}
              <div className="absolute size-4 bg-[#0038d0]/20 rounded-full top-6 left-12" />
              <div className="absolute size-5 bg-[#0038d0]/30 rounded-full top-10 right-10" />
              <div className="absolute size-3 bg-[#0038d0]/20 rounded-full bottom-8 left-16" />
              <div className="absolute size-4 bg-[#0038d0]/25 rounded-full bottom-10 right-14" />
            </div>

            {/* Body Container (390:32501) - Height 275px */}
            <div className="w-full p-5 flex flex-col justify-between text-left space-y-4" data-node-id="390:32501">
              <div className="space-y-3" data-node-id="390:32502">
                {/* Title (390:32503) - 28px bold */}
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] tracking-tight" data-node-id="390:32503">
                  {language === 'es' ? '¡Código verificado!' : 'Code verified!'}
                </h2>

                {/* Questions Text Block (390:32504 / 390:32505) - 16px font */}
                <div className="space-y-2 font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]" data-node-id="390:32504">
                  <p data-node-id="390:32505">
                    {language === 'es'
                      ? 'Tu empleador ha registrado tu invitación para el proceso de visa H-2. Completa tu información para continuar.'
                      : 'Your employer has registered your invitation for the H-2 visa process. Complete your information to continue.'}
                  </p>
                </div>
              </div>

              {/* Primary Button (390:32508) */}
              <button
                onClick={handleInviteModalContinue}
                className="w-full h-[44px] min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
                data-node-id="390:32508"
              >
                <span>{language === 'es' ? 'Continuar' : 'Continue'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
