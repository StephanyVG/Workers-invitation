import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowLeft } from 'lucide-react';

export const EnterCodeScreen: React.FC = () => {
  const { language, setCurrentTab, addToast } = useApp();

  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [timerSeconds, setTimerSeconds] = useState<number>(106); // 1:46
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timerSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerSeconds]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned) {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      return;
    }

    const digit = cleaned.slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length > 0) {
      const newCode = [...code];
      for (let i = 0; i < Math.min(pasted.length, 6); i++) {
        newCode[i] = pasted[i];
      }
      setCode(newCode);
      inputRefs.current[Math.min(pasted.length, 5)]?.focus();
    }
  };

  const isComplete = code.every((digit) => digit !== '');

  const handleVerify = () => {
    if (!isComplete) return;
    // Navigates to Personal Information Protection screen (Figma Node 3:65847)
    setCurrentTab('verify_details');
  };

  return (
    <div
      className="bg-white overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:35719"
    >
      {/* Top Aligned Content */}
      <div className="flex flex-col items-center w-full">
        {/* Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('employer_code')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-3 text-center w-full">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] leading-snug sm:leading-[36px] tracking-[-0.112px]">
            {language === 'es' ? 'Solo un paso más para comenzar' : 'Just one more step to get started'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-[15px] text-[#262626] leading-relaxed tracking-[-0.032px]">
            {language === 'es'
              ? 'Te enviamos un mensaje con 6 números al teléfono: +522218563245. Por favor escríbelos abajo.'
              : 'We sent you a message with 6 numbers to the phone: +522218563245. Please write them below.'}
          </p>
        </div>

        {/* 6 Input Boxes (Figma Nodes 3645:35719 / 3645:35740) */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 w-full mt-6 mb-5" onPaste={handlePaste}>
          {code.map((digit, index) => (
            <div key={index} className="flex-1 max-w-[52px] flex flex-col items-center">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                placeholder="-"
                className={`w-full h-[48px] text-center font-['Inter',sans-serif] font-semibold text-lg rounded-[12px] border transition-all outline-none ${
                  digit
                    ? 'border-[#0038d0] bg-white text-[#0038d0] shadow-sm font-bold scale-105'
                    : 'border-[#0038d0]/60 bg-white text-[#262626] focus:border-[#0038d0]'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Resend Code Pill Button */}
        <button
          disabled={timerSeconds > 0}
          onClick={() => {
            setTimerSeconds(106);
            addToast('Código Reenviado', 'Te enviamos un nuevo código por SMS/WhatsApp.', 'info');
          }}
          className="px-5 py-2.5 rounded-full bg-[#f0f0f0] text-xs sm:text-sm font-['Inter',sans-serif] font-medium text-[#262626] active:scale-95 transition-all"
        >
          {timerSeconds > 0
            ? (language === 'es' ? `No recibí el código (${formatTimer(timerSeconds)})` : `I didn't receive a code (${formatTimer(timerSeconds)})`)
            : (language === 'es' ? 'Reenviar código (0:00)' : 'Resend code (0:00)')}
        </button>
      </div>

      {/* Verify Code Button Aligned Bottom */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleVerify}
          disabled={!isComplete}
          className={`w-full min-h-[48px] px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center active:scale-[0.98] transition-all duration-150 ${
            isComplete
              ? 'bg-[#0038d0] text-white shadow-md cursor-pointer'
              : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed'
          }`}
          data-node-id="3645:35740"
        >
          {language === 'es' ? 'Verificar código' : 'Verify code'}
        </button>
      </div>
    </div>
  );
};
