import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step5EmergencyContactScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [contactName, setContactName] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+52');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(digitsOnly);
    if (phoneError && digitsOnly.length === 10) {
      setPhoneError('');
    }
  };

  const handleContinue = () => {
    if (phoneNumber.length > 0 && phoneNumber.length < 10) {
      setPhoneError(
        language === 'es'
          ? 'El número de teléfono debe tener exactamente 10 dígitos.'
          : 'Phone number must be exactly 10 digits.'
      );
      return;
    }
    setCurrentTab('step6_parents_info');
  };

  const handleBack = () => {
    setCurrentTab('step4_background_survey');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4090"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 truncate px-2">
            {language === 'es' ? 'Información personal' : 'Personal Information'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Progress Bar (Part 5) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[80%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[28px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Contacto de emergencia' : 'Emergency Contact'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
            {language === 'es'
              ? 'Si te sucede algo mientras estás trabajando en EE. UU., ¿a quién debería llamar tu empleador?'
              : 'If something happens to you while you are working in the US, who should your employer call?'}
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 pt-2">
          {/* Field 1: Name of Emergency Contact */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Nombre del contacto de emergencia' : 'Name of Emergency Contact'}
            </label>
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder={language === 'es' ? 'Nombre del contacto de emergencia' : 'Add name of emergency contact'}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 2: Phone number */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Número de teléfono' : 'Phone number'}
            </label>
            <div className="flex gap-2.5 w-full">
              {/* Country Flag Selector */}
              <div className="relative w-[110px] shrink-0">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] pl-[10px] pr-[28px] font-['Inter',sans-serif] font-medium text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                >
                  <option value="+52">🇲🇽 +52</option>
                  <option value="+502">🇬🇹 +502</option>
                  <option value="+504">🇭🇳 +504</option>
                  <option value="+503">🇸🇻 +503</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[18px]">
                  expand_more
                </span>
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="1234567890"
                className={`bg-white border rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors flex-1 shadow-2xs ${
                  phoneError ? 'border-red-500' : 'border-[#e5e5e5]'
                }`}
              />
            </div>
            {phoneError && (
              <p className="font-['Inter',sans-serif] text-[13px] text-red-500 pt-0.5">{phoneError}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
