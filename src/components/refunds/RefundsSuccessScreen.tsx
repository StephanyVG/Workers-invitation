import React from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsSuccessScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49783"
    >
      {/* Top Section with Illustration & Close Button */}
      <div className="relative w-full flex flex-col items-center pt-10 pb-6 px-4 bg-gradient-to-b from-[#d8e3ff]/60 via-[#d8e3ff]/20 to-transparent">
        {/* Close Button Top Left */}
        <div className="w-full flex items-center justify-start max-w-[480px] mb-2" data-node-id="2308:49808">
          <button
            type="button"
            onClick={() => setCurrentTab('home')}
            className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
            data-node-id="2308:49809"
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Thumbs Up Illustration with Celebration Sparkles */}
        <div className="relative size-[180px] flex items-center justify-center my-4" data-node-id="2308:49786">
          {/* Background Decorative Rings/Dots */}
          <div className="absolute top-2 left-6 size-[14px] rounded-full border-2 border-[#0045ff] bg-transparent opacity-80" />
          <div className="absolute top-8 right-6 size-[16px] rounded-full border-2 border-[#f59e0b] bg-transparent opacity-80" />
          <div className="absolute bottom-6 left-4 size-[12px] rounded-full border-2 border-[#0045ff] bg-transparent opacity-80" />
          <div className="absolute bottom-4 right-10 size-[10px] rounded-full border-2 border-[#0045ff] bg-transparent opacity-80" />
          <div className="absolute top-1 right-20 size-[6px] rounded-full bg-[#f59e0b]" />
          <div className="absolute bottom-12 left-10 size-[6px] rounded-full bg-[#0045ff]" />

          {/* Sparkle lines around thumbs up */}
          <div className="absolute top-0 right-14 w-[3px] h-[12px] bg-[#0045ff] rounded-full -rotate-12" />
          <div className="absolute top-5 right-8 w-[3px] h-[12px] bg-[#0045ff] rounded-full rotate-45" />
          <div className="absolute top-12 right-6 w-[3px] h-[12px] bg-[#0045ff] rounded-full rotate-90" />

          {/* Main Thumbs Up Vector */}
          <svg
            className="w-[120px] h-[120px] text-[#0038d0] drop-shadow-md relative z-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>

          {/* Oval shadow under hand */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110px] h-[10px] bg-[#0038d0]/10 rounded-full blur-[2px]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 py-4 w-full flex flex-col gap-6 max-w-[480px] mx-auto">
        <div className="flex flex-col gap-3" data-node-id="2308:49812">
          <h1
            className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.24px]"
            data-node-id="2308:49813"
          >
            {language === 'es'
              ? '¡Recibos enviados con éxito!'
              : 'Receipts successfully submitted!'}
          </h1>

          <p
            className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#262626] tracking-[-0.056px]"
            data-node-id="2308:49815"
          >
            {language === 'es'
              ? 'Tu empleador revisará la información. Si todo está correcto, recibirás el dinero de tus gastos en tu próximo pago. Te enviaremos una notificación para revisar el estado de tu solicitud.'
              : 'Your employer will review the information. If everything is correct, you will receive your expense money in your next payment. We will send you a notification to check the status of your application.'}
          </p>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="sticky bottom-0 z-20 bg-[#f5f5f5] p-4 flex flex-col items-center w-full max-w-[480px] mx-auto shrink-0">
        <button
          type="button"
          onClick={() => setCurrentTab('home')}
          className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-98 text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] shadow-md transition-all cursor-pointer flex items-center justify-center"
          data-node-id="2308:49817"
        >
          {language === 'es' ? 'Volver a la página de inicio' : 'Return to home page'}
        </button>
      </div>
    </div>
  );
};
