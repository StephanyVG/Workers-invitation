import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step26FinishedProfileScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal, updateWorker } = useApp();
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

  const handleBack = () => {
    setCurrentTab('step25_final_review');
  };

  const handleGotIt = () => {
    setShowBottomSheet(false);
    setShowWelcomeModal(false);
    updateWorker({ appliedJobId: '1' });
    setCurrentTab('job_details');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:4874"
    >
      {/* Top Background & Illustration Section */}
      <div className="relative w-full h-[300px] shrink-0 bg-gradient-to-b from-[#d8e3ff]/50 to-transparent flex flex-col items-center justify-center pt-8 overflow-hidden">
        {/* Floating Circular Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 size-[44px] rounded-full bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#171717] shadow-xs active:scale-90 transition-all cursor-pointer z-10"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        {/* Thumbs Up Illustration Graphic */}
        <div className="relative w-full max-w-[220px] h-[180px] flex items-center justify-center my-auto">
          <img
            src="/thumb.svg"
            alt="Thumbs up"
            className="w-full h-full object-contain block select-none"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-[24px] py-[24px] space-y-6 text-left overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          {/* Title */}
          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.28px]">
            {language === 'es' ? '¡Has terminado tu perfil!' : 'You’ve finished your profile!'}
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[24px] text-[#0a0a0a]">
            {language === 'es'
              ? 'Los empleadores pronto se pondrán en contacto contigo para ofrecerte oportunidades de trabajo.'
              : 'Employers will soon contact you with job opportunities.'}
          </p>
        </div>

        {/* Info Alert Box (Figma node 1:4907) */}
        <div
          className="bg-[rgba(176,222,255,0.4)] border border-[#2874ff] rounded-[8px] p-[14px] flex gap-[12px] items-start shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)]"
          data-node-id="1:4907"
        >
          <span className="material-symbols-outlined text-[#0038d0] text-[22px] shrink-0 mt-0.5">
            info
          </span>
          <p className="font-['Inter',sans-serif] font-bold text-[14px] leading-[18px] text-[#0b38a4]">
            {language === 'es'
              ? 'Puedes editar tu información desde tu perfil en cualquier momento.'
              : 'You can edit your information from your profile at any time.'}
          </p>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center shrink-0">
        <button
          onClick={() => setShowBottomSheet(true)}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Entendido' : 'Got it'}</span>
        </button>
      </div>

      {/* "Important!" Bottom Sheet Modal Overlay (Figma Node 1:4960) */}
      {showBottomSheet && (
        <div
          className="fixed inset-0 bg-black/25 z-50 flex items-end justify-center animate-fadeIn"
          onClick={() => setShowBottomSheet(false)}
        >
          <div
            className="bg-white rounded-t-[24px] p-6 w-full max-w-md space-y-6 animate-slideUp text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-node-id="1:4960"
          >
            {/* Drag Handle Top Bar */}
            <div className="w-[36px] h-[4px] bg-[#171717] rounded-full mx-auto" />

            {/* Title */}
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
              {language === 'es' ? '¡Importante!' : 'Important!'}
            </h2>

            {/* Description Text */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#171717]">
              {language === 'es' ? (
                <>
                  Nadie puede cobrarte por solicitar un trabajo o visa H-2. Si algún agente o empleador H2 te pide dinero para solicitar empleos H2 a través de Zipmi, repórtalo a{' '}
                  <strong className="font-bold text-[#171717]">h2reports@zipmi.ai</strong>.
                </>
              ) : (
                <>
                  No one may charge you to apply for an H-2 job or visa. If any H2 agent or employer asks you for money to apply for H2 jobs via Zipmi, report it to{' '}
                  <strong className="font-bold text-[#171717]">h2reports@zipmi.ai</strong>.
                </>
              )}
            </p>

            {/* Got It Button inside Bottom Sheet */}
            <div className="pt-2">
              <button
                onClick={handleGotIt}
                className="w-full h-[48px] px-4 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {language === 'es' ? 'Entendido' : 'Got it'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
