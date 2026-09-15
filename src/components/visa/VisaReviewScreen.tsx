import React from 'react';
import { useApp } from '../../context/AppContext';

export const VisaReviewScreen: React.FC = () => {
  const { language, setCurrentTab, setHasUploadedVisa, triggerPushBanner, addToast } = useApp();

  const handleBack = () => {
    setCurrentTab('home');
  };

  const handleSendToEmployer = () => {
    setHasUploadedVisa(true);
    triggerPushBanner({
      title: language === 'es' ? 'Revisa tu itinerario de viaje' : 'Review Your Travel Itinerary',
      description: language === 'es'
        ? 'Tu transporte ha sido asignado. Es importante que revises los horarios y puntos de encuentro.'
        : 'Your transportation has been assigned. It’s important that you review the schedules and meeting points.',
      time: 'Hace 2 horas',
      targetTab: 'travel_itinerary',
    });
    addToast(
      language === 'es' ? '¡Visa Enviada con Éxito!' : 'Visa Successfully Sent!',
      language === 'es'
        ? 'Tu empleador ha recibido la fotografía de tu visa.'
        : 'Your employer has received the photo of your visa.',
      'success'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-fade-in relative h-full select-none"
      data-node-id="1628:50399"
    >
      {/* Sticky Top Header Bar */}
      <div className="w-full bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between sticky top-0 z-20 shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 truncate px-2">
          {language === 'es' ? 'Revisión de Visa' : 'Visa Review'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content with 24px Container Padding */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6 text-left font-['Inter',sans-serif]">
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Tu Visa' : 'Your Visa'}
          </h2>
          <p className="font-normal text-[15px] leading-[22px] text-[#525252]">
            {language === 'es'
              ? 'Puedes consultarla más tarde en tu sección de “Documentos”'
              : 'You can consult it later within your “Documents” section'}
          </p>
        </div>

        {/* Visa Document Container */}
        <div className="w-full bg-white border border-[#e5e5e5] rounded-[24px] p-4 shadow-sm flex items-center justify-center overflow-hidden">
          <div className="w-full rounded-[16px] overflow-hidden border border-[#d4d4d4] shadow-xs bg-black/5">
            <img
              src="/visa.png"
              alt="US Visa Document"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions with 24px Container Padding */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-6 w-full flex flex-col shrink-0">
        <button
          onClick={handleSendToEmployer}
          className="w-full h-[48px] px-4 bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Enviar a mi empleador' : 'Send to my employer'}</span>
        </button>
      </div>
    </div>
  );
};
