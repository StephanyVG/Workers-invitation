import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface DayOption {
  day: string;
  dayEs: string;
  date: string;
  timeSlots: string[];
}

interface MonthData {
  nameEn: string;
  nameEs: string;
  days: DayOption[];
}

const MONTHS_DATA: MonthData[] = [
  {
    nameEn: 'March, 2025',
    nameEs: 'Marzo, 2025',
    days: [
      { day: 'Mon', dayEs: 'Lun', date: '24', timeSlots: ['09:00 hrs - 10:00 hrs', '11:00 hrs - 12:00 hrs', '15:00 hrs - 16:00 hrs'] },
      { day: 'Tue', dayEs: 'Mar', date: '25', timeSlots: ['10:00 hrs - 11:00 hrs', '14:00 hrs - 15:00 hrs'] },
      { day: 'Wed', dayEs: 'Mié', date: '26', timeSlots: ['08:30 hrs - 09:30 hrs', '13:00 hrs - 14:00 hrs', '16:00 hrs - 17:00 hrs'] },
      { day: 'Thu', dayEs: 'Jue', date: '27', timeSlots: ['11:00 hrs - 12:00 hrs', '14:00 hrs - 15:00 hrs'] },
      { day: 'Fri', dayEs: 'Vie', date: '28', timeSlots: ['09:00 hrs - 10:00 hrs', '12:00 hrs - 13:00 hrs', '15:30 hrs - 16:30 hrs'] }
    ]
  },
  {
    nameEn: 'April, 2025',
    nameEs: 'Abril, 2025',
    days: [
      { day: 'Wed', dayEs: 'Mié', date: '06', timeSlots: ['09:30 hrs - 10:30 hrs', '11:30 hrs - 12:30 hrs', '15:00 hrs - 16:00 hrs'] },
      { day: 'Thu', dayEs: 'Jue', date: '07', timeSlots: ['13:00 hrs - 14:00 hrs', '14:00 hrs - 15:00 hrs', '15:00 hrs - 16:00 hrs'] },
      { day: 'Frid', dayEs: 'Vie', date: '08', timeSlots: ['10:00 hrs - 11:00 hrs', '13:30 hrs - 14:30 hrs', '16:00 hrs - 17:00 hrs'] },
      { day: 'Mon', dayEs: 'Lun', date: '11', timeSlots: ['08:30 hrs - 09:30 hrs', '12:00 hrs - 13:00 hrs'] },
      { day: 'Tue', dayEs: 'Mar', date: '12', timeSlots: ['11:00 hrs - 12:00 hrs', '14:30 hrs - 15:30 hrs', '16:30 hrs - 17:30 hrs'] },
      { day: 'Wed', dayEs: 'Mié', date: '14', timeSlots: ['09:00 hrs - 10:00 hrs', '13:00 hrs - 14:00 hrs', '15:00 hrs - 16:00 hrs'] }
    ]
  },
  {
    nameEn: 'May, 2025',
    nameEs: 'Mayo, 2025',
    days: [
      { day: 'Thu', dayEs: 'Jue', date: '01', timeSlots: ['09:00 hrs - 10:00 hrs', '14:00 hrs - 15:00 hrs'] },
      { day: 'Fri', dayEs: 'Vie', date: '02', timeSlots: ['10:30 hrs - 11:30 hrs', '13:00 hrs - 14:00 hrs', '16:00 hrs - 17:00 hrs'] },
      { day: 'Mon', dayEs: 'Lun', date: '05', timeSlots: ['11:00 hrs - 12:00 hrs', '15:00 hrs - 16:00 hrs'] },
      { day: 'Tue', dayEs: 'Mar', date: '06', timeSlots: ['08:30 hrs - 09:30 hrs', '12:30 hrs - 13:30 hrs', '14:30 hrs - 15:30 hrs'] }
    ]
  }
];

export const AvailableTimesView: React.FC = () => {
  const { language, setCurrentTab, addToast, triggerConfetti } = useApp();
  const [monthIndex, setMonthIndex] = useState<number>(1); // Default to April 2025 (index 1)
  const currentMonth = MONTHS_DATA[monthIndex] || MONTHS_DATA[1];

  const [selectedDate, setSelectedDate] = useState<string>('07');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Active day object
  const activeDayObj = currentMonth.days.find((d) => d.date === selectedDate) || currentMonth.days[0];
  const availableSlots = activeDayObj ? activeDayObj.timeSlots : [];

  const handlePrevMonth = () => {
    if (monthIndex > 0) {
      const nextIndex = monthIndex - 1;
      setMonthIndex(nextIndex);
      const newMonth = MONTHS_DATA[nextIndex];
      setSelectedDate(newMonth.days[0].date);
      setSelectedTimeSlot(null);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex < MONTHS_DATA.length - 1) {
      const nextIndex = monthIndex + 1;
      setMonthIndex(nextIndex);
      const newMonth = MONTHS_DATA[nextIndex];
      setSelectedDate(newMonth.days[0].date);
      setSelectedTimeSlot(null);
    }
  };

  const handleSelectDate = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTimeSlot(null);
  };

  const handleConfirmTime = () => {
    if (!selectedTimeSlot) return;
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Entrevista Programada!' : 'Interview Scheduled!',
      language === 'es'
        ? `Horario seleccionado: ${activeDayObj.dayEs} ${selectedDate} de ${currentMonth.nameEs.split(',')[0]}, ${selectedTimeSlot}`
        : `Selected time: ${activeDayObj.day} ${selectedDate} ${currentMonth.nameEn.split(',')[0]}, ${selectedTimeSlot}`,
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
      {/* Top Bar Header (Single crisp Back Icon) */}
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
          <span className="material-symbols-outlined text-[22px] text-[#191c1b]">arrow_back</span>
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

        {/* Dynamic Month Selector */}
        <div className="flex items-center justify-between" data-node-id="1004:4519">
          <span
            className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]"
            data-node-id="1004:4520"
          >
            {language === 'es' ? currentMonth.nameEs : currentMonth.nameEn}
          </span>
          <div className="flex items-center gap-[12px]" data-node-id="1004:4521">
            <button
              onClick={handlePrevMonth}
              disabled={monthIndex === 0}
              className={`bg-white border border-[#e5e5e5] rounded-full size-[36px] flex items-center justify-center shadow-xs transition-all ${
                monthIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'active:scale-95 cursor-pointer hover:bg-slate-50'
              }`}
              aria-label="Previous month"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700">chevron_left</span>
            </button>
            <button
              onClick={handleNextMonth}
              disabled={monthIndex === MONTHS_DATA.length - 1}
              className={`bg-white border border-[#e5e5e5] rounded-full size-[36px] flex items-center justify-center shadow-xs transition-all ${
                monthIndex === MONTHS_DATA.length - 1 ? 'opacity-40 cursor-not-allowed' : 'active:scale-95 cursor-pointer hover:bg-slate-50'
              }`}
              aria-label="Next month"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Date Selector Pills (Dynamic) */}
        <div className="flex items-center gap-[8px] overflow-x-auto pb-1 no-scrollbar" data-node-id="1004:4524">
          {currentMonth.days.map((opt) => {
            const isSelected = selectedDate === opt.date;
            return (
              <button
                key={opt.date}
                onClick={() => handleSelectDate(opt.date)}
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

        {/* Dynamic Time Slots per Selected Day */}
        <div className="flex flex-col divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]" data-node-id="1004:4567">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => {
              const isSelected = selectedTimeSlot === slot;
              return (
                <div
                  key={slot}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className="py-[16px] flex items-center gap-[12px] cursor-pointer hover:bg-slate-50 transition-colors px-1"
                  data-node-id="1004:4568"
                >
                  {/* Custom Radio Button */}
                  <div className={`size-[24px] rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                    isSelected ? 'border-[#0038d0] bg-[#0038d0]' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && (
                      <div className="size-[10px] rounded-full bg-white animate-scale-up" />
                    )}
                  </div>

                  <span className="font-semibold text-[14px] leading-[18px] text-[#171717] tracking-[-0.028px]">
                    {slot}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="py-6 text-center text-[#737373] text-[14px]">
              {language === 'es' ? 'No hay horarios disponibles para esta fecha.' : 'No available slots for this date.'}
            </p>
          )}
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
