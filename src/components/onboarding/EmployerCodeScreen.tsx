import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const EmployerCodeScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

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
    setCurrentTab('enter_code');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:64564"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header - Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]" data-node-id="3:64566">
          <button
            onClick={() => setCurrentTab('invite_choice')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Code Section (Full Width bounded by 24px padding) */}
        <div className="flex flex-col items-center text-center gap-4 w-full" data-node-id="3:64568">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] leading-[36px] tracking-[-0.112px] w-full" data-node-id="3:64570">
            {language === 'es' ? 'Ingresa tu código' : 'Enter your code'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-sm sm:text-[16px] text-[#171717] leading-[22px] tracking-[-0.032px] w-full" data-node-id="3:64571">
            {language === 'es'
              ? 'Si recibiste un código por WhatsApp de tu empleador, por favor ingrésalo para acceder a la aplicación.'
              : 'If you received a code via WhatsApp from your employer, please enter it to access the application.'}
          </p>
        </div>

        {/* 6 Digit Input Boxes (Full Width) */}
        <div
          className="flex items-center justify-between gap-2 sm:gap-3 w-full mt-8 mb-4"
          onPaste={handlePaste}
          data-node-id="3:64573"
        >
          {code.map((digit, index) => (
            <div key={index} className="flex-1 max-w-[52px] h-[48px] flex items-center justify-center" data-node-id={`3:${64574 + index}`}>
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                placeholder="-"
                className={`w-full h-full text-center font-['Inter',sans-serif] text-[16px] leading-[18px] rounded-[8px] border transition-all outline-none ${
                  digit
                    ? 'border-[#0038d0] bg-white text-[#0038d0] font-bold shadow-sm scale-105'
                    : 'border-[#e5e5e5] bg-white text-[#737373] focus:border-[#0038d0]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Verify Button Aligned Bottom (Full Width) */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleVerify}
          disabled={!isComplete}
          className={`w-full min-h-[44px] px-4 py-[10px] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 ${
            isComplete
              ? 'bg-[#0038d0] text-[#f5f5f5] cursor-pointer active:scale-[0.98]'
              : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed opacity-80'
          }`}
          data-node-id="3:64580"
        >
          {language === 'es' ? 'Verificar' : 'Verify'}
        </button>
      </div>
    </div>
  );
};
