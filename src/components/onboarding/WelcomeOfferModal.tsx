import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const WelcomeOfferModal: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();
  const [modalStep, setModalStep] = useState<1 | 2>(1); // 1 = Node 631:28510 (OK modal), 2 = Node 631:28539 (View job modal)
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  const handleStep1Ok = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    // Transition immediately from Modal 1 (631:28510) to Modal 2 (631:28539)
    setTimeout(() => {
      setModalStep(2);
      setIsAnimatingOut(false);
    }, 150);
  };

  const handleViewJob = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimatingOut(true);

    // Close Modal 2 and navigate to Job Offer Detail screen (Node 631:28603)
    setTimeout(() => {
      setShowWelcomeModal(false);
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
      data-node-id={modalStep === 1 ? '631:28510' : '631:28539'}
    >
      {/* Modal Container (Figma nodes 631:28510 / 631:28539 - Width 334px) */}
      <div
        className={`w-full max-w-[334px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center border border-slate-100 relative z-10 transition-all duration-200 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        data-node-id={modalStep === 1 ? '631:28510' : '631:28539'}
      >
        {/* Top Close Button (container btn 542:44899) */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-xs text-[#171717] rounded-full size-9 flex items-center justify-center shadow-sm active:scale-90 transition-transform cursor-pointer"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {modalStep === 1 ? (
          /* Step 1: Figma Node 631:28510 - Confirmation Modal with OK button */
          <div className="w-full flex flex-col items-center" data-node-id="631:28510">
            {/* Top Image Frame (393:30993) - Height 209px with centered BubbleZip */}
            <div
              className="w-full h-[209px] bg-[#d8e3ff] relative overflow-hidden flex items-center justify-center"
              data-node-id="393:30993"
            >
              {/* Centered BubbleZip Graphic (393:30997) */}
              <img
                src="/BubbleZip.svg"
                alt="BubbleZip"
                className="w-[120px] h-[120px] object-contain relative z-10 mx-auto my-auto"
                data-node-id="393:30997"
              />
              {/* Decorative Accent Dots */}
              <div className="absolute size-4 bg-[#0038d0]/20 rounded-full top-6 left-12" />
              <div className="absolute size-5 bg-[#0038d0]/30 rounded-full top-10 right-10" />
              <div className="absolute size-3 bg-[#0038d0]/20 rounded-full bottom-8 left-16" />
              <div className="absolute size-4 bg-[#0038d0]/25 rounded-full bottom-10 right-14" />
            </div>

            {/* Body Container (390:32501) - Height 275px */}
            <div className="w-full p-5 flex flex-col justify-between text-left space-y-4" data-node-id="390:32501">
              <div className="space-y-3" data-node-id="390:32502">
                {/* Title (390:32503) */}
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[28px] text-[#0038d0] tracking-tight" data-node-id="390:32503">
                  {language === 'es' ? '¡Perfil listo para revisión!' : 'Profile ready for review!'}
                </h2>

                {/* Questions Text Block (390:32504) */}
                <div className="space-y-2 font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252]" data-node-id="390:32504">
                  <p data-node-id="390:32505">
                    {language === 'es'
                      ? 'Tu información se ha guardado exitosamente.'
                      : 'Your information has been successfully saved.'}
                  </p>
                  <p data-node-id="390:32506">
                    {language === 'es'
                      ? 'Las empresas verificadas de EE.UU. podrán revisar tu perfil.'
                      : 'Verified U.S. employers will be able to review your profile.'}
                  </p>
                  <p data-node-id="390:32507">
                    {language === 'es'
                      ? 'Te notificaremos en cuanto recibas una oferta H-2.'
                      : 'We will notify you as soon as you receive an H-2 offer.'}
                  </p>
                </div>
              </div>

              {/* Primary Button OK (390:32508) */}
              <button
                onClick={handleStep1Ok}
                className="w-full h-[44px] min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
                data-node-id="390:32508"
              >
                <span>OK</span>
              </button>
            </div>
          </div>
        ) : (
          /* Step 2: Figma Node 631:28539 - Offer Modal with Centered JobCard 2 */
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
                {/* Title (341:32257) */}
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[28px] text-[#0038d0] tracking-tight" data-node-id="341:32257">
                  {language === 'es' ? '¡Tienes una oferta de trabajo!' : 'You have a job offer!'}
                </h2>

                {/* Questions / Subtitle Text (341:32258 / 341:32259) */}
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252]" data-node-id="341:32259">
                  {language === 'es'
                    ? 'Un empleador de EE.UU. ha revisado tu perfil y te ha enviado una propuesta de trabajo. Revisa los detalles ahora.'
                    : 'A U.S. employer has reviewed your profile and sent you a job proposal. View details now.'}
                </p>
              </div>

              {/* Primary Button: View job (341:32262) */}
              <button
                onClick={handleViewJob}
                className="w-full h-[44px] min-h-[44px] px-5 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
                data-node-id="341:32262"
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
