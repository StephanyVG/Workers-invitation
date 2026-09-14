import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 animate-fade-in relative h-full min-h-0"
      data-node-id="631:28540"
    >
      {/* Fixed Sticky Top Header Row (Figma node 1080:12450 / 631:28541) */}
      <div
        className="sticky top-0 z-30 bg-white w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-6"
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
          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
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

      {/* Empty State Container (Figma Node 631:28543 / 631:28544) */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center my-auto py-8 space-y-6"
        data-node-id="631:28543"
      >
        {/* Frame 631:28546: Placeholder Card & Circles Illustration */}
        <div className="relative w-[140px] h-[120px] flex items-center justify-center" data-node-id="631:28546">
          <div className="w-[98px] h-[66px] bg-white rounded-[8px] border border-slate-200 shadow-sm flex flex-col p-2 justify-between relative z-10">
            <div className="w-full h-[28px] bg-slate-100 rounded flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-slate-300 text-[20px]">image</span>
            </div>
            <div className="space-y-1">
              <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
              <div className="w-1/2 h-1.5 bg-slate-100 rounded-full" />
            </div>
          </div>
          {/* Decorative Neutral Accent Circles */}
          <div className="absolute size-4 bg-slate-200/60 rounded-full top-2 left-3" />
          <div className="absolute size-5 bg-slate-200/80 rounded-full top-4 right-2" />
          <div className="absolute size-3 bg-slate-200/60 rounded-full bottom-3 left-4" />
          <div className="absolute size-4 bg-slate-200/70 rounded-full bottom-2 right-4" />
        </div>

        {/* Frame 631:28557: Headline & Description (Figma Nodes 631:28558 / 631:28559) */}
        <div className="space-y-2 max-w-[296px] text-center" data-node-id="631:28557">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] text-[#171717] leading-[24px]" data-node-id="631:28558">
            {language === 'es' ? 'Todo está listo' : 'Everything is ready'}
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373] text-center" data-node-id="631:28559">
            {language === 'es'
              ? 'Estamos esperando a que las empresas te envíen ofertas. Podrás verlas aquí.'
              : 'We are waiting for companies to send you offers. You will be able to see them here.'}
          </p>
        </div>
      </div>
    </div>
  );
};
