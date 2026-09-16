import React from 'react';
import { useApp } from '../../context/AppContext';

export const JobInvitationAcceptedConfirmationScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleReturnToHome = () => {
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar relative h-full min-h-0 select-none font-['Inter',sans-serif] text-left animate-fade-in"
      data-node-id="631:28567"
      data-name="Confirmation"
    >
      {/* Top Header & Illustration Frame (Figma node 631:28568 - Height 321px) */}
      <div
        className="h-[321px] relative shrink-0 w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(180.72deg, rgba(216, 227, 255, 0.5) 0.7%, rgba(216, 227, 255, 0) 123.9%)',
        }}
        data-node-id="631:28568"
        data-name="Illustration"
      >
        {/* Top Left Close 'X' Button (Figma node 631:28602) */}
        <button
          onClick={handleReturnToHome}
          className="absolute top-4 left-4 z-20 bg-[#fafafa]/90 hover:bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] active:scale-95 transition-all cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          data-node-id="631:28602"
        >
          <span className="material-symbols-outlined text-[20px] text-[#171717]">close</span>
        </button>

        {/* Central Graphic: thumb.svg (Figma node 631:28570) */}
        <div className="relative w-[180px] h-[190px] flex items-center justify-center my-auto">
          <img
            src="/thumb.svg"
            alt="All set illustration"
            className="w-full h-full object-contain select-none"
            data-node-id="631:28570"
          />
        </div>
      </div>

      {/* Main Content Area (Figma node 631:28591) */}
      <div
        className="flex-1 flex flex-col justify-between gap-[24px] px-[16px] py-[32px] w-full"
        data-node-id="631:28591"
        data-name="Container"
      >
        {/* Title and message texts (Figma node 631:28592) */}
        <div className="flex flex-col gap-[16px] items-start w-full text-left" data-node-id="631:28592">
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]"
            data-node-id="631:28593"
          >
            {language === 'es' ? '¡Todo listo!' : 'All set!'}
          </h1>

          <div className="flex flex-col gap-[12px] text-[16px] leading-[22px] text-[#0a0a0a]" data-node-id="631:28594">
            <p className="font-normal tracking-[-0.032px]" data-node-id="631:28595">
              {language === 'es'
                ? 'La empresa se pondrá en contacto contigo pronto para agendar tu entrevista de trabajo.'
                : 'The company will contact you soon to schedule your job interview.'}
            </p>
            <p className="font-semibold" data-node-id="631:28596">
              {language === 'es' ? '¡Mantente al tanto de las notificaciones!' : 'Stay tuned for notifications!'}
            </p>
          </div>
        </div>

        {/* Primary Button: Return to my job invitations (Figma node 631:28597) */}
        <button
          onClick={handleReturnToHome}
          className="w-full min-h-[44px] px-[16px] py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] text-[#f5f5f5] rounded-[100px] font-semibold text-[16px] leading-[22px] text-center transition-all cursor-pointer flex items-center justify-center"
          data-node-id="631:28597"
        >
          {language === 'es' ? 'Volver a mis invitaciones de trabajo' : 'Return to my job invitations'}
        </button>
      </div>

      {/* Bottom Gesture Navigation Handle (Figma node 631:28599) */}
      <div className="h-[24px] w-full flex items-center justify-center pb-2 shrink-0" data-node-id="631:28599">
        <div className="w-[108px] h-[4px] bg-[#191c1b] rounded-[12px]" />
      </div>
    </div>
  );
};
