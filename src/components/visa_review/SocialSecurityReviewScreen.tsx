import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const SocialSecurityReviewScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [ssn, setSsn] = useState('859632158');

  const handleBack = () => {
    setCurrentTab('visa_review_hub');
  };

  const handleContinue = () => {
    setCurrentTab('visa_review_contact');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:36673"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2">
          {language === 'es' ? 'Información personal' : 'Personal information'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Form Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-4 w-full">
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
          {language === 'es' ? 'Número de Seguro Social (SSN)' : 'Social Security Number (SSN)'}
        </h2>

        <p className="font-normal text-[16px] leading-[22px] text-[#262626] tracking-[-0.032px]">
          {language === 'es'
            ? 'Si has trabajado antes en los EE. UU., asegúrate de que este número coincida con tu tarjeta de seguro social.'
            : 'If you have worked before in the U.S., make sure this number is from your social security card.'}
        </p>

        {/* Info Notification Box */}
        <div className="bg-[rgba(176,222,255,0.4)] border border-[#2874ff] rounded-[8px] p-6 flex gap-2.5 items-start text-[#0b38a4] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)]">
          <span className="material-symbols-outlined text-[#0b38a4] text-[22px] shrink-0 mt-0.5">
            info
          </span>
          <p className="font-bold text-[15px] leading-[22px] text-[#0b38a4] tracking-[-0.032px]">
            {language === 'es'
              ? 'Si no sabes o no tienes un número de seguro social, deja la casilla en blanco y presiona continuar.'
              : 'If you don’t know or don’t have a social security number, leave the box blank and press continue.'}
          </p>
        </div>

        {/* SSN Input Field */}
        <div className="flex flex-col gap-1.5 mt-2">
          <input
            type="text"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            placeholder="123456789"
            className="w-full h-[44px] bg-white border-[1.5px] border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] px-3 font-['Inter',sans-serif] text-[15px] text-[#171717] tracking-wider outline-none shadow-2xs transition-colors"
          />
        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-6 flex flex-col items-center shrink-0">
        <button
          onClick={handleContinue}
          className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar al siguiente paso' : 'Continue to next step'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
