import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step14Part3IntroScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleStartPart3 = () => {
    setCurrentTab('step15_education_level');
  };

  const handleBack = () => {
    setCurrentTab('step13_work_availability');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative select-none animate-slide-right min-h-0"
      data-node-id="1:5317"
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

          {/* Part 3 SVG Illustration */}
          <div className="w-full flex items-center justify-center px-4 my-2">
            <img
              src="/part 3.svg"
              alt="Part 3: Work and Education"
              className="w-full max-w-[260px] sm:max-w-[300px] h-auto max-h-[220px] object-contain block select-none mx-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-[20px] py-[20px] pb-[32px] space-y-4 text-left w-full">
          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[26px] sm:text-[28px] leading-[34px] text-[#0038d0] tracking-[-0.1px]">
            {language === 'es' ? 'Parte 3: Trabajo y Educación' : 'Part 3: Work and Education'}
          </h1>

          <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252]">
            {language === 'es'
              ? 'Cuéntanos dónde trabajaste y estudiaste. Esto nos ayuda a encontrarte el trabajo adecuado.'
              : 'Tell us where you worked and studied. This helps us find you the right job.'}
          </p>

          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[22px] text-[#171717]">
            {language === 'es' ? '¡Destaquemos tus logros!' : "Let's Highlight Your Achievements!"}
          </h2>

          {/* Blue Alert Box (Figma Node 1:5317) */}
          <div className="bg-[rgba(176,222,255,0.4)] border border-[#2874ff] rounded-[12px] p-4 flex items-start gap-3 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] w-full text-[#0b38a4]">
            <span className="material-symbols-outlined text-[24px] text-[#0b38a4] shrink-0 mt-0.5 select-none">
              info
            </span>
            <p className="font-['DM_Sans',sans-serif] font-medium text-[15px] leading-[21px] text-[#0b38a4] tracking-[-0.064px]">
              {language === 'es'
                ? 'Necesitarás las fechas y direcciones de las escuelas a las que asististe y los trabajos en los que laboraste.'
                : 'You will need the dates and addresses for your the schools you went to and jobs you worked.'}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleStartPart3}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Comenzar Parte 3' : 'Start Part 3'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
