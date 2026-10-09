import React, { useEffect } from 'react';
import { ToastContainer } from '../ui/ToastContainer';
import { useApp } from '../../context/AppContext';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  const { resetDemoData } = useApp();

  useEffect(() => {
    // Total Scaling Technique: Proportional viewport scaling based on 390x844 reference canvas
    const updateScaling = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const isDesktop = vw > 480;
      
      // On desktop, preserve a clean frame margin; on mobile, fill available viewport
      const availableH = isDesktop ? vh * 0.96 : vh;
      const availableW = isDesktop ? vw * 0.96 : vw;
      
      // Proportional scale factor calculated strictly from the 390x844 reference aspect ratio
      const scale = Math.min(availableH / 844, availableW / 390);
      
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
      document.documentElement.style.setProperty('--scale', `${scale}`);
      document.documentElement.style.setProperty('--app-h', `${844 * scale}px`);
      document.documentElement.style.setProperty('--app-w', `${390 * scale}px`);
    };

    updateScaling();
    window.addEventListener('resize', updateScaling);
    window.addEventListener('orientationchange', updateScaling);

    return () => {
      window.removeEventListener('resize', updateScaling);
      window.removeEventListener('orientationchange', updateScaling);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen min-h-[100dvh] h-[100dvh] bg-slate-950 sm:bg-slate-900 flex flex-col items-center justify-center font-sans overflow-hidden relative">
      {/* Dev Reset Floating Button */}
      <button
        onClick={resetDemoData}
        className="fixed top-3 right-3 z-50 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0038d0] hover:border-[#0038d0] px-3 py-1.5 rounded-full font-['Inter',sans-serif] font-medium text-xs shadow-lg flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all duration-150 select-none"
        title="Reset flow from the start (Lock Screen)"
      >
        <span className="material-symbols-outlined text-[16px]">refresh</span>
        <span>Reset flow</span>
      </button>

      {/* Proportional Scaled Container: Aspect Ratio 390x844 (No Vertical Clipping) */}
      <div 
        className="relative flex items-center justify-center shrink-0 overflow-visible select-none"
        style={{
          width: 'var(--app-w, min(calc(100dvh * (390 / 844)), 100vw))',
          height: 'var(--app-h, min(100dvh, calc(100vw * (844 / 390))))',
          maxHeight: '100dvh',
          maxWidth: '100vw',
          aspectRatio: '390 / 844',
        }}
      >
        {/* Canonical 390x844 Design Canvas with hardware-accelerated proportional scaling */}
        <div
          className="w-[390px] h-[844px] min-w-[390px] min-h-[844px] max-w-[390px] max-h-[844px] bg-[#fafafa] flex flex-col relative overflow-hidden transition-all rounded-[0px] sm:rounded-[38px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:border-[4px] sm:border-slate-800"
          style={{
            transform: 'scale(var(--scale, 1))',
            transformOrigin: 'center center',
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
    </div>
  );
};

