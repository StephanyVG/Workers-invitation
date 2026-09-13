import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const PassportCameraSimulator: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal, addToast } = useApp();

  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [captured, setCaptured] = useState<boolean>(false);
  const [detected, setDetected] = useState<boolean>(false);

  // Simulate auto-detecting passport in frame after 1.2s
  useEffect(() => {
    const timer = setTimeout(() => {
      setDetected(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, [captured]);

  const handleTakeShutter = () => {
    setIsCapturing(true);
    // Simulate camera shutter flash
    setTimeout(() => {
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
        setIsCapturing(false);
        setCaptured(true);
      }, 200);
    }, 400);
  };

  const handleRetake = () => {
    setCaptured(false);
    setDetected(false);
  };

  const handleUsePhoto = () => {
    setCurrentTab('passport_processing_loader');
  };

  const handleClose = () => {
    setCurrentTab('camera_permissions');
  };

  return (
    <div
      className="bg-[#0a0f1d] text-white flex flex-col justify-between flex-1 w-full relative overflow-hidden animate-slide-up select-none"
      data-node-id="camera-simulator"
    >
      {/* Screen Shutter Flash Overlay */}
      {isFlashing && (
        <div className="absolute inset-0 bg-white z-50 animate-fade-in pointer-events-none" />
      )}

      {/* Top Camera Controls Header */}
      <div className="w-full px-[16px] py-[14px] flex items-center justify-between sticky top-0 z-30 bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={handleClose}
          className="bg-black/40 border border-white/20 rounded-full size-[44px] flex items-center justify-center text-white active:scale-90 transition-all cursor-pointer backdrop-blur-md"
          aria-label="Cerrar cámara"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="flex items-center gap-2 bg-black/40 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-md">
          <span className="size-2 rounded-full bg-[#00e676] animate-pulse" />
          <span className="font-['DM_Sans',sans-serif] font-medium text-[13px] text-white tracking-tight">
            {language === 'es' ? 'Cámara de pasaporte' : 'Passport camera'}
          </span>
        </div>

        <button
          onClick={() => setIsFlashOn(!isFlashOn)}
          className={`border rounded-full size-[44px] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-90 ${
            isFlashOn
              ? 'bg-[#ffb133] text-black border-[#ffb133]'
              : 'bg-black/40 text-white border-white/20'
          }`}
          aria-label="Flash"
        >
          <span className="material-symbols-outlined text-[22px]">
            {isFlashOn ? 'flash_on' : 'flash_off'}
          </span>
        </button>
      </div>

      {/* Center Viewfinder & Framing Overlay */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        {!captured ? (
          /* Live Scanner Frame */
          <div className="w-full max-w-[330px] flex flex-col items-center gap-4">
            {/* Viewfinder Cutout Box */}
            <div
              className={`w-full aspect-[4/3] rounded-[20px] border-2 relative flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(0,56,208,0.3)] ${
                detected ? 'border-[#00e676] bg-black/30' : 'border-[#2874ff] bg-black/40'
              }`}
            >
              {/* Corner Frame Brackets */}
              <div className={`absolute top-3 left-3 size-5 border-t-4 border-l-4 rounded-tl-md transition-colors ${detected ? 'border-[#00e676]' : 'border-[#2874ff]'}`} />
              <div className={`absolute top-3 right-3 size-5 border-t-4 border-r-4 rounded-tr-md transition-colors ${detected ? 'border-[#00e676]' : 'border-[#2874ff]'}`} />
              <div className={`absolute bottom-3 left-3 size-b-4 border-b-4 border-l-4 rounded-bl-md transition-colors ${detected ? 'border-[#00e676]' : 'border-[#2874ff]'}`} />
              <div className={`absolute bottom-3 right-3 size-b-4 border-b-4 border-r-4 rounded-br-md transition-colors ${detected ? 'border-[#00e676]' : 'border-[#2874ff]'}`} />

              {/* Passport Silhouette Preview */}
              <img
                src="/pasaporte.svg"
                alt="Passport Guide"
                className="w-[85%] h-auto object-contain opacity-65 pointer-events-none select-none"
              />

              {/* Scanning Line Animation */}
              {!isCapturing && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#2874ff] to-transparent shadow-[0_0_15px_#2874ff] animate-soft-pulse" />
              )}
            </div>

            {/* Instruction Pill */}
            <div className="bg-black/60 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-center shadow-lg">
              <span className={`material-symbols-outlined text-[20px] ${detected ? 'text-[#00e676]' : 'text-[#2874ff]'}`}>
                {detected ? 'check_circle' : 'center_focus_weak'}
              </span>
              <span className="font-['Inter',sans-serif] font-medium text-[13px] text-white">
                {isCapturing
                  ? (language === 'es' ? 'Capturando imagen...' : 'Capturing image...')
                  : detected
                  ? (language === 'es' ? '¡Pasaporte encuadrado!' : 'Passport aligned!')
                  : (language === 'es' ? 'Alinea el pasaporte dentro del marco' : 'Align passport inside frame')}
              </span>
            </div>
          </div>
        ) : (
          /* Captured Photo Preview Mode */
          <div className="w-full max-w-[330px] flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-full aspect-[4/3] rounded-[20px] border-2 border-[#00e676] relative flex items-center justify-center overflow-hidden bg-black/60 shadow-[0_0_35px_rgba(0,230,118,0.35)]">
              <img
                src="/pasaporte.svg"
                alt="Captured Passport"
                className="w-[90%] h-auto object-contain select-none"
              />

              {/* Verified Badge Overlay */}
              <div className="absolute top-3 right-3 bg-[#00e676] text-black font-['DM_Sans',sans-serif] font-bold text-[12px] px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>{language === 'es' ? 'Legible' : 'Clear'}</span>
              </div>
            </div>

            <div className="bg-[#00e676]/15 border border-[#00e676]/40 rounded-[16px] p-3 flex items-center gap-3 text-left w-full shadow-sm">
              <span className="material-symbols-outlined text-[#00e676] text-[24px]">verified</span>
              <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#e5e5e5]">
                {language === 'es'
                  ? '¡La foto es nítida y completa! Lista para tu trámite de visa.'
                  : 'Photo is clear and complete! Ready for your visa application.'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Shutter / Action Controls Panel */}
      <div className="w-full px-[24px] pb-[32px] pt-4 bg-gradient-to-t from-black/90 to-transparent relative z-30">
        {!captured ? (
          <div className="flex items-center justify-center w-full relative">
            {/* Main Camera Shutter Button */}
            <button
              onClick={handleTakeShutter}
              disabled={isCapturing}
              className="size-[72px] rounded-full border-4 border-white bg-[#0038d0] active:scale-90 transition-transform cursor-pointer flex items-center justify-center shadow-[0_0_20px_rgba(0,56,208,0.6)]"
              aria-label="Tomar foto"
            >
              <span className="material-symbols-outlined text-[32px] text-white">photo_camera</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 w-full animate-fadeIn">
            {/* Use Photo Button */}
            <button
              onClick={handleUsePhoto}
              className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>{language === 'es' ? 'Usar esta foto' : 'Use this photo'}</span>
            </button>

            {/* Retake Photo Button */}
            <button
              onClick={handleRetake}
              className="w-full min-h-[44px] h-[44px] px-4 py-[10px] bg-black/40 border border-white/20 active:scale-[0.98] text-white rounded-[100px] font-['Inter',sans-serif] font-medium text-[15px] leading-[22px] text-center backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">refresh</span>
              <span>{language === 'es' ? 'Tomar otra foto' : 'Retake photo'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
