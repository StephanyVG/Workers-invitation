import React from 'react';
import { useApp } from '../context/AppContext';

export const NotificationsView: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const notifications = [
    {
      id: 'notif-1',
      title: language === 'es' ? 'Sunnydale Orchards quiere tener una entrevista,' : 'Sunnydale Orchards wants to have an interview,',
      description: language === 'es' ? 'Elige un horario para reunirte con ellos' : 'Choose a time to meet with them',
      time: language === 'es' ? 'Enviado hace 2 horas' : 'Sent 2 hours ago',
      type: 'interview',
      actionTab: 'available_times' as const
    },
    {
      id: 'notif-2',
      title: language === 'es' ? '¡Nueva invitación a empleo recibida!' : 'New job invitation received!',
      description: language === 'es' ? 'Coordinador de Manejo Integrado de Plagas - Sunnydale Orchards Farm' : 'Integrated Pest Management Coordinator - Sunnydale Orchards Farm',
      time: language === 'es' ? 'Enviado hace 1 día' : 'Sent 1 day ago',
      type: 'job',
      actionTab: 'job_offer_detail' as const
    }
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
            className="bg-[#e7f6ff] border border-[#b0deff] rounded-[16px] p-[16px] flex gap-[12px] items-start shadow-xs hover:shadow-md cursor-pointer active:scale-[0.99] transition-all"
          >
            <div className="size-[36px] rounded-full bg-[#0038d0] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[20px]">
                {notif.type === 'interview' ? 'calendar_month' : 'work'}
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-[4px]">
              <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                {notif.title}
              </p>
              <p className="font-normal text-[14px] leading-[18px] text-[#404040]">
                {notif.description}
              </p>
              <p className="font-medium italic text-[12px] text-[#737373] mt-1">
                {notif.time}
              </p>
            </div>

            <span className="material-symbols-outlined text-slate-400 text-[20px] self-center">
              chevron_right
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
