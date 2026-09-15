import React from 'react';
import { useApp } from '../../context/AppContext';

export const ArrivalCongratsModal: React.FC = () => {
  const { language, showArrivalCongratsModal, setShowArrivalCongratsModal, setHasArrivedAtJob } = useApp();

  if (!showArrivalCongratsModal) return null;

  const handleClose = () => {
    setShowArrivalCongratsModal(false);
    setHasArrivedAtJob(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in pointer-events-auto select-none"
      onClick={handleClose}
      data-node-id="1712:45155"
    >
      {/* Modal Container (Figma Node 1712:45156) */}
      <div
        className="bg-white rounded-[24px] overflow-hidden w-full max-w-[340px] shadow-2xl border border-[#e5e5e5] flex flex-col animate-scale-up text-left font-['Inter',sans-serif]"
        onClick={(e) => e.stopPropagation()}
        data-node-id="1712:45156"
      >
        {/* Top Gradient Illustration Header (Height 208px) */}
        <div
          className="h-[208px] w-full relative flex items-center justify-center shrink-0 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #d8e3ff 0%, rgba(216, 227, 255, 0) 100%)'
          }}
          data-node-id="1712:45157"
        >
          {/* Top Left Close 'X' Button (Figma Node 1712:45169) */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 z-20 bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#171717] shadow-xs active:scale-90 transition-all cursor-pointer"
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            data-node-id="1712:45169"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Center Zipmi Logo Bubble with Floating Accent Rings */}
          <div className="relative size-[160px] flex items-center justify-center">
            {/* Top Blue Ring */}
            <div className="absolute top-2 left-[50px] size-[16px] rounded-full border-[3px] border-[#2874ff]" />

            {/* Right Small Blue Ring */}
            <div className="absolute top-[48px] -right-2 size-[9px] rounded-full border-[2px] border-[#2874ff]" />

            {/* Left Orange Ring */}
            <div className="absolute top-[52px] -left-3 size-[12px] rounded-full border-[3px] border-[#ff9800]" />

            {/* Bottom Left Orange Ring */}
            <div className="absolute bottom-[24px] left-[18px] size-[12px] rounded-full border-[3px] border-[#ff9800]" />

            {/* Bottom Right Orange Ring */}
            <div className="absolute bottom-[20px] right-[12px] size-[15px] rounded-full border-[3.5px] border-[#ff9800]" />

            {/* Central Zipmi Blue Z Circle */}
            <div className="size-[99px] rounded-full bg-[#0038d0] text-white flex items-center justify-center font-['DM_Sans',sans-serif] font-bold text-[52px] shadow-lg select-none">
              Z
            </div>
          </div>
        </div>

        {/* Modal Body Container (Figma Node 1712:45170) */}
        <div className="p-6 flex flex-col gap-5 text-left font-['Inter',sans-serif]" data-node-id="1712:45170">
          {/* Title & Description */}
          <div className="flex flex-col gap-3">
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
              data-node-id="1712:45172"
            >
              {language === 'es' ? '¡Felicidades por llegar a tu trabajo!' : 'Congrats on arriving to your job!'}
            </h2>
            <p
              className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.032px]"
              data-node-id="1712:45174"
            >
              {language === 'es'
                ? '¡Ahora puedes enviar tus recibos para reembolsos!'
                : 'Now you can submit any receipts for reimbursements!'}
            </p>
          </div>

          {/* Info Card (Figma Node 1712:45176) */}
          <div
            className="bg-[#b0deff]/40 border-[1.2px] border-[#2874ff] rounded-[8px] p-3 flex items-center gap-2.5 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)]"
            data-node-id="1712:45176"
          >
            <span className="material-symbols-outlined text-[24px] text-[#0b38a4] shrink-0" data-node-id="1712:45177">
              info
            </span>
            <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#0b38a4] tracking-[-0.028px]" data-node-id="1712:45181">
              {language === 'es' ? 'Sube un recibo claro para su pago.' : 'Upload a clear receipt to pay.'}
            </p>
          </div>

          {/* Action Button (Figma Node 1712:45182) */}
          <button
            onClick={handleClose}
            className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] border border-[#2874ff] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
            data-node-id="1712:45182"
          >
            <span>{language === 'es' ? 'Entendido' : 'Got it'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
