import React from 'react';
import { useApp } from '../../context/AppContext';

export const ConfirmProfilePhotoScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  const handleContinue = () => {
    setCurrentTab('step2_contact_details');
  };

  const handleRetake = () => {
    setCurrentTab('profile_photo_guide');
  };

  const handleBack = () => {
    setCurrentTab('profile_photo_guide');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:7387"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 truncate px-2">
            {language === 'es' ? 'Información personal' : 'Personal Information'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Progress Bar for Part 1 (25%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[25%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Content (Figma 1:7398) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px] text-center w-full">
          {language === 'es' ? 'Confirma tu foto' : 'Confirm your photo'}
        </h2>

        {/* Captured Profile Photo Card (Figma 190:21043) */}
        <div className="w-full max-w-[326px] h-[360px] sm:h-[390px] rounded-[16px] overflow-hidden shadow-xs border border-[#e5e5e5] bg-black/5 relative shrink-0">
          <img
            src="/profile.png"
            alt="Confirmed Profile Photo"
            className="w-full h-full object-cover block select-none"
          />
        </div>

        {/* Secondary Action: Retake Photo (Figma 1:7403) */}
        <button
          onClick={handleRetake}
          className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] h-[38px] px-6 rounded-[100px] w-full max-w-[326px] flex items-center justify-center shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
          data-node-id="1:7403"
        >
          {language === 'es' ? 'Volver a tomar foto' : 'Take photo again'}
        </button>
      </div>

      {/* Sticky Bottom Action Bar (Figma 1:7404) */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col items-center sticky bottom-0 z-20">
        <button
          onClick={handleContinue}
          className="w-full max-w-[328px] min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
          data-node-id="1:7406"
        >
          <span>{language === 'es' ? 'Se ve bien, continuar' : 'Looks good, continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
