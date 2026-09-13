import React, { useEffect } from 'react';
import { ToastContainer } from '../ui/ToastContainer';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  useEffect(() => {
    // Dynamic Viewport Height calculation for cross-browser & mobile browser toolbar resilience
    const updateDVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateDVH();
    window.addEventListener('resize', updateDVH);
    window.addEventListener('orientationchange', updateDVH);

    return () => {
      window.removeEventListener('resize', updateDVH);
      window.removeEventListener('orientationchange', updateDVH);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen min-h-[100dvh] bg-slate-950 sm:bg-slate-900 flex flex-col items-center justify-center font-sans overflow-hidden sm:p-4">
      {/* Standard Mobile Frame (Minimum 360px width x 820px height reference with Dynamic Viewport Height) */}
      <div 
        className="w-full sm:w-[375px] sm:min-w-[360px] sm:max-w-[430px] h-full sm:h-[820px] sm:min-h-[820px] max-h-[100dvh] sm:max-h-[calc(100dvh-2rem)] bg-[#fafafa] sm:rounded-[36px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative sm:border-[4px] sm:border-slate-800 transition-all"
        style={{
          height: 'calc(var(--vh, 1vh) * 100)'
        }}
      >
        {/* Toast Notifications */}
        <ToastContainer />

        {/* Main View Area */}
        <div className="w-full flex-1 flex flex-col relative overflow-hidden h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

