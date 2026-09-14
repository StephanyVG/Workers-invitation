import React from 'react';
import { useApp } from '../context/AppContext';

const imgVector = "/assets/calendar_empty/imgVector.svg";
const imgVector1 = "/assets/calendar_empty/imgVector1.svg";
const imgVector2 = "/assets/calendar_empty/imgVector2.svg";
const imgVector3 = "/assets/calendar_empty/imgVector3.svg";
const imgVector4 = "/assets/calendar_empty/imgVector4.svg";
const imgVector5 = "/assets/calendar_empty/imgVector5.svg";
const imgVector6 = "/assets/calendar_empty/imgVector6.svg";
const imgVector7 = "/assets/calendar_empty/imgVector7.svg";
const imgVector8 = "/assets/calendar_empty/imgVector8.svg";
const imgVector9 = "/assets/calendar_empty/imgVector9.svg";
const imgVector10 = "/assets/calendar_empty/imgVector10.svg";
const imgVector11 = "/assets/calendar_empty/imgVector11.svg";
const imgVector12 = "/assets/calendar_empty/imgVector12.svg";
const imgVector13 = "/assets/calendar_empty/imgVector13.svg";
const imgVector14 = "/assets/calendar_empty/imgVector14.svg";
const imgVector15 = "/assets/calendar_empty/imgVector15.svg";
const imgVector16 = "/assets/calendar_empty/imgVector16.svg";

const imgEllipse311 = "/assets/calendar_empty/imgEllipse311.svg";
const imgEllipse317 = "/assets/calendar_empty/imgEllipse317.svg";
const imgEllipse318 = "/assets/calendar_empty/imgEllipse318.svg";
const imgEllipse319 = "/assets/calendar_empty/imgEllipse319.svg";
const imgEllipse316 = "/assets/calendar_empty/imgEllipse316.svg";

export const CalendarView: React.FC = () => {
  const { language, scheduledInterview, addToast, setSelectedAppointmentDetail } = useApp();

  const handleJoinCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToast(
      language === 'es' ? 'Conectando a la videollamada...' : 'Joining video meeting...',
      language === 'es'
        ? 'Iniciando sala virtual con Sunnydale Orchards Farm.'
        : 'Starting virtual room with Sunnydale Orchards Farm.',
      'info'
    );
  };

  // Interview details (from state or default fallback matching Figma 1004:4185)
  const interviewDate = scheduledInterview?.date || '11 Apr';
  const interviewTime = scheduledInterview?.time || '12:00 - 13:00';
  const interviewFarm = scheduledInterview?.farm || 'Sunnydale Orchards Farm';

  const handleOpenDetail = () => {
    setSelectedAppointmentDetail({
      date: interviewDate,
      time: interviewTime,
      farm: interviewFarm
    });
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 font-['Inter',sans-serif] text-left"
      data-node-id="1004:4185"
    >
      {/* Sticky Top Header (1004:4186) */}
      <div
        className="sticky top-0 z-20 w-full bg-white px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-center shrink-0 shadow-2xs"
        data-node-id="1004:4186"
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px]"
          data-node-id="I1004:4186;3490:907"
        >
          {language === 'es' ? 'Calendario' : 'Calendar'}
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-[16px] py-[24px] space-y-[24px]" data-node-id="1004:4188">
        {/* Date Section Heading (1004:4189) */}
        <div className="flex items-center gap-[8px]" data-node-id="1004:4189">
          <span className="font-semibold text-[18px] leading-[24px] text-[#262626]">
            {interviewDate}
          </span>
          <div className="size-[4px] rounded-full bg-[#262626]" />
          <span className="font-normal text-[18px] leading-[24px] text-[#262626]">
            {language === 'es' ? 'Hoy' : 'Today'}
          </span>
        </div>

        {/* Scheduled Interview Card List (Figma Node 1465:27794 / 1004:4185) */}
        <div className="space-y-[16px]">
          {/* Card 1 */}
          <div
            onClick={handleOpenDetail}
            className="bg-white border border-[#e5e5e5] rounded-[12px] p-[16px] pl-[12px] flex gap-[12px] items-center shadow-xs cursor-pointer hover:bg-slate-50 transition-colors"
            data-node-id="1465:27794"
          >
            {/* Left Vertical Blue Stripe */}
            <div className="bg-[#2874ff] w-[3px] rounded-[12px] self-stretch shrink-0" data-node-id="1465:27795" />

            {/* Inner Content */}
            <div className="flex-1 flex flex-col gap-[12px]" data-node-id="1465:27796">
              <div className="flex flex-col gap-[4px]" data-node-id="1465:27797">
                <div className="flex items-center justify-between" data-node-id="1465:27798">
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
                className="bg-[#d3efff] hover:bg-[#b0deff] text-[#0045ff] rounded-full h-[32px] px-[12px] flex items-center justify-center gap-[6px] font-semibold text-[12px] leading-[16px] tracking-tight cursor-pointer active:scale-[0.98] transition-all shadow-xs w-full"
                data-node-id="1465:27803"
              >
                <span className="material-symbols-outlined text-[18px]">videocam</span>
                <span>{language === 'es' ? 'Unirse' : 'Join'}</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={handleOpenDetail}
            className="bg-white border border-[#e5e5e5] rounded-[12px] p-[16px] pl-[12px] flex gap-[12px] items-center shadow-xs cursor-pointer hover:bg-slate-50 transition-colors"
            data-node-id="1465:27810"
          >
            <div className="bg-[#2874ff] w-[3px] rounded-[12px] self-stretch shrink-0" />
            <div className="flex-1 flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[16px] text-[#171717]">
                    {interviewDate}
                  </span>
                  <span className="font-normal text-[14px] text-[#404040]">
                    {interviewTime}
                  </span>
                </div>
                <p className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                  {language === 'es'
                    ? `Entrevista con ${interviewFarm}`
                    : `Interview with ${interviewFarm}`}
                </p>
              </div>
              <button
                onClick={handleJoinCall}
                className="bg-[#d3efff] hover:bg-[#b0deff] text-[#0045ff] rounded-full h-[32px] px-[12px] flex items-center justify-center gap-[6px] font-semibold text-[12px] leading-[16px] cursor-pointer active:scale-[0.98] transition-all shadow-xs w-full"
              >
                <span className="material-symbols-outlined text-[18px]">videocam</span>
                <span>{language === 'es' ? 'Unirse' : 'Join'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
