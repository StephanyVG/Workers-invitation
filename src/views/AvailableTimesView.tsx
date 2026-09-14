import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface DateOption {
  day: string;
  dayEs: string;
  date: string;
}

const DATE_OPTIONS: DateOption[] = [
  { day: 'Wed', dayEs: 'Mié', date: '06' },
  { day: 'Thu', dayEs: 'Jue', date: '07' },
  { day: 'Frid', dayEs: 'Vie', date: '08' },
  { day: 'Mon', dayEs: 'Lun', date: '11' },
  { day: 'Tue', dayEs: 'Mar', date: '12' },
  { day: 'Wed', dayEs: 'Mié', date: '14' }
];

const TIME_SLOTS = [
  '13:00 hrs - 14:00 hrs',
  '14:00 hrs - 15:00 hrs',
  '15:00 hrs - 16:00 hrs'
];

export const AvailableTimesView: React.FC = () => {
  const { language, setCurrentTab, addToast, triggerConfetti } = useApp();
  const [selectedDate, setSelectedDate] = useState<string>('07');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleConfirmTime = () => {
    if (!selectedTimeSlot) return;
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Entrevista Programada!' : 'Interview Scheduled!',
      language === 'es'
        ? `Horario seleccionado: Jueves 07 de Abril, ${selectedTimeSlot}`
        : `Selected time: Thursday April 07, ${selectedTimeSlot}`,
      'success'
    );
    setCurrentTab('home');
  };

  const handleDeclineJob = () => {
    addToast(
      language === 'es' ? 'Invitación rechazada' : 'Invitation declined',
      language === 'es'
        ? 'Has declinado la oferta de entrevista.'
        : 'You have declined the interview offer.',
      'info'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#fafafa] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif]"
      data-node-id="1004:4515"
    >
      {/* Top Bar Header (1004:4600) */}
      <div
        className="sticky top-0 z-20 bg-[#fafafa] px-[16px] py-[12px] border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs"
        data-node-id="1004:4600"
      >
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-transform cursor-pointer"
          aria-label="Back"
          data-node-id="3529:1306"
        >
          <img
            src="/assets/available_times/arrow_left.svg"
            alt="Back"
            className="size-[20px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="material-symbols-outlined text-[20px] text-[#191c1b]">arrow_back</span>
        </button>

        <h1
          className="font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-tight text-center flex-1"
          data-node-id="3490:907"
        >
          {language === 'es' ? 'Horarios Disponibles' : 'Available Times'}
        </h1>

        <div className="size-[44px]" />
      </div>

      {/* Main Body Content */}
      <div className="flex-1 px-[16px] py-[24px] space-y-[24px]" data-node-id="1004:4516">
        {/* Title Subtitle */}
        <div data-node-id="1004:4517">
          <h2
            className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]"
            data-node-id="1004:4518"
          >
            {language === 'es' ? 'Elige un horario para tu entrevista.' : 'Pick a time for your interview.'}
          </h2>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-between" data-node-id="1004:4519">
          <span
            className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]"
            data-node-id="1004:4520"
          >
            {language === 'es' ? 'Abril, 2025' : 'April, 2025'}
          </span>
          <div className="flex items-center gap-[12px]" data-node-id="1004:4521">
            <button
              className="bg-white border border-[#e5e5e5] rounded-full size-[36px] flex items-center justify-center shadow-xs active:scale-95 transition-transform cursor-pointer"
              aria-label="Previous month"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700">chevron_left</span>
            </button>
            <button
              className="bg-white border border-[#e5e5e5] rounded-full size-[36px] flex items-center justify-center shadow-xs active:scale-95 transition-transform cursor-pointer"
              aria-label="Next month"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Date Selector Pills */}
        <div className="flex items-center gap-[8px] overflow-x-auto pb-1 no-scrollbar" data-node-id="1004:4524">
          {DATE_OPTIONS.map((opt) => {
            const isSelected = selectedDate === opt.date;
            return (
              <button
                key={opt.date}
                onClick={() => setSelectedDate(opt.date)}
                className={`flex-shrink-0 w-[56px] py-[12px] rounded-[12px] flex flex-col items-center gap-[4px] cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#0045ff] text-white shadow-sm'
                    : 'bg-[#f5f5f5] text-[#171717] hover:bg-[#eaeaea]'
                }`}
              >
                <span className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[22px] tracking-[-0.064px]">
                  {language === 'es' ? opt.dayEs : opt.day}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px]">
                  {opt.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Time Slots Radio Options */}
        <div className="flex flex-col divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]" data-node-id="1004:4567">
          {TIME_SLOTS.map((slot) => {
            const isSelected = selectedTimeSlot === slot;
            return (
              <div
                key={slot}
                onClick={() => setSelectedTimeSlot(slot)}
                className="py-[16px] flex items-center gap-[12px] cursor-pointer hover:bg-slate-50 transition-colors px-1"
                data-node-id="1004:4568"
              >
                {/* Radio Button */}
                <div className={`size-[24px] rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                  isSelected ? 'border-[#0038d0] bg-[#0038d0]' : 'border-slate-300 bg-white'
                }`}>
                  {isSelected ? (
                    <div className="size-[10px] rounded-full bg-white" />
                  ) : (
                    <img
                      src="/assets/available_times/radio_default.svg"
                      alt=""
                      className="size-full object-contain opacity-50"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                </div>

                <span className="font-semibold text-[14px] leading-[18px] text-[#171717] tracking-[-0.028px]">
                  {slot}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Actions Container (1004:4601) */}
      <div className="p-[16px] space-y-[12px] bg-[#fafafa] border-t border-[#e5e5e5] mt-auto shrink-0" data-node-id="1004:4601">
        <button
          onClick={handleConfirmTime}
          disabled={!selectedTimeSlot}
          className={`w-full min-h-[44px] px-[16px] py-[10px] rounded-full font-semibold text-[16px] leading-[22px] text-center transition-all cursor-pointer shadow-xs flex items-center justify-center ${
            selectedTimeSlot
              ? 'bg-[#0038d0] text-white active:scale-[0.98]'
              : 'bg-[#e5e5e5] text-[#737373] cursor-not-allowed border border-[#d4d4d4]'
          }`}
          data-node-id="1004:4603"
        >
          {language === 'es' ? 'Elegir este horario' : 'Choose This Time'}
        </button>

        <button
          onClick={handleDeclineJob}
          className="w-full h-[44px] px-[16px] py-[10px] rounded-full font-semibold text-[16px] leading-[22px] text-[#c7290e] text-center hover:bg-red-50 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          data-node-id="1004:4604"
        >
          {language === 'es' ? 'No quiero este trabajo' : "I don't want this job"}
        </button>
      </div>
    </div>
  );
};
