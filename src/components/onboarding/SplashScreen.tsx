import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const SplashScreen: React.FC = () => {
  const { setCurrentTab } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTab('language');
    }, 1800);
    return () => clearTimeout(timer);
  }, [setCurrentTab]);

  return (
    <div
      onClick={() => setCurrentTab('language')}
      className="bg-white overflow-hidden relative flex-1 w-full flex flex-col items-center justify-center cursor-pointer select-none p-6"
      data-node-id="3645:34617"
    >
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        {/* Official Zipmi Horizontal Logo */}
        <img
          src="/Logo horizontal.png"
          alt="Zipmi"
          className="h-10 sm:h-12 w-auto object-contain animate-scale-up"
        />
      </div>
    </div>
  );
};
