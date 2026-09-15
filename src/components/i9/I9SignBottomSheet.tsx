import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const I9SignBottomSheet: React.FC = () => {
  const { language, showI9SignBottomSheet, setShowI9SignBottomSheet, setCurrentTab, worker } = useApp();
  const [legalName, setLegalName] = useState(worker.fullName || 'Guadalupe Ramírez');

  if (!showI9SignBottomSheet) return null;

  const handleSign = () => {
    setShowI9SignBottomSheet(false);
    setCurrentTab('i9_confirmation');
  };

  const handleClose = () => {
    setShowI9SignBottomSheet(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs animate-fade-in pointer-events-auto select-none"
      onClick={handleClose}
      data-node-id="3520:37312"
    >
      {/* Bottom Sheet Container */}
      <div
        className="bg-white rounded-t-[24px] overflow-hidden w-full max-w-[480px] shadow-2xl border-t border-[#e5e5e5] flex flex-col animate-slide-up text-left font-['Inter',sans-serif]"
        onClick={(e) => e.stopPropagation()}
        data-node-id="3520:37314"
      >
        {/* Drag Handle */}
        <div className="w-full flex items-center justify-center pt-3 pb-2" data-node-id="3520:37316">
          <div className="w-[36px] h-[4px] bg-[#191c1b]/20 rounded-full" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-6" data-node-id="3520:37318">
          {/* Header Title & Subtitle */}
          <div className="flex flex-col gap-2" data-node-id="3520:37319">
            <h3
              className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#171717] tracking-[-0.16px]"
              data-node-id="3520:37321"
            >
              {language === 'es' ? 'Firma para confirmar' : 'Sign to confirm'}
            </h3>
            <p
              className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]"
              data-node-id="3520:37327"
            >
              {language === 'es'
                ? 'Hemos registrado tu nombre legal. Solo selecciona Firmar para continuar.'
                : 'We have recorded your legal name. Just select Sign to continue.'}
            </p>
          </div>

          {/* Form Field: Legal Name */}
          <div className="flex flex-col gap-1.5" data-node-id="3520:37329">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
              {language === 'es' ? 'Nombre Legal' : 'Legal Name'}
            </label>
            <div className="bg-white border-[1.5px] border-[#e5e5e5] focus-within:border-[#0038d0] rounded-[8px] px-3.5 py-2.5 flex items-center shadow-xs">
              <input
                type="text"
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
                className="w-full bg-transparent font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] outline-none"
                placeholder={language === 'es' ? 'Ingresa tu nombre legal' : 'Enter your legal name'}
              />
            </div>
          </div>

          {/* Buttons Area */}
          <div className="flex flex-col gap-3 pt-2" data-node-id="3520:37330">
            {/* Primary Sign Button */}
            <button
              type="button"
              onClick={handleSign}
              className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center"
              data-node-id="3520:37331"
            >
              <span>{language === 'es' ? 'Firmar' : 'Sign'}</span>
            </button>

            {/* Secondary Go Back Link Button */}
            <button
              type="button"
              onClick={handleClose}
              className="w-full h-[44px] px-4 py-[10px] text-[#0038d0] hover:bg-blue-50/50 active:scale-[0.98] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center transition-all cursor-pointer flex items-center justify-center"
              data-node-id="3520:37605"
            >
              <span>{language === 'es' ? 'Volver' : 'Go back'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
