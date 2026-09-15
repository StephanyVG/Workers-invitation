import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsTransportScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    refundsProgress,
    updateRefundsProgress,
    markRefundCategoryDone,
    setShowRefundCameraModal,
    setRefundCameraTarget,
    setShowRefundFinishLaterModal,
  } = useApp();

  const [consulateTransport, setConsulateTransport] = useState<boolean>(
    refundsProgress.transport.completed ? refundsProgress.transport.consulateTransport : true
  );
  const [workplaceTransport, setWorkplaceTransport] = useState<boolean>(
    refundsProgress.transport.completed ? refundsProgress.transport.workplaceTransport : false
  );

  const [consulateAmount, setConsulateAmount] = useState<string>(
    refundsProgress.transport.consulateAmount || '25.00'
  );
  const [consulateCurrency, setConsulateCurrency] = useState<'MXN' | 'USD'>(
    refundsProgress.transport.consulateCurrency || 'MXN'
  );
  const [consulateLostReceipt, setConsulateLostReceipt] = useState<boolean>(false);

  const consulatePhoto = refundsProgress.transport.consulateReceiptPhoto;

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-[#0045ff] text-white shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff]'
      : 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0045ff]';
  };

  const handleOpenPhotoPicker = (subField: 'consulate' | 'workplace') => {
    setRefundCameraTarget({ category: 'transport', subField });
    setShowRefundCameraModal(true);
  };

  const handleRemovePhoto = (subField: 'consulate' | 'workplace') => {
    if (subField === 'consulate') {
      updateRefundsProgress({
        transport: {
          ...refundsProgress.transport,
          consulateReceiptPhoto: undefined,
        },
      });
    } else {
      updateRefundsProgress({
        transport: {
          ...refundsProgress.transport,
          workplaceReceiptPhoto: undefined,
        },
      });
    }
  };

  const handleDone = () => {
    updateRefundsProgress({
      transport: {
        ...refundsProgress.transport,
        completed: true,
        consulateTransport,
        consulateAmount,
        consulateCurrency,
        workplaceTransport,
      },
    });
    markRefundCategoryDone('transport');
    setCurrentTab('refunds_hub');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49172"
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 w-full bg-[#f5f5f5] px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0"
        data-node-id="2308:49173"
      >
        <button
          onClick={() => setCurrentTab('refunds_hub')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center tracking-[-0.064px] flex-1 mx-2">
          {language === 'es' ? 'Reembolsos' : 'Refunds'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-6 w-full flex flex-col gap-6 max-w-[480px] mx-auto">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
            {language === 'es' ? 'Boletos de autobús o transporte' : 'Bus tickets or transport'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Selecciona los gastos en los que incurriste y sube tus recibos. La foto debe ser clara para procesar tu reembolso.'
              : 'Select the expenses you incurred and upload your receipts. The photo must be clear so we can process your refund.'}
          </p>
        </div>

        {/* Question 1: Transportation to consulate */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs"
          data-node-id="2308:49400"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
            {language === 'es'
              ? '¿Pagaste por transporte desde tu hogar a la cita en el consulado?'
              : 'Did you pay for transportation from your home to the appointment at the consulate?'}
          </h3>

          {/* Yes / No Toggle (Matching Final Questions styling) */}
          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => setConsulateTransport(true)}
              className={getOptionButtonClass(consulateTransport === true)}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              type="button"
              onClick={() => setConsulateTransport(false)}
              className={getOptionButtonClass(consulateTransport === false)}
            >
              No
            </button>
          </div>

          {/* Expanded Step 1 & 2 when Yes */}
          {consulateTransport && (
            <div className="flex flex-col gap-5 pt-2 border-t border-[#f0f0f0] animate-fade-in">
              {/* Step 1: Amount and Currency */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-[20px] rounded-full bg-[#0038d0] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#262626]">
                    {language === 'es'
                      ? 'Ingresa el monto y selecciona la moneda que coincide con tu recibo.'
                      : 'Enter the amount and select the currency that matches your receipt.'}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 pl-7">
                  <label className="text-[12px] font-medium text-[#737373]">
                    {language === 'es' ? 'Monto' : 'Amount'}
                  </label>
                  <div className="flex items-center border border-[#e5e5e5] rounded-[12px] px-3 py-2 bg-white gap-2 shadow-2xs">
                    <span className="text-[#171717] font-semibold">$</span>
                    <input
                      type="text"
                      value={consulateAmount}
                      onChange={(e) => setConsulateAmount(e.target.value)}
                      className="flex-1 font-['Inter',sans-serif] text-[15px] font-medium text-[#171717] outline-none"
                      placeholder="0.00"
                    />
                    <select
                      value={consulateCurrency}
                      onChange={(e) => setConsulateCurrency(e.target.value as 'MXN' | 'USD')}
                      className="bg-neutral-100 border border-neutral-200 rounded-[8px] px-2 py-1 text-[13px] font-semibold text-[#171717] outline-none cursor-pointer"
                    >
                      <option value="MXN">MXN</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Upload photo */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-[20px] rounded-full bg-[#0038d0] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#262626]">
                    {language === 'es'
                      ? 'Sube una foto de tu recibo / boleto.'
                      : 'Upload a photo of your receipt/ticket.'}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pl-7">
                  {/* Lost receipts checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consulateLostReceipt}
                      onChange={(e) => setConsulateLostReceipt(e.target.checked)}
                      className="size-[16px] rounded border-neutral-300 text-[#0038d0] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-[13px] text-[#525252] font-medium">
                      {language === 'es' ? 'Perdí los recibos' : 'I lost the receipts'}
                    </span>
                  </label>

                  {/* Blue instructions card */}
                  <div className="bg-[#e7f6ff] border border-[#b0deff] rounded-[12px] p-3 text-left">
                    <div className="flex items-center gap-1.5 text-[#1e3a8a] font-semibold text-[12px] mb-1">
                      <span className="material-symbols-outlined text-[16px]">info</span>
                      <span>{language === 'es' ? 'Instrucciones de captura:' : 'Capture instructions:'}</span>
                    </div>
                    <ul className="text-[12px] text-[#1e3a8a] leading-[18px] list-disc list-inside space-y-0.5">
                      <li>{language === 'es' ? 'Superficie plana.' : 'Flat surface.'}</li>
                      <li>{language === 'es' ? 'Monto final legible.' : 'Final amount legible.'}</li>
                      <li>{language === 'es' ? 'Buena iluminación, sin sombras.' : 'Good lighting, no shadows.'}</li>
                    </ul>
                  </div>

                  {/* Upload button or Uploaded Photo Container (Figma 2308:50203) */}
                  {!consulatePhoto ? (
                    <button
                      type="button"
                      onClick={() => handleOpenPhotoPicker('consulate')}
                      className="w-full h-[48px] bg-white border border-[#e5e5e5] rounded-[12px] flex items-center justify-center gap-2 text-[#171717] hover:bg-neutral-50 active:scale-98 transition-all cursor-pointer shadow-xs"
                    >
                      <span className="size-[24px] rounded-full bg-[#0038d0] text-white flex items-center justify-center text-[16px]">
                        +
                      </span>
                      <span className="font-['Inter',sans-serif] font-medium text-[14px]">
                        {language === 'es' ? 'Tomar o subir foto' : 'Take or upload photo'}
                      </span>
                    </button>
                  ) : (
                    <div
                      className="w-full h-[48px] px-3 bg-[#f0fdf4] border border-[#86efac] rounded-[12px] flex items-center justify-between shadow-xs animate-fade-in"
                      data-node-id="2308:50203"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-[#16a34a]">check_circle</span>
                        <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#166534] truncate max-w-[200px]">
                          {consulatePhoto}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto('consulate')}
                        className="size-[28px] rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center hover:bg-red-200 active:scale-90 transition-all cursor-pointer"
                        title={language === 'es' ? 'Eliminar foto' : 'Delete photo'}
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  )}

                  {/* Add another button */}
                  <div className="w-full flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleOpenPhotoPicker('consulate')}
                      className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-full font-['Inter',sans-serif] font-semibold text-[12px] text-[#404040] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>+</span>
                      <span>{language === 'es' ? 'Agregar otro' : 'Add another'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Question 2: Transportation to workplace in US */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs"
          data-node-id="2308:49410"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
            {language === 'es'
              ? '¿Pagaste por transporte a tu lugar de trabajo en EE. UU.?'
              : 'Did you pay for your transportation to your workplace in the U.S.?'}
          </h3>

          {/* Yes / No Toggle (Matching Final Questions styling) */}
          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => setWorkplaceTransport(true)}
              className={getOptionButtonClass(workplaceTransport === true)}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              type="button"
              onClick={() => setWorkplaceTransport(false)}
              className={getOptionButtonClass(workplaceTransport === false)}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div
        className="sticky bottom-0 z-20 bg-[#fafafa] border-t border-[#e5e5e5] p-4 flex flex-col gap-6 w-full max-w-[480px] mx-auto shrink-0"
        data-node-id="2308:49420"
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
          className="w-full h-[44px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-98 text-white rounded-full font-['Inter',sans-serif] font-semibold text-[15px] transition-all flex items-center justify-center shadow-md cursor-pointer"
        >
          {language === 'es' ? 'Listo' : "I'm done"}
        </button>
      </div>
    </div>
  );
};
