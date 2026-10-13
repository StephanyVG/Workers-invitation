import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const CodeWelcomeOfferModal: React.FC = () => {
  const { language, setCurrentTab, setShowCodeOfferModal, updateWorker } = useApp();
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowCodeOfferModal(false);
    }, 180);
  };

  const handleViewOffer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowCodeOfferModal(false);
      // Ensure the job is selected
      updateWorker({
        appliedJobId: '1'
      });
      // Navigate to the Job Details screen before the job offer
      setCurrentTab('job_details');
    }, 180);
  };

  const isVisible = !isAnimatingOut;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-200 ease-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => handleDismiss()}
      data-node-id="1981:17377"
    >
      {/* Modal Container (Figma node 1981:17377 - Width 334px) */}
      <div
        className={`w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 transition-all duration-200 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        data-node-id="1981:17377"
      >
        {/* Top Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 z-20 bg-white border border-[#e5e5e5] text-[#171717] rounded-full size-[44px] flex items-center justify-center shadow-xs active:scale-90 transition-transform cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Top Visual Banner Frame (Height 209px, Gradient background with Celebration Badge) */}
        <div
          className="w-full h-[209px] bg-gradient-to-b from-[#d8e3ff] to-[#d8e3ff]/30 relative overflow-hidden flex items-center justify-center"
          data-node-id="1981:17378"
        >
          {/* Decorative Background Glow and Dots */}
          <div className="relative flex items-center justify-center">
            {/* Ambient circular glow */}
            <div className="absolute size-[130px] rounded-full bg-[#0038d0]/10 blur-xl pointer-events-none" />

            {/* Sparkle & Floating Accent Bubble Details */}
            <div className="absolute -top-3 -right-3 size-5 rounded-full border-[2.5px] border-[#ff9800] z-20 animate-pulse pointer-events-none" />
            <div className="absolute -top-5 right-5 size-2.5 rounded-full bg-[#ffd16e] z-20 pointer-events-none" />
            <div className="absolute -bottom-2 -left-4 size-4 rounded-full border-2 border-[#0038d0] z-20 pointer-events-none" />
            <div className="absolute bottom-6 -left-5 size-2 rounded-full bg-[#0038d0] z-20 pointer-events-none" />
            <div className="absolute top-1 -left-3 size-1.5 rounded-full bg-[#ff9800] z-20 pointer-events-none" />
            <div className="absolute -bottom-3 right-3 size-2 rounded-full bg-[#2874ff] z-20 pointer-events-none" />

            {/* Main Central Circular Badge */}
            <div
              className="size-[99px] rounded-full bg-[#0038d0] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,56,208,0.35)] relative z-10 select-none"
              data-node-id="1981:17380"
            >
              <span className="font-['DM_Sans',sans-serif] font-bold text-[54px] leading-none text-white tracking-tight">
                Z
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="w-full p-5 flex flex-col justify-between text-left space-y-4" data-node-id="1981:17385">
          <div className="space-y-2">
            {/* Title (DM Sans SemiBold 24px) */}
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
              data-node-id="1981:17386"
            >
              {language === 'es' ? '¡Bienvenido a Zipmi!' : 'Welcome to Zipmi!'}
            </h2>

            {/* Description Text (Inter Medium 16px) */}
            <p
              className="font-['Inter',sans-serif] font-medium text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.032px]"
              data-node-id="1981:17387"
            >
              {language === 'es'
                ? '¡Buenas noticias! Tienes una oferta de trabajo. ¡Toca abajo para verla y firmarla!'
                : 'Great news! You have a job offer. Tap below to see and sign it!'}
            </p>
          </div>

          {/* Primary Action Button: "Ver oferta" / "See job offer!" */}
          <button
            onClick={handleViewOffer}
            className="w-full min-h-[44px] h-[48px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
            data-node-id="1981:17390"
          >
            <span>{language === 'es' ? 'Ver oferta' : 'See job offer!'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
