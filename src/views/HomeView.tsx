import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, jobs, language, setCurrentTab, setSelectedJobForDetail } = useApp();

  const mainJob = jobs[0]; // Huertos Scot Marks & Co. / Sunnydale Orchards Farm
  const secondJob = jobs[1]; // Agro Fincas Gutters Landscaping

  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  return (
    <div
      className="flex-1 flex flex-col bg-[#fafafa] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 space-y-5 animate-fade-in relative"
      data-node-id="631:28540"
    >
      {/* Fixed Sticky Top Header Row (Figma node 1997:39858) */}
      <div
        className="sticky top-0 z-30 bg-[#fafafa] w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3.5 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-2"
        data-node-id="1997:39858"
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

      {/* Heading Container: "Your offers" + "Showing 2 invitations" (Figma node 1997:39860) */}
      <div className="w-full flex items-baseline justify-between px-1" data-node-id="1997:39860">
        <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] text-[#0038d0] tracking-tight" data-node-id="1997:39861">
          {language === 'es' ? 'Tus ofertas' : 'Your offers'}
        </h2>
        <span className="font-['Inter',sans-serif] font-normal text-[13px] text-[#525252]" data-node-id="1997:39862">
          {language === 'es' ? 'Mostrando 2 invitaciones' : 'Showing 2 invitations'}
        </span>
      </div>

      {/* Job Card 1 - Main Offer (Figma node 1997:39863) */}
      <div className="w-full shadow-sm rounded-[20px] overflow-hidden border border-[#e5e5e5] bg-white transition-all" data-node-id="1997:39863">
        {/* Top Header Pill - Green Banner */}
        <div className="bg-[#0e8a37] py-2 px-4 text-center" data-node-id="1997:39864">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[14px] text-white tracking-wide uppercase" data-node-id="1997:39865">
            {language === 'es' ? '¡Tienes una oferta!' : 'You have an offer!'}
          </span>
        </div>

        {/* Card Content Area */}
        <div className="p-4 space-y-4" data-node-id="1997:39866">
          {/* Job Preview Banner Image */}
          <div className="w-full h-[110px] rounded-[14px] overflow-hidden bg-slate-100 relative" data-node-id="1997:39867">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&auto=format&fit=crop&q=80"
              alt="Orchard Farm"
              className="w-full h-full object-cover"
              data-node-id="1997:39868"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md font-['Inter',sans-serif]">
              H-2A 2026
            </span>
          </div>

          {/* Job Title & Employer */}
          <div className="space-y-1" data-node-id="1997:39870">
            <h3 className="font-['DM_Sans',sans-serif] font-bold text-[17px] text-[#171717] leading-[22px]" data-node-id="1997:39872">
              {mainJob.title}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[#737373]" data-node-id="1997:39874">
              {mainJob.companyName}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-[#f0f0f0]" data-node-id="1997:39875"></div>

          {/* 3 Column Info Section */}
          <div className="grid grid-cols-3 gap-2 font-['Inter',sans-serif]" data-node-id="1997:39876">
            <div data-node-id="1997:39877">
              <span className="text-[11px] font-medium text-[#737373] block" data-node-id="1997:39879">
                {language === 'es' ? 'Período' : 'Period'}
              </span>
              <span className="text-[13px] font-semibold text-[#171717] block truncate" data-node-id="1997:39880">
                {mainJob.duration}
              </span>
            </div>

            <div data-node-id="1997:39881">
              <span className="text-[11px] font-medium text-[#737373] block" data-node-id="1997:39883">
                {language === 'es' ? 'Pago' : 'Pay rate'}
              </span>
              <span className="text-[13px] font-semibold text-[#0038d0] block truncate" data-node-id="1997:39884">
                {mainJob.payRate}
              </span>
            </div>

            <div data-node-id="1997:39885">
              <span className="text-[11px] font-medium text-[#737373] block" data-node-id="1997:39887">
                {language === 'es' ? 'Ubicación' : 'City, State'}
              </span>
              <span className="text-[13px] font-semibold text-[#171717] block truncate" data-node-id="1997:39888">
                {mainJob.location}
              </span>
            </div>
          </div>

          {/* Received Timestamp */}
          <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#737373]" data-node-id="1997:39889">
            {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              setSelectedJobForDetail(mainJob);
              setCurrentTab('job_offer_detail');
            }}
            className="w-full min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-center shadow-sm active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            data-node-id="1997:39890"
          >
            <span>{language === 'es' ? 'Ver contrato completo' : 'View full contract'}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Job Card 2 - Second Invitation (Figma node 1997:39891) */}
      <div className="w-full shadow-sm rounded-[20px] overflow-hidden border border-[#e5e5e5] bg-white transition-all mb-6" data-node-id="1997:39891">
        {/* Top Header Pill - Amber Banner */}
        <div className="bg-[#fbbf24] py-2 px-4 text-center" data-node-id="1997:39893">
          <span className="font-['DM_Sans',sans-serif] font-bold text-[14px] text-[#78350f] tracking-wide uppercase" data-node-id="1997:39894">
            {language === 'es' ? '¡Mira esta nueva oferta!' : 'See this new offer!'}
          </span>
        </div>

        {/* Card Content Area */}
        <div className="p-4 space-y-4" data-node-id="1997:39895">
          {/* Job Banner Image */}
          <div className="w-full h-[100px] rounded-[14px] overflow-hidden bg-slate-100 relative" data-node-id="1997:39896">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80"
              alt="Berry Farm"
              className="w-full h-full object-cover"
              data-node-id="1997:39897"
            />
          </div>

          {/* Job Title & Employer */}
          <div className="space-y-1" data-node-id="1997:39898">
            <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#171717] leading-[22px]" data-node-id="1997:39900">
              {secondJob ? secondJob.title : 'Cuidado y Empaque de Berries'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[#737373]" data-node-id="1997:39903">
              {secondJob ? secondJob.companyName : 'Agro Fincas Gutters Landscaping'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#737373] pt-1" data-node-id="1997:39904">
              {language === 'es' ? 'Recibido hace 3 días' : 'Received 3 days ago'}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              if (secondJob) setSelectedJobForDetail(secondJob);
              setCurrentTab('job_offer_detail');
            }}
            className="w-full min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-center shadow-sm active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            data-node-id="1997:39905"
          >
            <span>{language === 'es' ? 'Ver contrato completo' : 'View full contract'}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
