import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const {
    worker,
    language,
    setCurrentTab,
    scheduledInterview,
    addToast,
    setSelectedAppointmentDetail,
    hasConfirmedConsularDetails,
    isVisaApprovedConfirmed,
    setIsVisaApprovedConfirmed,
    hasUploadedVisa,
    hasConfirmedTravelItinerary,
    triggerPushBanner,
    showPushBanner,
    setSelectedDocumentType,
    setShowConsularDetailsModal,
    advanceStage
  } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  useEffect(() => {
    if (hasUploadedVisa && !hasConfirmedTravelItinerary) {
      const dismissed = sessionStorage.getItem('zipmi_travel_banner_dismissed');
      if (!dismissed && !showPushBanner) {
        triggerPushBanner({
          title: language === 'es' ? 'Revisa tu itinerario de viaje' : 'Review Your Travel Itinerary',
          description: language === 'es'
            ? 'Tu transporte ha sido asignado. Es importante que revises los horarios y puntos de encuentro.'
            : 'Your transportation has been assigned. It’s important that you review the schedules and meeting points.',
          time: 'Hace 2 horas',
          targetTab: 'travel_itinerary',
        });
      }
    }
  }, [hasUploadedVisa, hasConfirmedTravelItinerary]);

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
        className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] pb-6 select-none"
        data-node-id={isVisaApprovedConfirmed ? "1683:55279" : hasConfirmedConsularDetails ? "1683:54718" : "2376:35788"}
      >
        {/* Sticky Top Header Row */}
        <div
          className="sticky top-0 z-30 bg-white w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
          data-node-id="2376:35790"
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
            data-node-id="2376:35790;4235:953"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
          </button>
        </div>

        {/* Step Progress Tracker Bar */}
        {!isVisaApprovedConfirmed ? (
          <div
            className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-4 shrink-0 shadow-2xs"
            data-node-id="2376:35791"
          >
            {/* Current Step: Consular Appointment (Now) */}
            <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="2376:35792">
              <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="bg-[#d3efff] text-[#0038d0] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                  {language === 'es' ? 'Ahora' : 'Current'}
                </span>
                <span className="font-semibold text-[12px] leading-[16px] text-[#0038d0]">
                  {language === 'es' ? 'Cita Consular' : 'Consular Appoint.'}
                </span>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="w-[2px] h-[32px] bg-[#d9d9d9] rounded-full shrink-0" />

            {/* Next Step: Visa Upload (Next) */}
            <div className="flex-1 flex items-center gap-2 rounded-[12px]" data-node-id="2376:35802">
              <div className="size-[32px] rounded-[8px] bg-[#e5e5e5] flex items-center justify-center text-[#525252] shrink-0">
                <span className="material-symbols-outlined text-[18px]">badge</span>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                  {language === 'es' ? 'Siguiente' : 'Next'}
                </span>
                <span className="font-semibold text-[12px] leading-[16px] text-[#404040]">
                  {language === 'es' ? 'Carga de Visa' : 'Visa Upload'}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Step Progress Tracker Bar for Step 4 (Figma 1683:55279) */
          <div
            className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-4 shrink-0 shadow-2xs"
            data-node-id="1683:55280"
          >
            {/* Current Step: Upload Visa (Now) */}
            <div className="flex-1 flex items-center gap-2 rounded-[12px]">
              <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
                <span className="material-symbols-outlined text-[18px]">badge</span>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="bg-[#d3efff] text-[#0038d0] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                  {language === 'es' ? 'Ahora' : 'Current'}
                </span>
                <span className="font-semibold text-[12px] leading-[16px] text-[#0038d0]">
                  {language === 'es' ? 'Carga de Visa' : 'Upload Visa'}
                </span>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="w-[2px] h-[32px] bg-[#d9d9d9] rounded-full shrink-0" />

            {/* Next Step: Travel Details (Next) */}
            <div className="flex-1 flex items-center gap-2 rounded-[12px]">
              <div className="size-[32px] rounded-[8px] bg-[#e5e5e5] flex items-center justify-center text-[#525252] shrink-0">
                <span className="material-symbols-outlined text-[18px]">directions_bus</span>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[10px] leading-[16px] px-2 py-0.5 rounded-[24px]">
                  {language === 'es' ? 'Siguiente' : 'Next'}
                </span>
                <span className="font-semibold text-[12px] leading-[16px] text-[#404040]">
                  {language === 'es' ? 'Detalles de Viaje' : 'Travel Details'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Main Body Area: Consular Appointment Card OR Visa Photo Card with 24px Container Padding */}
        <div className="p-6 flex flex-col gap-6 w-full" data-node-id={isVisaApprovedConfirmed ? "1683:55279" : "2376:35811"}>
          {!isVisaApprovedConfirmed ? (
            /* Step 3 of 6: Consular Appointment Card */
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full flex flex-col justify-between"
              data-node-id="2376:35813"
            >
              {/* Header Banner */}
              <div className="bg-[#b0deff] px-4 py-2 text-center" data-node-id="2376:35814">
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]">
                  {language === 'es' ? 'Cita Consular' : 'Consular Appointment'}
                </h2>
              </div>

              {/* Card Body Container with 24px Container Padding */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4 text-left font-['Inter',sans-serif]" data-node-id="2376:35816">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]">
                      {language === 'es' ? 'Paso 3 de 6' : 'Step 3 of 6'}
                    </p>
                    <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
                      {language === 'es' ? 'Cita Consular' : 'Consular Appointment'}
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="border-b border-[#e5e5e5]" />

                  {/* Amber Warning Notice: Mail your passport first */}
                  <div className="bg-[#ffd16e] border border-[#ff970c] rounded-[8px] px-4 py-2.5 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#813d0d] shrink-0">mail</span>
                    <p className="font-semibold text-[14px] leading-[18px] text-[#813d0d]">
                      {language === 'es' ? 'Envía tu pasaporte primero' : 'Mail your passport first'}
                    </p>
                  </div>

                  {/* Inner Appointment Box */}
                  <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-3">
                    {/* Row 1: Consular Interview */}
                    <div className="flex items-center gap-3">
                      <div className="bg-[#e7f6ff] text-[#0045ff] font-semibold text-[12px] leading-[16px] rounded-[120px] px-2.5 py-1 flex flex-col items-center justify-center shrink-0 w-[48px]">
                        <span>Apr</span>
                        <span>11</span>
                      </div>
                      <div className="flex flex-col flex-1 text-left">
                        <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                          {language === 'es' ? 'Entrevista Consular' : 'Consular Interview'}
                        </p>
                        <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                          12:00 - 13:00
                        </p>
                      </div>
                    </div>

                    <div className="border-b border-[#e5e5e5]" />

                    {/* Row 2: CAS Appointment */}
                    <div className="flex items-center gap-3">
                      <div className="bg-[#e7f6ff] text-[#0045ff] font-semibold text-[12px] leading-[16px] rounded-[120px] px-2.5 py-1 flex flex-col items-center justify-center shrink-0 w-[48px]">
                        <span>Apr</span>
                        <span>11</span>
                      </div>
                      <div className="flex flex-col flex-1 text-left">
                        <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                          {language === 'es' ? 'Cita en CAS' : 'CAS Appointment'}
                        </p>
                        <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                          12:00 - 13:00
                        </p>
                      </div>
                    </div>

                    {/* See more details button */}
                    <button
                      onClick={() => setShowConsularDetailsModal(true)}
                      className="w-full h-[32px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] flex items-center justify-center transition-all cursor-pointer shadow-2xs mt-1"
                    >
                      {language === 'es' ? 'Ver más detalles' : 'See more details'}
                    </button>
                  </div>
                </div>

                {/* Action Button: Confirm your details (Blue) or My visa was approved (Green) */}
                {!hasConfirmedConsularDetails ? (
                  <button
                    onClick={() => setCurrentTab('consular_details')}
                    className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center mt-2"
                    data-node-id="2376:35959"
                  >
                    {language === 'es' ? 'Confirmar tus detalles' : 'Confirm your details'}
                  </button>
                ) : (
                  <div className="flex flex-col gap-2.5 w-full mt-2">
                    <button
                      onClick={() => {
                        setIsVisaApprovedConfirmed(true);
                        addToast(
                          language === 'es' ? '¡Visa Aprobada!' : 'Visa Approved!',
                          language === 'es'
                            ? 'Felicidades, tu visa ha sido aprobada.'
                            : 'Congratulations, your visa has been approved.',
                          'success'
                        );
                      }}
                      className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#068f2a] hover:bg-[#057a24] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
                      data-node-id="2376:35991"
                    >
                      <span className="material-symbols-outlined text-[22px]">check</span>
                      <span>{language === 'es' ? 'Mi visa fue aprobada' : 'My visa was approved'}</span>
                    </button>

                    <button
                      onClick={() => {
                        addToast(
                          language === 'es' ? 'Cita Consular' : 'Consular Appointment',
                          language === 'es'
                            ? 'Nos pondremos en contacto contigo para reprogramar tu cita.'
                            : 'We will contact you to reschedule your appointment.',
                          'info'
                        );
                      }}
                      className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-white border border-[#e5e5e5] hover:bg-slate-50 active:scale-[0.98] text-[#525252] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center"
                      data-node-id="3302:31074"
                    >
                      <span>{language === 'es' ? 'No puedo asistir a mi cita' : "I can't attend my appointment"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : !hasUploadedVisa ? (
            /* Step 4 of 6: Take a Photo of Your Visa (Figma 1683:55279) with 24px Container Padding */
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full flex flex-col justify-between"
              data-node-id="1683:55279"
            >
              {/* Header Banner */}
              <div className="bg-[#bce5ff] px-4 py-2.5 text-center">
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]">
                  {language === 'es' ? '¿Fue aprobada tu visa?' : 'Was Your Visa Approved?'}
                </h2>
              </div>

              {/* Card Body Container with 24px Container Padding */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left font-['Inter',sans-serif]">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]">
                      {language === 'es' ? 'Paso 4 de 6' : 'Step 4 of 6'}
                    </p>
                    <h3 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
                      {language === 'es' ? 'Toma una foto de tu visa' : 'Take a Photo of Your Visa'}
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="border-b border-[#e5e5e5]" />

                  <p className="font-normal text-[15px] leading-[22px] text-[#404040]">
                    {language === 'es'
                      ? 'Toma una foto clara de tu visa. Tu empleador necesita verla.'
                      : 'Take a clear photo of your visa. Your employer needs to see it.'}
                  </p>

                  {/* Green Visa Status Box */}
                  <div className="bg-[#f0fdf4] border border-[#16a34a] rounded-[16px] p-4 flex flex-col gap-1 text-left">
                    <h4 className="font-semibold text-[16px] leading-[22px] text-[#0038d0]">
                      {language === 'es' ? 'Estado de la Visa' : 'Visa Status'}
                    </h4>
                    <p className="font-medium text-[14px] leading-[20px] text-[#171717]">
                      {language === 'es'
                        ? '¡Felicidades! tu visa ha sido aprobada'
                        : 'Congrats! your visa has been approved'}
                    </p>
                  </div>
                </div>

                {/* Blue Button: Upload Visa Photo */}
                <button
                  onClick={() => setCurrentTab('visa_photo_guide')}
                  className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center mt-2"
                  data-node-id="1683:55320"
                >
                  <span>{language === 'es' ? 'Subir foto de la visa' : 'Upload Visa Photo'}</span>
                </button>
              </div>
            </div>
          ) : (
            /* Step 5 of 6: Travel Details and Employer's Contact Info (Figma 2382:37588) with 24px Container Padding */
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm w-full flex flex-col justify-between"
              data-node-id="2382:37588"
            >
              {/* Header Banner */}
              <div className="bg-[#bce5ff] px-4 py-2.5 text-center" data-node-id="2382:37589">
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px]">
                  {language === 'es' ? '¡Llegando a tu trabajo!' : 'Getting to Your Job!'}
                </h2>
              </div>

              {/* Card Body Container with 24px Container Padding */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left font-['Inter',sans-serif]" data-node-id="2382:37591">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]">
                      {language === 'es' ? 'Paso 5 de 6' : 'Step 5 of 6'}
                    </p>
                    <h3 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
                      {language === 'es'
                        ? 'Detalles del viaje e información de contacto del empleador'
                        : 'Travel Details and Employer’s Contact Info'}
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="border-b border-[#e5e5e5]" />

                  {/* Travel Details Box */}
                  <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#d3efff] text-[#0045ff] font-semibold text-[12px] leading-[16px] rounded-[120px] px-2.5 py-1 flex flex-col items-center justify-center shrink-0 w-[48px]">
                        <span>Apr</span>
                        <span>11</span>
                      </div>
                      <div className="flex flex-col flex-1 text-left">
                        <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                          {language === 'es' ? 'Detalles del viaje' : 'Travel details'}
                        </p>
                        <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                          12:00 - 13:00
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentTab('travel_itinerary');
                      }}
                      className="w-full h-[36px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    >
                      {language === 'es' ? 'Ver más detalles' : 'See more details'}
                    </button>
                  </div>

                  {/* Employer's Point of Contact Box */}
                  <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
                    <div>
                      <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Punto de contacto del empleador:' : "Employer’s point of contact:"}
                      </p>
                      <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                        {language === 'es'
                          ? 'Michael Anderson (Coordinador de Logística y Bienvenida)'
                          : 'Michael Anderson (Logistics & Welcome Coordinator)'}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                        {language === 'es' ? 'Teléfono del contacto:' : 'Phone of point of contact:'}
                      </p>
                      <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                        +1 (509) 555-0148
                      </p>
                    </div>
                  </div>
                </div>

                {/* Confirm Trip Info Button (Node 2382:37620) */}
                <button
                  onClick={() => {
                    setCurrentTab('travel_itinerary');
                  }}
                  className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center mt-2"
                  data-node-id="2382:37620"
                >
                  <span>
                    {language === 'es'
                      ? (hasConfirmedTravelItinerary ? 'Itinerario confirmado ✓' : 'Confirmar tus detalles')
                      : (hasConfirmedTravelItinerary ? 'Itinerary confirmed ✓' : 'Confirm your details')}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Section: Documents Section */}
          <div className="flex flex-col gap-3 text-left w-full" data-node-id="2376:35854">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es' ? 'Mis documentos' : 'My documents'}
            </h3>

            {/* General Document Item Container */}
            <div
              onClick={() => setCurrentTab('documents')}
              className="bg-white border border-[#e5e5e5] rounded-[12px] p-6 flex items-center justify-between gap-3 shadow-2xs cursor-pointer hover:border-[#0038d0]/30 transition-colors active:scale-[0.99]"
              data-node-id="2376:35856"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="size-[32px] rounded-[8px] bg-[#d3efff] flex items-center justify-center text-[#0038d0] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </div>
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  {language === 'es' ? 'Ej: Oferta de trabajo, formularios de visa' : 'Ex: Job offer, visa forms'}
                </p>
              </div>

              <div className="size-[32px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#262626] shrink-0">
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
