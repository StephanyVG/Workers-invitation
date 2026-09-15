import React from 'react';
import { useApp } from '../../context/AppContext';

export const TransportConfirmationBottomSheet: React.FC = () => {
  const {
    showTransportBottomSheet,
    setShowTransportBottomSheet,
    setHasConfirmedConsularDetails,
    setTransportPreference,
    setCurrentTab,
    language,
    addToast
  } = useApp();

  if (!showTransportBottomSheet) return null;

  const handleSelectOption = (needed: boolean) => {
    setTransportPreference(needed ? 'employer' : 'own');
    setHasConfirmedConsularDetails(true);
    setShowTransportBottomSheet(false);
    setCurrentTab('home');

    addToast(
      language === 'es' ? 'Preferencia guardada' : 'Preference saved',
      needed
        ? language === 'es'
          ? 'Has solicitado transporte provisto por el empleador.'
          : 'You requested employer-provided transportation.'
        : language === 'es'
        ? 'Indicaste que usarás tu propio transporte.'
        : 'You indicated you will use your own transportation.',
      'success'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex flex-col justify-end animate-fade-in pointer-events-auto select-none"
      onClick={() => setShowTransportBottomSheet(false)}
      data-node-id="1628:50256"
    >
      <div
        className="bg-[#fafafa] rounded-t-[16px] w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col pb-6"
        onClick={(e) => e.stopPropagation()}
        data-node-id="1628:50293"
      >
        {/* Grabber Handle */}
        <div className="w-full flex items-center justify-center pt-3 pb-1 cursor-pointer">
          <div className="bg-[#191c1b] h-[4px] w-[32px] rounded-full" />
        </div>

        {/* Content with 24px Container Padding */}
        <div className="p-6 flex flex-col gap-6 text-left font-['Inter',sans-serif]">
          <div className="flex flex-col gap-3">
            <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
              {language === 'es'
                ? '¿Si tu visa es aprobada, viajarás al lugar de trabajo con el transporte del empleador?'
                : 'If your visa is approved, will you travel to your job site via employer-provided transport?'}
            </h3>
            <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040]">
              {language === 'es'
                ? 'Podemos ayudarte a coordinar esta parte de tu viaje.'
                : 'We can help you coordinate this part of your trip.'}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => handleSelectOption(true)}
              className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-sm transition-all duration-150 cursor-pointer flex items-center justify-center"
              data-node-id="1628:50308"
            >
              {language === 'es' ? 'Sí, lo necesito' : 'Yes, I need it'}
            </button>

            <button
              onClick={() => handleSelectOption(false)}
              className="w-full h-[44px] text-[#0038d0] hover:bg-slate-100 active:scale-[0.98] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center transition-all duration-150 cursor-pointer flex items-center justify-center"
              data-node-id="1628:50309"
            >
              {language === 'es' ? 'Usaré mi propio transporte.' : 'I will use my own transportation.'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
