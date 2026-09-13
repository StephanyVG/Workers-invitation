import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';

export const VerifyDetailsScreen: React.FC = () => {
  const { language, setCurrentTab, worker, updateWorker } = useApp();

  const [gender, setGender] = useState<'male' | 'female'>(worker.gender || 'male');
  const [birthDate, setBirthDate] = useState<string>(worker.birthDate || '');
  const [citizenship, setCitizenship] = useState<string>(worker.citizenship || 'México');

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
    updateWorker({
      gender,
      birthDate: birthDate || worker.birthDate,
      citizenship
    });
    setCurrentTab('great_news');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-y-auto custom-scrollbar flex-1 w-full flex flex-col justify-between px-[24px] py-[32px] animate-slide-right"
      data-node-id="3:65847"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Header - Back Button */}
        <div className="w-full flex items-center justify-start mb-[32px]" data-node-id="3:65849">
          <button
            onClick={() => setCurrentTab('enter_code')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-90 transition-all duration-150"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Title + Question Section (Full Width) */}
        <div className="flex flex-col items-center text-center gap-3 w-full mb-6" data-node-id="3:65850">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-2xl sm:text-[28px] text-[#0038d0] leading-[36px] tracking-[-0.112px] w-full" data-node-id="3:65851">
            {language === 'es' ? 'Zipmi protege tu información personal.' : 'Zipmi protects your personal information.'}
          </h2>
          <div className="font-['DM_Sans',sans-serif] font-normal text-sm sm:text-[16px] text-[#171717] leading-[22px] tracking-[-0.064px] space-y-1 w-full" data-node-id="3:65853">
            <p>{language === 'es' ? 'Por favor confirma algunos detalles para acceder a tu perfil personalizado y oferta de trabajo.' : 'Please confirm some details to access your personalized profile and job offer.'}</p>
            <p className="text-[#737373] text-xs sm:text-sm font-medium">{language === 'es' ? 'No te preocupes, solo te pediremos esto una vez.' : "Don't worry, we will only ask you this once."}</p>
          </div>
        </div>

        {/* Form Controls Section (Full Width) */}
        <div className="flex flex-col gap-4 w-full" data-node-id="3:65855">
          {/* Gender Selector */}
          <div className="flex flex-col gap-1.5 w-full" data-node-id="3:65856">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Género' : 'Gender'}
            </label>
            <div className="flex gap-3 w-full" data-node-id="3:65860">
              {/* Male Pill */}
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 min-h-[50px] px-4 py-3 rounded-[12px] flex items-center justify-center gap-2.5 transition-all duration-150 ${
                  gender === 'male'
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.02]'
                    : 'bg-white border-[0.5px] border-[#737373] text-[#262626]'
                }`}
                data-node-id="495:23874"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {gender === 'male' ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[16px] tracking-[-0.064px]">
                  {language === 'es' ? 'Masculino' : 'Male'}
                </span>
              </button>

              {/* Female Pill */}
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 min-h-[50px] px-4 py-3 rounded-[12px] flex items-center justify-center gap-2.5 transition-all duration-150 ${
                  gender === 'female'
                    ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.02]'
                    : 'bg-white border-[0.5px] border-[#737373] text-[#262626]'
                }`}
                data-node-id="495:23884"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {gender === 'female' ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[16px] tracking-[-0.064px]">
                  {language === 'es' ? 'Femenino' : 'Female'}
                </span>
              </button>
            </div>
          </div>

          {/* Date of Birth Input (44px height, 8px border radius, 12px px, 10px py) */}
          <div className="flex flex-col gap-1.5 w-full" data-node-id="3:65863">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Fecha de Nacimiento' : 'Date of Birth'}
            </label>
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] py-[10px] flex items-center justify-between w-full focus-within:border-[#0038d0]">
              <input
                ref={dateInputRef}
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
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

          {/* Citizenship Select (44px height, 8px border radius, 12px px, 10px py) */}
          <div className="flex flex-col gap-1.5 w-full" data-node-id="3:65864">
            <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
              {language === 'es' ? 'Ciudadanía' : 'Citizenship'}
            </label>
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] py-[10px] flex items-center justify-between w-full relative">
              <select
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                className="w-full bg-transparent font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] outline-none appearance-none cursor-pointer pr-6"
              >
                <option value="México">México</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Honduras">Honduras</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Perú">Perú</option>
                <option value="Otro">{language === 'es' ? 'Otro país' : 'Other country'}</option>
              </select>
              <span className="material-symbols-outlined text-[24px] text-[#737373] shrink-0 pointer-events-none absolute right-[12px]">
                arrow_drop_down
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Continue Button (Full Width) */}
      <div className="w-full pt-6 pb-2">
        <button
          onClick={handleContinue}
          className="w-full min-h-[44px] px-4 py-[10px] rounded-full bg-[#0038d0] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] active:scale-[0.98] transition-all duration-150 cursor-pointer"
          data-node-id="3:65865"
        >
          {language === 'es' ? 'Continuar' : 'Continue'}
        </button>
      </div>
    </div>
  );
};
