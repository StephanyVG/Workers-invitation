import React from 'react';
import { useApp } from '../../context/AppContext';

export const WelcomeScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleSignIn = () => {
    setCurrentTab('employer_code');
  };

  const handleCreateAccount = () => {
    setCurrentTab('invite_choice');
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-[#dce5fe] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col items-center justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:36407"
    >
      {/* Centered Header Logo & Subtitle */}
      <div className="flex flex-col items-center text-center gap-2 w-full mb-4">
        {/* Official Zipmi Horizontal Logo */}
        <img
          src="/Logo Horizontal.svg"
          alt="Zipmi"
          className="h-7 sm:h-8 w-auto object-contain mb-1"
        />

        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]">
          {language === 'es'
            ? 'Te ayudamos a obtener tu visa H-2, paso a paso'
            : 'We help you get your H-2 visa, step by step'}
        </h1>
      </div>

      {/* Action Selection Group (Full width bounded by 24px padding) */}
      <div className="flex flex-col w-full my-auto">
        {/* Section Title - 18px bold with 16px bottom separation */}
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#262626] text-center mb-[16px]">
          {language === 'es' ? '¿Has usado Zipmi antes?' : 'Have you used Zipmi before?'}
        </h2>

        <div className="flex flex-col gap-3 w-full">
          {/* Option 1: Yes, sign back in */}
          <button
            onClick={handleSignIn}
            className="bg-white border border-[#737373] rounded-[12px] min-h-[48px] px-4 py-3 flex gap-3 items-center text-left active:scale-[0.98] transition-all duration-150 shadow-sm cursor-pointer w-full"
            data-node-id="3645:36414"
          >
            <div className="bg-[#0045ff] text-white rounded-full size-[32px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] leading-[22px] text-[#262626]">
                {language === 'es' ? 'Sí, volver a ingresar' : 'Yes, sign back in'}
              </h3>
              <div className="flex items-center gap-1 text-[16px] leading-[22px] font-['Inter',sans-serif] text-[#525252]">
                <span className="material-symbols-outlined text-[16px] text-emerald-600 font-bold shrink-0">check</span>
                <span>{language === 'es' ? 'Tu información está guardada' : 'Your info is saved'}</span>
              </div>
            </div>
          </button>

          {/* Option 2: No, I'm new here */}
          <button
            onClick={handleCreateAccount}
            className="bg-white border border-[#737373] rounded-[12px] min-h-[48px] px-4 py-3 flex gap-3 items-center text-left active:scale-[0.98] transition-all duration-150 shadow-sm cursor-pointer w-full"
            data-node-id="3645:36426"
          >
            <div className="bg-[#0045ff] text-white rounded-full size-[32px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[18px]">add</span>
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] leading-[22px] text-[#262626]">
                {language === 'es' ? 'No, soy nuevo aquí' : "No, I’m new here"}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#525252]">
                {language === 'es' ? 'Crear una cuenta gratis' : 'Create a free account'}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Discover Zipmi Card (Full width bounded by 24px padding) */}
      <div
        className="bg-white rounded-[24px] p-4 flex flex-col gap-2.5 border border-slate-100 shadow-sm w-full"
        data-node-id="3645:36450"
      >
        <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] text-center">
          {language === 'es' ? 'Descubre Zipmi' : 'Discover Zipmi'}
        </p>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#0038d0] rounded-full size-[20px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-white font-bold">check</span>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#525252]">
              {language === 'es' ? 'Encontrar empleos H-2 verificados' : 'Find verified H-2 jobs'}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-[#0038d0] rounded-full size-[20px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-white font-bold">check</span>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#525252]">
              {language === 'es'
                ? 'Completa tu solicitud de visa paso a paso'
                : 'Complete your visa application step by step'}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-[#0038d0] rounded-full size-[20px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-white font-bold">check</span>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#525252]">
              {language === 'es' ? 'Conoce qué sigue después' : 'Know what comes next'}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-[#0038d0] rounded-full size-[20px] flex items-center justify-center p-1 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-white font-bold">check</span>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#525252]">
              {language === 'es' ? 'Gratis de usar - sin tarifas nunca' : 'Free to use - no fees ever'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
