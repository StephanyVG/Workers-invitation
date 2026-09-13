import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step1PersonalInfoScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleStart = () => {
    setCurrentTab('passport_photo_guide');
  };

  const handleBack = () => {
    setCurrentTab('great_news_h2');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-slide-right select-none"
      data-node-id="1:7602"
    >
      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[24px] py-[32px] pb-[32px] flex flex-col justify-between">
        {/* Top Banner & Header */}
        <div className="flex flex-col items-center w-full">
          {/* Header Illustration Container (Figma 1:7603) */}
          <div className="-mx-[24px] -mt-[32px] w-[calc(100%+48px)] bg-gradient-to-b from-[#d8e3ff] via-[#d8e3ff]/50 to-transparent pt-6 pb-6 mb-6 flex flex-col items-center justify-center relative">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="absolute left-4 top-4 bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer z-10"
              aria-label="Regresar"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>

            {/* Profile / Document Illustration (Figma 1:7604) */}
            <div className="w-full flex items-center justify-center px-4 my-2">
              <img
                src="/personal info.svg"
                alt="Personal Information"
                className="w-full max-w-[260px] sm:max-w-[300px] h-auto max-h-[220px] object-contain block select-none mx-auto"
              />
            </div>
          </div>

          {/* Title and Question (Figma 1:7627) */}
          <div className="w-full text-left mb-6">
            <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.096px] mb-2">
              {language === 'es' ? 'Paso 1: Información personal' : 'Step 1: Personal Information'}
            </h1>
            <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[24px] text-[#0a0a0a] tracking-[-0.064px]">
              {language === 'es'
                ? 'Este paso inicial trata sobre recopilar tus datos básicos.'
                : 'This initial step is all about gathering your basic details.'}
            </p>
          </div>

          {/* Info Box (Figma 1:7631) */}
          <div className="bg-[rgba(176,222,255,0.4)] border border-[#2874ff] rounded-[12px] p-4 flex items-start gap-3 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] w-full text-[#0b38a4] mb-6">
            <span className="material-symbols-outlined text-[24px] text-[#0b38a4] shrink-0 mt-0.5 select-none">
              info
            </span>
            <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[22px] text-[#0b38a4] tracking-[-0.064px]">
              {language === 'es'
                ? 'Para acelerar el proceso, ten a la mano tu pasaporte'
                : 'To make the process faster, get your passport ready'}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleStart}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="1:7639"
        >
          {language === 'es' ? 'Comenzar' : 'Start'}
        </button>
      </div>
    </div>
  );
};
