import React from 'react';
import { useApp } from '../../context/AppContext';

export const I9DocumentViewerScreen: React.FC = () => {
  const { language, setCurrentTab, addToast } = useApp();

  const title = language === 'es' ? 'Formulario I-9' : 'Form I-9';
  const docImage = '/I9 doc.png';
  const downloadFileName = 'Form-I9.png';

  const handleDownload = () => {
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
      data-node-id="3525:38093"
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 bg-white border-b border-[#e5e5e5] px-6 py-3 flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="3525:38094"
      >
        {/* Circular Back Arrow Button */}
        <button
          onClick={() => setCurrentTab('documents')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
          data-node-id="3525:38095"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        {/* Center Title */}
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] text-[#0038d0] tracking-[-0.08px] text-center flex-1 mx-2 truncate"
          data-node-id="3525:38096"
        >
          {title}
        </h1>

        {/* Spacer for symmetry */}
        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Scrollable View Area - Document Preview */}
      <div
        className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col items-center gap-6 w-full"
        data-node-id="3525:38097"
      >
        {/* Document Page Card Container */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] w-full text-center relative flex flex-col items-center"
          data-node-id="3525:38098"
        >
          <img
            src={docImage}
            alt={title}
            className="w-full h-auto object-contain block rounded-[16px]"
            data-node-id="3525:38099"
          />
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div
        className="p-6 bg-[#f5f5f5] w-full shrink-0 border-t border-[#e5e5e5] flex flex-col items-center"
        data-node-id="3525:38100"
      >
        <button
          onClick={handleDownload}
          className="w-full h-[52px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          data-node-id="3525:38101"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          <span>{language === 'es' ? 'Descargar documento' : 'Download document'}</span>
        </button>
      </div>
    </div>
  );
};
