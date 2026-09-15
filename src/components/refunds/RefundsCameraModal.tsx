import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsCameraModal: React.FC = () => {
  const {
    language,
    showRefundCameraModal,
    setShowRefundCameraModal,
    refundCameraTarget,
    setRefundCameraTarget,
    updateRefundsProgress,
    refundsProgress,
    addToast
  } = useApp();

  // Mode: 'sheet' (select take photo or upload), 'camera' (viewfinder), 'preview' (review taken photo)
  const [modalMode, setModalMode] = useState<'sheet' | 'camera' | 'preview'>('sheet');
  const [capturedImage, setCapturedImage] = useState<string>('/receipt_sample.png');

  if (!showRefundCameraModal) return null;

  const handleClose = () => {
    setShowRefundCameraModal(false);
    setRefundCameraTarget(null);
    setModalMode('sheet');
  };

  const handleConfirmPhoto = () => {
    if (!refundCameraTarget) {
      handleClose();
      return;
    }

    const { category, subField } = refundCameraTarget;

    if (category === 'transport') {
      if (subField === 'consulate') {
        updateRefundsProgress({
          transport: {
            ...refundsProgress.transport,
            consulateReceiptPhoto: 'Receipt-Consulate.png',
          },
        });
      } else {
        updateRefundsProgress({
          transport: {
            ...refundsProgress.transport,
            workplaceReceiptPhoto: 'Receipt-Workplace.png',
          },
        });
      }
    } else if (category === 'hotel') {
      updateRefundsProgress({
        hotel: {
          ...refundsProgress.hotel,
          receiptPhoto: 'Receipt-Hotel.png',
        },
      });
    } else if (category === 'food') {
      if (subField === 'food') {
        updateRefundsProgress({
          food: {
            ...refundsProgress.food,
            foodReceiptPhoto: 'Receipt-Food.png',
          },
        });
      } else {
        updateRefundsProgress({
          food: {
            ...refundsProgress.food,
            othersReceiptPhoto: 'Receipt-Others.png',
          },
        });
      }
    }

    addToast(
      language === 'es' ? 'Recibo Agregado' : 'Receipt Added',
      language === 'es' ? 'Tu foto del recibo ha sido cargada con éxito.' : 'Your receipt photo was uploaded successfully.',
      'success'
    );
    handleClose();
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCapturedImage(url);
      setModalMode('preview');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 animate-fade-in">
      {/* Bottom Sheet Mode (Figma 2308:50273) */}
      {modalMode === 'sheet' && (
        <div
          className="w-full bg-white rounded-t-[28px] p-6 flex flex-col gap-4 animate-slide-up shadow-2xl relative select-none"
          data-node-id="2308:50273"
        >
          {/* Top Handle Bar */}
          <div className="w-full flex justify-center pb-2">
            <div className="w-10 h-1 bg-[#d4d4d4] rounded-full" />
          </div>

          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] text-left">
            {language === 'es' ? 'Foto del recibo / boleto' : 'Receipt/ticket photo'}
          </h3>

          <div className="flex flex-col gap-3 w-full pt-1">
            {/* Take a photo button */}
            <button
              type="button"
              onClick={() => setModalMode('camera')}
              className="w-full h-[52px] px-4 bg-white border border-[#e5e5e5] rounded-[16px] flex items-center gap-3 text-left hover:bg-neutral-50 active:scale-[0.99] transition-all cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[24px] text-[#404040]">photo_camera</span>
              <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#171717]">
                {language === 'es' ? 'Tomar una foto' : 'Take a photo'}
              </span>
            </button>

            {/* Upload photo from gallery */}
            <label className="w-full h-[52px] px-4 bg-white border border-[#e5e5e5] rounded-[16px] flex items-center gap-3 text-left hover:bg-neutral-50 active:scale-[0.99] transition-all cursor-pointer shadow-xs">
              <span className="material-symbols-outlined text-[24px] text-[#404040]">upload</span>
              <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#171717]">
                {language === 'es' ? 'Subir foto desde la galería' : 'Upload photo from gallery'}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleGalleryUpload}
              />
            </label>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-full py-2.5 text-center font-['Inter',sans-serif] font-medium text-[14px] text-[#737373] hover:text-black cursor-pointer mt-1"
          >
            {language === 'es' ? 'Cancelar' : 'Cancel'}
          </button>
        </div>
      )}

      {/* Camera Viewfinder Mode (Figma 2308:50354) */}
      {modalMode === 'camera' && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white select-none"
          data-node-id="2308:50354"
        >
          {/* Top Bar with Status and Close Button */}
          <div className="w-full px-4 py-4 flex items-center justify-between z-10">
            <button
              onClick={handleClose}
              className="size-[40px] rounded-full bg-white/20 flex items-center justify-center text-white active:scale-90 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="size-[8px] rounded-full bg-[#22c55e] animate-pulse" />
          </div>

          {/* Camera Viewfinder Frame with Receipt Sample */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <div className="relative w-full max-w-[320px] max-h-[480px] rounded-[16px] overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center bg-neutral-900/40 backdrop-blur-xs">
              <img
                src="/receipt_sample.png"
                alt="Receipt in camera viewfinder"
                className="w-full h-auto object-contain max-h-[460px] drop-shadow-lg"
              />
            </div>
          </div>

          {/* Bottom Shutter Controls */}
          <div className="w-full pb-10 pt-4 flex items-center justify-center gap-8 bg-black/80">
            <button
              type="button"
              onClick={() => {
                setCapturedImage('/receipt_sample.png');
                setModalMode('preview');
              }}
              className="size-[76px] rounded-full border-4 border-white p-1 flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              aria-label="Capture photo"
            >
              <div className="size-full rounded-full bg-white active:bg-neutral-200 transition-colors" />
            </button>
          </div>
        </div>
      )}

      {/* Captured Photo Preview / Confirmation Mode (Figma 2308:50368) */}
      {modalMode === 'preview' && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white select-none"
          data-node-id="2308:50368"
        >
          {/* Top Bar */}
          <div className="w-full px-4 py-4 flex items-center justify-between z-10">
            <div />
            <div className="size-[8px] rounded-full bg-[#22c55e]" />
          </div>

          {/* Captured Image Preview */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
            <div className="relative w-full max-w-[320px] max-h-[480px] rounded-[16px] overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={capturedImage}
                alt="Captured receipt preview"
                className="w-full h-auto object-contain max-h-[460px] drop-shadow-xl"
              />
            </div>
          </div>

          {/* Bottom Action Controls: [X] (Retake) and [✓] (Confirm) */}
          <div className="w-full pb-10 pt-4 flex items-center justify-center gap-10 bg-black/80">
            {/* Retake Button [X] */}
            <button
              type="button"
              onClick={() => setModalMode('camera')}
              className="size-[56px] rounded-full bg-[#262626] border border-neutral-700 flex items-center justify-center text-white active:scale-90 transition-all cursor-pointer shadow-lg"
              aria-label="Retake photo"
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>

            {/* Confirm Button [✓] */}
            <button
              type="button"
              onClick={handleConfirmPhoto}
              className="size-[56px] rounded-full bg-[#262626] border border-neutral-700 flex items-center justify-center text-white active:scale-90 transition-all cursor-pointer shadow-lg"
              aria-label="Confirm photo"
            >
              <span className="material-symbols-outlined text-[28px] text-[#4ade80]">check</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
