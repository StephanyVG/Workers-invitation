import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step18Part4IntroScreen: React.FC = () => {
  const { setCurrentTab, language } = useApp();

  const handleStartPart4 = () => {
    setCurrentTab('step19_social_info');
  };

  const handleBack = () => {
    setCurrentTab('step17_work_experience');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5365"
    >
      {/* Top Light Blue Gradient Header Area */}
      <div className="w-full relative shrink-0 pt-4 pb-2 px-4 flex flex-col items-center overflow-hidden">
        {/* Background Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0%, rgba(216, 227, 255, 0) 100%)'
          }}
        />

        {/* Floating Top Left Circular Back Button */}
        <div className="w-full flex items-center justify-start relative z-20 mb-2">
          <button
            onClick={handleBack}
            className="size-[44px] rounded-full bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#171717] hover:bg-white active:scale-95 transition-all cursor-pointer shadow-[0px_1px_1px_rgba(0,0,0,0.09)]"
            aria-label="Back"
            data-node-id="1:5383"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
        </div>

        {/* Illustration Container with Soft Oval Shadow */}
        <div className="relative z-10 flex flex-col items-center justify-center my-2" data-node-id="1:5367">
          <img
            src="/part 4.svg"
            alt="Part 4 Illustration"
            className="w-[190px] h-[190px] object-contain drop-shadow-xs"
          />
          {/* Oval Drop Shadow under Illustration */}
          <div
            className="w-[108px] h-[9px] rounded-full bg-[#c0d4ff]/60 blur-[2px] mt-1"
            data-node-id="1:5380"
          />
        </div>
      </div>

      {/* Main Content Body (Left Aligned matching Figma node 1:5385) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] pt-4 pb-6 max-w-md mx-auto w-full flex flex-col gap-4 text-left">
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px] text-left"
          data-node-id="1:5387"
        >
          {language === 'es' ? 'Parte 4: Preguntas Finales' : 'Part 4: Final Questions'}
        </h1>

        <div className="flex flex-col gap-[12px] text-left" data-node-id="1:5388">
          <h2
            className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0a0a0a] tracking-[-0.072px]"
            data-node-id="1:5389"
          >
            {language === 'es' ? '¡Ya casi terminas!' : 'You’re almost finished!'}
          </h2>

          <p
            className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.032px]"
            data-node-id="1:5390"
          >
            {language === 'es'
              ? 'Solo necesitamos hacer algunas preguntas estándar sobre salud y seguridad. Estas son requeridas para todos los que solicitan una visa.'
              : 'We just need to ask a few standard questions about health and safety. These are required for everyone applying for a visa.'}
          </p>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center" data-node-id="1:5391">
        <button
          onClick={handleStartPart4}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center gap-2"
          data-node-id="1:5393"
        >
          <span>{language === 'es' ? 'Comenzar Parte 4' : 'Start Part 4'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Step18Part4IntroScreen;
