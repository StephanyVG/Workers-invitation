import React from 'react';
import { useApp } from '../../context/AppContext';

export const H2VisaIntroScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  const handleCheckEligibility = () => {
    setCurrentTab('eligibility_chat');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65210"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('us_location_question')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title */}
        <div className="w-full text-center mb-8">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-2xl sm:text-[28px] leading-[36px] text-[#0038d0] tracking-tight">
            {language === 'es'
              ? 'Respondamos algunas preguntas sobre la visa de trabajo H-2'
              : 'Let’s answer a few questions about the H-2 Work Visa'}
          </h2>
        </div>

        {/* Zipmi Assistant SVG Illustration (Figma 3:65210 / help.svg) */}
        <div className="flex flex-col items-center justify-center w-full my-auto space-y-4">
          <div className="flex items-center justify-center w-full">
            <img
              src="/help.svg"
              alt="Zipmi Assistant Help"
              className="w-[328px] max-w-full h-auto max-h-[308px] object-contain block select-none"
            />
          </div>

          {/* Disclaimer Note */}
          <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#525252] text-center max-w-[300px]">
            {language === 'es'
              ? 'Estas preguntas son el primer paso. No significan que obtendrás la visa.'
              : 'These questions are the first step. They do not mean you will get the visa.'}
          </p>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleCheckEligibility}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="3:65210"
        >
          {language === 'es' ? 'Verificar elegibilidad' : 'Check Eligibility'}
        </button>
      </div>
    </div>
  );
};
