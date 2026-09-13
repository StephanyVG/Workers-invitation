import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface VisaPathBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const VisaPathBottomSheet: React.FC<VisaPathBottomSheetProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const { language } = useApp();
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(isOpen);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDismiss = () => {
    setIsActive(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex flex-col justify-end transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      data-node-id="3:64189"
    >
      {/* Bottom Sheet Container with Move-In / Move-Out Slide Animation */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#fafafa] rounded-t-[24px] px-[24px] py-[32px] flex flex-col gap-6 w-full max-w-lg mx-auto shadow-2xl relative transition-transform duration-300 ease-out transform ${
          isActive ? 'translate-y-0' : 'translate-y-full'
        }`}
        data-node-id="3:64190"
      >
        {/* Top Handle Bar */}
        <div className="w-full flex items-center justify-center -mt-2 mb-1" data-node-id="3:64192">
          <div className="bg-[#191c1b] h-[4px] w-[32px] rounded-[12px] opacity-40" data-node-id="3:64193" />
        </div>

        {/* Header Title */}
        <div className="w-full" data-node-id="3:64196">
          <h3
            className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-snug text-[#171717] tracking-[-0.16px]"
            data-node-id="3:64197"
          >
            {language === 'es' ? '¡Importante! El camino hacia tu visa' : 'Important! A path to your visa'}
          </h3>
        </div>

        {/* Informational Text Points */}
        <div className="flex flex-col gap-3 w-full text-[#262626] font-['DM_Sans',sans-serif] text-[14px] leading-[18px]" data-node-id="3:64198">
          <p className="font-medium text-[#171717]" data-node-id="3:64203">
            {language === 'es'
              ? 'Para proteger tu oportunidad de trabajar en EE.UU., es crucial saber esto:'
              : 'To protect your opportunity to work in the U.S., it is crucial to know this:'}
          </p>

          <p className="font-normal text-[#262626]" data-node-id="3:64206">
            {language === 'es'
              ? 'El consulado de EE.UU. solo permite que una persona solicite la visa con un empleador a la vez.'
              : 'The U.S. consulate only allows one person to apply for the visa with an employer at a time.'}
          </p>

          <p className="font-normal text-[#262626]" data-node-id="3:64207">
            {language === 'es'
              ? 'Si te postulas con múltiples reclutadores o empresas simultáneamente, el consulado puede detectar solicitudes duplicadas y denegar todas tus visas.'
              : 'If you apply with multiple recruiters or companies simultaneously, the consulate may detect duplicate applications and deny all your visas.'}
          </p>
        </div>

        {/* Checkbox Agreement (Filled blue background when checked) */}
        <div
          onClick={() => setIsAgreed(!isAgreed)}
          className="flex items-start gap-3 w-full cursor-pointer group pt-1"
          data-node-id="3:64208"
        >
          <div
            className={`size-[20px] rounded-[4px] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150 ${
              isAgreed
                ? 'bg-[#0038d0] border border-[#0038d0] text-white shadow-sm scale-105'
                : 'bg-[#f5f5f5] border border-[#d4d4d4] group-hover:border-[#0038d0]'
            }`}
            data-node-id="1:69564"
          >
            {isAgreed && (
              <span className="material-symbols-outlined text-[16px] font-bold leading-none select-none">
                check
              </span>
            )}
          </div>

          <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] select-none" data-node-id="3:64210">
            {language === 'es'
              ? 'Entiendo y me comprometo a postularme solo con un empleador'
              : 'I understand and agree to apply only with one employer'}
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full pt-2" data-node-id="3:64211">
          <button
            onClick={() => {
              if (isAgreed) onConfirm();
            }}
            disabled={!isAgreed}
            className={`w-full min-h-[44px] px-4 py-[10px] rounded-full font-['Inter',sans-serif] font-semibold text-base leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 ${
              isAgreed
                ? 'bg-[#0038d0] text-[#f5f5f5] cursor-pointer active:scale-[0.98]'
                : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed opacity-80'
            }`}
          >
            {language === 'es' ? 'Continuar' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};
