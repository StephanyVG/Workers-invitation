import React from 'react';
import { useApp } from '../context/AppContext';

export const HomeView: React.FC = () => {
  const { worker, language, setCurrentTab, triggerPushBanner } = useApp();
  const workerFirstName = worker.fullName.split(' ')[0] || 'Guadalupe';

  const hasInvitations = true; // Always show invitations view with Figma Node 1004:5204 layout

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar px-[24px] pb-[40px] pt-0 animate-fade-in relative h-full min-h-0"
      data-node-id="1004:5204"
    >
      {/* Sticky Top Header Row (Figma node 1080:13901 / 1004:5205) */}
      <div
        className="sticky top-0 z-30 bg-white w-[calc(100%+48px)] -mx-[24px] px-[24px] py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs mb-6"
        data-node-id="1080:13901"
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

        {/* Circular Bell Button - Triggers Push Notification Banner */}
        <button
          onClick={triggerPushBanner}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-sm active:scale-95 transition-transform cursor-pointer relative"
          aria-label="Notificaciones"
          data-node-id="4235:953"
        >
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-[#ff9800] rounded-full border border-white" />
        </button>
      </div>

      {hasInvitations && (
        /* Job Invitations View (Figma Node 1004:5204 / 631:28431) */
        <div className="flex-1 flex flex-col space-y-4" data-node-id="1004:5207">
          {/* Heading Container (1590:21537) */}
          <div className="flex items-center justify-between w-full" data-node-id="1590:21537">
            <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]" data-node-id="1590:21538">
              {language === 'es' ? 'Invitaciones de trabajo' : 'Job Invitations'}
            </h2>
            <span className="font-['Inter',sans-serif] font-normal text-[12px] text-[#404040] tracking-[-0.048px]" data-node-id="1590:21539">
              {language === 'es' ? 'Mostrando 2 invitaciones' : 'Showing 2 invitations'}
            </span>
          </div>

          {/* Invitations Container */}
          <div className="space-y-6 w-full">
            {/* Card 1: Schedule your interview (1004:5211) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="1004:5211"
            >
              {/* Header Blue Badge (1004:5212) */}
              <div className="bg-[#b0deff] py-2 px-4 text-center" data-node-id="1004:5212">
                <span className="font-semibold text-[16px] leading-[22px] text-[#0038d0]" data-node-id="1004:5213">
                  {language === 'es' ? '¡Programa tu entrevista!' : 'Schedule your interview'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4" data-node-id="1004:5214">
                {/* Job Cover Image (1004:5216) */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative" data-node-id="1004:5216">
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
                <div className="space-y-1" data-node-id="1004:5218">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]" data-node-id="1004:5220">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <p className="font-normal text-[14px] leading-[18px] text-[#525252]" data-node-id="1004:5222">
                    {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#e5e5e5]" data-node-id="1004:5223" />

                {/* 3 Columns Job Summary */}
                <div className="flex items-start justify-between text-left" data-node-id="1004:5224">
                  <div className="flex-1 space-y-1" data-node-id="1004:5225">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="1004:5227">
                      {language === 'es' ? 'Período' : 'Period'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="1004:5228">
                      {language === 'es' ? '1 años' : '1 years'}
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-center" data-node-id="1004:5229">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="1004:5231">
                      {language === 'es' ? 'Tarifa pago' : 'Pay rate'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="1004:5232">
                      12 USD
                    </p>
                  </div>

                  <div className="flex-1 space-y-1 text-right" data-node-id="1004:5233">
                    <p className="font-normal text-[14px] text-[#525252]" data-node-id="1004:5235">
                      {language === 'es' ? 'Ciudad, Estado' : 'City, State'}
                    </p>
                    <p className="font-semibold text-[14px] text-[#171717]" data-node-id="1004:5236">
                      Texas
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[12px] text-[#737373]" data-node-id="1004:5237">
                  {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                </p>

                {/* Primary Button: Pick a Time */}
                <button
                  onClick={() => setCurrentTab('available_times')}
                  className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                  data-node-id="1004:5238"
                >
                  {language === 'es' ? 'Elegir horario' : 'Pick a Time'}
                </button>
              </div>
            </div>

            {/* Card 2: New Job Invitation (1004:5239) */}
            <div
              className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-sm flex flex-col text-left font-['Inter',sans-serif]"
              data-node-id="1004:5239"
            >
              {/* Header Badge */}
              <div className="bg-[#ffd16e] py-2 px-4 text-center" data-node-id="1004:5240">
                <span className="font-semibold text-[16px] leading-[22px] text-[#813d0d]" data-node-id="1004:5241">
                  {language === 'es' ? '¡Nueva invitación a empleo!' : 'New job invitation!'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4" data-node-id="1004:5242">
                {/* Job Cover Image */}
                <div className="w-full h-[68px] rounded-[8px] overflow-hidden relative" data-node-id="1004:5244">
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
                <div className="space-y-2" data-node-id="1004:5245">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]" data-node-id="1004:5247">
                    {language === 'es'
                      ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                      : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
                  </h3>
                  <div className="space-y-1">
                    <p className="font-medium text-[14px] leading-[18px] text-[#171717]" data-node-id="1004:5250">
                      {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards Farm'}
                    </p>
                    <p className="font-normal text-[12px] text-[#737373]" data-node-id="1004:5251">
                      {language === 'es' ? 'Recibido hace 1 día' : 'Received 1 day ago'}
                    </p>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={() => setCurrentTab('job_offer_detail')}
                  className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                  data-node-id="1004:5252"
                >
                  {language === 'es' ? 'Ver empleo' : 'View Job'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
