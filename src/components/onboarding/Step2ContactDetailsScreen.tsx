import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step2ContactDetailsScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [mobilePhone, setMobilePhone] = useState<string>('+52 55 1234 5678');
  const [altPhone, setAltPhone] = useState<string>('+52 55 8765 4321');
  const [email, setEmail] = useState<string>('delmer.francisco@example.com');
  const [emergencyName, setEmergencyName] = useState<string>('María Francisco');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('+52 55 9988 7766');
  const [relationship, setRelationship] = useState<string>(language === 'es' ? 'Esposa' : 'Wife');

  const handleContinue = () => {
    setCurrentTab('step3_address_id');
  };

  const handleBack = () => {
    setCurrentTab('confirm_profile_photo');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:3960"
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

        {/* Progress Bar for Part 2 (50%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[50%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Form Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6">
        {/* Title and Description (Figma 1:3973) */}
        <div className="text-left space-y-2 w-full">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
            {language === 'es'
              ? 'Proporciona tus datos de contacto personal'
              : 'Provide your personal contact details'}
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
            {language === 'es'
              ? 'Necesitaremos estos datos para ponernos en contacto contigo y enviarte actualizaciones de tu proceso de visa.'
              : 'We will need these contact details to update you on your visa application process.'}
          </p>
        </div>

        {/* Form Fields (Figma 1:3974 to 1:3979) */}
        <div className="space-y-4 w-full pt-1">
          {/* Field 1: Mobile Phone */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Teléfono celular' : 'Mobile Phone'}
            </label>
            <input
              type="tel"
              value={mobilePhone}
              onChange={(e) => setMobilePhone(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 2: Alternative Phone */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Teléfono alternativo (opcional)' : 'Alternative Phone (optional)'}
            </label>
            <input
              type="tel"
              value={altPhone}
              onChange={(e) => setAltPhone(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 3: Email */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Correo electrónico' : 'Email address'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 4: Emergency Contact Name */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Nombre de contacto de emergencia' : 'Emergency contact name'}
            </label>
            <input
              type="text"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 5: Emergency Contact Phone */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Teléfono de contacto de emergencia' : 'Emergency contact phone'}
            </label>
            <input
              type="tel"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 6: Relationship */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Parentesco' : 'Relationship'}
            </label>
            <div className="relative w-full">
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
              >
                <option value={language === 'es' ? 'Esposa' : 'Wife'}>
                  {language === 'es' ? 'Esposa / Cónyuge' : 'Wife / Spouse'}
                </option>
                <option value={language === 'es' ? 'Madre' : 'Mother'}>
                  {language === 'es' ? 'Madre' : 'Mother'}
                </option>
                <option value={language === 'es' ? 'Padre' : 'Father'}>
                  {language === 'es' ? 'Padre' : 'Father'}
                </option>
                <option value={language === 'es' ? 'Hermano/a' : 'Sibling'}>
                  {language === 'es' ? 'Hermano/a' : 'Sibling'}
                </option>
                <option value={language === 'es' ? 'Otro' : 'Other'}>
                  {language === 'es' ? 'Otro' : 'Other'}
                </option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                expand_more
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col items-center sticky bottom-0 z-20">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar' : 'Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
