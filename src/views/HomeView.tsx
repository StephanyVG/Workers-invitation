import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language, setCurrentTab, scheduledInterview, addToast } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  const isScheduled = !!scheduledInterview;
  const interviewDate = scheduledInterview?.date || '11 Apr';
  const interviewTime = scheduledInterview?.time || '12:00 - 13:00';
  const interviewFarm = scheduledInterview?.farm || 'Sunnydale Orchards Farm';

  const handleJoinCall = () => {
    addToast(
      language === 'es' ? 'Conectando a la videollamada...' : 'Joining video meeting...',
      language === 'es'
        ? 'Iniciando sala virtual con Sunnydale Orchards Farm.'
        : 'Starting virtual room with Sunnydale Orchards Farm.',
      'info'
    );
  };

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

        {/* Circular Bell Button - Opens Dedicated Notifications View */}
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
            className="border border-[#e5e5e5] rounded-[8px] p-[16px] pl-[8px] flex gap-[12px] items-center"
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
