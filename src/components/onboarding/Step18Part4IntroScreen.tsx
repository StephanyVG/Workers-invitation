import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step18Part4IntroScreen: React.FC = () => {
  const { setCurrentTab, language } = useApp();

  const handleStartPart4 = () => {
    setCurrentTab('step19_social_info');
  };

  const handleBack = () => {
    setCurrentTab('step17_work_experience');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5365"
    >
      {/* Header Bar */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex items-center justify-between px-[16px] py-[12px] shrink-0 sticky top-0 z-20">
        <button
          onClick={handleBack}
          className="size-[40px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#171717] hover:bg-[#f5f5f5] active:scale-95 transition-all cursor-pointer shadow-2xs"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#0038d0]">
          {language === 'es' ? 'Parte 4: Preguntas Finales' : 'Part 4: Final Questions'}
        </span>
        <div className="w-[40px]" />
      </div>

      {/* Main Body Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
        {/* Main SVG Image for Part 4 */}
        <div className="w-full flex items-center justify-center mb-6" data-node-id="1:5366">
          <img
            src="/part 4.svg"
            alt="Part 4 Intro Illustration"
            className="w-[240px] max-w-[80%] h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[340px]">
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.32px]">
            {language === 'es' ? 'Parte 4: Preguntas Finales' : 'Part 4: Final Questions'}
          </h1>

          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[26px] text-[#171717]">
            {language === 'es' ? '¡Ya casi terminas!' : 'You’re almost finished!'}
          </h2>

          <p className="font-['DM_Sans',sans-serif] font-medium text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
            {language === 'es'
              ? 'Solo necesitamos hacer algunas preguntas estándar sobre salud y seguridad. Estas son requeridas para todos los que solicitan una visa.'
              : 'We just need to ask a few standard questions about health and safety. These are required for everyone applying for a visa.'}
          </p>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleStartPart4}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Comenzar Parte 4' : 'Start Part 4'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Step18Part4IntroScreen;
