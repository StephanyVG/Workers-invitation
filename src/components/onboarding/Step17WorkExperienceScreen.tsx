import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step17WorkExperienceScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal, triggerConfetti } = useApp();

  // Form Fields State (Figma Node 1:5156)
  const [companyName, setCompanyName] = useState<string>('');
  const [typeOfWork, setTypeOfWork] = useState<string>('');
  const [workDescription, setWorkDescription] = useState<string>('');
  const [startMonthYear, setStartMonthYear] = useState<string>('01/2023');
  const [stillWorking, setStillWorking] = useState<boolean>(false);
  const [endMonthYear, setEndMonthYear] = useState<string>('01/2024');
  const [city, setCity] = useState<string>('Mexico');
  const [country, setCountry] = useState<string>('Mexico');
  const [street, setStreet] = useState<string>('Los Pinos');
  const [dontRememberStreet, setDontRememberStreet] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState<string>('Los Pinos');
  const [dontRememberZip, setDontRememberZip] = useState<boolean>(false);
  const [supervisorFirstName, setSupervisorFirstName] = useState<string>('');
  const [dontKnowSupervisorFirst, setDontKnowSupervisorFirst] = useState<boolean>(false);
  const [supervisorLastName, setSupervisorLastName] = useState<string>('');
  const [dontKnowSupervisorLast, setDontKnowSupervisorLast] = useState<boolean>(false);
  const [supervisorPhone, setSupervisorPhone] = useState<string>('');
  const [dontRememberPhone, setDontRememberPhone] = useState<boolean>(false);

  const handleCompletePart3 = () => {
    setCurrentTab('step18_part4_intro');
  };

  const handleBack = () => {
    setCurrentTab('step16_english_level');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5156"
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
            {language === 'es' ? 'Trabajo y Educación' : 'Work and Education'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Progress Bar (100%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[100%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] pb-[32px] space-y-5 text-left min-h-0">
        {/* Screen Header Titles */}
        <div className="space-y-1 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
          </h2>
        </div>

        {/* Action Required Orange Alert Box (Figma Node 1:5156) */}
        <div className="bg-[#ffebad] border border-[#f59e0b] rounded-[12px] p-4 flex items-start gap-3 shadow-2xs w-full text-[#78350f]">
          <span className="material-symbols-outlined text-[24px] text-[#b45309] shrink-0 mt-0.5 select-none">
            warning
          </span>
          <div className="space-y-0.5 text-left">
            <h4 className="font-['DM_Sans',sans-serif] font-bold text-[15px] leading-[20px] text-[#78350f]">
              {language === 'es' ? 'Acción Requerida' : 'Action Required'}
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#92400e]">
              {language === 'es'
                ? 'Ingresa la información de tus empleos actuales o anteriores. Si has trabajado en EE. UU. antes, puedes incluir tu último trabajo con visa H2.'
                : 'List information for your current or previous jobs. If you have worked in the US before, you can include your last H2 visa job.'}
            </p>
          </div>
        </div>

        {/* Job Details Card (Figma Node 1:5156) */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left shadow-2xs w-full">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
            {language === 'es' ? 'Detalles del Empleo' : 'Job Details'}
          </h3>

          {/* Field 1: Company Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Nombre de la empresa' : 'Company Name'}
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el nombre de la empresa' : 'Enter the company name'}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
            />
          </div>

          {/* Field 2: Type of work performed */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Tipo de trabajo realizado' : 'Type of work performed'}
            </label>
            <input
              type="text"
              value={typeOfWork}
              onChange={(e) => setTypeOfWork(e.target.value)}
              placeholder={language === 'es' ? 'Ejemplo: Trabajador H2' : 'Ex: H2 worker'}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
            />
          </div>

          {/* Field 3: Describe the work you did */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Describe el trabajo que realizaste' : 'Describe the work you did'}
            </label>
            <textarea
              rows={3}
              value={workDescription}
              onChange={(e) => setWorkDescription(e.target.value)}
              placeholder={
                language === 'es'
                  ? 'Ej: trabajo agrícola, jardinería, construcción, hotelero'
                  : 'Ex: farm work, landscaping, construction, hotel worker'
              }
              className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs resize-none"
            />
          </div>

          {/* Field 4: Start Month/Year */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Mes/Año de inicio' : 'Start Month/Year'}
            </label>
            <input
              type="text"
              value={startMonthYear}
              onChange={(e) => setStartMonthYear(e.target.value)}
              placeholder="MM/YYYY"
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
            />
          </div>

          {/* Still working checkbox */}
          <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={stillWorking}
              onChange={(e) => setStillWorking(e.target.checked)}
              className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
            />
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
              {language === 'es' ? 'Aún trabajo aquí' : "I'm still working here"}
            </span>
          </label>

          {/* Field 5: End Month/Year */}
          {!stillWorking && (
            <div className="flex flex-col gap-1.5 w-full min-w-0 pt-1">
              <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                {language === 'es' ? 'Mes/Año de fin' : 'End Month/Year'}
              </label>
              <input
                type="text"
                value={endMonthYear}
                onChange={(e) => setEndMonthYear(e.target.value)}
                placeholder="MM/YYYY"
                className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
              />
            </div>
          )}

          {/* Field 6: City */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Ciudad' : 'City'}
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa la ciudad' : 'Enter city'}
              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
            />
          </div>

          {/* Field 7: Country */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'País' : 'Country'}
            </label>
            <div className="relative w-full min-w-0">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border appearance-none shadow-2xs cursor-pointer"
              >
                <option value="Mexico">México</option>
                <option value="United States">Estados Unidos (EE. UU.)</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Honduras">Honduras</option>
                <option value="Other">Otro país</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Field 8: Street */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Calle y número' : 'Street'}
            </label>
            <input
              type="text"
              disabled={dontRememberStreet}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa la calle' : 'Street name'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                dontRememberStreet ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontRememberStreet}
                onChange={(e) => setDontRememberStreet(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No recuerdo la calle' : "I don't remember"}
              </span>
            </label>
          </div>

          {/* Field 9: Zip Code */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Código Postal' : 'Zip Code'}
            </label>
            <input
              type="text"
              disabled={dontRememberZip}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder={language === 'es' ? 'Código Postal' : 'Zip Code'}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                dontRememberZip ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontRememberZip}
                onChange={(e) => setDontRememberZip(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No recuerdo el Código Postal' : "I don't remember"}
              </span>
            </label>
          </div>

          {/* Field 10: Supervisor's First Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Nombre del supervisor' : "Supervisor's first name"}
            </label>
            <input
              type="text"
              disabled={dontKnowSupervisorFirst}
              value={supervisorFirstName}
              onChange={(e) => setSupervisorFirstName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el nombre del supervisor' : "Enter the supervisor's name"}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                dontKnowSupervisorFirst ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontKnowSupervisorFirst}
                onChange={(e) => setDontKnowSupervisorFirst(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Field 11: Supervisor's Last Name */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Apellido del supervisor' : "Supervisor's last name"}
            </label>
            <input
              type="text"
              disabled={dontKnowSupervisorLast}
              value={supervisorLastName}
              onChange={(e) => setSupervisorLastName(e.target.value)}
              placeholder={language === 'es' ? 'Ingresa el apellido del supervisor' : "Enter the supervisor's last name"}
              className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                dontKnowSupervisorLast ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontKnowSupervisorLast}
                onChange={(e) => setDontKnowSupervisorLast(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No lo sé' : "I don't know"}
              </span>
            </label>
          </div>

          {/* Field 12: Supervisor's Phone Number */}
          <div className="flex flex-col gap-1.5 w-full min-w-0">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
              {language === 'es' ? 'Teléfono del supervisor' : "Supervisor's phone number"}
            </label>
            <div className="flex items-center gap-2 w-full min-w-0">
              <div className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-[8px] h-[44px] px-2.5 flex items-center gap-1 shrink-0 text-[14px] text-[#171717]">
                <span>🇲🇽</span>
                <span className="font-medium">+52</span>
                <span className="material-symbols-outlined text-[18px] text-[#737373]">expand_more</span>
              </div>
              <input
                type="tel"
                disabled={dontRememberPhone}
                value={supervisorPhone}
                onChange={(e) => setSupervisorPhone(e.target.value)}
                placeholder="(000) 000-0000"
                className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors flex-1 max-w-full min-w-0 box-border shadow-2xs ${
                  dontRememberPhone ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
                }`}
              />
            </div>
            <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dontRememberPhone}
                onChange={(e) => setDontRememberPhone(e.target.checked)}
                className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
              />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                {language === 'es' ? 'No recuerdo el teléfono' : "I don't remember"}
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleCompletePart3}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Finalizar y Guardar' : 'Continue to Part 4'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleCompletePart3}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};
