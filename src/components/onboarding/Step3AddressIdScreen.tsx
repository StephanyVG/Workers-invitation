import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step3AddressIdScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [street, setStreet] = useState<string>('Av. Insurgentes Sur 123');
  const [neighborhood, setNeighborhood] = useState<string>('Roma Norte');
  const [city, setCity] = useState<string>('Ciudad de México');
  const [state, setState] = useState<string>('CDMX');
  const [postalCode, setPostalCode] = useState<string>('06700');
  const [nationalId, setNationalId] = useState<string>('FRDEL890410HDFR01');

  const handleContinue = () => {
    setCurrentTab('step4_background_survey');
  };

  const handleBack = () => {
    setCurrentTab('step2_contact_details');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4059"
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

        {/* Progress Bar for Part 3 (75%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[75%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scroll Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] pb-[32px] space-y-6">
        {/* Title and Question */}
        <div className="text-left space-y-2 w-full">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.096px]">
            {language === 'es'
              ? 'Ingresa tu dirección de domicilio y número de identificación'
              : 'Please enter your home address and ID number'}
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252] tracking-[-0.064px]">
            {language === 'es'
              ? 'Esta información es requerida para la verificación legal y emisión de tu contrato de trabajo.'
              : 'This info is required for official legal verification and contract issue.'}
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 w-full pt-1">
          {/* Field 1: Street */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Calle y número' : 'Street address'}
            </label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 2: Neighborhood */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Colonia o barrio' : 'Neighborhood'}
            </label>
            <input
              type="text"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 3: City */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Ciudad o municipio' : 'City'}
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 4: State */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Estado o provincia' : 'State / Province'}
            </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 5: Postal Code */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Código postal' : 'Postal code'}
            </label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 6: National ID / CURP */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Número de identificación oficial (CURP / DNI)' : 'National ID number'}
            </label>
            <input
              type="text"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs uppercase"
            />
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleContinue}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar' : 'Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
