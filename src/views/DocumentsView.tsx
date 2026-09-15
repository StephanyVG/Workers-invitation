import React from 'react';
import { useApp } from '../context/AppContext';

const imgLayer9 = "/assets/documents_empty/imgLayer9.svg";
const imgLayer3 = "/assets/documents_empty/imgLayer3.svg";
const imgEllipse311 = "/assets/documents_empty/imgEllipse311.svg";
const imgEllipse317 = "/assets/documents_empty/imgEllipse317.svg";
const imgEllipse318 = "/assets/documents_empty/imgEllipse318.svg";
const imgEllipse319 = "/assets/documents_empty/imgEllipse319.svg";
const imgEllipse316 = "/assets/documents_empty/imgEllipse316.svg";

export const DocumentsView: React.FC = () => {
  const { worker, language, setCurrentTab, setSelectedDocumentType, hasUploadedVisa, hasCompletedI9Review } = useApp();

  const isSigned = worker.hasSignedContract || worker.status === 'oferta_firmada';
  const hasDocuments = isSigned || worker.status === 'solicitud_visa' || worker.status === 'visa_aprobada' || worker.status === 'listo_para_viaje' || hasCompletedI9Review;

  if (hasDocuments) {
    return (
      <div
        className="bg-[#f5f5f5] flex-1 w-full flex flex-col items-center justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
        data-node-id="1241:16329"
      >
        {/* Sticky Top Header (1241:16329) */}
        <div
          className="sticky top-0 z-20 w-full bg-white px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0 shadow-2xs"
          data-node-id="1241:16330"
        >
          {/* Circular Back Arrow Button */}
          <button
            onClick={() => setCurrentTab('home')}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label={language === 'es' ? 'Regresar' : 'Back'}
            data-node-id="1241:16331"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px] flex-1 mx-2"
            data-node-id="1241:16332"
          >
            {language === 'es' ? 'Mis documentos' : 'My documents'}
          </h1>

          <div className="size-[44px] shrink-0" />
        </div>

        {/* Content Container Area with 24px container padding */}
        <div className="flex-1 p-6 w-full flex flex-col items-start gap-6" data-node-id="1241:16335">
          {/* Card 0: Formulario I-9 (Figma 3525:38102) */}
          {hasCompletedI9Review && (
            <div
              onClick={() => setCurrentTab('view_i9_document')}
              className="border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[1px_0px_16px_0px_rgba(0,0,0,0.05)] bg-white w-full flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
              data-node-id="3525:38102"
            >
              <div className="h-[187px] relative w-full overflow-hidden bg-slate-50 border-b border-[#e5e5e5]">
                <img
                  src="/I9.png"
                  alt={language === 'es' ? 'Formulario I-9' : 'Form I-9'}
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              <div className="p-5 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-black tracking-[-0.028px]">
                  {language === 'es' ? 'Formulario I-9' : 'Form I-9'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#525252] tracking-[-0.048px]">
                  {language === 'es' ? 'PDF • Firmado el 15 Apr, 2026' : 'PDF • Signed on [15 Apr, 2026]'}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentTab('view_i9_document');
                  }}
                  className="w-full h-[36px] px-3 py-1.5 bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
                >
                  {language === 'es' ? 'Ver documento' : 'See document'}
                </button>
              </div>
            </div>
          )}

          {/* Card 1: Job Offer */}
          <div
            onClick={() => setCurrentTab('view_signed_document')}
            className="border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[1px_0px_16px_0px_rgba(0,0,0,0.05)] bg-white w-full flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
            data-node-id="1241:16336"
          >
            <div className="h-[187px] relative w-full overflow-hidden bg-slate-50 border-b border-[#e5e5e5]">
              <img
                src="/Offer pdf.png"
                alt={language === 'es' ? 'Oferta de trabajo' : 'Job offer'}
                className="w-full h-full object-cover object-top block"
              />
            </div>

            <div className="p-5 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
              <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-black tracking-[-0.028px]">
                {language === 'es' ? 'Oferta de trabajo' : 'Job offer'}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#525252] tracking-[-0.048px]">
                {language === 'es' ? 'PDF • Recibido el 10 Apr, 2026' : 'PDF • Receive it on [10 Apr, 2026]'}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentTab('view_signed_document');
                }}
                className="w-full h-[36px] px-3 py-1.5 bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
              >
                {language === 'es' ? 'Ver documento' : 'See document'}
              </button>
            </div>
          </div>

          {/* Card 2: DS-160 Bar code (uses bar code.png) */}
          <div
            onClick={() => {
              setSelectedDocumentType('barcode');
              setCurrentTab('view_ds160_document');
            }}
            className="border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[1px_0px_16px_0px_rgba(0,0,0,0.05)] bg-white w-full flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
            data-node-id="1241:16345"
          >
            <div className="h-[187px] relative w-full overflow-hidden bg-slate-50 border-b border-[#e5e5e5]">
              <img
                src="/bar code.png"
                alt={language === 'es' ? 'Código de barras DS-160' : 'DS-160 Bar code'}
                className="w-full h-full object-cover object-top block"
              />
            </div>

            <div className="p-5 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
              <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-black tracking-[-0.028px]">
                {language === 'es' ? 'Código de barras DS-160' : 'DS-160 Bar code'}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#525252] tracking-[-0.048px]">
                {language === 'es' ? 'PDF • Subido el 11 Apr, 2026' : 'PDF • Uploaded on [11 Apr, 2026]'}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDocumentType('barcode');
                  setCurrentTab('view_ds160_document');
                }}
                className="w-full h-[36px] px-3 py-1.5 bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
              >
                {language === 'es' ? 'Ver documento' : 'See document'}
              </button>
            </div>
          </div>

          {/* Card 3: DS-160 Document (uses bar code.png) */}
          <div
            onClick={() => {
              setSelectedDocumentType('document');
              setCurrentTab('view_ds160_document');
            }}
            className="border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[1px_0px_16px_0px_rgba(0,0,0,0.05)] bg-white w-full flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
            data-node-id="1241:16355"
          >
            <div className="h-[187px] relative w-full overflow-hidden bg-slate-50 border-b border-[#e5e5e5]">
              <img
                src="/bar code.png"
                alt={language === 'es' ? 'Documento DS-160' : 'DS-160 Document'}
                className="w-full h-full object-cover object-top block"
              />
            </div>

            <div className="p-5 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
              <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-black tracking-[-0.028px]">
                {language === 'es' ? 'Documento DS-160' : 'DS-160 Document'}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#525252] tracking-[-0.048px]">
                {language === 'es' ? 'PDF • Subido el 11 Apr, 2026' : 'PDF • Uploaded on [11 Apr, 2026]'}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDocumentType('document');
                  setCurrentTab('view_ds160_document');
                }}
                className="w-full h-[36px] px-3 py-1.5 bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
              >
                {language === 'es' ? 'Ver documento' : 'See document'}
              </button>
            </div>
          </div>

          {/* Card 4: US Visa */}
          {hasUploadedVisa && (
            <div
              onClick={() => {
                setSelectedDocumentType('visa');
                setCurrentTab('view_ds160_document');
              }}
              className="border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[1px_0px_16px_0px_rgba(0,0,0,0.05)] bg-white w-full flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
              data-node-id="documents-visa-card"
            >
              <div className="h-[187px] relative w-full overflow-hidden bg-slate-50 border-b border-[#e5e5e5] flex items-center justify-center p-3">
                <img
                  src="/visa.png"
                  alt={language === 'es' ? 'Visa de EE. UU.' : 'US Visa'}
                  className="w-full h-full object-contain block"
                />
              </div>

              <div className="p-5 flex flex-col gap-2.5 text-left font-['Inter',sans-serif]">
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-black tracking-[-0.028px]">
                  {language === 'es' ? 'Visa de EE. UU.' : 'US Visa'}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#525252] tracking-[-0.048px]">
                  {language === 'es' ? 'PDF • Subido el 12 Apr, 2026' : 'PDF • Uploaded on [12 Apr, 2026]'}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDocumentType('visa');
                    setCurrentTab('view_ds160_document');
                  }}
                  className="w-full h-[36px] px-3 py-1.5 bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center mt-1"
                >
                  {language === 'es' ? 'Ver documento' : 'See document'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col items-center justify-between overflow-hidden animate-fade-in relative h-full min-h-0 select-none"
      data-node-id="2023:45431"
    >
      {/* Sticky Top Header (2023:45524) */}
      <div
        className="w-full bg-white px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-center shrink-0 shadow-2xs z-20"
        data-node-id="2023:45524"
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px]"
          data-node-id="I2023:45524;3490:907"
        >
          {language === 'es' ? 'Documentos' : 'Documents'}
        </h1>
      </div>

      {/* Main Empty State Content Container (2023:45434 / 2023:45533) */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-8 w-full my-auto"
        data-node-id="2023:45434"
      >
        <div className="h-[309px] w-[328px] relative flex flex-col items-center justify-center" data-node-id="2023:45533">
          {/* Document & Profile Badge Illustration (2023:45576) */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[100px] top-[calc(50%-67.5px)]" data-node-id="2023:45576">
            <div className="absolute contents inset-[10.15%_17.35%_10.13%_17.35%]" data-node-id="2023:45577">
              <div className="absolute inset-[12.34%_19.16%_12.38%_18.04%]" data-node-id="2023:45578">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer9} />
              </div>
              <div className="absolute inset-[10.15%_17.35%_10.13%_17.35%]" data-node-id="2023:45581">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
              </div>
            </div>
          </div>

          {/* Headline & Description (2023:45566) */}
          <div className="-translate-x-1/2 absolute flex flex-col gap-3 items-center left-1/2 top-[154.5px] w-[296px] text-center" data-node-id="2023:45566">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]" data-node-id="2023:45567">
              {language === 'es' ? 'Aún no hay documentos' : 'No documents yet'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373] text-center" data-node-id="2023:45568">
              {language === 'es'
                ? 'Tus documentos aparecerán en este espacio. Podrás revisarlos a lo largo de tu proceso.'
                : 'Your documents will appear in this space. You can review them throughout your process'}
            </p>
          </div>

          {/* Ground Shadow & Floating Accent Circles */}
          <div className="-translate-x-1/2 absolute h-[9px] left-[calc(50%-0.5px)] top-[139px] w-[117px]" data-node-id="2023:45569">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse311} />
          </div>
          <div className="absolute inset-[8.09%_26.22%_87.06%_69.21%]" data-node-id="2023:45570">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} />
          </div>
          <div className="absolute inset-[33.66%_73.17%_63.11%_23.78%]" data-node-id="2023:45571">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse318} />
          </div>
          <div className="absolute inset-[34.95%_26.83%_61.49%_69.82%]" data-node-id="2023:45572">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute inset-[15.86%_67.99%_80.58%_28.66%]" data-node-id="2023:45573">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute left-[163px] size-[16px] top-[17px]" data-node-id="2023:45574">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse316} />
          </div>
        </div>
      </div>
    </div>
  );
};
