import React from 'react';
import { useApp } from '../../context/AppContext';

export const H2IntroScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65235"
    >
      {/* Top Content Stack */}
      <div className="flex flex-col items-center justify-center flex-1 w-full text-center my-auto">
        {/* Zipmi Ornament SVG Image (Figma 3:65235) */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src="/Zipmi ornament.svg"
            alt="Zipmi Ornament"
            className="w-[218px] h-auto max-h-[184px] object-contain block select-none"
          />
        </div>

        {/* Title: 32px leading-42px font-bold (Figma 3:65235) */}
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] leading-[36px] sm:leading-[42px] text-[#0038d0] tracking-tight mb-4 w-full">
          {language === 'es' ? '¡Comencemos!' : "Let's get started!"}
        </h2>

        {/* Subtitle Description: 16px leading-22px font-bold */}
        <p className="font-['Inter',sans-serif] font-bold text-[15px] sm:text-[16px] leading-[22px] text-[#262626] w-full max-w-[328px]">
          {language === 'es'
            ? 'A continuación, te haremos algunas preguntas. Esto nos ayuda a verificar si calificas para solicitar una visa H2 y te ahorra tiempo más adelante.'
            : "Next, we'll ask a few questions. This helps us check if you qualify to apply for an H2 visa and saves you time later."}
        </p>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={() => setCurrentTab('us_location_question')}
          className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="3:65235"
        >
          {language === 'es' ? 'Comenzar' : 'Start'}
        </button>
      </div>
    </div>
  );
};
