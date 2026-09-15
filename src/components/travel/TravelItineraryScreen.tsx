import React from 'react';
import { useApp } from '../../context/AppContext';

export const TravelItineraryScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    transportPreference,
    setHasConfirmedTravelItinerary,
    addToast
  } = useApp();

  const isOwnTransport = transportPreference === 'own';

  const handleConfirm = () => {
    setHasConfirmedTravelItinerary(true);
    addToast(
      language === 'es' ? '¡Itinerario Confirmado!' : 'Itinerary Confirmed!',
      language === 'es'
        ? 'Has confirmado los detalles de tu itinerario de viaje.'
        : 'You have confirmed your travel itinerary details.',
      'success'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 select-none text-left font-['Inter',sans-serif]"
      data-node-id={isOwnTransport ? '1712:42907' : '1712:42977'}
    >
      {/* Sticky Top Header Bar */}
      <div
        className="sticky top-0 z-20 w-full bg-[#f5f5f5] px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0 shadow-2xs"
        data-node-id={isOwnTransport ? '1712:42909' : '1712:42979'}
      >
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
          data-node-id="back-button"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1
          className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 mx-2 truncate"
          data-node-id={isOwnTransport ? 'I1712:42909;3490:907' : 'I1712:42979;3490:907'}
        >
          {language === 'es' ? 'Itinerario de viaje' : 'Travel Itinerary'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content Area with 24px Container Padding */}
      <div className="flex-1 px-4 py-6 w-full flex flex-col items-center gap-6 max-w-[480px] mx-auto">
        {/* Title + Subtitle */}
        <div
          className="flex flex-col gap-3 text-left w-full"
          data-node-id={isOwnTransport ? '1712:42911' : '1712:42981'}
        >
          <h2
            className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px] text-center"
            data-node-id={isOwnTransport ? '2327:4622' : '2327:4622'}
          >
            {language === 'es' ? 'Itinerario de viaje' : 'Travel Itinerary'}
          </h2>
          <p
            className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#171717] tracking-[-0.032px]"
            data-node-id={isOwnTransport ? '2328:11216' : '2328:11216'}
          >
            {language === 'es'
              ? 'Por favor revisa la siguiente información cuidadosamente:'
              : 'Please review the following information carefully:'}
          </p>
        </div>

        {/* Section 1: Transportation Details (Only shown if employer-provided transport) */}
        {!isOwnTransport && (
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-3 w-full shadow-2xs text-left"
            data-node-id="1712:42990"
          >
            <h3
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
              data-node-id="1712:42992"
            >
              {language === 'es' ? 'Detalles de transporte' : 'Transportation Details'}
            </h3>
            <div className="flex gap-2.5 items-start w-full" data-node-id="1712:42993">
              <div
                className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0"
                data-node-id="1712:42995"
              />
              <div className="flex flex-col gap-1 flex-1">
                <p
                  className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]"
                  data-node-id="1712:42999"
                >
                  {language === 'es' ? 'Lugar de salida:' : 'Departure location:'}
                </p>
                <p
                  className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]"
                  data-node-id="1712:43002"
                >
                  {language === 'es'
                    ? 'Autobús #42 - Terminal Central del Norte, Bahía 14'
                    : 'Bus #42 - North Central Bus Terminal, Bay 14'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: First Days and Orientation (Always present) */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-4 w-full shadow-2xs text-left"
          data-node-id={isOwnTransport ? '1712:42920' : '2328:10783'}
        >
          <h3
            className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
            data-node-id={isOwnTransport ? '1712:42922' : '2328:10785'}
          >
            {language === 'es' ? 'Primeros días y orientación' : 'First Days and Orientation'}
          </h3>

          <div className="flex flex-col gap-3.5 w-full">
            {/* Item 1: Where to report */}
            <div className="flex gap-2.5 items-start w-full" data-node-id={isOwnTransport ? '1712:42923' : '2328:10786'}>
              <div className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                  {language === 'es' ? 'Dónde presentarse:' : 'Where to report:'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  Sunnydale Orchards - 1240 Orchard Valley Rd, Yakima, WA 98901
                </p>
              </div>
            </div>

            {/* Item 2: Date to report */}
            <div className="flex gap-2.5 items-start w-full" data-node-id={isOwnTransport ? '1712:42933' : '2328:10796'}>
              <div className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                  {language === 'es' ? 'Fecha para presentarse:' : 'Date to report:'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  {language === 'es' ? '12 de junio, 2025' : 'June 12, 2025'}
                </p>
              </div>
            </div>

            {/* Item 3: Time to report */}
            <div className="flex gap-2.5 items-start w-full" data-node-id={isOwnTransport ? '1712:42943' : '2328:10806'}>
              <div className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                  {language === 'es' ? 'Hora para presentarse:' : 'Time to report:'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  12:00 PM
                </p>
              </div>
            </div>

            {/* Item 4: Employer’s point of contact */}
            <div className="flex gap-2.5 items-start w-full" data-node-id={isOwnTransport ? '1712:42953' : '2328:10816'}>
              <div className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                  {language === 'es' ? 'Punto de contacto del empleador:' : "Employer’s point of contact:"}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  {language === 'es'
                    ? 'Michael Anderson (Coordinador de Logística y Bienvenida)'
                    : 'Michael Anderson (Logistics & Welcome Coordinator)'}
                </p>
              </div>
            </div>

            {/* Item 5: Phone of point of contact */}
            <div className="flex gap-2.5 items-start w-full" data-node-id={isOwnTransport ? '1712:42963' : '2328:10826'}>
              <div className="size-[8px] rounded-full bg-[#0038d0] mt-1.5 shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                  {language === 'es' ? 'Teléfono del contacto:' : 'Phone of point of contact:'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                  +1 (509) 555-0148
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Additional Information (Only shown if employer-provided transport) */}
        {!isOwnTransport && (
          <div
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-3 w-full shadow-2xs text-left"
            data-node-id="1712:43056"
          >
            <h3
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0a0a0a] tracking-[-0.064px]"
              data-node-id="1712:43058"
            >
              {language === 'es' ? 'Información adicional' : 'Additional Information'}
            </h3>
            <p
              className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#171717] tracking-[-0.056px]"
              data-node-id="1712:43064"
            >
              {language === 'es'
                ? 'Presentarse 30 minutos antes de la hora acordada con tu identificación oficial y visa física. Se proporcionará agua, kit de bienvenida y transporte hacia el alojamiento del rancho.'
                : 'Please arrive 30 minutes prior to scheduled time with your official ID and physical visa. Water, welcome kit, and transportation to orchard lodging will be provided.'}
            </p>
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar */}
      <div
        className="sticky bottom-0 z-20 w-full bg-[#fafafa] border-t border-[#e5e5e5] px-4 py-3 flex flex-col items-center"
        data-node-id={isOwnTransport ? '1712:42973' : '1712:43065'}
      >
        <button
          onClick={handleConfirm}
          className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-sm transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id={isOwnTransport ? '1712:42975' : '1712:43067'}
        >
          <span>{language === 'es' ? 'Confirmar' : 'Confirm'}</span>
        </button>
      </div>
    </div>
  );
};
