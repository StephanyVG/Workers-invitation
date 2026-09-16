import React from 'react';
import { useApp } from '../../context/AppContext';

export const ConfirmationScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleReturn = () => {
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col items-center justify-between animate-fade-in relative h-full min-h-0 select-none"
      data-node-id="631:28567"
    >
      {/* Header Close Button (631:28601 / 631:28602) */}
      <div className="w-full flex items-center justify-start px-4 pt-4 pb-2 z-20" data-node-id="631:28601">
        <button
          onClick={handleReturn}
          className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          data-node-id="631:28602"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Illustration Section (631:28568) */}
      <div
        className="h-[300px] relative shrink-0 w-full flex items-center justify-center overflow-hidden"
        data-node-id="631:28568"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0.7%, rgba(216, 227, 255, 0) 100%)"
        }}
      >
        <div className="relative w-[180px] h-[190px] flex items-center justify-center">
          <img
            src="/thumb.svg"
            alt="Success Thumbs Up"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>

      {/* Main Content Body (631:28591) */}
      <div className="flex-1 flex flex-col justify-between p-6 w-full text-left" data-node-id="631:28591">
        <div className="space-y-4" data-node-id="631:28592">
          {/* Headline (631:28593) */}
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]"
            data-node-id="631:28593"
          >
            {language === 'es' ? '¡Todo listo!' : 'All set!'}
          </h1>

          {/* Messages (631:28594) */}
          <div className="space-y-3 text-[16px] leading-[22px] text-[#0a0a0a]" data-node-id="631:28594">
            <p className="font-['Inter',sans-serif] font-normal tracking-[-0.032px]" data-node-id="631:28595">
              {language === 'es'
                ? 'La empresa se pondrá en contacto contigo pronto para agendar tu entrevista de trabajo.'
                : 'The company will contact you soon to schedule your job interview.'}
            </p>
            <p className="font-['Inter',sans-serif] font-semibold" data-node-id="631:28596">
              {language === 'es' ? '¡Mantente al pendiente de las notificaciones!' : 'Stay tuned for notifications!'}
            </p>
          </div>
        </div>

        {/* Primary Action Button (631:28597) */}
        <div className="pt-6 pb-2 w-full">
          <button
            onClick={handleReturn}
            className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] active:scale-[0.98] text-white font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center rounded-full shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
            data-node-id="631:28597"
          >
            {language === 'es' ? 'Regresar a mis invitaciones de trabajo' : 'Return to my job invitations'}
          </button>
        </div>
      </div>
    </div>
  );
};
