import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step13WorkAvailabilityScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (id: string) => {
    if (id === 'all_year') {
      setSelectedMonths(['all_year']);
    } else {
      setSelectedMonths((prev) => {
        const filtered = prev.filter((item) => item !== 'all_year');
        if (filtered.includes(id)) {
          return filtered.filter((item) => item !== id);
        } else {
          return [...filtered, id];
        }
      });
    }
  };

  const handleCompletePart2 = () => {
    setShowWelcomeModal(true);
    setCurrentTab('home');
  };

  const handleBack = () => {
    setCurrentTab('step12_physical_limitations');
  };

  const options = [
    { id: 'all_year', labelEs: 'Todo el año', labelEn: 'All Year' },
    { id: 'january', labelEs: 'Enero', labelEn: 'January' },
    { id: 'february', labelEs: 'Febrero', labelEn: 'February' },
    { id: 'march', labelEs: 'Marzo', labelEn: 'March' },
    { id: 'april', labelEs: 'Abril', labelEn: 'April' },
    { id: 'may', labelEs: 'Mayo', labelEn: 'May' },
    { id: 'june', labelEs: 'Junio', labelEn: 'June' },
    { id: 'july', labelEs: 'Julio', labelEn: 'July' },
    { id: 'august', labelEs: 'Agosto', labelEn: 'August' },
    { id: 'september', labelEs: 'Septiembre', labelEn: 'September' },
    { id: 'october', labelEs: 'Octubre', labelEn: 'October' },
    { id: 'november', labelEs: 'Noviembre', labelEn: 'November' },
    { id: 'december', labelEs: 'Diciembre', labelEn: 'December' }
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4375"
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
            {language === 'es' ? 'Preferencias de trabajo' : 'Work preferences'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Progress Bar (100% Complete) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[100%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? '¿Cuándo puedes trabajar en EE. UU.?' : 'When can you work in the U.S.?'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#525252]">
            {language === 'es' ? 'Puedes elegir más de 1 opción' : 'You can choose more than 1 option'}
          </p>
        </div>

        {/* Options Cards List - Matching Figma 1:4733 selected styling with centered text */}
        <div className="space-y-3 pt-1 w-full">
          {options.map((opt) => {
            const isChecked = selectedMonths.includes(opt.id);
            return (
              <div
                key={opt.id}
                onClick={() => toggleMonth(opt.id)}
                className={`w-full min-h-[56px] py-[12px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                  isChecked
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#171717]'
                }`}
                data-node-id={isChecked ? '1:4408' : undefined}
              >
                {/* Checkbox Icon on Left */}
                <div className="absolute left-[16px] flex items-center justify-center">
                  <div
                    className={`size-[24px] rounded-[6px] flex items-center justify-center transition-all ${
                      isChecked ? 'bg-white text-[#0045ff]' : 'border-2 border-[#d4d4d4] bg-white'
                    }`}
                  >
                    {isChecked && (
                      <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                    )}
                  </div>
                </div>

                {/* Centered Option Label */}
                <span
                  className={`font-['DM_Sans',sans-serif] font-medium text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-center tracking-[-0.08px] px-8 ${
                    isChecked ? 'text-white' : 'text-[#171717]'
                  }`}
                >
                  {language === 'es' ? opt.labelEs : opt.labelEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-[16px] w-full flex flex-col items-center gap-3 sticky bottom-0 z-20">
        <button
          onClick={handleCompletePart2}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar a la Parte 3' : 'Continue to Part 3'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleCompletePart2}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};
