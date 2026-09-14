import React from 'react';
import { useApp } from '../../context/AppContext';

export const WorkReviewScreen: React.FC = () => {
  const { language, setCurrentTab, setVisaReviewSection } = useApp();

  const handleBack = () => {
    setCurrentTab('visa_review_education');
  };

  const handleContinue = () => {
    // Marks Section 2 (Work and Education) as completed!
    setVisaReviewSection(2);
    setCurrentTab('visa_review_hub');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:36201"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2">
          {language === 'es' ? 'Trabajo y Educación' : 'Work and Education'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Review Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[30px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Experiencia Laboral' : 'Work'}
          </h2>
          <p className="font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Revisa tu información abajo. Si algo está mal, toca "Modificar" para corregirlo'
              : 'Check your information below. If anything is wrong, tap “Change” to fix it'}
          </p>
        </div>

        {/* Card 1: Work Current */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <span className="font-bold text-[15px] text-[#171717]">Innoick Technologies</span>
            <span className="text-[12px] text-[#737373] font-medium">Dec 2013-Present</span>
          </div>

          <div className="flex flex-col gap-1 text-[13px] text-[#525252]">
            <p className="font-semibold text-[#171717] text-[14px]">Developer</p>
            <p>TI</p>
            <p>Street, Mexico, Mexico</p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => {}}
              className="size-[40px] rounded-full bg-[#c7290e] text-white flex items-center justify-center shrink-0 shadow-2xs active:scale-95 transition-all cursor-pointer"
              aria-label="Delete"
            >
              <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
            <button
              onClick={() => {}}
              className="flex-1 h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 2: Work Past */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <span className="font-bold text-[15px] text-[#171717]">Innoick Technologies</span>
            <span className="text-[12px] text-[#737373] font-medium">Dec 2013-Jan 2016</span>
          </div>

          <div className="flex flex-col gap-1 text-[13px] text-[#525252]">
            <p className="font-semibold text-[#171717] text-[14px]">Developer</p>
            <p>TI</p>
            <p>Street, Mexico, Mexico</p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => {}}
              className="size-[40px] rounded-full bg-[#c7290e] text-white flex items-center justify-center shrink-0 shadow-2xs active:scale-95 transition-all cursor-pointer"
              aria-label="Delete"
            >
              <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
            <button
              onClick={() => {}}
              className="flex-1 h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Add more work button */}
        <button
          onClick={() => {}}
          className="w-full h-[44px] bg-white border border-[#d4d4d4] rounded-full font-semibold text-[14px] text-[#171717] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer shadow-2xs"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>{language === 'es' ? 'Agregar más detalles laborales' : 'Add more work details'}</span>
        </button>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-6 flex flex-col items-center shrink-0">
        <button
          onClick={handleContinue}
          className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar al siguiente paso' : 'Continue to next step'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
