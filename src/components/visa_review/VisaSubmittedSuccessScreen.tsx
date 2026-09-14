import React from 'react';
import { useApp } from '../../context/AppContext';

export const VisaSubmittedSuccessScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, triggerPushBanner } = useApp();

  const handleComplete = () => {
    updateWorker({
      status: 'solicitud_visa'
    });
    triggerPushBanner({
      id: 'ds160_submitted',
      title: language === 'es' ? 'Tu DS-160 ha sido enviado' : 'Your DS-160 has been submitted',
      description: language === 'es'
        ? 'Puedes ver los detalles de tu DS-160 en “Solicitar Visa de Trabajo de EE. UU.”'
        : 'You can view the details of your DS-160 in the “Apply for US Work Visa”',
      time: language === 'es' ? 'Hace 2 h' : '2 hrs ago',
      targetTab: 'documents',
    });
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:35550"
    >
      {/* Top Section with Illustration and Gradient */}
      <div className="w-full flex-1 flex flex-col">
        <div
          className="w-full relative flex flex-col items-center justify-center p-6 pt-10 min-h-[303px]"
          style={{
            backgroundImage:
              'linear-gradient(180.68deg, rgba(216, 227, 255, 0.5) 0.7%, rgba(216, 227, 255, 0) 123.9%)'
          }}
          data-node-id="508:35551"
        >
          {/* Top Close Circular Button */}
          <div className="absolute top-4 left-4 z-20" data-node-id="508:35569">
            <button
              onClick={handleComplete}
              className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer"
              aria-label={language === 'es' ? 'Cerrar' : 'Close'}
              data-node-id="508:35570"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Thumbs Up Graphic (thumb.svg) */}
          <div className="relative flex flex-col items-center justify-center mt-2" data-node-id="508:35553">
            <img
              src="/thumb.svg"
              alt="Success Thumbs Up"
              className="w-[180px] h-[190px] object-contain drop-shadow-sm"
            />
            {/* Shadow Ellipse under hand */}
            <div className="w-[126px] h-[9px] bg-[#dbe8ff] rounded-full filter blur-[2px] mt-[-6px] opacity-80" />
          </div>
        </div>

        {/* Content Body Container */}
        <div className="p-6 flex flex-col gap-4 text-left" data-node-id="508:35573">
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
            data-node-id="508:35575"
          >
            {language === 'es'
              ? '¡Gracias! Ahora enviaremos tu solicitud de Visa de Trabajo de EE. UU. (DS-160)'
              : 'Thank you! We will now submit your US Work Visa (DS-160) application'}
          </h1>

          <p
            className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
            data-node-id="508:35577"
          >
            {language === 'es'
              ? 'El empleador ha sido notificado. Te informaremos sobre los siguientes pasos.'
              : 'The employer has been notified. We will inform you about the next steps.'}
          </p>
        </div>
      </div>

      {/* Bottom Sticky Action Button */}
      <div className="p-6 bg-[#f5f5f5] w-full shrink-0 flex flex-col items-center">
        <button
          onClick={handleComplete}
          className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-sm transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="508:35579"
        >
          {language === 'es' ? 'Entendido' : 'Got it'}
        </button>
      </div>
    </div>
  );
};
