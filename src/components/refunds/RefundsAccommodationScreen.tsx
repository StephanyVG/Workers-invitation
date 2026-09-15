import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsAccommodationScreen: React.FC = () => {
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

  const [amount, setAmount] = useState<string>(refundsProgress.hotel.amount || '0.00');
  const [currency, setCurrency] = useState<'MXN' | 'USD'>(refundsProgress.hotel.currency || 'USD');
  const [nights, setNights] = useState<number>(refundsProgress.hotel.nights || 1);
  const [people, setPeople] = useState<number>(refundsProgress.hotel.people || 1);
  const [lostReceipt, setLostReceipt] = useState<boolean>(false);

  const receiptPhoto = refundsProgress.hotel.receiptPhoto;

  const handleOpenPhotoPicker = () => {
    setRefundCameraTarget({ category: 'hotel' });
    setShowRefundCameraModal(true);
  };

  const handleRemovePhoto = () => {
    updateRefundsProgress({
      hotel: {
        ...refundsProgress.hotel,
        receiptPhoto: undefined,
      },
    });
  };

  const handleDone = () => {
    updateRefundsProgress({
      hotel: {
        ...refundsProgress.hotel,
        completed: true,
        amount,
        currency,
        nights,
        people,
      },
    });
    markRefundCategoryDone('hotel');
    setCurrentTab('refunds_hub');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49604"
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 w-full bg-[#f5f5f5] px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0"
        data-node-id="2308:49605"
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
            {language === 'es' ? 'Alojamiento' : 'Accommodation'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#404040]">
            {language === 'es'
              ? 'Agrega los gastos en los que incurriste y sube tus recibos. La foto debe ser clara para procesar tu reembolso.'
              : 'Add the expenses you incurred and upload your receipts. The photo must be clear so we can process your refund.'}
          </p>
        </div>

        {/* Accommodation Form Card */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-5 flex flex-col gap-5 shadow-2xs">
          {/* Step 1: Amount, Currency, Nights, People */}
          <div className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-3 pl-7">
              {/* Amount input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#737373]">
                  {language === 'es' ? 'Monto' : 'Amount'}
                </label>
                <div className="flex items-center border border-[#e5e5e5] rounded-[12px] px-3 py-2 bg-white gap-2 shadow-2xs">
                  <span className="text-[#171717] font-semibold">$</span>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 font-['Inter',sans-serif] text-[15px] font-medium text-[#171717] outline-none"
                    placeholder="0.00"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as 'MXN' | 'USD')}
                    className="bg-neutral-100 border border-neutral-200 rounded-[8px] px-2 py-1 text-[13px] font-semibold text-[#171717] outline-none cursor-pointer"
                  >
                    <option value="USD">USD</option>
                    <option value="MXN">MXN</option>
                  </select>
                </div>
              </div>

              {/* Nights of accommodation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#737373]">
                  {language === 'es' ? 'Noches de alojamiento' : 'Nights of accommodation'}
                </label>
                <input
                  type="number"
                  min="1"
                  value={nights}
                  onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full border border-[#e5e5e5] rounded-[12px] px-3 py-2 bg-white font-['Inter',sans-serif] text-[15px] font-medium text-[#171717] outline-none shadow-2xs"
                />
              </div>

              {/* People in the room */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#737373]">
                  {language === 'es' ? 'Personas en la habitación' : 'People in the room'}
                </label>
                <input
                  type="number"
                  min="1"
                  value={people}
                  onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full border border-[#e5e5e5] rounded-[12px] px-3 py-2 bg-white font-['Inter',sans-serif] text-[15px] font-medium text-[#171717] outline-none shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Upload photo */}
          <div className="flex flex-col gap-3 pt-3 border-t border-[#f0f0f0]">
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
                  checked={lostReceipt}
                  onChange={(e) => setLostReceipt(e.target.checked)}
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

              {/* Photo Upload Container */}
              {!receiptPhoto ? (
                <button
                  type="button"
                  onClick={handleOpenPhotoPicker}
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
                <div className="w-full h-[48px] px-3 bg-[#f0fdf4] border border-[#86efac] rounded-[12px] flex items-center justify-between shadow-xs animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#16a34a]">check_circle</span>
                    <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#166534] truncate max-w-[200px]">
                      {receiptPhoto}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="size-[28px] rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center hover:bg-red-200 active:scale-90 transition-all cursor-pointer"
                    title={language === 'es' ? 'Eliminar foto' : 'Delete photo'}
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div
        className="sticky bottom-0 z-20 bg-[#fafafa] border-t border-[#e5e5e5] p-4 flex flex-col gap-6 w-full max-w-[480px] mx-auto shrink-0"
        data-node-id="2308:49610"
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
