import React from 'react';
import { useApp } from '../../context/AppContext';

export const GreatNewsH2Screen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  const handleCompleteProfile = () => {
    setCurrentTab('step1_personal_intro');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65280"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Full-width Header Illustration Banner (Figma 3:65280 / great.svg) */}
        <div className="-mx-[24px] -mt-[32px] w-[calc(100%+48px)] bg-gradient-to-b from-[#d8e3ff] via-[#d8e3ff]/50 to-transparent pt-6 pb-2 mb-6 flex items-center justify-center">
          <img
            src="/great.svg"
            alt="Great News"
            className="w-full max-w-[340px] h-auto max-h-[290px] object-contain block select-none mx-auto"
          />
        </div>

        {/* Title (Figma 3:65280) */}
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[26px] sm:text-[30px] leading-[34px] sm:leading-[40px] text-[#0038d0] tracking-tight text-left w-full mb-3">
          {language === 'es'
            ? '¡Excelentes noticias! Aquí puedes buscar empleos con visa H2.'
            : 'Great news! You can look for H2 visa jobs here.'}
        </h2>

        {/* Subtitle Paragraph */}
        <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#262626] text-left w-full mb-6">
          {language === 'es'
            ? 'Completa tu perfil de trabajador para encontrar la mejor coincidencia con un empleador.'
            : 'Complete your worker profile to find the best employer match.'}
        </p>

        {/* Informational Blue Box */}
        <div className="bg-[#e7f6ff] border border-[#2874ff] rounded-[16px] p-4 flex items-start gap-3 text-[#0038d0] text-left w-full shadow-2xs">
          <span className="material-symbols-outlined text-[24px] text-[#0038d0] shrink-0 mt-0.5 select-none">
            info
          </span>
          <p className="font-['Inter',sans-serif] font-medium text-[13px] sm:text-[14px] leading-[20px] text-[#0038d0]">
            {language === 'es'
              ? 'Este cuestionario no tiene límite de tiempo, tómate tu tiempo en cada paso. Solo te tomará 30 minutos.'
              : 'This is not a timed questionnaire, take your time with each step. It will only take you 30 minutes.'}
          </p>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleCompleteProfile}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="3:65280"
        >
          {language === 'es' ? 'Completar mi perfil' : 'Complete my profile'}
        </button>
      </div>
    </div>
  );
};
