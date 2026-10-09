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
      className="bg-white overflow-hidden relative flex-1 w-full flex flex-col items-center justify-center cursor-pointer select-none p-6 animate-app-switch-enter"
      data-node-id="3645:34617"
    >
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        {/* Official Zipmi Vertical Logo */}
        <img
          src="/Logo vertical.png"
          alt="Zipmi"
          className="h-32 sm:h-40 w-auto object-contain animate-scale-up"
        />
      </div>
    </div>
  );
};
