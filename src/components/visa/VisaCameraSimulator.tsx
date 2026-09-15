import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const VisaCameraSimulator: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [captured, setCaptured] = useState<boolean>(false);
  const [detected, setDetected] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Auto-detect visa document after 1.2s
  useEffect(() => {
    if (!captured) {
      const timer = setTimeout(() => {
        setDetected(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [captured]);

  // Handle shutter snap
  const handleTakeShutter = () => {
    setIsCapturing(true);
    setTimeout(() => {
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
        setIsCapturing(false);
        setCaptured(true);
      }, 200);
    }, 400);
  };

  // Handle retake (Figma 1707:9842 'X' button)
  const handleRetake = () => {
    setCaptured(false);
    setDetected(false);
  };

  // Handle confirm photo (Figma 1707:9842 '✓' button)
  const handleConfirmPhoto = () => {
    setIsProcessing(true);
    // Simulate document analysis and extraction (Figma 1707:9816)
    setTimeout(() => {
      setCurrentTab('visa_review');
    }, 1800);
  };

  const handleClose = () => {
    setCurrentTab('visa_photo_guide');
  };

  return (
    <div
      className="bg-[#0a0f1d] text-white flex flex-col justify-between flex-1 w-full relative overflow-hidden animate-fade-in select-none h-full"
      data-node-id="1707:9803"
    >
      {/* Screen Shutter Flash Overlay */}
      {isFlashing && (
        <div className="absolute inset-0 bg-white z-50 animate-fade-in pointer-events-none" />
      )}

      {/* Top Camera Controls Header (Hidden during processing) */}
      {!isProcessing && (
        <div className="w-full px-4 py-3.5 flex items-center justify-between sticky top-0 z-30 bg-gradient-to-b from-black/80 to-transparent shrink-0">
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
              {language === 'es' ? 'Cámara de visa' : 'Visa camera'}
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
      )}

      {/* Center Viewfinder / Captured Photo Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        {!captured ? (
          /* Live Scanner Frame (Figma 1707:9803) */
          <div className="w-full max-w-[340px] flex flex-col items-center gap-4">
            <div
              className={`w-full aspect-[1.5/1] rounded-[20px] border-2 relative flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(0,56,208,0.3)] ${
                detected ? 'border-[#00e676] bg-black/30' : 'border-[#2874ff] bg-black/40'
              }`}
            >
              {/* Corner Frame Brackets */}
              <div className="absolute top-2 left-2 size-5 border-t-2 border-l-2 border-white rounded-tl-[6px]" />
              <div className="absolute top-2 right-2 size-5 border-t-2 border-r-2 border-white rounded-tr-[6px]" />
              <div className="absolute bottom-2 left-2 size-5 border-b-2 border-l-2 border-white rounded-bl-[6px]" />
              <div className="absolute bottom-2 right-2 size-5 border-b-2 border-r-2 border-white rounded-br-[6px]" />

              {/* Laser Scan Animation Line */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00e676] to-transparent animate-pulse top-1/2 -translate-y-1/2" />

              {/* Realistic Visa Preview Silhouette inside Frame */}
              <img
                src="/visa.png"
                alt="Visa Silhouette"
                className="w-[90%] h-[90%] object-contain opacity-40 filter contrast-125"
              />

              {/* Status Badge inside Frame */}
              <div className="absolute bottom-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <span
                  className={`size-2 rounded-full ${
                    detected ? 'bg-[#00e676]' : 'bg-[#ffb133] animate-ping'
                  }`}
                />
                <span className="font-['DM_Sans',sans-serif] text-[12px] font-medium text-white">
                  {detected
                    ? language === 'es'
                      ? 'Visa detectada'
                      : 'Visa detected'
                    : language === 'es'
                    ? 'Alinea tu visa'
                    : 'Align your visa'}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs font-['Inter',sans-serif] text-center">
              {language === 'es'
                ? 'Mantén la visa dentro del recuadro para capturarla con claridad'
                : 'Keep your visa inside the frame to capture it clearly'}
            </p>
          </div>
        ) : (
          /* Captured Photo Review Frame (Figma 1707:9842) */
          <div className="w-full max-w-[340px] flex flex-col items-center gap-3">
            <div className="w-full aspect-[1.5/1] rounded-[20px] overflow-hidden border-2 border-white/40 shadow-2xl relative bg-black/60 flex items-center justify-center">
              <img
                src="/visa.png"
                alt="Captured Visa"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls Area */}
      {!isProcessing ? (
        <div className="w-full px-6 py-6 flex flex-col items-center justify-center bg-gradient-to-t from-black/90 to-transparent sticky bottom-0 z-30 shrink-0">
          {!captured ? (
            /* Live Camera Shutter Button */
            <div className="flex items-center justify-center w-full">
              <button
                onClick={handleTakeShutter}
                disabled={isCapturing}
                className="relative size-[76px] rounded-full bg-transparent border-[4px] border-white flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
                aria-label="Tomar foto"
              >
                <div className="size-[60px] rounded-full bg-white transition-all" />
              </button>
            </div>
          ) : (
            /* Photo Review Action Buttons (Figma 1707:9842) */
            <div className="flex items-center justify-center gap-10 w-full">
              {/* Retake Button ('X') */}
              <button
                onClick={handleRetake}
                className="size-[64px] rounded-full bg-[#333333] hover:bg-[#444444] active:scale-90 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
                aria-label="Reintentar"
                title={language === 'es' ? 'Reintentar foto' : 'Retake photo'}
              >
                <span className="material-symbols-outlined text-[32px]">close</span>
              </button>

              {/* Confirm Button ('✓') */}
              <button
                onClick={handleConfirmPhoto}
                className="size-[64px] rounded-full bg-[#333333] hover:bg-[#444444] active:scale-90 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
                aria-label="Confirmar"
                title={language === 'es' ? 'Confirmar foto' : 'Confirm photo'}
              >
                <span className="material-symbols-outlined text-[32px]">check</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Processing Overlay (Figma 1707:9816) */
        <div
          className="absolute inset-0 z-50 bg-[#e0e0e0]/75 backdrop-blur-md flex flex-col items-center justify-between p-6 animate-fade-in"
          data-node-id="1707:9816"
        >
          {/* Top placeholder to balance flex-between */}
          <div className="h-[44px]" />

          {/* Center Processing Animation & Text */}
          <div className="flex flex-col items-center gap-6 text-center max-w-[280px]">
            {/* Zipmi Blue Circle with Spinner Ring */}
            <div className="relative size-[96px] flex items-center justify-center">
              {/* Spinning Outer Ring */}
              <div className="absolute inset-0 rounded-full border-[4px] border-[#0038d0]/20 border-t-[#0038d0] animate-spin" />
              
              {/* Inner Blue Circle with 'Z' */}
              <div className="size-[76px] rounded-full bg-[#0038d0] flex items-center justify-center shadow-lg">
                <span className="font-['DM_Sans',sans-serif] font-black text-white text-[38px] leading-none tracking-tight">
                  Z
                </span>
              </div>
            </div>

            {/* Headline Text */}
            <p className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#171717] tracking-tight">
              {language === 'es'
                ? 'Estamos procesando tu información...'
                : 'We are processing your information...'}
            </p>
          </div>

          {/* Bottom Disabled Buttons matching Figma 1707:9816 */}
          <div className="flex items-center justify-center gap-10 w-full opacity-40 pointer-events-none pb-4">
            <div className="size-[64px] rounded-full bg-white/70 flex items-center justify-center text-[#737373]">
              <span className="material-symbols-outlined text-[32px]">close</span>
            </div>
            <div className="size-[64px] rounded-full bg-white/70 flex items-center justify-center text-[#737373]">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
