import React from 'react';
import { useApp } from '../../context/AppContext';

export const I9ConfirmationSuccessScreen: React.FC = () => {
  const { language, setCurrentTab, setHasCompletedI9Review, addToast, triggerPushBanner } = useApp();

  const handleGotIt = () => {
    setHasCompletedI9Review(true);
    addToast(
      language === 'es' ? 'I-9 Confirmado' : 'I-9 Confirmed',
      language === 'es'
        ? 'Tu formulario I-9 ha sido enviado correctamente.'
        : 'Your I-9 form has been successfully submitted.',
      'success'
    );
    triggerPushBanner({
      title: language === 'es' ? 'Tu formulario I-9 está listo' : 'Your I-9 form is ready',
      description: language === 'es'
        ? 'Puedes consultar tu formulario I-9 firmado en tu sección de documentos.'
        : 'You can check your signed I-9 form in your documents section.',
      time: language === 'es' ? 'Hace un momento' : 'Just now',
      targetTab: 'documents',
    });
    setCurrentTab('home');
  };

  return (
    <div
      className="flex-1 flex flex-col justify-between bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none p-6"
      data-node-id="3523:37780"
    >
      {/* Top Background Gradient Header with Close Button and Illustration */}
      <div
        className="relative w-full flex flex-col items-center pt-2 pb-6 overflow-hidden rounded-[24px]"
        style={{
          background: 'linear-gradient(180deg, rgba(216, 227, 255, 0.6) 0%, rgba(216, 227, 255, 0) 100%)'
        }}
        data-node-id="3523:37781"
      >
        {/* Top-Left Close 'X' Button */}
        <div className="w-full flex justify-start pl-2 pt-1" data-node-id="3523:37799">
          <button
            onClick={handleGotIt}
            className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#171717] shadow-xs active:scale-90 transition-all cursor-pointer"
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            data-node-id="3523:37800"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Thumbs-up Illustration Container (thumb.svg) */}
        <div className="relative w-[180px] h-[190px] flex items-center justify-center mt-2" data-node-id="3523:37783">
          <img
            src="/thumb.svg"
            alt="I-9 Confirmed"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 text-left my-auto px-2 max-w-[480px] mx-auto w-full" data-node-id="3523:37804">
        <h2
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
          data-node-id="3523:37805"
        >
          {language === 'es'
            ? 'La confirmación ha sido enviada al empleador.'
            : 'The confirmation has been sent to the employer.'}
        </h2>
        <p
          className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
          data-node-id="3523:37807"
        >
          {language === 'es'
            ? 'Recibirás tu documento I-9 en breve.'
            : 'You will receive your I-9 document shortly.'}
        </p>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full max-w-[480px] mx-auto pt-4" data-node-id="3523:37809">
        <button
          type="button"
          onClick={handleGotIt}
          className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] border border-[#2874ff] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center"
        >
          <span>{language === 'es' ? 'Entendido' : 'Got it'}</span>
        </button>
      </div>
    </div>
  );
};
