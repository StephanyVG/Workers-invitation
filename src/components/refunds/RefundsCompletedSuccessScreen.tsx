import React from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsCompletedSuccessScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:50014"
    >
      {/* Top Section with Illustration & Close Button */}
      <div className="relative w-full flex flex-col items-center pt-10 pb-6 px-4 bg-gradient-to-b from-[#d8e3ff]/60 via-[#d8e3ff]/20 to-transparent">
        {/* Close Button Top Left */}
        <div className="w-full flex items-center justify-start max-w-[480px] mb-2" data-node-id="2308:50039">
          <button
            type="button"
            onClick={() => setCurrentTab('home')}
            className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
            data-node-id="2308:50040"
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Thumbs Up Graphic (thumb.svg) */}
        <div className="relative w-[180px] h-[190px] flex items-center justify-center my-4" data-node-id="2308:50017">
          <img
            src="/thumb.svg"
            alt="Refund Completed"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 py-4 w-full flex flex-col gap-6 max-w-[480px] mx-auto">
        <div className="flex flex-col gap-3" data-node-id="2308:50043">
          <h1
            className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.24px]"
            data-node-id="2308:50044"
          >
            {language === 'es'
              ? '¡Listo, tu reembolso está completo!'
              : 'All set, your refund is complete!'}
          </h1>

          <p
            className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#262626] tracking-[-0.056px]"
            data-node-id="2308:50046"
          >
            {language === 'es'
              ? 'No necesitas hacer nada más. Si tienes recibos restantes, tu empleador continuará revisándolos.'
              : 'You don’t need to do anything else. If you have any remaining receipts, your employer will continue reviewing them.'}
          </p>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="sticky bottom-0 z-20 bg-[#f5f5f5] p-4 flex flex-col items-center w-full max-w-[480px] mx-auto shrink-0">
        <button
          type="button"
          onClick={() => setCurrentTab('home')}
          className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] shadow-md transition-all cursor-pointer flex items-center justify-center"
          data-node-id="2308:50048"
        >
          {language === 'es' ? 'Volver al inicio' : 'Return to home'}
        </button>
      </div>
    </div>
  );
};
