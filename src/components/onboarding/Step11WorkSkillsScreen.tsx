import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step11WorkSkillsScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    setCurrentTab('step12_physical_limitations');
  };

  const handleBack = () => {
    setCurrentTab('step10_visa_preference');
  };

  const options = [
    {
      id: 'planting',
      labelEs: 'Siembra y Cosecha',
      labelEn: 'Planting and Harvesting'
    },
    {
      id: 'animals',
      labelEs: 'Trabajo con Animales',
      labelEn: 'Working with Animals'
    },
    {
      id: 'machinery',
      labelEs: 'Manejo de Maquinaria Agrícola Pesada',
      labelEn: 'Working with or Driving Large Farm Machines'
    },
    {
      id: 'packing',
      labelEs: 'Clasificación y Empaque',
      labelEn: 'Sorting and Packing'
    },
    {
      id: 'forestry',
      labelEs: 'Apicultura, Nuez y Silvicultura',
      labelEn: 'Forestry, Harvesting Nuts, Working with Bees'
    },
    {
      id: 'construction',
      labelEs: 'Construcción, Mantenimiento y Supervisión Agrícola',
      labelEn: 'Farm Construction, Maintenance, and Supervision'
    }
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4195"
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
          <div className="bg-[#2874ff] h-[4px] w-[50%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? '¿Qué tipo de trabajo puedes hacer?' : 'What kind of work you can do?'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#525252]">
            {language === 'es' ? 'Puedes elegir más de 1 opción' : 'You can choose more than 1 option'}
          </p>
        </div>

        {/* Options Cards - Matching Figma 1:4733 selected styling with centered text */}
        <div className="space-y-3.5 pt-1 w-full">
          {options.map((opt) => {
            const isChecked = selectedSkills.includes(opt.id);
            return (
              <div
                key={opt.id}
                onClick={() => toggleSkill(opt.id)}
                className={`w-full min-h-[64px] py-[14px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                  isChecked
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#171717]'
                }`}
                data-node-id={isChecked ? '1:4444' : undefined}
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
                  className={`font-['DM_Sans',sans-serif] font-medium text-[17px] sm:text-[19px] leading-[24px] sm:leading-[26px] text-center tracking-[-0.08px] px-8 ${
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
