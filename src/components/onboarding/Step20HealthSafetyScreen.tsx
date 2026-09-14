import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step20HealthSafetyScreen: React.FC = () => {
  const { setCurrentTab, setShowWelcomeModal, triggerConfetti, language } = useApp();

  // 1. Contagious disease state
  const [contagiousDisease, setContagiousDisease] = useState<'yes' | 'no' | null>(null);
  const [contagiousDetails, setContagiousDetails] = useState<string>('');

  // 2. Dangerous physical/mental illness state
  const [dangerousIllness, setDangerousIllness] = useState<'yes' | 'no' | null>(null);
  const [illnessDetails, setIllnessDetails] = useState<string>('');

  // 3. Drug addiction state
  const [drugAddiction, setDrugAddiction] = useState<'yes' | 'no' | null>(null);
  const [drugDetails, setDrugDetails] = useState<string>('');

  const toggleOption = (current: 'yes' | 'no' | null, setter: (val: 'yes' | 'no' | null) => void, choice: 'yes' | 'no') => {
    if (current === choice) {
      setter(null);
    } else {
      setter(choice);
    }
  };

  const handleCompletePart4 = () => {
    setCurrentTab('step21_criminal_history');
  };

  const handleBack = () => {
    setCurrentTab('step19_social_info');
  };

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'bg-[#0045ff] text-white rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff] h-[48px] transition-all cursor-pointer flex items-center justify-center'
      : 'bg-white border border-[#d4d4d4] text-[#171717] rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] hover:border-[#0045ff] h-[48px] transition-all cursor-pointer flex items-center justify-center';
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5415"
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

        {/* Step Progress Bar (Part 4 Step 2 of 2 - 100% complete) */}
        <div className="w-full h-[4px] bg-[#e5e5e5]">
          <div className="h-full bg-[#0038d0] transition-all duration-300 w-[100%]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[20px] max-w-md mx-auto w-full flex flex-col gap-6">
        {/* Screen Title */}
        <div className="w-full text-center">
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px] text-center my-2">
            {language === 'es' ? 'Salud y Seguridad' : 'Health and Safety'}
          </h1>
        </div>

        {/* Question 1: Contagious Disease */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="1:5416">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Tienes alguna enfermedad grave que pueda contagiar a otros, como tuberculosis?'
                : 'Do you have a serious disease that could spread to others, like tuberculosis?'}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full" data-node-id="1:6251">
            <button
              type="button"
              onClick={() => toggleOption(contagiousDisease, setContagiousDisease, 'yes')}
              className={getOptionButtonClass(contagiousDisease === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(contagiousDisease, setContagiousDisease, 'no')}
              className={getOptionButtonClass(contagiousDisease === 'no')}
            >
              No
            </button>
          </div>

          {contagiousDisease === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles adicionales' : 'Additional details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={contagiousDetails}
                  onChange={(e) => setContagiousDetails(e.target.value)}
                  rows={3}
                  placeholder={language === 'es' ? 'Describe tu situación aquí...' : 'Describe your situation here...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 2: Dangerous Mental or Physical Illness */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="1:5420">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Tienes alguna enfermedad física o mental que pueda ser peligrosa para ti o para otros?'
                : 'Do you have any physical or mental illness that could be dangerous to yourself or others?'}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(dangerousIllness, setDangerousIllness, 'yes')}
              className={getOptionButtonClass(dangerousIllness === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(dangerousIllness, setDangerousIllness, 'no')}
              className={getOptionButtonClass(dangerousIllness === 'no')}
            >
              No
            </button>
          </div>

          {dangerousIllness === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles adicionales' : 'Additional details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={illnessDetails}
                  onChange={(e) => setIllnessDetails(e.target.value)}
                  rows={3}
                  placeholder={language === 'es' ? 'Describe tu situación aquí...' : 'Describe your situation here...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 3: Drug Addiction */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="1:5424">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has tenido adicción a las drogas?'
                : 'Have you ever been addicted to drugs?'}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(drugAddiction, setDrugAddiction, 'yes')}
              className={getOptionButtonClass(drugAddiction === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(drugAddiction, setDrugAddiction, 'no')}
              className={getOptionButtonClass(drugAddiction === 'no')}
            >
              No
            </button>
          </div>

          {drugAddiction === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles adicionales' : 'Additional details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={drugDetails}
                  onChange={(e) => setDrugDetails(e.target.value)}
                  rows={3}
                  placeholder={language === 'es' ? 'Describe tu situación aquí...' : 'Describe your situation here...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] resize-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleCompletePart4}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleCompletePart4}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};

export default Step20HealthSafetyScreen;
