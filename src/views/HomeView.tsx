import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language, setCurrentTab, scheduledInterview, addToast, setSelectedAppointmentDetail } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  const isScheduled = !!scheduledInterview;
  const interviewDate = scheduledInterview?.date || '11 Apr';
  const interviewTime = scheduledInterview?.time || '12:00 - 13:00';
  const interviewFarm = scheduledInterview?.farm || 'Sunnydale Orchards Farm';

  const handleOpenAppointmentBottomSheet = () => {
    setSelectedAppointmentDetail({
      date: interviewDate,
      time: interviewTime,
      farm: interviewFarm
    });
  };

  const handleJoinCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentTab('video_loader');
  };

  if (worker.status === 'oferta_firmada') {
    return (
      <div
        className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] pb-6"
        data-node-id="1590:16863"
      >
        {/* Sticky Top Header Row (Node 2338:20308) */}
        <div
          className="sticky top-0 z-30 bg-white w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
          data-node-id="2338:20308"
        >
          <div className="flex items-center gap-3">
            <img
              src="/profile.png"
              alt={worker.fullName}
              className="size-[44px] rounded-full object-cover border border-[#e5e5e5] shadow-xs"
            />
            <div className="flex flex-col text-left">
              <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
                {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
              </h1>
              <button
                onClick={() => setCurrentTab('job_offer_detail')}
                className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#0045ff] underline tracking-[-0.024px] cursor-pointer text-left"
              >
                {language === 'es' ? 'Mi trabajo actual y detalles de visa' : 'My Current Job and Visa Details'}
              </button>
            </div>
          </div>

          {/* Circular Bell Button */}
          <button
            onClick={() => setCurrentTab('notifications')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer relative shrink-0"
            aria-label="Notificaciones"
            data-node-id="2338:20317"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
          </button>
        </div>

        {/* Step Progress Tracker Bar (Node 1590:16866) */}
        <div
          className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-4 shrink-0 shadow-2xs"
          data-node-id="1590:16866"
        >
          {/* Current Step: Visa Application (Now) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="1590:16867">
            <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
              <span className="material-symbols-outlined text-[18px]">description</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#d3efff] text-[#0038d0] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Ahora' : 'Current'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#0038d0]">
                {language === 'es' ? 'Solicitud de Visa' : 'Visa Application'}
              </span>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[2px] h-[32px] bg-[#d9d9d9] rounded-full shrink-0" />

          {/* Next Step: Consular Appointment (Next) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="1590:16877">
            <div className="size-[32px] rounded-[8px] bg-[#e5e5e5] flex items-center justify-center text-[#525252] shrink-0">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Siguiente' : 'Next'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#404040]">
                {language === 'es' ? 'Cita Consular' : 'Consular Appoint.'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Body Area: Submit Visa Application Card (Node 1590:16886 / 1590:16888) */}
        <div className="p-6 flex flex-col gap-6 w-full" data-node-id="1590:16886">
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full min-h-[444px] flex flex-col justify-between"
            data-node-id="1590:16888"
          >
            {/* Header Banner (Node 1590:16889) */}
            <div className="bg-[#b0deff] px-4 py-3 text-center" data-node-id="1590:16889">
              <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]" data-node-id="1590:16890">
                {language === 'es' ? 'Enviar Solicitud de Visa' : 'Submit Visa Application'}
              </h2>
            </div>

            {/* Card Body Container (Node 1590:16891) */}
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 text-left font-['Inter',sans-serif]" data-node-id="1590:16891">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]" data-node-id="1590:16893">
                    {language === 'es' ? 'Paso 2 de 6' : 'Step 2 of 6'}
                  </p>
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]" data-node-id="1590:16896">
                    {language === 'es' ? 'Mi Solicitud de Visa DS-160' : 'My DS-160 Visa Application'}
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="border-b border-[#e5e5e5]" data-node-id="1590:16897" />

                {/* Body Text (Node 1590:16902) */}
                <p className="font-['DM_Sans',sans-serif] font-medium text-[18px] leading-[26px] text-[#262626] tracking-[-0.072px]" data-node-id="1590:16902">
                  {language === 'es'
                    ? 'Revisa tus respuestas. Luego envía tu formulario de visa (DS-160).'
                    : 'Check your answers. Then submit your visa form (DS-160).'}
                </p>
              </div>

              {/* Primary Action Button (Node 1590:16903) */}
              <button
                onClick={() => {
                  setCurrentTab('visa_review_hub');
                }}
                className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center rounded-full shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
                data-node-id="1590:16903"
              >
                {language === 'es' ? 'Enviar solicitud de visa' : 'Submit Visa Application'}
              </button>
            </div>
          </div>

          {/* Section: Documents Section (Node 1590:16904) */}
          <div className="flex flex-col gap-3 text-left w-full" data-node-id="1590:16904">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]" data-node-id="1590:16905">
              {language === 'es' ? 'Mis documentos' : 'My documents'}
            </h3>

            {/* Document Item Container (Node 1590:16906) */}
            <div
              onClick={() => setCurrentTab('view_signed_document')}
              className="bg-white border border-[#e5e5e5] rounded-[12px] p-6 flex items-center justify-between gap-3 shadow-2xs cursor-pointer hover:border-[#0038d0]/30 transition-colors"
              data-node-id="1590:16906"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0" data-node-id="1590:16908">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </div>
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#525252] tracking-[-0.056px]" data-node-id="1590:16913">
                  {language === 'es' ? 'Ej: Oferta de trabajo, formularios de visa' : 'Ex: Job offer, visa forms'}
                </p>
              </div>

              <div className="size-[32px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#262626] shrink-0" data-node-id="1590:16914">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (worker.status === 'solicitud_visa') {
    return (
      <div
        className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] pb-6"
        data-node-id="3002:3733"
      >
        {/* Sticky Top Header Row (Node 2338:20308 / 3002:3734) */}
        <div
          className="sticky top-0 z-30 bg-white w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
          data-node-id="2338:20308"
        >
          <div className="flex items-center gap-3">
            <img
              src="/profile.png"
              alt={worker.fullName}
              className="size-[44px] rounded-full object-cover border border-[#e5e5e5] shadow-xs"
            />
            <div className="flex flex-col text-left">
              <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
                {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
              </h1>
              <button
                onClick={() => setCurrentTab('job_offer_detail')}
                className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#0045ff] underline tracking-[-0.024px] cursor-pointer text-left"
              >
                {language === 'es' ? 'Mi trabajo actual y detalles de visa' : 'My Current Job and Visa Details'}
              </button>
            </div>
          </div>

          {/* Circular Bell Button */}
          <button
            onClick={() => setCurrentTab('notifications')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer relative shrink-0"
            aria-label="Notificaciones"
            data-node-id="2338:20317"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
          </button>
        </div>

        {/* Step Progress Tracker Bar (Node 3002:3736) */}
        <div
          className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-4 shrink-0 shadow-2xs"
          data-node-id="3002:3736"
        >
          {/* Current Step: Visa Application (Node 3002:3737) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="3002:3737">
            <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
              <span className="material-symbols-outlined text-[18px]">description</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#d3efff] text-[#0038d0] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Ahora' : 'Current'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#0038d0]">
                {language === 'es' ? 'Solicitud de Visa' : 'Visa Application'}
              </span>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[2px] h-[32px] bg-[#d9d9d9] rounded-full shrink-0" />

          {/* Next Step: Consular Appointment (Node 3002:3747) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="3002:3747">
            <div className="size-[32px] rounded-[8px] bg-[#e5e5e5] flex items-center justify-center text-[#525252] shrink-0">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Siguiente' : 'Next'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#404040]">
                {language === 'es' ? 'Cita Consular' : 'Consular Appoint.'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Body Area: Submit Visa Application Card (Node 3002:3756 / 3002:3758) */}
        <div className="p-6 flex flex-col gap-6 w-full" data-node-id="3002:3756">
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full min-h-[444px] flex flex-col justify-between"
            data-node-id="3002:3758"
          >
            {/* Header Banner (Node 3002:3759) */}
            <div className="bg-[#b0deff] px-4 py-3 text-center" data-node-id="3002:3759">
              <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]" data-node-id="3002:3760">
                {language === 'es' ? 'Enviar Solicitud de Visa' : 'Submit Visa Application'}
              </h2>
            </div>

            {/* Card Body Container (Node 3002:3761) */}
            <div className="p-6 flex-1 flex flex-col justify-start gap-6 text-left font-['Inter',sans-serif]" data-node-id="3002:3761">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]" data-node-id="3002:3763">
                    {language === 'es' ? 'Paso 2 de 6' : 'Step 2 of 6'}
                  </p>
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]" data-node-id="3002:3766">
                    {language === 'es' ? 'Mi Solicitud de Visa DS-160' : 'My DS-160 Visa Application'}
                  </h3>
                </div>

                {/* Divider Line (Node 3002:3767) */}
                <div className="border-b border-[#e5e5e5]" />

                {/* Body Text (Node 3002:3772) */}
                <p className="font-['DM_Sans',sans-serif] font-medium text-[18px] leading-[26px] text-[#262626] tracking-[-0.072px]" data-node-id="3002:3772">
                  {language === 'es'
                    ? 'Tu DS-160 se está procesando actualmente. Te notificaremos una vez que esté listo para su revisión.'
                    : "Your DS-160 is currently being processed. We'll notify you once it's ready for review."}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Documents Section (Node 3002:3774) */}
          <div className="flex flex-col gap-3 text-left w-full" data-node-id="3002:3774">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]" data-node-id="3002:3775">
              {language === 'es' ? 'Mis documentos' : 'My documents'}
            </h3>

            {/* Document Item Container (Node 3002:3776) */}
            <div
              onClick={() => setCurrentTab('view_signed_document')}
              className="bg-white border border-[#e5e5e5] rounded-[12px] p-6 flex items-center justify-between gap-3 shadow-2xs cursor-pointer hover:border-[#0038d0]/30 transition-colors"
              data-node-id="3002:3776"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0" data-node-id="3002:3778">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </div>
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#525252] tracking-[-0.056px]" data-node-id="3002:3783">
                  {language === 'es' ? 'Ej: Oferta de trabajo, formularios de visa' : 'Ex: Job offer, visa forms'}
                </p>
              </div>

              <div className="size-[32px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#262626] shrink-0" data-node-id="3002:3784">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (worker.status === 'oferta_enviada') {
    return (
      <div
        className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif]"
        data-node-id="1590:16756"
      >
        {/* Sticky Top Header Row (Node 2338:20308) */}
        <div
          className="sticky top-0 z-30 bg-white w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
          data-node-id="2338:20308"
        >
          <div className="flex items-center gap-3">
            <img
              src="/profile.png"
              alt={worker.fullName}
              className="size-[44px] rounded-full object-cover border border-[#e5e5e5] shadow-xs"
            />
            <div className="flex flex-col text-left">
              <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
                {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
              </h1>
              <button
                onClick={() => setCurrentTab('job_offer_detail')}
                className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#0045ff] underline tracking-[-0.024px] cursor-pointer text-left"
              >
                {language === 'es' ? 'Mi trabajo actual y detalles de visa' : 'My Current Job and Visa Details'}
              </button>
            </div>
          </div>

          {/* Circular Bell Button */}
          <button
            onClick={() => setCurrentTab('notifications')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer relative shrink-0"
            aria-label="Notificaciones"
            data-node-id="2338:20317"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
          </button>
        </div>

        {/* Step Progress Tracker Bar (Node 1590:16759) */}
        <div
          className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-4 shrink-0 shadow-2xs"
          data-node-id="1590:16759"
        >
          {/* Current Step: Job Offer (Now) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="1590:16760">
            <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
              <span className="material-symbols-outlined text-[18px]">edit_note</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#d3efff] text-[#0038d0] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Ahora' : 'Now'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#0038d0]">
                {language === 'es' ? 'Oferta de trabajo' : 'Job offer'}
              </span>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[2px] h-[32px] bg-[#d9d9d9] rounded-full shrink-0" />

          {/* Next Step: Visa Application (Next) */}
          <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="1590:16770">
            <div className="size-[32px] rounded-[8px] bg-[#e5e5e5] flex items-center justify-center text-[#525252] shrink-0">
              <span className="material-symbols-outlined text-[18px]">description</span>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                {language === 'es' ? 'Siguiente' : 'Next'}
              </span>
              <span className="font-semibold text-[12px] leading-[16px] text-[#404040]">
                {language === 'es' ? 'Solicitud de Visa' : 'Visa Application'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Body Area: Job Offer Action Card (Node 1590:16779 / 1590:16780) */}
        <div className="flex-1 p-4 pt-4 pb-6 flex flex-col items-stretch justify-start w-full" data-node-id="1590:16779">
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full min-h-[444px] flex flex-col justify-between"
            data-node-id="1590:16780"
          >
            {/* Header Banner (Node 1590:16781) */}
            <div className="bg-[#b0deff] px-4 py-3 text-center" data-node-id="1590:16781">
              <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]" data-node-id="1590:16782">
                {language === 'es' ? '¡Tienes una oferta de trabajo!' : 'You have a job offer!'}
              </h2>
            </div>

            {/* Card Body Container (Node 1590:16783) */}
            <div className="p-6 flex-1 flex flex-col justify-between gap-6 text-left font-['Inter',sans-serif]" data-node-id="1590:16783">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]" data-node-id="1590:16785">
                    {language === 'es' ? 'Paso 1 de 6' : 'Step 1 of 6'}
                  </p>
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]" data-node-id="1590:16788">
                    {language === 'es' ? 'Firmar oferta de trabajo' : 'Sign Job Offer'}
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="border-b border-[#e5e5e5]" data-node-id="1590:16789" />

                {/* Body Text (Node 1590:16791) */}
                <p className="font-['DM_Sans',sans-serif] font-medium text-[18px] leading-[26px] text-[#262626] tracking-[-0.072px]" data-node-id="1590:16791">
                  {language === 'es'
                    ? '¡Recibiste una oferta de trabajo! Toca abajo para ver la oferta de trabajo y firmarla.'
                    : 'You got a job offer! Tap below to see the job offer and sign it.'}
                </p>
              </div>

              {/* Primary Action Button (Node 1590:16792) */}
              <button
                onClick={() => setCurrentTab('job_offer_detail')}
                className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center rounded-full shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
                data-node-id="1590:16792"
              >
                {language === 'es' ? 'Firmar oferta de trabajo' : 'Sign Job Offer'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif]"
      data-node-id="1004:5285"
    >
      {/* Sticky Top Header Row (1080:13943 / 1004:5286) */}
      <div
        className="sticky top-0 z-30 bg-white w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-6"
        data-node-id="1080:13943"
      >
        <div className="flex items-center gap-3">
          <img
            src="/profile.png"
            alt={worker.fullName}
            className="size-11 rounded-full object-cover border border-[#e5e5e5] shadow-xs"
          />
          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
            {language === 'es' ? `¡Hola, ${workerFirstName}!` : `Hi, ${workerFirstName}!`}
          </h1>
        </div>

        {/* Circular Bell Button */}
        <button
          onClick={() => setCurrentTab('notifications')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer relative"
          aria-label="Notificaciones"
          data-node-id="4235:953"
        >
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
        </button>
      </div>

      <div className="flex-1 flex flex-col space-y-[24px]" data-node-id="1004:5288">
        {/* Section 1: Upcoming Appointments (Figma Node 1004:5289) */}
        {isScheduled && (
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-[16px] space-y-[16px] shadow-sm"
            data-node-id="1004:5289"
          >
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]"
              data-node-id="1004:5292"
            >
              {language === 'es' ? 'Próximas Citas' : 'Upcoming Appointments'}
            </h2>

            {/* Event Card (1004:5293) */}
            <div
              onClick={handleOpenAppointmentBottomSheet}
              className="border border-[#e5e5e5] rounded-[8px] p-[16px] pl-[8px] flex gap-[12px] items-center cursor-pointer hover:border-[#0038d0]/30 transition-colors"
              data-node-id="1004:5293"
            >
              <div className="bg-[#2874ff] w-[3px] rounded-[12px] self-stretch shrink-0" data-node-id="1004:5294" />

              <div className="flex-1 flex flex-col gap-[16px]" data-node-id="1004:5295">
                <div className="flex flex-col gap-[8px]" data-node-id="1004:5296">
                  <div className="flex items-center justify-between" data-node-id="1004:5297">
                    <span className="font-semibold text-[16px] text-[#171717]">
                      {interviewDate}
                    </span>
                    <span className="font-normal text-[14px] text-[#404040]">
                      {interviewTime}
                    </span>
                  </div>
                  <p className="font-semibold text-[14px] leading-[18px] text-[#171717] tracking-[-0.028px]">
                    {language === 'es'
                      ? `Entrevista con ${interviewFarm}`
                      : `Interview with ${interviewFarm}`}
                  </p>
                </div>

                {/* Join Action Button */}
                <button
                  onClick={handleJoinCall}
                  className="bg-[#d3efff] hover:bg-[#b0deff] text-[#0045ff] rounded-full h-[32px] px-[12px] flex items-center justify-center gap-[6px] font-semibold text-[12px] leading-[16px] cursor-pointer active:scale-[0.98] transition-all shadow-xs w-full"
                  data-node-id="1004:5302"
                >
                  <span className="material-symbols-outlined text-[18px]">videocam</span>
                  <span>{language === 'es' ? 'Unirse' : 'Join'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Job Invitations List (Figma Node 1399:29003) */}
        <div className="space-y-[16px]">
          <div className="flex items-center justify-between w-full" data-node-id="1399:29003">
            <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
              {language === 'es' ? 'Invitaciones de trabajo' : 'Job Invitations'}
            </h2>
            <span className="font-normal text-[12px] text-[#404040] tracking-[-0.048px]">
              {language === 'es' ? 'Mostrando 2 invitaciones' : 'Showing 2 invitations'}
            </span>
          </div>

          <div className="space-y-6 w-full">
            {/* Card 1: Your interview was scheduled (Figma Node 1008:2674) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="1008:2674"
            >
              {/* Header Purple Badge (1008:2675) */}
              <div className="bg-[#9e89c6] py-2 px-4 text-center" data-node-id="1008:2675">
                <span className="font-semibold text-[16px] leading-[22px] text-white" data-node-id="1008:2676">
                  {language === 'es' ? 'Tu entrevista fue programada' : 'Your interview was scheduled'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4" data-node-id="1008:2677">
                {/* Cover Image */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative" data-node-id="1008:2679">
                  <img
                    src="/assets/home_updated/apples_cover.png"
                    alt="Sunnydale Orchards farm"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Job Title & Farm */}
                <div className="space-y-1" data-node-id="1008:2681">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <p className="font-normal text-[14px] leading-[18px] text-[#525252]">
                    {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#e5e5e5]" data-node-id="1008:2686" />

                {/* 3 Columns Job Summary */}
                <div className="flex items-start justify-between text-left" data-node-id="1008:2687">
                  <div className="flex-1 space-y-1">
                    <p className="font-normal text-[14px] text-[#525252]">
                      {language === 'es' ? 'Período' : 'Period'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]">
                      {language === 'es' ? '1 años' : '1 years'}
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-center">
                    <p className="font-normal text-[14px] text-[#525252]">
                      {language === 'es' ? 'Tarifa pago' : 'Pay rate'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]">
                      12 USD
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-right">
                    <p className="font-normal text-[14px] text-[#525252]">
                      {language === 'es' ? 'Ciudad, Estado' : 'City, State'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]">
                      Texas
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[12px] text-[#737373]">
                  {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                </p>
              </div>
            </div>

            {/* Card 2: New Job Invitation (Figma Node 1004:5334) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="1004:5334"
            >
              {/* Header Badge */}
              <div className="bg-[#ffd16e] py-2 px-4 text-center">
                <span className="font-semibold text-[16px] leading-[22px] text-[#813d0d]">
                  {language === 'es' ? '¡Nueva invitación a empleo!' : 'New job invitation!'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4">
                {/* Cover Image */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative">
                  <img
                    src="/assets/home_updated/apples_cover.png"
                    alt="Sunnydale Orchards farm"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Job Title & Farm */}
                <div className="space-y-2">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <div className="space-y-1">
                    <p className="font-medium text-[14px] leading-[18px] text-[#171717]">
                      {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                    </p>
                    <p className="font-normal text-[12px] text-[#737373]">
                      {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                    </p>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={() => setCurrentTab('job_offer_detail')}
                  className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                >
                  {language === 'es' ? 'Ver empleo' : 'View Job'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
