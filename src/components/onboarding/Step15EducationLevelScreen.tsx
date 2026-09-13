import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

type EducationLevel = 'none' | 'elementary' | 'middle' | 'high_school' | 'bachelor' | 'master';

export const Step15EducationLevelScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | null>(null);

  // Subcard state fields (Figma Nodes 1:5231 & 1:5272)
  const [institutionName, setInstitutionName] = useState<string>('');
  const [fieldOfStudy, setFieldOfStudy] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [stateName, setStateName] = useState<string>('');
  const [dontRememberState, setDontRememberState] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [dontRememberAddress, setDontRememberAddress] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>('');
  const [stillStudying, setStillStudying] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<string>('');

  const handleContinue = () => {
    setCurrentTab('step16_english_level');
  };

  const handleBack = () => {
    setCurrentTab('step14_part3_intro');
  };

  const options: { id: EducationLevel; labelEs: string; labelEn: string }[] = [
    { id: 'none', labelEs: 'Ninguno', labelEn: 'None' },
    { id: 'elementary', labelEs: 'Primaria', labelEn: 'Elementary School' },
    { id: 'middle', labelEs: 'Secundaria', labelEn: 'Middle School' },
    { id: 'high_school', labelEs: 'Preparatoria / Bachillerato', labelEn: 'High School' },
    { id: 'bachelor', labelEs: 'Universidad / Licenciatura', labelEn: "University/Bachelor's Degree" },
    { id: 'master', labelEs: 'Maestría / Posgrado', labelEn: "Master's/Graduate Degree" }
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5087"
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

        {/* Progress Bar (33%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[33%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] pb-[32px] space-y-6 text-left min-h-0">
        {/* Screen Header Titles */}
        <div className="space-y-2 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#171717] tracking-[-0.1px]">
            {language === 'es'
              ? 'Selecciona tu nivel de estudios más alto completado'
              : 'Select your highest completed education level'}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-1 w-full">
          {options.map((opt) => {
            const isSelected = selectedLevel === opt.id;
            const showSubcard = isSelected && opt.id !== 'none';

            return (
              <React.Fragment key={opt.id}>
                <div
                  onClick={() => setSelectedLevel((prev) => (prev === opt.id ? null : opt.id))}
                  className={`w-full min-h-[56px] py-[12px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                    isSelected
                      ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                      : 'bg-white border border-[#e5e5e5] text-[#171717]'
                  }`}
                  data-node-id={isSelected ? '1:5231' : undefined}
                >
                  {/* Checkbox Icon on Left */}
                  <div className="absolute left-[16px] flex items-center justify-center">
                    <div
                      className={`size-[24px] rounded-[6px] flex items-center justify-center transition-all ${
                        isSelected ? 'bg-white text-[#0045ff]' : 'border-2 border-[#d4d4d4] bg-white'
                      }`}
                    >
                      {isSelected && (
                        <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                      )}
                    </div>
                  </div>

                  {/* Centered Option Label */}
                  <span
                    className={`font-['DM_Sans',sans-serif] font-medium text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-center tracking-[-0.08px] px-8 ${
                      isSelected ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {language === 'es' ? opt.labelEs : opt.labelEn}
                  </span>
                </div>

                {/* Sub-card Details placed DIRECTLY BELOW selected option (Figma Nodes 1:5231 & 1:5272) */}
                {showSubcard && (
                  <div
                    className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left my-3 shadow-2xs animate-fadeIn"
                    data-node-id="1:5231"
                  >
                    <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
                      {language === 'es' ? 'Agrega la información a continuación' : 'Add the information below'}
                    </h3>

                    {/* Field 1: Institution Name */}
                    <div className="flex flex-col gap-1.5 w-full min-w-0">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Nombre de la institución' : 'Name of the institution'}
                      </label>
                      <input
                        type="text"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder={
                          language === 'es'
                            ? 'Nombre de la escuela o centro de capacitación'
                            : 'Name of the school or training center'
                        }
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
                      />
                    </div>

                    {/* Field 2: What did you study? */}
                    <div className="flex flex-col gap-1.5 w-full min-w-0">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? '¿Qué estudiaste?' : 'What did you study?'}
                      </label>
                      <input
                        type="text"
                        value={fieldOfStudy}
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                        placeholder={language === 'es' ? 'Estudios académicos' : 'Academic Studies'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
                      />
                    </div>

                    {/* Field 3: City */}
                    <div className="flex flex-col gap-1.5 w-full min-w-0">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Ciudad' : 'City'}
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa la ciudad' : 'Select an option'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
                      />
                    </div>

                    {/* Field 4: State */}
                    <div className="flex flex-col gap-1.5 w-full min-w-0">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Estado' : 'State'}
                      </label>
                      <div className="relative w-full min-w-0">
                        <input
                          type="text"
                          disabled={dontRememberState}
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          placeholder={language === 'es' ? 'Ingresa el estado' : 'Select an option'}
                          className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                            dontRememberState ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
                          }`}
                        />
                      </div>
                      <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={dontRememberState}
                          onChange={(e) => setDontRememberState(e.target.checked)}
                          className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
                        />
                        <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                          {language === 'es' ? 'No recuerdo el estado' : "I don't remember the state"}
                        </span>
                      </label>
                    </div>

                    {/* Field 5: Address */}
                    <div className="flex flex-col gap-1.5 w-full min-w-0">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Dirección' : 'Address'}
                      </label>
                      <input
                        type="text"
                        disabled={dontRememberAddress}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa la calle y número' : 'Enter the Street name'}
                        className={`bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs ${
                          dontRememberAddress ? 'bg-[#f5f5f5] opacity-60 cursor-not-allowed' : ''
                        }`}
                      />
                      <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={dontRememberAddress}
                          onChange={(e) => setDontRememberAddress(e.target.checked)}
                          className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
                        />
                        <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                          {language === 'es' ? 'No recuerdo la dirección' : "I don't remember the address"}
                        </span>
                      </label>
                    </div>

                    {/* Dates Section */}
                    <div className="pt-2 space-y-3">
                      <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#171717]">
                        {language === 'es'
                          ? '¿Sabes la fecha exacta en la que empezaste a estudiar?'
                          : 'Do you know the exact date when you started studying?'}
                      </h4>

                      {/* Start Date */}
                      <div className="flex flex-col gap-1.5 w-full min-w-0">
                        <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                          {language === 'es' ? 'Mes/Año de inicio' : 'Month/Year of start'}
                        </label>
                        <input
                          type="text"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          placeholder="MM/YYYY"
                          className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
                        />
                      </div>

                      {/* Still studying Checkbox */}
                      <label className="flex items-center gap-2 pt-0.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={stillStudying}
                          onChange={(e) => setStillStudying(e.target.checked)}
                          className="size-[18px] rounded border-[#737373] text-[#0038d0] focus:ring-0 cursor-pointer shrink-0"
                        />
                        <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0038d0]">
                          {language === 'es' ? 'Aún estudiando' : 'Still studying'}
                        </span>
                      </label>

                      {/* End Date */}
                      {!stillStudying && (
                        <div className="flex flex-col gap-1.5 w-full min-w-0 pt-1">
                          <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                            {language === 'es' ? 'Mes/Año de fin' : 'Month/Year of end'}
                          </label>
                          <input
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="MM/YYYY"
                            className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full max-w-full min-w-0 box-border shadow-2xs"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};
