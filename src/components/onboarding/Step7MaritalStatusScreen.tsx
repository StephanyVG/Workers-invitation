import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

type MaritalStatusOption = 'single' | 'married' | 'civil_union' | 'divorced' | 'widowed' | 'legally_separated' | 'other';

export const Step7MaritalStatusScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<MaritalStatusOption | null>(null);

  // Spouse / Partner Details State (Figma Node 1:4819)
  const [spouseFullName, setSpouseFullName] = useState<string>('');
  const [spouseDob, setSpouseDob] = useState<string>('');
  const [spouseCountry, setSpouseCountry] = useState<string>('');
  const [spouseState, setSpouseState] = useState<string>('');
  const [spouseCity, setSpouseCity] = useState<string>('');

  const handleContinue = () => {
    setCurrentTab('step8_family_us');
  };

  const handleBack = () => {
    setCurrentTab('step6_parents_info');
  };

  const options: { id: MaritalStatusOption; labelEs: string; labelEn: string }[] = [
    { id: 'single', labelEs: 'Soltero(a)', labelEn: 'Single' },
    { id: 'married', labelEs: 'Casado(a)', labelEn: 'Married' },
    { id: 'civil_union', labelEs: 'Unión libre', labelEn: 'Civil Union' },
    { id: 'divorced', labelEs: 'Divorciado(a)', labelEn: 'Divorced' },
    { id: 'widowed', labelEs: 'Viudo(a)', labelEn: 'Widowed' },
    { id: 'legally_separated', labelEs: 'Separado(a) legalmente', labelEn: 'Legally separated' },
    { id: 'other', labelEs: 'Otro', labelEn: 'Other' }
  ];

  const getSpouseDetailsTitle = (status: MaritalStatusOption | null, lang: 'es' | 'en') => {
    if (lang === 'es') {
      switch (status) {
        case 'married':
          return 'Ingresa los detalles de la persona con la que estás casado(a)';
        case 'civil_union':
          return 'Ingresa los detalles de la persona con la que estás en unión libre';
        case 'divorced':
          return 'Ingresa los detalles de la persona con la que estuviste casada';
        case 'widowed':
          return 'Ingresa los detalles de la persona con la que estuviste casada';
        case 'legally_separated':
          return 'Ingresa los detalles de la persona de la que estás separado(a) legalmente';
        case 'other':
        default:
          return 'Ingresa los detalles de la persona';
      }
    } else {
      switch (status) {
        case 'married':
          return 'Enter the details of the person you are married to';
        case 'civil_union':
          return 'Enter the details of the person you are in a civil union with';
        case 'divorced':
          return 'Enter the details of the person you were married to';
        case 'widowed':
          return 'Enter the details of your late spouse';
        case 'legally_separated':
          return 'Enter the details of the person you are legally separated from';
        case 'other':
        default:
          return 'Enter the details of the person';
      }
    }
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4687"
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

        {/* Progress Bar */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[90%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Estado civil' : 'Marital status'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#525252]">
            {language === 'es'
              ? 'Selecciona una de las opciones de la lista para indicar tu estado civil.'
              : 'Select one of the options from the list to indicate your marital status.'}
          </p>
        </div>

        {/* Marital Status Options Cards - Matching Figma 1:4733 & 1:4819 */}
        <div className="space-y-3 pt-1 w-full">
          {options.map((opt) => {
            const isSelected = selectedStatus === opt.id;
            const isNonSingle = isSelected && opt.id !== 'single';

            return (
              <React.Fragment key={opt.id}>
                <div
                  onClick={() => setSelectedStatus(opt.id)}
                  className={`w-full min-h-[56px] py-[12px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                    isSelected
                      ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                      : 'bg-white border border-[#e5e5e5] text-[#171717]'
                  }`}
                  data-node-id={isSelected ? "1:4733" : undefined}
                >
                  {/* Radio Circle Icon on Left */}
                  <div className="absolute left-[16px] flex items-center justify-center">
                    <div
                      className={`size-[24px] rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-white text-[#0045ff]'
                          : 'border-2 border-[#d4d4d4] bg-white'
                      }`}
                    >
                      {isSelected && (
                        <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                      )}
                    </div>
                  </div>

                  {/* Centered Option Label */}
                  <span className={`font-['DM_Sans',sans-serif] font-medium text-[18px] sm:text-[20px] leading-[28px] text-center tracking-[-0.08px] px-8 truncate ${
                    isSelected ? 'text-white' : 'text-[#171717]'
                  }`}>
                    {language === 'es' ? opt.labelEs : opt.labelEn}
                  </span>
                </div>

                {/* Sub-card Details when any option other than Single is selected (Figma Node 1:4819) */}
                {isNonSingle && (
                  <div
                    className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left my-3 shadow-2xs animate-fadeIn"
                    data-node-id="1:4819"
                  >
                    <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
                      {getSpouseDetailsTitle(selectedStatus, language)}
                    </h3>

                    {/* Field 1: Full Name */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Nombre completo' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        value={spouseFullName}
                        onChange={(e) => setSpouseFullName(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa el nombre y apellido' : 'Add the First name and Last name'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                      />
                    </div>

                    {/* Field 2: Date of Birth */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Fecha de nacimiento' : 'Date of Birth'}
                      </label>
                      <input
                        type="text"
                        value={spouseDob}
                        onChange={(e) => setSpouseDob(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                      />
                    </div>

                    {/* Field 3: Country */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'País' : 'Country'}
                      </label>
                      <input
                        type="text"
                        value={spouseCountry}
                        onChange={(e) => setSpouseCountry(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa el país' : 'Add the Country'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                      />
                    </div>

                    {/* Field 4: State */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Estado' : 'State'}
                      </label>
                      <input
                        type="text"
                        value={spouseState}
                        onChange={(e) => setSpouseState(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa el estado' : 'Add the State'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                      />
                    </div>

                    {/* Field 5: City of birth */}
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Ciudad de nacimiento' : 'City of birth'}
                      </label>
                      <input
                        type="text"
                        value={spouseCity}
                        onChange={(e) => setSpouseCity(e.target.value)}
                        placeholder={language === 'es' ? 'Ingresa la ciudad' : 'Add the City'}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col items-center gap-3 sticky bottom-0 z-20">
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
