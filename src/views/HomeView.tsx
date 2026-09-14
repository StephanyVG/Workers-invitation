import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  return (
    <div
      className="flex-1 flex flex-col bg-[#fafafa] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 animate-fade-in relative h-full min-h-0"
      data-node-id="631:28540"
    >
      {/* Fixed Sticky Top Header Row (Figma node 1080:12450 / 631:28541) */}
      <div
        className="sticky top-0 z-30 bg-[#fafafa] w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3.5 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-4"
        data-node-id="1080:12450"
      >
        <div className="flex items-center gap-3">
          {worker.photoUrl ? (
            <img
              src={worker.photoUrl}
              alt={worker.fullName}
              className="size-11 rounded-full object-cover border-2 border-white shadow-sm"
            />
          ) : (
            <div className="size-11 rounded-full bg-[#0038d0] text-white font-bold flex items-center justify-center text-lg shadow-sm">
              {workerFirstName.charAt(0)}
            </div>
          )}
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[20px] text-[#191c1b] tracking-tight">
            {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
          </h1>
        </div>

        {/* Circular Bell Button */}
        <button
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer"
          aria-label="Notificaciones"
        >
          <span className="material-symbols-outlined text-[24px]">notifications</span>
        </button>
      </div>

      {/* Heading Container: "Tus ofertas" + "Mostrando 0 invitaciones" (Figma node 631:28543) */}
      <div className="w-full flex items-baseline justify-between px-1 mb-4" data-node-id="631:28543">
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] text-[#0038d0] tracking-tight">
          {language === 'es' ? 'Tus ofertas' : 'Your offers'}
        </h2>
        <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#525252]">
          {language === 'es' ? 'Mostrando 0 invitaciones' : 'Showing 0 invitations'}
        </span>
      </div>

      {/* Empty State / Invitations Container (Figma node 631:28544) */}
      <div
        className="w-full bg-white rounded-[24px] border border-[#e5e5e5] p-6 flex flex-col items-center justify-center text-center shadow-xs my-auto py-12 space-y-6"
        data-node-id="631:28544"
      >
        {/* Frame 2608322 & Group 8451: BubbleZip Graphic */}
        <div className="relative w-[140px] h-[120px] flex items-center justify-center" data-node-id="631:28546">
          <img
            src="/BubbleZip.svg"
            alt="Zipmi waiting"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Frame 2608328: Headline & Description (Figma Nodes 631:28558 / 631:28559) */}
        <div className="space-y-2 max-w-[296px] text-center" data-node-id="631:28557">
          <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] text-[#171717] leading-[24px]" data-node-id="631:28558">
            {language === 'es' ? 'Esperando ofertas' : 'Waiting for offers'}
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373]" data-node-id="631:28559">
            {language === 'es'
              ? 'Estamos esperando a que las empresas te envíen ofertas. Podrás verlas aquí.'
              : 'We are waiting for companies to send you offers. You will be able to see them here.'}
          </p>
        </div>
      </div>
    </div>
  );
};
