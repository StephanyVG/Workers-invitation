import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const InviteOrSearchScreen: React.FC = () => {
  const { language, setCurrentTab, setOnboardingPath } = useApp();

  const [selectedOption, setSelectedOption] = useState<'invite' | 'search' | null>(null);

  const handleSelectOption = (option: 'invite' | 'search') => {
    setSelectedOption(option);
    setOnboardingPath(option);
    setTimeout(() => {
      if (option === 'invite') {
        setCurrentTab('employer_code');
      } else {
        setCurrentTab('phone_auth');
      }
    }, 280);
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-[#dce5fe] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:36058"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Top Header Back Button (32px vertical separation to content) */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('welcome')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Centered Content Stack */}
        <div className="flex flex-col items-center text-center gap-5 w-full my-auto">
          {/* Official Zipmi Horizontal Logo */}
          <img
            src="/Logo Horizontal.svg"
            alt="Zipmi"
            className="h-7 sm:h-8 w-auto object-contain mb-1"
          />

          {/* Question Title */}
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] text-center tracking-[-0.112px]">
            {language === 'es'
              ? '¿Tienes una invitación o buscas trabajo?'
              : 'Have an invite or looking for work?'}
          </h2>

          {/* Option Cards (both default unselected) */}
          <div className="flex flex-col gap-4 w-full text-left">
            {/* Card 1: I have an invitation code */}
            <div
              onClick={() => handleSelectOption('invite')}
              className={`min-h-[48px] px-5 py-3.5 rounded-[12px] flex flex-col justify-center cursor-pointer active:scale-[0.98] transition-all duration-150 ${
                selectedOption === 'invite'
                  ? 'bg-[#0045ff] text-white shadow-lg'
                  : 'bg-white border border-[#737373] text-[#262626]'
              }`}
              data-node-id="3645:36079"
            >
              <h3 className={`font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] ${
                selectedOption === 'invite' ? 'text-white' : 'text-[#262626]'
              }`}>
                {language === 'es' ? 'Tengo un código de invitación' : 'I have an invitation code'}
              </h3>
              <p className={`font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] mt-0.5 ${
                selectedOption === 'invite' ? 'text-white/90' : 'text-[#525252]'
              }`}>
                {language === 'es' ? 'Mi patrón me lo envió' : 'My employer sent it to me'}
              </p>
            </div>

            {/* Card 2: I'm looking for work */}
            <div
              onClick={() => handleSelectOption('search')}
              className={`min-h-[48px] px-5 py-3.5 rounded-[12px] flex flex-col justify-center cursor-pointer active:scale-[0.98] transition-all duration-150 ${
                selectedOption === 'search'
                  ? 'bg-[#0045ff] text-white shadow-lg'
                  : 'bg-white border border-[#737373] text-[#262626]'
              }`}
              data-node-id="3645:36085"
            >
              <h3 className={`font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] ${
                selectedOption === 'search' ? 'text-white' : 'text-[#262626]'
              }`}>
                {language === 'es' ? 'Busco trabajo' : 'I’m looking for work'}
              </h3>
              <p className={`font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] mt-0.5 ${
                selectedOption === 'search' ? 'text-white/90' : 'text-[#525252]'
              }`}>
                {language === 'es'
                  ? 'Quiero encontrar empleo con visa H-2'
                  : 'I want to find H2 visa work'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
