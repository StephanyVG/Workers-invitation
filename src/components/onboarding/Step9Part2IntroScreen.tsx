import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step9Part2IntroScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleStartPart2 = () => {
    setCurrentTab('step10_visa_preference');
  };

  const handleBack = () => {
    setCurrentTab('step8_family_us');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative select-none animate-slide-right min-h-0"
      data-node-id="1:4470"
    >
      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {/* Top Header & Illustration Container */}
        <div className="w-full bg-gradient-to-b from-[#d8e3ff] via-[#d8e3ff]/50 to-transparent pt-6 pb-6 px-4 flex flex-col items-center justify-center relative">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="absolute left-4 top-4 bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer z-10"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          {/* Part 2 SVG Illustration */}
          <div className="w-full flex items-center justify-center px-4 my-2">
            <img
              src="/part 2.svg"
              alt="Part 2: Work Preferences"
              className="w-full max-w-[260px] sm:max-w-[300px] h-auto max-h-[220px] object-contain block select-none mx-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-[20px] py-[20px] pb-[32px] space-y-4 text-left w-full">
          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[26px] sm:text-[28px] leading-[34px] text-[#0038d0] tracking-[-0.1px]">
            {language === 'es' ? 'Parte 2: Tus preferencias de trabajo' : 'Part 2: Your Work Preferences'}
          </h1>

          <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[22px] text-[#171717] tracking-[-0.064px]">
            {language === 'es'
              ? 'Cuéntanos qué te gusta hacer y dónde trabajas mejor.'
              : 'Tell us what you like to do and where you work best.'}
          </p>

          <p className="font-['DM_Sans',sans-serif] font-medium text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
            {language === 'es'
              ? 'Esto nos ayuda a encontrar el trabajo adecuado para ti ahora y en el futuro.'
              : 'This helps us find the right job for you for now and for the future.'}
          </p>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleStartPart2}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Comenzar Parte 2' : 'Start Part 2'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
