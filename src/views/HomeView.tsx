import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, jobs, language, setCurrentTab, setSelectedJobForDetail } = useApp();

  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';
  const hasAcceptedOffer = worker.status === 'entrevista' || worker.appliedJobId;

  return (
    <div
      className="flex-1 flex flex-col bg-[#fafafa] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 space-y-5 animate-fade-in relative h-full min-h-0"
      data-node-id="631:28540"
    >
      {/* Fixed Sticky Top Header Row (Figma node 631:28541 / 1080:12450) */}
      <div
        className="sticky top-0 z-30 bg-[#fafafa] w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3.5 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-2"
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

      {/* Heading Container: "Tus ofertas" + "Mostrando invitaciones" (Figma node 631:28543) */}
      <div className="w-full flex items-baseline justify-between px-1" data-node-id="631:28543">
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] text-[#0038d0] tracking-tight">
          {language === 'es' ? 'Tus ofertas' : 'Your offers'}
        </h2>
        <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#525252]">
          {hasAcceptedOffer
            ? (language === 'es' ? 'Mostrando 1 oferta activa' : 'Showing 1 active offer')
            : (language === 'es' ? 'Mostrando 0 invitaciones' : 'Showing 0 invitations')}
        </span>
      </div>

      {/* Figma Node 631:28544 - Invitations Container (Empty / Waiting State as per Figma Node 631:28540) */}
      {!hasAcceptedOffer ? (
        <div
          className="w-full bg-white rounded-[24px] border border-[#e5e5e5] p-6 flex flex-col items-center justify-center text-center shadow-xs my-auto py-10 space-y-4"
          data-node-id="631:28544"
        >
          {/* Group 8451 & Decorative Graphic Elements */}
          <div className="relative w-[180px] h-[140px] flex items-center justify-center mb-2" data-node-id="631:28546">
            <img
              src="/BubbleZip.svg"
              alt="Zipmi waiting"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Headline & Description (Figma Nodes 631:28558 / 631:28559) */}
          <div className="space-y-2 max-w-[280px]" data-node-id="631:28557">
            <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] text-[#171717] leading-[24px]" data-node-id="631:28558">
              {language === 'es' ? 'Esperando ofertas' : 'Waiting for offers'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#737373]" data-node-id="631:28559">
              {language === 'es'
                ? 'Estamos esperando a que las empresas te envíen ofertas. Podrás verlas aquí.'
                : 'We are waiting for companies to send you offers. You will be able to see them here.'}
            </p>
          </div>
        </div>
      ) : (
        /* Accepted Offer Card View */
        <div className="w-full shadow-sm rounded-[20px] overflow-hidden border border-[#e5e5e5] bg-white transition-all">
          <div className="bg-[#0e8a37] py-2 px-4 text-center">
            <span className="font-['DM_Sans',sans-serif] font-bold text-[14px] text-white tracking-wide uppercase">
              {language === 'es' ? '¡Oferta en proceso!' : 'Offer in progress!'}
            </span>
          </div>
          <div className="p-4 space-y-4">
            <div className="w-full h-[110px] rounded-[14px] overflow-hidden bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&auto=format&fit=crop&q=80"
                alt="Orchard Farm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[17px] text-[#171717] leading-[22px]">
                {jobs[0]?.title || 'Marketing Intern / Trabajador Agrícola'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[#737373]">
                {jobs[0]?.companyName || 'Acme Company, Inc.'}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedJobForDetail(jobs[0]);
                setCurrentTab('job_offer_detail');
              }}
              className="w-full min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-center shadow-sm active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'es' ? 'Ver contrato completo' : 'View full contract'}</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
