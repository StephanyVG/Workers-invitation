import React from 'react';
import { useApp } from '../../context/AppContext';

export const Ds160DocumentViewerScreen: React.FC = () => {
  const { language, setCurrentTab, selectedDocumentType, addToast } = useApp();

  const title =
    selectedDocumentType === 'barcode'
      ? language === 'es'
        ? 'Código de barras DS-160'
        : 'DS-160 Bar code'
      : selectedDocumentType === 'visa'
      ? language === 'es'
        ? 'Visa de EE. UU.'
        : 'US Visa'
      : language === 'es'
      ? 'Documento DS-160'
      : 'DS-160 Document';

  const docImage = selectedDocumentType === 'visa' ? '/visa.png' : '/bar code file.png';
  const downloadFileName =
    selectedDocumentType === 'visa'
      ? 'US-Visa.png'
      : selectedDocumentType === 'barcode'
      ? 'DS-160-barcode.png'
      : 'DS-160-document.png';

  const handleDownload = () => {
    // Trigger download of the document file
    const link = document.createElement('a');
    link.href = docImage;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast(
      language === 'es' ? 'Descarga iniciada' : 'Download started',
      language === 'es'
        ? 'El archivo se ha descargado correctamente.'
        : 'The file has been downloaded successfully.',
      'success'
    );
  };

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col justify-between animate-fade-in relative h-full min-h-0 font-['Inter',sans-serif] text-left select-none"
      data-node-id="1241:16299"
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 bg-white border-b border-[#e5e5e5] px-6 py-3 flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="1241:16300"
      >
        {/* Circular Back Arrow Button */}
        <button
          onClick={() => setCurrentTab('documents')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
          data-node-id="1241:16301"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        {/* Center Title */}
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px] text-center flex-1 mx-2"
          data-node-id="1241:16302"
        >
          {title}
        </h1>

        {/* Spacer for symmetry */}
        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Scrollable View Area - Document Preview (24px container padding) */}
      <div
        className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col items-center gap-6 w-full"
        data-node-id="1241:16305"
      >
        {/* Document Page Card Container */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] w-full text-center relative flex flex-col items-center"
          data-node-id="1241:16306"
        >
          <img
            src={docImage}
            alt={title}
            className="w-full h-auto object-contain block rounded-[16px]"
            data-node-id="1241:16307"
          />
        </div>
      </div>

      {/* Bottom Sticky Action Bar (24px padding) */}
      <div
        className="p-6 bg-[#f5f5f5] w-full shrink-0 border-t border-[#e5e5e5] flex flex-col items-center"
        data-node-id="1241:16310"
      >
        <button
          onClick={handleDownload}
          className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#d3efff] border border-[#b0deff] hover:bg-[#bce6ff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          data-node-id="1241:16312"
        >
          <span className="material-symbols-outlined text-[22px]">download</span>
          <span>{language === 'es' ? 'Descargar' : 'Download'}</span>
        </button>
      </div>
    </div>
  );
};
