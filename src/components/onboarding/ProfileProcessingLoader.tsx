import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const ProfileProcessingLoader: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [stage, setStage] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    // Stage 0 -> Stage 1 after 1.5s
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1500);

    // Stage 1 -> Stage 2 after 3.0s
    const t2 = setTimeout(() => {
      setStage(2);
      setIsCompleted(true);
    }, 3000);

    // Completion after 4.2s -> Navigate directly to Confirm Profile Photo screen (Figma 1:7387)
    const t3 = setTimeout(() => {
      setCurrentTab('confirm_profile_photo');
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [setCurrentTab]);

  return (
    <div
      className="bg-[#e5e5e5]/40 flex-1 w-full flex flex-col justify-between items-center py-[48px] px-[24px] relative overflow-hidden animate-fade-in select-none"
      data-node-id="profile-processing-loader"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 p-6 z-0">
        <img
          src="/profile.png"
          alt="Profile Photo Processing"
          className="w-full max-w-[320px] h-auto object-cover rounded-[16px]"
        />
      </div>

      {/* Top Spacer Header */}
      <div className="w-full relative z-10"></div>

      {/* Center Animated Spinner & Status Text */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-[300px] relative z-10 my-auto">
        {/* Animated Zipmi Circle Logo */}
        <div className="relative size-[100px] flex items-center justify-center">
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

          <div className="size-[82px] rounded-full bg-[#0038d0] text-white flex items-center justify-center font-['DM_Sans',sans-serif] font-bold text-[44px] shadow-md select-none">
            Z
          </div>
        </div>

        {/* Dynamic Loading Text */}
        <div className="min-h-[64px] flex items-center justify-center">
          {stage === 0 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? 'Estamos procesando tu foto de perfil...'
                : 'We are processing your profile photo...'}
            </h2>
          )}

          {stage === 1 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? 'Verificando calidad de la imagen, ya casi terminamos...'
                : 'Verifying photo quality, almost done...'}
            </h2>
          )}

          {stage === 2 && (
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#171717] tracking-tight animate-fadeIn">
              {language === 'es'
                ? '¡Listo!, tu foto de perfil se procesó con éxito...'
                : 'Done!, your profile photo was processed successfully...'}
            </h2>
          )}
        </div>
      </div>

      {/* Bottom Spacer Footer */}
      <div className="w-full h-[40px] relative z-10"></div>
    </div>
  );
};
