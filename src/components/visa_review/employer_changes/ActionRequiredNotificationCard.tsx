import React from 'react';
import { useApp } from '../../../context/AppContext';

export const ActionRequiredNotificationCard: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  return (
    <div
      className="bg-[#ffab9d] border border-[#c7290e] rounded-[24px] p-5 flex flex-col gap-4 shadow-sm w-full text-left font-['Inter',sans-serif] animate-fade-in"
      data-node-id="1628:54217"
    >
      {/* Header Row: Warning Icon + Title */}
      <div className="flex items-center gap-2.5">
        <span className="material-symbols-outlined text-[#882514] text-[26px] shrink-0 select-none">
          error
        </span>
        <h3 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#882514] tracking-[-0.08px]">
          {language === 'es' ? 'Acción requerida' : 'Action Required'}
        </h3>
      </div>

      {/* Description Text */}
      <p className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22px] text-[#882514]">
        {language === 'es'
          ? 'Tu empleador realizó cambios en tu formulario de visa. Debes revisar estos cambios antes de que se pueda programar tu cita consular.'
          : 'Your employer made changes to your visa form. You must review these changes before your consular appointment can be scheduled.'}
      </p>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={() => setCurrentTab('visa_employer_changes_review')}
        className="w-full h-[48px] min-h-[44px] px-6 bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] rounded-full shadow transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
        data-node-id="1628:54228"
      >
        {language === 'es' ? 'Revisar y confirmar' : 'Review and Confirm'}
      </button>
    </div>
  );
};
