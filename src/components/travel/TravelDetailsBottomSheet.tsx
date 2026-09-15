import React from 'react';
import { useApp } from '../../context/AppContext';

export const TravelDetailsBottomSheet: React.FC = () => {
  const { showTravelDetailsModal, setShowTravelDetailsModal, language } = useApp();

  if (!showTravelDetailsModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex flex-col justify-end animate-fade-in pointer-events-auto select-none"
      onClick={() => setShowTravelDetailsModal(false)}
      data-node-id="1712:44295"
    >
      <div
        className="bg-[#f5f5f5] rounded-t-[24px] max-h-[90vh] flex flex-col w-full sm:max-w-[430px] sm:mx-auto overflow-hidden shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        data-node-id="1712:44296"
      >
        {/* Grabber Handle */}
        <div
          className="w-full flex items-center justify-center pt-3 pb-2 cursor-pointer bg-[#fafafa]"
          onClick={() => setShowTravelDetailsModal(false)}
          data-node-id="1712:44298"
        >
          <div className="bg-[#191c1b] h-[4px] w-[27px] rounded-[12px]" data-node-id="1712:44299" />
        </div>

        {/* Top Header */}
        <div
          className="px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between bg-[#fafafa] shrink-0"
          data-node-id="1712:44302"
        >
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#171717] tracking-[-0.16px]" data-node-id="1712:44303">
            {language === 'es' ? 'Detalles del viaje' : 'Travel Details'}
          </h2>
          <button
            onClick={() => setShowTravelDetailsModal(false)}
            className="size-[32px] rounded-full bg-[#e5e5e5]/60 hover:bg-[#e5e5e5] active:scale-95 flex items-center justify-center text-[#525252] cursor-pointer transition-all shrink-0"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4 text-left font-['Inter',sans-serif]">
          {/* Section 1: First Days and Orientation */}
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-3 w-full shadow-2xs"
            data-node-id="2330:18411"
          >
            <h3
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
              data-node-id="2330:18413"
            >
              {language === 'es' ? 'Primeros días y orientación' : 'First Days and Orientation'}
            </h3>

            <div className="flex flex-col gap-3 w-full">
              {/* Item 1: Where to report */}
              <div className="flex gap-2.5 items-start w-full" data-node-id="2330:18414">
                <div className="size-[8px] rounded-full bg-[#0038d0] shrink-0 mt-1.5" data-node-id="2330:18416" />
                <div className="flex flex-col gap-0.5 flex-1" data-node-id="2330:18417">
                  <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]" data-node-id="2330:18420">
                    {language === 'es' ? 'Dónde presentarse:' : 'Where to report:'}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]" data-node-id="2330:18423">
                    Sunnydale Orchards - 1240 Orchard Valley Rd, Yakima, WA 98901
                  </p>
                </div>
              </div>

              {/* Item 2: Date to report */}
              <div className="flex gap-2.5 items-start w-full" data-node-id="2330:18424">
                <div className="size-[8px] rounded-full bg-[#0038d0] shrink-0 mt-1.5" data-node-id="2330:18426" />
                <div className="flex flex-col gap-0.5 flex-1" data-node-id="2330:18427">
                  <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]" data-node-id="2330:18430">
                    {language === 'es' ? 'Fecha para presentarse:' : 'Date to report:'}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]" data-node-id="2330:18433">
                    {language === 'es' ? '12 de junio, 2025' : 'June 12, 2025'}
                  </p>
                </div>
              </div>

              {/* Item 3: Time to report */}
              <div className="flex gap-2.5 items-start w-full" data-node-id="2330:18434">
                <div className="size-[8px] rounded-full bg-[#0038d0] shrink-0 mt-1.5" data-node-id="2330:18436" />
                <div className="flex flex-col gap-0.5 flex-1" data-node-id="2330:18437">
                  <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]" data-node-id="2330:18440">
                    {language === 'es' ? 'Hora para presentarse:' : 'Time to report:'}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]" data-node-id="2330:18443">
                    12:00 PM
                  </p>
                </div>
              </div>

              {/* Item 4: Employer's point of contact */}
              <div className="flex gap-2.5 items-start w-full" data-node-id="2330:18444">
                <div className="size-[8px] rounded-full bg-[#0038d0] shrink-0 mt-1.5" data-node-id="2330:18446" />
                <div className="flex flex-col gap-0.5 flex-1" data-node-id="2330:18447">
                  <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]" data-node-id="2330:18450">
                    {language === 'es' ? 'Punto de contacto del empleador:' : "Employer’s point of contact:"}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]" data-node-id="2330:18453">
                    {language === 'es'
                      ? 'Michael Anderson (Coordinador de Logística y Bienvenida)'
                      : 'Michael Anderson (Logistics & Welcome Coordinator)'}
                  </p>
                </div>
              </div>

              {/* Item 5: Phone of point of contact */}
              <div className="flex gap-2.5 items-start w-full" data-node-id="2330:18454">
                <div className="size-[8px] rounded-full bg-[#0038d0] shrink-0 mt-1.5" data-node-id="2330:18456" />
                <div className="flex flex-col gap-0.5 flex-1" data-node-id="2330:18457">
                  <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]" data-node-id="2330:18460">
                    {language === 'es' ? 'Teléfono del contacto:' : 'Phone of point of contact:'}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]" data-node-id="2330:18463">
                    +1 (509) 555-0148
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Additional Information */}
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-3 w-full shadow-2xs"
            data-node-id="1712:44358"
          >
            <h3
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
              data-node-id="1712:44362"
            >
              {language === 'es' ? 'Información adicional' : 'Additional Information'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#404040] tracking-[-0.056px]" data-node-id="1712:44368">
              {language === 'es'
                ? 'Presentarse 30 minutos antes de la hora acordada con tu identificación oficial y visa física. Se proporcionará agua, kit de bienvenida y transporte hacia el alojamiento del rancho.'
                : 'Please arrive 30 minutes prior to scheduled time with your official ID and physical visa. Water, welcome kit, and transportation to orchard lodging will be provided.'}
            </p>
          </div>
        </div>

        {/* Bottom Navigation Indicator */}
        <div className="bg-[#fafafa] py-3 flex items-center justify-center shrink-0" data-node-id="1712:44369">
          <div className="h-[4px] w-[108px] bg-[#191c1b] rounded-[12px]" />
        </div>
      </div>
    </div>
  );
};
