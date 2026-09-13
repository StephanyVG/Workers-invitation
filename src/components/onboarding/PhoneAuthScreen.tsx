import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const PhoneAuthScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  const isPhoneValid = phoneNumber.replace(/\D/g, '').length >= 10;

  const handleContinue = () => {
    if (!isPhoneValid) return;
    setCurrentTab('otp_verify');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65823"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('invite_choice')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Logo and Titles */}
        <div className="flex flex-col items-center text-center gap-3 w-full mb-8">
          <img
            src="/Logo Horizontal.svg"
            alt="Zipmi"
            className="h-7 sm:h-8 w-auto object-contain mb-2"
          />
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-2xl sm:text-[28px] text-[#0038d0] leading-[36px] tracking-tight">
            {language === 'es' ? 'Comienza con tu número de teléfono' : 'Start with your phone number'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#525252]">
            {language === 'es'
              ? 'Ingresa tu número de teléfono para iniciar sesión'
              : 'Enter your phone number to log in'}
          </p>
        </div>

        {/* Phone Input Group */}
        <div className="w-full space-y-2 text-left">
          <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717] block">
            {language === 'es' ? 'Número de teléfono' : 'Phone number'}
          </label>
          <div className="flex items-center gap-2 w-full">
            {/* Country Selector */}
            <div className="h-[44px] px-3 bg-white border border-[#e5e5e5] rounded-[8px] flex items-center gap-1.5 shrink-0 text-[#171717] font-['Inter',sans-serif] text-[14px] shadow-2xs">
              <span className="text-[18px]">🇲🇽</span>
              <span className="font-medium">+52</span>
              <span className="material-symbols-outlined text-[18px] text-[#737373]">expand_more</span>
            </div>

            {/* Phone Text Field */}
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="(000) 000-0000"
              className="flex-1 h-[44px] px-[12px] py-[10px] bg-white border border-[#e5e5e5] rounded-[8px] font-['Inter',sans-serif] text-[15px] text-[#171717] placeholder:text-[#a3a3a3] outline-none focus:border-[#0038d0] transition-all shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleContinue}
          disabled={!isPhoneValid}
          className={`w-full min-h-[44px] h-[44px] px-4 py-[10px] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 ${
            isPhoneValid
              ? 'bg-[#0038d0] text-[#f5f5f5] cursor-pointer active:scale-[0.98]'
              : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed opacity-80'
          }`}
          data-node-id="3:65823"
        >
          {language === 'es' ? 'Continuar' : 'Continue'}
        </button>
      </div>
    </div>
  );
};
