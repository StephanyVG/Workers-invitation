import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const PassportPhotoGuideScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [progressWidth, setProgressWidth] = useState<number>(0);

  useEffect(() => {
    // Smoothly animate progress bar fill on screen mount
    const timer = setTimeout(() => {
      setProgressWidth(25);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setCurrentTab('camera_permissions');
  };

  const handleBack = () => {
    setCurrentTab('step1_personal_intro');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-slide-right relative"
      data-node-id="1:7723"
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
            {language === 'es' ? 'Información personal' : 'Personal information'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Animated Progress Bar (0% -> 25%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div
            className="bg-[#2874ff] h-[4px] absolute left-0 top-0 transition-all duration-700 ease-out rounded-r-full"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6">
        {/* Title & Subtitle */}
        <div className="text-center space-y-3 w-full">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
            {language === 'es' ? '¿Cómo tomar la foto de tu pasaporte?' : 'How to take your passport photo'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] tracking-[-0.032px]">
            {language === 'es'
              ? 'Necesitaremos esta foto del pasaporte para enviar tu solicitud de visa de trabajo de EE. UU.'
              : 'We will need this passport photo to submit your US work visa application'}
          </p>
        </div>

        {/* White Card Instructions Section (Figma 1529:32085) */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 sm:p-5 shadow-xs space-y-5">
          {/* Passport Illustration (Figma 1529:32086 / pasaporte.svg) */}
          <div className="bg-[#e6ecff] rounded-[12px] p-3 flex items-center justify-center min-h-[170px] overflow-hidden">
            <img
              src="/pasaporte.svg"
              alt="Passport Photo Guide"
              className="w-full max-w-[280px] sm:max-w-[320px] h-auto max-h-[180px] object-contain block select-none mx-auto"
            />
          </div>

          {/* Numbered Guide List */}
          <div className="space-y-3.5 pt-1">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                1
              </div>
              <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717]">
                {language === 'es' ? 'Usa luz natural, sin flash.' : 'Use natural light, no flash.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                2
              </div>
              <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717]">
                {language === 'es' ? 'El pasaporte debe verse completamente.' : 'The passport must be fully visible.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                3
              </div>
              <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717]">
                {language === 'es' ? 'Asegúrate de que no esté borroso' : "Ensure it's not blurry"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions Panel */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col gap-2.5">
        {/* Primary Action: Take Photo */}
        <button
          onClick={handleComplete}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          <span>{language === 'es' ? 'Tomar la foto' : 'Take the photo'}</span>
        </button>

        {/* Secondary Action: Upload Gallery */}
        <button
          onClick={handleComplete}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-white border border-[#e5e5e5] active:scale-[0.98] text-[#171717] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">upload</span>
          <span>{language === 'es' ? 'Subir desde la galería' : 'Upload from gallery'}</span>
        </button>
      </div>
    </div>
  );
};
