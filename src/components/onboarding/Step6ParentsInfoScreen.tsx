import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step6ParentsInfoScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  // Father's Information state
  const [fatherLastName, setFatherLastName] = useState<string>('');
  const [fatherLastNameUnknown, setFatherLastNameUnknown] = useState<boolean>(false);
  const [fatherFirstName, setFatherFirstName] = useState<string>('');
  const [fatherFirstNameUnknown, setFatherFirstNameUnknown] = useState<boolean>(false);
  const [fatherDob, setFatherDob] = useState<string>('1960-02-12');
  const [fatherDobUnknown, setFatherDobUnknown] = useState<boolean>(false);
  const [fatherInUs, setFatherInUs] = useState<'yes' | 'no'>('no');
  const [fatherLegalStatus, setFatherLegalStatus] = useState<string>('Nonimmigrant');

  // Mother's Information state
  const [motherLastName, setMotherLastName] = useState<string>('Garcia');
  const [motherLastNameUnknown, setMotherLastNameUnknown] = useState<boolean>(false);
  const [motherFirstName, setMotherFirstName] = useState<string>('Gonzálo');
  const [motherFirstNameUnknown, setMotherFirstNameUnknown] = useState<boolean>(false);
  const [motherDob, setMotherDob] = useState<string>('1960-02-12');
  const [motherDobUnknown, setMotherDobUnknown] = useState<boolean>(false);
  const [motherInUs, setMotherInUs] = useState<'yes' | 'no'>('no');
  const [motherLegalStatus, setMotherLegalStatus] = useState<string>('Nonimmigrant');

  const handleContinue = () => {
    setCurrentTab('step7_marital_status');
  };

  const handleBack = () => {
    setCurrentTab('step5_emergency_contact');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:4511"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col shrink-0 sticky top-0 z-20">
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

        {/* Progress Bar */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[85%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] space-y-7 text-left min-h-0">
        {/* Screen Header Titles */}
        <div className="space-y-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Información de padre y madre' : 'Father and mother information'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
            {language === 'es'
              ? "Llena solo la información que tengas. Si no sabes una respuesta, selecciona 'No lo sé' para continuar."
              : "Fill in only the information you have. If you don't know an answer, select 'I don't know' to continue."}
          </p>
        </div>

        {/* Section 1: Father's Information */}
        <div className="space-y-4 pt-1 w-full">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[26px] text-[#171717]">
            {language === 'es' ? 'Información del padre' : "Father's information"}
          </h3>

          {/* Father Family Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Apellido del padre' : 'Family Name'}
            </label>
            <input
              type="text"
              disabled={fatherLastNameUnknown}
              value={fatherLastName}
              onChange={(e) => setFatherLastName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el apellido' : 'Enter the family name'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                fatherLastNameUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={fatherLastNameUnknown}
                onChange={(e) => setFatherLastNameUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Father First Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Nombre del padre' : 'First Name'}
            </label>
            <input
              type="text"
              disabled={fatherFirstNameUnknown}
              value={fatherFirstName}
              onChange={(e) => setFatherFirstName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el nombre' : 'Enter the first name'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                fatherFirstNameUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={fatherFirstNameUnknown}
                onChange={(e) => setFatherFirstNameUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Father Date of Birth */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Fecha de nacimiento del padre' : "Father's Date of Birth"}
            </label>
            <input
              type="date"
              disabled={fatherDobUnknown}
              value={fatherDob}
              onChange={(e) => setFatherDob(e.target.value)}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] min-h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs cursor-pointer ${
                fatherDobUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={fatherDobUnknown}
                onChange={(e) => setFatherDobUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No recuerdo la fecha' : "I don't remember the date"}
              </span>
            </label>
          </div>

          {/* Is father in the US? */}
          <div className="flex flex-col gap-2.5 w-full min-w-0 pt-1">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? '¿Tu padre está en los Estados Unidos?' : 'Is your father in the United States?'}
            </label>
            <div className="flex items-center gap-6 pt-0.5">
              <label onClick={() => setFatherInUs('no')} className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                    fatherInUs === 'no' ? 'border-[#0038d0] bg-[#0038d0]' : 'border-[#737373] bg-white'
                  }`}
                >
                  {fatherInUs === 'no' && <div className="size-[8px] rounded-full bg-white" />}
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">No</span>
              </label>

              <label onClick={() => setFatherInUs('yes')} className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                    fatherInUs === 'yes' ? 'border-[#0038d0] bg-[#0038d0]' : 'border-[#737373] bg-white'
                  }`}
                >
                  {fatherInUs === 'yes' && <div className="size-[8px] rounded-full bg-white" />}
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Sí' : 'Yes'}
                </span>
              </label>
            </div>

            {/* Conditional Dropdown when Yes (Figma 1506:30961) */}
            {fatherInUs === 'yes' && (
              <div className="flex flex-col gap-1.5 w-full min-w-0 pt-2 animate-fadeIn" data-node-id="1506:30961">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                  {language === 'es' ? 'Elegir estado legal' : 'Choose legal status'}
                </label>
                <div className="relative w-full min-w-0">
                  <select
                    value={fatherLegalStatus}
                    onChange={(e) => setFatherLegalStatus(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] pr-[36px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border appearance-none shadow-2xs cursor-pointer"
                  >
                    <option value="Nonimmigrant">{language === 'es' ? 'No inmigrante' : 'Nonimmigrant'}</option>
                    <option value="Citizen">{language === 'es' ? 'Ciudadano' : 'Citizen'}</option>
                    <option value="Permanent Resident">{language === 'es' ? 'Residente permanente' : 'Permanent Resident'}</option>
                    <option value="Other">{language === 'es' ? 'Otro' : 'Other'}</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="border-[#e5e5e5] my-4" />

        {/* Section 2: Mother's Information */}
        <div className="space-y-4 pt-1 w-full">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[26px] text-[#171717]">
            {language === 'es' ? 'Información de la madre' : "Mother's information"}
          </h3>

          {/* Mother Family Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Apellido de la madre' : 'Family Name'}
            </label>
            <input
              type="text"
              disabled={motherLastNameUnknown}
              value={motherLastName}
              onChange={(e) => setMotherLastName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el apellido' : 'Enter the family name'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                motherLastNameUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={motherLastNameUnknown}
                onChange={(e) => setMotherLastNameUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Mother First Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Nombre de la madre' : 'First Name'}
            </label>
            <input
              type="text"
              disabled={motherFirstNameUnknown}
              value={motherFirstName}
              onChange={(e) => setMotherFirstName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el nombre' : 'Enter the first name'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                motherFirstNameUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={motherFirstNameUnknown}
                onChange={(e) => setMotherFirstNameUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Mother Date of Birth */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Fecha de nacimiento de la madre' : "Mother's Date of Birth"}
            </label>
            <input
              type="date"
              disabled={motherDobUnknown}
              value={motherDob}
              onChange={(e) => setMotherDob(e.target.value)}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] min-h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs cursor-pointer ${
                motherDobUnknown ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={motherDobUnknown}
                onChange={(e) => setMotherDobUnknown(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No recuerdo la fecha' : "I don't remember the date"}
              </span>
            </label>
          </div>

          {/* Is mother in the US? */}
          <div className="flex flex-col gap-2.5 w-full min-w-0 pt-1">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? '¿Tu madre está en los Estados Unidos?' : 'Is your mother in the United States?'}
            </label>
            <div className="flex items-center gap-6 pt-0.5">
              <label onClick={() => setMotherInUs('no')} className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                    motherInUs === 'no' ? 'border-[#0038d0] bg-[#0038d0]' : 'border-[#737373] bg-white'
                  }`}
                >
                  {motherInUs === 'no' && <div className="size-[8px] rounded-full bg-white" />}
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">No</span>
              </label>

              <label onClick={() => setMotherInUs('yes')} className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                    motherInUs === 'yes' ? 'border-[#0038d0] bg-[#0038d0]' : 'border-[#737373] bg-white'
                  }`}
                >
                  {motherInUs === 'yes' && <div className="size-[8px] rounded-full bg-white" />}
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Sí' : 'Yes'}
                </span>
              </label>
            </div>

            {/* Conditional Dropdown when Yes (Figma 1506:30961) */}
            {motherInUs === 'yes' && (
              <div className="flex flex-col gap-1.5 w-full min-w-0 pt-2 animate-fadeIn" data-node-id="1506:30961">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                  {language === 'es' ? 'Elegir estado legal' : 'Choose legal status'}
                </label>
                <div className="relative w-full min-w-0">
                  <select
                    value={motherLegalStatus}
                    onChange={(e) => setMotherLegalStatus(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] pr-[36px] font-['Inter',sans-serif] font-normal text-[15px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border appearance-none shadow-2xs cursor-pointer"
                  >
                    <option value="Nonimmigrant">{language === 'es' ? 'No inmigrante' : 'Nonimmigrant'}</option>
                    <option value="Citizen">{language === 'es' ? 'Ciudadano' : 'Citizen'}</option>
                    <option value="Permanent Resident">{language === 'es' ? 'Residente permanente' : 'Permanent Resident'}</option>
                    <option value="Other">{language === 'es' ? 'Otro' : 'Other'}</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>
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
