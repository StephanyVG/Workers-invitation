import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const I9EditInformationScreen: React.FC = () => {
  const { language, setCurrentTab, i9FormData, setI9FormData, setShowI9SavedToast } = useApp();

  const [formData, setFormData] = useState({
    lastName: i9FormData.lastName || 'García',
    firstName: i9FormData.firstName || 'Francisco',
    middleInitial: i9FormData.middleInitial === '-' ? '' : i9FormData.middleInitial || 'Francisco',
    dateOfBirth: i9FormData.dateOfBirth || '24/12/1960',
    citizenshipStatus: i9FormData.citizenshipStatus || 'A noncitizen national of the United States',
    address: i9FormData.address || '123 Farm Rd, Sunnyside, WA 98944',
    passportNumber: i9FormData.passportNumber || '123213',
    countryOfIssuance: i9FormData.countryOfIssuance || 'Mexico',
  });

  const citizenshipOptions = [
    {
      id: 'A citizen of the United States',
      labelEn: 'A citizen of the United States',
      labelEs: 'Ciudadano de los Estados Unidos',
    },
    {
      id: 'A noncitizen national of the United States',
      labelEn: 'A noncitizen national of the United States',
      labelEs: 'Nacional no ciudadano de los Estados Unidos',
    },
    {
      id: 'A lawful permanent resident (Enter USCIS or A-Number.)',
      labelEn: 'A lawful permanent resident (Enter USCIS or A-Number.)',
      labelEs: 'Residente permanente legal (Ingresar USCIS o Número A)',
    },
    {
      id: 'An alien authorized to work until',
      labelEn: 'An alien authorized to work until',
      labelEs: 'Extranjero autorizado para trabajar hasta',
    },
  ];

  const handleSave = () => {
    setI9FormData((prev) => ({
      ...prev,
      lastName: formData.lastName,
      firstName: formData.firstName,
      middleInitial: formData.middleInitial || '-',
      dateOfBirth: formData.dateOfBirth,
      citizenshipStatus: formData.citizenshipStatus,
      address: formData.address,
      passportNumber: formData.passportNumber,
      countryOfIssuance: formData.countryOfIssuance,
    }));
    setShowI9SavedToast(true);
    setCurrentTab('i9_review');
  };

  const handleGoBack = () => {
    setCurrentTab('i9_review');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] pb-12"
      data-node-id="3520:37481"
    >
      {/* Top Header Bar */}
      <div
        className="sticky top-0 z-30 bg-[#f5f5f5] w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="3520:37482"
      >
        <button
          onClick={handleGoBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#171717] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Go back'}
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center truncate flex-1 px-2">
          {language === 'es' ? 'Editar información' : 'Edit information'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Form Content */}
      <div className="p-4 sm:p-6 flex flex-col gap-6 max-w-[480px] mx-auto w-full">
        {/* Title & Helper Text */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717]">
            {language === 'es' ? 'Ayúdanos a corregirlo' : 'Help us fix it'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#171717]">
            {language === 'es' ? (
              <>
                Llenamos algunos detalles por ti. Si algo es incorrecto,{' '}
                <span className="font-semibold">solo toca la casilla para cambiarlo</span>. Si está correcto, puedes dejarlo así.
              </>
            ) : (
              <>
                We filled in some details for you. If anything is wrong,{' '}
                <span className="font-semibold">just tap the box to change it</span>. If it's correct, you can leave it
              </>
            )}
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-5 flex flex-col gap-4 shadow-xs">
          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Apellido (Nombre de familia)' : 'Last Name (Family name)'}
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Primer nombre (Nombre de pila)' : 'First Name (Given name)'}
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>

          {/* Middle Initial */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Inicial del segundo nombre (si aplica)' : 'Middle Initial (if any)'}
            </label>
            <input
              type="text"
              value={formData.middleInitial}
              onChange={(e) => setFormData({ ...formData, middleInitial: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Fecha de nacimiento' : 'Date of Birth'}
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] pl-3.5 pr-10 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
              />
              <span className="material-symbols-outlined text-[20px] text-[#737373] absolute right-3 pointer-events-none">
                calendar_today
              </span>
            </div>
          </div>

          {/* Citizenship / Immigration Status */}
          <div className="flex flex-col gap-2.5 pt-1">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Estado de ciudadanía / inmigración' : 'Citizenship/Immigration Status'}
            </label>
            <div className="flex flex-col gap-2.5">
              {citizenshipOptions.map((opt) => {
                const isSelected = formData.citizenshipStatus === opt.id;
                return (
                  <label
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, citizenshipStatus: opt.id })}
                    className="flex items-start gap-2.5 cursor-pointer select-none group"
                  >
                    <div className="pt-0.5 shrink-0">
                      <div
                        className={`size-[18px] rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-[#0038d0] bg-white' : 'border-[#d4d4d4] bg-white group-hover:border-slate-400'
                        }`}
                      >
                        {isSelected && <div className="size-[10px] rounded-full bg-[#0038d0]" />}
                      </div>
                    </div>
                    <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#171717]">
                      {language === 'es' ? opt.labelEs : opt.labelEn}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Dirección (calle, ciudad, estado, C.P.)' : 'Address (street, city, state, ZIP)'}
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>

          {/* Foreign Passport Number */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Número de pasaporte extranjero' : 'Foreign Passport Number'}
            </label>
            <input
              type="text"
              value={formData.passportNumber}
              onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>

          {/* Country of Issuance */}
          <div className="flex flex-col gap-1.5">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'País de emisión' : 'Country of Issuance'}
            </label>
            <input
              type="text"
              value={formData.countryOfIssuance}
              onChange={(e) => setFormData({ ...formData, countryOfIssuance: e.target.value })}
              className="bg-white border border-[#e5e5e5] focus:border-[#0038d0] rounded-[8px] h-[44px] px-3.5 font-['Inter',sans-serif] text-[14px] text-[#171717] outline-none shadow-xs transition-colors"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full pt-2">
          <button
            type="button"
            onClick={handleSave}
            className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center"
          >
            <span>{language === 'es' ? 'Guardar cambios' : 'Save changes'}</span>
          </button>

          <button
            type="button"
            onClick={handleGoBack}
            className="w-full h-[44px] px-4 py-[10px] text-[#0038d0] hover:bg-blue-50/50 active:scale-[0.98] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center transition-all cursor-pointer flex items-center justify-center"
          >
            <span>{language === 'es' ? 'Volver' : 'Go back'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
