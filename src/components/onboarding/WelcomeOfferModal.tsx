import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const WelcomeOfferModal: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();
  const [modalStep, setModalStep] = useState<1 | 2>(1); // 1 = Node 631:28510 (OK modal), 2 = Node 631:28539 (View job modal)
  const [isDelayFinished, setIsDelayFinished] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  // 2-second delay before displaying the first modal (Node 631:28510) over Home view (Node 631:28540)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayFinished(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleStep1Ok = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    // Close Modal 1 (631:28510) and open Modal 2 (631:28539)
    setTimeout(() => {
      setModalStep(2);
      setIsAnimatingOut(false);
    }, 250);
  };

  const handleViewJob = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    // Close Modal 2 and navigate to Job Offer Detail screen (Node 631:28603)
    setTimeout(() => {
      setShowWelcomeModal(false);
      setCurrentTab('job_offer_detail');
    }, 300);
  };

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimatingOut(true);

    setTimeout(() => {
      setShowWelcomeModal(false);
    }, 300);
  };

  if (!isDelayFinished) {
    return null;
  }

  const isVisible = isDelayFinished && !isAnimatingOut;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => handleDismiss()}
      data-node-id={modalStep === 1 ? '631:28510' : '631:28539'}
    >
      {/* Modal Container with Smooth Scale & Slide Animation */}
      <div
        className={`w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-8 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        data-node-id={modalStep === 1 ? '631:28510' : '631:28539'}
      >
        {/* Top-Left Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-xs text-[#171717] rounded-full size-8 flex items-center justify-center shadow-sm active:scale-90 transition-transform cursor-pointer"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {modalStep === 1 ? (
          /* Step 1: Figma Node 631:28510 - Confirmation Modal with OK button */
          <div className="w-full p-6 flex flex-col items-center text-center space-y-4 pt-8" data-node-id="631:28510">
            {/* Header Icon / Graphic Area */}
            <div className="size-[64px] bg-[#d8e3ff] rounded-full flex items-center justify-center text-[#0038d0] mb-1">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            {/* Title */}
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] leading-[30px] text-[#0038d0] tracking-tight">
              {language === 'es' ? '¡Perfil listo!' : 'Profile ready!'}
            </h2>

            {/* Subtitle Message */}
            <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252]">
              {language === 'es'
                ? 'Tu información ha sido guardada. Tu perfil ahora está visible para empleadores verificados de EE.UU.'
                : 'Your info has been saved. Your profile is now visible to verified U.S. employers.'}
            </p>

            {/* Primary Action Button: OK */}
            <div className="w-full pt-2">
              <button
                onClick={handleStep1Ok}
                className="w-full min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
              >
                <span>OK</span>
              </button>
            </div>
          </div>
        ) : (
          /* Step 2: Figma Node 631:28539 - Offer Modal with "View job" / "Ver trabajo" button */
          <div className="w-full flex flex-col items-center text-center" data-node-id="631:28539">
            {/* Top Banner Header Graphic */}
            <div className="w-full bg-[#d8e3ff] relative overflow-hidden flex items-center justify-center">
              <img
                src="/modal.svg"
                alt="Zipmi Offer Modal"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Body Content */}
            <div className="w-full p-6 flex flex-col items-center text-center">
              <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] leading-[30px] text-[#0038d0] mb-2 tracking-tight">
                {language === 'es' ? '¡Bienvenido a Zipmi!' : 'Welcome to Zipmi!'}
              </h2>

              <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] mb-6">
                {language === 'es'
                  ? '¡Excelentes noticias! Tienes una nueva oferta de trabajo esperándote.'
                  : 'Great news! You have a new job offer waiting for you.'}
              </p>

              {/* Action Button: "View job" / "Ver trabajo" */}
              <button
                onClick={handleViewJob}
                className="w-full min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
              >
                <span>{language === 'es' ? 'Ver trabajo' : 'View job'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
