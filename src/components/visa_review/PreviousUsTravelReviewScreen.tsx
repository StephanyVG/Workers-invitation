import React from 'react';
import { useApp } from '../../context/AppContext';

export const PreviousUsTravelReviewScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleBack = () => {
    setCurrentTab('visa_review_contact');
  };

  const handleContinue = () => {
    setCurrentTab('visa_review_father');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:35655"
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
          {language === 'es' ? 'Información personal' : 'Personal information'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Review Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[30px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Viajes previos a EE. UU.' : 'Previous US Travel'}
          </h2>
          <p className="font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Revisa tu información abajo. Si algo está mal, toca "Modificar" para corregirlo'
              : 'Check your information below. If anything is wrong, tap “Change” to fix it'}
          </p>
        </div>

        {/* Card 1: Ever been to US */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Has estado alguna vez en los EE. UU.?' : 'Have you ever been to the U.S.?'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'Sí' : 'Yes'}</span>
          </div>

          <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-[12px] p-6 flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="font-semibold text-[13px] text-[#171717]">
                {language === 'es' ? 'Fecha aproximada de llegada:' : 'Approximate Date You Arrived:'}
              </span>
              <span className="text-[13px] text-[#525252]">12/05/2023</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[13px] text-[#171717]">
                {language === 'es' ? 'Duración de estancia:' : 'Length of stay:'}
              </span>
              <span className="text-[13px] text-[#525252]">
                {language === 'es' ? '1 año' : '1 year'}
              </span>
            </div>
          </div>

          <button
            onClick={() => {}}
            className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
          >
            {language === 'es' ? 'Modificar' : 'Change'}
          </button>
        </div>

        {/* Card 2: Granted US Visa with photo */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Alguna vez se te ha otorgado una visa de EE. UU.?' : 'Have you ever been granted a U.S. visa?'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'Sí' : 'Yes'}</span>
          </div>

          <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-[12px] p-6 flex flex-col gap-2">
            <span className="font-semibold text-[13px] text-[#171717]">
              {language === 'es' ? 'Foto de VISA' : 'Photo of VISA'}
            </span>
            <div className="w-full h-[192px] rounded-[16px] overflow-hidden border border-[#d4d4d4] bg-white flex items-center justify-center">
              <img
                src="/visa.png"
                alt="VISA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button
            onClick={() => {}}
            className="w-full h-[40px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-semibold text-[14px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
          >
            {language === 'es' ? 'Modificar' : 'Change'}
          </button>
        </div>

        {/* Card 3: Additional Questionnaire List */}
        <div className="bg-white border border-[#e5e5e5] rounded-[20px] p-6 shadow-2xs flex flex-col divide-y divide-[#f0f0f0]">
          <div className="pb-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Solicitas el mismo tipo de visa nuevamente?:' : 'Are you applying for the same type of visa again?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'Sí' : 'Yes'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Solicitas la visa desde tu país de origen?:' : 'Are you applying for a visa from your home country?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Has entregado tus huellas dactilares en una cita consular?:' : 'Have you given your fingerprints at a consular appointment for your visa?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Alguna vez te han robado o extraviado tu visa de EE. UU.?:' : 'Has your U.S. visa ever been lost or stolen?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Alguien ha solicitado una residencia permanente para ti?:' : 'Has anyone ever applied for a U.S. green card for you?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Te han negado una visa o la entrada en frontera?:' : 'Have you ever been denied a U.S. visa or been denied entry to the U.S. at the border?:'}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'No' : 'No'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? '¿Tienes o has tenido licencia de conducir en EE. UU.?:' : "Do you have or have you ever had a U.S. driver's license?:"}
            </span>
            <span className="text-[14px] text-[#525252]">{language === 'es' ? 'Sí' : 'Yes'}</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? 'Número de licencia de conducir:' : "Driver's License Number (if you know):"}
            </span>
            <span className="text-[14px] text-[#525252]">4456465465465</span>
          </div>

          <div className="py-3 flex flex-col gap-0.5">
            <span className="font-semibold text-[14px] text-[#171717]">
              {language === 'es' ? 'Estado de la licencia de conducir:' : "State of Driver's License:"}
            </span>
            <span className="text-[14px] text-[#525252]">Chicago</span>
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
          <span>{language === 'es' ? 'Continuar al siguiente paso' : 'Continue to next step'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
