import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const PushNotificationBanner: React.FC = () => {
  const { showPushBanner, setShowPushBanner, setCurrentTab, language } = useApp();

  useEffect(() => {
    if (showPushBanner) {
      // Auto-hide push notification after at least 8 seconds (8000ms)
      const timer = setTimeout(() => {
        setShowPushBanner(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showPushBanner, setShowPushBanner]);

  if (!showPushBanner) return null;

  const handleBannerClick = () => {
    setShowPushBanner(false);
    setCurrentTab('available_times');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPushBanner(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-[2px] animate-fade-in"
      onClick={handleDismiss}
      data-node-id="1004:4817"
    >
      <div
        onClick={handleBannerClick}
        className="w-full max-w-[340px] bg-[#e7f6ff] border border-[#b0deff] rounded-[16px] p-[16px] flex gap-[12px] items-start shadow-2xl cursor-pointer active:scale-[0.99] transition-transform animate-scale-up"
      >
        {/* Left Zipmi Icon */}
        <div className="size-[28px] shrink-0 relative flex items-center justify-center">
          <img
            src="/assets/push_notification/zipmi_icon.svg"
            alt="Zipmi Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Column */}
        <div className="flex-1 flex flex-col gap-[4px] text-left">
          <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#222222] tracking-[-0.028px]">
            {language === 'es'
              ? 'Sunnydale Orchards quiere tener una entrevista,'
              : 'Sunnydale Orchards wants to have an interview,'}
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]">
            {language === 'es'
              ? 'Elige un horario para reunirte con ellos'
              : 'Choose a time to meet with them'}
          </p>
          <p className="font-['Inter',sans-serif] font-medium italic text-[14px] leading-[18px] text-[#525252] tracking-[-0.056px]">
            {language === 'es' ? 'Enviado hace 2 horas' : 'Sent 2 hours ago'}
          </p>
        </div>

        {/* Dismiss Trash Button */}
        <button
          onClick={handleDismiss}
          className="bg-white border border-[#e5e5e5] rounded-full p-[6px] size-[32px] flex items-center justify-center shadow-xs hover:bg-slate-50 active:scale-90 transition-all shrink-0 cursor-pointer"
          aria-label="Dismiss notification"
          data-node-id="3958:1411"
        >
          <img
            src="/assets/push_notification/trash_icon.svg"
            alt="Delete"
            className="size-[16px] object-contain opacity-70 hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
};
