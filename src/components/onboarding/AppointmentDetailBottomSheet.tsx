import React from 'react';
import { useApp } from '../../context/AppContext';

export const AppointmentDetailBottomSheet: React.FC = () => {
  const {
    language,
    worker,
    selectedAppointmentDetail,
    setSelectedAppointmentDetail,
    setScheduledInterview,
    setCurrentTab,
    addToast
  } = useApp();

  if (!selectedAppointmentDetail) return null;

  const handleClose = () => {
    setSelectedAppointmentDetail(null);
  };

  const handleJoinCall = () => {
    setSelectedAppointmentDetail(null);
    setCurrentTab('video_loader');
  };

  const handleCancelInterview = () => {
    setScheduledInterview(null);
    setSelectedAppointmentDetail(null);
    addToast(
      language === 'es' ? 'Entrevista Cancelada' : 'Interview Canceled',
      language === 'es'
        ? 'Has cancelado la cita de entrevista.'
        : 'You have canceled the interview appointment.',
      'info'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40 backdrop-blur-[1px] animate-fade-in pointer-events-auto"
      onClick={handleClose}
      data-node-id="1004:4399"
    >
      {/* Bottom Sheet Container */}
      <div
        className="w-full bg-white rounded-t-[28px] p-[24px] flex flex-col gap-[16px] shadow-2xl animate-slide-up text-left font-['Inter',sans-serif]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag Handle Bar */}
        <div className="w-[48px] h-[5px] bg-[#d4d4d4] rounded-full mx-auto mb-1 shrink-0" />

        {/* Header Title & Status Badge */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[28px] text-[#171717]">
              {language === 'es' ? 'Entrevista' : 'Interview'}
            </h2>
            <p className="font-normal text-[15px] leading-[20px] text-[#525252]">
              {selectedAppointmentDetail.time}
            </p>
            <p className="font-normal text-[15px] leading-[20px] text-[#525252]">
              {selectedAppointmentDetail.farm}
            </p>
          </div>

          <span className="font-semibold text-[14px] leading-[18px] text-[#171717] bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
            {language === 'es' ? 'En 15 min' : 'In 15 min'}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5e5e5] my-1" />

        {/* Participants Section */}
        <div className="space-y-[12px]">
          <h3 className="font-semibold text-[16px] leading-[22px] text-[#171717]">
            {language === 'es' ? 'Participantes' : 'Participants'}
          </h3>

          <div className="space-y-[12px]">
            {/* Participant 1: Farm / Organizer */}
            <div className="flex items-center gap-[12px]">
              <img
                src="/assets/home_updated/apples_cover.png"
                alt={selectedAppointmentDetail.farm}
                className="size-[40px] rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200&auto=format&fit=crop&q=80";
                }}
              />
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                  {selectedAppointmentDetail.farm}
                </span>
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">
                  {language === 'es' ? 'Organizador' : 'Organizer'}
                </span>
              </div>
            </div>

            {/* Participant 2: Worker / You */}
            <div className="flex items-center gap-[12px]">
              {worker.photoUrl ? (
                <img
                  src={worker.photoUrl}
                  alt={worker.fullName}
                  className="size-[40px] rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                />
              ) : (
                <div className="size-[40px] rounded-full bg-[#0038d0] text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {worker.fullName.charAt(0) || 'G'}
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[14px] leading-[18px] text-[#171717]">
                  {worker.fullName || 'Guadalupe González López'}
                </span>
                <span className="font-normal text-[12px] leading-[16px] text-[#737373]">
                  {language === 'es' ? 'Tú' : 'You'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5e5e5] my-1" />

        {/* Action Buttons */}
        <div className="space-y-[8px] pt-1">
          <button
            onClick={handleJoinCall}
            className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] text-white rounded-full font-semibold text-[16px] leading-[22px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">videocam</span>
            <span>{language === 'es' ? 'Unirse' : 'Join'}</span>
          </button>

          <button
            onClick={handleCancelInterview}
            className="w-full h-[44px] min-h-[44px] px-4 py-[10px] text-[#c7290e] rounded-full font-semibold text-[16px] leading-[22px] text-center hover:bg-red-50 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          >
            {language === 'es' ? 'Cancelar entrevista' : 'Cancel interview'}
          </button>
        </div>
      </div>
    </div>
  );
};
