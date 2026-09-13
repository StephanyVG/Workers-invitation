import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const WelcomeOfferModal: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();
  const [isDelayFinished, setIsDelayFinished] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  // 2-second delay before displaying the modal over Home view
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayFinished(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleShowOffer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    setTimeout(() => {
      setShowWelcomeModal(false);
      setCurrentTab('job_offer_detail');
    }, 350);
  };

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimatingOut(true);

    setTimeout(() => {
      setShowWelcomeModal(false);
    }, 350);
  };

  if (!isDelayFinished) {
    return null;
  }

  const isVisible = isDelayFinished && !isAnimatingOut;

  return (
    <div
      className={`absolute inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => handleDismiss()}
      data-node-id="1997:39856"
    >
      {/* Modal Container with Smooth Slide & Scale Animation (Figma node 1997:39908) */}
      <div
        className={`w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-12 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        data-node-id="1997:39908"
      >
        {/* Top-Left Icon-Only Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-xs text-[#171717] rounded-full size-8 flex items-center justify-center shadow-sm active:scale-90 transition-transform cursor-pointer"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Top Banner Header Area with modal.svg Image spanning container */}
        <div className="w-full bg-[#d8e3ff] relative overflow-hidden flex items-center justify-center">
          <img
            src="/modal.svg"
            alt="Zipmi Offer Modal"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Body Content */}
        <div className="w-full p-6 flex flex-col items-center text-center">
          {/* Title */}
          <h2
            className="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] leading-[30px] text-[#0038d0] mb-2 tracking-tight"
            data-node-id="1997:39865"
          >
            {language === 'es' ? '¡Bienvenido a Zipmi!' : 'Welcome to Zipmi!'}
          </h2>

          {/* Subtitle Message */}
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#525252] mb-6">
            {language === 'es'
              ? '¡Excelentes noticias! Tienes una nueva oferta de trabajo esperándote.'
              : 'Great news! You have a new job offer waiting for you.'}
          </p>

          {/* Primary Action Button - Clean text, no icon */}
          <button
            onClick={handleShowOffer}
            className="w-full min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            data-node-id="1997:39890"
          >
            <span>{language === 'es' ? '¡Muéstrame la oferta!' : 'Show me the offer!'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
