import React from 'react';
import { useApp, AppLanguage } from '../../context/AppContext';

export const LanguageSelectScreen: React.FC = () => {
  const { language, setLanguage, setCurrentTab } = useApp();

  const handleSelectLanguage = (lang: AppLanguage) => {
    setLanguage(lang);
  };

  const handleContinue = () => {
    setCurrentTab('welcome');
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-[#dce5fe] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:34509"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header - Back Button (32px vertical separation to content) */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('splash')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Centered Language 1.png Image Area */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-4">
            <img
              src="/Language 1.png"
              alt="Zipmi habla tu idioma"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-2 mb-6 w-full">
            <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] leading-snug sm:leading-[36px] tracking-[-0.112px]">
              {language === 'es' ? 'Zipmi habla tu idioma' : 'Zipmi speaks your language'}
            </h2>

            <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-[15px] text-[#262626] leading-relaxed tracking-[-0.032px]">
              {language === 'es'
                ? 'Selecciona el idioma en el que quieres que nos comuniquemos contigo.'
                : 'Select the language you want us to communicate with you.'}
            </p>
          </div>

          {/* Language Selection Options */}
          <div className="flex flex-col gap-3.5 w-full">
            {/* Spanish Option */}
            <button
              onClick={() => handleSelectLanguage('es')}
              className={`min-h-[48px] px-5 py-3 rounded-[16px] flex items-center justify-between active:scale-[0.98] transition-all duration-150 cursor-pointer ${
                language === 'es'
                  ? 'bg-[#0038d0] text-white shadow-md'
                  : 'bg-white border border-[#e5e5e5] text-[#262626]'
              }`}
              data-node-id="3645:34563"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🇲🇽</span>
                <span className={`font-['Inter',sans-serif] font-semibold text-sm leading-[18px] ${
                  language === 'es' ? 'text-white' : 'text-[#262626]'
                }`}>
                  Spanish
                </span>
              </div>
              {language === 'es' && (
                <span className="material-symbols-outlined text-[20px] text-white font-bold">
                  check
                </span>
              )}
            </button>

            {/* English Option */}
            <button
              onClick={() => handleSelectLanguage('en')}
              className={`min-h-[48px] px-5 py-3 rounded-[16px] flex items-center justify-between active:scale-[0.98] transition-all duration-150 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#0038d0] text-white shadow-md'
                  : 'bg-white border border-[#e5e5e5] text-[#262626]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🇺🇸</span>
                <span className={`font-['Inter',sans-serif] font-semibold text-sm leading-[18px] ${
                  language === 'en' ? 'text-white' : 'text-[#262626]'
                }`}>
                  English
                </span>
              </div>
              {language === 'en' && (
                <span className="material-symbols-outlined text-[20px] text-white font-bold">
                  check
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Continuar Button Aligned Bottom */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] px-4 py-[10px] rounded-full bg-[#0038d0] text-white font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] active:scale-[0.98] transition-all duration-150 cursor-pointer"
        >
          {language === 'es' ? 'Continuar' : 'Continue'}
        </button>
      </div>
    </div>
  );
};
