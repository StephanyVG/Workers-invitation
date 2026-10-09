import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const PhoneLockScreen: React.FC = () => {
  const { setCurrentTab } = useApp();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    timeStr: '10:00',
    dateStr: 'Friday, Oct 9',
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short' 
      };
      const formattedDate = now.toLocaleDateString('en-US', options);
      const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

      setCurrentTime({
        timeStr: `${hours}:${minutes}`,
        dateStr: capitalizedDate,
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 30000);

    const timer = setTimeout(() => {
      setNotificationVisible(true);
    }, 600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleOpenNotification = () => {
    setCurrentTab('sms_invitation');
  };

  return (
    <div 
      className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none font-['Inter',sans-serif] text-white bg-black"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #18191c 0%, #0a0a0c 60%, #000000 100%)',
      }}
    >
      {/* Android System Status Bar */}
      <div className="relative z-20 pt-2 px-5 flex items-center justify-between text-xs text-[#e3e3e3]">
        {/* Left: Clock */}
        <span className="font-medium text-[13px] tracking-tight">{currentTime.timeStr}</span>

        {/* Center: Punch Hole Camera Dot */}
        <div className="w-3.5 h-3.5 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#161a22]" />
        </div>

        {/* Right: Android Status Icons (Wifi, Signal, Battery) */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[15px]">wifi</span>
          <span className="material-symbols-outlined text-[15px]">signal_cellular_alt</span>
          <div className="flex items-center gap-0.5">
            <span className="text-[11px] font-medium">100%</span>
            <span className="material-symbols-outlined text-[16px]">battery_full</span>
          </div>
        </div>
      </div>

      {/* Android Lockscreen Center: Lock Icon, Big Clock, Date, and Notification */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4 flex-1">
        {/* Padlock Icon */}
        <div className="mb-2">
          <span className="material-symbols-outlined text-[18px] text-white/70">
            {notificationVisible ? 'lock_open' : 'lock'}
          </span>
        </div>

        {/* Android Lockscreen Clock */}
        <div className="text-white text-[70px] leading-none font-normal tracking-tight drop-shadow-sm font-['Inter',sans-serif]">
          {currentTime.timeStr}
        </div>

        {/* Android Date */}
        <div className="text-white/80 text-[15px] font-normal tracking-wide mt-2 mb-8">
          {currentTime.dateStr}
        </div>

        {/* Android OS Notification Card */}
        <div className="w-full max-w-[358px]">
          {notificationVisible && (
            <div
              onClick={handleOpenNotification}
              className="animate-push-move-in cursor-pointer bg-[#212124] hover:bg-[#28282b] active:scale-[0.99] border border-white/10 rounded-[24px] p-4 shadow-xl text-left transition-all duration-150"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenNotification()}
            >
              {/* Android Notification Header: App Icon, Name, Bullet, Time, Chevron */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {/* Android Messages Icon */}
                  <div className="w-[18px] h-[18px] rounded-full bg-[#34a853] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white">chat</span>
                  </div>
                  <span className="text-[12px] font-normal text-[#c4c7c5]">
                    Messages
                  </span>
                  <span className="text-[10px] text-[#8e918f]">•</span>
                  <span className="text-[12px] text-[#c4c7c5]">
                    now
                  </span>
                </div>

                <span className="material-symbols-outlined text-[18px] text-[#c4c7c5]">
                  expand_more
                </span>
              </div>

              {/* Notification Content */}
              <div className="flex flex-col gap-0.5">
                <div className="text-[14px] font-semibold text-white tracking-normal font-['Inter',sans-serif]">
                  Huertos Landscapings and Farms
                </div>
                <div className="text-[13px] text-[#c4c7c5] leading-snug font-['Inter',sans-serif]">
                  Hi Miguel! Huertos Landscapings and Farms has sent you job offer! 🎉
                </div>
              </div>

              {/* Android Action Chip */}
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 rounded-full text-[12px] font-medium text-white transition-colors">
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  <span>Open message</span>
                </span>
                <span className="text-[11px] text-[#8e918f]">
                  Tap to view
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Android Lockscreen Bottom Bar */}
      <div className="relative z-10 pb-5 px-6 flex flex-col items-center gap-4">
        {/* Android Shortcuts: Phone / Camera */}
        <div className="w-full flex items-center justify-between text-white/70">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[19px]">call</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[19px]">photo_camera</span>
          </div>
        </div>

        {/* Android Home Navigation Bar */}
        <div className="w-28 h-1 bg-white/40 rounded-full" />
      </div>
    </div>
  );
};
