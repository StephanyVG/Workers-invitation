import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const VideoCallLoaderScreen: React.FC = () => {
  const { setCurrentTab } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTab('video_call');
    }, 2000);
    return () => clearTimeout(timer);
  }, [setCurrentTab]);

  return (
    <div
      onClick={() => setCurrentTab('video_call')}
      className="bg-white overflow-hidden relative flex-1 w-full h-full min-h-0 flex flex-col items-center justify-center cursor-pointer select-none p-6 animate-fade-in"
      data-node-id="1004:5550"
    >
      <div className="flex flex-col items-center justify-center gap-4" data-node-id="1004:5553">
        {/* Animated Zipmi Circle Logo with Outer Spinner Arc */}
        <div className="relative size-[88px] flex items-center justify-center" data-node-id="1004:5554">
          <svg className="absolute inset-0 size-full animate-spin" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#0038d0"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="210"
              strokeDashoffset="70"
            />
          </svg>
          <div className="size-[72px] rounded-full bg-[#0038d0] text-white flex items-center justify-center font-['DM_Sans',sans-serif] font-bold text-[38px] shadow-md select-none">
            Z
          </div>
        </div>
      </div>
    </div>
  );
};
