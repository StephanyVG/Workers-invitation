import React from 'react';
import { useApp } from '../../context/AppContext';

export const I9ConfirmationSuccessScreen: React.FC = () => {
  const { language, setCurrentTab, setHasCompletedI9Review, triggerConfetti, addToast, triggerPushBanner } = useApp();

  const handleGotIt = () => {
    setHasCompletedI9Review(true);
    triggerConfetti();
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

        {/* Thumbs-up Illustration Container */}
        <div className="relative w-[180px] h-[180px] flex items-center justify-center mt-2" data-node-id="3523:37783">
          {/* Floor Shadow Ellipse */}
          <div className="absolute bottom-2 w-[120px] h-[10px] bg-blue-900/10 rounded-full blur-[2px]" />

          {/* Radiating Motion Lines */}
          <div className="absolute top-3 right-5 w-4 h-1.5 bg-[#0038d0] rounded-full rotate-45" />
          <div className="absolute top-9 right-2 w-5 h-1.5 bg-[#0038d0] rounded-full rotate-12" />
          <div className="absolute top-1 right-12 w-1.5 h-4 bg-[#0038d0] rounded-full" />

          {/* Stylized SVG Thumbs Up */}
          <svg
            className="w-[120px] h-[120px] text-[#0038d0] drop-shadow-sm"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hand shape */}
            <path
              d="M32 44V76C32 77.1 32.9 78 34 78H72C75.3 78 78 75.3 78 72C78 70.8 77.6 69.7 77 68.8C79.4 67.5 81 64.9 81 62C81 60.3 80.4 58.8 79.3 57.7C81 56.1 82 53.9 82 51.5C82 48.6 80.4 46.1 78.1 44.8C78.7 43.8 79 42.7 79 41.5C79 38.2 76.3 35.5 73 35.5H53.5C54.8 32.5 56 28.5 56 24C56 18.5 53.5 16 50 16C46.5 16 45 19 45 23C45 30 38 39 33 43.5C32.4 44.1 32 44 32 44Z"
              fill="#d8e3ff"
              fillOpacity="0.4"
            />
            {/* Outline and details */}
            <path
              d="M32 44V78H72C75.3 78 78 75.3 78 72C78 70.8 77.6 69.7 77 68.8C79.4 67.5 81 64.9 81 62C81 60.3 80.4 58.8 79.3 57.7C81 56.1 82 53.9 82 51.5C82 48.6 80.4 46.1 78.1 44.8C78.7 43.8 79 42.7 79 41.5C79 38.2 76.3 35.5 73 35.5H53.5C54.8 32.5 56 28.5 56 24C56 18.5 53.5 16 50 16C46.5 16 45 19 45 23C45 30 38 39 33 43.5"
              stroke="#0038d0"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Finger dividers */}
            <path d="M50 44H78" stroke="#0038d0" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M52 52.5H79" stroke="#0038d0" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M54 61H78" stroke="#0038d0" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M53 69.5H75" stroke="#0038d0" strokeWidth="4.5" strokeLinecap="round" />
            {/* Cuff / Wrist Base */}
            <path
              d="M18 44H32V78H18C15.8 78 14 76.2 14 74V48C14 45.8 15.8 44 18 44Z"
              fill="#2874ff"
              fillOpacity="0.2"
              stroke="#0038d0"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
          </svg>
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
