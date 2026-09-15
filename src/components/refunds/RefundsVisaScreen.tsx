import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsVisaScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    refundsProgress,
    updateRefundsProgress,
    markRefundCategoryDone,
    setShowRefundFinishLaterModal,
  } = useApp();

  // Local question answers (null = unanswered, true = yes, false = no)
  const [appointmentFee, setAppointmentFee] = useState<boolean | null>(
    refundsProgress.visa.completed ? refundsProgress.visa.appointmentFee : true
  );
  const [borderFee, setBorderFee] = useState<boolean | null>(
    refundsProgress.visa.completed ? refundsProgress.visa.borderFee : true
  );

  const canFinish = appointmentFee !== null && borderFee !== null;

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-[#0045ff] text-white shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff]'
      : 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0045ff]';
  };

  const handleDone = () => {
    updateRefundsProgress({
      visa: {
        completed: true,
        appointmentFee: !!appointmentFee,
        borderFee: !!borderFee,
      },
    });
    markRefundCategoryDone('visa');
    setCurrentTab('refunds_hub');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49108"
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 w-full bg-[#f5f5f5] px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0"
        data-node-id="2308:49109"
      >
        <button
          onClick={() => setCurrentTab('refunds_hub')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center tracking-[-0.064px] flex-1 mx-2">
          {language === 'es' ? 'Reembolsos' : 'Reimbursements'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-6 w-full flex flex-col gap-6 max-w-[480px] mx-auto">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
            {language === 'es' ? 'Tarifas de solicitud de visa' : 'Visa application fees'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Confirma tus pagos. No necesitas subir ningún recibo aquí.'
              : 'Confirm your payments. You do not need to upload any receipts here.'}
          </p>
        </div>

        {/* Card 1: Visa appointment fee */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs"
          data-node-id="2308:49110"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
            {language === 'es'
              ? '¿Pagaste la tarifa de tu cita para la visa?'
              : 'Did you pay the fee for your visa appointment?'}
          </h3>

          {/* Blue Info Box */}
          <div className="bg-[#e7f6ff] border border-[#b0deff] rounded-[8px] p-3 text-left">
            <p className="font-['Inter',sans-serif] text-[13px] leading-[18px] text-[#1e3a8a]">
              <span className="font-semibold">{language === 'es' ? 'No se necesita recibo.' : 'No receipt needed.'}</span>{' '}
              {language === 'es' ? 'Si seleccionas Sí, recibirás ' : 'If you select Yes, you will receive '}
              <span className="font-bold">$25.00 USD</span>.
            </p>
          </div>

          {/* Yes / No Buttons (Matching Final Questions styling) */}
          <div className="flex gap-3 w-full pt-1">
            <button
              type="button"
              onClick={() => setAppointmentFee(true)}
              className={getOptionButtonClass(appointmentFee === true)}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              type="button"
              onClick={() => setAppointmentFee(false)}
              className={getOptionButtonClass(appointmentFee === false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Card 2: Border crossing fee */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs"
          data-node-id="2308:49120"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
            {language === 'es'
              ? '¿Pagaste la tarifa de cruce fronterizo?'
              : 'Did you pay the border crossing fee?'}
          </h3>

          {/* Blue Info Box */}
          <div className="bg-[#e7f6ff] border border-[#b0deff] rounded-[8px] p-3 text-left">
            <p className="font-['Inter',sans-serif] text-[13px] leading-[18px] text-[#1e3a8a]">
              <span className="font-semibold">{language === 'es' ? 'No se necesita recibo.' : 'No receipt needed.'}</span>{' '}
              {language === 'es' ? 'Si seleccionas Sí, recibirás ' : 'If you select Yes, you will receive '}
              <span className="font-bold">$25.00 USD</span>.
            </p>
          </div>

          {/* Yes / No Buttons (Matching Final Questions styling) */}
          <div className="flex gap-3 w-full pt-1">
            <button
              type="button"
              onClick={() => setBorderFee(true)}
              className={getOptionButtonClass(borderFee === true)}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              type="button"
              onClick={() => setBorderFee(false)}
              className={getOptionButtonClass(borderFee === false)}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div
        className="sticky bottom-0 z-20 bg-[#fafafa] border-t border-[#e5e5e5] p-4 flex flex-col gap-6 w-full max-w-[480px] mx-auto shrink-0"
        data-node-id="2308:49130"
      >
        <button
          type="button"
          onClick={() => setShowRefundFinishLaterModal(true)}
          className="w-full h-[44px] bg-white border border-[#e5e5e5] text-[#171717] rounded-full font-['Inter',sans-serif] font-semibold text-[15px] hover:bg-neutral-50 active:scale-98 transition-all cursor-pointer flex items-center justify-center shadow-xs"
        >
          {language === 'es' ? 'Lo terminaré después' : "I'll finish later"}
        </button>

        <button
          type="button"
          onClick={handleDone}
          disabled={!canFinish}
          className={`w-full h-[44px] rounded-full font-['Inter',sans-serif] font-semibold text-[15px] transition-all flex items-center justify-center shadow-md ${
            canFinish
              ? 'bg-[#0038d0] hover:bg-[#0030b3] active:scale-98 text-white cursor-pointer'
              : 'bg-[#e5e5e5] text-[#a3a3a3] cursor-not-allowed'
          }`}
          data-node-id="2308:49140"
        >
          {language === 'es' ? 'Listo' : "I'm done"}
        </button>
      </div>
    </div>
  );
};
