import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step16EnglishLevelScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [selectedEnglish, setSelectedEnglish] = useState<string | null>(null);

  const handleContinue = () => {
    setCurrentTab('step17_work_experience');
  };

  const handleBack = () => {
    setCurrentTab('step15_education_level');
  };

  const options = [
    {
      id: 'none',
      labelEs: 'No hablo inglés.',
      labelEn: "I don't speak English."
    },
    {
      id: 'words',
      labelEs: 'Sé algunas palabras',
      labelEn: 'I know a few words'
    },
    {
      id: 'simple',
      labelEs: 'Entiendo palabras sencillas',
      labelEn: 'I understand simple words'
    },
    {
      id: 'work',
      labelEs: 'Bueno para trabajar',
      labelEn: 'Good for work'
    },
    {
      id: 'fluent',
      labelEs: 'Fluido',
      labelEn: 'Fluent'
    }
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5110"
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

        {/* Progress Bar (66%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[66%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[28px] pb-[32px] space-y-6 text-left min-h-0">
        {/* Screen Header Titles */}
        <div className="space-y-2 text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? '¿Qué tan bien hablas inglés?' : 'How well do you speak English?'}
          </h2>
        </div>

        {/* Options List - Matching Figma 1:5110 & 1:5133 */}
        <div className="space-y-3.5 pt-2 w-full">
          {options.map((opt) => {
            const isSelected = selectedEnglish === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedEnglish(opt.id)}
                className={`w-full min-h-[64px] py-[14px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                  isSelected
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#171717]'
                }`}
                data-node-id={isSelected ? '1:5133' : undefined}
              >
                {/* Radio Icon on Left */}
                <div className="absolute left-[16px] flex items-center justify-center">
                  <div
                    className={`size-[24px] rounded-full flex items-center justify-center transition-all ${
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
