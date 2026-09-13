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
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4470"
    >
      {/* Top Header Bar */}
      <div className="w-full bg-[#fafafa] p-[16px] flex items-center justify-between sticky top-0 z-20">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <div className="size-[44px] shrink-0"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[24px] py-[16px] flex flex-col items-center justify-center text-center space-y-6">
        {/* Banner Illustration */}
        <div className="w-full max-w-[280px] bg-gradient-to-b from-[#eaf0ff] to-[#f4f7ff] border border-[#d8e3ff] rounded-[24px] p-6 flex items-center justify-center shadow-xs">
          <div className="size-[120px] rounded-full bg-white flex items-center justify-center shadow-md relative">
            <span className="material-symbols-outlined text-[64px] text-[#0038d0]">assignment</span>
            <div className="absolute -top-1 -right-1 bg-[#0045ff] text-white text-[12px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              A
            </div>
            <div className="absolute -bottom-1 -left-1 bg-[#0045ff] text-white text-[12px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              B
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 max-w-[320px]">
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[26px] sm:text-[28px] leading-[34px] text-[#0038d0] tracking-[-0.2px]">
            {language === 'es' ? 'Parte 2: Tus preferencias de trabajo' : 'Part 2: Your Work Preferences'}
          </h1>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#404040]">
            {language === 'es'
              ? 'Cuéntanos qué te gusta hacer y dónde trabajas mejor.'
              : 'Tell us what you like to do and where you work best.'}
          </p>
          <p className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[22px] text-[#171717]">
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
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Comenzar Parte 2' : 'Start Part 2'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
