import React from 'react';
import { useApp } from '../../context/AppContext';


export const GreatNewsScreen: React.FC = () => {
  const { language, setCurrentTab, worker, jobs } = useApp();

  const currentJob = jobs.find((j) => j.id === worker.appliedJobId) || jobs[0];

  const handleStart = () => {
    // Navigates to Terms of Service screen (Figma Node 3:64141)
    setCurrentTab('terms_service');
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-[#dce5fe] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:34491"
    >
      {/* Top Aligned Content */}
      <div className="flex flex-col items-center w-full">
        {/* Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('verify_details')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Official Zipmi Horizontal Logo */}
        <img
          src="/Logo horizontal.png"
          alt="Zipmi"
          className="h-8 sm:h-9 w-auto object-contain my-3"
        />

        {/* Title */}
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] text-center leading-snug tracking-[-0.112px] mt-4 mb-3">
          {language === 'es' ? 'Tenemos excelentes noticias.' : 'We have great news.'}
        </h2>

        {/* Description */}
        <div className="space-y-4 text-center w-full">
          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-[15px] text-[#262626] leading-relaxed">
            {language === 'es'
              ? `El equipo de ${currentJob.companyName} recordó tu perfil y quiere considerarte nuevamente para la vacante de ${currentJob.title}.`
              : `The team at ${currentJob.companyName} remembered your profile and wants to consider you again for the position of ${currentJob.title}.`}
          </p>

          <p className="font-['DM_Sans',sans-serif] font-semibold text-base text-[#262626] leading-snug pt-2">
            {language === 'es'
              ? 'Zipmi te guiará paso a paso para obtener tu visa de trabajo.'
              : 'Zipmi will guide you step by step to obtain your work visa.'}
          </p>
        </div>
      </div>

      {/* Let's get started Button Aligned Bottom */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleStart}
          className="w-full min-h-[48px] px-4 py-3 rounded-full bg-[#0038d0] text-white font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-md active:scale-[0.98] transition-all duration-150"
        >
          {language === 'es' ? '¡Comencemos!' : "Let's get started!"}
        </button>
      </div>
    </div>
  );
};
