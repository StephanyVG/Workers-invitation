import React from 'react';
import { useApp } from '../../context/AppContext';

export const CameraPermissionsScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  const handleAllow = () => {
    setCurrentTab('passport_camera_sim');
  };

  const handleClose = () => {
    setCurrentTab('passport_photo_guide');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-up relative z-30 shadow-2xl"
      data-node-id="1:7641"
    >
      {/* Top Banner & Illustrations */}
      <div className="flex flex-col items-center w-full">
        {/* Header Container */}
        <div className="-mx-[24px] -mt-[32px] w-[calc(100%+48px)] bg-gradient-to-b from-[#d8e3ff] via-[#d8e3ff]/50 to-transparent pt-6 pb-6 mb-6 flex flex-col items-center justify-center relative">
          {/* Close Button (X) */}
          <button
            onClick={handleClose}
            className="absolute left-4 top-4 bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer z-10"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>

          {/* BubbleZip.svg Logo Illustration */}
          <img
            src="/BubbleZip.svg"
            alt="Zipmi"
            className="size-[120px] rounded-full object-contain shadow-md my-4 select-none block mx-auto"
          />
        </div>

        {/* Title (Figma 1:7641) */}
        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] leading-[30px] sm:leading-[32px] text-[#0038d0] tracking-[-0.096px] text-left w-full mb-6">
          {language === 'es'
            ? 'Permite el acceso a Zipmi para habilitar funciones útiles para ti.'
            : 'Allow access to Zipmi so we can enable useful features for you.'}
        </h1>

        {/* Permissions Items List */}
        <div className="flex flex-col gap-5 w-full">
          {/* Item 1: Camera */}
          <div className="flex items-start gap-4 w-full">
            <div className="size-[48px] rounded-[12px] bg-[#e7f6ff] border border-[#bce3ff] text-[#0038d0] flex items-center justify-center shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[26px]">photo_camera</span>
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
                {language === 'es' ? 'Cámara' : 'Camera'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252]">
                {language === 'es'
                  ? 'Toma fotos y videos'
                  : 'Make video calls and take photos and videos'}
              </p>
            </div>
          </div>

          {/* Item 2: Photos */}
          <div className="flex items-start gap-4 w-full">
            <div className="size-[48px] rounded-[12px] bg-[#e7f6ff] border border-[#bce3ff] text-[#0038d0] flex items-center justify-center shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[26px]">photo_library</span>
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
                {language === 'es' ? 'Fotos' : 'Photos'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252]">
                {language === 'es'
                  ? 'Guarda y sube fotos y videos'
                  : 'Save and upload photos and videos'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleAllow}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 cursor-pointer flex items-center justify-center"
        >
          {language === 'es' ? 'Permitir' : 'Allow'}
        </button>
      </div>
    </div>
  );
};
