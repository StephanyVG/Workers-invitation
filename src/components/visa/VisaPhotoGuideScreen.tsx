import React from 'react';
import { useApp } from '../../context/AppContext';

export const VisaPhotoGuideScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleTakeShutter = () => {
    setCurrentTab('visa_camera_sim');
  };

  const handleGalleryPick = () => {
    setCurrentTab('visa_camera_sim');
  };

  const handleBack = () => {
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-fade-in relative h-full select-none"
      data-node-id="1707:9654"
    >
      {/* Top Header Bar */}
      <div className="w-full bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between sticky top-0 z-20 shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 truncate px-2">
          {language === 'es' ? 'Carga de Visa' : 'Upload Visa'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content with 24px Container Padding */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6 text-left">
        {/* Title */}
        <div className="space-y-1">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[28px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Cómo tomar la foto de tu VISA' : 'How to take your VISA photo'}
          </h2>
        </div>

        {/* Instructions Card with 24px Container Padding */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-6 shadow-2xs">
          {/* Visa Card Graphic Frame (with visa exa.svg) */}
          <div className="bg-[#e6ecff] rounded-[16px] p-3 flex items-center justify-center min-h-[175px] overflow-hidden border border-[#c2d6ff]">
            <img
              src="/visa exa.svg"
              alt="Visa Example"
              className="w-full max-w-[280px] h-auto max-h-[185px] object-contain block select-none mx-auto"
            />
          </div>

          {/* Numbered Guide List */}
          <div className="flex flex-col gap-4 font-['Inter',sans-serif]">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                1
              </div>
              <p className="font-medium text-[15px] leading-[22px] text-[#171717]">
                {language === 'es' ? 'Usa luz natural, sin flash.' : 'Use natural light, no flash.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                2
              </div>
              <p className="font-medium text-[15px] leading-[22px] text-[#171717]">
                {language === 'es' ? 'La visa debe verse completamente.' : 'The Visa must be fully visible.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#0038d0] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] flex items-center justify-center shrink-0">
                3
              </div>
              <p className="font-medium text-[15px] leading-[22px] text-[#171717]">
                {language === 'es' ? 'Asegúrate de que no esté borrosa' : "Ensure it's not blurry"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions with 24px Container Padding */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-6 w-full flex flex-col gap-3 shrink-0">
        <button
          onClick={handleTakeShutter}
          className="w-full h-[48px] px-4 bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          <span>{language === 'es' ? 'Tomar la foto' : 'Take the photo'}</span>
        </button>

        <button
          onClick={handleGalleryPick}
          className="w-full h-[48px] px-4 bg-white border border-[#e5e5e5] hover:bg-slate-50 active:scale-[0.98] text-[#171717] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">image</span>
          <span>{language === 'es' ? 'Elegir de la galería' : 'Choose from gallery'}</span>
        </button>
      </div>
    </div>
  );
};
