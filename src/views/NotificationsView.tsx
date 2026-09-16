import React from 'react';
import { useApp, AppTab } from '../context/AppContext';

export const NotificationsView: React.FC = () => {
  const {
    worker,
    language,
    setCurrentTab,
    showPushBanner,
    hasUploadedVisa,
    hasConfirmedTravelItinerary
  } = useApp();

  const isSigned = worker.hasSignedContract || worker.status === 'oferta_firmada';
  const isOfferSent = worker.status === 'oferta_enviada' || isSigned;
  const isDs160Submitted = worker.status === 'solicitud_visa' || worker.status === 'visa_aprobada' || worker.status === 'listo_para_viaje';

  // Keep all notifications in the list. Change unread status once acted upon.
  const notifications: Array<{
    id: string;
    title: string;
    description: string;
    time: string;
    type: 'job' | 'interview' | 'visa';
    isRead: boolean;
    actionTab: AppTab;
  }> = [
    ...(hasUploadedVisa
      ? [
          {
            id: 'notif-travel-itinerary',
            title:
              language === 'es'
                ? 'Revisa tu itinerario de viaje'
                : 'Review Your Travel Itinerary',
            description:
              language === 'es'
                ? 'Tu transporte ha sido asignado. Es importante que revises los horarios y puntos de encuentro.'
                : 'Your transportation has been assigned. It’s important that you review the schedules and meeting points.',
            time: 'Hace 2 horas',
            type: 'visa' as const,
            isRead: hasConfirmedTravelItinerary,
            actionTab: 'travel_itinerary' as AppTab,
          },
        ]
      : []),
    ...(isDs160Submitted
      ? [
          {
            id: 'notif-ds160',
            title:
              language === 'es'
                ? 'Tu DS-160 ha sido enviado'
                : 'Your DS-160 has been submitted',
            description:
              language === 'es'
                ? 'Puedes ver los detalles de tu DS-160 en “Solicitar Visa de Trabajo de EE. UU.”'
                : 'You can view the details of your DS-160 in the “Apply for US Work Visa”',
            time: language === 'es' ? 'Hace 2 h' : '2 hrs ago',
            type: 'visa' as const,
            isRead: false,
            actionTab: 'documents' as AppTab,
          },
        ]
      : []),
    ...(isOfferSent
      ? [
          {
            id: 'notif-offer',
            title:
              language === 'es'
                ? 'Sunnydale Orchards te envió una oferta'
                : 'Sunnydale Orchards sent you an offer',
            description:
              language === 'es'
                ? isSigned
                  ? 'Oferta de trabajo aceptada y firmada.'
                  : 'Por favor revisa el contrato e infórmale al empleador si deseas aceptar el trabajo.'
                : isSigned
                  ? 'Job offer accepted and signed.'
                  : 'Please review the contract and let the employer know if you wish to accept the job.',
            time: language === 'es' ? 'Enviado hace 2 horas' : 'Sent 2 hours ago',
            type: 'job' as const,
            isRead: isSigned,
            actionTab: isSigned ? ('view_signed_document' as AppTab) : ('job_offer_detail' as AppTab),
          },
        ]
      : []),
    ...(worker.status === 'entrevista' || showPushBanner
      ? [
          {
            id: 'notif-1',
            title:
              language === 'es'
                ? 'Sunnydale Orchards quiere tener una entrevista'
                : 'Sunnydale Orchards wants to have an interview',
            description:
              language === 'es'
                ? 'Elige un horario para reunirte con ellos'
                : 'Choose a time to meet with them',
            time: language === 'es' ? 'Enviado hace 2 horas' : 'Sent 2 hours ago',
            type: 'interview' as const,
            isRead: isSigned,
            actionTab: 'available_times' as AppTab,
          },
        ]
      : []),
    {
      id: 'notif-2',
      title: language === 'es' ? '¡Nueva invitación a empleo recibida!' : 'New job invitation received!',
      description:
        language === 'es'
          ? 'Coordinador de Manejo Integrado de Plagas - Sunnydale Orchards Farm'
          : 'Integrated Pest Management Coordinator - Sunnydale Orchards Farm',
      time: language === 'es' ? 'Enviado hace 1 día' : 'Sent 1 day ago',
      type: 'job' as const,
      isRead: true,
      actionTab: isSigned
        ? ('view_signed_document' as AppTab)
        : worker.status === 'oferta_enviada'
        ? ('job_offer_detail' as AppTab)
        : ('job_details' as AppTab),
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif]">
      {/* Top Bar Header */}
      <div className="sticky top-0 z-20 bg-white px-[16px] py-[12px] border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs">
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-transform cursor-pointer"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[20px] text-[#191c1b]">arrow_back</span>
        </button>

        <h1 className="font-semibold text-[18px] leading-[24px] text-[#0038d0] tracking-tight text-center flex-1">
          {language === 'es' ? 'Notificaciones' : 'Notifications'}
        </h1>

        <div className="size-[44px]" />
      </div>

      {/* Main List Content */}
      <div className="flex-1 p-[16px] space-y-[12px]">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <span className="font-semibold text-[14px] text-[#525252]">
            {language === 'es' ? 'Recientes' : 'Recent'}
          </span>
          <span className="text-[12px] text-[#0038d0] font-medium cursor-pointer">
            {language === 'es' ? 'Marcar como leídas' : 'Mark all as read'}
          </span>
        </div>

        {notifications.map((notif) => (
          <div
            key={notif.id}
            onClick={() => setCurrentTab(notif.actionTab)}
            className={`border rounded-[16px] p-[16px] flex gap-[12px] items-start shadow-xs hover:shadow-md cursor-pointer active:scale-[0.99] transition-all ${
              notif.isRead
                ? 'bg-white border-[#e5e5e5]'
                : 'bg-[#e7f6ff] border-[#b0deff]'
            }`}
          >
            {/* Notification Icon Badge: BubbleZip.svg for job notifications */}
            <div className="size-[36px] rounded-full flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
              {notif.type === 'job' || notif.type === 'visa' ? (
                <img src="/BubbleZip.svg" alt="Zipmi" className="size-full object-cover" />
              ) : (
                <div className="size-full bg-[#0038d0] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-[4px]">
              <div className="flex items-center gap-2">
                <p className={`font-semibold text-[14px] leading-[18px] ${notif.isRead ? 'text-[#404040]' : 'text-[#171717]'}`}>
                  {notif.title}
                </p>
                {!notif.isRead && (
                  <span className="size-2 rounded-full bg-[#0038d0] shrink-0" />
                )}
              </div>
              <p className="font-normal text-[14px] leading-[18px] text-[#525252]">
                {notif.description}
              </p>
              <p className="font-medium text-[14px] text-[#737373] mt-1">
                {notif.time}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white border border-[#e5e5e5] rounded-full p-[6px] size-[32px] flex items-center justify-center shadow-xs hover:bg-slate-50 active:scale-90 transition-all shrink-0 cursor-pointer self-center"
              aria-label={language === 'es' ? 'Eliminar notificación' : 'Delete notification'}
            >
              <img
                src="/assets/push_notification/trash_icon.svg"
                alt="Delete"
                className="size-[16px] object-contain opacity-70 hover:opacity-100"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
