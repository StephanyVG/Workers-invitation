import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step12PhysicalLimitationsScreen: React.FC = () => {
  const { language, setCurrentTab, selectedVisaType } = useApp();

  const [physicalLimits, setPhysicalLimits] = useState<string[]>([]);
  const [standingLimits, setStandingLimits] = useState<string[]>([]);
  const [environmentalLimits, setEnvironmentalLimits] = useState<string[]>([]);

  const handleContinue = () => {
    setCurrentTab('step13_work_availability');
  };

  const handleBack = () => {
    if (selectedVisaType === 'h2b') {
      setCurrentTab('step11_h2b_work_skills');
    } else {
      setCurrentTab('step11_work_skills');
    }
  };

  const toggleLimit = (
    category: 'physical' | 'standing' | 'environmental',
    id: string
  ) => {
    const setter =
      category === 'physical'
        ? setPhysicalLimits
        : category === 'standing'
        ? setStandingLimits
        : setEnvironmentalLimits;

    setter((prev) => {
      if (id === 'none') {
        return ['none'];
      } else {
        const filtered = prev.filter((item) => item !== 'none');
        if (filtered.includes(id)) {
          return filtered.filter((item) => item !== id);
        } else {
          return [...filtered, id];
        }
      }
    });
  };

  const physicalOptions = [
    { id: 'none', labelEs: 'Ninguna', labelEn: 'None' },
    { id: 'lift_10kg', labelEs: 'No puedo levantar más de 10kg', labelEn: 'Cannot lift over 10kg' },
    { id: 'lift_25kg', labelEs: 'No puedo levantar más de 25kg', labelEn: 'Cannot lift over 25kg' },
    { id: 'lift_35kg', labelEs: 'No puedo levantar más de 35kg', labelEn: 'Cannot lift over 35kg' },
    { id: 'pull_weight', labelEs: 'No puedo jalar peso repetidamente', labelEn: 'Cannot repeatedly pull weight' },
    { id: 'push_weight', labelEs: 'No puedo empujar peso repetidamente', labelEn: 'Cannot repeatedly push weight' }
  ];

  const standingOptions = [
    { id: 'none', labelEs: 'Ninguna', labelEn: 'None' },
    { id: 'stand_4hrs', labelEs: 'No puedo estar de pie más de 4 horas', labelEn: 'Cannot stand for more than 4 hours' },
    { id: 'walk_far', labelEs: 'No puedo caminar largas distancias', labelEn: 'Cannot walk long distances' },
    { id: 'bend', labelEs: 'No puedo agacharme o doblarme', labelEn: 'Cannot bend or stoop' },
    { id: 'climb', labelEs: 'No puedo subir escaleras', labelEn: 'Cannot climb ladders' }
  ];

  const environmentalOptions = [
    { id: 'none', labelEs: 'Ninguna', labelEn: 'None' },
    { id: 'sunlight', labelEs: 'No puedo trabajar bajo luz solar directa', labelEn: 'Cannot work in direct sunlight' },
    { id: 'cold', labelEs: 'No puedo trabajar en frío extremo', labelEn: 'Cannot work in extreme cold' }
  ];

  const renderSectionCard = (
    titleEs: string,
    titleEn: string,
    category: 'physical' | 'standing' | 'environmental',
    selectedList: string[],
    optionsList: { id: string; labelEs: string; labelEn: string }[]
  ) => {
    const isNoneSelected = selectedList.includes('none');

    return (
      <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-3.5 text-left shadow-2xs">
        <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
          {language === 'es' ? titleEs : titleEn}
        </h3>

        <div className="space-y-2.5 w-full">
          {optionsList.map((opt) => {
            const isChecked = selectedList.includes(opt.id);
            const isDisabled = isNoneSelected && opt.id !== 'none';

            return (
              <div
                key={opt.id}
                onClick={() => !isDisabled && toggleLimit(category, opt.id)}
                className={`w-full min-h-[52px] py-[12px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all select-none ${
                  isDisabled
                    ? 'bg-[#e5e5e5] border border-[#d4d4d4] text-[#737373] opacity-60 cursor-not-allowed'
                    : isChecked
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01] cursor-pointer active:scale-[0.99]'
                    : 'bg-white border border-[#e5e5e5] text-[#171717] cursor-pointer active:scale-[0.99]'
                }`}
              >
                {/* Icon on Left */}
                <div className="absolute left-[14px] flex items-center justify-center">
                  {isDisabled ? (
                    <div className="size-[22px] rounded-[6px] bg-[#a3a3a3] text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px] font-bold">remove</span>
                    </div>
                  ) : (
                    <div
                      className={`size-[22px] rounded-[6px] flex items-center justify-center transition-all ${
                        isChecked ? 'bg-white text-[#0045ff]' : 'border-2 border-[#d4d4d4] bg-white'
                      }`}
                    >
                      {isChecked && (
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Centered Option Label */}
                <span
                  className={`font-['DM_Sans',sans-serif] font-medium text-[16px] sm:text-[18px] leading-[22px] text-center tracking-[-0.08px] px-8 ${
                    isDisabled ? 'text-[#737373]' : isChecked ? 'text-white' : 'text-[#171717]'
                  }`}
                >
                  {language === 'es' ? opt.labelEs : opt.labelEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1789:17756"
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

        {/* Progress Bar */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[75%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] pb-[32px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Cuéntanos si tienes alguna limitación.' : 'Tell us about any limitations you have.'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
            {language === 'es' ? 'Puedes elegir más de 1 opción' : 'You can choose more than 1 option'}
          </p>
        </div>

        {/* Section Cards */}
        {renderSectionCard('Limitaciones Físicas', 'Physical Limitations', 'physical', physicalLimits, physicalOptions)}
        {renderSectionCard('De pie / Caminar', 'Standing/Walking', 'standing', standingLimits, standingOptions)}
        {renderSectionCard('Ambientales', 'Environmental', 'environmental', environmentalLimits, environmentalOptions)}
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleContinue}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
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
