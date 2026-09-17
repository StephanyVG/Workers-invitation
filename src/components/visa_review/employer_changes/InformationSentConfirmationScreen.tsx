import React, { useEffect } from 'react';
import { useApp } from '../../../context/AppContext';

export const InformationSentConfirmationScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    setEmployerVisaChangesReviewed,
    triggerConfetti,
    addToast,
  } = useApp();

  useEffect(() => {
    triggerConfetti();
  }, [triggerConfetti]);

  const handleReturnHome = () => {
    setEmployerVisaChangesReviewed(true);
    addToast(
      language === 'es' ? 'Cambios enviados' : 'Changes submitted',
      language === 'es'
        ? 'Tus cambios fueron enviados al empleador con éxito.'
        : 'Your changes were successfully submitted to your employer.',
      'success'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] min-h-screen overflow-y-auto custom-scrollbar animate-fade-in text-center font-['Inter',sans-serif] justify-between p-6 sm:p-8 relative"
      data-node-id="17:33453"
    >
      {/* Top Bar with Circular Close Button */}
      <div className="w-full flex justify-start items-center">
        <button
          type="button"
          onClick={handleReturnHome}
          className="size-[44px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#191c1b] shadow-2xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Center Content: Illustration + Title + Subtitle */}
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto w-full gap-5 my-auto">
        {/* Thumbs Up Illustration */}
        <div className="relative flex items-center justify-center mb-2">
          <img
            src="/thumb.svg"
            alt="Thumbs Up"
            className="w-[180px] h-[190px] object-contain drop-shadow-sm"
          />
        </div>

        {/* Title */}
        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.08px]">
          {language === 'es' ? '¡Información enviada!' : 'Information sent!'}
        </h1>

        {/* Description 1 */}
        <p className="text-[16px] leading-[24px] text-[#262626] font-normal max-w-xs">
          {language === 'es'
            ? 'Tu información ha sido actualizada con éxito. Tenemos todo lo que necesitamos para continuar tu proceso.'
            : 'Your information has been successfully updated. We have everything we need to continue your process.'}
        </p>

        {/* Description 2 */}
        <p className="text-[16px] leading-[24px] text-[#262626] font-normal max-w-xs">
          {language === 'es'
            ? '¡Todo está listo por ahora! Puedes cerrar la aplicación o volver al inicio.'
            : 'You are all set for now! You can close the app or return home.'}
        </p>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full max-w-sm mx-auto pt-6 pb-2">
        <button
          type="button"
          onClick={handleReturnHome}
          className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.99] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] rounded-[100px] shadow-sm transition-all cursor-pointer flex items-center justify-center"
        >
          {language === 'es' ? 'Volver al inicio' : 'Return to home'}
        </button>
      </div>
    </div>
  );
};
