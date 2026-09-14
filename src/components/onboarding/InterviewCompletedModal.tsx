import React from 'react';
import { useApp } from '../../context/AppContext';

export const InterviewCompletedModal: React.FC = () => {
  const { language, setShowInterviewCompletedModal, worker, updateWorker, triggerPushBanner } = useApp();

  const workerFirstName = worker?.fullName?.split(' ')[0] || 'Guadalupe';

  const handleClose = () => {
    updateWorker({ status: 'oferta_enviada' });
    setShowInterviewCompletedModal(false);
    triggerPushBanner();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in pointer-events-auto select-none"
      data-node-id="1004:4184"
    >
      {/* Modal Container (Figma Node 1004:4184 - rounded-[24px], overflow-hidden, max-w-[340px], bg-white) */}
      <div
        className="bg-white rounded-[24px] overflow-hidden w-full max-w-[340px] shadow-2xl border border-[#e5e5e5] flex flex-col animate-scale-up text-left font-['Inter',sans-serif]"
        data-node-id="1004:4184"
      >
        {/* Top Gradient Illustration Header (Node I1004:4184;393:30993 - Height 209px) */}
        <div
          className="h-[209px] w-full relative flex items-center justify-center shrink-0 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #d8e3ff 0%, rgba(216, 227, 255, 0) 100%)'
          }}
          data-node-id="I1004:4184;393:30993"
        >
          {/* Top Left Close 'X' Button (Node I1004:4184;542:44899) */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 z-20 bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer"
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            data-node-id="I1004:4184;542:44900"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Center Zipmi Logo Bubble with Floating Accent Circles */}
          <div className="relative size-[160px] flex items-center justify-center">
            {/* Top Blue Circle */}
            <div className="absolute top-3 size-[14px] rounded-full border-[3px] border-[#0038d0]" />
            {/* Top Left Orange Circle */}
            <div className="absolute top-8 left-4 size-[16px] rounded-full border-[3px] border-[#ff9800]" />
            {/* Top Right Orange Circle */}
            <div className="absolute top-[38px] right-[18px] size-[16px] rounded-full border-[3px] border-[#ff9800]" />
            {/* Bottom Right Blue Circle */}
            <div className="absolute bottom-[28px] right-[24px] size-[16px] rounded-full border-[3px] border-[#0038d0]" />
            {/* Bottom Left Blue Circle */}
            <div className="absolute bottom-[20px] left-[32px] size-[10px] rounded-full border-[2px] border-[#0038d0]" />

            {/* Central Zipmi Blue Z Circle */}
            <div className="size-[99px] rounded-full bg-[#0038d0] text-white flex items-center justify-center font-['DM_Sans',sans-serif] font-bold text-[52px] shadow-lg select-none">
              Z
            </div>
          </div>
        </div>

        {/* Content Body (Node I1004:4184;390:32501 - p-4 flex flex-col gap-6) */}
        <div className="p-4 flex flex-col gap-6 w-full text-left" data-node-id="I1004:4184;390:32501">
          <div className="space-y-4" data-node-id="I1004:4184;390:32502">
            {/* Headline (Node I1004:4184;390:32503) */}
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
              data-node-id="I1004:4184;390:32503"
            >
              {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
            </h2>

            {/* Message Paragraphs (Node I1004:4184;390:32504) */}
            <div className="space-y-3 font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#0a0a0a] tracking-[-0.056px]" data-node-id="I1004:4184;390:32504">
              <p data-node-id="I1004:4184;390:32505">
                {language === 'es'
                  ? '¡Esperamos que tu entrevista haya ido bien! Si a la empresa le interesa tu perfil, te enviará una Oferta de Trabajo.'
                  : 'We hope your interview went well! If the company is interested, they will send you a Job Offer.'}
              </p>
              <p data-node-id="I1004:4184;390:32506">
                {language === 'es'
                  ? 'Te enviaremos un mensaje cuando tomen una decisión.'
                  : 'We will send you a message when they decide.'}
              </p>
            </div>
          </div>

          {/* Primary Action Button (Node I1004:4184;390:32508) */}
          <button
            onClick={handleClose}
            className="w-full h-[44px] min-h-[44px] bg-[#0038d0] border border-[#2874ff] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-sm transition-all duration-150 cursor-pointer flex items-center justify-center"
            data-node-id="I1004:4184;390:32508"
          >
            {language === 'es' ? 'Regresar al inicio' : 'Back to home'}
          </button>
        </div>
      </div>
    </div>
  );
};
