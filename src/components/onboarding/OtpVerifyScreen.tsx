import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';

export const OtpVerifyScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(106); // 1:46 initial timer
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer effect
  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsRemaining]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleInputChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const newOtp = [...otpDigits];
    newOtp[index] = digit;
    setOtpDigits(newOtp);

    // Auto-focus next input
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isOtpComplete = otpDigits.every((d) => d !== '');

  const handleVerify = () => {
    if (!isOtpComplete) return;
    setCurrentTab('terms_service');
  };

  const handleResendCode = () => {
    if (secondsRemaining > 0) return;
    setSecondsRemaining(106); // Reset timer
    setOtpDigits(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:64879"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('phone_auth')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center text-center gap-3 w-full mb-8">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-2xl sm:text-[28px] text-[#0038d0] leading-[36px] tracking-tight">
            {language === 'es' ? 'Ingresa el código de verificación' : 'Enter the verification code'}
          </h2>
          <div className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#525252] space-y-0.5">
            <p>
              {language === 'es'
                ? 'Hemos enviado un código de verificación de 6 dígitos a tu teléfono:'
                : 'We have sent a 6-digit verification code to your phone:'}
            </p>
            <p className="font-semibold text-[#171717]">+52 2218563245</p>
          </div>
        </div>

        {/* 6 OTP Input Boxes (Figma nodes 3:64879 / 3:64917) */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 w-full mb-6" data-node-id="3:64917">
          {otpDigits.map((digit, idx) => {
            const isFilled = digit !== '';
            return (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                placeholder="-"
                className={`size-[44px] sm:size-[48px] rounded-[12px] text-center font-['Inter',sans-serif] font-bold text-[18px] leading-none outline-none transition-all duration-150 shadow-2xs ${
                  isFilled
                    ? 'bg-white border-2 border-[#0038d0] text-[#0038d0]'
                    : 'bg-white border border-[#e5e5e5] text-[#737373] placeholder:text-[#a3a3a3] focus:border-[#0038d0]'
                }`}
              />
            );
          })}
        </div>

        {/* Resend Code Button with Timer */}
        <button
          onClick={handleResendCode}
          disabled={secondsRemaining > 0}
          className={`px-4 py-2 rounded-full font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] transition-all duration-150 shadow-2xs ${
            secondsRemaining > 0
              ? 'bg-[#f5f5f5] text-[#737373] border border-[#e5e5e5] cursor-not-allowed'
              : 'bg-white text-[#171717] border border-[#e5e5e5] cursor-pointer active:scale-95'
          }`}
        >
          {secondsRemaining > 0
            ? language === 'es'
              ? `No recibí un código (${formatTimer(secondsRemaining)})`
              : `I did not receive a code (${formatTimer(secondsRemaining)})`
            : language === 'es'
            ? 'Reenviar código (0:00)'
            : 'Resend code (0:00)'}
        </button>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleVerify}
          disabled={!isOtpComplete}
          className={`w-full min-h-[44px] h-[44px] px-4 py-[10px] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 ${
            isOtpComplete
              ? 'bg-[#0038d0] text-[#f5f5f5] cursor-pointer active:scale-[0.98]'
              : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed opacity-80'
          }`}
          data-node-id="3:64917"
        >
          {language === 'es' ? 'Verificar código' : 'Verify Code'}
        </button>
      </div>
    </div>
  );
};
