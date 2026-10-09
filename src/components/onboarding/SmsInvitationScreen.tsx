import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const SmsInvitationScreen: React.FC = () => {
  const { setCurrentTab } = useApp();
  const [isExiting, setIsExiting] = useState(false);

  const handleGoToStore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentTab('play_store');
    }, 240);
  };

  return (
    <div className={`w-full h-full flex flex-col bg-[#fafafa] select-none font-['Inter',sans-serif] text-[#222222] overflow-hidden relative ${isExiting ? 'animate-app-switch-exit' : 'animate-fadeIn'}`}>
      {/* Platform Standard Top Navigation Bar */}
      <header className="bg-white border-b border-[#e5e5e5] px-4 py-3 flex items-center gap-3 shrink-0 z-20">
        {/* Standard Circular Back Button */}
        <button
          onClick={() => setCurrentTab('phone_lockscreen')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[40px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label="Back to lock screen"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        {/* Sender Info */}
        <div className="flex flex-col min-w-0">
          <span className="text-[14px] font-semibold text-[#222222] truncate leading-tight">
            Huertos Landscapings and Farms
          </span>
          <span className="text-[12px] text-[#525252] leading-tight mt-0.5">
            Text message • SMS
          </span>
        </div>
      </header>

      {/* SMS Conversation Thread */}
      <main className="flex-1 overflow-y-auto px-4 py-4 flex flex-col justify-between custom-scrollbar">
        <div className="flex flex-col gap-4">
          {/* Timestamp Header */}
          <div className="text-center my-1">
            <span className="text-[12px] text-[#525252] font-normal">
              Today 10:00 AM
            </span>
          </div>

          {/* Incoming Message Bubble */}
          <div className="flex flex-col items-start max-w-[88%] animate-fadeIn">
            {/* Bubble */}
            <div className="bg-white border border-[#e5e5e5] rounded-[16px] rounded-tl-[4px] p-4 shadow-xs text-left space-y-2.5">
              <p className="text-[14px] leading-[22px] text-[#222222]">
                Hi Miguel! Huertos Landscapings and Farms has sent you job offer! 🎉
              </p>

              <p className="text-[14px] leading-[22px] text-[#222222]">
                Your employer is using the Zipmi app so you can sign your job offer and complete your visa application.
              </p>

              <p className="text-[14px] leading-[22px] text-[#222222]">
                To get started, download the Zipmi app and then follow the steps.
              </p>

              <p className="text-[14px] leading-[22px] text-[#222222]">
                If you have any questions, we’re here to help!
              </p>

              {/* Download Link Only (No extra cards or graphics) */}
              <div className="pt-1">
                <a
                  href="#download-zipmi"
                  onClick={handleGoToStore}
                  className="text-[#0038d0] underline font-medium hover:underline text-[14px] cursor-pointer break-all inline-block"
                >
                  https://play.google.com/store/apps/details?id=com.zipmi.workers
                </a>
              </div>

              {/* Timestamp */}
              <div className="text-[11px] text-[#525252] text-right pt-1">
                10:00 AM
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Standard Clean SMS Composer Bar */}
      <footer className="bg-white border-t border-[#e5e5e5] px-4 py-3 flex items-center gap-2 shrink-0 z-20">
        <div className="flex-1 bg-[#fafafa] border border-[#e5e5e5] rounded-full px-4 py-2 text-[14px] text-[#525252] select-none">
          Text message...
        </div>
        <button
          type="button"
          disabled
          className="size-[36px] rounded-full bg-[#0038d0] text-white flex items-center justify-center shrink-0 opacity-60 cursor-not-allowed"
          aria-label="Send"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </footer>
    </div>
  );
};
