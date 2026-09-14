import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const VideoCallSimulationScreen: React.FC = () => {
  const { language, setCurrentTab, scheduledInterview, setShowInterviewCompletedModal } = useApp();
  const [isWaiting, setIsWaiting] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isVideoOff, setIsVideoOff] = useState<boolean>(false);
  const [activeFullscreen, setActiveFullscreen] = useState<'top' | 'bottom' | null>(null);

  const hostName = scheduledInterview?.farm || 'Sunnydale Orchards Farm';

  useEffect(() => {
    // Stage 1: Waiting room / loader phase for 3 seconds
    const loaderTimer = setTimeout(() => {
      setIsWaiting(false);
    }, 3000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const finishCall = () => {
    if (setShowInterviewCompletedModal) {
      setShowInterviewCompletedModal(true);
    }
    setCurrentTab('home');
  };

  useEffect(() => {
    if (!isWaiting) {
      // Stage 2: Face visible video stream phase for 4 seconds, then auto-close to home
      const finishTimer = setTimeout(() => {
        finishCall();
      }, 4000);

      return () => clearTimeout(finishTimer);
    }
  }, [isWaiting]);

  const handleEndCall = () => {
    finishCall();
  };

  const toggleFullscreen = (view: 'top' | 'bottom') => {
    setActiveFullscreen((prev) => (prev === view ? null : view));
  };

  return (
    <div
      className="bg-white overflow-hidden relative flex-1 w-full h-full min-h-0 flex flex-col justify-between animate-fade-in select-none"
      data-node-id="1004:5221"
    >
      {/* Container (1004:5522) */}
      <div className="flex-1 flex flex-col w-full h-full relative min-h-0 overflow-hidden" data-node-id="1004:5522">
        {/* Top Half: Host Waiting Room / Connected Header Banner (1004:5523) */}
        {(activeFullscreen === null || activeFullscreen === 'top') && (
          <div
            className={`bg-[#d3efff] w-full flex flex-col items-center justify-center relative p-6 transition-all duration-300 ${
              activeFullscreen === 'top' ? 'flex-1 h-full' : 'h-1/2'
            }`}
            data-node-id="1004:5523"
          >
            {/* Top Right Expand / Fullscreen Button (1004:5525) */}
            <button
              onClick={() => toggleFullscreen('top')}
              className="absolute top-4 right-4 z-10 bg-[#e5e5e5] border border-[#d4d4d4] hover:bg-[#d8d8d8] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Expand Top View"
              data-node-id="1004:5525"
            >
              <span className="material-symbols-outlined text-[24px]">
                {activeFullscreen === 'top' ? 'close_fullscreen' : 'crop_free'}
              </span>
            </button>

            {/* Center Content: Loading Z Logo or Connected Badge */}
            <div className="flex flex-col items-center justify-center gap-5 text-center" data-node-id="1004:5526">
              {isWaiting ? (
                <>
                  {/* Z Animated Circle Logo */}
                  <div className="relative size-[88px] flex items-center justify-center" data-node-id="1004:5527">
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

                  {/* Host Waiting Text (1004:5532) */}
                  <div className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]" data-node-id="1004:5532">
                    <p>
                      {language === 'es' ? `Wait for [${hostName}],` : `Wait for [${hostName}],`}
                    </p>
                    <p>{language === 'es' ? 'in waiting room' : 'in waiting room'}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Connected Host Avatar & Live Status */}
                  <div className="relative size-[88px] flex items-center justify-center animate-scale-up">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
                      alt={hostName}
                      className="size-[82px] rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 size-5 bg-[#00e676] rounded-full border-2 border-white animate-pulse" />
                  </div>

                  <div className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#262626] tracking-[-0.064px]">
                    <p className="font-bold text-[#0038d0] text-[18px]">
                      {hostName}
                    </p>
                    <p className="text-[14px] text-[#525252] flex items-center justify-center gap-1.5 mt-1">
                      <span className="size-2 rounded-full bg-[#00e676] animate-ping" />
                      {language === 'es' ? 'En la llamada' : 'In video call'}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Bottom Half: Camera / Video Call View (1004:5533) */}
        {(activeFullscreen === null || activeFullscreen === 'bottom') && (
          <div
            className={`w-full relative flex flex-col justify-end overflow-hidden transition-all duration-300 ${
              activeFullscreen === 'bottom' ? 'flex-1 h-full' : 'h-1/2'
            }`}
            data-node-id="1004:5533"
          >
            {/* Simulated Video Stream Image Background */}
            <div className="absolute inset-0 z-0 bg-slate-900">
              {!isWaiting && !isVideoOff ? (
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                  alt="Recruiter Video Stream"
                  className="w-full h-full object-cover animate-fade-in"
                />
              ) : isWaiting && !isVideoOff ? (
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                    alt="Connecting Stream"
                    className="w-full h-full object-cover filter blur-md opacity-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-2">
                    <span className="material-symbols-outlined text-[36px] animate-spin">sync</span>
                    <span className="text-sm font-semibold">
                      {language === 'es' ? 'Conectando video...' : 'Connecting video...'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2 bg-slate-950">
                  <span className="material-symbols-outlined text-[48px]">videocam_off</span>
                  <span className="text-xs font-medium">
                    {language === 'es' ? 'Cámara apagada' : 'Camera off'}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Top Right Expand / Fullscreen Button for Bottom View (1004:5549) */}
            <button
              onClick={() => toggleFullscreen('bottom')}
              className="absolute top-4 right-4 z-20 bg-[#e5e5e5] border border-[#d4d4d4] hover:bg-[#d8d8d8] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Expand Bottom View"
              data-node-id="1004:5549"
            >
              <span className="material-symbols-outlined text-[24px]">
                {activeFullscreen === 'bottom' ? 'close_fullscreen' : 'crop_free'}
              </span>
            </button>

            {/* Bottom Call Control Navbar (1004:5534 / 1004:5535) */}
            <div
              className="relative z-20 w-full bg-white border-t border-[#e5e5e5] px-4 py-3 flex items-center justify-between gap-3 shadow-lg"
              data-node-id="1004:5534"
            >
              {/* Mic Toggle Button (1004:5536) */}
              <div className="flex-1 flex justify-center" data-node-id="1004:5536">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-full h-[48px] rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-95 ${
                    isMuted
                      ? 'bg-amber-100 border-amber-300 text-amber-700'
                      : 'bg-white border-[#e5e5e5] text-[#171717] hover:bg-slate-50'
                  }`}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  data-node-id="1004:5538"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {isMuted ? 'mic_off' : 'mic'}
                  </span>
                </button>
              </div>

              {/* Video Toggle Button (1004:5540) */}
              <div className="flex-1 flex justify-center" data-node-id="1004:5540">
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`w-full h-[48px] rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-95 ${
                    isVideoOff
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-[#fafafa] border-[#e5e5e5] text-[#171717] hover:bg-slate-100'
                  }`}
                  aria-label={isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
                  data-node-id="1004:5542"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {isVideoOff ? 'videocam_off' : 'videocam'}
                  </span>
                </button>
              </div>

              {/* End Call Button (1004:5544) */}
              <div className="flex-1 flex justify-center" data-node-id="1004:5544">
                <button
                  onClick={handleEndCall}
                  className="w-full h-[48px] rounded-full bg-[#c7290e] hover:bg-[#a8220b] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
                  aria-label="End Call"
                  data-node-id="1004:5546"
                >
                  <span className="material-symbols-outlined text-[24px]">call_end</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
