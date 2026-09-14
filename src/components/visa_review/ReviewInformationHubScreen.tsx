import React from 'react';
import { useApp } from '../../context/AppContext';

export const ReviewInformationHubScreen: React.FC = () => {
  const { language, setCurrentTab, visaReviewSection } = useApp();

  const handleBack = () => {
    setCurrentTab('home');
  };

  const handleStartSection1 = () => {
    setCurrentTab('visa_review_ssn');
  };

  const handleStartSection2 = () => {
    setCurrentTab('visa_review_education');
  };

  const handleStartSection3 = () => {
    setCurrentTab('visa_review_final_questions');
  };

  const handleFinishAll = () => {
    if (visaReviewSection >= 3) {
      setCurrentTab('visa_review_consent');
    }
  };

  const isSection1Done = visaReviewSection >= 1;
  const isSection2Done = visaReviewSection >= 2;
  const isSection3Done = visaReviewSection >= 3;
  const allDone = isSection1Done && isSection2Done && isSection3Done;

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in select-none font-['Inter',sans-serif] text-left"
      data-node-id={
        allDone
          ? '508:36693'
          : isSection2Done
          ? '508:36581'
          : isSection1Done
          ? '508:36541'
          : '508:36630'
      }
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2">
          {language === 'es' ? 'Revisar información' : 'Review information'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6 w-full">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
            {language === 'es'
              ? 'Por favor revisa cada sección una por una.'
              : 'Please review each section below one by one.'}
          </h2>
          {visaReviewSection === 0 ? (
            /* Warning Banner - Screen 1 (508:36630) */
            <div className="bg-[#ffe5a6] border border-[#fd8003] rounded-[8px] p-6 flex gap-2.5 items-start text-[#461c04] shadow-2xs">
              <span className="material-symbols-outlined text-[#fd8003] text-[20px] shrink-0 mt-0.5">
                error
              </span>
              <p className="font-semibold text-[14px] leading-[20px] text-[#461c04]">
                {language === 'es'
                  ? 'Esta es tu última oportunidad para hacer cambios.'
                  : 'This is your last chance to make changes.'}
              </p>
            </div>
          ) : (
            /* Subtitle on subsequent states (508:36541, 508:36581, 508:36693) */
            <p className="font-normal text-[14px] leading-[20px] text-[#525252]">
              {language === 'es'
                ? 'Una vez confirmada toda la información, podrás continuar.'
                : 'Once you have confirmed all information, you will be able to continue.'}
            </p>
          )}
        </div>

        {/* Section Cards */}
        <div className="flex flex-col gap-4">
          {/* Card 1: Personal Information */}
          {isSection1Done ? (
            /* Completed Green Card */
            <div className="bg-[#e6f9ed] border border-[#00a843] rounded-[12px] p-6 flex items-center gap-3 shadow-2xs">
              <div className="size-[28px] rounded-full bg-[#008a38] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#006e2b]">
                {language === 'es' ? 'Información personal' : 'Personal information'}
              </span>
            </div>
          ) : (
            /* Active Blue Card */
            <div className="bg-[#e7f6ff] border border-[#2874ff] rounded-[12px] p-6 flex flex-col gap-3 shadow-[0px_2px_16px_rgba(40,116,255,0.12)]">
              <div className="flex items-center gap-3">
                <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-semibold text-[14px] flex items-center justify-center shrink-0">
                  1
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#262626]">
                  {language === 'es' ? 'Información personal' : 'Personal information'}
                </span>
              </div>
              <button
                onClick={handleStartSection1}
                className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[15px] shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {language === 'es' ? 'Revisar info' : 'Check info'}
              </button>
            </div>
          )}

          {/* Card 2: Work and Education */}
          {isSection2Done ? (
            /* Completed Green Card */
            <div className="bg-[#e6f9ed] border border-[#00a843] rounded-[12px] p-6 flex items-center gap-3 shadow-2xs">
              <div className="size-[28px] rounded-full bg-[#008a38] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#006e2b]">
                {language === 'es' ? 'Trabajo y Educación' : 'Work and Education'}
              </span>
            </div>
          ) : isSection1Done ? (
            /* Active Blue Card */
            <div className="bg-[#e7f6ff] border border-[#2874ff] rounded-[12px] p-6 flex flex-col gap-3 shadow-[0px_2px_16px_rgba(40,116,255,0.12)]">
              <div className="flex items-center gap-3">
                <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-semibold text-[14px] flex items-center justify-center shrink-0">
                  2
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#262626]">
                  {language === 'es' ? 'Trabajo y Educación' : 'Work and Education'}
                </span>
              </div>
              <button
                onClick={handleStartSection2}
                className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[15px] shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {language === 'es' ? 'Revisar info' : 'Review info'}
              </button>
            </div>
          ) : (
            /* Disabled Grey Card */
            <div className="bg-white border border-[#e5e5e5] opacity-50 rounded-[12px] p-6 flex flex-col gap-3 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="size-[28px] rounded-full bg-[#737373] text-white font-semibold text-[14px] flex items-center justify-center shrink-0">
                  2
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#262626]">
                  {language === 'es' ? 'Trabajo y Educación' : 'Work and Education'}
                </span>
              </div>
              <div className="w-full h-[44px] bg-[#e5e5e5] border border-[#d4d4d4] rounded-full font-semibold text-[15px] text-[#737373] flex items-center justify-center">
                {language === 'es' ? 'Revisar info' : 'Check info'}
              </div>
            </div>
          )}

          {/* Card 3: Final Questions */}
          {isSection3Done ? (
            /* Completed Green Card */
            <div className="bg-[#e6f9ed] border border-[#00a843] rounded-[12px] p-6 flex items-center gap-3 shadow-2xs">
              <div className="size-[28px] rounded-full bg-[#008a38] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#006e2b]">
                {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
              </span>
            </div>
          ) : isSection2Done ? (
            /* Active Blue Card */
            <div className="bg-[#e7f6ff] border border-[#2874ff] rounded-[12px] p-6 flex flex-col gap-3 shadow-[0px_2px_16px_rgba(40,116,255,0.12)]">
              <div className="flex items-center gap-3">
                <div className="size-[28px] rounded-full bg-[#0038d0] text-white font-semibold text-[14px] flex items-center justify-center shrink-0">
                  3
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#262626]">
                  {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
                </span>
              </div>
              <button
                onClick={handleStartSection3}
                className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[15px] shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {language === 'es' ? 'Revisar info' : 'Review info'}
              </button>
            </div>
          ) : (
            /* Disabled Grey Card */
            <div className="bg-white border border-[#e5e5e5] opacity-50 rounded-[12px] p-6 flex flex-col gap-3 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="size-[28px] rounded-full bg-[#737373] text-white font-semibold text-[14px] flex items-center justify-center shrink-0">
                  3
                </div>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[17px] leading-[24px] text-[#262626]">
                  {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
                </span>
              </div>
              <div className="w-full h-[44px] bg-[#e5e5e5] border border-[#d4d4d4] rounded-full font-semibold text-[15px] text-[#737373] flex items-center justify-center">
                {language === 'es' ? 'Revisar info' : 'Check info'}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="p-6 bg-white border-t border-[#e5e5e5] shrink-0">
        {allDone ? (
          /* Active Green Final Button (Screen 14, 508:36693) */
          <button
            onClick={handleFinishAll}
            className="w-full h-[48px] bg-[#008a38] hover:bg-[#00742f] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{language === 'es' ? 'Todo está correcto' : 'Everything is correct'}</span>
            <span className="material-symbols-outlined text-[20px]">check</span>
          </button>
        ) : (
          /* Disabled Grey Button */
          <button
            disabled
            className="w-full h-[48px] bg-[#e5e5e5] border border-[#d4d4d4] text-[#737373] rounded-full font-semibold text-[16px] flex items-center justify-center cursor-not-allowed"
          >
            {language === 'es' ? 'Todo está correcto' : 'Everything is correct'}
          </button>
        )}
      </div>
    </div>
  );
};
