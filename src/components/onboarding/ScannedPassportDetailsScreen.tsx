import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ScannedPassportDetailsScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  const [passportNumber, setPassportNumber] = useState<string>('E771813');
  const [fullName, setFullName] = useState<string>('Delmer Francisco');
  const [dob, setDob] = useState<string>('1989/04/10');
  const [placeOfBirth, setPlaceOfBirth] = useState<string>('Mexico');
  const [citizenship, setCitizenship] = useState<string>('Honduras');
  const [gender, setGender] = useState<string>(language === 'es' ? 'Masculino' : 'Male');

  const handleContinue = () => {
    setCurrentTab('profile_photo_guide');
  };

  const handleUploadAgain = () => {
    setCurrentTab('passport_photo_guide');
  };

  const handleBack = () => {
    setCurrentTab('passport_photo_guide');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:7358"
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

        {/* Progress Bar for Part 1 (25%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[25%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Form Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6">
        {/* Title and Description (Figma 1:7370) */}
        <div className="text-left space-y-2 w-full">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
            {language === 'es'
              ? 'Escaneamos tu pasaporte para llenar estos datos por ti.'
              : 'We scanned your passport to fill in these details for you.'}
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
            {language === 'es'
              ? 'Por favor verifícalos cuidadosamente y edítalos si hay algún error'
              : 'Please check them carefully and edit if anything is wrong'}
          </p>
        </div>

        {/* Passport Image Preview & Upload Again (Figma 1:7374) */}
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-[#e6ecff] border border-[#e5e5e5] rounded-[12px] p-2 flex items-center justify-center overflow-hidden shadow-xs">
            <img
              src="/pasaporte.svg"
              alt="Scanned Passport"
              className="w-full max-w-[328px] h-auto max-h-[190px] object-contain block select-none rounded-[8px]"
            />
          </div>

          <button
            onClick={handleUploadAgain}
            className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] h-[38px] rounded-[100px] w-full flex items-center justify-center shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
            data-node-id="1:7376"
          >
            {language === 'es' ? 'Volver a subir' : 'Upload again'}
          </button>
        </div>

        {/* Form Fields (Figma 1:7377 to 1:7382) */}
        <div className="space-y-4 w-full pt-1">
          {/* Field 1: Passport Number */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Número de pasaporte' : 'Passport Number'}
            </label>
            <input
              type="text"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 2: Full Name */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Nombre completo' : 'Full name'}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 3: Date of Birth */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Fecha de nacimiento (AAAA/MM/DD)' : 'Date of Birth (YYYY/MM/DD)'}
            </label>
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 4: Place of Birth */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Lugar de nacimiento' : 'Place of Birth'}
            </label>
            <input
              type="text"
              value={placeOfBirth}
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 5: Country of Citizenship */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'País de ciudadanía' : 'Country of Citizenship'}
            </label>
            <input
              type="text"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
            />
          </div>

          {/* Field 6: Gender */}
          <div className="flex flex-col gap-1 w-full text-left">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Género' : 'Gender'}
            </label>
            <div className="relative w-full">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
              >
                <option value={language === 'es' ? 'Masculino' : 'Male'}>
                  {language === 'es' ? 'Masculino' : 'Male'}
                </option>
                <option value={language === 'es' ? 'Femenino' : 'Female'}>
                  {language === 'es' ? 'Femenino' : 'Female'}
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

      {/* Bottom Sticky Action Bar (Figma 1:7383) */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col items-center sticky bottom-0 z-20">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
          data-node-id="1:7385"
        >
          <span>{language === 'es' ? 'Selecciona para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
