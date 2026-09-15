import React from 'react';
import { useApp } from '../../context/AppContext';

export const ConsularAppointmentDetailsBottomSheet: React.FC = () => {
  const { showConsularDetailsModal, setShowConsularDetailsModal, language, addToast } = useApp();

  if (!showConsularDetailsModal) return null;

  const handleDownload = (docName: string) => {
    addToast(
      language === 'es' ? 'Descarga iniciada' : 'Download started',
      language === 'es'
        ? `Descargando archivo: ${docName}`
        : `Downloading file: ${docName}`,
      'success'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex flex-col justify-end animate-fade-in pointer-events-auto select-none"
      onClick={() => setShowConsularDetailsModal(false)}
      data-node-id="1628:50484"
    >
      <div
        className="bg-[#f5f5f5] rounded-t-[24px] max-h-[90vh] flex flex-col w-full sm:max-w-[430px] sm:mx-auto overflow-hidden shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        data-node-id="1628:50552"
      >
        {/* Grabber Handle */}
        <div className="w-full flex items-center justify-center pt-3 pb-2 cursor-pointer bg-[#f5f5f5]">
          <div className="bg-[#191c1b] h-[4px] w-[32px] rounded-full opacity-60" />
        </div>

        {/* Top Header - No 'X' button, entire modal background is #F5F5F5 */}
        <div className="px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-start bg-[#f5f5f5] shrink-0">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#171717] tracking-[-0.08px]">
            {language === 'es' ? 'Detalles de la Cita Consular' : 'Consular Appointment Details'}
          </h2>
        </div>

        {/* Scrollable Content with 24px Container Padding */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 text-left font-['Inter',sans-serif]">
          {/* Section 1: What to bring */}
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#d3efff] text-[#0045ff] font-['DM_Sans',sans-serif] font-semibold text-[18px] flex items-center justify-center shrink-0">
                1
              </div>
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-black tracking-[-0.08px]">
                {language === 'es' ? 'Qué llevar' : 'What to bring'}
              </h3>
            </div>

            {/* Amber Alert Box */}
            <div className="bg-[#ffd16e] border border-[#ff970c] rounded-[8px] p-4 flex flex-col gap-3 text-left">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[22px] text-[#813d0d]">mail</span>
                <p className="font-semibold text-[14px] leading-[18px] text-[#813d0d]">
                  {language === 'es' ? 'Envía tu pasaporte antes del CAS' : 'Mail your passport before CAS'}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Fecha límite para enviar' : 'Deadline to mail'}
                </p>
                <p className="font-normal text-[14px] text-[#404040]">
                  October 12, 2026
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Dirección de envío' : 'Address to mail'}
                </p>
                <p className="font-normal text-[14px] text-[#404040]">
                  Av. Reforma 222, Col. Juárez, CDMX
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Nombre del destinatario' : 'Name of the person to address'}
                </p>
                <p className="font-normal text-[14px] text-[#404040]">
                  Oscar Aguilar
                </p>
              </div>

              <div className="border-t border-[#ff970c]/40 pt-2">
                <p className="font-semibold text-[14px] text-[#171717]">
                  {language === 'es' ? 'Enviar únicamente por DHL' : 'Mail with DHL only'}
                </p>
              </div>
            </div>

            {/* Blue Documents Box */}
            <div className="bg-[#e7f6ff] border border-[#0447ff] rounded-[8px] p-4 flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-2">
                <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0a0a0a]">
                  {language === 'es' ? 'Trae esto contigo:' : 'Bring these with you:'}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#0038d0] shrink-0" />
                  <p className="font-normal text-[15px] text-[#171717]">
                    {language === 'es' ? 'Pasaporte' : 'Passport'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#0038d0] shrink-0" />
                  <p className="font-normal text-[15px] text-[#171717]">
                    {language === 'es' ? 'Fotos para pasaporte' : 'Passport Photos'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0a0a0a]">
                  {language === 'es' ? 'Descarga esto e imprímelo' : 'Download this and print it'}
                </h4>

                {[
                  { id: '1', name: language === 'es' ? 'Oferta de trabajo firmada' : 'Signed Job Offer', size: '1.1 MB of 5 MB' },
                  { id: '2', name: language === 'es' ? 'Confirmación DS-160' : 'DS-160 confirmation', size: '1.1 MB of 5 MB' },
                  { id: '3', name: 'I797', size: '1.1 MB of 5 MB' },
                  { id: '4', name: language === 'es' ? 'Confirmación de cita' : 'Appointment Confirmation', size: '1.1 MB of 5 MB' },
                ].map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white border border-[#d4d4d4] rounded-[8px] p-3 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="size-[28px] rounded-[6px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px] text-[#525252]">description</span>
                      </div>
                      <div className="flex flex-col min-w-0 text-left">
                        <p className="font-semibold text-[13px] leading-[18px] text-[#171717] truncate">
                          {doc.name}
                        </p>
                        <p className="font-normal text-[12px] text-[#525252]">
                          {doc.size}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.name)}
                      className="size-[32px] rounded-full bg-[#d3efff] hover:bg-[#b0deff] active:scale-95 text-[#0045ff] flex items-center justify-center shrink-0 transition-transform cursor-pointer"
                      aria-label="Download"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Your Schedule */}
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#d3efff] text-[#0045ff] font-['DM_Sans',sans-serif] font-semibold text-[18px] flex items-center justify-center shrink-0">
                2
              </div>
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-black tracking-[-0.08px]">
                {language === 'es' ? 'Tu horario' : 'Your Schedule'}
              </h3>
            </div>

            {/* Biometric Appointment */}
            <div className="border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3">
              <h4 className="font-semibold text-[16px] text-[#171717]">
                {language === 'es' ? 'Cita Biométrica' : 'Biometric Appointment'}
              </h4>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">calendar_today</span>
                <span>June 12, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">schedule</span>
                <span>12:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">location_on</span>
                <span>[Full Address of the Location]</span>
              </div>
            </div>

            {/* Interview */}
            <div className="border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3">
              <h4 className="font-semibold text-[16px] text-[#171717]">
                {language === 'es' ? 'Entrevista' : 'Interview'}
              </h4>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">calendar_today</span>
                <span>June 12, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">schedule</span>
                <span>12:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#404040]">
                <span className="material-symbols-outlined text-[20px] text-[#0045ff]">location_on</span>
                <span>[Full Address of the Location]</span>
              </div>
            </div>
          </div>

          {/* Section 3: Other details */}
          <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-6 flex flex-col gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="size-[32px] rounded-full bg-[#d3efff] text-[#0045ff] font-['DM_Sans',sans-serif] font-semibold text-[18px] flex items-center justify-center shrink-0">
                3
              </div>
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-black tracking-[-0.08px]">
                {language === 'es' ? 'Otros detalles' : 'Other details'}
              </h3>
            </div>

            {/* Meeting Point and Contact */}
            <div className="border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-2.5">
              <h4 className="font-semibold text-[16px] text-[#171717]">
                {language === 'es' ? 'Punto de encuentro y contacto' : 'Meeting Point and Contact'}
              </h4>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Nombre del contacto:' : '• Name of point of contact:'}</span>
                <span className="text-[#525252] pl-3">[Name of the contact]</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Teléfono del contacto:' : '• Phone of point of contact:'}</span>
                <span className="text-[#525252] pl-3">[+1 0000 000]</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Fecha:' : '• Date:'}</span>
                <span className="text-[#525252] pl-3">June 12, 2025</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Hora:' : '• Time:'}</span>
                <span className="text-[#525252] pl-3">12:00 PM</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Ubicación:' : '• Location:'}</span>
                <span className="text-[#525252] pl-3">[Full Address of the Location]</span>
              </div>
            </div>

            {/* Accommodation Details */}
            <div className="border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-2.5">
              <h4 className="font-semibold text-[16px] text-[#171717]">
                {language === 'es' ? 'Detalles del alojamiento' : 'Accommodation Details'}
              </h4>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Nombre del hotel:' : '• Hotel name:'}</span>
                <span className="text-[#525252] pl-3">[Name of the hotel]</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Ubicación:' : '• Location:'}</span>
                <span className="text-[#525252] pl-3">[Full Address of the Location]</span>
              </div>
              <div className="flex flex-col gap-1 text-[14px]">
                <span className="font-medium text-[#171717]">{language === 'es' ? '• Fecha de check-in:' : '• Check-In Date:'}</span>
                <span className="text-[#525252] pl-3">June 12, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
