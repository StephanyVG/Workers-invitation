import React from 'react';
import { useApp } from '../context/AppContext';

export const InterviewScheduledConfirmationView: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif]"
      data-node-id="1004:4444"
    >
      {/* Top Gradient & Illustration Area (1004:4445) */}
      <div
        className="relative w-full h-[320px] flex flex-col items-center justify-center shrink-0"
        style={{
          background: 'linear-gradient(180.7deg, rgba(216, 227, 255, 0.6) 0%, rgba(216, 227, 255, 0) 100%)'
        }}
      >
        {/* Top Header Row with Close 'X' Button */}
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={() => setCurrentTab('home')}
            className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-transform cursor-pointer"
            aria-label="Close"
            data-node-id="1004:4470"
          >
            <span className="material-symbols-outlined text-[20px] text-[#191c1b]">close</span>
          </button>
        </div>

        {/* Thumbs Up Graphic (thumb.svg) */}
        <div className="relative w-[180px] h-[190px] flex items-center justify-center mt-6">
          <img
            src="/thumb.svg"
            alt="Interview Scheduled"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>

      {/* Main Text Content (1004:4472) */}
      <div className="flex-1 px-[24px] pt-[24px] pb-[32px] space-y-[24px]" data-node-id="1004:4472">
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]"
          data-node-id="1004:4474"
        >
          {language === 'es' ? '¡Tu entrevista está programada!' : 'Your interview is scheduled!'}
        </h1>

        <p
          className="font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.032px]"
          data-node-id="1004:4476"
        >
          {language === 'es'
            ? 'Revisa tu calendario para ver la fecha, hora y enlace para unirte a la reunión.'
            : 'Check your calendar to see the date, time, and link to join the meeting.'}
        </p>
      </div>

      {/* Bottom Footer Actions (1004:4478 / 1004:4479) */}
      <div className="p-[24px] space-y-[12px] bg-[#f5f5f5] mt-auto shrink-0">
        <button
          onClick={() => setCurrentTab('calendar')}
          className="w-full min-h-[44px] px-[16px] py-[10px] bg-[#0038d0] border border-[#2874ff] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          data-node-id="1004:4478"
        >
          {language === 'es' ? 'Ver Calendario' : 'View Calendar'}
        </button>

        <button
          onClick={() => setCurrentTab('home')}
          className="w-full h-[44px] px-[16px] py-[10px] text-[#0038d0] rounded-full font-semibold text-[16px] leading-[22px] text-center hover:bg-blue-50 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          data-node-id="1004:4479"
        >
          {language === 'es' ? 'Regresar al inicio' : 'Back to home'}
        </button>
      </div>
    </div>
  );
};
