import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';

interface FinalReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const FinalReviewModal: React.FC<FinalReviewModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const { language, dontShowFinalReviewAgain, setDontShowFinalReviewAgain } = useApp();
  const [localDontShow, setLocalDontShow] = useState(dontShowFinalReviewAgain);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setDontShowFinalReviewAgain(localDontShow);
    onConfirm();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-fade-in"
      onClick={onClose}
      data-node-id="17:31816"
    >
      <div
        className="bg-white rounded-t-[32px] px-6 pt-3 pb-8 flex flex-col items-center gap-5 shadow-2xl w-full max-w-[420px] mx-auto animate-slide-up text-left font-['Inter',sans-serif]"
        onClick={(e) => e.stopPropagation()}
        data-node-id="17:31986"
      >
        {/* Handle */}
        <div className="w-[36px] h-[4px] bg-[#191c1b] rounded-full my-1" />

        {/* Warning Icon Container */}
        <div className="size-[64px] rounded-full bg-[#ffe5a6] flex items-center justify-center text-[#f79009] shrink-0 mt-2">
          <span className="material-symbols-outlined text-[34px] fill-current">
            warning
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-start w-full gap-2 text-left">
          <h3 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#0038d0] tracking-[-0.08px]">
            {language === 'es' ? 'Revisión final' : 'Final Review'}
          </h3>
          <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-[#262626]">
            {language === 'es'
              ? 'Revisa tus respuestas una vez más.'
              : 'Check your answers one more time.'}
          </p>
          <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#262626]">
            {language === 'es'
              ? 'Después de enviar, no podrás cambiar tu información.'
              : 'After you submit, you cannot change your information.'}
          </p>
        </div>

        {/* Checkbox: Don't show it again */}
        <label className="flex items-center gap-2.5 w-full cursor-pointer select-none py-1 group">
          <input
            type="checkbox"
            checked={localDontShow}
            onChange={(e) => setLocalDontShow(e.target.checked)}
            className="size-4 rounded border-[#d0d5dd] text-[#0038d0] focus:ring-[#0038d0] cursor-pointer"
          />
          <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#262626] font-normal">
            {language === 'es' ? 'No volver a mostrar' : "Don't show it again"}
          </span>
        </label>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 w-full pt-2">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.99] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] rounded-[100px] shadow-sm transition-all cursor-pointer flex items-center justify-center"
          >
            {language === 'es' ? 'Confirmar y enviar' : 'Confirm and send'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-[#0038d0] hover:underline font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] transition-colors cursor-pointer flex items-center justify-center"
          >
            {language === 'es' ? 'Revisar de nuevo' : 'Review again'}
          </button>
        </div>
      </div>
    </div>
  );
};
