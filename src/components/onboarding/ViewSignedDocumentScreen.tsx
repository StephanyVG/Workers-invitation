import React from 'react';
import { useApp } from '../../context/AppContext';

export const ViewSignedDocumentScreen: React.FC = () => {
  const { worker, language, setCurrentTab } = useApp();
  const workerFullName = worker.fullName || 'Guadalupe Ramírez';

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col justify-between animate-fade-in relative h-full min-h-0 font-['Inter',sans-serif] text-left"
      data-node-id="1411:1573"
    >
      {/* Sticky Top Header Row (Node 1411:1574) */}
      <div
        className="sticky top-0 z-20 bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="1411:1574"
      >
        {/* Circular Back Arrow Button */}
        <button
          onClick={() => setCurrentTab('documents')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
          data-node-id="I1411:1574;3529:1306"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        {/* Center Title */}
        <h1
          className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2"
          data-node-id="I1411:1574;3490:907"
        >
          {language === 'es' ? 'Oferta de trabajo' : 'Job Offer'}
        </h1>

        {/* Spacer for symmetry */}
        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Scrollable View Area - Document Preview (Node 1411:1575) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col items-center gap-4 w-full" data-node-id="1411:1575">
        {/* PDF Page Container (Node 1411:1576) */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[16px] overflow-hidden shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] w-full text-center relative flex flex-col items-center"
          data-node-id="1411:1576"
          data-name="PDF Page"
        >
          <img
            src="/Offer pdf.png"
            alt={language === 'es' ? 'Oferta de trabajo' : 'Job Offer'}
            className="w-full h-auto object-contain block rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};
