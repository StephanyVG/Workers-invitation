import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const UsLocationQuestionScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);

  const handleSelectOption = (option: 'yes' | 'no') => {
    setSelectedOption(option);
    setTimeout(() => {
      setCurrentTab('h2_visa_intro');
    }, 280);
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65148"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('h2_intro')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title */}
        <div className="w-full text-center my-auto pt-8">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-2xl sm:text-[28px] leading-[36px] text-[#0038d0] tracking-tight mb-8">
            {language === 'es' ? '¿Estás actualmente en EE. UU.?' : 'Are you currently in the U.S.?'}
          </h2>

          {/* Options Container (Figma Nodes 3:65148 / 3:65195) */}
          <div className="flex flex-col gap-4 w-full" data-node-id="3:65195">
            {/* Option: Yes */}
            <button
              onClick={() => handleSelectOption('yes')}
              className={`w-full min-h-[52px] py-3.5 px-6 rounded-[16px] font-['Inter',sans-serif] font-medium text-base text-center transition-all duration-150 cursor-pointer ${
                selectedOption === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-lg border border-[#0038d0] scale-[1.01]'
                  : 'bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#0038d0] shadow-xs active:scale-[0.98]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            {/* Option: No */}
            <button
              onClick={() => handleSelectOption('no')}
              className={`w-full min-h-[52px] py-3.5 px-6 rounded-[16px] font-['Inter',sans-serif] font-medium text-base text-center transition-all duration-150 cursor-pointer ${
                selectedOption === 'no'
                  ? 'bg-[#0038d0] text-white shadow-lg border border-[#0038d0] scale-[1.01]'
                  : 'bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#0038d0] shadow-xs active:scale-[0.98]'
              }`}
            >
              {language === 'es' ? 'No' : 'No'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
