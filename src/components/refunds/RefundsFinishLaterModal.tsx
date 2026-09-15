import React from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsFinishLaterModal: React.FC = () => {
  const {
    language,
    showRefundFinishLaterModal,
    setShowRefundFinishLaterModal,
    setCurrentTab,
  } = useApp();

  if (!showRefundFinishLaterModal) return null;

  const handleClose = () => {
    setShowRefundFinishLaterModal(false);
  };

  const handleFinishLater = () => {
    setShowRefundFinishLaterModal(false);
    setCurrentTab('refunds_hub');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-end justify-center animate-fade-in p-0 select-none"
      data-node-id="2308:50695"
      onClick={handleClose}
    >
      <div
        className="bg-[#fafafa] w-full max-w-[480px] rounded-t-[24px] overflow-hidden flex flex-col items-start relative shadow-2xl animate-slide-up pb-6"
        data-node-id="2308:50723"
        data-name="Decline container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar container */}
        <div
          className="bg-[#fafafa] flex items-center justify-center px-4 py-3 w-full shrink-0"
          data-node-id="2308:50724"
          data-name="Handle container"
        >
          <div
            className="bg-[#191c1b] h-[4px] rounded-[12px] shrink-0 w-[27px]"
            data-node-id="2308:50725"
            data-name="handle"
          />
        </div>

        {/* Decline message container */}
        <div
          className="flex flex-col gap-6 items-start px-4 pt-1 pb-4 w-full"
          data-node-id="2308:50726"
          data-name="Decline message container"
        >
          {/* Decline message wrapper */}
          <div
            className="flex flex-col gap-2 items-start w-full text-left"
            data-node-id="2308:50727"
            data-name="Decline message wrapper"
          >
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]"
              data-node-id="2308:50729"
            >
              {language === 'es' ? 'Guardaremos tus recibos' : 'We’ll save your receipts'}
            </h2>

            <p
              className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]"
              data-node-id="2308:50730"
            >
              <span>
                {language === 'es'
                  ? 'Puedes terminar más tarde, pero recuerda: '
                  : 'You can finish later, but remember: '}
              </span>
              <span className="font-semibold font-['Inter',sans-serif]">
                {language === 'es'
                  ? 'aún no los enviaremos y no recibirás tu reembolso hasta que los hayas subido todos.'
                  : 'we won’t send them yet and you won’t get your refund until you have uploaded all of them.'}
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col gap-3 items-start w-full pt-1"
            data-node-id="2308:50731"
          >
            {/* Finish later (Primary Blue Button) */}
            <button
              type="button"
              onClick={handleFinishLater}
              className="w-full min-h-[44px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-98 text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer"
              data-node-id="2308:50732"
              data-name="Buttons-App"
            >
              {language === 'es' ? 'Terminar más tarde' : 'Finish later'}
            </button>

            {/* Keep adding (Secondary Link Button) */}
            <button
              type="button"
              onClick={handleClose}
              className="w-full h-[44px] flex items-center justify-center rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] hover:bg-neutral-100 active:scale-98 transition-all cursor-pointer"
              data-node-id="2308:50733"
              data-name="Buttons-App"
            >
              {language === 'es' ? 'Seguir agregando' : 'Keep adding'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
