import React from 'react';
import { useApp } from '../../context/AppContext';

interface CongratulationsJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const CongratulationsJobModal: React.FC<CongratulationsJobModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const { language } = useApp();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white flex flex-col justify-between animate-slide-up font-['Inter',sans-serif] text-left h-full w-full overflow-y-auto"
      data-node-id="1082:16918"
    >
      {/* Top Section with Decorative Gradient Background */}
      <div className="w-full flex-1 flex flex-col">
        <div
          className="w-full relative flex flex-col items-center justify-center p-6 pt-12 min-h-[320px]"
          style={{
            background: 'linear-gradient(180deg, rgba(216, 227, 255, 0.7) 0%, rgba(216, 227, 255, 0) 100%)',
          }}
          data-node-id="1082:16919"
        >
          {/* Top Close Circular Button */}
          <div className="absolute top-4 left-4 z-20" data-node-id="1082:16943">
            <button
              onClick={onClose}
              className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label={language === 'es' ? 'Cerrar' : 'Close'}
              data-node-id="1082:16944"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Thumbs Up Graphic Image (thumb.svg) */}
          <div className="relative flex items-center justify-center mt-4">
            <img
              src="/thumb.svg"
              alt={language === 'es' ? '¡Felicidades!' : 'Congratulations!'}
              className="w-[204px] h-[218px] object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Content Body Section */}
        <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-6 text-left" data-node-id="1082:16946">
          <div className="space-y-3" data-node-id="1082:16947">
            <h1
              className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]"
              data-node-id="1082:16948"
            >
              {language === 'es' ? '¡Felicidades, conseguiste el trabajo!' : 'Congratulations, you got the job!'}
            </h1>
            <p
              className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252] tracking-[-0.032px]"
              data-node-id="1082:16950"
            >
              {language === 'es'
                ? 'Terminaste la solicitud. Veamos tus siguientes pasos para la visa.'
                : "You finished the application. Let's see your next steps for the visa."}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Area */}
      <div className="p-6 pt-2 bg-white border-t border-[#f0f0f0] w-full shrink-0">
        <button
          onClick={onConfirm}
          className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="1082:16952"
        >
          {language === 'es' ? 'Enviar solicitud de visa' : 'Submit my visa'}
        </button>
      </div>
    </div>
  );
};
