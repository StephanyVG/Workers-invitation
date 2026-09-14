import React from 'react';
import { useApp } from '../../context/AppContext';

export const JobOfferDetailScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, triggerConfetti, addToast, jobs } = useApp();

  const currentJob = jobs[0] || {
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
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-slide-right relative"
      data-node-id="631:28603"
    >
      {/* Header Bar (Figma node 2003:40005) */}
      <div
        className="w-full bg-[#fafafa] flex items-center justify-between px-[16px] py-[12px] sticky top-0 z-20"
        data-node-id="2003:40005"
      >
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1
          className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center"
          data-node-id="I2003:40005;3490:907"
        >
          {language === 'es' ? 'Oferta de trabajo' : 'Job Offer'}
        </h1>
        <div className="size-[44px]"></div>
      </div>

      {/* Document View Area (Figma node 2003:40006) - Scrollable PDF/Paper Document Preview */}
      <div
        className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[12px] flex flex-col items-center gap-[16px]"
        data-node-id="2003:40006"
      >
        {/* Paper Document Sheet (Figma nodes 2003:40007 / 2003:40008) */}
        <div
          className="w-full bg-white rounded-[12px] shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] border border-[#e5e5e5] p-6 text-left font-['Inter',sans-serif] space-y-4"
          data-node-id="2003:40007"
        >
          {/* Document Title Header */}
          <div className="text-center pb-4 border-b border-[#e5e5e5]">
            <h2 className="font-serif italic font-bold text-[20px] text-[#171717] tracking-tight mb-1">
              Sample Job Offer Letter
            </h2>
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] text-[#171717]">
              Acme Company, Inc.
            </h3>
            <p className="text-[12px] text-[#525252]">
              123 Easy Street, Lafayette, LA 70504
            </p>
            <p className="text-[11px] text-[#737373]">
              (Tel) (000) 000-0000 (Fax) (000) 000-0000
            </p>
          </div>

          {/* Letter Body Meta Details */}
          <div className="text-[12px] leading-[18px] text-[#262626] space-y-2">
            <p>
              <span className="font-semibold">Date:</span> September 12, 2026
            </p>
            <p>
              <span className="font-semibold">To:</span> Office of International Affairs
            </p>
            <p>
              <span className="italic underline">Candidate</span> has been selected for employment with our company since October 2026.
            </p>

            <div className="space-y-1 pt-2">
              <p>
                <span className="font-bold">Physical location of job:</span> 123 Easy Street / Lafayette, LA 70504
              </p>
              <p>
                <span className="font-bold">Number of hours worked per week:</span> 40 hours / week
              </p>
              <p>
                <span className="font-bold">Job title:</span> Agricultural Operator / Marketing Intern
              </p>
              <p>
                <span className="font-bold">Job duties:</span> Assist with harvesting, packing, crop inspection, equipment maintenance, and log reporting.
              </p>
              <p>
                <span className="font-bold">Name of Supervisor:</span> John Smith
              </p>
              <p>
                <span className="font-bold">Supervisor's Contact Phone:</span> (000) 000-0000
              </p>
              <p>
                <span className="font-bold">Supervisor's E-Mail:</span> jsmith@yahoo.com
              </p>
              <p>
                <span className="font-bold">E-Verify Number:</span> 0000000
              </p>
              <p>
                <span className="font-bold">EIN:</span> 00-0000000
              </p>
            </div>

            <div className="pt-3 border-t border-[#f0f0f0]">
              <p className="font-bold mb-1">Explain how employment is related to study / experience:</p>
              <p className="text-[11px] text-[#525252] italic">
                Direct agricultural equipment operation and quality verification for certified H-2A seasonal program.
              </p>
            </div>

            <p className="pt-2">
              Should you need further information, please do not hesitate to contact me directly.
            </p>

            {/* Signature Block */}
            <div className="pt-4 space-y-1">
              <p>Sincerely,</p>
              <div className="font-serif italic font-semibold text-[15px] text-[#0038d0] py-1">
                John Smith
              </div>
              <p className="font-semibold text-[#171717]">John Smith</p>
              <p className="text-[11px] text-[#525252]">President</p>
              <p className="text-[11px] text-[#525252]">Acme Company, Inc.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container (Figma node 2003:40013) */}
      <div
        className="w-full bg-[#fafafa] border-t border-[#e5e5e5] px-[16px] pt-[12px] pb-[16px] flex flex-col gap-[12px] shrink-0"
        data-node-id="2003:40013"
      >
        {/* Accept Button (Figma node 2003:40015) - Clean blue pill button, no icon */}
        <button
          onClick={handleAcceptOffer}
          className="w-full h-[44px] min-h-[44px] px-[16px] py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-[0px_1px_2px_rgba(0,0,0,0.09)] transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="2003:40015"
        >
          {language === 'es' ? 'Aceptar oferta de trabajo' : 'Accept job offer'}
        </button>

        {/* Decline Button (Figma node 2003:40016) - Pomegranate Red #c7290e */}
        <button
          onClick={handleDeclineOffer}
          className="w-full h-[44px] py-[10px] text-center font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#c7290e] active:scale-95 transition-all duration-150 cursor-pointer flex items-center justify-center rounded-[100px]"
          data-node-id="2003:40016"
        >
          {language === 'es' ? 'No quiero esta oferta' : "I don't want this job"}
        </button>
      </div>
    </div>
  );
};

