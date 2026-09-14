import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language, setCurrentTab } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  const hasInvitations = worker.status === 'entrevista' || worker.appliedJobId === '1' || worker.appliedJobId === 'job-1';

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 animate-fade-in relative h-full min-h-0"
      data-node-id={hasInvitations ? "631:28431" : "631:28540"}
    >
      {/* Fixed Sticky Top Header Row (Figma node 1080:12450 / 631:28433) */}
      <div
        className="sticky top-0 z-30 bg-white w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-6"
        data-node-id="631:28433"
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

      {hasInvitations ? (
        /* Job Invitations View (Figma Node 631:28431) */
        <div className="flex-1 flex flex-col space-y-4" data-node-id="631:28434">
          {/* Heading Container (1399:28994) */}
          <div className="flex items-center justify-between w-full" data-node-id="1399:28994">
            <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]" data-node-id="1399:28995">
              {language === 'es' ? 'Invitaciones de trabajo' : 'Job Invitations'}
            </h2>
            <span className="font-['Inter',sans-serif] font-normal text-[12px] text-[#404040] tracking-[-0.048px]" data-node-id="1399:28996">
              {language === 'es' ? 'Mostrando 2 invitaciones' : 'Showing 2 invitations'}
            </span>
          </div>

          {/* Invitations Container (631:28438) */}
          <div className="space-y-6 w-full" data-node-id="631:28438">
            {/* Card 1: Interview Pending (631:28439) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="631:28439"
            >
              {/* Header Badge */}
              <div className="bg-[#d4d4d4] py-2 px-4 text-center" data-node-id="631:28440">
                <span className="font-semibold text-[16px] leading-[22px] text-[#404040]" data-node-id="631:28441">
                  {language === 'es' ? 'Entrevista pendiente' : 'Interview Pending'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4" data-node-id="631:28442">
                {/* Job Banner Image */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative" data-node-id="631:28444">
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80"
                    alt="Sunnydale Orchards farm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Job Title & Farm */}
                <div className="space-y-1" data-node-id="631:28445">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]" data-node-id="631:28448">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <p className="font-normal text-[14px] leading-[18px] text-[#525252]" data-node-id="631:28450">
                    {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#e5e5e5]" data-node-id="631:28451" />

                {/* 3 Columns Job Summary */}
                <div className="flex items-start justify-between text-left" data-node-id="631:28452">
                  <div className="flex-1 space-y-1" data-node-id="631:28453">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="631:28455">
                      {language === 'es' ? 'Período' : 'Period'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="631:28456">
                      {language === 'es' ? '3 Meses' : '3 Months'}
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-center" data-node-id="631:28457">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="631:28459">
                      {language === 'es' ? 'Tarifa pago' : 'Pay rate'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="631:28460">
                      12 USD
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-right" data-node-id="631:28461">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="631:28463">
                      {language === 'es' ? 'Ciudad, Estado' : 'City, State'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="631:28464">
                      {language === 'es' ? 'Ciudad, Estado' : 'Texas'}
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[12px] text-[#737373]" data-node-id="631:28465">
                  {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                </p>
              </div>
            </div>

            {/* Card 2: New Job Invitation (631:28467) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="631:28467"
            >
              {/* Header Badge */}
              <div className="bg-[#ffd16e] py-2 px-4 text-center" data-node-id="631:28468">
                <span className="font-semibold text-[16px] leading-[22px] text-[#813d0d]" data-node-id="631:28469">
                  {language === 'es' ? '¡Nueva invitación de trabajo!' : 'New job invitation!'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4" data-node-id="631:28470">
                {/* Job Banner Image */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative" data-node-id="631:28472">
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80"
                    alt="Sunnydale Orchards farm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Job Title & Farm */}
                <div className="space-y-2" data-node-id="631:28473">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]" data-node-id="631:28475">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <div className="space-y-1">
                    <p className="font-medium text-[14px] leading-[18px] text-[#171717]" data-node-id="631:28478">
                      {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                    </p>
                    <p className="font-normal text-[12px] text-[#737373]" data-node-id="631:28479">
                      {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                    </p>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={() => setCurrentTab('job_offer_detail')}
                  className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                  data-node-id="631:28480"
                >
                  {language === 'es' ? 'Ver trabajo' : 'View Job'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State Container (Figma Node 631:28543 / 631:28544) */
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
      )}
    </div>
  );
};
