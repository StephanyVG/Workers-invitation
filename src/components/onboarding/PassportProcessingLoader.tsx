import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const PassportProcessingLoader: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  // Stage:
  // 0: Processing information (Figma 1:7439)
  // 1: Verifying information, almost done (Figma 1:7491)
  // 2: Done! Uploaded successfully (Figma 1:7543)
  const [stage, setStage] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    // Stage 0 -> Stage 1 after 1.8s
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1800);

    // Stage 1 -> Stage 2 after 3.6s
    const t2 = setTimeout(() => {
      setStage(2);
      setIsCompleted(true);
    }, 3600);

    // Completion after 5.0s -> Navigate directly to Scanned Passport Form Details screen (Figma 1:7358)
    const t3 = setTimeout(() => {
      setCurrentTab('scanned_passport_details');
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [setCurrentTab]);

  return (
    <div
      className="bg-[#e5e5e5]/40 flex-1 w-full flex flex-col justify-between items-center py-[48px] px-[24px] relative overflow-hidden animate-fade-in select-none"
      data-node-id="1:7439"
    >
      {/* Semi-transparent Passport Background Image (Figma 1:7439) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 p-6 z-0">
        <img
          src="/pasaporte.svg"
          alt="Passport"
          className="w-full max-w-[360px] h-auto object-contain"
        />
      </div>

      {/* Top Spacer / Status Header */}
      <div className="w-full relative z-10"></div>

      {/* Center Loader Overlay Container (Figma 1:7439, 1:7491, 1:7543) */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-[300px] relative z-10 my-auto">
        {/* Animated Avatar / Zipmi Z Emblem with Circular Loading Arc */}
        <div className="relative size-[100px] flex items-center justify-center">
          {/* Animated Spinner Arc Ring */}
          {!isCompleted ? (
            <svg className="absolute inset-0 size-full animate-spin" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#0038d0"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="210"
                strokeDashoffset="70"
              />
            </svg>
          ) : (
            <div className="absolute -inset-1 rounded-full border-4 border-[#00e676] animate-pulse" />
          )}

          {/* Center Blue Circle Logo */}
          <div className="size-[82px] rounded-full bg-[#0038d0] text-white flex items-center justify-center font-['DM_Sans',sans-serif] font-bold text-[44px] shadow-md select-none">
            Z
          </div>
        </div>

        {/* Dynamic Loading Text according to Stage */}
        <div className="min-h-[64px] flex items-center justify-center">
          {stage === 0 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? 'Estamos procesando tu información...'
                : 'We are processing your information...'}
            </h2>
          )}

          {stage === 1 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? 'Verificando tu información, ya casi terminamos...'
                : 'Verifying your information, almost done...'}
            </h2>
          )}

          {stage === 2 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? '¡Listo!, tu información se subió con éxito...'
                : 'Done!, your information was uploaded successfully...'}
            </h2>
          )}
        </div>
      </div>

      {/* Bottom Spacer / Clean layout footer */}
      <div className="w-full h-[40px] relative z-10"></div>
    </div>
  );
};
