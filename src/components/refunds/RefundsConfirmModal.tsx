import React from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsConfirmModal: React.FC = () => {
  const {
    language,
    showRefundConfirmModal,
    setShowRefundConfirmModal,
    submitAllRefunds,
    setCurrentTab,
  } = useApp();

  if (!showRefundConfirmModal) return null;

  const handleClose = () => {
    setShowRefundConfirmModal(false);
  };

  const handleConfirm = () => {
    submitAllRefunds();
    setShowRefundConfirmModal(false);
    setCurrentTab('refunds_success');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-end justify-center animate-fade-in p-0 select-none"
      data-node-id="2308:50949"
      onClick={handleClose}
    >
      <div
        className="bg-[#fafafa] w-full max-w-[480px] rounded-t-[24px] overflow-hidden flex flex-col items-center relative shadow-2xl animate-slide-up pb-6"
        data-node-id="2308:50977"
        data-name="Decline container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar container */}
        <div
          className="bg-[#fafafa] flex items-center justify-center px-4 py-3 w-full shrink-0"
          data-node-id="2308:50978"
          data-name="Handle container"
        >
          <div
            className="bg-[#191c1b] h-[4px] rounded-[12px] shrink-0 w-[27px]"
            data-node-id="2308:50979"
            data-name="handle"
          />
        </div>

        {/* Decline message container */}
        <div
          className="flex flex-col gap-6 items-center justify-center px-4 pt-2 pb-4 w-full text-center"
          data-node-id="2308:50980"
          data-name="Decline message container"
        >
          {/* Warning Icon Container */}
          <div
            className="size-[56px] rounded-full bg-[#ffea9f] flex items-center justify-center shrink-0 shadow-xs"
            data-node-id="2308:50981"
            data-name="Container"
          >
            <svg
              className="w-[28px] h-[28px] text-[#e67e00]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          </div>

          {/* Decline message wrapper */}
          <div
            className="flex flex-col gap-2 items-start w-full text-left"
            data-node-id="2308:50986"
            data-name="Decline message wrapper"
          >
            <div className="w-full text-left" data-node-id="2308:50987">
              <h2
                className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]"
                data-node-id="2308:50988"
              >
                {language === 'es'
                  ? 'Confirmar solicitud de reembolso'
                  : 'Confirm reimbursement request'}
              </h2>
            </div>

            <p
              className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] w-full"
              data-node-id="2308:50989"
            >
              <span>
                {language === 'es'
                  ? 'Estás a punto de solicitar tu reembolso. Una vez enviado, '
                  : 'You are about to request your reimbursement. Once sent, '}
              </span>
              <span className="font-semibold font-['Inter',sans-serif]">
                {language === 'es'
                  ? 'no podrás agregar más recibos ni editar esta información.'
                  : "you won't be able to add more receipts or edit this information."}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col gap-3 items-start w-full pt-1"
            data-node-id="2308:50990"
          >
            {/* Primary Confirm and send Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full min-h-[44px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-98 text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer"
              data-node-id="2308:50991"
              data-name="Buttons-App"
            >
              {language === 'es' ? 'Confirmar y enviar' : 'Confirm and send'}
            </button>

            {/* Secondary Go back Button */}
            <button
              type="button"
              onClick={handleClose}
              className="w-full h-[44px] flex items-center justify-center rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] hover:bg-neutral-100 active:scale-98 transition-all cursor-pointer"
              data-node-id="2308:50992"
              data-name="Buttons-App"
            >
              {language === 'es' ? 'Regresar' : 'Go back'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
