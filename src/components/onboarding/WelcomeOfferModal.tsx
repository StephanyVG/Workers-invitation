import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const WelcomeOfferModal: React.FC = () => {
  const {
    language,
    setCurrentTab,
    setShowWelcomeModal,
    updateWorker,
  } = useApp();
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  const handleViewJob = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    // Close Modal and navigate directly to Job Offer Detail screen (signing)
    setTimeout(() => {
      setShowWelcomeModal(false);
      updateWorker({ appliedJobId: '1' });
      setCurrentTab('job_offer_detail');
    }, 200);
  };

  const handleDismiss = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimatingOut(true);

    setTimeout(() => {
      setShowWelcomeModal(false);
    }, 200);
  };

  const isVisible = !isAnimatingOut;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-200 ease-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => handleDismiss()}
      data-node-id="631:28539"
    >
      {/* Modal Container (Figma node 631:28539 - Width 334px) */}
      <div
        className={`w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 transition-all duration-200 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        data-node-id="631:28539"
      >
        {/* Top Close Button (container btn 542:44899) */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-xs text-[#171717] rounded-full size-9 flex items-center justify-center shadow-sm active:scale-90 transition-transform cursor-pointer"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Figma Node 631:28539 - Job Invitation / Offer Modal with Centered JobCard 2 */}
        <div className="w-full flex flex-col items-center" data-node-id="631:28539">
          {/* Top Image Frame (341:32242) with Centered JobCard 2 (504:55870 - width 148, height 164) */}
          <div
            className="w-full h-[209px] bg-[#d8e3ff] relative overflow-hidden flex items-center justify-center"
            data-node-id="341:32242"
          >
            <img
              src="/JobCard2.svg"
              alt="JobCard 2 Banner"
              className="w-[148px] h-[164px] object-contain block mx-auto my-auto shadow-md rounded-[12px]"
              data-node-id="504:55870"
            />
          </div>

          {/* Container Frame (341:32255) */}
          <div className="w-full p-5 flex flex-col justify-between text-left space-y-4" data-node-id="341:32255">
            <div className="space-y-2" data-node-id="341:32256">
              {/* Title (341:32257) - 28px semibold */}
              <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]" data-node-id="341:32257">
                {language === 'es' ? '¡Tienes una oferta de trabajo!' : 'You have a job offer!'}
              </h2>

              {/* Subtitle Text (341:32258 / 341:32259) - 16px content */}
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.032px]" data-node-id="341:32259">
                {language === 'es'
                  ? '¡Buenas noticias! Tienes una oferta de trabajo de Granja Sunnydale Orchards. Toca abajo para verla y firmarla.'
                  : 'Great news! You have a job offer from Sunnydale Orchards Farm. Tap below to see and sign it.'}
              </p>
            </div>

            {/* Primary Button: View job (341:32262) */}
            <button
              onClick={handleViewJob}
              className="w-full h-[44px] min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
              data-node-id="341:32262"
            >
              <span>{language === 'es' ? 'Ver oferta de trabajo' : 'View Job Offer'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
