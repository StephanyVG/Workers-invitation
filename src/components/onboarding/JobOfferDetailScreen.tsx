import React from 'react';
import { useApp } from '../../context/AppContext';

export const JobOfferDetailScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, triggerConfetti, addToast, jobs, selectedJobForDetail } = useApp();

  const currentJob = selectedJobForDetail || jobs[0] || {
    id: '1',
    companyName: 'Acme Company, Inc.',
    title: 'Marketing Intern / Trabajador Agrícola',
    payRate: '$16.50 / hr',
    location: 'Lafayette, LA 70504',
    duration: '6 meses (Temporada 2026)'
  };

  const handleAcceptOffer = () => {
    updateWorker({
      appliedJobId: currentJob.id,
      status: 'entrevista'
    });
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Oferta de Trabajo Aceptada!' : 'Job Offer Accepted!',
      language === 'es'
        ? `Aceptaste la oferta de ${currentJob.companyName || 'Acme Company, Inc.'}. Tu proceso ha avanzado.`
        : `You accepted the offer from ${currentJob.companyName || 'Acme Company, Inc.'}. Your application process advanced.`,
      'success'
    );
    setCurrentTab('home');
  };

  const handleDeclineOffer = () => {
    addToast(
      language === 'es' ? 'Oferta Declinada' : 'Offer Declined',
      language === 'es'
        ? 'Puedes revisar otras vacantes disponibles en cualquier momento.'
        : 'You can check other available jobs at any time.',
      'info'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-slide-right relative h-full min-h-0"
      data-node-id="631:28603"
    >
      {/* Top Floating Header & Back Icon Button (631:28678) */}
      <div className="absolute top-4 left-4 z-20" data-node-id="631:28678">
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white/90 backdrop-blur-xs border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-md active:scale-90 transition-all duration-150 cursor-pointer"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
      </div>

      {/* Main Scrollable View Content (631:28605) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col" data-node-id="631:28605">
        {/* Top Job Banner Image (631:28604) - Height 154px */}
        <div className="w-full h-[154px] bg-slate-200 relative shrink-0" data-node-id="631:28604">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80"
            alt="Job Offer Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-xs text-white text-[12px] font-semibold px-2.5 py-1 rounded-md font-['Inter',sans-serif]">
            H-2A 2026
          </span>
        </div>

        {/* Job Content Body */}
        <div className="p-4 space-y-6 text-left font-['Inter',sans-serif]">
          {/* Job Summary Section (631:28606) */}
          <div className="space-y-1.5" data-node-id="631:28606">
            <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717]" data-node-id="631:28608">
              {currentJob.title}
            </h1>
            <p className="font-semibold text-[15px] text-[#0038d0]" data-node-id="631:28609">
              {currentJob.companyName}
            </p>
            <p className="text-[13px] text-[#525252] flex items-center gap-1" data-node-id="631:28610">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{currentJob.location}</span>
            </p>
          </div>

          {/* Divider Line (631:28611) */}
          <div className="border-t border-[#e5e5e5]" data-node-id="631:28611" />

          {/* Job Details Frame (631:28612) */}
          <div className="space-y-6" data-node-id="631:28612">
            {/* Job Info Row 3-Columns (631:28613) */}
            <div className="grid grid-cols-3 gap-2 bg-white border border-[#e5e5e5] rounded-[16px] p-3 shadow-2xs" data-node-id="631:28613">
              <div className="text-center space-y-0.5" data-node-id="631:28614">
                <span className="text-[11px] font-medium text-[#737373] uppercase tracking-wider block" data-node-id="631:28616">
                  {language === 'es' ? 'Período' : 'Period'}
                </span>
                <span className="text-[13px] font-bold text-[#171717] block truncate" data-node-id="631:28617">
                  {currentJob.duration}
                </span>
              </div>

              <div className="text-center space-y-0.5 border-x border-[#f0f0f0] px-1" data-node-id="631:28618">
                <span className="text-[11px] font-medium text-[#737373] uppercase tracking-wider block" data-node-id="631:28620">
                  {language === 'es' ? 'Pago' : 'Pay rate'}
                </span>
                <span className="text-[13px] font-bold text-[#0038d0] block truncate" data-node-id="631:28621">
                  {currentJob.payRate}
                </span>
              </div>

              <div className="text-center space-y-0.5" data-node-id="631:28622">
                <span className="text-[11px] font-medium text-[#737373] uppercase tracking-wider block" data-node-id="631:28624">
                  {language === 'es' ? 'Ubicación' : 'Location'}
                </span>
                <span className="text-[13px] font-bold text-[#171717] block truncate" data-node-id="631:28625">
                  Lafayette, LA
                </span>
              </div>
            </div>

            {/* Job Description Container (631:28626) */}
            <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 space-y-2 shadow-2xs" data-node-id="631:28626">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#171717]" data-node-id="631:28629">
                {language === 'es' ? 'Descripción del trabajo' : 'Job Description'}
              </h3>
              <p className="text-[14px] leading-[20px] text-[#525252]" data-node-id="631:28630">
                {language === 'es'
                  ? 'Operador agrícola para recolección, empaque, inspección de cultivos y mantenimiento de equipos en huerto certificado H-2A.'
                  : 'Agricultural operator for harvesting, packing, crop inspection, and equipment maintenance in certified H-2A orchard.'}
              </p>
            </div>

            {/* Job Requirements Container (631:28631) */}
            <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 space-y-3 shadow-2xs" data-node-id="631:28631">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#171717]" data-node-id="631:28632">
                {language === 'es' ? 'Requisitos del puesto' : 'Job Requirements'}
              </h3>

              <div className="space-y-2.5 text-[13px] text-[#262626]" data-node-id="631:28633">
                <div className="flex items-center justify-between border-b border-[#f5f5f5] pb-2">
                  <span className="text-[#737373]">{language === 'es' ? 'Horas semanales:' : 'Weekly hours:'}</span>
                  <span className="font-semibold text-[#171717]">40 hrs / semana</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#f5f5f5] pb-2">
                  <span className="text-[#737373]">{language === 'es' ? 'Experiencia previa:' : 'Experience needed:'}</span>
                  <span className="font-semibold text-[#171717]">3 meses en agricultura</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#f5f5f5] pb-2">
                  <span className="text-[#737373]">{language === 'es' ? 'Alojamiento incluido:' : 'Housing included:'}</span>
                  <span className="font-semibold text-emerald-600">Sí (Sin costo)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#737373]">{language === 'es' ? 'Transporte reembolsado:' : 'Travel reimbursed:'}</span>
                  <span className="font-semibold text-emerald-600">Sí</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Container (631:28673 / 631:28674) */}
      <div
        className="w-full bg-white border-t border-[#e5e5e5] px-4 pt-3 pb-4 flex flex-col gap-2 shrink-0 shadow-lg z-20"
        data-node-id="631:28673"
      >
        {/* Primary Button: Accept job offer (631:28675) */}
        <button
          onClick={handleAcceptOffer}
          className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="631:28675"
        >
          {language === 'es' ? 'Aceptar oferta de trabajo' : 'Accept job offer'}
        </button>

        {/* Ghost/Secondary Button: Decline job offer (631:28676) */}
        <button
          onClick={handleDeclineOffer}
          className="w-full h-[40px] text-center font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#c7290e] active:scale-95 transition-all duration-150 cursor-pointer flex items-center justify-center rounded-full"
          data-node-id="631:28676"
        >
          {language === 'es' ? 'No quiero esta oferta' : "I don't want this job"}
        </button>
      </div>
    </div>
  );
};
