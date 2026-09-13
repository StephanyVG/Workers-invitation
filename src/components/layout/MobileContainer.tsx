import React from 'react';
import { ToastContainer } from '../ui/ToastContainer';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col items-center justify-center font-sans overflow-x-hidden p-0 sm:p-4">
      {/* Main Fully Responsive Container */}
      <div className="w-full min-h-screen sm:min-h-0 sm:h-[760px] max-w-md bg-[#f5f5f5] sm:rounded-[32px] sm:shadow-xl overflow-hidden flex flex-col relative">
        {/* Toast Notifications */}
        <ToastContainer />

        {/* Main View Area */}
        <div className="w-full flex-1 flex flex-col relative overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
