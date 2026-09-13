import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';

export const PersonalInfoScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [dob, setDob] = useState<string>('1990-12-12');
  const [citizenship, setCitizenship] = useState<string>('Mexico');

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenDatePicker = () => {
    const inputEl = dateInputRef.current;
    if (!inputEl) return;
    const pickerInput = inputEl as HTMLInputElement & { showPicker?: () => void };
    try {
      if (typeof pickerInput.showPicker === 'function') {
        pickerInput.showPicker();
      } else {
        inputEl.focus();
      }
    } catch (e) {
      inputEl.focus();
    }
  };

  const handleContinue = () => {
    // Navigates to Terms of Service screen (Figma Node 3645:34359)
    setCurrentTab('terms_service');
  };

  return (
    <div
      className="bg-white overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3645:35663"
    >
      {/* Top Aligned Content */}
      <div className="flex flex-col items-start w-full">
        {/* Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]">
          <button
            onClick={() => setCurrentTab('great_news')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title */}
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] leading-snug tracking-[-0.112px] mb-2 w-full">
          {language === 'es' ? 'Zipmi protege tu información personal.' : 'Zipmi protects your personal information.'}
        </h2>

        {/* Subtitle */}
        <div className="space-y-1 text-[#171717] font-['DM_Sans',sans-serif] text-sm sm:text-[16px] leading-relaxed mb-6 w-full">
          <p>
            {language === 'es'
              ? 'Por favor confirma algunos detalles para acceder a tu perfil personalizado y oferta de trabajo.'
              : 'Please confirm some details to access your personalized profile and job offer.'}
          </p>
          <p className="text-xs sm:text-sm text-[#737373] font-medium">
            {language === 'es' ? 'No te preocupes, solo te pediremos esto una vez.' : "Don't worry, we will only ask you this once."}
          </p>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-4">
          {/* Gender selection */}
          <div className="space-y-1.5 w-full">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Género' : 'Gender'}
            </label>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 min-h-[50px] px-4 py-3 rounded-[12px] flex items-center justify-center gap-2.5 transition-all duration-150 ${
                  gender === 'male'
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.02]'
                    : 'bg-white border-[0.5px] border-[#737373] text-[#262626]'
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {gender === 'male' ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[16px]">
                  {language === 'es' ? 'Masculino' : 'Male'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 min-h-[50px] px-4 py-3 rounded-[12px] flex items-center justify-center gap-2.5 transition-all duration-150 ${
                  gender === 'female'
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.02]'
                    : 'bg-white border-[0.5px] border-[#737373] text-[#262626]'
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {gender === 'female' ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[16px]">
                  {language === 'es' ? 'Femenino' : 'Female'}
                </span>
              </button>
            </div>
          </div>

          {/* Date of birth */}
          <div className="space-y-1.5 w-full">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Fecha de Nacimiento' : 'Date of Birth'}
            </label>
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] py-[10px] flex items-center justify-between w-full focus-within:border-[#0038d0]">
              <input
                ref={dateInputRef}
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="MM/DD/YYYY"
                className="w-full bg-transparent font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] outline-none cursor-pointer"
              />
              <span
                onClick={handleOpenDatePicker}
                className="material-symbols-outlined text-[24px] text-[#737373] shrink-0 cursor-pointer pointer-events-auto ml-2 hover:text-[#0038d0] active:scale-90 transition-all"
                title="Seleccionar fecha"
              >
                calendar_today
              </span>
            </div>
          </div>

          {/* Citizenship */}
          <div className="space-y-1.5 w-full">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Nacionalidad' : 'Citizenship'}
            </label>
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] py-[10px] flex items-center justify-between w-full relative">
              <select
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                className="w-full bg-transparent font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] outline-none appearance-none cursor-pointer pr-6"
              >
                <option value="Mexico">México</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Honduras">Honduras</option>
                <option value="El Salvador">El Salvador</option>
              </select>
              <span className="material-symbols-outlined text-[24px] text-[#737373] shrink-0 pointer-events-none absolute right-[12px]">
                arrow_drop_down
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button Aligned Bottom */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] px-4 py-[10px] rounded-full bg-[#0038d0] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] active:scale-[0.98] transition-all duration-150 cursor-pointer"
        >
          {language === 'es' ? 'Continuar' : 'Continue'}
        </button>
      </div>
    </div>
  );
};
