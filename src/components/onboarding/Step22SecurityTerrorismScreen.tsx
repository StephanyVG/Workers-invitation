import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step22SecurityTerrorismScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [q1, setQ1] = useState<'yes' | 'no' | null>(null);
  const [q2, setQ2] = useState<'yes' | 'no' | null>(null);
  const [q3, setQ3] = useState<'yes' | 'no' | null>(null);
  const [q4, setQ4] = useState<'yes' | 'no' | null>(null);
  const [q5, setQ5] = useState<'yes' | 'no' | null>(null);

  const toggleYesNo = (
    currentVal: 'yes' | 'no' | null,
    setVal: React.Dispatch<React.SetStateAction<'yes' | 'no' | null>>,
    target: 'yes' | 'no'
  ) => {
    setVal(currentVal === target ? null : target);
  };

  const handleContinue = () => {
    setCurrentTab('step23_human_rights');
  };

  const handleSelectNoForAll = () => {
    setQ1('no');
    setQ2('no');
    setQ3('no');
    setQ4('no');
    setQ5('no');
    setTimeout(() => {
      handleContinue();
    }, 400);
  };

  const handleBack = () => {
    setCurrentTab('step21_criminal_history');
  };

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-[#0045ff] text-white shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff]'
      : 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0045ff]';
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5454"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col shrink-0 sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="size-[40px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#171717] hover:bg-[#f5f5f5] active:scale-95 transition-all cursor-pointer shadow-2xs"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#0038d0]">
            {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
          </span>

          <div className="w-[40px]" />
        </div>

        {/* Step Progress Bar (40% progress into Final Questions sequence) */}
        <div className="w-full h-[4px] bg-[#e5e5e5]">
          <div className="h-full bg-[#0038d0] transition-all duration-300 w-[40%]" />
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6 min-h-0 text-left">
        {/* Section Title */}
        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px] text-center my-2">
          {language === 'es' ? 'Seguridad y terrorismo' : 'Security and Terrorism'}
        </h1>

        <div className="space-y-4 w-full">
          {/* Question 1 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Planeas espiar o hacer algo ilegal en los EE. UU.?'
                : 'Do you plan to spy or do anything illegal in the U.S.?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'yes')}
                className={getOptionButtonClass(q1 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'no')}
                className={getOptionButtonClass(q1 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Planeas cometer actos de terrorismo o alguna vez has hecho algo similar?'
                : 'Do you plan to commit terrorism, or have you ever done something like that?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'yes')}
                className={getOptionButtonClass(q2 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'no')}
                className={getOptionButtonClass(q2 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has dado dinero o ayuda a terroristas o grupos terroristas?'
                : 'Have you ever given money or help to terrorists or terrorist groups?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'yes')}
                className={getOptionButtonClass(q3 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'no')}
                className={getOptionButtonClass(q3 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Formas parte de un grupo terrorista?'
                : 'Are you part of a terrorist group?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'yes')}
                className={getOptionButtonClass(q4 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'no')}
                className={getOptionButtonClass(q4 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <div className="space-y-2">
              <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
                {language === 'es'
                  ? '¿Tu cónyuge o hijo ha ayudado a un grupo terrorista?'
                  : 'Has your spouse or child ever helped a terrorist group?'}
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Responde "SÍ" si prestaron ayuda en los últimos 5 años y recibiste dinero o beneficio por ello.'
                  : 'Answer "YES" if they provided help in the last 5 years and you received any benefit or money from it.'}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'yes')}
                className={getOptionButtonClass(q5 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'no')}
                className={getOptionButtonClass(q5 === 'no')}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3 shrink-0">
        <button
          onClick={handleContinue}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleSelectNoForAll}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[15px] leading-[20px] hover:underline cursor-pointer py-1 text-center"
        >
          {language === 'es' ? 'Seleccionar "No" para todo' : 'Select "No" for all'}
        </button>
      </div>
    </div>
  );
};
