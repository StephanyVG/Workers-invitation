import React from 'react';
import { useApp } from '../../context/AppContext';

export const FinalQuestionsReviewScreen: React.FC = () => {
  const { language, setCurrentTab, setVisaReviewSection } = useApp();

  const handleBack = () => {
    setCurrentTab('visa_review_hub');
  };

  const handleContinue = () => {
    // Marks Section 3 (Final Questions) as completed! All 3 sections done!
    setVisaReviewSection(3);
    setCurrentTab('visa_review_hub');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:35869"
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
          {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Review Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[30px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
          </h2>
          <p className="font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Revisa tu información abajo. Si algo está mal, toca "Modificar" para corregirlo'
              : 'Check your information below. If anything is wrong, tap “Change” to fix it'}
          </p>
        </div>

        {/* Card 1: Social Information */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col divide-y divide-[#f0f0f0]">
          <span className="font-bold text-[16px] text-[#171717] pb-2">
            {language === 'es' ? 'Información Social' : 'Social Information'}
          </span>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Has servido en el ejército?:' : 'Have you ever served in the military?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Has visitado otros países en los últimos 5 años?:' : 'Have you travelled to other countries in the last 5 years?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Perteneces a algún clan o tribu?:' : 'Are you a member of a tribe or clan?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Has recibido entrenamiento en armas?:' : 'Have you ever been trained to use weapons?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="pt-3">
            <button
              onClick={() => {}}
              className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 2: Health and Safety */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col divide-y divide-[#f0f0f0]">
          <span className="font-bold text-[16px] text-[#171717] pb-2">
            {language === 'es' ? 'Salud y Seguridad' : 'Health and Safety'}
          </span>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Tienes alguna enfermedad contagiosa de importancia pública?:' : 'Do you have a serious disease that could spread to others?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Tienes algún trastorno físico o mental peligroso?:' : 'Do you have any physical or mental illness that could be dangerous?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Has sido o eres adicto a las drogas?:' : 'Have you ever been addicted to drugs?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="pt-3">
            <button
              onClick={() => {}}
              className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 3: Criminal History */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col divide-y divide-[#f0f0f0]">
          <span className="font-bold text-[16px] text-[#171717] pb-2">
            {language === 'es' ? 'Historial Penal' : 'Criminal History'}
          </span>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Alguna vez has sido arrestado o encarcelado?:' : 'Have you ever been arrested or in prison?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Alguna vez has usado o vendido drogas ilegales?:' : 'Have you ever used or sold illegal drugs?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="pt-3">
            <button
              onClick={() => {}}
              className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 4: Security and Terrorism */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col divide-y divide-[#f0f0f0]">
          <span className="font-bold text-[16px] text-[#171717] pb-2">
            {language === 'es' ? 'Seguridad y Terrorismo' : 'Security and Terrorism'}
          </span>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Planeas participar en espionaje o actividades ilegales?:' : 'Do you plan to engage in espionage or illegal activities?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="py-2.5 flex flex-col">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? '¿Planeas cometer o has cometido actos terroristas?:' : 'Do you plan to commit terrorism, or have you ever done something like that?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>
          <div className="pt-3">
            <button
              onClick={() => {}}
              className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="bg-[#fafafa] border-t border-[#e5e5e5] p-6 flex flex-col items-center shrink-0">
        <button
          onClick={handleContinue}
          className="w-full h-[44px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Información correcta, continuar' : 'Correct information, continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
