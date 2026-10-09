import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const GooglePlayStoreScreen: React.FC = () => {
  const { setCurrentTab } = useApp();

  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'installing' | 'installed'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Handle download progress simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (downloadStatus === 'downloading') {
      const startTime = Date.now();
      const duration = 2500; // 2.5 seconds download

      timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
        setDownloadProgress(progress);

        if (progress >= 100) {
          clearInterval(timer);
          setDownloadStatus('installing');
          // Short installing pause then mark as installed
          setTimeout(() => {
            setDownloadStatus('installed');
          }, 900);
        }
      }, 50);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [downloadStatus]);

  const handleStartDownload = () => {
    setDownloadStatus('downloading');
    setDownloadProgress(0);
  };

  const handleCancelDownload = () => {
    setDownloadStatus('idle');
    setDownloadProgress(0);
  };

  const handleOpenApp = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentTab('splash');
    }, 240);
  };

  return (
    <div className={`w-full h-full flex flex-col bg-white select-none font-['Inter',sans-serif] text-[#1f1f1f] overflow-hidden relative ${isExiting ? 'animate-app-switch-exit' : 'animate-app-switch-enter'}`}>
      {/* Google Play Store Top Bar */}
      <header className="bg-white px-3 py-2 flex items-center justify-between shrink-0 border-b border-slate-100 z-10">
        <button
          onClick={() => setCurrentTab('sms_invitation')}
          className="p-2 text-[#444746] hover:bg-slate-100 active:scale-90 rounded-full transition-all cursor-pointer"
          aria-label="Back to SMS"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_back</span>
        </button>

        <div className="flex items-center gap-1 text-[#444746]">
          <button 
            type="button" 
            className="p-2 hover:bg-slate-100 active:scale-90 rounded-full transition-all"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button 
            type="button" 
            className="p-2 hover:bg-slate-100 active:scale-90 rounded-full transition-all"
            aria-label="More options"
          >
            <span className="material-symbols-outlined text-[22px]">more_vert</span>
          </button>
        </div>
      </header>

      {/* Play Store Scrollable Page Body */}
      <main className="flex-1 overflow-y-auto px-4 py-3 custom-scrollbar text-left">
        {/* App Hero: Icon, Name, Developer */}
        <div className="flex items-start gap-4 mb-4">
          {/* Official Zipmi App Icon */}
          <div className="w-[72px] h-[72px] rounded-[18px] bg-white border border-slate-200/80 shadow-sm flex items-center justify-center p-2 shrink-0 overflow-hidden">
            <img
              src="/Logo vertical.png"
              alt="Zipmi"
              className="w-full h-full object-contain"
            />
          </div>

          {/* App Title & Dev */}
          <div className="flex flex-col min-w-0 flex-1 pt-0.5">
            <h1 className="text-[20px] font-bold text-[#1f1f1f] leading-snug tracking-tight truncate">
              Zipmi
            </h1>
            <span className="text-[13px] font-medium text-[#01875f] leading-tight mt-0.5">
              Zipmi Inc.
            </span>
            <span className="text-[11px] text-[#5e6368] leading-tight mt-1 truncate">
              Contains ads • Business
            </span>
          </div>
        </div>

        {/* Play Store Metrics Strip */}
        <div className="flex items-center justify-between py-2 border-y border-slate-100 mb-4 text-center">
          {/* Rating */}
          <div className="flex flex-col items-center flex-1 border-r border-slate-100">
            <div className="flex items-center gap-1 text-[13px] font-bold text-[#1f1f1f]">
              <span>4.9</span>
              <span className="material-symbols-outlined text-[13px] text-[#1f1f1f] fill-1">star</span>
            </div>
            <span className="text-[10px] text-[#5e6368] mt-0.5">
              1.2K reviews
            </span>
          </div>

          {/* Size */}
          <div className="flex flex-col items-center flex-1 border-r border-slate-100">
            <span className="text-[13px] font-bold text-[#1f1f1f]">18 MB</span>
            <span className="text-[10px] text-[#5e6368] mt-0.5">Download</span>
          </div>

          {/* Age Rating */}
          <div className="flex flex-col items-center flex-1 border-r border-slate-100">
            <div className="border border-slate-700 px-1 py-0.2 rounded text-[10px] font-bold leading-tight text-[#1f1f1f]">
              3+
            </div>
            <span className="text-[10px] text-[#5e6368] mt-0.5">Rated for 3+</span>
          </div>

          {/* Downloads */}
          <div className="flex flex-col items-center flex-1">
            <span className="text-[13px] font-bold text-[#1f1f1f]">10K+</span>
            <span className="text-[10px] text-[#5e6368] mt-0.5">Downloads</span>
          </div>
        </div>

        {/* Dynamic Action Area: Install / Downloading / Installed */}
        <div className="mb-5">
          {downloadStatus === 'idle' && (
            <button
              onClick={handleStartDownload}
              className="w-full h-[40px] bg-[#01875f] hover:bg-[#01704f] active:scale-[0.99] text-white font-semibold text-[14px] rounded-full flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>Install</span>
            </button>
          )}

          {(downloadStatus === 'downloading' || downloadStatus === 'installing') && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#1f1f1f]">
                  {downloadStatus === 'downloading'
                    ? `Downloading... ${downloadProgress}%`
                    : 'Installing Zipmi...'}
                </span>
                
                {downloadStatus === 'downloading' && (
                  <button
                    onClick={handleCancelDownload}
                    className="p-1 text-[#5e6368] hover:text-[#1f1f1f] hover:bg-slate-200 rounded-full transition-all"
                    title="Cancel download"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#01875f] rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#5e6368]">
                <span>
                  {downloadStatus === 'downloading'
                    ? `${(downloadProgress * 0.18).toFixed(1)} MB / 18.0 MB`
                    : 'Verified by Play Protect'}
                </span>
                <span className="flex items-center gap-1 text-[#01875f] font-medium">
                  <span className="material-symbols-outlined text-[13px]">verified_user</span>
                  <span>Play Protect</span>
                </span>
              </div>
            </div>
          )}

          {downloadStatus === 'installed' && (
            <div className="flex items-center gap-3">
              {/* Uninstall button (Google Play standard) */}
              <button
                type="button"
                className="flex-1 h-[40px] bg-white border border-slate-300 text-[#01875f] font-semibold text-[14px] rounded-full flex items-center justify-center opacity-70 cursor-not-allowed"
                disabled
              >
                <span>Uninstall</span>
              </button>

              {/* Open App Button (Launches Splash screen!) */}
              <button
                onClick={handleOpenApp}
                className="flex-1 h-[40px] bg-[#01875f] hover:bg-[#01704f] active:scale-[0.98] text-white font-semibold text-[14px] rounded-full flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer animate-pulse"
              >
                <span className="material-symbols-outlined text-[18px]">launch</span>
                <span>Open</span>
              </button>
            </div>
          )}
        </div>

        {/* Play Protect Verified Badge */}
        <div className="flex items-center gap-2 text-[12px] text-[#5e6368] mb-5 px-1">
          <span className="material-symbols-outlined text-[18px] text-[#01875f]">security</span>
          <span>
            Verified by Play Protect. Safe to install.
          </span>
        </div>

        {/* About this app */}
        <div className="mb-5 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[14px] font-bold text-[#1f1f1f]">
              About this app
            </h2>
            <span className="material-symbols-outlined text-[18px] text-[#5e6368]">arrow_forward</span>
          </div>
          <p className="text-[12px] text-[#5e6368] leading-relaxed">
            Official Zipmi platform for seasonal and agricultural H-2 workers. Sign employment contracts securely, complete your consular application, and stay connected with your employer.
          </p>
        </div>

        {/* Data safety section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[14px] font-bold text-[#1f1f1f]">
              Data safety
            </h2>
            <span className="material-symbols-outlined text-[18px] text-[#5e6368]">arrow_forward</span>
          </div>
          <p className="text-[12px] text-[#5e6368] leading-relaxed">
            Your data is encrypted in transit and securely stored in compliance with official U.S. employment regulations.
          </p>
        </div>
      </main>
    </div>
  );
};
